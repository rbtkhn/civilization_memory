#!/usr/bin/env node
/**
 * Health checks for chronicle .md
 * Usage: node scripts/validate-chronicle.mjs [input.md] [options]
 * Options:
 *   --append-only [ref]   Fail if chronicle has removals vs ref (default: HEAD)
 *   --skip-append-only    Skip append-only check (e.g. when not in git)
 *   --skip-contradictions Skip contradictions ref check
 * Default: content/civilizations/PERSIA/IRAN–WAR–CHRONICLE.md
 * Exit: 0 if all checks pass, 1 otherwise.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const defaultInput = resolve(repoRoot, 'content/civilizations/PERSIA/IRAN–WAR–CHRONICLE.md');

const raw = process.argv.slice(2);
const positional = [];
const flagValues = {};
for (let i = 0; i < raw.length; i++) {
  const arg = raw[i];
  if (arg === '--append-only' && i + 1 < raw.length && !raw[i + 1].startsWith('--')) {
    flagValues['--append-only'] = raw[++i];
  } else if (arg.startsWith('--append-only=')) {
    flagValues['--append-only'] = arg.split('=', 2)[1];
  } else if (arg.startsWith('--')) {
    flagValues[arg] = true;
  } else {
    positional.push(arg);
  }
}
const inputPath = resolve(repoRoot, positional[0] || defaultInput);

const hasFlag = (name) => !!flagValues[name];
const getFlagValue = (name) => (typeof flagValues[name] === 'string' ? flagValues[name] : null);

function loadMapping(forPath) {
  const base = forPath.replace(/\.md$/i, '');
  const jsonPath = base + '.mapping.json';
  try {
    return JSON.parse(readFileSync(jsonPath, 'utf8'));
  } catch (e) {
    console.error('Validation: could not load mapping from', jsonPath, '-', e.message);
    process.exit(1);
  }
}

function parseDayBlocks(md) {
  const re = /(^|\n)(\*\*([^*]+)\*\*)\s*:?\s*\n?/gm;
  const matches = [...md.matchAll(re)];
  const labels = new Set();
  for (const m of matches) {
    const label = m[3].trim().replace(/:$/, '');
    labels.add(label);
  }
  return labels;
}

function splitSections(md) {
  const sections = [];
  const parts = md.split(/\n(?=## )/);
  for (let i = 1; i < parts.length; i++) {
    const match = parts[i].match(/^## (.+?)\n([\s\S]*)/);
    if (match) sections.push({ title: match[1].trim(), body: match[2].trim() });
  }
  return sections;
}

function checkRequiredBlocks(mapping, md, sections, daySections) {
  const required = mapping.required_blocks || ['Summary', 'Sources'];
  let failed = false;
  for (const sec of daySections) {
    const labels = parseDayBlocks(sec.body);
    const missing = required.filter(r => !labels.has(r));
    if (missing.length) {
      console.error('[required-blocks] Day "' + sec.title + '" missing: ' + missing.join(', '));
      failed = true;
    }
  }
  return failed;
}

function checkAppendOnly(inputPath, baseRef) {
  const relPath = inputPath.replace(repoRoot + '/', '').replace(repoRoot + '\\', '');
  try {
    const out = execSync(`git diff --no-color ${baseRef} -- "${relPath}"`, {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    const lines = out.split('\n');
    for (const line of lines) {
      if (line.startsWith('-') && !line.startsWith('---')) {
        console.error('[append-only] Chronicle has removals vs ' + baseRef + '. Append-only policy violated.');
        return true;
      }
    }
    return false;
  } catch (e) {
    if (e.status === 128 || e.message.includes('not a git repository')) {
      console.warn('[append-only] Skipped: not in git or invalid ref ' + baseRef);
      return false;
    }
    throw e;
  }
}

function extractDayRefs(text) {
  const refs = new Set();
  const single = /Day\s+(\d+)(?:\s|$|,|;|\)|\]|\.)/gi;
  const range = /Day\s+(\d+)\s*[–\-]\s*(\d+)/gi;
  let m;
  while ((m = single.exec(text)) !== null) refs.add(parseInt(m[1], 10));
  while ((m = range.exec(text)) !== null) {
    const a = parseInt(m[1], 10);
    const b = parseInt(m[2], 10);
    for (let i = a; i <= b; i++) refs.add(i);
  }
  return [...refs];
}

function checkContradictionsRefs(md, dayCount) {
  const match = md.match(/## Contradictions & Open Disputes\n([\s\S]*?)(?=\n## |$)/);
  const numbersMatch = md.match(/## Numbers at a glance\n([\s\S]*?)(?=\n## |$)/);
  const texts = [match ? match[1] : '', numbersMatch ? numbersMatch[1] : ''];
  const allRefs = new Set();
  for (const t of texts) extractDayRefs(t).forEach(d => allRefs.add(d));
  let failed = false;
  for (const d of allRefs) {
    if (d < 1 || d > dayCount) {
      console.error('[contradictions-refs] Day ' + d + ' referenced but chronicle has only Days 1–' + dayCount);
      failed = true;
    }
  }
  return failed;
}

try {
  const mapping = loadMapping(inputPath);
  const md = readFileSync(inputPath, 'utf8');
  const sections = splitSections(md);
  const daySections = sections.filter(s => /^Day \d+ /.test(s.title));
  const dayCount = daySections.length;

  let failed = false;

  if (!hasFlag('--skip-append-only')) {
    const baseRef = getFlagValue('--append-only') ?? 'HEAD';
    if (checkAppendOnly(inputPath, baseRef)) failed = true;
  }

  if (checkRequiredBlocks(mapping, md, sections, daySections)) failed = true;

  if (!hasFlag('--skip-contradictions')) {
    if (checkContradictionsRefs(md, dayCount)) failed = true;
  }

  if (failed) process.exit(1);

  console.log(
    'Validation passed: ' + dayCount + ' day(s), required: ' + (mapping.required_blocks || ['Summary', 'Sources']).join(', ')
  );
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
