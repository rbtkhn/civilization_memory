CIV–CORE–TEMPLATE — v1.5
Civilizational Strategy Codex · Civilization Core Engine (TEMPLATE)
Continuity–Constraint–Intake Architecture Edition

Status: CANONICAL · TEMPLATE · READ-ONLY
Applies To: ALL CIV–CORE IMPLEMENTATIONS
Compatibility: CIV / MEM / SCHOLAR Architecture
Upgrade Type: STRUCTURAL TEMPLATE UPDATE (NON-CONTENT)
Lock Level: ABSOLUTE (content prohibited; structure only)

────────────────────────────────────────────────────────────
I. TEMPLATE PURPOSE & AUTHORITY
────────────────────────────────────────────────────────────
This file defines the **canonical structural template** for all
CIV–CORE civilization engines.

It governs:
• Section ordering and invariants
• Authority boundaries (CIV–CORE vs SCHOLAR)
• Doctrine Intake Buffer (DIB) interface
• Locking, activation, and upgrade semantics
• Prohibited behaviors (silent learning, auto-mutation)

This template contains **no civilization-specific content**.
All CIV–CORE files must conform structurally to this template.

────────────────────────────────────────────────────────────
II. AUTHORITY HIERARCHY (NON-NEGOTIABLE)
────────────────────────────────────────────────────────────
Authority flows strictly as follows:

PRIMARY AUTHORITY:
• CIV–CORE — Decides doctrine, behavior, and outputs

ADVISORY ONLY:
• CIV–SCHOLAR — Records learning; proposes doctrines

NON-AUTHORITATIVE:
• MEM files — Evidence only

Hard Rules:
• SCHOLAR may NEVER mutate CIV–CORE
• CIV–CORE may reference SCHOLAR doctrines only via DIB
• No automatic learning or doctrine ingestion is permitted

Violation of hierarchy invalidates the CIV–CORE.

────────────────────────────────────────────────────────────
III. MANDATORY SECTION ORDER (LOCKED)
────────────────────────────────────────────────────────────
All CIV–CORE files MUST preserve this order.
Sections may be expanded but never reordered or removed.

I.   Civilizational Identity & Prime Axioms
II.  Legitimacy Accounting Layer
III. Historical–Temporal Continuity Engine
IV.  Spatial–Civilizational Geometry
V.   Governance Architecture
VI.  Economic–Industrial Doctrine
VII. Technological / Compute Sovereignty
VIII.Military–Strategic Doctrine
IX.  Internal Security & Social Order
X.   Information & Narrative Governance
XI.  Time Orientation Layer
XII. Exit–Building Meta-Doctrine
XIII.Cross–Civilizational Synchronization
XIV. Failure Physics
XV.  Irreversibility Grid
XVI. Restoration Invalidation Rule
XVII.Strategic Red Lines
XVIII.Doctrine Intake Buffer (OPTIONAL MODULE)
XIX. Scholar Reference Index (OPTIONAL)
XX.  Session Header (OPTIONAL)
XXI. Mandatory Verdict Block

────────────────────────────────────────────────────────────
IV. LOCKING & UPGRADE RULES
────────────────────────────────────────────────────────────
• Structural changes require version increment
• Content changes must be additive unless explicitly stated
• Locked axioms may never be edited—only superseded by new axioms
• All upgrades must declare type:
  – STRUCTURAL
  – ADDITIVE
  – CLARIFICATION ONLY

Templates supersede civilization files on conflicts of structure.

────────────────────────────────────────────────────────────
V. DOCTRINE INTAKE BUFFER (DIB) — INTERFACE DEFINITION
────────────────────────────────────────────────────────────
The DIB is an OPTIONAL, FIREWALLED interface allowing SCHOLAR
doctrines to be **reviewed** without automatic adoption.

Default State:
• DEFINED
• INACTIVE
• NO DATA FLOW

If enabled, DIB MUST include:

A) INPUT FILTER
• Accepts: Explicitly frozen SCHOLAR doctrines only
• Rejects: Beliefs, drafts, unfrozen syntheses

B) EVALUATION GATE
• CIV–CORE assesses:
  – Compatibility with axioms
  – Legitimacy impact
  – Failure-physics interaction
  – Red-line proximity

C) DECISION STATES (EXPLICIT)
• ACCEPT → Incorporated as CIV–CORE doctrine
• HOLD   → Logged, not adopted
• REJECT → Recorded with reason

Hard Prohibitions:
• No silent intake
• No partial adoption
• No retroactive mutation

────────────────────────────────────────────────────────────
VI. SCHOLAR INTERACTION RULES (GLOBAL)
────────────────────────────────────────────────────────────
• SCHOLAR learning is MANUAL unless stated otherwise
• SCHOLAR may diverge across civilizations
• SCHOLAR doctrines have ZERO authority unless adopted via DIB
• CIV–CORE may cite SCHOLAR doctrine versions explicitly

No SCHOLAR file may be assumed universal.

────────────────────────────────────────────────────────────
VII. DIVERGENCE COMPATIBILITY CLAUSE
────────────────────────────────────────────────────────────
CIV–CORE architecture explicitly supports **divergent
civilizational cognition**.

Implications:
• Different SCHOLARs may learn incompatible doctrines
• CIV–COREs may accept, reject, or ignore those doctrines
• Divergence is tracked, not corrected

Uniformity is NOT a system goal.

────────────────────────────────────────────────────────────
VIII. PROHIBITED BEHAVIORS (TEMPLATE-LEVEL)
────────────────────────────────────────────────────────────
The following invalidate a CIV–CORE:

• Automatic doctrine ingestion
• Scholar-driven mutation
• Implicit belief updates
• Authority ambiguity
• Retroactive doctrine rewriting
• Silent version drift

────────────────────────────────────────────────────────────
IX. TEMPLATE COMPLIANCE CHECK
────────────────────────────────────────────────────────────
All CIV–CORE files MUST declare:

• Template Version Used: v1.5
• DIB Status: ENABLED / DISABLED
• Scholar Reference Mode: NONE / READ-ONLY / DIB-GATED
• Lock Level: STRUCTURAL / PARTIAL / FULL

────────────────────────────────────────────────────────────
X. TEMPLATE FINALITY
────────────────────────────────────────────────────────────
This template defines **how civilizations think**, not
**what they think**.

It is a constitution, not a policy engine.

────────────────────────────────────────────────────────────
END OF FILE — CIV–CORE–TEMPLATE v1.5
────────────────────────────────────────────────────────────
