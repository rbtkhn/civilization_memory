# CIV–MEM: Maturity and Industrial Intelligence Stack

This document maps CIV–MEM onto the **Industrial Intelligence Stack** and **L0–L5 maturity curve** from the essay (Ch. 3). It is a one-off governance view: where the system stands, what exists, and where the gaps are. Used for prioritization and shared vocabulary—not a compliance checklist.

**Essay reference:** "Solved" = bottleneck shifts from human genius to compute; the stack (Purpose → Task taxonomy → Observability → Targeting → Model → Actuation → Verification → Governance → Distribution) is the anatomy of an industrialized domain.

---

## 1. Industrial Intelligence Stack — CIV–MEM Mapping

| Layer | Essay name | CIV–MEM instantiation | Status |
|-------|------------|------------------------|--------|
| **Purpose and Payoff** | The Goal | Doctrines, RLLs, Material Options; "success" = options grounded, constraints respected, patterns surfaced | Present (CIV–DOCTRINE, CIV–STATE IV, SCHOLAR syntheses) |
| **Task Taxonomy** | The Map | Activities named in STATE template: Decision Points (X-B), Pattern Audit, Stability Watch, Signal Check (X-J), Probability Assessment (X-K), Relay to Scholar/State. Steps are in template and cursor rules. | Present (template + rules); no separate formal checklist to avoid duplication |
| **Observability** | The Eyes | Activity log (Telegram NDJSON), transfer log (logs/transfer.ndjson), token usage in activity log; STATE Log, Source Versions | Present |
| **Targeting System** | The Harness | Doctrines (Hard Constraints), RLLs, MEM–RELEVANCE; evals: engine structure (scripts/eval-engine.js) | Partial: evals check structure; no adversarial or doctrine-contradiction harness yet |
| **Model** | The Brain | LLM (OpenAI) with system prompts; mode/entity/routing explicit | Present |
| **Actuation** | The Hands | Cursor (file edits, relay); Telegram (read-only output); future Static HTML (IMAGINE) | Present (Cursor, Telegram); HTML planned |
| **Verification / Red Teaming** | The Immune System | Eval script (structure); ARC source coverage, negative-claim check, source contradiction surfacing | Partial: safeguards in rules; no continuous adversarial evals |
| **Governance and Incentives** | The Rules | Relay rules (exclusive gate); user authorizes transfer; no automatic write | Present |
| **Distribution and Maintenance** | The Scale | Cursor primary; Telegram + API as channels; CHAT_MODE, webhook | Present |

**Gaps:** Targeting (evals) could be extended to doctrine-contradiction and adversarial cases. Verification layer is rule-based, not yet automated attack surface.

---

## 2. L0–L5 Maturity — Domain-by-Domain

Applied to CIV–MEM sub-domains. Labels are approximate and for discussion.

| Domain | Maturity | Notes |
|--------|----------|--------|
| **STATE session (material options, decision points)** | L1–L2 | Goals measurable (options, constraints, evidence); procedures in template; human-led, graded by doctrine and MEM grounding. Not yet automated execution. |
| **SCHOLAR synthesis (LEARN, patterns, RLLs)** | L1–L2 | Measurable (syntheses, ENTRY, RLLs); playbooks in SCHOLAR template and MIND profiles. Human-led; AI assists. |
| **MEM grounding** | L1–L2 | MEM–RELEVANCE + CONNECTIONS; MEM SCAN procedure. Measurable (did we read the file?); repeatable (slim/full context). |
| **Relay / transfer** | L2 | Explicit procedure; user gate; transfer log. Repeatable, auditable. |
| **Chat output (Telegram)** | L2–L3 | Structured (4/8 options, routing line); evals for structure; token logging. Human consumes; AI does majority of reply generation. |
| **Targeting (doctrine check, evals)** | L1–L2 | Doctrines and RLLs exist; evals check structure. No full "harness" that actively tries to break the system. |
| **Overall system** | L1–L2 | Measurable and repeatable in key areas; not yet industrialized (L4) or commoditized (L5). |

**L0 (The Muddle)** is what we avoid by having doctrines, relay gates, and explicit activities. We are past "no agreed rules."

**L5 (Solved)** would mean: "CIV–MEM analysis" is a compute-bound utility; add more compute/data and you get more coverage. We are not there; human judgment and curation remain central.

---

## 3. Use of This Document

- **Prioritization:** Gaps in the stack (e.g. stronger verification, adversarial evals) can be scheduled when resource allows.
- **Vocabulary:** "Targeting system," "observability," "actuation" align with the essay when discussing roadmap.
- **Revisit:** Update when the system meaningfully changes (e.g. Static HTML channel, new evals). No need to keep in lockstep with every change.

---

## 4. Targeting Vocabulary (Essay Ch. 6)

Shared language for how we think about measurement and progress. Definitions are from the essay; CIV–MEM mapping shows how we instantiate them.

**Targeting system vs scoreboard**  
- **Scoreboard:** Looks backward; records who is winning. Static.  
- **Targeting system:** Looks forward; directs capital and effort. Prospective, blinded, anti-gaming, auditable, continuous. A clear on the target is a contractual event (reward/payment can release).  
- **CIV–MEM:** Doctrines and RLLs act as targets (they direct what "good" looks like). The eval script is still scoreboard-like (structure check). Moving toward targeting means: evals that are prospective (e.g. rotating entities/patterns), adversarial (cases that should force failure or abstention), and tied to a defined "clear" (e.g. MEM grounding satisfied, no doctrine contradiction).

**Abundance flywheel (5 steps)**  
1. **Commitment** — Pre-committed compute/effort aimed at a hard target.  
2. **Focus** — R&D until the target clears.  
3. **Collapse** — Domain tips from craft to industrial process.  
4. **Surplus** — Unit cost plummets; new value created.  
5. **Reinvestment** — Surplus funds next target; flywheel spins.  
- **CIV–MEM:** We don't run a full flywheel (no financial escrow, no automatic payment on clear). We do have: commitment (doctrines, relay gate), focus (activities and evals), and a user gate that acts like "payment on clear" (transfer only when user approves). Surplus and reinvestment are implicit (better analysis → more use → more refinement).

**Failure modes (and how we counter them)**  
- **Spec capture:** Optimizing the metric instead of the mission. *Counter:* Gated spiral awareness—name which doctrines shaped the finding; link Purpose ↔ Task ↔ Metric explicitly.  
- **Data leakage:** Model performs well by memorizing test set. *Counter:* Prospective, rolling tests; rotate eval inputs (entities, patterns); blinded holdouts where feasible.  
- **Monoculture:** One model or one perspective; single point of failure. *Counter:* Three MINDs, ARC multi-category sources, no single source as truth.  
- **Reliability variance:** Good on average, bad for edge cases or cohorts. *Counter:* ARC source coverage, negative-claim check, fairness/subgroup awareness in doctrine design where relevant.

**Rails vs trains**  
- **Trains:** The models, the prompts, the particular LLM. Commoditized over time; swappable.  
- **Rails:** The targeting platforms, audit infra, data lineage, action surfaces, gates. Durable; they determine where the trains can go.  
- **CIV–MEM:** The rails are doctrines, RLLs, MEM–RELEVANCE, relay protocol, transfer log, activity log, evals, and cursor rules. The train is the LLM and the prompt stack. We optimize and document the rails; we can swap the train.

**Calibrated abstention**  
Reward "I don't know" over guessing. *CIV–MEM:* Mercouris hedging and scope limits ("I'm not going to speculate…") encourage abstention; we don't yet score or penalize overconfident wrong answers explicitly.

---

## 5. Reference

- Essay: Ch. 3 (The Mechanics), Ch. 6 (The Engine); Industrial Intelligence Stack, L0–L5, targeting systems, flywheel, failure modes.
- CIV–MEM: CIV–STATE–TEMPLATE, CMC–BOOTSTRAP, cmc-state-mem-grounding, cmc-gated-spiral-awareness, TRANSFER-LOG.md, apps/chat (engine, eval, activity log).
