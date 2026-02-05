CHANGELOG — v1.0
Civilizational Memory Codex · Governance Change History
Consolidated Version History

Status: ACTIVE · CANONICAL
Governed by: CMC 3.1
Last Updated: 2026-02-04
Purpose: Track all governance changes in one place

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This file consolidates governance change history.

Previously, upgrade notes were embedded in every governance file,
accumulating hundreds of lines of version history across the repository.

Under CMC 3.1 Version Decoupling:
• Governance changes are logged HERE
• Individual files no longer contain upgrade notes
• History is centralized and searchable

────────────────────────────────────────────────────────────
II. CMC 3.2 — PROPOSALS (DRAFT)
────────────────────────────────────────────────────────────
Date: 2026-02-03
Status: DRAFT (Proposals pending approval)
Type: STRUCTURAL

The following proposals extend CMC 3.1 capabilities and are documented
for Phase 1 implementation upon approval.

────────────────────────────────────────────────────────────
II.A CMC 3.2 — CURRENT EVENTS PROTOCOL (CEP)
────────────────────────────────────────────────────────────
Proposal: PROPOSAL–CURRENT–EVENTS–PROTOCOL.md
Status: DRAFT

CHANGES:
• Bidirectional learning: Forward application (MEMs → events) and
  backward illumination (events → MEM insights)
• CEP source attribution format for current event sources
• Integration with SCHOLAR files for insight capture
• OGE options for CEP analysis (e.g. "Apply MIND to [event]")

RATIONALE:
• Enable structured analysis of current events against historical patterns
• Bidirectional: current events reveal new insights about historical MEMs
• Preserve ephemeral analysis while protecting canonical MEMs

────────────────────────────────────────────────────────────
II.B CMC 3.2 — TIERED RETRIEVAL
────────────────────────────────────────────────────────────
Proposal: PROPOSAL–TIERED–RETRIEVAL.md
Status: DRAFT

CHANGES:
• MEM-first search hierarchy before web fallback
• Gap identification from web fallback queries
• Source attribution requirements for both sources
• Mode-specific retrieval guidance (LEARN, WRITE, IMAGINE)

RATIONALE:
• Prioritize structured historical knowledge over ephemeral web content
• Identify corpus gaps from unfulfilled MEM queries
• Maintain analytical rigor when using external sources

────────────────────────────────────────────────────────────
II.C CMC 3.2 — LIVING ARC
────────────────────────────────────────────────────────────
Proposal: PROPOSAL–LIVING–ARC.md
Status: DRAFT

CHANGES:
• Three-tier source lifecycle: CANON, VALIDATED, PROVISIONAL
• Automatic elevation based on usage (5+ citations or 2+ insights)
• 90-day expiration for unreused PROVISIONAL sources
• EVOLUTION LOG for source lifecycle tracking
• Human gate for CANON tier (no automatic permanence)

RATIONALE:
• Transform static bibliographies into adaptive source ecosystems
• Let usage patterns reveal source quality
• Integrate analyst sources (Mercouris, Mearsheimer transcripts) into canon
• Maintain human oversight for permanent decisions

────────────────────────────────────────────────────────────
II.D CMC 3.2 — MIND NAVIGATION PROTOCOL
────────────────────────────────────────────────────────────
Protocol: PROTOCOL–MIND–NAVIGATION.md
Status: ACTIVE

CHANGES:
• MIND influences navigation, not just voice
• Connection affinity matrix: MIND × Connection Type → Weight
• Source affinity matrix: MIND × Source Type → Weight
• Concept category affinity matrix: MIND × Category → Weight
• MIND activation model: Default (Mercouris), OGE Selection (B/C), Manual Command
• Stateless activation: MIND determined fresh each turn
• Blend Law / MIND-Navigation interaction clarified

IMPLEMENTATION:
• PROTOCOL–MIND–NAVIGATION.md created
• MIND files updated with NAVIGATION PREFERENCES section
• cmc-oge-enforcement.mdc updated with MIND-influenced traversal
• cmc-scholar-mode.mdc updated with MIND navigation awareness
• cmc-blend-law.mdc updated with MIND-Navigation interaction
• CONCEPT–INDEX.md updated with MIND affinities
• PROPOSAL–LIVING–ARC.md updated with MIND-Navigation integration

RATIONALE:
• Coherent sessions where perspective shapes what is surfaced
• Connection traversal aligned with active MIND's analytical lens
• Source selection prioritizes materials suited to MIND's mode
• Concept emphasis aligned with MIND's focus

────────────────────────────────────────────────────────────
II.E CMC 3.2 — IMPLEMENTATION ROADMAP
────────────────────────────────────────────────────────────
Document: ROADMAP–CMC–3.2.md
Status: ACTIVE

CHANGES:
• Unified implementation plan for all CMC 3.2 protocols
• Four-phase implementation: Establishment, Automation, Integration, Optimization
• Dependency graph showing protocol relationships
• Schema updates for cmc-console
• Success metrics per phase

────────────────────────────────────────────────────────────
III. CMC 3.1 — VERSION DECOUPLING EDITION
────────────────────────────────────────────────────────────
Date: 2026-02-04
Type: STRUCTURAL

CHANGES:
• Introduced single CMC Governance Version
• Decoupled content versions from governance versions
• Created COMPLIANCE–REGISTRY.md for centralized tracking
• Created CHANGELOG.md (this file) for version history
• Simplified MEM header format (removed governance declarations)
• Updated VERSION–MANIFEST to new structure

RATIONALE:
• Eliminated batch upgrade burden when governance changes
• Reduced header clutter in MEM files (saved ~6 lines per file)
• Centralized compliance tracking for queryability
• Single source of truth for governance version

IMPLEMENTATION:
• PROPOSAL–VERSION–DECOUPLING.md (accepted)
• VERSION–MANIFEST v3.0 → v3.1
• New: COMPLIANCE–REGISTRY.md v1.0
• New: CHANGELOG.md v1.0

MIGRATION:
• Existing files with old headers remain valid
• New files use simplified format
• No batch upgrade required

────────────────────────────────────────────────────────────
II.B CMC 3.1 — TYPED CONNECTIONS
────────────────────────────────────────────────────────────
Date: 2026-02-04
Type: STRUCTURAL

CHANGES:
• Replaced mechanical connection counts with typed directional edges
• Introduced 7 connection types: DEPENDS_ON, ENABLES, CONTRADICTS,
  PARALLELS, TEMPORAL_BEFORE, TEMPORAL_AFTER, GEOGRAPHIC
• Updated CIV–MEM–TEMPLATE Section X with new format
• Created CONNECTION–TYPES.md reference document
• Updated database schema with new relationship types

RATIONALE:
• Connections now meaningful, not mechanical
• Graph traversal produces reasoning chains
• Cross-civ patterns discoverable via PARALLELS
• Tensions explicit via CONTRADICTS
• OGE options can leverage connection types

IMPLEMENTATION:
• PROPOSAL–TYPED–CONNECTIONS.md (accepted)
• CIV–MEM–TEMPLATE Section X rewritten
• New: CONNECTION–TYPES.md
• New: EXAMPLE–MEM–TYPED–CONNECTIONS.md
• Updated: tools/cmc-console/lib/db/schema.sql

MIGRATION:
• Existing untyped connections remain valid
• New MEMs use typed format
• No batch migration required

────────────────────────────────────────────────────────────
II.C CMC 3.1 — OGE SIMPLIFICATION (MODIFIED)
────────────────────────────────────────────────────────────
Date: 2026-02-04
Type: STRUCTURAL
CORE Version: CIV–MEM–CORE v3.1

DECISION: MODIFY — Keep 8-slot structure, remove state tracking

RATIONALE:
The 8-slot design intentionally surfaces system capabilities. Each slot
teaches users what the system can do. This pedagogical value was preserved.

CHANGES:
• Slots remain fixed (A=Mercouris always, B=Mearsheimer always, etc.)
• Removed POST-BARNES semantic shift (slots no longer change meaning)
• Removed state tracking of which MIND spoke last
• Increased label length to 10-20 words (clearer than 6-10)
• Added contextual notes instead of slot shifts

PRESERVED:
• 8 options (A–H) as capability menu
• Fixed slot assignments for all modes
• Required OGE after every substantive turn

REMOVED:
• POST-BARNES mandatory M/M response options
• Semantic shift of A and B after Barnes
• State tracking across turns

IMPLEMENTATION:
• PROPOSAL–OGE–SIMPLIFICATION.md v1.1 (modified acceptance)
• cmc-oge-enforcement.mdc — Updated
• cmc-tri-frame-protocol.mdc — Updated
• cmc-scholar-mode.mdc — Updated

────────────────────────────────────────────────────────────
II.D CMC 3.1 — CONCEPT INDEX
────────────────────────────────────────────────────────────
Date: 2026-02-04
Type: ADDITIVE

CHANGES:
• Created CONCEPT–INDEX.md with ~40 analytical concepts
• Added optional CONCEPTS section to CIV–MEM–TEMPLATE (XXV.E)
• Added concepts and mem_concepts tables to database schema
• Concepts organized by frame: Mearsheimer, Mercouris, Barnes, Cross-cutting
• OGE can leverage concept similarity for traversal options

RATIONALE:
• Enable semantic discovery across 1,000+ files
• Cross-civ pattern recognition via shared concepts
• Smarter OGE options based on conceptual similarity
• Foundation for future semantic search

IMPLEMENTATION:
• PROPOSAL–CONCEPT–INDEX.md (accepted)
• New: CONCEPT–INDEX.md
• New: EXAMPLE–MEM–CONCEPT–TAGS.md
• Updated: CIV–MEM–TEMPLATE Section XXV.E
• Updated: tools/cmc-console/lib/db/schema.sql
• Updated: cmc-scholar-mode.mdc

PHASE STATUS:
• Phase 1 (Taxonomy): Complete
• Phase 2 (Tag MEMs): Pending
• Phase 3 (Tooling): Pending
• Phase 4 (Ongoing): Active

────────────────────────────────────────────────────────────
III. CMC 3.0 — CONSOLIDATION EDITION
────────────────────────────────────────────────────────────
Date: 2026-02-02
Type: ALIGNMENT

CHANGES:
• Consolidated v2.1–v2.9 iterations into single architectural statement
• All governance and template files aligned to v3.0
• MAJOR VERSION CONSTRAINT lifted (other docs may advance to v3.x)
• Cognitive Structure section added to CMC–BOOTSTRAP

KEY DOCUMENTS UPGRADED:
• CIV–MEM–CORE v2.9 → v3.0
• CMC–BOOTSTRAP v2.14 → v3.0
• All templates → v3.0
• All MIND profiles → v3.0

────────────────────────────────────────────────────────────
IV. CMC 2.x — DEVELOPMENT ITERATIONS
────────────────────────────────────────────────────────────
Period: 2026-01 to 2026-02

MAJOR MILESTONES:

v2.9 (2026-01-31): Trans-Sovereign Patterns
• New Section XXIX in CIV–MEM–CORE
• TSP types: TRANSMISSION, NETWORK, RECONSTITUTION
• Cross-civilizational filing requirements

v2.8 (2026-01-29): Cross-Civilizational Misperception
• CCM governance stance
• Scholar-on-Scholar explanation divergence
• SDI second-order interpretation

v2.7 (2026-01-29): OGE Connection Awareness
• MEM CONNECTIONS inform OGE options
• Traversal and gap-detection options

v2.6 (2026-01-28): MIND Integration
• Mearsheimer command formalization
• RLL interaction constraints
• Scholarly Authority Protocol (SAP)

v2.5 (2026-01-26): Barnes Catalyst
• CIV–MIND–BARNES v2.5 (expanded fingerprint)
• POST-BARNES OGE requirements
• Tertiary catalyst role formalized

────────────────────────────────────────────────────────────
V. CMC 1.x — INITIAL ARCHITECTURE
────────────────────────────────────────────────────────────
Period: 2025

FOUNDATION:
• CIV–MEM–CORE initial creation
• Three-MIND architecture (Mercouris/Mearsheimer/Barnes)
• SCHOLAR modes (WRITE/LEARN/IMAGINE)
• MEM file structure
• ARC (Academic Reference Canon)
• OGE (Option Generation Engine)

────────────────────────────────────────────────────────────
VI. CONVENTIONS
────────────────────────────────────────────────────────────
CHANGELOG ENTRY FORMAT:
```
────────────────────────────────────────────────────────────
[VERSION] — [TITLE]
────────────────────────────────────────────────────────────
Date: YYYY-MM-DD
Type: STRUCTURAL | ALIGNMENT | ADDITIVE | FIX

CHANGES:
• [Change 1]
• [Change 2]

RATIONALE:
[Why this change was made]

IMPLEMENTATION:
[What files were modified]
```

TYPES:
• STRUCTURAL: Major architectural changes
• ALIGNMENT: Version synchronization across files
• ADDITIVE: New features or sections
• FIX: Corrections to existing content

────────────────────────────────────────────────────────────
END OF FILE — CHANGELOG v1.0
────────────────────────────────────────────────────────────
