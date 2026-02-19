CIV–JOURNAL–TEMPLATE
Civilizational Memory Codex · Journal Template

Status: ACTIVE · CANONICAL · TEMPLATE
Governed by: CIV–JOURNAL–PROTOCOL
Last Update: February 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
This template defines the structure for CIV–JOURNAL–[CIV]: an append-only
chronicle of STATE and SCHOLAR activity for a civilization. The journal
preserves what was weighed, what was offered, and what was left unresolved—
for continuity when you return and for discovery when someone inherits the work.

Full specification: docs/governance/CIV–JOURNAL–PROTOCOL.md

────────────────────────────────────────────────────────────
II. LOCATION
────────────────────────────────────────────────────────────
content/civilizations/[CIV]/CIV–JOURNAL–[CIV].md

Example: content/civilizations/GERMANY/CIV–JOURNAL–GERMANY.md

────────────────────────────────────────────────────────────
III. FILE STRUCTURE
────────────────────────────────────────────────────────────
When creating a new journal, use the following structure. Replace [CIV]
with the civilization code (e.g. FRANCE, GERMANY, RUSSIA) and [Civilization]
with the full name (e.g. France, Germany, Russia).

```markdown
# CIV–JOURNAL–[CIV]

Append-only record of STATE and SCHOLAR activity for [Civilization]. See docs/governance/CIV–JOURNAL–PROTOCOL.md.

---

### YYYY-MM-DD HH:MM · TYPE
Summary. Observational, reportorial voice. What was offered, what was weighed, why it mattered.

---
```

Subsequent entries append below. Newest at bottom. Append only; never delete or edit.

────────────────────────────────────────────────────────────
IV. ENTRY SCHEMA
────────────────────────────────────────────────────────────
| Field   | Required | Format    | Description |
|---------|----------|-----------|-------------|
| date    | yes      | YYYY-MM-DD| Date of session |
| time    | yes      | HH:MM 24h | Time |
| type    | yes      | See below | One of: TRANSFER, DECISION, PATTERN, SIGNAL, LEARN, MEM |
| summary | yes      | 1–3 sent. | Observational prose; no file names or jargon |

────────────────────────────────────────────────────────────
V. ENTRY TYPES
────────────────────────────────────────────────────────────
| Type      | When to use |
|-----------|-------------|
| TRANSFER  | Content written to SCHOLAR or STATE after user approval |
| DECISION  | Decision points, material options, binding constraints |
| PATTERN   | Pattern audit, stability watch, doctrine check with findings |
| SIGNAL    | Signal check or probability assessment completed |
| LEARN     | Synthesis or proposal that advances understanding |
| MEM       | Memory created or candidate accepted |

────────────────────────────────────────────────────────────
VI. VOICE (from Protocol)
────────────────────────────────────────────────────────────
- **Observational, reportorial.** The session weighed… The analysis surfaced…
- **Dual focus.** What was under consideration + what the analysis offered.
- **Inner life.** What was at stake, what was tentative, where tension lay.
- **Calm, precise, literate.** No colloquialism, hype, or metaphor.
- **Preserve tension.** Do not resolve what the session left open.

Include: what was offered, what was weighed, what constrained, why it mattered.
Avoid: procedural summary without substance; surface-only description; jargon.

────────────────────────────────────────────────────────────
VII. APPEND RULES
────────────────────────────────────────────────────────────
1. Append only. Never delete or edit existing entries.
2. Chronological. Newest entries at the bottom.
3. One entry per event. One block per transfer or notable session.
4. Nothing recorded without explicit user approval. Propose; user approves, edits, or skips.

────────────────────────────────────────────────────────────
END OF TEMPLATE
────────────────────────────────────────────────────────────
