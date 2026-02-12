# Migration: MEM–ANGLIA → MEM–AMERICA (Batch 1 + Batch 2)

Checklist for renaming and relocating American-primary MEMs from ANGLIA to AMERICA. **Batch 1:** ten highest-priority. **Batch 2:** ten more. Apply in order; tick when done.

---

# BATCH 1 (first ten)

---

## 1. Exact renames (file move + header)

| # | Source (ANGLIA) | Destination (AMERICA) |
|---|------------------|------------------------|
| 1 | `content/civilizations/ANGLIA/MEM–ANGLIA–UNITED–STATES–AMERICA.md` | `content/civilizations/AMERICA/MEM–AMERICA–UNITED–STATES–AMERICA.md` |
| 2 | `content/civilizations/ANGLIA/MEM–ANGLIA–MONROE.md` | `content/civilizations/AMERICA/MEM–AMERICA–MONROE.md` |
| 3 | `content/civilizations/ANGLIA/MEM–ANGLIA–DECLARATION–INDEPENDENCE.md` | `content/civilizations/AMERICA/MEM–AMERICA–DECLARATION–INDEPENDENCE.md` |
| 4 | `content/civilizations/ANGLIA/MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN.md` | `content/civilizations/AMERICA/MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN.md` |
| 5 | `content/civilizations/ANGLIA/MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE.md` | `content/civilizations/AMERICA/MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE.md` |
| 6 | `content/civilizations/ANGLIA/MEM–ANGLIA–HAMILTON.md` | `content/civilizations/AMERICA/MEM–AMERICA–HAMILTON.md` |
| 7 | `content/civilizations/ANGLIA/MEM–ANGLIA–LAW–FEDERALIST–PAPERS.md` | `content/civilizations/AMERICA/MEM–AMERICA–LAW–FEDERALIST–PAPERS.md` |
| 8 | `content/civilizations/ANGLIA/MEM–ANGLIA–WASHINGTON.md` | `content/civilizations/AMERICA/MEM–AMERICA–WASHINGTON.md` |
| 9 | `content/civilizations/ANGLIA/MEM–ANGLIA–WAR–SPANISH–AMERICAN.md` | `content/civilizations/AMERICA/MEM–AMERICA–WAR–SPANISH–AMERICAN.md` |
| 10 | `content/civilizations/ANGLIA/MEM–ANGLIA–WAR–AMERICAN–CIVIL.md` | `content/civilizations/AMERICA/MEM–AMERICA–WAR–AMERICAN–CIVIL.md` |

**Per file after move:** In each new MEM–AMERICA–* file, set header `Civilization:` to `AMERICA` and the title line to `MEM–AMERICA–[REST]` (e.g. `MEM–AMERICA–MONROE`). Update any in-file footer that repeats the MEM name.

---

## 2. CONNECTIONS: ANGLIA MEMs that reference these ten

Other ANGLIA MEMs contain CONNECTIONS pointing to the ten. After migration, update those pointers to MEM–AMERICA–*.

| ANGLIA file | References to update |
|-------------|----------------------|
| MEM–ANGLIA–JACKSON | MEM–ANGLIA–HAMILTON → MEM–AMERICA–HAMILTON |
| MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE | MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN, MEM–ANGLIA–DECLARATION–INDEPENDENCE → MEM–AMERICA–* |
| MEM–ANGLIA–WAR–SPANISH–AMERICAN | MEM–ANGLIA–UNITED–STATES–AMERICA → MEM–AMERICA–UNITED–STATES–AMERICA |
| MEM–ANGLIA–GEO–COLORADO–RIVER | MEM–ANGLIA–UNITED–STATES–AMERICA → MEM–AMERICA–UNITED–STATES–AMERICA |
| MEM–ANGLIA–ROCKEFELLER | MEM–ANGLIA–HAMILTON, MEM–ANGLIA–UNITED–STATES–AMERICA → MEM–AMERICA–* |
| MEM–ANGLIA–WAR–AMERICAN–CIVIL–GETTYSBURG | MEM–ANGLIA–WAR–AMERICAN–CIVIL, MEM–ANGLIA–DECLARATION–INDEPENDENCE → MEM–AMERICA–* |
| MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN | MEM–ANGLIA–WAR–AMERICAN–CIVIL → MEM–AMERICA–WAR–AMERICAN–CIVIL (only if Yorktown stays in ANGLIA; if Yorktown moves, this file becomes MEM–AMERICA–* and its CONNECTIONS stay but self-refs update) |
| MEM–ANGLIA–LIT–SMITH | MEM–ANGLIA–HAMILTON → MEM–AMERICA–HAMILTON |
| MEM–ANGLIA–LIT–PAINE | MEM–ANGLIA–LAW–FEDERALIST–PAPERS, MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN, MEM–ANGLIA–HAMILTON → MEM–AMERICA–* |
| MEM–ANGLIA–WAR–HASTINGS | MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN → MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN |

**Note:** The ten files are being moved to AMERICA. So MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN no longer exists in ANGLIA; it becomes MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN. All CONNECTIONS in remaining ANGLIA MEMs that point to any of the ten must be updated to MEM–AMERICA–*.

---

## 3. MEM–RELEVANCE–AMERICA.md

Replace every occurrence of the following with the MEM–AMERICA–* form:

- `MEM–ANGLIA–UNITED–STATES–AMERICA` → `MEM–AMERICA–UNITED–STATES–AMERICA`
- `MEM–ANGLIA–MONROE` → `MEM–AMERICA–MONROE`
- `MEM–ANGLIA–DECLARATION–INDEPENDENCE` → `MEM–AMERICA–DECLARATION–INDEPENDENCE`
- `MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN` → `MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN`
- `MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE` → `MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE`
- `MEM–ANGLIA–HAMILTON` → `MEM–AMERICA–HAMILTON`
- `MEM–ANGLIA–LAW–FEDERALIST–PAPERS` → `MEM–AMERICA–LAW–FEDERALIST–PAPERS`
- `MEM–ANGLIA–WASHINGTON` → `MEM–AMERICA–WASHINGTON`
- `MEM–ANGLIA–WAR–SPANISH–AMERICAN` → `MEM–AMERICA–WAR–SPANISH–AMERICAN`
- `MEM–ANGLIA–WAR–AMERICAN–CIVIL` → `MEM–AMERICA–WAR–AMERICAN–CIVIL`

Update the "How to Use" / scope note if it says "all references below are to files in content/civilizations/ANGLIA/" to state that American-primary MEMs are in AMERICA (MEM–AMERICA–*) and the rest remain in ANGLIA (MEM–ANGLIA–*).

---

## 4. CIV–STATE–AMERICA.md

Replace the same ten MEM–ANGLIA–* tokens with MEM–AMERICA–* throughout (all sections where they appear: narrative, Decision-Relevant History, Source Versions, State Log, etc.). Leave other MEM–ANGLIA–* references (e.g. CANADA, GEO–ATLANTIC, WAR–NELSON–TRAFALGAR) as-is unless/until those are migrated later.

---

## 5. CIV–SCHOLAR–AMERICA.md

- Replace the ten MEM–ANGLIA–* names with MEM–AMERICA–* in ENTRY notes and any listed MEMs.
- Optionally add a short note that MEM–AMERICA–* files are now the primary America-specific MEM set; MEM–ANGLIA–* remain constitutive where referenced.

---

## 6. Other AMERICA folder files

- **STATE–AMERICA–DOCTRINE–VIOLATIONS–NOTE–2026–02–12.md:**  
  `MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN` → `MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN`.

---

## 7. CONNECTIONS inside the ten migrated MEMs

Inside each new MEM–AMERICA–* file, update any CONNECTIONS that point to another of the ten: use MEM–AMERICA–* for those. CONNECTIONS to MEMs that remain in ANGLIA (e.g. MEM–ANGLIA–CANADA, MEM–ANGLIA–WAR–SEVEN–YEARS) stay as MEM–ANGLIA–*.

---

## 8. Governance / docs (optional, for consistency)

These reference the ten as MEM–ANGLIA–*; update only if you want governance and audits to cite the new names:

- docs/governance/AUDIT–ANDERSON–CRUCIBLE–OF–WAR–PRESENCE.md
- docs/governance/PROPOSAL–ANGLIA–MEM–CHURCHILL–VOL2–NEW–WORLD.md
- docs/governance/PROPOSAL–ANGLIA–MEM–CHURCHILL–VOL3–AGE–OF–REVOLUTION.md
- docs/governance/PROPOSAL–ANGLIA–MEM–CHURCHILL–VOL4–GREAT–DEMOCRACIES.md
- docs/governance/AUDIT–CHURCHILL–HISTORY–ENGLISH–SPEAKING–PEOPLES–PRESENCE.md
- docs/governance/PROPOSAL–ANGLIA–MEM–FERGUSON–EMPIRE.md
- docs/governance/AUDIT–ANGLIA–BANKING–MEMS–CONCEPTUAL–CULTURAL–LOGICAL.md
- docs/governance/AUDIT–ANGLIA–LIT–MEM–CONSISTENCY.md
- docs/governance/UPGRADE–PLAN–ANGLIA–LIT–MEM–TEMPLATE–COMPLIANCE.md
- docs/governance/AUDIT–ANGLIA–AMERICAN–REVOLUTION–TANGENTIAL–2026–01–31.md
- docs/governance/CIV–MEM–CORE.md (reference to MEM–ANGLIA–HAMILTON)
- content/civilizations/ANGLIA/CIV–ARC–ANGLIA.md (TSP example MEM–ANGLIA–HAMILTON)
- docs/templates/CIV–INDEX–TEMPLATE.md, CIV–ARC–TEMPLATE.md (example MEM–ANGLIA–HAMILTON)

---

# BATCH 2 (second ten)

---

## 2–1. Exact renames — Batch 2 (file move + header)

| # | Source (ANGLIA) | Destination (AMERICA) |
|---|------------------|------------------------|
| 1 | `content/civilizations/ANGLIA/MEM–ANGLIA–GEO–MISSISSIPPI–RIVER.md` | `content/civilizations/AMERICA/MEM–AMERICA–GEO–MISSISSIPPI–RIVER.md` |
| 2 | `content/civilizations/ANGLIA/MEM–ANGLIA–LINCOLN.md` | `content/civilizations/AMERICA/MEM–AMERICA–LINCOLN.md` |
| 3 | `content/civilizations/ANGLIA/MEM–ANGLIA–LAW–EMANCIPATION–PROCLAMATION.md` | `content/civilizations/AMERICA/MEM–AMERICA–LAW–EMANCIPATION–PROCLAMATION.md` |
| 4 | `content/civilizations/ANGLIA/MEM–ANGLIA–BRITISH–EMPIRE–NORTH–AMERICA.md` | `content/civilizations/AMERICA/MEM–AMERICA–BRITISH–EMPIRE–NORTH–AMERICA.md` |
| 5 | `content/civilizations/ANGLIA/MEM–ANGLIA–WAR–MEXICAN–AMERICAN.md` | `content/civilizations/AMERICA/MEM–AMERICA–WAR–MEXICAN–AMERICAN.md` |
| 6 | `content/civilizations/ANGLIA/MEM–ANGLIA–JEFFERSON.md` | `content/civilizations/AMERICA/MEM–AMERICA–JEFFERSON.md` |
| 7 | `content/civilizations/ANGLIA/MEM–ANGLIA–MADISON.md` | `content/civilizations/AMERICA/MEM–AMERICA–MADISON.md` |
| 8 | `content/civilizations/ANGLIA/MEM–ANGLIA–ADAMS.md` | `content/civilizations/AMERICA/MEM–AMERICA–ADAMS.md` |
| 9 | `content/civilizations/ANGLIA/MEM–ANGLIA–FRANKLIN.md` | `content/civilizations/AMERICA/MEM–AMERICA–FRANKLIN.md` |
| 10 | `content/civilizations/ANGLIA/MEM–ANGLIA–JACKSON.md` | `content/civilizations/AMERICA/MEM–AMERICA–JACKSON.md` |

**Per file after move:** In each new MEM–AMERICA–* file, set header `Civilization:` to `AMERICA` and the title line to `MEM–AMERICA–[REST]`. Update any in-file footer that repeats the MEM name.

---

## 2–2. CONNECTIONS: ANGLIA MEMs that reference Batch 2

After migrating Batch 2, update these pointers to MEM–AMERICA–*.

| ANGLIA file | References to update |
|-------------|----------------------|
| MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE | MEM–ANGLIA–ADAMS → MEM–AMERICA–ADAMS |
| MEM–ANGLIA–WAR–SPANISH–AMERICAN | MEM–ANGLIA–WAR–MEXICAN–AMERICAN → MEM–AMERICA–WAR–MEXICAN–AMERICAN |
| MEM–ANGLIA–GEO–COLORADO–RIVER | MEM–ANGLIA–WAR–MEXICAN–AMERICAN, MEM–ANGLIA–GEO–MISSISSIPPI–RIVER → MEM–AMERICA–* |
| MEM–ANGLIA–ROCKEFELLER | MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON |
| MEM–ANGLIA–LIT–PAINE | MEM–ANGLIA–FRANKLIN → MEM–AMERICA–FRANKLIN |
| MEM–ANGLIA–DECLARATION–INDEPENDENCE | MEM–ANGLIA–ADAMS, MEM–ANGLIA–JEFFERSON → MEM–AMERICA–* |
| MEM–ANGLIA–ADAMS | MEM–ANGLIA–JEFFERSON, MEM–ANGLIA–WASHINGTON → MEM–AMERICA–* (Washington is Batch 1) |
| MEM–ANGLIA–HIST–TOCQUEVILLE | MEM–ANGLIA–JEFFERSON, MADISON, JACKSON, FRANKLIN, GEO–MISSISSIPPI–RIVER → MEM–AMERICA–JEFFERSON, MADISON, JACKSON, FRANKLIN, GEO–MISSISSIPPI–RIVER |
| MEM–ANGLIA–GEO–GREAT–PLAINS | MEM–ANGLIA–GEO–MISSISSIPPI–RIVER → MEM–AMERICA–GEO–MISSISSIPPI–RIVER |
| MEM–AMERICA–HAMILTON (Batch 1) | In AMERICA folder after Batch 1: update CONNECTIONS entry MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON when Batch 2 is migrated. |
| MEM–ANGLIA–WAR–AMERICAN–CIVIL–VICKSBURG | MEM–ANGLIA–GEO–MISSISSIPPI–RIVER → MEM–AMERICA–GEO–MISSISSIPPI–RIVER |
| MEM–ANGLIA–FEDERAL–RESERVE | MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON |
| MEM–ANGLIA–MEXICO | MEM–ANGLIA–WAR–MEXICAN–AMERICAN → MEM–AMERICA–WAR–MEXICAN–AMERICAN |
| MEM–ANGLIA–BANK–ENGLAND | MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON |
| MEM–ANGLIA–WARBURG | MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON |
| MEM–ANGLIA–MORGAN | MEM–ANGLIA–JACKSON → MEM–AMERICA–JACKSON |

---

## 2–3. MEM–RELEVANCE–AMERICA.md — Batch 2 token swaps

Replace every occurrence:

- `MEM–ANGLIA–GEO–MISSISSIPPI–RIVER` → `MEM–AMERICA–GEO–MISSISSIPPI–RIVER`
- `MEM–ANGLIA–LINCOLN` → `MEM–AMERICA–LINCOLN`
- `MEM–ANGLIA–LAW–EMANCIPATION–PROCLAMATION` → `MEM–AMERICA–LAW–EMANCIPATION–PROCLAMATION`
- `MEM–ANGLIA–BRITISH–EMPIRE–NORTH–AMERICA` → `MEM–AMERICA–BRITISH–EMPIRE–NORTH–AMERICA`
- `MEM–ANGLIA–WAR–MEXICAN–AMERICAN` → `MEM–AMERICA–WAR–MEXICAN–AMERICAN`
- `MEM–ANGLIA–JEFFERSON` → `MEM–AMERICA–JEFFERSON`
- `MEM–ANGLIA–MADISON` → `MEM–AMERICA–MADISON`
- `MEM–ANGLIA–ADAMS` → `MEM–AMERICA–ADAMS`
- `MEM–ANGLIA–FRANKLIN` → `MEM–AMERICA–FRANKLIN`
- `MEM–ANGLIA–JACKSON` → `MEM–AMERICA–JACKSON`

---

## 2–4. CIV–STATE–AMERICA.md — Batch 2

Replace the same ten MEM–ANGLIA–* tokens with MEM–AMERICA–* throughout (e.g. GEO–MISSISSIPPI–RIVER, WAR–MEXICAN–AMERICAN, LINCOLN, JACKSON, JEFFERSON, MADISON, ADAMS, FRANKLIN, BRITISH–EMPIRE–NORTH–AMERICA, LAW–EMANCIPATION–PROCLAMATION).

---

## 2–5. CIV–SCHOLAR–AMERICA.md — Batch 2

Replace the ten Batch 2 MEM–ANGLIA–* names with MEM–AMERICA–* in ENTRY notes and any listed MEMs.

---

## 2–6. CONNECTIONS inside Batch 2 migrated MEMs

Inside each new MEM–AMERICA–* file from Batch 2, update CONNECTIONS: use MEM–AMERICA–* for any of the 20 migrated MEMs (Batch 1 + Batch 2); keep MEM–ANGLIA–* for the rest. E.g. MEM–AMERICA–ADAMS will point to MEM–AMERICA–JEFFERSON, MEM–AMERICA–WASHINGTON; MEM–AMERICA–JEFFERSON may point to MEM–AMERICA–DECLARATION–INDEPENDENCE, MEM–AMERICA–HAMILTON.

---

## 2–7. Governance / docs — Batch 2 (optional)

These reference one or more of the second batch; update only if you want governance to cite the new names:

- docs/governance/AUDIT–ANDERSON–CRUCIBLE–OF–WAR–PRESENCE.md (FRANKLIN)
- docs/governance/PROPOSAL–ANGLIA–MEM–CHURCHILL–VOL3–AGE–OF–REVOLUTION.md (WASHINGTON, JEFFERSON, ADAMS)
- docs/governance/AUDIT–ANGLIA–BANKING–MEMS–CONCEPTUAL–CULTURAL–LOGICAL.md (JACKSON, HAMILTON)
- docs/governance/UPGRADE–PLAN–ANGLIA–LIT–MEM–TEMPLATE–COMPLIANCE.md (FRANKLIN)
- docs/governance/PROPOSAL–ANGLIA–MEM–CHURCHILL–VOL4–GREAT–DEMOCRACIES.md (LINCOLN, GRANT)
- docs/governance/AUDIT–ANGLIA–AMERICAN–REVOLUTION–TANGENTIAL–2026–01–31.md (ADAMS, BRITISH–EMPIRE–NORTH–AMERICA)
- content/civilizations/ANGLIA/CIV–INDEX–ANGLIA.md (list of MEMs; remove or note migrated MEM–AMERICA–* when files move)

---

# SHARED: ORDER OF OPERATIONS & POST-MIGRATION

---

## 9. Order of operations (recommended)

**Batch 1:**  
1. Copy the ten Batch 1 files from ANGLIA to AMERICA with new names (MEM–AMERICA–*).  
2. In each new file: set `Civilization: AMERICA`, title line and footer to MEM–AMERICA–*.  
3. Update CONNECTIONS inside each Batch 1 MEM–AMERICA–* file (cross-refs among the ten → MEM–AMERICA–*).  
4. Update MEM–RELEVANCE–AMERICA.md (Batch 1 tokens).  
5. Update CIV–STATE–AMERICA.md (Batch 1 tokens).  
6. Update CIV–SCHOLAR–AMERICA.md (Batch 1 tokens).  
7. Update STATE–AMERICA–DOCTRINE–VIOLATIONS–NOTE (YORKTOWN).  
8. Update CONNECTIONS in remaining ANGLIA MEMs that point to Batch 1 (section 2).  
9. Remove the ten Batch 1 originals from ANGLIA (after verifying links).  
10. Optionally update governance/docs (section 8).

**Batch 2:**  
Repeat the same steps for the second ten: copy/move (2–1), headers, CONNECTIONS inside Batch 2 files (2–6), MEM–RELEVANCE (2–3), CIV–STATE (2–4), CIV–SCHOLAR (2–5), CONNECTIONS in ANGLIA MEMs (2–2), remove originals, optionally governance (2–7). Batch 2 can be done immediately after Batch 1 or in a separate pass.

---

## 10. Post-migration

- **MEM–RELEVANCE–AMERICA:** Ensure dimension text distinguishes MEM–AMERICA–* (America folder) from MEM–ANGLIA–* (Anglia folder) where both are listed.
- **CIV–STATE–AMERICA Source Versions / State Log:** Log migration (e.g. "Batch 1: ten MEM–ANGLIA → MEM–AMERICA; Batch 2: ten more; STATE and MEM–RELEVANCE updated").
- **CIV–SCHOLAR–AMERICA:** Constitutive ingestion can still include MEM–ANGLIA–*; primary America-specific set is MEM–AMERICA–* (20 files after both batches).
- **CIV–INDEX–ANGLIA:** If MEMs are listed there, either remove migrated entries or add a note that they now live under AMERICA as MEM–AMERICA–*.

---

End of checklist — MIGRATION–ANGLIA–TO–AMERICA–MEM–CHECKLIST.md
