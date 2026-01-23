# SCHOLAR Mode Architecture & Sub-Mode Contracts
## Civilizational Memory Codex (CMC)

## PURPOSE

This memo defines the operational architecture of **SCHOLAR**.

**SCHOLAR** is not itself a mode of behavior.  
It is a **CONTAINER** that operates in exactly **ONE** of **THREE** sub-modes at any time:

• **IMAGINE**
• **LEARN**
• **WRITE**

These sub-modes are **mutually exclusive**.  
Any leakage between them is a system violation.

---

## ARCHITECTURAL RULE (HARD)

At runtime:

• SCHOLAR must be active
• **EXACTLY ONE** sub-mode must be active
• Mode switching must be explicit
• Default assumptions are forbidden

Think of **SCHOLAR** as the process,
and **Imagine / Learn / Write** as execution states.

---

## 1. SCHOLAR → IMAGINE MODE

### ROLE

Imagine Mode is pedagogical exposition **without epistemic authority**.

Imagine Mode **explains**.
It does **NOT** decide.
It does **NOT** learn.
It does **NOT** write canon.

Teach Mode exists to help a human understand:

• Structures
• Tradeoffs
• Alternatives
• Tensions
• Contradictions

### WHAT IMAGINE MODE MAY DO

• Explain existing MEM, CORE, or SCHOLAR content
• Rephrase, contextualize, or narrate existing material
• Surface unresolved contradictions explicitly
• Generate pedagogical options (Option Generation Engine – **OGE**)
• Accept user interruptions, questions, or uploads and integrate them into continued explanation

### WHAT IMAGINE MODE MAY NOT DO

• Create new beliefs
• Resolve contradictions
• Modify MEM files
• Modify SCHOLAR entries
• Freeze doctrine
• Produce authoritative conclusions

### OUTPUT CHARACTER

• Exploratory
• Multi-path
• Non-final
• Learner-directed
• Option-driven when appropriate

**Imagine Mode ends only when explicitly exited.**

---

## 2. SCHOLAR → LEARN MODE

### ROLE

Learn Mode is **recursive learning and iteration of the SCHOLAR file**.

Learn Mode ingests, analyzes, synthesizes, and assimilates knowledge (especially from MEM files) to evolve the SCHOLAR file through iterative learning cycles.

This is the **ONLY** mode in which SCHOLAR file learning and evolution occurs.

### WHAT LEARN MODE MAY DO

• Ingest MEM files
• Analyze MEM file content for patterns, beliefs, rules, and tensions
• Synthesize knowledge from multiple MEM files
• Assimilate learning into SCHOLAR entries
• Extract beliefs, rules, patterns, or tensions
• Record chronology of learning
• Update and evolve SCHOLAR entries through recursive iteration
• Flag contradictions (SCL)
• Record confidence levels (SCR)

### WHAT LEARN MODE MAY NOT DO

• Explain pedagogically
• Offer teaching options
• Narrate for understanding
• Write new MEM files (that is WRITE mode's role)
• Create reports for external audiences
• Modify CIV–CORE files

### OUTPUT CHARACTER

• Structured
• Logged
• Non-narrative
• Explicit about uncertainty
• Traceable to source material
• Focused on knowledge assimilation and SCHOLAR evolution

**Learn Mode is procedural, not conversational.**

---

## 3. SCHOLAR → WRITE MODE

### ROLE

Write Mode **creates/modifies MEM files and creates reports/content for external audience consumption**.

Write Mode is where MEM files are generated or revised, and where external-facing reports and content are produced.

### WHAT WRITE MODE MAY DO

• Generate full MEM files
• Modify existing MEM files
• Create reports and content for external audiences
• Upgrade MEM file versions additively
• Insert quotations
• Apply ARC compliance
• Produce canonical outputs
• Enforce templates and formatting rules
• Create derivative content from SCHOLAR knowledge for external consumption

### WHAT WRITE MODE MAY NOT DO

• Teach or explain alternatives pedagogically
• Learn or extract beliefs (that is LEARN mode's role)
• Update SCHOLAR learning state (LEARN mode handles SCHOLAR evolution)
• Modify SCHOLAR files directly

### OUTPUT CHARACTER

• Deterministic
• Canonical
• Final-form
• Governance-compliant
• Copy-ready
• External-audience focused

**Write Mode output is authoritative by definition.**

---

## MODE SEPARATION GUARANTEE

The system **MUST** enforce:

• Teach ≠ Learn
• Learn ≠ Write
• Teach ≠ Write

If an action requires more than one mode:

→ The system must **STOP**
→ Declare mode conflict
→ Request explicit mode switch

**Silent mode blending is forbidden.**

---

## IMPLEMENTATION GUIDANCE FOR CURSOR

Cursor should implement:

• A global **SCHOLAR state machine**
• An enum for sub-modes: `IMAGINE | LEARN | WRITE`
• **Guards** on every action checking mode legality
• Explicit mode-switch commands
• Test cases asserting no cross-mode behavior

**Failure to enforce this architecture will produce epistemic corruption.**

---

## END OF MEMO

