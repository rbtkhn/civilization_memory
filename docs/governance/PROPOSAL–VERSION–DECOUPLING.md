PROPOSAL–VERSION–DECOUPLING — v1.0
Civilizational Memory Codex · Structural Improvement Proposal
Decouple Content Versions from Governance Versions

Status: IMPLEMENTED · CMC 4.0
Author: System Analysis
Date: February 2026
Implemented: 2026-02-04

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
The current versioning system creates unsustainable coordination overhead.

CURRENT STATE:
• CIV–MEM–CORE declares v3.0
• CIV–SCHOLAR–TEMPLATE declares v3.0
• CIV–SCHOLAR–PROTOCOL declares v3.0
• CIV–MEM–TEMPLATE declares v3.0
• Each of 1,000+ MEM files declares its own version
• Each MEM file declares "Template Version Used: vX.X"
• Each MEM file declares "Governed by: CIV–MEM–CORE vX.X"
• Upgrade notes accumulate in every file

CONSEQUENCES:
• Batch upgrade scripts required when governance changes
• Rome has 203 files at v1.x/v2.x requiring upgrade
• Files become cluttered with upgrade notes
• Version compliance status ("20% COMPLIANT") adds noise
• New governance versions trigger mass file updates

EVIDENCE:
• tools/upgrade_russia_mems.py exists solely to batch-update version strings
• MEM headers contain 3-5 lines of version/governance declarations
• CIV–SCHOLAR–RUSSIA contains 100+ lines of upgrade notes

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Decouple governance versions from content versions.

A) GOVERNANCE LAYER — Single Version

Create a single governance version that applies to all files:

CMC GOVERNANCE VERSION: 3.0
• Encompasses: CIV–MEM–CORE, all templates, all protocols
• Declared once in VERSION–MANIFEST.md
• Not repeated in individual files

Files no longer declare:
• "Template Version Used: vX.X"
• "Governed by: CIV–MEM–CORE vX.X"
• "Compatibility: CMC vX.X"

B) CONTENT LAYER — Content-Only Versions

MEM files declare only content version:

Version: 2.0
Supersedes: v1.0
Last Substantive Edit: January 2026

Content version increments ONLY when:
• Analytical content changes
• Quotes added or modified
• Connections updated
• Structure revised

Content version does NOT increment for:
• Governance version bumps
• Header format changes
• Compliance status updates

C) COMPLIANCE REGISTRY — Centralized Tracking

Create a compliance registry (not per-file declarations):

docs/governance/COMPLIANCE–REGISTRY.md

Contains:
• List of all MEMs with compliance status
• Governance version each MEM was validated against
• Automated validation results

Example:
| MEM File | Content Version | Last Validated | Governance Version | Status |
|----------|-----------------|----------------|-------------------|--------|
| MEM–RUSSIA–PETER–GREAT | 3.0 | 2026-02 | CMC 3.0 | COMPLIANT |
| MEM–ROME–CAESAR | 1.6 | 2026-01 | CMC 2.0 | NEEDS_UPGRADE |

D) UPGRADE NOTES — Centralized Changelog

Remove upgrade notes from individual files.

Create:
• docs/governance/CHANGELOG.md (governance changes)
• Per-civilization changelogs if needed

────────────────────────────────────────────────────────────
III. MIGRATION PATH
────────────────────────────────────────────────────────────
PHASE 1 — Governance Consolidation
• Merge version declarations into VERSION–MANIFEST.md
• Declare "CMC Governance Version: 3.0"
• Create COMPLIANCE–REGISTRY.md

PHASE 2 — New File Standard
• New MEMs use simplified header (content version only)
• No governance declarations in file body

PHASE 3 — Existing File Cleanup (Optional, Low Priority)
• Remove redundant governance declarations from existing MEMs
• Preserve content versions
• Can be done incrementally or never

────────────────────────────────────────────────────────────
IV. NEW MEM HEADER FORMAT
────────────────────────────────────────────────────────────
BEFORE (current):
```
MEM–RUSSIA–PETER–GREAT — v3.0
Civilizational Memory Codex · Memory File
ACTIVE · CANONICAL · COMPLIANT (CIV–MEM–TEMPLATE v3.0)

Status: ACTIVE · CANONICAL
Version: 3.0
Supersedes: MEM–RUSSIA–PETER–GREAT v2.9
Upgrade Type: ALIGNMENT · v3.0
Civilization: RUSSIA
...
Template Version Used: CIV–MEM–TEMPLATE v3.0
Governed by: CIV–MEM–CORE v3.0
ARC Version Pinned: CIV–ARC–RUSSIA v3.1
```

AFTER (proposed):
```
MEM–RUSSIA–PETER–GREAT — v3.0
Civilizational Memory Codex · Memory File

Status: ACTIVE · CANONICAL
Version: 3.0
Civilization: RUSSIA
Subject: Peter the Great
Dates: 1672–1725 AD
Last Updated: February 2026
Word Count: ~4,200
```

SAVINGS: 6 lines per file × 1,000 files = 6,000 lines of redundant metadata removed

────────────────────────────────────────────────────────────
V. IMPACT ANALYSIS
────────────────────────────────────────────────────────────
BENEFITS:
• No more batch upgrade scripts for version bumps
• Cleaner MEM headers
• Single source of truth for governance version
• Compliance tracking centralized and queryable
• Reduced cognitive load when reading files

COSTS:
• One-time migration effort
• Centralized registry must be maintained
• Existing files may look inconsistent until cleaned

RISKS:
• Files created during transition may use mixed formats
• External tools may parse old header format

MITIGATION:
• Accept mixed formats during transition
• Update cmc-console parser to handle both formats

────────────────────────────────────────────────────────────
VI. IMPLEMENTATION STATUS
────────────────────────────────────────────────────────────
**STATUS: IMPLEMENTED** — 2026-02-04

Decision: ACCEPT (Option A)

IMPLEMENTATION ARTIFACTS:
• VERSION–MANIFEST.md v4.0 — Single CMC Governance Version declared
• COMPLIANCE–REGISTRY.md v1.0 — Centralized compliance tracking
• CHANGELOG.md v1.0 — Consolidated version history
• CIV–MEM–TEMPLATE — Updated with simplified header format
• CMC–BOOTSTRAP — Updated with version decoupling references
• cmc-version-upgrade-on-edit.mdc — Cursor rule updated
• EXAMPLE–MEM–CMC4–HEADER.md — Example file with new format

MIGRATION STATUS:
• Phase 1: COMPLETE — Governance consolidated
• Phase 2: COMPLETE — New file standard defined
• Phase 3: NOT REQUIRED — Existing files remain valid

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–VERSION–DECOUPLING v1.0 · IMPLEMENTED
────────────────────────────────────────────────────────────
