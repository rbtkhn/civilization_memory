CIV–DOCTRINE–TEMPLATE — v2.1
Civilizational Strategy Codex · Doctrine Registry Template
Doctrine-Only Extraction Layer

Status: ACTIVE · CANONICAL · TEMPLATE
Version: 2.1
Supersedes: CIV–DOCTRINE–TEMPLATE v2.0
Upgrade Type: ADDITIVE · ALIGNMENT PATCH
Class: CIV–DOCTRINE (Template)
Scope: GLOBAL (All Civilizations)
Compatibility: CIV–MEM–CORE v2.0+ · CIV–SCHOLAR–TEMPLATE v2.10 · CIV–SCHOLAR–PROTOCOL v2.2
Governance Authority: CIV–MEM–CORE v2.0 (or higher)
Lock Level: TOTAL (Doctrine-Only · No Learning)
Last Update: January 2026

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.1) — ALIGNMENT PATCH
────────────────────────────────────────────────────────────
This version preserves ALL structure, authority model, governance
constraints, and admissibility rules from CIV–DOCTRINE–TEMPLATE v2.0.

v2.1 introduces the following ADDITIVE alignment fixes:

• Explicit compatibility declaration for current template versions
  (CIV–SCHOLAR–TEMPLATE v2.10, CIV–SCHOLAR–PROTOCOL v2.2)
• Fixed section numbering (duplicate Section XI → XI and XII)
• DIB role clarification added

No authority is weakened.
No governance rule is removed.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v2.0)
────────────────────────────────────────────────────────────
v2.0 introduced:

• Governance Authority requirement updated to CIV–MEM–CORE v2.0 (or higher)
• Aligns with CIV–MEM–CORE v2.0 (MERCOURIS Integration Edition)

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

DIB CLARIFICATION (v2.1):
The Doctrine Intake Board (DIB) is a governance checkpoint, not a
separate file. DIB approval = explicit user authorization to freeze
a SCHOLAR synthesis as doctrine. The DIB function is exercised by
any explicit user command to freeze and accept a doctrine candidate.

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
VIII. DOCTRINE MIRRORING REQUIREMENT (MANDATORY)
────────────────────────────────────────────────────────────
CIV–DOCTRINE–[CIVILIZATION] instances MUST be mirrored verbatim into:
• CIV–CORE–[CIVILIZATION]
• CIV–SCHOLAR–[CIVILIZATION]

Mirroring Rules:
• Mirroring is declarative, not interpretive
• All ACCEPTED doctrines must be mirrored (REJECTED doctrines are excluded)
• Mirrored doctrines provide citation surface for CIV–CORE engines
• Mirrored doctrines inform SCHOLAR learning without constraining it
• CIV–DOCTRINE remains the single source of truth for doctrine definitions

────────────────────────────────────────────────────────────
IX. CITATION RULES
────────────────────────────────────────────────────────────
Only doctrines listed in a CIV–DOCTRINE file may be cited as
**authoritative doctrine** by CIV–CORE engines.

Required citation format:
• Doctrine Name
• CIV–DOCTRINE–[CIVILIZATION] version
• Doctrine number

Silent doctrine usage is prohibited.

Note: CIV–CORE may cite doctrines from its mirrored DOCTRINE section,
but the citation must reference CIV–DOCTRINE–[CIVILIZATION] as the source.

────────────────────────────────────────────────────────────
X. GOVERNANCE & LOCK STATE
────────────────────────────────────────────────────────────
This template enforces:

• No learning
• No synthesis
• No belief mutation
• No implicit doctrine generation
• No CIV–CORE override

All derived CIV–DOCTRINE files MUST be LOCKED by default.

────────────────────────────────────────────────────────────
XI. TEMPLATE INHERITANCE & CONSTRAINTS
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
XII. VERSIONING & CANONICAL STATUS
────────────────────────────────────────────────────────────
This template is CANONICAL.

Future versions:
• May clarify language
• May add governance safeguards
• May NOT remove sections
• May NOT weaken authority chain
• May NOT alter admissibility rules

Derived files MUST include:
"Derived from CIV–DOCTRINE–TEMPLATE v2.1"

────────────────────────────────────────────────────────────
END OF FILE — CIV–DOCTRINE–TEMPLATE v2.1
────────────────────────────────────────────────────────────
