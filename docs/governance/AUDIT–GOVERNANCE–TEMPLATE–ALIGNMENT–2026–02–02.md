# AUDIT — Governance & Template Alignment (Full Scan)

**Date:** 2026-02-02  
**Scope:** All governance and template files in `docs/governance/`, `docs/templates/`, and civilization CIV–* files in `content/civilizations/`  
**Purpose:** Version binding consistency, cross-reference alignment, structural coherence (anchored on CIV–MEM–CORE v3.0)  
**Supersedes:** AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT–2026–02–01

---

## I. EXECUTIVE SUMMARY

| Category | Status | Count |
|----------|--------|-------|
| **Core governance (CIV–MEM–CORE, CMC–BOOTSTRAP, VERSION–MANIFEST)** | ALIGNED | 3 |
| **Templates (docs/templates) — headers & Compatibility** | ALIGNED | All declare v3.0 |
| **Templates — END OF FILE & body refs** | FIX | 9 files |
| **Civilization CORE/SCHOLAR/ARC — Governed by / template refs** | FIX | 18+ refs across 15+ files |
| **.cursor/rules** | ALIGNED | Ref CIV–MEM–CORE § XXVIII, v3.0 where stated |

**Recommendation:** Apply fixes in Sections IV–V below; then all governance and template files are aligned to CIV–MEM–CORE v3.0.

---

## II. ANCHOR: CIV–MEM–CORE v3.0

CIV–MEM–CORE v3.0 is the system preload. All civilization CORE, SCHOLAR, INDEX, and ARC files should declare **Governed by: CIV–MEM–CORE v3.0** (or equivalent). Templates and CMC–BOOTSTRAP should reference v3.0.

**Verified:**
- `docs/governance/CIV–MEM–CORE.md` — Version 3.0 ✓
- `docs/governance/CMC–BOOTSTRAP.md` — v3.0 (header) ✓
- `docs/governance/VERSION–MANIFEST.md` — v3.0; all bindings v3.0 ✓

---

## III. TEMPLATE VERSIONS (SOURCE OF TRUTH: VERSION–MANIFEST v3.0)

| File | Header/Compatibility | END OF FILE / Body Refs | Action |
|------|----------------------|-------------------------|--------|
| CIV–MEM–TEMPLATE | v3.0 ✓ | END OF FILE v2.9 | Footer → v3.0 |
| CIV–SCHOLAR–TEMPLATE | v3.0 ✓ | END OF FILE v2.10 | Footer → v3.0 |
| CIV–INDEX–TEMPLATE | v3.0 ✓ | END OF FILE v2.1 | Footer → v3.0 |
| CIV–ARC–TEMPLATE | v3.0 ✓ | Line 29 CIV–MEM–TEMPLATE v2.9 | → v3.0 |
| CIV–DOCTRINE–TEMPLATE | v3.0 ✓ | END OF FILE v2.1 | Footer → v3.0 |
| CIV–SCHOLAR–PROTOCOL | v3.0 ✓ | CMC–BOOTSTRAP v2.14 (lines 61, 87, 741, 781, 790); END OF FILE v2.6 | Body → v3.0; Footer → v3.0 |
| CIV–CORE–TEMPLATE | v3.0 ✓ | END OF FILE v2.0 | Footer → v3.0 |
| CIV–MIND–TEMPLATE | v3.0 ✓ | END OF FILE v2.5; line 317 example v2.5 | Footer → v3.0; example optional |
| CIV–ARC–LEDGER–TEMPLATE | v3.0 ✓ | END OF FILE v1.0 | Footer → v3.0 (per manifest) |
| CIV–CEO–TEMPLATE | v3.0 ✓ | END OF FILE v1.0 | No change (ephemeral; v1.0 acceptable) |

---

## IV. TEMPLATE FIXES (STALE FOOTERS & BODY REFS)

### IV.A END OF FILE

| File | Current | Fix |
|------|---------|-----|
| CIV–MEM–TEMPLATE.md | v2.9 | v3.0 |
| CIV–SCHOLAR–TEMPLATE.md | v2.10 | v3.0 |
| CIV–INDEX–TEMPLATE.md | v2.1 | v3.0 |
| CIV–DOCTRINE–TEMPLATE.md | v2.1 | v3.0 |
| CIV–SCHOLAR–PROTOCOL.md | v2.6 | v3.0 |
| CIV–CORE–TEMPLATE.md | v2.0 | v3.0 |
| CIV–MIND–TEMPLATE.md | v2.5 | v3.0 |
| CIV–ARC–LEDGER–TEMPLATE.md | v1.0 | v3.0 |

### IV.B BODY REFS

| File | Location | Current | Fix |
|------|----------|---------|-----|
| CIV–ARC–TEMPLATE.md | Compatibility bullet | CIV–MEM–TEMPLATE v2.9 | v3.0 |
| CIV–SCHOLAR–PROTOCOL.md | Cross-ref / examples | CMC–BOOTSTRAP v2.14 | v3.0 |

---

## V. CIVILIZATION FILES — GOVERNED BY / TEMPLATE REFS

### V.A CORE — Governed by CIV–MEM–CORE v2.9 → v3.0

| Civilization | File | Current | Fix |
|--------------|------|---------|-----|
| CHINA | CIV–CORE–CHINA | v3.0 | — OK |
| ANGLIA | CIV–CORE–ANGLIA | v2.9 | v3.0 |
| FRANCIA | CIV–CORE–FRANCIA | v2.9 | v3.0 |
| GERMANIA | CIV–CORE–GERMANIA | v2.9 | v3.0 |
| INDIA | CIV–CORE–INDIA | v2.9 | v3.0 |
| ISLAM | CIV–CORE–ISLAM | v2.9 | v3.0 |
| PERSIA | CIV–CORE–PERSIA | v2.9 | v3.0 |
| RUSSIA | CIV–CORE–RUSSIA | (no Governed by) | Add Governed by: CIV–MEM–CORE v3.0 |
| ROME | CIV–CORE–ROME | (no Governed by) | Add Governed by: CIV–MEM–CORE v3.0 |

### V.B SCHOLAR — Template Version / Governed by

| Civilization | File | Current | Fix |
|--------------|------|---------|-----|
| CHINA | CIV–SCHOLAR–CHINA | Template v2.10, Protocol v2.6 | v3.0 |
| PERSIA | CIV–SCHOLAR–PERSIA | Template v2.10, Protocol v2.6 | v3.0 |
| ANGLIA | CIV–SCHOLAR–ANGLIA | Template v2.10, Protocol v2.6 | v3.0 |
| ISLAM | CIV–SCHOLAR–ISLAM | Template v2.10, Protocol v2.6 | v3.0 |
| INDIA | CIV–SCHOLAR–INDIA | Template v2.10, Protocol v2.6 | v3.0 |
| FRANCIA | CIV–SCHOLAR–FRANCIA | CMC v2.7+, CIV–MEM–CORE v2.9 | v3.0 |
| GERMANIA | CIV–SCHOLAR–GERMANIA | CMC v2.2+, CIV–MEM–CORE v2.9 | v3.0 |
| RUSSIA | CIV–SCHOLAR–RUSSIA | CIV–MEM–CORE v2.0+ | v3.0 |
| ROME | CIV–SCHOLAR–ROME | CIV–MEM–CORE v2.0+ / v2.5 | v3.0 |

### V.C ARC — Governed by MEM TEMPLATE v2.9 → v3.0

| Civilization | File | Current | Fix |
|--------------|------|---------|-----|
| CHINA | CIV–ARC–CHINA | Line 130 CIV–MEM–TEMPLATE v2.9 | v3.0 |
| ANGLIA | CIV–ARC–ANGLIA | Governed by CIV–MEM–TEMPLATE v2.9 | v3.0 |
| GERMANIA | CIV–ARC–GERMANIA | Line 16 Compatibility v2.9 | v3.0 |

### V.D INDEX — Template Version Used (GERMANIA only)

| File | Location | Current | Fix |
|------|----------|---------|-----|
| CIV–INDEX–GERMANIA | § II Canonical Governance | CORE v2.0, SCHOLAR v2.10, DOCTRINE v2.1 | v3.0 for template refs |

### V.E OTHER

| File | Location | Current | Fix |
|------|----------|---------|-----|
| CIV–DOCTRINE–RUSSIA | Line 25 | "CIV–MEM–CORE v2.0" | v3.0 |

---

## VI. .CURSOR/RULES

- **cmc-version-upgrade-on-edit.mdc** — References v3.0 ✓
- **cmc-tri-frame-protocol.mdc** — CIV–MEM–CORE § XXVIII (CCM); CIV–MIND–BARNES v2.5 (historical) — OK
- **cmc-blend-law.mdc** — CIV–MEM–CORE VP-1.g — OK

No mandatory rule changes.

---

## VII. FIXES APPLIED (2026-02-02 — THIS SESSION)

1. **Templates — END OF FILE:** CIV–MEM–TEMPLATE, CIV–SCHOLAR–TEMPLATE, CIV–INDEX–TEMPLATE, CIV–DOCTRINE–TEMPLATE, CIV–SCHOLAR–PROTOCOL, CIV–CORE–TEMPLATE, CIV–MIND–TEMPLATE, CIV–ARC–LEDGER–TEMPLATE → v3.0
2. **Templates — body refs:** CIV–ARC–TEMPLATE CIV–MEM–TEMPLATE v2.9 → v3.0; CIV–SCHOLAR–PROTOCOL CMC–BOOTSTRAP v2.14 → v3.0
3. **Civilization CORE:** ANGLIA, FRANCIA, GERMANIA, INDIA, ISLAM, PERSIA Governed by v2.9 → v3.0; RUSSIA, ROME added Governed by CIV–MEM–CORE v3.0 and Compatibility → v3.0
4. **Civilization SCHOLAR:** CHINA, PERSIA, ANGLIA, ISLAM, INDIA Template v2.10 / Protocol v2.6 → v3.0; FRANCIA, GERMANIA CORE v2.9 / Compatibility → v3.0; RUSSIA, ROME Governed by block → v3.0
5. **Civilization ARC:** CHINA, ANGLIA CIV–MEM–TEMPLATE v2.9 → v3.0; GERMANIA Compatibility v2.9 → v3.0
6. **Civilization INDEX:** GERMANIA § II template refs → v3.0
7. **Civilization DOCTRINE:** RUSSIA governance authority note v2.0 → v3.0

---

## VIII. VERDICT

After applying fixes above: **ALIGNED.** All governance and template files are versionally and structurally aligned with CIV–MEM–CORE v3.0.

---

END OF AUDIT — 2026-02-02 (Governance & template alignment; anchor CIV–MEM–CORE v3.0)
