# Audit: OGE Logical and Procedural Consistency

**Date:** 2026-02-02  
**Scope:** Option Generation Engine (OGE) rules, architecture, templates, and runtime implementation  
**Reference:** cmc-oge-enforcement, OGE_ARCHITECTURE v1.3, CIV–SCHOLAR–PROTOCOL, chat route, ScholarInterface

**Implementation Status (2026-02-02):** All P1/P2/P3 recommendations from Section V have been implemented. See VERSION–MANIFEST entry "OGE FIVE FIXES — AUDIT PROPAGATION" for propagation to governance, templates, and SCHOLAR files.

---

## I. EXECUTIVE SUMMARY

The OGE specification is largely coherent across governance and runtime. A/B/C slot semantics, MIND derivation, guide-not-predict ontology, and response-length rules align. Seven procedural gaps and two logical inconsistencies were identified.

---

## II. CONSISTENCY VERIFIED

| Element | cmc-oge-enforcement | OGE_ARCHITECTURE | CIV–SCHOLAR–PROTOCOL | chat route | ScholarInterface |
|---------|---------------------|------------------|----------------------|------------|------------------|
| 6 options (A–F) | ✓ | ✓ | ✓ | ✓ | ✓ |
| A=Mercouris, B=Mearsheimer, C=Barnes | ✓ | ✓ | ✓ | ✓ | ✓ |
| 6–10 words per option | ✓ | ✓ | ✓ | ✓ (all modes) | Partial (see III.1) |
| D, E = time/space navigation | ✓ | ✓ | ✓ | ✓ | ✓ |
| F = 6–10 word recap / synthesis | ✓ | ✓ | ✓ | ✓ | ✓ |
| Options guide (not predict) | ✓ | ✓ | ✓ | ✓ | N/A |
| MIND-derived A/B/C | ✓ | ✓ | ✓ | ✓ | ✓ |
| Option selection → 100–200 words | ✓ | ✓ | ✓ | IMAGINE, LEARN | N/A |
| Free-form → 200–400 target, 500 max | ✓ | ✓ | ✓ | IMAGINE, LEARN | N/A |
| POST-BARNES: A/B shift to responds | ✓ | ✓ | ✓ | Not in prompts | ✓ (display only) |
| Concrete anchor (person/place/event) | ✓ | ✓ | ✓ | IMAGINE only | Not enforced |

---

## III. LOGICAL INCONSISTENCIES

### 3.1 Example options violate promulgated rule

**Location:** `.cursor/rules/cmc-oge-enforcement.mdc` (lines 76–81)

The "Correct Format Example" illustrates options that exceed the 6–10 word limit:

| Option | Example text | Word count |
|--------|--------------|------------|
| A | Mercouris: how legitimacy density at the Caspian frontier shaped Persian containment. | 11 |
| B | Mearsheimer: force ratios and chokepoints that explain Darius's northern limit. | 11 |
| C | Barnes: who defects first when steppe denial meets imperial logistics? | 11 |
| D | Trace nomadic denial from Scythian retreat to Caspian containment logic. | 10 ✓ |
| E | Shift to Persian Gulf—open sea vs closed Caspian, projection vs buffer. | 12 |
| F | Caspian containment, Scythian denial, northern limit. | 6 ✓ |

**Impact:** The example teaches non-compliant behavior. Options A, B, C, and E violate the rule they are meant to demonstrate.

---

### 3.2 ScholarInterface fallback options exceed 6–10 words

**Location:** `tools/cmc-console/components/scholar/ScholarInterface.tsx` (lines 141–144, 156, 166)

Several generated options exceed 10 words:

| Option | Text | Word count |
|--------|------|------------|
| d (IMAGINE, with MEM) | Trace connections—move through the MEM graph to a linked era or region. | 12 |
| e (IMAGINE, with MEM) | Follow another path to a related MEM across time or space. | 11 |
| d (LEARN, with MEM) | Trace connections from ${memFileName}—follow a path through time or space. | 12+ |
| d (WRITE, with MEM) | Trace MEM connections from ${memFileName}; explore the graph. | 9 ✓ (if filename short) |

**Impact:** UI-presented options violate the 6–10 word limit, undermining governance consistency.

---

## IV. PROCEDURAL GAPS

### 4.1 WRITE mode: no response-length rule for option selection

**Location:** `tools/cmc-console/app/api/scholar/chat/route.ts` — WRITE mode OGE block (lines 771–786)

IMAGINE and LEARN both specify: "When user selects option (a-f): response 100-200 words."  
WRITE mode omits this. Per cmc-oge-enforcement, all modes should use 100–200 words for option selection.

**Recommendation:** Add to WRITE OGE block:  
`- When user selects option (a-f): response 100-200 words. Free-form: 200-400 target, 500 max.`

---

### 4.2 LEARN and WRITE: no concrete-anchor requirement in prompts

**Location:** `tools/cmc-console/app/api/scholar/chat/route.ts` — LEARN and WRITE OGE blocks

IMAGINE includes: "Each option MUST include at least one specific person, place, or event (concrete anchor)."  
LEARN and WRITE do not. OGE_ARCHITECTURE and cmc-oge-enforcement require concrete anchors for all modes.

**Recommendation:** Add to LEARN and WRITE OGE blocks:  
`- Each option MUST include at least one specific person, place, or event (concrete anchor).`

---

### 4.3 POST-BARNES not specified in mode prompts

**Location:** `tools/cmc-console/app/api/scholar/chat/route.ts` — IMAGINE, LEARN, WRITE OGE blocks

POST-BARNES behavior (A and B shift to "Mercouris responds to Barnes" / "Mearsheimer responds to Barnes") appears in governance but not in the mode-specific prompts. The model may rely on CIV–SCHOLAR–PROTOCOL or scholar files, which may not be prominent or loaded.

**Recommendation:** Add to each mode's OGE block:  
`- POST-BARNES: After Barnes interjection, A = Mercouris responds to Barnes, B = Mearsheimer responds to Barnes.`

---

### 4.4 cmc-scholar-mode: no 6–10 word specification

**Location:** `.cursor/rules/cmc-scholar-mode.mdc` (OGE Requirements, lines 36–44)

States "One line each" but not "6–10 words each." cmc-oge-enforcement specifies 6–10 words; cmc-scholar-mode should align.

**Recommendation:** Add "6–10 words each" to OGE Requirements, e.g. item 2:  
`2. **6–10 words each, one line** - respect cognitive load`

---

### 4.5 cmc-mode-contracts: no word count for OGE options

**Location:** `.cursor/rules/cmc-mode-contracts.mdc` (lines 21–29)

LEARN and IMAGINE list "one line each" but not "6–10 words." Cross-reference or inline specification would align with OGE rules.

**Recommendation:** Add "6–10 words each" to OGE descriptions, e.g.:  
`OGE: Required. 6 options (A–F), 6–10 words each, one line; include Mearsheimer + Barnes...`

---

### 4.6 FRANCIA Scholar F slot: incomplete specification

**Location:** `content/civilizations/FRANCIA/CIV–SCHOLAR–FRANCIA.md` (line 140)

States: `**OPTION F** — [Synthesize and return; close the loop]`  
Does not specify that F is a 6–10 word session recap. Other sources state F = 6–10 word summary.

**Recommendation:** Align with governance:  
`**OPTION F** — [6–10 word session recap; synthesize and return; close the loop]`

---

### 4.7 WRITE mode D/E: "trace/add" vs "trace" semantics

**Location:** chat route WRITE block vs cmc-oge-enforcement

- **chat route:** "D, E = trace/add connections"
- **cmc-oge-enforcement:** "D, E — Connection-derived; trace a path through the MEM graph"

WRITE allows adding connections; LEARN/IMAGINE emphasize tracing. This is mode-appropriate (WRITE modifies files). No change required; noted for clarity.

---

## V. RECOMMENDATIONS SUMMARY

| Priority | Item | Action |
|----------|------|--------|
| P1 | 3.1 Example violations | Revise cmc-oge-enforcement example so all options are 6–10 words |
| P1 | 3.2 ScholarInterface overflow | Shorten option strings to ≤10 words |
| P2 | 4.1 WRITE response length | Add 100–200 word rule to WRITE OGE block |
| P2 | 4.2 LEARN/WRITE concrete anchor | Add concrete-anchor line to both OGE blocks |
| P2 | 4.3 POST-BARNES in prompts | Add POST-BARNES line to IMAGINE, LEARN, WRITE OGE blocks |
| P3 | 4.4 cmc-scholar-mode | Add "6–10 words each" to OGE requirements |
| P3 | 4.5 cmc-mode-contracts | Add "6–10 words each" to OGE descriptions |
| P3 | 4.6 FRANCIA F slot | Clarify F as 6–10 word recap |

---

## VI. BINDING REFERENCES

- CMC–BOOTSTRAP v2.14
- cmc-oge-enforcement (OGE Enforcement)
- OGE_ARCHITECTURE v1.3
- CIV–SCHOLAR–PROTOCOL
- cmc-tri-frame-protocol (POST-BARNES)

---

*End of audit.*
