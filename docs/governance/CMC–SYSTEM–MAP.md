CMC–SYSTEM–MAP
Civilizational Memory Codex · High-Level Architecture

Status: ACTIVE · CANONICAL
Governed by: CMC 3.5
Last Updated: February 2026

Purpose:
Single reference for how the system fits together: modes, file roles,
data flows, and gates. Use when you need to answer "where does X live?",
"who may write to Y?", or "how does information get from A to B?".
For detailed mode contracts and rules, see CMC–BOOTSTRAP and cursor rules.

────────────────────────────────────────────────────────────
I. MODES (ONE ACTIVE AT A TIME)
────────────────────────────────────────────────────────────

Three top-level modes: SCHOLAR | STATE | SYSTEM.

SCHOLAR — Learns from the past. Historical sources, MEMs, patterns.
  • Sub-modes: WRITE (create/edit MEMs), LEARN (analyse, no edits), IMAGINE (scenarios, pedagogy).
  • Reads: MEM graph, CORE, SCHOLAR file, (optionally) STATE for context.
  • Writes: MEM files (WRITE only); SCHOLAR file (LEARN: entries, syntheses); proposes doctrine (user gates).

STATE — Learns from the present. Current events, decision support.
  • Reads: MEM graph, CORE, SCHOLAR, DOCTRINE, ARC; re-reads SCHOLAR at analytical nodes.
  • Writes: CIV–STATE–[CIV] only. Does not write to MEM, SCHOLAR, CORE, or DOCTRINE except via relay.

SYSTEM — Works on the system. Governance, templates, audits.
  • Reads/writes: Governance files, templates, protocols, cursor rules.
  • Does not create or edit MEM content or STATE analytical output.

────────────────────────────────────────────────────────────
II. FILE ROLES (PER CIVILIZATION WHERE APPLICABLE)
────────────────────────────────────────────────────────────

| File type           | Role                          | Written by        | Read by              |
|---------------------|-------------------------------|-------------------|----------------------|
| MEM–[CIV]–*         | Civilizational memory (past)  | SCHOLAR (WRITE), entity‑locked: only MEM–[CIV]–* when entity = [CIV] | SCHOLAR, STATE       |
| CIV–INDEX–[CIV]     | Canonical registry of MEMs    | SYSTEM / human    | All (discovery)       |
| MEM–RELEVANCE–[CIV] | Dimension-based MEM lookup    | SYSTEM / human    | STATE, SCHOLAR       |
| CIV–CORE–[CIV]      | Axioms, constraints            | Human (governed)  | STATE, SCHOLAR       |
| CIV–SCHOLAR–[CIV]   | Learning ledger (RLLs, etc.)  | SCHOLAR (LEARN)   | STATE, SCHOLAR        |
| CIV–DOCTRINE–[CIV]  | Frozen syntheses, doctrines    | Human (from SCHOLAR proposals) | STATE, SCHOLAR |
| CIV–STATE–[CIV]     | Decision support, options      | STATE             | STATE                 |
| CIV–ARC–[CIV]       | Academic/source canon         | Human only        | SCHOLAR (WRITE), STATE |

ARC is one-directional: the system never adds sources to ARC; the user does. The system only reads ARC.

────────────────────────────────────────────────────────────
III. DATA FLOWS
────────────────────────────────────────────────────────────

Past → learning:
  MEMs + historical sources → SCHOLAR (LEARN) → SCHOLAR file (entries, syntheses, RLL proposals).
  SCHOLAR (LEARN) may propose doctrine → human approves → CIV–DOCTRINE updated.

Past → present (STATE’s historical grounding):
  MEMs + CORE + SCHOLAR + DOCTRINE → STATE (read at session start and at analytical nodes).
  STATE never writes back into these.

Keeping STATE aligned with learning (sync):
  Sync command (user-triggered): STATE file is updated from current CIV–CORE, CIV–SCHOLAR, CIV–DOCTRINE, MEM corpus. One-way only: sources → STATE.

Present → past (relay):
  Relay command (user-triggered): STATE session output → proposed SCHOLAR additions (ENTRY, synthesis, RLL, etc.) → user approves → CIV–SCHOLAR updated. This is the only path from STATE into SCHOLAR.

Doctrine loop (gated spiral):
  DOCTRINE shapes what SCHOLAR/STATE look for → analysis produces findings → findings may be proposed as doctrine changes → human gates every doctrine change → updated DOCTRINE shapes next cycle.

────────────────────────────────────────────────────────────
IV. GATES (HUMAN OR EXPLICIT COMMAND)
────────────────────────────────────────────────────────────

• Doctrine change: Proposed by system (SCHOLAR or STATE-derived); applied only after user approval.
• Relay: Information moves from STATE to SCHOLAR only when the user issues "relay to scholar" (or equivalent); procedure in CIV–STATE–TEMPLATE §XIV-B.
• Sync: STATE is updated from sources only when the user issues "sync state to scholar" (or equivalent).
• ARC: New sources are added by the user; the system may propose candidates but does not add them.
• MEM creation/edit: SCHOLAR WRITE produces or modifies MEMs; INDEX and MEM–RELEVANCE updates follow (SYSTEM or human).

────────────────────────────────────────────────────────────
V. WHERE TO GO NEXT
────────────────────────────────────────────────────────────

• Mode contracts, voice, options menu: CMC–BOOTSTRAP.md
• One-shot entry points (invocation phrases): PROTOCOL–MODE–INFERENCE.md Section IV; cmc-mode-contracts.mdc (Mode inference step 1)
• STATE sync/relay procedure: CIV–STATE–TEMPLATE Sections XII, XIV, XIV-B
• STATE procedures (Signal Check X-J, Probability Assessment X-K, prediction link, measurability/falsifiability): CIV–STATE–TEMPLATE X-J, X-K; contextual recommendation and selectable option: Section X-I; cursor rule: cmc-state-signal-check-measurability
• MEM grounding and discovery: cmc-state-mem-grounding (cursor rule); MEM–RELEVANCE–[CIV]
• Governance version and content versioning: VERSION–MANIFEST.md
• Reviewer/compliance orientation: REVIEWER–BOOTSTRAP–MAP.md
• Pre-output application (ARC, absence claims, doctrine proposals): CHECKLIST–PRE–OUTPUT–APPLICATION.md
• MEM generation candidates: CIV–SCHOLAR–TEMPLATE Section X.A; record in CIV–SCHOLAR–[CIV]; path to MEM via WRITE → INDEX

────────────────────────────────────────────────────────────
END OF FILE — CMC–SYSTEM–MAP
────────────────────────────────────────────────────────────
