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
VIII. CROSS-LAYER CONFLICT RESOLUTION
────────────────────────────────────────────────────────────
When layers produce conflicting outputs, resolution follows authority hierarchy.

VIII.A CONFLICT TYPES
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

VIII.B CONFLICT RESOLUTION PROCEDURE
────────────────────────────────────────────────────────────
Step 1: CONFLICT DETECTION
• Identify conflicting layers and content
• Classify conflict type (see VIII.A)
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
IX. RLL LIFECYCLE MANAGEMENT
────────────────────────────────────────────────────────────
RLLs have defined lifecycle states from proposal to supersession.

IX.A RLL STATES
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

IX.B STATE TRANSITIONS
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

IX.C SUPERSESSION RULES
────────────────────────────────────────────────────────────
• Superseded RLLs are NEVER deleted
• Supersession record includes: superseding RLL, rationale, timestamp
• Historical analysis may reference superseded RLLs
• Supersession is additive (new constraint replaces old)

────────────────────────────────────────────────────────────
X. AUDIT & TRACEABILITY
────────────────────────────────────────────────────────────
All layer interactions must be auditable.

X.A AUDIT REQUIREMENTS
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

X.B AUDIT LOG STRUCTURE
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

X.C TRACEABILITY GUARANTEE
────────────────────────────────────────────────────────────
For any bound constraint in CORE, it must be possible to trace:
• Which SCHOLAR phase produced it
• Which MEM files supported it
• Which user authorized binding
• When each step occurred

This traceability chain is the "epistemic provenance" of the constraint.

────────────────────────────────────────────────────────────
XI. IMPLEMENTATION GUIDANCE
────────────────────────────────────────────────────────────
For CMC Console implementation, the following components are required:

XI.A DATABASE EXTENSIONS
────────────────────────────────────────────────────────────
• learning_event_records — Stores LERs for MEM ingestion
• binding_event_records — Stores BERs for RLL promotion
• scholar_annotations — Stores SARs for MEM annotations
• rll_registry — Tracks RLL lifecycle states
• audit_log — Append-only audit trail

XI.B SERVICE LAYER
────────────────────────────────────────────────────────────
• ingestion.service — Implements MEM → SCHOLAR protocol
• promotion.service — Implements SCHOLAR → CORE protocol
• conflict.service — Implements cross-layer conflict resolution
• lifecycle.service — Manages RLL state transitions
• audit.service — Maintains audit trail

XI.C API ENDPOINTS
────────────────────────────────────────────────────────────
/api/pipeline/ingest      — Trigger MEM ingestion
/api/pipeline/promote     — Propose RLL for promotion
/api/pipeline/bind        — Bind authorized RLL to CORE
/api/pipeline/conflicts   — List cross-layer conflicts
/api/pipeline/audit       — Query audit trail
/api/rll/[id]             — RLL lifecycle management

XI.D UI COMPONENTS
────────────────────────────────────────────────────────────
• Pipeline Visualization — Show MEM → SCHOLAR → CORE flow
• Ingestion Queue — Manage pending MEM ingestions
• Promotion Queue — Manage pending RLL promotions
• Conflict Dashboard — Surface and manage conflicts
• Audit Explorer — Query and display audit trail
• RLL Registry — View and manage RLL lifecycle

────────────────────────────────────────────────────────────
XII. VERSIONING & GOVERNANCE
────────────────────────────────────────────────────────────
• This protocol is additive-only
• No section may be removed
• Clarifications permitted; weakening forbidden
• Compatibility with CIV–MEM–CORE is mandatory

────────────────────────────────────────────────────────────
XIII. GLOSSARY
────────────────────────────────────────────────────────────
BER — Binding Event Record
CORE — CIV–CORE–[CIV] governance file
LER — Learning Event Record
MEM — MEM–[CIV]–[SUBJECT] memory file
NCZ — Negative Capability Zone
RLL — Recursive Learning Law
SAR — Scholar Annotation Record
SCHOLAR — CIV–SCHOLAR–[CIV] learning file
SCL — Scholar Contradiction Log (preserved contradiction)

────────────────────────────────────────────────────────────
END OF FILE — LAYER–INTERACTION–PROTOCOL v1.0
────────────────────────────────────────────────────────────
