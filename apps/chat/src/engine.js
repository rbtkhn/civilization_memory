/**
 * CIV–MEM chat engine: session + context load + LLM call + parse options.
 */

const OpenAI = require('openai').default;
const session = require('./session');
const loadContext = require('./load-content').loadContext;
const getSystemPrompt = require('./prompts/system');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OPTIONS_REGEX = /OPTIONS:\s*\n((?:\s*[A-H]\s*—\s*.+\n?)+)/i;

async function run(platform, userId, message) {
  const sess = session.get(platform, userId);
  let entity = sess.entity;

  const inferredEntity = session.inferEntityFromMessage(message);
  if (inferredEntity) {
    entity = inferredEntity;
    session.set(platform, userId, { entity });
  }

  const { stateContent, memRelevanceContent } = loadContext(entity);

  const systemPrompt = getSystemPrompt(entity);
  const contextBlock = `
## STATE file (excerpt)
${stateContent}

## MEM–RELEVANCE (excerpt)
${memRelevanceContent}
`;

  const systemContent = `${systemPrompt}\n\n## Loaded context for ${entity}\n${contextBlock}`;

  const userContent =
    typeof message === 'string' && message.length <= 2 && /^[A-Ha-h]$/.test(message.trim())
      ? `User selected option ${message.toUpperCase()}. Generate the response for that option, then output the next 8 options (A–H) in the same format as above.`
      : message;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemContent },
      { role: 'user', content: userContent },
    ],
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

  return { text, options, entity };
}

module.exports = { run };
