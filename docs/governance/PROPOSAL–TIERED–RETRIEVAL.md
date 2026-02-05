PROPOSAL–TIERED–RETRIEVAL — v1.0
Civilizational Memory Codex · Structural Improvement Proposal
MEM-First Search with Web Fallback Infrastructure

Status: DRAFT · PROPOSAL
Author: System Analysis
Date: February 2026

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
The system lacks a formal retrieval hierarchy.

CURRENT STATE:
• 1,000+ MEMs with concept tags, typed connections
• No defined search priority
• Web search available but not integrated with MEM search
• User must manually decide where to look

CONSEQUENCES:
• MEM knowledge underutilized (user may web search first)
• Web results lack MEM framing (not MIND-analyzed)
• No distinction between curated vs raw information
• Gaps in MEM corpus not systematically identified

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Implement TIERED RETRIEVAL: MEM-first search with web fallback.

A) RETRIEVAL HIERARCHY

| Tier | Source | Quality | Framing |
|------|--------|---------|---------|
| 1 | MEM files | Curated, ARC-cited | MIND-analyzed, concept-tagged |
| 2 | Web search | Variable, raw | Requires framing |

ALWAYS search Tier 1 first. Fallback to Tier 2 only when Tier 1
yields insufficient results.

B) WHY MEM-FIRST

1. QUALITY — MEMs are curated, reviewed, analytically coherent
2. FRAMING — Already encoded with MIND lenses (Mercouris/Mearsheimer/Barnes)
3. CONNECTIONS — Typed edges enable traversal to related knowledge
4. CONCEPTS — Semantic tags enable pattern matching
5. TRUST — Known provenance, ARC citations, governance compliance
6. CONSISTENCY — Same analytical vocabulary across corpus

Web search gives raw information; MEMs give pre-framed knowledge.

C) WHEN TO FALLBACK

Trigger web fallback when MEM search yields:
• Zero results
• Results with low relevance score
• Results that don't address query specifics
• User explicitly requests broader search

────────────────────────────────────────────────────────────
III. MEM SEARCH MECHANISMS
────────────────────────────────────────────────────────────

A) CONCEPT INDEX SEARCH

Query concept taxonomy for matching patterns:

```
Query: "How did empires handle legitimacy crises?"

Concept Search:
• legitimacy_rupture → 4 MEMs
• legitimacy_through_suffering → 8 MEMs
• legitimacy_through_continuity → 6 MEMs

Result: 18 MEMs with legitimacy concepts
```

B) TYPED CONNECTION TRAVERSAL

Follow connection edges from known MEMs:

```
Starting: MEM–RUSSIA–PETER–GREAT

DEPENDS_ON → MEM–RUSSIA–IVAN–IV (coercive apparatus)
ENABLES → MEM–RUSSIA–CATHERINE–GREAT (consolidation)
PARALLELS → MEM–FRANCIA–LOUIS–XIV (state-building)

Result: Related MEMs via typed edges
```

C) SEMANTIC SIMILARITY

Match query meaning against MEM content:

```
Query: "What happens when elites abandon a regime?"

Semantic Match:
• MEM–RUSSIA–WAR–1917 (elite defection from Tsar)
• MEM–INDIA–WAR–CLIVE (Plassey defection mechanics)
• MEM–ROME–FALL (Gothic federate defection)

Result: MEMs with similar themes
```

D) COMBINED SEARCH

For best results, combine all three:

```
Query: "Logistics failures in Russian military history"

1. Concept: supply_exhaustion, corridor_control → 5 MEMs
2. Connection: From known war MEMs, follow edges → 3 more
3. Semantic: "logistics" + "failure" + "Russia" → 2 more

Combined Result: 10 relevant MEMs, ranked by relevance
```

────────────────────────────────────────────────────────────
IV. GOOD FIT CRITERIA
────────────────────────────────────────────────────────────
Determine whether MEM results are sufficient:

| Criterion | Threshold | Example |
|-----------|-----------|---------|
| Result count | ≥1 relevant MEM | At least one MEM addresses query |
| Concept match | ≥1 concept overlap | Query concepts present in MEMs |
| Specificity match | Query ≤ MEM detail | MEM covers query scope |
| Temporal coverage | Era addressed | Query period exists in corpus |
| Civilization coverage | Civ addressed | Query civ exists in corpus |

GOOD FIT: ≥3 criteria met → Use MEM results
MARGINAL FIT: 1-2 criteria met → Use MEMs + note gaps
NO FIT: 0 criteria met → Web fallback

────────────────────────────────────────────────────────────
V. WEB FALLBACK PROTOCOL
────────────────────────────────────────────────────────────

A) TRIGGER CONDITIONS

Web fallback activates when:
• MEM search returns zero results
• MEM results score below relevance threshold
• Query addresses topic outside corpus coverage
• Query requires current/recent information
• User explicitly requests web search

B) WEB SEARCH EXECUTION

```
MEM Search: "Myanmar coup defection patterns"
Result: No MEMs (Myanmar not in corpus)

Web Fallback:
• Search: "Myanmar 2021 coup elite defection"
• Return: News articles, analysis pieces
• Attribution: [Web source: Reuters, 2021-02-01]
```

C) WEB RESULT HANDLING

Web results are:
• Clearly attributed (source, date)
• Marked as non-MEM ("Web source, not MEM-encoded")
• Available for analysis but not treated as curated
• Candidates for future MEM creation if valuable

────────────────────────────────────────────────────────────
VI. ATTRIBUTION REQUIREMENTS
────────────────────────────────────────────────────────────
ALWAYS distinguish source tier in responses:

FROM MEM CORPUS:
```
"MEM–RUSSIA–WAR–NAPOLEON–1812 documents logistics failure through
the supply_exhaustion pattern. The corridor from Vilna to Moscow
exceeded sustainable supply distance (ARC: Zamoyski 2004)..."
```

FROM WEB (Fallback):
```
"[Web source: Foreign Affairs, 2024] Analysis suggests that
modern logistics failures share similar patterns...
(Note: Not MEM-encoded; treat as provisional)"
```

MIXED SOURCES:
```
"The defection_incentive pattern (MEM–INDIA–WAR–CLIVE) appears
to manifest in contemporary events [Web source: Reuters, 2026].
Historical mechanism: first defector gains most; current case
shows similar dynamics..."
```

────────────────────────────────────────────────────────────
VII. MODE-SPECIFIC GUIDANCE
────────────────────────────────────────────────────────────

A) LEARN MODE

Primary use: Explore patterns, extract RLLs, build understanding

MEM-First Value:
• Learn from curated, MIND-framed content
• Concept index enables pattern discovery
• Typed connections enable traversal

Web Fallback Value:
• Fill knowledge gaps
• Current events context
• Test patterns against contemporary cases

```
Query: "What patterns explain elite defection?"

MEM Search → RLL–RUSSIA–0023, MEM–INDIA–WAR–CLIVE
Good fit? YES → Synthesize from MEMs

Query: "Elite defection in Myanmar 2021?"

MEM Search → No Myanmar coverage
Web Fallback → News sources on Myanmar coup
```

B) WRITE MODE

Primary use: Create/edit MEMs

MEM-First Value:
• Check existing coverage (avoid duplication)
• Identify typed connections to establish
• Find concept tags from similar MEMs
• Ensure consistency with corpus

Web Fallback Value:
• Research for new MEM content
• Verify facts, dates, figures
• Find ARC-quality sources

```
Task: Create MEM–ANGLIA–SUEZ

MEM Search → Existing: MEM–ANGLIA–EMPIRE–DECLINE
             Connections: TEMPORAL_AFTER MEM–ANGLIA–WWII
             Concepts: legitimacy_rupture, offshore_balancing

Web Fallback → Suez crisis details, ARC sources
```

C) IMAGINE MODE

Primary use: Scenario exploration, counterfactuals

MEM-First Value:
• Ground scenarios in historical patterns
• Find precedents for hypotheticals
• Constraint discovery from past cases

Web Fallback Value:
• Current context for scenarios
• Real-world constraints
• Contemporary parallels

```
Scenario: "What if Peter pursued Baltic access diplomatically?"

MEM Search → MEM–RUSSIA–PETER–GREAT (actual approach)
             corridor_control concept
             
Web Fallback → Current Baltic geopolitics
```

────────────────────────────────────────────────────────────
VIII. GAP IDENTIFICATION
────────────────────────────────────────────────────────────
Web fallback reveals corpus gaps.

TRACKING GAPS:

When web fallback activates, log:
• Query that triggered fallback
• Topic/civilization not covered
• Frequency of gap queries

GAP REGISTRY (Optional SCHOLAR section):

```
────────────────────────────────────────────────────────────
CORPUS GAP REGISTRY
────────────────────────────────────────────────────────────
Identified Gaps:
• Myanmar (queried 3x, no MEMs)
• Korean War (queried 2x, partial coverage)
• Suez Crisis (queried 4x, no dedicated MEM)

Priority for MEM Creation:
1. Suez Crisis (high query frequency, ANGLIA gap)
2. Myanmar (emerging relevance)
```

────────────────────────────────────────────────────────────
IX. INTEGRATION WITH OTHER PROTOCOLS
────────────────────────────────────────────────────────────

A) CEP (Current Events Protocol)

CEP uses tiered retrieval:
• MEM search for historical parallels
• Web search for current event details
• Bridge: current → historical (backward illumination)

B) OGE (Option Generation Engine)

OGE options informed by retrieval:
• E/F/G options reference MEMs found via search
• "No MEM coverage" can trigger web-informed option

C) CONCEPT INDEX

Concept index is primary MEM search mechanism:
• Query concepts → find tagged MEMs
• Gap identification: concepts with few MEMs

────────────────────────────────────────────────────────────
X. IMPLEMENTATION
────────────────────────────────────────────────────────────

PHASE 1 — Protocol Definition
• Add tiered retrieval to CIV–SCHOLAR–PROTOCOL
• Define good fit criteria
• Define attribution requirements

PHASE 2 — Search Integration
• Concept index search (already exists)
• Typed connection traversal (already exists)
• Semantic similarity (may need enhancement)
• Combined ranking algorithm

PHASE 3 — Web Fallback
• Integration with WebSearch tool
• Attribution formatting
• Gap logging

PHASE 4 — Tooling (Optional)
• cmc-console: MEM search API
• Gap registry tracking
• Search analytics

────────────────────────────────────────────────────────────
XI. IMPACT ANALYSIS
────────────────────────────────────────────────────────────

BENEFITS:
• MEM corpus prioritized (curated knowledge first)
• Web fallback ensures coverage (no dead ends)
• Clear attribution (users know source quality)
• Gap identification (informs MEM creation priorities)
• Mode-appropriate guidance (LEARN/WRITE/IMAGINE)

COSTS:
• Search complexity (multiple mechanisms)
• Relevance scoring design
• Attribution formatting overhead

RISKS:
• Over-reliance on web fallback (MEM corpus underused)
• Poor relevance scoring (wrong tier selected)
• Web noise entering analysis

MITIGATION:
• Default to MEM-first (web requires explicit fallback)
• Relevance threshold tuning
• Clear "Web source" warnings
• Gap registry encourages MEM creation

────────────────────────────────────────────────────────────
XII. DECISION REQUIRED
────────────────────────────────────────────────────────────
Options:
A) ACCEPT — Implement tiered retrieval as proposed
B) MODIFY — Accept with changes (specify)
C) DEFER — Acknowledge value but delay implementation
D) REJECT — Maintain current ad-hoc search

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–TIERED–RETRIEVAL v1.0
────────────────────────────────────────────────────────────
