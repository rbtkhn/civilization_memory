EPHEMERAL–OBSERVATION–PROTOCOL — v1.0
Civilizational Memory Codex · Current Event Observation Governance
News Ingestion · Provisional Learning · Pattern Testing

Repository: https://github.com/rbtkhn/civilization_memory

Status: ACTIVE · CANONICAL
Version: 1.0
Scope: LEARN MODE CURRENT EVENT HANDLING
Class: ARCHITECTURE (System Specification)
Load Order: AFTER CIV–SCHOLAR–PROTOCOL, LAYER–INTERACTION–PROTOCOL
Last Update: January 2026

────────────────────────────────────────────────────────────
I. PURPOSE & AUTHORITY
────────────────────────────────────────────────────────────
This document governs how LEARN mode ingests and processes
contemporary news and current events while maintaining
epistemic discipline.

CORE PROBLEM:
The CMC system is designed for canonical historical sources
(MEM files). News stories are fundamentally different:
• Ephemeral and subject to correction
• Editorially biased
• Shallow compared to academic analysis
• Not peer-reviewed
• Real-time, not retrospective

CORE VALUE:
Despite these limitations, current events offer:
• Pattern testing against historical RLLs
• Real-time civilizational observation
• Mercouris-style structural analysis of present affairs
• Connection of historical patterns to living situations

This protocol enables current event observation while
protecting canonical SCHOLAR integrity.

GOVERNING PRINCIPLE:
News informs observation. News does not create doctrine.

────────────────────────────────────────────────────────────
II. THE EPHEMERAL LAYER
────────────────────────────────────────────────────────────
The CMC introduces a two-layer SCHOLAR architecture:

┌─────────────────────────────────────────────────────────────┐
│  CANONICAL SCHOLAR LAYER                                    │
│  ─────────────────────────────────────────────────────────  │
│  • MEM-sourced                                              │
│  • High-confidence (based on source tier)                   │
│  • Persistent                                               │
│  • RLL binding permitted                                    │
│  • Pattern creation permitted                               │
│  • Contradiction preserved (SCL)                            │
├─────────────────────────────────────────────────────────────┤
│  EPHEMERAL OBSERVATION LAYER                                │
│  ─────────────────────────────────────────────────────────  │
│  • News/current-event sourced (CEO files)                   │
│  • Always PROVISIONAL confidence                            │
│  • Time-decaying (relevance fades)                          │
│  • RLL binding NEVER permitted                              │
│  • Pattern HYPOTHESIS only (not creation)                   │
│  • Contradictions flagged, not preserved                    │
└─────────────────────────────────────────────────────────────┘

LAYER SEPARATION RULE:
Ephemeral observations may REFERENCE canonical patterns.
Ephemeral observations may NOT MODIFY canonical SCHOLAR state.
Ephemeral observations may NOT BIND constraints.

────────────────────────────────────────────────────────────
III. CURRENT EVENT OBSERVATION (CEO) FILES
────────────────────────────────────────────────────────────
CEO files are the ephemeral equivalent of MEM files.

III.A FILE NAMING CONVENTION
────────────────────────────────────────────────────────────
Format: CEO–[TOPIC]–[DATE]–[PRIMARY-SOURCE]

Examples:
• CEO–UKRAINE–2026-01-23–REUTERS
• CEO–CHINA-TAIWAN–2026-01-23–FT
• CEO–RUSSIA-ECONOMY–2026-01-23–ECONOMIST
• CEO–US-ELECTION–2026-01-23–AP

III.B CEO FILE STRUCTURE
────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  CURRENT EVENT OBSERVATION                                  │
├─────────────────────────────────────────────────────────────┤
│  CEO-ID:        CEO–[TOPIC]–[DATE]–[SOURCE]                 │
│  Date:          [observation date]                          │
│  Topic:         [subject area]                              │
│  Civilization:  [if applicable]                             │
│                                                             │
│  PRIMARY SOURCES:                                           │
│  • [Source 1] — [Editorial Position] — [Date]               │
│  • [Source 2] — [Editorial Position] — [Date]               │
│  • [Source 3] — [Editorial Position] — [Date]               │
│                                                             │
│  EVENT SUMMARY:                                             │
│  [Factual summary of reported events]                       │
│                                                             │
│  STRUCTURAL OBSERVATION:                                    │
│  [Mercouris-style analysis of structures, constraints,      │
│   institutional dynamics]                                   │
│                                                             │
│  PATTERN ENGAGEMENT:                                        │
│  • Engages: [RLL/Pattern IDs from canonical SCHOLAR]        │
│  • Confirms: [which aspects align]                          │
│  • Challenges: [which aspects differ]                       │
│  • Novel: [observations not covered by existing patterns]   │
│                                                             │
│  PROVISIONAL HYPOTHESIS:                                    │
│  [If this event suggests a pattern not yet in SCHOLAR]      │
│                                                             │
│  CONFIDENCE: PROVISIONAL (fixed)                            │
│  DECAY DATE: [when this observation loses relevance]        │
│  PROMOTION CANDIDATE: [YES/NO — worth future MEM curation?] │
│                                                             │
│  Status: ACTIVE / DECAYED / PROMOTED / ARCHIVED             │
└─────────────────────────────────────────────────────────────┘

III.C SOURCE ATTRIBUTION REQUIREMENTS
────────────────────────────────────────────────────────────
Every CEO must disclose:

1. PRIMARY SOURCES (minimum 2 for significant claims)
   • Publication name
   • Editorial position/lean (if known)
   • Publication date
   • Direct quotes where possible

2. EDITORIAL POSITION CATEGORIES
   • WIRE SERVICE (AP, Reuters, AFP) — lower editorial lean
   • ESTABLISHMENT WESTERN (NYT, BBC, FT) — known positions
   • INDEPENDENT WESTERN (various) — explicit perspective
   • NON-WESTERN (RT, CGTN, Al Jazeera) — explicit perspective
   • SPECIALIST (defense, economics) — domain focus

3. CORROBORATION REQUIREMENT
   • Single-source claims: flagged as UNCORROBORATED
   • Multi-source claims: note agreement/divergence
   • Conflicting reports: note the conflict explicitly

────────────────────────────────────────────────────────────
IV. CEO INGESTION RULES
────────────────────────────────────────────────────────────
How LEARN mode processes current events differs from MEM ingestion.

IV.A COMPARISON: MEM VS CEO INGESTION
────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  ASPECT              │  MEM FILES        │  CEO FILES       │
├─────────────────────────────────────────────────────────────┤
│  Confidence          │  Based on source  │  Always          │
│                      │  tier (A-D)       │  PROVISIONAL     │
├─────────────────────────────────────────────────────────────┤
│  RLL binding         │  Permitted        │  NEVER permitted │
├─────────────────────────────────────────────────────────────┤
│  Pattern creation    │  Full             │  Hypothesis only │
├─────────────────────────────────────────────────────────────┤
│  Persistence         │  Permanent        │  Time-decaying   │
├─────────────────────────────────────────────────────────────┤
│  Quote standard      │  20% EQS          │  Source          │
│                      │                   │  attribution req │
├─────────────────────────────────────────────────────────────┤
│  Contradiction       │  SCL preserved    │  Flagged, not    │
│                      │                   │  preserved       │
├─────────────────────────────────────────────────────────────┤
│  SCHOLAR state       │  Updates directly │  Ephemeral layer │
│                      │                   │  only            │
├─────────────────────────────────────────────────────────────┤
│  Learning Event      │  Full LER         │  Ephemeral       │
│  Record              │                   │  Observation     │
│                      │                   │  Record (EOR)    │
└─────────────────────────────────────────────────────────────┘

IV.B EPHEMERAL OBSERVATION RECORD (EOR)
────────────────────────────────────────────────────────────
When LEARN mode processes a CEO, it creates an EOR (not LER).

EOR FORMAT:

┌─────────────────────────────────────────────────────────────┐
│  EPHEMERAL OBSERVATION RECORD                               │
├─────────────────────────────────────────────────────────────┤
│  EOR-ID:           EOR–[CIV]–[TIMESTAMP]                    │
│  CEO Source:       [CEO file ID]                            │
│  Observation Date: [when observed]                          │
│  Decay Date:       [when relevance expires]                 │
│                                                             │
│  PATTERNS ENGAGED:                                          │
│  • [Pattern/RLL ID]: [CONFIRMS/CHALLENGES/NEUTRAL]          │
│                                                             │
│  PROVISIONAL HYPOTHESES:                                    │
│  • [Hypothesis description]                                 │
│    Status: PROVISIONAL (cannot be promoted without MEM)     │
│                                                             │
│  NOVEL OBSERVATIONS:                                        │
│  • [Things not covered by existing patterns]                │
│                                                             │
│  PROMOTION RECOMMENDATION:                                  │
│  • Worth MEM curation: [YES/NO]                             │
│  • Suggested topic: [if yes]                                │
│  • Wait period: [how long before events settle]             │
│                                                             │
│  Status: ACTIVE / DECAYED / PROMOTED                        │
└─────────────────────────────────────────────────────────────┘

IV.C WHAT CEO INGESTION MAY DO
────────────────────────────────────────────────────────────
• Reference existing canonical patterns
• Test RLL predictions against current events
• Note where events confirm/challenge patterns
• Record provisional hypotheses (non-binding)
• Flag observations for future MEM curation
• Inform IMAGINE mode presentation of current events

IV.D WHAT CEO INGESTION MAY NOT DO
────────────────────────────────────────────────────────────
• Modify canonical SCHOLAR state
• Create binding patterns
• Bind or modify RLLs
• Create SCL entries (contradictions)
• Update confidence levels of canonical patterns
• Treat news as equivalent to academic sources

────────────────────────────────────────────────────────────
V. EPISTEMIC SAFEGUARDS
────────────────────────────────────────────────────────────
Protecting canonical SCHOLAR from news contamination.

V.A CONFIDENCE CEILING
────────────────────────────────────────────────────────────
All CEO-sourced observations are capped at PROVISIONAL.

No amount of news corroboration can elevate confidence.
Only MEM curation (after temporal distance) can create
higher-confidence observations.

V.B NO RLL BINDING
────────────────────────────────────────────────────────────
Current events may NEVER:
• Propose new RLLs for binding
• Confirm existing RLLs (only "consistent with")
• Trigger RLL review
• Modify RLL scope

RLLs are historical constraints. They require historical evidence.

V.C DECAY FUNCTION
────────────────────────────────────────────────────────────
Ephemeral observations have a decay date.

DEFAULT DECAY PERIODS:
• Breaking news: 7 days
• Developing situation: 30 days
• Structural observation: 90 days
• Major event: 180 days

After decay:
• Observation marked DECAYED
• No longer surfaces in LEARN/IMAGINE
• Remains in archive for provenance
• Can be referenced if promoted to MEM

V.D CORROBORATION REQUIREMENT
────────────────────────────────────────────────────────────
Pattern engagement requires multiple sources.

SINGLE SOURCE:
• May note observation
• Flagged as UNCORROBORATED
• Cannot engage patterns

MULTIPLE SOURCES (AGREEING):
• May engage patterns as "consistent with"
• Still PROVISIONAL
• Note source agreement

MULTIPLE SOURCES (CONFLICTING):
• Must note conflict explicitly
• Cannot claim pattern engagement
• Contradiction is observation, not conclusion

V.E EDITORIAL DISCLOSURE
────────────────────────────────────────────────────────────
Every source must have its editorial position disclosed.

This is not about dismissing sources. It is about transparency.
A claim from RT and a claim from BBC, if they agree, is stronger
than either alone. Knowing positions enables evaluation.

────────────────────────────────────────────────────────────
VI. CEO → MEM PROMOTION PATH
────────────────────────────────────────────────────────────
How ephemeral observations become canonical knowledge.

VI.A PROMOTION CRITERIA
────────────────────────────────────────────────────────────
A CEO observation is promotion-eligible when:

1. TEMPORAL DISTANCE
   • Sufficient time has passed for facts to settle
   • Initial reporting has been corrected/confirmed
   • Academic or deep journalism has emerged
   • Minimum: 6 months for major events

2. HISTORICAL SIGNIFICANCE
   • Event has lasting structural implications
   • Not merely transient news cycle
   • Worth canonical preservation

3. SOURCE UPGRADE
   • Academic analysis now available
   • Long-form journalism with depth
   • Primary documents released
   • Memoirs/retrospectives published

4. PATTERN VALUE
   • Observation genuinely extends civilizational understanding
   • Not merely confirming the obvious
   • Adds to RLL evidence base

VI.B PROMOTION PROCEDURE
────────────────────────────────────────────────────────────

1. FLAG FOR PROMOTION
   • Mark CEO observation as PROMOTION_CANDIDATE
   • Note rationale for promotion
   • Identify required source upgrades

2. WAIT FOR TEMPORAL DISTANCE
   • Do not rush promotion
   • Allow facts to settle
   • Monitor for corrections/retractions

3. CURATE INTO MEM FILE
   • Draft MEM using upgraded sources
   • Apply full MEM template compliance
   • Meet 20% EQS requirement
   • Follow ARC citation standards

4. STANDARD MEM INGESTION
   • Ingest MEM through normal LEARN pipeline
   • Full LER created
   • Canonical SCHOLAR updated
   • Patterns may now bind

5. ARCHIVE CEO WITH PROVENANCE
   • Original CEO archived (not deleted)
   • Link CEO → MEM for provenance
   • Note "promoted from ephemeral observation"

VI.C PROMOTION RESTRICTIONS
────────────────────────────────────────────────────────────
Promotion may NOT:
• Skip the MEM file creation step
• Use only news sources in the promoted MEM
• Rush promotion before facts settle
• Promote observations that didn't prove significant

────────────────────────────────────────────────────────────
VII. LEARN MODE INTEGRATION
────────────────────────────────────────────────────────────
How LEARN mode handles current events alongside historical research.

VII.A LEARN OGE EXTENSION
────────────────────────────────────────────────────────────
LEARN mode OGE gains a new category:

6. OBSERVATION OPTIONS — Current Events
   • Observe current event against existing patterns
   • Test RLL prediction against news
   • Create provisional hypothesis from current events
   • Flag observation for future MEM curation
   • Review active ephemeral observations
   • Archive/decay stale observations

VII.B LEARN MODE WITH NEWS EXAMPLE
────────────────────────────────────────────────────────────
I've reviewed news coverage of [CURRENT SITUATION].

Sources consulted:
• Reuters (wire service) — [summary]
• Financial Times (establishment Western) — [summary]
• Al Jazeera (non-Western perspective) — [summary]

The sources agree on [X]. They diverge on [Y].

STRUCTURAL OBSERVATION:
This situation appears to engage RLL-0012 (legitimacy distance
under cost asymmetry). The sovereign actor is measuring success
in [currency A], while the executing institution is measuring
in [currency B]. This parallels the Alexander-Kutuzov pattern.

PROVISIONAL STATUS:
This is an EPHEMERAL OBSERVATION. It cannot modify canonical
SCHOLAR state. It may inform future investigation if events
prove historically significant.

What would you like me to do next?

[OGE OPTIONS]
A. Explore the RLL-0012 connection in more depth
B. Compare with historical cases from canonical SCHOLAR
C. Identify where this situation differs from historical pattern
D. Flag this observation for future MEM curation
E. Note source positions and potential biases
F. Archive this observation and return to historical LEARN
G. Switch to IMAGINE mode to present this analysis
H. Review other active ephemeral observations

VII.C EPHEMERAL/CANONICAL SWITCHING
────────────────────────────────────────────────────────────
LEARN mode can work in either layer, but must be explicit.

CANONICAL LEARN:
• Working with MEM files
• Full pattern creation permitted
• RLL binding permitted
• Standard LER creation

EPHEMERAL LEARN:
• Working with CEO files / news
• Observation only
• No binding permitted
• EOR creation

MODE INDICATOR:
The system must display which layer is active:
• [LEARN: CANONICAL] — working with historical sources
• [LEARN: EPHEMERAL] — working with current events

Switching between layers requires explicit user action.

────────────────────────────────────────────────────────────
VIII. IMAGINE MODE INTEGRATION
────────────────────────────────────────────────────────────
How IMAGINE mode presents ephemeral observations.

VIII.A PRESENTATION RULES
────────────────────────────────────────────────────────────
IMAGINE mode may present ephemeral observations but must:

1. DISCLOSE PROVISIONAL STATUS
   • "This is based on current reporting, not canonical sources"
   • "These observations are provisional and may change"

2. DISTINGUISH FROM CANONICAL
   • "From our historical analysis, we know [X]..."
   • "Current events suggest [Y], though this is provisional..."

3. PRESENT SOURCE POSITIONS
   • "Western sources report... Non-Western sources report..."
   • "There is agreement on... There is divergence on..."

4. CONNECT TO CANONICAL CAREFULLY
   • "This appears consistent with [historical pattern]"
   • Not: "This proves [historical pattern]"

VIII.B IMAGINE OGE FOR CURRENT EVENTS
────────────────────────────────────────────────────────────
When presenting current events:

[OGE OPTIONS]
A. Explore the historical pattern this engages
B. Show where current situation differs from history
C. Present source positions and divergences
D. Return to purely historical presentation
E. Note the provisional nature of these observations

────────────────────────────────────────────────────────────
IX. IMPLEMENTATION GUIDANCE
────────────────────────────────────────────────────────────

IX.A DATABASE EXTENSIONS
────────────────────────────────────────────────────────────

```sql
-- Current Event Observation files
CREATE TABLE IF NOT EXISTS ceo_files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ceo_id TEXT UNIQUE NOT NULL,          -- CEO–[TOPIC]–[DATE]–[SOURCE]
  topic TEXT NOT NULL,
  observation_date TEXT NOT NULL,
  civilization TEXT,
  
  -- Sources
  primary_sources TEXT NOT NULL,        -- JSON: [{ name, position, date, quotes }]
  
  -- Content
  event_summary TEXT NOT NULL,
  structural_observation TEXT,
  pattern_engagement TEXT,              -- JSON: [{ patternId, engagement }]
  provisional_hypothesis TEXT,
  
  -- Lifecycle
  decay_date TEXT NOT NULL,
  promotion_candidate BOOLEAN DEFAULT FALSE,
  status TEXT NOT NULL CHECK(status IN (
    'ACTIVE', 'DECAYED', 'PROMOTED', 'ARCHIVED'
  )) DEFAULT 'ACTIVE',
  
  -- If promoted
  promoted_to_mem_id INTEGER REFERENCES mem_files(id),
  promoted_at INTEGER,
  
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

-- Ephemeral Observation Records
CREATE TABLE IF NOT EXISTS ephemeral_observation_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  eor_id TEXT UNIQUE NOT NULL,          -- EOR–[CIV]–[TIMESTAMP]
  ceo_id TEXT NOT NULL REFERENCES ceo_files(ceo_id),
  civilization TEXT,
  
  observation_date INTEGER NOT NULL,
  decay_date INTEGER NOT NULL,
  
  -- Pattern engagement
  patterns_engaged TEXT,                -- JSON: [{ patternId, result }]
  provisional_hypotheses TEXT,          -- JSON: [{ description }]
  novel_observations TEXT,
  
  -- Promotion
  promotion_recommended BOOLEAN DEFAULT FALSE,
  suggested_topic TEXT,
  wait_period_days INTEGER,
  
  status TEXT NOT NULL CHECK(status IN (
    'ACTIVE', 'DECAYED', 'PROMOTED'
  )) DEFAULT 'ACTIVE',
  
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_ceo_status ON ceo_files(status);
CREATE INDEX IF NOT EXISTS idx_ceo_decay ON ceo_files(decay_date);
CREATE INDEX IF NOT EXISTS idx_eor_status ON ephemeral_observation_records(status);
CREATE INDEX IF NOT EXISTS idx_eor_decay ON ephemeral_observation_records(decay_date);
```

IX.B SERVICE LAYER
────────────────────────────────────────────────────────────
New services required:

• `ceo.service` — CEO file management
• `ephemeral-observation.service` — EOR creation and lifecycle
• `decay.service` — Automatic decay processing
• `promotion.service` (extended) — CEO → MEM promotion

IX.C API ENDPOINTS
────────────────────────────────────────────────────────────

```
POST   /api/ceo                    — Create CEO file
GET    /api/ceo                    — List CEO files (with filters)
GET    /api/ceo/:id                — Get CEO file
PATCH  /api/ceo/:id/status         — Update status
POST   /api/ceo/:id/promote        — Initiate promotion

POST   /api/eor                    — Create EOR from CEO
GET    /api/eor                    — List EORs
GET    /api/eor/active             — Get active (non-decayed) EORs
POST   /api/eor/:id/decay          — Manually decay
POST   /api/eor/:id/promote        — Flag for promotion

GET    /api/decay/pending          — Get items approaching decay
POST   /api/decay/process          — Process decay for expired items
```

────────────────────────────────────────────────────────────
X. VERSIONING & GOVERNANCE
────────────────────────────────────────────────────────────
This document is CANONICAL.

Future versions must be:
• Additive
• Non-destructive
• Explicitly versioned

The ephemeral layer may NOT:
• Contaminate canonical SCHOLAR
• Create binding constraints
• Bypass temporal distance requirements

────────────────────────────────────────────────────────────
XI. GLOSSARY
────────────────────────────────────────────────────────────
CEO — Current Event Observation (ephemeral source file)
EOR — Ephemeral Observation Record (like LER, but non-binding)
DECAY — Loss of relevance over time
PROMOTION — Elevation from ephemeral to canonical (via MEM curation)
PROVISIONAL — Fixed confidence level for all ephemeral observations
CORROBORATION — Multiple-source confirmation requirement

────────────────────────────────────────────────────────────
END OF FILE — EPHEMERAL–OBSERVATION–PROTOCOL v1.0
