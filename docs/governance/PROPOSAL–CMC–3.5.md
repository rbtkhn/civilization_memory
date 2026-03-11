PROPOSAL–CMC–3.5
Civilizational Memory Codex · Governance Upgrade Proposal
Optimization and Refinement Cycle

Status: IMPLEMENTED · 10 March 2026
Author: CMC System
Date: 10 March 2026
Proposes: CMC 3.4 → 3.5

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────

Define the scope and changes for CMC 3.5, operationalizing the placeholder "Optimization and refinement cycle" in VERSION–MANIFEST.

────────────────────────────────────────────────────────────
II. PROPOSED SCOPE (CONCRETE)
────────────────────────────────────────────────────────────

**A. 3.3 Phase B formal completion**

- **Action:** Update ROADMAP–CMC–3.3 Phase B status from "In Progress" to "Complete."
- **Rationale:** Governance alignment audit (2026-03-10) confirms templates and cursor rules are aligned to CMC 3.4; no contradictory 3.2 language in active enforcement paths; backward-compatible aliases (relay, harvest) retained.
- **Deliverable:** ROADMAP–CMC–3.3 Section II Phase B exit criteria verified; status set to Complete.

**B. Chronicle artifact type (governed structure)**

- **Action:** Add Event Chronicle as a governed artifact type in CIV–MEM–CORE (or equivalent governance reference).
- **Rationale:** IRAN–WAR–CHRONICLE exists with cursor rule cmc-chronicle-mind-voice; schema, MIND assignment, and relationship to STATE/JOURNAL are established. Formalizing the type prevents drift and enables future chronicles (e.g., other conflicts, crises).
- **Deliverables:**
  1. CIV–MEM–CORE: New subsection or addendum under File Class Taxonomy (or new section III-B) defining:
     - **Event Chronicle** — Append-only, day-by-day (or equivalent granularity) record of reported events and attributed quotes for a conflict, crisis, or unfolding situation.
     - Relationship: Supplements CIV–STATE–[CIV]; sources and reasoning remain in STATE Section VII; Chronicle is the structured event/quotation record.
     - Governance: Schema discipline (fixed block order), MIND voice assignment by section (per cmc-chronicle-mind-voice), append-only, attribution rules, contradiction surfacing.
  2. Cursor rule cmc-chronicle-mind-voice remains the operational enforcement; CORE provides canonical status.
- **Scope:** One new CORE subsection or addendum; no new template or protocol unless user requests.

**C. Governance drift fixes (from 2026-03-10 audit)**

- **Action:** Apply the one recommended fix from AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT–2026–03–10.
- **Deliverable:** NAMESPACE–CLARIFICATION.md title line: `v3.3` → `v3.4` (or `v3.5` if upgrade applied).
- **Rationale:** Ensures consistency before/after version bump.

**D. Version bump propagation**

- **Action:** Update VERSION–MANIFEST, CMC–BOOTSTRAP, CIV–MEM–CORE, CHANGELOG, and governance files to CMC 3.5.
- **Deliverable:** Binding declaration "Bound by CMC 3.5"; MAJOR VERSIONS table updated; ROADMAP–CMC–3.3 governed by CMC 3.5.

────────────────────────────────────────────────────────────
III. OUT OF SCOPE (NOT IN 3.5)
────────────────────────────────────────────────────────────

- **3.3 Phase C/D:** Tooling integration and cross-stream hardening remain Planned. 3.5 does not absorb them.
- **Chronicle template:** No new CIV–CHRONICLE–TEMPLATE unless explicitly requested. Cursor rule + CORE reference suffice.
- **Telegram bot / CMC 4.0 gate:** Unchanged; 4.0 remains gated on bot integration.
- **New procedures or cursor rules:** None beyond existing cmc-chronicle-mind-voice.

────────────────────────────────────────────────────────────
IV. IMPLEMENTATION CHECKLIST
────────────────────────────────────────────────────────────

- [ ] 1. ROADMAP–CMC–3.3: Phase B status → Complete; add completion date
- [ ] 2. CIV–MEM–CORE: Add Event Chronicle subsection (III-B or addendum to III)
- [ ] 3. NAMESPACE–CLARIFICATION: Title v3.3 → v3.5
- [ ] 4. VERSION–MANIFEST: CMC 3.4 → 3.5; MAJOR VERSIONS; binding
- [ ] 5. CMC–BOOTSTRAP: Governed by CMC 3.5; Bound by CMC 3.5
- [ ] 6. CIV–MEM–CORE: Version 3.4 → 3.5; UPGRADE NOTE (v3.5)
- [ ] 7. CHANGELOG: New entry 00029 for CMC 3.5; Governed by CMC 3.5
- [ ] 8. Governance files: Governed by CMC 3.5 (protocols, concepts, checklists as needed)
- [ ] 9. Run AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT post-upgrade

────────────────────────────────────────────────────────────
V. RISK ASSESSMENT
────────────────────────────────────────────────────────────

- **Low:** Phase B completion is declarative; audit evidence supports it.
- **Low:** Chronicle formalization is additive; does not change MEM, STATE, or SCHOLAR behavior.
- **Low:** Drift fix and version bump are standard propagation.

────────────────────────────────────────────────────────────
VI. APPROVAL
────────────────────────────────────────────────────────────

- [ ] User approves scope and implementation
- [ ] Implementation executed per checklist
- [ ] Post-upgrade audit run

────────────────────────────────────────────────────────────
END OF FILE — PROPOSAL–CMC–3.5
────────────────────────────────────────────────────────────
