/**
 * In-memory session store for chat users.
 * Key: platform + userId (e.g. "telegram:12345")
 * Value: { entity, mode, updatedAt }
 */

const sessions = new Map();

const ENTITY_MAP = {
  russia: 'RUSSIA',
  russian: 'RUSSIA',
  iran: 'PERSIA',
  persia: 'PERSIA',
  persian: 'PERSIA',
  china: 'CHINA',
  chinese: 'CHINA',
};

function sessionKey(platform, userId) {
  return `${platform}:${userId}`;
}

function get(platform, userId) {
  const key = sessionKey(platform, userId);
  return sessions.get(key) || { entity: 'RUSSIA', mode: 'STATE', updatedAt: Date.now() };
}

function set(platform, userId, data) {
  const key = sessionKey(platform, userId);
  const existing = sessions.get(key) || {};
  sessions.set(key, {
    ...existing,
    ...data,
    updatedAt: Date.now(),
  });
}

function inferEntityFromMessage(text) {
  const lower = (text || '').toLowerCase();
  for (const [keyword, civ] of Object.entries(ENTITY_MAP)) {
    if (lower.includes(keyword)) return civ;
  }
  return null;
}

/** Resolve "Russia", "russia", "Persia" etc. to canonical entity (RUSSIA, PERSIA) or null. */
function resolveEntityName(input) {
  if (!input || typeof input !== 'string') return null;
  const lower = input.trim().toLowerCase();
  for (const [keyword, civ] of Object.entries(ENTITY_MAP)) {
    if (lower === keyword || lower === civ.toLowerCase()) return civ;
  }
  return null;
}

/** Parse mode switch: "state", "scholar", "/state", "/scholar", "switch to state", "switch to scholar" → 'STATE' | 'SCHOLAR' | null */
function parseModeSwitch(text) {
  if (!text || typeof text !== 'string') return null;
  const lower = text.trim().toLowerCase();
  if (/^(?:\/)?state\s*$/.test(lower) || /^switch\s+to\s+state\s*$/.test(lower)) return 'STATE';
  if (/^(?:\/)?scholar\s*$/.test(lower) || /^switch\s+to\s+scholar\s*$/.test(lower)) return 'SCHOLAR';
  return null;
}

module.exports = { get, set, inferEntityFromMessage, resolveEntityName, parseModeSwitch, ENTITY_MAP };
