/**
 * Append-only Decision Record log for relay/transfer actions (essay: "Publish Decision Records").
 * One JSON object per line (NDJSON). Path: {CIVMEM_CONTENT_ROOT}/logs/transfer.ndjson
 */

const fs = require('fs');
const path = require('path');

function getLogPath() {
  const root = process.env.CIVMEM_CONTENT_ROOT;
  const base = root ? path.resolve(root) : path.resolve(__dirname, '../../..');
  return path.join(base, 'logs', 'transfer.ndjson');
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (err) {
    // ignore
  }
}

/**
 * Append one transfer record. Safe to call.
 * @param {object} record — { action: 'relay_to_scholar'|'relay_to_state', entity, summary }
 */
function append(record) {
  try {
    const logPath = getLogPath();
    ensureDir(logPath);
    const line = JSON.stringify({
      timestamp: new Date().toISOString(),
      ...record,
    }) + '\n';
    fs.appendFileSync(logPath, line);
  } catch (err) {
    console.error('Transfer log append failed:', err.message);
  }
}

module.exports = { append, getLogPath };
