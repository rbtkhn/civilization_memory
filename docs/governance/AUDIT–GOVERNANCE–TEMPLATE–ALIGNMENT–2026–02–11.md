# Audit: Governance & Template Alignment (Full)

**Authority:** CIV–MEM–CORE v3.2 · CMC–BOOTSTRAP · VERSION–MANIFEST  
**Scope:** All governance documents, templates, and cursor rules  
**Date:** 2026-02-11  
**Purpose:** Alignment audit of governance and template files to CMC 3.2; sync/harvest; entity focus; version and cross-reference consistency.

---

## I. GOVERNANCE VERSION ANCHOR

**Binding:** CMC Governance Version **3.2** (VERSION–MANIFEST Section I). All governance documents and templates are governed by CMC 3.2. Content version (e.g. MEM files, STATE files) is decoupled per Version Decoupling.

---

## II. ALIGNMENT SUMMARY

| Layer | Documents Audited | Aligned | Gaps Fixed | Gaps Open |
|-------|-------------------|---------|------------|-----------|
| Core governance | 5 | 5 | 1 | 0 |
| Templates | 12 | 12 | 0 | 0 |
| Cursor rules | 15 | 15 | 0 | 0 |
| Supporting governance | 6 | 6 | 0 | 1 optional |

---

## III. CORE GOVERNANCE

| Document | Governed by / Compatibility | Cross-refs (STATE, harvest, entity focus) | Status |
|----------|-----------------------------|--------------------------------------------|--------|
| **CIV–MEM–CORE** | v3.2 · CMC 3.2 | Entity focus (518–522): CORE, STATE, SCHOLAR re-anchor; load per mode. No harvest mention (harvest is STATE–template scope). | **ALIGNED** |
| **CMC–BOOTSTRAP** | CMC 3.2 | STATE: sync + harvest (§XIV-B, cmc-state-scholar-harvest). Entity re-anchor. TEMPLATE path: CIV–STATE–TEMPLATE (current v1.12). | **ALIGNED** (template version ref updated this audit from v1.2 → current v1.12) |
| **VERSION–MANIFEST** | v3.2 | CMC 3.2 single source of truth; template list includes CIV–STATE–TEMPLATE. | **ALIGNED** |
| **TERMINOLOGY–REGISTRY** | CMC 3.2 | CIV–STATE: cognitive exoskeleton, extends reach, no substitute for judgment. CIV–SCHOLAR: learning ledger. Ref: CIV–STATE–TEMPLATE Section XI. | **ALIGNED** |
| **CHANGELOG** | CMC 3.2 | 00003 harvest; 00002 cognitive exoskeleton; 00001 entity re-anchor. | **ALIGNED** |

---

## IV. TEMPLATES

| Template | Compatibility / Governed by | STATE/SCHOLAR/harvest/sync refs | Status |
|----------|-----------------------------|----------------------------------|--------|
| **CIV–STATE–TEMPLATE** | CIV–MEM–CORE v3.2 · CMC 3.2 | v1.12. §XII Directionality: harvest exclusive gate; §XIV sync; §XIV-B Harvest Protocol. | **ALIGNED** |
| **CIV–SCHOLAR–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · PROTOCOL v3.1 | Entity focus (XIII). No direct harvest ref (harvest target is Scholar file). | **ALIGNED** |
| **CIV–SCHOLAR–PROTOCOL** | CMC 3.2 · SCHOLAR–TEMPLATE v3.1 | Entity focus: CORE, STATE, SCHOLAR re-anchor. | **ALIGNED** |
| **CIV–MEM–TEMPLATE** | CMC 3.2 | CIV–MEM–CORE v3.2 refs (proportion, XXIV–XXVII). | **ALIGNED** |
| **CIV–CORE–TEMPLATE** | CIV–MEM–CORE v3.2 · CMC v3.2 | Re-anchor on civilization switch; load per mode. | **ALIGNED** |
| **CIV–ARC–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · NAMESPACE v1.0 | Section XXIX ref (historical v3.0 in upgrade note only). | **ALIGNED** |
| **CIV–INDEX–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · SCHOLAR v3.1 | CIV–MEM–CORE v3.2 Section XXIX. | **ALIGNED** |
| **CIV–DOCTRINE–TEMPLATE** | CIV–MEM–CORE v3.2 · SCHOLAR v3.1 · PROTOCOL v3.1 | — | **ALIGNED** |
| **CIV–MIND–TEMPLATE** | CIV–MEM–CORE v3.2 | STATE: CIV–STATE–TEMPLATE Section IV (Translation Table). | **ALIGNED** |
| **CIV–MIND–MERCOURIS** | CIV–MEM–CORE v3.2 | CIV–STATE–TEMPLATE Section IV. | **ALIGNED** |
| **CIV–MIND–MEARSHEIMER** | CIV–MEM–CORE v3.2 | CIV–STATE–TEMPLATE Section IV. | **ALIGNED** |
| **CIV–MIND–BARNES** | CIV–MEM–CORE v3.2 | CIV–STATE–TEMPLATE Section IV. | **ALIGNED** |

---

## V. CURSOR RULES

| Rule | Purpose | Template / Bootstrap ref | Status |
|------|----------|---------------------------|--------|
| cmc-state-scholar-sync | Sync: STATE updated from SCHOLAR/CORE/DOCTRINE | CIV–STATE–TEMPLATE §XIV; harvest as only transfer into Scholar | **ALIGNED** |
| cmc-state-scholar-harvest | Harvest: only way STATE → Scholar learn | CIV–STATE–TEMPLATE §XIV-B | **ALIGNED** |
| cmc-state-mem-grounding | MEM SCAN; dimension + connection discovery | CIV–STATE–TEMPLATE; MEM–RELEVANCE | **ALIGNED** |
| cmc-mode-contracts | WRITE/LEARN/IMAGINE/STATE/SYSTEM contracts | CMC–BOOTSTRAP; STATE template | **ALIGNED** |
| cmc-oge-enforcement | 8-slot options; STATE 8 options; MIND-derived | CIV–STATE–TEMPLATE X-A; MIND profiles | **ALIGNED** |
| cmc-scholar-mode | LEARN response length; options; MEM connection awareness | CIV–SCHOLAR–PROTOCOL; PROTOCOL–MIND–NAVIGATION | **ALIGNED** |
| cmc-blend-law | Content proportion (GEO vs Subject MEM) | CIV–MEM–CORE VP-1.g | **ALIGNED** |
| cmc-tri-frame-protocol | M/M/B sequence; Option D; post-Barnes | CIV–MIND–BARNES; cmc-oge-enforcement | **ALIGNED** |
| cmc-mercouris-voice | Mercouris linguistic fingerprint | CIV–MIND–MERCOURIS | **ALIGNED** |
| cmc-mearsheimer-voice | Mearsheimer linguistic fingerprint | CIV–MIND–MEARSHEIMER | **ALIGNED** |
| cmc-barnes-voice | Barnes linguistic fingerprint | CIV–MIND–BARNES | **ALIGNED** |
| cmc-version-upgrade-on-edit | Content vs governance version | VERSION–MANIFEST; CHANGELOG | **ALIGNED** |
| cmc-gated-spiral-awareness | Doctrine → LEARN/STATE → WRITE loop | CHANGELOG 00000 | **ALIGNED** |
| cmc-negative-claim-check | Absence claims require corpus check | — | **ALIGNED** |
| cmc-arc-source-coverage | STATE: multi-category ARC; source contradiction | CIV–STATE–TEMPLATE; ARC files | **ALIGNED** |

---

## VI. SUPPORTING GOVERNANCE

| Document | Governed by | Notes | Status |
|----------|-------------|-------|--------|
| **CONNECTION–TYPES** | CMC 3.2 | Typed connections; CMC 3.1 origin. | **ALIGNED** |
| **COMPLIANCE–REGISTRY** | CMC 3.2 | Centralized MEM compliance; Version Decoupling. | **ALIGNED** |
| **CONCEPT–INDEX** | CMC 3.2 | MIND affinities (CMC 3.2). | **ALIGNED** |
| **PROTOCOL–MIND–NAVIGATION** | CMC 3.2 | OGE integration; perspective affinities. | **ALIGNED** |
| **NAMESPACE–CLARIFICATION** | (none in header) | v1.0; errata. Listed in VERSION–MANIFEST? No. | **SOFT GAP** — Optional: add "Governed by: CMC 3.2" for consistency with other governance errata/support docs. |

---

## VII. KEY CROSS-CUTTING CONSISTENCY

| Topic | Where defined | Where referenced | Consistent? |
|-------|----------------|------------------|-------------|
| **Harvest (STATE → Scholar)** | CIV–STATE–TEMPLATE §XIV-B; cmc-state-scholar-harvest | CMC–BOOTSTRAP (SYNC para); STATE template §XII; cmc-state-scholar-sync; CIV–STATE–RUSSIA; CIV–SCHOLAR–RUSSIA | **Yes** |
| **Sync (update STATE from sources)** | CIV–STATE–TEMPLATE §XIV; cmc-state-scholar-sync | CMC–BOOTSTRAP; STATE template §XII | **Yes** |
| **Entity focus (re-anchor)** | CIV–MEM–CORE (518–522); CMC–BOOTSTRAP (CORE LOAD) | CIV–STATE–TEMPLATE §I; CIV–SCHOLAR–TEMPLATE XIII; CIV–SCHOLAR–PROTOCOL; CIV–CORE–TEMPLATE; cmc-state-mem-grounding; cmc-scholar-mode | **Yes** |
| **STATE template version** | CIV–STATE–TEMPLATE (v1.12) | CMC–BOOTSTRAP: now "current: v1.12" (was v1.2 — fixed this audit) | **Yes** (fixed) |
| **Cognitive exoskeleton / shadow principal** | TERMINOLOGY–REGISTRY (CIV–STATE); CIV–STATE–TEMPLATE §I (design objective) | CIV–STATE–RUSSIA (foundational perspective) | **Yes** |
| **Scholar: steward, State learns from Scholar** | CIV–SCHOLAR–RUSSIA (archetype); CIV–STATE–RUSSIA | Harvest as only transfer path in both | **Yes** |

---

## VIII. FIXES APPLIED THIS AUDIT (2026-02-11)

| File | Fix |
|------|-----|
| CMC–BOOTSTRAP.md | TEMPLATE line: "CIV–STATE–TEMPLATE.md (v1.2)" → "(current: v1.12)" |

---

## IX. OPEN GAPS (OPTIONAL)

1. **NAMESPACE–CLARIFICATION:** Add "Governed by: CMC 3.2" to header for parity with CONNECTION–TYPES, COMPLIANCE–REGISTRY, CONCEPT–INDEX. Low priority (document is errata; content unchanged).
2. **CIV–MEM–CORE:** No explicit sentence that "transfer from STATE into SCHOLAR is only via harvest." Currently stated in CMC–BOOTSTRAP and CIV–STATE–TEMPLATE. Optional: add one line under entity focus or file-type list for discoverability.

---

## X. CONCLUSION

Governance and template files are **aligned** to CMC 3.2. Sync and harvest are consistently defined and referenced. Entity focus (CORE, STATE, SCHOLAR re-anchor) is consistent across CORE, BOOTSTRAP, STATE template, SCHOLAR template, and cursor rules. One fix was applied (Bootstrap STATE template version reference). Two optional gaps remain (NAMESPACE header; CORE harvest mention).

**Reference:** CMC 3.2; VERSION–MANIFEST; CHANGELOG 00001–00003; CIV–STATE–TEMPLATE v1.12 §XII, §XIV, §XIV-B.

---

END OF AUDIT — 2026-02-11
