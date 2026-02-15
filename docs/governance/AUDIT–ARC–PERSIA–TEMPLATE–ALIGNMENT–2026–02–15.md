# AUDIT — CIV–ARC–PERSIA vs CIV–ARC–TEMPLATE

**Date:** 2026-02-15  
**Scope:** CIV–ARC–PERSIA v3.0 vs CIV–ARC–TEMPLATE v3.2 · CMC 3.3  
**Purpose:** Structural alignment, section order, mirroring, ARC-T-INSTITUTIONAL, governance refs  
**Anchor:** CIV–MEM–CORE v3.3, CIV–ARC–TEMPLATE v3.2

---

## I. EXECUTIVE SUMMARY

| Category | Status |
|----------|--------|
| **Header** | Compliant; optional governance version update |
| **Section coverage** | All required content present; one numbering variant |
| **ARC-T categories** | ANCIENT, MEDIEVAL, EARLY-MOD, MODERN, INSTITUTIONAL ✓ |
| **Temporal precedence** | In II (variant: no dedicated Section III) ✓ |
| **Author lists** | Populated; format aligned |
| **Discovery / V-A / ERC / What ARC does not** | Present ✓ |
| **Mirroring (VIII)** | Content correct; **CORE and SCHOLAR cite v2.0** (ARC is v3.0) → fix |
| **IX-B ARC-T-INSTITUTIONAL** | Present; OFFICIAL, RESEARCH, NEWS, SPECIALIST; ≥2 per sub-type ✓ |
| **IX-C Cross-Entity** | Not present (template optional for STATE cross-entity use) |

**Verdict:** CIV–ARC–PERSIA v3.0 is **compliant** with the template. **Recommended fix:** Update CIV–CORE–PERSIA and CIV–SCHOLAR–PERSIA to reference CIV–ARC–PERSIA **v3.0** (they currently cite v2.0). Optional: header governance refs to v3.3/v3.2.

---

## II. HEADER COMPLIANCE

| Field | Template / CMC | CIV–ARC–PERSIA v3.0 | Status |
|-------|----------------|----------------------|--------|
| Title | CIV–ARC–[CIV] — vX.X | CIV–ARC–PERSIA — v3.0 | ✓ |
| Status | Present | ACTIVE · CANONICAL | ✓ |
| Version / Supersedes | — | 3.0; Supersedes v2.0 | ✓ |
| Upgrade Type | — | ALIGNMENT · CORE v3.0 CONSOLIDATION | ✓ |
| Civilization | — | PERSIA | ✓ |
| Governed by | — | CIV–MEM–CORE v3.0 · CIV–ARC–TEMPLATE v3.0 | ✓ (optional: v3.3 / v3.2) |
| Referenced in | — | CIV–CORE–PERSIA · CIV–SCHOLAR–PERSIA | ✓ |
| Last Update | — | February 2026 | ✓ |

---

## III. SECTION ORDER AND CONTENT

Template v3.2 requires: I Purpose & Scope, II ARC-Temporal Categories, III Temporal Precedence Rule, IV Author Admissibility Lists, V Discovery Framework, V-A Cross-ARC Citation for TSP, VI Orthogonality with ERC, VII What ARC Does Not Govern, VIII Mirroring Rule, IX Versioning, IX-B ARC-T-INSTITUTIONAL, IX-C Cross-Entity (optional), X Living ARC (optional).

| Template section | CIV–ARC–PERSIA | Status |
|------------------|----------------|--------|
| I. Purpose & Scope | I. PURPOSE & SCOPE | ✓ |
| II. ARC-Temporal Categories | II. ARC-TEMPORAL CATEGORIES (ARC-T) | ✓ |
| III. Temporal Precedence Rule | (in II: "Precedence: ANCIENT > … Later periods may clarify…") | ✓ Variant (no separate III) |
| IV. Author Admissibility Lists | III. AUTHOR ADMISSIBILITY LISTS | ✓ |
| V. Discovery Framework | IV. DISCOVERY FRAMEWORK | ✓ |
| V-A. Cross-ARC Citation for TSP | V-A. CROSS-ARC CITATION FOR TSP MEMs | ✓ |
| VI. Orthogonality with ERC | VI. ORTHOGONALITY WITH ERC | ✓ |
| VII. What ARC Does Not Govern | VII. WHAT ARC DOES NOT GOVERN | ✓ |
| VIII. Mirroring Rule | VIII. MIRRORING / REFERENCE | ✓ |
| IX. Versioning | IX. VERSIONING | ✓ |
| IX-B. ARC-T-INSTITUTIONAL | IX-B. ARC-T-INSTITUTIONAL | ✓ |
| IX-C. Cross-Entity | — | Optional; not present |
| X. Living ARC | — | Optional; not present |

Content for all required sections is present. Precedence rule is embedded in Section II; section-numbering variant is acceptable.

---

## IV. ARC-T-INSTITUTIONAL (IX-B)

Template: four sub-types (OFFICIAL, RESEARCH, NEWS, SPECIALIST); minimum 2 sources per sub-type for active STATE file.

| Sub-type | Persia count | Format | Status |
|----------|---------------|--------|--------|
| OFFICIAL | 5 | Name — URL; Authoritative For; Editorial Note | ✓ |
| RESEARCH | 5 | Same | ✓ |
| NEWS | 5 | Same | ✓ |
| SPECIALIST | 4 | Same | ✓ |

All entries include Authoritative For and Editorial Note. ✓

---

## V. MIRRORING (SECTION VIII) — RECOMMENDED FIX

ARC file states:
- "CIV–CORE–PERSIA (ARC Reference: CIV–ARC–PERSIA **v3.0**)",
- "CIV–SCHOLAR–PERSIA (ARC Reference: CIV–ARC–PERSIA **v3.0**)."

**Actual references in repo:**
- **CIV–CORE–PERSIA:** Header "ARC Reference: CIV–ARC–PERSIA **v2.0**".
- **CIV–SCHOLAR–PERSIA:** Header "ARC Reference: CIV–ARC–PERSIA **v2.0**."

**Recommendation:** Update CIV–CORE–PERSIA and CIV–SCHOLAR–PERSIA so that "ARC Reference" is **CIV–ARC–PERSIA v3.0** in both. This aligns referenced version with the current ARC file and with Section VIII of the ARC.

---

## VI. OPTIONAL UPDATES

1. **Header:** "Governed by: CIV–MEM–CORE v3.0 · CIV–ARC–TEMPLATE v3.0" → v3.3 / v3.2 for parity with VERSION–MANIFEST (version decoupling allows current wording).
2. **IX-C Cross-Entity:** Add Section IX-C (Cross-Entity Institutional Source Access) if STATE mode will assess other entities using their ARC-T-INSTITUTIONAL; template format and rules are in CIV–ARC–TEMPLATE § IX-C.

---

## VII. RECOMMENDED ACTIONS

1. **Mirroring fix (recommended):** In CIV–CORE–PERSIA and CIV–SCHOLAR–PERSIA, change "ARC Reference: CIV–ARC–PERSIA v2.0" to "ARC Reference: CIV–ARC–PERSIA v3.0".
2. **Optional:** Update ARC header "Governed by" to CIV–MEM–CORE v3.3 · CIV–ARC–TEMPLATE v3.2.
3. **Optional:** Add IX-C if cross-entity STATE use is desired.

---

## VIII. FIXES APPLIED (2026-02-15)

- **Mirroring:** CIV–CORE–PERSIA and CIV–SCHOLAR–PERSIA headers updated: "ARC Reference: CIV–ARC–PERSIA v2.0" → "ARC Reference: CIV–ARC–PERSIA v3.0".

---

END OF AUDIT — CIV–ARC–PERSIA (2026-02-15)
