VERSION–MANIFEST — v4.0
Civilizational Memory Codex · Canonical Version Registry
VERSION DECOUPLING EDITION

Status: ACTIVE · CANONICAL
Class: MANIFEST
Last Updated: 2026-02-04
Supersedes: VERSION–MANIFEST v3.0
Purpose: Single source of truth for governance version

────────────────────────────────────────────────────────────
UPGRADE NOTE (v4.0) — VERSION DECOUPLING
────────────────────────────────────────────────────────────
This version implements PROPOSAL–VERSION–DECOUPLING.

KEY CHANGES:
• Single CMC Governance Version declared (CMC 4.0)
• MEM files no longer declare governance version in headers
• Compliance tracking centralized in COMPLIANCE–REGISTRY.md
• Version history moved to CHANGELOG.md
• Per-file "Template Version Used" declarations eliminated

MIGRATION:
• Existing files with old headers remain valid
• New files use simplified header format
• No batch upgrade required

────────────────────────────────────────────────────────────
I. CMC GOVERNANCE VERSION (SINGLE SOURCE OF TRUTH)
────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              CMC GOVERNANCE VERSION: 4.0                    │
│                                                             │
│  Effective: 2026-02-04                                      │
│  Supersedes: CMC 3.0                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

This version encompasses ALL governance documents:
• CIV–MEM–CORE
• CMC–BOOTSTRAP
• All templates (CIV–MEM–TEMPLATE, CIV–SCHOLAR–TEMPLATE, etc.)
• All protocols (CIV–SCHOLAR–PROTOCOL, etc.)
• All MIND profiles (CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER, CIV–MIND–BARNES)

Individual governance documents no longer declare separate versions.
The CMC Governance Version is the single binding reference.

────────────────────────────────────────────────────────────
II. GOVERNANCE DOCUMENTS (ALL CMC 4.0)
────────────────────────────────────────────────────────────
These documents are governed by CMC 4.0.
They do not declare individual versions.

CORE GOVERNANCE:
• CIV–MEM–CORE
• CMC–BOOTSTRAP
• VERSION–MANIFEST (this file)

MIND PROFILES:
• CIV–MIND–MERCOURIS (PRIMARY)
• CIV–MIND–MEARSHEIMER (ADVISORY)
• CIV–MIND–BARNES (TERTIARY CATALYST)
• CIV–MIND–TEMPLATE

TEMPLATES:
• CIV–MEM–TEMPLATE
• CIV–CORE–TEMPLATE
• CIV–INDEX–TEMPLATE
• CIV–SCHOLAR–TEMPLATE
• CIV–SCHOLAR–PROTOCOL
• CIV–DOCTRINE–TEMPLATE
• CIV–ARC–TEMPLATE
• CIV–ARC–LEDGER–TEMPLATE
• CIV–CEO–TEMPLATE

────────────────────────────────────────────────────────────
III. CONTENT VERSIONING (DECOUPLED)
────────────────────────────────────────────────────────────
MEM files and civilization-specific files declare CONTENT VERSION only.

Content version increments when:
• Analytical content changes
• Quotes added or modified
• Connections updated
• Structure revised

Content version does NOT increment for:
• Governance version bumps
• Header format changes
• Compliance status updates

SIMPLIFIED MEM HEADER FORMAT (CMC 4.0):
```
MEM–[CIV]–[SUBJECT] — v[X.Y]
Civilizational Memory Codex · Memory File

Status: ACTIVE · CANONICAL
Version: [X.Y]
Civilization: [CIVILIZATION]
Subject: [SUBJECT]
Dates: [DATE RANGE]
Last Updated: [Month Year]
Word Count: ~[N]
```

Note: Existing MEMs with old headers (Template Version Used, Governed by, etc.)
remain valid. No batch upgrade required.

────────────────────────────────────────────────────────────
IV. CIVILIZATION CONTENT STATUS
────────────────────────────────────────────────────────────
For detailed compliance status per civilization, see:
• docs/governance/COMPLIANCE–REGISTRY.md

SUMMARY (MEM counts):

| Civilization | MEMs | Phase | Status |
|--------------|------|-------|--------|
| RUSSIA | 194 | II | Active |
| ROME | 204 | II | Active |
| GERMANIA | 156 | II | Active |
| FRANCIA | 138 | II | Active |
| ANGLIA | 150 | I | Active |
| CHINA | 69 | I | Active |
| ISLAM | 53 | I | Active |
| PERSIA | 34 | I | Active |
| INDIA | 21 | I | Active |
| AFRICA | 0 | I | Placeholder |

────────────────────────────────────────────────────────────
V. VERSION HISTORY
────────────────────────────────────────────────────────────
For detailed changelog, see:
• docs/governance/CHANGELOG.md

MAJOR VERSIONS:
• CMC 4.0 (2026-02-04): Version Decoupling Edition
• CMC 3.0 (2026-02-02): Consolidation Edition
• CMC 2.x (2026-01): Development iterations
• CMC 1.x (2025): Initial architecture

────────────────────────────────────────────────────────────
VI. QUICK BINDING DECLARATION
────────────────────────────────────────────────────────────
For session startup, declare:

"Bound by CMC Governance Version 4.0"

This single declaration replaces all previous multi-line bindings.

────────────────────────────────────────────────────────────
VII. COMPLIANCE RULES
────────────────────────────────────────────────────────────
1. New MEMs use simplified header format (Section III)
2. Existing MEMs with old headers remain valid
3. MIND profile references use "CMC 4.0" not individual versions
4. Compliance status tracked in COMPLIANCE–REGISTRY.md
5. Version changes logged in CHANGELOG.md

────────────────────────────────────────────────────────────
END OF FILE — VERSION–MANIFEST — v4.0
────────────────────────────────────────────────────────────
