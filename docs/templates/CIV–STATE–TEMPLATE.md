CIV–STATE–TEMPLATE — v3.2
Civilizational Memory Codex · State File Template

Status: ACTIVE · CANONICAL
Version: 3.2
Supersedes: CIV–STATE–TEMPLATE v1.11
Upgrade Type: XIV-B HARVEST PROTOCOL — EXCLUSIVE GATE FOR STATE → SCHOLAR
Class: CIV–STATE–TEMPLATE (Decision-Support Governance)
Compatibility: CIV–MEM–CORE v3.2 · CMC 3.2
Last Update: 11 February 2026

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.12) — HARVEST AS EXCLUSIVE GATE
────────────────────────────────────────────────────────────
Only "harvest" or "harvest session" in STATE mode may transfer
information into SCHOLAR (learn mode). Section XIV-B (Harvest
Protocol) added; directionality (§XII) updated. Cursor rule
cmc-state-scholar-harvest created. CMC–BOOTSTRAP and sync rule
updated.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.11) — COGNITIVE EXOSKELETON DESIGN OBJECTIVE
────────────────────────────────────────────────────────────
Section I (PURPOSE & AUTHORITY) now includes a named subsection
"COGNITIVE EXOSKELETON: DESIGN OBJECTIVE AND CONSTRAINTS": beneficiary
(principal and/or advisory institution), design objectives (blind-spot
reduction, frame transparency, temporal compression), anti-goals, and
duty-of-competence clarification (completeness across perspectives).
TERMINOLOGY–REGISTRY CIV–STATE entry updated to state augmentation
("extends cognitive reach without substituting for judgment").

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.10) — SECTION VII OPTIONAL SUBSECTIONS
────────────────────────────────────────────────────────────
Section VII (Decision-Relevant History) may include two optional
subsections when the relevant session activities are performed:
• Doctrine audit & session outputs: reference to standalone audit file
  (if any), summary line, ARC sources and precedent MEMs used.
• Forward projection: horizon, key variables, upside/downside in brief.
Format and placement are specified in the Section VII bullet list.
First implementation: CIV–STATE–GERMANY v1.2 (11 Feb 2026).

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.8) — SIX NEW STATE SESSION ACTIVITIES
────────────────────────────────────────────────────────────
STATE mode previously had two session mechanisms: Recursive
Analysis (X-A, the standard 8-slot options menu) and Decision
Points (X-B, time-sensitive leadership choices). Decision Points
exposed analytical gaps it could not fill — stability monitoring,
assumption validation, consequence projection, behavioural
prediction, relational dynamics, and pattern maintenance.

Six new session activities fill these gaps:
1. STABILITY WATCH (X-C): Periodic assessment of the 5 stability
   indicators with 30/60/90-day directional forecasts. Produces
   early warning signals. Updates Section VI.
2. ASSUMPTION STRESS TEST (X-D): Deliberate falsification of
   linchpin assumptions. Searches for disconfirming evidence.
   Updates Key Assumptions and confidence levels in Section IV.
3. SCENARIO TREE (X-E): Forward projection from trigger events
   through branching consequences. Produces conditional forecasts
   with probabilities. Creates monitoring frameworks.
4. REVEALED PREFERENCE TRACKER (X-F): Accumulates behavioural
   data points and generates predictions based on what the
   leadership actually chose. Updates Section VII.
5. CROSS-ENTITY PRESSURE TEST (X-G): Stress-tests relationships
   between entities from both sides. Produces interaction dynamics.
   Updates Section VIII.
6. PATTERN AUDIT (X-H): Validates patterns in Decision-Relevant
   History against current evidence. Prevents silent framework
   degradation. Updates Section VII activation levels.

Summary table and inter-activity triggers in Section X-I.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.9) — MEM CONNECTION DISCOVERY IN STATE
────────────────────────────────────────────────────────────
MEM SCAN previously accessed MEM files only through dimension-based
lookup (MEM–RELEVANCE–[CIV].md). This missed structurally related
MEMs that sat under different dimensions but were connected by
dependency, contradiction, or parallel edges — information already
present in each MEM file's CONNECTIONS section.

Fix: MEM SCAN steps in Decision Points (X-B), Stability Watch
(X-C), and Scenario Tree (X-E) now include a CONNECTION DISCOVERY
sub-step: after reading primary MEMs, read their MEM CONNECTIONS
section and load up to 2 additional MEMs from connection edges
when relevant to the current topic. Three-Source Compositional
Principle updated to note both discovery mechanisms (dimension-based
and connection-based). Option E (Historical precedent) updated to
use connection edges for graph-based precedent discovery. Cursor
rule (cmc-state-mem-grounding) updated with Step 4 (connection
discovery) and perspective-aware preferences for typed connections.

Works with both untyped (legacy) and typed connection formats. No
forced migration. Untyped connections use the one-line explanation
for relevance assessment; typed connections additionally support
perspective-aware filtering (legitimacy favours PARALLELS/TEMPORAL;
power favours DEPENDS_ON/GEOGRAPHIC/CONTRADICTS; liability favours
DEPENDS_ON/CONTRADICTS).

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.8) — MEM GROUNDING ENFORCEMENT
────────────────────────────────────────────────────────────
Scenario Tree Session 005 (ARC–RUSSIA–DECISION–POINTS) exposed
an enforcement gap: MEM SCAN steps existed in Decision Points,
Stability Watch, and Scenario Tree procedures, but "Load primary
MEMs" was interpreted as "find file names" rather than "read file
contents." The session cited three MEMs by name (BARBAROSSA,
CATHERINE–GREAT, PANIN) without reading any of them, and used
eight historical parallels from general knowledge with no MEM
grounding at all.

Fix: MEM SCAN steps in Decision Points (X-B step 2), Stability
Watch (X-C step 2), and Scenario Tree (X-E step 2) now explicitly
require reading MEM file contents and extracting specific details
(dates, mechanisms, sequences, actors, outcomes). A parallel cited
by name without MEM-derived detail is defined as a "label, not a
grounded parallel." New cursor rule (cmc-state-mem-grounding)
enforces this across all STATE activities.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.7) — MEM SCAN STEP IN DECISION POINTS
────────────────────────────────────────────────────────────
Session 004 exposed a gap: the Decision Points procedure
surveyed current news (step 1) but had no mechanism to
consult the MEM corpus for relevant historical parallels
before identifying decisions. The 1917 opponent morale
collapse parallel was missed because no MEM scan preceded
the analysis.

Fix: New step 2 (MEM SCAN) in the Decision Points procedure
requires consulting MEM–RELEVANCE–[CIV].md (or the STATE
file's Section VII as fallback) to load relevant MEMs before
decision-point identification. This ensures the civilisational
memory corpus informs the identification phase — not just the
downstream grounding checkpoint.

Procedure step numbers incremented: old steps 2–7 become 3–8.
All internal references updated.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.6) — OPPONENT CONSTRAINT ASSESSMENT
────────────────────────────────────────────────────────────
Methodological fix: the STATE framework's entity-orientation
caused systematic underweighting of opponent degradation. The
three analytical perspectives (legitimacy, power, liability)
all looked inward — tracking the entity's own constraints but
treating the opponent's capacity as a background condition.
This is a structural analysis error: the power perspective
requires relative assessment (both sides), not entity-only.

Three changes:

1. NEW MANDATORY SECTION VI-B: OPPONENT CONSTRAINT ASSESSMENT.
   Required for any STATE file whose material options depend
   on a principal opponent or partner's capacity. Tracks the
   opponent's binding constraints, degradation trajectory, and
   relative position vs. the entity's own constraints.

2. BINDING CONSTRAINT REFRAMING: Where a material option's
   success depends on relative degradation (e.g. attrition war),
   the binding constraint must be framed as a relative variable
   ("does opponent X degrade faster than entity Y?"), not an
   absolute one ("does entity replacement exceed entity
   consumption?").

3. COMPLETENESS AUDIT: Two new checklist items — opponent
   constraint assessment present; binding constraints framed
   as relative where applicable.

Source: Decision Points Session 004, CIV–STATE–RUSSIA.
The "win on the battlefield" variant of Option A was
systematically underweighted because Ukraine's manpower
degradation curve was not tracked. This gap is now closed
in the Russia file and prevented for all future STATE files.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.5) — DECISION POINTS ENHANCEMENTS
────────────────────────────────────────────────────────────
Six enhancements to Section X-B based on creative review of the
Decision Points activity after two live sessions:

1. REVEALED PREFERENCE CHECK (new step 4): Before deepening,
   check whether the entity has faced an analogous decision
   before and what it actually chose. Revealed preferences beat
   structural logic for predicting personalist systems.
2. TIME-SENSITIVITY MARKER (step 6): Tag each decision point
   DAYS / WEEKS / MONTHS. Tells user which decisions are most
   perishable.
3. DISCRIMINATING SIGNAL (step 6): One observable indicator per
   decision point that reveals the decision has been made.
   Turns analysis into monitoring.
4. DECISION POINT INTERACTIONS (step 6): Note whether decisions
   constrain, foreclose, or share constraints with each other.
   Surfaces the decision architecture.
5. PRE-MORTEM (step 8): After user selects action, always offer
   "Assume this failed — what went wrong?" Reverses cognitive
   direction to surface hidden failure modes.
6. EXPIRY / RECURRENCE TRACKING (Activity Record): Decision
   points tagged OPEN / RESOLVED / EXPIRED. Recurring decisions
   noted across sessions. Recurrence = leadership deferral.

Procedure renumbered (now 7 steps, was 6).

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.4) — DECISION POINTS AUDIT FIXES
────────────────────────────────────────────────────────────
Post-session audit of Decision Points activity (two sessions on
CIV–STATE–RUSSIA). Five fixes applied to Section X-B:

1. Step 6 (OPTIONS): Replaced standard 8-slot recursive options
   with Decision Points-specific option structure — numbered
   decision-point options after initial presentation, lettered
   action options after deepening, consequence-driven options
   after action selection.
2. Step 5 (DEEPEN): Added requirement that deepened options must
   be specific actions the entity can take — concrete, entity-
   oriented, mutually exclusive.
3. SOURCE TRANSPARENCY: New binding clause in Grounding
   Requirements — distinguish verified data, projections, and
   anonymous/thin sourcing. Do not present projections as facts.
4. ACTIVITY RECORD: Added 20-line ceiling per session entry.
   ARC file is an index, not a summary.
5. ARC–RUSSIA–DECISION–POINTS SESSION 002 trimmed to comply.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.3) — DECISION POINTS SESSION ACTIVITY
────────────────────────────────────────────────────────────
This version adds Decision Points as a named STATE session
activity (Section X-B).

v1.3 additions:
• Section X-B: DECISION POINTS (SESSION ACTIVITY)
  — Entity-oriented: decisions identified from the entity's
    leadership perspective, not an external observer's
  — Distinct from Material Options: time-bound, concrete choices
    vs broad strategic paths
  — Seven-step procedure: search, identify, frame, analyse,
    ground, assess, recurse
  — Structural-versus-personal divergence as core analytical product
  — Subject to Duty of Competence (three perspectives required)
  — Outputs feed back to STATE file via standard evidence-update
    and assessment-closure mechanisms

Derived from: STATE session on CIV–STATE–RUSSIA (February 2026)
in which the activity pattern was first performed and recognized.

────────────────────────────────────────────────────────────
I. PURPOSE & AUTHORITY
────────────────────────────────────────────────────────────
DEFINING STATEMENT:
**STATE learns from the present.** It analyses current events
through historically-grounded patterns. It serves the decision-maker's
need for structured options.

(Contrast: **SCHOLAR learns from the past.** It extracts patterns
from historical sources across civilizational time. It serves the
system's accumulated understanding.)

The temporal distinction is primary. SCHOLAR and STATE have different
inputs (historical sources vs current events), different temporal
orientations (centuries vs weeks-to-years), different learning dynamics
(pattern extraction vs situation tracking), and different update rhythms
(when new historical analysis is completed vs when the situation changes).
The audience distinction (system-internal vs decision-maker) and the
register distinction (system terminology vs professional language) follow
from the temporal orientation — they are consequences, not definitions.

Governing principle: **Equip, don't advise.**
The system presents structured options grounded in competing analytical
perspectives. The decision-maker navigates; accountability lives with
the choice, not the analysis.

STATE files:
• Present competing analytical perspectives without resolving them
• Ground each option in explicit reasoning with stated assumptions
• Signal when evidence strongly favors one outcome
• Preserve contradictions between perspectives as decision-relevant
• Use professional language throughout — no system-internal terminology

STATE files do NOT:
• Recommend a single course of action
• Resolve tensions between analytical perspectives
• Use system-internal vocabulary (see Section XI: Register Rules)
• Replace CIV–SCHOLAR, CIV–CORE, or CIV–DOCTRINE files

Authority:
STATE is derived from, and downstream of, CIV–CORE and CIV–SCHOLAR.
No content in STATE may contradict canonical CIV–CORE axioms or
accepted doctrines. STATE translates analytical depth into
decision-relevant form; it does not generate new analysis independently.

THREE-SOURCE COMPOSITIONAL PRINCIPLE:
STATE analytical output synthesises three source layers, each
contributing what it is best at:

1. MEM FILES — Civilizationally-specific depth. Historical
   mechanisms, sequences, dates, actors, and outcomes drawn from
   the civilizational memory corpus. This layer supplies the
   specific detail that makes a historical parallel analytically
   useful rather than decorative: not "Catherine converted military
   gains to leverage" but the specific treaty terms, the timeline
   from military peak to annexation, and why the mechanism worked.
   MEM files are accessed through two discovery mechanisms:
   (a) MEM–RELEVANCE–[CIV].md — dimension-based lookup (primary);
   (b) MEM CONNECTIONS sections of loaded files — connection-based
   discovery (secondary). Dimension lookup surfaces MEMs by topic;
   connection discovery surfaces structurally related MEMs that
   dimension indexing may have missed (e.g., loading Panin surfaces
   Catherine via "expansion over equilibrium" — a tension relevant
   to settlement analysis even if the two MEMs sit under different
   dimensions). Both mechanisms are applied during the MEM SCAN
   steps of session activities.

2. STATE INTERNAL STRUCTURE — Accumulated analytical context.
   Material Options with evidence updates, stability indicators,
   validated diagnostics (e.g. revealed-preference hierarchy),
   identified patterns (e.g. fiscal-temporal compression trap),
   decision-point history across sessions, and opponent constraint
   assessments. This layer makes the analysis cumulative — each
   session builds on what prior sessions established.

3. GENERAL KNOWLEDGE — Breadth and external context. Cross-domain
   historical parallels (e.g. Korean armistice, Cuban Missile
   Crisis), opponent behaviour, external-actor dynamics, current
   events, and factual knowledge that sits outside the entity's
   civilizational memory corpus. This layer fills gaps — especially
   for developments involving actors whose civilizational memory
   has not yet been built.

All three layers should be present in substantive analytical output.
An output drawing only on layers 2 and 3 (STATE structure +
general knowledge) is analytically competent but historically thin.
An output drawing only on layer 1 (MEM files) without STATE
context loses the cumulative analytical advantage. The synthesis
of all three produces output that is historically grounded,
analytically cumulative, and contextually broad.

When a parallel is drawn from layer 3 (general knowledge) and
recurs across multiple analytical nodes, it should be flagged as
a MEM generation candidate at session closure — it has demonstrated
analytical utility and may warrant inclusion in the civilizational
memory corpus.

ENTITY FOCUS: CORE, STATE, AND SCHOLAR RE-ANCHOR TOGETHER.
When the entity under analysis changes, the session re-anchors to the
new entity. The previous entity's CIV–CORE, CIV–STATE, and
CIV–SCHOLAR cease to govern. Load the new entity's CORE and (per mode)
STATE file or SCHOLAR file as needed. STATE mode: CORE + STATE file +
MEM–RELEVANCE + MEMs. Load only what the mode needs. See CMC–BOOTSTRAP;
cursor rules cmc-state-mem-grounding, cmc-scholar-mode.

────────────────────────────────────────────────────────────
COGNITIVE EXOSKELETON: DESIGN OBJECTIVE AND CONSTRAINTS
────────────────────────────────────────────────────────────
STATE and CIV–STATE files implement a **cognitive exoskeleton** for
the head of state: they extend the decision-maker's cognitive reach
(options, precedent, disconfirming evidence) without substituting
for judgment or accountability. Augment, don't replace.

BENEFICIARY: Serves the principal and/or the principal's designated
advisory institution (e.g. NSC, cabinet secretariat), so that the
office—not only the incumbent—can use historically-grounded option
surfacing.

DESIGN OBJECTIVES:
• **Reduce predictable blind spots** — Doctrine-shaped framing,
  single-perspective dominance, unsupported absence claims, and
  single-source evidence are countered by Negative Claim Check,
  ARC source coverage, three perspectives, and cross-civilization
  traversal. Reducing such blind spots is an explicit design goal.
• **Frame transparency** — Where analysis is doctrine- or MEM-shaped,
  surface that dependency so the decision-maker can assess how much
  the options depend on the current corpus and doctrines (see
  gated-spiral awareness).
• **Temporal compression** — Compress civilizational time (MEM corpus)
  into present-relevant options and precedents without dropping
  mechanism or sequence, so the decision-maker sees under what
  conditions outcomes occurred and with what consequences.

ANTI-GOALS (what the exoskeleton must NOT become):
• Must not act as an oracle (single recommended course).
• Must not hide contradiction between perspectives or sources.
• Must not present doctrine-shaped findings as frame-independent truth.
• Must not create single-point cognitive dependency — the principal
  retains other advisers and sources.

DUTY OF COMPETENCE (clarification): "Surface all material options"
means completeness **across all three perspectives** (no perspective
systematically under-represented), not an exhaustive list of every
conceivable option. See Section III for the full binding declaration.

────────────────────────────────────────────────────────────
II. AUDIENCE & REGISTER
────────────────────────────────────────────────────────────
STATE files are written for a **decision-maker** who has not studied
the CMC's internal governance.

The reader should be able to understand any STATE file without
knowing what a MEM, RLL, analytical profile, options menu, ARC, or three-perspective analysis is.

REGISTER RULES:
• Use professional analytical language throughout
• Translate all system-internal concepts into plain equivalents
• Name analytical perspectives by their content, not their profile names
• Citation of source files is permitted (e.g. "Source: MEM–RUSSIA–PETER")
  but internal governance terms must not appear in analytical prose

TRANSLATION TABLE (for system use during file production):

| Internal Term | External Equivalent |
|---------------|---------------------|
| Mercouris lens / MIND | Legitimacy and institutional continuity perspective |
| Mearsheimer lens / MIND | Power distribution and structural constraint perspective |
| Barnes lens / MIND | Leadership liability and mechanism perspective |
| Tri-frame | Three-perspective analysis |
| OGE | Structured options |
| RLL | Recurring pattern / historical rule |
| Polyphonic tension | Preserved contradictions / unresolved tensions |
| POST-BARNES | After liability analysis |
| Blend Law | Content proportion rule |
| ARC | Source hierarchy |
| MEM (in prose) | Historical memory / source file |

────────────────────────────────────────────────────────────
III. DUTY OF COMPETENCE (BINDING)
────────────────────────────────────────────────────────────
Every CIV–STATE file carries the following obligation:

DUTY OF COMPETENCE DECLARATION (must appear in file header):

  "This file is subject to a completeness standard. The system's
  obligation is to surface all material options identifiable through
  the application of three analytical perspectives: legitimacy and
  institutional continuity; power distribution and structural
  constraint; and leadership liability and mechanism. Failure to
  apply any perspective constitutes a completeness violation."

DEFINITIONS:
• **Material option**: An option whose omission would leave the
  decision-maker blind to a plausible outcome with significant
  consequences.
• **Completeness**: All three analytical perspectives have been applied;
  each has produced at least one option or an explicit finding of
  "no distinct option from this perspective."
• **Violation**: A perspective was not applied, or a material option
  identifiable through any perspective was omitted.

────────────────────────────────────────────────────────────
IV. FILE STRUCTURE (MANDATORY SECTIONS)
────────────────────────────────────────────────────────────
Every CIV–STATE file MUST contain the following sections in order:

HEADER
  • File name, version, status
  • Entity name, classification, active/concluded status
  • Duty of competence declaration
  • Last updated date

SECTION I: ENTITY IDENTIFICATION
  • Current and historical names
  • Entity classification (see Section V)
  • Phase history (if civilization-state)
  • Active or concluded status

SECTION II: SUCCESSION AND INHERITANCE
  • Predecessor relationships (typed)
  • Successor relationships (typed)
  • Contested claims
  • Inherited patterns and institutions

SECTION III: STRATEGIC POSITION (THREE PERSPECTIVES)
  • Legitimacy and institutional continuity assessment
  • Power distribution and structural constraint assessment
  • Leadership liability and mechanism assessment
  • Tensions between perspectives (preserved, not resolved)

SECTION IV: MATERIAL OPTIONS
  • Minimum 3 structured options
  • Each option: title, grounding, reasoning, assumptions,
    confidence level, risks, success conditions, failure conditions,
    discriminating evidence
  • Confidence signaling (see Section VII)

SECTION V: COMPLETENESS AUDIT
  • Three-perspective checklist
  • Material option coverage
  • Identified gaps

SECTION VI: STABILITY INDICATORS
  • Internal legitimacy stress signals
  • Current indicator status
  • Threshold rules for analytical weight shifts

SECTION VI-B: OPPONENT CONSTRAINT ASSESSMENT (when applicable)
  • Principal opponent or partner identification
  • Opponent binding constraints (with same rigour as entity's own)
  • Relative degradation assessment
  • Discriminating signals for both curves
  • Required when any material option's success depends on the
    opponent's capacity degrading relative to the entity's

SECTION VII: DECISION-RELEVANT HISTORY
  • Pattern activations linking historical content to current options
  • Source citations
  • Doctrine audit & session outputs (optional): when a doctrine audit
    or session harvest is performed, record reference to audit file (if
    standalone), 1–2 line summary, and precedent MEMs used; format
    "Doctrine audit (date, ARC-sourced) | Result | File: [path] |
    Precedent: [MEM list]"
  • Forward projection (optional): when a forward projection is
    recorded, add horizon (e.g. 6–12 months), key variables, upside/
    downside in brief; format "Forward projection — [topic] (horizon) |
    Variables: ... | Upside: ... | Downside: ..."

SECTION VIII: CROSS-ENTITY LINKS
  • Comparison relationships
  • Key distinctions
  • Relevant adversary or partner dynamics

SECTION IX: SOURCE VERSIONS (SYNC REFERENCE)
  • Version of each source file STATE was last assessed against
  • Sync command reference

SECTION X: STATE LOG
  • Accumulated entries from analytical sessions
  • Revision records when options change

────────────────────────────────────────────────────────────
V. ENTITY CLASSIFICATION
────────────────────────────────────────────────────────────
Every entity in a STATE file must be classified as one of:

| Classification | Definition | Examples |
|----------------|------------|----------|
| CIVILIZATION-STATE | Active state claiming continuous civilizational identity; internal phases within one entity | Russia, China, Iran, India |
| STANDARD-STATE | Active state with heritage links but no civilizational identity claim | France, Germany, USA, UK |
| FRAGMENTED-SOURCE | Concluded entity whose inheritance fragments across multiple successors | Roman Empire, Mongol Empire |
| SUCCESSOR-STATE | Active state with contested relationship to a predecessor | Turkey, Greece |

Classification affects analytical operations:
• CIVILIZATION-STATE: Track legitimacy grammar across phases
• STANDARD-STATE: Track heritage without civilizational claims
• FRAGMENTED-SOURCE: Track inheritance flows outward to successors
• SUCCESSOR-STATE: Track contested claims inward from predecessors

────────────────────────────────────────────────────────────
VI. SUCCESSION LINK TYPES
────────────────────────────────────────────────────────────
Succession links in Section II use the following typed relationships:

| Type | Definition |
|------|------------|
| DIRECT_CONTINUATION | Same political entity across state-form changes |
| IDEOLOGICAL_CLAIM | Successor claims ideological inheritance (e.g. Third Rome) |
| CONQUEST_ABSORPTION | Successor absorbed predecessor through conquest |
| CULTURAL_INHERITANCE | Successor inherited cultural patterns without political continuity |
| PARTIAL_ABSORPTION | Predecessor's patterns absorbed during period of domination |
| INSTITUTIONAL_TRANSFER | Specific institutions transferred to successor |
| LINGUISTIC_INHERITANCE | Language family continuity |
| CONTESTED | Multiple entities claim same inheritance; unresolved |

────────────────────────────────────────────────────────────
VII. MATERIAL OPTION FORMAT
────────────────────────────────────────────────────────────
Each material option in Section IV MUST follow this structure:

OPTION [LETTER]: [Title]

  Grounded in: [Which analytical perspective(s)]
  
  Reasoning: [Why this path is plausible — 2-4 sentences]
  
  Key Assumptions:
  • [Assumption 1] — Linchpin: [YES/NO]
  • [Assumption 2] — Linchpin: [YES/NO]
  • [Assumption 3] — Linchpin: [YES/NO]
  (Minimum 3 assumptions. Linchpin = if falsified, option collapses.)
  
  Confidence: [HIGH / MODERATE / LOW]
  (HIGH = structural logic strongly favors this outcome;
   MODERATE = plausible under stated assumptions;
   LOW = possible but depends on multiple uncertain conditions)
  
  Grounding: [MANDATORY — one to two sentences immediately after
  confidence level. Names the historical precedents assessed and
  identifies the single binding constraint. See Section VII.A for
  methodology.]
  
  Risks: [What goes wrong if chosen — 2-3 sentences]
  
  Conditions for success: [When this path works]
  
  Conditions for failure: [When this path fails]
  
  Discriminating evidence: [What observable evidence would confirm
  or disconfirm this option's assumptions — 1-3 specific indicators]

MINIMUM: 3 options per STATE file.
MAXIMUM: No fixed limit, but each option must be material.

VII.A GROUNDING LINES AND BINDING CONSTRAINTS (MANDATORY)
────────────────────────────────────────────────────────────
Every material option MUST include a grounding line immediately
after the confidence level. The grounding line signals analytical
discipline to the reader without exposing internal diagnostic
machinery.

GROUNDING LINE FORMAT:
"Assessed against [named constraints/evidence] and [N] historical
precedents ([named precedents]). Binding constraint: [single variable]
— [why it binds: consequence if falsified]."

BINDING CONSTRAINT IDENTIFICATION:
The binding constraint is selected by applying two criteria in sequence:

1. SPEED OF COLLAPSE: Among the linchpin assumptions, which one —
   if falsified — collapses the option fastest? The binding constraint
   is the variable with the shortest time-to-collapse.

2. LEAST CONTROLLABLE (tiebreaker): Among assumptions with similar
   collapse speeds, the binding constraint is the one the entity has
   the least ability to influence.

RULES:
• Exactly one binding constraint per option
• The binding constraint must be drawn from the linchpin assumptions
• Historical precedents must be named (not counted abstractly)
• No numerical indicator counts (e.g. "3 of 4 indicators support")
  — this creates false quantitative precision. The system's diagnostic
  indicators are qualitative assessments, not measurements.
• The grounding line tells the reader: what evidence was assessed,
  what would flip the conclusion, and how fast
• RELATIVE FRAMING (when applicable): When the option's success
  depends on the opponent's capacity degrading relative to the
  entity's (e.g. attrition, endurance, outlasting), the binding
  constraint must be framed as a relative variable — tracking both
  degradation curves. An entity-only binding constraint is
  insufficient for options that are implicitly races. See Section
  IX-B (Opponent Constraint Assessment) for the full requirement.

RATIONALE:
The decision-maker cannot monitor twenty assumptions simultaneously.
The binding constraint is the single variable they should be watching
above all others for each option — the one that, if it moves, changes
everything.

────────────────────────────────────────────────────────────
VIII. CONFIDENCE SIGNALING
────────────────────────────────────────────────────────────
Adapted from intelligence tradecraft (Analysis of Competing Hypotheses):

| Level | Meaning | Usage |
|-------|---------|-------|
| HIGH | Structural logic strongly favors this outcome; multiple evidence streams converge | Use sparingly; signals near-certainty under stated assumptions |
| MODERATE | Plausible under stated assumptions; some supporting evidence | Default level for most options |
| LOW | Possible but depends on multiple uncertain conditions | Flag as speculative; include because omission would be a completeness violation |

RULES:
• At least one option should be MODERATE or higher
• HIGH confidence requires explicit structural reasoning
• LOW confidence options are included for completeness, not emphasis
• Confidence applies to the option's plausibility, not its desirability

────────────────────────────────────────────────────────────
IX. STABILITY INDICATORS
────────────────────────────────────────────────────────────
Section VI of each STATE file must track indicators of internal
legitimacy stress. When internal stress is elevated, the legitimacy
and institutional continuity perspective carries elevated analytical
weight — because during internal stress, a gap opens between what
the state can do and what the state will do.

INDICATOR CATEGORIES:
• Ideological coherence (can the regime justify its own existence?)
• Elite cohesion (are insiders defecting or positioning to defect?)
• Popular legitimacy (does the population accept the regime's claims?)
• Institutional function (are state institutions performing or decaying?)
• Narrative control (is the regime's story holding or fragmenting?)

STATUS LEVELS:
• STABLE — No significant stress signals
• STRESSED — Indicators present but contained
• CRITICAL — Multiple indicators active; gap between capability and
  willingness likely

THRESHOLD RULE:
When ≥3 indicators are STRESSED or any indicator is CRITICAL,
the legitimacy and institutional continuity perspective carries
elevated predictive weight in Section IV options.

────────────────────────────────────────────────────────────
IX-B. OPPONENT CONSTRAINT ASSESSMENT (MANDATORY WHEN APPLICABLE)
────────────────────────────────────────────────────────────
When any material option's success or failure depends on the
capacity of a principal opponent (adversary, partner, or
counterparty), the STATE file MUST include an opponent
constraint assessment in Section VI-B.

APPLICABILITY:
• Required when the entity is in an active conflict, negotiation,
  or strategic competition where outcomes depend on relative
  capacity, not absolute capacity alone
• Required when any material option's binding constraint is
  implicitly relative (e.g. "outlast the opponent" = the outcome
  depends on which side's constraints bind first)
• Not required for purely internal assessments (e.g. succession
  planning, institutional reform) with no external opponent

STRUCTURE:
The opponent constraint assessment must include:

1. OPPONENT IDENTIFICATION
   • Named opponent or counterparty
   • Classification of the relationship (adversary, partner,
     mediator, competitor)

2. OPPONENT BINDING CONSTRAINTS
   • Minimum 2 binding constraints identified with the same
     rigour applied to the entity's own constraints
   • Each constraint must include: status (binding now / stressed /
     deteriorating / stable), evidence, assessment, sources
   • Apply the same criteria as entity binding constraints:
     speed-of-collapse and least-controllable

3. RELATIVE DEGRADATION ASSESSMENT
   • Which side's primary binding constraint is binding sooner?
   • What is the relationship between the two degradation curves?
   • Is the race between the curves linear or subject to
     non-linear dynamics (e.g. morale breaks, fiscal cliffs)?

4. DISCRIMINATING SIGNALS
   • Observable indicators for both the entity's curve and the
     opponent's curve
   • A crossover indicator: what observable evidence would reveal
     which curve is winning?

BINDING CONSTRAINT REFRAMING RULE:
When a material option depends on relative degradation, its
binding constraint MUST be framed as a relative variable:

  INCORRECT: "Binding constraint: industrial replacement rate
  relative to operational consumption"
  (This tracks only the entity's side of the attrition race.)

  CORRECT: "Binding constraint: the relative degradation rate —
  does [opponent]'s capacity degrade faster than [entity]'s
  fiscal/material base?"
  (This tracks both sides and identifies the race.)

The previous (entity-only) framing may be retained as a
sub-constraint but is insufficient alone.

SOURCE REQUIREMENT:
Opponent constraint data must meet the same source transparency
standards as entity data (see Section X-B, Source Transparency).
Distinguish verified data, projections, and thin sourcing.
Intelligence estimates of opponent capacity should be flagged
as projections, not facts.

RATIONALE:
Entity-oriented frameworks systematically underweight opponent
degradation because the three analytical perspectives
(legitimacy, power, liability) are designed to look inward.
The power perspective requires relative assessment by definition
— structural analysis is analysis of relative position. Without
an explicit opponent constraint section, the power perspective
is applied with a structural bias that can cause material
options to be systematically over- or under-weighted.

────────────────────────────────────────────────────────────
X. REVISION PROTOCOL
────────────────────────────────────────────────────────────
When new evidence falsifies a linchpin assumption in a material option:

1. Change option status: ACTIVE → UNDER_REVIEW
2. Document trigger: What evidence changed
3. Re-assess assumptions: Update Key Assumptions
4. Re-evaluate confidence: Adjust confidence level
5. Record in State Log (Section IX of STATE file)

REVISION RECORD FORMAT:
  Option: [Letter]
  Prior Status: ACTIVE
  Trigger: [What changed]
  Date: [YYYY-MM-DD]
  Key Change: [What shifted]
  New Confidence: [Level]
  Re-assessment: [COMPLETE / PENDING]

All revisions must be documented. Silent changes to options are
prohibited.

────────────────────────────────────────────────────────────
X-A. RECURSIVE ANALYSIS OPTIONS (CMC 3.2)
────────────────────────────────────────────────────────────
STATE sessions are recursive. After every substantive analytical
turn, the system presents 8 analysis options that guide the next
response. Closure is deferred until the user selects assessment
closure (H) or exits STATE mode.

Recursive analysis is the designed outcome: each option directs
the creation of the next response, which again ends with options.
This mirrors SCHOLAR LEARN's recursive options menu but uses
STATE's external-facing register and decision-support framing.

ANALYSIS OPTIONS (8 FIXED SLOTS):

  A — Legitimacy and institutional continuity: [deepen this
       perspective on the current situation — 10-20 words]
  B — Power distribution and structural constraint: [deepen
       this perspective — 10-20 words]
  C — Leadership liability and mechanism: [deepen this
       perspective — 10-20 words]
  D — Three-perspective assessment: [all three on a specific
       issue — 10-20 words]
  E — Historical precedent: [which MEM-grounded pattern
       illuminates this? — 10-20 words. Check connections
       of loaded MEMs for structurally relevant predecessors;
       graph-based discovery supplements dimension-based lookup]
  F — Forward projection: [what does this suggest for a
       specific timeframe or scenario? — 10-20 words]
  G — Cross-entity: [how does this affect a related entity?
       — 10-20 words]
  H — Assessment closure: [synthesize findings, propose
       STATE file updates]

SLOT RULES:
• Slots are FIXED — A is always legitimacy/institutional
  continuity, B is always power/structural, etc.
• Slots are STATELESS — regenerated fresh each turn, no
  semantic shifting based on prior selections
• Each option 10-20 words with at least one concrete anchor
  (person, place, event, date, entity)
• Options guide the creation of the next response (productive,
  not predictive)

REGISTER RULES FOR OPTIONS:
• Perspectives named by content, not by MIND profile name
• No OGE, MIND, or system-internal terms
• Professional analytical language throughout
• Selecting A/B/C applies the analytical logic of that
  perspective in professional register — it does NOT invoke
  a MIND linguistic fingerprint

RESPONSE LENGTH (when user selects an option):
• Target: 100-200 words before next options
• Maximum: 200 words before options
• Exception — Option H: 300-400 words (session recap +
  proposed STATE file updates + follow-on options)

RESPONSE LENGTH (free-form question/instruction):
• Target: 200-400 words before options
• Maximum: 500 words before options

OPTION H — ASSESSMENT CLOSURE:
When user selects H, deliver:
1. Session recap (6-10 words)
2. Synthesis paragraph (<100 words): key findings, tensions,
   and decision-relevant shifts identified in this session
3. Proposed STATE file updates: specific changes to options,
   assumptions, confidence levels, stability indicators, or
   evidence updates — with section references
4. Three follow-on options: (b) small incremental update,
   (c) bigger structural revision, (a) no change needed

DISTINCTION FROM SCHOLAR OPTIONS:
• SCHOLAR options deepen historical understanding
• STATE options refine decision-relevant assessment
• SCHOLAR E/F traverse to earlier/later historical eras
• STATE E draws historical precedent into the present;
  STATE F projects the analysis forward in time
• SCHOLAR H produces a learning synthesis
• STATE H produces actionable STATE file update proposals

ACTIVITY MENU (PERSISTENT):
After the 8-slot options, append a single-line activity menu:

"Activities: decision points | stability watch | stress test |
scenario tree | revealed preference | pressure test | pattern audit"

This line appears after EVERY substantive turn in standard recursive
analysis. It is suppressed when an activity is active (the activity's
own option structure replaces both the 8-slot menu and the activity
menu). It reappears when the user exits the activity.

The activity menu is FIXED — same text every turn. It is a capability
reminder, not a context-dependent suggestion. The user invokes an
activity by typing its name (or a recognisable abbreviation).

────────────────────────────────────────────────────────────
X-B. DECISION POINTS (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Decision Points is a STATE session activity that identifies and
analyses the specific, time-bound choices facing the entity's
leadership right now.

ORIENTATION:
Decision Points are entity-oriented. The analysis is conducted from
the perspective of the entity's leadership — what must this leader
choose? — not from the perspective of an external observer. The
three analytical perspectives are applied as constraints the
leadership faces, not as recommendations from outside.

DISTINCTION FROM MATERIAL OPTIONS:
Material Options (Section IV) are the broad strategic paths available
to the entity, documented in the STATE file and updated as evidence
accumulates. Decision Points are concrete, time-sensitive choices that
the leadership faces in a given week or period — they sit within and
cut across Material Options. A single Decision Point may engage
multiple Material Options simultaneously.

| Material Options | Decision Points |
|------------------|-----------------|
| Broad strategic paths (endure, settle, diversify, escalate) | Specific binary/ternary choices ("signal flexibility at Abu Dhabi or hold position") |
| Updated when evidence shifts binding constraints | Identified from current news, then assessed against existing framework |
| Persist across sessions | Time-bound; may expire or resolve |
| Documented in Section IV | Surface in sessions; feed back to Section IV via evidence updates |

NUMBER OF DECISION POINTS:
• Default: 3 decision points per activity invocation
• Rare exception: More than 3 only when the decision landscape
  genuinely requires it (e.g. simultaneous crises on independent
  axes). The bar is high — most situations compress to 3.
• Rationale: The decision-maker's attention is finite. Three
  well-chosen decisions cover the decision space better than five
  diluted ones. Breadth of decision-space coverage matters more
  than exhaustive enumeration.

PROCEDURE:
1. CORE LOAD: Read CIV–CORE–[CIV].md for the entity (if present).
   Use for axiom and constraint awareness; STATE output must not
   contradict CORE axioms.

2. SEARCH: Survey current news and observable developments affecting
   the entity. Focus on the period since the last STATE session or
   evidence update.

3. MEM SCAN: Before identifying decision points, read
   MEM–RELEVANCE–[CIV].md for the entity. Based on the topics
   surfaced in step 1, identify which analytical dimensions are
   in play (e.g. attrition/endurance, fiscal constraint, morale
   collapse, settlement precedent, escalation, partnership).
   Read the primary MEM files listed under those dimensions —
   read the actual file contents, not just the file name.
   Extract specific details (dates, mechanisms, sequences,
   actors, outcomes) that will shape decision-point identification
   and historical-anchor selection. A parallel cited by name
   without MEM-derived detail is a label, not a grounded parallel.
   CONNECTION DISCOVERY: Read the MEM CONNECTIONS section of each
   loaded MEM. If connections surface additional MEMs relevant to
   the current topic that were not already loaded, read up to 2
   additional MEMs from connection edges. Assess relevance from
   the connection's one-line explanation. Note which connection
   led to the additional load.
   If no MEM relevance index exists for the entity, consult the
   STATE file's Decision-Relevant History (Section VII) and
   Material Options evidence updates as the minimum MEM scan.

4. IDENTIFY: Select the 3 most important specific decisions the
   entity's leadership faces. Each decision must be:
   • A concrete choice between identifiable paths (not an abstract
     strategic orientation)
   • Time-sensitive (delay has consequences; the decision is arriving)
   • Grounded in observable evidence (news, data, diplomatic signals)
   • Selected to maximise coverage of the decision space — the 3
     decisions should span different domains or constraints, not
     cluster on a single axis

5. REVEALED PREFERENCE CHECK: Before deepening, check whether
   the entity has faced a structurally analogous decision before.
   Consult the STATE file (Material Options, evidence updates),
   MEM corpus, and ARC–DECISION–POINTS record for precedents.
   If a precedent exists, note what the leadership actually did —
   not what structural logic predicted, but what was chosen.
   Revealed preferences are more predictive than structural
   analysis for personalist systems. Format: one line per
   decision point where a precedent exists.
   Example: "Precedent: After Midnight Hammer (June 2025),
   leadership chose verbal condemnation without hardware transfer."
   If no precedent exists, state "No analogous precedent found."

6. FRAME: For each decision, name the specific choice in plain
   language. Frame it as the leadership experiences it — with the
   constraints they face, not the constraints an outside observer
   would impose.

7. ANALYSE: Apply all three analytical perspectives to each decision.
   The initial presentation must be SHORT AND CONCISE — 2-3 sentences
   per decision, identifying:
   • The concrete choice
   • What the three perspectives see (compressed — one key finding
     per perspective, not full elaboration)
   • Where the perspectives converge or diverge
   • TIME-SENSITIVITY MARKER: Tag each decision point with its
     urgency window — DAYS, WEEKS, or MONTHS. This tells the
     user which decisions are most perishable and when to re-run
     the activity.

   DISCRIMINATING SIGNAL: Each decision point must include one
   observable indicator that would reveal the decision has been
   made. This turns analysis into monitoring — after a session,
   the user knows what to watch in the news. Format: one line
   per decision point.
   Example: "Signal: Russian-flagged vessels carrying military
   cargo transiting the Caspian."

   The goal is low cognitive load and wide coverage. The user scans
   3 decisions quickly and chooses where to go deeper.

   DECISION POINT INTERACTIONS: After presenting all 3 decision
   points, note any interactions between them. Some decisions are
   sequential (can't do X until Y is resolved); some are competing
   (doing X forecloses Y); some are reinforcing (X and Y share a
   constraint). Use a simple notation:
   • "DP1 constrains DP2" — resolving DP1 one way limits DP2's
     options
   • "DP2 forecloses DP3" — choosing action on DP2 eliminates DP3
   • "DP1 ↔ DP3 share constraint" — same binding variable governs
     both
   This surfaces the decision architecture — not just three
   independent choices but the structure connecting them.

8. DEEPEN (user-driven): The user selects a decision point for
   detailed analysis. Only then apply the full analytical treatment:
   • Three perspectives elaborated (power, legitimacy, liability)
   • Grounded in STATE file: Material Options, binding constraints,
     doctrines, stability indicators
   • Structural-versus-personal divergence named explicitly
   • Current news sources cited

   After deepened analysis, present DECISION OPTIONS: specific
   actions the entity's leadership can take. These must be:
   • Concrete (nameable actions, not analytical frames)
   • Entity-oriented (things this state can do, not things an
     observer recommends)
   • Mutually exclusive or at least meaningfully distinct
   • Typically 3 options covering the decision space
   The user selects an action; the system processes the choice
   by mapping consequences, identifying what the state gains
   and loses, and surfacing the structural-versus-personal
   divergence for that specific action.

   GROUNDING CHECKPOINT (BINDING): After presenting action
   options, append a single parenthetical line naming which
   MEM-derived pattern, doctrine, or historical precedent
   shaped at least one option. Format:
   "(Grounding: Option [X] shaped by [named pattern/doctrine/
   precedent])"
   This is a verification mechanism — it ensures the
   civilizational memory corpus is influencing the generated
   options, not just the upstream analysis. If no option can
   be traced to a MEM-derived source, the options are
   insufficiently grounded and must be revised.

8. OPTIONS: Decision Points uses its own option structure, not the
   standard 8-slot recursive options (Section X-A).

   After INITIAL PRESENTATION (step 5):
   • One option per decision point (matching the 3 identified) +
     one session closure option
   • Options are numbered (1, 2, 3, 4) not lettered
   • Each option names the decision point in one line
   • The user selects which decision point to deepen

   After DEEPENED ANALYSIS (step 6):
   • Options are specific actions the entity can take on this
     decision point — concrete, mutually exclusive paths
   • Typically 3 options (A, B, C) representing distinct choices
   • Each option is one sentence naming the action and its
     primary trade-off
   • Always include session closure as a final option

   After USER SELECTS AN ACTION:
   • Present consequence analysis for the chosen action
   • Follow-on options must always include:
     - Proceed further into consequences
     - PRE-MORTEM: "Assume this action was taken and failed —
       what went wrong?" This reverses cognitive direction and
       surfaces failure modes that forward-looking analysis
       misses. When selected, identify the 2-3 most likely
       failure causes and what the entity could not recover from.
     - Reconsider (return to action options)
     - Pivot to another decision point
     - Session closure
   • The user controls depth at every step; the system does not
     front-load

OUTPUT FORMAT:
Decision Points are presented in the STATE session, not stored
directly in the STATE file. They feed back to the file through
the standard evidence-update and assessment-closure mechanisms
(Option H). When a Decision Point produces evidence that shifts a
binding constraint or stability indicator, it is recorded in the
State Log via the normal revision protocol (Section X).

RESPONSE LENGTH:
• Initial Decision Points presentation (steps 1-4): 2-3 sentences
  per decision point. Total: ~200-300 words for all 3. Low cognitive
  load; wide decision-space coverage.
• Deepened analysis (step 7, user-selected): 200-400 words per
  decision. Three perspectives applied, grounded in STATE
  framework, sources cited.
• The user may always request deeper analysis of any decision point.
  The system should not front-load depth — present the landscape
  first, elaborate on request.

GROUNDING REQUIREMENTS:
• Every decision must cite at least one current news source or
  observable data point
• Every decision must reference at least one Material Option,
  binding constraint, or doctrine from the STATE file (in
  deepened analysis; initial presentation may reference implicitly)
• Every deepened three-perspective analysis must produce at least
  one specific finding per perspective (not generic restatements of
  each perspective's general orientation)

SOURCE TRANSPARENCY (BINDING):
When citing data that drives analytical conclusions, distinguish:
• VERIFIED DATA — official statistics, published government data,
  named-source reporting from credible outlets. State as fact.
• PROJECTIONS — analyst forecasts, model outputs, conditional
  estimates. State as projection and name the assumptions
  (e.g. "at $52/barrel oil" or "if current draw-down continues").
• ANONYMOUS / THIN SOURCING — unnamed officials, single-source
  reports, unverifiable claims. Flag explicitly: name the outlet,
  note the sourcing limitation, and do not build analytical weight
  on it without corroboration.
The system must not present projections as established facts or
build consequence chains on thinly sourced claims without flagging
the uncertainty. When challenged on a source, provide the full
attribution chain (outlet, date, sourcing type, what is verified
vs projected).

SOURCE CONTRADICTION (BINDING):
When two or more ARC-T-INSTITUTIONAL sources — from the same or
different ARC files — produce conflicting claims on a question
material to the analysis, the system MUST surface the
contradiction. Rules:
• PRESENT BOTH CLAIMS with source name, ARC origin (including
  cross-entity if applicable), and editorial note. Do not silently
  pick one source over another.
• NO RESOLUTION REQUIRED. The decision-maker resolves the
  contradiction, not the system. The system preserves the tension.
• EVIDENTIARY QUALITY MAY BE NOTED. If the two claims differ in
  sourcing tier (VERIFIED DATA vs PROJECTION vs ANONYMOUS/THIN),
  the system may note the difference — but this is annotation,
  not resolution.
• APPLIES IN ALL SESSION ACTIVITIES. Decision Points, Stability
  Watch, Scenario Tree, Assumption Stress Test, Cross-Entity
  Pressure Test, Pattern Audit, and free-form analysis.
• CROSS-ENTITY CONTRADICTIONS ARE EXPECTED. When an entity's own
  sources contradict an adversary's sources (e.g. Russian MOD
  casualty figures vs Western estimates), this is a structural
  feature, not an error. Surface both with attribution.

INSTITUTIONAL SOURCES:
When drawing on current-event information or institutional
analysis for Layer 3, prefer sources listed in the entity's
CIV–ARC file under ARC-T-INSTITUTIONAL (or Category E).
Non-listed sources are permitted with an ARC discovery flag.
When assessing an adversary or partner, consult that entity's
ARC-T-INSTITUTIONAL with cross-entity declaration and visible
editorial notes. See CIV–ARC–TEMPLATE Sections IX-B and IX-C.

ACTIVITY RECORD (ARC–[CIV]–DECISION–POINTS):
Each civilization with a STATE file maintains an activity record
(e.g. ARC–RUSSIA–DECISION–POINTS) with brief entries per session.

Entry format:
• Date, STATE version, news period, topic (if narrower than
  general entity assessment)
• Numbered decision points (one line each), each tagged with
  time-sensitivity (DAYS / WEEKS / MONTHS) and status
  (OPEN / RESOLVED / EXPIRED)
• Historical anchors (minimum two)
• Session finding (one sentence)

Entry ceiling: **20 lines maximum per session entry.** The full
analysis lives in the session, not in the record. The ARC file
is an index, not a summary. If deepened analysis produced key
findings, compress to one line (e.g. "Key finding: Midnight
Hammer precedent predicts floor-level response again").

• Each entry must include at least two specific historical
  anchors (facts, events, people, or places) that were used in
  the Decision Points analysis. This ensures the record preserves
  the connection between current decisions and the historical
  patterns that grounded them.

EXPIRY AND RECURRENCE TRACKING:
Decision points are tagged OPEN on creation. In subsequent
sessions, update prior entries:
• RESOLVED — the decision was made (note what was chosen if
  observable) or the situation changed to eliminate the choice
• EXPIRED — the decision window closed without observable action
When a decision point recurs across sessions (same structural
choice, new evidence), note the recurrence. Recurring decision
points are analytically significant — they indicate the
leadership is deferring the choice. Format in new entry:
"(Recurs from SESSION [N], DP[X])"

COMPLETENESS:
Decision Points analysis is subject to the same Duty of Competence
(Section III) as the STATE file itself. All three analytical
perspectives must be applied to each decision. Omission of a
perspective constitutes a completeness violation. In the initial
presentation, completeness may be achieved in compressed form
(one finding per perspective); in deepened analysis, full
elaboration is required.

────────────────────────────────────────────────────────────
X-C. STABILITY WATCH (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Stability Watch is a STATE session activity that systematically
assesses the entity's internal stability indicators against current
evidence. It asks: how much stress is the system under?

ORIENTATION:
Stability Watch is system-oriented, not leadership-oriented. It
tracks the structural health of the entity's governance system —
ideological coherence, elite cohesion, popular legitimacy,
institutional function, narrative control — regardless of what the
leadership is currently deciding. Stress signals may exist even when
no decision is pending.

DISTINCTION FROM DECISION POINTS:
Decision Points is event-driven and produces leadership choices.
Stability Watch is periodic and produces early warning signals. A
Stability Watch session may trigger a Decision Points session (if a
stress signal reveals a choice the leadership must make), but it can
also run independently when the decision landscape is quiet.

| Decision Points | Stability Watch |
|-----------------|-----------------|
| "What must the leader choose?" | "How stressed is the system?" |
| Event-driven (news triggers) | Periodic (weekly/fortnightly) |
| Produces decisions and actions | Produces directional forecasts and threshold signals |
| Feeds evidence to Material Options | Feeds updates to Stability Indicators (Section VI) |

PROCEDURE:
1. SCAN: Survey current news and observable developments for
   indicators of internal stress. Focus on the five stability
   indicators defined in the STATE file's Section VI.

2. MEM SCAN: Read MEM–RELEVANCE–[CIV].md dimensions VIII
   (Legitimacy / Civilizational Continuity) and III (Morale Collapse
   / Defection Cascade). Read primary MEM files listed under those
   dimensions. Extract specific historical details (dates, sequences,
   actors, mechanisms) for use as grounded parallels in indicator
   assessment. A parallel cited by name without MEM-derived detail
   is a label, not a grounded parallel.
   CONNECTION DISCOVERY: Read the MEM CONNECTIONS section of each
   loaded MEM. If connections surface additional MEMs relevant to
   stability assessment that were not already loaded, read up to 2
   additional MEMs from connection edges. Assess relevance from
   the connection's one-line explanation.

3. PRESENT: Display all 5 indicators with current status (STABLE /
   STRESSED / CRITICAL), direction arrow (IMPROVING / STABLE /
   DEGRADING), and one-line evidence summary. Format:

   | Indicator | Status | Direction | Evidence |
   |-----------|--------|-----------|----------|
   | [Name] | [Status] | [Arrow] | [One-line summary] |

   After the table, note any cross-indicator interactions (e.g. "if
   elite cohesion degrades further, narrative control likely follows").

4. FORECAST: For each indicator, provide a 30/60/90-day directional
   forecast with the assumption that must hold:
   "Elite cohesion: STABLE at 30 days IF defence budget reduction
   does not trigger visible factional competition."
   These forecasts are testable — the next Stability Watch session
   validates or falsifies them.

5. DEEPEN (user-driven): User selects one indicator for detailed
   analysis. Apply all three analytical perspectives to that
   indicator's trajectory:
   • Legitimacy: How does this stress signal affect the regime's
     self-justification?
   • Power: Does this stress signal constrain the entity's material
     capabilities?
   • Liability: Does this stress signal change personal exposure
     calculations for the leadership or inner circle?

   After deepening, present:
   • Threshold signal: what observable evidence would move this
     indicator to the next level (e.g. STRESSED -> CRITICAL)?
   • Cross-indicator cascade: if this indicator moves, which others
     shift and in what direction?
   • Historical parallel from MEM corpus (minimum one named example)

6. OPTIONS: Stability Watch uses its own option structure:
   After INITIAL PRESENTATION (step 3):
   • One option per indicator (numbered 1-5) to deepen
   • Option 6: Cross-indicator cascade analysis
   • Option 7: Session closure

   After DEEPENED ANALYSIS (step 5):
   • Return to indicator menu
   • Deepen a different indicator
   • Compare this indicator to a historical parallel
   • Session closure

RESPONSE LENGTH:
• Initial presentation (steps 1-4): ~200-300 words total (table +
  forecasts + cross-indicator note)
• Deepened analysis (step 5): 200-400 words per indicator
• The user controls depth at every step

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Summary: which indicators changed direction since last session;
   which forecasts from prior session were validated/falsified
3. Proposed updates to Section VI of the STATE file
4. Any threshold signals that warrant a Decision Points session

ACTIVITY RECORD (ARC–[CIV]–STABILITY–WATCH):
Each civilization with a STATE file maintains a Stability Watch
record. Entry format:
• Date, STATE version, assessment period
• 5-indicator status table (one line per indicator: name, status,
  direction, change from prior session)
• Forecasts validated/falsified from prior session (if applicable)
• Session finding (one sentence)
Entry ceiling: 15 lines maximum per session entry.

────────────────────────────────────────────────────────────
X-D. ASSUMPTION STRESS TEST (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Assumption Stress Test is a STATE session activity that
deliberately attacks the linchpin assumptions underlying Material
Options. It asks: what are we wrong about?

ORIENTATION:
The activity is framework-oriented, not entity-oriented or event-
oriented. It treats the STATE file's own analytical structure as
the object of analysis. The goal is to find where the framework is
weakest — which assumption has the least evidentiary support, which
is most vulnerable to falsification, which would cause the largest
cascade if it broke.

DISTINCTION FROM DECISION POINTS:
Decision Points takes assumptions as given and works within them.
Assumption Stress Test attacks the assumptions themselves. Decision
Points is constructive (builds the decision space); Stress Test is
destructive (breaks the framework to find weak points).

| Decision Points | Assumption Stress Test |
|-----------------|------------------------|
| "What should the leader do?" | "What are we wrong about?" |
| Works within assumptions | Attacks assumptions |
| Produces decisions | Produces revised confidence levels |
| Event-driven | Framework-driven (run when assumptions age) |

PROCEDURE:
1. EXTRACT: List all linchpin assumptions across all Material
   Options. For each, note:
   • Parent option (A, B, C, D...)
   • Current evidence status (SUPPORTED / UNTESTED / STALE)
   • Date of last evidence update
   • How long since last test (staleness signal)

2. RECOMMEND: Rank assumptions by vulnerability. The system
   recommends the assumption with the weakest current evidence or
   the longest time since last test. The user may override and
   select any assumption.

3. FALSIFY: For the selected assumption, conduct a deliberate
   search for disconfirming evidence:
   • News search for evidence that contradicts the assumption
   • MEM scan for historical cases where the analogous assumption
     failed
   • Three-perspective falsification: what would each perspective
     accept as proof this assumption is wrong?
     - Legitimacy: What legitimacy development would falsify it?
     - Power: What capability or structural shift would falsify it?
     - Liability: What leadership behaviour would falsify it?

4. PRE-MORTEM: "Assume this assumption was false 6 months ago — what
   would the world look like? Does it look like that?" This reverses
   cognitive direction: instead of asking "is the assumption still
   true?" ask "if it were already false, would we have noticed?"

5. ASSESS: Based on steps 3-4, classify the assumption:
   • CONFIRMED — new evidence strengthens it
   • HOLDS — no disconfirming evidence found, but no new support either
   • WEAKENED — partial disconfirming evidence exists
   • FALSIFIED — clear evidence that the assumption no longer holds

   If WEAKENED or FALSIFIED: propose revised confidence level for
   the parent Material Option and identify cascade effects on other
   options that share the assumption or depend on it.

6. OPTIONS: Assumption Stress Test uses its own option structure:
   After INITIAL PRESENTATION (step 1):
   • One option per linchpin assumption (numbered)
   • System-recommended assumption flagged with "(recommended)"
   • Final option: Session closure

   After FALSIFICATION ANALYSIS (steps 3-5):
   • Test another assumption
   • Deepen: explore cascade effects if this assumption fails
   • Pre-mortem: run step 4 on a different assumption
   • Session closure

RESPONSE LENGTH:
• Initial extraction (step 1): ~200-300 words (table of assumptions)
• Falsification analysis (steps 3-5): 200-400 words per assumption
• Pre-mortem: 100-200 words

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Summary: which assumptions were tested, classification result
3. Proposed updates to Key Assumptions and confidence levels in
   the STATE file's Material Options (Section IV)
4. Discriminating signals: "assumption X will be falsified within
   N months if Y occurs" — creates a monitoring checklist

ACTIVITY RECORD:
Assumption Stress Test does not require a separate ARC file. Its
output feeds directly into the existing Evidence Update mechanism
in Material Options. Session results are recorded in the State
Log (Section IX) with type tag "STRESS TEST."

────────────────────────────────────────────────────────────
X-E. SCENARIO TREE (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Scenario Tree is a STATE session activity that projects forward
from a trigger event or decision through branching consequences.
It asks: if X happens, then what?

ORIENTATION:
Scenario Tree is consequence-oriented, not choice-oriented. Where
Decision Points asks "what should the leader choose?", Scenario
Tree follows a specific choice or event through its downstream
effects across multiple time horizons. The output is conditional
forecasts, not action recommendations.

DISTINCTION FROM DECISION POINTS:

| Decision Points | Scenario Tree |
|-----------------|---------------|
| "What should the leader choose?" | "If X happens, then what?" |
| One time horizon (now) | Multiple horizons (30 days, 90 days, 12 months) |
| Produces action options | Produces conditional forecasts |
| Breadth (3 decisions) | Depth (2-3 branch levels from one trigger) |

PROCEDURE:
1. TRIGGER: User names a trigger event, decision, or binding
   constraint shift. Examples:
   • "Russia refuses settlement by June deadline"
   • "Elite cohesion moves to CRITICAL"
   • "Ukraine's manpower constraint produces front-line collapse"
   The trigger must be specific and observable — not an abstract
   trend but a concrete development.

2. MEM SCAN: Read MEM–RELEVANCE–[CIV].md. Identify the 2–4
   analytical dimensions most relevant to the trigger event.
   Read the primary MEM files listed under those dimensions —
   read the actual file contents, not just the file name.
   Extract specific details (dates, mechanisms, sequences,
   actors, outcomes) that will shape the branch analysis.
   A parallel cited by name without MEM-derived detail is a
   label, not a grounded parallel.
   CONNECTION DISCOVERY: Read the MEM CONNECTIONS section of each
   loaded MEM. If connections surface additional MEMs relevant to
   the trigger event that were not already loaded, read up to 2
   additional MEMs from connection edges. Assess relevance from
   the connection's one-line explanation.

3. BRANCH (Level 1): Project 2-3 immediate consequences of the
   trigger (30-day horizon). Each branch must be:
   • Mutually exclusive or at least meaningfully distinct
   • Grounded in at least one analytical perspective
   • Assigned a conditional probability (HIGH / MODERATE / LOW)
   • Named with a short label (e.g. "Escalation response",
     "Diplomatic pivot", "Internal absorption")

   Present branches as a compact list (one sentence each) with
   probability and the perspective that most supports it.

4. DEEPEN (user-driven): User selects a branch. System projects
   2-3 second-order consequences (90-day horizon). Same format:
   each sub-branch gets a label, conditional probability, and
   grounding perspective.

   At each node apply:
   • Three-perspective assessment (compressed: one finding per
     perspective)
   • Revealed-preference check: does the leadership's behavioural
     record predict this branch?
   • Historical parallel from MEM corpus (minimum one)

5. CONVERGE: After 2-3 levels of branching, identify convergence
   points — different paths that lead to the same structural
   outcome. This reveals which outcomes are overdetermined (multiple
   paths lead there) versus fragile (only one path leads there).

6. OPTIONS: Scenario Tree uses its own option structure:
   After INITIAL BRANCHING (step 3):
   • One option per branch (numbered) to deepen
   • Option to add a branch the system missed
   • Session closure

   After DEEPENED BRANCH (step 4):
   • Deepen further (third level, 12-month horizon)
   • Return to Level 1 and deepen a different branch
   • Convergence analysis (step 5)
   • Session closure

RESPONSE LENGTH:
• Initial branching (step 3): ~200-300 words (trigger + 2-3
  branches with probabilities)
• Deepened branch (step 4): 200-400 words per branch level
• Convergence analysis: 100-200 words

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Compact tree summary: trigger -> branches -> sub-branches, with
   conditional probabilities at each node
3. Convergence findings: which outcomes are overdetermined
4. Monitoring framework: discriminating signal for each branch
   ("watch for X; if it happens, branch A activates")
5. Proposed STATE file updates if any branch shifts a binding
   constraint or Material Option confidence

ACTIVITY RECORD (ARC–[CIV]–SCENARIO–TREES):
Each civilization with a STATE file maintains a Scenario Tree
record. Entry format:
• Date, STATE version, trigger event
• Tree summary: trigger -> branch labels with probabilities
  (compact notation, e.g. "Trigger: June deadline breach ->
  A: Escalation (MOD) / B: Pivot (LOW) / C: Freeze (HIGH)")
• Key convergence point (one line)
• Discriminating signal for highest-probability branch
Entry ceiling: 15 lines maximum per session entry.

────────────────────────────────────────────────────────────
X-F. REVEALED PREFERENCE TRACKER (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Revealed Preference Tracker is a STATE session activity that
builds and maintains a behavioural profile of the entity's
leadership based on what they actually chose. It asks: given what
this leadership has done, what does the pattern predict next?

ORIENTATION:
The activity is behaviour-oriented. It treats the leadership's
actual decisions — not structural logic, not legitimacy analysis —
as the primary predictive input. The Revealed Preference pattern
(documented in Decision-Relevant History, Section VII) established
a diagnostic hierarchy for personalist systems: revealed preference
> structural logic > legitimacy analysis. This activity
operationalises that hierarchy by accumulating data points and
generating predictions.

DISTINCTION FROM DECISION POINTS:
Decision Points uses revealed preference as one input among many.
The Tracker makes it the central analytical product. Decision Points
is forward-looking; the Tracker is retrospective accumulation that
feeds forward prediction.

| Decision Points | Revealed Preference Tracker |
|-----------------|-----------------------------|
| Uses revealed preference as one input | Revealed preference is the central product |
| Forward-looking (what to choose) | Retrospective accumulation feeding prediction |
| Produces action options | Produces behavioural predictions |
| Event-driven | Data-point-driven (run when new decisions are observable) |

PROCEDURE:
1. PRESENT RECORD: Display the current revealed-preference record
   from the STATE file. For each prior data point, show:
   • Decision (what was chosen)
   • Date
   • Structural prediction (what power logic predicted)
   • Legitimacy prediction (what legitimacy logic predicted)
   • Liability prediction (what personal-survival logic predicted)
   • Actual outcome: which prediction matched
   • Current hierarchy confidence (e.g. "liability > structural >
     legitimacy, validated N/N times")

2. ADD DATA POINT: User provides a new observable decision, or the
   system identifies one from current news. For each new data point:
   • Name the decision and date
   • Classify: what did each analytical perspective predict?
   • What did the leadership actually choose?
   • Which perspective's prediction matched?
   • Update the hierarchy score

3. PREDICT: When a current Decision Point is active (from a Decision
   Points session or from news), generate a revealed-preference
   prediction separate from the standard three-perspective analysis:
   "Based on [N] prior decisions where perspectives diverged, revealed
   preference predicts the leadership will choose [X]. Confidence:
   [level based on sample size and consistency]."

   This prediction is stated as a standalone finding — not blended
   with structural or legitimacy analysis. The three perspectives
   remain available for context, but the behavioural prediction
   stands alone.

4. TEST: If a prior prediction can now be evaluated (the decision
   was made and is observable), score it:
   • CORRECT — prediction matched actual choice
   • PARTIALLY CORRECT — prediction matched direction but not
     magnitude or timing
   • INCORRECT — prediction did not match
   Update the hierarchy confidence accordingly.

5. OPTIONS: Revealed Preference Tracker uses its own option structure:
   After RECORD PRESENTATION (step 1):
   • Add a new data point (step 2)
   • Generate prediction for current Decision Point (step 3)
   • Test a prior prediction (step 4)
   • Examine an anomaly (a decision that broke the hierarchy)
   • Session closure

RESPONSE LENGTH:
• Record presentation (step 1): ~200-300 words (table of data
  points + hierarchy summary)
• New data point (step 2): 100-200 words
• Prediction (step 3): 100-200 words
• Test (step 4): 100-200 words

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Updated hierarchy with confidence level
3. Current prediction (if any active Decision Point exists)
4. Proposed updates to Section VII (Revealed Preference pattern)

ACTIVITY RECORD:
Revealed Preference Tracker entries are recorded within
ARC–[CIV]–DECISION–POINTS under a dedicated "REVEALED PREFERENCE
LOG" section. Each entry is one line per data point:
"[Date] | [Decision] | Predicted: [perspective] | Actual:
[perspective] | Hierarchy: [current ranking]"
This keeps the behavioural record co-located with the decision
record it feeds into.

────────────────────────────────────────────────────────────
X-G. CROSS-ENTITY PRESSURE TEST (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Cross-Entity Pressure Test is a STATE session activity that
stress-tests a relationship between two entities by analysing how
each side's constraint structure affects the other. It asks: how do
these entities' decisions interact?

ORIENTATION:
The activity is relational — it analyses the dyad (or triad), not a
single entity. Where Decision Points treats other entities as
background, Pressure Test treats them as co-agents with their own
constraint structures, Material Options, and revealed preferences.

DISTINCTION FROM DECISION POINTS:

| Decision Points | Cross-Entity Pressure Test |
|-----------------|----------------------------|
| Single-entity (what must this leader choose?) | Dyadic (how do two entities' choices interact?) |
| Other entities as background | Other entities as co-agents |
| Produces this entity's choices | Produces interaction dynamics |
| Grounded in one STATE file | Grounded in two STATE files (or one + opponent model) |

APPLICABILITY:
Cross-Entity Pressure Test requires one of:
• Two STATE files (both entities have CIV–STATE files)
• One STATE file + an Opponent Constraint Assessment (Section VI-B)
  for the other entity
• One STATE file + a Cross-Entity Link (Section VIII) rich enough
  to construct a constraint model for the other entity

If insufficient data exists for the second entity, the system should
flag this and propose constructing a minimal constraint model before
proceeding.

PROCEDURE:
1. IDENTIFY: User names the relationship to pressure-test (e.g.
   "Russia-China economic dependency", "Russia-Iran partnership
   credibility", "Russia-Ukraine attrition race").

2. LOAD: Load both entities' STATE files (or construct opponent
   model from Section VI-B and Section VIII). Extract:
   • Each entity's relevant Material Options
   • Each entity's binding constraints that involve the other
   • The Cross-Entity Link description from Section VIII
   • Any Revealed Preference data relevant to the relationship

3. MAP: Present the relationship structure:
   • What does each side need from the relationship?
   • Where do incentives align? Where do they diverge?
   • What is the power asymmetry? (who needs whom more?)
   • What is the time horizon mismatch? (one side more urgent?)
   This is the equilibrium state — what holds the relationship
   together and what strains it.

4. PRESSURE (user-driven): User names a pressure point — a
   specific action or development that would stress the
   relationship. Examples:
   • "China reduces secondary sanctions evasion support"
   • "Russia fails to deliver S-400 components to India"
   • "Ukraine's Western support doubles unexpectedly"

   System projects consequences for BOTH entities:
   • How does this shift each entity's binding constraints?
   • How does it affect each entity's Material Options?
   • Three-perspective analysis from each entity's perspective
   • Does this create a defection incentive for either side?

5. SECOND-ORDER: After first-order consequences, identify:
   • Does the pressure point trigger a cascade in the other
     entity's constraint structure?
   • Does it create a new Decision Point for either leadership?
   • Does it shift the revealed-preference prediction for either?

6. OPTIONS: Cross-Entity Pressure Test uses its own option structure:
   After RELATIONSHIP MAP (step 3):
   • Numbered pressure points (system suggests 2-3 + user may add)
   • Session closure

   After PRESSURE ANALYSIS (steps 4-5):
   • Test a different pressure point
   • Deepen: second-order cascade for this pressure point
   • Reverse: same pressure point but from the other entity's view
   • Session closure

RESPONSE LENGTH:
• Relationship map (step 3): ~200-300 words
• Pressure analysis (steps 4-5): 200-400 words per pressure point
• Second-order cascade: 100-200 words

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Key finding: the most consequential pressure point identified
3. Proposed updates to Cross-Entity Links (Section VIII) for the
   primary entity's STATE file
4. If a second STATE file exists: proposed updates for that file
5. Any new Decision Points surfaced by the pressure analysis

ACTIVITY RECORD (ARC–[CIV]–PRESSURE–TESTS):
Each civilization with a STATE file maintains a Pressure Test
record. Entry format:
• Date, STATE version, relationship tested, pressure point(s)
• Key finding (one sentence)
• Proposed STATE file update (one line)
Entry ceiling: 10 lines maximum per session entry.

────────────────────────────────────────────────────────────
X-H. PATTERN AUDIT (SESSION ACTIVITY)
────────────────────────────────────────────────────────────
Pattern Audit is a STATE session activity that validates the
patterns documented in the STATE file's Decision-Relevant History
(Section VII) against current evidence. It asks: are our patterns
still valid?

ORIENTATION:
The activity is meta-analytical — it analyses the analytical
framework itself, not the entity or its decisions. Patterns are the
STATE file's accumulated intelligence about how this entity
behaves under specific constraint configurations. If a pattern is
stale, weakened, or falsified, the framework's predictive power
degrades silently. Pattern Audit prevents silent degradation.

DISTINCTION FROM DECISION POINTS:
Decision Points uses patterns as inputs. Pattern Audit validates the
patterns themselves. Decision Points is forward-looking; Pattern
Audit is retrospective-diagnostic.

| Decision Points | Pattern Audit |
|-----------------|---------------|
| Uses patterns | Validates patterns |
| Forward-looking | Retrospective-diagnostic |
| Produces decisions | Produces confidence updates on the framework |
| Event-driven | Framework-driven (run when patterns age) |

PROCEDURE:
1. EXTRACT: List all patterns from the STATE file's Section VII
   with current activation level (HIGH / MODERATE / LOW), date of
   last evidence, and staleness assessment:
   • FRESH — last evidence within 30 days
   • AGING — last evidence 30-90 days old
   • STALE — last evidence >90 days old

2. RECOMMEND: Rank patterns by audit priority. Priority order:
   (a) STALE patterns with HIGH activation (most dangerous: high
       confidence with old evidence)
   (b) Patterns with recent disconfirming evidence
   (c) Patterns that have never been tested against a real outcome
   The user may override and select any pattern.

3. TEST: For the selected pattern, conduct a validation:
   • What does the pattern predict for the current situation?
   • Search for evidence that confirms or disconfirms the prediction
   • Three-perspective assessment: does each perspective see the
     pattern as confirmed, weakened, or falsified?
   • Historical comparison: does the original MEM-derived evidence
     still hold, or has the current situation diverged from the
     historical parallel?

4. CROSS-PATTERN: Assess whether validating or falsifying this
   pattern affects others:
   • Does this pattern share assumptions with another pattern?
   • If this pattern is falsified, does it weaken a related pattern?
   • Has a new pattern emerged from recent sessions that this audit
     should formalise?

5. CLASSIFY: Rate the pattern:
   • CONFIRMED — new evidence strengthens activation
   • HOLDS — no change in evidence
   • WEAKENED — partial disconfirming evidence
   • FALSIFIED — clear evidence that the pattern no longer applies

   If WEAKENED or FALSIFIED: propose revised activation level and
   assess impact on Material Options that depend on the pattern.
   If a new pattern has emerged: propose formalisation with
   activation level, source, and relevance statement.

5b. DOCTRINE CHECK: For each doctrine in CIV–DOCTRINE whose Hard
   Constraints reference patterns or conditions tested in this audit:
   • State each Hard Constraint (the invalidation trigger)
   • Assess against current evidence and audit findings:
     HOLDS — Hard Constraint not triggered
     WEAKENED — conditions approaching the trigger
     FALSIFIED — Hard Constraint actively triggered
   • If WEAKENED: flag in State Log; add to options menu
     ("Deepen doctrine [name] — Hard Constraint may be failing")
   • If FALSIFIED: escalate — "Doctrine [name] Hard Constraint
     '[condition]' is actively triggered; doctrine review required"
   • Doctrines are frozen syntheses. They do not change silently.
     Any change in doctrine status requires explicit user approval
     and a version bump in CIV–DOCTRINE.

6. OPTIONS: Pattern Audit uses its own option structure:
   After PATTERN LIST (step 1):
   • One option per pattern (numbered), system-recommended flagged
   • Option to propose a new pattern for formalisation
   • Session closure

   After VALIDATION (steps 3-5):
   • Audit another pattern
   • Deepen: cross-pattern cascade analysis
   • Propose new pattern for formalisation
   • Session closure

RESPONSE LENGTH:
• Pattern list (step 1): ~200-300 words (table of patterns)
• Validation (steps 3-5): 200-400 words per pattern
• Cross-pattern analysis: 100-200 words

SESSION CLOSURE:
When user selects session closure, deliver:
1. Session recap (6-10 words)
2. Summary: which patterns were audited, classification result
3. Proposed updates to Section VII activation levels
4. Any new patterns proposed for formalisation
5. Impact on Material Options if any pattern changed status

ACTIVITY RECORD:
Pattern Audit does not require a separate ARC file. Session results
are recorded in the State Log (Section IX) with type tag
"PATTERN AUDIT." Format:
"[Date] | Pattern: [name] | Prior: [activation] | Result:
[classification] | New: [activation]"

────────────────────────────────────────────────────────────
X-I. SESSION ACTIVITY SUMMARY
────────────────────────────────────────────────────────────
STATE mode supports seven session activities. Each has a distinct
analytical orientation and feeds different sections of the STATE
file.

| Activity | Section | Asks | Feeds |
|----------|---------|------|-------|
| Recursive Analysis | X-A | How does this look from each perspective? | All sections |
| Decision Points | X-B | What must the leader choose now? | Material Options (IV) |
| Stability Watch | X-C | How stressed is the system? | Stability Indicators (VI) |
| Assumption Stress Test | X-D | What are we wrong about? | Key Assumptions in Options (IV) |
| Scenario Tree | X-E | If X happens, then what? | Material Options (IV), forecasts |
| Revealed Preference | X-F | What does behaviour predict? | Decision-Relevant History (VII) |
| Cross-Entity Pressure | X-G | How do relationships interact? | Cross-Entity Links (VIII) |
| Pattern Audit | X-H | Are our patterns still valid? | Decision-Relevant History (VII) |

INVOCATION:
The activity menu appears as a persistent single line after the
8-slot recursive options in every standard STATE response:

"Activities: decision points | stability watch | stress test |
scenario tree | revealed preference | pressure test | pattern audit"

The user invokes an activity by typing its name or a recognisable
abbreviation (e.g. "stability watch", "stress test", "scenario tree").

When an activity is active:
• The activity's own option structure replaces the 8-slot menu AND
  the activity menu
• The user navigates within the activity using its numbered/lettered
  options
• The user may exit at any time via session closure or by typing
  "exit activity" / switching to another activity
• On exit, the 8-slot menu and activity menu reappear

INTER-ACTIVITY TRIGGERS:
Activities may trigger each other:
• Stability Watch stress signal -> Decision Points session
• Scenario Tree branch -> new Decision Point identified
• Assumption Stress Test falsification -> Scenario Tree re-run
• Pattern Audit weakening -> Assumption Stress Test on dependent
  assumptions
• Pattern Audit WEAKENED/FALSIFIED on a pattern -> flag doctrine
  for Hard Constraint review if any doctrine depends on that pattern
• Assumption Stress Test WEAKENED/FALSIFIED on an assumption that
  maps to a doctrine Hard Constraint -> flag doctrine for review
• Sync Protocol doctrine validity flag -> Pattern Audit or
  Assumption Stress Test to validate the flagged Hard Constraint
• Cross-Entity Pressure Test -> new Decision Point for either entity
• Decision Points outcome -> Revealed Preference Tracker data point

These triggers are advisory, not automatic. The system notes the
trigger; the user decides whether to follow it.

────────────────────────────────────────────────────────────
XI. REGISTER RULES (BINDING)
────────────────────────────────────────────────────────────
CIV–STATE files are external-facing. The following terms MUST NOT
appear in the analytical prose of any STATE file:

PROHIBITED IN PROSE:
• MIND (as system term)
• OGE / Option Generation Engine
• Tri-frame / tri-frame analysis
• POST-BARNES / post-catalyst
• Blend Law / Proportional Blend
• DEF / Doctrinal Eligibility Filter
• DIB / Doctrine Intake Buffer
• SCL / Scholar Confidence Level
• RLL (use "recurring pattern" or cite the specific pattern by name)
• Polyphonic tension (use "preserved contradictions" or "unresolved tensions")
• Catalyst sequence

PROHIBITED QUANTITATIVE PATTERNS:
• "3 of 4 indicators support..." — false measurement precision
• "85% of evidence suggests..." — fabricated quantification
• Any numerical count of diagnostic indicators supporting/opposing
  an assessment, unless the underlying data is genuinely quantitative

PERMITTED:
• File names as source citations (e.g. "Source: MEM–RUSSIA–PETER")
• "CIV–CORE" and "CIV–SCHOLAR" as source references only
• Entity classification terms (CIVILIZATION-STATE, etc.)
• Succession link types (IDEOLOGICAL_CLAIM, etc.)
• Named historical precedent counts (e.g. "five historical precedents")
  — naming them is verifiable; counting unnamed indicators is not

────────────────────────────────────────────────────────────
XII. RELATIONSHIP TO OTHER FILE TYPES
────────────────────────────────────────────────────────────
CIV–STATE is PARALLEL to CIV–SCHOLAR, not subordinate to it.
They are distinguished primarily by temporal orientation.

| File Type | Temporal Orientation | Learns From | Audience | Writes To |
|-----------|---------------------|-------------|----------|-----------|
| CIV–SCHOLAR | Past (centuries) | Historical sources, MEMs | System | CIV–DOCTRINE (via doctrine gateway) |
| CIV–STATE | Present (weeks–years) | Current events, news, observable indicators | Decision-maker | — |
| CIV–CORE | Persistent | — (constrained by SCHOLAR/DOCTRINE) | System | — |
| CIV–DOCTRINE | Frozen | — (accepted from SCHOLAR) | System | CIV–CORE (citations) |

DIRECTIONALITY:
• SCHOLAR's historical patterns inform STATE's analytical framework
  (via Decision-Relevant History and sync command)
• STATE's current-events analysis does NOT flow back into SCHOLAR
  except via explicit **harvest** or **harvest session** command
  (Section XIV-B). No other transfer into Scholar learn mode is
  permitted.
• The present becomes history eventually; harvest is the gate
  through which STATE session output may enter Scholar as learning
• Sync ("sync state to scholar") updates STATE from SCHOLAR/CORE/
  DOCTRINE; harvest ("harvest" / "harvest session") is the only
  command that transfers information from STATE session into
  Scholar learn mode

────────────────────────────────────────────────────────────
XIII. COMPLETENESS AUDIT CHECKLIST
────────────────────────────────────────────────────────────
Before finalizing any CIV–STATE file:

- [ ] Legitimacy and institutional continuity perspective applied?
- [ ] Power distribution and structural constraint perspective applied?
- [ ] Leadership liability and mechanism perspective applied?
- [ ] Each perspective produced at least one material option
      (or explicit "no distinct option" finding)?
- [ ] Tensions between perspectives preserved, not resolved?
- [ ] Confidence signaled where structural logic strongly favors
      one outcome?
- [ ] Grounding line present for every option (named precedents +
      binding constraint, no false indicator counts)?
- [ ] Binding constraint identified per option using speed-of-collapse
      and least-controllable criteria?
- [ ] No material option omitted that any perspective would surface?
- [ ] Key assumptions stated for every option (≥3 per option)?
- [ ] Linchpin assumptions identified?
- [ ] Discriminating evidence documented for every option?
- [ ] Stability indicators assessed?
- [ ] Opponent constraint assessment present (when applicable)?
- [ ] Binding constraints framed as relative where option success
      depends on opponent's capacity degrading?
- [ ] All prose in external-facing register (no system-internal terms)?
- [ ] Duty of competence declaration present in header?
- [ ] Source files cited where relevant?
- [ ] Recursive analysis options presented after every substantive
      analytical turn in STATE sessions?
- [ ] Session activities use their own option structures (not the
      standard 8-slot menu) when invoked?
- [ ] Activity records maintained for Decision Points, Stability
      Watch, Scenario Trees, and Cross-Entity Pressure Tests?
────────────────────────────────────────────────────────────
XIV. SYNC PROTOCOL
────────────────────────────────────────────────────────────
STATE files are derived from CIV–CORE, CIV–SCHOLAR, CIV–DOCTRINE,
and MEM files. When these sources are updated, STATE may become
stale. Sync is one-way: STATE is updated from these sources.

**Transfer into Scholar:** The **only** way to transfer information from
STATE mode into SCHOLAR (learn mode) is the **"harvest"** or **"harvest
session"** command. STATE does not write back to SCHOLAR, CORE, or
DOCTRINE except via explicit harvest. See Section XIV-B (Harvest
Protocol). Cursor rule: cmc-state-scholar-harvest.

Enforcement: When the user issues "sync state to scholar" (or
equivalent), the system MUST follow the SYNC PROCEDURE below. Cursor
rule: cmc-state-scholar-sync.

SYNC MECHANISM:
• No automatic triggers or flags
• User manually issues "sync state to scholar" command (or equivalent)
• System compares current source versions to those in the STATE
  file's Source Versions block
• System identifies changes since last sync that are relevant to
  material options, binding constraints, or stability indicators
• System proposes updates for user approval
• Approved changes are applied; Source Versions block and State
  Log are updated

SOURCE VERSIONS BLOCK (MANDATORY):
Every STATE file must include a Source Versions section listing
the version of each source file it was last assessed against.

SYNC PROCEDURE:
1. Read Source Versions from STATE file
2. Compare to current versions of CIV–CORE, CIV–SCHOLAR,
   CIV–DOCTRINE, and MEM corpus
3. Identify substantive changes (new RLLs, new doctrines, revised
   syntheses, new MEMs with pattern relevance)
4. Assess whether changes affect any: material option reasoning,
   linchpin assumption, binding constraint, stability indicator,
   or cross-entity link
4b. DOCTRINE VALIDITY CHECK: For each active doctrine in
   CIV–DOCTRINE, read its Hard Constraints and cross-reference
   against current stability indicators (Section VI), evidence
   updates (Section IV), and any patterns flagged STALE or
   WEAKENED in Section VII. If any Hard Constraint's triggering
   condition appears active or approaching, flag:
   "Doctrine [name] Hard Constraint '[condition]' may be
   activating — recommend Pattern Audit or Assumption Stress Test"
   This is a flag, not a full test. Full validation happens in
   Pattern Audit (X-H, Step 5b).
5. Propose specific updates to affected sections
6. Apply only with user approval
7. Update Source Versions block and State Log

────────────────────────────────────────────────────────────
XIV-B. HARVEST PROTOCOL (STATE → SCHOLAR LEARN)
────────────────────────────────────────────────────────────
**Exclusive gate:** Only the **"harvest"** or **"harvest session"**
command in STATE mode may transfer information into SCHOLAR (learn
mode). No other mechanism may write STATE session output into
CIV–SCHOLAR. This preserves a single, user-controlled gate for
present-oriented learning to enter the Scholar ledger.

Trigger: User issues "harvest" or "harvest session" (or equivalent)
while in STATE mode, for the entity in focus.

Harvest procedure:
1. Identify the STATE session output to be harvested (e.g. decision-
   point findings, pattern audit results, revealed-preference
   updates, doctrine-check insights, forward-projection summaries).
2. Propose specific additions to CIV–SCHOLAR–[CIV] in a form
   appropriate to that file (e.g. ENTRY, synthesis candidate, RLL
   proposal, or pattern note per Scholar template structure).
3. Present proposed additions to the user; apply only after approval.
4. Record in the STATE file (e.g. State Log or session activity
   record) that a harvest was performed and what was transferred.

Cursor rule: cmc-state-scholar-harvest.

────────────────────────────────────────────────────────────
XV. VERSIONING
────────────────────────────────────────────────────────────
Per Version Decoupling (CMC 3.1+):
• STATE files declare content version only
• Increment version when analytical content changes, options are
  revised, or new options are added
• Do not increment for governance changes

────────────────────────────────────────────────────────────
END OF FILE — CIV–STATE–TEMPLATE v3.2
────────────────────────────────────────────────────────────
