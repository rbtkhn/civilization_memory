# AUDIT — MEM–FRANCIA–BELGIUM vs CIV–MEM–TEMPLATE v2.9

**Date:** January 2026  
**Scope:** MEM–FRANCIA–BELGIUM (v1.3)  
**Reference:** [MEM–FRANCIA–BELGIUM](https://github.com/rbtkhn/civilization_memory/blob/main/content/civilizations/FRANCIA/MEM%E2%80%93FRANCIA%E2%80%93BELGIUM.md) · CIV–MEM–TEMPLATE v2.9  
**Mode:** LEARN (audit only; no file modification)

---

## I. EXECUTIVE SUMMARY

| Metric | Result |
|--------|--------|
| **File** | MEM–FRANCIA–BELGIUM — v1.3 |
| **Subject** | Belgium (Lost Extension, Buffer Denial, Constraint Zone) |
| **Template (Layer 1)** | Partial compliance |
| **Layer 2 (CITY/PLACE)** | Not present (optional for existing MEMs per v2.9 XXVII.B) |
| **MEM CONNECTIONS** | Present but &lt;10 same-civilization; &lt;2 GEO required |
| **MEM BIBLIOGRAPHY** | Absent |
| **20% verbatim quote** | Declared 20% COMPLIANT; quotes present |
| **ERC tagging** | Quotations not classified by ERC (PRIMARY/CONTEXTUAL/SECONDARY/CRITICAL) |
| **SUBJECT TYPE DECLARATION** | Absent |
| **Mandatory clause** | Present: "Contradictions are preserved without synthesis." |

**Verdict:** MEM–FRANCIA–BELGIUM meets core prose structure (8+ analytical sections, mandatory clause, verbatim quotes with attribution) but does not fully satisfy CIV–MEM–TEMPLATE v2.9 Layer 1 requirements for MEM CONNECTIONS count, MEM BIBLIOGRAPHY, ERC classification of quotations, or SUBJECT TYPE DECLARATION. Layer 2 structured data is optional for this existing MEM.

---

## II. LAYER 1 REQUIREMENTS (CHECKED)

Per CIV–MEM–TEMPLATE v2.9:

| Requirement | Template ref | Status |
|-------------|--------------|--------|
| **File identity & metadata** (filename, status, version, civilization, subject, dates, class, last update, word count) | II | ✅ Present; repository reference not in header |
| **Memory purpose & scope** (what is preserved, why it matters, what it does not resolve) | III | ✅ Section I |
| **Mandatory clause** ("Contradictions are preserved without synthesis.") | III | ✅ Present |
| **Minimum 8 numbered analytical sections** | IV | ✅ I–VIII (8 sections); IX–XIII additive/connections/game |
| **ERC classification for all quotations** | V | ❌ Quotations have attribution but no [ERC-PRIMARY], [ERC-CONTEXTUAL], [ERC-SECONDARY] tags |
| **EQS (authority, relevance, context, limitation)** | VI | ⚠️ Attribution present; limitation/constraint rarely explicit |
| **20% verbatim quote minimum** | VIII | ✅ Declared 20% COMPLIANT; 4 block quotes (National Convention, Miot de Mélito, Castlereagh, Mercier) |
| **SUBJECT TYPE DECLARATION** ("This MEM addresses a [WELL-DOCUMENTED/…] subject. Applied requirements…") | VIII.C | ❌ Absent |
| **MEM CONNECTIONS** (≥10 same-civilization, ≥2 GEO, justification each) | X, X.B | ❌ Only 3 same-civilization (NETHERLANDS, DENMARK, SWEDEN); 0 GEO MEMs; justifications present for 8 connections |
| **Continuity insights (raw)** | XI | ✅ Section IX |
| **MEM BIBLIOGRAPHY** | XVIII | ❌ Absent |
| **ARC version pinning** | XIV | ❌ Not stated in file |
| **Language constraints** (no "inevitable," "destined," "obvious," "had to") | XVII | ✅ No violations observed |
| **MEM INGEST BOOTSTRAP** (8 options when ingested without CORE) | XIII | ❌ Absent |

---

## III. LAYER 2 (CITY/PLACE) — OPTIONAL FOR EXISTING MEM

MEM–FRANCIA–BELGIUM is a **place/region** MEM (Belgium as buffer), not a city MEM. Template XXIV.F (CITY STRUCTURED DATA) would apply if treating Belgium as a "place":

| Layer 2 element | Required for new MEM | Status in MEM–FRANCIA–BELGIUM |
|-----------------|------------------------|-------------------------------|
| SECTION: CITY STRUCTURED DATA (LAYER 2) | Yes (new MEMs) | ❌ Not present |
| SUBSECTION: GEOGRAPHIC (COORDINATES, TERRAIN, CLIMATE, KEY_FEATURES) | Yes | ❌ Not present |
| SUBSECTION: ECONOMIC FUNCTION | Yes | ❌ Not present |
| SUBSECTION: CONTROL HISTORY (table) | Yes | ❌ Not present |

Per XXVII.B, **existing MEMs** may omit Layer 2; upgrade is optional. No finding of invalidity for Belgium on this basis.

---

## IV. QUOTATIONS INVENTORY

| Quote | Source | Role (inferred) | ERC tag in file? |
|-------|--------|------------------|------------------|
| National Convention Decree on Reunion of Belgium, 1795 | Primary decree | PRIMARY | ❌ No |
| Miot de Mélito, *Mémoires* | Memoir, early 19th c. | CONTEXTUAL | ❌ No |
| Lord Castlereagh to British Cabinet, 1814 | Diplomatic primary | PRIMARY | ❌ No |
| Cardinal Mercier, Pastoral Letter, 1914 | Primary (ecclesiastical) | PRIMARY | ❌ No |

All four are integrated analytically. Adding [ERC-PRIMARY] or [ERC-CONTEXTUAL] per template V would resolve the ERC gap.

---

## V. MEM CONNECTIONS GAP

Template X requires:
- **≥10 same-civilization MEM connections** (Francia)
- **≥2 GEO MEM files** among connections
- Each with justification (X.B)

MEM–FRANCIA–BELGIUM Section XII lists:
- **Francia (3):** MEM–FRANCIA–NETHERLANDS, MEM–FRANCIA–DENMARK, MEM–FRANCIA–SWEDEN
- **Germania (3):** MEM–GERMANIA–AUSTRIA–HUNGARY, MEM–GERMANIA–POLAND–LITHUANIA–COMMONWEALTH, MEM–GERMANIA–NETHERLANDS
- **Anglia (2, planned):** MEM–ANGLIA–NETHERLANDS, MEM–ANGLIA–BELGIUM

**Gap:** Same-civilization count is 3 (need ≥10). GEO MEMs explicitly listed: 0 (need ≥2). Justifications are present and substantive.

---

## VI. RECOMMENDATIONS (NON-BINDING)

1. **ERC:** Add [ERC-PRIMARY] or [ERC-CONTEXTUAL] to each verbatim quote per template V.
2. **MEM BIBLIOGRAPHY:** Add a section listing all sources (primary and secondary) used or cited.
3. **MEM CONNECTIONS:** Expand same-civilization connections (e.g. MEM–FRANCIA–WAR–WATERLOO, MEM–FRANCIA–NAPOLEON, MEM–FRANCIA–GEO–ENGLISH–CHANNEL, MEM–FRANCIA–GEO–RHINE, MEM–FRANCIA–PARIS, MEM–FRANCIA–FRENCH–REVOLUTION, MEM–FRANCIA–RICHELIEU, MEM–FRANCIA–BELGIUM–ANTWERP, etc.) to ≥10 and include ≥2 GEO MEMs with justification.
4. **SUBJECT TYPE DECLARATION:** Add VIII.C declaration (e.g. well-documented subject; PRIMARY ≥2, CONTEXTUAL ≥2, SECONDARY ≥2).
5. **ARC version pinning:** Add "ARC version pinned: CIV–ARC–FRANCIA vX.X" (or equivalent).
6. **Layer 2 (optional):** Add CITY/PLACE structured data (geographic parameters, economic function, control history table) for template alignment and queryability.

---

## VII. CANONICAL STATUS NOTE

The file declares **ACTIVE · CANONICAL · 20% COMPLIANT**. Per template XV, CANONICAL requires ≥20% quotes, 70% analytical content, and EQS compliance. This audit does not revoke canonical status; it records template gaps for voluntary upgrade.

────────────────────────────────────────────────────────────
END OF AUDIT — MEM–FRANCIA–BELGIUM — TEMPLATE v2.9
────────────────────────────────────────────────────────────
