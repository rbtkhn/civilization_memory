# Russia MEM Connections Remediation Plan

**Date:** 2026-02-16  
**Status:** Implemented  
**Scope:** Russia MEM corpus — broken connection references  
**Implementation:** ~80 edits across 60+ MEM files, CIV–SCHOLAR–RUSSIA, CIV–STATE–RUSSIA  
**Source:** CIV–INDEX–RUSSIA v3.10 (authoritative file register)

---

## I. Problem

Many MEM CONNECTIONS sections reference MEM IDs that do not match existing files in `content/civilizations/RUSSIA/`. Broken references fall into:

1. **Naming mismatches** — Wrong name for an existing MEM (e.g. ORTHODOXY vs ORTHODOX–CHRISTIANITY)
2. **Segment gaps** — Short form missing a segment (e.g. WAR–BORODINO vs WAR–NAPOLEON–BORODINO)
3. **Non-existent targets** — Referenced MEMs that were never created (e.g. WITTE, REVOLUTION–1905)

---

## II. Remediation Strategy

| Strategy | Action | When |
|----------|--------|------|
| **Replace** | Fix name to match CIV–INDEX | Typo or naming convention mismatch |
| **Substitute** | Replace with closest thematic existing MEM | No direct match; semantic overlap |
| **Remove** | Delete connection line | No suitable substitute; preserves accuracy |

---

## III. Replacement Map

### A. Simple name corrections (replace)

| Broken reference | Replace with | Notes |
|------------------|--------------|-------|
| MEM–RUSSIA–GEO–DNIEPER | MEM–RUSSIA–GEO–DNEIPER–RIVER | Transliteration; INDEX uses DNEIPER |
| MEM–RUSSIA–GEO–VOLGA | MEM–RUSSIA–GEO–VOLGA–RIVER | Standalone VOLGA → VOLGA–RIVER |
| MEM–RUSSIA–ORTHODOX–CHURCH | MEM–RUSSIA–ORTHODOX–CHRISTIANITY | Canonical religion MEM |
| MEM–RUSSIA–SERFDOM | MEM–RUSSIA–LAW–SERFDOM | Law prefix |
| MEM–RUSSIA–ORTHODOXY | MEM–RUSSIA–ORTHODOX–CHRISTIANITY | Same as above |
| MEM–RUSSIA–WAR–BORODINO | MEM–RUSSIA–WAR–NAPOLEON–BORODINO | Full battle name |
| MEM–RUSSIA–WAR–AUSTERLITZ | MEM–RUSSIA–WAR–NAPOLEON–AUSTERLITZ | Full battle name |
| MEM–RUSSIA–WAR–CRIMEA | MEM–RUSSIA–WAR–CRIMEAN | Canonical war name |
| MEM–RUSSIA–CRIMEAN–WAR | MEM–RUSSIA–WAR–CRIMEAN | Same |
| MEM–RUSSIA–NIKON–SCHISM | MEM–RUSSIA–HIST–NIKON–CHRONICLE | Closest; Nikon period |
| MEM–RUSSIA–ZEMSTVO | MEM–RUSSIA–LAW–ZEMSTVO | Law prefix |
| MEM–RUSSIA–EMANCIPATION | MEM–RUSSIA–LAW–EMANCIPATION | Law prefix |
| MEM–RUSSIA–BOLSHEVIK | MEM–RUSSIA–BOLSHEVIK–REVOLUTION | Full name |
| MEM–RUSSIA–GEO–MOSCOW–RIVER | MEM–RUSSIA–GEO–MOSKVA–RIVER | Canonical spelling |
| MEM–RUSSIA–GEO–VOLGA–REGION | MEM–RUSSIA–GEO–VOLGA–RIVER | No VOLGA–REGION; river is proxy |
| MEM–RUSSIA–TIME–OF–TROUBLES | MEM–RUSSIA–TIME–TROUBLES | Hyphenation |
| MEM–RUSSIA–GEO–MOSCOW–KREMLIN | MEM–RUSSIA–MOSCOW–KREMLIN | No GEO prefix in INDEX |

### B. Substitute with closest thematic MEM (non-existent target)

| Broken reference | Replace with | Rationale |
|------------------|--------------|-----------|
| MEM–RUSSIA–REVOLUTION–1905 | MEM–RUSSIA–WAR–RUSSO–JAPANESE | 1905 revolution triggered by defeat |
| MEM–RUSSIA–REVOLUTION–1917 | MEM–RUSSIA–BOLSHEVIK–REVOLUTION | Covers 1917 revolution |
| MEM–RUSSIA–WITTE | MEM–RUSSIA–TRANS–SIBERIAN–RAILWAY | Witte championed railway; Nicholas II period |
| MEM–RUSSIA–STOLYPIN | MEM–RUSSIA–LAW–EMANCIPATION | Agrarian reform continuity |
| MEM–RUSSIA–DUMA | MEM–RUSSIA–LAW–ZEMSTVO | Representative institutions |
| MEM–RUSSIA–WORLD–WAR–I | MEM–RUSSIA–WAR–RUSSO–JAPANESE | Prior military-fiscal stress |
| MEM–RUSSIA–GEO–ST–PETERSBURG | MEM–RUSSIA–PETERSBURG | City MEM |
| MEM–RUSSIA–GEO–EKATERINBURG | MEM–RUSSIA–GEO–URALS | Ekaterinburg in Urals |
| MEM–RUSSIA–SOVIET–STATE | MEM–RUSSIA–SOVIET–UNION | Canonical Soviet MEM |
| MEM–RUSSIA–GEO–NOVGOROD–REGION | MEM–RUSSIA–NOVGOROD | City/region MEM |
| MEM–RUSSIA–GEO–MOSCOW | MEM–RUSSIA–MOSCOW | City MEM |
| MEM–RUSSIA–GEO–CENTRAL–RUSSIA | MEM–RUSSIA–MOSCOW | Heartland proxy |
| MEM–RUSSIA–GEO–GATCHINA | MEM–RUSSIA–ROMANOV–PAUL–I | Paul's retreat; same MEM context |
| MEM–RUSSIA–GEO–LEFT–BANK–UKRAINE | MEM–RUSSIA–UKRAINE | Regional MEM |
| MEM–RUSSIA–CIVIL–WAR | MEM–RUSSIA–BOLSHEVIK–REVOLUTION | Consolidation phase |
| MEM–RUSSIA–MONGOL | MEM–RUSSIA–MONGOL–EMPIRE | Full name |
| MEM–RUSSIA–MONGOL–INVASION | MEM–RUSSIA–WAR–MONGOLS–KIEV | Invasion event |
| MEM–RUSSIA–1941 | MEM–RUSSIA–WAR–GREAT–PATRIOTIC–OPERATION–BARBAROSSA | 1941 campaign |
| MEM–RUSSIA–1941–CATASTROPHE | MEM–RUSSIA–WAR–GREAT–PATRIOTIC–OPERATION–BARBAROSSA | Same |
| MEM–RUSSIA–1917 | MEM–RUSSIA–BOLSHEVIK–REVOLUTION | Same |
| MEM–RUSSIA–GEO–CENTRAL–EUROPE | MEM–RUSSIA–WAR–GREAT–PATRIOTIC–BERLIN | Operational context |

### C. Governance files (separate handling)

CIV–SCHOLAR–RUSSIA, MEM–RELEVANCE–RUSSIA, CIV–STATE–RUSSIA, CIV–ARC–RUSSIA–LEDGER, ARC–RUSSIA–DECISION–POINTS contain MEM references in RLL derivations, dimension listings, and narrative. Apply same replacement map where references appear in derivation/binding/related-MEMs context. For MONGOL–YOKE, WWII–SIEGE–LENINGRAD in CIV–STATE–RUSSIA: MONGOL–YOKE → MONGOL–EMPIRE or GOLDEN–HORDE; WWII–SIEGE–LENINGRAD → WAR–GREAT–PATRIOTIC–LENINGRAD.

---

## IV. Implementation Summary

- **MEM files edited:** Per-file search-replace using map above
- **SCHOLAR/RELEVANCE/STATE/ARC:** Same map applied to relevant sections
- **Verification:** `rg "MEM–RUSSIA–" content/civilizations/RUSSIA/*.md` cross-checked against CIV–INDEX
- **Constraint:** Each MEM retains ≥10 same-civ and ≥2 GEO connections where required by template

### D. Additional replacements (found during implementation)

| Broken reference | Replace with |
|------------------|--------------|
| MEM–RUSSIA–NAVY | MEM–RUSSIA–SEVASTOPOL or MEM–RUSSIA–GEO–BALTIC–SEA (context-dependent) |
| MEM–RUSSIA–WAR–POLTAVA | MEM–RUSSIA–WAR–GREAT–NORTHERN–POLTAVA |
| MEM–RUSSIA–STRELTSY | MEM–RUSSIA–TIME–TROUBLES |
| MEM–RUSSIA–SUCCESSION–CRISIS | MEM–RUSSIA–WAR–MUSCOVITE–SUCCESSION |

**Note:** MEM–RUSSIA–BOYAR–DUMA, GALICH, TRINITY–MONASTERY, and cross-civ MEM–STEPPE–*, MEM–EURASIA–* remain as candidate MEM generation targets; not fixed in this pass.

---

## V. Post-implementation

Run final grep to confirm no MEM–RUSSIA–* connection references a non-existent file. Add connection-audit runbook to governance if recurring.

---

**Reference:** CIV–INDEX–RUSSIA v3.10; CIV–MEM–TEMPLATE Section X (MEM CONNECTIONS)
