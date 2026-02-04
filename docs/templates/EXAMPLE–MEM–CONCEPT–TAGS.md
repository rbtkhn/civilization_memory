MEM–EXAMPLE–CONCEPT–TAGS — v1.0
Civilizational Memory Codex · Memory File

Status: ACTIVE · CANONICAL
Version: 1.0
Civilization: EXAMPLE
Subject: Concept Tagging Format
Dates: 2026 AD
Last Updated: February 2026
Word Count: ~500

────────────────────────────────────────────────────────────
EXAMPLE: CMC 4.0 CONCEPT TAGGING
────────────────────────────────────────────────────────────
This file demonstrates the optional CONCEPTS section introduced
in CMC 4.0 (PROPOSAL–CONCEPT–INDEX).

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This example shows how to tag MEMs with analytical concepts
from the controlled taxonomy in CONCEPT–INDEX.md.

KEY PRINCIPLES:
• 2-4 concepts per MEM (avoid over-tagging)
• Each tag has a one-line explanation
• Primary = central to analysis; Secondary = relevant
• Concepts enable semantic discovery across corpus

────────────────────────────────────────────────────────────
II. CONCEPT TAXONOMY SUMMARY
────────────────────────────────────────────────────────────
Concepts are organized by analytical frame:

| Frame | Example Concepts |
|-------|-----------------|
| Mearsheimer | stopping_power_of_water, corridor_control, force_ratio |
| Mercouris | legitimacy_through_suffering, institutional_absorption |
| Barnes | defection_incentive, liability_chain, jurisdiction |
| Cross-cutting | compression_under_pressure, reform_failure |

────────────────────────────────────────────────────────────
III. FORMAT DEMONSTRATION
────────────────────────────────────────────────────────────
Below is how a real MEM (e.g., MEM–RUSSIA–PETER–GREAT) would
include the CONCEPTS section:

────────────────────────────────────────────────────────────
CONCEPTS (SEMANTIC INDEX)
────────────────────────────────────────────────────────────
Primary:
• legitimacy_through_suffering — Peter's reforms create suffering later harvested by successors
• coercive_enforcement — Modernization requires state violence against population and elites

Secondary:
• corridor_control — Baltic access as strategic objective driving foreign policy
• elite_overproduction — Western-trained elites without absorption pathway create tension

────────────────────────────────────────────────────────────
IV. QUERY EXAMPLES
────────────────────────────────────────────────────────────
With concept tags, the system can answer:

Q: "Which MEMs discuss legitimacy through suffering?"
A: → MEM–RUSSIA–PETER–GREAT, MEM–RUSSIA–WAR–GREAT–PATRIOTIC,
     MEM–RUSSIA–WAR–NAPOLEON–1812, MEM–ANGLIA–BLITZ...

Q: "Find cross-civ parallels for coercive enforcement"
A: → MEM–RUSSIA–PETER–GREAT (primary), MEM–FRANCIA–LOUIS–XIV (primary),
     MEM–CHINA–QIN–SHI–HUANG (primary)...

Q: "What Mearsheimer-frame concepts apply to Peter the Great?"
A: → corridor_control (secondary)

────────────────────────────────────────────────────────────
V. OGE INTEGRATION
────────────────────────────────────────────────────────────
Concept tags enable smarter OGE options:

WITHOUT CONCEPTS:
```
D — Compare with Louis XIV (cross-civ)
```

WITH CONCEPTS:
```
D — Explore "coercive_enforcement" pattern in Francia (MEM–FRANCIA–LOUIS–XIV shares this concept)
E — Find other MEMs tagged with "legitimacy_through_suffering" (3 cross-civ parallels available)
```

The system can:
• Identify active concepts in current MEM
• Find MEMs sharing those concepts
• Generate traversal based on conceptual similarity

────────────────────────────────────────────────────────────
VI. MEM BIBLIOGRAPHY
────────────────────────────────────────────────────────────
• PROPOSAL–CONCEPT–INDEX.md (2026)
• CONCEPT–INDEX.md (2026)
• CIV–MEM–TEMPLATE (CMC 4.0)

────────────────────────────────────────────────────────────
VII. MEM CONNECTIONS (TYPED)
────────────────────────────────────────────────────────────
DEPENDS_ON:
• CONCEPT–INDEX.md — Defines concept taxonomy

ENABLES:
• Semantic discovery across corpus

────────────────────────────────────────────────────────────
VIII. MEM INGEST BOOTSTRAP (MANDATORY)
────────────────────────────────────────────────────────────
If ingested without context:

"MEM–EXAMPLE–CONCEPT–TAGS active. This MEM demonstrates
the CMC 4.0 concept tagging format for semantic discovery."

EXPLORATION OPTIONS:
A) Read CONCEPT–INDEX for full taxonomy
B) See how concepts enable cross-civ discovery
C) Apply concept tagging to a new MEM
D) Query MEMs by concept
E) Synthesize what concept tagging enables

────────────────────────────────────────────────────────────
END OF FILE — MEM–EXAMPLE–CONCEPT–TAGS v1.0
────────────────────────────────────────────────────────────
