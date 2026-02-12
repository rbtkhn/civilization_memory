PROPOSAL–TYPED–CONNECTIONS — v3.2
Civilizational Memory Codex · Structural Improvement Proposal
Replace Mechanical Connection Counts with Typed Directional Edges

Status: IMPLEMENTED · CMC 3.1
Author: System Analysis
Date: February 2026
Implemented: 2026-02-04

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
Current MEM connection requirements are mechanical rather than meaningful.

CURRENT REQUIREMENTS:
• ≥10 same-civilization connections
• ≥2 GEO–MEM connections
• ≥3 cross-civilizational connections (for some types)

CURRENT FORMAT (typical):
```
MEM CONNECTIONS
Same-Civilization:
• MEM–RUSSIA–PETER–GREAT
• MEM–RUSSIA–CATHERINE–GREAT
• MEM–RUSSIA–IVAN–IV
... (list of 10+ files)

GEO Connections:
• MEM–RUSSIA–GEO–BALTIC–SEA
• MEM–RUSSIA–GEO–NEVA–RIVER
```

PROBLEMS:
1. Connections are undifferentiated lists
2. No indication of WHY files are connected
3. No directionality (does A depend on B, or B on A?)
4. "Breaks if removed" text often generic or missing
5. Compliance becomes checkbox exercise
6. Graph traversal yields flat results, not reasoning chains

EVIDENCE:
• MEM files list connections without explanation
• "Breaks if removed" often says "context lost" generically
• No tooling exists to traverse connection types

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Replace untyped connection lists with typed directional edges.

A) CONNECTION TYPES (Exhaustive)

DEPENDS_ON — Prerequisite relationship
• This MEM cannot be fully understood without the target
• Example: MEM–RUSSIA–ALEXANDER–I DEPENDS_ON MEM–RUSSIA–NAPOLEON–1812
• Traversal: Read dependencies first

ENABLES — Consequent relationship
• This MEM is required to understand the target
• Inverse of DEPENDS_ON
• Example: MEM–RUSSIA–PETER–GREAT ENABLES MEM–RUSSIA–BALTIC–HEGEMONY

CONTRADICTS — Tension relationship
• This MEM presents claims in tension with the target
• Polyphonic preservation marker
• Example: MEM–RUSSIA–GORBACHEV CONTRADICTS MEM–RUSSIA–STALIN (on reform)

PARALLELS — Structural similarity
• This MEM exhibits patterns similar to the target
• Cross-civ comparison marker
• Example: MEM–RUSSIA–PETER–GREAT PARALLELS MEM–ROME–AUGUSTUS (centralization)

TEMPORAL_BEFORE — Chronological predecessor
• This MEM's subject precedes the target in time
• Example: MEM–RUSSIA–IVAN–IV TEMPORAL_BEFORE MEM–RUSSIA–TIME–OF–TROUBLES

TEMPORAL_AFTER — Chronological successor
• Inverse of TEMPORAL_BEFORE

GEOGRAPHIC — Spatial relationship
• This MEM's subject operates within or is shaped by the target geography
• Example: MEM–RUSSIA–PETER–GREAT GEOGRAPHIC MEM–RUSSIA–GEO–BALTIC–SEA

B) NEW FORMAT

```
────────────────────────────────────────────────────────────
MEM CONNECTIONS (TYPED)
────────────────────────────────────────────────────────────

DEPENDS_ON:
• MEM–RUSSIA–MUSCOVY — Peter inherits Muscovite coercive state apparatus
• MEM–RUSSIA–GEO–BALTIC–SEA — Baltic access is the strategic objective

ENABLES:
• MEM–RUSSIA–CATHERINE–GREAT — Catherine extends Petrine modernization
• MEM–RUSSIA–BALTIC–HEGEMONY — Peter creates the Baltic position Catherine exploits

CONTRADICTS:
• MEM–RUSSIA–OLD–BELIEVERS — Petrine reforms rupture traditional legitimacy

PARALLELS:
• MEM–ROME–AUGUSTUS — Concentration of power while preserving formal institutions
• MEM–FRANCIA–LOUIS–XIV — Coercive state-building and elite subordination

GEOGRAPHIC:
• MEM–RUSSIA–GEO–NEVA–RIVER — Site of Petersburg; corridor to Baltic
• MEM–RUSSIA–GEO–GULF–FINLAND — Strategic water space

TEMPORAL_BEFORE:
• MEM–RUSSIA–ALEXEI–ROMANOV
• MEM–RUSSIA–FYODOR–III

TEMPORAL_AFTER:
• MEM–RUSSIA–ANNA
• MEM–RUSSIA–ELIZABETH
```

C) MINIMUM REQUIREMENTS (Revised)

Replace count-based requirements with type coverage:

REQUIRED for all MEMs:
• ≥1 DEPENDS_ON connection
• ≥1 ENABLES connection
• ≥1 GEOGRAPHIC connection (where applicable)
• ≥1 TEMPORAL connection (BEFORE or AFTER)

REQUIRED for Subject MEMs:
• ≥1 PARALLELS connection (cross-civ preferred)

OPTIONAL:
• CONTRADICTS (when genuine tension exists)

Total connections may be fewer than current 10+, but each is meaningful.

────────────────────────────────────────────────────────────
III. TRAVERSAL BENEFITS
────────────────────────────────────────────────────────────
Typed connections enable intelligent traversal:

QUERY: "What must I understand before reading MEM–RUSSIA–PETER–GREAT?"
ANSWER: Follow DEPENDS_ON edges recursively

QUERY: "What are the consequences of Peter's reforms?"
ANSWER: Follow ENABLES edges forward

QUERY: "What tensions does Peter's reign create?"
ANSWER: Follow CONTRADICTS edges

QUERY: "What parallels exist in other civilizations?"
ANSWER: Follow PARALLELS edges to cross-civ MEMs

QUERY: "Build a timeline of Russian rulers"
ANSWER: Follow TEMPORAL edges to construct sequence

Current untyped lists cannot answer these queries.

────────────────────────────────────────────────────────────
IV. DATABASE SCHEMA UPDATE
────────────────────────────────────────────────────────────
Update file_relationships table:

```sql
-- Current
relationship_type TEXT NOT NULL CHECK(relationship_type IN (
  'mem_connection',
  'civ_core_reference',
  'doctrine_reference',
  'contradiction',
  'temporal_sequence',
  'structural_similarity'
))

-- Proposed
relationship_type TEXT NOT NULL CHECK(relationship_type IN (
  'depends_on',
  'enables',
  'contradicts',
  'parallels',
  'temporal_before',
  'temporal_after',
  'geographic',
  'civ_core_reference',
  'doctrine_reference'
))

-- Add explanation column
relationship_explanation TEXT -- One-line explanation of WHY connected
```

────────────────────────────────────────────────────────────
V. MIGRATION PATH
────────────────────────────────────────────────────────────
PHASE 1 — Template Update
• Update CIV–MEM–TEMPLATE to require typed connections
• New MEMs use typed format immediately

PHASE 2 — New File Standard
• All new MEMs created with typed connections
• Existing MEMs remain valid but "legacy format"

PHASE 3 — Gradual Migration (Optional)
• Convert existing connections when MEMs are edited for other reasons
• No forced batch migration required
• Tooling can infer types from context for legacy files

────────────────────────────────────────────────────────────
VI. IMPACT ANALYSIS
────────────────────────────────────────────────────────────
BENEFITS:
• Connections become meaningful, not mechanical
• Graph traversal produces reasoning chains
• Cross-civ patterns discoverable via PARALLELS
• Tensions explicit via CONTRADICTS
• OGE options can use connection types (e.g., "Traverse DEPENDS_ON")

COSTS:
• Slightly more effort per connection (must choose type)
• Existing MEMs have untyped connections
• Template and tooling updates required

RISKS:
• Authors may misclassify connection types
• PARALLELS may be overused for weak similarities

MITIGATION:
• Provide clear type definitions in template
• Audit sampling for connection quality
• Accept that some judgment is required

────────────────────────────────────────────────────────────
VII. IMPLEMENTATION STATUS
────────────────────────────────────────────────────────────
**STATUS: IMPLEMENTED** — 2026-02-04

Decision: ACCEPT (Option A)

IMPLEMENTATION ARTIFACTS:
• CIV–MEM–TEMPLATE Section X — Updated with typed connection format
• CONNECTION–TYPES.md — Full reference for connection types and semantics
• EXAMPLE–MEM–TYPED–CONNECTIONS.md — Example file with typed connections
• schema.sql — Database schema updated with new relationship types

MIGRATION STATUS:
• Phase 1: COMPLETE — Template updated
• Phase 2: COMPLETE — New file standard defined
• Phase 3: NOT REQUIRED — Existing files remain valid

CONNECTION TYPES IMPLEMENTED:
• DEPENDS_ON — Prerequisite relationship
• ENABLES — Consequent relationship
• CONTRADICTS — Tension relationship
• PARALLELS — Structural similarity
• TEMPORAL_BEFORE — Chronological predecessor
• TEMPORAL_AFTER — Chronological successor
• GEOGRAPHIC — Spatial relationship

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–TYPED–CONNECTIONS v1.0 · IMPLEMENTED
────────────────────────────────────────────────────────────
