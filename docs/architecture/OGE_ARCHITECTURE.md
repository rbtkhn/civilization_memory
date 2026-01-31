# Option Generation Engine (OGE) — Unified Architecture
## Multi-Mode Option Generation System

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

## Unified OGE Rules

### Common Constraints (All Modes)

OGE-generated options MUST:
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
Options:
a) [Option text]
b) [Option text]
c) [Option text]
d) [Option text]

Select an option: Type a letter (a, b, c, etc.) in the input box below, or enter your own question.
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

## Future Enhancements

- **Option Templates:** Predefined option sets for common scenarios
- **Option History:** Track which options users select to improve generation
- **Smart Defaults:** Learn from user behavior to prioritize option types
- **Cross-Mode Options:** Options that facilitate mode transitions
- **Batch Operations:** Options that trigger multiple actions
