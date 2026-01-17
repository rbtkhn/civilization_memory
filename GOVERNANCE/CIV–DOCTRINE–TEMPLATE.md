CIV–DOCTRINE–TEMPLATE — v1.0
Civilizational Strategy Codex · Doctrine Registry Template
Doctrine-Only Extraction Layer

Status: ACTIVE · CANONICAL · TEMPLATE
Version: 1.0
Class: CIV–DOCTRINE (Template)
Scope: GLOBAL (All Civilizations)
Compatibility: CIV / MEM Architecture
Governance Authority: CIV–MEM–CORE v1.5 (or higher)
Lock Level: TOTAL (Doctrine-Only · No Learning)

────────────────────────────────────────────────────────────
I. PURPOSE & ROLE
────────────────────────────────────────────────────────────
This template defines the **exclusive structure, authority model,
and governance constraints** for all CIV–DOCTRINE files.

A CIV–DOCTRINE file is:
• A registry of **accepted, frozen doctrines only**
• A downstream extraction artifact
• A citation surface for CIV–CORE engines

A CIV–DOCTRINE file is NOT:
• A learning ledger
• A synthesis workspace
• A belief store
• A scholar file
• A predictive or analytical system

Doctrines exist here **only after explicit freezing** elsewhere.

────────────────────────────────────────────────────────────
II. AUTHORITY CHAIN (MANDATORY)
────────────────────────────────────────────────────────────
All CIV–DOCTRINE files MUST enforce the following authority flow,
verbatim and without alteration:

CIV–MEM–CORE
→ CIV–CORE–[CIVILIZATION]
→ DIB–[CIVILIZATION] (Explicit Acceptance)
→ CIV–DOCTRINE–[CIVILIZATION]

Rules:
• No doctrine may bypass this chain
• No doctrine may be self-authorized
• No doctrine may originate inside CIV–DOCTRINE

────────────────────────────────────────────────────────────
III. DOCTRINE ADMISSIBILITY RULES
────────────────────────────────────────────────────────────
A doctrine MAY be entered into a CIV–DOCTRINE file ONLY if:

1. It originates from a **FROZEN SYNTHESIS** in CIV–SCHOLAR–[CIV]
2. The synthesis was explicitly frozen by command
3. The doctrine was explicitly accepted by DIB–[CIV]
4. A new doctrine version number is assigned

Prohibited:
• Draft doctrines
• Candidate beliefs
• Analytical hypotheses
• Controlled synthesis outputs
• Scholar commentary
• Historical narration

────────────────────────────────────────────────────────────
IV. REQUIRED FILE HEADER (DERIVED FILES)
────────────────────────────────────────────────────────────
All derived CIV–DOCTRINE files MUST include:

• Status: ACTIVE · CANONICAL · LOCKED
• Civilization: [CIVILIZATION]
• Class: CIV–DOCTRINE
• Source Authority: DIB–[CIVILIZATION]
• Compatibility: CIV–CORE–[CIVILIZATION] vX.X
• Last Update: [Month Year]

Header mutation is forbidden.

────────────────────────────────────────────────────────────
V. DOCTRINE ENTRY STRUCTURE (MANDATORY)
────────────────────────────────────────────────────────────
Each doctrine entry MUST follow this exact structure:

DOCTRINE ##
Name: [DOCTRINE NAME]
Status: ACCEPTED · LOCKED · CANONICAL
Source:
• CIV–SCHOLAR–[CIVILIZATION] (SYNTHESIS ####)

Definition:
[Formal, declarative doctrinal statement]

Operational Meaning:
• [Concrete operational implication]
• [Constraint or behavioral rule]
• [Diagnostic or evaluative usage]

Hard Constraints:
• [Explicit failure condition]
• [Non-negotiable limit]
• [Invalidation trigger]

Rules:
• No narrative prose
• No examples unless structural
• No predictive language

────────────────────────────────────────────────────────────
VI. VERSIONING RULES
────────────────────────────────────────────────────────────
• Doctrine numbers are immutable
• Doctrine text is immutable once LOCKED
• Modification requires a **new doctrine version**
• Deletions are forbidden
• Reordering is forbidden

Supersession is additive only.

────────────────────────────────────────────────────────────
VII. EXCLUDED MATERIAL SECTION (MANDATORY)
────────────────────────────────────────────────────────────
All CIV–DOCTRINE files MUST include a section titled:

“EXPLICITLY EXCLUDED MATERIAL”

Purpose:
• To record that no rejected or provisional doctrines
  are silently present

If no exclusions exist, the section MUST state:
“No doctrines have been rejected at this stage.”

────────────────────────────────────────────────────────────
VIII. CITATION RULES
────────────────────────────────────────────────────────────
Only doctrines listed in a CIV–DOCTRINE file may be cited as
**authoritative doctrine** by CIV–CORE engines.

Required citation format:
• Doctrine Name
• CIV–DOCTRINE–[CIVILIZATION] version
• Doctrine number

Silent doctrine usage is prohibited.

────────────────────────────────────────────────────────────
IX. GOVERNANCE & LOCK STATE
────────────────────────────────────────────────────────────
This template enforces:

• No learning
• No synthesis
• No belief mutation
• No implicit doctrine generation
• No CIV–CORE override

All derived CIV–DOCTRINE files MUST be LOCKED by default.

────────────────────────────────────────────────────────────
X. TEMPLATE INHERITANCE & CONSTRAINTS
────────────────────────────────────────────────────────────
This template:

ENFORCES
• Structural uniformity across civilizations
• Doctrine parity without convergence
• Explicit authority provenance
• Downstream-only doctrinal flow

FORBIDS
• Silent doctrine insertion
• Scholar authority bleed
• Historical narrative
• Analytical reasoning
• Predictive usage

────────────────────────────────────────────────────────────
XI. VERSIONING & CANONICAL STATUS
────────────────────────────────────────────────────────────
This template is CANONICAL.

Future versions:
• May clarify language
• May add governance safeguards
• May NOT remove sections
• May NOT weaken authority chain
• May NOT alter admissibility rules

Derived files MUST include:
“Derived from CIV–DOCTRINE–TEMPLATE v1.0”

────────────────────────────────────────────────────────────
END OF FILE — CIV–DOCTRINE–TEMPLATE v1.0
────────────────────────────────────────────────────────────
