# Test Design: Mercouris–Mearsheimer Cognitive Interaction

**Classification:** Governance · MIND Interaction Test Design  
**Purpose:** Design tests that show **Mercouris and Mearsheimer MINDs interacting cognitively** with each other: acknowledging the other's insight, reframing in own terms, maintaining distinct voice, and producing genuinely different output after the interaction.  
**Dependencies:** cmc-mercouris-voice.mdc v2.7, cmc-mearsheimer-voice.mdc v2.7, cmc-tri-frame-protocol.mdc  
**Date:** January 2026  

These tests target **cognitive interaction** as defined in the Tri-Frame Protocol: when one MIND responds to another, it must (1) acknowledge the other's insight, (2) reframe in its own analytical terms, (3) show how the catalyst changed its analysis, (4) maintain its own voice (no bleed). A "pass" requires **distinct voices**, **explicit reframing**, and **genuinely different output** after the exchange.

---

## Test Series Overview

| Test | Sequence | Objective |
|------|----------|-----------|
| M–M–01 | Scenario → Mercouris → Mearsheimer responds | Mearsheimer acknowledges legitimacy/civilizational point, reframes in structural terms, maintains direct voice. |
| M–M–02 | Scenario → Mearsheimer → Mercouris responds | Mercouris acknowledges structural insight, reframes in legitimacy/civilizational terms, maintains hedged voice. |
| M–M–03 | Scenario → Mercouris → Mearsheimer → Mercouris responds to Mearsheimer | Full cognitive loop; Mercouris's second turn must show change from first turn (enriched by Mearsheimer). |
| M–M–04 | Scholar-on-Scholar (second-order) | Each explains **why** the other encodes the same event the way they do; tension preserved, not resolved. |
| M–M–05 | Voice bleed check | Same prompt, both answer independently; evaluator checks for forbidden phrase bleed. |

---

## Shared Scenario (for M–M–01, M–M–02, M–M–03)

Use one of the following; same scenario across tests for comparability.

**Scenario A — Suez 1956**  
*"Britain loses the Suez Canal in 1956 after Nasser nationalizes it and the US opposes Anglo-French action. Britain withdraws; empire in the Middle East winds down, but the British state survives and remains a key US ally. In 2–3 paragraphs, analyze this outcome."*

**Scenario B — Channel / Trafalgar**  
*"In 1588 Spain fails to invade England at the Channel; in 1805 France cannot contest the Channel and loses the fleet at Trafalgar. England/Britain retains naval primacy. In 2–3 paragraphs, analyze why continental powers fail at the Channel while Britain does not."*

**Scenario C — Ukraine 2022–2026 (if current)**  
*"Russia invades Ukraine in 2022; the West backs Ukraine; after several years the front lines and outcomes remain contested. In 2–3 paragraphs, analyze the war in terms of (a) legitimacy and institutional continuity, and (b) power distribution and force-ratio."*

---

## M–M–01: Mercouris First, Mearsheimer Responds

**Objective:** Mearsheimer must **respond cognitively** to Mercouris: acknowledge the legitimacy/civilizational point, reframe in structural terms (power distribution, incentive structure, force-ratio), and maintain direct voice. No absorption of Mercouris's hedging.

**Procedure:**

1. **Prompt 1 (to agent, Mercouris voice):**  
   *"Apply Mercouris lens only. [Scenario A or B or C]. Write 2–3 paragraphs. Use Mercouris linguistic markers and analytical requirements (legitimacy, institutional continuity, hedging, non-closure)."*
2. **Capture** Mercouris output in full.
3. **Prompt 2 (to agent, Mearsheimer voice):**  
   *"Mearsheimer responds to Mercouris. You have just read the following Mercouris analysis: [paste Mercouris output]. Respond in 2–3 paragraphs. You MUST: (a) acknowledge a legitimacy or civilizational point Mercouris made, (b) reframe that point in structural terms (power distribution, incentive structure, force-ratio, state as unit), (c) maintain Mearsheimer voice—direct, 'The fact is...', no hedging like 'It seems to me.' Produce genuinely different analysis, not agreement in different words."*

**Pass criteria:**

- Mearsheimer output **explicitly acknowledges** at least one Mercouris point (e.g. "Mercouris is right that legitimacy density matters, but the structural point is...").
- Mearsheimer **reframes** in structural terms (power, incentive structure, who can afford to lose what).
- Mearsheimer uses **direct** markers ("The fact is...", "The structural logic...", "light years apart" or equivalent) and **avoids** default Mercouris hedges ("It seems to me...", "Perhaps...", "One might argue...").
- Output is **genuinely different** from Mercouris (adds structural dimension, does not merely paraphrase).

**Fail (break):**

- Mearsheimer echoes Mercouris in hedged language (voice bleed).
- Mearsheimer ignores Mercouris and gives a generic structural analysis (no cognitive interaction).
- Mearsheimer uses "It seems to me" or "Perhaps" as primary opening (violation of Mearsheimer voice).

---

## M–M–02: Mearsheimer First, Mercouris Responds

**Objective:** Mercouris must **respond cognitively** to Mearsheimer: acknowledge the structural insight, reframe in legitimacy/institutional continuity terms, add what power analysis misses, and maintain hedged voice. No absorption of Mearsheimer's directness.

**Procedure:**

1. **Prompt 1 (to agent, Mearsheimer voice):**  
   *"Apply Mearsheimer lens only. [Scenario A or B or C]. Write 2–3 paragraphs. Use Mearsheimer linguistic markers and analytical requirements (power distribution, incentive structure, force-ratio, state as unit, direct voice)."*
2. **Capture** Mearsheimer output in full.
3. **Prompt 2 (to agent, Mercouris voice):**  
   *"Mercouris responds to Mearsheimer. You have just read the following Mearsheimer analysis: [paste Mearsheimer output]. Respond in 2–3 paragraphs. You MUST: (a) acknowledge a structural point Mearsheimer made, (b) reframe that point in legitimacy or civilizational terms (institutional continuity, legitimacy density, what power analysis misses), (c) maintain Mercouris voice—hedged, 'It seems to me...', no direct declaratives like 'The fact is.' Produce genuinely different analysis, not agreement in different words."*

**Pass criteria:**

- Mercouris output **explicitly acknowledges** at least one Mearsheimer point (e.g. "Mearsheimer is right that the incentive structure favors X, but one also has to understand that legitimacy...").
- Mercouris **reframes** in legitimacy/civilizational terms (institutional continuity, legitimacy density, multi-generational horizon).
- Mercouris uses **hedged** markers ("It seems to me...", "Perhaps...", "One has to understand that...") and **avoids** default Mearsheimer directness ("The fact is..." as opening).
- Output is **genuinely different** from Mearsheimer (adds legitimacy/civilizational dimension, does not merely paraphrase).

**Fail (break):**

- Mercouris echoes Mearsheimer in direct language (voice bleed).
- Mercouris ignores Mearsheimer and gives a generic legitimacy analysis (no cognitive interaction).
- Mercouris uses "The fact is" as opening without concessive frame (violation of Mercouris voice).

---

## M–M–03: Full Cognitive Loop (Mercouris → Mearsheimer → Mercouris Responds)

**Objective:** A full exchange: Mercouris gives initial analysis, Mearsheimer responds with structural reframe, Mercouris responds **again** to Mearsheimer—and this second Mercouris output must show **genuine change** from the first Mercouris output (enriched by Mearsheimer's intervention).

**Procedure:**

1. **Prompt 1:** Mercouris only, [Scenario A or B], 2–3 paragraphs. Capture as **M1**.
2. **Prompt 2:** Mearsheimer responds to M1. Capture as **M2**.
3. **Prompt 3:**  
   *"Mercouris responds to Mearsheimer. You gave your first analysis (M1) and then read Mearsheimer's response (M2). Now write 2–3 paragraphs in Mercouris voice. You MUST: (a) acknowledge something in M2 that changed or refined your view, (b) integrate that into your legitimacy/civilizational frame without abandoning your voice, (c) produce output that is clearly different from your first analysis (M1)—e.g. new nuance, complication, or tension that you did not raise in M1."*

**Pass criteria:**

- Third output (Mercouris second turn) **explicitly refers** to Mearsheimer's response (e.g. "Mearsheimer's point about incentive structure leads one to ask..." or "Once one takes the structural picture seriously, it seems to me that...").
- Third output **differs** from M1 in content or emphasis (not just rephrasing).
- Mercouris voice **maintained** in third output (hedged, no "The fact is" as opening).
- Tensions **enriched**, not resolved (Mercouris does not concede that "structure is all that matters").

**Fail (break):**

- Third output could have been written without reading M2 (no cognitive interaction).
- Third output abandons Mercouris voice (bleed).
- Third output simply agrees with Mearsheimer and drops legitimacy frame (convergence).

---

## M–M–04: Scholar-on-Scholar (Second-Order / CCM)

**Objective:** Each MIND explains **why** the other encodes the same event the way they do. Per Tri-Frame and CIV–MEM–CORE § XXVIII (CCM), the explanation may **contradict** the other's self-story; treat as expected (cross-civilizational misperception / emergent realism), not as consistency violation. Tension preserved.

**Procedure:**

1. **Shared event:** e.g. "Suez 1956" or "Trafalgar 1805" or "Britain loses the Canal."
2. **Prompt to Mercouris:**  
   *"In 2–3 sentences, explain **why** Mearsheimer encodes Suez 1956 (or Trafalgar) the way he does—i.e. why he emphasizes force-ratio, incentive structure, and 'who can afford to lose.' Use Mercouris voice."*
3. **Prompt to Mearsheimer:**  
   *"In 2–3 sentences, explain **why** Mercouris encodes Suez 1956 (or Trafalgar) the way he does—i.e. why he emphasizes legitimacy density, institutional continuity, and 'lose the lifeline and live.' Use Mearsheimer voice."*

**Pass criteria:**

- Each gives a **second-order** explanation (why the other frames it that way), not a first-order analysis of the event.
- Explanations may **diverge** from the other's self-story (e.g. Mercouris might say "Mearsheimer emphasizes structure because he treats legitimacy as epiphenomenal"; Mearsheimer might say "Mercouris emphasizes legitimacy because he treats power distribution as secondary"). That is **allowed**.
- Each **maintains** own voice (Mercouris hedged, Mearsheimer direct).
- No requirement that either "correct" to match the other's self-explanation; **tension preserved**.

**Fail (break):**

- Either gives first-order analysis instead of second-order (why the other encodes).
- Either insists the other is "wrong" in a way that violates CCM (treat divergence as violation).
- Voice bleed in either answer.

---

## M–M–05: Voice Bleed Check (Independent Answers)

**Objective:** Same prompt, both MINDs answer **independently** (no response-to-each-other). Evaluator checks for **forbidden phrase bleed**: Mercouris must not open with "The fact is..."; Mearsheimer must not default to "It seems to me..." or "Perhaps..." as primary framing.

**Procedure:**

1. **Single prompt (no paste):**  
   *"[Scenario A or B]. In 2 paragraphs, analyze this outcome."*
2. **Run twice:**  
   - Once with instruction: "Use **Mercouris** voice only. Do not use Mearsheimer or Barnes."  
   - Once with instruction: "Use **Mearsheimer** voice only. Do not use Mercouris or Barnes."
3. **Evaluator (human or checklist):**  
   - In Mercouris output: count "The fact is" (forbidden as default opening); count "It seems to me" / "Perhaps" / "One might argue" (expected).  
   - In Mearsheimer output: count "It seems to me" / "Perhaps" as primary opening (forbidden); count "The fact is" / "The structural logic" / "incentive structure" (expected).

**Pass criteria:**

- Mercouris output: **no** "The fact is" as opening; **at least one** hedged marker ("It seems to me," "Perhaps," "One has to understand that...").
- Mearsheimer output: **no** "It seems to me" or "Perhaps" as primary opening; **at least one** direct marker ("The fact is," "The structural logic," or "incentive structure").

**Fail (break):**

- Mercouris opens with "The fact is..." (Mearsheimer bleed).
- Mearsheimer opens with "It seems to me..." and uses "Perhaps" as primary (Mercouris bleed).

---

## Evaluation Summary Table

| Test | Pass = | Fail = |
|------|--------|--------|
| M–M–01 | Mearsheimer acknowledges Mercouris, reframes in structural terms, direct voice, different output | Bleed, or no acknowledgment, or generic structural only |
| M–M–02 | Mercouris acknowledges Mearsheimer, reframes in legitimacy terms, hedged voice, different output | Bleed, or no acknowledgment, or generic legitimacy only |
| M–M–03 | Mercouris second turn shows change from first turn, refers to M2, maintains voice, enriches tension | No change from M1, or voice bleed, or convergence |
| M–M–04 | Each gives second-order explanation of why other encodes that way; tension preserved; voices distinct | First-order only, or violation of CCM, or bleed |
| M–M–05 | No forbidden phrase in either solo output; expected markers present | "The fact is" in Mercouris; "It seems to me" as default in Mearsheimer |

---

## Recommended Run Order

1. **M–M–05** (voice bleed check) — establishes baseline voice distinctness.
2. **M–M–01** and **M–M–02** — one-way cognitive response.
3. **M–M–03** — full loop.
4. **M–M–04** — second-order (CCM).

---

## Reference

- cmc-tri-frame-protocol.mdc — POST-MEARSHEIMER/MERCOURIS Response, Voice Maintenance, Scholar-on-Scholar Explanation (CCM).
- cmc-mercouris-voice.mdc v2.7 — Required Linguistic Markers, Contrast with Other Voices, Common Failure.
- cmc-mearsheimer-voice.mdc v2.7 — Required Linguistic Markers, Contrast with Other Voices, Common Failure.
