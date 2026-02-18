# Telegram as read-only control surface

Telegram is a **control surface** for the same CIV–MEM reasoning and options you use in Cursor: same modes, entity focus, 8-option menu (A–H), and activities. The bot does **not** modify any repo files.

## Scope

- **Read-only.** The bot loads STATE, MEM–RELEVANCE (and SCHOLAR when relevant) and returns analysis and options. It never writes to STATE, SCHOLAR, or MEM files.
- **Parity of control.** You can drive the same procedures from Telegram as in Cursor: entity, "[entity] update", option taps, and named activities (e.g. Decision Points). Proposals (e.g. from "relay to state") are shown in chat for reference; applying them is done elsewhere (e.g. in Cursor) if at all.
- **No write path.** There is no "apply to state" or file-edit backend from Telegram. Scope is explicitly limited so no auth or write infrastructure is required.

## STATE vs SCHOLAR

- **STATE** — Present-oriented decision support. Loads STATE + MEM–RELEVANCE. "Russia update", "Decision Points". Options A–H: legitimacy, power, liability, synthesis, precedent, forward, cross-entity, closure.
- **SCHOLAR** — Past-oriented learning (LEARN). Loads SCHOLAR + MEM–RELEVANCE. "Learn about Russia", "Russia learn". Options A–H: civilizational, structural, liability, multi-perspective, backward/forward traversal, cross-civ, synthesis.

Switch mode: `state`, `scholar`, `/state`, `/scholar`, or "switch to state" / "switch to scholar". Session stores current mode and entity.

## What you can do in Telegram

- Set mode: `state`, `scholar`, `/state`, `/scholar`, or "switch to scholar".
- Set entity: `entity Russia`, `entity Persia`, `/entity Iran`, or "Russia update" / "Switch to Persia".
- **STATE:** "Russia update", "Iran update" → material options and stability + 8 options. "Decision Points" → decision point and options from STATE.
- **SCHOLAR:** "Learn about Russia", "Russia learn" → synthesis of patterns and RLLs from SCHOLAR + 8 options.
- Tap A–H to continue; entity and mode are preserved.

## Reference

- Options (A–H) semantics: STATE mode and SCHOLAR mode (see README).
- Response format: `docs/RESPONSE–FORMAT.md`.
- Launch and testing: `docs/LAUNCH–6–SESSIONS.md`.
