# AUDIT — CIV–CORE–CHINA & CIV–SCHOLAR–CHINA

**Date:** 2026-02-02  
**Scope:** CIV–CORE–CHINA.md, CIV–SCHOLAR–CHINA.md  
**Templates:** CIV–CORE–TEMPLATE v3.0, CIV–SCHOLAR–TEMPLATE v3.0  
**Purpose:** Structural alignment, version refs, internal consistency

---

## I. EXECUTIVE SUMMARY

| File | Structural | Version refs | Content consistency | Action |
|------|------------|--------------|----------------------|--------|
| CIV–CORE–CHINA | ALIGNED | 2 stale | — | Fix INDEX/ARC refs |
| CIV–SCHOLAR–CHINA | ALIGNED | 5+ stale | 1 gap (ENTRY 0014) | Fix refs; add ENTRY 0014 or correct counts |

---

## II. CIV–CORE–CHINA

### II.A Header & governance

- **Template Version Used:** v3.0 ✓  
- **Compatibility:** CMC v3.0 ✓  
- **Governed by:** CIV–MEM–CORE v3.0 ✓  

### II.B Stale internal refs

| Location | Current | Should be |
|----------|---------|-----------|
| Header (MEM scope) | CIV–INDEX–CHINA v2.0 (MEM scope: 38 files) | CIV–INDEX–CHINA v3.0 (MEM scope: 68 files) |
| ARC Reference | CIV–ARC–CHINA v2.0 | CIV–ARC–CHINA v3.0 |

### II.C Section order

Sections I–XX present and in template order. ✓

### II.D Optional

- **Supersedes:** "V1.0" — minor; "v1.0" for case consistency (optional).

---

## III. CIV–SCHOLAR–CHINA

### III.A Header & governance

- **Template Version Used:** v3.0 ✓  
- **Governed by:** CIV–SCHOLAR–PROTOCOL v3.0 ✓  
- **ARC Reference:** CIV–ARC–CHINA v2.0 → should be v3.0 (ARC file is v3.0).

### III.B Stale template / index refs

| Location | Current | Fix |
|----------|---------|-----|
| Derived from | CIV–SCHOLAR–TEMPLATE v2.10 | v3.0 |
| Section I (and all "Implements...") | CIV–SCHOLAR–TEMPLATE v2.10 | v3.0 |
| Section XV Source MEMs | CIV–INDEX–CHINA v2.0 | v3.0 |
| Section XXII (OGE) | CIV–SCHOLAR–TEMPLATE v2.10 | v3.0 |

### III.C Content gap — ENTRY 0014

- **RLL–CHINA–0002** (Section XVIII.A) states: *"Derivation: ... ENTRY 0014."*
- **Section XVI (Ingested Learning Events)** contains ENTRIES 0001–0013 only. **ENTRY 0014 is absent.**
- **Section XXI (Current Status):** Total Entries: 14, Next Entry ID: 0015 — implies 14 entries exist.

**Conclusion:** Either (a) add ENTRY 0014 (Amur pre-1500 LEARN session) to Section XVI and keep counts, or (b) set Total Entries: 13, Next Entry ID: 0014 and remove the "ENTRY 0014" reference from RLL–CHINA–0002 derivation text (or rephrase to "session recorded in ENTRY 0014 [pending]" until added).

**Recommendation:** Add ENTRY 0014 for the Amur pre-1500 military history LEARN session so the derivation in RLL–CHINA–0002 is correct and counts are consistent.

### III.D Source MEMs list (XV)

List is a **subset** of CIV–INDEX–CHINA (68 MEMs). Missing from list include, e.g.: WAR–FIRST–OPIUM, WAR–TAIPING–REBELLION, PRC–NIXON, PRC–KISSINGER, LIT–ROMANCE–THREE–KINGDOMS, GEO river MEMs (Yellow, Yangtze, Pearl, Amur), GRAND–CANAL, etc. Acceptable as “representative / key MEMs”; consider adding a line: *"Full registry: CIV–INDEX–CHINA v3.0 (68 MEMs)."*

### III.E Section structure

Sections I–XXVI present; authority flow, phase model, OGE, synthesis tradecraft, and governance sections align with template. ✓

---

## IV. FIXES APPLIED (2026-02-02)

1. **CIV–CORE–CHINA:** CIV–INDEX–CHINA v2.0 (38 files) → v3.0 (68 files); ARC Reference v2.0 → v3.0.  
2. **CIV–SCHOLAR–CHINA:** Derived from v2.10 → v3.0; all "Implements CIV–SCHOLAR–TEMPLATE v2.10" → v3.0; Source MEMs (XV) CIV–INDEX–CHINA v2.0 → v3.0 (full registry 68 MEMs); ARC Reference v2.0 → v3.0.  
3. **ENTRY 0014:** Added to Section XVI (Amur pre-1500 LEARN session; Bohai–Tang tributary/rival encoding); RLL–CHINA–0002 derivation and Section XXI counts now consistent.

---

## V. VERDICT

After fixes: **CIV–CORE–CHINA** and **CIV–SCHOLAR–CHINA** are aligned with their templates and with current INDEX/ARC versions. ENTRY 0014 addition restores consistency between RLL derivation, Section XVI, and Section XXI.

---

END OF AUDIT — 2026-02-02 (CORE–CHINA & SCHOLAR–CHINA)
