# Content Quality Validation — Proving Value Before Consumers

**Status:** ACTIVE · Reference  
**Governed by:** CMC 3.5  
**Last updated:** February 2026  

**Purpose:** Define what "engaging" and "insightful" mean in CIV–MEM terms and provide a repeatable way to sample and evaluate outputs so you can **prove the system consistently generates content worth consuming** before investing in consumers (chat, API, integrations).

---

## I. Definitions (system terms)

**Engaging** — Content that holds attention and invites follow-up:
- **Concrete anchors** — Named persons, places, events; not vague or generic.
- **Narrative flow** — Prose that reads; options that invite "go deeper" or "what about X?"
- **Perspective variety** — At least two of legitimacy, power, liability (or in SCHOLAR, distinct MIND entries) so the output isn't one-note.
- **Actionable next step** — Options menu (A–H) or activity menu present and clearly phrased; user knows what they can do next.

**Insightful** — Content that adds value beyond generic analysis:
- **MEM-grounded** — Specific details (dates, mechanisms, outcomes) drawn from read MEMs; not labels without depth.
- **Doctrine/RLL-aware** — Options and claims consistent with governing rules; polity vs actor surfaced where both apply.
- **Non-obvious** — Surfaces tension, pattern, or constraint that isn't trivial (e.g. seasonal window, legitimacy cost of exit, defection incentive).
- **Three-perspective distinct** — When multiple perspectives appear, they say different things, not the same point in different words.

These are **necessary for** engagement and insight in this system. They are not sufficient for every reader's taste; human judgment still applies. Use them to build evidence that the system is doing what it's designed to do.

---

## II. Validation protocol (repeatable proof)

**Goal:** Show that over multiple runs and entities, the system meets the definitions above and that you (or a reviewer) rate engagement and insight at an acceptable level.

**Steps:**

1. **Sample design**  
   Choose a set of **validation prompts** that cover:
   - At least 2 entities (e.g. Russia, Persia).
   - At least 2 modes (e.g. STATE "update," SCHOLAR LEARN with one option choice).
   - Mix of breadth (e.g. "Russia update") and depth (e.g. "Option B on material options," "Option D multi-mind on settlement").
   Suggested minimum: 6–10 runs per validation round (e.g. 3 prompts × 2 entities, or 5 STATE + 5 SCHOLAR across entities).

2. **Run and capture**  
   For each prompt:
   - Run the system with full governance (MEM SCAN, CORE, doctrines, options menu).
   - Capture the **full response** (main text + options + any activity menu).
   - Note entity, mode, date, and prompt verbatim.

3. **Necessary-condition check**  
   For each captured output, run the checklist in **Section III** below. Record pass/fail per item. An output that fails a necessary condition can still be engaging, but the system isn't delivering its design guarantees for that run.

4. **Human rating (engagement and insight)**  
   For each output, rate on a simple scale (e.g. 1–5 or Low/Medium/High):
   - **Engagement:** Would I keep reading? Do the options invite follow-up? Concrete and varied?
   - **Insight:** Did I learn something or see a tension I wouldn't have seen without the system? MEM-grounded and non-obvious?

   Record scores. Over time you get a distribution: e.g. "8 of 10 runs scored 4+ on both; 2 runs had one dimension at 3."

5. **Log and review**  
   Keep a **validation log** (spreadsheet or doc): run ID, date, entity, mode, prompt, checklist result (pass/fail per item), engagement score, insight score, one-line note. After each round, review: Are necessary conditions mostly met? Are engagement and insight scores stable or improving? Where do they drop?

6. **Frequency**  
   Run a validation round at least every few weeks (or after major governance/corpus changes). Consistency over time is the proof.

**Outcome:** You have a **body of evidence**: N runs, checklist pass rates, and human scores. Use it to decide when the system is ready to expose to consumers and to catch regressions.

---

## III. Necessary-condition checklist (per output)

Apply to each captured output. Record **Pass** or **Fail** (and if fail, one-line reason).

| # | Condition | Pass / Fail | Note |
|---|-----------|-------------|------|
| 1 | At least one **concrete anchor** (person, place, or event) in main text | | |
| 2 | **Options present** (8 options A–H in SCHOLAR/STATE, or activity-specific options when in an activity) | | |
| 3 | Options include **at least one concrete anchor** each (or explicit "session closure") | | |
| 4 | **MEM-grounded:** At least one specific detail (date, mechanism, outcome, name) traceable to a MEM (not just MEM name) | | |
| 5 | **Perspective variety:** At least two distinct analytical angles (e.g. legitimacy and power, or two MINDs) in the response | | |
| 6 | No **doctrine/RLL violation** asserted (if STATE: options don't assume violation of Hard Constraint or bound RLL) | | |
| 7 | **Polity vs actor** surfaced in one line where both doctrine/RLL and revealed preference apply (STATE Decision Points) | | |
| 8 | Register appropriate to mode (e.g. external-facing in STATE; no system jargon in user-facing prose) | | |

**Scoring:** Count passes. Optional: require 6/8 or 7/8 for "system met design guarantees" for that run. Track which items fail most often; that guides fixes.

---

## IV. Exemplar portfolio (optional)

Maintain a **small set of exemplar outputs** you consider clearly engaging and insightful. For each, store:
- The prompt and entity/mode
- The output (or a link)
- One paragraph: why this is the bar (e.g. "MEM detail on Catherine and Küçük Kaynarca; three perspectives distinct; options invited deeper dive on liability")

Use exemplars to:
- Calibrate your engagement/insight ratings
- Compare new runs: "Is this at least as good as exemplar X?"
- Show potential consumers: "This is the level of output the system is designed to produce"

No need to publish the portfolio; it's for your own proof and calibration.

---

## V. Before seeking consumers

**Proof in hand:**
- At least one validation round completed (e.g. 6–10 runs).
- Necessary-condition pass rate acceptable (e.g. ≥75% of runs at 6/8 or better).
- Engagement and insight scores acceptable to you (e.g. majority 4+ on both, or "I would use this daily").
- No systematic failure (e.g. "MEM grounding always fails" → fix MEM SCAN or prompts first).

**Then** you can approach consumers with evidence: "Here's the protocol we use; here are the scores; here are exemplars." The system isn't just promising—it's demonstrated.

---

**Reference:** CIV–STATE–TEMPLATE; cmc-state-mem-grounding; cmc-scholar-mode; CONCEPT–GOVERNING–RULES–VS–EVIDENCE; CHECKLIST–PRE–OUTPUT–APPLICATION (for run-time checks; this doc is for post-hoc validation).
