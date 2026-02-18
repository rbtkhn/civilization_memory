/**
 * CIV–MEM chat engine: session + context load + LLM call + parse options.
 */

const OpenAI = require('openai').default;
const session = require('./session');
const loadContext = require('./load-content').loadContext;
const { getAvailableEntities, getEntityDisplayName } = require('./load-content');
const getSystemPrompt = require('./prompts/system');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/** Number of prior exchange pairs (user + assistant) to send to the LLM. 5 = last 5 turns = 10 messages. */
const MAX_CONVERSATION_TURNS = 5;

const OPTIONS_REGEX = /OPTIONS:\s*\n((?:\s*[A-H]\s*—\s*.+\n?)+)/i;

const FALLBACK_OPTIONS_STATE = 'ABCDEFGH'.split('').map((letter) => ({
  letter,
  label: {
    A: 'Legitimacy and institutional continuity',
    B: 'Power and structural constraint',
    C: 'Liability and mechanism',
    D: 'Three-perspective synthesis',
    E: 'Historical precedent',
    F: 'Forward projection',
    G: 'Cross-entity impact',
    H: 'Assessment closure',
  }[letter],
}));

const FALLBACK_OPTIONS_SCHOLAR = 'ABCDEFGH'.split('').map((letter) => ({
  letter,
  label: {
    A: 'Civilizational / legitimacy perspective',
    B: 'Power / structural perspective',
    C: 'Liability / mechanism perspective',
    D: 'Three-perspective synthesis',
    E: 'Earlier era (backward traversal)',
    F: 'Later era (forward traversal)',
    G: 'Cross-civilization comparison',
    H: 'Synthesis / session closure',
  }[letter],
}));

function getEntityChoiceOptions() {
  const entities = getAvailableEntities();
  return entities.map((entityId, i) => ({
    letter: String.fromCharCode(65 + i),
    label: getEntityDisplayName(entityId),
    id: `__entity:${entityId}`,
  }));
}

const MODE_CHOICE_OPTIONS = [
  { letter: 'A', id: '__mode:STATE', label: 'STATE — present-oriented decision support' },
  { letter: 'B', id: '__mode:SCHOLAR', label: 'SCHOLAR — past-oriented learning' },
];

function isGreeting(text) {
  if (!text || typeof text !== 'string') return false;
  const t = text.trim().toLowerCase().replace(/[.!?]+$/, '');
  return /^(hi|hello|hey|good morning|good afternoon|good evening|hi there|hello there|greetings?|howdy|sup|yo)$/.test(t);
}

async function run(platform, userId, message) {
  const sess = session.get(platform, userId);
  let entity = sess.entity;
  let mode = sess.mode || 'STATE';

  // Greeting: "hi", "hello", etc. — ask which mode (multiple choice), no LLM
  if (typeof message === 'string' && isGreeting(message)) {
    return {
      text: 'Which mode do you want to use?',
      options: MODE_CHOICE_OPTIONS,
      modeChoice: true,
      entity,
      mode,
    };
  }

  // Internal: user chose mode from buttons — ask which entity (multiple choice)
  if (typeof message === 'string' && (message === '__mode:STATE' || message === '__mode:SCHOLAR')) {
    mode = message === '__mode:STATE' ? 'STATE' : 'SCHOLAR';
    session.set(platform, userId, { mode });
    return {
      text: 'Which entity do you want to focus on?',
      options: getEntityChoiceOptions(),
      entityChoice: true,
      entity,
      mode,
    };
  }

  // Internal: user chose entity from buttons — set entity and confirm
  if (typeof message === 'string' && message.startsWith('__entity:')) {
    const entityId = message.slice(9).trim();
    const available = getAvailableEntities();
    if (available.includes(entityId)) {
      entity = entityId;
      session.set(platform, userId, { entity });
      const displayName = getEntityDisplayName(entity);
      const fallback = mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE;
      const hint = mode === 'STATE'
        ? ` Send "${displayName} update" or "Decision Points" to get started.`
        : ` Send "Learn about ${displayName}" or ask a historical question.`;
      return {
        text: `You're in ${mode} mode with ${displayName}.${hint}`,
        options: fallback,
        entity,
        mode,
      };
    }
  }

  // Mode switch: "state", "scholar", "/state", "/scholar", "switch to state/scholar" — set mode and return confirmation (no LLM)
  const modeSwitch = typeof message === 'string' && session.parseModeSwitch(message);
  if (modeSwitch) {
    mode = modeSwitch;
    session.set(platform, userId, { mode });
    const displayName = { RUSSIA: 'Russia', PERSIA: 'Persia', CHINA: 'China' }[entity] || entity;
    const fallback = mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE;
    const stateHint = mode === 'STATE' ? ` Send "${displayName} update" or "Decision Points".` : '';
    const scholarHint = mode === 'SCHOLAR' ? ` Send "Learn about ${displayName}" or ask a historical question.` : '';
    return {
      text: `Mode set to ${mode}.${stateHint}${scholarHint}`,
      options: fallback,
      entity,
      mode,
    };
  }

  // Explicit entity command: "entity Russia", "/entity Persia" — set entity and return confirmation (no LLM)
  const entityCmdMatch = typeof message === 'string' && message.match(/^(?:\/entity|entity)\s+(.+)$/i);
  if (entityCmdMatch) {
    const name = entityCmdMatch[1].trim();
    const resolved = session.resolveEntityName(name);
    if (resolved) {
      entity = resolved;
      session.set(platform, userId, { entity });
      const displayName = { RUSSIA: 'Russia', PERSIA: 'Persia', CHINA: 'China' }[entity] || entity;
      const fallback = mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE;
      const hint = mode === 'STATE' ? ` Send "${displayName} update" or ask a question.` : ` Send "Learn about ${displayName}" or ask a historical question.`;
      return {
        text: `Entity set to ${displayName}.${hint}`,
        options: fallback,
        entity,
        mode,
      };
    }
    const fallback = mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE;
    return {
      text: `Unknown entity "${name}". Use Russia, Persia, or China.`,
      options: fallback,
      entity: sess.entity,
      mode,
    };
  }

  const inferredEntity = session.inferEntityFromMessage(message);
  if (inferredEntity) {
    entity = inferredEntity;
    session.set(platform, userId, { entity });
  }

  const loaded = loadContext(entity, mode);
  const { stateContent, scholarContent, memRelevanceContent } = loaded;

  const systemPrompt = getSystemPrompt(entity, mode);
  const contextBlock = mode === 'SCHOLAR'
    ? `
## SCHOLAR file (excerpt)
${scholarContent}

## MEM–RELEVANCE (excerpt)
${memRelevanceContent}
`
    : `
## STATE file (excerpt)
${stateContent}

## MEM–RELEVANCE (excerpt)
${memRelevanceContent}
`;

  const systemContent = `${systemPrompt}\n\n## Loaded context for ${entity} (${mode} mode)\n${contextBlock}`;

  let userContent = message;
  if (typeof message === 'string') {
    const trimmed = message.trim();
    if (trimmed.length <= 2 && /^[A-Ha-h]$/.test(trimmed)) {
      const ctxLabel = mode === 'SCHOLAR' ? 'SCHOLAR and MEM–RELEVANCE' : 'STATE and MEM–RELEVANCE';
      userContent = `User selected option ${trimmed.toUpperCase()}. Generate the response for that option using the ${ctxLabel} context above, then output the next 8 options (A–H) with labels grounded in that context.`;
    } else if (mode === 'STATE') {
      if (/^\s*(russia|iran|persia|china)\s+update\s*$/i.test(trimmed) || /^\s*(\w+)\s+update\s*$/i.test(trimmed)) {
        userContent = `User requested an update for ${entity}. Using ONLY the STATE file and MEM–RELEVANCE context above: (1) Summarise the current material options (e.g. Option A: Endurance Through Attrition) and key stability/binding-constraint picture. (2) Then output the 8 options (A–H) with labels that reference specific options, MEMs, or patterns from the context.`;
      } else if (/^\s*decision\s+points\s*$/i.test(trimmed)) {
        userContent = `Run the Decision Points activity using the STATE content above: identify the current decision point(s), material options, binding constraints, and discriminating evidence. Summarise briefly (60–100 words), then output the 8 options (A–H) with labels grounded in the context.`;
      }
    } else if (mode === 'SCHOLAR') {
      if (/^\s*learn\s+about\s+(.+)\s*$/i.test(trimmed) || /^\s*(russia|iran|persia|china)\s+learn\s*$/i.test(trimmed)) {
        userContent = `User requested a learning summary for ${entity}. Using ONLY the SCHOLAR file and MEM–RELEVANCE context above: (1) Synthesise key patterns, RLLs, and historical constraints. (2) Then output the 8 options (A–H) with labels that reference specific MEMs, RLLs, or patterns from the context.`;
      }
    }
  }

  // Conversation history: last N turns so the model can refer to prior exchange
  const history = sess.messages || [];
  const apiMessages = [
    { role: 'system', content: systemContent },
    ...history,
    { role: 'user', content: userContent },
  ];

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: apiMessages,
    max_tokens: 1600,
    temperature: 0.4,
  });

  const raw = response.choices[0]?.message?.content || '';
  const optionsMatch = raw.match(OPTIONS_REGEX);
  let text = raw;
  let options = [];

  if (optionsMatch) {
    text = raw.slice(0, optionsMatch.index).trim();
    const optionsBlock = optionsMatch[1];
    const lines = optionsBlock.split('\n').filter((l) => /^\s*[A-H]\s*—/.test(l));
    options = lines.map((line) => {
      const match = line.match(/^\s*([A-H])\s*—\s*(.+)$/);
      return match ? { letter: match[1], label: match[2].trim() } : null;
    }).filter(Boolean);
  }

  // Fallback: if we have text but no parsed options, show A–H with generic labels so buttons still appear
  if (options.length < 8 && text.length > 0) {
    options = mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE;
  }

  // Append this turn to session history; keep only last MAX_CONVERSATION_TURNS pairs (user + assistant)
  const newHistory = [
    ...history,
    { role: 'user', content: userContent },
    { role: 'assistant', content: raw },
  ];
  const trimmedHistory = newHistory.slice(-(MAX_CONVERSATION_TURNS * 2));
  session.set(platform, userId, { messages: trimmedHistory });

  return { text, options, entity, mode };
}

module.exports = { run };
