# AUDIT — Francia GEO MEM Files vs CIV–MEM–TEMPLATE

**Date:** 2026-01-29  
**Scope:** All 10 MEM–FRANCIA–GEO–* files  
**Reference:** CIV–MEM–TEMPLATE v2.9 (GEO–MEM requirements: Section XXII; Layer 2 GEO: Section XXIV.C)  
**Mode:** LEARN (audit only; no file modification)

---

## I. EXECUTIVE SUMMARY

| Metric | Result |
|--------|--------|
| **Francia GEO MEMs** | 10 |
| **Template-compliant (GEO-specific + Layer 1)** | 0 |
| **With GEO cognitive declaration** | 0 |
| **With 4 ARC-T sections** | 0 |
| **With MEM CONNECTIONS (template format)** | 0 (1 has partial connections) |
| **With MEM BIBLIOGRAPHY** | 0 |
| **With MEM INGEST BOOTSTRAP** | 0 |

**Verdict:** All 10 Francia GEO MEMs fail CIV–MEM–TEMPLATE v2.9 GEO–MEM requirements (Section XXII) and universal Layer 1 requirements. None include the GEO cognitive declaration, the four ARC-T quote sections (ANCIENT, MEDIEVAL, EARLY-MOD, MODERN), or the full MEM CONNECTIONS / BIBLIOGRAPHY / INGEST BOOTSTRAP structure. One file (MEM–FRANCIA–GEO–ATLANTIC–OCEAN v1.1) has a "MEM CONNECTIONS" block and a "PRIMARY SOURCES & REFERENCES" block but neither meets current template format or count.

---

## II. GEO–MEM TEMPLATE REQUIREMENTS (CHECKED)

Per CIV–MEM–TEMPLATE v2.9 Section XXII (GEO–MEM FILE TYPE REQUIREMENTS):

| Requirement | Template ref | Status across all 10 |
|-------------|--------------|----------------------|
| **GEO–MEM COGNITIVE DECLARATION** (verbatim: "This GEO–MEM expresses MEARSHEIMER STRATEGIC COGNITION...") | XXII.C | ❌ **ABSENT** in all 10 |
| **Strategic analysis sections (≥6)** | XXII.B.2 | ⚠️ Most have 6–8 sections but not labeled as strategic vs quote; blend ratio not explicit |
| **ARC QUOTE SECTIONS (4 required)** | XXII.B.3 | ❌ **ABSENT** in all 10 |
| • ARC-T-ANCIENT | — | ❌ None |
| • ARC-T-MEDIEVAL | — | ❌ None |
| • ARC-T-EARLY-MOD | — | ❌ None |
| • ARC-T-MODERN | — | ❌ None |
| **GEO–MEM CONNECTIONS** (related GEO–MEMs, subject MEM, cross-civ) | XXII.B.4 | ❌ Not in template format; only Atlantic has a connections block |
| **Corresponding subject MEM cross-reference** (when exists) | XXII.D | ❌ Not present |

**Universal Layer 1 (all MEMs):**

| Requirement | Status across all 10 |
|-------------|----------------------|
| MEM CONNECTIONS (≥10 same-civ, ≥2 GEO, justification each) | ❌ **ABSENT** in 9; 1 (Atlantic) has connections but &lt;10 same-civ, no GEO count, different format |
| MEM BIBLIOGRAPHY | ❌ **ABSENT** in all 10 (Atlantic has "PRIMARY SOURCES & REFERENCES" only) |
| MEM INGEST BOOTSTRAP (8 options) | ❌ **ABSENT** in all 10 |
| 20% verbatim quote minimum | ⚠️ **LIKELY FAIL** — only some files have short quote blocks; none have structured 4-era ARC quotes |
| Layer 2 GEO structured data (Parameters, Strategic Significance, Control Sequence) | ❌ **ABSENT** in all 10 (optional for existing per v2.9; noted for upgrade path) |

---

## III. FILE-BY-FILE SUMMARY

| File | Version | GEO decl. | 4 ARC-T | Strategic ≥6 | Verbatim | MEM conn. | Biblio. | Bootstrap | Typos |
|------|---------|-----------|---------|--------------|----------|-----------|---------|-----------|-------|
| MEM–FRANCIA–GEO–ALPS | v1.0 | ❌ | ❌ | ✅ 8 | ❌ none | ❌ | ❌ | ❌ | INHERITANAD |
| MEM–FRANCIA–GEO–ATLANTIC–OCEAN | v1.1 | ❌ | ❌ | ✅ 8 | ✅ 2 blocks | ⚠️ partial | ⚠️ refs only | ❌ | — |
| MEM–FRANCIA–GEO–ENGLISH–CHANNEL | v1.0 | ❌ | ❌ | ✅ 8 | ❌ | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–IBERIA | v1.0 | ❌ | ❌ | ✅ 6 | ❌ | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–LOIRE–RIVER | v1.0 | ❌ | ❌ | ✅ 8 | ✅ 1 block | ❌ | ❌ | ❌ | COHERENAD |
| MEM–FRANCIA–GEO–MEDITERRANEAN–SEA | v1.1 | ❌ | ❌ | — | — | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–MEUSE–RIVER | v1.0 | ❌ | ❌ | — | — | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–PACIFIC–OCEAN | v1.1 | ❌ | ❌ | — | — | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–RHONE–RIVER | v1.0 | ❌ | ❌ | ✅ 8 | ✅ 1 block | ❌ | ❌ | ❌ | — |
| MEM–FRANCIA–GEO–SEINE–RIVER | v1.0 | ❌ | ❌ | ✅ 8 | ✅ 3 blocks | ❌ | ❌ | ❌ | DOMINANAD |

**Typos (correct in audit):**
- **MEM–FRANCIA–GEO–SEINE–RIVER** §VI: "DOMINANAD" → DOMINANCE  
- **MEM–FRANCIA–GEO–ALPS** §II: "INHERITANAD" → INHERITANCE  
- **MEM–FRANCIA–GEO–LOIRE–RIVER** §III: "COHERENAD" → COHERENCE  

**Note:** MEM–FRANCIA–GEO–PACIFIC–OCEAN header shows "PACFIC" (typo) in one grep result; confirm in file.

---

## IV. GEO–MEM COGNITIVE DECLARATION (MISSING)

Template XXII.C requires every GEO–MEM to include verbatim:

```
This GEO–MEM expresses MEARSHEIMER STRATEGIC COGNITION.

GEO–MEMs contain:
• Strategic analysis (~2/3): terrain logic, power distribution
• ARC verbatim quotes (~1/3): demonstrating permanent patterns

GEO–MEMs do NOT synthesize civilizational claims or polyphonic tension.
For full civilizational narrative, see subject MEM.
```

**Result:** No Francia GEO MEM contains this block.

---

## V. ARC-T SECTIONS (MISSING)

Template XXII.B.3 requires four labeled ARC quote sections:

- **ARC-T-ANCIENT** — Ancient sources (pattern permanence)
- **ARC-T-MEDIEVAL** — Medieval sources (continuity)
- **ARC-T-EARLY-MOD** — Early modern historiography
- **ARC-T-MODERN** — Modern scholarship

**Result:** No Francia GEO MEM has any ARC-T-* section. Some files (Seine, Loire, Rhône, Atlantic) embed short verbatim quotes in narrative but without ARC-T labeling or four-era coverage. GEO–MEMs must satisfy the Proportional Blend Law (2/3 Mearsheimer strategic analysis, 1/3 Mercouris ARC evidence); current structure does not.

---

## VI. MEM CONNECTIONS

**Template (Section X):** ≥10 same-civilization MEM connections, ≥2 GEO MEMs, each with justification ("breaks if removed" style).

**MEM–FRANCIA–GEO–ATLANTIC–OCEAN v1.1** is the only file with a "MEM CONNECTIONS" section. It lists 8 connections with narrative justification but:
- Does not meet ≥10 same-civ count
- Does not explicitly list ≥2 GEO MEMs as such
- Format differs from template (no binary rule / justification format)
- References MEM–FRANCIA–POST–HEGEMONIC–ANXIETY (verify file exists)

**Other 9 GEO MEMs:** No MEM CONNECTIONS section.

---

## VII. BIBLIOGRAPHY AND INGEST BOOTSTRAP

- **MEM BIBLIOGRAPHY (template XVIII):** Full bibliographic entries for all sources cited or consulted. **Absent** in all 10; Atlantic has "PRIMARY SOURCES & REFERENCES" only (short titles, no full bibliography).
- **MEM INGEST BOOTSTRAP (template XIII):** On ingest without CORE: confirm ingest, declare MEM active, present exactly eight exploration options. **Absent** in all 10.

---

## VIII. LAYER 2 GEO STRUCTURED DATA (OPTIONAL FOR EXISTING)

Template XXIV.C defines optional Layer 2 for existing GEO MEMs:

- GEOGRAPHIC PARAMETERS (REGION_BOUNDS, TERRAIN_TYPE, CLIMATE_ZONE, KEY_FEATURES)
- STRATEGIC SIGNIFICANCE (CHOKEPOINT, PROJECTION_CORRIDOR, DEFENSE_BALANCE, RESOURCE_SIGNIFICANCE)
- CONTROL SEQUENCE (Era, Controller, Control Mode, Entry, Exit)

**Result:** No Francia GEO MEM contains a Layer 2 GEO structured data section. Optional for existing MEMs; recommended for v2.0 upgrade.

---

## IX. RECOMMENDED REMEDIATION (UPGRADE PATH)

For each Francia GEO MEM to reach template compliance:

1. **Add GEO cognitive declaration** (verbatim per XXII.C) immediately after metadata / before Section I.
2. **Restructure into blend-compliant layout:**
   - **Strategic analysis (≥6 sections):** Terrain geometry, power distribution, strategic constraints, defensibility, subject-specific (e.g. river as corridor, chokepoint, control sequence). Mearsheimer voice.
   - **ARC quote sections (4):** Add four labeled sections ARC-T-ANCIENT, ARC-T-MEDIEVAL, ARC-T-EARLY-MOD, ARC-T-MODERN with verbatim quotes from CIV–ARC–FRANCIA v1.7 (≥25 words per era where feasible). Mercouris evidence.
3. **Add MEM CONNECTIONS** in template format: ≥10 same-civilization MEMs, ≥2 GEO MEMs, each with short justification (e.g. "Breaks if removed: …").
4. **Add MEM BIBLIOGRAPHY** with full citations for all sources used.
5. **Add MEM INGEST BOOTSTRAP:** confirm ingest, declare ACTIVE, present exactly eight exploration options (including Mearsheimer/Barnes and traversal where applicable).
6. **Fix typos:** DOMINANAD → DOMINANCE (Seine); INHERITANAD → INHERITANCE (Alps); COHERENAD → COHERENCE (Loire). Confirm PACFIC → PACIFIC in Pacific Ocean file.
7. **Optional:** Add Layer 2 GEO structured data (Parameters, Strategic Significance, Control Sequence) for v2.0+.
8. **Version:** Set to v2.0; Supersedes v1.0/v1.1; Governed by CIV–MEM–CORE v2.7, CIV–MEM–TEMPLATE v2.9, CIV–ARC–FRANCIA v1.7.

**Pilot candidate:** MEM–FRANCIA–GEO–SEINE–RIVER (already has three quote blocks; add GEO declaration, four ARC-T sections, MEM CONNECTIONS, BIBLIOGRAPHY, BOOTSTRAP, typo fix) or MEM–FRANCIA–GEO–ATLANTIC–OCEAN (already has connections and references; bring to full format and add GEO declaration, 4 ARC-T, BOOTSTRAP).

---

## X. LIST OF FRANCIA GEO MEM FILES (10)

1. MEM–FRANCIA–GEO–ALPS  
2. MEM–FRANCIA–GEO–ATLANTIC–OCEAN  
3. MEM–FRANCIA–GEO–ENGLISH–CHANNEL  
4. MEM–FRANCIA–GEO–IBERIA  
5. MEM–FRANCIA–GEO–LOIRE–RIVER  
6. MEM–FRANCIA–GEO–MEDITERRANEAN–SEA  
7. MEM–FRANCIA–GEO–MEUSE–RIVER  
8. MEM–FRANCIA–GEO–PACIFIC–OCEAN  
9. MEM–FRANCIA–GEO–RHONE–RIVER  
10. MEM–FRANCIA–GEO–SEINE–RIVER  

---

END OF AUDIT — 2026-01-29  
Bound by CIV–MEM–CORE v2.7 · CIV–MEM–TEMPLATE v2.9 · LEARN MODE (no file edits)
