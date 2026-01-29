CIV–MEM–TEMPLATE — v2.9
Civilizational Memory Codex · Memory File Enforcement Template
THREE-LAYER ARCHITECTURE · STRUCTURED DATA FIELDS · TRADECRAFT INTEGRATION

Status: ACTIVE · CANONICAL · LOCKED
Supersedes: CIV–MEM–TEMPLATE v2.8
Upgrade Type: MAJOR STRUCTURAL · THREE-LAYER ARCHITECTURE
Class: CIV–MEM–TEMPLATE (Authoring Law)
Compatibility: CIV–MEM–CORE v2.7+
Last Update: January 2026
WORDCOUNT: ~7,500

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.9) — THREE-LAYER ARCHITECTURE · STRUCTURED DATA
────────────────────────────────────────────────────────────
This version implements the Three-Layer MEM Architecture (TLA)
from CIV–MEM–CORE v2.7, adding type-specific structured data
fields and optional analytical extensions.

NEW REQUIREMENT — THREE-LAYER ARCHITECTURE:
• Layer 1: Universal Prose (existing requirements, now explicitly named)
• Layer 2: Type-Specific Structured Fields (REQUIRED for new MEMs)
• Layer 3: Optional Analytical Fields (as applicable)

LAYER 2 TYPE-SPECIFIC FIELDS (NEW):
• WAR: Belligerents, Classification, Outcome, Force Ratios, Casualties
• TREATY: Parties, Classification, Closure Capacity, Duration
• GEO: Parameters, Strategic Significance, Control Sequence
• FIGURE: Biographical, Career, Influence
• INSTITUTION: Temporal Span, Membership, Function
• CITY: Geographic, Economic Function, Control History

LAYER 3 OPTIONAL FIELDS (NEW):
• Collapse Sequence Data: For collapse-related MEMs
• Synthesis Linkage: For MEMs grounding SYNTHESIS entries
• Assumptions Box: For MEMs anchoring major analytical claims
• ACH Record: For MEMs where competing hypotheses were evaluated

ENFORCEMENT:
• New MEMs (created after v2.9): Layer 2 MANDATORY
• Existing MEMs: Layer 2 OPTIONAL upgrade path
• Upgrade versioning: v2.0 → v2.1 when adding structured fields

Reference Implementation: MEM–GERMANIA–WAR–NAPOLEON v2.1

See: CIV–MEM–CORE v2.7, Sections XXIV-XXVII

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.8) — PROPORTIONAL BLEND LAW · GEO–MEM REQUIREMENTS
────────────────────────────────────────────────────────────
This version implements the Proportional Blend Law for polyphonic
architecture across file types.

NEW REQUIREMENT — FILE TYPE BLEND RATIOS:
• GEO–MEM files: 2/3 Mearsheimer + 1/3 Mercouris
• Subject MEM files: 2/3 Mercouris + 1/3 Mearsheimer

GEO–MEM SPECIFIC REQUIREMENTS (NEW):
• Must contain 4 ARC sections (ARC-T-ANCIENT, ARC-T-MEDIEVAL, 
  ARC-T-EARLY-MOD, ARC-T-MODERN)
• ARC quotes fulfill the 1/3 Mercouris requirement
• Strategic analysis fulfills the 2/3 Mearsheimer requirement
• Cognitive layer declaration required

See: CIV–MEM–CORE v2.6, Section VP-1.g (Proportional Blend Law)

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.7) — CEO PROMOTION PROVENANCE
────────────────────────────────────────────────────────────
This version added provenance tracking for MEMs promoted from
Current Event Observations (CEOs).

NEW SECTION:
• CEO → MEM Promotion Provenance (Section XX)
• Documents observation-to-canonical pathway
• Required only for MEMs promoted from ephemeral observations
• Cross-references EPHEMERAL–OBSERVATION–PROTOCOL and CIV–CEO–TEMPLATE

MEMs promoted from CEOs must include provenance block but still
meet full template compliance including 20% EQS with upgraded sources.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.6) — MANDATORY MEM BIBLIOGRAPHY
────────────────────────────────────────────────────────────
This version adds mandatory bibliography sections to all MEM files.

NEW REQUIREMENT:
• MEM BIBLIOGRAPHY section listing verbatim cited sources and unused scholarly sources
• Ensures scholarly transparency and academic chain of custody
• Supports future verification and comparative scholarship

All existing MEM files require bibliography section addition for v2.6 compliance.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.5) — MANDATORY 20% EVIDENCE STANDARD
────────────────────────────────────────────────────────────
This version implements mandatory 20% verbatim quote minimum with comprehensive safeguards:

MANDATORY 20% QUOTE STANDARD:
• All MEM files MUST contain ≥20% verbatim quotes by word count
• Forces deeper scholarly engagement and evidentiary grounding
• Automatic validation in canonical advancement process

ANALYTICAL PROTECTION SAFEGUARDS:
• 70% minimum analytical content floor prevents starvation
• Balances evidentiary rigor with intellectual depth
• Ensures MEMs remain analytical intelligence objects

QUALITY SAFEGUARDS:
• EQS compliance requirements prevent quote stuffing
• Relevance thresholds ensure meaningful scholarly contribution
• Scholarly diversity requirements prevent single-perspective dominance

ENHANCED ADAPTIVE MATRIX:
• Updated subject-type requirements to achieve 20% minimum
• Modern subjects: Expanded secondary sources for volume
• Sparse subjects: Optimized requirements for feasibility

BREAKING CHANGE: Requires 20% compliance for canonical advancement
MIGRATION: 6-month transition period for existing MEMs

────────────────────────────────────────────────────────────
I. PURPOSE & AUTHORITY
────────────────────────────────────────────────────────────
This file defines the mandatory structure, evidentiary standards,
scholarly constraints, behavioral rules, and ingest behavior for all
MEM (Civilizational Memory) files.

Core principle:
A MEM file must function as a self-contained historical intelligence
object capable of activating structured inquiry even when ingested
alone into a new conversation.

Authority Flow (NON-REVERSIBLE):
CIV–MEM–CORE → CIV–MEM–TEMPLATE → MEM Files → SCHOLAR / CORE / GAME / LLM

No MEM file is valid unless compliant with this template AND the
applicable ARC–[CIV] canon at the time of locking.

────────────────────────────────────────────────────────────
II. FILE IDENTITY & METADATA (MANDATORY)
────────────────────────────────────────────────────────────
Every MEM file MUST begin with the following metadata block,
in this exact order:

• Filename (canonical)
• Repository reference
• Status (ACTIVE / LOCKED / DRAFT)
• Version (semantic)
• Supersedes (if applicable)
• Upgrade Type (if applicable)
• Civilization
• Regime / Mode (if applicable)
• Subject
• Dates (BC / AD only)
• Class: MEM (Memory)
• Last Update
• Wordcount (verified)

Omission or mis-ordering INVALIDATES the MEM.

────────────────────────────────────────────────────────────
III. MEMORY PURPOSE & SCOPE (REQUIRED)
────────────────────────────────────────────────────────────
Each MEM file MUST explicitly state:

• What is being preserved
• Why it matters civilizationally
• What function it serves in memory
• What it explicitly does NOT resolve

MANDATORY CLAUSE (verbatim):

“Contradictions are preserved without synthesis.”

────────────────────────────────────────────────────────────
IV. STRUCTURAL CONTENT RULES (HARD)
────────────────────────────────────────────────────────────
• Minimum 8 numbered analytical sections (see counting rules below)
• Analytical, not narrative
• No teleology
• No retrospective inevitability

ANALYTICAL SECTION COUNTING RULES:
────────────────────────────────────────────────────────────
Sections that COUNT toward the 8-section minimum:
• Substantive analytical sections (historical, structural, thematic analysis)
• Quote integration sections with substantial commentary
• MEM Connections section (if substantive, not just links)
• Counterfactual section (if included)
• Conclusion/synthesis sections

Sections that DO NOT COUNT:
• Metadata headers (title, version, status)
• Upgrade notes
• Governance declarations (ARC compliance, substitution declarations)
• MEM Ingest Bootstrap (procedural, not analytical)
• Bibliography/References (listing, not analysis)
• END OF FILE marker

EXAMPLE VALID STRUCTURE:
I. Introduction/Context — COUNTS
II. Primary Evidence — COUNTS
III. Quote Analysis Section — COUNTS
IV. Structural Analysis — COUNTS
V. Pattern Identification — COUNTS
VI. Tension/Contradiction — COUNTS
VII. Comparative Frame — COUNTS
VIII. Counterfactual — COUNTS
IX. MEM Connections — COUNTS if substantive
X. Ingest Bootstrap — DOES NOT COUNT
XI. Bibliography — DOES NOT COUNT
• No moral adjudication

Permitted:
• Structural tension
• Ambiguity
• Constraint recognition

────────────────────────────────────────────────────────────
V. ERC — EVIDENCE ROLE CATEGORIES
────────────────────────────────────────────────────────────
All quotations MUST be classified by evidence role (ERC).

NOTE: ERC is ORTHOGONAL to ARC-Temporal categories.
See NAMESPACE–CLARIFICATION for full disambiguation.

ERC-PRIMARY    — Direct evidence from the subject period
ERC-CONTEXTUAL — Contemporary or near-contemporary analysis
ERC-SECONDARY  — Scholarly analysis and synthesis
ERC-CRITICAL   — Modern historiographical evaluation

ERC classification is governed by evidentiary PURPOSE, not temporal origin.
A modern author publishing a primary document is ERC-PRIMARY.

────────────────────────────────────────────────────────────
VI. EVIDENCE QUALITY STANDARDS (EQS)
────────────────────────────────────────────────────────────
EQS defines objective quality requirements for all quotations.

This standard governs admissibility through demonstrable criteria.

────────────────────────────────────────────────────────────
VI.A PASS CRITERIA (Must Meet ≥2)
────────────────────────────────────────────────────────────
A quotation PASSES EQS if it demonstrates:

• AUTHORITY: Source credibility clearly established
• RELEVANCE: Direct connection to MEM claims shown
• CONTEXT: Historical/cultural context provided
• LIMITATION: Source constraints or biases acknowledged

────────────────────────────────────────────────────────────
VI.B FAIL CRITERIA
────────────────────────────────────────────────────────────
A quotation FAILS EQS if it exhibits:

• No analytical engagement with source content
• Pure description without interpretive value
• Misrepresentation of source intent
• Failure to acknowledge evidentiary limitations

EQS failure blocks canonical advancement.

────────────────────────────────────────────────────────────
VI.C GOVERNANCE CONSEQUENCES
────────────────────────────────────────────────────────────
• QTT–ARC failure MAY NOT be silently bypassed
• Failure MUST be declared explicitly
• Failure blocks CANONICAL lock
• Failure does NOT invalidate ingestibility

────────────────────────────────────────────────────────────
VII. ARC-TEMPORAL SUBSTITUTION PROTOCOL
────────────────────────────────────────────────────────────
When ARC-T-EARLY-MOD (Early Modern period) sources are REQUIRED but FAIL QTT–ARC:

NOTE: This protocol addresses ARC-Temporal (author period) substitution,
not ERC (evidence role) substitution. See NAMESPACE–CLARIFICATION.

• The system MUST first attempt approved ARC–[CIV] authors
• If quality threshold is not met after reasonable search,
  substitution MAY occur

SUBSTITUTION RULE:
• ARC-T-EARLY-MOD sources MAY be replaced by ADDITIONAL ARC-T-MODERN sources
• Replacement sources MUST meet HIGH analytical threshold
• Substitution MUST be explicitly declared

MANDATORY DECLARATION (verbatim):

“EARLY MODERN SUBSTITUTION DECLARATION:
Required ARC-T-EARLY-MOD (Early Modern) sources were sought but failed to
meet the ARC Quality Threshold Test. In accordance with CIV–MEM–TEMPLATE,
ARC-T-EARLY-MOD quotations are replaced by additional ARC-T-MODERN sources.
This substitution is explicit and disclosed.”

Silent substitution is PROHIBITED.

────────────────────────────────────────────────────────────
VIII. MANDATORY 20% VERBATIM QUOTE STANDARD
────────────────────────────────────────────────────────────
All MEM files MUST contain at least 20% verbatim quotes by word count.

PURPOSE: Force deeper scholarly engagement and stronger evidentiary grounding.

CALCULATION: Quote words ÷ Total MEM words × 100 ≥ 20

ENFORCEMENT: Automatic validation in canonical advancement process.

────────────────────────────────────────────────────────────
VIII.A ADAPTIVE QUOTATION REQUIREMENTS
────────────────────────────────────────────────────────────
Requirements scale based on subject complexity and source availability:

PRIMARY CATEGORY (Direct Evidence):
• ≥2 quotations, ≥50 words total (minimum)
• ≥3 quotations for well-documented subjects
• N/A for modern subjects with no primary sources

CONTEXTUAL CATEGORY (Contemporary Analysis):
• ≥1 quotation, ≥25 words (minimum)
• ≥2 quotations for subjects with rich contemporary sources
• ≥1 quotation for interpretive or modern subjects

SECONDARY CATEGORY (Scholarly Analysis):
• ≥2 distinct scholars, ≥1 quotation each (minimum)
• ≥3 scholars for complex or contested subjects
• ≥4 scholars for interpretive or theoretical topics

CRITICAL CATEGORY (Historiographical Evaluation):
• ≥1 quotation addressing methodology or limitations
• ≥2 quotations for subjects requiring meta-analysis
• Optional for straightforward factual subjects

────────────────────────────────────────────────────────────
VIII.B 20% COMPLIANCE MATRIX
────────────────────────────────────────────────────────────
For MEMs voluntarily adopting 20% quote enhancement:

WELL-DOCUMENTED EVENT (Target: 20-25% quotes):
• PRIMARY: ≥4 quotations (rich source base)
• CONTEXTUAL: ≥3 quotations (multiple contemporary perspectives)
• SECONDARY: ≥4 scholars (analytical depth needed)
• CRITICAL: ≥2 quotations (methodological awareness)

SPARSE SOURCES SUBJECT (Target: 18-22% quotes):
• PRIMARY: ≥3 quotations (limited availability)
• CONTEXTUAL: ≥2 quotations (when available)
• SECONDARY: ≥3 scholars (compensate for source limitations)
• CRITICAL: ≥1 quotation (scholarly context essential)

MODERN SUBJECT (19th-20th century) (Target: 18-22% quotes):
• PRIMARY: N/A (no primary sources exist)
• CONTEXTUAL: ≥2 quotations (contemporary accounts)
• SECONDARY: ≥5 scholars (primary analytical burden - expanded for volume)
• CRITICAL: ≥3 quotations (modern historiography essential)

INTERPRETIVE/THEORETICAL SUBJECT (Target: 20-25% quotes):
• PRIMARY: ≥2 quotations (establish factual foundation)
• CONTEXTUAL: ≥2 quotations (period context)
• SECONDARY: ≥5 scholars (multiple perspectives needed)
• CRITICAL: ≥3 quotations (theoretical evaluation required)

────────────────────────────────────────────────────────────
VIII.C REQUIREMENT DECLARATION
────────────────────────────────────────────────────────────
MEM files MUST declare their subject type and applied requirements:

SUBJECT TYPE DECLARATION:
"This MEM addresses a [WELL-DOCUMENTED/SPARSE SOURCES/MODERN/INTERPRETIVE] subject.
Applied requirements: PRIMARY ≥X, CONTEXTUAL ≥Y, SECONDARY ≥Z, CRITICAL ≥W"

This declaration enables governance validation and ensures appropriate evidentiary standards.

────────────────────────────────────────────────────────────
VIII.D ANALYTICAL PROTECTION SAFEGUARDS
────────────────────────────────────────────────────────────
To prevent analytical starvation while enforcing 20% quote minimum:

ANALYTICAL CONTENT FLOOR:
• Minimum 70% of MEM content MUST be original analytical synthesis
• Quote integration sections count as analytical content
• Pure quote blocks do not count toward analytical floor

MATHEMATICAL DEFINITION (CANONICAL):
────────────────────────────────────────────────────────────
Let TOTAL = all words in MEM file
Let Q = verbatim quote words (inside quotation marks)
Let A = non-quote analytical words
Let I = integrated quote analysis (words analyzing/contextualizing quotes)

WORD SETS:
• Q and A are DISJOINT (Q ∩ A = ∅)
• TOTAL = Q + A
• I ⊆ A (integration analysis is part of analytical words)

COMPLIANCE RULES:
• QUOTE REQUIREMENT: Q ≥ 0.20 × TOTAL
• ANALYSIS REQUIREMENT: A ≥ 0.70 × TOTAL
• COMBINED: Q + A = TOTAL, so Q ≤ 0.30 × TOTAL (implicit ceiling)

VALID RANGE:
• Q must be between 20% and 30% of TOTAL
• A must be between 70% and 80% of TOTAL
• Q + A = 100% (exact, no overlap)

INTEGRATION CLARIFICATION:
• Quote words (Q) are NEVER double-counted as analytical (A)
• Words ABOUT quotes (analysis, context) count as A, not Q
• Only verbatim text inside quotation marks counts as Q

ENFORCEMENT: Automatic validation requires both Q ≥ 20% AND A ≥ 70%.

────────────────────────────────────────────────────────────
VIII.E QUALITY SAFEGUARDS (ANTI-QUOTE-STUFFING)
────────────────────────────────────────────────────────────
To ensure quote quality over quantity:

EQS COMPLIANCE REQUIREMENT:
• All quotes must meet Evidence Quality Standards (≥2 criteria)
• Additional quotes beyond minimum must meet ≥3 EQS criteria
• Marginal quotes automatically rejected in canonical review

RELEVANCE THRESHOLD:
• Each quote must materially advance MEM analysis
• Decorative or volume-padding quotes prohibited
• Quote selection must demonstrate scholarly judgment

SCHOLARLY DIVERSITY REQUIREMENT:
• Quotes must represent multiple scholarly perspectives
• Single-author dominance prohibited
• Must include both supportive and challenging viewpoints

────────────────────────────────────────────────────────────
IX. SECONDARY SOURCE ENTANGLEMENT
────────────────────────────────────────────────────────────
Secondary quotations MUST be analytically integrated.
Citation without analytical engagement is INVALID.

────────────────────────────────────────────────────────────
X. MEM CONNECTION REQUIREMENTS (BINARY · HARD)
────────────────────────────────────────────────────────────
Every MEM file MUST include a dedicated MEM CONNECTIONS section.

Connection requirements:

• ≥10 same-civilization MEM connections
• ≥2 GEO MEM files required
• Each listed connection MUST be structurally necessary

────────────────────────────────────────────────────────────
X.A BINARY CONNECTION RULE
────────────────────────────────────────────────────────────
MEM Connections are binary.

A connection is either:
• Structurally required → INCLUDED
• Not structurally required → EXCLUDED

Weak, contextual, illustrative, or optional connections
MUST NOT be listed.

Strength ratings, scoring, weighting, or gradation
are explicitly PROHIBITED.

Inclusion in the MEM Connections list itself constitutes
affirmation of structural necessity.

────────────────────────────────────────────────────────────
X.B CONNECTION JUSTIFICATION (REQUIRED)
────────────────────────────────────────────────────────────
Each MEM Connection MUST include a concise justification explaining:

• What dependency exists
• Why the connected MEM is necessary for intelligibility
• What breaks if the connection is removed

Justification is explanatory, not evaluative.

────────────────────────────────────────────────────────────
XI. CONTINUITY INSIGHTS (RAW)
────────────────────────────────────────────────────────────
• Bullet points only
• No synthesis
• No verdicts

────────────────────────────────────────────────────────────
XII. PEDAGOGICAL AFFORDANCE LAYER
────────────────────────────────────────────────────────────
MEMs must support curiosity-driven exploration.
No assessment, scoring, or closure.

────────────────────────────────────────────────────────────
XIII. MEM INGEST BOOTSTRAP
────────────────────────────────────────────────────────────
When ingested without CORE, the system MUST:
• Confirm ingest
• Declare MEM active
• Present exactly EIGHT exploration options

────────────────────────────────────────────────────────────
XIV. ARC VERSION PINNING
────────────────────────────────────────────────────────────
Each MEM MUST declare ARC–[CIV] version used.
Mismatch blocks canonical lock.

────────────────────────────────────────────────────────────
XV. COMPLIANCE TIERS
────────────────────────────────────────────────────────────
DRAFT → PARTIAL → COMPLIANT → CANONICAL

CANONICAL: Requires ≥20% quotes with 70% analytical content and EQS compliance

Skipping tiers is forbidden.

────────────────────────────────────────────────────────────
XVI. FAILURE MODE ENFORCEMENT
────────────────────────────────────────────────────────────
Silent failure is prohibited.
All failures must be declared with reason.

────────────────────────────────────────────────────────────
XVII. LANGUAGE CONSTRAINTS
────────────────────────────────────────────────────────────
Forbidden:
• inevitable
• destined
• obvious
• had to

────────────────────────────────────────────────────────────
XVIII. MEM BIBLIOGRAPHY (MANDATORY)
────────────────────────────────────────────────────────────
Every MEM file MUST include a bibliography section listing all scholarly sources engaged with during development.

Format:
• Complete bibliographic entries for all sources referenced in MEM development
• Includes both directly quoted sources and important scholarly works consulted

Purpose:
• Ensures scholarly transparency
• Enables future source verification
• Supports academic chain of custody
• Facilitates comparative scholarship

────────────────────────────────────────────────────────────
XIX. STORAGE & MIRRORING RULE
────────────────────────────────────────────────────────────
This file MUST be mirrored verbatim into:
– CIV–CORE–[CIV] (all civilizations)
– CIV–SCHOLAR–[CIV] (all civilizations)
– CIV–INDEX–[CIV] (when applicable)

Any divergence invalidates MEM compliance for that civilization.

────────────────────────────────────────────────────────────
XX. CEO → MEM PROMOTION PROVENANCE (NEW · v2.7)
────────────────────────────────────────────────────────────
When a MEM file is created from a promoted Current Event Observation,
it must include provenance information.

PROMOTION PROVENANCE BLOCK (when applicable):

PROMOTION PROVENANCE:
────────────────────────────────────────────────────────────
• Promoted From: [CEO-ID, e.g., CEO–UKRAINE–2026-01-24–REUTERS]
• Original Observation Date: [Date of CEO creation]
• Promotion Date: [Date of MEM creation]
• Temporal Distance: [Time between observation and promotion]
• Source Upgrade: [What new sources enabled promotion]

This block is OPTIONAL — only required for MEMs promoted from CEO files.

PURPOSE:
• Maintains epistemic chain of custody
• Documents observation-to-canonical pathway
• Enables audit of promotional decisions
• Preserves connection to original ephemeral analysis

REQUIREMENTS FOR PROMOTED MEMS:
• Must meet full CIV–MEM–TEMPLATE compliance
• Must achieve 20% EQS with upgraded sources
• Original CEO sources alone are insufficient
• Provenance block does not reduce evidentiary standards

ENFORCEMENT (BINDING):
If a MEM is promoted from a CEO, omission of this provenance block
INVALIDATES CANONICAL LOCK.

See: EPHEMERAL–OBSERVATION–PROTOCOL VI (CEO → MEM Promotion Path)
See: CIV–CEO–TEMPLATE XI (Promotion Requirements)

────────────────────────────────────────────────────────────
XXI. WORD COUNT GOVERNANCE
────────────────────────────────────────────────────────────
MEM files must remain focused intelligence objects, not encyclopedic
narratives. Word count limits enforce compression discipline while
preserving flexibility for genuinely complex subjects.

XXI.A WORD COUNT LIMITS
────────────────────────────────────────────────────────────
TARGET RANGE: 2,500–4,000 words (RECOMMENDED)
Most MEMs should fall within this range. Sufficient for structural
analysis with proper evidentiary support.

SOFT CEILING: 5,000 words (JUSTIFICATION REQUIRED)
MEMs exceeding 4,000 words require explicit justification:
• Multi-phase conflicts spanning decades
• Subjects with complex internal structure
• High quote density from unusually rich sources

Justification must appear in MEM metadata or upgrade notes.

HARD CEILING: 6,000 words (ABSOLUTE MAXIMUM)
No MEM may exceed 6,000 words regardless of subject complexity.
Exceeding this limit blocks CANONICAL advancement.

If a subject genuinely requires more than 6,000 words, it must be
split into multiple MEMs (e.g., WAR–PHASE–I, WAR–PHASE–II).

XXI.B WORD COUNT CALCULATION
────────────────────────────────────────────────────────────
Word count includes:
• All prose content
• Verbatim quotations
• Section headers
• Metadata block

Word count excludes:
• File path and filename
• Horizontal rule characters (────)
• Empty lines

XXI.C RELATIONSHIP TO QUOTE REQUIREMENTS
────────────────────────────────────────────────────────────
The 20% quote minimum and 70% analytical minimum constrain the
relationship between quotes and analysis:

MATHEMATICAL CONSTRAINT:
• At 2,500 words: ~500 quote words minimum, ~1,750 analytical words minimum
• At 4,000 words: ~800 quote words minimum, ~2,800 analytical words minimum
• At 6,000 words: ~1,200 quote words minimum, ~4,200 analytical words minimum

This prevents quote-stuffing as a means of inflating word count.

XXI.D ENFORCEMENT
────────────────────────────────────────────────────────────
DRAFT: No word count enforcement
PARTIAL: Soft ceiling applies (justification for >4,000)
COMPLIANT: Soft ceiling applies
CANONICAL: Hard ceiling enforced (>6,000 blocks lock)

MEMs exceeding hard ceiling may not advance to CANONICAL status
until reduced through revision or splitting.

────────────────────────────────────────────────────────────
XXII. GEO–MEM FILE TYPE REQUIREMENTS (NEW · v2.8)
────────────────────────────────────────────────────────────
GEO–MEM files follow the Proportional Blend Law with specific
structural requirements.

XXII.A BLEND RATIO
────────────────────────────────────────────────────────────
GEO–MEM files: 2/3 MEARSHEIMER + 1/3 MERCOURIS

• 2/3 Strategic Analysis (Mearsheimer voice):
  - Terrain geometry and constraints
  - Power distribution implications
  - Structural patterns across all periods
  - "What does this terrain DO to actors?"

• 1/3 ARC Verbatim Quotes (Mercouris evidence):
  - Ancient sources demonstrating pattern permanence
  - Medieval sources confirming continuity
  - Early modern historiography
  - Modern scholarship

XXII.B REQUIRED SECTIONS
────────────────────────────────────────────────────────────
GEO–MEM files MUST contain:

1. GEO–MEM COGNITIVE DECLARATION
   - Declares Mearsheimer strategic cognition
   - References CIV–MEM–CORE v2.2 Proportional Blend Law

2. STRATEGIC ANALYSIS SECTIONS (≥6)
   - Terrain geometry
   - Power distribution implications
   - Strategic constraints
   - Defensibility analysis
   - (Subject-specific sections as needed)

3. ARC QUOTE SECTIONS (4 required)
   - ARC-T-ANCIENT: Ancient Sources
   - ARC-T-MEDIEVAL: Medieval Sources
   - ARC-T-EARLY-MOD: Early Modern Historiography
   - ARC-T-MODERN: Modern Scholarship

4. GEO–MEM CONNECTIONS
   - Related GEO–MEMs
   - Subject MEM cross-reference (Mercouris cognition)
   - Cross-civilizational GEO references

XXII.C COGNITIVE DECLARATION FORMAT
────────────────────────────────────────────────────────────
Every GEO–MEM MUST include:

"This GEO–MEM expresses MEARSHEIMER STRATEGIC COGNITION.

GEO–MEMs contain:
• Strategic analysis (~2/3): terrain logic, power distribution
• ARC verbatim quotes (~1/3): demonstrating permanent patterns

GEO–MEMs do NOT synthesize civilizational claims or polyphonic tension.
For full civilizational narrative, see subject MEM."

XXII.D CROSS-REFERENCE REQUIREMENT
────────────────────────────────────────────────────────────
GEO–MEMs MUST reference corresponding subject MEM when it exists:

• Subject MEM (Mercouris cognition): MEM–[CIV]–[SUBJECT]

This creates complementary polyphony through file structure.

────────────────────────────────────────────────────────────
XXIII. VERSIONING & LOCK
────────────────────────────────────────────────────────────
• Additive upgrades only
• Deletions forbidden
• Canonical lock absolute

v2.9 ADDITIONS:
• Three-Layer Architecture implementation (Sections XXIV-XXVII)
• Layer 2 Type-Specific Field Requirements
• Layer 3 Optional Analytical Fields
• Structured Field Validation
• Version Transition Rules

v2.8 ADDITIONS:
• Proportional Blend Law implementation
• GEO–MEM File Type Requirements section

v2.7 ADDITIONS:
• CEO → MEM Promotion Provenance section
• Word Count Governance section

────────────────────────────────────────────────────────────
XXIV. LAYER 2 TYPE-SPECIFIC FIELD REQUIREMENTS
────────────────────────────────────────────────────────────
Layer 2 defines structured data fields required for each MEM type.
These fields enable cross-MEM queries and systematic comparison.

Enforcement:
• REQUIRED for new MEMs (created after v2.9)
• OPTIONAL upgrade for existing MEMs

────────────────────────────────────────────────────────────
XXIV.A WAR MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
WAR MEMs must include the following structured data section:

SECTION: WAR STRUCTURED DATA (LAYER 2)

SUBSECTION: BELLIGERENTS (REQUIRED)
Table format:
| Party | Role | Entry | Exit | Outcome |
|-------|------|-------|------|---------|

Role values: Aggressor, Defender, Coalition, Neutral→Belligerent
Outcome values: Victor, Defeated, Draw, Repositioned

SUBSECTION: WAR CLASSIFICATION (REQUIRED)
| Field | Value |
|-------|-------|
| WAR_TYPE | [Hegemonic/Interstate/Civil/Colonial/Religious] |
| DURATION | [Years-Months or date range] |
| THEATER | [Geographic scope] |
| TRIGGER | [Casus belli summary] |
| PHASES | [If multi-phase war] |

SUBSECTION: OUTCOME CLASSIFICATION (REQUIRED)
| Field | Value |
|-------|-------|
| MILITARY_OUTCOME | [Decisive/Indecisive/Stalemate] |
| TERRITORIAL_CHANGE | [Yes/No: brief description] |
| REGIME_CHANGE | [Yes/No: brief description] |
| SETTLEMENT | [Treaty name or "None"] |
| SETTLEMENT_DURATION | [Years until superseded] |
| CLOSURE_TYPE | [Path A (Inclusion) / Path B (Rupture) / Hybrid] |

SUBSECTION: FORCE RATIOS (REQUIRED)
Table format:
| Date | Event | Party A Forces | Party B Forces | Ratio | Notes |
|------|-------|----------------|----------------|-------|-------|

Force counts as approximate numbers. Ratio as X:1 format.

SUBSECTION: CASUALTY DATA (OPTIONAL)
Table format:
| Party | Military Dead | Military Wounded | Civilian Dead | Notes |
|-------|---------------|------------------|---------------|-------|

Casualty data is approximate. Source should be noted.

────────────────────────────────────────────────────────────
XXIV.B TREATY MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
TREATY/SETTLEMENT MEMs must include:

SECTION: TREATY STRUCTURED DATA (LAYER 2)

SUBSECTION: PARTIES (REQUIRED)
| Party | Role | Signature Date | Ratification Date |
|-------|------|----------------|-------------------|

Role values: Victor, Defeated, Mediator, Guarantor, Observer

SUBSECTION: SETTLEMENT CLASSIFICATION (REQUIRED)
| Field | Value |
|-------|-------|
| CLOSURE_TYPE | [Path A (Inclusion) / Path B (Rupture) / Hybrid] |
| SETTLEMENT_TYPE | [Peace Treaty/Armistice/Congress/Diktat] |
| ENFORCEMENT_MECHANISM | [Alliance/Occupation/Organization/None] |
| DURATION | [Years until superseded or violated] |
| TERMINATED_BY | [Event/Treaty that ended settlement] |

SUBSECTION: CLOSURE CAPACITY ALIGNMENT (REQUIRED)
| Dimension | Aligned? | Evidence |
|-----------|----------|----------|
| Incentive | [Yes/No/Partial] | [Brief explanation] |
| Power | [Yes/No/Partial] | [Brief explanation] |
| Legitimacy | [Yes/No/Partial] | [Brief explanation] |

SUBSECTION: TERRITORIAL PROVISIONS (OPTIONAL)
| Territory | From | To | Status |
|-----------|------|-----|--------|

Status values: Annexed, Ceded, Plebiscite, Mandate, Restored

SUBSECTION: COMPARISON CASES (OPTIONAL)
| Field | Value |
|-------|-------|
| PARALLELS | [Similar successful settlements] |
| CONTRASTS | [Failed settlements with similar conditions] |
| SUCCESSOR | [Settlement that replaced this one] |

────────────────────────────────────────────────────────────
XXIV.C GEO MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
GEO MEMs must include (in addition to Section XXII requirements):

SECTION: GEO STRUCTURED DATA (LAYER 2)

SUBSECTION: GEOGRAPHIC PARAMETERS (REQUIRED)
| Field | Value |
|-------|-------|
| REGION_BOUNDS | [Description or coordinates] |
| TERRAIN_TYPE | [Steppe/Forest/Mountain/Maritime/Riverine/Urban/Mixed] |
| CLIMATE_ZONE | [Continental/Temperate/Arctic/Arid/Tropical] |
| KEY_FEATURES | [Rivers, mountains, ports, etc.] |

SUBSECTION: STRATEGIC SIGNIFICANCE (REQUIRED)
| Field | Value |
|-------|-------|
| CHOKEPOINT | [Yes/No: explanation] |
| PROJECTION_CORRIDOR | [Yes/No: explanation] |
| DEFENSE_BALANCE | [Offense-dominant/Defense-dominant/Neutral] |
| RESOURCE_SIGNIFICANCE | [Agricultural/Industrial/Mineral/Maritime/None] |

SUBSECTION: CONTROL SEQUENCE (REQUIRED)
| Era | Controller | Control Mode | Entry | Exit |
|-----|------------|--------------|-------|------|

Control Mode values: Nomadic, Settled, Imperial, Colonial, Contested

────────────────────────────────────────────────────────────
XXIV.D FIGURE MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
FIGURE MEMs (individual historical figures) must include:

SECTION: FIGURE STRUCTURED DATA (LAYER 2)

SUBSECTION: BIOGRAPHICAL (REQUIRED)
| Field | Value |
|-------|-------|
| BIRTH | [Date] |
| DEATH | [Date] |
| NATIONALITY | [Civilization/State] |
| PRIMARY_ROLE | [Statesman/Military/Intellectual/Religious/Economic] |

SUBSECTION: CAREER (REQUIRED)
| Period | Position | Institution |
|--------|----------|-------------|

SUBSECTION: INFLUENCE (REQUIRED)
| Field | Value |
|-------|-------|
| MAJOR_WORKS | [List if applicable] |
| KEY_DECISIONS | [List of consequential actions] |
| INFLUENCE_DOMAIN | [Military/Diplomatic/Intellectual/Economic] |
| CITED_IN_MEMS | [List of MEMs referencing this figure] |

SUBSECTION: CIVILIZATIONAL POSITION (OPTIONAL)
| Field | Value |
|-------|-------|
| CIVILIZATION | [Primary civilization] |
| ERA_ACTIVE | [Era(s)] |
| INSTITUTIONAL_AFFILIATION | [Key institutions] |
| LEGACY_STATUS | [Revered/Contested/Forgotten/Rehabilitated] |

────────────────────────────────────────────────────────────
XXIV.E INSTITUTION MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
INSTITUTION/DYNASTY MEMs must include:

SECTION: INSTITUTION STRUCTURED DATA (LAYER 2)

SUBSECTION: TEMPORAL SPAN (REQUIRED)
| Field | Value |
|-------|-------|
| FOUNDED | [Date] |
| DISSOLVED | [Date or "Extant"] |
| DURATION | [Years] |
| FOUNDER | [Person or event] |

SUBSECTION: MEMBERSHIP (REQUIRED)
| Member | Entry | Exit | Role |
|--------|-------|------|------|

Role values: Founder, Member, Observer, Expelled

SUBSECTION: FUNCTION CLASSIFICATION (REQUIRED)
| Field | Value |
|-------|-------|
| PRIMARY_FUNCTION | [Governance/Defense/Economic/Legitimacy/Administrative] |
| ENFORCEMENT_MECHANISM | [Military/Legal/Economic/Ideological/None] |
| IDEOLOGICAL_BASIS | [Description] |
| TERRITORIAL_SCOPE | [Description] |

SUBSECTION: LINEAGE (OPTIONAL)
| Field | Value |
|-------|-------|
| PRECEDED_BY | [Prior institution or "None"] |
| SUCCEEDED_BY | [Successor institution or "None"] |
| PARALLEL_INSTITUTIONS | [Contemporary equivalents] |

────────────────────────────────────────────────────────────
XXIV.F CITY MEM STRUCTURED FIELDS
────────────────────────────────────────────────────────────
CITY/PLACE MEMs must include:

SECTION: CITY STRUCTURED DATA (LAYER 2)

SUBSECTION: GEOGRAPHIC (REQUIRED)
| Field | Value |
|-------|-------|
| COORDINATES | [Latitude/Longitude or region] |
| TERRAIN | [Coastal/Riverine/Inland/Mountain] |
| CLIMATE | [Climate zone] |
| KEY_FEATURES | [Port, fortress, trade route, etc.] |

SUBSECTION: ECONOMIC FUNCTION (REQUIRED)
| Field | Value |
|-------|-------|
| PRIMARY_FUNCTION | [Trade/Administrative/Military/Religious/Industrial] |
| TRADE_NETWORKS | [Connected networks] |
| ECONOMIC_SIGNIFICANCE | [Description] |

SUBSECTION: CONTROL HISTORY (REQUIRED)
| Era | Controller | Status | Entry | Exit |
|-----|------------|--------|-------|------|

Status values: Capital, Provincial, Occupied, Free City, Colony

────────────────────────────────────────────────────────────
XXV. LAYER 3 OPTIONAL ANALYTICAL FIELDS
────────────────────────────────────────────────────────────
Layer 3 fields are OPTIONAL but recommended when applicable.
They enable deeper analytical integration and tradecraft compliance.

────────────────────────────────────────────────────────────
XXV.A COLLAPSE SEQUENCE DATA
────────────────────────────────────────────────────────────
Apply to: MEMs documenting imperial or state collapse

PURPOSE: Enable systematic comparison of collapse patterns across
cases and validation of collapse-related SYNTHESIS entries.

SECTION: COLLAPSE SEQUENCE DATA (LAYER 3)

SUBSECTION: EVENT TIMELINE (REQUIRED if section included)
| Date | Event | Phase Classification |
|------|-------|---------------------|

Phase Classification values:
• Phase 1 (Arithmetic) onset/crisis/completion
• Phase 2 (Defection) onset/cascade/completion
• Phase 3 (Legitimacy) onset/formalization/completion

SUBSECTION: SEQUENCE CLASSIFICATION (REQUIRED if section included)
| Field | Value |
|-------|-------|
| PRIMARY_SEQUENCE | [1→2→3 / 3→2→1 / 2→1→3 / Simultaneous / Other] |
| SEQUENCE_VARIANT | [Standard/Inverted/Blocked/Accelerated] |
| SEQUENCE_CONFIDENCE | [High/Medium/Low] |
| VALIDATES | [SYNTHESIS ID if applicable] |

SUBSECTION: SEQUENCE DETERMINANT CODING (OPTIONAL)
| Determinant | Value | Evidence |
|-------------|-------|----------|
| Regime Type | [Military-conquest/Ideological/Dynastic/Colonial] | [Brief] |
| Defeat Visibility | [Visible/Hidden/Mixed] | [Brief] |
| Elite Cohesion | [Personal/Institutional/Fragmented] | [Brief] |
| Challenge Origin | [External/Internal/Mixed] | [Brief] |
| Periphery Integration | [Coercive/Legitimated/Mixed] | [Brief] |

────────────────────────────────────────────────────────────
XXV.B SYNTHESIS LINKAGE
────────────────────────────────────────────────────────────
Apply to: MEMs that validate or ground SYNTHESIS entries

PURPOSE: Explicitly document how this MEM supports SYNTHESIS claims.

SECTION: SYNTHESIS LINKAGE (LAYER 3)

SUBSECTION: VALIDATES (REQUIRED if section included)
| Synthesis ID | Validation Type | Confidence | Notes |
|--------------|-----------------|------------|-------|

Validation Type values: Confirms, Extends, Qualifies, Challenges

SUBSECTION: PHASE VALIDATION DETAIL (OPTIONAL)
| Phase/Element | Validated By | Evidence in MEM |
|---------------|-------------|-----------------|

SUBSECTION: CROSS-REFERENCES (OPTIONAL)
| Related Entry | Relationship |
|---------------|--------------|

Related Entry: SYNTHESIS IDs, RLL IDs, other MEMs

────────────────────────────────────────────────────────────
XXV.C ASSUMPTIONS BOX (MEM-LEVEL)
────────────────────────────────────────────────────────────
Apply to: MEMs anchoring major analytical claims

PURPOSE: Identify key assumptions underlying MEM analysis.

Note: Assumptions Box is REQUIRED for SYNTHESIS entries
(per CIV–MEM–CORE v2.7 Section XXVI). For MEMs, it is optional
but recommended for those making significant analytical claims.

SECTION: ASSUMPTIONS BOX (LAYER 3)

SUBSECTION: ASSUMPTION [N] (repeat as needed)
| Field | Content |
|-------|---------|
| STATEMENT | [What the assumption claims] |
| BASIS | [Evidence or reasoning] |
| IF_WRONG | [Consequence for analysis] |
| LINCHPIN_STATUS | [High/Medium/Low] |

SUBSECTION: ASSUMPTIONS SUMMARY
| # | Assumption | Linchpin | Testable? |
|---|------------|----------|-----------|

────────────────────────────────────────────────────────────
XXV.D ACH RECORD (MEM-LEVEL)
────────────────────────────────────────────────────────────
Apply to: MEMs where competing interpretations were evaluated

PURPOSE: Document alternative hypotheses considered and why
the preferred interpretation was selected.

Note: ACH Record is REQUIRED for SYNTHESIS entries where
alternatives were evaluated (per CIV–MEM–CORE v2.7 Section XXVI).
For MEMs, it is optional.

SECTION: ACH RECORD (LAYER 3)

SUBSECTION: HYPOTHESES EVALUATED
| ID | Hypothesis | Status |
|----|------------|--------|

Status values: Preferred, Rejected, Inconclusive

SUBSECTION: DISCRIMINATING EVIDENCE
| Evidence | Supports | Contradicts |
|----------|----------|-------------|

SUBSECTION: VERDICT
| Field | Value |
|-------|-------|
| PREFERRED_HYPOTHESIS | [ID] |
| CONFIDENCE | [High/Medium/Low] |
| KEY_DISCRIMINATOR | [Evidence that decided] |

────────────────────────────────────────────────────────────
XXVI. STRUCTURED FIELD VALIDATION
────────────────────────────────────────────────────────────
Structured fields must meet validation requirements before
MEM can advance to CANONICAL status.

────────────────────────────────────────────────────────────
XXVI.A COMPLETENESS REQUIREMENTS
────────────────────────────────────────────────────────────
• All REQUIRED subsections for MEM type must be present
• All REQUIRED fields within subsections must have values
• Empty tables are prohibited (tables must contain ≥1 data row)
• "N/A" or "Unknown" permitted only with explanation

Incomplete Layer 2 blocks CANONICAL advancement for new MEMs.

────────────────────────────────────────────────────────────
XXVI.B VALUE CONSTRAINTS
────────────────────────────────────────────────────────────
DATES:
• ISO 8601 format preferred (YYYY-MM-DD)
• Era notation permitted (YYYY BC, YYYY AD)
• Approximate dates: prefix with ~ (e.g., ~1200 BC)
• Date ranges: use "–" separator (1792–1815)

ENUMERATIONS:
• Use defined values from field specifications
• Custom values require explicit declaration
• Consistency across MEMs of same type required

NUMERIC:
• Force ratios: X:1 format (e.g., 3.4:1)
• Casualties: Approximate ranges permitted (~100,000)
• Durations: Years or Years-Months format

────────────────────────────────────────────────────────────
XXVI.C CROSS-REFERENCE VALIDATION
────────────────────────────────────────────────────────────
• MEMs referenced in Synthesis Linkage must exist
• SYNTHESIS IDs referenced must exist in SCHOLAR files
• RLL IDs referenced must exist in SCHOLAR files
• Broken references block CANONICAL advancement

────────────────────────────────────────────────────────────
XXVI.D LAYER 2/3 COMPLIANCE CHECKLIST
────────────────────────────────────────────────────────────
Before marking MEM as CANONICAL (for new MEMs):

LAYER 2 CHECKLIST:
- [ ] Type-appropriate structured data section present
- [ ] All REQUIRED subsections included
- [ ] All REQUIRED fields populated
- [ ] No empty tables
- [ ] Date formats consistent
- [ ] Enumeration values valid

LAYER 3 CHECKLIST (if applicable):
- [ ] Optional sections appropriate to MEM content
- [ ] Cross-references valid
- [ ] Assumptions clearly stated (if Assumptions Box included)
- [ ] ACH methodology sound (if ACH Record included)

────────────────────────────────────────────────────────────
XXVII. VERSION TRANSITION RULES
────────────────────────────────────────────────────────────
These rules govern transition to the three-layer architecture.

────────────────────────────────────────────────────────────
XXVII.A NEW MEM REQUIREMENTS
────────────────────────────────────────────────────────────
MEMs created after v2.9 effective date (January 2026):

• Layer 1: MANDATORY (all existing prose requirements apply)
• Layer 2: MANDATORY (type-specific structured fields required)
• Layer 3: OPTIONAL (recommended where applicable)

New MEMs without Layer 2 cannot advance to CANONICAL status.

────────────────────────────────────────────────────────────
XXVII.B EXISTING MEM UPGRADE PATH
────────────────────────────────────────────────────────────
MEMs created before v2.9:

• Layer 1: Already present (no change required)
• Layer 2: OPTIONAL upgrade (strongly recommended)
• Layer 3: OPTIONAL (as applicable)

Existing MEMs remain valid without Layer 2.
Voluntary upgrade is encouraged but not required.

────────────────────────────────────────────────────────────
XXVII.C VERSION INCREMENT RULE
────────────────────────────────────────────────────────────
When adding Layer 2/3 to existing MEMs:

• Version increments by 0.1 (e.g., v2.0 → v2.1)
• Upgrade Type: "STRUCTURED DATA ADDITION (LAYER 2/3)"
• Upgrade Note documents what was added

This preserves version history while marking structural upgrades.

────────────────────────────────────────────────────────────
XXVII.D NO BREAKING CHANGES
────────────────────────────────────────────────────────────
Layer 2/3 addition does not change Layer 1 requirements:

• 20% quote minimum unchanged
• 70% analytical floor unchanged
• MEM Connection requirements unchanged
• EQS requirements unchanged
• All existing prose rules remain in force

The three-layer architecture is additive, not substitutive.

────────────────────────────────────────────────────────────
XXVIII. CANONICAL STATUS (UPDATED)
────────────────────────────────────────────────────────────
This file is CANONICAL.

v2.9 ADDITIONS:
• Section XXIV: Layer 2 Type-Specific Field Requirements
• Section XXV: Layer 3 Optional Analytical Fields
• Section XXVI: Structured Field Validation
• Section XXVII: Version Transition Rules

Future versions may:
• Add field specifications for new MEM types
• Refine field validation requirements
• Add new Layer 3 optional fields

They may NOT:
• Remove existing sections
• Weaken Layer 1 requirements
• Make Layer 2 optional for new MEMs
• Break backward compatibility with existing MEMs

────────────────────────────────────────────────────────────
END OF FILE — CIV–MEM–TEMPLATE v2.9
────────────────────────────────────────────────────────────