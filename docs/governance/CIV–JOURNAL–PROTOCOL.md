# CIV–JOURNAL Protocol

Append-only, civilization-specific record of STATE and SCHOLAR activity. Provides a chronological stream for future AI analysis: how understanding of a civilization evolved, what decision points were considered, and what was learned over time.

## Purpose

- **Process record** — What we did and concluded, not just what we think now (STATE) or what we've learned (SCHOLAR)
- **Analysis feedstock** — Future models can ingest the journal to analyse evolution of understanding, decision patterns, and learning trajectory
- **Audit trail** — Civilization-specific complement to the cross-entity transfer log

## Court Historian Lens

The journal functions as **court historian for STATE-SCHOLAR**: it chronicles what the system considered, learned, and reasoned—for a specific audience and with a clear motivation.

**Audience:** You (the user directing the sessions) and whoever may open this file later—a collaborator, a successor, or a historian of the project.

**Motivation:** So that when you take up this civilization again, the journal reminds you what we learned and why it mattered; so that a later reader discovers not a log but a chronicle—the inner life of the analysis, what we weighed, what we saw, and why the work was done.

Write each entry with this audience and motivation in mind. Capture the drama of decision, the tension between perspectives, the surprise of a pattern that surfaced. The reader should feel they are **discovering** what STATE-SCHOLAR was thinking. Make each entry something a curious mind would want to read.

## Voice and Linguistic Conventions

Entries are written in an **observational, reportorial voice** for a reader who was not present. The record preserves what was weighed, what was offered, and what was left unresolved—so that a future reader can reconstruct the inner life of the session.

**Perspective and focus:**
- **Dual focus:** Report both (a) what was under consideration or decision and (b) what the analysis surfaced—options offered, constraints invoked, patterns or evidence that shaped the exchange. The entry reflects the interplay between deliberation and advice.
- **Inner life:** Include what was at stake, what was tentative, and where tension or surprise lay. Prefer verbs that expose consideration and weighing (considered, weighed, surfaced, constrained, deferred, left open) over verbs that only state outcomes (decided, completed).
- **Observational framing:** Prefer reportorial constructions (e.g. "The session weighed…"; "The analysis had surfaced…"; "France at last had its say…") so the reader experiences the entry as a record of what passed, not only as a participant's summary. First-person plural ("we") is permitted when it sharpens continuity or discovery; avoid it when an observational frame better serves the reader.

**Register and tone:**
- **Register:** Calm, precise, literate. No colloquialism, no hype, no fantasy or metaphor. The tone is that of a chronicle written for posterity.
- **Tense:** Past for what happened; present or future only where they clarify stakes or continuity (e.g. "When you return…"; "why it mattered").
- **Completeness:** Preserve unresolved tension where it existed. Do not resolve or summarize away what the session left open.

**What to include:**
- What was offered or surfaced (options, patterns, constraints, evidence).
- What was weighed or considered (by the session, the user, or the analysis).
- What constrained or deferred an outcome, if relevant.
- Why it mattered—stakes, contrast, or consequence—in one phrase or clause where possible.

**What to avoid:**
- Purely procedural summary ("We added X and updated Y") without the substance of what was learned or weighed.
- Surface-only description that omits what was at stake or what the analysis contributed.
- Explicit reference to fantasy, metaphor, or framing devices (e.g. spies, courts). The voice is specified by the conventions above; the reader need not be told the lens.

## Location

`content/civilizations/[CIV]/CIV–JOURNAL–[CIV].md`

Example: `content/civilizations/GERMANY/CIV–JOURNAL–GERMANY.md`

## Schema (Entry Format)

Each entry is a markdown block with a header line and body:

```
### YYYY-MM-DD HH:MM · TYPE
Summary (1–3 sentences). Engaging natural language.
```

| Field | Required | Description |
|-------|----------|-------------|
| **date** | yes | YYYY-MM-DD |
| **time** | yes | HH:MM (24h) |
| **type** | yes | One of the standardized types below |
| **summary** | yes | 1–3 sentences; engaging natural language; no file names or system jargon |

## Style (Required)

**Use engaging natural language.** Write for a human reader. Avoid:
- File names, IDs, or system labels (e.g. MEM–, CIV–, CONCEPT–, RLL–)
- Backend jargon (connector pair, paired encoding, transfer, relay, ingest)
- Naked references to internal artifacts

**Do use:** Plain English (or the working language), concrete subjects (Ottoman Empire, Holy Roman Empire, Richelieu, Napoleon), and the substance of what was done or learned. The entry should stand on its own as a readable record. Apply the observational voice and dual focus described in Voice and Linguistic Conventions above.

## Standardized Entry Types

| Type | When to use | Summary contains | Example |
|------|-------------|------------------|---------|
| **TRANSFER** | User approved relay; content written to SCHOLAR or STATE | What was transferred and to where | "Captured the succession-risk synthesis and proposed recurring pattern in the Scholar record." |
| **DECISION** | Decision points surfaced; material options and binding constraints discussed | Options, discriminating evidence, key constraint | "Three options on the table: Attrition, Settlement, Reversal. Geneva round outcome will be the tell. Doctrine 06 constrains." |
| **PATTERN** | Pattern audit, stability watch, or doctrine check with substantive findings | Findings, stress indicators | "Pattern 6 under stress. Third hard constraint flagged. Stability: STRESSED." |
| **SIGNAL** | Signal check or probability assessment completed | Result, discriminating signals, timeframe | "Geneva follow-up check: moderate likelihood. Watch for [X]'s statement and scheduling by [date]." |
| **LEARN** | SCHOLAR session produced synthesis or proposal | What was learned or proposed; key pattern or tension | "Synthesis: legitimacy through coercion. Proposed recurring pattern on succession risk." |
| **MEM** | Memory created or candidate accepted | Subject, key insight, connection | "Recorded the First World War encoding: Schlieffen failure, Eastern vs Western theatre." |

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
- The draft in schema format (header + summary; natural language, no jargon)
- The question: "Add to CIV–JOURNAL–[ENTITY]? (Y / Edit / Skip)"
- If **Y**: append as written.
- If **Edit**: user provides revised text; append the revision.
- If **Skip**: do not append.

## Append Rules

1. **Append only** — Never delete or edit existing entries.
2. **Chronological** — Newest entries at the bottom of the file.
3. **One entry per event** — One block per transfer or notable session; do not batch multiple sessions.
4. **Concise summary** — 1–3 sentences. Enough for future analysis; not a transcript.
5. **Natural language** — Engaging prose; no file names or backend jargon (see Style above).

## File Structure (Template)

```
# CIV–JOURNAL–[CIV]

Append-only record of STATE and SCHOLAR activity for [Civilization]. See CIV–JOURNAL–PROTOCOL.md.

---

### YYYY-MM-DD HH:MM · TYPE
Summary. Engaging natural language; no file names or jargon.

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
