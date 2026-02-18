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

module.exports = { get, set, inferEntityFromMessage, ENTITY_MAP };
