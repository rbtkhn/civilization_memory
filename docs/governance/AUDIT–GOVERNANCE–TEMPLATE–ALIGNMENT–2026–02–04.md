# Audit: Governance & Template Alignment to CIV–MEM–CORE v3.0

**Authority:** CIV–MEM–CORE v3.0 · CMC–BOOTSTRAP v3.0  
**Scope:** All governance files, template files, civilization CORE/SCHOLAR/INDEX/ARC/DOCTRINE, and .cursor/rules  
**Date:** 2026-02-04  
**Purpose:** Comprehensive alignment audit of version bindings, Governed-by declarations, and CORE v3.0 references.

---

## I. ANCHOR: CIV–MEM–CORE v3.0

**VERSION RULE (CORE v3.0):** All governance/template files should declare Version 3.0 or higher where applicable; reference CIV–MEM–CORE v3.0 in Authority/Governed by/Compatibility as appropriate.

---

## II. GOVERNANCE LAYER — ALIGNMENT STATUS

| Document | Version | CORE v3.0 | END OF FILE | Status |
|----------|---------|-----------|-------------|--------|
| CIV–MEM–CORE.md | 3.0 | — (canonical) | v3.0 | ALIGNED |
| CMC–BOOTSTRAP.md | 3.0 | VERSION BINDINGS v3.0 | v3.0 | ALIGNED |
| VERSION–MANIFEST.md | 3.0 | CORE v3.0 throughout | v3.0 | ALIGNED |
| MEM–UPGRADE–VERIFICATION–CHECKLIST.md | — | Authority: v3.0 | — | ALIGNED |
| CIV–SCHOLAR–PRUNING–PROTOCOL.md | 1.0 | — | v1.0 | OK (protocol; no CORE version in scope) |
| NAMESPACE–CLARIFICATION.md | 1.0 | — | v1.0 | OK (clarification doc) |

---

## III. TEMPLATE LAYER — ALIGNMENT STATUS

| Document | Version / Header | CORE v3.0 (Gov/Compat) | END OF FILE | Status |
|----------|------------------|------------------------|-------------|--------|
| CIV–MEM–TEMPLATE.md | v3.0 | Compatibility: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–CORE–TEMPLATE.md | v3.0 | Governed by: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–INDEX–TEMPLATE.md | v3.0 | Governed by: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–SCHOLAR–TEMPLATE.md | v3.0 | Compatibility: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–SCHOLAR–PROTOCOL.md | 3.0 | Load Order AFTER CORE | v3.0 | ALIGNED |
| CIV–DOCTRINE–TEMPLATE.md | 3.0 | Governance Authority: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–ARC–TEMPLATE.md | v3.0 | Compatibility: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–ARC–LEDGER–TEMPLATE.md | v3.0 | CIV–ARC–TEMPLATE v3.0 | v3.0 | ALIGNED |
| CIV–MIND–TEMPLATE.md | 3.0 | Governed by: CIV–MEM–CORE v3.0 | v3.0 | ALIGNED |
| CIV–CEV–TEMPLATE.md | 3.0 | EPHEMERAL–OBSERVATION–PROTOCOL | v3.0 | ALIGNED |

---

## IV. TEMPLATE LAYER — STALE ACTIVE DECLARATIONS (FIX RECOMMENDED)

### IV.A CIV–MIND–BARNES.md
- **Governed by (lines 29–31):** `CIV–MIND–TEMPLATE v2.5`, `CIV–MIND–MERCOURIS v2.6`, `CIV–SCHOLAR–PROTOCOL v2.2` → update to v3.0
- **Lines 1314–1317:** "CIV–MIND–BARNES v2.6 is CANONICAL" / "Bound by CIV–MIND–BARNES v2.6" → update to v3.0

### IV.B CIV–MIND–TEMPLATE.md
- **Lines 314–317:** "CIV–MIND–TEMPLATE v2.5 is CANONICAL" / "Governed by CIV–MIND–TEMPLATE v2.5" → update to v3.0

### IV.C CIV–MIND–MERCOURIS.md
- **Governed by section:** Verify v3.0 references (EOF already v3.0)

### IV.D CIV–MIND–MEARSHEIMER.md
- **Lines 756–759:** "CIV–MIND–MEARSHEIMER v2.6 is CANONICAL" / "Bound by CIV–MIND–MEARSHEIMER v2.6" → update to v3.0

### IV.E CIV–ARC–TEMPLATE.md
- **Line 42:** "REMOVED (now governed by CIV–MEM–TEMPLATE v2.8)" → update to v3.0

### IV.F CIV–ARC–LEDGER–TEMPLATE.md
- **Line 119:** "ARC–TEMPLATE v2.7 remains the authority" → update to v3.0 for current binding (or mark as historical)

### IV.G CIV–SCHOLAR–TEMPLATE.md
- **Line 1124:** "4 ARC-T sections REQUIRED per CIV–MEM–TEMPLATE v2.8" → update to v3.0

### IV.H CIV–INDEX–TEMPLATE.md
- **Line 76:** "(CIV–MEM–TEMPLATE v2.8+, CIV–SCHOLAR–TEMPLATE v2.10)" → update to v3.0

### IV.I CIV–CORE–TEMPLATE.md
- **Line 323:** "Template Version Used: CIV–CORE–TEMPLATE v2.0" → update to v3.0

---

## V. .CURSOR/RULES — ALIGNMENT STATUS

| File | Binding Reference | Status |
|------|-------------------|--------|
| cmc-scholar-mode.mdc | CMC–BOOTSTRAP v2.14 | **GAP** → update to v3.0 |
| cmc-oge-enforcement.mdc | CMC–BOOTSTRAP v2.14 | **GAP** → update to v3.0 |
| cmc-version-upgrade-on-edit.mdc | CMC–BOOTSTRAP v3.0, CIV–MEM–CORE v3.0 | ALIGNED |
| cmc-barnes-voice.mdc | CIV–MIND–BARNES v2.6 | OK (MIND version reference; v3.0 when BARNES updated) |
| cmc-mercouris-voice.mdc | CIV–MIND–MERCOURIS v2.6 | OK (MIND version reference) |
| cmc-mearsheimer-voice.mdc | CIV–MIND–MEARSHEIMER v2.6 | OK (MIND version reference) |
| cmc-tri-frame-protocol.mdc | CIV–MIND–BARNES v2.5, CIV–MEM–CORE § XXVIII | OK (CCM reference; BARNES version historical) |
| cmc-blend-law.mdc | CIV–MEM–CORE VP-1.g, CMC–BOOTSTRAP | ALIGNED |
| cmc-mode-contracts.mdc | CMC–BOOTSTRAP | ALIGNED |

---

## VI. CIVILIZATION LAYER — ALIGNMENT STATUS

### VI.A RUSSIA — ALIGNED
- CIV–CORE–RUSSIA: Governed by CIV–MEM–CORE v3.0, Template v3.0 ✓
- CIV–SCHOLAR–RUSSIA: Governed by CIV–MEM–CORE v3.0, CIV–MEM–TEMPLATE v3.0 ✓
- CIV–INDEX–RUSSIA: Governed by CIV–MEM–CORE v3.0 ✓
- CIV–DOCTRINE–RUSSIA: Governance Authority CIV–MEM–CORE v3.0 ✓
- CIV–ARC–RUSSIA: Governed by CIV–MEM–CORE v3.0 · CIV–ARC–TEMPLATE v3.0 ✓
- CIV–ARC–RUSSIA–LEDGER: CIV–ARC–TEMPLATE v3.0 · CIV–MEM–TEMPLATE v3.0 ✓

### VI.B CHINA — ALIGNED
- CIV–CORE–CHINA: Governed by CIV–MEM–CORE v3.0 ✓
- CIV–SCHOLAR–CHINA: CIV–SCHOLAR–PROTOCOL v3.0 ✓
- CIV–INDEX–CHINA: Governed by CIV–MEM–CORE v3.0 ✓
- CIV–ARC–CHINA: Governed by CIV–MEM–TEMPLATE v3.0 ✓

### VI.C ROME — GAPS
- **CIV–CORE–ROME:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0
- **CIV–CORE–ROME:** Line 683: CIV–MEM–TEMPLATE v2.8 → update to v3.0
- **CIV–SCHOLAR–ROME:** Lines 1607–1627, 1992: Embedded CIV–MEM–TEMPLATE v2.5/v2.7 mirror → replace with pointer to v3.0
- **CIV–ARC–ROME:** Line 295: "Governed by CIV–MEM–TEMPLATE v2.8" → update to v3.0

### VI.D GERMANIA — GAPS
- **CIV–CORE–GERMANIA:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0
- **CIV–INDEX–GERMANIA:** Line 44: "CIV–MEM–TEMPLATE v2.8" (historical); Line 99: "CIV–SCHOLAR–TEMPLATE v2.10" → update to v3.0 where active
- **CIV–SCHOLAR–GERMANY:** Line 2565: CIV–MEM–TEMPLATE v2.8 → update to v3.0
- **CIV–ARC–GERMANIA–LEDGER:** Line 6: "CIV–ARC–TEMPLATE v2.7 · CIV–MEM–TEMPLATE v2.8" → update to v3.0

### VI.E FRANCIA — GAPS
- **CIV–CORE–FRANCIA:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0
- **CIV–ARC–FRANCIA–LEDGER:** Line 6: "CIV–ARC–TEMPLATE v2.7 · CIV–MEM–TEMPLATE v2.8" → update to v3.0
- **CIV–ARC–FRANCIA–LEDGER:** Line 323: "CIV–MEM–TEMPLATE v2.9" → update to v3.0

### VI.F ANGLIA — GAPS
- **CIV–CORE–ANGLIA:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0

### VI.G INDIA — GAPS
- **CIV–CORE–INDIA:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0

### VI.H ISLAM — GAPS
- **CIV–CORE–ISLAM:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0

### VI.I PERSIA — GAPS
- **CIV–CORE–PERSIA:** Template Version Used: CIV–CORE–TEMPLATE v2.0 → update to v3.0
- **CIV–SCHOLAR–PERSIA:** Template Version Used: CIV–SCHOLAR–TEMPLATE v2.10 → update to v3.0

---

## VII. HISTORICAL / UPGRADE NOTES — NO CHANGE REQUIRED

Historical upgrade notes (e.g., "Supersedes v2.7", "UPGRADE NOTE (v2.8)", "v2.6 introduces") describe past changes and should **not** be altered. They are the historical record. Only **active governance declarations** (Governed by, Compatibility, Template Version Used, canonical binding statements) require alignment.

---

## VIII. SUMMARY

| Layer | Aligned | Gaps | Notes |
|-------|---------|------|-------|
| Governance | 6/6 | 0 | All core governance at v3.0 |
| Templates (header/EOF) | 10/10 | 0 | All templates declare v3.0 |
| Templates (body refs) | — | 9 | Stale v2.x in active declarations (BARNES, MIND, ARC, INDEX, CORE) |
| .cursor/rules | 7/9 | 2 | cmc-scholar-mode, cmc-oge-enforcement reference CMC–BOOTSTRAP v2.14 |
| Civilization CORE | 2/9 | 7 | RUSSIA, CHINA aligned; others have Template Version v2.0 |
| Civilization SCHOLAR | 6/9 | 3 | ROME (embedded mirror), GERMANIA, PERSIA |
| Civilization ARC/LEDGER | 4/7 | 3 | ROME, GERMANIA–LEDGER, FRANCIA–LEDGER |

**Total actionable gaps:** 24 (templates: 9; rules: 2; civilization files: 13)

---

## IX. RECOMMENDED FIX PRIORITY

1. **High:** Templates — CIV–MIND–BARNES, CIV–MIND–TEMPLATE, CIV–MIND–MEARSHEIMER (Governed by / canonical binding)
2. **High:** .cursor/rules — cmc-scholar-mode, cmc-oge-enforcement (CMC–BOOTSTRAP v2.14 → v3.0)
3. **Medium:** Templates — CIV–ARC–TEMPLATE, CIV–ARC–LEDGER–TEMPLATE, CIV–SCHOLAR–TEMPLATE, CIV–INDEX–TEMPLATE, CIV–CORE–TEMPLATE (body refs)
4. **Medium:** Civilization CORE files — Template Version Used v2.0 → v3.0 (ROME, GERMANIA, FRANCIA, ANGLIA, INDIA, ISLAM, PERSIA)
5. **Low:** Civilization ARC/LEDGER — FRANCIA–LEDGER, GERMANIA–LEDGER, ROME (CIV–MEM–TEMPLATE v2.8 → v3.0)
6. **Low:** CIV–SCHOLAR–ROME — Remove or replace embedded CIV–MEM–TEMPLATE mirror with pointer to v3.0

---

## X. FIXES APPLIED (2026-02-04)

**Templates:**
- CIV–MIND–BARNES: Governed by → v3.0; CANONICAL binding → v3.0
- CIV–MIND–TEMPLATE: CANONICAL binding → v3.0
- CIV–MIND–MEARSHEIMER: CANONICAL binding → v3.0
- CIV–ARC–TEMPLATE: CIV–MEM–TEMPLATE v2.8 → v3.0
- CIV–ARC–LEDGER–TEMPLATE: ARC–TEMPLATE v2.7 → v3.0
- CIV–SCHOLAR–TEMPLATE: CIV–MEM–TEMPLATE v2.8 → v3.0
- CIV–INDEX–TEMPLATE: compatibility declaration → v3.0
- CIV–CORE–TEMPLATE: Template Version Used → v3.0

**.cursor/rules:**
- cmc-scholar-mode.mdc: CMC–BOOTSTRAP v2.14 → v3.0
- cmc-oge-enforcement.mdc: CMC–BOOTSTRAP v2.14 → v3.0

**Civilization CORE/SCHOLAR/ARC/LEDGER:**
- ROME: CIV–CORE (Template v3.0, CIV–MEM–TEMPLATE v3.0), CIV–ARC (v3.0)
- GERMANIA: CIV–CORE (Template v3.0), CIV–INDEX (v3.0), CIV–SCHOLAR (v3.0), CIV–ARC–LEDGER (v3.0)
- FRANCIA: CIV–CORE (Template v3.0), CIV–ARC–FRANCIA (v3.0), CIV–ARC–FRANCIA–LEDGER (v3.0)
- ANGLIA: CIV–CORE (Template v3.0), CIV–ARC–ANGLIA (v3.0)
- INDIA: CIV–CORE (Template v3.0)
- ISLAM: CIV–CORE (Template v3.0)
- PERSIA: CIV–CORE (Template v3.0), CIV–SCHOLAR (Template v3.0)

---

**END OF AUDIT — 2026-02-04**
