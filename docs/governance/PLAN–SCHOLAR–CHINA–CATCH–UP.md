# PLAN — Scholar-China Catch-Up to Scholar-Anglia Development Level

**Purpose:** Define a phased plan so CIV–SCHOLAR–CHINA can reach a development level comparable to CIV–SCHOLAR–ANGLIA (ledger populated, syntheses and doctrines frozen, SDI and structure extended).  
**Governed by:** CIV–SCHOLAR–CHINA v2.0, CIV–SCHOLAR–TEMPLATE v2.10, CMC–BOOTSTRAP  
**Status:** Plan (execution in LEARN/WRITE per mode contracts)  
**Last Update:** February 2026

────────────────────────────────────────────────────────────
I. DEVELOPMENT GAP (CHINA vs ANGLIA)
────────────────────────────────────────────────────────────

| Dimension | Anglia (current) | China (current) | Target for China |
|-----------|------------------|-----------------|------------------|
| **Operational state** | WRITE-LOCKED, read-only | ACCUMULATION, ingestion permitted | Accumulate then optionally lock when snapshot-ready |
| **Ingested Learning Events (§ XVI)** | 18 entries | 0 | ≥12–18 (spine + thematic) |
| **Belief Synthesis Log (§ XVII)** | 19 syntheses (several frozen) | 0 | ≥6–10 syntheses; 2–4 frozen |
| **Doctrine Registry (§ XVIII)** | 5 doctrines (v0.1–v0.5) | 0 | 2–4 doctrines with Assumptions Box, Confidence |
| **Scholar Divergence Index (§ XIX)** | 6 SDI entries | 0 | 2–4 SDI (China ↔ Anglia, China ↔ Persia, etc.) |
| **Candidate Belief / Heuristics** | Staged candidate belief; heuristic (e.g. A–HYW–01) | None | 1–2 candidate beliefs; 0–1 heuristic when pattern emerges |
| **Extended structure** | §§ XXII–XXXIV (OGE detail, Candidate Belief, MEM guidance, additive ledger, lock) | I–XXI only | Add when ledger size and content justify (post–Phase 3) |
| **OGE / recursive learning** | § XI lacks recursive-learning sentence | § XI has recursive-learning sentence | Retain; optionally add § XI.A detail block (Anglia-style) when extending structure |

China is ahead on: recursive learning explicit in § XI; CIV–CORE coupling (diagnostics). China is behind on: ledger content, syntheses, doctrines, SDI, extended sections.

────────────────────────────────────────────────────────────
II. PHASED PLAN
────────────────────────────────────────────────────────────

**Phase 1 — Systematic ingestion (populate § XVI)**  
- Ingest MEM–CHINA files in priority order (see § III).  
- For each MEM: create one **Ingested Learning Event** in § XVI with:  
  - ENTRY #### (chronological; Next Entry ID from § XXI).  
  - Source: MEM–CHINA–[name] — vX.Y  
  - Ingest Type: [label] (e.g. Survival Governance Memory, Rupture Memory, Legal Constraint Memory, War Memory, GEO Memory—align with MEM content).  
  - Primary Belief Extracted: one sentence, constraint-oriented, non-teleological.  
  - Belief Status: UNFROZEN  
- Update § XXI: Total Entries, Next Entry ID.  
- Traceability: record ingest batches in a LEARN or ingestion log (e.g. LEARN–CHINA–INGESTION–LOG or session notes) so source and date are known.

**Phase 2 — Synthesis (populate § XVII)**  
- Build syntheses from pairs or clusters of entries (e.g. ENTRY 0001–0002 → SYNTHESIS 0001).  
- Format: SYNTHESIS #### (entry refs); Outcome: one or two sentences; Status: UNFROZEN initially.  
- Constraint-oriented only; no closure-seeking synthesis (Template § V).  
- Identify 2–4 synthesis candidates for eventual freeze (Assumptions Box, Confidence tier per Template § XIV).  
- Update § XXI: Total Syntheses.

**Phase 3 — Doctrine freeze and SDI**  
- For selected syntheses: add Assumptions Box (≥3 assumptions, linchpin status), Confidence tier (Template § XIV); freeze as DOCTRINE v0.1, v0.2, … in § XVIII.  
- Create 2–4 **Scholar Divergence Index** entries in § XIX: China ↔ [other civilization] — [theme]; Result: one-line contrast (e.g. China vs Anglia legitimacy encoding, China vs Persia steppe-frontier).  
- Update § XXI: Doctrine Count, SDI Entries.  
- Doctrine mutation remains PROHIBITED except by explicit authorization (§ XX).

**Phase 4 — Optional structure extension**  
- When ledger is substantial (e.g. ≥12 entries, ≥6 syntheses, ≥2 doctrines): consider adding sections mirroring Anglia’s extended structure, **without** removing the recursive-learning sentence from § XI.  
- Optional sections (add only if content justifies):  
  - **§ XI.A or equivalent:** OGE detail block (LEARN OGE categories, requirements, POST-BARNES) — include “Recursive learning is the designed outcome of OGE in LEARN mode” here if duplicated.  
  - **Candidate Belief Staging:** 1–2 staged beliefs derived from syntheses (non-binding).  
  - **MEM Authoring Guidance:** China-specific clauses (verbatim primary-source, MEM CONNECTIONS, etc.).  
  - **Additive ledger blocks:** If future ingest outgrows § XVI/XVII, add “INGESTED LEARNING EVENTS (ADDITIVE)” and “BELIEF SYNTHESIS LOG (ADDITIVE)” with same format.  
- Optional: **Heuristic** (e.g. CHINA–HW–01) when a repeatable pattern emerges (non-doctrinal).  
- **Lock:** Only when explicitly desired (snapshot, export); plan does not require China to move to WRITE-LOCKED.

**Phase 5 — Alignment and audit**  
- Align § XIII (Context Loading) with actual usage (CIV–ARC–CHINA, CIV–CORE–CHINA; add CIV–DOCTRINE–CHINA if/when doctrine file exists).  
- Optional audit: compare CIV–SCHOLAR–CHINA to CIV–SCHOLAR–TEMPLATE v2.10 and CIV–SCHOLAR–ANGLIA for section coverage and format consistency (see AUDIT–SCHOLAR–ANGLIA–TEMPLATE–PROTOCOL–2026–01–31.md as reference).

────────────────────────────────────────────────────────────
III. MEM PRIORITIZATION (INGESTION ORDER)
────────────────────────────────────────────────────────────

**Spine (dynasty/regime continuity — supports legitimacy and succession synthesis):**  
1. MEM–CHINA–DYNASTY–SONG  
2. MEM–CHINA–DYNASTY–YUAN  
3. MEM–CHINA–WAR–SONG–YUAN  
4. MEM–CHINA–MONGOL–KUBLAI–KHAN  
5. MEM–CHINA–DYNASTY–QING  
6. MEM–CHINA–WAR–BOXER–REBELLION  
7. MEM–CHINA–ROC  
8. MEM–CHINA–PRC  

Rationale: Builds the “century of humiliation” and conquest–legitimacy chain already traced in LEARN; supports synthesis on legitimacy encoding, elite replacement, and procedural continuity vs rupture.

**Thematic cluster — Silk Road / geography / trade:**  
9. MEM–CHINA–SILK–ROAD  
10. MEM–CHINA–MARCO–POLO  
11. MEM–CHINA–MONGOL–EMPIRE–PAX–MONGOLICA  
12. MEM–CHINA–MONGOL–EMPIRE  

Rationale: Supports GEO and corridor/chokepoint synthesis; cross-civilization comparison (e.g. with Persia, Anglia).

**Thematic cluster — Mongol / conquest:**  
13. MEM–CHINA–MONGOL–GENGHIS–KHAN  
14. MEM–CHINA–WAR–MONGOL–JIN  
15. MEM–CHINA–XIONGNU (if available)

**Additional (as capacity allows):**  
16. MEM–CHINA–DYNASTY–TANG, MEM–CHINA–DYNASTY–MING (continuity spine)  
17. MEM–CHINA–GEO–* (Manchuria, Mongolia, Taiwan, Tibet, Xinjiang)  
18. MEM–CHINA–LIT–* (Kongzi, Sunzi, etc.) for legitimacy/authority grammar  
19. MEM–CHINA–ZHENGHE (maritime, procedural exit or overreach)

Order can be adjusted per LEARN sessions (e.g. user selects OGE “Trace Qing → Boxer → ROC” and ingest follows that path first).

────────────────────────────────────────────────────────────
IV. ENTRY AND SYNTHESIS FORMAT (ANGLIA-ALIGNED)
────────────────────────────────────────────────────────────

**Ingested Learning Event (§ XVI):**  
- ENTRY ####  
- Source: MEM–CHINA–[name] — vX.Y  
- Ingest Type: [Survival Governance | Rupture / Invasion | Legal Constraint | War Memory | GEO | Defeat Absorption | …]  
- Primary Belief Extracted: One sentence, constraint-oriented.  
- Belief Status: UNFROZEN  

**Synthesis (§ XVII):**  
- SYNTHESIS #### (entry refs)  
- Outcome: 1–2 sentences.  
- Status: UNFROZEN or FROZEN → DOCTRINE v0.X  
- If FROZEN: add Assumptions Box (≥3 assumptions, linchpin), Confidence tier per Template § XIV.

**Doctrine Registry (§ XVIII):**  
- DOCTRINE v0.X — “[short title]”  
- State: FROZEN [· CANONICAL if applicable]

**SDI (§ XIX):**  
- SDI ENTRY ####  
- • China ↔ [Civ] — [Theme]  
- Result: 1–2 lines contrast.

────────────────────────────────────────────────────────────
V. SUCCESS CRITERIA (CATCH-UP ACHIEVED)
────────────────────────────────────────────────────────────

- § XVI: ≥12 Ingested Learning Events (spine + at least one thematic cluster).  
- § XVII: ≥6 syntheses; ≥2 frozen as doctrines with Assumptions Box and Confidence.  
- § XVIII: ≥2 doctrines (v0.1, v0.2 minimum).  
- § XIX: ≥2 SDI entries (China vs at least one other civilization).  
- § XXI: Counts updated; Next Entry ID correct.  
- Optional: 1 candidate belief staged; 0–1 heuristic; § XI.A or additive sections if ledger size justifies.  
- Recursive-learning sentence in § XI retained.  
- No requirement to WRITE-LOCK; lock only if snapshot/export desired.

────────────────────────────────────────────────────────────
VI. MODE AND RESPONSIBILITY
────────────────────────────────────────────────────────────

- **LEARN mode:** Ingestion, pattern recognition, synthesis drafting, SDI drafting, candidate belief staging (all non-binding until freeze). OGE and recursive learning govern turn structure.  
- **WRITE mode:** Formal edits to CIV–SCHOLAR–CHINA — adding entries to § XVI, syntheses to § XVII, doctrines to § XVIII, SDI to § XIX, and any new sections. Doctrine freeze and doctrine mutation require explicit user authorization.  
- **Traceability:** Prefer recording ingestion batches and synthesis decisions in a dated log (e.g. docs/governance/LEARN–CHINA–INGESTION–LOG.md or session notes) so catch-up is auditable.

────────────────────────────────────────────────────────────
END OF PLAN
────────────────────────────────────────────────────────────
