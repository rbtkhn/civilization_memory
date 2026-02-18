/**
 * Append-only archive of Telegram bot activity (user message + bot response).
 * One JSON object per line (NDJSON). Path from TELEGRAM_ACTIVITY_LOG or default logs/telegram-activity.ndjson.
 */

const fs = require('fs');
const path = require('path');

function getLogPath() {
  const env = process.env.TELEGRAM_ACTIVITY_LOG;
  if (env === '' || env === '0' || env === 'false') return null;
  if (env) return path.resolve(env);
  return path.resolve(__dirname, '../logs/telegram-activity.ndjson');
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (err) {
    // ignore if already exists
  }
}

/**
 * Append one exchange to the activity archive. Safe to call; no-op if logging disabled.
 * @param {object} record — { timestamp, platform, sessionKey, chatId, userMessage, responseText, options, entity, mode }
 */
function append(record) {
  const logPath = getLogPath();
  if (!logPath) return;
  try {
    ensureDir(logPath);
    const line = JSON.stringify(record) + '\n';
    fs.appendFileSync(logPath, line);
  } catch (err) {
    console.error('Activity log append failed:', err.message);
  }
}

module.exports = { append, getLogPath };
