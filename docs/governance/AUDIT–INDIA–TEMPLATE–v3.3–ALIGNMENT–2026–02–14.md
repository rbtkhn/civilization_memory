# AUDIT — INDIA Files vs CMC 3.3 Templates

**Date:** 2026-02-14  
**Scope:** All India civilization files in content/civilizations/INDIA/  
**Purpose:** Alignment audit against CMC 3.3 templates; gap identification  
**Authority:** CMC–BOOTSTRAP, CIV–MEM–TEMPLATE v3.3, CIV–CORE–TEMPLATE v3.2, CIV–SCHOLAR–TEMPLATE v3.2, CIV–ARC–TEMPLATE v3.2, CIV–INDEX–TEMPLATE v3.2  
**Reference:** MEM–UPGRADE–VERIFICATION–CHECKLIST, VERSION–MANIFEST v3.3

---

## I. EXECUTIVE SUMMARY

| Category | Files Audited | Aligned | Gaps | Critical |
|----------|---------------|---------|------|----------|
| Governance files | 4 (CORE, SCHOLAR, INDEX, ARC) | 4 | 6 | 1 |
| MEM files | 21 | 0 | 21 | 12 |
| **Total** | **25** | **4** | **27** | **13** |

**Summary:** India governance files (CORE, SCHOLAR, INDEX, ARC) are structurally aligned with templates but carry stale version references. MEM files show systematic gaps: no GEO–MEMs meet the 4-ARC-section requirement; no MEMs have Layer 2 structured data; 6 MEMs lack MEM CONNECTIONS; 3 GEO–MEMs lack BIBLIOGRAPHY. India lacks CIV–STATE–INDIA and MEM–RELEVANCE–INDIA (per CMC–BOOTSTRAP continuity note: bring India to China standard).

---

## II. GOVERNANCE FILES

### A. CIV–CORE–INDIA — v2.0

| Requirement | Template (v3.2) | India | Status |
|-------------|-----------------|-------|--------|
| Structure | Sections I–XX, Mandatory Verdict Block | Present | ✓ |
| Phase | PHASE I | PHASE I | ✓ |
| Compatibility | CMC 3.3 | CMC v2.2+ | **GAP** — update to CMC 3.3 |
| Governed by | CIV–MEM–CORE v3.3 | CIV–MEM–CORE v3.0 | **GAP** — update to v3.3 |
| ARC Reference | CIV–ARC–[CIV] current | CIV–ARC–INDIA v2.0 | **GAP** — ARC is v3.0 |
| Template Version Used | v3.2 | CIV–CORE–TEMPLATE v3.0 | **GAP** — update to v3.2 |

**Verdict:** ALIGNED structurally; 4 header/version updates required.

---

### B. CIV–SCHOLAR–INDIA — v2.0

| Requirement | Template (v3.2) | India | Status |
|-------------|-----------------|-------|--------|
| Structure | Sections I–XXI | Present | ✓ |
| Phase | PHASE I | PHASE I | ✓ |
| OGE | 8 options (A–H), 10–20 words | 6–10 words stated | **GAP** — cmc-oge-enforcement requires 10–20 |
| ARC Reference | Current | CIV–ARC–INDIA v2.0 | **GAP** — ARC is v3.0 |
| Template Version Used | v3.2 | v2.10 / v3.0 | **GAP** — update to v3.2 |
| Index reference (§ XV) | Current | CIV–INDEX v2.0, 21 MEMs | ✓ (per prior audit remediation) |

**Verdict:** ALIGNED structurally; 3 header/OGE updates required.

---

### C. CIV–INDEX–INDIA — v3.0

| Requirement | Template (v3.2) | India | Status |
|-------------|-----------------|-------|--------|
| Structure | I–IX | Present | ✓ |
| Section V heading | GEOGRAPHY & CIVILIZATIONAL SPACE | CIVILIZATIONAL SPAAD | **GAP** — typo: SPAAD → SPACE |
| Index completeness | All MEMs listed | 21 MEMs, NONE unindexed | ✓ |

**Verdict:** ALIGNED; 1 typo fix required.

---

### D. CIV–ARC–INDIA — v3.0

| Requirement | Template (v3.2) | India | Status |
|-------------|-----------------|-------|--------|
| ARC-T categories | ANCIENT, MEDIEVAL, EARLY-MOD, MODERN | Present | ✓ |
| ARC-T-INSTITUTIONAL | Required for STATE mode | Present (§ IX-B) | ✓ |
| Cross-ARC (TSP) | V-A | Present | ✓ |
| Governed by | CIV–ARC–TEMPLATE v3.2 | v3.0 | Minor — templates now CMC 3.3 |

**Verdict:** ALIGNED. ARC version (v3.0) exceeds CORE/SCHOLAR references (v2.0); governance files should reference CIV–ARC–INDIA v3.0.

---

## III. MEM FILES — SYSTEMATIC GAPS

### A. GEO–MEM Requirements (CIV–MEM–TEMPLATE v3.3)

GEO–MEMs MUST have:
- 4 ARC sections: ARC-T-ANCIENT, ARC-T-MEDIEVAL, ARC-T-EARLY-MOD, ARC-T-MODERN
- GEO STRUCTURED DATA (Layer 2): Parameters, Strategic Significance, Control Sequence
- Cognitive layer declaration
- 20% verbatim quotes
- MEM CONNECTIONS (≥3 same-civ or per template)
- MEM BIBLIOGRAPHY

### B. GEO–MEM Audit Results

| MEM | ARC sections | Layer 2 | 20% quotes | MEM CONNECTIONS | BIBLIOGRAPHY | Verdict |
|-----|--------------|---------|------------|-----------------|--------------|---------|
| MEM–INDIA–GEO–GANGES–RIVER–RIVER | 1 (MODERN only) | No | ~17% est. | No | Yes | **NON-COMPLIANT** |
| MEM–INDIA–GEO–INDUS–RIVER–RIVER | 2 (ANCIENT, MODERN) | No | Unknown | No | Yes | **NON-COMPLIANT** |
| MEM–INDIA–KASHMIR | 0 | No | No verbatim | No | **No** | **CRITICAL** |
| MEM–INDIA–TIBET | 0 | No | No verbatim | No | **No** | **CRITICAL** |
| MEM–INDIA–SRI–LANKA | 0 | No | No verbatim | No | **No** | **CRITICAL** |

**All 5 GEO–MEMs fail the 4-ARC-section requirement.** Three (KASHMIR, TIBET, SRI–LANKA) lack BIBLIOGRAPHY—mandatory per CIV–MEM–TEMPLATE v2.6.

---

### C. WAR MEM Requirements

WAR MEMs (new) MUST have:
- WAR STRUCTURED DATA: Belligerents, Classification, Outcome, Force Ratios, Casualties
- MEM CONNECTIONS (≥3 same-civ)
- 20% verbatim quotes
- MEM BIBLIOGRAPHY

### D. WAR MEM Audit Results

| MEM | Layer 2 | MEM CONNECTIONS | BIBLIOGRAPHY | Verdict |
|-----|---------|-----------------|--------------|---------|
| MEM–INDIA–WAR–ALEXANDER | No | Yes (3) | Yes | **GAP** — no Layer 2 |
| MEM–INDIA–BRITISH–EMPIRE–CLIVE | No | Yes | Yes | **GAP** — no Layer 2 |
| MEM–INDIA–WAR–1857 | No | Yes | Yes | **GAP** — no Layer 2 |
| MEM–INDIA–WAR–TIMUR | No | Yes | Yes | **GAP** — no Layer 2 |
| MEM–INDIA–WAR–GHAZNAVID | No | Yes | Yes | **GAP** — no Layer 2 |

**All 5 WAR MEMs lack WAR STRUCTURED DATA.** Per MEM–TEMPLATE: "New MEMs (created after v2.9): Layer 2 MANDATORY; Existing MEMs: Layer 2 OPTIONAL upgrade path." If these predate v2.9, Layer 2 is optional; otherwise mandatory.

---

### E. Subject MEM Audit Results

| MEM | MEM CONNECTIONS | BIBLIOGRAPHY | Typos | Verdict |
|-----|-----------------|--------------|-------|---------|
| MEM–INDIA–GANDHI | No | Yes | "CONSEQUENAD" → CONSEQUENCES | **GAP** |
| MEM–INDIA–REPUBLIC–NEHRU | No | Yes | — | **GAP** |
| MEM–INDIA–PARTITION | No | Yes | "VIOLENAD" → VIOLENCE | **GAP** |
| MEM–INDIA–DYNASTY–GUPTA | No | Yes | — | **GAP** |
| MEM–INDIA–DYNASTY–MAURYA | Yes | Yes | — | ✓ |
| MEM–INDIA–DYNASTY–MUGHAL | Yes | Yes | — | ✓ |
| MEM–INDIA–DELHI–SULTANATE | Yes | Yes | — | ✓ |
| MEM–INDIA–BRITISH–EMPIRE | Yes | Yes | — | ✓ |
| MEM–INDIA–MONGOL–EMPIRE | Yes | Yes | — | ✓ |
| MEM–INDIA–MONGOL–CHAGATAI | Yes | Yes | — | ✓ |
| MEM–INDIA–ISLAM | Yes | Yes | — | ✓ |

**MEMs lacking MEM CONNECTIONS:** GANDHI, NEHRU, PARTITION, DYNASTY–GUPTA, GEO–GANGES–RIVER, GEO–INDUS–RIVER. Template requires same-civ ≥3 (WAR/Subject); GEO–MEMs per template.

---

## IV. MISSING FILES (vs China Standard)

Per CMC–BOOTSTRAP continuity note (2026-02-13): "Bring CIV–INDIA up to the standard of CHINA."

| File | China | India | Status |
|------|-------|-------|--------|
| CIV–STATE–[CIV] | Present | **Absent** | **GAP** |
| MEM–RELEVANCE–[CIV] | Present | **Absent** | **GAP** |
| CIV–DOCTRINE–[CIV] | Present | **Absent** | Optional (Phase I) |

---

## V. REMEDIATION PRIORITY

### P0 — Critical (blocking compliance)

1. **MEM–INDIA–KASHMIR, TIBET, SRI–LANKA, GEO–HIMALAYAS:** Add MEM BIBLIOGRAPHY (mandatory).
2. **MEM–INDIA–GEO–*:** Add 4 ARC sections (ANCIENT, MEDIEVAL, EARLY-MOD, MODERN) per GEO–MEM template.
3. **MEM CONNECTIONS:** Add to GANDHI, NEHRU, PARTITION, DYNASTY–GUPTA, GEO–GANGES–RIVER, GEO–INDUS–RIVER (≥3 same-civ each).

### P1 — High (alignment)

4. **CIV–CORE–INDIA:** Update Compatibility → CMC 3.3; Governed by → v3.3; ARC Reference → v3.0; Template Version → v3.2.
5. **CIV–SCHOLAR–INDIA:** Update ARC Reference → v3.0; OGE words → 10–20; Template Version → v3.2.
6. **CIV–INDEX–INDIA:** Fix typo § V "SPAAD" → "SPACE".
7. **MEM typos:** GANDHI "CONSEQUENAD" → CONSEQUENCES; PARTITION "VIOLENAD" → VIOLENCE.

### P2 — Standard (China parity)

8. **MEM–RELEVANCE–INDIA:** Create dimension-to-MEM mapping for STATE mode.
9. **CIV–STATE–INDIA:** Create per CIV–STATE–TEMPLATE when STATE mode for India is activated.

### P3 — Enhancement (optional)

10. **Layer 2 structured data:** Add WAR STRUCTURED DATA to WAR MEMs; GEO STRUCTURED DATA to GEO–MEMs (upgrade path).
11. **20% quote verification:** Run word-count check on sample MEMs; add verbatim where below threshold.

---

## VI. SELF-CHECK (MEM–UPGRADE–VERIFICATION–CHECKLIST)

| Check | GEO–MEM | WAR MEM | Subject MEM |
|-------|---------|---------|-------------|
| 20% verbatim | Partial (1–2 of 5) | Partial | Partial |
| Content proportion | Partial | N/A | Partial |
| Layer 2 | No | No | N/A |
| MEM CONNECTIONS | 0–2 of 5 | 5 of 5 | 10 of 12 |
| BIBLIOGRAPHY | 2 of 5 | 5 of 5 | 12 of 12 |
| Versioning | OK | OK | OK |

---

## VII. REFERENCE

- CMC–BOOTSTRAP (Session Priority: India → China standard)
- CIV–MEM–TEMPLATE v3.3 (Layer 2, 20% EQS, GEO 4-ARC, Blend Law)
- MEM–UPGRADE–VERIFICATION–CHECKLIST
- AUDIT–SCHOLAR–INDIA–TEMPLATE–ALIGNMENT–2026–02–01 (prior audit; § XV gap remediated)

---

**END OF AUDIT**
