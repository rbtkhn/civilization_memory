#!/usr/bin/env node
/**
 * Test harness for the chat engine. Runs canned inputs and checks output structure.
 * Requires OPENAI_API_KEY and CIVMEM_CONTENT_ROOT (or run from repo root).
 *
 * Usage: node scripts/eval-engine.js
 * Exit: 0 on pass, 1 on fail.
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const engine = require('../src/engine');

const CHAT_MODE = process.env.CHAT_MODE === '1';
const EXPECTED_OPTIONS = CHAT_MODE ? 4 : 8;

async function runEval(name, platform, userId, message, checks = {}) {
  const result = await engine.run(platform, userId, message);
  const errors = [];

  if (checks.nonEmptyText !== false) {
    if (!result.text || typeof result.text !== 'string' || result.text.trim().length === 0) {
      errors.push(`${name}: expected non-empty text, got "${(result.text || '').slice(0, 50)}..."`);
    }
  }

  if (checks.options !== false) {
    const minOpts = checks.minOptions ?? EXPECTED_OPTIONS;
    if (!Array.isArray(result.options) || result.options.length < minOpts) {
      errors.push(`${name}: expected at least ${minOpts} options, got ${(result.options || []).length}`);
    }
  }

  if (checks.entity && result.entity !== checks.entity) {
    errors.push(`${name}: expected entity ${checks.entity}, got ${result.entity}`);
  }

  if (checks.mode && result.mode !== checks.mode) {
    errors.push(`${name}: expected mode ${checks.mode}, got ${result.mode}`);
  }

  return { name, result, errors };
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('eval-engine: OPENAI_API_KEY required');
    process.exit(1);
  }

  const sessionId = `eval-${Date.now()}`;
  const cases = [
    {
      name: 'Russia update (STATE)',
      platform: 'eval',
      userId: sessionId,
      message: 'Russia update',
      checks: { entity: 'RUSSIA', mode: 'STATE' },
    },
  ];

  console.log('Engine eval: running', cases.length, 'case(s)...');
  const results = [];
  for (const c of cases) {
    const r = await runEval(c.name, c.platform, c.userId, c.message, c.checks);
    results.push(r);
    if (r.errors.length > 0) {
      console.error('FAIL', c.name, r.errors);
    } else {
      console.log('PASS', c.name, `(${r.result.options?.length || 0} options, ${r.result.text?.length || 0} chars)`);
    }
  }

  const failed = results.filter((r) => r.errors.length > 0);
  if (failed.length > 0) {
    console.error('Eval failed:', failed.length, 'of', results.length);
    process.exit(1);
  }
  console.log('Eval passed:', results.length);
  process.exit(0);
}

main().catch((err) => {
  console.error('Eval error:', err);
  process.exit(1);
});
