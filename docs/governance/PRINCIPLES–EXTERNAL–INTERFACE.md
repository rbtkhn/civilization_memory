# Principles: External-Facing Output and Simplified Interface

Civilizational Memory Codex · Governance  
Governed by: CMC 3.5  
Last Update: February 2026

────────────────────────────────────────────────────────────
1. PURPOSE
────────────────────────────────────────────────────────────
This document states design principles for **output that is consumed by audiences who do not operate the system** (e.g. reports, dashboards, teaching materials, simplified UIs). It does not change internal behaviour; it clarifies vocabulary, user-facing argument rules, minimal navigation, and tiered exposure so they can be applied consistently.

Reference: High-school-teacher integration scenario (February 2026); STATE mode external register; cmc-state-mem-grounding; cmc-negative-claim-check.

────────────────────────────────────────────────────────────
2. CONTENT-BASED PERSPECTIVE NAMES (REQUIRED)
────────────────────────────────────────────────────────────
When the audience is not the system operator, **name the three analytical perspectives only by content**, not by MIND profile names or internal labels.

| Use (external-facing)                    | Do not use (internal)   |
|-----------------------------------------|-------------------------|
| Legitimacy and institutional continuity | Mercouris, MIND A        |
| Power distribution and structural constraint | Mearsheimer, MIND B |
| Leadership liability and mechanism      | Barnes, MIND C           |

Do not expose in external output: MIND, OGE, relay, traversal, sync, options menu slot letters (A–H), doctrine numbers, or other system-internal vocabulary unless the document is explicitly for operators.

STATE mode already follows this (CIV–STATE–TEMPLATE; professional register, no MIND names). This principle extends to any report, simplified UI, or teaching material derived from the system.

────────────────────────────────────────────────────────────
3. USER-FACING ARGUMENT PRINCIPLES
────────────────────────────────────────────────────────────
Two rules that the system enforces internally should be stated explicitly for users who argue or write with system support (e.g. analysts, teachers, students using system-mediated materials).

**3.1 Grounded parallel**  
When making a historical comparison or precedent claim, cite at least one **grounded parallel**: name the event, date, and mechanism (or key actor). A parallel is grounded when the reader can see specifics drawn from a source (e.g. "In 1917 the army held through 1916 and broke in February with the mutinies" with mechanism and date). A parallel that is only a label (e.g. "the 1917 morale collapse") without such detail is ungrounded.

Internal correlate: cmc-state-mem-grounding (MEM-grounded parallel required at analytical nodes); CIV–STATE–TEMPLATE three-source composition.

**3.2 Counter-check before absence claims**  
Before asserting that a civilisation (or entity) **lacks** a quality, tradition, or pattern ("X has no Y"), search for counter-evidence and report what you find. If counter-evidence exists, do not assert absence; reformulate (e.g. "X contains the category but has not sustained it," or "present in period Z but not as a dominant tradition").

Internal correlate: cmc-negative-claim-check.

These may be presented to end-users as "principles of use" or "argument norms" without referencing internal rule names.

────────────────────────────────────────────────────────────
4. MINIMAL NAVIGATION SET
────────────────────────────────────────────────────────────
The **minimal meaningful set** for discovery and navigation, when building a reduced or simplified interface, is:

- **Three perspectives** (content-based names per §2)
- **Three moves:** earlier (temporal back), later (temporal forward), parallel (cross-civilisation or cross-entity)
- **Synthesis / closure** (wrap-up, consolidation)

This corresponds to options A/B/C (perspectives), E/F/G (traversal), and H (synthesis) in the full 8-slot menu. A simplified UI may expose only these plus synthesis, without the full options menu or multi-mind (D). Full system retains all 8 slots and internal semantics.

────────────────────────────────────────────────────────────
5. TIERED EXPOSURE (DESIGN PATTERN)
────────────────────────────────────────────────────────────
The system can be described as having two tiers of exposure:

| Tier            | Who                    | Content-based names only? | Full options / MIND names | Doctrines, RLLs | Jargon (relay, traversal, etc.) |
|-----------------|------------------------|---------------------------|---------------------------|-----------------|----------------------------------|
| **Full operator** | Human operating CMC   | No (internal use OK)     | Yes                       | Yes             | Yes                              |
| **External / minimal** | End-users, reports, teaching | Yes (§2)            | No                        | No (or mediated) | No                               |

- **Full operator:** All modes (SCHOLAR, STATE, SYSTEM), MIND names in options and voice, doctrines, RLLs, relay to state / relay to scholar, full 8-slot menu.
- **External / minimal:** Output uses content-based perspective names; optional reduced option set (§4); no internal jargon; doctrines/RLLs may shape content but are not named unless the audience is operator-level.

New features (e.g. reports, dashboards, "simple" mode) should respect this boundary so that external-facing output remains consistent and comprehensible without system training.

────────────────────────────────────────────────────────────
6. PUBLIC HTML / READER'S EDITION (DESIGN GOAL)
────────────────────────────────────────────────────────────
**Goal:** Transform each MEM file into a superb HTML page that broad readership can enjoy — one story, one URL, with clear narrative, evidence, and "what to read next."

**Source of truth:** The MEM file (markdown, in the corpus) remains canonical. The HTML page is a **derived product**: generated from the MEM by a build or pipeline that strips governance-only content, applies this document's principles (§2–§5), and maps MEM structure and CONNECTIONS to semantic HTML and links. Edits are made in the MEM; HTML is regenerated.

**Design principles for the reader's edition:**
- **One MEM → one URL.** One canonical, shareable page per memory (e.g. per civilisation and subject).
- **Reader-first layout.** Strong lead; narrative in clear sections; blockquotes as pullouts or callouts; dates and names easy to scan. No governance headers or internal codes.
- **Connections as "what to read next."** MEM CONNECTIONS become visible navigation: "Earlier," "Later," "Parallel" (or equivalent), with a one-line hook and link to the corresponding HTML page. This is the minimal navigation set (§4) applied to the public site.
- **Content-based framing only.** Analytical depth (legitimacy, power/structure, responsibility/mechanism) remains in the prose; no MIND or system vocabulary (§2).
- **Beauty and readability.** Typography, line length, spacing, and contrast tuned for long-form reading; responsive and accessible. Optional progressive disclosure (e.g. "Evidence," "Parallels") so the main scroll stays clean.

This section states the design goal and the MEM-as-source-of-truth rule. Implementation (templates, build pipeline, URL scheme) is out of scope here; when built, the public HTML product should comply with §2–§5 and this subsection.

────────────────────────────────────────────────────────────
7. SELF-CHECK (WHEN PRODUCING EXTERNAL OUTPUT)
────────────────────────────────────────────────────────────
- [ ] Perspective names are content-based (no MIND names)?
- [ ] No system-internal terms (OGE, relay, traversal, MIND, etc.) unless for operators?
- [ ] Grounded parallel and counter-check principles stated or implied where argumentation is expected?
- [ ] If simplified navigation: only three perspectives + earlier/later/parallel + synthesis?
- [ ] If public HTML: MEM as source of truth; derived output only; §6 principles applied?

────────────────────────────────────────────────────────────
END OF FILE — PRINCIPLES–EXTERNAL–INTERFACE
────────────────────────────────────────────────────────────
