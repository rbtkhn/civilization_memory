# Spec: Learning from History Book Image

**Status:** DRAFT  
**Purpose:** First real-world user surface for CIV–MEM — student uploads history book page photo, system delivers MEM-grounded interactive learning session.  
**Pilot:** One user, one month. Launch rough, iterate.

---

## 1. Flow

1. User sends **image** to Telegram bot.
2. **Vision** extracts topic (person, event, place, era) from the page.
3. **MEM lookup** finds 1–2 relevant MEMs (by topic keywords, MEM–RELEVANCE, or CIV–INDEX).
4. **Initial response:** 80–120 words, one core idea, age-appropriate, grounded in MEM content.
5. **4 options** as buttons (plus "Or ask anything").
6. User taps option or types free-form.
7. **Response:** 80–120 words, one idea, options derived from content and prior choices.
8. Repeat. Session ends when user taps "Done" or stops.

---

## 2. Message Length (Cognitive Load)

| Context | Target | Max |
|---------|--------|-----|
| Initial block | 80–120 words | 150 |
| Option response | 80–120 words | 150 |
| Per turn | ~100 words | 200 |

**Principles:** One idea per message. Lead with the idea. 2–3 sentence paragraphs. End with a hook for options.

---

## 3. Options

**Per turn:** 4 options + "Or ask anything" (free-form text).

**Option generation:** LLM proposes options each turn based on:
- Content just delivered
- Prior choices (session trajectory)
- Instruction to vary angles (legitimacy, power, mechanism, contrast, earlier, later, curiosity)
- Avoid repeating same angle; surface contrast or new thread if user has gone deep on one

**Fixed slot (optional anchor):** One option can be "Done" or "That's enough for now" when turn count > 2.

---

## 4. MEM Lookup

- **Input:** Extracted topic(s) from vision (e.g. "Charlemagne", "Holy Roman Empire", "Otto I").
- **Process:** Search MEM–RELEVANCE–[CIV], CIV–INDEX, or keyword match across MEM titles/subjects.
- **Output:** 1–2 MEM files (or excerpts) to use as context for the LLM.
- **Fallback:** If no MEM matches, respond: "I don't have much on that topic yet. Try a page about [related topic from corpus]."

**Scope:** Only topics with MEM coverage. Don't guess outside corpus.

---

## 5. Vision

- **Model:** GPT-4V or equivalent (image input).
- **Prompt:** "Extract the main historical topic(s) from this page: person(s), event(s), place(s), era. Return a short list of keywords for lookup."
- **Output:** e.g. `["Charlemagne", "Holy Roman Empire", "800", "Pope Leo III"]`

---

## 6. Session State

Store per user/session:
- `topic` — Extracted topic(s)
- `loadedMEMs` — Which MEMs are in context
- `priorChoices` — Last 2–3 option types (e.g. legitimacy, contrast)
- `turnCount` — For "Done" option and depth awareness

---

## 7. Prompt (Learning Mode)

System prompt for LEARNING mode:
- Use loaded MEM content; ground responses in it.
- Age-appropriate language (default: ~10–14).
- One idea per response; 80–120 words.
- Propose 4 options that respond to content and user curiosity.
- If user types free-form, answer from MEM content; then propose options that extend that answer.
- If no MEM coverage, say so; suggest related topic.

---

## 8. Implementation Checklist

- [ ] Telegram adapter: accept photo message
- [ ] Route: photo → LEARNING flow (not STATE/SCHOLAR)
- [ ] Vision call: extract topic keywords
- [ ] MEM lookup: topic → 1–2 MEM paths
- [ ] Load MEM content (excerpt, e.g. 3000 chars)
- [ ] Learning system prompt + user message (or "first turn" for image)
- [ ] LLM call → response text + 4 options
- [ ] "Or ask anything" → accept text, re-prompt with same context
- [ ] Session state: topic, MEMs, priorChoices, turnCount
- [ ] Option handler: append choice to conversation, get next response + options

---

## 9. Deferred (Post–Pilot)

- Age detection / targeting
- 6-option structure
- Personalization (visited nodes)
- Depth limits / branch exhaustion heuristics
- Broader topic coverage

---

## 10. Reference

- Chat engine: `apps/chat/`
- MEM–RELEVANCE, CIV–INDEX
- cmc-oge-enforcement (option structure)
- Charlemagne/HRE presentation (example output style)
