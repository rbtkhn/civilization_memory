# AUDIT — Governance & Template Alignment

**Date:** 2026-01-29  
**Scope:** All governance and template files in `docs/governance/` and `docs/templates/`  
**Purpose:** Version binding consistency, cross-reference alignment, structural coherence

---

## I. EXECUTIVE SUMMARY

| Status | Count |
|--------|--------|
| **MISALIGNED** (declared ≠ actual) | 6 |
| **INTERNAL MISMATCH** (within-file inconsistency) | 2 |
| **ALIGNED** | Governance/template files otherwise consistent |

**Root cause:** Governance files (CMC–BOOTSTRAP, VERSION–MANIFEST) declare versions that lag behind actual file versions. CIV–MEM–CORE and templates were upgraded (CORE v2.7, MEM–TEMPLATE v2.9, SCHOLAR–TEMPLATE v2.10) without updating the binding declarations.

---

## II. ACTUAL FILE VERSIONS (SOURCE OF TRUTH)

| File | Header/Footer Version | Location |
|------|-----------------------|----------|
| CIV–MEM–CORE | **v2.7** | docs/governance/CIV–MEM–CORE.md |
| CMC–BOOTSTRAP | v2.11 | docs/governance/CMC–BOOTSTRAP.md |
| VERSION–MANIFEST | v1.10 (header) / v1.9 (footer) | docs/governance/VERSION–MANIFEST.md |
| CIV–MEM–TEMPLATE | **v2.9** | docs/templates/CIV–MEM–TEMPLATE.md |
| CIV–SCHOLAR–TEMPLATE | **v2.10** | docs/templates/CIV–SCHOLAR–TEMPLATE.md |
| CIV–SCHOLAR–PROTOCOL | v2.2 | docs/templates/CIV–SCHOLAR–PROTOCOL.md |
| CIV–MIND–MERCOURIS | v2.5 | docs/templates/CIV–MIND–MERCOURIS.md |
| CIV–MIND–MEARSHEIMER | v2.5 | docs/templates/CIV–MIND–MEARSHEIMER.md |
| CIV–MIND–BARNES | v2.5 | docs/templates/CIV–MIND–BARNES.md |
| CIV–MIND–TEMPLATE | v2.5 | docs/templates/CIV–MIND–TEMPLATE.md |
| CIV–DOCTRINE–TEMPLATE | v2.1 | docs/templates/CIV–DOCTRINE–TEMPLATE.md |
| CIV–CORE–TEMPLATE | v2.0 | docs/templates/CIV–CORE–TEMPLATE.md |
| CIV–INDEX–TEMPLATE | v2.0 | docs/templates/CIV–INDEX–TEMPLATE.md |
| CIV–ARC–TEMPLATE | v2.7 | docs/templates/CIV–ARC–TEMPLATE.md |
| CIV–ARC–LEDGER–TEMPLATE | v1.0 | docs/templates/CIV–ARC–LEDGER–TEMPLATE.md |
| CIV–CEO–TEMPLATE | v1.0 | docs/templates/CIV–CEO–TEMPLATE.md |
| CIV–SCHOLAR–GERMANIA | **v2.12** | content/civilizations/GERMANIA/CIV–SCHOLAR–GERMANIA.md |

---

## III. MISALIGNMENTS (DECLARED ≠ ACTUAL)

### 1. CIV–MEM–CORE

| Where declared | Declared | Actual | Action |
|----------------|----------|--------|--------|
| CMC–BOOTSTRAP § VERSION BINDINGS | v2.6 | v2.7 | Update to v2.7 |
| CMC–BOOTSTRAP § See: SAP | v2.6 | v2.7 | Update to v2.7 |
| VERSION–MANIFEST § II CORE GOVERNANCE | v2.6 | v2.7 | Update to v2.7 |
| VERSION–MANIFEST § VI Quick Binding | v2.6 | v2.7 | Update to v2.7 |

### 2. CIV–MEM–TEMPLATE

| Where declared | Declared | Actual | Action |
|----------------|----------|--------|--------|
| CMC–BOOTSTRAP § VERSION BINDINGS | v2.8 | v2.9 | Update to v2.9 |
| VERSION–MANIFEST § II TEMPLATES | v2.8 | v2.9 | Update to v2.9 |
| VERSION–MANIFEST § VI Quick Binding | v2.8 | v2.9 | Update to v2.9 |

### 3. CIV–SCHOLAR–TEMPLATE

| Where declared | Declared | Actual | Action |
|----------------|----------|--------|--------|
| CMC–BOOTSTRAP § VERSION BINDINGS | v2.9 | v2.10 | Update to v2.10 |
| VERSION–MANIFEST § II TEMPLATES | v2.9 | v2.10 | Update to v2.10 |
| CIV–DOCTRINE–TEMPLATE § Compatibility | v2.9 | v2.10 | Update to v2.10 |

### 4. CIV–SCHOLAR–GERMANIA (civilization-specific)

| Where declared | Declared | Actual | Action |
|----------------|----------|--------|--------|
| VERSION–MANIFEST § II CIVILIZATION-SPECIFIC SCHOLARS | v2.11 | v2.12 | Update to v2.12 |
| VERSION–MANIFEST § III GERMANIA table | v2.7 | v2.12 | Update to v2.12 |

---

## IV. INTERNAL MISMATCHES (WITHIN FILE)

### 1. VERSION–MANIFEST

| Location | Value | Action |
|----------|--------|--------|
| Line 1 (header) | v1.10 | Keep |
| Line 307 (footer) | v1.9 | Update to v1.10 |

### 2. VERSION–MANIFEST — GERMANIA

| Section | CIV–SCHOLAR–GERMANIA | Action |
|---------|----------------------|--------|
| II CIVILIZATION-SPECIFIC SCHOLARS | v2.11 | Update to v2.12 |
| III GERMANIA table | v2.7 | Update to v2.12 |

---

## V. CROSS-REFERENCE ALIGNMENT (TEMPLATES → CORE)

| File | References CIV–MEM–CORE | Status |
|------|-------------------------|--------|
| CIV–MEM–TEMPLATE | v2.7+ (Compatibility, Sections XXIV–XXVII) | ✓ Aligned |
| CIV–SCHOLAR–TEMPLATE | v2.7+ (Compatibility, ITI) | ✓ Aligned |
| CIV–ARC–TEMPLATE | v2.8+ (MEM–TEMPLATE) | ✓ v2.9 satisfies |
| CIV–MIND–* (MERCOURIS, MEARSHEIMER, BARNES, TEMPLATE) | v2.6 | Optional: update to v2.7 for clarity (v2.6 still correct as minimum) |
| CIV–DOCTRINE–TEMPLATE | v2.0+ | ✓ Aligned |
| CIV–INDEX–TEMPLATE | v2.2+ · MEM–TEMPLATE v2.8+ · SCHOLAR v2.5 | SCHOLAR v2.10 satisfies |
| CIV–CORE–TEMPLATE | v2.2+ | ✓ Aligned |

No mandatory change required for MIND references to CORE v2.6; CORE v2.7 is backward compatible.

---

## VI. STRUCTURAL ALIGNMENT

- **CIV–MEM–CORE v2.7** defines: TLA (XXIV), Structured Data (XXV), Synthesis Validation (XXVI), ITI (XXVII).
- **CIV–MEM–TEMPLATE v2.9** implements TLA and references CIV–MEM–CORE v2.7 Sections XXIV–XXVII. **Aligned.**
- **CIV–SCHOLAR–TEMPLATE v2.10** implements Synthesis Tradecraft (Assumptions Box, ACH) and references CIV–MEM–CORE v2.7 XXVI–XXVII. **Aligned.**

---

## VII. RECOMMENDED FIXES (APPLIED)

1. **CMC–BOOTSTRAP:** Update VERSION BINDINGS and See: SAP to CIV–MEM–CORE v2.7, CIV–MEM–TEMPLATE v2.9, CIV–SCHOLAR–TEMPLATE v2.10.
2. **VERSION–MANIFEST:** Update Section II (CORE v2.7, MEM–TEMPLATE v2.9, SCHOLAR–TEMPLATE v2.10; CIV–SCHOLAR–GERMANIA v2.12), Section III GERMANIA (CIV–SCHOLAR–GERMANIA v2.12), Section VI Quick Binding (CORE v2.7, MEM–TEMPLATE v2.9), footer to v1.10.
3. **CIV–DOCTRINE–TEMPLATE:** Update Compatibility to CIV–SCHOLAR–TEMPLATE v2.10.

---

## VIII. POST-AUDIT BINDING DECLARATION

After fixes, session startup should declare:

```
Bound by:
• CIV–MEM–CORE v2.7
• CIV–MIND–MERCOURIS v2.5 (PRIMARY)
• CIV–MIND–MEARSHEIMER v2.5 (ADVISORY)
• CIV–MIND–BARNES v2.5 (TERTIARY CATALYST)
• CIV–MEM–TEMPLATE v2.9
• CIV–SCHOLAR–TEMPLATE v2.10
```

---

END OF AUDIT — 2026-01-29
