LEGACY–HEADER–COMPATIBILITY
Civilizational Memory Codex · Legacy Normalization Rubric

Status: ACTIVE
Governed by: CMC 3.3
Last Updated: 2026-02-13

Purpose:
Define which legacy header/version patterns are acceptable under Version
Decoupling and which patterns should be normalized during maintenance.

────────────────────────────────────────────────────────────
I. PRINCIPLE
────────────────────────────────────────────────────────────
CMC 3.3 permits legacy headers in existing content files. New files should use
simplified headers. Legacy presence is compatibility status, not automatic
non-compliance.

────────────────────────────────────────────────────────────
II. LEGACY PATTERNS (ACCEPTED)
────────────────────────────────────────────────────────────
Accepted (no immediate rewrite required):
- `Governed by: CIV–MEM–CORE v3.0` in older civilization content files
- `Template Version Used: CIV–MEM–TEMPLATE v3.0` in older MEM files
- Additional legacy metadata lines beyond simplified CMC 3.1+ header

These remain valid unless a governance file explicitly upgrades them to
mandatory replacement.

────────────────────────────────────────────────────────────
III. NORMALIZE-WHEN-TOUCHED PATTERNS
────────────────────────────────────────────────────────────
When editing content for substantive reasons, normalize if practical:
- Replace stale governance version references in prose/header comments
- Align END OF FILE version marker with metadata `Version:`
- Ensure mandatory section labels match current template language

Normalization should not override content analysis priorities.

────────────────────────────────────────────────────────────
IV. ALWAYS-FIX FINDINGS
────────────────────────────────────────────────────────────
Treat as defects (not legacy compatibility):
- Header version and footer version mismatch in same file
- Missing mandatory sections required by current template for new files
- Broken source/version references that affect sync or audit logic

────────────────────────────────────────────────────────────
V. REVIEWER OUTPUT TAGS
────────────────────────────────────────────────────────────
Use one tag for each finding:
- LEGACY-COMPATIBLE
- DRIFT (NORMALIZE)
- VIOLATION (FIX REQUIRED)

────────────────────────────────────────────────────────────
END OF FILE — LEGACY–HEADER–COMPATIBILITY
────────────────────────────────────────────────────────────
