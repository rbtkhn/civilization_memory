CIV–AXIOM–TEMPLATE — v1.0
Civilizational Strategy Codex · Axiom Registry Template
First-Principles Extraction Layer

Status: ACTIVE · CANONICAL · TEMPLATE
Version: 1.0
Class: CIV–AXIOM (Template)
Scope: GLOBAL (All Civilizations)
Compatibility: CIV–MEM–CORE v3.3 · CIV–CORE–TEMPLATE v3.3 · CIV–DOCTRINE–TEMPLATE v3.3 · CIV–SCHOLAR–TEMPLATE
Governance Authority: CIV–MEM–CORE v3.3
Lock Level: TOTAL (Axiom-Only · No Learning)
Last Update: February 2026
Reference Implementation: CIV–AXIOM–INDIA v1.0

────────────────────────────────────────────────────────────
I. PURPOSE & ROLE
────────────────────────────────────────────────────────────
This template defines the **exclusive structure, authority model,
and governance constraints** for all CIV–AXIOM files.

A CIV–AXIOM file is:
• A registry of **accepted civilizational axioms**
• A downstream extraction artifact derived from CORE and/or Scholar
• A citation surface for CIV–CORE engines
• The single source of truth for first-principles and precedence statements

A CIV–AXIOM file is NOT:
• A learning ledger
• A synthesis workspace
• A belief store
• A scholar file
• A predictive or analytical system
• An originator of axioms (it extracts or records only)

Axioms are interpretive anchors and precedence rules (e.g. "X precedes Y"; "Civilization does Z"). They are typically more permanent, general, and spiritual/philosophical/psychological. An axiom labeled "HARD CONSTRAINT" in CORE is a non-negotiable frame, not a checkable operational trigger. Doctrines are pattern-constraints with definitions, operational meaning, and checkable Hard Constraints (see CIV–DOCTRINE–TEMPLATE). Scholar synthesis may be promoted to **axiom** or **doctrine** per DIB; axioms belong in CIV–AXIOM, doctrines in CIV–DOCTRINE. For conflict precedence and when to cite which in STATE, see CIV–STATE–TEMPLATE § I (Axiom vs Doctrine).

────────────────────────────────────────────────────────────
II. AUTHORITY CHAIN (MANDATORY)
────────────────────────────────────────────────────────────
All CIV–AXIOM files MUST enforce derivation from **CIV–CORE–[CIVILIZATION]** and/or **CIV–SCHOLAR–[CIVILIZATION]**.

Two derivation paths:

(1) CORE-derived axioms
CIV–MEM–CORE
→ CIV–CORE–[CIVILIZATION] (Section I: Civilizational Identity & Prime Axioms)
→ extraction into standard axiom format
→ CIV–AXIOM–[CIVILIZATION]

(2) Scholar-derived axioms
CIV–MEM–CORE
→ CIV–SCHOLAR–[CIVILIZATION] (synthesis promoted to axiom)
→ DIB–[CIVILIZATION] (Explicit Acceptance)
→ CIV–AXIOM–[CIVILIZATION]

Rules:
• No axiom may originate inside CIV–AXIOM
• CORE-derived axioms: extract from CIV–CORE Section I; record with Derivation: CIV–CORE–[CIV] Section I.[n]
• Scholar-derived axioms: only after synthesis promoted to axiom and DIB acceptance; record with Source: SYNTHESIS ####

────────────────────────────────────────────────────────────
III. AXIOM ADMISSIBILITY RULES
────────────────────────────────────────────────────────────
An axiom MAY be entered into a CIV–AXIOM file ONLY if:

**CORE-derived:**
1. It is extracted from CIV–CORE–[CIVILIZATION] Section I (Civilizational Identity & Prime Axioms)
2. It is recorded in the standard axiom format (Statement, Scope, Limits, Derivation)
3. An axiom identifier is assigned (AXIOM [CIV]-###)

**Scholar-derived:**
1. It originates from a synthesis in CIV–SCHOLAR–[CIVILIZATION] that was promoted to **axiom** (not doctrine)
2. The promotion was explicitly accepted by DIB–[CIVILIZATION]
3. An axiom identifier is assigned (AXIOM [CIV]-###)

Prohibited:
• Draft axioms
• Candidate beliefs
• Analytical hypotheses
• Scholar commentary
• Historical narration
• Axioms invented inside the CIV–AXIOM file

────────────────────────────────────────────────────────────
IV. REQUIRED FILE HEADER (DERIVED FILES)
────────────────────────────────────────────────────────────
All derived CIV–AXIOM files MUST include:

• Status: ACTIVE · CANONICAL · LOCKED
• Civilization: [CIVILIZATION]
• Class: CIV–AXIOM (Axiom Registry)
• Source Authority: DIB–[CIVILIZATION] (for Scholar-derived); CIV–CORE–[CIVILIZATION] (for CORE-derived)
• Compatibility: CIV–MEM–CORE · CIV–CORE–[CIVILIZATION] · CIV–SCHOLAR–[CIVILIZATION]
• Derived from: CIV–CORE–[CIVILIZATION] (Section I); CIV–SCHOLAR–[CIVILIZATION] (syntheses promoted to axiom per DIB)
• Template Version Used: CIV–AXIOM–TEMPLATE v1.0
• Last Update: [Month Year]

A **DERIVATION CLAUSE (BINDING)** MUST appear immediately after the header, stating that the file is derived from CORE and Scholar and does not originate axioms.

Header mutation is forbidden.

────────────────────────────────────────────────────────────
V. AXIOM ENTRY STRUCTURE (MANDATORY)
────────────────────────────────────────────────────────────
Each axiom entry MUST follow this structure:

AXIOM [CIV]-###: [Short name or precedence statement]
  Statement: [Full first-principles or identity statement; may be one or more sentences.]
  Scope: [What this axiom governs—analysis type, domain.]
  Limits: [Where this axiom does NOT apply; boundary conditions.]
  Derivation: [CIV–CORE–[CIV] Section I.n (Name)] for CORE-derived.
  Source: [CIV–SCHOLAR–[CIV] (SYNTHESIS ####)] for Scholar-derived.

Optional (when relevant):
  Status: [e.g. LOCKED in CORE; HARD CONSTRAINT in CORE]

Rules:
• Statement must be interpretive/anchor language, not predictive
• Scope and Limits are mandatory
• Derivation or Source (or both) must be present
• No narrative prose beyond the Statement
• No examples unless structural

────────────────────────────────────────────────────────────
VI. VERSIONING RULES
────────────────────────────────────────────────────────────
• Axiom identifiers (AXIOM [CIV]-###) are immutable once assigned
• Axiom text is immutable once LOCKED
• Modification of an existing axiom requires a new version or explicit revision protocol (per CIV–MEM–CORE or civilization governance)
• Deletions are forbidden
• Reordering is permitted only with explicit governance approval and version bump

Supersession is additive only for new axioms.

────────────────────────────────────────────────────────────
VII. EXCLUDED MATERIAL SECTION (MANDATORY)
────────────────────────────────────────────────────────────
All CIV–AXIOM files MUST include a section titled:

"EXPLICITLY EXCLUDED MATERIAL"

Purpose:
• To record that no rejected or provisional axioms are silently present
• To state that candidate beliefs, staged beliefs, and syntheses not yet promoted are excluded

If no exclusions exist, the section MUST state:
"No axioms have been rejected at this stage."

────────────────────────────────────────────────────────────
VIII. AXIOM MIRRORING REQUIREMENT (MANDATORY)
────────────────────────────────────────────────────────────
CIV–AXIOM–[CIVILIZATION] instances SHOULD be mirrored verbatim into (when governance provides):
• CIV–CORE–[CIVILIZATION]
• CIV–SCHOLAR–[CIVILIZATION]

Mirroring Rules:
• Mirroring is declarative, not interpretive
• All listed axioms may be mirrored; rejected/provisional axioms are excluded
• Mirrored axioms provide citation surface for CIV–CORE engines
• Mirrored axioms inform SCHOLAR learning without constraining it
• CIV–AXIOM remains the single source of truth for the axiom registry
• CORE Section I remains the source from which CORE-derived axioms were extracted

────────────────────────────────────────────────────────────
IX. CITATION RULES
────────────────────────────────────────────────────────────
Only axioms listed in a CIV–AXIOM file may be cited as
**authoritative axiom** by CIV–CORE engines.

Required citation format:
• Axiom identifier (e.g. AXIOM INDIA-001)
• CIV–AXIOM–[CIVILIZATION] version
• Short name or statement

Silent axiom usage is prohibited.

Note: CIV–CORE may cite axioms from its mirrored AXIOM section or from Section I, but the canonical registry is CIV–AXIOM–[CIVILIZATION].

────────────────────────────────────────────────────────────
X. GOVERNANCE & LOCK STATE
────────────────────────────────────────────────────────────
This template enforces:

• No learning
• No synthesis
• No belief mutation
• No implicit axiom generation
• No CIV–CORE override (CIV–AXIOM is downstream of CORE)
• Extraction and recording only

All derived CIV–AXIOM files MUST be LOCKED by default.

────────────────────────────────────────────────────────────
XI. TEMPLATE INHERITANCE & CONSTRAINTS
────────────────────────────────────────────────────────────
This template:

ENFORCES
• Structural uniformity across civilizations
• Two-source derivation (CORE extraction + Scholar promotion)
• Explicit authority provenance (Derivation/Source per entry)
• Downstream-only axiom flow

FORBIDS
• Silent axiom insertion
• Origination of axioms inside CIV–AXIOM
• Historical narrative
• Analytical reasoning
• Predictive usage

────────────────────────────────────────────────────────────
XII. VERSIONING & CANONICAL STATUS
────────────────────────────────────────────────────────────
This template is CANONICAL.

Future versions:
• May clarify language
• May add governance safeguards
• May NOT remove sections
• May NOT weaken authority chain
• May NOT alter admissibility rules (two-source derivation)

Derived files MUST include:
"Template Version Used: CIV–AXIOM–TEMPLATE v1.0"

────────────────────────────────────────────────────────────
END OF FILE — CIV–AXIOM–TEMPLATE v1.0
────────────────────────────────────────────────────────────
