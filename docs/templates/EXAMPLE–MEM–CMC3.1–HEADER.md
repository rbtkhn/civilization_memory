MEM–EXAMPLE–SIMPLIFIED–HEADER — v1.0
Civilizational Memory Codex · Memory File

Status: ACTIVE · CANONICAL
Version: 1.0
Civilization: EXAMPLE
Subject: Simplified Header Format
Dates: 2026 AD
Last Updated: February 2026
Word Count: ~500

────────────────────────────────────────────────────────────
EXAMPLE: CMC 3.1 SIMPLIFIED HEADER
────────────────────────────────────────────────────────────
This file demonstrates the simplified MEM header format under
CMC 3.1 Version Decoupling.

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This example shows the new simplified header format that removes
governance declarations from individual MEM files.

REMOVED FROM HEADER (now centralized):
• Template Version Used (tracked in COMPLIANCE–REGISTRY)
• Governed by (all files governed by CMC 3.1)
• Supersedes (tracked in content version)
• Upgrade Type (tracked in CHANGELOG)
• Compatibility (all governed by CMC 3.1)

RETAINED IN HEADER:
• Version (content version only)
• Status
• Civilization
• Subject
• Dates
• Last Updated
• Word Count

────────────────────────────────────────────────────────────
II. BENEFITS
────────────────────────────────────────────────────────────
The simplified header format provides:

1. REDUCED HEADER CLUTTER
   - ~6 fewer lines per MEM file
   - Easier to read and maintain

2. NO BATCH UPGRADES
   - Governance changes don't require touching content files
   - CMC 4.1 → 4.2 doesn't touch any MEMs

3. CONTENT VERSION CLARITY
   - Version tracks content changes only
   - v1.0 → v1.1 means content changed
   - No confusion about governance alignment

4. CENTRALIZED COMPLIANCE
   - Compliance tracked in COMPLIANCE–REGISTRY.md
   - Queryable and auditable
   - One place to check all files

────────────────────────────────────────────────────────────
III. MIGRATION
────────────────────────────────────────────────────────────
No migration required for existing files.

EXISTING FILES:
- Legacy headers remain valid
- No batch upgrade necessary
- Content version increments normally

NEW FILES:
- Use simplified header format
- Start at v1.0

────────────────────────────────────────────────────────────
IV. MEM CONNECTIONS
────────────────────────────────────────────────────────────
This is an example file demonstrating header format only.
No structural dependencies.

────────────────────────────────────────────────────────────
V. MEM BIBLIOGRAPHY
────────────────────────────────────────────────────────────
• PROPOSAL–VERSION–DECOUPLING.md (2026)
• VERSION–MANIFEST.md v4.0 (2026)
• CHANGELOG.md (2026)

────────────────────────────────────────────────────────────
VI. MEM INGEST BOOTSTRAP (MANDATORY)
────────────────────────────────────────────────────────────
If ingested without context:

"MEM–EXAMPLE–SIMPLIFIED–HEADER active. This MEM demonstrates
the CMC 3.1 simplified header format for MEM files."

EXPLORATION OPTIONS:
A) Read VERSION–MANIFEST for governance details
B) Read COMPLIANCE–REGISTRY for compliance tracking
C) Read CHANGELOG for version history
D) Read CIV–MEM–TEMPLATE for full MEM requirements
E) Compare with legacy header format
F) Apply format to new MEM creation
G) Review migration guidance
H) Recap: CMC 3.1 decouples content from governance versions

────────────────────────────────────────────────────────────
END OF FILE — MEM–EXAMPLE–SIMPLIFIED–HEADER v1.0
────────────────────────────────────────────────────────────
