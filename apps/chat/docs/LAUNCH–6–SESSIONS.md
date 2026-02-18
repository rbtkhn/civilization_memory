# Launch the Telegram bot in 6 × 30-minute sessions

Use Cursor (and the repo) for all steps. Each session is ~30 minutes. Goal: bot runs, responds in Telegram with STATE-style answers and A–H options, and you have a repeatable launch checklist.

---

## Session 1 — Env, install, first run

**Goal:** App starts; health check works; no missing deps.

1. `cd apps/chat` (from repo root).
2. Copy `.env.example` to `.env`. Set:
   - `OPENAI_API_KEY` (required for engine).
   - `TELEGRAM_BOT_TOKEN` (from [@BotFather](https://t.me/BotFather); can add in Session 2 if you prefer).
   - `CIVMEM_CONTENT_ROOT` — set to **absolute path to this repo root** (so `content/civilizations/RUSSIA/` etc. exist). If you always run from repo root, you can leave blank (default is `apps/chat/../..` = repo root).
3. `npm install`.
4. `npm start`. Confirm: "CIV–MEM Chat listening on port 3000" and either "Telegram bot started" or "TELEGRAM_BOT_TOKEN not set".
5. In another terminal or browser: `curl http://localhost:3000/health` → `{"ok":true,"service":"civmem-chat"}`.

**Done when:** Process runs and `/health` returns OK. No red errors in console.

---

## Session 2 — Telegram connected

**Goal:** Bot receives a message and replies (even if reply is generic or errors).

1. Get a bot token from [@BotFather](https://t.me/BotFather) if you don’t have one. Put it in `.env` as `TELEGRAM_BOT_TOKEN`.
2. Restart: `npm start`. Log should say "Telegram bot started (polling)."
3. Open your bot in Telegram (private chat). Send any message (e.g. `hi`).
4. You should see "Thinking…" then a reply (or an error message in chat). If you see "Something went wrong…", check console for OPENAI or path errors; fix in Session 3.

**Done when:** Bot responds in Telegram. If it errors, note the message; next session fixes it.

---

## Session 3 — One good e2e (Russia update)

**Goal:** Send "Russia update" and get a real answer + 8 option buttons (A–H).

1. In Telegram, send: `Russia update`.
2. If the reply is wrong or missing options: (a) Check that `content/civilizations/RUSSIA/CIV–STATE–RUSSIA.md` and `MEM–RELEVANCE–RUSSIA.md` exist. (b) Check `CIVMEM_CONTENT_ROOT` in `.env` (must point to repo root). (c) In Cursor, run the engine once via HTTP to see the raw response:  
   `curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"platform":"telegram","user_id":"test","message":"Russia update"}'`
3. If options don’t appear: the LLM may not be emitting the `OPTIONS:` block. Check `src/prompts/system.js` and the regex in `src/engine.js` (OPTIONS_REGEX). Optionally add a fallback in the adapter (e.g. show A–H with generic labels if parsing fails).
4. Repeat until you get one clean reply with text + 8 tappable options.

**Done when:** "Russia update" → one coherent answer + A–H buttons that you can tap.

---

## Session 4 — Entity switch + errors

**Goal:** "Switch to Persia" / "Iran update" works; missing files don’t crash the bot.

1. Send `Iran update` or `Switch to Persia`. Confirm entity switches to PERSIA (reply should reflect Persia/Iran content if STATE and MEM–RELEVANCE exist for PERSIA).
2. If a civ has no STATE or MEM–RELEVANCE, the engine still runs but context will show "[Could not load...]". Optionally: in `load-content.js` or the prompt, handle missing files with a short "No STATE file for X; try Russia or Persia." Or leave as-is and document which entities are supported.
3. Add or improve one piece of logging (e.g. in `engine.js`: log entity and option count) so future failures are easier to debug.
4. Test one invalid or edge case (e.g. very long message, or empty message) and confirm the bot doesn’t crash.

**Done when:** Entity switch works; one civ without files doesn’t break the app; you have at least one log line that helps debugging.

---

## Session 5 — Group chat

**Goal:** Bot works in a group when @mentioned or replied to; one shared session per group.

1. Create a Telegram group (or use existing). Add your bot.
2. Send a normal message (no @mention, no reply). Bot should **not** reply.
3. Send `@YourBotName Russia update` (replace with your bot’s username). Bot should reply with answer + A–H.
4. Reply to the bot’s message with e.g. `B` or "Forward projection". Bot should reply again (same shared thread).
5. Have another person (or another account) tap option B. Confirm the next reply continues the same thread (same entity/session). If something breaks (e.g. wrong session key), fix in `adapters/telegram.js` (sessionKey, shouldRespondInGroup, stripMention).

**Done when:** In groups, bot replies only when @mentioned or replied to; everyone shares one session per group; A–H work.

---

## Session 6 — Launch checklist + doc

**Goal:** "Launched" is defined and repeatable.

1. Run through the README setup once from a clean clone (or from another machine): clone, `cd apps/chat`, copy `.env.example` → `.env`, fill keys and `CIVMEM_CONTENT_ROOT`, `npm install`, `npm start`. Fix any missing steps in README.
2. Write down a **launch checklist** (e.g. in this file or README):  
   - [ ] OPENAI_API_KEY and TELEGRAM_BOT_TOKEN set  
   - [ ] CIVMEM_CONTENT_ROOT points to repo root (if needed)  
   - [ ] `npm start` → bot started  
   - [ ] Private chat: "Russia update" → reply + A–H  
   - [ ] "Iran update" or "Switch to Persia" → entity switch  
   - [ ] Group: @mention and reply-to-bot work; one session per group  
3. Note which entities you tested (e.g. RUSSIA, PERSIA). Optional: add a line to README: "Tested with RUSSIA and PERSIA; other entities require STATE + MEM–RELEVANCE in content."
4. Declare launch: e.g. update CMC–BOOTSTRAP PRECONDITION block when you’re ready to satisfy the v4.0 gate.

**Done when:** Another person (or you in a week) could follow the checklist and get the bot running. Gate for v4.0 can be marked satisfied.

---

## After 6 sessions

You should have: a running bot, one entity (e.g. Russia) working end-to-end, entity switch, group behaviour, and a repeatable launch checklist. Next steps (optional): validation round (CONCEPT–CONTENT–QUALITY–VALIDATION), more entities, or webhook instead of polling.
