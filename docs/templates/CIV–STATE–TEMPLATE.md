CIV–STATE–TEMPLATE — v3.9
Civilizational Memory Codex · STATE File Template

Status: ACTIVE · CANONICAL
Version: 3.9
Supersedes: CIV–STATE–TEMPLATE v3.8
Upgrade Type: DOMESTIC POLITICS IMPACT / ADVICE — PROCEDURE X-O
Class: CIV–STATE–TEMPLATE (Decision-Support Governance)
Compatibility: CIV–MEM–CORE v3.4 · CMC 3.4
Last Update: 17 February 2026

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.9) — DOMESTIC POLITICS IMPACT / ADVICE
────────────────────────────────────────────────────────────
STATE gains a procedure to analyse how domestic politics (elite
cohesion, factionalism, public opinion, institutional rivalry,
succession, narrative/legitimacy) constrain or enable a material
option, a decision, or an opponent's behaviour. Uses ARC for
current reporting; MEM scan for domestic-political parallels
(defection, succession, legitimacy crises). Three perspectives
applied to the domestic dimension. Feeds options, stability
indicators, or opponent assessment. Complements Stability Watch
(which scans all indicators); this procedure focuses scope on
domestic politics. Section X-O defines the procedure.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.8) — FINANCIAL / ECONOMIC ANALYSIS
────────────────────────────────────────────────────────────
STATE gains a procedure to analyse the financial or economic
dimension of the entity, a material option, or an opponent/partner.
Uses ARC-listed sources for data (fiscal, monetary, trade,
sectoral); MEM scan for economic parallels (exhaustion, sanctions,
fiscal crisis); three perspectives applied to the economic
dimension. Output feeds binding constraints, stability indicators,
or opponent assessment. Not a substitute for treasury or central
bank; frames economic factors for decision-support. Section X-N
defines the procedure.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.7) — CAUSATION / CORRELATION ANALYSIS
────────────────────────────────────────────────────────────
STATE gains a procedure to test whether an asserted or assumed
relationship (X and Y) is better treated as correlation
(association only) or causation (X causes Y, with mechanism and
direction). Surfaces evidence for association, proposed causal
mechanisms (per perspective), alternative explanations, and
discriminating tests. Reduces risk of acting on correlational
claims as if causal. Section X-M defines the procedure.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.6) — BEST CASE / WORST CASE
────────────────────────────────────────────────────────────
STATE gains a procedure to bound the outcome space with a plausible
best case and worst case for a user-specified scope (option, event,
timeframe). Each bound is grounded in stated assumptions, MEM
parallels, and current evidence; discriminating signals indicate what
would push trajectory toward either bound. Section X-L defines the
procedure. Complements Scenario Tree (branching) and Probability
Assessment (single-event likelihood).

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.5) — PROBABILITY ASSESSMENT
────────────────────────────────────────────────────────────
STATE gains a structured procedure for probabilistic prediction:
user specifies an event (and optional timeframe); system returns
probability band (LOW / MODERATE / HIGH), conditioning assumptions,
evidence (MEM + ARC-attributed), perspective support, and
discriminating signals. Ordinal bands avoid fabricated precision;
numeric probabilities permitted only when user or cited source
provides them. Section X-K defines the procedure; Register Rules
(XI) clarify permitted vs prohibited quantification.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.4) — POST-EVENT SIGNAL CHECK
────────────────────────────────────────────────────────────
When a key event (summit, round of talks, etc.) tests a material option
or binding constraint and interpretation of counterpart/opponent intent
is discriminating evidence, the STATE file may record a watch list of
signals to monitor in news. Section VII (FILE STRUCTURE) gains an
optional "Post-Event Signal Check" bullet; Section X-J defines the
procedure for adding and running a signal check. First implementation:
CIV–STATE–PERSIA Pattern 6 (Geneva round, Feb 2026).

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.3) — ACCOMMODATION/REVERSAL OPTION IN DECISION POINTS
────────────────────────────────────────────────────────────
When the decision involves a commitment (alliance, arms, presence,
confrontation), the Decision Points option set (X-B step 8) MUST
include at least one option at the accommodation/reversal end of the
spectrum. This prevents commitment-weighted default option sets and
operationalises Doctrine 03 (exit/retrenchment as strategic option).
Duty of competence clarification (Section I) and self-check (Section
X) updated; cursor rule cmc-state-mem-grounding updated.

Source: STATE–AMERICA Taiwan decision-space session (Option 11
one-China/peace omitted in first pass); user requested hardening.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v1.12) — RELAY AS EXCLUSIVE GATE
────────────────────────────────────────────────────────────
Only "relay to scholar" command family in STATE mode may transfer
information into SCHOLAR (learn mode). Section XIV-B (Relay
Protocol) added; directionality (§XII) updated. Cursor rule
cmc-state-scholar-harvest created. CMC–BOOTSTRAP and relay-to-state rule
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
Section VII (Decision-Relevant History) may include optional
subsections when the relevant session activities are performed:
• Doctrine audit & session outputs: reference to standalone audit file
  (if any), summary line, ARC sources and precedent MEMs used.
• Forward projection: horizon, key variables, upside/downside in brief.
• Post-Event Signal Check (v3.4): when counterpart intent is
  discriminating evidence after a key event, signal categories and
  check window; run via Signal Check (X-J).
Format and placement are specified in the Section VII bullet list.
First implementation (audit/projection): CIV–STATE–GERMANY v1.2 (11 Feb 2026).
First implementation (signal check): CIV–STATE–PERSIA Pattern 6 (Feb 2026).

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

AXIOM VS DOCTRINE (DIFFERENTIATION):
Axioms are more permanent, general, and spiritual/philosophical/psychological;
doctrines are more specific, operational, and strategic — learned/evolved from
history and adjustable to new eras and technologies. In STATE:

• **Conflict precedence:** If a doctrine's operational meaning or Hard Constraint
  clashes with an axiom, the axiom takes precedence. Surface the tension for
  human resolution; do not silently resolve in favor of the doctrine.

• **Hard constraint — operational vs frame:** Doctrine Hard Constraints are
  operational failure conditions (checkable in Doctrine Validity Check and
  Pattern Audit). Axiom "hard constraint" (e.g. in CORE Section I) is a
  non-negotiable frame — options that violate it are out of frame; it is not
  a checkable trigger. So: doctrine Hard Constraint = "if this condition
  holds, doctrine review required"; axiom hard constraint = "this principle
  is non-negotiable."

• **When to cite which:** Cite axioms when framing options and ruling out
  axiom-violating paths. Cite doctrines when assessing pattern validity and
  when running Hard Constraint checks (Relay to State Step 4b, Pattern Audit, Assumption
  Stress Test). STATE must not contradict axioms; STATE checks doctrine Hard
  Constraints against evidence.

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
recurs across multiple analytical nodes, record it as a MEM generation
candidate in CIV–SCHOLAR–[CIV] Section X.A (MEM Generation Candidates)
at session closure; relay may include the candidate list so it is added
to the entity's SCHOLAR. It has demonstrated analytical utility and may
warrant inclusion in the civilizational memory corpus.

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
conceivable option. When generating **decision-point options** (X-B),
the option set must include **at least one option at the
accommodation/reversal end** of the spectrum when the decision
involves sustaining vs reversing a commitment (e.g. alliance, arms,
presence, confrontation); this prevents commitment-weighted default
option sets and operationalises Doctrine 03. See Section III for the
full binding declaration; see X-B step 8 for the Decision Points
procedure.

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
• Citation of source files is permitted (e.g. "Source: MEM–RUSSIA–ROMANOV–PETER–I")
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
    or session relay is performed, record reference to audit file (if
    standalone), 1–2 line summary, and precedent MEMs used; format
    "Doctrine audit (date, ARC-sourced) | Result | File: [path] |
    Precedent: [MEM list]"
  • Forward projection (optional): when a forward projection is
    recorded, add horizon (e.g. 6–12 months), key variables, upside/
    downside in brief; format "Forward projection — [topic] (horizon) |
    Variables: ... | Upside: ... | Downside: ..."
  • Post-Event Signal Check (optional): when a key event (e.g. summit,
    round of talks) tests a material option or binding constraint and
    counterpart/opponent intent is discriminating evidence, add under
    the relevant pattern a bullet: event label and date; 3–5 signal
    categories to monitor in news; interpretation rule (what supports
    vs undermines which option); check window (e.g. 2–4 weeks). Run via
    Signal Check procedure (Section X-J).

SECTION VIII: CROSS-ENTITY LINKS
  • Comparison relationships
  • Key distinctions
  • Relevant adversary or partner dynamics

SECTION IX: SOURCE VERSIONS (RELAY TO STATE REFERENCE)
  • Version of each source file STATE was last assessed against
  • Relay to state command reference

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
5. Record in STATE Log (Section IX of STATE file)

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
X-A. RECURSIVE ANALYSIS OPTIONS (CMC 3.4)
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
• For reports, teaching materials, or simplified UIs: see
  PRINCIPLES–EXTERNAL–INTERFACE (content-based names, argument
  principles, minimal navigation, tiered exposure)

RESPONSE LENGTH (when user selects an option):
• Target: 100-200 words before next options
• Maximum: 200 words before options
• Exception — Option H: 300-400 words (session recap +
  proposed STATE file updates + follow-on options)

RESPONSE LENGTH (free-form question/instruction):
• Target: 200-400 words before options
• Maximum: 500 words before options

SAFEGUARD TRACE BLOCK (RECOMMENDED; REQUIRED FOR AUDIT SESSIONS):
After substantive analytical turns, include a compact trace line that records
whether key safeguards were executed in this turn.

Format example:
`Checks: MEM scan=done | negative-claim check=done/na | ARC categories=E/OFFICIAL+E/SPECIALIST | contradictions surfaced=yes/no`

Purpose: improve reviewability and make safeguard execution visible without
changing analytical content.

OPTION H — ASSESSMENT CLOSURE:
When user selects H, deliver:
1. Session recap (6-10 words)
2. Synthesis paragraph (<100 words): key findings, tensions,
   and decision-relevant shifts identified in this session
3. Proposed STATE file updates: specific changes to options,
   assumptions, confidence levels, stability indicators, or
   evidence updates — with section references
4. Four follow-on options: (a) no change needed, (b) small
   incremental update, (c) bigger structural revision, (d) relay
   to scholar (transfer session to SCHOLAR per §XIV-B)

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
   • **Accommodation/reversal option (when applicable):** When the
     decision involves a commitment (alliance support, arms transfer,
     presence, or confrontation with a rival), the option set MUST
     include at least one option at the accommodation/reversal end of
     the spectrum (e.g. reduce or halt the commitment, seek negotiated
     peace or modus vivendi with the counterpart). This implements the
     duty of competence and Doctrine 03 (exit/retrenchment as strategic
     option). Document in one line why it was included (e.g. "Included
     per duty of competence; Doctrine 03.").
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
STATE Log via the normal revision protocol (Section X).

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
  Pressure Test, Pattern Audit, Signal Check, Probability
  Assessment, Best Case / Worst Case, Causation / Correlation
  Analysis, Financial / Economic Analysis, Domestic Politics
  Impact, and free-form analysis.
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
in Material Options. Session results are recorded in the STATE
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
   • If WEAKENED: flag in STATE Log; add to options menu
     ("Deepen doctrine [name] — Hard Constraint may be failing")
   • If FALSIFIED: escalate — "Doctrine [name] Hard Constraint
     '[condition]' is actively triggered; doctrine review required"
   • Doctrines are permanent (accepted from syntheses). They do not change except when the user explicitly modifies them.
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
are recorded in the STATE Log (Section IX) with type tag
"PATTERN AUDIT." Format:
"[Date] | Pattern: [name] | Prior: [activation] | Result:
[classification] | New: [activation]"

────────────────────────────────────────────────────────────
X-I. SESSION ACTIVITY SUMMARY
────────────────────────────────────────────────────────────
STATE mode supports multiple session activities and procedures.
Each has a distinct analytical orientation and feeds different
sections of the STATE file.

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
| Signal Check | X-J | What do post-event signals say about counterpart intent? | Section VII, Material Options (IV) |
| Probability Assessment | X-K | What is the probability that [event]? | Section VII, Material Options (IV) |
| Best Case / Worst Case | X-L | What are the plausible best and worst outcomes? | Section VII, Material Options (IV) |
| Causation / Correlation | X-M | Is the relationship causal or only correlational? | Section VII, Material Options (IV) |
| Financial / Economic | X-N | What are the economic constraints or implications? | Section IV, VI, VI-B, VII |
| Domestic Politics | X-O | How do domestic politics constrain or enable the option? | Section IV, VI, VI-B, VII |

INVOCATION:
The activity menu appears as a persistent single line after the
8-slot recursive options in every standard STATE response:

"Activities: decision points | stability watch | stress test |
scenario tree | revealed preference | pressure test | pattern audit |
signal check | probability assessment | best case worst case |
causation correlation | financial economic | domestic politics"

The user invokes an activity by typing its name or a recognisable
abbreviation (e.g. "stability watch", "stress test", "scenario tree").

CONTEXTUAL RECOMMENDATION (REQUIRED):
When presenting the 8-slot options (A–H) and the activity menu,
the system MUST recommend 1–2 procedures by name when context
clearly warrants it. Add one short line after the activity menu,
e.g. "Consider: [procedure name]" or "Consider: [procedure 1];
[procedure 2]". Use the following context → procedure mapping:
• Key event just occurred or Section VII contains a post-event
  signal check for current topic → Consider: signal check (if a check
  already exists for this event/pattern, recommend running it; if a
  key event just occurred and counterpart intent is discriminating
  for an option but no signal check exists yet for this pattern,
  recommend "Consider: add signal check for [event]" so the user can
  add one)
• User or analysis is assessing likelihood of a specific event →
  Consider: probability assessment
• Bounding outcomes or assessing range of plausible results →
  Consider: best case worst case
• A causal claim (X causes Y) is in play or was asserted →
  Consider: causation correlation
• Fiscal, sanctions, trade, or economic variable is binding for
  an option or opponent → Consider: financial economic
• Elite cohesion, legitimacy cost, factional risk, or domestic
  politics is binding for an option or decision → Consider:
  domestic politics
Recommend at most two procedures per turn; if multiple apply,
choose the 1–2 most salient to the current topic or option. When
no procedure is clearly relevant, omit the recommendation line.
Suppress the recommendation when an activity is active (that
activity's options apply instead).

SELECTABLE CONTEXTUAL OPTION (OPTIONAL):
When the contextual recommendation is a specific, actionable
procedure (e.g. "add signal check for [event]", "run probability
assessment for Pattern [N]", "run stress test on [assumption]"),
the system MAY add one line that makes that action selectable,
e.g. "Or choose: Add signal check for [event]" or "Or choose: Run
probability assessment for Pattern 6". The user can then type or
select that phrase to invoke the procedure. At most one such line
per turn. This does not create a ninth slot; it surfaces the
recommended action as an explicit choice. Omit when the
recommendation is generic (e.g. "Consider: signal check" with no
specific event) or when no contextual recommendation was made.

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
• Relay to State protocol doctrine validity flag -> Pattern Audit or
  Assumption Stress Test to validate the flagged Hard Constraint
• Cross-Entity Pressure Test -> new Decision Point for either entity
• Decision Points outcome -> Revealed Preference Tracker data point
• Session that identifies discriminating evidence for counterpart
  intent after a key event -> add Post-Event Signal Check to Section VII
  (run later via Signal Check); then Probability Assessment for at
  least one signal over the check window (attach to same pattern)
• Decision Point or Scenario Tree branch -> Probability Assessment
  for "P(option succeeds)" or "P(branch occurs)"
• Decision Point or Material Option -> Best Case / Worst Case to
  bound plausible outcomes for that option or horizon
• Material Option or narrative claim that assumes "X causes Y" ->
  Causation / Correlation Analysis to test the claim
• Material Option or opponent assessment where fiscal, sanctions,
  or trade are binding -> Financial / Economic Analysis
• Material Option or decision where elite cohesion, legitimacy
  cost, or factional risk is binding -> Domestic Politics Impact

These triggers are advisory, not automatic. The system notes the
trigger; the user decides whether to follow it.

────────────────────────────────────────────────────────────
X-J. POST-EVENT SIGNAL CHECK (PROCEDURE)
────────────────────────────────────────────────────────────
Signal Check is a STATE procedure used when a key event (summit,
round of talks, etc.) has occurred and the entity needs to interpret
counterpart/opponent intent from observable behaviour in news. It
relies on a watch list already recorded in Section VII under the
relevant pattern.

PREDICTION LINK (design principle):
Every signal check inherently implies at least one testable
prediction. A check without an expected outcome is only a watch
list; a prediction makes it revisable (run result can be scored
against the expectation). When adding a Post-Event Signal Check,
include or add within the same session a probability assessment
(X-K) for at least one of the signals (or a composite) over the
check window — e.g. P(signal X observed) LOW/MODERATE/HIGH by [end
of window]. Attach or link the assessment to the same pattern in
Section VII so runs can be compared to the prediction and the
assessment updated.

MEASURABILITY AND FALSIFIABILITY (required):
Signal categories and linked predictions must be measurable and
falsifiable. (1) Each signal category must be defined so that by
the end of the check window the system can determine from
sources (news, official statements, ARC-attributed) whether the
signal occurred or not — i.e. observable, not purely subjective.
(2) Every linked probability assessment must be falsifiable: by
the end of the timeframe it must be possible to tell whether the
event occurred, so the prediction can be confirmed or revised.
Avoid vague or unfalsifiable formulations (e.g. "US attitude
improves"; prefer "US issues statement using reciprocal framing"
or "third round scheduled by [date]").

WHEN TO ADD A SIGNAL CHECK:
When a session identifies that (a) a key event tests a material
option or binding constraint, and (b) counterpart/opponent intent
is discriminating evidence for that option, add a "Post-Event Signal
Check" bullet under the relevant pattern in Section VII.

FORMAT (Section VII bullets):
• Post-[Event] signal check ([date]): Signals to monitor in news to
  interpret [counterpart] intent — (1) [category]: [what to look for];
  (2) [category]: ...; (3–5) as needed. Interpretation: [what supports
  vs undermines which option]. Check window: [e.g. 2–4 weeks].
• [Check-window] probability assessment ([date]): P([event]) [band]
  [; further P(...) as needed]. Conditional on [assumptions]. Evidence:
  [brief]. Discriminating: [signals that would shift band]. (At least
  one such assessment per signal check; add when creating the check or
  when user requests forecasts.)

PROCEDURE (when user invokes "signal check", "run signal check", or
"check post-[event] signals"):
1. LOCATE: Read the STATE file's Section VII. Find the pattern that
   contains a "Post-Event Signal Check" or "Post-[Event] signal check"
   bullet. If none, report that no signal check is defined and offer
   to add one after the next relevant session.
2. SEARCH: Using the signal categories and check window in that
   bullet, search news (ARC-T-INSTITUTIONAL or equivalent; multi-
   category per ARC source coverage rule) for the relevant period.
3. SCORE: For each signal category, report what was observed (with
   source attribution and editorial note). Note contradictions between
   sources; do not silently resolve.
4. INTERPRET: Apply the interpretation rule from the bullet: which
   option(s) are supported or undermined by the observed signals?
   If a probability assessment is recorded for this pattern, compare
   observed signals to the predicted bands; note confirmation or
   revision need.
5. PROPOSE: Suggest specific updates to Section VII (e.g. one-line
   "Signal check run [date]: ...") or to Material Option evidence in
   Section IV. Apply only after user approval.

Signal Check does not have its own multi-step option menu. The user
invokes it; the system runs steps 1–5 and presents results. Session
closure may update the STATE Log (e.g. "Signal check run for Pattern
[N] (post-[event])").

────────────────────────────────────────────────────────────
X-K. PROBABILITY ASSESSMENT (PROCEDURE)
────────────────────────────────────────────────────────────
Probability Assessment is a STATE procedure that produces a
structured probabilistic prediction for a user-specified event. It
asks: what is the probability that [event] (by [timeframe])?

ORIENTATION:
The procedure is prediction-oriented. It combines MEM-grounded
historical parallels, current evidence (ARC-attributed), and the
three analytical perspectives to assign a probability band and
make the reasoning traceable. It does not invent numeric
probabilities; it uses ordinal bands unless the user or a cited
source provides a number.

DISTINCTION FROM SCENARIO TREE:
Scenario Tree branches from a trigger and assigns conditional
probabilities to each branch. Probability Assessment focuses on
a single target event and produces one assessment with full
evidence and discriminating signals. Use Scenario Tree for
"if X, then A or B or C"; use Probability Assessment for "how
likely is E?".

PROCEDURE (when user invokes "probability assessment", "assess
probability", "what's the probability that [event]", "P([event])",
or equivalent):
1. DEFINE: With the user if needed, state the event in testable,
   observable, and falsifiable form: "Event E: [observable
   description]". By the end of the timeframe it must be possible
   to determine from sources whether E occurred or not, so the
   assessment can be confirmed or revised. Optional: "by [timeframe
   T]" (e.g. "within 90 days", "by end of Q2"). Conditioning
   assumptions (what is held constant) must be explicit (e.g.
   "conditional on no major third-party intervention").
2. MEM SCAN: Read MEM–RELEVANCE–[CIV].md (or Section VII as
   fallback). Load 2–3 primary MEMs relevant to the event type.
   Read file contents; extract specific parallels (dates,
   mechanisms, outcomes). CONNECTION DISCOVERY: from MEM
   CONNECTIONS, add up to 2 further MEMs if relevant.
3. EVIDENCE: Gather current evidence (ARC-T-INSTITUTIONAL or
   equivalent; multi-category per ARC source coverage rule).
   Attribute each claim; surface contradictions. Do not present
   projections as established facts (SOURCE TRANSPARENCY).
4. ASSIGN BAND: Assign one of LOW / MODERATE / HIGH to P(E) (and
   to P(E by T) if timeframe given). Justification must include:
   • Which perspective(s) support the band and why
   • At least one MEM-grounded parallel that informs the level
   • Key current evidence (with attribution)
   Numeric probabilities (e.g. "60%") are permitted only when
   the user requests a number or a cited source provides one;
   otherwise use ordinal bands to avoid fabricated precision.
5. DISCRIMINATING SIGNALS: List 2–4 observable developments that
   would shift the assessment up or down (e.g. "If X is observed,
   move to HIGH"; "If Y, move to LOW").
6. PROPOSE: Suggest recording the assessment in Section VII (e.g.
   "Probability assessment [date]: P(E) [band] by [T] conditional
   on [assumptions] | Evidence: [one line] | Discriminating: [one
   line]") or as an evidence update to a Material Option in
   Section IV. When the assessment is for a signal (or composite)
   monitored by a Post-Event Signal Check, record it under the same
   pattern so runs can be scored against it (X-J PREDICTION LINK).
   Apply only after user approval.

SESSION CLOSURE (optional):
If the user requests closure after an assessment, deliver: event
and band; conditioning; one-line evidence; discriminating signals;
proposed STATE update. Log in STATE Log (Section X) with tag
"PROBABILITY ASSESSMENT."

────────────────────────────────────────────────────────────
X-L. BEST CASE / WORST CASE (PROCEDURE)
────────────────────────────────────────────────────────────
Best Case / Worst Case is a STATE procedure that bounds the outcome
space for a user-specified scope with a plausible optimistic and a
plausible pessimistic scenario. It asks: what is the best plausible
outcome and the worst plausible outcome (and what would need to hold
for each)?

ORIENTATION:
The procedure is range-oriented. It does not assign probabilities to
the bounds (use Probability Assessment for that) or branch from a
trigger (use Scenario Tree for that). It identifies the ceiling and
floor of plausible outcomes so the decision-maker sees the full
range. Both bounds must be grounded — not fantasy best or
apocalyptic worst, but outcomes that could plausibly occur given
stated assumptions and evidence.

DISTINCTION FROM OTHER ACTIVITIES:
| Scenario Tree     | Branches from trigger; conditional probabilities per branch |
| Probability Assessment | Single event; one probability band                    |
| Best / Worst Case  | Two bounds (optimistic, pessimistic); no probabilities     |

PROCEDURE (when user invokes "best case worst case", "bounds",
"best and worst case for [scope]", "bound the outcomes", or
equivalent):
1. SCOPE: With the user if needed, define the scope. Examples:
   "Best/worst case for [entity] over [timeframe]", "Best/worst
   case for Option B (negotiated settlement)", "Best/worst case
   for [crisis/negotiation] through [date]". Scope must be
   specific enough to make the bounds testable.
2. MEM SCAN: Read MEM–RELEVANCE–[CIV].md (or Section VII as
   fallback). Load 2–3 primary MEMs relevant to the scope (e.g.
   settlement, escalation, endurance). Read file contents; extract
   parallels that illustrate upside resolution or downside
   deterioration. CONNECTION DISCOVERY: from MEM CONNECTIONS, add
   up to 2 further MEMs if relevant.
3. BEST CASE: State a plausible optimistic bound. For each bound
   provide:
   • Outcome description (observable end-state or trajectory)
   • Assumptions that must hold (e.g. "reciprocal framing
     sustained", "no strike", "coalition holds")
   • At least one MEM-grounded parallel that illustrates the
     upside (with specific detail)
   • Key current evidence that supports plausibility (ARC-
     attributed); surface contradictions if relevant
   Best case is "plausible best", not "everything goes perfectly"
   — it must be defensible as within the realm of possibility.
4. WORST CASE: State a plausible pessimistic bound. Same
   structure:
   • Outcome description (observable end-state or trajectory)
   • Assumptions that would produce it (e.g. "strike occurs",
     "mediation collapses", "counterpart frames as capitulation")
   • At least one MEM-grounded parallel that illustrates the
     downside (with specific detail)
   • Key current evidence that supports plausibility
   Worst case is "plausible worst", not inevitable catastrophe —
   it must be defensible as a real risk, not a rhetorical floor.
5. DISCRIMINATING SIGNALS: List 2–4 observable developments that
   would move trajectory toward the best case, and 2–4 that would
   move it toward the worst case. Enables monitoring and
   follow-up (e.g. Signal Check or Probability Assessment).
6. PROPOSE: Suggest recording the bounds in Section VII (e.g.
   "Best/worst case [date]: Scope [X] | Best: [one line] if
   [assumptions] | Worst: [one line] if [assumptions] |
   Discriminating: [one line]") or as context for Material Options
   in Section IV. Apply only after user approval.

SESSION CLOSURE (optional):
If the user requests closure, deliver: scope; best case (outcome +
assumptions + one-line evidence); worst case (same); discriminating
signals; proposed STATE update. Log in STATE Log (Section X) with
tag "BEST/WORST CASE."

────────────────────────────────────────────────────────────
X-M. CAUSATION / CORRELATION ANALYSIS (PROCEDURE)
────────────────────────────────────────────────────────────
Causation / Correlation Analysis is a STATE procedure that
examines whether a relationship between X and Y is better
interpreted as correlation (they co-occur or co-vary) or
causation (X causes Y, or Y causes X, with a mechanism). It
asks: does the evidence support a causal claim, or only an
association?

ORIENTATION:
Decision-makers and narratives often assume or assert causal
claims ("if we do X, Y will follow"; "Y happened because of X").
Many such claims are correlational — X and Y are associated but
the direction, mechanism, or exclusivity of cause is unclear.
Treating correlation as causation can misallocate levers (acting
on X when X does not cause Y) or misattribute blame. This
procedure makes the distinction explicit and testable.

PROCEDURE (when user invokes "causation correlation analysis",
"correlation vs causation", "is X causing Y", "test causal claim",
or equivalent):
1. STATE THE CLAIM: Identify the asserted or assumed relationship.
   Form: "X → Y" (X causes Y) or "X ↔ Y" (X and Y associated;
   direction unclear). Be specific: name X and Y in observable
   terms (e.g. "reciprocal framing by US" and "Iran accepts
   deal", not "diplomacy" and "success").
2. EVIDENCE FOR ASSOCIATION: What evidence shows that X and Y
   co-occur or co-vary? (ARC-attributed; multi-category per
   source coverage rule; surface contradictions.) This
   establishes that correlation exists. Do not assume causation
   from correlation.
3. CAUSAL MECHANISM: For the claim "X causes Y", what mechanism
   would link X to Y? Apply each analytical perspective:
   • Legitimacy: narrative, legitimacy, or institutional
     channel (e.g. X enables Y by changing how Y is perceived
     or justified).
   • Power: structural incentive or constraint channel (e.g. X
     changes payoffs or capabilities so Y becomes rational).
   • Liability: exposure or defection channel (e.g. X changes
     who is on the hook, so Y follows from liability calculus).
   State which perspective(s) supply a plausible mechanism and
   what that mechanism is. If no perspective supplies a
   mechanism, the relationship is at best correlational.
4. ALTERNATIVE EXPLANATIONS: What else could cause Y? Consider:
   confounders (Z causes both X and Y), reverse causation (Y
   causes X), selection (X and Y both caused by a third factor),
   or coincidence. Reduces overconfidence in a single causal
   story.
5. DISCRIMINATING TESTS: What would need to be observed to
   support or undermine the causal claim? (e.g. "If X is
   withheld and Y still occurs, causation from X to Y is
   weakened"; "If X changes and Y does not change, mechanism is
   wrong.") Makes the claim falsifiable.
6. ASSESSMENT: Classify the relationship as one of:
   • CORRELATION ONLY — association observed; no clear
     mechanism or direction; or alternatives are as plausible.
   • PLAUSIBLE CAUSATION — mechanism(s) stated; evidence
     consistent with causation but not discriminating; further
     tests possible.
   • STRONGER CAUSAL SUPPORT — mechanism + some discriminating
     evidence (e.g. sequence, natural experiment); alternatives
     considered and weaker.
   Use ordinal assessment; do not invent strength scores.
7. PROPOSE: Suggest recording the analysis in Section VII (e.g.
   "Causation/correlation [date]: Claim X→Y | Association: [one
   line] | Mechanism: [one line] | Assessment: [band] |
   Discriminating test: [one line]") or as an assumption/evidence
   note for a Material Option in Section IV. Apply only after
   user approval.

SESSION CLOSURE (optional):
If the user requests closure, deliver: claim; association
evidence; mechanism(s); alternatives; discriminating test;
assessment band; proposed STATE update. Log in STATE Log
(Section X) with tag "CAUSATION/CORRELATION."

────────────────────────────────────────────────────────────
X-N. FINANCIAL / ECONOMIC ANALYSIS (PROCEDURE)
────────────────────────────────────────────────────────────
Financial / Economic Analysis is a STATE procedure that focuses
on the fiscal, monetary, trade, or sectoral dimension of the
entity, a material option, or an opponent/partner. It asks: what
are the economic constraints, risks, or opportunities that
matter for this decision or this assessment?

ORIENTATION:
Economic and financial variables (budget, debt, sanctions,
currency, terms of trade, sectoral stress) often bind material
options, stability, or opponent behaviour. This procedure does
not replace a treasury or central bank; it frames economic
factors within the existing STATE structure (options, stability
indicators, opponent constraints, MEM precedent) using
ARC-attributed data and MEM-grounded parallels. SOURCE
TRANSPARENCY applies: distinguish VERIFIED DATA (official
statistics, published figures) from PROJECTIONS (analyst
forecasts, model outputs) and flag sourcing limitations.

PROCEDURE (when user invokes "financial analysis", "economic
analysis", "economic dimension", "fiscal constraint", "sanctions
impact", or equivalent):
1. SCOPE: With the user if needed, define the economic question.
   Examples: "Entity's fiscal position and binding constraint";
   "Economic constraint on Option B (negotiated settlement)";
   "Opponent's economic binding constraint (Section VI-B)";
   "Impact of [sanctions / oil price / trade shock] on stability
   or options." Scope determines which variables and which
   STATE section the output will feed.
2. VARIABLES: Identify the relevant economic variables (fiscal:
   budget, debt, deficit; monetary: rates, liquidity, currency;
   trade: balance, sanctions, terms of trade; sectoral: energy,
   defence, critical imports). Prioritise 2–4 that are most
   binding for the scope.
3. DATA: Consult the entity's ARC-T-INSTITUTIONAL (or Category E)
   for official or institutional economic data (e.g. central bank,
   finance ministry, statistics office, budget law). Attribute each
   figure; label VERIFIED DATA vs PROJECTION per SOURCE
   TRANSPARENCY. Multi-category per ARC source coverage rule;
   surface contradictions (e.g. official vs analyst estimates).
   Do not invent or fabricate macro figures.
4. MEM SCAN: Read MEM–RELEVANCE–[CIV].md (or Section VII as
   fallback). Load MEMs that contain economic history relevant to
   the scope (e.g. fiscal exhaustion, sanctions resilience,
   currency collapse, resource windfall). Read file contents;
   extract specific parallels (dates, magnitudes, mechanisms,
   outcomes). CONNECTION DISCOVERY: add up to 2 MEMs from
   CONNECTIONS if relevant.
5. THREE PERSPECTIVES (economic dimension):
   • Legitimacy: How does economic stress or benefit affect the
     regime's narrative, legitimacy, or pain-absorption capacity?
     (e.g. austerity vs "resistance economy" narrative.)
   • Power: How do resources or costs constrain material options
     or relative position? (e.g. fiscal space for escalation;
     opponent's cost tolerance.)
   • Liability: Who bears the economic cost? Who defects or
     gains when budgets break, sanctions bite, or windfalls
     flow? (e.g. elite vs population; institutional survival.)
6. IMPLICATION: State the binding constraint, stability
   implication, or precedent that follows. (e.g. "Fiscal
   exhaustion within 12 months is a binding constraint on
   Option C"; "Sanctions relief sequencing is discriminating
   evidence for Option B"; "Opponent's reserve draw-down
   supports relative degradation assessment in Section VI-B.")
7. PROPOSE: Suggest updates to Section IV (Material Option
   assumption or evidence), Section VI (Stability Indicator),
   Section VI-B (Opponent economic constraint), or Section VII
   (economic precedent). Apply only after user approval.

SESSION CLOSURE (optional):
If the user requests closure, deliver: scope; variables and
key data (attributed); MEM parallel(s); perspective findings;
implication; proposed STATE update. Log in STATE Log (Section X)
with tag "FINANCIAL/ECONOMIC ANALYSIS."

────────────────────────────────────────────────────────────
X-O. DOMESTIC POLITICS IMPACT / ADVICE (PROCEDURE)
────────────────────────────────────────────────────────────
Domestic Politics Impact / Advice is a STATE procedure that
focuses on how internal politics (elite cohesion, factionalism,
public opinion, institutional rivalry, succession, narrative and
legitimacy) constrain or enable a material option, a decision, or
an opponent's behaviour. It asks: what is the domestic politics
impact on this option or this assessment?

ORIENTATION:
Domestic politics often bind what leaders can do (coalition
maintenance, elite defection risk, legitimacy cost of a concession
or escalation). This procedure makes that dimension explicit and
structured. It complements Stability Watch, which assesses all
five stability indicators periodically; Domestic Politics Analysis
is scope-specific (option, decision, or opponent) and on demand.
Use ARC-attributed reporting and MEM-grounded parallels; surface
contradictions. Not a substitute for internal political
intelligence; frames domestic factors for decision-support within
STATE structure.

PROCEDURE (when user invokes "domestic politics", "domestic
politics impact", "domestic constraint", "elite cohesion",
"factional risk", "opponent domestic politics", or equivalent):
1. SCOPE: With the user if needed, define the domestic politics
   question. Examples: "Domestic constraint on Option B (accepting
   a deal)"; "How does elite cohesion affect feasibility of
   escalation?"; "Opponent's domestic politics as binding
   constraint (Section VI-B)"; "Succession or factional risk over
   [timeframe]." Scope determines which dimensions and which
   STATE section the output will feed.
2. DIMENSIONS: Identify the relevant domestic-political
   dimensions (elite cohesion and factionalism; public opinion
   and protest risk; institutional rivalry e.g. parliament vs
   executive, military vs civilian; succession or leadership
   consolidation; narrative and legitimacy — how a decision would
   be framed and received). Prioritise 2–4 most binding for the
   scope.
3. EVIDENCE: Consult the entity's (or opponent's) ARC-T-INSTITUTIONAL
   for current reporting on elites, factions, institutions,
   public mood, succession. Attribute each claim; label sourcing
   (VERIFIED vs PROJECTION vs ANONYMOUS/THIN per SOURCE
   TRANSPARENCY). Multi-category per ARC source coverage; surface
   contradictions.
4. MEM SCAN: Read MEM–RELEVANCE–[CIV].md (or Section VII as
   fallback). Load MEMs that contain domestic-political precedent
   (elite defection, succession crises, legitimacy erosion,
   factional tipping points, court or institutional rivalry).
   Read file contents; extract specific parallels (actors,
   sequences, triggers, outcomes). CONNECTION DISCOVERY: add up
   to 2 MEMs from CONNECTIONS if relevant.
5. THREE PERSPECTIVES (domestic dimension):
   • Legitimacy: How would this decision or option affect the
     regime's narrative and legitimacy? Who must be persuaded;
     what is the legitimacy cost of concession or escalation?
   • Power: How do domestic power balances (factions, institutions)
     constrain or enable the option? Who can veto; who must be
     bought off or balanced?
   • Liability: Who is exposed if the option fails or succeeds?
     Defection incentives; who "owns" the decision; institutional
     survival of key bodies.
6. IMPLICATION: State the domestic binding constraint, stability
   implication, or precedent. (e.g. "Elite cohesion is a binding
   constraint on accepting a deal unless framed as reciprocal";
   "Opponent's coalition fragility limits their escalation
   tolerance (Section VI-B)"; "Succession uncertainty raises
   defection risk for Option C.")
7. PROPOSE: Suggest updates to Section IV (Material Option
   assumption or evidence), Section VI (Stability Indicator),
   Section VI-B (Opponent domestic constraint), or Section VII
   (domestic-political precedent). Apply only after user approval.

SESSION CLOSURE (optional):
If the user requests closure, deliver: scope; dimensions and
key evidence (attributed); MEM parallel(s); perspective
findings; implication; proposed STATE update. Log in STATE Log
(Section X) with tag "DOMESTIC POLITICS."

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
• File names as source citations (e.g. "Source: MEM–RUSSIA–ROMANOV–PETER–I")
• "CIV–CORE" and "CIV–SCHOLAR" as source references only
• Entity classification terms (CIVILIZATION-STATE, etc.)
• Succession link types (IDEOLOGICAL_CLAIM, etc.)
• Named historical precedent counts (e.g. "five historical precedents")
  — naming them is verifiable; counting unnamed indicators is not
• Explicit probability assessments: ordinal bands (LOW / MODERATE /
  HIGH) or cited numeric probabilities, with stated event, timeframe,
  conditioning assumptions, and evidence. The prohibition applies to
  fabricated quantification of "evidence" (e.g. "85% of evidence
  suggests"); Probability Assessment (X-K) uses bands or
  user/source-provided numbers only.

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
  (via Decision-Relevant History and relay to state command)
• **Bidirectional read (STATE side):** STATE re-reads SCHOLAR at each
  analytical node (Material Options, Decision Points, Pattern Audit, etc.),
  focusing on Sections IV–V (axioms, RLLs), VI (Negative Capability Zone),
  and VII (Decision-Relevant History). Real-time re-consultation; no new
  persistence layer.
• STATE's current-events analysis does NOT flow back into SCHOLAR
  except via explicit **relay to scholar** command family
  (Section XIV-B). No other transfer into SCHOLAR learn mode is
  permitted.
• The present becomes history eventually; relay is the gate
  through which STATE session output may enter SCHOLAR as learning
• Relay to state seeds the STATE session with current issues of
  attention and proposes STATE file updates; it does not write to the
  STATE file unless the user explicitly requests transfer to state.
  Relay to scholar ("relay to scholar", "relay session to scholar") is the only
  command that transfers information from STATE session into
  SCHOLAR learn mode (seed for LEARN; transfer on approval).

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
- [ ] When Decision Points options involve a commitment: at least one
      accommodation/reversal option included (per X-B step 8; Doctrine 03)?
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
- [ ] Safeguard trace block present for substantive turns (or explicitly
      marked N/A for the session)?
- [ ] Session activities use their own option structures (not the
      standard 8-slot menu) when invoked?
- [ ] Activity records maintained for Decision Points, Stability
      Watch, Scenario Trees, and Cross-Entity Pressure Tests?
────────────────────────────────────────────────────────────
XIV. RELAY TO STATE PROTOCOL (sources → STATE session; transfer = separate)
────────────────────────────────────────────────────────────
STATE files are derived from CIV–CORE, CIV–SCHOLAR, CIV–DOCTRINE,
and MEM files. When these sources are updated, STATE may become
stale. **Relay to state** seeds the STATE session with the most
recent issues of attention (compare sources, identify changes,
assess impact, propose STATE file updates). It does **not**
automatically write any changes to the STATE file. **Transfer to
STATE** (actual write) is a separate step — only when the user
explicitly requests it (e.g. "apply to state", "write to state",
"transfer to state"). (Formerly named Sync Protocol.)

**Two relay commands:**
• **Relay to state** = seed STATE session with current issues of
  attention; propose STATE file updates; no write. Trigger: "relay
  to state", "relay state", etc. Deprecated: "sync state to scholar",
  "run sync protocol". **Transfer to state** = separate (apply
  proposed updates when user requests).
• **Relay to scholar** = STATE session → seed for LEARN; transfer to
  SCHOLAR only on user approval. See Section XIV-B. Cursor rule:
  cmc-state-scholar-harvest.

Enforcement: When the user issues "relay to state" (or equivalent),
the system MUST follow the RELAY TO STATE PROCEDURE below. Cursor
rule: cmc-relay-to-state.

RELAY TO STATE MECHANISM:
• No automatic triggers or flags
• User issues "relay to state" (or deprecated "sync state to scholar"
  / "run sync protocol")
• System compares current source versions to those in the STATE
  file's Source Versions block
• System identifies changes since last relay that are relevant to
  material options, binding constraints, or stability indicators
• System proposes updates; does **not** write to the STATE file
• Relay output seeds the STATE session: present 8 options (A–H) and
  activity menu so the session is focused on the most recent issues
  of attention. User may then request **transfer to state** to apply
  proposed updates.

SOURCE VERSIONS BLOCK (MANDATORY):
Every STATE file must include a Source Versions section listing
the version of each source file it was last assessed against.

RELAY TO STATE PROCEDURE:
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
5. Propose specific updates to affected sections (do not apply)
6. Present proposal and seed STATE session (8 options + activity menu)
7. TRANSFER TO STATE (separate step): Only when user explicitly
   requests ("apply to state", "write to state", "transfer to state"),
   apply approved updates and update Source Versions block and STATE Log

LIGHTWEIGHT DRIFT CHECK (RECOMMENDED):
At session start (or before closure), run a fast consistency check that
compares Source Versions entries to current header versions of listed sources.
If mismatched, flag for user approval in the relay-to-state proposal.

────────────────────────────────────────────────────────────
XIV-B. RELAY PROTOCOL (STATE → SCHOLAR LEARN)
────────────────────────────────────────────────────────────
**Relay vs transfer (two steps).**
• **Relay** = use STATE session output as **seed for LEARN**. Propose
  specific additions to CIV–SCHOLAR–[CIV]; present to user. No write
  to SCHOLAR yet. User may explore in LEARN or approve transfer.
• **Transfer to SCHOLAR** = separate step. Actual write to
  CIV–SCHOLAR–[CIV] happens only when user explicitly approves
  (e.g. "apply", "write to SCHOLAR", "transfer") or after LEARN
  exploration and user requests transfer.

**Exclusive gate:** Only the **"relay to scholar"** command family
in STATE mode may initiate this flow. No other mechanism may write
STATE session output into CIV–SCHOLAR. This preserves a single,
user-controlled gate for present-oriented learning to enter the
SCHOLAR ledger.

Trigger: User issues "relay to scholar" or equivalent
("relay session to scholar", "relay this session", "relay")
while in STATE mode, for the entity in focus.
Deprecated (avoid; still accepted): "harvest", "harvest session".

Relay procedure:
1. Identify the STATE session output to be relayed (e.g. decision-
   point findings, pattern audit results, revealed-preference
   updates, doctrine-check insights, forward-projection summaries).
2. Propose specific additions to CIV–SCHOLAR–[CIV] in a form
   appropriate to that file (e.g. ENTRY, synthesis candidate, RLL
   proposal, pattern note, or MEM generation candidate per SCHOLAR
   template Section X.A). This is the seed for LEARN — no write yet.
3. Present proposed additions to the user. Transfer (actual write)
   only when user explicitly approves or requests transfer after
   LEARN.
4. Record in the STATE file (e.g. STATE Log or session activity
   record) that a relay was performed and, if transfer was approved,
   what was transferred.
5. Transition options: After completing the relay, present 8 options
   (A–H) in LEARN format so the user can seamlessly continue in
   LEARN mode. Options reference the relayed content and offer
   A=Mercouris, B=Mearsheimer, C=Barnes, D=Multi-mind, E=Backward,
   F=Forward, G=Cross-civ, H=Synthesis. 10–20 words per option;
   at least one concrete anchor per option. See cmc-oge-enforcement.

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
END OF FILE — CIV–STATE–TEMPLATE v3.9
────────────────────────────────────────────────────────────
