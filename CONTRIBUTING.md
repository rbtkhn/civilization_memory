# Contributing to Civilization Memory Codex

Thanks for contributing to CMC. This repository is governance-heavy by design,
so contributions are reviewed for structural compliance first, then content.

## Quick Start

1. Create a branch from `main`.
2. Make focused changes with clear rationale.
3. Run local checks:
   - `tools/cmc-governance-checks.sh .`
   - `python3 tools/cmc-validate-corpus.py --changed-only`
4. Open a pull request using the PR template.

## Contribution Standards

- Preserve contradiction awareness; do not flatten tension into forced closure.
- Follow active templates and mode contracts.
- Keep MEM file structure compliant (including `MEM CONNECTIONS (MANDATORY)`).
- Do not remove historical evidence solely to improve narrative smoothness.
- Prefer additive edits over destructive rewrites.

## Doctrinal Eligibility Checklist (PR)

- [ ] File taxonomy and naming are compliant.
- [ ] Mandatory sections are present where required.
- [ ] Source references remain intact and attributable.
- [ ] Version/header/footer metadata stays internally consistent.
- [ ] Changes do not violate mode contracts or directionality rules.
- [ ] If STATE/SCHOLAR transfer semantics are touched, `relay to scholar`
      language and aliases are preserved.

## Governance Notes

- Sync is one-way into STATE.
- STATE to SCHOLAR transfer is through `relay to scholar` command family
  (legacy aliases accepted).
- Never assume doctrinal closure when contradiction is unresolved.

## Commit Hygiene

- Keep commits scoped to one logical change.
- Use descriptive messages focused on intent and effect.
- Signed commits are recommended for core maintainers.
