# Chat-mode contract

This document defines the **chat-optimized mode** for Telegram (and other chat apps). It is a separate code path from the current Cursor-parity behaviour. When chat mode is enabled, the engine and prompts follow this contract.

**Design basis:** DESIGN–CHAT–MODE–OPTIONS.md §7 (Direction 1 — Short and simple), §8 (three-perspective discussion), §9 (concrete recommendations).

---

## 1. When chat mode applies

- **Trigger:** Controlled by env or runtime. Proposed: `CHAT_MODE=1` or `CHAT_OPTIMIZED=1` in `.env` (or a per-platform default: Telegram = chat mode, Cursor/compose = Cursor-style).
- **Effect:** When chat mode is on, the engine uses slim context by default, 4 options, short reply length, product framing, first-use disclaimer, and gated deep path. When off, current behaviour (8 options, 60–100 words default, full context).

---

## 2. Response length

| Path | Words | Trigger |
|------|--------|---------|
| **Default (quick)** | 40–60 (2–4 sentences) | Normal message or option selection |
| **Deep** | 150–250 | User says “More”, “Full answer”, “Full analysis”, “elaborate”, “expand”, “dive deeper”, “explain further”, or selects the “More / Full answer” option |

- **Headline first (recommended):** First sentence is a one-line takeaway; rest is supporting. Encouraged in system prompt for quick path.

---

## 3. Options (follow-up actions)

In chat mode, **exactly 4 options** after each substantive reply (replacing 8):

| Slot | Label (example) | Meaning |
|------|------------------|---------|
| **A** | More / Full answer | Gate to deep path: full context + 150–250 words; can re-output 4 options or offer “Done” |
| **B** | Other angle / Different perspective | Same quick path; answer from another perspective (legitimacy / power / liability) or another material option |
| **C** | Switch entity / New topic | Change entity or topic; then next reply is for new entity/topic with 4 options |
| **D** | Done / Summarize | Session closure: 1–2 sentence recap; then offer “New question” or entity pick |

- Option labels must be in **natural language**, 5–15 words, no internal codes.
- Parser and UI: expect 4 options (A–D). Regex and fallbacks in engine must support 4-option block (e.g. `OPTIONS:\s*\n((?:\s*[A-D]\s*—\s*.+\n?)+)` for chat mode).

---

## 4. Context load

| Path | STATE slice | SCHOLAR slice | MEM–RELEVANCE | History turns |
|------|-------------|---------------|----------------|---------------|
| **Quick (default)** | Slim (e.g. 8k chars intro + 8k Material Options) | Slim (e.g. 10k chars) | Same or slim (e.g. 4k) | 3 |
| **Deep** | Full (current: ~22k effective) | Full (current: ~18k) | Full (e.g. 6k) | 5 |

- **Implementation:** `load-content.js` exports or is called with a second parameter, e.g. `loadContext(entity, mode, { slim: true })`. When `slim`, use reduced `MAX_*_CHARS` for STATE/SCHOLAR/RELEVANCE. Engine passes `slim: !isDeepPath` (or similar).
- **Deep path:** When user triggers “More” / “Full answer”, set `isDeepPath` for that turn (and optionally next turn); use full context and deep word count.

---

## 5. Product framing line (Mercouris)

- **Text:** *“Summaries and quick angles from the Civilizational Memory Codex; tap More for full analysis.”*
- **When to show:** Once per session after the **first substantive reply** (first reply that contains actual content, not just “Which mode?” / “Which entity?”). Alternatively: once per user ever (then omit in later sessions).
- **Where:** Append as a separate short line below the main reply text (e.g. newline + italic or secondary style in Telegram).
- **Implementation:** Session flag `productFramingShown: true` after first substantive reply; if !productFramingShown, append framing line and set flag.

---

## 6. First-use disclaimer (Barnes)

- **Text:** *“Short answers here; tap More for full Codex analysis.”*
- **When to show:** On the **first substantive reply** in the session (same moment as or instead of product framing in that turn). Optionally: show only on very first use (persist “disclaimer seen” in session store or file).
- **Where:** Immediately after the main reply, before or with the product framing line. Can be combined into one line: *“Short answers here; tap More for full Codex analysis. — Summaries and quick angles from the Civilizational Memory Codex.”*
- **Implementation:** Same as product framing; can be one combined line and one flag `disclaimerShown` or `framingShown`.

---

## 7. Gate the deep path (Mearsheimer + Barnes)

- **Trigger:** User message contains “more”, “full answer”, “full analysis”, “elaborate”, “expand”, “dive deeper”, “explain further”, or user selects the **A** option “More / Full answer”.
- **Behaviour:**
  1. Load **full** context (slim = false).
  2. Set word-count target 150–250 in system/user prompt.
  3. Send to LLM; parse reply and 4 options (or keep 4 options including “Done”).
  4. Do **not** show first-use disclaimer again if already shown; product framing can be omitted on deep replies (optional).
- **Implementation:** In `engine.js`, before `loadContext` and prompt build: detect deep trigger from `message` or from last user message being option A with label “More / Full answer”. Pass `slim: false` and `deepPath: true` into prompt builder and content loader.

---

## 8. Mode (STATE vs SCHOLAR) in chat mode

- **Recommendation:** Keep both modes. User still chooses STATE or SCHOLAR after “hi” (or via /state, /scholar). Same content as now; only reply length, option count, and context size change.
- **Alternative (later):** Single “answer” mode that blends STATE + SCHOLAR and infers from question; contract can be extended to support that.

---

## 9. Flow (greeting, entity)

- **Unchanged for now:** hi → mode (A STATE / B SCHOLAR) → entity (A–K) → first substantive request. Chat-mode contract only changes what happens *after* entity is set (reply length, 4 options, framing, disclaimer, gated deep path).
- **Future:** Entity-first or lazy-entity flow can be added; then §5–6 (framing, disclaimer) may show after first substantive reply in that flow.

---

## 10. Implementation checklist

| Component | Change |
|-----------|--------|
| **.env** | Add `CHAT_MODE=1` (or `CHAT_OPTIMIZED=1`). |
| **load-content.js** | Add `opts = { slim: false }` to `loadContext(entity, mode, opts)`. When `opts.slim`, use smaller `MAX_*_CHARS` (e.g. STATE 8k+8k, SCHOLAR 10k, RELEVANCE 4k). |
| **prompts/system.js** | Add chat-mode branch: when chat mode, prompt specifies (1) 40–60 words default, (2) 4 options A–D with labels as above, (3) “Headline first” first sentence, (4) deep-path trigger phrases and 150–250 words when triggered. |
| **engine.js** | (1) Read `CHAT_MODE`; (2) if chat mode, detect deep-path trigger (message text or option A “More”); (3) call `loadContext(entity, mode, { slim: !deepPath })`; (4) build prompt with chat-mode rules and word limits; (5) parse 4 options (A–D) when in chat mode; (6) after first substantive reply, if !session.framingShown, append product framing + disclaimer line and set session.framingShown; (7) MAX_CONVERSATION_TURNS = 3 when slim, 5 when deep (optional). |
| **adapters/telegram.js** | No change to keyboard logic; 4 options render as 4 buttons when options.length === 4. |
| **session.js** | Add `framingShown` (or `disclaimerShown`) to session; set after first substantive reply in chat mode. |

---

## 11. Copy (exact strings for product and disclaimer)

- **Product framing:** `Summaries and quick angles from the Civilizational Memory Codex; tap More for full analysis.`
- **First-use disclaimer:** `Short answers here; tap More for full Codex analysis.`
- **Combined (one line):** `Short answers here; tap More for full Codex analysis. — Summaries and quick angles from the Civilizational Memory Codex.`

Use combined line once per session (or once ever) after first substantive reply to satisfy both Mercouris and Barnes recommendations.
