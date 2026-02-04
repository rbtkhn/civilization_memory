# AUDIT — SCHOLAR–ANGLIA, SCHOLAR–TEMPLATE, SCHOLAR–PROTOCOL

**Date:** 2026-01-31  
**Scope:** CIV–SCHOLAR–ANGLIA v1.0; CIV–SCHOLAR–TEMPLATE v2.10; CIV–SCHOLAR–PROTOCOL v2.6; .cursor/rules/cmc-scholar-mode.mdc  
**Purpose:** Cross-audit Scholar–Anglia vs Template and Protocol; Template vs Protocol consistency; Cursor rule alignment

---

## I. EXECUTIVE SUMMARY

| Audit | Status |
|-------|--------|
| **Template ↔ Protocol** | Aligned; Protocol v2.6 implements Template v2.10; compatibility refs consistent |
| **SCHOLAR–ANGLIA vs Template** | Phase I compliant; Template v2.10 declared; OGE embedded; Assumptions Boxes on frozen syntheses; **Protocol ref stale (v2.2 → v2.6)** |
| **SCHOLAR–ANGLIA vs Protocol** | Phase I; OGE requirements met in embedded spec; **Governed-by pointer updated to v2.6** |
| **Cursor rule (cmc-scholar-mode)** | Aligned with Template/Protocol OGE, voice, LEARN prohibitions; references CMC–BOOTSTRAP v2.14 |

**Actions taken:** CIV–SCHOLAR–ANGLIA header updated: Governed by: CIV–SCHOLAR–PROTOCOL **v2.6**.

---

## II. TEMPLATE ↔ PROTOCOL ALIGNMENT

### II.A Version and Authority

| Item | Template v2.10 | Protocol v2.6 | Status |
|------|-----------------|---------------|--------|
| Authority | Governs all CIV–SCHOLAR files | Implements Template; subordinate to CIV–MEM–CORE | ✓ |
| Compatibility | CIV–SCHOLAR–PROTOCOL **v2.2+** | CIV–SCHOLAR–TEMPLATE **v2.10+** | ✓ |
| Phase model | I Accumulation, II Constraint Grammar, III Snapshot | Same; Phase II synthesis permitted (constraint-oriented) | ✓ |
| OGE | XI OGE in LEARN; XI.A embedding MANDATORY | V OGE MANDATORY; pre-mode interface | ✓ |
| Synthesis tradecraft | XIV Assumptions Box, ACH, Confidence tier | Defers to Template | ✓ |
| LEARN voice | IX Mercouris; III.L by mode | VII LEARN: Full Mercouris, academic prose | ✓ |
| Cognitive interaction | XI OGE — M–M propagation; response option | V OGE — Cognitive Interaction; POST-BARNES (XIV-C TRIG_STATE_002) | ✓ |

**Verdict:** Template and Protocol are consistent. Protocol v2.6 adds Cognitive Maintenance Triggers (XIV-C), Loadable State (XIV-B), READ/REASON (XIV-A); none conflict with Template.

### II.B Protocol Body Refs to Template

Protocol body cites Template v2.5 / v2.6 in places; Template is v2.10. All backward-compatible. No change required for correctness; optional clarity: "v2.6+" or "v2.10" where a single version is stated.

---

## III. SCHOLAR–ANGLIA vs TEMPLATE

### III.A Header Compliance

| Field | Template expectation | CIV–SCHOLAR–ANGLIA v1.0 | Status |
|-------|------------------------|---------------------------|--------|
| Template Version Used | Declared | CIV–SCHOLAR–TEMPLATE v2.10 (Phase I minimal structure) | ✓ |
| Governed by | Protocol version | CIV–SCHOLAR–PROTOCOL **v2.6** (updated from v2.2) | ✓ Fixed |
| Phase | Phase I / II / III | Phase I (Accumulation) — implicit in structure and lock | ✓ |
| Compatibility | CIV / MEM / SCHOLAR | CIV / MEM / SCHOLAR Architecture (Phase I) | ✓ |
| ARC Reference | Current ARC | CIV–ARC–ANGLIA v1.11 | ✓ |

### III.B Template Requirements vs ANGLIA

| Requirement | Template | ANGLIA | Status |
|-------------|----------|--------|--------|
| OGE embedded (XI.A) | MANDATORY all SCHOLAR files | OGE — EMBEDDED SPECIFICATION (§ after IX); 6 categories; POST-BARNES | ✓ |
| Frozen SYNTHESIS → Assumptions Box (XIV.A) | MANDATORY | SYNTHESIS 0002, 0003, 0010, 0013 each have Assumptions Box | ✓ |
| Confidence tier in SYNTHESIS (XIV.C) | MANDATORY | Each frozen synthesis: "Confidence: TIER 2 (70–90%…)" | ✓ |
| Phase I: no RLL binding | RLLs not binding in Phase I | ANGLIA uses Doctrine Registry (v0.1–v0.5); no RLL–ANGLIA–#### | ✓ (Doctrine = frozen synthesis outcome) |
| Count tracking (XII, RECOMMENDED) | Learning entries, frozen syntheses, etc. | VIII: Doctrine Count 5, Total Entries 18, Next Entry ID 0019 | ✓ |
| Anomaly Flag (VI) | REQUIRED Phase II | Phase I; N/A until Phase II | ✓ Exempt |

### III.C Section Map Note

ANGLIA retains Phase I minimal structure (ingested events, belief synthesis log, doctrine registry, SDI). It does not duplicate Template sections II (Phase Model), III (RLL Authority), IV (Failure-First), VI (Conflict Handling), IX (Communication Register full spec), XIII (Context Loading), or XIV (Tradecraft full text). OGE and synthesis tradecraft are embedded by reference and local specification. This is **documented Phase I minimal** per prior audit; no structural change required unless Phase II is adopted.

### III.D ACH Record (XIV.B)

Template: ACH Record required **when** alternative frameworks were evaluated. ANGLIA frozen syntheses do not show ACH Records. If no competing hypotheses were formally evaluated during synthesis, ACH is not required. **No violation**; optional future enhancement if syntheses are revised with explicit alternative evaluation.

---

## IV. SCHOLAR–ANGLIA vs PROTOCOL

### IV.A Protocol v2.6 Requirements vs ANGLIA

| Protocol requirement | ANGLIA | Status |
|----------------------|--------|--------|
| Phase-aware operation | Phase I; WRITE-LOCKED; no autonomous learning | ✓ |
| OGE exactly 8 options (A–H), M/M when prior MIND | Embedded OGE spec: 8 options; POST-BARNES M/M response | ✓ |
| LEARN: no MEM write, no canonical output, no CORE modify | VII, XI: Permitted/Forbidden stated | ✓ |
| Cognitive Interaction: response option when MIND in play | OGE spec references cmc-tri-frame-protocol | ✓ |
| TRIG_STATE_002: Barnes spoke → next OGE must include M/M options | Embedded OGE: "POST-BARNES: next OGE must include Mercouris responds to Barnes, Mearsheimer responds to Barnes" | ✓ |

### IV.B Governance Pointer

**Before audit:** Governed by: CIV–SCHOLAR–PROTOCOL v2.2  
**After audit:** Governed by: CIV–SCHOLAR–PROTOCOL v2.6  

Protocol v2.6 is current; SCHOLAR–ANGLIA now references it.

---

## V. CURSOR RULE (cmc-scholar-mode.mdc) vs TEMPLATE/PROTOCOL

| Item | cmc-scholar-mode | Template / Protocol | Status |
|------|-------------------|----------------------|--------|
| OGE 8 options | Exactly 8 (A–H), one line each | Template XI, Protocol V | ✓ |
| Mearsheimer/Barnes | Include where applicable | Same | ✓ |
| Connection-derived option | When MEM under analysis | Template XI, Protocol V (implied) | ✓ |
| Continuation option | At least one extends current analysis | Same | ✓ |
| Response option | When another MIND in play; X responds to Y | Protocol V OGE — Cognitive Interaction; Template XI | ✓ |
| Voice | Mercouris default; LEARN/WRITE academic prose; IMAGINE spoken | CIV–MIND–MERCOURIS III.L | ✓ |
| LEARN prohibited | Writing MEMs, canonical output, CORE modify, narrative closure | Protocol VII | ✓ |
| Binding reference | CMC–BOOTSTRAP v2.14 | Protocol/Template defer to CORE | ✓ |

POST-BARNES (M/M response options) is stated in cmc-oge-enforcement and cmc-tri-frame-protocol; cmc-scholar-mode references those. **Aligned.**

---

## VI. FINDINGS SUMMARY

1. **Protocol version:** CIV–SCHOLAR–ANGLIA referenced PROTOCOL v2.2; current is v2.6. **Fixed:** Header updated to Governed by: CIV–SCHOLAR–PROTOCOL v2.6.
2. **Template version:** ANGLIA correctly declares Template v2.10. No change.
3. **OGE and synthesis tradecraft:** ANGLIA embeds OGE spec and has Assumptions Boxes + Confidence tier on all frozen syntheses. Compliant.
4. **Phase I:** ANGLIA is Phase I; RLL binding, Anomaly Flag, and Phase II–only mandates do not apply. Documented.
5. **Cursor rule:** cmc-scholar-mode aligns with Template and Protocol; no edits required.

---

## VII. RECOMMENDATIONS

1. **Done:** Update CIV–SCHOLAR–ANGLIA "Governed by" to CIV–SCHOLAR–PROTOCOL v2.6.
2. **Optional:** When adding new frozen syntheses, consider ACH Record if alternatives are evaluated (Template XIV.B).
3. **Optional:** In ANGLIA XIV or version note, add one-line: "Governance: CIV–SCHOLAR–PROTOCOL v2.6 (2026-01-31)." for traceability.

---

**END OF AUDIT — SCHOLAR–ANGLIA, TEMPLATE, PROTOCOL — 2026-01-31**
