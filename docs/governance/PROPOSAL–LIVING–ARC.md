# PROPOSAL–LIVING–ARC

**Status:** DRAFT · PROPOSAL  
**Version:** 1.0  
**Author:** CMC System  
**Date:** 2026-02-03  
**Governed by:** CMC 3.1  
**Dependencies:** PROPOSAL–CURRENT–EVENTS–PROTOCOL, PROPOSAL–TIERED–RETRIEVAL, PROTOCOL–MIND–NAVIGATION

---

## I. PROBLEM STATEMENT

ARC (Academic Reference Canon) files are currently **static bibliographies**:

- Manually curated at creation
- Updated only when someone remembers
- No visibility into which sources prove valuable
- No pathway for analyst sources (Mercouris, Mearsheimer transcripts) to gain authority
- No mechanism to demote sources that prove unreliable

As CEP (Current Events Protocol) and Tiered Retrieval expand the source ecosystem, ARC files must evolve to **track, evaluate, and promote sources based on demonstrated value**.

---

## II. DESIGN PRINCIPLES

### A. Simplicity Over Sophistication

The system should be **understandable and auditable**. Three tiers, clear rules, predictable behavior.

### B. Usage as Quality Signal

Sources that get cited repeatedly, across sessions, and lead to validated insights are valuable. Let usage patterns surface quality.

### C. Human Oversight for Permanence

Automatic elevation to mid-tier. Human approval required for permanent canonical status. The system proposes; humans confirm.

### D. Graceful Degradation

If automation fails, ARC files remain valid static bibliographies. No hard dependencies on tracking infrastructure.

### E. Integration, Not Replacement

Living ARC enhances existing ARC files. Core canon remains human-curated. Automation adds layers, doesn't replace foundations.

---

## III. SOURCE TIER ARCHITECTURE

### Three Tiers (Simplicity)

```
TIER 1 — CANON (Permanent)
├── Human-curated academic sources
├── Foundational works for the civilization
├── Requires explicit human elevation
└── Cannot be automatically demoted

TIER 2 — VALIDATED (Earned)
├── Sources that proved valuable through use
├── Automatic elevation from PROVISIONAL
├── Threshold: 5+ citations OR 2+ insights
└── Can be demoted if contradicted

TIER 3 — PROVISIONAL (Probationary)
├── Recently cited sources
├── Automatically added on first meaningful citation
├── Awaiting validation through reuse
└── Expires after 90 days without reuse
```

### Tier Boundaries

| Transition | Trigger | Automation |
|------------|---------|------------|
| New → PROVISIONAL | First citation in CEP or LEARN session | Automatic |
| PROVISIONAL → VALIDATED | 5+ citations OR 2+ insight credits | Automatic |
| VALIDATED → CANON | Human review + approval | Manual only |
| VALIDATED → PROVISIONAL | 2+ contradictions | Automatic (flagged) |
| PROVISIONAL → Expired | 90 days without citation | Automatic cleanup |

**Rationale:** Three tiers avoid over-engineering. The 5-citation threshold is high enough to filter noise, low enough to be achievable. Insight credits (leading to RLLs, concepts, MEM annotations) provide an alternative path for high-quality sources that may be cited less frequently.

---

## IV. SOURCE TRACKING SCHEMA

### A. Minimal Viable Tracking

Each source in the Living ARC tracks:

```yaml
source_id: ARC–RUSSIA–P023
title: "The Duran: Russia Analysis 2026-02-03"
author: Mercouris, Alexander
date: 2026-02-03
type: ANALYST_TRANSCRIPT
tier: PROVISIONAL
metrics:
  first_cited: 2026-02-03
  citation_count: 2
  sessions_referenced: 1
  insight_credits: 0
  last_cited: 2026-02-03
status: ACTIVE
notes: "Logistics coordination analysis"
```

### B. Insight Credit Types

Sources earn insight credits when they contribute to:

| Insight Type | Credit Value | Example |
|--------------|--------------|---------|
| Concept proposed | 1 | Source led to `coordination_collapse` concept |
| MEM annotation | 1 | Source informed MEM–RUSSIA–WAR–1812 note |
| RLL validation | 2 | Source provided evidence for RLL–RUSSIA–0023 |
| Pattern identified | 1 | Source surfaced cross-civ parallel |

**Two insight credits = automatic VALIDATED elevation** (even with low citation count).

---

## V. ARC FILE STRUCTURE (EVOLVED)

### Living ARC Format

```markdown
# CIV–ARC–RUSSIA — Living Bibliography

**Version:** 3.1-L (Living)  
**Last Updated:** 2026-02-03  
**Governed by:** CMC 3.1, PROPOSAL–LIVING–ARC

---

## TIER 1 — CANON (Human-Curated)

Permanent foundational sources. Manually reviewed and approved.

### Primary Sources

• **Zamoyski, Adam (2004).** *1812: Napoleon's Fatal March on Moscow.*
  - Status: CANON | Citations: 23 | MEMs: 12
  - Core for: MEM–RUSSIA–WAR–1812, MEM–RUSSIA–STRATEGIC–DEPTH

### Secondary Sources

• **Figes, Orlando (1996).** *A People's Tragedy: The Russian Revolution.*
  - Status: CANON | Citations: 45 | MEMs: 28
  - Core for: MEM–RUSSIA–REVOLUTION–1917

---

## TIER 2 — VALIDATED (Usage-Proven)

Sources that demonstrated value through repeated citation or insight generation.

• **Mercouris, A. (2025-2026).** *The Duran: Russia Analysis Series.*
  - Status: VALIDATED | Citations: 34 | Insights: 8
  - Elevated: 2026-01-15 (met citation threshold)
  - Type: ANALYST_TRANSCRIPT
  - Contributed to: coordination_collapse concept, supply_line_dynamics

---

## TIER 3 — PROVISIONAL (Probationary)

Recently cited sources awaiting validation. Expire after 90 days without reuse.

• **CEP–20260203–MERCOURIS–UKRAINE–LOGISTICS**
  - Status: PROVISIONAL | Citations: 2 | First: 2026-02-03
  - Type: ANALYST_TRANSCRIPT
  - Pending: 3 more citations for VALIDATED

• **Reuters (2026-02-01).** "Elite Departures Signal Stress in Moscow."
  - Status: PROVISIONAL | Citations: 1 | First: 2026-02-01
  - Type: NEWS_QUALITY
  - Pending: 4 more citations for VALIDATED

---

## EVOLUTION LOG

Append-only record of tier changes.

| Date | Source | Change | Trigger |
|------|--------|--------|---------|
| 2026-02-03 | CEP–20260203–MERCOURIS | Added PROVISIONAL | First CEP citation |
| 2026-01-15 | Mercouris Duran Series | PROVISIONAL → VALIDATED | 5+ citations |
| 2024-08-10 | Zamoyski 1812 | Added CANON | Manual curation |

---

## PENDING ELEVATION CANDIDATES

Sources approaching VALIDATED threshold. Human may expedite.

• CEP–20260203–MERCOURIS–UKRAINE–LOGISTICS (2/5 citations)
• Johnson, Larry. Sonar21 Blog (4/5 citations)

---

## FLAGGED SOURCES

Sources with contradictions or quality concerns.

[None currently flagged]
```

---

## VI. AUTOMATION RULES

### A. Addition Rules

```
ON first meaningful citation of new source:
  IF source not in any ARC:
    ADD source to civilization's ARC as PROVISIONAL
    SET first_cited = now
    LOG evolution event
```

**"Meaningful citation"** = Source cited in support of an analytical claim, not just mentioned in passing.

### B. Elevation Rules

```
ON citation of existing PROVISIONAL source:
  INCREMENT citation_count
  UPDATE last_cited
  
  IF citation_count >= 5:
    ELEVATE to VALIDATED
    LOG evolution event
  
ON insight credit awarded to source:
  INCREMENT insight_credits
  
  IF insight_credits >= 2 AND tier == PROVISIONAL:
    ELEVATE to VALIDATED
    LOG evolution event
```

### C. Expiration Rules

```
WEEKLY cleanup job:
  FOR each PROVISIONAL source:
    IF last_cited older than 90 days:
      MOVE to EXPIRED section (not deleted)
      LOG evolution event
```

### D. Demotion Rules (Conservative)

```
ON contradiction logged against source:
  INCREMENT contradiction_count
  ADD to FLAGGED section with explanation
  
  IF contradiction_count >= 2 AND tier == VALIDATED:
    DEMOTE to PROVISIONAL
    LOG evolution event
    NOTIFY for human review
```

**Key constraint:** CANON sources cannot be automatically demoted. Human must intervene.

---

## VII. VERBATIM CITATION INDEX

### Automatic Quote Tracking

When a verbatim quote is cited:

```yaml
verbatim_id: ARC–V048
quote: "The stopping power of water limits land power projection."
source: Mearsheimer, Tragedy of Great Power Politics, p.114
first_cited: 2024-08-15
citation_count: 28
concepts_linked: [stopping_power_of_water, geographic_constraint]
status: FOUNDATIONAL
```

### Quote Elevation

| Citation Count | Status |
|----------------|--------|
| 1-4 | ACTIVE |
| 5-14 | RECURRING |
| 15+ | FOUNDATIONAL |

FOUNDATIONAL quotes are candidates for explicit concept linkage in the Concept Index.

---

## VIII. CROSS-ARC DISCOVERY

### A. Shared Source Detection

When a source appears in multiple civilization ARCs:

```
Mercouris transcripts cited in:
├── CIV–ARC–RUSSIA (34 citations)
├── CIV–ARC–ANGLIA (12 citations)
└── CIV–ARC–GERMANIA (8 citations)

→ Flag as CROSS-CIVILIZATIONAL source
→ Consider elevation to system-wide ANALYST–CANON
```

### B. Gap Detection

```
CIV–ARC–PERSIA:
├── CANON sources: 12
├── VALIDATED sources: 3
├── PROVISIONAL sources: 2
├── CEP sources: 0
└── Gap: No recent analyst coverage

→ Flag in SCHOLAR file for attention
```

---

## IX. INTEGRATION POINTS

### A. With CEP (Current Events Protocol)

- CEP sources automatically added to ARC as PROVISIONAL
- CEP source attribution format compatible with ARC tracking
- Backward illumination insights credit source

### B. With Tiered Retrieval

- Web fallback sources that prove useful → add to ARC
- MEM-first search includes ARC verbatim quotes
- Gap identification informs ARC gap detection

### C. With Concept Index

- FOUNDATIONAL verbatim quotes linked to concepts
- Source insight credits include concept proposals
- Cross-civ shared sources may indicate shared concepts

### D. With SCHOLAR Files

- SCHOLAR files reference ARC for civilization coverage
- Gap detection surfaces in SCHOLAR audit
- Pending elevation candidates visible to SCHOLAR

### E. With MIND-Navigation (PROTOCOL–MIND–NAVIGATION)

When a MIND is active, source selection from ARC is biased by MIND × Source Affinity:

| Active MIND | Favored Source Types |
|-------------|---------------------|
| Mercouris (default) | ACADEMIC, PRIMARY, ANALYST_CANONICAL |
| Mearsheimer | ACADEMIC, PRIMARY |
| Barnes | PRIMARY, LEGAL, INVESTIGATIVE |

**Application:**
- When citing sources, prefer those aligned with active MIND
- When multiple sources equally relevant, rank by MIND affinity
- User can override via explicit request

**This is soft bias, not hard constraint.** All sources remain accessible.

See PROTOCOL–MIND–NAVIGATION Section III for full source affinity matrix.

---

## X. IMPLEMENTATION PATH

### Phase 1 — Schema and Manual Tracking (Immediate)

1. Update ARC file template with Living ARC format
2. Add EVOLUTION LOG section to existing ARCs
3. Begin manual tracking of CEP sources
4. Define source type taxonomy

**Complexity:** Low. No automation required.

### Phase 2 — Automated Tracking (CMC 3.2)

1. Add source metrics to cmc-console schema
2. Implement citation counting on source reference
3. Generate PENDING ELEVATION CANDIDATES automatically
4. Implement 90-day expiration check

**Complexity:** Medium. Requires cmc-console integration.

### Phase 3 — Cross-ARC Features (CMC 3.3)

1. Detect shared sources across civilizations
2. Implement gap detection
3. Generate cross-civ analyst recommendations
4. Verbatim quote indexing

**Complexity:** Medium. Requires cross-file analysis.

---

## XI. COMPLEXITY RISK MITIGATION

### A. Fail-Safe Design

If automation breaks:
- ARC files remain valid static documents
- Manual curation still works
- No data loss (append-only logs)

### B. Conservative Thresholds

- 5 citations for VALIDATED (high enough to filter noise)
- 90 days before expiration (generous probation)
- 2 contradictions before demotion (not hair-trigger)
- CANON requires human approval (no automatic permanence)

### C. Minimal Viable Tracking

Only track what matters:
- Citation count
- Insight credits
- Last cited date
- Contradiction count

No complex scoring algorithms. No machine learning. Clear, auditable rules.

### D. Opt-In Complexity

Phase 1 is fully manual. Phases 2-3 add automation only if Phase 1 proves valuable.

---

## XII. IMPACT ANALYSIS

### What Changes

| Component | Change |
|-----------|--------|
| ARC files | Add tier sections, evolution log, metrics |
| cmc-console | Add source tracking tables (Phase 2) |
| CEP | Sources auto-tracked to ARC |
| SCHOLAR files | See pending elevations, gaps |

### What Stays the Same

| Component | No Change |
|-----------|-----------|
| CANON tier | Human-curated, manually approved |
| MEM files | No ARC dependency changes |
| Voice rules | Unchanged |
| OGE | Unchanged |

### Migration Path

Existing ARC files:
1. All current sources → TIER 1 CANON (grandfather in)
2. Add empty TIER 2 and TIER 3 sections
3. Add EVOLUTION LOG (starts empty)
4. Begin tracking new citations

---

## XIII. RECOMMENDATIONS

### Implement

1. **Three-tier architecture** — Simple, auditable, extensible
2. **Usage-based elevation** — Let patterns reveal quality
3. **Human gate for CANON** — Automation proposes, humans confirm
4. **90-day expiration** — Keep PROVISIONAL clean without losing data
5. **Append-only evolution log** — Full audit trail

### Defer

1. **Complex scoring** — Avoid weighted algorithms initially
2. **Automatic CANON** — Keep human oversight for permanence
3. **Real-time tracking** — Batch processing is sufficient for Phase 1
4. **ML-based quality signals** — Start with simple rules

### Monitor

1. **Threshold effectiveness** — Is 5 citations the right number?
2. **Expiration rate** — Are valuable sources being lost?
3. **Contradiction accuracy** — Are demotions justified?
4. **Cross-civ patterns** — Which analysts are truly cross-civ?

---

## XIV. OPEN QUESTIONS

1. **Source type taxonomy** — How many types? (Academic, Analyst, News, Primary, Web)

2. **Insight credit granularity** — Should different insight types have different weights?

3. **Cross-session tracking** — How to reliably identify "same source" across sessions?

4. **Verbatim deduplication** — How to handle slightly different quotes from same passage?

5. **ARC consolidation** — Should there be a system-wide ARC for cross-civ analysts?

---

## XV. CONCLUSION

Living ARC transforms static bibliographies into **adaptive source ecosystems** that:

- Grow with system usage
- Surface quality through citation patterns
- Integrate analyst sources (Mercouris, Mearsheimer) into the canon
- Maintain human oversight for permanent decisions
- Provide full audit trail of source evolution

The design prioritizes simplicity and auditability over sophistication. Phase 1 requires no automation—only a new file format and manual tracking. Automation is added incrementally as value is demonstrated.

---

**END OF PROPOSAL — PROPOSAL–LIVING–ARC v1.0**
