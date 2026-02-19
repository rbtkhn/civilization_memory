/**
 * CIV–MEM chat engine: session + context load + LLM call + parse options.
 */

const OpenAI = require('openai').default;
const session = require('./session');
const loadContext = require('./load-content').loadContext;
const { getAvailableEntities, getEntityDisplayName } = require('./load-content');
const getSystemPrompt = require('./prompts/system');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/** Number of prior exchange pairs. Chat mode (slim): 3; else 5. */
function getMaxConversationTurns(chatMode, deepPath) {
  return chatMode && !deepPath ? 3 : 5;
}

const OPTIONS_REGEX = /OPTIONS:\s*\n((?:\s*[A-H]\s*—\s*.+\n?)+)/i;
const OPTIONS_REGEX_CHAT = /OPTIONS:\s*\n((?:\s*[A-D]\s*—\s*.+\n?)+)/i;

/** CHAT–MODE–CONTRACT §11: combined framing + disclaimer (once per session after first substantive reply). */
const CHAT_FRAMING_LINE = 'Short answers here; tap More for full Codex analysis. — Summaries and quick angles from the Civilizational Memory Codex.';

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

const FALLBACK_OPTIONS_CHAT = [
  { letter: 'A', label: 'More / Full answer' },
  { letter: 'B', label: 'Other angle / Different perspective' },
  { letter: 'C', label: 'Switch entity / New topic' },
  { letter: 'D', label: 'Done / Summarize' },
];

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

const isChatMode = () => process.env.CHAT_MODE === '1';

const DEEP_PATH_PHRASES = /\b(more|full answer|full analysis|elaborate|expand|dive deeper|explain further)\b/i;
function isDeepPathTrigger(message, sess) {
  if (!message || typeof message !== 'string') return false;
  const trimmed = message.trim().toLowerCase();
  if (trimmed.length > 1 && DEEP_PATH_PHRASES.test(trimmed)) return true;
  if ((trimmed === 'a' || trimmed === 'A') && sess.lastOptions && sess.lastOptions[0]) {
    const label = (sess.lastOptions[0].label || '').toLowerCase();
    if (/more|full answer/.test(label)) return true;
  }
  return false;
}

async function run(platform, userId, message) {
  const sess = session.get(platform, userId);
  let entity = sess.entity;
  let mode = sess.mode || 'STATE';

  // Help and /start: fixed message, no LLM; one button to start
  if (typeof message === 'string') {
    const t = message.trim().toLowerCase();
    if (t === '/start' || t === 'help') {
      const helpOptions = [{ letter: 'A', id: '__start', label: 'Start — choose mode and entity' }];
      return {
        text: 'This is the CIV–MEM bot. Send "hi" to choose mode (STATE or SCHOLAR) and entity, then e.g. "Russia update" or "Learn about Russia". Tap the buttons for options.',
        options: helpOptions,
        entity,
        mode,
      };
    }
  }

  // Greeting: "hi", "hello", or tap Start — ask which mode (multiple choice), no LLM
  if (typeof message === 'string' && (isGreeting(message) || message.trim() === '__start')) {
    session.set(platform, userId, { awaitingModeChoice: true });
    return {
      text: 'Which mode do you want to use?',
      options: MODE_CHOICE_OPTIONS,
      modeChoice: true,
      entity,
      mode,
    };
  }

  // After "Which mode?": treat single letter A/B as mode choice (fixes typing "b" for SCHOLAR)
  if (sess.awaitingModeChoice && typeof message === 'string') {
    const t = message.trim().toLowerCase();
    if (t === 'a' || t === 'b') {
      const newMode = t === 'a' ? 'STATE' : 'SCHOLAR';
      session.set(platform, userId, { awaitingModeChoice: false, mode: newMode });
      return {
        text: 'Which entity do you want to focus on?',
        options: getEntityChoiceOptions(),
        entityChoice: true,
        entity,
        mode: newMode,
      };
    }
  }

  // Internal: user chose mode from buttons — ask which entity (multiple choice)
  if (typeof message === 'string' && (message === '__mode:STATE' || message === '__mode:SCHOLAR')) {
    mode = message === '__mode:STATE' ? 'STATE' : 'SCHOLAR';
    session.set(platform, userId, { awaitingModeChoice: false, mode });
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
      const fallback = isChatMode()
        ? FALLBACK_OPTIONS_CHAT
        : (mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE);
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
    const displayName = getEntityDisplayName(entity);
    const fallback = isChatMode()
      ? FALLBACK_OPTIONS_CHAT
      : (mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE);
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
    const fallbackForEntity = isChatMode()
      ? FALLBACK_OPTIONS_CHAT
      : (mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE);
    if (resolved) {
      entity = resolved;
      session.set(platform, userId, { entity });
      const displayName = getEntityDisplayName(entity);
      const hint = mode === 'STATE' ? ` Send "${displayName} update" or ask a question.` : ` Send "Learn about ${displayName}" or ask a historical question.`;
      return {
        text: `Entity set to ${displayName}.${hint}`,
        options: fallbackForEntity,
        entity,
        mode,
      };
    }
    return {
      text: `Unknown entity "${name}". Use Russia, Persia, or China.`,
      options: fallbackForEntity,
      entity: sess.entity,
      mode,
    };
  }

  // Chat mode: option C "Switch entity / New topic" → show entity picker (no LLM)
  if (isChatMode() && typeof message === 'string') {
    const trimmed = message.trim().toLowerCase();
    if (trimmed === 'c' && sess.lastOptions && sess.lastOptions[2]) {
      const labelC = (sess.lastOptions[2].label || '').toLowerCase();
      if (/switch entity|new topic/.test(labelC)) {
        return {
          text: 'Which entity do you want to switch to?',
          options: getEntityChoiceOptions(),
          entityChoice: true,
          entity,
          mode,
        };
      }
    }
    // Chat mode: option D "Done / Summarize" → session closure, one button to start again (no LLM)
    if (trimmed === 'd' && sess.lastOptions && sess.lastOptions[3]) {
      const labelD = (sess.lastOptions[3].label || '').toLowerCase();
      if (/done|summarize/.test(labelD)) {
        return {
          text: 'Session closed. Tap below to start a new conversation.',
          options: [{ letter: 'A', id: '__start', label: 'Start again — choose mode and entity' }],
          entity,
          mode,
        };
      }
    }
  }

  const inferredEntity = session.inferEntityFromMessage(message);
  if (inferredEntity) {
    entity = inferredEntity;
    session.set(platform, userId, { entity });
  }

  const chatMode = isChatMode();
  const deepPath = chatMode && isDeepPathTrigger(message, sess);
  const slim = chatMode && !deepPath;

  const loaded = loadContext(entity, mode, { slim });
  const { stateContent, scholarContent, memRelevanceContent } = loaded;

  const systemPrompt = getSystemPrompt(entity, mode, { chatMode, deepPath, platform });
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

  const optionsInstruction = chatMode ? '4 options (A–D)' : '8 options (A–H)';
  let userContent = message;
  if (typeof message === 'string') {
    const trimmed = message.trim();
    const isOptionSelect = trimmed.length <= 2 && (chatMode ? /^[A-Da-d]$/.test(trimmed) : /^[A-Ha-h]$/.test(trimmed));
    if (isOptionSelect) {
      const ctxLabel = mode === 'SCHOLAR' ? 'SCHOLAR and MEM–RELEVANCE' : 'STATE and MEM–RELEVANCE';
      userContent = chatMode
        ? `User selected option ${trimmed.toUpperCase()}. Generate the response for that option using the ${ctxLabel} context above, then output the next ${optionsInstruction} in the exact format: OPTIONS: then A — ..., B — ..., C — ..., D — ...`
        : `User selected option ${trimmed.toUpperCase()}. Generate the response for that option using the ${ctxLabel} context above, then output the next 8 options (A–H) with labels grounded in that context.`;
    } else if (mode === 'STATE') {
      if (/^\s*(russia|iran|persia|china)\s+update\s*$/i.test(trimmed) || /^\s*(\w+)\s+update\s*$/i.test(trimmed)) {
        userContent = chatMode
          ? `User requested an update for ${entity}. Using ONLY the STATE file and MEM–RELEVANCE context above: (1) Summarise the current material options and key stability picture in 40–60 words; first sentence = headline. (2) Then output exactly ${optionsInstruction} in format: OPTIONS: then A — More / Full answer, B — ..., C — ..., D — ...`
          : `User requested an update for ${entity}. Using ONLY the STATE file and MEM–RELEVANCE context above: (1) Summarise the current material options (e.g. Option A: Endurance Through Attrition) and key stability/binding-constraint picture. (2) Then output the 8 options (A–H) with labels that reference specific options, MEMs, or patterns from the context.`;
      } else if (/^\s*decision\s+points\s*$/i.test(trimmed)) {
        userContent = chatMode
          ? `Run the Decision Points activity using the STATE content above. Summarise briefly (40–60 words), then output exactly ${optionsInstruction}.`
          : `Run the Decision Points activity using the STATE content above: identify the current decision point(s), material options, binding constraints, and discriminating evidence. Summarise briefly (60–100 words), then output the 8 options (A–H) with labels grounded in the context.`;
      }
    } else if (mode === 'SCHOLAR') {
      if (/^\s*learn\s+about\s+(.+)\s*$/i.test(trimmed) || /^\s*(russia|iran|persia|china)\s+learn\s*$/i.test(trimmed)) {
        userContent = chatMode
          ? `User requested a learning summary for ${entity}. Using ONLY the SCHOLAR file and MEM–RELEVANCE context above: (1) Synthesise key patterns in 40–60 words; first sentence = headline. (2) Then output exactly ${optionsInstruction}.`
          : `User requested a learning summary for ${entity}. Using ONLY the SCHOLAR file and MEM–RELEVANCE context above: (1) Synthesise key patterns, RLLs, and historical constraints. (2) Then output the 8 options (A–H) with labels that reference specific MEMs, RLLs, or patterns from the context.`;
      }
    }
  }

  const maxTurns = getMaxConversationTurns(chatMode, deepPath);
  const history = (sess.messages || []).slice(-(maxTurns * 2));
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
  const usage = response.usage
    ? {
        prompt_tokens: response.usage.prompt_tokens,
        completion_tokens: response.usage.completion_tokens,
        total_tokens: response.usage.total_tokens,
      }
    : null;

  const optionsRegex = chatMode ? OPTIONS_REGEX_CHAT : OPTIONS_REGEX;
  const optionLetterRange = chatMode ? '[A-D]' : '[A-H]';
  const optionsMatch = raw.match(optionsRegex);
  let text = raw;
  let options = [];

  if (optionsMatch) {
    text = raw.slice(0, optionsMatch.index).trim();
    const optionsBlock = optionsMatch[1];
    const lineRe = new RegExp(`^\\s*${optionLetterRange}\\s*—\\s*`);
    const lines = optionsBlock.split('\n').filter((l) => lineRe.test(l));
    options = lines.map((line) => {
      const match = line.match(new RegExp(`^\\s*([${chatMode ? 'A-D' : 'A-H'}])\\s*—\\s*(.+)$`));
      return match ? { letter: match[1], label: match[2].trim() } : null;
    }).filter(Boolean);
    if (chatMode && options.length > 4) options = options.slice(0, 4);
  }

  const minOptions = chatMode ? 4 : 8;
  if (options.length < minOptions && text.length > 0) {
    options = chatMode ? FALLBACK_OPTIONS_CHAT : (mode === 'SCHOLAR' ? FALLBACK_OPTIONS_SCHOLAR : FALLBACK_OPTIONS_STATE);
  }

  if (chatMode && !sess.framingShown && text.length > 0) {
    text = text + '\n\n' + CHAT_FRAMING_LINE;
    session.set(platform, userId, { framingShown: true });
  }

  const newHistory = [
    ...(sess.messages || []),
    { role: 'user', content: userContent },
    { role: 'assistant', content: raw },
  ];
  const trimmedHistory = newHistory.slice(-(maxTurns * 2));
  session.set(platform, userId, {
    messages: trimmedHistory,
    lastOptions: options,
  });

  return { text, options, entity, mode, usage };
}

module.exports = { run };
