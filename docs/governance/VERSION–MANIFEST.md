VERSION–MANIFEST — v3.2
Civilizational Memory Codex · Canonical Version Registry
THREE-MODE ARCHITECTURE EDITION

Status: ACTIVE · CANONICAL
Class: MANIFEST
Last Updated: 2026-02-10
Supersedes: VERSION–MANIFEST v3.1
Purpose: Single source of truth for governance version

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.2) — THREE-MODE ARCHITECTURE
────────────────────────────────────────────────────────────
This version formalizes the three-mode architecture and
supporting governance changes implemented in February 2026.

KEY CHANGES:
• Three top-level modes: SCHOLAR / STATE / SYSTEM
• CIV–STATE file type: present-oriented decision support
• SYSTEM mode: governance maintenance and auditing
• TERMINOLOGY–REGISTRY: load-bearing/decorative audit, new-term gate
• Decorative term replacements across governance files
• CIV–STATE–TEMPLATE added to template registry

PREVIOUS 3.2 PROPOSALS RE-SCOPED:
The proposals previously designated for CMC 3.2 (Current Events
Protocol, Tiered Retrieval, Living ARC, MIND Navigation) are
re-scoped to CMC 3.3. STATE partially absorbs the Current
Events Protocol concept.

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.1) — VERSION DECOUPLING
────────────────────────────────────────────────────────────
This version implements PROPOSAL–VERSION–DECOUPLING.

KEY CHANGES:
• Single CMC Governance Version declared (CMC 3.1)
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
│              CMC GOVERNANCE VERSION: 3.2                    │
│                                                             │
│  Effective: 2026-02-10                                      │
│  Supersedes: CMC 3.1                                        │
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
II. GOVERNANCE DOCUMENTS (ALL CMC 3.2)
────────────────────────────────────────────────────────────
These documents are governed by CMC 3.2.
They do not declare individual versions.

CORE GOVERNANCE:
• CIV–MEM–CORE (v3.2 — three-mode architecture)
• CMC–BOOTSTRAP
• VERSION–MANIFEST (this file)
• TERMINOLOGY–REGISTRY

MIND PROFILES:
• CIV–MIND–MERCOURIS (PRIMARY)
• CIV–MIND–MEARSHEIMER (ADVISORY)
• CIV–MIND–BARNES (LIABILITY/MECHANISM PERSPECTIVE)
• CIV–MIND–TEMPLATE

TEMPLATES:
• CIV–MEM–TEMPLATE
• CIV–CORE–TEMPLATE
• CIV–INDEX–TEMPLATE
• CIV–SCHOLAR–TEMPLATE
• CIV–SCHOLAR–PROTOCOL
• CIV–STATE–TEMPLATE
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

SIMPLIFIED MEM HEADER FORMAT (CMC 3.1+):
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
• CMC 3.3 (Pending): Tiered Retrieval, Living ARC, MIND Navigation (re-scoped from 3.2)
• CMC 3.2 (2026-02-10): Three-Mode Architecture Edition (SCHOLAR/STATE/SYSTEM)
• CMC 3.1 (2026-02-04): Version Decoupling Edition
• CMC 3.0 (2026-02-02): Consolidation Edition
• CMC 2.x (2026-01): Development iterations
• CMC 1.x (2025): Initial architecture

CMC 3.3 PROPOSALS (re-scoped from 3.2):
• PROPOSAL–TIERED–RETRIEVAL.md
• PROPOSAL–LIVING–ARC.md
• PROTOCOL–MIND–NAVIGATION.md (ACTIVE)
• ROADMAP–CMC–3.2.md (to be updated to 3.3)

Note: PROPOSAL–CURRENT–EVENTS–PROTOCOL.md is partially absorbed
by CIV–STATE; remaining aspects may be included in 3.3.

────────────────────────────────────────────────────────────
VI. QUICK BINDING DECLARATION
────────────────────────────────────────────────────────────
For session startup, declare:

"Bound by CMC Governance Version 3.2"

This single declaration replaces all previous multi-line bindings.

────────────────────────────────────────────────────────────
VII. COMPLIANCE RULES
────────────────────────────────────────────────────────────
1. New MEMs use simplified header format (Section III)
2. Existing MEMs with old headers remain valid
3. MIND profile references use "CMC 3.2" not individual versions
4. Compliance status tracked in COMPLIANCE–REGISTRY.md
5. Version changes logged in CHANGELOG.md

────────────────────────────────────────────────────────────
END OF FILE — VERSION–MANIFEST — v3.2
────────────────────────────────────────────────────────────
