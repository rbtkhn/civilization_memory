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

function loadMapping(forPath) {
  const base = forPath.replace(/\.md$/i, '');
  const jsonPath = base + '.mapping.json';
  try {
    const raw = readFileSync(jsonPath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    throw new Error('Missing or invalid mapping file: ' + jsonPath + ' — ' + e.message);
  }
}

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

// ----- Parse day body into labeled blocks -----
function parseDayBlocks(md) {
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
  return blocks;
}

function isEmptyOrNone(content) {
  if (!content || !content.trim()) return true;
  const t = content.trim();
  if (/^\(none\)$/i.test(t)) return true;
  if (/^\(none reported\)$/i.test(t)) return true;
  if (/^\[?\(none[^)]*\)\]?$/i.test(t)) return true;
  return false;
}

// ----- Build day body from mapping (Summary + vectors) -----
function applyMappingToDayBody(md, mapping) {
  const blocks = parseDayBlocks(md);
  const byLabel = {};
  blocks.forEach(b => { byLabel[b.label] = b; });

  let summaryLine = '';
  for (const lab of mapping.summary_blocks || ['Summary']) {
    const b = byLabel[lab];
    if (b && b.content) {
      summaryLine = b.content;
      break;
    }
  }

  const out = ['**Summary:**\n\n' + summaryLine];
  const vectorOrder = mapping.vector_order || ['Narrative', 'Military', 'Economy', 'Politics'];
  const vectors = mapping.vectors || {};

  for (const sectionName of vectorOrder) {
    out.push('\n\n**' + sectionName + '**\n\n');
    const blockList = vectors[sectionName];
    if (!blockList || !Array.isArray(blockList)) {
      out.push('*(none reported)*');
      continue;
    }

    const parts = [];
    const isMilitary = sectionName === 'Military';
    const keyTargetsInline = !!mapping.military_key_targets_inline;
    const politicsKeepLabel = mapping.politics_keep_label !== false;

    for (const lab of blockList) {
      const b = byLabel[lab];
      if (!b || isEmptyOrNone(b.content)) continue;
      if (isMilitary && keyTargetsInline && lab === 'Key targets / locations') {
        parts.push(b.content.replace(/\n/g, ' ').trim());
      } else if (sectionName === 'Politics' && politicsKeepLabel) {
        parts.push('**' + b.label + '**\n\n' + b.content);
      } else {
        parts.push(b.content);
      }
    }
    out.push(parts.length ? parts.join('\n\n') : '*(none reported)*');
  }

  const sourcesBlock = byLabel['Sources'];
  if (sourcesBlock && sourcesBlock.content) out.push('\n\n**Sources:**\n\n' + sourcesBlock.content);
  return out.join('').trim();
}

// ----- Build structured day data (summary, vectors, sources) for JSON output -----
function dayBodyToStructured(blocks, mapping) {
  const byLabel = {};
  blocks.forEach(b => { byLabel[b.label] = b; });

  let summary = '';
  for (const lab of mapping.summary_blocks || ['Summary']) {
    const b = byLabel[lab];
    if (b && b.content) {
      summary = b.content;
      break;
    }
  }

  const vectors = {};
  const vectorOrder = mapping.vector_order || ['Narrative', 'Military', 'Economy', 'Politics'];
  const vectorBlocks = mapping.vectors || {};
  const isMilitary = (name) => name === 'Military';
  const keyTargetsInline = !!mapping.military_key_targets_inline;
  const politicsKeepLabel = mapping.politics_keep_label !== false;

  for (const sectionName of vectorOrder) {
    const blockList = vectorBlocks[sectionName];
    if (!blockList || !Array.isArray(blockList)) {
      vectors[sectionName] = '';
      continue;
    }
    const parts = [];
    for (const lab of blockList) {
      const b = byLabel[lab];
      if (!b || isEmptyOrNone(b.content)) continue;
      if (isMilitary(sectionName) && keyTargetsInline && lab === 'Key targets / locations') {
        parts.push(b.content.replace(/\n/g, ' ').trim());
      } else if (sectionName === 'Politics' && politicsKeepLabel) {
        parts.push('**' + b.label + '**\n\n' + b.content);
      } else {
        parts.push(b.content);
      }
    }
    vectors[sectionName] = parts.length ? parts.join('\n\n') : '*(none reported)*';
  }

  const sourcesBlock = byLabel['Sources'];
  const sources = sourcesBlock && sourcesBlock.content ? sourcesBlock.content : '';
  return { summary, vectors, sources };
}

// ----- Site header: Iran flag left, title + subtitle center, USA flag right -----
const SITE_HEADER_HTML = `
<header class="site-header">
  <span class="header-flag" aria-hidden="true">🇮🇷</span>
  <div class="header-brand">
    <h1 class="header-title">Iran War Chronicle</h1>
  </div>
  <span class="header-flag" aria-hidden="true">🇺🇸</span>
</header>`;

// ----- Split markdown into sections by ## -----
function splitSections(md) {
  const sections = [];
  const parts = md.split(/\n(?=## )/);
  let intro = parts[0].replace(/^# IRAN–WAR–CHRONICLE\s*\n\n/, '').trim();
  intro = intro.replace(/^\|[^\n]+\|\s*\n\|[^\n]+\|\s*\n\n?/, '').trim().replace(/\n\n---\s*$/, '');
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
  html, body { height: 100%; margin: 0; overflow: hidden; font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; color: #1a1a1a; background: #fafafa; }
  body { display: flex; flex-direction: column; max-width: 52rem; margin: 0 auto; padding: 0.5rem 1rem; }
  .page-main { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }
  header.site-header { flex-shrink: 0; display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0.5rem 0; border-bottom: 1px solid #ddd; }
  header.site-header .header-flag { font-size: 1.5rem; line-height: 1; flex-shrink: 0; }
  header.site-header .header-brand { flex: 0 0 auto; text-align: center; }
  header.site-header .header-title { font-size: 1.6rem; font-weight: 700; margin: 0; line-height: 1.2; color: #111; }
  header.site-header .header-subtitle { font-size: 0.8rem; color: #666; margin: 0.2rem 0 0; font-weight: 400; }
  header.day-header { margin: 0.25rem 0; }
  header.day-header h2 { margin: 0; font-size: 1.1rem; }
  nav.page-nav { flex-shrink: 0; font-size: 0.85rem; padding: 0.25rem 0; }
  nav.page-nav a { color: #1565c0; text-decoration: none; }
  nav.page-nav a:hover { text-decoration: underline; }
  nav.tab-bar { display: flex; flex-wrap: wrap; gap: 0.25rem; padding: 0.5rem 0; border-bottom: 1px solid #ddd; background: #fff; }
  nav.tab-bar button { padding: 0.4rem 0.75rem; font-size: 0.9rem; font-weight: 500; border: 1px solid #e0e0e0; border-radius: 4px; background: #f5f5f5; color: #333; cursor: pointer; }
  nav.tab-bar button:hover { background: #eee; border-color: #ccc; }
  nav.tab-bar button.active { background: #1565c0; color: #fff; border-color: #1565c0; }
  .tab-panels { flex: 1; min-height: 0; overflow-y: auto; padding: 0.5rem 0; display: flex; flex-direction: column; }
  .tab-panel { display: none; font-size: 0.9rem; }
  .tab-panel.active { display: block; }
  .tab-panel .panel-body { max-height: 50vh; overflow-y: auto; }
  h2 { font-size: 1.1rem; margin: 0.5rem 0; }
  h4 { font-size: 1rem; margin: 1rem 0 0.5rem; }
  .landing-hero { text-align: center; padding: 1.5rem 0; }
  .landing-tagline { font-size: 1rem; color: #555; margin: 0.5rem 0 1rem; max-width: 36rem; margin-left: auto; margin-right: auto; }
  .landing-cta { display: inline-block; padding: 0.75rem 1.5rem; font-size: 1.1rem; font-weight: 600; background: #1565c0; color: #fff; text-decoration: none; border-radius: 6px; margin: 0.5rem 0; }
  .landing-cta:hover { background: #0d47a1; }
  .landing-days { display: grid; grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); gap: 0.5rem; margin: 1.5rem 0; }
  .landing-day { padding: 0.5rem 0.75rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 4px; text-decoration: none; color: #1565c0; font-size: 0.9rem; text-align: center; }
  .landing-day:hover { border-color: #1565c0; background: #e3f2fd; }
  .landing-day-num { font-weight: 600; display: block; }
  .landing-day-date { font-size: 0.8rem; color: #666; }
  .landing-section { margin: 1.5rem 0; padding-top: 1rem; border-top: 1px solid #eee; }
  .landing-section h3 { font-size: 1rem; margin: 0 0 0.5rem; color: #333; }
  nav.quick-nav { padding: 0.5rem 0; }
  nav.quick-nav h4 { font-size: 0.95rem; margin: 0 0 0.4rem; color: #333; }
  nav.quick-nav ul { margin: 0; padding-left: 1.25rem; list-style: disc; }
  nav.quick-nav li { margin: 0.2rem 0; }
  nav.quick-nav a { color: #1565c0; text-decoration: none; }
  nav.quick-nav a:hover { text-decoration: underline; }
  details.landing-details { margin: 0.5rem 0; }
  details.landing-details summary { cursor: pointer; font-weight: 500; color: #1565c0; }
  details.landing-details summary:hover { text-decoration: underline; }
  .carousel-wrap { margin: 0.5rem 0; }
  .carousel-nav { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
  .carousel-nav select { padding: 0.3rem 0.5rem; font-size: 0.9rem; }
  .carousel-card { padding: 0.5rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 0.85rem; }
  .carousel-card .row { display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 0.75rem; margin: 0.2rem 0; }
  .carousel-card .label { font-weight: 600; color: #555; }
  .predictions-layout { display: flex; flex: 1; min-height: 0; gap: 1rem; }
  .predictions-sidebar { flex: 0 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; padding-right: 1rem; border-right: 1px solid #eee; }
  .expert-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0.6rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; cursor: pointer; text-align: center; font-size: 0.8rem; transition: border-color 0.15s, background 0.15s; }
  .expert-tile:hover { border-color: #1565c0; background: #f8fbff; }
  .expert-tile.active { border-color: #1565c0; background: #e3f2fd; color: #0d47a1; }
  .expert-tile .avatar { width: 2.5rem; height: 2.5rem; border-radius: 50%; background: #e0e0e0; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; color: #555; margin-bottom: 0.3rem; }
  .expert-tile.active .avatar { background: #1565c0; color: #fff; }
  .expert-tile .name { line-height: 1.2; word-break: break-word; }
  .predictions-main { flex: 1; min-width: 0; overflow-y: auto; padding: 0.5rem 0; }
  .predictions-panel { display: none; }
  .predictions-panel.active { display: block; }
  .predictions-panel h3 { font-size: 1.1rem; margin: 0 0 0.75rem; color: #111; }
  .prediction-item { margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; font-size: 0.9rem; }
  .prediction-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .prediction-item .meta { font-size: 0.8rem; color: #666; margin-bottom: 0.25rem; }
  .prediction-item .text { line-height: 1.5; }
  table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
  th, td { border: 1px solid #ddd; padding: 0.35rem 0.5rem; text-align: left; }
  th { background: #e3f2fd; font-weight: 600; }
  ul { padding-left: 1.25rem; margin: 0.35rem 0; }
  li { margin: 0.2rem 0; }
  p { margin: 0.35rem 0; font-size: 0.9rem; }
  @media print {
    html, body { overflow: auto; height: auto; }
    nav.tab-bar button { display: none; }
    .tab-panel { display: block !important; }
    .tab-panel .panel-body { max-height: none; overflow: visible; }
  }
`;

function docWrap(title, body, meta = {}) {
  const generatedWith = meta.mapping_version != null
    ? `<meta name="generated-with" content="mapping-v${escapeHtml(String(meta.mapping_version))}"/>`
    : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  ${generatedWith}
  <title>${escapeHtml(title)}</title>
  <style>${STYLES}</style>
</head>
<body>
${body}
</body>
</html>`;
}

// ----- Parse timeline table from markdown, build carousel -----
function parseTimelineTable(md) {
  const rows = [];
  const lines = md.split(/\r?\n/);
  let headers = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.startsWith('|') || !line.endsWith('|')) continue;
    const cells = line.slice(1, -1).split('|').map(c => c.trim());
    if (cells.every(c => /^-+$/.test(c))) continue;
    if (headers.length === 0 && cells[0]?.toLowerCase() === 'day') {
      headers = cells;
      continue;
    }
    if (headers.length && cells.length >= headers.length) {
      const row = {};
      headers.forEach((h, j) => { row[h] = cells[j] || ''; });
      rows.push(row);
    }
  }
  return rows;
}

// ----- Parse Predictions table, group by Expert -----
function parsePredictionsTable(md) {
  const experts = new Map();
  const lines = md.split(/\r?\n/);
  let colIdx = { date: -1, expert: -1, prediction: -1, asOf: -1 };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.startsWith('|') || !line.endsWith('|')) continue;
    const cells = line.slice(1, -1).split('|').map(c => c.trim());
    if (cells.every(c => /^-+$/.test(c))) continue;
    if (colIdx.expert < 0) {
      const lc = cells.map(c => c.toLowerCase());
      colIdx.date = lc.findIndex(c => c.includes('date') || c.includes('source'));
      colIdx.expert = lc.findIndex(c => c.includes('expert'));
      colIdx.prediction = lc.findIndex(c => c.includes('prediction'));
      colIdx.asOf = lc.findIndex(c => c.includes('as of'));
      if (colIdx.expert < 0) continue;
    }
    const expert = cells[colIdx.expert] || '';
    if (!expert || /^\*|^-|^—/.test(expert) || expert.toLowerCase() === 'expert') continue;
    const row = {
      date: cells[colIdx.date] || '',
      prediction: cells[colIdx.prediction] || '',
      asOf: cells[colIdx.asOf] || '',
    };
    if (!experts.has(expert)) {
      experts.set(expert, []);
    }
    experts.get(expert).push(row);
  }
  return Array.from(experts.entries()).map(([name, rows]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    initials: name.split(/\s+/).slice(0, 2).map(w => (w[0] || '').toUpperCase()).join('') || '?',
    rows,
  }));
}

function landingDayGridHtml(timelineRows) {
  if (!timelineRows.length) return '';
  return '<div class="landing-days">' + timelineRows.map((row, i) => {
    const d = i + 1;
    const date = row.Date || '';
    const summary = (row.Summary || '').slice(0, 50);
    return `<a href="day-${d}.html" class="landing-day">${escapeHtml(date)}</a>`;
  }).join('') + '</div>';
}

function timelineCarouselHtml(timelineRows) {
  if (!timelineRows.length) return '<p>No timeline data.</p>';
  const labels = ['Day', 'Date', 'Summary', 'US posture', 'Iran posture', 'Hormuz', 'Oil/Brent'];
  const cards = timelineRows.map((row, i) => {
    const dayNum = i + 1;
    const pairs = labels.filter(l => row[l]).map(l => `<span class="label">${escapeHtml(l)}:</span> <span>${escapeHtml(row[l])}</span>`);
    return `<div class="carousel-card" data-day="${dayNum}" style="${i > 0 ? 'display:none' : ''}">
      <div class="row"><span class="label">Day:</span> <a href="day-${dayNum}.html">${escapeHtml(row.Day || dayNum)} · ${escapeHtml(row.Date || '')}</a></div>
      ${pairs.slice(1).map(p => `<div class="row">${p}</div>`).join('')}
    </div>`;
  });
  const options = timelineRows.map((r, i) => `<option value="${i + 1}" ${i === 0 ? 'selected' : ''}>Day ${i + 1} · ${escapeHtml(r.Date || '')}</option>`).join('');
  return `<div class="carousel-wrap">
    <div class="carousel-nav">
      <label>Day:</label>
      <select id="timeline-day">${options}</select>
    </div>
    ${cards.join('')}
    <script>
    (function(){
      var sel=document.getElementById('timeline-day');
      var cards=document.querySelectorAll('.carousel-wrap .carousel-card');
      if(sel&&cards.length){sel.onchange=function(){var v=sel.value;cards.forEach(function(c){c.style.display=c.dataset.day===v?'block':'none'});};}
    })();
    <\/script>`;
}

// ----- Tab navigation bar + panels -----
function tabNavHtml(tabs, activeId) {
  const buttons = tabs.map(t => {
    const id = slug(t.id || t.label);
    const isActive = id === activeId;
    return `<button type="button" class="${isActive ? 'active' : ''}" data-tab="${escapeHtml(id)}">${escapeHtml(t.label)}</button>`;
  });
  return `<nav class="tab-bar" role="tablist">${buttons.join('')}</nav>`;
}

function tabPanelHtml(id, body, active = false) {
  const sid = slug(id);
  return `<div class="tab-panel ${active ? 'active' : ''}" data-tab-panel="${escapeHtml(sid)}" role="tabpanel"><div class="panel-body">${body}</div></div>`;
}

function tabSwitchScript() {
  return `<script>
(function(){
  var bar=document.querySelector('.tab-bar');
  var panels=document.querySelectorAll('.tab-panel');
  if(!bar||!panels.length)return;
  bar.addEventListener('click',function(e){
    var btn=e.target.closest('button[data-tab]');
    if(!btn)return;
    var id=btn.dataset.tab;
    bar.querySelectorAll('button').forEach(function(b){b.classList.toggle('active',b===btn);});
    panels.forEach(function(p){p.classList.toggle('active',p.dataset.tabPanel===id);});
  });
})();
<\/script>`;
}

// ----- Main -----
try {
  mkdirSync(outputDir, { recursive: true });
  const mapping = loadMapping(inputPath);
  const meta = { mapping_version: mapping.mapping_version };
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

  const SITE_TITLE = 'Iran War Chronicle';
  const daySections = sections.filter(s => /^Day \d+ /.test(s.title));
  const dayCount = daySections.length;

  const structuredDays = daySections.map(sec => ({
    title: sec.title,
    ...dayBodyToStructured(parseDayBlocks(sec.body), mapping),
  }));
  const chronicleData = {
    mapping_version: mapping.mapping_version,
    generated_at: new Date().toISOString(),
    intro,
    days: structuredDays,
    predictions: byTitle['Predictions'] || '',
  };
  writeFileSync(join(outputDir, 'chronicle.json'), JSON.stringify(chronicleData, null, 2), 'utf8');
  console.log('Wrote: chronicle.json');

  const timelineBody = byTitle['Timeline at a glance'] || '';
  const timelineRows = parseTimelineTable(timelineBody);
  const preludeParts = [];
  const preludeNav = '<nav class="page-nav"><a href="prelude.html">Prelude</a> · <a href="day-1.html">Day 1</a> · <a href="day-' + dayCount + '.html">Day ' + dayCount + '</a> · <a href="predictions.html">Predictions</a></nav>';
  preludeParts.push(SITE_HEADER_HTML);
  preludeParts.push(preludeNav);
  preludeParts.push('<main class="page-main">');
  preludeParts.push('<section id="prelude" class="landing-section">');
  preludeParts.push('<h3>Prelude</h3>');
  preludeParts.push('<div>' + mdBlockToHtml(byTitle['Prelude'] || '', 'prelude') + '</div>');
  preludeParts.push('</section>');
  const sourcesBody = byTitle['Sources'];
  if (sourcesBody) {
    preludeParts.push('<section id="sources" class="landing-section">');
    preludeParts.push('<h3>Sources</h3>');
    preludeParts.push('<div>' + mdBlockToHtml(sourcesBody, 'prelude') + '</div>');
    preludeParts.push('</section>');
  }
  const methodologyBody = byTitle['Methodology'];
  if (methodologyBody) {
    preludeParts.push('<section id="methodology" class="landing-section">');
    preludeParts.push('<h3>Methodology</h3>');
    preludeParts.push('<div>' + mdBlockToHtml(methodologyBody, 'prelude') + '</div>');
    preludeParts.push('</section>');
  }
  preludeParts.push('<section id="day-by-day" class="landing-section">');
  preludeParts.push(landingDayGridHtml(timelineRows));
  preludeParts.push('</section>');
  preludeParts.push('<section id="reference" class="landing-section">');
  preludeParts.push('<details class="landing-details" id="reference-details">');
  preludeParts.push('<summary>Reference — Numbers, Contradictions, Sources</summary>');
  let refContent = '';
  const numbersBody = byTitle['Numbers at a glance'];
  if (numbersBody) refContent += '<h4 id="numbers-at-a-glance">Numbers at a glance</h4>' + mdBlockToHtml(numbersBody, 'prelude');
  const contradictionsBody = byTitle['Contradictions & Open Disputes'];
  if (contradictionsBody) refContent += '<h4 id="contradictions-open-disputes">Contradictions &amp; Open Disputes</h4>' + mdBlockToHtml(contradictionsBody, 'prelude');
  const preferredSourcesBody = byTitle['Preferred source hierarchy for daily updates'];
  if (preferredSourcesBody) refContent += '<h4 id="preferred-source-hierarchy">Preferred source hierarchy</h4>' + mdBlockToHtml(preferredSourcesBody, 'prelude');
  preludeParts.push('<div style="margin-top:0.75rem;max-height:50vh;overflow-y:auto;">' + (refContent || '<p>No reference data.</p>') + '</div>');
  preludeParts.push('</details>');
  preludeParts.push('</section>');
  preludeParts.push('<nav class="page-nav" style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid #eee;"><a href="day-1.html">Day 1</a> · <a href="day-' + dayCount + '.html">Day ' + dayCount + '</a> · <a href="predictions.html">Predictions</a></nav>');
  preludeParts.push('<script>(function(){var d=document.getElementById("reference-details");if(d&&["numbers-at-a-glance","contradictions-open-disputes","preferred-source-hierarchy"].indexOf(location.hash.slice(1))>=0)d.open=true;window.onhashchange=function(){if(d&&["numbers-at-a-glance","contradictions-open-disputes","preferred-source-hierarchy"].indexOf(location.hash.slice(1))>=0)d.open=true;};\nif(location.hash)setTimeout(function(){var e=document.getElementById(location.hash.slice(1));if(e)e.scrollIntoView({behavior:"smooth"});},50);})();</script>');
  preludeParts.push('</main>');

  const preludeHtml = docWrap(SITE_TITLE + ' — Prelude', preludeParts.join('\n'), meta);
  writeFileSync(join(outputDir, 'prelude.html'), preludeHtml, 'utf8');
  console.log('Wrote: prelude.html');

  const vectorOrder = mapping.vector_order || ['Narrative', 'Military', 'Economy', 'Politics', 'History'];
  for (let d = 1; d <= dayCount; d++) {
    const sec = daySections.find(s => s.title.startsWith(`Day ${d} `));
    if (!sec) {
      console.warn('Missing section: Day', d);
      continue;
    }
    const structured = structuredDays[d - 1];
    const dayTabs = [{ id: 'summary', label: 'Summary' }, ...vectorOrder.map(v => ({ id: v, label: v })), { id: 'sources', label: 'Sources' }];
    const panelParts = [];
    panelParts.push(tabPanelHtml('summary', '<p>' + escapeHtml(structured.summary) + '</p>', true));
    for (const v of vectorOrder) {
      const content = structured.vectors[v] || '*(none reported)*';
      panelParts.push(tabPanelHtml(v, mdBlockToHtml(content, './')));
    }
    panelParts.push(tabPanelHtml('sources', '<p>' + escapeHtml(structured.sources) + '</p>'));
    const articleBody = SITE_HEADER_HTML + '\n' + dayNav(d, dayCount) + '\n<header class="day-header"><h2>' + escapeHtml(sec.title) + '</h2></header>\n<main class="page-main">\n' + tabNavHtml(dayTabs, 'summary') + '\n<div class="tab-panels">\n' + panelParts.join('\n') + '\n</div>' + tabSwitchScript() + '\n</main>';
    const dayHtml = docWrap(SITE_TITLE + ' — Day ' + d, '<article aria-label="Day ' + d + '">\n' + articleBody + '\n</article>', meta);
    writeFileSync(join(outputDir, `day-${d}.html`), dayHtml, 'utf8');
    console.log('Wrote: day-' + d + '.html');
  }

  const predictionsBody = byTitle['Predictions'] || '';
  const expertsData = parsePredictionsTable(predictionsBody);
  const expertTiles = expertsData.map((e, i) =>
    `<button type="button" class="expert-tile${i === 0 ? ' active' : ''}" data-expert="${escapeHtml(e.slug)}" aria-pressed="${i === 0 ? 'true' : 'false'}">
      <span class="avatar">${escapeHtml(e.initials)}</span>
      <span class="name">${escapeHtml(e.name)}</span>
    </button>`
  ).join('\n');
  const expertPanels = expertsData.map((e, i) => {
    const items = e.rows.map(r =>
      `<div class="prediction-item">
        <div class="meta">${escapeHtml(r.date)}${r.asOf ? ' · ' + escapeHtml(r.asOf) : ''}</div>
        <div class="text">${escapeHtml(r.prediction)}</div>
      </div>`
    ).join('');
    return `<div class="predictions-panel${i === 0 ? ' active' : ''}" id="panel-${escapeHtml(e.slug)}" data-expert="${escapeHtml(e.slug)}">
      <h3>${escapeHtml(e.name)}</h3>
      ${items || '<p>No predictions yet.</p>'}
    </div>`;
  }).join('\n');
  const predictionsScript = `(function(){
    var tiles=document.querySelectorAll('.expert-tile');
    var panels=document.querySelectorAll('.predictions-panel');
    tiles.forEach(function(t){
      t.addEventListener('click',function(){
        var slug=t.getAttribute('data-expert');
        tiles.forEach(function(x){x.classList.remove('active');x.setAttribute('aria-pressed','false');});
        panels.forEach(function(p){p.classList.remove('active');});
        t.classList.add('active');t.setAttribute('aria-pressed','true');
        var p=document.getElementById('panel-'+slug);
        if(p)p.classList.add('active');
      });
    });
  })();`;
  const predictionsLayout = expertsData.length > 0
    ? `<div class="predictions-layout">
        <aside class="predictions-sidebar" aria-label="Expert list">${expertTiles}</aside>
        <div class="predictions-main">${expertPanels}</div>
      </div>`
    : '<p>Expert predictions will be tracked here. Append rows to the Predictions table in the source chronicle.</p>';
  const predictionsNav = '<nav class="page-nav"><a href="prelude.html">Prelude</a>' + (dayCount > 0 ? ` · <a href="day-${dayCount}.html">← Day ${dayCount}</a>` : '') + '</nav>';
  const predictionsPage = SITE_HEADER_HTML + '\n' + predictionsNav + '\n<main class="page-main">\n' + predictionsLayout + '\n</main>\n<script>' + predictionsScript + '</script>';
  writeFileSync(join(outputDir, 'predictions.html'), docWrap(SITE_TITLE + ' — Predictions', predictionsPage, meta), 'utf8');
  console.log('Wrote: predictions.html');

  const indexHtml = docWrap(SITE_TITLE, SITE_HEADER_HTML + '\n<main class="page-main"><p>Redirecting to <a href="prelude.html">Prelude</a>…</p></main><script>location.href="prelude.html";</script>', meta);
  writeFileSync(join(outputDir, 'index.html'), indexHtml, 'utf8');
  console.log('Wrote: index.html');

  const chronicleRedirectPath = join(outputDir, basename(inputPath).replace(/\.md$/i, '.html'));
  writeFileSync(chronicleRedirectPath, indexHtml, 'utf8');
  console.log('Wrote: ' + basename(chronicleRedirectPath));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
