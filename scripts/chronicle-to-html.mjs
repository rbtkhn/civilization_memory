#!/usr/bin/env node
/**
 * IRAN–WAR–CHRONICLE → static HTML timeline (one page per day, first page "Prelude")
 * Outputs: prelude.html (title "Prelude"), day-1.html … day-10.html, index.html → prelude
 * Usage: node scripts/chronicle-to-html.mjs [input.md] [outputDir]
 * Default: content/civilizations/PERSIA/IRAN–WAR–CHRONICLE.md → same dir
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { basename, dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const defaultInput = join(repoRoot, 'content/civilizations/PERSIA/IRAN–WAR–CHRONICLE.md');
const defaultDir = dirname(defaultInput);

const inputPath = resolve(repoRoot, process.argv[2] || defaultInput);
const outputDir = resolve(repoRoot, process.argv[3] || defaultDir);

// ----- Slug for heading IDs -----
function slug(text) {
  return text
    .trim()
    .replace(/\s+&\s+/g, '--')
    .toLowerCase()
    .replace(/·/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-{3,}/g, '--')
    .replace(/-+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// ----- Section categories after Summary (Narrative, Military, Economy, Politics) -----
const SECTION_ORDER = ['Narrative', 'Military', 'Economy', 'Politics'];
const LABEL_TO_SECTION = {
  'Analysis': 'Narrative',
  'Regional / proxy': 'Narrative',
  'Numbers': 'Military',
  'US': 'Politics',
  'Iran': 'Politics',
  'Russia': 'Politics',
  'China': 'Politics',
  'Israel': 'Politics',
  'Oman (mediator)': 'Politics',
  'Kushner / Witkoff': 'Politics',
};

// ----- Consolidate Events and Key targets into Summary, then structure by Narrative / Military / Economy / Politics -----
function consolidateDayBody(md) {
  const re = /(^|\n)(\*\*([^*]+)\*\*)\s*:?\s*\n?/gm;
  const matches = [...md.matchAll(re)];
  const blocks = [];
  for (let i = 0; i < matches.length; i++) {
    const contentStart = matches[i].index + matches[i][0].length;
    const contentEnd = i + 1 < matches.length ? matches[i + 1].index : md.length;
    const content = md.slice(contentStart, contentEnd).trim();
    const label = matches[i][3].trim().replace(/:$/, '');
    blocks.push({ label, content });
  }

  const summaryLabels = ['Summary', 'Events', 'Key targets / locations'];
  let mergedSummary = '';
  const rest = [];

  for (const b of blocks) {
    if (summaryLabels.includes(b.label)) {
      if (b.label === 'Summary') mergedSummary = b.content;
      else if (b.label === 'Events') mergedSummary += (mergedSummary ? '\n\n' : '') + '**Events**\n\n' + b.content;
      else if (b.label === 'Key targets / locations') mergedSummary += (mergedSummary ? '\n\n' : '') + '**Key targets / locations:** ' + b.content.replace(/\n/g, ' ').trim();
    } else {
      rest.push(b);
    }
  }

  const out = ['**Summary:**\n\n' + mergedSummary];

  const sourcesBlock = rest.find(b => b.label === 'Sources');
  const otherBlocks = rest.filter(b => b.label !== 'Sources');

  for (const sectionName of SECTION_ORDER) {
    const inSection = otherBlocks.filter(b => LABEL_TO_SECTION[b.label] === sectionName);
    out.push('\n\n**' + sectionName + '**\n\n');
    if (inSection.length) {
      for (const b of inSection) out.push('**' + b.label + '**\n\n' + b.content + '\n\n');
    } else {
      out.push('*(none reported)*\n\n');
    }
  }

  if (sourcesBlock) out.push('**Sources:**\n\n' + sourcesBlock.content);
  return out.join('').trim();
}

// ----- Split markdown into sections by ## -----
function splitSections(md) {
  const sections = [];
  const parts = md.split(/\n(?=## )/);
  const intro = parts[0].replace(/^# IRAN–WAR–CHRONICLE\s*\n\n/, '').trim();
  for (let i = 1; i < parts.length; i++) {
    const match = parts[i].match(/^## (.+?)\n([\s\S]*)/);
    if (match) sections.push({ title: match[1].trim(), body: match[2].trim() });
  }
  return { intro, sections };
}

// ----- Minimal markdown → HTML -----
function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(s, linkBase = '') {
  let out = s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>');
  out = out.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, (_, t, u) => `<a href="${escapeHtml(u)}" target="_blank" rel="noopener">${escapeHtml(t)}</a>`);
  if (linkBase === 'prelude') {
    out = out.replace(/\[([^\]]+)\]\((#[^)]+)\)/g, (_, t, h) => {
      const anchor = h.slice(1);
      if (/^day-\d+--\d{4}-\d{2}-\d{2}$/.test(anchor)) {
        const n = anchor.match(/^day-(\d+)/)[1];
        return `<a href="day-${n}.html">${escapeHtml(t)}</a>`;
      }
      return `<a href="#${escapeHtml(anchor)}">${escapeHtml(t)}</a>`;
    });
  } else if (linkBase) {
    out = out.replace(/\[([^\]]+)\]\((#[^)]+)\)/g, (_, t, h) => {
      const anchor = h.slice(1);
      if (/^day-\d+--\d{4}-\d{2}-\d{2}$/.test(anchor)) {
        const n = anchor.match(/^day-(\d+)/)[1];
        return `<a href="${linkBase}day-${n}.html">${escapeHtml(t)}</a>`;
      }
      return `<a href="${linkBase}prelude.html#${escapeHtml(anchor)}">${escapeHtml(t)}</a>`;
    });
  } else {
    out = out.replace(/\[([^\]]+)\]\((#[^)]+)\)/g, (_, t, h) => `<a href="${escapeHtml(h)}">${escapeHtml(t)}</a>`);
  }
  return out;
}

function mdBlockToHtml(md, linkBase = '') {
  const lines = md.split(/\r?\n/);
  const out = [];
  let i = 0;
  let inTable = false;
  let tableRows = [];

  function flushTable() {
    if (tableRows.length === 0) return;
    out.push('<table>');
    tableRows.forEach((row, idx) => {
      const tag = idx === 0 ? 'th' : 'td';
      out.push('<tr>' + row.map(cell => `<${tag}>${escapeHtml(cell.trim())}</${tag}>`).join('') + '</tr>');
    });
    out.push('</table>');
    tableRows = [];
    inTable = false;
  }

  while (i < lines.length) {
    const line = lines[i];
    if (/^---+$/.test(line)) {
      flushTable();
      out.push('<hr/>');
      i++;
      continue;
    }
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.slice(1, -1).split('|').map(c => c.trim());
      if (cells.length > 1 && !cells.every(c => /^-+$/.test(c))) {
        inTable = true;
        tableRows.push(cells);
      }
      i++;
      continue;
    }
    if (inTable) flushTable();

    if (line.startsWith('## ')) {
      const title = line.slice(3);
      const id = slug(title);
      out.push(id ? `<h2 id="${escapeHtml(id)}">${inline(escapeHtml(title), linkBase)}</h2>` : '<h2>' + inline(escapeHtml(title), linkBase) + '</h2>');
      i++;
      continue;
    }
    if (line.match(/^-\s+/)) {
      out.push('<ul>');
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        out.push('<li>' + inline(escapeHtml(lines[i].replace(/^-\s+/, '')), linkBase) + '</li>');
        i++;
      }
      out.push('</ul>');
      continue;
    }
    if (line.trim() === '') {
      out.push('');
      i++;
      continue;
    }
    out.push('<p>' + inline(escapeHtml(line), linkBase) + '</p>');
    i++;
  }
  flushTable();
  return out.join('\n');
}

// ----- Page nav (for day pages; maxDay = total number of day pages) -----
function dayNav(dayNum, maxDay) {
  const prev = dayNum > 1 ? `<a href="day-${dayNum - 1}.html">← Day ${dayNum - 1}</a>` : '';
  const next = dayNum < maxDay ? `<a href="day-${dayNum + 1}.html">Day ${dayNum + 1} →</a>` : (maxDay > 0 ? `<a href="predictions.html">Predictions →</a>` : '');
  const prelude = '<a href="prelude.html">Prelude</a>';
  const parts = [prelude, prev, next].filter(Boolean);
  return '<nav class="page-nav">' + parts.join(' · ') + '</nav>';
}

// ----- HTML template -----
const STYLES = `
  * { box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 52rem; margin: 0 auto; padding: 1rem 1.5rem; color: #1a1a1a; background: #fafafa; }
  h1 { font-size: 1.75rem; margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 0.5rem; }
  h2 { font-size: 1.25rem; margin-top: 2rem; scroll-margin-top: 4rem; }
  h2[id] { color: #0d47a1; }
  nav.quick-jump { position: sticky; top: 0; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 0.75rem 1rem; margin: 1.5rem 0; z-index: 10; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
  nav.quick-jump ul { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 1.5rem; font-size: 0.9rem; }
  nav.quick-jump li { break-inside: avoid; margin-bottom: 0.35rem; }
  nav.quick-jump a, nav.page-nav a { color: #1565c0; text-decoration: none; }
  nav.quick-jump a:hover, nav.page-nav a:hover { text-decoration: underline; }
  nav.page-nav { margin-bottom: 1.5rem; font-size: 0.95rem; }
  table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
  th, td { border: 1px solid #ddd; padding: 0.5rem 0.75rem; text-align: left; }
  th { background: #e3f2fd; font-weight: 600; }
  tr:nth-child(even) { background: #f5f5f5; }
  ul { padding-left: 1.5rem; margin: 0.5rem 0; }
  li { margin: 0.25rem 0; }
  hr { border: none; border-top: 1px solid #e0e0e0; margin: 1.5rem 0; }
  p { margin: 0.5rem 0; }
  @media (max-width: 640px) { nav.quick-jump ul { columns: 1; } }
`;

function docWrap(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${escapeHtml(title)}</title>
  <style>${STYLES}</style>
</head>
<body>
${body}
</body>
</html>`;
}

// ----- Build Quick Jump HTML for prelude (links to prelude.html#, day-N.html, predictions.html) -----
function quickJumpHtml(dayCount) {
  const items = [
    ['Prelude', 'prelude.html#prelude'],
    ['Timeline at a glance', 'prelude.html#timeline-at-a-glance'],
    ...Array.from({ length: dayCount }, (_, i) => [`Day ${i + 1}`, `day-${i + 1}.html`]),
    ['Numbers at a glance', 'prelude.html#numbers-at-a-glance'],
    ['Contradictions & Open Disputes', 'prelude.html#contradictions--open-disputes'],
    ['Preferred source hierarchy', 'prelude.html#preferred-source-hierarchy-for-daily-updates'],
    ['Predictions', 'predictions.html'],
  ];
  return '<nav class="quick-jump" aria-label="Quick navigation"><ul>' +
    items.map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join('') +
    '</ul></nav>';
}

// ----- Main -----
try {
  mkdirSync(outputDir, { recursive: true });
  const md = readFileSync(inputPath, 'utf8');
  const { intro, sections } = splitSections(md);

  const byTitle = {};
  sections.forEach(s => { byTitle[s.title] = s.body; });

  const preludeSections = [
    'Prelude',
    null, // Quick Jump (we inject custom HTML)
    'Timeline at a glance',
    'Numbers at a glance',
    'Contradictions & Open Disputes',
    'Preferred source hierarchy for daily updates',
  ];

  const preludeParts = [];
  preludeParts.push('<h1>Prelude</h1>');
  preludeParts.push('<p>' + inline(escapeHtml(intro)) + '</p>');
  preludeParts.push('<hr/>');

  const daySections = sections.filter(s => /^Day \d+ /.test(s.title));
  const dayCount = daySections.length;

  for (const title of preludeSections) {
    if (title === null) {
      preludeParts.push('<h2 id="quick-jump">Quick Jump</h2>');
      preludeParts.push(quickJumpHtml(dayCount));
      continue;
    }
    const body = byTitle[title];
    if (!body) continue;
    const id = slug(title);
    preludeParts.push(`<h2 id="${escapeHtml(id)}">${inline(escapeHtml(title))}</h2>`);
    preludeParts.push(mdBlockToHtml(body, 'prelude'));
    preludeParts.push('');
  }

  const preludeHtml = docWrap('Prelude', preludeParts.join('\n'));
  writeFileSync(join(outputDir, 'prelude.html'), preludeHtml, 'utf8');
  console.log('Wrote: prelude.html');

  for (let d = 1; d <= dayCount; d++) {
    const sec = daySections.find(s => s.title.startsWith(`Day ${d} `));
    if (!sec) {
      console.warn('Missing section: Day', d);
      continue;
    }
    const bodyHtml = dayNav(d, dayCount) + '\n\n<h2>' + escapeHtml(sec.title) + '</h2>\n' + mdBlockToHtml(consolidateDayBody(sec.body), './');
    const dayHtml = docWrap(sec.title, bodyHtml);
    writeFileSync(join(outputDir, `day-${d}.html`), dayHtml, 'utf8');
    console.log('Wrote: day-' + d + '.html');
  }

  const predictionsBody = byTitle['Predictions'];
  const predictionsContent = predictionsBody
    ? '<h1>Predictions</h1>\n' + mdBlockToHtml(predictionsBody, './')
    : '<h1>Predictions</h1>\n<p>Expert predictions (Jiang, Mercouris, Ritter, others) will be tracked here. Append new rows in the source chronicle.</p>';
  const predictionsNav = '<nav class="page-nav"><a href="prelude.html">Prelude</a>' + (dayCount > 0 ? ` · <a href="day-${dayCount}.html">← Day ${dayCount}</a>` : '') + '</nav>';
  writeFileSync(join(outputDir, 'predictions.html'), docWrap('Predictions', predictionsNav + '\n\n' + predictionsContent), 'utf8');
  console.log('Wrote: predictions.html');

  const indexHtml = docWrap('IRAN–WAR–CHRONICLE', '<p>Redirecting to <a href="prelude.html">Prelude</a>…</p><script>location.href="prelude.html";</script>');
  writeFileSync(join(outputDir, 'index.html'), indexHtml, 'utf8');
  console.log('Wrote: index.html');

  const chronicleRedirectPath = join(outputDir, basename(inputPath).replace(/\.md$/i, '.html'));
  writeFileSync(chronicleRedirectPath, indexHtml, 'utf8');
  console.log('Wrote: ' + basename(chronicleRedirectPath));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
