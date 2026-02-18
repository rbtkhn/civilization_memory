/**
 * Load CIV–MEM content from repo for a given entity.
 * CIVMEM_CONTENT_ROOT must point to repo root (content/, docs/, .cursor/).
 */

const fs = require('fs');
const path = require('path');

const MAX_STATE_CHARS = 22000;
const MAX_RELEVANCE_CHARS = 6000;

function getContentRoot() {
  const root = process.env.CIVMEM_CONTENT_ROOT;
  if (root) return path.resolve(root);
  return path.resolve(__dirname, '../../..');
}

function loadStateFile(entity, contentRoot) {
  const civPath = path.join(contentRoot, 'content', 'civilizations', entity);
  const statePath = path.join(civPath, `CIV–STATE–${entity}.md`);
  try {
    const raw = fs.readFileSync(statePath, 'utf8');
    return raw.length > MAX_STATE_CHARS
      ? raw.slice(0, MAX_STATE_CHARS) + '\n\n[... truncated for context ...]'
      : raw;
  } catch (err) {
    return `[Could not load STATE file: ${statePath} — ${err.message}]`;
  }
}

function loadMemRelevance(entity, contentRoot) {
  const civPath = path.join(contentRoot, 'content', 'civilizations', entity);
  const relPath = path.join(civPath, `MEM–RELEVANCE–${entity}.md`);
  try {
    const raw = fs.readFileSync(relPath, 'utf8');
    return raw.length > MAX_RELEVANCE_CHARS
      ? raw.slice(0, MAX_RELEVANCE_CHARS) + '\n\n[... truncated ...]'
      : raw;
  } catch (err) {
    return `[MEM–RELEVANCE not found or unreadable for ${entity}]`;
  }
}

function loadContext(entity) {
  const contentRoot = getContentRoot();
  const state = loadStateFile(entity, contentRoot);
  const memRelevance = loadMemRelevance(entity, contentRoot);
  return {
    stateContent: state,
    memRelevanceContent: memRelevance,
    entity,
  };
}

module.exports = { loadContext, getContentRoot };
