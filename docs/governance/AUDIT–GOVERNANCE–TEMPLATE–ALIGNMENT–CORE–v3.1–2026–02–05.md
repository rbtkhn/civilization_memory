# Audit: Governance & Template Alignment to CIV–MEM–CORE v3.1

**Authority:** CIV–MEM–CORE v3.1 · CMC–BOOTSTRAP (CMC 3.1)  
**Scope:** All governance files, template files, and CORE section/version references  
**Date:** 2026-02-05  
**Purpose:** Alignment audit of governance and templates to CIV–MEM–CORE v3.1 and CMC 3.1 Version Decoupling.

---

## I. ANCHOR: CIV–MEM–CORE v3.1

**Binding:** All governance and template files are governed by **CMC 3.1** (single governance version per VERSION–MANIFEST). CIV–MEM–CORE v3.1 is the canonical system core.

**Version Decoupling (CMC 3.1):**
- MEM files declare **content version only**; no governance version in MEM headers.
- Governance version is CMC 3.1; compliance tracked in COMPLIANCE–REGISTRY.md.
- References to "CIV–MEM–CORE v3.0" in compatibility/binding may be updated to v3.1 or "CMC 3.1" for clarity; legacy v3.0 references in historical upgrade notes remain unchanged.

---

## II. FIXES APPLIED THIS AUDIT (2026-02-05)

| File | Fix |
|------|-----|
| CIV–MEM–CORE.md | END OF FILE stamp: v3.0 → **v3.1** |
| CIV–MEM–CORE.md | Section XXIV.C VERSION RULE: replaced with **CMC 3.1 Version Decoupling** rule (content version only; simplified MEM headers; COMPLIANCE–REGISTRY; no "Governed by" in MEMs) |
| CIV–MEM–CORE.md | Section XXX: added **v3.1 ADDITIONS** (Version Decoupling, Typed Connections, Concept Index, OGE Simplification; XXIV.C update) |
| CIV–SCHOLAR–PROTOCOL.md | END OF FILE: v3.0 → **v3.1** (header already 3.1) |
| CIV–SCHOLAR–TEMPLATE.md | END OF FILE: v3.0 → **v3.1** (header already 3.1) |

---

## III. GOVERNANCE LAYER — ALIGNMENT STATUS

| Document | Version / Binding | END OF FILE | Status |
|----------|-------------------|-------------|--------|
| CIV–MEM–CORE.md | v3.1 | v3.1 | **ALIGNED** (fixed this audit) |
| CMC–BOOTSTRAP.md | Governed by CMC 3.1 | — | ALIGNED |
| VERSION–MANIFEST.md | v3.1 · CMC 3.1 | — | ALIGNED |
| CONNECTION–TYPES.md | Governed by CMC 3.1 | — | ALIGNED |
| COMPLIANCE–REGISTRY.md | Governed by CMC 3.1 | — | ALIGNED |
| MEM–UPGRADE–VERIFICATION–CHECKLIST.md | Authority v3.0 | — | **GAP** → Update authority to CMC 3.1 or v3.1 where active |
| PROTOCOL–MIND–NAVIGATION.md | CMC 3.2 (active protocol) | — | OK (protocol; 3.2 proposal) |
| NAMESPACE–CLARIFICATION.md | v1.0 | — | OK (clarification doc) |

---

## IV. TEMPLATE LAYER — ALIGNMENT STATUS

| Document | Header Version | CORE/CMC Reference | END OF FILE | Status |
|----------|----------------|--------------------|-------------|--------|
| CIV–MEM–TEMPLATE.md | v3.1 | Governed by CMC 3.1 | CMC 3.1 | **ALIGNED** |
| CIV–SCHOLAR–TEMPLATE.md | v3.1 | Compatibility CORE v3.1, PROTOCOL v3.1 | v3.1 | **ALIGNED** (fixed this audit) |
| CIV–SCHOLAR–PROTOCOL.md | v3.1 | CMC 3.1 OGE; Compatibility v3.1 | v3.1 | **ALIGNED** (fixed this audit) |
| CIV–ARC–TEMPLATE.md | v3.1 | Compatibility CIV–MEM–CORE v3.0 · MEM–TEMPLATE v3.0 | v3.1 | **GAP** → Compatibility: update to CIV–MEM–CORE v3.1, CIV–MEM–TEMPLATE v3.1 |
| CIV–ARC–LEDGER–TEMPLATE.md | v3.0 | CIV–ARC–TEMPLATE v3.0 · CIV–MEM–TEMPLATE v3.0 | v3.0 | **GAP** → Governance line: optional update to v3.1 for consistency |
| CIV–MIND–TEMPLATE.md | v3.0 | Governed by CIV–MEM–CORE v3.0 | v3.0 | **SOFT GAP** → Under decoupling, binding is CMC 3.1; optional "CIV–MEM–CORE v3.1" for clarity |
| CIV–MIND–MERCOURIS.md | v3.0 | CIV–MEM–CORE v3.0, CIV–MIND–TEMPLATE v3.0 | v3.1 | **GAP** → Header/Governed by v3.0; EOF v3.1 (inconsistent); optional align to CMC 3.1 |
| CIV–MIND–MEARSHEIMER.md | v3.0 | CIV–MEM–CORE v3.0, CIV–MIND–TEMPLATE v3.0 | v3.1 | **GAP** → Same as MERCOURIS |
| CIV–MIND–BARNES.md | v3.0 | CIV–MEM–CORE v3.0, CIV–MIND–TEMPLATE v3.0 | v3.1 | **GAP** → Same as MERCOURIS |
| CIV–CORE–TEMPLATE.md | v3.0 | CIV–MEM–CORE v3.0, CIV–SCHOLAR–PROTOCOL v3.0 | v3.0 | **SOFT GAP** → Optional v3.1 for consistency |
| CIV–INDEX–TEMPLATE.md | v3.0 | CIV–MEM–CORE v3.0, MEM–TEMPLATE v3.0, SCHOLAR–TEMPLATE v3.0 | v3.0 | **SOFT GAP** → Optional v3.1 |
| CIV–DOCTRINE–TEMPLATE.md | v3.0 | CIV–MEM–CORE v3.0 | v3.0 | **SOFT GAP** → Optional v3.1 |
| CIV–CEV–TEMPLATE.md | v3.0 | EPHEMERAL–OBSERVATION–PROTOCOL | v3.0 | OK (protocol-bound) |

---

## V. CORE SECTION REFERENCES — CONSISTENCY

| Location | Reference | Note |
|----------|-----------|------|
| CIV–MEM–CORE § XXIV.C | VERSION RULE | **Updated** to CMC 3.1 Version Decoupling (content version only; simplified headers) |
| CIV–MEM–CORE § XXVIII | CCM | Unchanged; Scholar-on-Scholar divergence expected |
| CIV–MEM–CORE § XXIX | TSP | Unchanged; cross-civ connections mandatory |
| CIV–MEM–CORE § VP-1.g | Blend Law | Unchanged; GEO 2/3 Mearsheimer, Subject 2/3 Mercouris |
| CIV–MEM–TEMPLATE | "CIV–MEM–CORE v3.0" (Sections XXIV–XXVII, VP-1.g) | **SOFT GAP** → May update to v3.1 for consistency; section numbers unchanged |
| CIV–ARC–TEMPLATE | "CIV–MEM–CORE v3.0" (Section XXIX) | **GAP** → Recommend update to v3.1 |
| CIV–SCHOLAR–TEMPLATE | "CIV–MEM–CORE v3.0" (Sections XXVI–XXVII) | **SOFT GAP** → Historical ITI ref; optional v3.1 |

---

## VI. .CURSOR/RULES — ALIGNMENT

| File | Binding Reference | Status |
|------|-------------------|--------|
| cmc-oge-enforcement.mdc | CMC 3.1, OGE stateless, 8 slots | ALIGNED |
| cmc-scholar-mode.mdc | CMC–BOOTSTRAP, MIND navigation | ALIGNED |
| cmc-version-upgrade-on-edit.mdc | CMC 3.1, content version only | ALIGNED |
| cmc-blend-law.mdc | CIV–MEM–CORE VP-1.g, CMC–BOOTSTRAP | ALIGNED |
| cmc-mode-contracts.mdc | CMC–BOOTSTRAP | ALIGNED |
| cmc-mercouris-voice.mdc | CIV–MIND–MERCOURIS (v2.6 transcript ref) | OK (MIND fingerprint) |
| cmc-mearsheimer-voice.mdc | CIV–MIND–MEARSHEIMER (v2.6 transcript ref) | OK (MIND fingerprint) |
| cmc-barnes-voice.mdc | CIV–MIND–BARNES (v2.6 transcript ref) | OK (MIND fingerprint) |
| cmc-tri-frame-protocol.mdc | CIV–MEM–CORE § XXVIII, CIV–MIND–BARNES | OK (CCM, tri-frame) |

---

## VII. SUMMARY

| Layer | Aligned | Gaps / Soft Gaps | Action |
|-------|---------|------------------|--------|
| CIV–MEM–CORE | Yes | — | EOF + XXIV.C + XXX updated |
| Governance (other) | Yes | MEM–UPGRADE–VERIFICATION–CHECKLIST authority | Optional: set to CMC 3.1 |
| Templates (v3.1) | MEM, SCHOLAR, SCHOLAR–PROTOCOL | — | EOF fixes applied |
| Templates (v3.0) | Several | ARC (Compat v3.0), MIND (header/EOF mismatch), CORE/INDEX/DOCTRINE | Optional: bump Compatibility to v3.1 or CMC 3.1 |
| Cursor rules | All | — | No change required |

**Historical upgrade notes** (e.g. "Supersedes v2.7", "v2.8 introduces") are **not** changed; only **active governance declarations** (Governed by, Compatibility, END OF FILE, and binding version rules) were audited and, where critical, fixed.

---

## VIII. RECOMMENDED NEXT STEPS (OPTIONAL)

1. **MEM–UPGRADE–VERIFICATION–CHECKLIST.md:** Set Authority to "CIV–MEM–CORE v3.1" or "CMC 3.1" where it currently says v3.0.
2. **CIV–ARC–TEMPLATE.md:** Update Compatibility line to "CIV–MEM–CORE v3.1 · CIV–MEM–TEMPLATE v3.1".
3. **MIND profiles (MERCOURIS, MEARSHEIMER, BARNES):** Align header version with EOF (either header → v3.1 or EOF → v3.0) and optionally "Governed by CIV–MEM–CORE v3.1".
4. **CIV–CORE–TEMPLATE, CIV–INDEX–TEMPLATE, CIV–DOCTRINE–TEMPLATE:** Optionally update Compatibility/Governed by to v3.1 for consistency.

---

**END OF AUDIT — CIV–MEM–CORE v3.1 · 2026-02-05**
