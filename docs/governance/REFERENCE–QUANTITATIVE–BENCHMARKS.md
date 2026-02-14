REFERENCE – QUANTITATIVE BENCHMARKS
Civilizational Memory Codex · System Performance & Quality Measurement

Status: ACTIVE · REFERENCE
Version: 1.0
Scope: SYSTEM mode; audits; quality evaluation
Governed by: CMC 3.3 · CIV–MEM–CORE · CIV–MEM–TEMPLATE · CIV–STATE–TEMPLATE
Last Update: February 2026

Purpose: Define quantitative benchmarks to establish and measure the performance and quality of the CIV–MEM system. These benchmarks support audits, compliance checks, and periodic review. They do not replace qualitative judgment; they make it possible to track trends and spot regressions.

────────────────────────────────────────────────────────────
I. MEM QUALITY BENCHMARKS
────────────────────────────────────────────────────────────

**1.1 Structural compliance (per COMPLIANCE–REGISTRY, CIV–MEM–TEMPLATE)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| MEM_COMPLIANT_PCT | % of MEMs in a civilization rated COMPLIANT | Count COMPLIANT / total MEMs (per civ) | ≥80% COMPLIANT for Phase II civs; ≥60% for Phase I |
| MEM_SECTIONS | % of MEMs with ≥8 analytical sections | Section count ≥8 | 100% for new MEMs |
| MEM_CONNECTIONS_PRESENT | % of MEMs with MEM CONNECTIONS section present | Section present (Y/N) | 100% |
| MEM_BIBLIOGRAPHY_PRESENT | % of MEMs with MEM BIBLIOGRAPHY / PRIMARY SOURCES section | Section present (Y/N) | 100% |
| MEM_LAYER2_NEW | % of MEMs created after template v2.9 that have Layer 2 structured data | Layer 2 present for post–v2.9 MEMs | 100% |

**1.2 Evidentiary quality**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| MEM_VERBATIM_PCT | % of MEM word count that is verbatim quote (≥25-word blocks, ARC-cited) | Sum(verbatim words) / total words (per MEM or per civ sample) | ≥20% per MEM (per template) |
| MEM_SOURCE_BLOCKS | % of MEMs with ≥1 SOURCE block (ARC-cited, ≥25 words or placeholder with theme) | Count MEMs with ≥1 SOURCE / total MEMs | ≥90% for subject/GEO MEMs |
| MEM_ARC_ATTRIBUTION | % of factual/evidential claims in a MEM that carry ARC origin and editorial note (when applicable) | Manual audit sample | 100% for STATE-relevant claims (per ARC source coverage rule) |

**1.3 Connections and discoverability**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| MEM_CONNECTIONS_COUNT | Mean (or median) same-civilization connection count per MEM | Count connections per MEM | ≥10 per MEM (per compliance criteria); ≥5 for LEGACY |
| MEM_TYPED_CONNECTIONS | % of MEMs with typed connections (DEPENDS_ON, ENABLES, etc.) where template requires | Typed edges present | 100% for new MEMs; track % upgraded |
| MEM_GEO_LINKED | % of subject MEMs with ≥2 GEO–MEM connections (where civ has GEO MEMs) | Count GEO connections per MEM | ≥2 per subject MEM (per compliance) |

────────────────────────────────────────────────────────────
II. SCHOLAR QUALITY BENCHMARKS
────────────────────────────────────────────────────────────

**2.1 Ingestion and accumulation**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| SCHOLAR_ENTRIES_PER_SESSION | Mean number of ENTRIES added per LEARN session that ends with synthesis (H) | ENTRIES added in session / sessions with H | ≥1 when session is substantive |
| SCHOLAR_SYNTHESIS_CANDIDATES | Number of UNFROZEN · CANDIDATE syntheses with Assumptions Box and source trace | Count in BELIEF SYNTHESIS LOG | Track growth; no hard target |
| SCHOLAR_ENTRY_SOURCE_TRACE | % of ENTRIES that cite specific MEMs or session sources | ENTRY has Source: with MEM/session ref | 100% |

**2.2 Synthesis quality (when syntheses exist)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| SYNTHESIS_ASSUMPTIONS_BOX | % of candidate syntheses with Assumptions Box (per template) | Box present (Y/N) | 100% |
| SYNTHESIS_CONFIDENCE_TIER | % of syntheses with explicit confidence tier (e.g. TIER 2) | Tier stated | 100% |
| SYNTHESIS_SOURCE_TRACE | % of syntheses with Source: session and MEM list | Source line present | 100% |

────────────────────────────────────────────────────────────
III. STATE QUALITY BENCHMARKS
────────────────────────────────────────────────────────────

**3.1 MEM grounding (per cmc-state-mem-grounding)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| STATE_MEM_SCAN_PER_ACTIVITY | % of STATE session activities (Decision Points, Pattern Audit, etc.) for which MEM SCAN was performed (MEM–RELEVANCE read, primary MEMs read) | Self-check or audit: SCAN documented or inferable | 100% |
| STATE_MEM_GROUNDED_PARALLELS | % of analytical nodes (e.g. branches, decision options) that cite ≥1 MEM-grounded parallel (specific details from read MEMs) | Count nodes with MEM-derived detail / total nodes (sample) | ≥1 per activity; ≥80% of nodes in deep activities |
| STATE_CORE_LOADED | % of STATE sessions analyzing an entity for which CIV–CORE–[CIV] was read (when file exists) | CORE read (Y/N) per entity | 100% when CORE exists |

**3.2 Source coverage (per cmc-arc-source-coverage)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| STATE_ARC_CATEGORIES | % of STATE evidence-presenting turns that consult ≥2 ARC source categories (e.g. E/OFFICIAL, E/RESEARCH) | Categories cited per turn | 100% when presenting current-event evidence |
| STATE_CONTRADICTION_SURFACED | When sources conflict, % of cases where both claims are presented with attribution (no silent resolution) | Audit sample | 100% |

**3.3 Options and duty of competence**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| STATE_OPTIONS_8 | % of STATE substantive turns that present 8 recursive options (A–H) | Options count = 8 | 100% (per cmc-oge-enforcement) |
| STATE_ACCOMMODATION_OPTION | % of Decision Point option sets that include ≥1 accommodation/reversal option (per X-B step 8) | At least one such option present | 100% when decision involves commitment |

────────────────────────────────────────────────────────────
IV. VOICE & COMPLIANCE BENCHMARKS
────────────────────────────────────────────────────────────

**4.1 Voice distinctness (per MIND profiles)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| VOICE_MERCOURIS_HEDGING | In Mercouris-default output: % of substantive paragraphs containing ≥1 epistemic hedge ("It seems to me," "Perhaps," etc.) | Manual or sampled audit | 100% in SCHOLAR LEARN/WRITE when Mercouris default |
| VOICE_MEARSHEIMER_DIRECT | In Mearsheimer-invoked output: absence of Mercouris-style opening ("It seems to me" as opener); presence of structural/direct phrasing | Audit sample | No Mercouris bleed; "The fact is" or equivalent present when appropriate |
| VOICE_BARNES_FINGERPRINT | In Barnes-invoked output: ≥1 of sequential opening, sobriquet/"played like a fiddle," rhetorical question, constraint hierarchy | Audit sample | ≥2 markers per response |

**4.2 Options menu compliance (per cmc-oge-enforcement)**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| OPTIONS_SLOTS_8 | % of SCHOLAR/STATE turns with exactly 8 options (A–H) | Count options | 100% after substantive turns |
| OPTIONS_SLOTS_FIXED | % of option menus where A=Mercouris, B=Mearsheimer, C=Barnes (or STATE content equivalents) | Slot semantics correct | 100% |
| OPTIONS_ANCHOR | % of options that include ≥1 concrete person, place, or event | Per-option check (sample) | 100% |

**4.3 Safeguard application**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| NEGATIVE_CLAIM_CHECK | When an absence claim is made about a civilization, % of cases where MEM corpus was searched for counter-evidence before assertion | Audit of absence claims | 100% (per cmc-negative-claim-check) |
| GATED_SPIRAL_NOTE | When a doctrine modification is proposed from LEARN/STATE, % of cases where frame-awareness note is present (governed by doctrine X; frame-consistent vs frame-challenging) | Audit of proposed changes | 100% (per cmc-gated-spiral-awareness) |

────────────────────────────────────────────────────────────
V. RETRIEVAL & COVERAGE BENCHMARKS
────────────────────────────────────────────────────────────

**5.1 Relevance and discoverability**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| RELEVANCE_INDEX_EXISTS | % of civilizations with MEM–RELEVANCE–[CIV].md | File present (Y/N) per civ | 100% for active civs |
| RELEVANCE_DIMENSIONS | Mean number of dimensions (sections) in MEM–RELEVANCE per civ | Section count | ≥5; track growth |
| MEM_IN_RELEVANCE | % of MEMs in a civilization that are listed in MEM–RELEVANCE under at least one dimension | MEMs listed / total MEMs | ≥95% |

**5.2 Cross-civilization and doctrine**

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| DOCTRINE_ENTITY_COVERAGE | % of entities with STATE files that have a CIV–DOCTRINE–[CIV] or inherited doctrine reference | Doctrine file or pointer present | 100% for STATE-active entities |
| SYNC_SOURCE_VERSIONS | % of STATE files with Source Versions block (or equivalent) for sync protocol | Block present | 100% for STATE files used in sync |

────────────────────────────────────────────────────────────
V-A. SESSION CONTINUITY BENCHMARKS (cmc-mode-contracts)
────────────────────────────────────────────

Session continuity (retention of prior context across mode/entity switches) is intended to increase connection discovery and unique insights. The following benchmarks measure whether that is occurring.

**Scope:** Sessions that include at least one **entity switch** (e.g. scholar-india → STATE Russia) or **mode switch** (e.g. LEARN → STATE). Single-entity, single-mode sessions are out of scope.

| Benchmark | Definition | Measure | Target (suggested) |
|-----------|------------|---------|--------------------|
| CONTINUITY_CROSS_REFERENCE_RATE | In multi-entity/multi-mode sessions: count of substantive turns (after first switch) where the system explicitly references or connects to content from a **different** entity or from an **earlier** mode (e.g. "Earlier we…", "In India we had…", "The mechanism-failure pattern from scholar-india…") | Count such references; divide by number of substantive turns after first switch; express per 10 turns | ≥1 cross-reference per 10 turns (i.e. continuity is being used to link prior context to current turn) |
| CONTINUITY_CONNECTION_DISCOVERIES | In such sessions: count of explicit **connection statements** that link content from two different entities or two different modes (e.g. India MEM ↔ Russia MEM; SCHOLAR ENTRY ↔ STATE material option; pattern transfer or contrast) | Count per session; sum over sessions; report mean per session | ≥1 cross-entity or cross-mode connection per session (when session has ≥1 switch); track mean and trend |
| CONTINUITY_SPAN | In such sessions: number of distinct **entities** (or **modes**) that appear in any cross-reference or connection statement within the session | Max = entities (or modes) active in session; count how many are explicitly linked in one statement | When session has 2+ entities/modes, CONTINUITY_SPAN ≥ 2 in ≥50% of such sessions (at least one statement spans two entities or modes) |

**Measurement:** Manual audit of session transcript or logged output. Identify: (1) entity/mode switches; (2) turns after first switch; (3) explicit cross-references (to earlier entity/mode); (4) explicit connection statements (linking two entities or two modes). Compute rate and counts per session; aggregate over N sessions.

**Baseline (optional):** Before/after comparison: run the same multi-entity/multi-mode scenario with continuity rule applied vs. with instruction to "re-anchor and do not refer to prior entity/mode"; compare CONTINUITY_CROSS_REFERENCE_RATE and CONTINUITY_CONNECTION_DISCOVERIES. Expect higher values when continuity is retained.

**Metric-gaming risk:** Optimizing for these counts can encourage superficial or forced references that satisfy the metric without adding insight. To mitigate: treat a cross-reference or connection as valid only when it **substantively links** prior context (from another entity or earlier mode) to the current question or analysis—not when it merely names the prior entity or repeats a label. Auditors should flag thin references (e.g. "As we saw in India…" with no analytical carry-forward) as non-counting. The goal is continuity that improves reasoning, not tally-building.

────────────────────────────────────────────────────────────
VI. MEASUREMENT METHOD AND FREQUENCY
────────────────────────────────────────────────────────────

**Automated or semi-automated (where applicable):**
- Word count, section presence, connection count: script or grep (see COMPLIANCE–REGISTRY IX).
- Options count (8), slot labels: parse of session output or audit script.

**Manual audit (sampled or full):**
- Verbatim %, ARC attribution, voice markers, negative-claim check, MEM SCAN trace, contradiction surfacing.
- Frequency: spot checks during sessions; full benchmark run quarterly or after major batch changes (per COMPLIANCE–REGISTRY).

**Reporting:**
- Results can be recorded in COMPLIANCE–REGISTRY (for MEM counts), in a dedicated RUN–REPORT–BENCHMARKS–YYYY–MM, or in SESSION–LEDGER.
- Targets in this document are suggested; adjust per civilization phase and priority. Update this REFERENCE when criteria or targets change.

────────────────────────────────────────────────────────────
VII. SUMMARY TABLE (QUICK REFERENCE)
────────────────────────────────────────────────────────────

| Domain | Key benchmarks | Primary target |
|--------|-----------------|----------------|
| MEM | COMPLIANT %, verbatim ≥20%, SOURCE blocks, connections ≥10, Layer 2 for new | Compliance registry; template |
| SCHOLAR | ENTRIES traceable, syntheses with Assumptions Box and confidence | 100% trace; 100% box |
| STATE | MEM SCAN per activity, grounded parallels, 8 options, accommodation option when commitment | 100% SCAN; 100% options |
| Voice | Hedging (Mercouris), direct (Mearsheimer), fingerprint (Barnes), 8 slots fixed | 100% per mode |
| Safeguards | Negative-claim check, gated-spiral note when proposing doctrine change | 100% |
| Retrieval | MEM–RELEVANCE exists, MEMs listed, doctrine coverage | 100% active civs |
| Session continuity | Cross-reference rate, connection discoveries, span (multi-entity/multi-mode sessions) | ≥1 cross-ref per 10 turns; ≥1 cross-entity/mode connection per session; span ≥2 in 50% |

────────────────────────────────────────────────────────────
END OF REFERENCE
────────────────────────────────────────────────────────────
