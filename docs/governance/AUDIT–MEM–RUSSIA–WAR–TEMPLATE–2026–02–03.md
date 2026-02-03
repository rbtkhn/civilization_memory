# Audit: MEM–RUSSIA–WAR* Files vs CIV–MEM–TEMPLATE

**Date:** 2026-02-03  
**Scope:** All files matching `MEM–RUSSIA–WAR*.md` in `content/civilizations/RUSSIA/`  
**Reference:** CIV–MEM–TEMPLATE v3.0 (docs/templates/CIV–MEM–TEMPLATE.md)  
**Total files audited:** 49

---

## 1. Summary

| Criterion | Required (Template) | Pass | Fail | Notes |
|----------|--------------------|------|------|------|
| Mandatory clause: "Contradictions are preserved without synthesis." | All MEMs | 48 | 1 | RUSSO–KAZAN |
| MEM CONNECTIONS section (≥10 same-civ, ≥2 GEO) | All MEMs | 48 | 1 | RUSSO–KAZAN |
| MEM BIBLIOGRAPHY section | All MEMs (XVIII) | 42 | 7 | Listed §3 |
| MEM INGEST BOOTSTRAP (confirm + exploration options) | All MEMs (XIII) | 33 | 16 | Listed §4 |
| SUBJECT TYPE DECLARATION | All MEMs (VIII.C) | 42 | 7 | Same as BIBLIOGRAPHY gap where not stub |
| WAR Layer 2 (Belligerents, Classification, Outcome, Force Ratios) | Required for *new* MEMs; optional for existing | 1 | 48 | Only RASPUTITSA has Layer 2 |
| Template version declared | Governance | 49 | 0 | Mix of v2.7, v2.8, v3.0 |
| Status + Version in metadata | II. FILE IDENTITY | 49 | 0 | All present |

**Critical failures (block canonical / invalidate MEM):**
- **MEM–RUSSIA–WAR–RUSSO–KAZAN.md** — File is effectively empty (no content). Missing: mandatory clause, MEM CONNECTIONS, MEM BIBLIOGRAPHY, MEM INGEST BOOTSTRAP, and all substantive sections. Treat as stub; either populate to template compliance or remove from index.

---

## 2. Mandatory Clause and MEM CONNECTIONS

- **Contradictions preserved:** 48/49 contain the verbatim clause *"Contradictions are preserved without synthesis."*  
- **Missing:** MEM–RUSSIA–WAR–RUSSO–KAZAN (no content).

- **MEM CONNECTIONS section:** 48/49 contain a dedicated MEM CONNECTIONS section (various section numbers: IX, XI, etc.).  
- **Missing:** MEM–RUSSIA–WAR–RUSSO–KAZAN.

Template X: ≥10 same-civilization connections and ≥2 GEO–MEM connections required; X.B requires a concise justification per connection. This audit did not verify connection counts or justification wording in each file; recommend spot-check or script for ≥10/≥2 and justification presence.

---

## 3. MEM BIBLIOGRAPHY (Mandatory — Template XVIII)

**Missing dedicated MEM BIBLIOGRAPHY section (7 files):**

1. MEM–RUSSIA–WAR–PECHENEGS — Uses "ARC COMPLIANCE & CITATIONS" and "VERSION & EVOLUTION NOTES"; no section titled MEM BIBLIOGRAPHY.
2. MEM–RUSSIA–WAR–RUSSO–KAZAN — Stub; no content.
3. MEM–RUSSIA–WAR–SEVEN–YEARS
4. MEM–RUSSIA–WAR–PUGACHEV–REBELLION
5. MEM–RUSSIA–WAR–CUMANS
6. MEM–RUSSIA–WAR–CHUD
7. MEM–RUSSIA–WAR–NAPOLEON–AUSTERLITZ

**Recommendation:** Add a MEM BIBLIOGRAPHY section to each of the above (except RUSSO–KAZAN, which needs full authoring or de-listing).

---

## 4. MEM INGEST BOOTSTRAP (Mandatory — Template XIII)

Template: system must confirm ingest, declare MEM active, and present **exactly EIGHT** exploration options.

**Missing MEM INGEST BOOTSTRAP section (16 files):**

1. MEM–RUSSIA–WAR–TEUTONIC–ORDER  
2. MEM–RUSSIA–WAR–PRUSSIAN–CRUSADE  
3. MEM–RUSSIA–WAR–SWEDISH–NOVGORADIAN  
4. MEM–RUSSIA–WAR–PUGACHEV–REBELLION  
5. MEM–RUSSIA–WAR–SIBIR–KHANATE  
6. MEM–RUSSIA–WAR–RUSSO–KAZAN  
7. MEM–RUSSIA–WAR–RUSSO–PERSIAN  
8. MEM–RUSSIA–WAR–PECHENEGS (has "Present eight exploration options" but section title differs)  
9. MEM–RUSSIA–WAR–GREAT–NORTHERN–POLTAVA  
10. MEM–RUSSIA–WAR–GREAT–NORTHERN–NARVA  
11. MEM–RUSSIA–WAR–CUMANS  
12. MEM–RUSSIA–WAR–CRIMEAN–KHANATE  
13. MEM–RUSSIA–WAR–MUSCOVITE–SUCCESSION  
14. MEM–RUSSIA–WAR–LIVONIAN  
15. MEM–RUSSIA–WAR–KHAZAR–KHAGANATE  
16. MEM–RUSSIA–WAR–GREAT–TURKISH  

**Note:** PECHENEGS has eight options (A–H) under "MEM INGEST BOOTSTRAP" but the section header is "XIII. MEM INGEST BOOTSTRAP"; if the template is interpreted as requiring the exact phrase "MEM INGEST BOOTSTRAP (MANDATORY)", some of the 33 passing files may use alternate headers. This audit counted presence of an ingest/bootstrap section with exploration options; exact wording of the section title was not normalized.

**Recommendation:** Add a MEM INGEST BOOTSTRAP block with exactly eight options (A–H) to each of the 16 files above (except RUSSO–KAZAN, which needs full content first).

---

## 5. WAR Layer 2 (Type-Specific Structured Data)

Template XXIV: WAR MEMs must include WAR STRUCTURED DATA (LAYER 2): Belligerents, War Classification, Outcome Classification, Force Ratios; Casualty Data optional.  
**Enforcement:** Required for *new* MEMs (created after v2.9); **optional** for existing MEMs.

- **With Layer 2:** 1 — MEM–RUSSIA–WAR–RASPUTITSA (WAR MEM LAYER 2 FIELDS: Classification, Belligerents N/A, Outcome, Geographic scope).
- **Without Layer 2:** 48.

No violation for existing MEMs; new WAR MEMs should include full Layer 2 (Belligerents table, WAR_TYPE, DURATION, THEATER, TRIGGER, MILITARY_OUTCOME, TERRITORIAL_CHANGE, etc.) per XXIV.A.

---

## 6. SUBJECT TYPE DECLARATION (Template VIII.C)

Declaration format: *"This MEM addresses a [WELL-DOCUMENTED/SPARSE SOURCES/MODERN/INTERPRETIVE] subject. Applied requirements: PRIMARY ≥X, CONTEXTUAL ≥Y, SECONDARY ≥Z, CRITICAL ≥W"*.

- **Present:** 42 files.  
- **Absent:** 7 files (same set as missing BIBLIOGRAPHY: PECHENEGS, RUSSO–KAZAN, SEVEN–YEARS, PUGACHEV–REBELLION, CUMANS, CHUD, NAPOLEON–AUSTERLITZ; plus any others that have BIBLIOGRAPHY but no declaration were not re-checked).  

Recommend adding SUBJECT TYPE DECLARATION to any WAR MEM that lacks it.

---

## 7. Structural and Evidentiary Rules (Not Fully Verified)

- **Minimum 8 analytical sections (IV):** Not counted per file; recommend spot-check or script.  
- **20% verbatim quote minimum (VIII):** Not measured; would require word-count and quote extraction.  
- **70% analytical floor (VIII.D):** Not measured.  
- **Connection justifications (X.B):** Not verified per connection; sample (e.g. WAR–CRIMEAN) uses short justifications (e.g. "Ottoman rivalry context").  
- **Exactly eight exploration options:** Not verified for all 33 files that have an ingest section; WAR–CRIMEAN and WAR–PECHENEGS have eight (A–H).

---

## 8. Template Version and Governance

- Declared template versions: v2.7, v2.8, v3.0.  
- CIV–MEM–CORE and ARC–RUSSIA references vary (v2.0+, v3.0, "pinned").  
- For alignment with current governance, consider upgrading all MEM–RUSSIA–WAR files to CIV–MEM–TEMPLATE v3.0 and CIV–MEM–CORE v3.0 where still at v2.7/v2.8.

---

## 9. Recommendations (Priority)

1. **MEM–RUSSIA–WAR–RUSSO–KAZAN:** Either author to full template compliance (mandatory clause, purpose & scope, ≥8 sections, MEM CONNECTIONS, MEM BIBLIOGRAPHY, MEM INGEST BOOTSTRAP, SUBJECT TYPE DECLARATION) or remove from CIV–INDEX–RUSSIA and treat as placeholder.
2. **Add MEM BIBLIOGRAPHY** to the 6 non-stub files missing it: PECHENEGS, SEVEN–YEARS, PUGACHEV–REBELLION, CUMANS, CHUD, NAPOLEON–AUSTERLITZ.
3. **Add MEM INGEST BOOTSTRAP** (with exactly eight options) to the 15 non-stub files missing it (list in §4, excluding RUSSO–KAZAN).
4. **Add SUBJECT TYPE DECLARATION** to any WAR MEM that lacks it (same set as §3 minus RUSSO–KAZAN).
5. **Optional (existing MEMs):** Add WAR Layer 2 structured data to high-value WAR MEMs (e.g. CRIMEAN, NAPOLEON, GREAT–PATRIOTIC) for consistency with RASPUTITSA and template XXIV.A.
6. **Optional:** Run a follow-up audit or script to verify (a) ≥10 Russian + ≥2 GEO connections and (b) exactly eight ingest options in every WAR MEM.

---

## 10. Reference: Template Requirements Used

- **II.** File identity & metadata (order, Status, Version, etc.).  
- **III.** Memory purpose & scope; verbatim *"Contradictions are preserved without synthesis."*  
- **IV.** Minimum 8 numbered analytical sections.  
- **VIII.** 20% verbatim quote standard; VIII.C SUBJECT TYPE DECLARATION.  
- **X.** MEM CONNECTIONS: dedicated section, ≥10 same-civ, ≥2 GEO, X.B justification.  
- **XIII.** MEM INGEST BOOTSTRAP: confirm ingest, declare active, exactly EIGHT exploration options.  
- **XVIII.** MEM BIBLIOGRAPHY: mandatory section.  
- **XXIV.A** WAR MEM structured fields (Layer 2): required for new WAR MEMs, optional for existing.

---

**END OF AUDIT — MEM–RUSSIA–WAR vs CIV–MEM–TEMPLATE (2026-02-03)**
