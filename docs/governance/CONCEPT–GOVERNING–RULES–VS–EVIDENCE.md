# Governing Rules vs Evidence — Conceptual Layer

**Status:** ACTIVE · Reference  
**Governed by:** CMC 3.4  
**Last updated:** February 2026  

**Purpose:** Define the split between what **governs** (constraints, rules) and what **illustrates** (evidence, narrative). This supports a single constraint backbone for STATE and SCHOLAR and clarifies how doctrines and RLLs are consumed.

---

## I. Two layers

| Layer | Role | Contents | Consumers |
|-------|------|----------|-----------|
| **Governing rules** | Constrain what can happen; define invalidation triggers | CORE axioms, CIV–DOCTRINE (incl. Hard Constraints), bound RLLs | STATE (material options, scenario branches, relay), SCHOLAR (syntheses, doctrine proposals), Pattern Audit, Assumption Stress Test, Scenario Tree |
| **Evidence / narrative** | Illustrate, ground, and falsify | MEMs, ARC, chronicles, primary sources | STATE (grounding, parallels), SCHOLAR (LEARN, syntheses), all activities for historical detail |

**Principle:** Governing rules are the **backbone** that material options and scenario branches must not assume violated. Evidence supplies the **content** that makes analysis specific and testable. Any process that generates "what can happen" (options, branches) should resolve to the same governing-rule set so the system stays one system.

---

## II. Constraint backbone

- **Doctrine Hard Constraints** — If condition X holds, doctrine review is required. STATE checks these in relay (XIV 4b), Pattern Audit (X-H 5b), and when flagging doctrine stress from Scenario Tree or Assumption Stress Test.
- **Bound RLLs** — Recurring patterns that MEMs and options can depend on; violation or stress should be flagged, not silently assumed.
- **Material options vs doctrine/RLL** — When presenting or revising material options (Section IV), confirm no option assumes violation of a doctrine Hard Constraint or bound RLL. If it does, flag as doctrine-stress or RLL-stress (relay step 4c, completeness checklist XIII).
- **Scenario and stress-test feedback** — When a Scenario Tree branch or an Assumption Stress Test result implies an outcome that contradicts a doctrine or bound RLL, flag it for doctrine/RLL review (Scenario Tree closure step 6, Stress Test closure step 5). This makes "the scenario teaches the codex" operational.

Reference: CIV–STATE–TEMPLATE Section XIV (Relay), Section XIII (Completeness checklist), X-E (Scenario Tree), X-D (Assumption Stress Test).

---

## III. MEM–RELEVANCE: geography and period (recommended)

MEM–RELEVANCE–[CIV] is the primary dimension-based lookup for MEM SCAN. Dimensions are typically analytical (e.g. Attrition/Endurance, Fiscal Constraint, Morale Collapse). **Where useful**, an index may also include:

- **Geography** — e.g. "Black Sea", "Caucasus", "Baltic" — so STATE and SCHOLAR can query "what does the corpus say about this place?"
- **Period** — e.g. "1700–1800", "1800–1900" — so queries like "what does the corpus say about this period?" are supported.

This is optional and civ-specific. When present, the MEM SCAN procedure (cmc-state-mem-grounding) uses these dimensions when the activity is tied to a specific region or time period. When absent, discovery remains dimension-based and connection-based only.

---

## IV. Polity grammar vs actor behaviour

**Polity-level** = what the civilisation's patterns permit or forbid: doctrines, RLLs, CORE axioms, civilizational encoding (legitimacy, liability, structural incentive). This is the **grammar** of the entity.

**Actor-level** = what this leadership has actually done: revealed preference, specific decisions, behavioural record.

When assessing material options or decision-point options, distinguish the two. Do not treat "what the leadership did" as if it were "what the grammar allows." Where both are known, surface the tension in one line, e.g.: "Option B is doctrine-consistent; revealed preference has favoured Option A." STATE and SCHOLAR should name polity grammar (doctrines, RLLs) and actor behaviour (revealed preference) separately so the user sees both.

Reference: CIV–STATE–TEMPLATE Section X-B (Decision Points), Revealed Preference (X-F); CONCEPT (this doc) Section II (constraint backbone).

---

## V. Corpus-agnostic design

The system is **corpus-agnostic**: the same governance, STATE template, MEM SCAN procedure, and constraint backbone apply to any civilisation and period for which MEMs, CORE, doctrines, and RLLs are defined. The current MEM set (e.g. Russia, Persia, Germania) is one instance; expansion to other eras or entities uses the same engine. Scope is determined by what corpus exists, not by a fixed list of civilisations or dates.

---

## VI. Constraint quick-reference (optional)

To make relay step 4c, Scenario Tree closure, and Stress Test closure consistent without re-parsing long doctrine prose, maintain a **one-line summary** per active doctrine Hard Constraint and per bound RLL. Format (optional block in CIV–DOCTRINE–[CIV] or in the STATE file's Source Versions / constraint area):

- **Doctrine [name]:** If [condition X] then doctrine review.
- **RLL–[ID]:** [One-line pattern, e.g. "Seasonal campaigning window; major offensives outside window high risk."]

Update the block when doctrines or RLLs change. Procedures that check "option vs doctrine/RLL" (relay 4c, checklist XIII, Scenario Tree step 6, Stress Test step 5) may use this quick-reference for fast consistency checks.

---

**Reference:** CIV–STATE–TEMPLATE; cmc-state-mem-grounding.mdc; cmc-relay-to-state.mdc; CIV–DOCTRINE–TEMPLATE.
