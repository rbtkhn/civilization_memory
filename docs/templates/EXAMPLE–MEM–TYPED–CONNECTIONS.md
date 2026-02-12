MEM–EXAMPLE–TYPED–CONNECTIONS — v3.2
Civilizational Memory Codex · Memory File

Status: ACTIVE · CANONICAL
Version: 3.2
Civilization: EXAMPLE
Subject: Typed Connections Format
Dates: 2026 AD
Last Updated: February 2026
Word Count: ~600

────────────────────────────────────────────────────────────
EXAMPLE: CMC 3.1 TYPED CONNECTIONS
────────────────────────────────────────────────────────────
This file demonstrates the typed connection format introduced
in CMC 3.1 (PROPOSAL–TYPED–CONNECTIONS).

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This example shows how to structure the MEM CONNECTIONS section
using typed directional edges.

KEY PRINCIPLES:
• Each connection has a TYPE (what kind of relationship)
• Each connection has an EXPLANATION (why connected)
• Quality over quantity (fewer, meaningful connections)
• Types enable intelligent traversal

────────────────────────────────────────────────────────────
II. CONNECTION TYPES SUMMARY
────────────────────────────────────────────────────────────

| Type | Meaning |
|------|---------|
| DEPENDS_ON | Cannot understand this MEM without target |
| ENABLES | This MEM is required to understand target |
| CONTRADICTS | Tension exists between this MEM and target |
| PARALLELS | Structural pattern shared with target |
| TEMPORAL_BEFORE | This MEM's subject precedes target in time |
| TEMPORAL_AFTER | This MEM's subject follows target in time |
| GEOGRAPHIC | This MEM's subject shaped by target geography |

────────────────────────────────────────────────────────────
III. FORMAT DEMONSTRATION
────────────────────────────────────────────────────────────
Below is an example of how a real MEM (e.g., MEM–RUSSIA–PETER–GREAT)
would structure its connections:

────────────────────────────────────────────────────────────
MEM CONNECTIONS (TYPED)
────────────────────────────────────────────────────────────

DEPENDS_ON:
• MEM–RUSSIA–MUSCOVY — Peter inherits Muscovite coercive state apparatus
• MEM–RUSSIA–GEO–BALTIC–SEA — Baltic access is the strategic objective
• MEM–RUSSIA–ALEXEI–ROMANOV — Peter's father; institutional inheritance

ENABLES:
• MEM–RUSSIA–CATHERINE–GREAT — Catherine extends Petrine modernization
• MEM–RUSSIA–BALTIC–HEGEMONY — Peter creates the Baltic position Catherine exploits
• MEM–RUSSIA–PETERSBURG — Peter founds the city as new capital

CONTRADICTS:
• MEM–RUSSIA–OLD–BELIEVERS — Petrine reforms rupture traditional legitimacy
• MEM–RUSSIA–BOYARS — Peter's centralization destroys boyar power

PARALLELS:
• MEM–ROME–AUGUSTUS — Concentration of power while preserving formal institutions
• MEM–FRANCIA–LOUIS–XIV — Coercive state-building and elite subordination
• MEM–CHINA–QIN–SHI–HUANG — Centralization and bureaucratic rationalization

GEOGRAPHIC:
• MEM–RUSSIA–GEO–NEVA–RIVER — Site of Petersburg; corridor to Baltic
• MEM–RUSSIA–GEO–GULF–FINLAND — Strategic water space
• MEM–RUSSIA–GEO–EUROPEAN–PLAIN — Shapes military strategy and expansion

TEMPORAL_BEFORE:
• MEM–RUSSIA–ALEXEI–ROMANOV
• MEM–RUSSIA–FYODOR–III
• MEM–RUSSIA–SOPHIA–REGENT

TEMPORAL_AFTER:
• MEM–RUSSIA–ANNA
• MEM–RUSSIA–ELIZABETH
• MEM–RUSSIA–PETER–III

────────────────────────────────────────────────────────────
IV. COMPARISON WITH LEGACY FORMAT
────────────────────────────────────────────────────────────

LEGACY (untyped — still valid):
```
MEM CONNECTIONS
Same-Civilization:
• MEM–RUSSIA–MUSCOVY
• MEM–RUSSIA–CATHERINE–GREAT
• MEM–RUSSIA–ALEXEI–ROMANOV
... (list of 10+ files without explanation)

GEO Connections:
• MEM–RUSSIA–GEO–BALTIC–SEA
• MEM–RUSSIA–GEO–NEVA–RIVER
```

TYPED (CMC 3.1):
• Each connection categorized by relationship type
• Each connection includes one-line explanation
• Traversal semantics clear (DEPENDS_ON = read first)
• Cross-civ patterns explicit (PARALLELS)
• Tensions preserved (CONTRADICTS)

────────────────────────────────────────────────────────────
V. TRAVERSAL EXAMPLES
────────────────────────────────────────────────────────────
Typed connections answer specific questions:

Q: "What must I understand before reading this MEM?"
A: Follow DEPENDS_ON edges → Muscovy, Baltic Sea, Alexei

Q: "What are the consequences of Peter's reign?"
A: Follow ENABLES edges → Catherine, Baltic Hegemony, Petersburg

Q: "What tensions does Peter's reign create?"
A: Follow CONTRADICTS edges → Old Believers, Boyars

Q: "What parallels exist in other civilizations?"
A: Follow PARALLELS edges → Augustus, Louis XIV, Qin Shi Huang

────────────────────────────────────────────────────────────
VI. MEM BIBLIOGRAPHY
────────────────────────────────────────────────────────────
• PROPOSAL–TYPED–CONNECTIONS.md (2026)
• CONNECTION–TYPES.md (2026)
• CIV–MEM–TEMPLATE (CMC 3.1)

────────────────────────────────────────────────────────────
VII. MEM INGEST BOOTSTRAP (MANDATORY)
────────────────────────────────────────────────────────────
If ingested without context:

"MEM–EXAMPLE–TYPED–CONNECTIONS active. This MEM demonstrates
the CMC 3.1 typed connection format for MEM files."

EXPLORATION OPTIONS:
A) Read CONNECTION–TYPES for type definitions
B) Compare with legacy untyped format
C) Apply format to new MEM creation
D) Traverse DEPENDS_ON example edges
E) Traverse ENABLES example edges
F) Traverse PARALLELS example edges
G) Review minimum requirements
H) Recap: Typed connections enable intelligent traversal

────────────────────────────────────────────────────────────
END OF FILE — MEM–EXAMPLE–TYPED–CONNECTIONS v3.2
────────────────────────────────────────────────────────────
