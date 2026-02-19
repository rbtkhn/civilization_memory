/**
 * Load CIV–MEM content from repo for a given entity.
 * CIVMEM_CONTENT_ROOT must point to repo root (content/, docs/, .cursor/).
 */

const fs = require('fs');
const path = require('path');

const MAX_STATE_CHARS = 22000;
const MAX_STATE_INTRO_CHARS = 6000;   // Entity, strategic position (Sections I–III)
const MAX_STATE_OPTIONS_CHARS = 16000; // Material Options (Section IV) so model sees real options
const MAX_SCHOLAR_CHARS = 18000;       // SCHOLAR file (RLLs, syntheses, ENTRY excerpts)
const MAX_RELEVANCE_CHARS = 6000;

// Slim context for chat mode (CHAT–MODE–CONTRACT §4)
const SLIM_STATE_INTRO_CHARS = 4000;
const SLIM_STATE_OPTIONS_CHARS = 8000;
const SLIM_SCHOLAR_CHARS = 10000;
const SLIM_RELEVANCE_CHARS = 4000;

function getContentRoot() {
  const root = process.env.CIVMEM_CONTENT_ROOT;
  if (root) return path.resolve(root);
  return path.resolve(__dirname, '../../..');
}

function loadStateFile(entity, contentRoot, slim = false) {
  const introChars = slim ? SLIM_STATE_INTRO_CHARS : MAX_STATE_INTRO_CHARS;
  const optionsChars = slim ? SLIM_STATE_OPTIONS_CHARS : MAX_STATE_OPTIONS_CHARS;
  const totalChars = slim ? introChars + optionsChars + 500 : MAX_STATE_CHARS;
  const civPath = path.join(contentRoot, 'content', 'civilizations', entity);
  const statePath = path.join(civPath, `CIV–STATE–${entity}.md`);
  try {
    const raw = fs.readFileSync(statePath, 'utf8');
    const optionsMarker = raw.indexOf('IV. MATERIAL OPTIONS');
    if (optionsMarker !== -1) {
      const introEnd = optionsMarker < introChars ? optionsMarker : introChars;
      const intro = raw.slice(0, introEnd);
      const optionsBlock = raw.slice(optionsMarker, optionsMarker + optionsChars);
      const join = optionsMarker >= introChars ? '\n\n[... sections omitted ...]\n\n' : '\n\n';
      return intro + join + optionsBlock + '\n\n[... truncated for context ...]';
    }
    return raw.length > totalChars
      ? raw.slice(0, totalChars) + '\n\n[... truncated for context ...]'
      : raw;
  } catch (err) {
    return `[Could not load STATE file: ${statePath} — ${err.message}]`;
  }
}

function loadMemRelevance(entity, contentRoot, slim = false) {
  const maxChars = slim ? SLIM_RELEVANCE_CHARS : MAX_RELEVANCE_CHARS;
  const civPath = path.join(contentRoot, 'content', 'civilizations', entity);
  const relPath = path.join(civPath, `MEM–RELEVANCE–${entity}.md`);
  try {
    const raw = fs.readFileSync(relPath, 'utf8');
    return raw.length > maxChars
      ? raw.slice(0, maxChars) + '\n\n[... truncated ...]'
      : raw;
  } catch (err) {
    return `[MEM–RELEVANCE not found or unreadable for ${entity}]`;
  }
}

function loadScholarFile(entity, contentRoot, slim = false) {
  const maxChars = slim ? SLIM_SCHOLAR_CHARS : MAX_SCHOLAR_CHARS;
  const civPath = path.join(contentRoot, 'content', 'civilizations', entity);
  const scholarPath = path.join(civPath, `CIV–SCHOLAR–${entity}.md`);
  try {
    const raw = fs.readFileSync(scholarPath, 'utf8');
    return raw.length > maxChars
      ? raw.slice(0, maxChars) + '\n\n[... truncated for context ...]'
      : raw;
  } catch (err) {
    return `[Could not load SCHOLAR file: ${scholarPath} — ${err.message}]`;
  }
}

/** Load context for the given entity and mode. mode: 'STATE' | 'SCHOLAR'. opts.slim = true for chat mode (smaller slices). */
function loadContext(entity, mode = 'STATE', opts = {}) {
  const slim = opts.slim === true;
  const contentRoot = getContentRoot();
  const memRelevance = loadMemRelevance(entity, contentRoot, slim);
  if (mode === 'SCHOLAR') {
    const scholarContent = loadScholarFile(entity, contentRoot, slim);
    return {
      stateContent: '',
      scholarContent,
      memRelevanceContent: memRelevance,
      entity,
      mode: 'SCHOLAR',
    };
  }
  const stateContent = loadStateFile(entity, contentRoot, slim);
  return {
    stateContent,
    scholarContent: '',
    memRelevanceContent: memRelevance,
    entity,
    mode: 'STATE',
  };
}

/** Return list of entity IDs that have a STATE file (for mode/entity choice). Sorted alphabetically. */
function getAvailableEntities() {
  const contentRoot = getContentRoot();
  const civPath = path.join(contentRoot, 'content', 'civilizations');
  try {
    const entries = fs.readdirSync(civPath, { withFileTypes: true });
    const entities = entries
      .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
      .filter((d) => {
        const statePath = path.join(civPath, d.name, `CIV–STATE–${d.name}.md`);
        try {
          fs.accessSync(statePath);
          return true;
        } catch {
          return false;
        }
      })
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b));
    return entities;
  } catch (err) {
    return ['RUSSIA', 'PERSIA', 'CHINA']; // fallback if readdir fails
  }
}

/** Human-readable display name for an entity ID. */
function getEntityDisplayName(entityId) {
  const map = {
    RUSSIA: 'Russia',
    PERSIA: 'Persia',
    CHINA: 'China',
    INDIA: 'India',
    ROME: 'Rome',
    ISLAM: 'Islam',
    AFRICA: 'Africa',
    AMERICA: 'America',
    ANGLIA: 'Anglia',
    FRANCE: 'France',
    GERMANY: 'Germany',
  };
  return map[entityId] || entityId.charAt(0) + entityId.slice(1).toLowerCase();
}

module.exports = { loadContext, getContentRoot, loadScholarFile, getAvailableEntities, getEntityDisplayName };
