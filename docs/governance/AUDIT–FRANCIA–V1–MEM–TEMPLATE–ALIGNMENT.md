# AUDIT — Francia v1.0 MEM Files vs CIV–MEM–TEMPLATE

**Date:** 2026-01-29  
**Scope:** All 68 Francia MEM files at version v1.0  
**Reference:** CIV–MEM–TEMPLATE v2.9 (CIV–MEM–CORE v2.7)  
**Mode:** LEARN (audit only; no file modification)

---

## I. EXECUTIVE SUMMARY

| Metric | Result |
|--------|--------|
| **Francia MEMs at v1.0** | 68 |
| **Template-compliant (v2.9 Layer 1)** | 0 |
| **Systematic gaps** | All 68 lack mandatory sections introduced in template v2.5+ |

**Verdict:** All Francia v1.0 MEMs are **pre-template** with respect to current CIV–MEM–TEMPLATE v2.9. They do not satisfy mandatory Layer 1 requirements for MEM CONNECTIONS, MEM BIBLIOGRAPHY, MEM INGEST BOOTSTRAP, 20% verbatim quote standard, or (for GEO–MEMs) four ARC-T sections and GEO cognitive declaration. Upgrade to v2.0+ with template compliance is required for canonical lock under current governance.

---

## II. TEMPLATE REQUIREMENTS CHECKED (LAYER 1)

Per CIV–MEM–TEMPLATE v2.9, the following are **mandatory** for all MEM files (Layer 1 — Universal Prose):

| Requirement | Template Section | v1.0 Francia Status |
|-------------|------------------|----------------------|
| File identity & metadata (order, wordcount) | II | ✅ Present (partial; some lack Supersedes, Upgrade Type) |
| Memory Purpose & Scope | III | ✅ Present |
| "Contradictions are preserved without synthesis." | III | ✅ Present in sampled v1.0 |
| Minimum 8 numbered analytical sections | IV | ⚠️ Variable (many have 6–9; counting rules may not be met) |
| ERC classification for quotations | V | ❌ Not applied (quotes absent or unclassified) |
| EQS compliance for quotations | VI | ❌ Not applicable / not declared |
| **20% verbatim quote minimum** | VIII | ❌ **FAIL** — v1.0 MEMs have few or no verbatim blocks; header "20% COMPLIANT" unsupported |
| Subject type declaration (WELL-DOCUMENTED / SPARSE / etc.) | VIII.C | ❌ Absent |
| **MEM CONNECTIONS section** (≥10 same-civ, ≥2 GEO, justification) | X | ❌ **ABSENT** in all 68 v1.0 |
| Continuity Insights (raw) | XI | ✅ Present (as "CONTINUITY INSIGHTS (RAW)") |
| **MEM INGEST BOOTSTRAP** (8 options on ingest) | XIII | ❌ **ABSENT** in all 68 v1.0 |
| **ARC version pinning** (ARC–[CIV] version) | XIV | ❌ Absent |
| **MEM BIBLIOGRAPHY** (all sources listed) | XVIII | ❌ **ABSENT** in all 68 v1.0 |

**GEO–MEM specific (v1.0 Francia GEO–MEMs):**

| Requirement | Template Section | v1.0 GEO–MEM Status |
|-------------|------------------|----------------------|
| GEO cognitive declaration (Mearsheimer strategic cognition) | XXII.C | ❌ Absent |
| 4 ARC-T sections (ANCIENT, MEDIEVAL, EARLY-MOD, MODERN) | XXII.B | ❌ Absent (e.g. MEM–FRANCIA–GEO–SEINE–RIVER has 3 quote blocks, no ARC-T structure) |
| Strategic analysis ≥6 sections + ARC quote sections | XXII.B | ⚠️ Partial (structure does not separate 2/3 Mearsheimer, 1/3 Mercouris) |

**Layer 2 (type-specific structured data):** Not required for existing MEMs per template v2.9; optional upgrade. All v1.0 Francia MEMs lack Layer 2.

---

## III. SAMPLE FILE ASSESSMENT

### MEM–FRANCIA–PARIS–NOTRE–DAME v1.0
- **Sections:** I–IX (Memory Purpose, 7 analytical, Continuity Insights). Count = 8 substantive.
- **Verbatim quotes:** None in sampled body. **20% FAIL.**
- **MEM CONNECTIONS:** Absent. **FAIL.**
- **BIBLIOGRAPHY:** Absent. **FAIL.**
- **INGEST BOOTSTRAP:** Absent. **FAIL.**
- **ARC pinning:** Absent. **FAIL.**

### MEM–FRANCIA–WAR–CRUSADES v1.0
- **Sections:** I–VI + Continuity Insights. Count = 6 substantive (below 8). **FAIL.**
- **Verbatim quotes:** None. **20% FAIL.**
- **MEM CONNECTIONS / BIBLIOGRAPHY / INGEST BOOTSTRAP:** Absent. **FAIL.**

### MEM–FRANCIA–WAR–AUSTRIAN–SUCCESSION v1.0
- **Sections:** I–IX. Count = 8 substantive. **PASS (section count).**
- **Verbatim quotes:** None. **20% FAIL.**
- **MEM CONNECTIONS / BIBLIOGRAPHY / INGEST BOOTSTRAP:** Absent. **FAIL.**

### MEM–FRANCIA–GEO–SEINE–RIVER v1.0
- **Sections:** I–VIII. Three short verbatim quotes (Julian, Commynes, Necker). Likely &lt;20% verbatim. **20% likely FAIL.**
- **GEO:** No ARC-T-ANCIENT/MEDIEVAL/EARLY-MOD/MODERN structure; no GEO cognitive declaration. **GEO FAIL.**
- **Typo:** Section VI "DOMINANAD" → should be "DOMINANCE."
- **MEM CONNECTIONS / BIBLIOGRAPHY / INGEST BOOTSTRAP:** Absent. **FAIL.**

---

## IV. BINARY CHECK: v1.0 vs CONNECTIONS/BIBLIOGRAPHY/BOOTSTRAP

A grep for "MEM CONNECTIONS", "BIBLIOGRAPHY", "INGEST BOOTSTRAP" across `content/civilizations/FRANCIA/` shows:

- **32 Francia MEM files** contain at least one of these sections (all are v1.1+ or v2.0).
- **Zero v1.0 Francia MEM files** contain any of these sections.

Therefore **all 68 Francia v1.0 MEMs** lack:
- MEM CONNECTIONS  
- MEM BIBLIOGRAPHY  
- MEM INGEST BOOTSTRAP  

---

## V. LIST OF FRANCIA v1.0 MEM FILES (68 TOTAL)

**WAR (24):**  
MEM–FRANCIA–WAR–AMERICAN–INDEPENDENCE, MEM–FRANCIA–WAR–AUSTERLITZ, MEM–FRANCIA–WAR–AUSTRIAN–SUCCESSION, MEM–FRANCIA–WAR–BOXER–REBELLION, MEM–FRANCIA–WAR–CAESAR, MEM–FRANCIA–WAR–CRIMEAN, MEM–FRANCIA–WAR–CRUSADES, MEM–FRANCIA–WAR–FIFTH–COALITION, MEM–FRANCIA–WAR–FIRST–COALITION, MEM–FRANCIA–WAR–FOURTH–COALITION, MEM–FRANCIA–WAR–FRANCO–DUTCH, MEM–FRANCIA–WAR–FRANCO–MEXICAN, MEM–FRANCIA–WAR–FRANCO–MOROCCAN, MEM–FRANCIA–WAR–FRANCO–SPANISH, MEM–FRANCIA–WAR–FRANCO–SWEDISH, MEM–FRANCIA–WAR–HAITIAN–REVOLUTION, MEM–FRANCIA–WAR–HASTINGS, MEM–FRANCIA–WAR–ITALIAN–INDEPENDENCE, MEM–FRANCIA–WAR–PORTUGUESE–SUCCESSION, MEM–FRANCIA–WAR–SECOND–COALITION, MEM–FRANCIA–WAR–SIXTH–COALITION, MEM–FRANCIA–WAR–SPANISH–SUCCESSION, MEM–FRANCIA–WAR–TAIPING–REBELLION, MEM–FRANCIA–WAR–VIKINGS  

**Subject / figure / institution / GEO (44):**  
MEM–FRANCIA–BURGUNDY, MEM–FRANCIA–CANADA, MEM–FRANCIA–DECLARATION–RIGHTS–MAN, MEM–FRANCIA–DENMARK, MEM–FRANCIA–DESCARTES, MEM–FRANCIA–DYNASTY–BOURBON, MEM–FRANCIA–DYNASTY–CAPET, MEM–FRANCIA–DYNASTY–CAROLINGIAN, MEM–FRANCIA–DYNASTY–MEROVINGIAN, MEM–FRANCIA–DYNASTY–VALOIS, MEM–FRANCIA–EGYPT, MEM–FRANCIA–FRENCH–REVOLUTION, MEM–FRANCIA–GEO–ALPS, MEM–FRANCIA–GEO–ENGLISH–CHANNEL, MEM–FRANCIA–GEO–IBERIA, MEM–FRANCIA–GEO–LOIRE–RIVER, MEM–FRANCIA–GEO–MEUSE–RIVER, MEM–FRANCIA–GEO–RHONE–RIVER, MEM–FRANCIA–GEO–SEINE–RIVER, MEM–FRANCIA–HAITI, MEM–FRANCIA–HUGO, MEM–FRANCIA–ITALY, MEM–FRANCIA–FRENCH–REVOLUTION–JACOBIN, MEM–FRANCIA–KNIGHTS–TEMPLAR, MEM–FRANCIA–LAFAYETTE, MEM–FRANCIA–LOUIS–XV, MEM–FRANCIA–LOUIS–XVI, MEM–FRANCIA–PARIS–LOUVRE, MEM–FRANCIA–MONTAIGNE, MEM–FRANCIA–MONTESQUIEU, MEM–FRANCIA–NATIVE–AMERICANS, MEM–FRANCIA–NORWAY, MEM–FRANCIA–PARIS–NOTRE–DAME, MEM–FRANCIA–PAPACY, MEM–FRANCIA–FRENCH–REVOLUTION–REIGN–TERROR, MEM–FRANCIA–REVOLUTION–1848, MEM–FRANCIA–FRENCH–REVOLUTION–ROBESPIERRE, MEM–FRANCIA–ROUSSEAU, MEM–FRANCIA–SPAIN, MEM–FRANCIA–SWEDEN, MEM–FRANCIA–SWITZERLAND, MEM–FRANCIA–LIT–VOLTAIRE  

---

## VI. RECOMMENDED REMEDIATION (UPGRADE PATH)

Per CIV–MEM–CORE and CIV–MEM–TEMPLATE:

1. **Upgrade version** to v2.0 (or v1.1 → v2.0 in steps) and **add**:
   - **MEM CONNECTIONS** — ≥10 same-civilization MEMs, ≥2 GEO; each with brief justification ("Breaks if removed").
   - **MEM BIBLIOGRAPHY** — all sources cited or consulted (verbatim and secondary).
   - **MEM INGEST BOOTSTRAP** — exactly 8 exploration options when ingested without CORE.
   - **20% verbatim quote standard** — integrate verbatim quotes with ERC classification and EQS; add subject type declaration.
   - **ARC version pinning** — e.g. "ARC–FRANCIA v1.7".

2. **GEO–MEM v1.0 only:** Add GEO cognitive declaration and four ARC-T sections (ARC-T-ANCIENT, ARC-T-MEDIEVAL, ARC-T-EARLY-MOD, ARC-T-MODERN) with verbatim quotes meeting GEO blend (2/3 Mearsheimer analysis, 1/3 Mercouris evidence).

3. **Section count:** Ensure ≥8 analytical sections per template IV (counting rules); add sections where current count is &lt;8.

4. **Optional:** Layer 2 structured data (e.g. WAR: Belligerents, Classification, Outcome; GEO: Parameters, Strategic Significance) for v2.1+ when desired.

5. **Corrections:** Fix typos (e.g. MEM–FRANCIA–GEO–SEINE–RIVER "DOMINANAD" → "DOMINANCE").

---

## VII. COMPLIANCE TIER (TEMPLATE XV)

Current tier for all 68 Francia v1.0 MEMs: **PARTIAL** (or **DRAFT** where section count &lt;8 and no mandatory sections).  

Target after upgrade: **COMPLIANT** → **CANONICAL** (with 20% quotes, EQS, and full Layer 1 sections).

---

END OF AUDIT — 2026-01-29  
Bound by CIV–MEM–CORE v2.7 · CIV–MEM–TEMPLATE v2.9 · LEARN MODE (no file edits)
