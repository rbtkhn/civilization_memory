LAYER–INTERACTION–PROTOCOL — v1.0
Civilizational Memory Codex · Formal Knowledge Pipeline Architecture
MEM → SCHOLAR → CORE Propagation Law

Repository: https://github.com/rbtkhn/civilization_memory

Status: ACTIVE · CANONICAL · SYSTEM LAW
Version: 1.0
Class: LAYER–INTERACTION–PROTOCOL (Architecture Law)
Load Order: AFTER CIV–MEM–CORE, BEFORE CIV–SCHOLAR–PROTOCOL
Compatibility: CIV–MEM–CORE v2.0+, CIV–SCHOLAR–TEMPLATE v2.0+
Last Update: January 2026
Word Count: ~5,800

────────────────────────────────────────────────────────────
I. PURPOSE & AUTHORITY
────────────────────────────────────────────────────────────
This document formalizes the knowledge propagation pipeline between
the three epistemic layers of the Civilizational Memory Codex:

• MEM (Memory Layer) — Atomic historical evidence objects
• SCHOLAR (Learning Layer) — Pattern recognition and constraint discovery
• CORE (Governance Layer) — Civilizational axioms and binding constraints

Previously, layer interactions were implicit and distributed across
multiple governance documents. This protocol consolidates and formalizes
all inter-layer data flows, transformation rules, and validation gates.

Authority Hierarchy (UNCHANGED):
CIV–MEM–CORE → LAYER–INTERACTION–PROTOCOL → CIV–SCHOLAR–PROTOCOL → File Instances

This protocol governs process, not content.
It may not alter truth standards, evidentiary rules, or governance constraints.

────────────────────────────────────────────────────────────
II. LAYER DEFINITIONS (CANONICAL)
────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  LAYER         │  FUNCTION           │  EPISTEMIC STATUS   │
├─────────────────────────────────────────────────────────────┤
│  MEM           │  Evidence storage   │  Assertive          │
│  SCHOLAR       │  Pattern discovery  │  Observational      │
│  CORE          │  Constraint binding │  Governing          │
└─────────────────────────────────────────────────────────────┘

MEM LAYER (Ground Truth)
• Contains primary and secondary source material
• Preserves contradictions without resolution
• Asserts historical claims (bounded by ARC compliance)
• Read by all layers, written only in WRITE mode

SCHOLAR LAYER (Learning Engine)
• Discovers patterns across MEM files
• Records tensions, sequences, and failure modes
• Proposes constraints (RLLs) for binding
• No epistemic authority; observational only

CORE LAYER (Governance Architecture)
• Contains civilizational axioms and diagnostic frameworks
• Binds RLLs promoted from SCHOLAR
• Constrains all downstream analysis
• References SCHOLAR as advisory; overrides on conflict

────────────────────────────────────────────────────────────
III. PIPELINE OVERVIEW
────────────────────────────────────────────────────────────
Knowledge flows upward through the stack via explicit transformation
stages. Each stage has defined inputs, outputs, and validation gates.

PIPELINE FLOW:

    ┌──────────────────────────────────────────────────────┐
    │                                                      │
    │   MEM FILES (Evidence Layer)                         │
    │   ┌────────────────────────────────────────────┐     │
    │   │  MEM–RUSSIA–RURIKIDS                       │     │
    │   │  MEM–RUSSIA–MONGOL–YOKE                    │     │
    │   │  MEM–RUSSIA–IVAN–TERRIBLE                  │     │
    │   │  MEM–RUSSIA–PETER–GREAT                    │     │
    │   │  ... (N files)                             │     │
    │   └────────────────────────────────────────────┘     │
    │                       │                              │
    │                       ▼                              │
    │            ┌─────────────────────┐                   │
    │            │  INGESTION GATE     │                   │
    │            │  (Section IV)       │                   │
    │            └─────────────────────┘                   │
    │                       │                              │
    │                       ▼                              │
    │   CIV–SCHOLAR–[CIV] (Learning Layer)                 │
    │   ┌────────────────────────────────────────────┐     │
    │   │  Phase I: Accumulation                     │     │
    │   │    → Pattern candidates                    │     │
    │   │    → Tension records                       │     │
    │   │    → Hypothesis staging                    │     │
    │   │                                            │     │
    │   │  Phase II: Constraint Grammar              │     │
    │   │    → RLL proposals                         │     │
    │   │    → Negative capability zones             │     │
    │   │    → Failure-first analysis                │     │
    │   └────────────────────────────────────────────┘     │
    │                       │                              │
    │                       ▼                              │
    │            ┌─────────────────────┐                   │
    │            │  PROMOTION GATE     │                   │
    │            │  (Section V)        │                   │
    │            └─────────────────────┘                   │
    │                       │                              │
    │                       ▼                              │
    │   CIV–CORE–[CIV] (Governance Layer)                  │
    │   ┌────────────────────────────────────────────┐     │
    │   │  Axioms (locked)                           │     │
    │   │  Bound RLLs (from SCHOLAR)                 │     │
    │   │  Diagnostic indices                        │     │
    │   │  Strategic constraints                     │     │
    │   └────────────────────────────────────────────┘     │
    │                                                      │
    └──────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────
IV. MEM → SCHOLAR: INGESTION PROTOCOL
────────────────────────────────────────────────────────────
This section governs how MEM file content enters the SCHOLAR layer.

IV.A INGESTION TRIGGER CONDITIONS
────────────────────────────────────────────────────────────
SCHOLAR ingestion of a MEM file occurs when:

1. EXPLICIT USER COMMAND — User requests MEM ingestion
2. LEARN MODE ACTIVE — System is in SCHOLAR → LEARN mode
3. MEM FILE VALID — Target MEM passes structural validation

Automatic ingestion is FORBIDDEN.
Background ingestion is FORBIDDEN.
Ingestion during WRITE or TEACH mode is FORBIDDEN.

IV.B INGESTION PROCEDURE (MANDATORY SEQUENCE)
────────────────────────────────────────────────────────────
Step 1: VALIDATION CHECK
• Verify MEM file is ACTIVE or CANONICAL status
• Verify MEM file passes CIV–MEM–TEMPLATE compliance
• Verify ARC version pinning matches SCHOLAR ARC reference
• Log validation result

Step 2: EXTRACTION SCAN
• Identify explicit claims (historical assertions)
• Identify preserved contradictions (SCL markers)
• Identify source tier distribution (PRIMARY / CONTEXTUAL / SECONDARY / CRITICAL)
• Identify MEM connections (related files)

Step 3: PATTERN CANDIDATE GENERATION
• Compare extracted content against existing SCHOLAR patterns
• Flag potential confirmations (pattern strengthening)
• Flag potential tensions (pattern stress)
• Flag potential novelty (new pattern candidates)

Step 4: LEARNING EVENT RECORD
• Create timestamped learning event entry
• Record source MEM file(s)
• Record extracted patterns/tensions
• Record confidence assessment (HIGH / MED / LOW / UNCERTAIN)

Step 5: INGESTION CONFIRMATION
• Present ingestion summary to user
• Await explicit confirmation before SCHOLAR state change
• Log confirmed ingestion

IV.C INGESTION OUTPUT FORMAT
────────────────────────────────────────────────────────────
Each ingestion event produces a LEARNING EVENT RECORD (LER):

┌─────────────────────────────────────────────────────────────┐
│  LEARNING EVENT RECORD (LER)                                │
├─────────────────────────────────────────────────────────────┤
│  LER-ID:        LER–[CIV]–[TIMESTAMP]                       │
│  Source MEM:    [MEM file path(s)]                          │
│  Ingestion Mode: SINGLE / BATCH / COMPARATIVE               │
│  Extraction Summary:                                        │
│    • Claims extracted: [count]                              │
│    • Contradictions noted: [count]                          │
│    • Source tiers: PRIMARY [n], SECONDARY [n], etc.         │
│  Pattern Effects:                                           │
│    • Confirmed: [pattern IDs]                               │
│    • Stressed: [pattern IDs]                                │
│    • Novel candidates: [descriptions]                       │
│  Confidence: HIGH / MED / LOW / UNCERTAIN                   │
│  Status: PENDING / CONFIRMED / REJECTED                     │
└─────────────────────────────────────────────────────────────┘

IV.D INGESTION CONSTRAINTS
────────────────────────────────────────────────────────────
• Ingestion may NOT alter MEM file content
• Ingestion may NOT resolve contradictions
• Ingestion may NOT assign truth values to conflicting claims
• Ingestion may NOT skip validation steps
• Ingestion logs are append-only and immutable

────────────────────────────────────────────────────────────
V. SCHOLAR → CORE: PROMOTION PROTOCOL
────────────────────────────────────────────────────────────
This section governs how SCHOLAR learning propagates to CORE constraints.

V.A PROMOTABLE OBJECTS
────────────────────────────────────────────────────────────
Only the following SCHOLAR outputs may be promoted to CORE:

1. RECURSIVE LEARNING LAWS (RLLs)
   • Constraints discovered through cross-MEM pattern analysis
   • Formalized as binding rules with scope and trigger conditions

2. NEGATIVE CAPABILITY ZONES (NCZs)
   • Structural impossibilities for a civilization
   • What the civilization cannot stably sustain

3. AXIOM REFINEMENTS
   • Clarifications or additions to existing CORE axioms
   • Must be strictly additive; no axiom removal or modification

Non-promotable (SCHOLAR-only):
• Pattern candidates (not yet RLL-formalized)
• Tension records (preserved but not constraining)
• Hypotheses (non-binding speculation)
• Comparative notes (observational only)

V.B PROMOTION ELIGIBILITY CRITERIA
────────────────────────────────────────────────────────────
An RLL is eligible for CORE promotion when ALL conditions are met:

1. CROSS-MEM COHERENCE
   • Pattern confirmed across ≥3 MEM files (minimum)
   • ≥5 MEM files for high-confidence promotion
   • ≥10 MEM files for axiom-level promotion

2. FAILURE-FIRST GROUNDING
   • RLL must derive from failure analysis, not success narrative
   • Must specify what breaks when RLL is violated
   • Must identify historical instances of violation consequences

3. NON-CONTRADICTION
   • RLL must not contradict existing bound RLLs
   • RLL must not contradict CORE axioms
   • If apparent contradiction exists, must be explicitly addressed

4. FALSIFIABILITY SPECIFICATION
   • RLL must specify conditions under which it would be falsified
   • Must identify what evidence would invalidate the constraint
   • Unfalsifiable RLLs are ineligible for promotion

5. SCOPE DECLARATION
   • RLL must declare scope: CIVILIZATION-SPECIFIC or CROSS-CIVILIZATIONAL
   • Must declare affected file classes (MEM / SCHOLAR / DOCTRINE / SIMULATION)
   • Must declare activation trigger conditions

V.C PROMOTION PROCEDURE (MANDATORY SEQUENCE)
────────────────────────────────────────────────────────────
Step 1: RLL PROPOSAL
• SCHOLAR formally proposes RLL with full specification
• Proposal includes: ID, scope, constraint type, trigger, affected files
• Proposal includes: source MEMs, failure grounding, falsifiability clause

Step 2: COHERENCE AUDIT
• System verifies cross-MEM support threshold
• System checks for contradiction with existing RLLs/axioms
• System validates falsifiability specification
• Audit result: ELIGIBLE / INELIGIBLE / CONFLICT

Step 3: USER AUTHORIZATION
• Eligible RLLs presented to user for binding decision
• User may: BIND / DEFER / REJECT
• BIND requires explicit confirmation
• DEFER returns RLL to SCHOLAR for further accumulation
• REJECT removes RLL from promotion queue (may be re-proposed later)

Step 4: BINDING EXECUTION
• Bound RLL added to CORE with binding metadata
• CORE version incremented
• SCHOLAR updated with binding confirmation
• Binding logged in change history

Step 5: PROPAGATION VERIFICATION
• Verify RLL is correctly referenced in CORE
• Verify downstream files (DOCTRINE, SIMULATION) acknowledge new constraint
• Log propagation completion

V.D PROMOTION OUTPUT FORMAT
────────────────────────────────────────────────────────────
Each promotion produces a BINDING EVENT RECORD (BER):

┌─────────────────────────────────────────────────────────────┐
│  BINDING EVENT RECORD (BER)                                 │
├─────────────────────────────────────────────────────────────┤
│  BER-ID:        BER–[CIV]–[TIMESTAMP]                       │
│  RLL-ID:        RLL–[NNNN]                                  │
│  Promotion Path: SCHOLAR–[CIV] → CORE–[CIV]                 │
│  Source MEMs:   [list of supporting MEM files]              │
│  Coherence:     [N] confirming MEMs, [M] tension points     │
│  Authorization: USER–[ID] at [TIMESTAMP]                    │
│  Binding Status: BOUND / DEFERRED / REJECTED                │
│  CORE Version:  v[X.Y] → v[X.Y+1]                           │
│  Propagation:   COMPLETE / PENDING / FAILED                 │
└─────────────────────────────────────────────────────────────┘

V.E PROMOTION CONSTRAINTS
────────────────────────────────────────────────────────────
• Autonomous promotion is FORBIDDEN (user authorization required)
• Silent promotion is FORBIDDEN (must be logged)
• Retroactive promotion is FORBIDDEN (RLLs bind forward only)
• Promotion during WRITE or TEACH mode is FORBIDDEN
• Cross-civilization promotion requires explicit scope declaration

────────────────────────────────────────────────────────────
VI. CORE → MEM: CONSTRAINT FEEDBACK LOOP
────────────────────────────────────────────────────────────
CORE constraints influence future MEM authoring without modifying existing MEMs.

VI.A CONSTRAINT FEEDBACK MECHANISMS
────────────────────────────────────────────────────────────
1. AUTHORING GUIDANCE
   • New MEM files should be aware of existing CORE constraints
   • Bound RLLs inform which patterns to investigate
   • Negative capability zones suggest where evidence gaps exist

2. VALIDATION ENHANCEMENT
   • MEM validation may check for RLL-relevant content
   • MEMs covering RLL-related periods should address constraint
   • Failure to engage with relevant constraints is flagged (not blocked)

3. CONNECTION RECOMMENDATION
   • CORE constraints inform recommended MEM connections
   • MEMs supporting the same RLL should be connected
   • Connection recommendations are advisory, not mandatory

VI.B CONSTRAINT FEEDBACK RESTRICTIONS
────────────────────────────────────────────────────────────
• CORE may NOT modify existing MEM content
• CORE may NOT require specific conclusions in MEMs
• CORE may NOT suppress contradicting evidence
• CORE constraints are upstream of MEMs in authority
  but downstream in chronology (MEMs existed first)

────────────────────────────────────────────────────────────
VII. SCHOLAR → MEM: ANNOTATION PROTOCOL
────────────────────────────────────────────────────────────
SCHOLAR may annotate MEMs without modifying them.

VII.A PERMITTED ANNOTATIONS
────────────────────────────────────────────────────────────
• TENSION MARKER — Flag contradictions with other MEMs
• COMPLIANCE FLAG — Note template or ARC compliance issues
• UPGRADE RECOMMENDATION — Suggest version upgrade priorities
• RLL RELEVANCE — Note which RLLs this MEM supports/stresses

VII.B ANNOTATION STORAGE
────────────────────────────────────────────────────────────
Annotations are stored in SCHOLAR, not in MEM files.
They are associated by MEM file reference, not embedded.

Format:

┌─────────────────────────────────────────────────────────────┐
│  SCHOLAR ANNOTATION RECORD (SAR)                            │
├─────────────────────────────────────────────────────────────┤
│  SAR-ID:        SAR–[CIV]–[MEM-FILE]–[TIMESTAMP]            │
│  Target MEM:    [MEM file path]                             │
│  Annotation Type: TENSION / COMPLIANCE / UPGRADE / RLL-REL  │
│  Content:       [annotation text]                           │
│  Phase:         ACCUMULATION / CONSTRAINT GRAMMAR           │
│  Status:        ACTIVE / SUPERSEDED / ARCHIVED              │
└─────────────────────────────────────────────────────────────┘

VII.C ANNOTATION RESTRICTIONS
────────────────────────────────────────────────────────────
• Annotations may NOT alter MEM text
• Annotations may NOT assert truth over MEM claims
• Annotations are advisory to future analysis
• Annotations may be superseded by later SCHOLAR versions

────────────────────────────────────────────────────────────
VIII. SCHOLAR → WRITE MODE INTERFACE (NEW)
────────────────────────────────────────────────────────────
This section governs how SCHOLAR learning influences MEM authoring in WRITE mode.

DESIGN PRINCIPLE:
SCHOLAR informs WRITE mode but does not govern it.
SCHOLAR patterns are advisory context, not constraints.
New MEMs may contradict SCHOLAR patterns; contradictions are preserved as data.

VIII.A PRE-WRITE CONTEXTUALIZATION
────────────────────────────────────────────────────────────
When entering WRITE mode for a civilization, the system SHOULD surface
relevant SCHOLAR context to inform authoring decisions.

WRITE CONTEXT PACKAGE (WCP):

┌─────────────────────────────────────────────────────────────┐
│  WRITE CONTEXT PACKAGE (WCP)                                │
├─────────────────────────────────────────────────────────────┤
│  Civilization:  [CIV]                                       │
│  Target MEM:    [MEM file path or NEW]                      │
│  Subject Area:  [extracted from filename/metadata]          │
│                                                             │
│  BOUND RLLs (from CORE):                                    │
│  • [RLL-ID]: [description] — Relevance: HIGH/MED/LOW        │
│  • [RLL-ID]: [description] — Relevance: HIGH/MED/LOW        │
│                                                             │
│  SCHOLAR PATTERNS (not yet RLL):                            │
│  • [Pattern]: [description] — State: CANDIDATE/PROPOSED     │
│    Supporting MEMs: [count]                                 │
│                                                             │
│  NEGATIVE CAPABILITY ZONES:                                 │
│  • [What this civilization cannot stably sustain]           │
│                                                             │
│  POTENTIALLY CONNECTED MEMs:                                │
│  • [MEM file] — Connection type: [thematic/temporal/causal] │
│                                                             │
│  SCHOLAR CONFIDENCE IN THIS AREA:                           │
│  • Level: HIGH/MED/LOW/UNCERTAIN                            │
│  • Basis: [N] MEMs ingested, [M] patterns confirmed         │
│                                                             │
│  ACTIVE CONTRADICTIONS (SCL):                               │
│  • [SCL-ID]: [description of unresolved tension]            │
└─────────────────────────────────────────────────────────────┘

WCP is ADVISORY ONLY.
The author is not bound by WCP content.
WCP surfaces learning; it does not constrain authoring.

VIII.B DURING-WRITE ADVISORY FLAGS
────────────────────────────────────────────────────────────
During WRITE mode, the system MAY generate soft advisory flags.

ADVISORY FLAG TYPES:

1. POTENTIAL CONTRADICTION FLAG
   Trigger: New MEM content appears to contradict existing SCHOLAR pattern
   Action: Surface warning with pattern reference
   Author Response: May acknowledge, may proceed regardless
   Enforcement: NONE (advisory only)

2. RLL ENGAGEMENT FLAG
   Trigger: MEM subject clearly falls within bound RLL scope, but draft
            does not engage with RLL-relevant dynamics
   Action: Surface reminder of applicable RLL
   Author Response: May engage, may explicitly note non-engagement
   Enforcement: NONE (advisory only)

3. CONNECTION SUGGESTION FLAG
   Trigger: SCHOLAR patterns suggest connection to other MEMs not listed
   Action: Surface suggested MEM connections
   Author Response: May add connections, may decline
   Enforcement: NONE (advisory only)

4. CONFIDENCE DISCLOSURE FLAG
   Trigger: Author is writing in area where SCHOLAR has low confidence
   Action: Surface disclosure that SCHOLAR learning is sparse
   Author Response: Informational only
   Enforcement: NONE (advisory only)

FLAG PRESENTATION RULES:
• Flags are non-blocking
• Flags may be dismissed
• Dismissed flags are logged but not repeated in same session
• Flag dismissal is not a governance violation

VIII.C POST-WRITE INGESTION QUEUE
────────────────────────────────────────────────────────────
After WRITE mode produces a new or modified MEM, the system MUST queue
the MEM for LEARN mode ingestion.

POST-WRITE QUEUE RECORD (PWQR):

┌─────────────────────────────────────────────────────────────┐
│  POST-WRITE QUEUE RECORD (PWQR)                             │
├─────────────────────────────────────────────────────────────┤
│  PWQR-ID:       PWQR–[CIV]–[TIMESTAMP]                      │
│  MEM File:      [MEM file path]                             │
│  Write Type:    NEW / MODIFIED / UPGRADED                   │
│  Previous Ver:  [version, if modified]                      │
│  New Version:   [version]                                   │
│                                                             │
│  QUEUED LEARN ACTIONS:                                      │
│  1. Full ingestion (extract patterns, claims, sources)      │
│  2. Pattern coherence check against existing SCHOLAR state  │
│  3. Contradiction detection (potential new SCLs)            │
│  4. RLL stress-testing (does new evidence stress any RLL?)  │
│  5. Connection validation (do declared connections exist?)  │
│                                                             │
│  Queue Status:  PENDING / IN_PROGRESS / COMPLETE            │
│  Queued At:     [timestamp]                                 │
│  Ingested At:   [timestamp, when complete]                  │
└─────────────────────────────────────────────────────────────┘

QUEUE RULES:
• Every new/modified MEM MUST be queued
• Queue processing occurs in LEARN mode only
• Queue order is FIFO unless priority override
• Queue backlog is visible to user

VIII.D THE WRITE-LEARN CYCLE
────────────────────────────────────────────────────────────
WRITE and LEARN modes form a feedback cycle:

┌────────────────────────────────────────────────────────────┐
│                                                            │
│   ┌─────────────┐                    ┌─────────────┐       │
│   │  WRITE MODE │                    │  LEARN MODE │       │
│   │             │                    │             │       │
│   │  Create MEM │───── PWQR ────────▶│  Ingest MEM │       │
│   │             │                    │             │       │
│   └──────▲──────┘                    └──────┬──────┘       │
│          │                                  │              │
│          │                                  │              │
│          │         ┌─────────────┐          │              │
│          │         │   SCHOLAR   │          │              │
│          │         │    STATE    │          │              │
│          │         │             │          │              │
│          └── WCP ──│  Patterns   │◀─────────┘              │
│                    │  RLLs       │   Update                │
│                    │  SCLs       │                         │
│                    │  Confidence │                         │
│                    └─────────────┘                         │
│                                                            │
└────────────────────────────────────────────────────────────┘

CYCLE PROPERTIES:
• WRITE produces MEMs → LEARN ingests MEMs → SCHOLAR updates
• Updated SCHOLAR informs next WRITE session (via WCP)
• Cycle is explicit, not automatic
• Mode transitions require user command

VIII.E CONTRADICTION HANDLING IN WRITE-LEARN CYCLE
────────────────────────────────────────────────────────────
When a newly written MEM contradicts existing SCHOLAR patterns:

1. DURING WRITE (Pre-Commit):
   • Advisory flag surfaced (see VIII.B)
   • Author may proceed regardless
   • No block, no enforcement

2. AFTER WRITE (Post-Commit):
   • MEM enters PWQR queue
   • MEM content is canonical (written is written)

3. DURING LEARN (Ingestion):
   • Contradiction detected and logged as potential SCL
   • SCHOLAR pattern stress-tested
   • Three possible outcomes:
     a) Pattern CONFIRMED: New MEM aligns, pattern strengthened
     b) Pattern STRESSED: New MEM creates tension, SCL recorded
     c) Pattern FALSIFIED: New MEM provides sufficient counter-evidence
        → RLL review triggered (if pattern was promoted to CORE)

4. AFTER LEARN:
   • SCHOLAR state updated
   • Contradiction preserved (if exists) — NOT resolved
   • Next WRITE session sees updated WCP

KEY PRINCIPLE:
New evidence (MEM) may contradict existing patterns (SCHOLAR).
The evidence is preserved. The contradiction is preserved.
SCHOLAR adapts to evidence; evidence does not adapt to SCHOLAR.

VIII.F WRITE MODE RESTRICTIONS (UNCHANGED)
────────────────────────────────────────────────────────────
WRITE mode continues to be bound by existing restrictions:

• WRITE mode may NOT update SCHOLAR state directly
• WRITE mode may NOT bind RLLs
• WRITE mode may NOT resolve contradictions
• WRITE mode may NOT suppress WCP context
• WRITE mode may NOT skip PWQR queuing

SCHOLAR influence on WRITE is read-only and advisory.
WRITE influence on SCHOLAR occurs only via LEARN mode ingestion.

────────────────────────────────────────────────────────────
IX. SCHOLAR ↔ IMAGINE MODE INTERFACE (NEW)
────────────────────────────────────────────────────────────
This section governs the relationship between SCHOLAR learning and IMAGINE mode
pedagogical exposition.

DESIGN PRINCIPLE:
LEARN informs IMAGINE directly (one-way read).
IMAGINE may produce observations that inform future LEARN (user-gated).
IMAGINE never modifies SCHOLAR state directly.

IX.A LEARN → IMAGINE: KNOWLEDGE SURFACING
────────────────────────────────────────────────────────────
IMAGINE mode reads SCHOLAR state to inform pedagogical exposition.

IMAGINE MODE HAS READ ACCESS TO:

1. ACCUMULATED PATTERNS
   • Confirmed patterns from SCHOLAR learning
   • Pattern confidence levels (SCR)
   • Supporting MEM file references

2. BOUND RLLs
   • Constraints promoted to CORE
   • Constraint rationale and scope
   • Falsification conditions

3. PRESERVED CONTRADICTIONS (SCLs)
   • Unresolved tensions between sources
   • Contradiction context and involved MEMs
   • Contradiction type classification

4. NEGATIVE CAPABILITY ZONES
   • What the civilization cannot stably sustain
   • Structural impossibilities discovered through LEARN

5. CONFIDENCE TOPOLOGY
   • High-confidence areas (well-supported by MEMs)
   • Low-confidence areas (sparse evidence)
   • Uncertainty markers

SURFACING RULES:
• IMAGINE must surface contradictions when explaining contested areas
• IMAGINE must disclose low-confidence when explaining sparse areas
• IMAGINE may not present patterns as more certain than SCHOLAR warrants
• IMAGINE must reference source MEMs when asked for evidence

IX.B IMAGINE → LEARN: PEDAGOGICAL OBSERVATION RECORDS (POR)
────────────────────────────────────────────────────────────
IMAGINE mode may produce Pedagogical Observation Records that capture
signals about knowledge gaps, contradictions, or user challenges.

PORs are OBSERVATIONAL, not ASSERTIVE.
PORs do NOT automatically update SCHOLAR.
PORs are surfaced to user, who decides whether to investigate in LEARN mode.

POR FORMAT:

┌─────────────────────────────────────────────────────────────┐
│  PEDAGOGICAL OBSERVATION RECORD (POR)                       │
├─────────────────────────────────────────────────────────────┤
│  POR-ID:        POR–[CIV]–[SESSION]–[TIMESTAMP]             │
│  Civilization:  [CIV]                                       │
│  Session ID:    [IMAGINE session identifier]                │
│  Duration:      [session duration]                          │
│                                                             │
│  OBSERVATION TYPE: [one of the types below]                 │
│  OBSERVATION CONTENT: [specific details]                    │
│  RELATED SCHOLAR CONTENT: [patterns/RLLs/SCLs affected]     │
│  SUGGESTED ACTION: [what LEARN might investigate]           │
│                                                             │
│  Status: RECORDED / REVIEWED / DISMISSED / ACTED_UPON       │
│  User Decision: [if reviewed]                               │
│  Resulting LER: [if ACTED_UPON → LEARN ingestion]           │
└─────────────────────────────────────────────────────────────┘

IX.C POR OBSERVATION TYPES
────────────────────────────────────────────────────────────

1. EXPLANATION GAP
   Definition: IMAGINE struggled to explain a topic clearly
   Signal: SCHOLAR may lack sufficient patterns in this area
   Contains:
   • Topic where explanation was incomplete
   • What context or connections were missing
   • SCHOLAR confidence level in area
   • Suggested MEMs to ingest

2. CONTRADICTION SURFACED
   Definition: New tension discovered during pedagogical exposition
   Signal: Potential SCL not yet recorded in SCHOLAR
   Contains:
   • Description of contradiction
   • Involved patterns or MEMs
   • Why it wasn't previously visible
   • Suggested SCL entry

3. USER CHALLENGE
   Definition: User disputed or corrected an explanation
   Signal: SCHOLAR pattern may be incomplete or incorrect
   Contains:
   • Claim that was challenged
   • User's counter-argument or evidence
   • Pattern/MEM affected
   • Confidence impact assessment

4. QUESTION CLUSTER
   Definition: Repeated questions in a subject area across session
   Signal: Area of user interest or confusion, possibly knowledge gap
   Contains:
   • Subject area questioned
   • Question types: CLARIFICATION / EXTENSION / CHALLENGE
   • Frequency in session
   • SCHOLAR coverage of area

5. OPTION SELECTION PATTERN
   Definition: User's OGE selections reveal preference or gap
   Signal: Certain pedagogical paths are more/less valuable
   Contains:
   • Option classes consistently selected
   • Option classes consistently ignored
   • Aggregated across session(s)
   • Possible SCHOLAR presentation improvements

IX.D POR GENERATION RULES
────────────────────────────────────────────────────────────
POR generation is OPTIONAL and EVENT-TRIGGERED.

PORs are generated when:
• IMAGINE encounters an explanation gap (automatic)
• IMAGINE surfaces a previously unrecorded contradiction (automatic)
• User explicitly challenges or corrects content (automatic)
• Session ends with significant question clustering (end-of-session)
• User requests POR generation (manual)

PORs are NOT generated for:
• Routine explanations that proceed without friction
• Single questions without pattern significance
• User acknowledgments or agreements
• Brief clarification requests

GENERATION PRINCIPLE:
Signal, not surveillance. PORs capture friction points, not all interactions.

IX.E POR REVIEW AND ACTION
────────────────────────────────────────────────────────────
PORs are surfaced to user for review. User decides disposition.

USER ACTIONS ON POR:

1. DISMISS
   • POR marked as dismissed
   • No LEARN action taken
   • Observation preserved for historical reference

2. DEFER
   • POR remains in queue for later review
   • May be batched with similar PORs
   • No immediate LEARN action

3. INVESTIGATE
   • User triggers LEARN mode investigation
   • POR becomes input to LEARN session
   • May result in:
     - New MEM ingestion
     - Pattern revision
     - New SCL recording
     - RLL stress-testing

4. CONVERT TO LEARN TASK
   • POR generates explicit LEARN task
   • Task queued in LEARN backlog
   • Processed in future LEARN session

POST-ACTION TRACKING:
• If ACTED_UPON, POR links to resulting LER
• Traceability: POR → LEARN action → SCHOLAR update
• Enables audit of pedagogical-to-learning flow

IX.F THE LEARN ↔ IMAGINE CYCLE
────────────────────────────────────────────────────────────

┌────────────────────────────────────────────────────────────┐
│                                                            │
│   ┌─────────────────┐                ┌─────────────────┐   │
│   │  LEARN MODE     │                │  IMAGINE MODE   │   │
│   │                 │                │                 │   │
│   │  Updates        │    direct      │  Explains using │   │
│   │  SCHOLAR state  │───── read ────▶│  SCHOLAR state  │   │
│   │                 │                │                 │   │
│   │  • Patterns     │                │  • Surfaces     │   │
│   │  • RLLs         │                │    patterns     │   │
│   │  • SCLs         │                │  • Discloses    │   │
│   │  • Confidence   │                │    uncertainty  │   │
│   │                 │                │  • Generates    │   │
│   │                 │                │    OGE options  │   │
│   └────────▲────────┘                └────────┬────────┘   │
│            │                                  │            │
│            │                                  │ POR        │
│            │                                  │ (optional) │
│            │                                  ▼            │
│   ┌────────┴────────────────────────────────────────────┐  │
│   │                                                     │  │
│   │  USER REVIEW                                        │  │
│   │                                                     │  │
│   │  • Reviews POR observations                         │  │
│   │  • Decides: DISMISS / DEFER / INVESTIGATE           │  │
│   │  • May trigger LEARN investigation                  │  │
│   │  • Maintains epistemic control                      │  │
│   │                                                     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘

CYCLE PROPERTIES:
• LEARN → IMAGINE: Direct read, always available
• IMAGINE → LEARN: Indirect, user-gated, optional
• User remains in control of what gets investigated
• No autonomous learning from pedagogical interactions

IX.G COMPARISON: WRITE VS IMAGINE FEEDBACK
────────────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────┐
│  ASPECT              │  WRITE → LEARN    │  IMAGINE → LEARN │
├─────────────────────────────────────────────────────────────┤
│  Output type         │  Canonical (MEMs) │  Observational   │
│  Contains claims     │  Yes (assertions) │  No (rephrases)  │
│  Feedback mechanism  │  PWQR (queue)     │  POR (observe)   │
│  Automaticity        │  Always queued    │  Event-triggered │
│  User gate           │  Confirmation     │  Review/decision │
│  SCHOLAR impact      │  Direct ingestion │  Indirect signal │
│  Processing          │  Full MEM ingest  │  Investigation   │
└─────────────────────────────────────────────────────────────┘

IX.H IMAGINE MODE RESTRICTIONS (REINFORCED)
────────────────────────────────────────────────────────────
IMAGINE mode continues to be bound by existing restrictions:

• IMAGINE mode may NOT update SCHOLAR state directly
• IMAGINE mode may NOT create new beliefs
• IMAGINE mode may NOT resolve contradictions
• IMAGINE mode may NOT freeze doctrine
• IMAGINE mode may NOT produce authoritative conclusions

POR generation does NOT violate these restrictions because:
• PORs are observations about the pedagogical process
• PORs do not assert new historical claims
• PORs require user action to affect SCHOLAR
• PORs are signals, not beliefs

IMAGINE influence on SCHOLAR occurs only via user-gated POR review.

────────────────────────────────────────────────────────────
X. CROSS-LAYER CONFLICT RESOLUTION
────────────────────────────────────────────────────────────
When layers produce conflicting outputs, resolution follows authority hierarchy.

X.A CONFLICT TYPES
────────────────────────────────────────────────────────────
1. MEM ↔ MEM CONFLICT (Same Layer)
   • Preserved as contradiction (SCL)
   • No resolution required
   • SCHOLAR may note tension

2. SCHOLAR ↔ MEM CONFLICT (Pattern vs Evidence)
   • MEM evidence takes precedence
   • SCHOLAR pattern must accommodate or flag anomaly
   • Pattern may not override documented evidence

3. CORE ↔ SCHOLAR CONFLICT (Constraint vs Pattern)
   • CORE constraints take precedence
   • SCHOLAR pattern invalidated or scoped as exception
   • Conflict logged in both files

4. CORE ↔ MEM CONFLICT (Constraint vs Evidence)
   • MEM evidence preserved (no deletion)
   • Conflict explicitly noted in both files
   • May trigger RLL review for potential falsification

X.B CONFLICT RESOLUTION PROCEDURE
────────────────────────────────────────────────────────────
Step 1: CONFLICT DETECTION
• Identify conflicting layers and content
• Classify conflict type (see IX.A)
• Log conflict with timestamp

Step 2: AUTHORITY DETERMINATION
• Apply hierarchy: CORE > SCHOLAR > MEM-synthesis
• Note: MEM evidence is preserved even when CORE constrains interpretation
• Conflict is managed, not resolved by deletion

Step 3: EXPLICIT NOTATION
• Higher-authority layer notes conflict source
• Lower-authority layer notes constraint application
• Both entries cross-reference

Step 4: REVIEW TRIGGER (if applicable)
• CORE ↔ MEM conflict may trigger RLL falsification review
• If sufficient MEM evidence contradicts RLL, RLL review initiated
• RLL may be: REAFFIRMED / SCOPED / SUPERSEDED

────────────────────────────────────────────────────────────
XI. RLL LIFECYCLE MANAGEMENT
────────────────────────────────────────────────────────────
RLLs have defined lifecycle states from proposal to supersession.

XI.A RLL STATES
────────────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────┐
│  STATE          │  LOCATION    │  AUTHORITY   │  MUTABLE   │
├─────────────────────────────────────────────────────────────┤
│  CANDIDATE      │  SCHOLAR     │  None        │  Yes       │
│  PROPOSED       │  SCHOLAR     │  Advisory    │  Yes       │
│  BOUND          │  CORE        │  Binding     │  No*       │
│  UNDER REVIEW   │  CORE        │  Suspended   │  No        │
│  SUPERSEDED     │  ARCHIVE     │  Historical  │  No        │
└─────────────────────────────────────────────────────────────┘

* BOUND RLLs may only be modified via formal supersession process

XI.B STATE TRANSITIONS
────────────────────────────────────────────────────────────
CANDIDATE → PROPOSED
• Trigger: Cross-MEM coherence threshold met
• Requirement: Formal specification complete
• Authorization: Automatic (system determines eligibility)

PROPOSED → BOUND
• Trigger: User authorization
• Requirement: Coherence audit passed
• Authorization: Explicit user command

PROPOSED → CANDIDATE (Demotion)
• Trigger: User defers or new contradicting evidence
• Requirement: None
• Authorization: User command or system detection

BOUND → UNDER REVIEW
• Trigger: Sufficient contradicting MEM evidence
• Requirement: ≥3 MEMs with Tier A/B evidence challenging RLL
• Authorization: Automatic (system flags for user review)

UNDER REVIEW → BOUND (Reaffirmed)
• Trigger: User determination that RLL holds
• Requirement: Explicit analysis of contradicting evidence
• Authorization: Explicit user command

UNDER REVIEW → SUPERSEDED
• Trigger: User determination that RLL is falsified
• Requirement: Replacement RLL or explicit retirement
• Authorization: Explicit user command

BOUND → SUPERSEDED (Direct)
• Trigger: Major CORE version upgrade
• Requirement: New RLL explicitly supersedes old
• Authorization: Version upgrade authorization

XI.C SUPERSESSION RULES
────────────────────────────────────────────────────────────
• Superseded RLLs are NEVER deleted
• Supersession record includes: superseding RLL, rationale, timestamp
• Historical analysis may reference superseded RLLs
• Supersession is additive (new constraint replaces old)

────────────────────────────────────────────────────────────
XII. AUDIT & TRACEABILITY
────────────────────────────────────────────────────────────
All layer interactions must be auditable.

XII.A AUDIT REQUIREMENTS
────────────────────────────────────────────────────────────
1. INGESTION AUDIT
   • Every MEM ingestion logged with LER
   • Source MEMs traceable
   • Learning effects documented

2. PROMOTION AUDIT
   • Every RLL promotion logged with BER
   • Supporting MEMs traceable
   • Authorization recorded

3. CONFLICT AUDIT
   • All cross-layer conflicts logged
   • Resolution rationale documented
   • Authority application noted

4. LIFECYCLE AUDIT
   • All RLL state transitions logged
   • Transition triggers documented
   • Authorization recorded

XII.B AUDIT LOG STRUCTURE
────────────────────────────────────────────────────────────
Audit logs are append-only and stored in SCHOLAR.

Each audit entry contains:
• AUDIT-ID: Unique identifier
• TIMESTAMP: ISO 8601 format
• EVENT TYPE: INGESTION / PROMOTION / CONFLICT / LIFECYCLE
• ACTORS: System components and user (if applicable)
• INPUTS: What triggered the event
• OUTPUTS: What resulted
• AUTHORIZATION: Who/what authorized (if applicable)

XII.C TRACEABILITY GUARANTEE
────────────────────────────────────────────────────────────
For any bound constraint in CORE, it must be possible to trace:
• Which SCHOLAR phase produced it
• Which MEM files supported it
• Which user authorized binding
• When each step occurred

This traceability chain is the "epistemic provenance" of the constraint.

────────────────────────────────────────────────────────────
XII. IMPLEMENTATION GUIDANCE
────────────────────────────────────────────────────────────
For CMC Console implementation, the following components are required:

XII.A DATABASE EXTENSIONS
────────────────────────────────────────────────────────────
• learning_event_records — Stores LERs for MEM ingestion
• binding_event_records — Stores BERs for RLL promotion
• scholar_annotations — Stores SARs for MEM annotations
• rll_registry — Tracks RLL lifecycle states
• audit_log — Append-only audit trail

XIII.B SERVICE LAYER
────────────────────────────────────────────────────────────
• ingestion.service — Implements MEM → SCHOLAR protocol
• promotion.service — Implements SCHOLAR → CORE protocol
• conflict.service — Implements cross-layer conflict resolution
• lifecycle.service — Manages RLL state transitions
• audit.service — Maintains audit trail

XIII.C API ENDPOINTS
────────────────────────────────────────────────────────────
/api/pipeline/ingest      — Trigger MEM ingestion
/api/pipeline/promote     — Propose RLL for promotion
/api/pipeline/bind        — Bind authorized RLL to CORE
/api/pipeline/conflicts   — List cross-layer conflicts
/api/pipeline/audit       — Query audit trail
/api/rll/[id]             — RLL lifecycle management

XIII.D UI COMPONENTS
────────────────────────────────────────────────────────────
• Pipeline Visualization — Show MEM → SCHOLAR → CORE flow
• Ingestion Queue — Manage pending MEM ingestions
• Promotion Queue — Manage pending RLL promotions
• Conflict Dashboard — Surface and manage conflicts
• Audit Explorer — Query and display audit trail
• RLL Registry — View and manage RLL lifecycle

────────────────────────────────────────────────────────────
XIV. VERSIONING & GOVERNANCE
────────────────────────────────────────────────────────────
• This protocol is additive-only
• No section may be removed
• Clarifications permitted; weakening forbidden
• Compatibility with CIV–MEM–CORE is mandatory

────────────────────────────────────────────────────────────
XV. GLOSSARY
────────────────────────────────────────────────────────────
BER — Binding Event Record
CORE — CIV–CORE–[CIV] governance file
LER — Learning Event Record
MEM — MEM–[CIV]–[SUBJECT] memory file
NCZ — Negative Capability Zone
OGE — Option Generation Engine
POR — Pedagogical Observation Record
PWQR — Post-Write Queue Record
RLL — Recursive Learning Law
SAR — Scholar Annotation Record
SCHOLAR — CIV–SCHOLAR–[CIV] learning file
SCL — Scholar Contradiction Log (preserved contradiction)
SCR — Scholar Confidence Rating
WCP — Write Context Package

────────────────────────────────────────────────────────────
END OF FILE — LAYER–INTERACTION–PROTOCOL v1.0
────────────────────────────────────────────────────────────
