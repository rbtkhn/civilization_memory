CONNECTION–TYPES
Civilizational Memory Codex · Typed Connection Reference
Directional Edge Semantics for MEM Connections

Governed by: CMC 4.0
Status: ACTIVE · CANONICAL
Last Updated: February 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This document defines the typed connection system introduced
in CMC 4.0 (PROPOSAL–TYPED–CONNECTIONS).

Typed connections replace mechanical count-based requirements
with meaningful directional edges that enable intelligent
traversal and discovery.

────────────────────────────────────────────────────────────
II. CONNECTION TYPE DEFINITIONS
────────────────────────────────────────────────────────────

┌─────────────────┬─────────────────────────────────────────┐
│ Type            │ Meaning                                 │
├─────────────────┼─────────────────────────────────────────┤
│ DEPENDS_ON      │ Prerequisite: cannot understand source  │
│                 │ without first understanding target      │
├─────────────────┼─────────────────────────────────────────┤
│ ENABLES         │ Consequence: source is required to      │
│                 │ understand target (inverse of DEPENDS)  │
├─────────────────┼─────────────────────────────────────────┤
│ CONTRADICTS     │ Tension: source and target present      │
│                 │ claims in tension (polyphonic marker)   │
├─────────────────┼─────────────────────────────────────────┤
│ PARALLELS       │ Similarity: source exhibits structural  │
│                 │ patterns similar to target              │
├─────────────────┼─────────────────────────────────────────┤
│ TEMPORAL_BEFORE │ Chronological: source precedes target   │
│                 │ in time                                 │
├─────────────────┼─────────────────────────────────────────┤
│ TEMPORAL_AFTER  │ Chronological: source follows target    │
│                 │ in time                                 │
├─────────────────┼─────────────────────────────────────────┤
│ GEOGRAPHIC      │ Spatial: source operates within or is   │
│                 │ shaped by target geography              │
└─────────────────┴─────────────────────────────────────────┘

────────────────────────────────────────────────────────────
III. DETAILED SEMANTICS
────────────────────────────────────────────────────────────

A) DEPENDS_ON — Prerequisite Relationship
────────────────────────────────────────────────────────────
DEFINITION:
This MEM cannot be fully understood without the target MEM.
The target provides essential context, background, or concepts.

DIRECTIONALITY:
Source → Target (Source depends ON Target)

USAGE:
• Link to predecessors whose content is assumed knowledge
• Link to geographic MEMs that define the terrain
• Link to institutional MEMs that define structures

EXAMPLE:
MEM–RUSSIA–ALEXANDER–I DEPENDS_ON:
• MEM–RUSSIA–NAPOLEON–1812 — Alexander's reign defined by this war
• MEM–RUSSIA–GEO–EUROPEAN–PLAIN — Geography shapes military strategy

TRAVERSAL:
"What must I read first?" → Follow DEPENDS_ON edges backward

────────────────────────────────────────────────────────────
B) ENABLES — Consequent Relationship
────────────────────────────────────────────────────────────
DEFINITION:
This MEM is required to understand the target MEM.
Inverse of DEPENDS_ON.

DIRECTIONALITY:
Source → Target (Source ENABLES understanding of Target)

USAGE:
• Link to successors that build on this MEM's content
• Link to consequences and developments
• Link to figures/events that extend this MEM's patterns

EXAMPLE:
MEM–RUSSIA–PETER–GREAT ENABLES:
• MEM–RUSSIA–CATHERINE–GREAT — Catherine extends Petrine reforms
• MEM–RUSSIA–BALTIC–HEGEMONY — Peter creates the Baltic position

TRAVERSAL:
"What are the consequences?" → Follow ENABLES edges forward

NOTE:
If A DEPENDS_ON B, then B ENABLES A. Not all relationships
need to be declared in both directions; prioritize the
direction that best serves comprehension.

────────────────────────────────────────────────────────────
C) CONTRADICTS — Tension Relationship
────────────────────────────────────────────────────────────
DEFINITION:
This MEM presents claims, patterns, or interpretations
in tension with the target MEM. Polyphonic preservation marker.

DIRECTIONALITY:
Bidirectional (tension exists between both)
Declare in whichever MEM makes the tension most visible.

USAGE:
• Link MEMs with conflicting interpretations
• Link MEMs with opposing policies/strategies
• Link MEMs where later events contradict earlier patterns
• Mark genuine tensions, not mere differences

EXAMPLE:
MEM–RUSSIA–GORBACHEV CONTRADICTS:
• MEM–RUSSIA–STALIN — Reform vs coercion as state strategy

TRAVERSAL:
"What tensions exist?" → Follow CONTRADICTS edges

WARNING:
CONTRADICTS should be used sparingly. Reserve for genuine
analytical tensions, not simple differences or chronological
supersession.

────────────────────────────────────────────────────────────
D) PARALLELS — Structural Similarity
────────────────────────────────────────────────────────────
DEFINITION:
This MEM exhibits structural patterns similar to the target.
Cross-civilizational comparison marker.

DIRECTIONALITY:
Bidirectional (pattern exists in both)
Declare in whichever MEM initiates the comparison.

USAGE:
• Link cross-civilizational parallels (preferred)
• Link same-civilization patterns across eras
• Mark structural similarities, not surface resemblances

EXAMPLE:
MEM–RUSSIA–PETER–GREAT PARALLELS:
• MEM–ROME–AUGUSTUS — Concentration of power while preserving forms
• MEM–FRANCIA–LOUIS–XIV — Coercive state-building and elite subordination

TRAVERSAL:
"What parallels exist in other civilizations?" → Follow PARALLELS

NOTE:
PARALLELS is the primary mechanism for cross-civilizational
discovery. At least one PARALLELS connection to a different
civilization is required for Subject MEMs.

────────────────────────────────────────────────────────────
E) TEMPORAL_BEFORE / TEMPORAL_AFTER — Chronological
────────────────────────────────────────────────────────────
DEFINITION:
Chronological relationship between MEM subjects.

DIRECTIONALITY:
• TEMPORAL_BEFORE: Source precedes Target in time
• TEMPORAL_AFTER: Source follows Target in time

USAGE:
• Construct timelines of rulers, events, or periods
• Show succession and sequence
• Link to immediate predecessors/successors

EXAMPLE:
MEM–RUSSIA–PETER–GREAT:
• TEMPORAL_BEFORE: MEM–RUSSIA–ALEXEI–ROMANOV (Peter's father)
• TEMPORAL_AFTER: MEM–RUSSIA–ANNA (Peter's niece, later ruler)

TRAVERSAL:
"Build a timeline" → Follow TEMPORAL edges

NOTE:
Explanation is optional for TEMPORAL connections since
the relationship is self-evident from the type.

────────────────────────────────────────────────────────────
F) GEOGRAPHIC — Spatial Relationship
────────────────────────────────────────────────────────────
DEFINITION:
This MEM's subject operates within or is shaped by the
target geography.

DIRECTIONALITY:
Subject MEM → GEO–MEM

USAGE:
• Link Subject MEMs to relevant GEO–MEMs
• Link to terrain that shapes events
• Link to corridors, chokepoints, or strategic spaces

EXAMPLE:
MEM–RUSSIA–PETER–GREAT GEOGRAPHIC:
• MEM–RUSSIA–GEO–BALTIC–SEA — Baltic access is strategic objective
• MEM–RUSSIA–GEO–NEVA–RIVER — Site of Petersburg

TRAVERSAL:
"What geography matters?" → Follow GEOGRAPHIC edges

NOTE:
GEOGRAPHIC connections are typically Subject → GEO direction.
GEO–MEMs rarely need GEOGRAPHIC connections to other GEO–MEMs
(use DEPENDS_ON for GEO → GEO relationships).

────────────────────────────────────────────────────────────
IV. MINIMUM REQUIREMENTS
────────────────────────────────────────────────────────────

REQUIRED for all MEMs:
┌──────────────────┬────────────────────────────────────────┐
│ Type             │ Minimum                                │
├──────────────────┼────────────────────────────────────────┤
│ DEPENDS_ON       │ ≥1 (what is prerequisite?)             │
│ ENABLES          │ ≥1 (what does this make possible?)     │
│ GEOGRAPHIC       │ ≥1 where applicable                    │
│ TEMPORAL         │ ≥1 (BEFORE or AFTER)                   │
└──────────────────┴────────────────────────────────────────┘

REQUIRED for Subject MEMs:
┌──────────────────┬────────────────────────────────────────┐
│ PARALLELS        │ ≥1 (cross-civ preferred)               │
└──────────────────┴────────────────────────────────────────┘

OPTIONAL:
┌──────────────────┬────────────────────────────────────────┐
│ CONTRADICTS      │ When genuine tension exists            │
└──────────────────┴────────────────────────────────────────┘

────────────────────────────────────────────────────────────
V. OGE INTEGRATION
────────────────────────────────────────────────────────────
Typed connections inform OGE options:

EXAMPLE OGE OPTIONS DERIVED FROM CONNECTIONS:
• E) Traverse DEPENDS_ON: What does Peter inherit from Muscovy?
• F) Traverse ENABLES: How does Catherine extend Petrine reforms?
• G) Traverse PARALLELS: Compare Peter to Augustus (centralization)
• C) Traverse CONTRADICTS: Peter vs Old Believers on legitimacy

Connection types make navigation intuitive and discoverable.

────────────────────────────────────────────────────────────
VI. LEGACY COMPATIBILITY
────────────────────────────────────────────────────────────
MEMs with untyped connections remain valid.

LEGACY FORMAT:
```
MEM CONNECTIONS
Same-Civilization:
• MEM–[CIV]–[SUBJECT]

GEO Connections:
• MEM–[CIV]–GEO–[LOCATION]
```

MIGRATION:
• No forced migration required
• Convert to typed format when editing for other reasons
• Tooling can assist with type inference

────────────────────────────────────────────────────────────
END OF FILE — CONNECTION–TYPES (CMC 4.0)
────────────────────────────────────────────────────────────
