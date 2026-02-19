# PROTOCOL–MODE–INFERENCE

**Status:** ACTIVE · NORMATIVE  
**Governed by:** CMC 3.4  
**Last updated:** 2026-02-17  
**Binding location:** .cursor/rules/cmc-mode-contracts.mdc (Mode inference section)

---

## I. Purpose

When the user does not explicitly name a mode (SCHOLAR/WRITE/LEARN/IMAGINE, STATE, SYSTEM), the assistant infers the appropriate mode from the **task** so that behavior is consistent across sessions and the user does not need to say "system mode" or "write mode" every time.

---

## II. Rule

1. **Infer mode from request** when no mode is stated:
   - Requests that match **SYSTEM** permits (governance, templates, protocols, audits, compliance, cursor rules) → operate in SYSTEM.
   - Requests that match **STATE** permits (decision support, MEM-grounded current-events analysis, CIV–STATE updates) → operate in STATE (including MEM SCAN and CORE load when an entity is analyzed).
   - Requests that match **SCHOLAR** permits (MEM authoring, LEARN traversal, doctrine/RLL, historical synthesis, scenarios) → operate in SCHOLAR; sub-mode (WRITE/LEARN) inferred from action where possible. **Do not infer IMAGINE:** open-ended phrases like "imagine..." or "what if..." with no mode or entity specified are treated as general conversation, not SCHOLAR IMAGINE. IMAGINE is entered only when the user is already in SCHOLAR and explicitly invokes scenario/exploration (e.g. "imagine mode", "IMAGINE", or an option that leads to IMAGINE), or when the user explicitly requests IMAGINE with an entity.

2. **Explicit mode wins.** If the user names a mode ("write mode", "STATE", "system mode", "LEARN", etc.), that overrides inference.

---

## III. Examples (inference → mode)

| User request (paraphrased) | Inferred mode | Reason |
|----------------------------|---------------|--------|
| "Audit alignment of all governance and template files; do any need upgrade to v3.4?" | SYSTEM | Governance/template audit |
| "Add a cursor rule for X" | SYSTEM | Cursor rules edit |
| "Sync STATE to Scholar" | SYSTEM | Governance-defined procedure (sync protocol) |
| "Run relay to scholar" | STATE (then relay per protocol) | STATE-to-SCHOLAR transfer; user may be in STATE session |
| "Edit MEM–CHINA–WAR–FIRST–OPIUM; add path-dependence paragraph" | SCHOLAR WRITE | MEM edit |
| "Why did Ming end the treasure voyages?" | SCHOLAR LEARN | Historical exploration, MEM traversal |
| "What are the options for Taiwan from Beijing's perspective?" | STATE | Decision support, entity-focused |
| "Imagine someday the system is integrated into VR" / "What if we added X?" (no mode or entity) | General conversation | Do not infer IMAGINE; no 8-option menu. User may later say "scholar mode" or "imagine mode" to enter IMAGINE. |

---

## IV. Invocation phrases (one-shot entry points)

When the user's message **matches or is clearly equivalent** to one of the phrasings below, infer the corresponding **mode**, **entity** (for STATE), and **procedure** and run it in one go. This reduces friction: the user does not need to remember section numbers or activity names.

**Apply first before generic task→mode inference (Section II).** Explicit mode or entity in the user message still wins.

### STATE — entity + procedure

| User says (or equivalent) | Entity | Procedure / action |
|----------------------------|--------|---------------------|
| "[Entity] update" / "Update me on [entity]" (e.g. Iran update, Persia update, Russia update) | Named entity (e.g. Persia, Russia) | STATE; load CIV–STATE–[CIV], CORE, SCHOLAR; read Section IV (Material Options) and Section VII (Decision-Relevant History); present 8 options + activity menu + contextual recommendation ("Consider: …"). |
| "Run signal check" / "Signal check for Pattern [N]" / "[Event] signal check" (e.g. Geneva signal check, Pattern 6 signal check) | Entity from context or session (e.g. Persia for Geneva/Pattern 6) | STATE; activity = Signal Check (X-J). Locate pattern, run SEARCH → SCORE → INTERPRET → PROPOSE. |
| "30-day forecast" / "Probability assessment for Pattern [N]" / "[Event] forecast" (e.g. Pattern 6 forecast, Iran 30-day) | Entity from context or session | STATE; activity = Probability Assessment (X-K) for the pattern or event. |
| "STATE [entity]" / "Switch to [entity]" / "Focus on [entity]" (e.g. STATE Persia, Switch to Iran) | Named entity | STATE; re-anchor to entity; load CORE + STATE file; present 8 options + activity menu + contextual recommendation. |

### Entity name mapping (examples)

| User may say | STATE file entity (CIV) |
|--------------|-------------------------|
| Iran, Persia | PERSIA |
| Russia | RUSSIA |
| China | CHINA |
| France | FRANCE |
| Germany | GERMANY |
| (Other) | CIV–STATE–[CIV] if present |

### Equivalence

Treat as equivalent: slight wording changes ("Iran update" / "Update on Iran" / "What's the latest on Iran?"), optional words ("run" / "do" signal check), and event names that map to a known pattern (e.g. "Geneva" → Pattern 6 in STATE–PERSIA). When entity is ambiguous (e.g. "run signal check" with no entity), use session context or ask once.

---

## V. Maintenance

- The canonical short form of this protocol lives in **cmc-mode-contracts.mdc** (Mode inference section). Keep that section in sync with any change here.
- Invocation phrases (Section IV) are expanded as new entities or procedures become common; add rows when a recurring phrasing would reduce friction.
- New task types that clearly fit one mode's permit set should be handled by inference; ambiguous cases can be resolved by asking the user or defaulting to SCHOLAR LEARN.

---

**Reference:** CMC–BOOTSTRAP (mode list); cmc-mode-contracts.mdc; CIV–STATE–TEMPLATE; CIV–SCHOLAR–PROTOCOL
