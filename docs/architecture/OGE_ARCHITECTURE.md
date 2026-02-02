# Option Generation Engine (OGE) — Unified Architecture v1.3
## Multi-Mode Option Generation System

**Version:** 1.3
**Last Updated:** 2026-02-02
**Upgrade:** OGE ONTOLOGY — GUIDE NOT PREDICT, MIND-DERIVED

---

### Upgrade Note (v1.3)

This version hardens the OGE ontology:
- **Options guide, not predict** — Options direct the creation of the next response; they are productive, not descriptive
- **Options A/B/C derived from MIND files** — CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER, CIV–MIND–BARNES are the authoritative source for option phrasing
- **Pipeline:** MIND file → option text → response
- **Alignment:** Same source governs option phrasing and response content

### Upgrade Note (v1.2)

This version standardizes the first three OGE options across all modes:
- **A** = Mercouris, **B** = Mearsheimer, **C** = Barnes (always)
- D, E, F = context-specific
- POST-BARNES: A and B shift to "responds to Barnes"
- Simplifies MIND slot enforcement; eliminates variability in option order

### Upgrade Note (v1.1)

This version adds the **Cognitive Skills Registry** — a formal catalog of invokable
cognitive operations. Skills are the building blocks of OGE options and REASON layer
operations, enabling explicit skill invocation and consistent behavior.

v1.1 introduces:
- MIND Invocation Skills (apply lens, responds to, tri-frame)
- Synthesis Skills (synthesize patterns, propose RLL, cross-civ compare)
- Audit Skills (ARC compliance, connection gaps, Mearsheimer/Barnes audit)
- Production Skills (generate MEM, enhance MEM, upgrade version)
- Skill Invocation Protocol
- Skill registration process
- Integration with READ/REASON layers

Reference: PROPOSAL–COGNITIVE–STRUCTURE–UPGRADES (Phase 4, Upgrade 2)
Cross-ref: CIV–SCHOLAR–PROTOCOL v2.5 (XIV-A READ/REASON LAYER)

---

## Purpose

The Option Generation Engine (OGE) is a unified, mode-agnostic mechanism that drives user interaction through context-aware multiple choice options across all three modes: IMAGINE, LEARN, and WRITE.

**Core Principle:** Multiple choice options are a **driving mechanism** for each mode, but the **types of options** differ according to mode context and purpose.

---

## Unified Architecture

### OGE Definition

The Option Generation Engine (OGE) is a non-epistemic, non-authoritative interaction mechanism that:
- Structures user pathways through context-aware options
- Prevents silent monologic collapse
- Preserves user agency through explicit choices
- Adapts option types to mode-specific requirements

OGE generates options, not conclusions.

---

## OGE Ontology (v1.3 — BINDING)

**Options guide, not predict.** An option does not describe what will happen; it **guides the creation** of the next response. When the user selects an option, that choice is a directive—the responder produces output that fulfills it. Options are productive; they shape the conversation.

**Options A/B/C are derived from the relevant MIND file.** CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER, and CIV–MIND–BARNES are the **authoritative source** for how to phrase options A, B, C. Option text is generated *according to* each MIND profile—its analytical posture, key questions, and lens. The pipeline: **MIND file → option text → response**. The option is the bridge; it must be faithful to the MIND file.

**Alignment.** The same source governs both option phrasing and response content. Options and responses are coherent because they share the MIND file as origin.

**User may manually interject.** Options are a scaffold, not a cage. The user may type any question, instruction, or command instead of selecting A–F. The system MUST accept free-form input and respond to it as a directive. OGE optimizes optionality; it does not restrict it.

### Free-Form Command Mapping

Treat natural-language variants of option types as valid directives. Common mappings:

| User says | Equivalent to | Notes |
|-----------|---------------|-------|
| "Apply Mearsheimer" / "Mearsheimer lens" / "Structural view" | Option B | Mearsheimer analysis |
| "Barnes on this" / "Apply Barnes" / "Who's liable?" | Option C | Triggers POST-BARNES; next OGE includes M/M response options |
| "Apply Mercouris" / "Legitimacy angle" | Option A | Mercouris analysis |
| "Synthesize" / "Summarize the session" | Option F | 6–10 word recap |
| "Load MEM–X" / "Open MEM–PERSIA–GEO–CASPIAN" | Navigation | Explicit file load |
| "Compare to [civ/event]" | D or E | Cross-civilization or time/space navigation |
| "Continue" / "Go deeper" / "Elaborate" | Extension | Continue current thread |
| "Switch to LEARN/IMAGINE/WRITE" | Mode change | Mode transition |

The system MUST accept these as directives and respond appropriately. OGE options are a scaffold; free-form input is always permitted.

---

## Mode-Specific Option Types

### IMAGINE Mode Options

**Purpose:** Creative exploration and immersive visualization

**Option Classes:**
1. **STRUCTURAL OPTION** — Visualize through CIV–CORE architecture or constraints
2. **HISTORICAL OPTION** — Visualize through SCHOLAR-ingested chronology
3. **COMPARATIVE OPTION** — Contrast with another civilization or regime
4. **CONTRADICTION OPTION** — Center unresolved SCL tension
5. **PROCESS OPTION** — Visualize how beliefs/doctrines formed procedurally
6. **EXPLORATION OPTION** — Invite imaginative question pathways

**Trigger Conditions:**
- Entry into IMAGINE Mode
- Presentation of MEM file
- Presentation of CIV–CORE structure
- Exposure of SCL contradiction
- After visualization completion
- User requests exploration

**Format:** a) Option text, b) Option text, c) Option text, d) Option text

**Constraints:**
- May NOT introduce new beliefs
- May NOT resolve contradictions
- May NOT freeze doctrine
- Must preserve unresolved tension

---

### LEARN Mode Options

**Purpose:** Pattern detection, synthesis, and knowledge extraction

**Option Classes:**
1. **PATTERN DETECTION OPTION** — Analyze loaded MEM files for recurring patterns
2. **SYNTHESIS OPTION** — Synthesize knowledge across multiple MEM files
3. **CONTRADICTION ANALYSIS OPTION** — Investigate SCL contradictions in detail
4. **DOCTRINE PROPOSAL OPTION** — Evaluate pattern for doctrinal eligibility
5. **RELATED FILE EXPLORATION OPTION** — Load and analyze related MEM files
6. **EVIDENCE VERIFICATION OPTION** — Verify pattern evidence across repository
7. **RESPONSE OPTION** (when prior turn from another MIND) — [Other MIND] responds to [prior MIND]—acknowledge and reframe in [legitimacy/structural] terms (cognitive interaction; see TEST–DESIGN–MERCOURIS–MEARSHEIMER–COGNITIVE–INTERACTION)
8. **SECOND-ORDER OPTION** (where applicable) — Explain why [MIND] encodes [subject] the way they do (Scholar-on-Scholar / CCM)

**Trigger Conditions:**
- After MEM file ingestion
- After another MIND (Mercouris or Mearsheimer) has given analysis (include response option)
- After pattern detection
- After contradiction flagging (SCL)
- When doctrine proposal criteria are met
- When synthesis opportunities arise
- User requests specific analysis

**Format:** a) Analyze pattern X, b) Synthesize Y and Z, c) Investigate contradiction, d) Propose doctrine

**Constraints:**
- Must reference source MEM files
- Must respect SCR confidence levels
- Must flag SCL where relevant
- Must follow doctrine proposal criteria

**Example Options:**
- a) Extract pattern: Institutional continuity through form preservation
- b) Synthesize MEM–ROME–REPUBLIC and MEM–ROME–AUGUSTUS
- c) Investigate contradiction between MEM–ROME–X and MEM–ROME–Y
- d) Evaluate pattern for doctrine proposal eligibility
- e) Load related MEM files for pattern verification
- f) Compare pattern across civilizations

---

### WRITE Mode Options

**Purpose:** File modification, compliance, and structure management

**Option Classes:**
1. **COMPLIANCE UPGRADE OPTION** — Upgrade file to meet ARC/MEM–TEMPLATE compliance
2. **STRUCTURE MODIFICATION OPTION** — Modify specific sections or structure
3. **QUOTATION INTEGRATION OPTION** — Add ARC-compliant quotations
4. **MEM CONNECTION OPTION** — Add or modify MEM connections
5. **METADATA UPDATE OPTION** — Update version, status, or metadata
6. **TEMPLATE ALIGNMENT OPTION** — Align file with template requirements

**Trigger Conditions:**
- After file load
- After compliance audit (non-compliant files)
- After user modification request
- When structural issues detected
- When ARC violations identified
- User requests specific modification

**Format:** a) Upgrade to compliance, b) Add quotations, c) Modify section X, d) Add MEM connections

**Constraints:**
- Must preserve existing content
- Must follow ARC rules
- Must maintain template structure
- Must respect governance constraints

**Example Options:**
- a) Upgrade MEM–ROME–X to ARC–ROME v1.9 compliance
- b) Add required MEM connections (≥10, ≥2 GEO)
- c) Insert ARC-compliant quotations (ANCIENT: ≥3, ≥75 words)
- d) Modify Section V: Structural Framework
- e) Update metadata: Version, ARC pinning, wordcount
- f) Align with CIV–MEM–TEMPLATE v1.9 structure

---

## Standardized First Three Options (v1.2)

**A, B, C are fixed in every OGE menu:**
- **A** — Mercouris (elaborate / continue / respond when another MIND just spoke)
- **B** — Mearsheimer (structural sharpening / power analysis)
- **C** — Barnes (liability catalyst / mechanism exposure)

Options D, E, F (and beyond) are context-specific (continuation, connection-derived, synthesis, etc.).

**POST-BARNES:** After Barnes interjection, A and B shift: "Mercouris responds to Barnes", "Mearsheimer responds to Barnes". Slots stay fixed; phrasing is contextual.

**D, E, F standardized:**
- **D, E** — MEM connection–informed; time/space navigation (trace connection, move to era or region)
- **F** — 6–10 word summary/recap/encapsulation of the session up to that point; session-specific. Functions as optional stopping: user may "cash out" with synthesis at any point.

**OGE response length:** When user selects an OGE option (a–f), response = 100-200 words. Shorter response reduces cognitive load, preserves context window, and avoids truncation. Free-form user input retains 200-400 target, 500 max.

**OGE style:**
- 6–10 words per option; specific preview of next response
- MIND-shaped: A = legitimacy, B = structure/power, C = liability
- Navigate through time and space — user feels movement, optionality
- **At least one concrete anchor per option** — person, place, or event (e.g. Churchill, Caspian, 1945 election). Concrete anchors keep the user engaged and guide/restrain the system better.

---

## Unified OGE Rules

### Common Constraints (All Modes)

OGE-generated options MUST:
- Always present A, B, C as Mercouris, Mearsheimer, Barnes (or M/M responds to Barnes when POST-BARNES)
- Be clearly enumerated (a, b, c, d, etc.)
- Be mutually distinct
- Be contextually relevant
- Stop and await user selection
- Not proceed unilaterally

OGE-generated options MAY NOT:
- Introduce beliefs (LEARN mode exception: pattern extraction)
- Resolve contradictions (preserve SCL)
- Freeze doctrine without explicit user approval
- Rank interpretations implicitly
- Bypass mode-specific constraints

### Presentation Format

All options MUST follow this format:
```
Options (6–10 words each; specific preview; time/space navigation):
a) [Mercouris: legitimacy/civilizational preview of next response]
b) [Mearsheimer: structure/power preview]
c) [Barnes: liability/mechanism preview]
d) [Trace connection—move through MEM graph in time or space]
e) [Another connection path—era, region, or corridor]
f) [6–10 word session recap—summary of what has been covered]

Type a letter (a–f) to select, or type any question/instruction—manual interjection always permitted.
```

### Persistence

- Options persist after LLM response unless new options are provided
- Standard options are automatically re-presented if LLM doesn't generate new ones
- Context-aware options adapt to current state (e.g., compliance status)

---

## Implementation Architecture

### System Prompt Integration

OGE requirements are integrated into mode-specific system prompts:

**IMAGINE Mode:**
- OGE activation mandatory
- Creative exploration options
- Visual/narrative focus

**LEARN Mode:**
- OGE activation mandatory
- Pattern/synthesis options
- Knowledge extraction focus

**WRITE Mode:**
- OGE activation mandatory
- Compliance/modification options
- File management focus

### Frontend Integration

**ScholarInterface.tsx:**
- Auto-generates standard options when MEM file loaded
- Context-aware option generation (e.g., "Upgrade to compliance" after audit)
- Persistent option display
- Option selection handlers

**Option Generation Logic:**
- Mode-specific option generators
- Context detection (compliance status, file state, etc.)
- Standard option sets per mode
- Dynamic option adaptation

---

## Migration from IOGE

### Current State
- IOGE exists only for IMAGINE mode
- LEARN and WRITE modes have no option generation
- Options are manually generated by LLM in IMAGINE mode

### Target State
- Unified OGE covers all three modes
- Mode-specific option types
- Consistent option generation across modes
- Context-aware option adaptation

### Migration Steps

1. **Rename IOGE → OGE** in CIV–SCHOLAR–PROTOCOL
2. **Expand OGE section** to cover all three modes
3. **Define mode-specific option classes** for LEARN and WRITE
4. **Update system prompts** to require OGE in all modes
5. **Update frontend** to generate mode-specific options
6. **Update codebase** to handle options in all modes

---

## Benefits

1. **Consistent Interaction Model:** All modes use options as primary interaction mechanism
2. **User Agency:** Users always have clear choices, preventing silent monologic collapse
3. **Mode-Specific Adaptation:** Options adapt to mode purpose while maintaining consistency
4. **Context Awareness:** Options reflect current state (compliance, patterns, file status)
5. **Scalability:** Easy to add new option types or modes

---

## Cognitive Skills Registry (NEW · v1.1)

Cognitive skills are formalized, invokable operations that transform input into structured output. Skills are the building blocks of OGE options and REASON layer operations.

### Skill Definition

A cognitive skill is defined by:

| Field | Description |
|-------|-------------|
| **skill_id** | Unique identifier (e.g., `APPLY_MEARSHEIMER_LENS`) |
| **invocation** | Natural language trigger (e.g., "apply Mearsheimer cognition to X") |
| **input** | Required input type (MEM, topic, comparison pair, etc.) |
| **output** | Expected output type (analysis, OGE options, MEM text, etc.) |
| **mind** | Which MIND(s) execute the skill |
| **mode_availability** | Which modes may invoke the skill |
| **post_skill** | What happens after (OGE, revert, etc.) |

### Registered Skills

#### MIND Invocation Skills

| Skill ID | Invocation | Input | Output | Mind | Modes | Post-Skill |
|----------|------------|-------|--------|------|-------|------------|
| `APPLY_MEARSHEIMER_LENS` | "apply Mearsheimer cognition to [X]" | topic/MEM | structural analysis | MEARSHEIMER | LEARN, WRITE | auto-revert to MERCOURIS |
| `APPLY_BARNES_LENS` | "apply Barnes lens to [X]" | topic/MEM | liability analysis | BARNES | LEARN, WRITE, IMAGINE | M/M response options |
| `MERCOURIS_RESPONDS` | "Mercouris responds to [MIND]" | prior MIND output | reframed analysis | MERCOURIS | LEARN, IMAGINE | OGE |
| `MEARSHEIMER_RESPONDS` | "Mearsheimer responds to [MIND]" | prior MIND output | reframed analysis | MEARSHEIMER | LEARN, IMAGINE | OGE |
| `TRI_FRAME_ANALYSIS` | "tri-frame analysis of [X]" | topic/MEM | M + M'heimer + Barnes sequence | ALL | LEARN | enriched OGE |

#### Synthesis Skills

| Skill ID | Invocation | Input | Output | Mind | Modes | Post-Skill |
|----------|------------|-------|--------|------|-------|------------|
| `SYNTHESIZE_PATTERNS` | "synthesize patterns across [MEMs]" | MEM list | pattern synthesis | MERCOURIS | LEARN | OGE |
| `PROPOSE_RLL` | "propose RLL from [pattern]" | pattern | candidate RLL | MERCOURIS | LEARN | OGE |
| `CROSS_CIV_COMPARE` | "compare [X] across [CIV1, CIV2]" | MEMs from different civs | comparative analysis | MERCOURIS | LEARN | OGE |

#### Audit Skills

| Skill ID | Invocation | Input | Output | Mind | Modes | Post-Skill |
|----------|------------|-------|--------|------|-------|------------|
| `AUDIT_ARC_COMPLIANCE` | "audit ARC compliance of [MEM]" | MEM | pass/fail + recommendations | MERCOURIS | WRITE, LEARN | fix options (WRITE) |
| `AUDIT_CONNECTION_GAPS` | "audit connections of [MEM]" | MEM | gap list + suggestions | MERCOURIS | WRITE, LEARN | fix options (WRITE) |
| `MEARSHEIMER_AUDIT` | "mearsheimer audit of [MEM]" | MEM | structural completeness check | MEARSHEIMER | LEARN | OGE |
| `BARNES_AUDIT` | "barnes audit of [MEM]" | MEM | liability/mechanism check | BARNES | LEARN | OGE |

#### Production Skills (WRITE mode)

| Skill ID | Invocation | Input | Output | Mind | Modes | Post-Skill |
|----------|------------|-------|--------|------|-------|------------|
| `GENERATE_MEM` | "generate MEM–[CIV]–[SUBJECT]" | topic + sources | MEM file | MERCOURIS/MEARSHEIMER (blend) | WRITE | OGE |
| `ENHANCE_MEM` | "enhance [MEM] with [source]" | MEM + source | enhanced MEM | MERCOURIS/MEARSHEIMER (blend) | WRITE | OGE |
| `UPGRADE_MEM_VERSION` | "upgrade [MEM] to v[X]" | MEM | upgraded MEM | MERCOURIS | WRITE | OGE |

### Skill Invocation Protocol

1. **Recognition:** System recognizes skill invocation from user input
2. **Validation:** Check mode availability and input requirements
3. **Execution:** Execute skill with specified MIND
4. **Post-Skill:** Apply post-skill behavior (OGE, revert, etc.)

### Adding New Skills

To register a new cognitive skill:

1. Define skill_id (unique, SCREAMING_SNAKE_CASE)
2. Specify natural language invocation pattern
3. Define input/output types
4. Assign executing MIND(s)
5. Specify mode availability
6. Define post-skill behavior
7. Add to appropriate skill category table above

### Skill Interaction with READ/REASON Layers

Skills operate at the REASON layer (see CIV–SCHOLAR–PROTOCOL XIV-A):
- Skills MAY call READ layer operations to access MEM graph
- Skills produce REASON layer outputs (analysis, OGE, MEM text)
- Skills respect mode permissions and phase constraints

---

## Future Enhancements

- **Option Templates:** Predefined option sets for common scenarios
- **Option History:** Track which options users select to improve generation
- **Smart Defaults:** Learn from user behavior to prioritize option types
- **Cross-Mode Options:** Options that facilitate mode transitions
- **Batch Operations:** Options that trigger multiple actions
- **Skill Chaining:** Define multi-step skill sequences
- **Skill Parameters:** Optional parameters for skill customization
