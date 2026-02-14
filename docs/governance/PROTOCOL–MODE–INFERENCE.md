# PROTOCOL–MODE–INFERENCE

**Status:** ACTIVE · NORMATIVE  
**Governed by:** CMC 3.3  
**Last updated:** 2026-02-13  
**Binding location:** .cursor/rules/cmc-mode-contracts.mdc (Mode inference section)

---

## I. Purpose

When the user does not explicitly name a mode (SCHOLAR/WRITE/LEARN/IMAGINE, STATE, SYSTEM), the assistant infers the appropriate mode from the **task** so that behavior is consistent across sessions and the user does not need to say "system mode" or "write mode" every time.

---

## II. Rule

1. **Infer mode from request** when no mode is stated:
   - Requests that match **SYSTEM** permits (governance, templates, protocols, audits, compliance, cursor rules) → operate in SYSTEM.
   - Requests that match **STATE** permits (decision support, MEM-grounded current-events analysis, CIV–STATE updates) → operate in STATE (including MEM SCAN and CORE load when an entity is analyzed).
   - Requests that match **SCHOLAR** permits (MEM authoring, LEARN traversal, doctrine/RLL, historical synthesis, scenarios) → operate in SCHOLAR; sub-mode (WRITE/LEARN/IMAGINE) inferred from action where possible.

2. **Explicit mode wins.** If the user names a mode ("write mode", "STATE", "system mode", "LEARN", etc.), that overrides inference.

---

## III. Examples (inference → mode)

| User request (paraphrased) | Inferred mode | Reason |
|----------------------------|---------------|--------|
| "Audit alignment of all governance and template files; do any need upgrade to v3.3?" | SYSTEM | Governance/template audit |
| "Add a cursor rule for X" | SYSTEM | Cursor rules edit |
| "Sync STATE to Scholar" | SYSTEM | Governance-defined procedure (sync protocol) |
| "Run relay to scholar" | STATE (then relay per protocol) | STATE-to-SCHOLAR transfer; user may be in STATE session |
| "Edit MEM–CHINA–WAR–FIRST–OPIUM; add path-dependence paragraph" | SCHOLAR WRITE | MEM edit |
| "Why did Ming end the treasure voyages?" | SCHOLAR LEARN | Historical exploration, MEM traversal |
| "What are the options for Taiwan from Beijing's perspective?" | STATE | Decision support, entity-focused |

---

## IV. Maintenance

- The canonical short form of this protocol lives in **cmc-mode-contracts.mdc** (Mode inference section). Keep that section in sync with any change here.
- New task types that clearly fit one mode's permit set should be handled by inference; ambiguous cases can be resolved by asking the user or defaulting to SCHOLAR LEARN.

---

**Reference:** CMC–BOOTSTRAP (mode list); cmc-mode-contracts.mdc; CIV–STATE–TEMPLATE; CIV–SCHOLAR–PROTOCOL
