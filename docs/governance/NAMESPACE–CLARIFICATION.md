NAMESPACE–CLARIFICATION — v3.2
Civilizational Memory Codex · Category Namespace Resolution
Defect Remediation · Errata

Status: ACTIVE · CANONICAL
Governed by: CMC 3.2
Version: 3.2
Class: GOVERNANCE (Errata)
Addresses: ARC namespace collision (CRITICAL defect)
Last Update: January 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This document resolves namespace collisions between category
systems in the CMC governance framework.

DEFECT IDENTIFIED:
Multiple category systems used overlapping symbols (A/B/C/D),
creating ambiguity in source classification, compliance
validation, and conflict resolution.

────────────────────────────────────────────────────────────
II. NAMESPACE DEFINITIONS (CANONICAL)
────────────────────────────────────────────────────────────
The CMC employs THREE ORTHOGONAL category systems.
These systems are INDEPENDENT and may be applied simultaneously.

┌─────────────────────────────────────────────────────────────┐
│  NAMESPACE       │  PURPOSE                │  CATEGORIES    │
├─────────────────────────────────────────────────────────────┤
│  ARC-TEMPORAL    │  Author admissibility   │  ANCIENT       │
│  (ARC-T)         │  by historical period   │  MEDIEVAL      │
│                  │                         │  EARLY MODERN  │
│                  │                         │  MODERN        │
├─────────────────────────────────────────────────────────────┤
│  ERC             │  Evidence role in       │  PRIMARY       │
│  (Evidence Role  │  historical argument    │  CONTEXTUAL    │
│   Categories)    │                         │  SECONDARY     │
│                  │                         │  CRITICAL      │
├─────────────────────────────────────────────────────────────┤
│  PSCRC-TIER      │  Conflict resolution    │  TIER-A        │
│                  │  precedence hierarchy   │  TIER-B        │
│                  │                         │  TIER-C        │
│                  │                         │  TIER-D        │
└─────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────
III. NAMESPACE DEFINITIONS DETAILED
────────────────────────────────────────────────────────────

III.A ARC-TEMPORAL (ARC-T)
────────────────────────────────────────────────────────────
Governs: Which authors are admissible by historical period.
Defined in: CIV–MEM–CORE Section XII, CIV–ARC–TEMPLATE

ARC-T-ANCIENT:    Authors from the subject civilization's 
                  classical/foundational period
ARC-T-MEDIEVAL:   Authors from medieval transmission period
ARC-T-EARLY-MOD:  Authors from early modern critical period
ARC-T-MODERN:     Authors from contemporary scholarship

Usage: Determines author admissibility, not evidence role.

III.B ERC (Evidence Role Categories)
────────────────────────────────────────────────────────────
Governs: How quotations function in historical argument.
Defined in: CIV–MEM–TEMPLATE Section V

ERC-PRIMARY:      Direct evidence from subject period
ERC-CONTEXTUAL:   Contemporary analysis illuminating context
ERC-SECONDARY:    Scholarly interpretation and synthesis
ERC-CRITICAL:     Modern analytical/critical scholarship

Usage: Determines quotation requirements and EQS compliance.

III.C PSCRC-TIER
────────────────────────────────────────────────────────────
Governs: Precedence when sources conflict.
Defined in: CIV–MEM–CORE Section IX

TIER-A:  Direct Primary Evidence
TIER-B:  Contemporaneous Corroboration
TIER-C:  Later Scholarly Interpretation
TIER-D:  Retrospective Synthesis

Usage: Conflict resolution only. Not for classification.

────────────────────────────────────────────────────────────
IV. ORTHOGONALITY RULE
────────────────────────────────────────────────────────────
These namespaces are ORTHOGONAL. A single quotation may be
classified under all three systems simultaneously.

EXAMPLE:
A quotation from Gibbon's Decline and Fall:

• ARC-T: ARC-T-MODERN (18th century author)
• ERC: ERC-SECONDARY (scholarly interpretation)
• PSCRC-TIER: TIER-C (later scholarly interpretation)

EXAMPLE:
A quotation from Thucydides:

• ARC-T: ARC-T-ANCIENT (5th century BCE author)
• ERC: ERC-PRIMARY (direct evidence from period)
• PSCRC-TIER: TIER-A (direct primary evidence)

────────────────────────────────────────────────────────────
V. DEPRECATED USAGE
────────────────────────────────────────────────────────────
The following usages are DEPRECATED and must be updated:

DEPRECATED:
• "Category A" without namespace prefix
• "Category C (Early Modern)" mixing namespaces
• A/B/C/D without explicit system reference

REQUIRED:
• "ARC-T-ANCIENT" or "ERC-PRIMARY" (explicit prefix)
• "TIER-A" for PSCRC references
• Full namespace when ambiguity is possible

────────────────────────────────────────────────────────────
VI. MIGRATION NOTES
────────────────────────────────────────────────────────────
Files using deprecated notation must be updated:

• CIV–ARC–TEMPLATE: Update "Category A/B/C/D" → "ARC-T-*"
• CIV–MEM–TEMPLATE: Update evidence categories → "ERC-*"
• CIV–MEM–CORE PSCRC: Update tiers → "TIER-*" or "PSCRC-TIER-*"

Legacy files remain valid but should be updated when modified.

────────────────────────────────────────────────────────────
VII. CROSS-REFERENCE TABLE
────────────────────────────────────────────────────────────
For clarity, here is how the three systems typically align
(though they need not always):

┌─────────────────────────────────────────────────────────────┐
│  TYPICAL ALIGNMENT (NOT REQUIRED)                           │
├─────────────────────────────────────────────────────────────┤
│  ARC-T-ANCIENT   often corresponds to  ERC-PRIMARY, TIER-A  │
│  ARC-T-MEDIEVAL  often corresponds to  ERC-CONTEXTUAL,TIER-B│
│  ARC-T-EARLY-MOD often corresponds to  ERC-SECONDARY,TIER-C │
│  ARC-T-MODERN    often corresponds to  ERC-CRITICAL, TIER-D │
└─────────────────────────────────────────────────────────────┘

HOWEVER: This alignment is NOT definitional.
A modern author (ARC-T-MODERN) publishing a primary document
transcription is ERC-PRIMARY despite being temporally modern.

────────────────────────────────────────────────────────────
VIII. GOVERNANCE
────────────────────────────────────────────────────────────
This document is CANONICAL and supersedes any ambiguous
category references in earlier documents.

When in doubt, apply namespace prefixes explicitly.

────────────────────────────────────────────────────────────
END OF FILE — NAMESPACE–CLARIFICATION v1.0
