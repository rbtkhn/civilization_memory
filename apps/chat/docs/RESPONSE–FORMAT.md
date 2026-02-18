# Chat response format (canonical)

**Status:** Normative for all chat consumers.  
**Governed by:** This doc; engine in `src/engine.js` is the single producer.

---

## I. Principle

The engine returns **one canonical response shape**. All channels (Telegram, WeChat, API, future TTS or voice) **consume only that shape** and render it for their medium. No channel-specific fields; the system stays channel-agnostic. Adding a new channel (e.g. text-to-speech) means adding a **renderer** of the same output, not changing the engine or the format.

---

## II. Canonical shape (success)

The engine’s `run()` returns an object with:

| Field     | Type     | Required | Description |
|----------|----------|----------|-------------|
| `text`   | string   | yes      | Main reply body (plain or markdown). Length per prompt: default 60–100 words; up to 150–250 on “elaborate”/“expand”. |
| `options`| array    | yes      | Exactly 8 items when present. Each item: `{ letter: "A"|…|"H", label: string }`. Label 10–20 words, one concrete anchor; interpretable when read alone (accessibility/voice). |
| `entity` | string   | yes      | Current entity (e.g. `"RUSSIA"`, `"PERSIA"`) for display or session. |

**Example:**

```json
{
  "text": "Material options for Russia remain A–D. Advance rate is the discriminating variable; rasputitsa delays the next informative window to late May–July.",
  "options": [
    { "letter": "A", "label": "Legitimacy and institutional continuity on current options" },
    { "letter": "B", "label": "Power and structural constraint on advance rate" },
    { "letter": "C", "label": "Leadership liability and mechanism" },
    { "letter": "D", "label": "Three-perspective synthesis" },
    { "letter": "E", "label": "Historical precedent: Nicholas II, Vienna" },
    { "letter": "F", "label": "Forward projection 4–8 weeks" },
    { "letter": "G", "label": "Cross-entity impact (Ukraine, US, Europe)" },
    { "letter": "H", "label": "Assessment closure and STATE update" }
  ],
  "entity": "RUSSIA"
}
```

---

## III. Consumers

- **Telegram adapter:** Sends `text` + formatted options as message body; uses `options` for inline keyboard (A–H). Same shape for private and group.
- **HTTP `POST /chat`:** Returns this object as JSON. Callers may render as they like.
- **Future (e.g. TTS):** Consume `text` and optionally `options[].label`; render as speech. No change to this format.

---

## IV. Option-label rule

Option labels must be **self-contained**: clear when read aloud or by a screen reader without the main reply. This supports accessibility and future voice rendering. The system prompt enforces this; the engine does not validate it structurally.

---

**Reference:** `apps/chat/src/engine.js` (producer); `apps/chat/src/adapters/telegram.js` (consumer). Extend this doc if optional fields (e.g. `suggestedActions`) are added.
