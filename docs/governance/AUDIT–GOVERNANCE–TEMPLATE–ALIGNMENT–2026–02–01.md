# AUDIT — Governance & Template Alignment (Full Scan)

**Date:** 2026-02-01  
**Scope:** All governance and template files in `docs/governance/`, `docs/templates/`, and civilization CIV–* files in `content/civilizations/`  
**Purpose:** Version binding consistency, cross-reference alignment, structural coherence (anchored on CIV–MEM–CORE v2.9)  
**Supersedes:** Prior AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT 2026-02-01 (partial)

---

## I. EXECUTIVE SUMMARY

| Category | Status | Count |
|----------|--------|-------|
| **Core governance (CIV–MEM–CORE, CMC–BOOTSTRAP)** | ALIGNED | 2 |
| **Templates (docs/templates)** | ALIGNED | All refs v2.8+ satisfied by v2.9 |
| **Civilization CORE refs to CIV–MEM–CORE** | UPGRADE | 3 civs (ANGLIA v2.8; FRANCIA v2.7; GERMANIA v2.5/v2.6) |
| **Index/Scholar footer & internal version refs** | SYNC | 6 files |
| **VERSION–MANIFEST civilization tables** | STALE | FRANCIA, ANGLIA, INDIA, GERMANIA, PERSIA |
| **Typo (governance only)** | FIX | CIV–INDEX–INDIA § I GOVERNANAD |

**Recommendation:** Apply upgrades below; then all governance and template files are aligned. Optional: bump CIV–SCHOLAR–TEMPLATE / CIV–MEM–TEMPLATE body refs from v2.8 to v2.9 for consistency (non-blocking).

---

## II. ANCHOR: CIV–MEM–CORE v2.9

CIV–MEM–CORE v2.9 is the system preload. All civilization CORE, SCHOLAR, INDEX, and ARC files should declare **Governed by: CIV–MEM–CORE v2.9** (or equivalent) unless explicitly documenting an older minimum (e.g. "v2.2+").

---

## III. TEMPLATE VERSIONS (SOURCE OF TRUTH)

| File | Version | Location |
|------|---------|----------|
| CIV–MEM–CORE | v2.9 | docs/governance/CIV–MEM–CORE.md |
| CMC–BOOTSTRAP | v2.14 | docs/governance/CMC–BOOTSTRAP.md |
| CIV–MEM–TEMPLATE | v2.9 | docs/templates/CIV–MEM–TEMPLATE.md |
| CIV–SCHOLAR–TEMPLATE | v2.10 | docs/templates/CIV–SCHOLAR–TEMPLATE.md |
| CIV–INDEX–TEMPLATE | v2.1 | docs/templates/CIV–INDEX–TEMPLATE.md |
| CIV–CORE–TEMPLATE | v2.0 | docs/templates/CIV–CORE–TEMPLATE.md |
| CIV–ARC–TEMPLATE | v2.8 | docs/templates/CIV–ARC–TEMPLATE.md |
| CIV–SCHOLAR–PROTOCOL | v2.6 | docs/templates/CIV–SCHOLAR–PROTOCOL.md |
| CIV–MIND–* | v2.5 / v2.6 | docs/templates/ |

---

## IV. CIVILIZATION FILES — CIV–MEM–CORE REFERENCE

| Civilization | File | Declared CORE | Should be | Action |
|--------------|------|---------------|-----------|--------|
| ANGLIA | CIV–CORE–ANGLIA | v2.8 | v2.9 | Upgrade |
| FRANCIA | CIV–CORE–FRANCIA | v2.7 | v2.9 | Upgrade |
| FRANCIA | CIV–SCHOLAR–FRANCIA | v2.7 | v2.9 | Upgrade |
| FRANCIA | CIV–INDEX–FRANCIA | v1.5 (or higher) | v2.9 | Upgrade |
| GERMANIA | CIV–CORE–GERMANIA | v2.5 (Source Authority) | v2.9 | Upgrade |
| GERMANIA | CIV–SCHOLAR–GERMANIA | v2.6 | v2.9 | Upgrade |
| CHINA, INDIA, ISLAM, PERSIA | CORE/SCHOLAR/INDEX/ARC | v2.9 | — | OK |

---

## V. FOOTER / HEADER VERSION SYNC

| File | Header/Version | Footer | Action |
|------|----------------|--------|--------|
| CIV–INDEX–ISLAM | Version: 3.0 | v2.4 | Footer → v3.0 |
| CIV–INDEX–PERSIA | Version: 1.2 | v1.1 | Footer → v1.2 |
| CIV–INDEX–ANGLIA | Version: 2.17 | v2.16 | Footer → v2.17 |
| CIV–ARC–PERSIA | Version: 1.3 | v1.2 | Footer → v1.3 |

---

## VI. INTERNAL VERSION REFERENCES (STALE)

| File | Location | Current | Should be |
|------|----------|---------|-----------|
| CIV–CORE–FRANCIA | § XXI MEM scope | CIV–INDEX–FRANCIA v1.7 (115 MEMs) | CIV–INDEX–FRANCIA v2.0 (139 files) |
| CIV–SCHOLAR–ISLAM | Source MEMs available | CIV–INDEX–ISLAM v2.5 | CIV–INDEX–ISLAM v3.0 |
| CIV–SCHOLAR–INDIA | Source MEMs available | CIV–INDEX–INDIA v1.1 | CIV–INDEX–INDIA v1.6 |
| CIV–INDEX–GERMANIA | Derived from / Template refs | CIV–INDEX–TEMPLATE v2.0; SCHOLAR v2.5 | v2.1; v2.10 |

---

## VII. VERSION–MANIFEST CIVILIZATION TABLES (STALE)

| Civilization | Document | Manifest | Actual | Action |
|--------------|----------|----------|--------|--------|
| FRANCIA | CIV–INDEX–FRANCIA | v1.7 | v2.0 | Update to v2.0 |
| ANGLIA | CIV–INDEX–ANGLIA | v2.8 | v2.17 | Update to v2.17 |
| ANGLIA | CIV–ARC–ANGLIA | v1.5 | v1.11 | Update to v1.11 |
| INDIA | CIV–INDEX–INDIA | v1.1 | v1.6 | Update to v1.6 |
| INDIA | CIV–CORE–INDIA | — | v2.0 | Add row |
| INDIA | CIV–SCHOLAR–INDIA | — | v2.0 | Add row |
| GERMANIA | CIV–INDEX–GERMANIA | v2.1 | v2.2 | Update to v2.2 |
| PERSIA | CIV–ARC–PERSIA | v1.1 | v1.3 | Update to v1.3 |

---

## VIII. TYPO (GOVERNANCE FILES ONLY)

| File | Section | Current | Fix |
|------|---------|---------|-----|
| CIV–INDEX–INDIA | I. INDEX PURPOSE & GOVERNANAD | GOVERNANAD | GOVERNANCE |

---

## IX. TEMPLATE BODY REFS (OPTIONAL)

CIV–SCHOLAR–TEMPLATE and CIV–MEM–TEMPLATE reference "CIV–MEM–CORE v2.8" in compatibility and body. Current CORE is v2.9; "v2.8+" is satisfied. Optional: change to "v2.9" or "v2.8+" for clarity. **Not required for alignment.**

---

## X. FIXES APPLIED (2026-02-01 — THIS SESSION)

1. **CIV–MEM–CORE refs:** ANGLIA CORE, FRANCIA CORE, FRANCIA SCHOLAR, FRANCIA INDEX, GERMANIA CORE, GERMANIA SCHOLAR → v2.9
2. **Footers:** CIV–INDEX–ISLAM → v3.0; CIV–INDEX–PERSIA → v1.2; CIV–INDEX–ANGLIA → v2.17; CIV–ARC–PERSIA → v1.3
3. **Internal refs:** FRANCIA CORE § XXI; CIV–SCHOLAR–ISLAM Source MEMs; CIV–SCHOLAR–INDIA Source MEMs; CIV–INDEX–GERMANIA template refs
4. **VERSION–MANIFEST:** FRANCIA, ANGLIA, INDIA (add CORE/SCHOLAR), GERMANIA, PERSIA tables updated
5. **CIV–INDEX–INDIA:** GOVERNANAD → GOVERNANCE (§ I)

---

## XI. VERDICT

After applying the fixes above: **ALIGNED.** All governance and template files are versionally and structurally aligned with CIV–MEM–CORE v2.9. No mandatory upgrades remain.

---

END OF AUDIT — 2026-02-01 (Full governance & template alignment; anchor CIV–MEM–CORE v2.9)
