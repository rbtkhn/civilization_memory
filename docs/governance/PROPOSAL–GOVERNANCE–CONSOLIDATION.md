PROPOSAL–GOVERNANCE–CONSOLIDATION — v3.2
Civilizational Memory Codex · Structural Improvement Proposal
Consolidate Governance Documents into Two-Tier System

Status: DRAFT · PROPOSAL
Author: System Analysis
Date: February 2026

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
Governance is fragmented across many overlapping documents.

CURRENT GOVERNANCE FILES (docs/governance/):
• CMC–BOOTSTRAP.md (523 lines) — Quick start, version bindings
• CIV–MEM–CORE.md — Master law (unknown length, likely 1000+)
• VERSION–MANIFEST.md — Version registry

CURRENT TEMPLATES (docs/templates/):
• CIV–MEM–TEMPLATE.md (1237 lines) — MEM structure
• CIV–SCHOLAR–TEMPLATE.md (1530 lines) — Scholar behavior
• CIV–SCHOLAR–PROTOCOL.md (975 lines) — Scholar operating law
• CIV–CORE–TEMPLATE.md — CIV-CORE structure
• CIV–DOCTRINE–TEMPLATE.md — Doctrine structure
• CIV–INDEX–TEMPLATE.md — Index structure
• CIV–MIND–MERCOURIS.md — Mercouris voice
• CIV–MIND–MEARSHEIMER.md — Mearsheimer voice
• CIV–MIND–BARNES.md — Barnes voice
• CIV–MIND–TEMPLATE.md — MIND profile template

CURRENT CURSOR RULES (.cursor/rules/):
• cmc-mode-contracts.mdc
• cmc-blend-law.mdc
• cmc-oge-enforcement.mdc
• cmc-scholar-mode.mdc
• cmc-mercouris-voice.mdc
• cmc-mearsheimer-voice.mdc
• cmc-barnes-voice.mdc
• cmc-tri-frame-protocol.mdc
• cmc-version-upgrade-on-edit.mdc

TOTAL: 20+ governance files with overlapping content

PROBLEMS:
1. Interpretation conflicts — When BOOTSTRAP says one thing and PROTOCOL adds nuance
2. Redundancy — Same rules repeated in multiple places
3. Discovery difficulty — Where is the rule for X?
4. Update burden — Changes must propagate across files
5. Cognitive overload — Too many files to internalize

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Consolidate into a two-tier system.

A) TIER 1: CANONICAL SPECIFICATION (Human-Readable)

Single authoritative document:

docs/governance/CMC–SPECIFICATION.md

Contents (merged from existing files):
• System purpose and principles
• File types and naming conventions
• MEM structure requirements
• SCHOLAR modes and rules
• Voice profiles (Mercouris/Mearsheimer/Barnes)
• OGE requirements
• Versioning rules
• Phase model
• Compliance standards

This becomes the ONE document for understanding the system.

Target length: ~3,000 words (compressed from current ~10,000+ across files)

B) TIER 2: ENFORCEMENT RULES (Machine-Readable)

Cursor rules remain as enforcement layer:

.cursor/rules/cmc-*.mdc

These are:
• Optimized for LLM consumption
• Extracted from Tier 1 spec
• Focused on operational rules, not explanation
• Quick-reference checklists

Cursor rules reference Tier 1 for full explanation:
"See CMC–SPECIFICATION Section IV for complete OGE rules."

C) ARCHIVE LAYER (Reference Only)

Move current governance files to archive:

docs/governance/archive/
• CMC–BOOTSTRAP.md (superseded)
• CIV–MEM–CORE.md (superseded)
• CIV–SCHOLAR–PROTOCOL.md (superseded)
• etc.

Archive is:
• Non-authoritative
• Preserved for historical reference
• Not loaded in new sessions

D) TEMPLATE RETENTION

Keep templates as separate files (they define file structure, not system rules):

docs/templates/
• CIV–MEM–TEMPLATE.md — How to write a MEM
• CIV–CORE–TEMPLATE.md — How to write a CIV-CORE
• CIV–DOCTRINE–TEMPLATE.md — How to write a Doctrine

Templates reference CMC–SPECIFICATION for rules, but define structure.

────────────────────────────────────────────────────────────
III. PROPOSED STRUCTURE
────────────────────────────────────────────────────────────

TIER 1 — CANONICAL SPEC
docs/governance/CMC–SPECIFICATION.md

SECTIONS:
I.    System Purpose
II.   File Taxonomy
III.  MEM Requirements
IV.   SCHOLAR Modes
V.    Voice Profiles
VI.   OGE Protocol
VII.  Versioning
VIII. Phases
IX.   Compliance

TIER 2 — ENFORCEMENT
.cursor/rules/
├── cmc-core.mdc          — Core principles (from Spec I, II)
├── cmc-mem-rules.mdc     — MEM requirements (from Spec III)
├── cmc-scholar.mdc       — SCHOLAR modes (from Spec IV)
├── cmc-voices.mdc        — All three voices (merged)
├── cmc-oge.mdc           — OGE rules (from Spec VI)
└── cmc-version.mdc       — Version rules (from Spec VII)

TEMPLATES
docs/templates/
├── CIV–MEM–TEMPLATE.md
├── CIV–CORE–TEMPLATE.md
├── CIV–DOCTRINE–TEMPLATE.md
├── CIV–SCHOLAR–TEMPLATE.md
└── CIV–INDEX–TEMPLATE.md

ARCHIVE
docs/governance/archive/
├── CMC–BOOTSTRAP.md
├── CIV–MEM–CORE.md
├── CIV–SCHOLAR–PROTOCOL.md
├── VERSION–MANIFEST.md
└── ... (all current files)

────────────────────────────────────────────────────────────
IV. CONSOLIDATION EXAMPLES
────────────────────────────────────────────────────────────
EXAMPLE 1: OGE Rules

CURRENT (spread across 3 files):
• CMC–BOOTSTRAP: "OGE required in ALL modes"
• cmc-oge-enforcement.mdc: 200+ lines of detailed rules
• cmc-tri-frame-protocol.mdc: POST-BARNES OGE rules
• CIV–SCHOLAR–PROTOCOL: OGE in LEARN mode

PROPOSED:
• CMC–SPECIFICATION Section VI: Complete OGE rules (100 lines)
• cmc-oge.mdc: Enforcement checklist (50 lines)

EXAMPLE 2: Voice Profiles

CURRENT (3 separate files + cursor rules):
• CIV–MIND–MERCOURIS.md: Full Mercouris profile
• CIV–MIND–MEARSHEIMER.md: Full Mearsheimer profile
• CIV–MIND–BARNES.md: Full Barnes profile
• cmc-mercouris-voice.mdc: Mercouris enforcement
• cmc-mearsheimer-voice.mdc: Mearsheimer enforcement
• cmc-barnes-voice.mdc: Barnes enforcement

PROPOSED:
• CMC–SPECIFICATION Section V: All three voices (unified)
• cmc-voices.mdc: Combined enforcement checklist

────────────────────────────────────────────────────────────
V. MIGRATION PATH
────────────────────────────────────────────────────────────
PHASE 1 — Draft Consolidated Spec
• Write CMC–SPECIFICATION.md by extracting from existing files
• Do not delete existing files yet
• Test spec completeness against real usage

PHASE 2 — Update Cursor Rules
• Simplify Cursor rules to reference consolidated spec
• Reduce redundancy between rules
• Test enforcement in actual sessions

PHASE 3 — Archive Old Files
• Move superseded files to archive folder
• Update any cross-references
• Announce consolidation

PHASE 4 — Template Alignment
• Update templates to reference consolidated spec
• Remove governance content from templates (keep structure only)

────────────────────────────────────────────────────────────
VI. IMPACT ANALYSIS
────────────────────────────────────────────────────────────
BENEFITS:
• Single source of truth for system rules
• Faster onboarding (one document to read)
• Fewer interpretation conflicts
• Easier updates (change one place)
• Cleaner repository structure

COSTS:
• Significant writing effort to consolidate
• Risk of losing nuance during compression
• Existing references to old files break
• Transition period with parallel systems

RISKS:
• Consolidated spec may be too long
• Some edge cases may be lost
• Users may still reference archived files

MITIGATION:
• Cap spec at 3,000 words maximum
• Review consolidation with current users
• Add redirects in archived files pointing to new spec

────────────────────────────────────────────────────────────
VII. DECISION REQUIRED
────────────────────────────────────────────────────────────
Options:
A) ACCEPT — Implement governance consolidation as proposed
B) MODIFY — Accept with changes (specify)
C) DEFER — Acknowledge problem but delay solution
D) REJECT — Maintain current governance structure

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–GOVERNANCE–CONSOLIDATION v1.0
────────────────────────────────────────────────────────────
