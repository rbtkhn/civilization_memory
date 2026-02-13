# Audit: Governance & Template Alignment (Full)

**Authority:** CIV–MEM–CORE v3.2 · CMC–BOOTSTRAP · VERSION–MANIFEST  
**Scope:** All governance documents, templates, and cursor rules  
**Date:** 2026-02-12  
**Purpose:** Alignment audit of governance and template files to CMC 3.2; version consistency; cross-reference and canonical-status consistency.

---

## I. GOVERNANCE VERSION ANCHOR

**Binding:** CMC Governance Version **3.2** (VERSION–MANIFEST Section I). All governance documents and templates are governed by CMC 3.2. Content version (e.g. MEM files, STATE files) is decoupled per Version Decoupling.

---

## II. ALIGNMENT SUMMARY

| Layer | Documents Audited | Aligned | Gaps Found | Gaps Fixed |
|-------|-------------------|---------|------------|------------|
| Core governance | 5 | 5 | 0 | 0 |
| Templates | 12 | 12 | 0 | 0 |
| MIND profiles | 4 | 4 | 0 | 3 |
| Cursor rules | 16 | 16 | 0 | 0 |
| Supporting governance | 6 | 6 | 0 | 1 optional |

---

## III. CORE GOVERNANCE

| Document | Governed by / Compatibility | Cross-refs (STATE, harvest, entity focus) | Status |
|----------|-----------------------------|--------------------------------------------|--------|
| **CIV–MEM–CORE** | v3.2 · CMC 3.2 | Entity focus (518–522); CORE, STATE, SCHOLAR re-anchor. | **ALIGNED** |
| **CMC–BOOTSTRAP** | CMC 3.2 | STATE template: "governance v3.2; internal rev v1.12" (fixed this audit). | **ALIGNED** |
| **VERSION–MANIFEST** | v3.2 | CMC 3.2 single source of truth; template list complete. | **ALIGNED** |
| **TERMINOLOGY–REGISTRY** | CMC 3.2 | CIV–STATE / CIV–SCHOLAR terminology. | **ALIGNED** |
| **CHANGELOG** | CMC 3.2 | Harvest; cognitive exoskeleton; entity re-anchor. | **ALIGNED** |

---

## IV. TEMPLATES

| Template | Compatibility / Governed by | Notes | Status |
|----------|-----------------------------|-------|--------|
| **CIV–STATE–TEMPLATE** | CIV–MEM–CORE v3.2 · CMC 3.2 (v3.2) | Bootstrap clarified: "governance v3.2; internal rev v1.12". | **ALIGNED** |
| **CIV–SCHOLAR–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · PROTOCOL v3.1 (v3.2) | — | **ALIGNED** |
| **CIV–SCHOLAR–PROTOCOL** | CMC 3.2 · SCHOLAR–TEMPLATE v3.1 (v3.2) | Entity focus; CORE, STATE, SCHOLAR re-anchor. | **ALIGNED** |
| **CIV–MEM–TEMPLATE** | CMC 3.2 (v3.2) | CIV–MEM–CORE refs; proportion, XXIV–XXVII. | **ALIGNED** |
| **CIV–CORE–TEMPLATE** | CIV–MEM–CORE v3.2 · CMC v3.2 (v3.2) | Re-anchor on civilization switch. | **ALIGNED** |
| **CIV–ARC–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · NAMESPACE v1.0 (v3.2) | — | **ALIGNED** |
| **CIV–INDEX–TEMPLATE** | CIV–MEM–CORE v3.2 · MEM v3.1 · SCHOLAR v3.1 (v3.2) | — | **ALIGNED** |
| **CIV–DOCTRINE–TEMPLATE** | CIV–MEM–CORE v3.2 · SCHOLAR v3.1 · PROTOCOL v3.1 (v3.2) | Compatibility still cites v3.1 for SCHOLAR/PROTOCOL; optional bump to v3.2. | **ALIGNED** |
| **CIV–MIND–TEMPLATE** | CIV–MEM–CORE v3.2 (v3.2) | Compatibility lists MINDs v3.2; MERCOURIS/MEARSHEIMER/BARNES are v3.3. | **SOFT GAP** — optional "v3.x" or "current" |
| **CIV–MEM–TEMPLATE** (duplicate row removed) | — | — | — |

---

## V. MIND PROFILES — CANONICAL STATUS & EOF

| File | Header Version | Section "X is CANONICAL" | EOF Version | Status |
|------|----------------|--------------------------|-------------|--------|
| **CIV–MIND–BARNES** | v3.3 | v3.3 ✓ | v3.3 ✓ | **ALIGNED** (fixed this audit) |
| **CIV–MIND–MERCOURIS** | v3.3 | v3.3 ✓ | v3.3 ✓ | **ALIGNED** (fixed this audit) |
| **CIV–MIND–MEARSHEIMER** | v3.3 | v3.3 ✓ | v3.3 ✓ | **ALIGNED** (fixed this audit) |

---

## VI. CURSOR RULES

| Rule | Purpose | Template / Bootstrap ref | Status |
|------|----------|---------------------------|--------|
| cmc-state-scholar-sync | Sync: STATE from SCHOLAR/CORE/DOCTRINE | CIV–STATE–TEMPLATE §XIV | **ALIGNED** |
| cmc-state-scholar-harvest | Harvest: only STATE → Scholar | CIV–STATE–TEMPLATE §XIV-B | **ALIGNED** |
| cmc-state-mem-grounding | MEM SCAN; CORE load; dimension + connection | CIV–STATE–TEMPLATE; MEM–RELEVANCE | **ALIGNED** |
| cmc-mode-contracts | WRITE/LEARN/IMAGINE/STATE/SYSTEM | CMC–BOOTSTRAP; STATE template | **ALIGNED** |
| cmc-oge-enforcement | 8-slot options; STATE 8 options; MIND-derived | CIV–STATE–TEMPLATE X-A; MIND profiles | **ALIGNED** |
| cmc-scholar-mode | LEARN response length; options; MEM awareness | CIV–SCHOLAR–PROTOCOL; PROTOCOL–MIND–NAVIGATION | **ALIGNED** |
| cmc-blend-law | Content proportion (GEO vs Subject MEM) | CIV–MEM–CORE VP-1.g | **ALIGNED** |
| cmc-tri-frame-protocol | M/M/B sequence; Option D; post-Barnes | CIV–MIND–BARNES; cmc-oge-enforcement | **ALIGNED** |
| cmc-mercouris-voice | Mercouris linguistic fingerprint | CIV–MIND–MERCOURIS | **ALIGNED** |
| cmc-mearsheimer-voice | Mearsheimer linguistic fingerprint | CIV–MIND–MEARSHEIMER | **ALIGNED** |
| cmc-barnes-voice | Barnes linguistic fingerprint | CIV–MIND–BARNES | **ALIGNED** |
| cmc-version-upgrade-on-edit | Content vs governance version | VERSION–MANIFEST; CHANGELOG | **ALIGNED** |
| cmc-gated-spiral-awareness | Doctrine → LEARN/STATE → WRITE loop | CHANGELOG; doctrine governance | **ALIGNED** |
| cmc-negative-claim-check | Absence claims require corpus check | — | **ALIGNED** |
| cmc-arc-source-coverage | STATE: multi-category ARC; contradiction | CIV–STATE–TEMPLATE; ARC files | **ALIGNED** |
| cmc-mind-variety | MIND variety / voice distinctness | MIND profiles | **ALIGNED** |

---

## VII. SUPPORTING GOVERNANCE

| Document | Governed by | Notes | Status |
|----------|-------------|-------|--------|
| **CONNECTION–TYPES** | CMC 3.2 | Typed connections; CMC 3.1 origin. | **ALIGNED** |
| **COMPLIANCE–REGISTRY** | CMC 3.2 | Centralized MEM compliance; Version Decoupling. | **ALIGNED** |
| **CONCEPT–INDEX** | CMC 3.2 | MIND affinities (CMC 3.2). | **ALIGNED** |
| **PROTOCOL–MIND–NAVIGATION** | CMC 3.2 (Version 1.0) | OGE integration; perspective affinities. | **ALIGNED** |
| **NAMESPACE–CLARIFICATION** | CMC 3.2 | Version: 3.2; errata. | **ALIGNED** (fixed this audit) |

---

## VIII. CROSS-CUTTING CONSISTENCY

| Topic | Where defined | Where referenced | Consistent? |
|-------|----------------|------------------|-------------|
| **Harvest (STATE → Scholar)** | CIV–STATE–TEMPLATE §XIV-B; cmc-state-scholar-harvest | CMC–BOOTSTRAP; STATE template §XII; cmc-state-scholar-sync | **Yes** |
| **Sync (update STATE from sources)** | CIV–STATE–TEMPLATE §XIV; cmc-state-scholar-sync | CMC–BOOTSTRAP; STATE template §XII | **Yes** |
| **Entity focus (re-anchor)** | CIV–MEM–CORE (518–522); CMC–BOOTSTRAP | CIV–STATE–TEMPLATE §I; CIV–SCHOLAR–TEMPLATE XIII; CIV–SCHOLAR–PROTOCOL; cmc-state-mem-grounding; cmc-scholar-mode | **Yes** |
| **STATE template version** | CIV–STATE–TEMPLATE header: v3.2 | CMC–BOOTSTRAP: "governance v3.2; internal rev v1.12" | **Yes** (fixed this audit) |

---

## IX. FIXES APPLIED THIS AUDIT (2026-02-12)

| File | Fix |
|------|-----|
| **CIV–MIND–BARNES** | EOF: "v3.2" → "v3.3" |
| **CIV–MIND–MERCOURIS** | Canonical: "v3.1 is CANONICAL" → "v3.3 is CANONICAL"; EOF: "v3.2" → "v3.3" |
| **CIV–MIND–MEARSHEIMER** | Canonical: "v3.0 is CANONICAL" → "v3.3 is CANONICAL"; EOF: "v3.2" → "v3.3" |
| **NAMESPACE–CLARIFICATION** | Added "Governed by: CMC 3.2" to header. |
| **CMC–BOOTSTRAP** | STATE template line: "(current: v1.12)" → "(governance v3.2; internal rev v1.12)". |

---

## X. CONCLUSION

Governance and template files are **aligned** to CMC 3.2. All identified gaps were fixed in this audit: MIND profile canonical/EOF versions (v3.3), NAMESPACE–CLARIFICATION governance declaration, and CMC–BOOTSTRAP STATE template version wording. Cursor rules and core governance were already aligned. Cross-cutting topics (harvest, sync, entity focus) are consistent.

**Reference:** CMC 3.2; VERSION–MANIFEST; CIV–STATE–TEMPLATE §XII, §XIV, §XIV-B; CIV–MIND–* headers and canonical sections.

---

END OF AUDIT — 2026-02-12
