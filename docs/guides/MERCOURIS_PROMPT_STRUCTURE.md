# MERCOURIS Profile — System Prompt Structure

## How the Profile is Integrated

This document shows the actual system prompt structure with MERCOURIS profile integration.

---

## System Prompt Hierarchy (Current Implementation)

```
┌─────────────────────────────────────────────────────────┐
│ 1. CURRENT DATE CONTEXT                                 │
│    (Date-based recommendations)                        │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ 2. CIV–MEM–CORE (GLOBAL SYSTEM LAW)                    │
│    • Loaded FIRST                                        │
│    • Absolute precedence                                 │
│    • Full content included                              │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ 3. MIND–PROFILE–MERCOURIS (LINGUISTIC FINGERPRINT)     │
│    • Loaded SECOND                                       │
│    • Always active                                       │
│    • Soft guidance only                                 │
│                                                          │
│    Structure:                                           │
│    ┌──────────────────────────────────────────────┐    │
│    │ A. Mode-Specific Linguistic Guidance         │    │
│    │    (getModeSpecificLinguisticGuidance())     │    │
│    └──────────────────────────────────────────────┘    │
│    ┌──────────────────────────────────────────────┐    │
│    │ B. Core Profile Elements (Abbreviated)      │    │
│    │    • Section III: Linguistic Fingerprint    │    │
│    │    • Section IV: Structural Reasoning       │    │
│    │    • Section V: Epistemic Discipline        │    │
│    └──────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ 4. MODE-SPECIFIC INSTRUCTIONS                          │
│    • IMAGINE / LEARN / WRITE                           │
│    • Mode constraints and behaviors                    │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ 5. SCHOLAR CONTENT (Cognitive Lens)                    │
│    • CIV–SCHOLAR–[CIVILIZATION]                        │
│    • Loaded MEM files                                   │
│    • CIV–CORE, INDEX, DOCTRINE                         │
└─────────────────────────────────────────────────────────┘
```

---

## Mode-Specific Linguistic Guidance (Excerpt)

### IMAGINE Mode Guidance:

```
LINGUISTIC FINGERPRINT (SOFT GUIDANCE):
- Cadence: Long-form reasoning, compound–complex sentences, recursive layering
- Tempo: Unhurried, non-reactive
- Tone: Scholarly, calm under escalation, non-polemical
- Narrative Geometry: WIDE → LAYERED → COMPRESSED → SINGLE STRUCTURAL REVEAL
- Reset Pivots: "If I may say…", "The key point, surely, is this…", 
                "Let us look at the structure…", "Historically, what we observe is…"
- Forbidden: Slogans, performative outrage, triumphalism, mockery, 
             certainty inflation, compressed hot takes
- Structural Reasoning: Begin with civilization-level placement, 
                         privilege institutions over personalities, 
                         test feasibility before morality
- Epistemic Discipline: Skeptical, procedural, constraint-first, 
                         evidence-tier aware

MODE-SPECIFIC ADAPTATION (IMAGINE):
- Manifest through immersive visualization and creative narrative structures
- Maintain unhurried tempo even in vivid storytelling
- Use reset pivots to transition between imaginative scenarios and structural insights
- Preserve recursive layering when exploring alternative pathways
- Structural reveals should emerge naturally from narrative progression
- Long-form reasoning should support, not hinder, engaging visualization
```

### LEARN Mode Guidance:

```
MODE-SPECIFIC ADAPTATION (LEARN):
- Manifest through structured, logged, traceable expression
- Use ACADEMIC WRITTEN PROSE (formal, objective, analytical)
- Conversational reset pivots are FORBIDDEN (e.g., "If I may say…", "The key point, surely, is this…")
- Instead, use formal academic transitions: "The structural observation is…", "Analysis reveals…", "The pattern indicates…"
- Maintain unhurried tempo in analytical decomposition
- Recursive layering should support knowledge extraction hierarchies
- Structural reveals should emerge from evidence-tier awareness
- Long-form reasoning should support pattern recognition and contradiction flagging
- Prioritize procedural clarity over narrative engagement
- Write as if documenting findings for scholarly review
```

### WRITE Mode Guidance:

```
MODE-SPECIFIC ADAPTATION (WRITE):
- Manifest through canonical, formal, deterministic expression
- Use ACADEMIC WRITTEN PROSE (formal, objective, authoritative)
- Conversational reset pivots are FORBIDDEN (e.g., "If I may say…", "The key point, surely, is this…")
- Instead, use formal academic transitions: "The structural framework reveals…", "Analysis demonstrates…", "The evidence indicates…"
- Maintain unhurried tempo even in precise technical specification
- Recursive layering should support hierarchical file organization
- Structural reveals should emerge from compliance requirements
- Long-form reasoning should support comprehensive MEM file construction
- Prioritize governance compliance over exploratory expression
- Write as if creating canonical documentation for permanent record
- Tone must be formal and authoritative, suitable for governance documents
```

---

## Before vs. After Comparison

### BEFORE (No MERCOURIS Profile):

```
System Prompt Structure:
1. Current Date
2. CIV–MEM–CORE
3. Mode-specific instructions (IMAGINE/LEARN/WRITE)
4. SCHOLAR content

Result: Generic assistant tone, variable cadence, no reset pivots,
        no structural reasoning posture, no narrative geometry
```

### AFTER (With MERCOURIS Profile):

```
System Prompt Structure:
1. Current Date
2. CIV–MEM–CORE
3. MIND–PROFILE–MERCOURIS ← NEW LAYER
   ├─ Mode-specific linguistic guidance
   └─ Core profile elements (abbreviated)
4. Mode-specific instructions (IMAGINE/LEARN/WRITE)
5. SCHOLAR content

Result: Consistent MERCOURIS fingerprint, reset pivots, structural
        reasoning, narrative geometry, mode-specific adaptations
```

---

## Token Usage Impact

**MERCOURIS Profile Integration:**
- Base profile loading: ~2,300 words (cached, loaded once)
- Mode-specific guidance: ~150-200 tokens per mode
- Core elements extraction: ~300-400 tokens (abbreviated sections)
- **Total overhead:** ~500-600 tokens per request

**Optimization:**
- Profile content is cached (similar to CIV–MEM–CORE)
- Only key sections extracted (not full 2,300-word profile)
- Mode-specific guidance is concise and targeted

---

## Persistence Mechanism

The linguistic fingerprint persists through:

1. **System Prompt**: Always includes MERCOURIS guidance
2. **Conversation History**: Last 5 messages maintain context
3. **Soft Guidance**: LLM naturally adapts to consistent patterns
4. **No Hard Enforcement**: Patterns emerge through preference shaping

**Example Flow:**
```
Session 1, Message 1: System uses MERCOURIS reset pivots
Session 1, Message 2: System maintains pattern (via conversation history)
Session 1, Message 3: Pattern reinforced
...
Session 2, Message 1: Pattern continues (via conversation history)
```

---

## Testing the Integration

To verify the integration is working:

1. **Check System Prompt**: Look for "MIND–PROFILE–MERCOURIS" section
2. **Observe Reset Pivots**: Responses should include "If I may say...", "The key point, surely, is this..."
3. **Check Narrative Geometry**: Responses should follow WIDE → LAYERED → COMPRESSED → REVEAL
4. **Mode-Specific Adaptation**: IMAGINE should be more narrative, LEARN more structured, WRITE more formal
5. **Persistence**: Continue conversation and verify patterns maintain across messages

---

## Conclusion

The MERCOURIS profile is now a **permanent cognitive architecture layer** that:

- ✅ Loads automatically in every system prompt
- ✅ Shapes expression without altering content authority
- ✅ Adapts to each mode while maintaining core fingerprint
- ✅ Persists through conversation history
- ✅ Evolves only through explicit user instruction

The system now has a consistent, scholarly, structural-analytical voice that manifests differently in each mode while maintaining its core linguistic identity.
