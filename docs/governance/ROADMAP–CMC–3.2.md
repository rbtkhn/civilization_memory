# ROADMAP–CMC–3.2

**Status:** DRAFT · PLANNING  
**Version:** 1.0  
**Author:** CMC System  
**Date:** 2026-02-03  
**Governed by:** CMC 3.1

---

## I. OVERVIEW

CMC 3.2 introduces four interconnected protocols that extend the system's analytical and source management capabilities:

| Protocol | Purpose |
|----------|---------|
| **PROPOSAL–CURRENT–EVENTS–PROTOCOL (CEP)** | Bidirectional current events analysis |
| **PROPOSAL–TIERED–RETRIEVAL** | MEM-first search with web fallback |
| **PROPOSAL–LIVING–ARC** | Automatic source lifecycle management |
| **PROTOCOL–MIND–NAVIGATION** | MIND-influenced connection/source surfacing |

These protocols have **dependencies** and should be implemented in coordinated phases.

---

## II. DEPENDENCY GRAPH

```
                    ┌─────────────────────┐
                    │  MIND-Navigation    │
                    │  (analytical lens)  │
                    └──────────┬──────────┘
                               │ influences
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
    ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
    │ Tiered Retrieval│ │ Living ARC  │ │ OGE Traversal   │
    │ (search order)  │ │ (sources)   │ │ (connections)   │
    └────────┬────────┘ └──────┬──────┘ └─────────────────┘
             │                 │
             │ discovers       │ tracks
             ▼                 ▼
    ┌─────────────────────────────────────┐
    │              CEP                     │
    │  (current events → source ingestion) │
    └─────────────────────────────────────┘
```

**Key Dependencies:**
- CEP generates sources → Living ARC tracks them
- Tiered Retrieval searches MEMs → falls back to web → feeds CEP
- MIND-Navigation influences all surfacing decisions
- Living ARC source selection respects MIND affinities

---

## III. IMPLEMENTATION PHASES

### Phase 1 — Protocol Establishment (Immediate)

**Goal:** Establish protocols, enable manual operation, no automation required.

| Task | Protocol | Complexity | Deliverable |
|------|----------|------------|-------------|
| Approve PROPOSAL–CURRENT–EVENTS–PROTOCOL | CEP | LOW | Governance approval |
| Approve PROPOSAL–TIERED–RETRIEVAL | Tiered | LOW | Governance approval |
| Approve PROPOSAL–LIVING–ARC | ARC | LOW | Governance approval |
| Approve PROTOCOL–MIND–NAVIGATION | Navigation | LOW | Governance approval |
| Update ARC file template with Living ARC format | ARC | LOW | Updated template |
| Add EVOLUTION LOG section to existing ARCs | ARC | LOW | ARC file updates |
| Add NAVIGATION PREFERENCES stub to MIND files | Navigation | LOW | MIND file updates |
| Add integration references to cursor rules | All | LOW | Rule updates |
| Begin manual CEP source tracking | CEP | LOW | Process documentation |

**Phase 1 Exit Criteria:**
- All four protocols approved
- ARC files have new structure (empty tiers, evolution log)
- MIND files reference navigation protocol
- Cursor rules updated with integration points

---

### Phase 2 — Core Automation (CMC 3.2)

**Goal:** Implement automated tracking and basic integration.

| Task | Protocol | Complexity | Deliverable |
|------|----------|------------|-------------|
| Add source metrics tables to cmc-console schema | ARC | MEDIUM | Schema update |
| Implement citation counting on source reference | ARC | MEDIUM | Console feature |
| Generate PENDING ELEVATION CANDIDATES automatically | ARC | MEDIUM | Console feature |
| Implement 90-day expiration check | ARC | LOW | Scheduled job |
| Update OGE generation to check active MIND | Navigation | MEDIUM | OGE logic update |
| Implement connection ranking by MIND affinity | Navigation | MEDIUM | OGE logic update |
| Implement MEM-first search in LEARN mode | Tiered | MEDIUM | Search feature |
| Log web fallback queries for gap identification | Tiered | LOW | Logging feature |
| Implement CEP source attribution format | CEP | LOW | Citation format |

**Phase 2 Exit Criteria:**
- cmc-console tracks source citations and metrics
- OGE respects MIND affinities for connection ranking
- LEARN mode attempts MEM search before web
- Web fallback queries logged for analysis

---

### Phase 3 — Cross-Protocol Integration (CMC 3.3)

**Goal:** Enable cross-cutting features and deeper integration.

| Task | Protocol | Complexity | Deliverable |
|------|----------|------------|-------------|
| Detect shared sources across civilization ARCs | ARC | MEDIUM | Cross-ARC feature |
| Implement gap detection per civilization | ARC | MEDIUM | Analysis feature |
| Generate cross-civ analyst recommendations | ARC | LOW | Report feature |
| Implement verbatim quote indexing | ARC | MEDIUM | Quote database |
| Tag concepts with MIND affinities | Navigation | LOW | Concept Index update |
| Implement concept emphasis by active MIND | Navigation | MEDIUM | LEARN mode update |
| Implement backward illumination tracking | CEP | MEDIUM | Insight logging |
| Surface CEP insights in SCHOLAR files | CEP | MEDIUM | SCHOLAR integration |
| Semantic similarity search for MEM matching | Tiered | HIGH | Search enhancement |

**Phase 3 Exit Criteria:**
- Cross-ARC source analysis available
- Verbatim quotes indexed and searchable
- Concepts emphasize by active MIND
- CEP insights visible in SCHOLAR files
- Semantic search enhances MEM-first retrieval

---

### Phase 4 — Optimization and Refinement (CMC 3.4+)

**Goal:** Tune thresholds, add advanced features, optimize performance.

| Task | Protocol | Complexity | Deliverable |
|------|----------|------------|-------------|
| Analyze threshold effectiveness (5 citations, 90 days) | ARC | LOW | Metrics analysis |
| Tune elevation/expiration thresholds based on data | ARC | LOW | Threshold updates |
| Implement source quality signals beyond citation count | ARC | MEDIUM | Quality scoring |
| Add contradiction detection and demotion workflow | ARC | MEDIUM | Demotion feature |
| Optimize MEM search performance | Tiered | MEDIUM | Performance tuning |
| Implement "good fit" confidence scoring | Tiered | MEDIUM | Relevance scoring |
| Add CEP session templates for common event types | CEP | LOW | Template library |
| Cross-session pending output discovery | All | MEDIUM | Session continuity |

**Phase 4 Exit Criteria:**
- Thresholds tuned based on real usage data
- Source quality signals beyond raw citation count
- MEM search fast and reliable
- Common CEP workflows templated

---

## IV. CURSOR RULE UPDATES

### Phase 1 Updates

**cmc-oge-enforcement.mdc:**
```markdown
## MIND-INFLUENCED TRAVERSAL

When generating E/F/G options, rank available connections
by affinity for the active MIND per PROTOCOL–MIND–NAVIGATION.

Frame option text using the MIND's analytical vocabulary.
```

**cmc-scholar-mode.mdc:**
```markdown
## MIND NAVIGATION AWARENESS

When a MIND is active, connection traversal and source
selection are biased per PROTOCOL–MIND–NAVIGATION.

Mercouris is default. OGE B=Mearsheimer, C=Barnes.
Manual invocation overrides OGE selection.
```

**cmc-blend-law.mdc:**
```markdown
## MIND-NAVIGATION INTERACTION

MIND-Navigation influences analytical framing in all modes.
Blend Law governs content proportions in WRITE mode only.

Both apply; they don't conflict. See PROTOCOL–MIND–NAVIGATION
Section VI.D for detailed interaction rules.
```

### Phase 2+ Updates

Cursor rule updates for Phases 2-4 will be specified as features are implemented.

---

## V. SCHEMA UPDATES

### Phase 2 Schema (cmc-console)

```sql
-- Source tracking for Living ARC
CREATE TABLE arc_sources (
  id TEXT PRIMARY KEY,
  civilization TEXT NOT NULL,
  title TEXT NOT NULL,
  author TEXT,
  date TEXT,
  source_type TEXT NOT NULL,
  tier TEXT DEFAULT 'PROVISIONAL',
  first_cited TEXT NOT NULL,
  last_cited TEXT NOT NULL,
  citation_count INTEGER DEFAULT 1,
  insight_credits INTEGER DEFAULT 0,
  contradiction_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'ACTIVE',
  notes TEXT,
  FOREIGN KEY (civilization) REFERENCES civilizations(id)
);

-- Source evolution log (append-only)
CREATE TABLE arc_evolution_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id TEXT NOT NULL,
  event_date TEXT NOT NULL,
  event_type TEXT NOT NULL,
  old_tier TEXT,
  new_tier TEXT,
  trigger TEXT,
  FOREIGN KEY (source_id) REFERENCES arc_sources(id)
);

-- Web fallback query log (gap identification)
CREATE TABLE web_fallback_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  query TEXT NOT NULL,
  query_date TEXT NOT NULL,
  civilization TEXT,
  mem_results_count INTEGER,
  fallback_triggered BOOLEAN,
  useful_result BOOLEAN
);
```

### Phase 3 Schema Additions

```sql
-- Verbatim citation index
CREATE TABLE verbatim_citations (
  id TEXT PRIMARY KEY,
  quote TEXT NOT NULL,
  source_id TEXT NOT NULL,
  first_cited TEXT NOT NULL,
  citation_count INTEGER DEFAULT 1,
  status TEXT DEFAULT 'ACTIVE',
  FOREIGN KEY (source_id) REFERENCES arc_sources(id)
);

-- Verbatim-concept linkage
CREATE TABLE verbatim_concepts (
  verbatim_id TEXT NOT NULL,
  concept_id TEXT NOT NULL,
  PRIMARY KEY (verbatim_id, concept_id),
  FOREIGN KEY (verbatim_id) REFERENCES verbatim_citations(id),
  FOREIGN KEY (concept_id) REFERENCES concepts(id)
);
```

---

## VI. RISK MITIGATION

### Dependency Risks

| Risk | Mitigation |
|------|------------|
| Phase 2 blocks on cmc-console availability | Phase 1 fully manual; no hard dependency |
| Cross-protocol bugs | Each protocol independently functional |
| Threshold miscalibration | Conservative defaults; tune in Phase 4 |

### Complexity Risks

| Risk | Mitigation |
|------|------------|
| Too many simultaneous changes | Phased rollout; Phase 1 is manual-only |
| Automation failures | All protocols degrade gracefully to manual |
| MIND affinity over-constraining | Soft bias, not hard filter; overrides available |

### Rollback Plan

Each phase is independently revertible:
- Phase 1: Remove protocol references from cursor rules
- Phase 2: Disable automation features in cmc-console
- Phase 3: Revert to Phase 2 behavior
- All protocols remain valid static documents if automation disabled

---

## VII. SUCCESS METRICS

### Phase 1

- [ ] All four protocols approved and documented
- [ ] ARC files updated with Living ARC structure
- [ ] MIND files updated with navigation stubs
- [ ] Cursor rules reference new protocols

### Phase 2

- [ ] Citation counts tracked automatically
- [ ] At least 3 sources elevated from PROVISIONAL → VALIDATED
- [ ] OGE traversal respects MIND affinities (manual verification)
- [ ] MEM-first search functional in LEARN mode

### Phase 3

- [ ] Cross-ARC shared sources identified
- [ ] Gap detection surfaces under-covered civilizations
- [ ] Verbatim quotes indexed and discoverable
- [ ] CEP backward illumination produces at least 2 MEM annotations

### Phase 4

- [ ] Threshold effectiveness analyzed with data
- [ ] At least one threshold adjusted based on evidence
- [ ] MEM search response time < 500ms
- [ ] User satisfaction with source surfacing (qualitative)

---

## VIII. TIMELINE GUIDANCE

**No calendar dates.** Phases proceed when exit criteria are met.

| Phase | Prerequisite |
|-------|--------------|
| Phase 1 | User approval of this roadmap |
| Phase 2 | Phase 1 complete; cmc-console development capacity |
| Phase 3 | Phase 2 complete; stable automation |
| Phase 4 | Phase 3 complete; sufficient usage data |

---

## IX. OPEN DECISIONS

Before proceeding, confirm:

1. **Threshold values:** 5 citations for VALIDATED, 90 days for expiration — acceptable?
2. **Source type taxonomy:** ACADEMIC, PRIMARY, ANALYST_CANONICAL, ANALYST_PROVISIONAL, NEWS_QUALITY, NEWS_EPHEMERAL, LEGAL, INVESTIGATIVE — complete?
3. **MIND affinity derivation:** From concept category, or explicit per-concept tagging?
4. **Verbatim deduplication:** Exact match, or fuzzy matching threshold?

---

## X. APPROVAL

This roadmap requires approval before Phase 1 begins.

**Approved by:** _______________  
**Date:** _______________

---

**END OF ROADMAP — ROADMAP–CMC–3.2 v1.0**
