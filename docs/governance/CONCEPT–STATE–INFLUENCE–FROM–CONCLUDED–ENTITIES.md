# CONCEPT: STATE influence from concluded entities

**Status:** ACTIVE  
**Governed by:** CMC 3.5 · CIV–STATE–TEMPLATE  
**Last updated:** February 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
Living STATE files (CIVILIZATION-STATE, STANDARD-STATE, SUCCESSOR-STATE) can
declare that they are **influenced by** a concluded entity whose STATE file
is a monument or reference (e.g. FRAGMENTED-SOURCE). When so declared, the
system **loads the concluded entity's STATE file** (Section II, Section VII)
and **applies its patterns and doctrines** as influence inputs when analysing
the living entity. This lets STATE–ROME (and future concluded STATE files)
exert systematic influence on living civilizations based on their historical
relationship to Rome (or that entity).

────────────────────────────────────────────────────────────
II. INFLUENCE TYPES
────────────────────────────────────────────────────────────
When a living STATE file declares influence from a concluded entity, it
must specify an **influence type**. These align with succession link types
and analytical use:

| Type | Definition | Example |
|------|-------------|--------|
| SUCCESSION_CLAIM | Living entity claims ideological or political succession from the concluded entity | Russia (Third Rome) ← STATE–ROME |
| PARITY_LEGACY | Living entity shared parity, war, or negotiation with the concluded entity; no succession claim | Persia (Roman–Persian parity, Maurice–Khosrow) ← STATE–ROME |
| CULTURAL_GRAMMAR | Living entity inherits cultural, legal, or institutional patterns from the concluded entity | France, Italy (Latin civilizational grammar) ← STATE–ROME |
| INSTITUTIONAL_TRANSFER | Specific institutions (church, law, symbols) transferred from concluded to living entity | Papacy, HRE successors ← STATE–ROME |
| CONQUEST_LEGACY | Living entity emerged from or absorbed territory of the concluded entity; may include declination | Turkey (Ottoman; declined Roman title) ← STATE–ROME |

Multiple types may apply to one living entity. The type shapes **how** the
concluded entity's patterns are applied (e.g. SUCCESSION_CLAIM → fragment
inheritance and vacancy doctrines; PARITY_LEGACY → exhaustion, negotiation,
absorption vs annihilation).

────────────────────────────────────────────────────────────
III. DECLARATION FORMAT (LIVING STATE FILE)
────────────────────────────────────────────────────────────
In the living STATE file, add a subsection **"Influence from concluded
entities"** (under Section VIII or as Section VIII-A). For each concluded
STATE file that influences this entity:

**Concluded file:** CIV–STATE–[ENTITY] (e.g. CIV–STATE–ROME)  
**Influence type:** [SUCCESSION_CLAIM | PARITY_LEGACY | CULTURAL_GRAMMAR | INSTITUTIONAL_TRANSFER | CONQUEST_LEGACY]  
**Weight:** [HIGH | MEDIUM | LOW] — how often and when to apply this influence (see Section IV). Omit for legacy entries; treat as HIGH.  
**Patterns that apply:** Section VII pattern numbers or names from the concluded file (e.g. Pattern 1, 2; fragment inheritance, vacancy by declination)  
**Doctrines/RLLs that apply:** [e.g. RLL–ROME–0002, 0006; DOCTRINE 06, 07]  
**Application note:** One or two lines on how this influence shapes analysis of the living entity (e.g. "Applies to legitimacy rhetoric, expansion narrative, and civilizational self-conception").

Optional: **MEMs to prefer** when topic touches this influence (e.g. MEM–ROME–RUSSIA, MEM–RUSSIA–THIRD–ROME).

────────────────────────────────────────────────────────────
IV. LOADING AND APPLICATION PROCEDURE (SYSTEM)
────────────────────────────────────────────────────────────
When in **STATE mode** for entity [CIV]:

1. **At session start** (after loading CIV–STATE–[CIV], CORE, SCHOLAR):
   - Read CIV–STATE–[CIV] for a subsection **"Influence from concluded entities"** (or **"VIII-A"**).
   - If present: for each concluded STATE file listed, **read that file's Section II (Succession and inheritance) and Section VII (Decision-relevant history / patterns)**.
   - Retain these as **influence inputs** for the session. Note each declaration's **Weight** (HIGH | MEDIUM | LOW); if Weight is omitted, treat as HIGH.

2. **When generating options or running session activities:**
   - **Apply by weight:**  
     **HIGH** — Consider and apply the concluded entity's patterns and doctrines whenever the declared influence type is relevant (e.g. legitimacy for SUCCESSION_CLAIM; negotiation/parity for PARITY_LEGACY).  
     **MEDIUM** — Apply when the topic or activity explicitly touches the influence domain (e.g. Islam/caliphal legacy, Middle East, post‑1924 order; or the declared application note).  
     **LOW** — Apply only when the user or session explicitly invokes the concluded entity, or when a pattern clearly crosses into this influence (e.g. a decision that implicates post‑caliphal legitimacy or Islamicate interfaces).
   - Where applied: **apply the concluded entity's patterns and doctrines** as additional constraint or precedent. Cite the concluded entity's STATE file and pattern/doctrine when used (e.g. "Per STATE–ROME Pattern 1 (fragment inheritance), Russia's Third Rome claim places it as a fragment claimant; RLL–ROME–0006 applies.").
   - Do not override the living entity's own CORE, SCHOLAR, or material options; the concluded entity **influences** (adds lens and precedent), it does not replace.

3. **MEM SCAN:**
   - When the topic touches the declared influence (and weight permits application), prefer or include MEMs that connect the living entity to the concluded entity (e.g. MEM–RUSSIA–THIRD–ROME, MEM–ROME–WAR–PERSIA) per the living STATE file's "MEMs to prefer" or connection discovery from concluded-entity MEMs.

────────────────────────────────────────────────────────────
V. RECIPROCAL LIST (CONCLUDED STATE FILE)
────────────────────────────────────────────────────────────
In the **concluded** STATE file (e.g. CIV–STATE–ROME), Section VIII (or an
explicit subsection) should list **living states that declare influence from
this file**, with their influence type and **weight** (HIGH | MEDIUM | LOW).
This keeps the map bidirectional and auditable. Example:

**Living states influenced by this file:**
• CIV–STATE–RUSSIA — SUCCESSION_CLAIM — HIGH (Third Rome)
• CIV–STATE–PERSIA — PARITY_LEGACY — HIGH (Roman–Persian parity, negotiation)
• (Future: CIV–STATE–FRANCE — CULTURAL_GRAMMAR — HIGH; etc.)

────────────────────────────────────────────────────────────
VI. TEMPORAL BOUNDS (CONCLUDED ENTITIES)
────────────────────────────────────────────────────────────
Canonical begin/end for concluded STATE entities (for monument creation
and timeline traversal):

| Entity | Begin | End | Notes |
|--------|-------|-----|-------|
| CIV–STATE–ROME | **753 BC** (mythical founding of the city of Rome) | 1453 | Eastern Roman political authority; Western imperial lapsed earlier (476/480). |
| CIV–STATE–ISLAM | **622** (Hijra; Medina — first Muslim polity under the Prophet) | 1924 | Abolition of Ottoman Caliphate; caliphal polity as single universal custodian. Islam as civilization persists (CORE–ISLAM; polycentric). |

When creating STATE–ISLAM or documenting STATE–ROME, use these bounds.
Timeline traversal (user picks era as "present") respects begin–end.

────────────────────────────────────────────────────────────
VII. STATE–ISLAM: LIVING STATES INFLUENCED (CANONICAL)
────────────────────────────────────────────────────────────
STATE–ISLAM (concluded 622–1924) influences **all** living STATE files, with
type and weight varying by historical relationship. When creating
CIV–STATE–ISLAM, Section VIII shall list:

| Living STATE file    | Influence type(s)              | Weight | Rationale (short) |
|----------------------|--------------------------------|--------|-------------------|
| CIV–STATE–PERSIA     | PARITY_LEGACY, CULTURAL_GRAMMAR| HIGH   | Caliphal parity, Persianate/Shi'a grammar; no caliphate claim |
| CIV–STATE–RUSSIA     | PARITY_LEGACY, CONQUEST_LEGACY | HIGH   | Ottoman wars, Caucasus/Crimea/Central Asia; post-caliphal territory |
| CIV–STATE–INDIA     | CULTURAL_GRAMMAR, CONQUEST_LEGACY | HIGH | Mughal/Indo-Islamic; British India as successor territory |
| CIV–STATE–FRANCE    | PARITY_LEGACY, CONQUEST_LEGACY  | MEDIUM | Colonial North Africa, Levant; Ottoman successor territories |
| CIV–STATE–CHINA     | PARITY_LEGACY                  | MEDIUM | Frontier (Xinjiang, Hui); parity at Islamicate frontier |
| CIV–STATE–AMERICA    | PARITY_LEGACY                  | LOW    | 20th-c. engagement with post-caliphal order; Middle East policy |
| CIV–STATE–GERMANY    | PARITY_LEGACY                  | LOW    | WWI Ottoman alliance; historical engagement only |

Each living STATE file's VIII-A must declare CIV–STATE–ISLAM with the
same type(s) and weight. Future living states (e.g. Turkey, Egypt, Saudi
Arabia) add their own declarations when created; this table is the minimum
set for existing files.

────────────────────────────────────────────────────────────
VIII. SCOPE
────────────────────────────────────────────────────────────
• Only **living** STATE files (Active: YES) declare influence.
• Only **concluded** STATE files (FRAGMENTED-SOURCE or reference/monument)
  are valid targets. A living state does not declare influence from another
  living state via this mechanism (use Section VIII Cross-Entity Links).
• Influence is **additive**: it does not replace CORE, SCHOLAR, or the
  living entity's own material options. It adds patterns and doctrines from
  the concluded entity as a lens and precedent set.
• First implementation: STATE–ROME as concluded entity; STATE–RUSSIA and
  STATE–PERSIA as living entities declaring influence.
• STATE–ISLAM (concluded): design agreed; temporal bounds 622–1924 (Section VI); influences all living STATE files with type and weight per Section VII.
• **Design scope:** Rome and the Islamic caliphal polity (STATE–ROME, STATE–ISLAM) are the only concluded entities in scope for this mechanism. No other concluded states are judged to have comparable modern influence on living civilizations; the mechanism is not extended to other concluded entities (e.g. Mongol, Byzantine-as-separate, Han/Tang as concluded) unless design scope is explicitly revised. Conceptual framing: the two can be contemplated as **two strands of the double helix of the Mediterranean–Atlantic civilizational complex** (see CONCEPT–ROME–ISLAM–DOUBLE–HELIX).

Reference: CIV–STATE–TEMPLATE (Section VIII / VIII-A); cmc-state-mem-grounding (influence load step); CONCEPT–ROME–ISLAM–DOUBLE–HELIX.
