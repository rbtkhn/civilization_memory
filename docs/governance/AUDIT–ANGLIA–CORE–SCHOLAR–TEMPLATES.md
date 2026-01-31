# AUDIT — CIV–CORE–ANGLIA & CIV–SCHOLAR–ANGLIA vs Templates

**Date:** 2026-01-31  
**Scope:** CIV–CORE–ANGLIA v1.6 vs CIV–CORE–TEMPLATE v2.0; CIV–SCHOLAR–ANGLIA v1.0 vs CIV–SCHOLAR–TEMPLATE v2.10  
**Purpose:** Structural alignment, header compliance, section order, and mandatory template requirements  
**Anchor:** CIV–CORE–TEMPLATE § III, § VI; CIV–SCHOLAR–TEMPLATE § II, § XI.A, § XIV

---

## I. EXECUTIVE SUMMARY

| File | Status | Critical gaps |
|------|--------|----------------|
| **CIV–CORE–ANGLIA** | ALIGNED (with documented deviations) | None |
| **CIV–SCHOLAR–ANGLIA** | GAPS (Phase I) | 2 mandatory: Assumptions Box for frozen SYNTHESIS; OGE embedding |

**CORE:** Header complete; section order follows documented civilization-specific structure (Dynastic at VI, DIB at XIX, Verdict at XXI; Technological/Compute omitted). No typos. Prior audit fixes (2026-01-30) are reflected.

**SCHOLAR:** Phase I behavior and phase declaration compliant. Legacy section map documented. Frozen syntheses (0002, 0003, 0010, 0013 → Doctrines v0.1–v0.5) lack **Assumptions Box** (Template XIV.A — mandatory for all frozen SYNTHESIS). File lacks **embedded OGE specification** (Template XI.A — mandatory for all SCHOLAR files). Confidence tier not declared in SYNTHESIS status blocks (Template XIV.C). Count tracking partial (recommended only).

---

## II. CIV–CORE–ANGLIA v1.6 vs CIV–CORE–TEMPLATE v2.0

### II.A Header compliance

| Field | Template | CIV–CORE–ANGLIA | Status |
|-------|----------|------------------|--------|
| Filename | CIV–CORE–[CIV] — vX.X | CIV–CORE–ANGLIA — v1.6 | ✓ |
| Full Title | Present | Present | ✓ |
| Status | Present | ACTIVE · CANONICAL · … | ✓ |
| Version | Present | 1.6 | ✓ |
| Supersedes | If applicable | v1.5 | ✓ |
| Upgrade Type | Mandatory | ADDITIVE · GOVERNANCE INTERFACE | ✓ |
| Template Version Used | Mandatory | CIV–CORE–TEMPLATE v2.0 (civilization-specific structure noted) | ✓ |
| Compatibility | Present | CIV / MEM / SCHOLAR Architecture (CMC v2.2+) | ✓ |
| Governed by | — | CIV–MEM–CORE v2.8 | ✓ |
| Civilization Phase | PHASE I / II / III | PHASE I (Accumulation) | ✓ |
| Lock Level | Present | STRUCTURAL | ✓ |
| Last Update | Month Year | January 2026 | ✓ |
| WORDCOUNT | Mandatory (§ XII) | ~1,640 | ✓ |

**Verdict:** Header fully compliant. No omissions.

### II.B Section order and content

Template § VI specifies I–XX; optional modules after XX. ANGLIA declares civilization-specific structure in header:

- **VI.** Dynastic Continuity Layer (Template VI = Economic–Industrial; ANGLIA places Economics at VII)
- **VII.** Economic–Financial Doctrine (covers Template VI in spirit)
- **No dedicated Section VII** for Technological / Compute Sovereignty (documented omission)
- **XIX.** DIB (optional module; Template XIX = Session Header Optional)
- **XX.** Session Header (Optional)
- **XXI.** Mandatory Verdict Block

Structural renumbering is **documented** in "Template Version Used" and in prior audit (Option B retained). No change required for compliance.

### II.C Typos and diagnostics

- No GOVERNANAD / DIVERGENAD in current file (fixed per 2026-01-30 audit).
- Verdict Block present at § XXI; diagnostic outputs (PTI, IC, GRID-A, RIR-A, etc.) aligned with template § VII–X.

**CORE verdict:** ALIGNED with documented deviations. No remedial action required.

---

## III. CIV–SCHOLAR–ANGLIA v1.0 vs CIV–SCHOLAR–TEMPLATE v2.10

### III.A Header and Phase I alignment

| Field | Template | CIV–SCHOLAR–ANGLIA | Status |
|-------|----------|---------------------|--------|
| Version | vX.X | v1.0 | ✓ |
| Civilization Phase | PHASE I / II / III | PHASE I (Accumulation) | ✓ |
| Template Version Used | v2.10 | CIV–SCHOLAR–TEMPLATE v2.10 (Phase I minimal structure) | ✓ |
| Governed by | Protocol v2.2+ | CIV–SCHOLAR–PROTOCOL v2.2 | ✓ |
| ARC Reference | CIV–ARC–[CIV] | CIV–ARC–ANGLIA v1.0 | ✓ |
| Last Update | Optional | January 2026 | ✓ |

Phase I permitted/forbidden: Learning ingestion, pattern recording, hypothesis staging ✓. Doctrine creation only by explicit freeze ✓. RLLs not binding ✓. Phase declaration ✓.

### III.B Legacy section map

ANGLIA uses ledger-centric section order (I–XXI: Purpose, Initial State, Ingested Events, Synthesis Log, Doctrine Registry, SDI, Governance, Status, Controlled Synthesis, Candidate Belief, MEM influence, MEM guidance, Template inheritance, Versioning, End state, additive ledger). Template § XIII ("Template inheritance") states "Phase I minimal structure; legacy section map retained." **Verdict:** Documented; Phase I exempt from Template nominal section order.

### III.C Mandatory gaps (Template v2.10)

**1. Assumptions Box (Template XIV.A — MANDATORY)**

- **Rule:** "All frozen SYNTHESIS entries MUST include an Assumptions Box."
- **ANGLIA:** Frozen syntheses: 0002, 0003, 0010, 0013 (→ Doctrines v0.1, v0.2, v0.4, v0.5). None contain an Assumptions Box.
- **Template:** "Frozen SYNTHESIS without Assumptions Box is INVALID." "Assumptions Box may be added retrospectively to pre-v2.10 syntheses."
- **Action:** Add Assumptions Box to each frozen SYNTHESIS (0002, 0003, 0010, 0013) per Template format (§ XIV.A). No re-freeze required for retrospective add.

**2. OGE embedding (Template XI.A — MANDATORY, v2.7+)**

- **Rule:** "OGE specification MUST be embedded in every SCHOLAR file." "6-option format with content requirements."
- **ANGLIA:** No embedded OGE specification (no 6-option format, no INGESTION/EXPLORATION/ANALYSIS/SYNTHESIS/TRANSITION/OBSERVATION categories or equivalent).
- **Action:** Add an "OGE — LEARN MODE" (or equivalent) section embedding the 6-option OGE specification per Template XI and CMC–BOOTSTRAP (6 options, M+B, connection-derived when MEM active, continuation option).

**3. Confidence tier (Template XIV.C — MANDATORY for SYNTHESIS)**

- **Rule:** "Confidence tier MUST appear in SYNTHESIS status block" (TIER 1–4).
- **ANGLIA:** No "Confidence: TIER" in any SYNTHESIS status block.
- **Action:** For each frozen SYNTHESIS, add to status block: `Confidence: TIER [1-4] ([range])`. Can be added when adding Assumptions Box.

### III.D Recommended (non-blocking)

- **Count tracking (Template XII):** ANGLIA VIII has "Doctrine Count: 5, Total Entries: 18, Next Entry ID: 0019." Template recommends: Learning entries, Frozen syntheses, Bound RLLs, Proposed RLLs. Extending VIII to full count template is recommended, not required for Phase I.
- **RLL namespace:** When/if ANGLIA promotes to Phase II and binds RLLs, use RLL–ANGLIA–####. No current violation.

### III.E ACH Record (Template XIV.B — conditional)

- ACH required only when "≥2 competing hypotheses were considered" during synthesis. If frozen syntheses were produced without formal competing-hypothesis evaluation, ACH is not triggered. If they were, ACH Record should be added to those SYNTHESIS entries. **Recommendation:** For each frozen SYNTHESIS, note in audit log whether alternatives were evaluated; if yes, add ACH Record.

---

## IV. RECOMMENDED ACTIONS (PRIORITY)

### CIV–CORE–ANGLIA
- **None.** Current state aligned with template given documented deviations.

### CIV–SCHOLAR–ANGLIA
1. **High:** Add Assumptions Box to SYNTHESIS 0002, 0003, 0010, 0013 (≥3 assumptions each; linchpin status; format per Template XIV.A).
2. **High:** Embed OGE specification in SCHOLAR file (new section or subsection: 6 options, M+B, connection-derived option, continuation option; categories per Template XI).
3. **High:** Add Confidence tier to status block of each frozen SYNTHESIS (TIER 1–4 per XIV.C).
4. **Medium:** Extend VIII (Current Status) to full count-tracking format (learning entries, frozen syntheses, bound RLLs, proposed RLLs) if desired for Phase II readiness.
5. **Conditional:** For any frozen SYNTHESIS where alternatives were evaluated, add ACH Record per Template XIV.B.

---

## V. COMPATIBILITY NOTE

- CIV–CORE–ANGLIA v1.6 and CIV–SCHOLAR–ANGLIA v1.0 are consistent with VERSION–MANIFEST Phase I (Anglia). Scholar–Core sync state "UNSYNCED FROM CIV–CORE (BY DESIGN)" is declared and acceptable for Phase I.
- Template v2.10 Synthesis Tradecraft (Section XIV) applies to all frozen SYNTHESIS entries regardless of phase; Assumptions Box and Confidence tier are mandatory for freeze validity. OGE embedding (Section XI.A) applies to all SCHOLAR files.

---

END OF AUDIT — CIV–CORE–ANGLIA & CIV–SCHOLAR–ANGLIA vs Templates (2026-01-31)
