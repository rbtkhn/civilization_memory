## Summary

- What changed?
- Why this change now?
- What governance/rule/template sections are affected?

## Governance Checklist

- [ ] I ran `tools/cmc-governance-checks.sh .`
- [ ] I ran `python3 tools/cmc-validate-corpus.py --changed-only`
- [ ] I verified required sections for modified MEM files
- [ ] I verified header/footer version parity on modified MEM files
- [ ] I preserved contradiction-aware framing (no forced synthesis)
- [ ] I did not introduce mode-contract or directionality violations
- [ ] I included provenance notes for governance/workflow/tooling changes
- [ ] If signing is required for this change category, commits are signed
      or an explicit exception is documented

## Scope

- [ ] Governance docs/rules
- [ ] Templates
- [ ] Content (MEM/CORE/SCHOLAR/STATE/DOCTRINE)
- [ ] Tooling/scripts

## Notes for Reviewers

List any intentional deviations, migration assumptions, or backward-compatible
aliases preserved by this change.

## Triage Classification (Required)

- Category: [T1 Structural Drift | T2 Governance Conflict | T3 Evidence Integrity | T4 Behavioral Risk | N/A]
- Severity: [Minor | Material | Critical | N/A]
