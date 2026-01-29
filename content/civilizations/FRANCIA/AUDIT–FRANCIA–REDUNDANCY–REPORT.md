# AUDIT — Francia Directory: Redundancy and Remediation Report

**Date:** January 2026  
**Scope:** FRANCIA content directory (CIV–INDEX–FRANCIA, MEM–FRANCIA–*, CIV–*, docs references)  
**Purpose:** Identify redundancy, broken references, index/filesystem drift, and structural inconsistencies with remediation options.

---

## I. EXECUTIVE SUMMARY

| Category | Findings | Severity |
|----------|----------|----------|
| **Broken MEM references** | 3 nonexistent or wrong MEM names referenced in multiple files | **High** |
| **Index vs filesystem** | Index count (127) vs actual MEM count (129); 3 MEMs unregistered; 1 MEM missing from index (WAR–THIRD–COALITION) | **Medium** |
| **Naming inconsistency** | 1 MEM file exists without `.md` extension | **Medium** |
| **Duplicate section numbering** | 1 MEM has two "VIII." sections | **Low** |
| **Stale/outdated doc** | AUDIT–FRANCIA–V1–MEM–TEMPLATE–ALIGNMENT cites 68 MEMs and old sample filenames | **Low** |
| **Subject overlap** | No substantive redundancy; parent/child and place/event splits are intentional | **None** |

**Verdict:** Remediation is recommended for broken references and index parity. Section renumbering and AUDIT refresh are optional.

---

## II. BROKEN OR INCORRECT MEM REFERENCES

### 1. MEM–FRANCIA–REVOLUTION–1789 (does not exist)

**Canonical equivalent:** MEM–FRANCIA–FRENCH–REVOLUTION.md

**Referenced in:**
- MEM–FRANCIA–LOUIS–XIV.md (2×: "This memory interfaces with" and MEM CONNECTIONS)
- MEM–FRANCIA–LAW–NAPOLEONIC–CODE.md (MEM CONNECTIONS)
- MEM–FRANCIA–WAR–HUNDRED–YEARS.md (MEM CONNECTIONS)
- MEM–FRANCIA–NAPOLEON.md (MEM CONNECTIONS)

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| **A (recommended)** | Replace all occurrences of `MEM–FRANCIA–REVOLUTION–1789` with `MEM–FRANCIA–FRENCH–REVOLUTION` in the 4 MEMs above | Restores valid links; no new file. |
| B | Create a new MEM–FRANCIA–REVOLUTION–1789.md as a narrow “year” MEM and link it to MEM–FRANCIA–FRENCH–REVOLUTION | Adds scope overlap; only if 1789-specific MEM is desired. |

---

### 2. MEM–FRANCIA–WAR–THIRD–COALITION (file exists without .md)

**Status:** File exists as `MEM–FRANCIA–WAR–THIRD–COALITION` (no extension). Content is valid MEM (v1.0, War of the Third Coalition, 1803–1806).

**Referenced in:**
- MEM–FRANCIA–NAPOLEON.md (MEM CONNECTIONS)
- MEM–FRANCIA–WAR–NAPOLEON–JENA.md (MEM CONNECTIONS)

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| **A (recommended)** | Rename file to `MEM–FRANCIA–WAR–THIRD–COALITION.md` and add `MEM–FRANCIA–WAR–THIRD–COALITION.md` to CIV–INDEX–FRANCIA under C) WAR (alphabetically with other WAR entries) | Aligns naming with rest of repo and fixes index. |
| B | Leave as-is | References resolve if filesystem/IDE treats no-extension file as target; index and globs remain inconsistent. |

---

### 3. MEM–FRANCIA–REVOLUTION–1871 (does not exist)

**Context:** Paris Commune (1871); post–Franco-Prussian War internal rupture.

**Referenced in:**
- MEM–FRANCIA–WAR–FRANCO–PRUSSIAN.md (MEM CONNECTIONS: "internal rupture sequence")

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| A | Create MEM–FRANCIA–REVOLUTION–1871.md (or MEM–FRANCIA–PARIS–COMMUNE.md) per template; add to index | Adds coverage of Commune; requires full MEM authoring. |
| **B (recommended)** | Replace `MEM–FRANCIA–REVOLUTION–1871` with `MEM–FRANCIA–PARIS` (or another existing MEM that covers post-1870 Paris/rupture) in WAR–FRANCO–PRUSSIAN, with short justification | Removes broken link without new file. |
| C | Remove the connection line and reduce MEM CONNECTIONS by one; add a different connection to satisfy ≥10 same-civ | Keeps count compliant; no reference to 1871 MEM. |

---

## III. INDEX vs FILESYSTEM PARITY

### 3.1 Index count vs actual MEM count

- **CIV–INDEX–FRANCIA.md** states: "Total MEM–FRANCIA Files: 127".
- **Bullet count in index:** 126 lines matching `• MEM–FRANCIA–*.md`.
- **Glob of MEM–FRANCIA–*.md:** 129 files (including MEM–FRANCIA–WAR–THIRD–COALITION without .md, counted as one file).

**Discrepancy:** Index total (127) and bullet count (126) do not match current filesystem (129 MEMs if WAR–THIRD–COALITION is counted, 128 with .md only). At least two MEMs on disk are not listed in the index.

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| **A (recommended)** | Add every MEM that exists on disk to the index (see 3.2); set "Total MEM–FRANCIA Files" to the true count (129 after adding WAR–THIRD–COALITION.md and fixing count); fix section ordering (GEO, DYNASTY, WAR, LAW, ECON, RELIGION, PERSON, OTHER) | Full parity. |
| B | Add only the missing MEMs (JACQUERIE, LANGUEDOC, ESTATES–GENERAL, and WAR–THIRD–COALITION once renamed); set Total to 127 + 4 − 1 = 130 if all four are added, or adjust per actual adds | Partial parity. |

### 3.2 MEMs on disk not in CIV–INDEX–FRANCIA

These MEM files exist under `content/civilizations/FRANCIA/` but are **not** listed in CIV–INDEX–FRANCIA:

| MEM file | Suggested index section | Alphabetical placement |
|----------|--------------------------|-------------------------|
| MEM–FRANCIA–JACQUERIE.md | H) OTHER / MISC | After ITALY, before PARIS–LOUVRE |
| MEM–FRANCIA–LANGUEDOC.md | H) OTHER / MISC | After PARIS, before REIMS |
| MEM–FRANCIA–ESTATES–GENERAL.md | H) OTHER / MISC (or D) LAW if preferred) | After EGYPT, before FRENCH–REVOLUTION |
| MEM–FRANCIA–WAR–THIRD–COALITION (then .md) | C) WAR | After WAR–THIRTY–YEARS, before WAR–TRAFALGAR |

**Remediation:** Add the four entries above to CIV–INDEX–FRANCIA in the correct section and alphabetical order; increment index version if required by governance.

---

## IV. DUPLICATE SECTION NUMBERING (LOW)

**File:** MEM–FRANCIA–PARIS–LOUVRE.md

**Issue:** Two sections numbered **VIII**: "VIII. CIVILIZATIONAL MEMORY FUNCTION" and "VIII. MEM BIBLIOGRAPHY". This breaks sequential numbering and can confuse section-based references.

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| **A (recommended)** | Renumber "VIII. MEM BIBLIOGRAPHY" to **X. MEM BIBLIOGRAPHY** (after IX. CONTINUITY INSIGHTS) | Restores unique numbering. |
| B | Renumber CIVILIZATIONAL MEMORY FUNCTION to VII and MEM BIBLIOGRAPHY to VIII | Also valid if section count is adjusted. |

---

## V. STALE OR REDUNDANT DOCUMENTATION

**File:** docs/governance/AUDIT–FRANCIA–V1–MEM–TEMPLATE–ALIGNMENT.md

**Issues:**
- States "68 Francia MEM files" and "All 68 Francia v1.0 MEMs" — current count is 129 MEMs.
- Sample filenames and section headers reference MEM–FRANCIA–PARIS–NOTRE–DAME (updated) but list MEM–FRANCIA–NOTRE–DAME in the long file list (already fixed in a prior edit; verify).
- Audit is template-compliance focused, not redundancy focused; it may still be useful for compliance tracking but is outdated for scope.

**Remediation options:**

| Option | Action | Notes |
|--------|--------|------|
| A | Update AUDIT–FRANCIA–V1–MEM–TEMPLATE–ALIGNMENT with current MEM count (129), re-run a sample of MEMs for template compliance, and refresh the file list | Restores accuracy; more work. |
| **B (recommended)** | Add a short "Superseded for scope" note at the top: "Note: MEM count and file list as of [date] are outdated; see CIV–INDEX–FRANCIA for current registry. This audit remains valid for template requirement definitions." | Low effort; clarifies scope. |
| C | Leave as historical snapshot | No change; readers may misread 68 as current. |

---

## VI. SUBJECT OVERLAP (NO REDUNDANCY FOUND)

Checked:

- **FRENCH–REVOLUTION vs FRENCH–REVOLUTION–*** (DIRECTORY, JACOBIN, REIGN–TERROR, ROBESPIERRE, BASTILLE): Parent/child; no redundancy.
- **EMPIRE vs EMPIRE–HAITI, EMPIRE–LOUISIANA–PURCHASE, etc.:** Overview vs specific territories; no redundancy.
- **REIMS vs REIMS–CATHEDRAL:** City vs building; no redundancy.
- **PARIS vs PARIS–NOTRE–DAME, PARIS–LOUVRE:** City vs sites; no redundancy.
- **HAITI vs EMPIRE–HAITI:** Modern state/legacy vs colonial phase; distinct; no redundancy.

**Verdict:** No consolidation recommended; overlap is intentional and scoped.

---

## VII. PEARSON QUOTE REPETITION (INFORMATIONAL)

The same verbatim block from Roger Pearson, *Voltaire Almighty* (pp. 507–08), appears in **11 MEMs** (LIT–VOLTAIRE, LIT–MONTESQUIEU, FRENCH–REVOLUTION, LOUIS–XIV, DYNASTY–BOURBON, FRENCH–REVOLUTION–JACOBIN, FRENCH–REVOLUTION–ROBESPIERRE, WAR–SEVEN–YEARS, DESCARTES, HUGO, DENMARK). This was intentional integration for 20% quote and ARC alignment.

**Redundancy:** Thematic, not structural. Optional improvement: where the same quote is used in multiple MEMs, vary the one-line integration sentence so each MEM’s angle (e.g. structure vs critique, pre-Revolution, Louis XIV reception) is clearly distinct. No mandatory remediation.

---

## VIII. REMEDIATION CHECKLIST (PRIORITY ORDER)

1. **[High]** Replace `MEM–FRANCIA–REVOLUTION–1789` with `MEM–FRANCIA–FRENCH–REVOLUTION` in: Louis XIV (2×), Napoleonic Code, Hundred Years, Napoleon.
2. **[High]** Replace or remove `MEM–FRANCIA–REVOLUTION–1871` in WAR–FRANCO–PRUSSIAN (recommended: point to MEM–FRANCIA–PARIS or remove).
3. **[Medium]** Rename `MEM–FRANCIA–WAR–THIRD–COALITION` to `MEM–FRANCIA–WAR–THIRD–COALITION.md`; add to CIV–INDEX–FRANCIA under C) WAR.
4. **[Medium]** Add to CIV–INDEX–FRANCIA: MEM–FRANCIA–JACQUERIE, MEM–FRANCIA–LANGUEDOC, MEM–FRANCIA–ESTATES–GENERAL; set "Total MEM–FRANCIA Files" to actual count (e.g. 129).
5. **[Low]** In MEM–FRANCIA–PARIS–LOUVRE, renumber "VIII. MEM BIBLIOGRAPHY" to "X. MEM BIBLIOGRAPHY".
6. **[Low]** Add supersession/scope note to AUDIT–FRANCIA–V1–MEM–TEMPLATE–ALIGNMENT (or refresh count and sample).

---

## IX. SUMMARY TABLE

| Issue | Type | Remediation |
|-------|------|-------------|
| MEM–FRANCIA–REVOLUTION–1789 referenced (4 files) | Broken reference | Replace with MEM–FRANCIA–FRENCH–REVOLUTION |
| MEM–FRANCIA–REVOLUTION–1871 referenced (1 file) | Broken reference | Replace with MEM–FRANCIA–PARIS or remove connection |
| MEM–FRANCIA–WAR–THIRD–COALITION no .md | Naming | Rename to .md; add to index |
| JACQUERIE, LANGUEDOC, ESTATES–GENERAL not in index | Index drift | Add 3 entries to H) OTHER; update Total |
| Index total 127 vs 126 bullets vs 129 files | Count drift | Reconcile and set Total to true count |
| PARIS–LOUVRE two "VIII." | Section numbering | Renumber MEM BIBLIOGRAPHY to X |
| AUDIT doc 68 MEMs | Stale doc | Note supersession or refresh |
| Same Pearson quote in 11 MEMs | Thematic repetition | Optional: vary integration sentence only |

---

**END OF AUDIT — Francia Redundancy Report**
