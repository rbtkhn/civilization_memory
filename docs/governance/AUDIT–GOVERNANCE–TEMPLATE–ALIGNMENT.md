# AUDIT — Governance & Template Alignment

**Date:** 2026-01-29  
**Scope:** All governance and template files in `docs/governance/` and `docs/templates/`  
**Purpose:** Version binding consistency, cross-reference alignment, structural coherence (post-CCM v2.8)  
**Supersedes:** Previous AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT (pre-CCM)

---

## I. EXECUTIVE SUMMARY

| Status | Count |
|--------|--------|
| **ALIGNED** (declared = actual, refs current) | Governance/template core bindings |
| **MINOR MISALIGNMENT** (stale cross-refs) | 4 |
| **STRUCTURAL** | CORE § XXIV–XXIX reflected in templates |

**Summary:** VERSION–MANIFEST and CMC–BOOTSTRAP bindings match current file versions (CORE v2.8, BOOTSTRAP v2.13). Four cross-references still cite older CORE or SCHOLAR–TEMPLATE versions; fixing them improves clarity. No governance–template structural conflict.

---

## II. ACTUAL FILE VERSIONS (SOURCE OF TRUTH)

| File | Header/Footer Version | Location |
|------|-----------------------|----------|
| CIV–MEM–CORE | **v2.8** | docs/governance/CIV–MEM–CORE.md |
| CMC–BOOTSTRAP | **v2.13** | docs/governance/CMC–BOOTSTRAP.md |
| VERSION–MANIFEST | v1.10 | docs/governance/VERSION–MANIFEST.md |
| CIV–MEM–TEMPLATE | v2.9 | docs/templates/CIV–MEM–TEMPLATE.md |
| CIV–SCHOLAR–TEMPLATE | v2.10 | docs/templates/CIV–SCHOLAR–TEMPLATE.md |
| CIV–SCHOLAR–PROTOCOL | v2.2 | docs/templates/CIV–SCHOLAR–PROTOCOL.md |
| CIV–MIND–MERCOURIS | v2.6 | docs/templates/CIV–MIND–MERCOURIS.md |
| CIV–MIND–MEARSHEIMER | v2.6 | docs/templates/CIV–MIND–MEARSHEIMER.md |
| CIV–MIND–BARNES | v2.5 | docs/templates/CIV–MIND–BARNES.md |
| CIV–MIND–TEMPLATE | v2.5 | docs/templates/CIV–MIND–TEMPLATE.md |
| CIV–DOCTRINE–TEMPLATE | v2.1 | docs/templates/CIV–DOCTRINE–TEMPLATE.md |
| CIV–CORE–TEMPLATE | v2.0 | docs/templates/CIV–CORE–TEMPLATE.md |
| CIV–INDEX–TEMPLATE | v2.0 | docs/templates/CIV–INDEX–TEMPLATE.md |
| CIV–ARC–TEMPLATE | v2.7 | docs/templates/CIV–ARC–TEMPLATE.md |
| CIV–ARC–LEDGER–TEMPLATE | v1.0 | docs/templates/CIV–ARC–LEDGER–TEMPLATE.md |
| CIV–CEO–TEMPLATE | v1.0 | docs/templates/CIV–CEO–TEMPLATE.md |

---

## III. VERSION–MANIFEST vs ACTUAL

| Document | VERSION–MANIFEST § II/III | Actual (file header) | Status |
|----------|---------------------------|------------------------|--------|
| CIV–MEM–CORE | v2.8 | v2.8 | ✓ Aligned |
| CMC–BOOTSTRAP | v2.13 | v2.13 | ✓ Aligned |
| CIV–MEM–TEMPLATE | v2.9 | v2.9 | ✓ Aligned |
| CIV–SCHOLAR–TEMPLATE | v2.10 | v2.10 | ✓ Aligned |
| CIV–SCHOLAR–GERMANIA | v2.12 | (content) v2.12 | ✓ Aligned |
| MIND / other templates | As listed | As above | ✓ Aligned |

**Verdict:** Manifest Section II and III match current file versions.

---

## IV. CROSS-REFERENCE MISALIGNMENTS (STALE REFS)

### 1. VERSION–MANIFEST § VI Quick Binding

| Location | Current | Should be |
|----------|---------|-----------|
| VI Quick Binding declaration | CIV–MEM–CORE v2.7 | CIV–MEM–CORE v2.8 |

### 2. CMC–BOOTSTRAP

| Location | Current | Should be |
|----------|---------|-----------|
| See: SAP (full protocol) | CIV–MEM–CORE v2.7 | CIV–MEM–CORE v2.8 |

### 3. CIV–MIND–BARNES

| Location | Current | Should be |
|----------|---------|-----------|
| Compatibility / ALIGNED | CIV–SCHOLAR–TEMPLATE v2.9 | CIV–SCHOLAR–TEMPLATE v2.10 |
| CIV–MEM–CORE (optional) | v2.6 | v2.8 (or leave v2.6 as minimum) |

### 4. CIV–DOCTRINE–TEMPLATE

| Location | Current | Should be |
|----------|---------|-----------|
| Line 25 (parenthetical) | CIV–SCHOLAR–TEMPLATE v2.9 | CIV–SCHOLAR–TEMPLATE v2.10 |

**Note:** CIV–MIND–* references to CIV–MEM–CORE v2.6 are backward-compatible (v2.8 satisfies). Optional to bump to v2.8 for clarity; not required.

---

## V. CROSS-REFERENCE ALIGNMENT (TEMPLATES → CORE)

| File | References CIV–MEM–CORE | Status |
|------|--------------------------|--------|
| CIV–MEM–TEMPLATE | v2.7+ (Compatibility, Sections XXIV–XXVII) | ✓ v2.8 satisfies; optional v2.8+ |
| CIV–SCHOLAR–TEMPLATE | v2.7+ (Compatibility, ITI XXVI–XXVII) | ✓ v2.8 satisfies |
| CIV–MIND–* (MERCOURIS, MEARSHEIMER, BARNES, TEMPLATE) | v2.6 | ✓ v2.8 satisfies (min) |
| CIV–DOCTRINE–TEMPLATE | v2.0+ | ✓ Aligned |
| CIV–INDEX–TEMPLATE | v2.2+ · MEM–TEMPLATE v2.8+ · SCHOLAR v2.5 | ✓ Aligned |
| CIV–CORE–TEMPLATE | v2.2+ | ✓ Aligned |

No mandatory change for "v2.6" or "v2.7+" references; CORE v2.8 is backward compatible.

---

## VI. STRUCTURAL ALIGNMENT (CORE → TEMPLATES)

- **CIV–MEM–CORE v2.8** defines: TLA (XXIV), Structured Data (XXV), Synthesis Validation (XXVI), ITI (XXVII), **CCM (XXVIII)**, Canonical Status (XXIX).
- **CIV–MEM–TEMPLATE v2.9** implements TLA and references CIV–MEM–CORE v2.7 Sections XXIV–XXVII. **Aligned.** (CCM § XXVIII is governance stance; no template field change.)
- **CIV–SCHOLAR–TEMPLATE v2.10** implements Synthesis Tradecraft (Assumptions Box, ACH) and references CIV–MEM–CORE v2.7 XXVI–XXVII. **Aligned.**
- **CMC–BOOTSTRAP v2.13** and **cmc-tri-frame-protocol** reference CCM § XXVIII. **Aligned.**

---

## VII. RECOMMENDED FIXES

1. **VERSION–MANIFEST § VI:** Update Quick Binding declaration to CIV–MEM–CORE v2.8.
2. **CMC–BOOTSTRAP:** Update "See: CIV–MEM–CORE v2.7" to v2.8 (SAP section).
3. **CIV–MIND–BARNES:** Update CIV–SCHOLAR–TEMPLATE v2.9 → v2.10 in Compatibility/ALIGNED.
4. **CIV–DOCTRINE–TEMPLATE:** Update line 25 parenthetical CIV–SCHOLAR–TEMPLATE v2.9 → v2.10.

Optional (clarity only): CIV–MIND–* and CIV–MEM–TEMPLATE / CIV–SCHOLAR–TEMPLATE references to CORE v2.6/v2.7 → v2.8 (or v2.8+). Not required for correctness.

---

## VIII. POST-AUDIT BINDING DECLARATION

After fixes, session startup should declare:

```
Bound by:
• CIV–MEM–CORE v2.8
• CIV–MIND–MERCOURIS v2.6 (PRIMARY)
• CIV–MIND–MEARSHEIMER v2.6 (ADVISORY)
• CIV–MIND–BARNES v2.5 (TERTIARY CATALYST)
• CIV–MEM–TEMPLATE v2.9
• CIV–SCHOLAR–TEMPLATE v2.10
```

---

END OF AUDIT — 2026-01-29 (Governance & Template Alignment)
