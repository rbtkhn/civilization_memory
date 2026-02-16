AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT — 2026-02-15
Civilizational Memory Codex · Governance & Template Version Alignment Audit

Status: COMPLETED
Scope: All governance and template files; alignment to CMC 3.3
Reference: VERSION–MANIFEST v3.3; CMC Governance Version 3.3 (single source of truth)
Date: 15 February 2026

────────────────────────────────────────────────────────────
I. BINDING VERSION (SINGLE SOURCE OF TRUTH)
────────────────────────────────────────────────────────────

CMC GOVERNANCE VERSION: 3.3 (VERSION–MANIFEST Section I)

Individual governance documents do not declare separate versions for binding; the CMC version is the single reference. For alignment and drift checks, Compatibility and Governed-by lines should reference CMC 3.3 (or CIV–MEM–CORE v3.3 where that is the canonical name).

────────────────────────────────────────────────────────────
II. GOVERNANCE FILES — CURRENT STATE
────────────────────────────────────────────────────────────

| File | Version / Governed by | Alignment |
|------|----------------------|-----------|
| VERSION–MANIFEST.md | v3.3 | ✓ Canonical |
| CIV–MEM–CORE.md | v3.3 | ✓ |
| CMC–BOOTSTRAP.md | Governed by: CMC 3.3 | ✓ |
| PROTOCOL–MIND–NAVIGATION.md | Governed by: CMC 3.3 | ✓ |
| TERMINOLOGY–REGISTRY.md | Governed by: CMC 3.3 | ✓ |
| COMPLIANCE–REGISTRY.md | v3.3, Governed by: CMC 3.3 | ✓ |
| CHANGELOG.md | (version in manifest) | ✓ |
| MEM–UPGRADE–VERIFICATION–CHECKLIST.md | Authority: CIV–MEM–TEMPLATE v3.0 · CIV–MEM–CORE v3.0 | ⚠ Optional: update to v3.3 |
| PROTOCOL–MODE–INFERENCE.md | (if present) | — |

Note: VERSION–MANIFEST Section II lists "CIV–MEM–CORE (v3.2 — three-mode architecture)" — recommend correcting to v3.3 for consistency.

────────────────────────────────────────────────────────────
III. TEMPLATE FILES — CURRENT STATE
────────────────────────────────────────────────────────────

| File | Version | Compatibility / Governed by | Alignment |
|------|---------|-----------------------------|-----------|
| CIV–MEM–TEMPLATE.md | v3.3 | Governed by: CMC 3.3 | ✓ |
| CIV–STATE–TEMPLATE.md | v3.3 | Compatibility: CIV–MEM–CORE v3.2 · CMC 3.2 | ❌ Compatibility → v3.3 |
| CIV–MIND–MERCOURIS.md | v3.3 | Governed by: CIV–MEM–CORE v3.2 · CIV–MIND–TEMPLATE v3.0 | ⚠ Governed by → v3.3 |
| CIV–MIND–MEARSHEIMER.md | v3.3 | Governed by: CIV–MEM–CORE v3.2 · CIV–MIND–TEMPLATE v3.0 | ⚠ Governed by → v3.3 |
| CIV–MIND–BARNES.md | v3.3 | Governed by: CIV–MEM–CORE v3.2 · CIV–MIND–TEMPLATE v3.0 | ⚠ Governed by → v3.3 |
| CIV–SCHOLAR–TEMPLATE.md | v3.2 | Compatibility: CIV–MEM–CORE v3.2 · … · CIV–SCHOLAR–PROTOCOL v3.1 | ❌ → v3.3 |
| CIV–SCHOLAR–PROTOCOL.md | v3.2 | Compatibility: … · CMC 3.2 | ❌ → v3.3 |
| CIV–SCHOLAR–PRUNING–PROTOCOL.md | v3.2 | Compatibility: CIV–MEM–CORE v3.2 · CIV–SCHOLAR–TEMPLATE v3.2 | ❌ → v3.3 |
| CIV–CORE–TEMPLATE.md | v3.2 | Compatibility: CMC v3.2; Governed by: CIV–MEM–CORE v3.2 | ❌ → v3.3 |
| CIV–INDEX–TEMPLATE.md | v3.2 | Compatibility: CIV–MEM–CORE v3.2 · … | ❌ → v3.3 |
| CIV–ARC–TEMPLATE.md | v3.2 | Compatibility: CIV–MEM–CORE v3.2 · … | ❌ → v3.3 |
| CIV–DOCTRINE–TEMPLATE.md | v3.2 | Compatibility: CIV–MEM–CORE v3.2 · … | ❌ → v3.3 |
| CIV–MIND–TEMPLATE.md | v3.2 | Compatibility / Governed by: CIV–MEM–CORE v3.2 | ❌ → v3.3 |
| CIV–AXIOM–TEMPLATE.md | v1.0 | Compatibility: CIV–MEM–CORE v3.3 · … | ✓ |
| CIV–CEV–TEMPLATE.md | v3.2 | Compatibility: EPHEMERAL–OBSERVATION–PROTOCOL v1.0+ | ⚠ Optional v3.3 ref if bound to CMC |
| CIV–ARC–LEDGER–TEMPLATE.md | v3.2 | — | ⚠ Optional |
| EXAMPLE–MEM–*.md | v3.2 | — | Optional |

────────────────────────────────────────────────────────────
IV. CURSOR RULES (CONTENT ALIGNMENT)
────────────────────────────────────────────────────────────

| Rule | Content composition / MIND | Alignment |
|------|----------------------------|-----------|
| cmc-blend-law.mdc | No 2/3–1/3; primary/secondary + Barnes required; section roles | ✓ Matches CIV–MEM–CORE VP-1.g |
| cmc-oge-enforcement.mdc | 8 slots A–H; 10–20 words; MIND-derived A/B/C | ✓ |
| cmc-mercouris-voice.mdc | Linguistic fingerprint; LEARN/WRITE academic, IMAGINE spoken | ✓ |
| cmc-mearsheimer-voice.mdc | Direct; structural; incentive; blame/narrative layer | ✓ |
| cmc-barnes-voice.mdc | Constraint hierarchy; sobriquet; southern register | ✓ |
| cmc-tri-frame-protocol.mdc | M→M→B→M; post-Barnes response; variety | ✓ |
| cmc-state-scholar-sync.mdc | One-way STATE from SCHOLAR/CORE/DOCTRINE/MEM | ✓ |
| cmc-state-scholar-harvest.mdc | Relay only gate STATE→SCHOLAR | ✓ |
| cmc-state-mem-grounding.mdc | MEM SCAN; CORE load; three-source composition | ✓ |
| cmc-mode-contracts.mdc | WRITE/LEARN/IMAGINE/STATE/SYSTEM | ✓ |
| cmc-version-upgrade-on-edit.mdc | Content version only; no gov version in MEM headers | ✓ |

No cursor rule references "2/3" or "1/3" or "Proportional Blend" in a normative way; cmc-blend-law correctly encodes the content composition rule (no numerical proportions, Barnes required).

────────────────────────────────────────────────────────────
V. CONTENT COMPOSITION RULE (VP-1.g) CONSISTENCY
────────────────────────────────────────────────────────────

- **CIV–MEM–CORE VP-1.g:** Primary/secondary by file type; Barnes required (or N/A); no numerical proportions; section roles. ✓
- **cmc-blend-law.mdc:** Same rule; GEO vs Subject; section-role table; Barnes minimum presence or N/A. ✓
- **CIV–MEM–TEMPLATE:** No inline 2/3–1/3; defers to CORE. ✓
- **MEM–UPGRADE–VERIFICATION–CHECKLIST:** References "Blend Law" and "CIV–MEM–TEMPLATE v3.0 · CIV–MEM–CORE v3.0". Optional: update to "content composition rule" and v3.3 for consistency.
- **PROTOCOL–MIND–NAVIGATION VI.D:** Content proportion rule (no numbers, Barnes required). ✓

────────────────────────────────────────────────────────────
VI. RECOMMENDED FIXES (PRIORITY ORDER)
────────────────────────────────────────────────────────────

**A. Compatibility / Governed-by only (no document version change)**

1. **CIV–STATE–TEMPLATE.md**  
   Current: `Compatibility: CIV–MEM–CORE v3.2 · CMC 3.2`  
   Change to: `Compatibility: CIV–MEM–CORE v3.3 · CMC 3.3`

2. **CIV–MIND–MERCOURIS.md**  
   Current: `Governed by: CIV–MEM–CORE v3.2` (and CIV–MIND–TEMPLATE v3.0)  
   Change to: `CIV–MEM–CORE v3.3` and `CIV–MIND–TEMPLATE v3.3` (if MIND–TEMPLATE upgraded)

3. **CIV–MIND–MEARSHEIMER.md**  
   Same as MERCOURIS.

**B. Document version v3.2 → v3.3 + Compatibility/Governed by**

4. **CIV–SCHOLAR–TEMPLATE.md** — Version 3.3; Compatibility: CIV–MEM–CORE v3.3 · CIV–MEM–TEMPLATE v3.3 · CIV–SCHOLAR–PROTOCOL v3.3  
5. **CIV–SCHOLAR–PROTOCOL.md** — Version 3.3; Compatibility: CIV–SCHOLAR–TEMPLATE v3.3 · CIV–CORE–TEMPLATE v3.3 · CMC 3.3  
6. **CIV–SCHOLAR–PRUNING–PROTOCOL.md** — Version 3.3; Compatibility: CIV–MEM–CORE v3.3 · CIV–SCHOLAR–TEMPLATE v3.3  
7. **CIV–CORE–TEMPLATE.md** — Version 3.3; Compatibility: CMC 3.3; Governed by: CIV–MEM–CORE v3.3  
8. **CIV–INDEX–TEMPLATE.md** — Version 3.3; Compatibility: CIV–MEM–CORE v3.3 · CIV–MEM–TEMPLATE v3.3 · CIV–SCHOLAR–TEMPLATE v3.3  
9. **CIV–ARC–TEMPLATE.md** — Version 3.3; Compatibility: CIV–MEM–CORE v3.3 · CIV–MEM–TEMPLATE v3.3  
10. **CIV–DOCTRINE–TEMPLATE.md** — Version 3.3; Compatibility / Governance Authority: CIV–MEM–CORE v3.3  
11. **CIV–MIND–TEMPLATE.md** — Version 3.3; Compatibility / Governed by: CIV–MEM–CORE v3.3  

**C. Optional**

12. **VERSION–MANIFEST.md** Section II: Change "CIV–MEM–CORE (v3.2 — three-mode architecture)" to "CIV–MEM–CORE (v3.3)".  
13. **MEM–UPGRADE–VERIFICATION–CHECKLIST.md** Authority line: "CIV–MEM–TEMPLATE v3.3 · CIV–MEM–CORE v3.3" and "content composition rule" if "Blend Law" appears.  
14. **CIV–CEV–TEMPLATE.md**, **CIV–ARC–LEDGER–TEMPLATE.md**, **EXAMPLE–MEM–*.md**: Optional v3.3 alignment when next touched.

────────────────────────────────────────────────────────────
VII. SUMMARY
────────────────────────────────────────────────────────────

- **Already aligned to CMC 3.3:** VERSION–MANIFEST, CIV–MEM–CORE, CMC–BOOTSTRAP, PROTOCOL–MIND–NAVIGATION, TERMINOLOGY–REGISTRY, COMPLIANCE–REGISTRY, CIV–MEM–TEMPLATE, CIV–MIND–BARNES, CIV–AXIOM–TEMPLATE (compatibility). Cursor rules (cmc-blend-law, etc.) are content-aligned.
- **Compatibility/Governed-by fix only (no version bump):** CIV–STATE–TEMPLATE, CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER.
- **Version bump to v3.3 + Compatibility/Governed by update:** CIV–SCHOLAR–TEMPLATE, CIV–SCHOLAR–PROTOCOL, CIV–SCHOLAR–PRUNING–PROTOCOL, CIV–CORE–TEMPLATE, CIV–INDEX–TEMPLATE, CIV–ARC–TEMPLATE, CIV–DOCTRINE–TEMPLATE, CIV–MIND–TEMPLATE.

**Recommendation:** Apply Section VI fixes so that all governance and template files consistently reference CMC 3.3 / CIV–MEM–CORE v3.3. Version bumps (v3.2 → v3.3) are additive alignment; no structural or rule changes required beyond version and compatibility text.

**FIXES APPLIED (2026-02-15):** All recommended Section VI edits were applied: CIV–STATE–TEMPLATE (Compatibility), CIV–MIND–MERCOURIS/MEARSHEIMER/BARNES (Governed by + Compatibility), CIV–SCHOLAR–TEMPLATE, CIV–SCHOLAR–PROTOCOL, CIV–SCHOLAR–PRUNING–PROTOCOL, CIV–CORE–TEMPLATE, CIV–INDEX–TEMPLATE, CIV–ARC–TEMPLATE, CIV–DOCTRINE–TEMPLATE, CIV–MIND–TEMPLATE (version 3.3 + compatibility), and VERSION–MANIFEST Section II (CIV–MEM–CORE v3.3).

────────────────────────────────────────────────────────────
VIII. CIVILIZATION-SPECIFIC FILES (REFERENCE)
────────────────────────────────────────────────────────────

CIV–CORE–PERSIA, CIV–SCHOLAR–PERSIA, CIV–STATE–PERSIA, and other CIV–*–[CIV] files reference templates in headers. Per VERSION–MANIFEST and version decoupling, existing headers remain valid. When next touching a civilization file, optional: update "Template Version Used" and "Governed by" to v3.3 for consistency. No mandatory batch upgrade.

MEM files with "Governed by: CIV–MEM–CORE v2.9" or v3.0: Legacy headers; no batch upgrade required per Version Decoupling.

────────────────────────────────────────────────────────────
END OF FILE — AUDIT–GOVERNANCE–TEMPLATE–ALIGNMENT — 2026-02-15
────────────────────────────────────────────────────────────
