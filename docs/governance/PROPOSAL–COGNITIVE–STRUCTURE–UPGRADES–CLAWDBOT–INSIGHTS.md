# PROPOSAL — Cognitive Structure Upgrades (Clawdbot/Moltbot–Derived Insights)

**Status:** DRAFT — For critique by Claude 4.5 and Gemini  
**Scope:** Six architectural upgrades to CIV–MEM cognitive structure, derived from OpenClaw/Clawdbot/Moltbot design patterns  
**Governance:** CMC–BOOTSTRAP · CIV–SCHOLAR–PROTOCOL · LAYER–INTERACTION–PROTOCOL · OGE_ARCHITECTURE  
**Last Updated:** January 2026  
**Purpose:** Formalize and implement cognitive-structure improvements so that modes, MINDs, and MEM graph behave as one coherent system with explicit interfaces, skills, state, and maintenance triggers.

────────────────────────────────────────────────────────────
I. PURPOSE & SOURCE OF INSIGHT
────────────────────────────────────────────────────────────

**Purpose**

This proposal specifies six upgrades to the Civilizational Memory Codex (CIV–MEM) cognitive structure. The upgrades are derived from design patterns observed in **Clawdbot** (OpenClaw) and **Moltbot**—open-source, self-hosted personal AI assistants that use unified memory across multiple chat interfaces, composable skills/plugins, persistent persona, MCP (Model Context Protocol) for external services, and trigger-based or cron-style maintenance. The goal is to make CIV–MEM’s cognitive structure more explicit, testable, and maintainable without changing its substantive rules (MINDs, Blend Law, OGE, MEM CONNECTIONS).

**Source of insight**

- **Clawdbot / OpenClaw:** [clawdbot.com](https://clawdbot.com/), [docs.clawdbot.com](https://docs.clawdbot.com/). One persistent memory across WhatsApp, Telegram, Discord; MCP for Gmail, Calendar, Notion, etc.; skills/plugins; persona onboarding; background/cron tasks; CLI for agents, skills, plugins, memory.
- **Moltbot:** [molt.bot](https://www.molt.bot/), [docs.molt.bot](https://docs.molt.bot/). Same or closely related project; emphasis on local execution, privacy, unified memory across Telegram, WhatsApp, Discord, Slack, Signal, iMessage; install via `npx moltbot@latest`.

**Transfer principle**

The useful transfer is: **unified memory + composable skills + explicit persona/state + thin read/reason protocol + trigger-based maintenance + one core, many channels.** This proposal maps each of these to a concrete CIV–MEM upgrade.

────────────────────────────────────────────────────────────
II. CURRENT STATE (BEFORE UPGRADES)
────────────────────────────────────────────────────────────

**Existing cognitive components**

| Component | Role | Binding |
|-----------|------|--------|
| **MEM layer** | Evidence objects (MEM files); MEM CONNECTIONS; ARC-compliant sources | CIV–MEM–CORE, CIV–MEM–TEMPLATE |
| **SCHOLAR layer** | Pattern discovery; LEARN/WRITE/IMAGINE modes; no epistemic authority | CIV–SCHOLAR–PROTOCOL, CIV–SCHOLAR–TEMPLATE |
| **CORE layer** | Civilizational axioms; constraint binding | CIV–CORE–[CIV] |
| **MINDs** | Mercouris (primary), Mearsheimer, Barnes (catalyst); voice rules, Blend Law | CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER, CIV–MIND–BARNES; cmc-* rules |
| **OGE** | Option Generation Engine; 8 options A–H (LEARN/IMAGINE); POST–BARNES M/M response options | cmc-oge-enforcement, OGE_ARCHITECTURE |
| **Modes** | WRITE, LEARN, IMAGINE; AUDIT as function | cmc-mode-contracts, CMC–BOOTSTRAP |
| **INDEX** | Canonical registry of MEM files per civilization | CIV–INDEX–[CIV] |
| **ARC** | Academic Reference Canon; source eligibility, quotation hierarchy | CIV–ARC–[CIV] |

**Current gaps (what this proposal addresses)**

1. Modes are described but not formally defined as **interfaces** to one shared structure; mode creep and voice violations still occur.
2. MIND application and OGE generation are **procedural** (rules in prose) rather than **invokable skills** with inputs/outputs; orchestration is implicit.
3. **Cognitive state** (which MIND is active, whether Barnes has been invoked, which constraints apply) is not loadable/storable; resuming a tri-frame or a long session is implicit.
4. **Read layer** (MEM, ARC, INDEX, MEM CONNECTIONS) and **reasoning layer** (MINDs, OGE, Blend Law) are not separated by a thin protocol; audits and tests must know internal structure.
5. **Maintenance** (alignment audits, connection symmetry) is ad hoc; no triggers or schedule.
6. LEARN, WRITE, IMAGINE, AUDIT are not explicitly documented as **channels** of one core; new channels risk reimplementing logic.

────────────────────────────────────────────────────────────
III. UPGRADE 1 — ONE MEMORY, MANY INTERFACES
────────────────────────────────────────────────────────────

**One-sentence summary**  
LEARN, WRITE, IMAGINE, and AUDIT are different interfaces to the same MEM graph and MIND protocol, not separate systems.

**Rationale**

OpenClaw keeps one persistent memory whether the user talks via WhatsApp or Telegram. In CIV–MEM, the “memory” is the MEM graph (files + MEM CONNECTIONS + INDEX + ARC). The “interfaces” are the modes (LEARN, WRITE, IMAGINE) and the AUDIT function. Today, mode contracts describe what is permitted in each mode but do not state explicitly that **the same MEM graph and MIND protocol are read and applied in all of them**. Making this explicit reduces mode creep (e.g. applying WRITE rules in LEARN) and keeps voice/blend consistent across interfaces.

**Technical design**

1. **Canonical statement** (to be added to CMC–BOOTSTRAP and/or CIV–SCHOLAR–PROTOCOL):  
   “The MEM graph (MEM files, MEM CONNECTIONS, INDEX, ARC) and the MIND protocol (voice rules, Blend Law, OGE, tri-frame) are **invariant** across modes. WRITE, LEARN, IMAGINE, and AUDIT are **interfaces** to this structure: they differ only in the **contract** (what may be written, what must be returned, what triggers OGE).”

2. **Interface contract table** (new subsection or appendix):  
   For each of LEARN, WRITE, IMAGINE, AUDIT: (a) permitted operations on MEM graph (read only / read+write); (b) return type (analysis + OGE / MEM text / scenario + OGE / pass-fail + recommendations); (c) OGE requirements (8 options A–H + M+B / 1 Barnes min + POST–BARNES M/M when applicable); (d) voice (Mercouris prose / Mercouris spoken / etc.). No new behavior—only explicit tabulation of existing rules.

3. **No new files required** for Upgrade 1; only amendments to CMC–BOOTSTRAP and CIV–SCHOLAR–PROTOCOL (and optionally LAYER–INTERACTION–PROTOCOL if “interfaces” are considered part of the pipeline).

**Dependencies**  
None; can be implemented first.

**Risks**  
- Over-formalizing may make the docs harder to read; mitigation: keep the canonical statement short and put the table in an appendix or “Quick reference.”

**Implementation options**  
- **Minimal:** One new paragraph in CMC–BOOTSTRAP QUICK START: “Modes are interfaces to one structure; MEM graph and MIND protocol are shared.”  
- **Full:** New subsection “III. INTERFACES TO COGNITIVE STRUCTURE” in CIV–SCHOLAR–PROTOCOL with the contract table.

**Success criteria**  
A reviewer can answer: “What is the single structure that LEARN, WRITE, and IMAGINE share?” from the docs alone.

────────────────────────────────────────────────────────────
IV. UPGRADE 2 — FORMAL COGNITIVE SKILLS
────────────────────────────────────────────────────────────

**One-sentence summary**  
Treat “apply Mearsheimer lens,” “generate POST–BARNES OGE,” “traverse MEM CONNECTIONS,” and “apply Blend Law” as named, invokable skills so that modes are different orchestrations of the same skills.

**Rationale**

OpenClaw composes **skills/plugins** (discrete capabilities). In CIV–MEM, equivalent units are: apply a MIND (Mercouris primary, Mearsheimer, Barnes); generate OGE (with connection-derived, M+B, POST–BARNES options); traverse MEM CONNECTIONS (get links for a MEM, suggest gaps); apply Blend Law (GEO 2/3 Mearsheimer 1/3 Mercouris; Subject 2/3 Mercouris 1/3 Mearsheimer). Today these are described in rules and templates but not as **named skills with inputs and outputs**. Formalizing them makes orchestration explicit (e.g. WRITE = load MEM + Blend Law + OGE with at least one Barnes option) and makes tests (e.g. M–M cognitive interaction) “did the right skills run in the right order?”

**Technical design**

1. **Skill registry** (new doc or new section in OGE_ARCHITECTURE / CMC–BOOTSTRAP):  
   List each skill with:  
   - **Name** (e.g. `APPLY_MEARSHEIMER_LENS`, `GENERATE_OGE`, `TRAVERSE_MEM_CONNECTIONS`, `APPLY_BLEND_LAW`)  
   - **Inputs** (e.g. MEM id, current mode, “POST–BARNES” flag)  
   - **Outputs** (e.g. analysis text, option set, connection list)  
   - **Trigger conditions** (e.g. “when in LEARN and user asks for structural analysis”)  
   - **Binding** (which Cursor rule or template section invokes it)

2. **Orchestration description** (narrative or pseudocode):  
   For each mode, state which skills are invoked in what order. Example (LEARN): load MEM → optional APPLY_MEARSHEIMER_LENS or APPLY_BARNES if requested → GENERATE_OGE (include connection-derived, M+B; if POST–BARNES include M/M response options). No need to implement as executable code initially; the goal is to make the sequence explicit so that humans and future tooling can verify it.

3. **Location:** New file `docs/architecture/COGNITIVE_SKILLS_REGISTRY.md` or new section “Cognitive Skills” in OGE_ARCHITECTURE.md. CMC–BOOTSTRAP and cmc-* rules would reference the registry by skill name.

**Dependencies**  
Upgrade 1 (interfaces) helps clarify which skills apply in which interface; not strictly required.

**Risks**  
- Registry may drift from actual behavior if rules are updated without updating the registry; mitigation: version the registry and tie it to CMC–BOOTSTRAP / CIV–SCHOLAR–PROTOCOL version.  
- Over-granularity: too many skills make orchestration noisy; mitigation: start with 6–10 coarse-grained skills (e.g. APPLY_MIND, GENERATE_OGE, GET_MEM_CONNECTIONS, APPLY_BLEND_LAW, CHECK_MODE_CONTRACT).

**Implementation options**  
- **Minimal:** Add “Cognitive skills (informal)” subsection to OGE_ARCHITECTURE listing skill names and one-line descriptions; no formal I/O.  
- **Full:** New COGNITIVE_SKILLS_REGISTRY.md with I/O and trigger conditions; orchestration subsection in CIV–SCHOLAR–PROTOCOL for each mode.

**Success criteria**  
A reviewer can list the skills that must run for “LEARN on MEM–X with POST–BARNES” and check them against a run (e.g. M–M test report).

────────────────────────────────────────────────────────────
V. UPGRADE 3 — LOADABLE COGNITIVE PERSONA / STATE
────────────────────────────────────────────────────────────

**One-sentence summary**  
Make which MIND is active and which constraints apply loadable per session/task so that POST–BARNES and M/M responses trigger correctly and state can be resumed.

**Rationale**

OpenClaw has persistent **persona** and **memory** so the assistant stays consistent across sessions. In CIV–MEM, the “persona” is which MIND(s) are active and which constraints apply (e.g. “Mercouris primary; Mearsheimer available; Barnes not yet invoked” vs “POST–BARNES: Mercouris and Mearsheimer must respond to Barnes”). Today this state is implicit in the conversation; it is not stored or loaded. So: (a) returning to a MEM or a long chain of reasoning does not explicitly restore “we are in tri-frame, Barnes just spoke”; (b) POST–BARNES OGE and M/M response options depend on the model “remembering” that Barnes spoke—no durable state; (c) audits (e.g. “did the next OGE include M/M response options?”) must infer state from transcript. Making state **loadable and storable** (even in a minimal form) would allow “resume tri-frame from last Barnes interjection” and make compliance checks deterministic.

**Technical design**

1. **State schema (minimal):**  
   Define a small **cognitive state** object that can be serialized (e.g. JSON) and optionally stored (e.g. in a session file or in the first user message of a continuation). Fields proposed:  
   - `mode`: LEARN | WRITE | IMAGINE  
   - `primary_mind`: Mercouris (default for LEARN/WRITE)  
   - `minds_in_play`: list (e.g. [Mercouris, Mearsheimer] or [Mercouris, Mearsheimer, Barnes])  
   - `post_barnes`: boolean (true if Barnes has just been invoked and next OGE must include Mercouris responds to Barnes, Mearsheimer responds to Barnes)  
   - `last_mem_id`: optional (MEM under discussion)  
   - `constraint_set`: optional (e.g. “Blend Law GEO” or “Blend Law Subject”)

2. **State transitions:**  
   - When Barnes is invoked: set `post_barnes = true`.  
   - When OGE is generated and POST–BARNES was true: include M/M response options; then set `post_barnes = false`.  
   - When mode is switched: reset or update `mode`, `primary_mind`, `constraint_set` per mode contract.

3. **Load/store:**  
   - **Store:** At end of a turn (or at key points), output state as a comment or in a structured block (e.g. `<!-- COGNITIVE_STATE: {"mode":"LEARN","post_barnes":true,...} -->`) so that the next turn (or a continuation prompt) can load it.  
   - **Load:** If the user or the system includes state in the prompt (e.g. “Continuing from: COGNITIVE_STATE …”), the model applies it (e.g. “next OGE must include M/M response options”).  
   No requirement for a database or file system; state can live in the conversation or in a single “session” file that the user passes back.

4. **Documentation:**  
   Add “Cognitive state (optional)” to CIV–SCHOLAR–PROTOCOL or CMC–BOOTSTRAP: when state is used, what the fields mean, and how POST–BARNES transitions work. Cursor rules could reference “if post_barnes then next OGE must include …”.

**Dependencies**  
Upgrade 2 (skills) helps clarify when to set `post_barnes` (e.g. when APPLY_BARNES is run); not strictly required.

**Risks**  
- State could be wrong or stale; mitigation: state is advisory, not authoritative—rules still require POST–BARNES OGE by contract.  
- Proliferation of state fields; mitigation: keep schema minimal (5–7 fields).

**Implementation options**  
- **Minimal:** Document state schema and transitions in a governance doc; no formal load/store in tools.  
- **Full:** Define state schema in a small JSON Schema or similar; add “State block” to CIV–SCHOLAR–TEMPLATE (optional output); add one Cursor rule that says “if you output state, use this format; if you receive state, apply POST–BARNES when post_barnes is true.”

**Success criteria**  
A reviewer can simulate “Barnes just spoke; next turn” and determine from the docs what the next OGE must contain and how state would be updated.

────────────────────────────────────────────────────────────
VI. UPGRADE 4 — THIN PROTOCOL BETWEEN READ LAYER AND REASONING LAYER
────────────────────────────────────────────────────────────

**One-sentence summary**  
Separate a read layer (MEMs, ARC, INDEX, MEM CONNECTIONS) from a reasoning layer (MINDs, OGE, Blend Law) with a small protocol so that data and logic stay swappable and testable.

**Rationale**

OpenClaw uses **MCP** to talk to Gmail, Calendar, etc.; the assistant does not hard-code each service. In CIV–MEM, the “read” layer is: MEM content, MEM CONNECTIONS, INDEX, ARC. The “reasoning” layer is: MIND selection, Blend Law, OGE generation, mode contract enforcement. Today, reasoning logic often reaches directly into “read” (e.g. “load MEM X,” “get MEM CONNECTIONS for MEM X”) without a named protocol. Defining a **thin protocol** (a small set of named operations and return shapes) would: (a) make it clear what data reasoning can depend on; (b) allow audits and tests to mock or substitute the read layer; (c) keep reasoning stable if MEM format or INDEX structure evolves (as long as the protocol is satisfied).

**Technical design**

1. **Read-layer operations (protocol):**  
   Define a minimal set of operations that the reasoning layer can “call” (conceptually; implementation may be “read file” or “search repo”):  
   - `get_mem(mem_id)` → MEM content (and optionally metadata).  
   - `get_mem_connections(mem_id)` → list of linked MEM ids and link descriptions.  
   - `get_index_section(civ_id, section)` → list of MEM ids in that section (e.g. ECON).  
   - `get_arc_for_civ(civ_id)` → ARC source list (or “is author X in ARC?”).  
   - `search_mems(query)` → optional; list of MEM ids matching query (for discovery).  
   No new software required; the “protocol” is a **spec**: “reasoning shall only use data obtained via these operations (or their equivalents).”

2. **Reasoning layer:**  
   MIND application, OGE generation, Blend Law, and mode contracts use **only** data from the read-layer protocol (and user input). They do not define how MEMs are stored or how INDEX is structured; they only consume the return shapes.

3. **Documentation:**  
   New short doc `docs/architecture/READ_REASON_PROTOCOL.md` (or a section in LAYER–INTERACTION–PROTOCOL): (1) list of read-layer operations and return shapes; (2) statement that reasoning layer depends only on these; (3) note that current implementation is “read from repo files”; future implementations (e.g. a small API or MCP server that serves MEM/INDEX/ARC) could implement the same protocol.

**Dependencies**  
None; can be implemented in parallel with other upgrades.

**Risks**  
- Protocol may be too narrow (missing operations) or too broad (exposing internals); mitigation: start with the five operations above; extend only when a concrete need arises.

**Implementation options**  
- **Minimal:** One-page READ_REASON_PROTOCOL.md listing operations and return shapes; no code.  
- **Full:** Same doc plus a note in CIV–SCHOLAR–PROTOCOL that “Scholar reasoning SHALL use only read-layer protocol operations for MEM/INDEX/ARC data.”

**Success criteria**  
A reviewer can implement a mock read layer (e.g. return fixed MEM content for `get_mem`) and run an audit or test that only uses the protocol.

────────────────────────────────────────────────────────────
VII. UPGRADE 5 — TRIGGER-BASED COGNITIVE MAINTENANCE
────────────────────────────────────────────────────────────

**One-sentence summary**  
Run alignment/connection checks when MEMs or INDEX change so that conceptual and link consistency is maintained over time.

**Rationale**

OpenClaw can run **background/cron tasks**. In CIV–MEM, the analogue is **cognitive maintenance**: e.g. when a new MEM is added or MEM CONNECTIONS are edited, run a check (connection symmetry, conceptual alignment within a cluster). The banking MEM audit (AUDIT–ANGLIA–BANKING–MEMS–CONCEPTUAL–CULTURAL–LOGICAL) is an example; it was run once and recommendations were implemented. Making this **trigger-based** (or schedule-based) would make such audits repeatable and reduce drift (e.g. new MEMs added without back-links).

**Technical design**

1. **Trigger events:**  
   - `mem_created` (new MEM file added)  
   - `mem_updated` (MEM content or MEM CONNECTIONS section changed)  
   - `index_updated` (INDEX section or total count changed)  
   Triggers are **declarative** at first: “when one of these happens, the following maintenance checks are recommended.” No requirement for automated hooks (e.g. git hooks or CI); the doc specifies **what** to run and **when**.

2. **Maintenance checks (examples):**  
   - **Connection symmetry:** For MEM X, if X links to Y, does Y link back to X? (As in the banking MEM audit.)  
   - **Cluster alignment:** For a defined cluster (e.g. “ANGLIA banking MEMs”), run conceptual/cultural/logical alignment audit (same structure as AUDIT–ANGLIA–BANKING–MEMS).  
   - **INDEX parity:** After INDEX update, confirm total count and section order match governance rules.

3. **Output:**  
   Maintenance produces a **report** (e.g. markdown): pass/fail or list of recommendations; no automatic file edits (AUDIT function in LEARN does not modify MEMs). Implementers (human or tool) apply recommendations.

4. **Documentation:**  
   New doc `docs/governance/COGNITIVE_MAINTENANCE_PROTOCOL.md` (or section in CMC–BOOTSTRAP): trigger events, list of checks, how often (e.g. “after any MEM in cluster ECON is added or updated, run banking MEM alignment audit”) or “on demand.”

**Dependencies**  
Upgrade 4 (read/reason protocol) helps define what “MEM updated” means (e.g. MEM content or MEM CONNECTIONS); not strictly required.

**Risks**  
- Trigger fatigue if every small edit triggers a full audit; mitigation: restrict to “MEM created” or “MEM CONNECTIONS section changed” or “INDEX version bump.”  
- Maintenance may be skipped if not automated; mitigation: document triggers and checks clearly so that a human or a CI step can run them periodically.

**Implementation options**  
- **Minimal:** Add “Recommended maintenance” subsection to CMC–BOOTSTRAP: “When MEM in a defined cluster is added or updated, run the relevant cluster alignment audit (see AUDIT–ANGLIA–BANKING–MEMS as template).”  
- **Full:** New COGNITIVE_MAINTENANCE_PROTOCOL.md with trigger table, check list, and optional CI example (e.g. “on push to content/civilizations/ANGLIA/*.md, suggest running banking MEM audit”).

**Success criteria**  
A reviewer can determine from the docs what maintenance to run after adding a new ANGLIA ECON MEM and where to find the audit template.

────────────────────────────────────────────────────────────
VIII. UPGRADE 6 — ONE CORE, MANY CHANNELS
────────────────────────────────────────────────────────────

**One-sentence summary**  
Treat LEARN, WRITE, IMAGINE, and AUDIT as channels of one cognitive core (MEM graph + MIND protocol + OGE + MEM CONNECTIONS) so that new channels reuse the same structure.

**Rationale**

OpenClaw is **one assistant, many channels** (WhatsApp, Telegram, etc.). In CIV–MEM, the “core” is the shared structure (MEM graph, MIND protocol, OGE, MEM CONNECTIONS); the “channels” are LEARN, WRITE, IMAGINE, AUDIT. Documenting this explicitly ensures that **new channels** (e.g. a “compare two MEMs” mode or a “citation-check” mode) are designed as **new interfaces to the same core**, not as new ad hoc workflows. That reduces duplication and keeps compliance (voice, OGE, Blend Law) consistent.

**Technical design**

1. **Canonical statement:**  
   “The cognitive core of CIV–MEM is: (a) MEM graph (MEM files + MEM CONNECTIONS + INDEX + ARC); (b) MIND protocol (voice rules, Blend Law, tri-frame); (c) OGE (option types and triggers); (d) mode/interface contracts. LEARN, WRITE, IMAGINE, and AUDIT are **channels** of this core: each has a **channel contract** (inputs, outputs, permitted operations) but **no separate cognitive logic**.”

2. **Channel contract table:**  
   Same as Upgrade 1’s interface contract table; the word “channel” emphasizes that future channels (e.g. COMPARE, CITATION_CHECK) must: (i) use the same MEM graph and MIND protocol; (ii) define only their own contract (what they read, what they return, what they may write); (iii) not redefine voice, OGE, or Blend Law.

3. **Extension rule:**  
   “To add a new channel: (1) define the channel contract (inputs, outputs, read/write); (2) state which cognitive skills it invokes and in what order; (3) do not add new MINDs or new OGE option types without a separate governance change.”

4. **Documentation:**  
   Integrate into CIV–SCHOLAR–PROTOCOL or CMC–BOOTSTRAP: “One core, many channels” subsection and extension rule. Optionally add a “Channels” appendix listing LEARN, WRITE, IMAGINE, AUDIT and reserving space for future channels.

**Dependencies**  
Upgrade 1 (interfaces) is the same idea with different wording; Upgrade 6 makes the “extension” and “new channel” rules explicit. Implement Upgrade 1 and 6 together or merge into one subsection.

**Risks**  
- Over-constraining future channels; mitigation: extension rule only requires that new channels use the same core and define a contract—they can have new triggers or new return formats.

**Implementation options**  
- **Minimal:** Add “One core, many channels” paragraph and extension rule to CMC–BOOTSTRAP.  
- **Full:** New subsection in CIV–SCHOLAR–PROTOCOL “Channels of the cognitive core” with contract table and extension rule; reference from CMC–BOOTSTRAP.

**Success criteria**  
A reviewer can answer: “How would I add a new channel (e.g. COMPARE) without duplicating MIND/OGE logic?” from the docs alone.

────────────────────────────────────────────────────────────
IX. IMPLEMENTATION ORDER & PHASES
────────────────────────────────────────────────────────────

**Recommended order**

| Phase | Upgrades | Rationale |
|-------|----------|-----------|
| **1** | Upgrade 1 (interfaces), Upgrade 6 (channels) | Same conceptual move; can be one doc edit. Establishes “one structure, many interfaces/channels” before skills and state. |
| **2** | Upgrade 4 (read/reason protocol) | No dependency on others; clarifies data boundary for tests and future tooling. |
| **3** | Upgrade 2 (cognitive skills) | Builds on interfaces; makes orchestration explicit. |
| **4** | Upgrade 3 (loadable state) | Builds on skills (when to set post_barnes); optional but improves POST–BARNES compliance. |
| **5** | Upgrade 5 (maintenance triggers) | Uses read-layer and cluster definitions; can reference existing AUDIT template. |

**Deliverables per phase**

- **Phase 1:** CMC–BOOTSTRAP and/or CIV–SCHOLAR–PROTOCOL amended with “interfaces to one structure” and “one core, many channels” (and extension rule); optional interface/channel contract table.
- **Phase 2:** New READ_REASON_PROTOCOL.md (or section in LAYER–INTERACTION–PROTOCOL) with read-layer operations and return shapes.
- **Phase 3:** New COGNITIVE_SKILLS_REGISTRY.md (or section in OGE_ARCHITECTURE) with skill names, I/O, triggers; orchestration description per mode in CIV–SCHOLAR–PROTOCOL.
- **Phase 4:** Cognitive state schema and transitions in CIV–SCHOLAR–PROTOCOL or new short doc; optional state block in CIV–SCHOLAR–TEMPLATE; Cursor rule for POST–BARNES state.
- **Phase 5:** New COGNITIVE_MAINTENANCE_PROTOCOL.md with trigger events and check list; optional “recommended maintenance” in CMC–BOOTSTRAP.

────────────────────────────────────────────────────────────
X. SUCCESS CRITERIA (OVERALL)
────────────────────────────────────────────────────────────

1. **Interfaces:** From the docs, a reviewer can state what LEARN, WRITE, IMAGINE, and AUDIT share (MEM graph + MIND protocol) and how they differ (contract only).
2. **Skills:** From the docs, a reviewer can list the skills that run for a given mode and scenario (e.g. LEARN + POST–BARNES) and verify a run against that list.
3. **State:** From the docs, a reviewer can simulate “Barnes just spoke” and know what state to set and what the next OGE must contain.
4. **Read/reason:** From the docs, a reviewer can implement a mock read layer and run a test that depends only on the protocol.
5. **Maintenance:** From the docs, a reviewer can determine what to run after a MEM or INDEX change and where to find the audit template.
6. **Channels:** From the docs, a reviewer can describe how to add a new channel without duplicating core logic.

────────────────────────────────────────────────────────────
XI. CRITIQUE PROMPTS FOR CLAUDE 4.5 AND GEMINI
────────────────────────────────────────────────────────────

**For reviewers (Claude 4.5, Gemini):**

Please critique this proposal with the following in mind:

1. **Completeness:** Are there gaps in the six upgrades (e.g. missing skills, missing state fields, missing read-layer operations) that would block implementation or testing?

2. **Consistency:** Do any of the upgrades conflict with existing CIV–MEM governance (CIV–MEM–CORE, CIV–SCHOLAR–PROTOCOL, LAYER–INTERACTION–PROTOCOL, OGE_ARCHITECTURE, cmc-* rules)? Are there contradictions between “interfaces” and “channels” or between “skills” and current rule prose?

3. **Implementability:** Is the proposal implementable with the current repo (markdown docs, Cursor rules, no required new runtimes)? Where would you add the new text (exact file and section)?

4. **Risks:** What risks or failure modes do you see that the proposal does not mention? (e.g. state drift, registry drift, trigger fatigue, over-formalization.)

5. **Order:** Is the proposed implementation order (Phases 1–5) correct, or would you reorder or merge phases? Are there dependencies that are missing?

6. **Clawdbot/Moltbot transfer:** Is the transfer from “unified memory + composable skills + persona + MCP + cron + one assistant many channels” to CIV–MEM appropriate, or are there better mappings or missing mappings?

7. **Open questions:** What should be decided before implementation (e.g. where exactly to put the interface table, whether state is optional or mandatory, whether maintenance triggers are advisory or mandatory)?

────────────────────────────────────────────────────────────
XII. OPEN QUESTIONS & AREAS FOR CRITIQUE
────────────────────────────────────────────────────────────

- **State:** Should cognitive state be **optional** (recommended for long sessions / tri-frame) or **mandatory** (every turn must output state)? Proposal assumes optional.
- **Skills registry:** Should the registry be **normative** (reasoning must follow it) or **descriptive** (it documents current behavior)? Proposal assumes descriptive first, then normative if adopted.
- **Read/reason protocol:** Should the protocol be **formal** (e.g. OpenAPI or MCP-style spec) or **informal** (list of operations in prose)? Proposal assumes informal (prose + return shapes).
- **Maintenance:** Should triggers be **advisory** (“recommended when …”) or **mandatory** (“must run when …”)? Proposal assumes advisory.
- **Channels:** Should “AUDIT” be a first-class channel with a written contract, or remain a “function” invoked from LEARN? Proposal leaves AUDIT as function but includes it in the interface/channel list.
- **Versioning:** Should COGNITIVE_SKILLS_REGISTRY and READ_REASON_PROTOCOL be versioned (e.g. v1.0) and referenced by version from CMC–BOOTSTRAP?

────────────────────────────────────────────────────────────
END OF PROPOSAL — Cognitive Structure Upgrades (Clawdbot/Moltbot–Derived)
────────────────────────────────────────────────────────────
