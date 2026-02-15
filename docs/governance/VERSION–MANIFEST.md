VERSION–MANIFEST — v3.3
Civilizational Memory Codex · Canonical Version Registry
THREE-MODE ARCHITECTURE + INTEGRATION EDITION

Status: ACTIVE · CANONICAL
Class: MANIFEST
Last Updated: 2026-02-13
Supersedes: VERSION–MANIFEST v3.2
Purpose: Single source of truth for governance version

────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.3) — INTEGRATION PROGRAM ACTIVATION
────────────────────────────────────────────────────────────
This version activates the CMC 3.3 governance program that was re-scoped
from earlier 3.2 proposal tracks.

KEY CHANGES:
• Tiered Retrieval moved from proposal track to active governance program
• Living ARC moved from proposal track to active governance program
• MIND Navigation remains ACTIVE and is now part of 3.3 normative scope
• Current Events Protocol residuals integrated as a governed 3.3 program
  stream (with STATE retaining already-absorbed functions)
• ROADMAP–CMC–3.3 becomes active roadmap reference

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
│              CMC GOVERNANCE VERSION: 3.3                    │
│                                                             │
│  Effective: 2026-02-13                                      │
│  Supersedes: CMC 3.2                                        │
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
II. GOVERNANCE DOCUMENTS (ALL CMC 3.3)
────────────────────────────────────────────────────────────
These documents are governed by CMC 3.3.
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
• CIV–CEV–TEMPLATE

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
Classification and maintenance guidance for legacy patterns:
• docs/governance/LEGACY–HEADER–COMPATIBILITY.md

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
For recurring drift checks, see:
• docs/governance/CHECKLIST–QUARTERLY–GOVERNANCE–DRIFT.md
• tools/cmc-governance-checks.sh

MAJOR VERSIONS:
• CMC 3.4 (Planned): Optimization and refinement cycle
• CMC 3.3 (2026-02-13): Integration Program Activation (Tiered Retrieval, Living ARC, MIND Navigation, CEP residual integration)
• CMC 3.2 (2026-02-10): Three-Mode Architecture Edition (SCHOLAR/STATE/SYSTEM)
• CMC 3.1 (2026-02-04): Version Decoupling Edition
• CMC 3.0 (2026-02-02): Consolidation Edition
• CMC 2.x (2026-01): Development iterations
• CMC 1.x (2025): Initial architecture

CMC 3.3 ACTIVE PROGRAM REFERENCES:
• PROPOSAL–TIERED–RETRIEVAL.md (active program input)
• PROPOSAL–LIVING–ARC.md (active program input)
• PROTOCOL–MIND–NAVIGATION.md (ACTIVE)
• PROPOSAL–CURRENT–EVENTS–PROTOCOL.md (residual stream)
• ROADMAP–CMC–3.3.md

Note: PROPOSAL–CURRENT–EVENTS–PROTOCOL.md remains partially absorbed
by CIV–STATE; residual aspects are part of active 3.3 integration scope.

────────────────────────────────────────────────────────────
VI. QUICK BINDING DECLARATION
────────────────────────────────────────────────────────────
For session startup, declare:

"Bound by CMC Governance Version 3.3"

This single declaration replaces all previous multi-line bindings.

────────────────────────────────────────────────────────────
VII. COMPLIANCE RULES
────────────────────────────────────────────────────────────
1. New MEMs use simplified header format (Section III)
2. Existing MEMs with old headers remain valid
3. MIND profile references use "CMC 3.3" not individual versions
4. Compliance status tracked in COMPLIANCE–REGISTRY.md
5. Version changes logged in CHANGELOG.md

────────────────────────────────────────────────────────────
END OF FILE — VERSION–MANIFEST — v3.3
────────────────────────────────────────────────────────────
