# CIV–MEM Chat

Chat backend and adapters so users can interact with the Civilizational Memory Codex via **Telegram** (and later WeChat). Same repo, same content; the chat layer is a thin client that loads MEM/STATE/SCHOLAR and calls an LLM with CIV–MEM rules.

## Architecture

- **Engine** (`src/engine.js`): Session state (entity + mode), load STATE or SCHOLAR + MEM–RELEVANCE by mode, build prompt, call OpenAI, parse response into the **canonical shape** `{ text, options, entity, mode }`. All channels consume only this shape; see [docs/RESPONSE–FORMAT.md](docs/RESPONSE–FORMAT.md).
- **Adapters**: Telegram bot (polling). Receives messages → engine → reply + inline keyboard (A–H). WeChat or other channels can be added as further consumers of the same output (text, voice, etc.).
- **HTTP** (`POST /chat`): For webhooks or other clients. Body: `{ "platform": "telegram", "user_id": "123", "message": "Russia update" }`. Returns the canonical response as JSON.

## Setup

1. **Repo root**  
   From repo root, or set `CIVMEM_CONTENT_ROOT` to the path of the CIV–MEM repo (so `content/civilizations/`, etc., resolve).

2. **Env**  
   Copy `.env.example` to `.env` and set:
   - `OPENAI_API_KEY` — required for the engine.
   - `TELEGRAM_BOT_TOKEN` — from [@BotFather](https://t.me/BotFather).
   - `CIVMEM_CONTENT_ROOT` — optional; default is parent of `apps/chat` (repo root if run from `apps/chat`).

3. **Install and run**
   ```bash
   cd apps/chat
   npm install
   npm start
   ```
   Or `npm run dev` for restart on file change.

4. **Telegram**  
   Open your bot in Telegram. Send **hi** (or hello, hey, etc.) to choose **mode** (STATE or SCHOLAR) and then **entity** (Russia, Persia, China) via multiple-choice buttons. After that, send e.g. `Russia update` or `Learn about Russia`; you get a reply and 8 option buttons (A–H). Tapping a button runs that option and returns the next reply + options.

   **Group chats:** Add the bot to a group. In groups the bot only replies when:
   - someone **@mentions** it (e.g. `@YourBotName Russia update`), or
   - someone sends a message that is a **reply to the bot’s last message**.  
   So the rest of the group isn’t triggered by every message. In groups, **one shared session per chat** is used: everyone shares the same entity and conversation thread; anyone can tap A–H to continue that thread.

## Options (A–H)

Same semantics as in CIV–MEM STATE mode:

- **A** — Legitimacy / institutional continuity  
- **B** — Power / structural constraint  
- **C** — Leadership liability / mechanism  
- **D** — Three-perspective synthesis  
- **E** — Historical precedent (MEMs)  
- **F** — Forward projection  
- **G** — Cross-entity impact  
- **H** — Assessment closure / synthesize  

## Entity

Session keeps current entity (e.g. RUSSIA, PERSIA). You can:
- **Explicit set:** `entity Russia`, `entity Persia`, `/entity Iran` — sets entity and confirms (no LLM call).
- **Update / switch:** “Russia update”, “Iran update”, “Switch to Persia” — sets entity (if inferred) and runs an update.

Default is RUSSIA.

## Activities

- **STATE:** `Decision Points` — current decision point(s), material options, discriminating evidence from STATE.
- **SCHOLAR:** `Learn about Russia` or `Russia learn` — synthesis of patterns and RLLs from SCHOLAR.

## Control surface (read-only)

Telegram is a **read-only control surface**: same options and flow as Cursor, no modification of STATE/SCHOLAR/MEM files. See [docs/CONTROL-SURFACE.md](docs/CONTROL-SURFACE.md).

## Webhook (optional)

Telegram can use a webhook instead of polling. Set `WEBHOOK_BASE_URL` and register the webhook URL with Telegram; add a route in `src/index.js` that receives `req.body` (Telegram update) and calls the Telegram adapter’s handler. Current code uses polling for simplicity.

## Next: Sessions 4–6

After Session 3, run **Session 4** (entity switch + errors), **Session 5** (group @mention/reply), and **Session 6** (launch checklist). See [docs/LAUNCH–6–SESSIONS.md](docs/LAUNCH–6–SESSIONS.md).

## License / repo

Part of the CIV–MEM repository. Same governance and content; this app is a read-only consumer of MEM/STATE/SCHOLAR.
