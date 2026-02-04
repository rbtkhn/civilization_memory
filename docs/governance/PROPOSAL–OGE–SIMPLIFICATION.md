PROPOSAL–OGE–SIMPLIFICATION — v1.1
Civilizational Memory Codex · Structural Improvement Proposal
Simplify OGE to Stateless Option Generation (Modified)

Status: IMPLEMENTED · CMC 4.0
Author: System Analysis
Date: February 2026
Implemented: 2026-02-04
Implementation: MODIFIED (Option B) — Keep 8 slots, remove state tracking

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
The current OGE (Option Generation Engine) is stateful and complex.

CURRENT RULES (from cmc-oge-enforcement):
• 8 options (A–H) required in LEARN mode
• A/B/C fixed: Mercouris, Mearsheimer, Barnes
• D = multi-mind response (4-part format)
• E/F/G = time/space traversal (backward/forward/cross-civ)
• H = synthesis

POST-BARNES SEMANTIC SHIFT:
• After Barnes interjection, A becomes "Mercouris responds to Barnes"
• After Barnes interjection, B becomes "Mearsheimer responds to Barnes"
• This requires tracking which MIND spoke last

PROBLEMS:
1. State tracking across turns is fragile
2. If context is lost, POST-BARNES semantics fail silently
3. Users who interrupt the flow break the protocol
4. 8 options may overwhelm; not all are always relevant
5. Fixed slot assignments (A=Mercouris, B=Mearsheimer) are arbitrary
6. "6-10 words each" constraint produces telegraphic labels

EVIDENCE:
• Cursor rules require explicit self-checks before OGE
• "POST-BARNES OGE Requirements" section exists to handle edge case
• Multiple rules files govern OGE (cmc-oge-enforcement, cmc-tri-frame-protocol)

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Replace stateful OGE with stateless, context-adaptive options.

A) STATELESS DESIGN

Every OGE generation is independent. No memory of prior turn required.

The system examines:
• Current MEM under discussion
• Current analytical frame (if any MIND is active)
• User's last question/selection

Then generates relevant options from a standard palette.

B) OPTION PALETTE (Not Fixed Slots)

Instead of A/B/C always being Mercouris/Mearsheimer/Barnes, generate
options based on what's actually useful for the current context.

OPTION CATEGORIES (draw from as appropriate):

LENS OPTIONS (offer when analysis is active):
• Apply Mercouris frame (legitimacy, civilizational continuity)
• Apply Mearsheimer frame (power, structure, force ratios)
• Apply Barnes frame (liability, jurisdiction, mechanism)
• Multi-lens synthesis (all three perspectives)

TRAVERSAL OPTIONS (offer when MEM is loaded):
• Earlier period [specific MEM name]
• Later period [specific MEM name]
• Related geography [specific GEO-MEM]
• Cross-civilization parallel [specific MEM name]

DEPTH OPTIONS (offer when topic allows):
• Examine primary sources (ARC quotes)
• Explore contradictions
• Identify failure conditions
• Check against RLLs

CLOSURE OPTIONS (always available):
• Synthesize session so far
• Return to broader topic
• Ask a different question

C) ADAPTIVE OPTION COUNT

Generate 4-6 options per turn, not fixed 8.

Criteria:
• Only offer options that are genuinely useful
• Skip categories that don't apply (e.g., no traversal if no MEM loaded)
• Allow fewer options for focused queries

D) NATURAL LANGUAGE LABELS

Replace "6-10 word" telegraphic labels with clear questions/prompts.

BEFORE:
```
**A** — Mercouris: legitimacy through endurance, sacral ratification
**B** — Mearsheimer: force ratios, corridor control, power distribution
```

AFTER:
```
**A** — How does Mercouris's legitimacy frame apply here? (continuity through suffering, sacral ratification)
**B** — What would Mearsheimer emphasize? (force ratios, corridor control, structural constraints)
```

Longer labels reduce ambiguity about what each option delivers.

E) REMOVE POST-BARNES STATE TRACKING

Current rule: "After Barnes interjection, next OGE must include M/M response options"

Proposed: Barnes interjections are self-contained. The next turn's options are
generated fresh based on what's useful, not based on who spoke last.

If the user wants Mercouris to respond to Barnes, they can:
• Type "How would Mercouris respond to that?"
• Select a Mercouris lens option (always available)

No semantic shift of slots required.

────────────────────────────────────────────────────────────
III. EXAMPLES
────────────────────────────────────────────────────────────
SCENARIO 1: User is exploring MEM–RUSSIA–PETER–GREAT

Current OGE (8 fixed options):
```
A — Mercouris: legitimacy through modernization rupture
B — Mearsheimer: Baltic access, force projection, corridor
C — Barnes: liability for elite destruction, jurisdictional
D — Multi-mind on Petrine reforms
E — Traverse backward: Ivan IV, Muscovy foundations
F — Traverse forward: Catherine, Baltic consolidation
G — Cross-civ: Louis XIV, state-building parallel
H — Session synthesis
```

Proposed OGE (5 context-appropriate options):
```
A — How does Peter's modernization affect Russian legitimacy? (Mercouris frame)
B — What are the structural/power implications of Baltic access? (Mearsheimer frame)
C — Explore the connection to Ivan IV's coercive foundations
D — Compare with Louis XIV's state-building in Francia
E — What have we established so far? (synthesis)
```

Note: Barnes option omitted because liability frame is less relevant to
this particular topic. If user wants Barnes, they can ask.

SCENARIO 2: User just received Barnes analysis

Current OGE (POST-BARNES semantic shift):
```
A — Mercouris responds to Barnes (mandatory)
B — Mearsheimer responds to Barnes (mandatory)
C — Barnes on different topic
...
```

Proposed OGE (stateless):
```
A — How would Mercouris reframe this in legitimacy terms?
B — What structural factors does Mearsheimer see here?
C — Explore the specific liability Barnes identified
D — Return to the main historical question
```

No semantic shift. Options are generated fresh. If user wants "Mercouris
responds to Barnes," they select A — the option is there but not
mandatory or specially labeled.

────────────────────────────────────────────────────────────
IV. RULE SIMPLIFICATION
────────────────────────────────────────────────────────────
RULES TO REMOVE:
• POST-BARNES OGE Requirements (Section VII.B of CIV–MIND–BARNES)
• Fixed A/B/C slot assignments
• "Exactly 8 options" requirement
• Semantic shift tracking

RULES TO KEEP:
• OGE required after substantive turns
• Options should be concrete and anchored
• At least one traversal option when MEM is loaded
• At least one synthesis/closure option
• Mercouris/Mearsheimer/Barnes frames available (but not mandatory)

CURSOR RULES IMPACT:
• cmc-oge-enforcement.mdc — Simplify significantly
• cmc-tri-frame-protocol.mdc — Remove POST-BARNES sections
• cmc-scholar-mode.mdc — Update OGE requirements

────────────────────────────────────────────────────────────
V. IMPACT ANALYSIS
────────────────────────────────────────────────────────────
BENEFITS:
• Simpler mental model for both LLM and user
• No state tracking across turns
• More relevant options (context-adaptive)
• Fewer options to scan (4-6 vs 8)
• Clearer labels
• Robust to interruptions and context loss

COSTS:
• Less predictable option structure
• Users can't rely on "A is always Mercouris"
• Some tri-frame protocol sequences become harder to enforce

RISKS:
• LLM may generate poor options without fixed structure
• Important frames may be omitted

MITIGATION:
• Cursor rules can still require "lens options when analysis is active"
• Self-check: "Have I offered at least one analytical frame?"
• User can always type free-form to invoke any frame

────────────────────────────────────────────────────────────
VI. IMPLEMENTATION STATUS
────────────────────────────────────────────────────────────
**STATUS: IMPLEMENTED (MODIFIED)** — 2026-02-04

Decision: MODIFY (Option B) — Keep 8-slot structure, remove state tracking

RATIONALE FOR MODIFICATION:
The original proposal (stateless with 4-6 variable options) was rejected because
the 8-slot design intentionally surfaces the system's core capabilities. Each
slot teaches users what the system can do. This pedagogical value was preserved.

WHAT WAS KEPT:
• 8 options (A–H) — capability menu
• Fixed slot assignments — A=Mercouris, B=Mearsheimer, C=Barnes, D=Multi, E/F/G=Traverse, H=Synth
• Required OGE after every substantive turn
• Concrete anchors in each option

WHAT WAS REMOVED:
• POST-BARNES semantic shift (A and B no longer change meaning)
• State tracking of which MIND spoke last
• "6-10 words" constraint (now 10-20 words for clarity)

WHAT WAS ADDED:
• Contextual notes after options when prior analysis is relevant
• Example: "(Note: Barnes just analyzed [topic] — A or B will respond if selected)"
• This acknowledges context without changing slot semantics

IMPLEMENTATION ARTIFACTS:
• cmc-oge-enforcement.mdc — Updated with fixed slots, stateless design
• cmc-tri-frame-protocol.mdc — Replaced POST-BARNES requirements with contextual notes
• cmc-scholar-mode.mdc — Updated OGE requirements table

BENEFITS ACHIEVED:
• Slots remain pedagogical (users always see system capabilities)
• No state tracking required (robust to context loss)
• Clearer labels (10-20 words vs 6-10)
• No silent failures (slots can't mean wrong thing)

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–OGE–SIMPLIFICATION v1.1 · IMPLEMENTED (MODIFIED)
────────────────────────────────────────────────────────────
