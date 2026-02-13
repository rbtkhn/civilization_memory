## Summary

- What changed?
- Why this change now?

## Governance Checklist

- [ ] I ran `tools/cmc-governance-checks.sh .`
- [ ] I ran `python3 tools/cmc-validate-corpus.py --changed-only`
- [ ] I verified required sections for modified MEM files
- [ ] I verified header/footer version parity on modified MEM files
- [ ] I preserved contradiction-aware framing (no forced synthesis)
- [ ] I did not introduce mode-contract or directionality violations

## Scope

- [ ] Governance docs/rules
- [ ] Templates
- [ ] Content (MEM/CORE/SCHOLAR/STATE/DOCTRINE)
- [ ] Tooling/scripts

## Notes for Reviewers

List any intentional deviations, migration assumptions, or backward-compatible
aliases preserved by this change.
