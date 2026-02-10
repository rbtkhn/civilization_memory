# Entity-Advisory System (EAS)

## Engineering Design Proposal

**Document Version**: 1.0
**Date**: February 2026
**Author**: System Design
**Status**: PROPOSAL

---

## Executive Summary

This proposal outlines a restructuring of the Civilizational Memory Codex (CMC) from a civilization-based scholarly system to an entity-based advisory system. The transformation shifts the primary organizing unit from "civilization" to "entity" (nation-states and historical polities), and reorients the learning objective from academic understanding to decision-relevant advisory capability.

**Key Changes:**
- Primary unit: Civilization → Entity (nation-state or historical polity)
- Learning mode: Organic scholarly exploration → Purpose-driven advisory accumulation
- Output: Academic synthesis → Policy recommendations
- Role: Scholar → National Security Advisor

**Expected Benefits:**
- More intuitive organization (matches how users think)
- Decision-relevant outputs (actionable, not just informative)
- Better data fit (sources organized by state, not civilization)
- Real-world applicability (advisory framing has market value)

**Estimated Effort:**
- Core architecture: 4-6 weeks
- Content migration: 8-12 weeks
- Real-time layer (optional): 12-16 weeks additional

---

## I. Current State Analysis

### 1.1 CMC Architecture (As-Is)

```
CIV-MEM/
├── content/
│   └── civilizations/
│       ├── RUSSIA/
│       │   ├── CIV-CORE-RUSSIA.md
│       │   ├── CIV-SCHOLAR-RUSSIA.md
│       │   ├── MEM-RUSSIA-*.md
│       │   └── GEO-RUSSIA-*.md
│       └── [other civilizations]/
├── docs/
│   ├── governance/
│   │   └── CIV-MEM-CORE.md
│   └── templates/
│       ├── CIV-CORE-TEMPLATE.md
│       ├── CIV-SCHOLAR-TEMPLATE.md
│       ├── CIV-MIND-TEMPLATE.md
│       └── CIV-ARC-TEMPLATE.md
└── tools/
```

### 1.2 Current Strengths

| Strength | Description |
|----------|-------------|
| Deep patterns | Captures long-duration civilizational grammar |
| MIND profiles | Mercouris, Mearsheimer, Barnes lenses codified |
| Governance rigor | Immutability, evidence tiers, claim grounding |
| MEM structure | Rich historical content with connections |

### 1.3 Current Limitations

| Limitation | Impact |
|------------|--------|
| Civilization as container | Awkward for fragmented entities (Rome) and related-but-distinct states (US/UK) |
| Scholar framing | Academic, not decision-relevant |
| No real-time layer | Historical only, no current situational awareness |
| Data sourcing | Sources organized by state, not civilization; friction in populating |

---

## II. Proposed State: Entity-Advisory System (EAS)

### 2.1 Core Concept

The Entity-Advisory System reorganizes knowledge around **entities** (nation-states and historical polities) with an **advisory objective**: each entity has an ADVISOR that learns in order to provide optimal national security/foreign policy advice.

### 2.2 Entity Taxonomy

| Entity Type | Examples | Characteristics |
|-------------|----------|-----------------|
| **Civilization-State** | Russia, China, Iran, India | Modern state claims civilizational continuity; phases within one entity |
| **Standard-State** | France, Germany, USA, UK | Modern state with heritage links; no civilizational identity claim |
| **Fragmented-Source** | Roman Empire, Mongol Empire | Concluded; multiple successors inherit pieces |
| **Successor-State** | Turkey, Greece | Contested relationship to predecessor |

### 2.3 Architecture Overview

```
EAS/
├── entities/
│   ├── RUSSIA/
│   │   ├── ENTITY-CORE.md           # Basic identity and status
│   │   ├── ENTITY-PATTERNS.md       # Deep persistent patterns
│   │   ├── ENTITY-HERITAGE.md       # Civilizational inheritance
│   │   ├── PHASES/                   # For civilization-states
│   │   │   ├── PHASE-KIEVAN-RUS.md
│   │   │   ├── PHASE-MUSCOVY.md
│   │   │   └── ...
│   │   ├── ADVISOR.md                # Advisory synthesis
│   │   ├── CURRENT-SITUATION.md      # Dynamic layer (optional)
│   │   ├── SUCCESSION.md             # Links to predecessors/successors
│   │   └── mems/
│   │       ├── MEM-PETERSBURG.md
│   │       └── ...
│   ├── CHINA/
│   ├── UNITED-STATES/
│   ├── ROMAN-EMPIRE/
│   └── ...
├── cross-entity/
│   ├── COMPARISON-LEDGER.md          # Cross-entity insights
│   ├── SUCCESSION-INDEX.md           # Global succession graph
│   └── ADVERSARY-BRIEFS/             # Entity-vs-entity analysis
├── docs/
│   ├── governance/
│   │   └── EAS-CORE.md               # System governance
│   └── templates/
│       ├── ENTITY-CORE-TEMPLATE.md
│       ├── ENTITY-ADVISOR-TEMPLATE.md
│       ├── ENTITY-PATTERNS-TEMPLATE.md
│       └── ...
├── minds/
│   ├── MIND-MERCOURIS.md
│   ├── MIND-MEARSHEIMER.md
│   └── MIND-BARNES.md
└── real-time/                         # Optional dynamic layer
    ├── sources/
    ├── ingestion/
    └── situation-reports/
```

---

## III. Detailed Component Design

### 3.1 ENTITY-CORE

**Purpose**: Basic identity and status of the entity.

```markdown
# ENTITY-CORE — RUSSIA

## Identity
Name: Russia / Russian Federation
Type: CIVILIZATION-STATE
Status: ACTIVE
Capital: Moscow
Established: 882 (Kievan Rus) / 1991 (current state form)

## Classification
- Civilization-state: YES (claims continuous civilizational identity)
- Great power: YES
- Nuclear power: YES
- UN Security Council: Permanent member

## Phases (Civilization-State)
1. Kievan Rus (882-1240)
2. Muscovy (1283-1547)
3. Tsardom (1547-1721)
4. Empire (1721-1917)
5. USSR (1922-1991)
6. Federation (1991-present)

## Succession Links
- Inherits from: MONGOL-EMPIRE (partial), BYZANTINE-EMPIRE (ideological)
- Claims succession from: BYZANTINE-EMPIRE (Third Rome)
- Predecessor states: USSR, Russian Empire, Tsardom, Muscovy, Kievan Rus
```

### 3.2 ENTITY-PATTERNS

**Purpose**: Deep persistent patterns that explain behavior across state forms.

```markdown
# ENTITY-PATTERNS — RUSSIA

## Legitimacy Structure
Primary logic: Autocratic-Orthodox
- Strongman as civilizational guardian
- State-church symphony (inherited from Byzantium)
- Legitimacy = strength of leader + civilizational defense
- Western recognition as persistent anxiety

## Strategic Culture
- Buffer obsession (Mongol trauma, WWII trauma)
- Fear of encirclement (no natural barriers)
- Land power orientation (continental, not maritime)
- Autocratic centralization (strong center, weak periphery)
- Patience and endurance as strategic virtues

## Geographic Imperatives
- Warm-water port access (Black Sea, Baltic, Pacific)
- Buffer zones on western frontier
- Control of Eurasian heartland
- Multi-front vulnerability

## Recurring Tensions
- West vs East orientation (Peter's turn west, current turn east)
- Modernization vs tradition
- Imperial overextension vs consolidation
- Center vs periphery (ethnic republics, regional power)

## Pattern Persistence Score
These patterns have persisted across: Tsardom, Empire, USSR, Federation
Confidence: HIGH
```

### 3.3 ENTITY-ADVISOR

**Purpose**: Decision-relevant synthesis with advisory objective.

```markdown
# ADVISOR — RUSSIA

Role: National Security Advisor to the Russian Federation
Objective: Optimal advice for Russian strategic interests
Last Updated: [DATE]

---

## I. STRATEGIC POSITION

### Threat Assessment (Ranked)
1. NATO expansion / Western encirclement — CRITICAL
2. Economic isolation / sanctions — HIGH
3. Demographic decline — HIGH (long-term)
4. Chinese dependency — MEDIUM (rising)
5. Internal fragmentation — MEDIUM

### Opportunity Assessment
1. Energy leverage over Europe — Declining but present
2. Multipolarity narrative — Growing traction in Global South
3. Arctic opening — Long-term strategic advantage
4. Western fatigue on Ukraine — Possible

### Constraint Assessment
1. Economic monoculture (hydrocarbons) — Severe
2. Technology dependency — Severe (sanctions impact)
3. Demographic trajectory — Unfavorable
4. Elite cohesion — Contingent on success narrative

---

## II. MIND COUNCIL

### Mearsheimer (Structural Advisor)
Russia's geographic position mandates buffer zones. NATO expansion 
is an existential threat regardless of Western intentions. Rational 
policy: ensure Ukraine never joins NATO, by force if necessary.

Current assessment: Structural imperatives are being met through 
military action, but at high cost. Sustainability is the question.

### Mercouris (Political Advisor)
Russian legitimacy requires the strongman to appear strong. Any 
settlement must be frameable as victory domestically. The Orthodox 
civilizational guardian role constrains options.

Current assessment: Legitimacy is intact but depends on avoiding 
clear defeat. Frozen conflict is acceptable; retreat is not.

### Barnes (Liability Advisor)
Leadership faces personal exposure if defeat narrative emerges. 
Elite defection risk increases with prolonged stalemate. The inner 
circle's personal stakes drive risk tolerance.

Current assessment: Personal liability is high. Elite cohesion 
holds while success seems possible. Watch for defection signals.

---

## III. RECOMMENDED PRIORITIES

1. Secure territorial gains sufficient for domestic "victory" narrative
2. Avoid protracted war that erodes elite cohesion
3. Diversify away from Chinese dependency (India, Global South)
4. Manage sanctions impact through parallel economies
5. Preserve nuclear deterrent credibility

---

## IV. DECISION-RELEVANT HISTORY

### Buffer Obsession (Pattern Activation: HIGH)
Source: MEM-MONGOL-YOKE, MEM-WWII-BARBAROSSA
Implication: Buffer zones are non-negotiable. Any government will 
             prioritize western frontier security.

### Third Rome Doctrine (Pattern Activation: MEDIUM)
Source: MEM-BYZANTINE-SUCCESSION, HERITAGE-RUSSIA
Implication: Civilizational self-conception shapes legitimacy claims.
             Russia as defender of Orthodox civilization.

---

## V. ADVERSARY BRIEFS

### United States
Key insight: Attention span limited by election cycles.
Implication: Outlast US political focus.
See: cross-entity/ADVERSARY-BRIEFS/RUSSIA-VS-USA.md

### NATO/Europe
Key insight: Unity is fragile; economic interests diverge.
Implication: Exploit divisions, especially energy dependency.
See: cross-entity/ADVERSARY-BRIEFS/RUSSIA-VS-NATO.md

---

## VI. LEARNING LOG

[Entries accumulate here as MEMs are studied with advisory purpose]
```

### 3.4 CURRENT-SITUATION (Dynamic Layer)

**Purpose**: Real-time situational awareness.

```markdown
# CURRENT-SITUATION — RUSSIA

Last Updated: 2026-02-03 14:30 UTC
Update Frequency: Daily

---

## Active Developments

### Ukraine Conflict — CRITICAL
Status: Ongoing
Front line: [Summary of current positions]
Recent changes: [Last 7 days]
Diplomatic signals: [Latest statements]
Western support: [Assessment of sustainability]

### Sanctions Regime — HIGH
Current scope: [Summary]
Recent changes: [New measures or evasions]
Economic impact: [Key indicators]

### China Relationship — MEDIUM
Recent contacts: [High-level meetings]
Trade developments: [Energy, arms, technology]
Dependency indicators: [Metrics]

---

## Pattern Activations This Week

| Event | Pattern Activated | Advisory Update |
|-------|-------------------|-----------------|
| [Event] | Buffer obsession | [Implication] |

---

## Source Log

| Time | Source | Event | Relevance |
|------|--------|-------|-----------|
| [Timestamp] | [Source] | [Event summary] | [HIGH/MEDIUM/LOW] |
```

### 3.5 SUCCESSION Links

**Purpose**: Track inheritance relationships.

```markdown
# SUCCESSION — RUSSIA

## Predecessors (Within Civilization-State)
- Kievan Rus → Muscovy → Tsardom → Empire → USSR → Federation
- Type: CONTINUOUS_PHASES (same civilizational identity)

## External Inheritance
### From BYZANTINE-EMPIRE
- Type: IDEOLOGICAL_CLAIM
- Date: 1472 (marriage alliance), 1547 (Tsar title)
- Inherited:
  - Third Rome doctrine
  - Autocratic legitimacy model
  - Orthodox primacy claim
  - Double-headed eagle
  - State-church symphony

### From MONGOL-EMPIRE
- Type: PARTIAL_ABSORPTION
- Date: 1240-1480 (Yoke period)
- Inherited:
  - Tribute/extraction governance patterns
  - Postal/communication systems
  - Autocratic submission culture
  - Fear of steppe vulnerability

## Successors
- None (active entity)

## Contested Claims
- Ukraine claims Kievan Rus heritage independently
- Belarus shares some heritage claims
```

---

## IV. Cross-Entity Components

### 4.1 COMPARISON-LEDGER

```markdown
# COMPARISON-LEDGER

## COMPARE-0012: Autocracy Models

Entities: RUSSIA, CHINA
Dimension: Legitimacy Structure
Date: 2026-02-03

### Russia
- Personal-charismatic autocracy
- Orthodox symphony
- Legitimacy = strength of leader
- Succession crises are existential

### China
- Institutional-performance autocracy
- Mandate of Heaven / Party legitimacy
- Legitimacy = delivery of results
- Succession is managed, not crisis

### Key Distinction
Russian autocracy is personalist; Chinese is institutional.
Russian autocracy can collapse with the leader; Chinese survives transitions.

### Advisory Implication
- For Russia: Leadership transition is maximum vulnerability
- For China: Watch performance metrics, not leader health
- For adversaries: Different pressure points
```

### 4.2 SUCCESSION-INDEX

```markdown
# SUCCESSION-INDEX

## Fragmented Sources

### ROMAN-EMPIRE
Concluded: 476 AD (West) / 1453 AD (East)
Successors:
├── BYZANTINE-EMPIRE (DIRECT_CONTINUATION)
│   ├── RUSSIA (IDEOLOGICAL_CLAIM via Third Rome)
│   ├── OTTOMAN-EMPIRE (CONQUEST_ABSORPTION)
│   │   └── TURKEY (SUCCESSOR_STATE)
│   └── GREECE (CULTURAL_INHERITANCE)
├── HOLY-ROMAN-EMPIRE (CLAIMED_SUCCESSION)
│   └── GERMANY (CULTURAL_INHERITANCE)
├── PAPACY (INSTITUTIONAL_TRANSFER)
├── FRANCE (CULTURAL_INHERITANCE via Carolingian)
├── ITALY (GEOGRAPHIC_INHERITANCE)
└── [All Romance language states] (LINGUISTIC_INHERITANCE)

### MONGOL-EMPIRE
Concluded: 1368 (Yuan) / fragmented earlier
Successors:
├── CHINA (CONQUEST_ABSORPTION of Yuan)
├── RUSSIA (PARTIAL_ABSORPTION during Yoke)
├── INDIA (MUGHAL_LINE)
└── PERSIA (ILKHANATE_LEGACY)
```

---

## V. Migration Plan

### Phase 1: Core Architecture (Weeks 1-4)

| Task | Duration | Deliverable |
|------|----------|-------------|
| Create EAS-CORE governance | 3 days | EAS-CORE.md |
| Create entity templates | 5 days | All templates |
| Create cross-entity templates | 3 days | Comparison, Succession templates |
| Set up directory structure | 2 days | New folder hierarchy |
| Migrate MIND profiles | 2 days | minds/ directory |

### Phase 2: Entity Migration (Weeks 5-12)

| Task | Duration | Deliverable |
|------|----------|-------------|
| Migrate RUSSIA | 2 weeks | Full RUSSIA entity |
| Create RUSSIA ADVISOR | 1 week | ADVISOR-RUSSIA.md |
| Migrate/create 5 major entities | 5 weeks | USA, CHINA, FRANCE, GERMANY, UK |
| Create historical entities | 2 weeks | ROMAN-EMPIRE, BYZANTINE, MONGOL |
| Build SUCCESSION-INDEX | 1 week | Complete graph |

### Phase 3: Cross-Entity Layer (Weeks 13-14)

| Task | Duration | Deliverable |
|------|----------|-------------|
| Create COMPARISON-LEDGER | 3 days | Initial entries |
| Create ADVERSARY-BRIEFS | 5 days | Major dyads |
| Validate succession links | 2 days | Complete inheritance graph |

### Phase 4: Real-Time Layer (Optional, Weeks 15-26)

| Task | Duration | Deliverable |
|------|----------|-------------|
| Source identification | 2 weeks | Curated source list |
| Ingestion pipeline design | 3 weeks | Technical architecture |
| Pattern-matching engine | 4 weeks | Event-to-pattern linking |
| CURRENT-SITUATION automation | 3 weeks | Daily update system |

---

## VI. Technical Requirements

### 6.1 Core System (Minimal)

| Requirement | Description |
|-------------|-------------|
| File storage | Git-based (existing) |
| Format | Markdown (existing) |
| Governance | EAS-CORE.md (new) |
| Templates | Entity, Advisor, Patterns, etc. |
| Cross-references | YAML frontmatter with links |

### 6.2 Real-Time Layer (Optional)

| Requirement | Description |
|-------------|-------------|
| News ingestion | API access to news sources |
| Processing | LLM-based summarization and pattern-matching |
| Storage | Time-series database for events |
| Update frequency | Daily minimum, hourly preferred |
| Source management | Credibility weighting, bias tracking |

### 6.3 Query Interface (Future)

| Requirement | Description |
|-------------|-------------|
| Natural language queries | "What should Russia do about NATO?" |
| Cross-entity comparison | "Compare Russian and Chinese autocracy" |
| Succession traversal | "How did Russia inherit Roman patterns?" |
| Audit trail | "Why did you recommend this?" |

---

## VII. Benefits Analysis

### 7.1 Immediate Benefits

| Benefit | Description | Value |
|---------|-------------|-------|
| Intuitive organization | Entities match user mental models | Accessibility |
| Data fit | Sources organized by state | Easier population |
| Decision relevance | Advisory framing produces actionable output | Utility |
| Clean handling of splits | US ≠ UK, no awkward "Anglia" | Clarity |
| Historical entities | Rome, Mongol exist as first-class | Completeness |

### 7.2 Strategic Benefits

| Benefit | Description | Value |
|---------|-------------|-------|
| Market differentiation | Advisory framing is novel | Commercial potential |
| Real-world applicability | Useful to analysts, policymakers, researchers | Wider audience |
| Scalability | Entity model extends to any state | Growth |
| Comparative capability | Cross-entity analysis built-in | Insight generation |

### 7.3 Analytical Benefits

| Benefit | Description | Value |
|---------|-------------|-------|
| Pattern amplification | Unique distinctions surfaced | Understanding |
| MIND integration | Mercouris/Mearsheimer/Barnes per entity | Depth |
| Succession tracking | Inheritance flows visible | Historical continuity |
| Civilization-state handling | Phases within entity | Appropriate structure |

---

## VIII. Cost Analysis

### 8.1 Development Effort

| Phase | Effort (person-weeks) | Complexity |
|-------|----------------------|------------|
| Core architecture | 4 | Medium |
| Entity migration (RUSSIA) | 3 | Medium |
| Entity migration (5 majors) | 10 | Medium |
| Historical entities | 4 | Medium |
| Cross-entity layer | 2 | Low |
| **Subtotal (Core)** | **23** | |
| Real-time layer (optional) | 12 | High |
| **Total (with real-time)** | **35** | |

### 8.2 Ongoing Costs

| Item | Frequency | Effort |
|------|-----------|--------|
| MEM creation | Ongoing | Same as current |
| ADVISOR updates | Monthly | 2-4 hours/entity |
| CURRENT-SITUATION (manual) | Daily | 1-2 hours total |
| CURRENT-SITUATION (automated) | Daily | Compute + API costs |

### 8.3 API/Infrastructure Costs (Real-Time Layer)

| Service | Estimated Cost | Notes |
|---------|---------------|-------|
| News API access | $200-500/month | Reuters, AP, etc. |
| LLM processing | $100-300/month | Summarization, pattern-matching |
| Hosting | $50-100/month | If deployed as service |

---

## IX. Risk Analysis

### 9.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Migration data loss | Low | High | Git versioning, backup before migration |
| Real-time layer complexity | Medium | Medium | Make it optional Phase 4 |
| Pattern-matching accuracy | Medium | Medium | Human review layer |

### 9.2 Conceptual Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Loss of civilizational depth | Low | High | ENTITY-PATTERNS preserves deep grammar |
| Advisory framing feels artificial | Low | Medium | Test with users early |
| Succession complexity (Rome) | Medium | Low | Typed links handle branching |

### 9.3 Operational Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Bias in advisory output | Medium | High | Explicit MIND perspectives, not single "truth" |
| Stale CURRENT-SITUATION | High (manual) | Medium | Automate or accept lag |
| Source credibility issues | Medium | Medium | Source hierarchy, verification protocol |

---

## X. Success Metrics

### 10.1 Migration Success

| Metric | Target |
|--------|--------|
| Entities migrated | 10+ (major states) |
| Historical entities created | 5+ (Rome, Mongol, Byzantine, Ottoman, Persia) |
| MEMs preserved | 100% |
| SUCCESSION-INDEX complete | All major inheritance chains |

### 10.2 Advisory Quality

| Metric | Target |
|--------|--------|
| ADVISOR files created | 10+ major entities |
| MIND integration per ADVISOR | All 3 MINDs represented |
| Pattern-to-advice linking | Explicit in all ADVISORs |
| User feedback on utility | "More useful than CMC for understanding current events" |

### 10.3 Real-Time Layer (If Built)

| Metric | Target |
|--------|--------|
| Update latency | <24 hours for significant events |
| Pattern activation accuracy | >80% relevant activations |
| Source coverage | 10+ credible sources per major entity |

---

## XI. Recommendation

### Proceed with:

1. **Phase 1-3 (Core + Migration)**: High value, manageable complexity
2. **Start with RUSSIA**: Existing content provides migration template
3. **Validate with 3 entity types**: One civilization-state (Russia), one standard-state (France), one fragmented-source (Rome)

### Defer:

1. **Real-time layer**: Build after core is validated
2. **Query interface**: Future enhancement

### Timeline Summary

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1: Architecture | Weeks 1-4 | Templates, governance, structure |
| Phase 2: Migration | Weeks 5-12 | 10+ entities with ADVISORs |
| Phase 3: Cross-entity | Weeks 13-14 | Comparisons, succession index |
| **MVP Complete** | **Week 14** | Functional EAS |
| Phase 4: Real-time | Weeks 15-26 | Dynamic layer (optional) |

---

## XII. Appendix: Template Summaries

### ENTITY-CORE-TEMPLATE
- Identity (name, type, status)
- Classification (civilization-state, great power, etc.)
- Phases (if civilization-state)
- Succession links (predecessors, successors, claims)

### ENTITY-PATTERNS-TEMPLATE
- Legitimacy structure
- Strategic culture
- Geographic imperatives
- Recurring tensions
- Pattern persistence score

### ENTITY-ADVISOR-TEMPLATE
- Strategic position (threats, opportunities, constraints)
- MIND council (Mercouris, Mearsheimer, Barnes)
- Recommended priorities
- Decision-relevant history
- Adversary briefs
- Learning log

### ENTITY-HERITAGE-TEMPLATE
- Civilizational inheritance chains
- What inherited from whom
- Typed inheritance (direct, claimed, cultural, etc.)
- Pattern transmission

### CURRENT-SITUATION-TEMPLATE
- Active developments (categorized by priority)
- Pattern activations this period
- Advisory posture changes
- Source log

---

**END OF PROPOSAL**

Document: ENTITY-ADVISORY-SYSTEM-PROPOSAL v1.0
Status: Ready for Review
