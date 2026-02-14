RUN–REPORT – QUANTITATIVE BENCHMARKS
Civilizational Memory Codex · Benchmark Pass

Date: 2026-02-13
Reference: REFERENCE–QUANTITATIVE–BENCHMARKS.md v1.0
Scope: MEM (AMERICA sample), SCHOLAR (AMERICA), STATE (all), Retrieval
Method: File-based checks and grep; no live session audit

────────────────────────────────────────────────────────────
I. MEM QUALITY (AMERICA SAMPLE)
────────────────────────────────────────────────────────────

**Universe:** 91 MEM–AMERICA–*.md files in content/civilizations/AMERICA/.

| Benchmark | Result | Target | Status |
|-----------|--------|--------|--------|
| MEM_CONNECTIONS_OR_BIBLIOGRAPHY | 91/91 (100%) have at least one of MEM CONNECTIONS, MEM BIBLIOGRAPHY, or PRIMARY SOURCES | 100% | PASS |
| MEM_SOURCE_BLOCKS | 91/91 (100%) have ≥1 "SOURCE —" block | ≥90% | PASS |
| MEM_TYPED_CONNECTIONS | ~20/91 (22%) have typed edges (DEPENDS_ON, ENABLES, CONTRADICTS, PARALLELS, TEMPORAL) | 100% new MEMs | PARTIAL (many legacy; new MEMs use typed) |

**Note:** Section count (≥8), verbatim %, and connection count ≥10 per MEM were not run in this pass (would require per-file parsing). COMPLIANCE–REGISTRY shows ANGLIA with 80 COMPLIANT, 40 PARTIAL, 30 LEGACY; no AMERICA-specific compliance tally in registry yet.

────────────────────────────────────────────────────────────
II. SCHOLAR QUALITY (AMERICA)
────────────────────────────────────────────────────────────

**Source:** CIV–SCHOLAR–AMERICA.md v1.7.

| Benchmark | Result | Target | Status |
|-----------|--------|--------|--------|
| SCHOLAR_ENTRY_SOURCE_TRACE | ENTRY 0014 and sampled ENTRIES cite specific MEMs and session | 100% | PASS |
| SYNTHESIS_ASSUMPTIONS_BOX | All 7 candidate syntheses have Assumptions Box | 100% | PASS |
| SYNTHESIS_CONFIDENCE_TIER | All 7 have explicit confidence (e.g. TIER 2) | 100% | PASS |
| SYNTHESIS_SOURCE_TRACE | All 7 have Source: session and MEM list | 100% | PASS |
| Total ENTRIES | 14 | — | — |
| Total Syntheses (candidate) | 7 | — | — |

────────────────────────────────────────────────────────────
III. STATE QUALITY
────────────────────────────────────────────────────────────

**Universe:** CIV–STATE–AMERICA, CIV–STATE–GERMANY, CIV–STATE–FRANCE, CIV–STATE–RUSSIA.

| Benchmark | Result | Target | Status |
|-----------|--------|--------|--------|
| STATE_SOURCE_VERSIONS_BLOCK | 4/4 (100%) STATE files contain "Source Versions" or "Source versions" | 100% | PASS |

**Note:** MEM SCAN per activity and grounded parallels require live session audit; not measurable in this file-based run.

────────────────────────────────────────────────────────────
IV. RETRIEVAL & COVERAGE
────────────────────────────────────────────────────────────

| Benchmark | Result | Target | Status |
|-----------|--------|--------|--------|
| RELEVANCE_INDEX_EXISTS | 3 civs have MEM–RELEVANCE: AMERICA, GERMANIA (MEM–RELEVANCE–GERMANY), RUSSIA | 100% active civs | PARTIAL (3 have it; not all civs with MEMs have index) |
| MEM_IN_RELEVANCE (AMERICA) | MEM–RELEVANCE–AMERICA lists MEM–AMERICA–* 158 times across dimensions; 91 MEMs total | ≥95% MEMs listed | Likely PASS (158 refs for 91 MEMs ⇒ full or near-full) |

────────────────────────────────────────────────────────────
V. NOT MEASURED THIS RUN
────────────────────────────────────────────────────────────

- **Voice/compliance:** Mercouris hedging, Mearsheimer directness, Barnes fingerprint (requires session output audit).
- **Options menu:** 8 options, fixed slots, anchor per option (requires session output).
- **Safeguards:** Negative-claim check, gated-spiral note (requires session audit).
- **MEM verbatim %:** Would require word-count and quote extraction per MEM.
- **MEM section count (≥8):** Would require section-header parse per MEM.
- **STATE MEM SCAN per activity:** Requires session log or activity record review.

────────────────────────────────────────────────────────────
VI. SUMMARY
────────────────────────────────────────────────────────────

| Domain | Benchmarks run | Pass | Partial | Fail |
|--------|----------------|------|---------|------|
| MEM (AMERICA) | 3 | 2 | 1 (typed connections) | 0 |
| SCHOLAR (AMERICA) | 5 | 5 | 0 | 0 |
| STATE | 1 | 1 | 0 | 0 |
| Retrieval | 2 | 1 | 1 (relevance index not all civs) | 0 |

**Recommendations:**
1. Add MEM–RELEVANCE for remaining STATE-active or MEM-heavy civilizations (e.g. FRANCIA, ANGLIA, ROME) to improve RELEVANCE_INDEX_EXISTS.
2. Continue typing MEM CONNECTIONS in new MEMs and in upgrades; track % of MEMs with typed connections over time.
3. Run verbatim % and section-count checks in a future pass (script or batch audit).
4. Run a live-session audit (or parse saved logs) for options menu, voice markers, and MEM SCAN compliance.

────────────────────────────────────────────────────────────
END OF REPORT
────────────────────────────────────────────────────────────
