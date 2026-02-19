# CIV–JOURNAL Protocol

Append-only, civilization-specific record of STATE and SCHOLAR activity. Provides a chronological stream for future AI analysis: how understanding of a civilization evolved, what decision points were considered, and what was learned over time.

## Purpose

- **Process record** — What we did and concluded, not just what we think now (STATE) or what we've learned (SCHOLAR)
- **Analysis feedstock** — Future models can ingest the journal to analyse evolution of understanding, decision patterns, and learning trajectory
- **Audit trail** — Civilization-specific complement to the cross-entity transfer log

## Location

`content/civilizations/[CIV]/CIV–JOURNAL–[CIV].md`

Example: `content/civilizations/GERMANY/CIV–JOURNAL–GERMANY.md`

## Schema (Entry Format)

Each entry is a markdown block with a header line and optional body:

```
### YYYY-MM-DD HH:MM · TYPE
Summary (1–3 sentences). Key findings, options, or references.
[Refs: STATE IV; SCHOLAR ENTRY 0015; MEM–GERMANY–WAR–FIRST–WORLD–WAR]
```

| Field | Required | Description |
|-------|----------|-------------|
| **date** | yes | YYYY-MM-DD |
| **time** | yes | HH:MM (24h) |
| **type** | yes | One of the standardized types below |
| **summary** | yes | 1–3 sentences; content depends on type |
| **refs** | no | Semicolon-separated pointers (STATE section, SCHOLAR ENTRY, MEM–ID) |

## Standardized Entry Types

| Type | When to use | Summary contains | Example |
|------|-------------|------------------|---------|
| **TRANSFER** | User approved relay; content written to SCHOLAR or STATE | What was transferred and to where | "ENTRY 0015 and RLL proposal for Doctrine 06 written to SCHOLAR." |
| **DECISION** | Decision points surfaced; material options and binding constraints discussed | Options, discriminating evidence, key constraint | "Three options: Attrition, Settlement, Reversal. Binding: Doctrine 06. Evidence: Geneva round outcome." |
| **PATTERN** | Pattern audit, stability watch, or doctrine check with substantive findings | Findings, stress indicators, doctrine/RLL status | "Pattern 6 stress; Hard Constraint 03 flagged. Stability: STRESSED." |
| **SIGNAL** | Signal check or probability assessment completed | Result, discriminating signals, timeframe | "Signal check: Geneva follow-up. Result: moderate. Signals: statement by [X], scheduling by [date]." |
| **LEARN** | SCHOLAR session produced synthesis, RLL proposal, or ENTRY | What was learned or proposed; key pattern or tension | "Synthesis: legitimacy through coercion; RLL candidate on succession risk." |
| **MEM** | MEM-generation candidate accepted or MEM created | Subject, key insight, connection | "MEM–GERMANY–WAR–FIRST–WORLD–WAR created; Schlieffen failure, Eastern vs Western theatre." |

Use **only** these types. If a session doesn't fit, it may not be journal-worthy (see Journal-Worthy vs Not).

## Manual Control (Gate)

**Nothing is recorded without explicit user approval.** The journal is not a transcript. Entries are added only when the user chooses to record.

- **Propose, don't auto-append:** At moments when an entry might be warranted, the system **proposes** a draft entry. The user may approve, edit, or skip.
- **No default recording:** Routine chat, option selections, exploratory back-and-forth — not recorded unless the user explicitly requests it.
- **User can add anytime:** The user may manually add an entry at any time (e.g. paste into the file). The schema applies; no system gate on user-initiated adds.

## When to Propose an Entry

The system may **propose** (not append) a journal entry in these situations. User approves, edits, or skips. **Trigger wiring:** cmc-oge-enforcement (Journal Proposal at H) and relay rules (TRANSFER).

| Situation | Proposed type | Proposed summary (1–3 sentences) |
|-----------|---------------|----------------------------------|
| **Transfer applied** | TRANSFER | What was transferred and to where. (Relay rules.) |
| **STATE session closure** (Option H / assessment closure) | DECISION, PATTERN, or SIGNAL | Choose the type that best fits the session; headline finding, options, or result — **only if** journal-worthy. (cmc-oge-enforcement § Journal Proposal at H.) |
| **SCHOLAR session closure** (Option H / synthesis) | LEARN or MEM | What was learned, proposed, or created — **only if** journal-worthy. (cmc-oge-enforcement § Journal Proposal at H.) |

## Journal-Worthy vs Not

**Journal-worthy** — Record these (use the corresponding type):

- Transfer applied → **TRANSFER**
- Decision points with material options and binding constraints → **DECISION**
- Pattern audit or stability watch with substantive findings → **PATTERN**
- Signal check or probability assessment with a clear result → **SIGNAL**
- SCHOLAR synthesis or RLL proposal that advances understanding → **LEARN**
- New ENTRY or MEM candidate accepted / MEM created → **LEARN** or **MEM**

**Not journal-worthy** — Do not propose; do not record:

- Routine "[entity] update" summaries with no new insight
- Option selections (A, B, C, etc.) that are exploratory
- General discussion, clarification, or back-and-forth
- Sessions that did not change understanding or surface material options
- Single-sentence replies or confirmations

## Proposal Flow

When proposing an entry, present:
- The draft in schema format (header + summary + optional refs)
- The question: "Add to CIV–JOURNAL–[ENTITY]? (Y / Edit / Skip)"
- If **Y**: append as written.
- If **Edit**: user provides revised text; append the revision.
- If **Skip**: do not append.

## Append Rules

1. **Append only** — Never delete or edit existing entries.
2. **Chronological** — Newest entries at the bottom of the file.
3. **One entry per event** — One block per transfer or notable session; do not batch multiple sessions.
4. **Concise summary** — 1–3 sentences. Enough for future analysis; not a transcript.

## File Structure (Template)

```
# CIV–JOURNAL–[CIV]

Append-only record of STATE and SCHOLAR activity for [Civilization]. See CIV–JOURNAL–PROTOCOL.md.

---

### YYYY-MM-DD HH:MM · TYPE
Summary.
[Refs: ...]

---
```

The `---` separator is optional between entries; the `###` header is the primary delimiter.

## Relation to Other Artifacts

| Artifact | Role |
|----------|------|
| CIV–STATE–[CIV] | Current decision-support state; material options, constraints |
| CIV–SCHOLAR–[CIV] | Learned patterns, RLLs, syntheses |
| logs/transfer.ndjson | Cross-entity relay audit log |
| **CIV–JOURNAL–[CIV]** | Per-civilization process stream; what we did and concluded over time |

## Reference

- TRANSFER-LOG.md (relay records)
- CIV–STATE–TEMPLATE (STATE activities)
- CIV–SCHOLAR–TEMPLATE (SCHOLAR activities)
- .cursor/rules/cmc-oge-enforcement.mdc (Journal Proposal at H — checklist and type selection)
