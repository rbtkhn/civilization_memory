# ARC Migration Guide: Temporal → Evidence-Based Categories

## Overview

**CIV–MEM–TEMPLATE v3.0** implements a major ARC framework redesign, replacing temporal categories (Ancient/Medieval/Modern) with evidence-based categories (Primary/Contextual/Secondary/Critical).

This guide provides migration instructions for existing MEM files.

---

## Migration Timeline

- **Effective**: Immediate for new MEM files
- **Transition Period**: 6 months for existing MEM files
- **Legacy Support**: Old temporal categories remain readable but deprecated

---

## Category Mapping

### OLD → NEW Category Translation

| OLD Category | NEW Category | Migration Logic |
|-------------|-------------|-----------------|
| **ANCIENT** | **PRIMARY** | Direct evidence from subject period |
| **MEDIEVAL** | **CONTEXTUAL** | Near-contemporary analysis and continuity |
| **EARLY MODERN** | **SECONDARY** | Scholarly synthesis and interpretation |
| **MODERN** | **SECONDARY** + **CRITICAL** | Scholarly analysis + historiographical evaluation |

### Special Cases

**Modern Subjects (19th-20th century literary/cultural)**
- ANCIENT sources → Remove (impossible)
- MEDIEVAL sources → Remove (impossible)
- EARLY MODERN → SECONDARY (contemporary criticism)
- MODERN → SECONDARY + CRITICAL (scholarly analysis + meta-evaluation)

**Well-Documented Historical Events**
- All old categories → PRIMARY + CONTEXTUAL + SECONDARY + CRITICAL
- May require additional quotations to meet new minimums

---

## Step-by-Step Migration Process

### 1. Assess Subject Type
Determine your MEM's subject characteristics:

- **WELL-DOCUMENTED**: Rich primary sources available
- **SPARSE SOURCES**: Limited primary source base
- **MODERN**: 19th-20th century subject
- **INTERPRETIVE**: Theoretical or complex analytical subject

### 2. Declare Subject Type
Add this declaration to your MEM file:

```
SUBJECT TYPE DECLARATION:
"This MEM addresses a [TYPE] subject.
Applied requirements: PRIMARY ≥X, CONTEXTUAL ≥Y, SECONDARY ≥Z, CRITICAL ≥W"
```

### 3. Recategorize Quotations

**ANCIENT → PRIMARY**
- Keep all quotations
- Ensure they establish direct evidence
- Minimum: ≥2 quotations, ≥50 words total

**MEDIEVAL → CONTEXTUAL**
- Keep if contemporary to subject
- Remove if purely modern analysis
- Minimum: ≥1 quotation, ≥25 words

**EARLY MODERN → SECONDARY**
- Keep scholarly analysis
- Ensure ≥2 distinct scholars represented
- Minimum: ≥2 scholars, ≥1 quote each

**MODERN → SECONDARY + CRITICAL**
- Split between SECONDARY (analysis) and CRITICAL (methodology)
- SECONDARY: Pure scholarly interpretation
- CRITICAL: Source evaluation, methodological discussion

### 4. Validate EQS Compliance

Ensure each quotation meets ≥2 EQS criteria:
- **AUTHORITY**: Source credibility established
- **RELEVANCE**: Direct connection to claims
- **CONTEXT**: Historical/cultural context provided
- **LIMITATION**: Biases/constraints acknowledged

### 5. Update Section Headers

Replace temporal section headers:

```
OLD: IX. ARC COMPLIANCE & CITATIONS
     ANCIENT (≥3 quotations, ≥75 words aggregate):

NEW: IX. ARC COMPLIANCE & CITATIONS
     PRIMARY CATEGORY (Direct Evidence):
```

---

## Example Migration: Literary MEM

### BEFORE (Temporal Categories)
```
MODERN (≥2 quotations):
1. Scholarly analysis of author's work (Nabokov)
2. Contemporary criticism (Binyon)
```

### AFTER (Evidence-Based Categories)
```
SUBJECT TYPE DECLARATION:
"This MEM addresses a MODERN subject.
Applied requirements: PRIMARY N/A, CONTEXTUAL ≥1, SECONDARY ≥3, CRITICAL ≥2"

CONTEXTUAL CATEGORY (Contemporary Analysis):
1. Contemporary literary criticism (Binyon)

SECONDARY CATEGORY (Scholarly Analysis):
1. Scholarly analysis of author's work (Nabokov)
2. Literary criticism (Scholar A)
3. Comparative analysis (Scholar B)

CRITICAL CATEGORY (Historiographical Evaluation):
1. Methodology discussion (Source evaluation)
2. Theoretical framework assessment (Critical analysis)
```

---

## Validation Checklist

- [ ] Subject type declared with applied requirements
- [ ] All quotations recategorized appropriately
- [ ] Minimum requirements met for subject type
- [ ] Each quotation meets ≥2 EQS criteria
- [ ] Section headers updated
- [ ] No impossible categories (e.g., Ancient sources for modern subjects)
- [ ] Source balance appropriate to evidentiary availability

---

## Governance Notes

- **Breaking Change**: Migration required for canonical advancement
- **No Automatic Conversion**: Manual recategorization ensures quality
- **Appeal Process**: Dispute category assignments through SCHOLAR files
- **Legacy Reading**: Old temporal categories remain machine-readable

---

## Support Resources

- **CIV–MEM–TEMPLATE v3.0**: Complete evidence-based framework
- **ARCHITECTURE.md**: Updated compliance validation
- **Subject Type Matrix**: Adaptive requirements guidance

Migration ensures evidentiary rigor while enabling appropriate standards for all historical subjects.