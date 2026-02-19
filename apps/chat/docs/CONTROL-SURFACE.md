# Control surface and output channels

**Cursor** is the **primary control surface**: full control — edit files, run relay-to-scholar/relay-to-state, WRITE, LEARN, STATE, authorize doctrine changes. You steer the system and change the corpus.

**Output channels** are read-only interfaces that consume the same substance (STATE, SCHOLAR, MEM) but do not write, relay, or change governance. Same engine, different formats and UX. Some channels are tied to a **mode**: e.g. **IMAGINE** (SCHOLAR sub-mode: scenario exploration, counterfactuals, pedagogical exposition) has multiple output channels; Static HTML is one of them, with others planned (e.g. virtual reality, role-playing games).

| Channel   | Strengths                         | Constraints              |
|-----------|-----------------------------------|--------------------------|
| **Cursor**   | Full control, edit, relay, authorize | IDE-bound                |
| **Telegram** | At-hand, quick, conversational     | Small screen, no write   |
| **Static HTML** | Rich layout, tables, links, shareable | Read-only, no live chat |

- **Telegram** — Implemented. Chat-optimized (CHAT_MODE) or Cursor-style 8 options; see README and CHAT–MODE–CONTRACT.
- **Static HTML** — One of the output channels for **IMAGINE mode**; next in line for implementation. Renders IMAGINE content (scenarios, exposition, option trees) as static HTML for any browser. Other IMAGINE output channels are planned (e.g. virtual reality, role-playing games).

### Potential output channels (future)

Other channels that are ubiquitous, decent UX, and relatively low technical threshold:

| Channel | Strengths | Tech / notes |
|---------|-----------|---------------|
| **Email (HTML digests)** | Universal; good for summaries, links, tables; async | SMTP + templates; newsletters, weekly STATE snapshot |
| **PDF export** | Universal viewers; print/share/archive | Generate from HTML or Markdown; one-click “Export as PDF” |
| **RSS** | Universal in feed readers; “stream of updates” | Emit XML; very low tech; subscribe in Feedly, Inoreader, etc. |
| **Slack** | Common in work; slash commands, rich blocks | Well-documented API; e.g. `/civmem Russia update` |
| **WhatsApp** | Huge reach; Telegram-like (text + buttons) | Business API; some verification/setup |
| **Discord** | Big in communities; bots, channels | Low–medium effort; good for “ask and get options” |
| **Google Sheets / CSV** | Universal; familiar; sort/filter | Export material options or MEM tables; trivial export |
| **Voice (Alexa / Google)** | Hands-free; “Hey Google, Russia update?” | Build skill/action; moderate setup; templates exist |

Rough order for “ubiquitous + nice UX + low tech”: Email → PDF → RSS → Static HTML → Slack → WhatsApp → Sheets → Voice.

---

## Telegram (this doc)

Telegram is one **read-only output channel** for the same CIV–MEM reasoning and options you use in Cursor: same modes, entity focus, 8-option menu (A–H) or chat-optimized 4 options, and activities. The bot does **not** modify any repo files.

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
