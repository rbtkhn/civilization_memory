CIV–SCHOLAR–PRUNING–PROTOCOL — v1.0
Civilizational Strategy Codex · Scholar File Size Management
Governance Protocol for SCHOLAR File Pruning

Status: ACTIVE · CANONICAL
Version: 1.0
Scope: ALL CIVILIZATIONS
Class: GOVERNANCE–PROTOCOL
Compatibility: CIV–MEM–CORE v2.2+ · CIV–SCHOLAR–TEMPLATE v2.5
Last Update: January 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This protocol defines rules for reducing CIV–SCHOLAR file size
while maintaining audit integrity and epistemic continuity.

SCHOLAR files grow through:
• Learning entries (additive)
• Syntheses (additive)
• Doctrine mirrors (redundant after CIV–DOCTRINE exists)
• RLL bindings (essential, never pruned)

This protocol establishes triggers, methods, and constraints
for pruning non-essential content.

────────────────────────────────────────────────────────────
II. PRUNING TRIGGERS
────────────────────────────────────────────────────────────
Pruning MAY be initiated when:

1. FILE SIZE THRESHOLD
   • Lines > 1,500
   • Words > 7,000
   • Token estimate > 10,000

2. DOCTRINE MIRROR OVERHEAD
   • Doctrine count > 5
   • Doctrine mirror section > 200 lines

3. PHASE TRANSITION
   • On transition from Phase I → Phase II
   • On transition from Phase II → Phase III

Pruning is OPTIONAL, not mandatory.

────────────────────────────────────────────────────────────
III. PRUNABLE CONTENT
────────────────────────────────────────────────────────────
The following MAY be pruned:

A. DOCTRINE MIRRORS
   • When CIV–DOCTRINE–[CIV] exists as single source of truth
   • Replace with external reference pointer
   • Retain doctrine summary list (names + synthesis references)

B. DOCTRINE-PROMOTED SYNTHESES
   • Syntheses that became doctrines
   • Archive to SCHOLAR–ARCHIVE before removal
   • Replace with stub referencing archive location

C. PHASE I ENTRIES (in Phase II+ file)
   • Entries already archived in SCHOLAR–ARCHIVE
   • Replace with stub referencing archive location
   • Maintain entry numbering continuity

D. FROZEN SYNTHESES (when count > 20)
   • Archive older frozen syntheses
   • Replace with stub referencing archive location

────────────────────────────────────────────────────────────
IV. NON-PRUNABLE CONTENT (MANDATORY RETENTION)
────────────────────────────────────────────────────────────
The following MUST NOT be pruned:

• BOUND RLLs — Governance binding requires presence
• UNFROZEN Syntheses — Active learning, cannot archive
• Phase Transition Notes — Audit trail required
• Cross-Civilization References — Connectivity metadata
• Heuristics — Active analytical tools
• Current Status Section — Operational state

────────────────────────────────────────────────────────────
V. DOCTRINE MIRROR EXTERNALIZATION
────────────────────────────────────────────────────────────
When externalizing doctrine mirrors:

BEFORE (Verbatim Mirror):
```
V. DOCTRINE REGISTRY
────────────────────────────────────────────────────────────
[Full doctrine definitions for each doctrine]
[~30 lines per doctrine × N doctrines]
```

AFTER (External Reference):
```
V. DOCTRINE REGISTRY (EXTERNAL REFERENCE)
────────────────────────────────────────────────────────────
PRUNING NOTE (vX.Y):
Verbatim doctrine mirroring deprecated per CIV–SCHOLAR–PRUNING–PROTOCOL v1.0.
CIV–DOCTRINE–[CIV] is the single source of truth for all doctrine definitions.

DOCTRINE REFERENCE:
→ CIV–DOCTRINE–[CIV] vX.Y (N doctrines)
→ Location: content/civilizations/[CIV]/CIV–DOCTRINE–[CIV].md

DOCTRINE SUMMARY (Reference Only):
01. [NAME] (SYNTHESIS XXXX)
02. [NAME] (SYNTHESIS XXXX)
...

For full doctrine definitions, consult CIV–DOCTRINE–[CIV] directly.
```

────────────────────────────────────────────────────────────
VI. STUB PATTERN
────────────────────────────────────────────────────────────
When archiving entries or syntheses, replace with stub:

ENTRY STUB:
```
ENTRY XXXX [ARCHIVED]
Status: ARCHIVED → CIV–SCHOLAR–[CIV]–ARCHIVE vX.Y (ARCHIVE ENTRY XXXX)
Original: CIV–SCHOLAR–[CIV] vX.Y
```

SYNTHESIS STUB:
```
SYNTHESIS XXXX [ARCHIVED]
Status: ARCHIVED → CIV–SCHOLAR–[CIV]–ARCHIVE vX.Y (ARCHIVE ENTRY XXXX)
Original: CIV–SCHOLAR–[CIV] vX.Y
Doctrine: [If promoted] → CIV–DOCTRINE–[CIV] vX.Y (DOCTRINE XX)
```

Stubs maintain numbering continuity while reducing file size.

────────────────────────────────────────────────────────────
VII. GOVERNANCE IMPLICATIONS
────────────────────────────────────────────────────────────
A. CIV–MEM–CORE ALIGNMENT
   • Section XVII (Doctrine Mirroring) permits external reference
   • Single-source-of-truth principle supports externalization
   • Pruning does not remove doctrine authority

B. VERSION INCREMENT
   • Pruning requires MINOR version increment (vX.Y → vX.Y+1)
   • Upgrade note must document pruning scope

C. AUDIT TRAIL
   • All pruned content must be archived before removal
   • Archive references must be explicit in stubs
   • No content loss permitted

────────────────────────────────────────────────────────────
VIII. FIRST APPLICATION
────────────────────────────────────────────────────────────
First application: CIV–SCHOLAR–ROME v2.4 (January 2026)

Scope:
• Doctrine mirror externalized (12 doctrines)
• ~310 lines removed (~17% reduction)
• 1,681 → 1,390 lines

Result:
• File size within sustainable range
• All learning preserved
• Audit trail maintained

────────────────────────────────────────────────────────────
END OF FILE — CIV–SCHOLAR–PRUNING–PROTOCOL v1.0
────────────────────────────────────────────────────────────
