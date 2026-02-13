PROTOCOL–PROVENANCE–SIGNING
Civilizational Memory Codex · Contribution Provenance Policy

Status: ACTIVE
Governed by: CMC 3.2
Last Updated: 2026-02-13

Purpose:
Define provenance expectations, signing requirements, and audit trace for
governance-relevant changes.

────────────────────────────────────────────────────────────
I. SCOPE
────────────────────────────────────────────────────────────
Applies to:
- Governance files (`docs/governance`, `.cursor/rules`, templates)
- Workflow and enforcement files (`.github/workflows`, validators)
- Release-significant content migrations

────────────────────────────────────────────────────────────
II. PROVENANCE REQUIREMENTS
────────────────────────────────────────────────────────────
Every qualifying PR must include:
- Origin statement (why this change exists)
- Impact statement (what behavior changes)
- Traceability reference (template/rule/protocol sections affected)

These are captured in PR body and commit messages.

────────────────────────────────────────────────────────────
III. SIGNING POLICY
────────────────────────────────────────────────────────────
Levels:
- Advisory: standard content edits
- Required: governance, workflow, enforcement tooling, or release-significant
  schema/policy updates

Core maintainers should use signed commits for required category changes.
If unsigned commits are merged in required categories, record exception in PR.

────────────────────────────────────────────────────────────
IV. EXCEPTION HANDLING
────────────────────────────────────────────────────────────
Permitted when:
- emergency fix required
- signing unavailable in contributor environment

Mandatory in exception:
- explicit "unsigned exception" note in PR
- maintainer acknowledgement
- follow-up action to restore normal signing path

────────────────────────────────────────────────────────────
V. MINIMUM AUDIT TRAIL
────────────────────────────────────────────────────────────
- PR includes Governance Checklist completion
- Commit message states intent/effect
- CHANGELOG updated for normative policy changes

────────────────────────────────────────────────────────────
END OF FILE — PROTOCOL–PROVENANCE–SIGNING
────────────────────────────────────────────────────────────
