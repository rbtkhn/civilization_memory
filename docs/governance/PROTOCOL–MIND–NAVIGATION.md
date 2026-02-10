# PROTOCOL–MIND–NAVIGATION

**Status:** DRAFT · PROPOSAL  
**Version:** 1.0  
**Author:** CMC System  
**Date:** 2026-02-03  
**Governed by:** CMC 3.2  
**Dependencies:** CIV–MIND–MERCOURIS, CIV–MIND–MEARSHEIMER, CIV–MIND–BARNES, PROPOSAL–LIVING–ARC, CONCEPT–INDEX

---

## I. FOUNDATIONAL PRINCIPLE

**MIND influences navigation, not just voice.**

When a MIND (Mercouris, Mearsheimer, Barnes) is active, it shapes:
1. **Connection traversal** — Which MEM connections seem most relevant
2. **Source selection** — Which ARC sources are prioritized
3. **Concept surfacing** — Which concepts are emphasized
4. **OGE generation** — How traversal options are framed

This is a **soft bias**, not a hard constraint. All connections, sources, and concepts remain accessible; the active MIND influences which are *surfaced first* and *emphasized*.

---

## I-A. MIND ACTIVATION MODEL

### Three Activation Pathways

| Pathway | Trigger | Active MIND |
|---------|---------|-------------|
| **Default** | No explicit selection | Mercouris |
| **OGE Selection** | User selects A, B, or C | A=Mercouris, B=Mearsheimer, C=Barnes |
| **Manual Command** | User types explicit invocation | As specified by user |

### Pathway Precedence

```
Manual Command > OGE Selection > Default
```

User intent always takes precedence. If user types "apply Mearsheimer cognition to X", Mearsheimer is active regardless of prior OGE state.

### Default State

**Mercouris is always the default MIND.** Unless the user:
- Selects OGE Option B (Mearsheimer) or C (Barnes), OR
- Manually invokes a different MIND

...the system operates with Mercouris navigation affinities.

### OGE Selection Mapping

| OGE Option | MIND Activated | Duration |
|------------|----------------|----------|
| A | Mercouris | That response |
| B | Mearsheimer | That response |
| C | Barnes | That response |
| D | Multi-mind (all three) | That response |
| E, F, G, H | Default (Mercouris) | That response |

After each response, MIND reverts to default (Mercouris) unless user selects B/C again or issues manual command.

### Manual Invocation Examples

User may activate any MIND through free-form commands:

- "Apply Mearsheimer cognition to the American Civil War"
- "What would Barnes say about the ICC indictment?"
- "Analyze this through Mercouris lens"
- "Use structural/realist analysis" (implies Mearsheimer)
- "Who is liable here?" (implies Barnes)

The system recognizes explicit MIND names and characteristic vocabulary.

### Stateless Design

MIND activation is **stateless** — determined fresh each turn by:
1. Checking for manual invocation in user message
2. Checking OGE selection (if applicable)
3. Falling back to Mercouris default

No "prior MIND" tracking is required. This aligns with the OGE stateless design (CMC 3.1).

---

## II. CONNECTION AFFINITY MATRIX

### A. Typed Connection Definitions (Reference)

| Connection Type | Meaning |
|-----------------|---------|
| `DEPENDS_ON` | This MEM's claims require the connected MEM to be true |
| `ENABLES` | This MEM creates conditions for the connected MEM |
| `CONTRADICTS` | This MEM's claims conflict with the connected MEM |
| `PARALLELS` | Similar pattern in different context (cross-civ or cross-era) |
| `TEMPORAL_BEFORE` | Connected MEM precedes this one chronologically |
| `TEMPORAL_AFTER` | Connected MEM follows this one chronologically |
| `GEOGRAPHIC` | Spatial/terrain relationship to connected MEM |

### B. MIND × Connection Affinity

| Connection Type | Mercouris | Mearsheimer | Barnes |
|-----------------|-----------|-------------|--------|
| `PARALLELS` | **HIGH** | MEDIUM | LOW |
| `TEMPORAL_BEFORE` | **HIGH** | MEDIUM | MEDIUM |
| `TEMPORAL_AFTER` | **HIGH** | MEDIUM | MEDIUM |
| `DEPENDS_ON` | MEDIUM | **HIGH** | **HIGH** |
| `ENABLES` | MEDIUM | **HIGH** | MEDIUM |
| `CONTRADICTS` | MEDIUM | **HIGH** | **HIGH** |
| `GEOGRAPHIC` | MEDIUM | **HIGH** | LOW |

### C. Affinity Interpretation

**HIGH** — This connection type aligns with the MIND's core analytical lens. Surface these connections first; they likely yield the richest insights for this perspective.

**MEDIUM** — This connection type is relevant but not central. Include in options but don't prioritize over HIGH.

**LOW** — This connection type is less aligned with the MIND's lens. Still valid, but unlikely to be the most productive path for this perspective.

### D. Rationale

**Mercouris (Civilizational/Legitimacy)**
- `PARALLELS`: Cross-civilizational patterns reveal civilizational grammar
- `TEMPORAL`: Long arcs show institutional continuity and legitimacy evolution
- Lower affinity for `GEOGRAPHIC` (terrain matters less than cultural pattern)

**Mearsheimer (Structural/Power)**
- `DEPENDS_ON`, `ENABLES`, `CONTRADICTS`: Causal chains in power distribution
- `GEOGRAPHIC`: Terrain shapes force projection and security
- Lower affinity for `PARALLELS` (states are unit of analysis, not civilizations)

**Barnes (Liability/Mechanism)**
- `DEPENDS_ON`, `CONTRADICTS`: Causal chains expose who is on the hook
- Lower affinity for `PARALLELS` (mechanism is specific, not pattern)
- Lower affinity for `GEOGRAPHIC` (jurisdiction matters more than terrain)

---

## III. SOURCE AFFINITY MATRIX

### A. Source Type Definitions

| Source Type | Description | Example |
|-------------|-------------|---------|
| `ACADEMIC` | Peer-reviewed, scholarly | Figes, *A People's Tragedy* |
| `PRIMARY` | Original documents, speeches, treaties | Treaty of Westphalia text |
| `ANALYST_CANONICAL` | Established analyst with track record | Mercouris transcripts, Mearsheimer lectures |
| `ANALYST_PROVISIONAL` | Analyst still building track record | New commentator |
| `NEWS_QUALITY` | Reputable news organization | Reuters, AP |
| `NEWS_EPHEMERAL` | Breaking news, unverified | Twitter thread |
| `LEGAL` | Court filings, testimony, legal analysis | Indictment, deposition |
| `INVESTIGATIVE` | Long-form investigative journalism | Seymour Hersh |

### B. MIND × Source Affinity

| Source Type | Mercouris | Mearsheimer | Barnes |
|-------------|-----------|-------------|--------|
| `ACADEMIC` | **HIGH** | **HIGH** | MEDIUM |
| `PRIMARY` | **HIGH** | **HIGH** | **HIGH** |
| `ANALYST_CANONICAL` | **HIGH** | MEDIUM | MEDIUM |
| `ANALYST_PROVISIONAL` | MEDIUM | LOW | LOW |
| `NEWS_QUALITY` | MEDIUM | LOW | MEDIUM |
| `NEWS_EPHEMERAL` | LOW | LOW | MEDIUM |
| `LEGAL` | LOW | LOW | **HIGH** |
| `INVESTIGATIVE` | MEDIUM | LOW | **HIGH** |

### C. Rationale

**Mercouris**
- HIGH for academic, primary, analyst-canonical (civilizational analysis requires deep sources)
- Lower for legal/investigative (mechanism-focused, not his lens)

**Mearsheimer**
- HIGH for academic, primary (structural analysis needs rigorous foundation)
- Lower for analyst and news (prefers systematic over reactive)
- LOW for legal (not his analytical frame)

**Barnes**
- HIGH for primary, legal, investigative (mechanism requires documentation)
- MEDIUM for news (breaking developments matter for liability)
- Lower for academic (too removed from live exposure)

---

## IV. CONCEPT CATEGORY AFFINITY

### A. Concept Categories (from CONCEPT–INDEX)

| Category | Focus |
|----------|-------|
| `STRUCTURAL` | Power, balance, security, geography |
| `CIVILIZATIONAL` | Culture, legitimacy, identity, continuity |
| `MECHANISM` | Process, institution, procedure, liability |
| `PATTERN` | Recurrence, parallel, cycle, tendency |

### B. MIND × Concept Category Affinity

| Category | Mercouris | Mearsheimer | Barnes |
|----------|-----------|-------------|--------|
| `STRUCTURAL` | MEDIUM | **HIGH** | MEDIUM |
| `CIVILIZATIONAL` | **HIGH** | LOW | LOW |
| `CIVILIZATIONAL` | **HIGH** | LOW | LOW |
| `MECHANISM` | MEDIUM | MEDIUM | **HIGH** |
| `PATTERN` | **HIGH** | MEDIUM | LOW |

### C. Specific Concept Affinities

**Mercouris-Aligned Concepts**
- `legitimacy_density`
- `civilizational_grammar`
- `institutional_continuity`
- `cultural_persistence`
- `dynastic_legitimacy`
- `religious_authority`
- `imperial_overreach` (civilizational frame)

**Mearsheimer-Aligned Concepts**
- `balance_of_power`
- `security_dilemma`
- `geographic_constraint`
- `stopping_power_of_water`
- `offensive_realism`
- `power_transition`
- `buck_passing`
- `imperial_overreach` (structural frame)

**Barnes-Aligned Concepts**
- `defection_incentive`
- `personal_liability`
- `jurisdictional_conflict`
- `institutional_capture`
- `coordination_collapse`
- `first_mover_advantage` (defection context)
- `elite_accountability`

---

## V. APPLICATION RULES

### A. OGE Traversal Options (E, F, G)

When generating OGE options E (backward), F (forward), G (cross-civ):

1. **Identify active MIND** from prior turn context
2. **Query available connections** from current MEM
3. **Rank by affinity** — HIGH connections for active MIND appear first
4. **Frame option text** using MIND's analytical vocabulary

**Example: MEM–RUSSIA–WAR–1812 with Mearsheimer active**

Available connections:
- `PARALLELS` → MEM–FRANCE–NAPOLEON–SPAIN (guerrilla parallel)
- `GEOGRAPHIC` → MEM–RUSSIA–STRATEGIC–DEPTH (terrain)
- `TEMPORAL_BEFORE` → MEM–RUSSIA–PETER–GREAT (institutional foundation)

Mearsheimer affinity ranking:
1. `GEOGRAPHIC` (HIGH) → MEM–RUSSIA–STRATEGIC–DEPTH
2. `PARALLELS` (MEDIUM) → MEM–FRANCE–NAPOLEON–SPAIN
3. `TEMPORAL_BEFORE` (MEDIUM) → MEM–RUSSIA–PETER–GREAT

OGE Option E (backward): "Strategic depth: how terrain shaped Napoleon's defeat."

**Same MEM with Mercouris active**

Mercouris affinity ranking:
1. `TEMPORAL_BEFORE` (HIGH) → MEM–RUSSIA–PETER–GREAT
2. `PARALLELS` (HIGH) → MEM–FRANCE–NAPOLEON–SPAIN
3. `GEOGRAPHIC` (MEDIUM) → MEM–RUSSIA–STRATEGIC–DEPTH

OGE Option E (backward): "Peter's institutional legacy enabled 1812 resilience."

### B. ARC Source Selection

When citing sources from ARC:

1. **Identify active MIND**
2. **Filter available sources** by relevance to current topic
3. **Rank by source type affinity** for active MIND
4. **Prefer higher-affinity sources** when multiple are equally relevant

**Example: Supporting claim about Russian strategic culture**

With Mercouris active:
- Prefer: Figes (ACADEMIC, HIGH), Mercouris transcript (ANALYST_CANONICAL, HIGH)
- Acceptable: Reuters report (NEWS_QUALITY, MEDIUM)

With Mearsheimer active:
- Prefer: Figes (ACADEMIC, HIGH), primary treaty text (PRIMARY, HIGH)
- Acceptable: Mercouris transcript (ANALYST_CANONICAL, MEDIUM)

With Barnes active:
- Prefer: Primary document (PRIMARY, HIGH), Hersh investigation (INVESTIGATIVE, HIGH)
- Acceptable: Figes (ACADEMIC, MEDIUM)

### C. Concept Surfacing

When analyzing a MEM or event:

1. **Identify active MIND**
2. **Retrieve concepts tagged** to current MEM
3. **Emphasize concepts** with HIGH affinity for active MIND
4. **Apply MIND's analytical vocabulary** to concept discussion

**Example: Analyzing elite flight from Moscow (CEP event)**

With Mercouris active:
- Emphasize: `institutional_continuity` (is the state apparatus still functional?)
- Frame: "It seems to me that the legitimacy question..."

With Mearsheimer active:
- Emphasize: `balance_of_power` (does this signal capability decline?)
- Frame: "The structural implication is clear..."

With Barnes active:
- Emphasize: `defection_incentive`, `personal_liability` (who is exiting first?)
- Frame: "One issue is who's on the hook when the music stops..."

### D. Multi-MIND Responses (Option D)

When generating Option D (multi-mind response):

Each MIND segment should:
1. Prioritize connections/sources/concepts aligned with that MIND
2. Surface different aspects of the same topic
3. Create productive tension through different emphases

The four-part structure naturally produces this:
1. **Mercouris** surfaces civilizational/legitimacy angle
2. **Mearsheimer** responds with structural/power angle
3. **Barnes** adds liability/mechanism angle
4. **Mercouris** returns to find legitimacy enriched

### E. Option D Affinity Application (Per-Segment)

When Option D is selected, navigation affinities apply **per segment**, not globally:

| Segment | Active MIND | Affinities Used |
|---------|-------------|-----------------|
| 1 (Opening) | Mercouris | Mercouris connection/source/concept affinities |
| 2 (Response) | Mearsheimer | Mearsheimer affinities |
| 3 (Catalyst) | Barnes | Barnes affinities |
| 4 (Wrap-up) | Mercouris | Mercouris affinities |

**Practical effect:**
- Segment 1 may cite civilizational sources, surface PARALLELS connections
- Segment 2 may cite structural sources, surface GEOGRAPHIC connections
- Segment 3 may cite legal/investigative sources, surface DEPENDS_ON connections
- Segment 4 returns to civilizational frame, now enriched

Each segment draws from the full ARC and connection graph, but emphasizes materials aligned with its active MIND.

**After Option D:** System reverts to Mercouris default for next turn, consistent with stateless design.

---

## VI. AFFINITY OVERRIDE RULES

### A. User Override

User can explicitly request a connection, source, or concept regardless of MIND affinity:
- "Explore the geographic dimension" (even if Mercouris is active)
- "What does the legal record show?" (even if Mearsheimer is active)

User intent overrides MIND affinity.

### B. Relevance Override

If a LOW-affinity connection is strongly relevant to the specific question, it should be surfaced:
- Question about terrain → GEOGRAPHIC connection, regardless of MIND
- Question about court proceedings → LEGAL sources, regardless of MIND

Topic relevance overrides MIND affinity.

### C. Completeness Override

In WRITE mode, MEM files should include all relevant connections, sources, and concepts — not just those aligned with the composing MIND. MIND affinity applies to *surfacing and emphasis*, not to *inclusion*.

### D. Blend Law Override (WRITE Mode)

**MIND-Navigation and Blend Law govern different dimensions:**

| Protocol | Governs | Scope |
|----------|---------|-------|
| **Blend Law** | Content proportions in MEM files | WRITE mode only |
| **MIND-Navigation** | Analytical framing, connection/source surfacing | All modes |

In WRITE mode:
- **Blend Law determines content ratios:** GEO-MEM = 2/3 Mearsheimer, Subject MEM = 2/3 Mercouris
- **MIND-Navigation influences what is surfaced** during composition
- **User can invoke any MIND** for analytical framing, but final MEM still follows Blend Law

**Example:** User says "Write a MEM on Napoleon's invasion using Barnes lens."
- Barnes lens influences *what aspects are surfaced* (liability, defection, mechanism)
- Blend Law still applies: if GEO-MEM, final content is 2/3 structural (Mearsheimer), 1/3 civilizational (Mercouris)
- Barnes insights become inputs to the MEM, not governing proportions

**Rationale:** Blend Law ensures MEM consistency. MIND-Navigation ensures analytical richness. Both apply; they don't conflict.

---

## VII. INTEGRATION POINTS

### A. With MIND Files

Add to each CIV–MIND–[NAME].md:

```markdown
## NAVIGATION PREFERENCES

See PROTOCOL–MIND–NAVIGATION for full affinity matrices.

**Connection Affinities:** [HIGH types listed]
**Source Affinities:** [HIGH types listed]  
**Concept Affinities:** [HIGH categories listed]
```

### B. With Living ARC (PROPOSAL–LIVING–ARC)

Add section:

```markdown
## MIND-INFLUENCED SOURCE SELECTION

When a MIND is active, source selection from ARC is biased
by the MIND × Source Affinity Matrix in PROTOCOL–MIND–NAVIGATION.

- Mercouris: Favor ACADEMIC, PRIMARY, ANALYST_CANONICAL
- Mearsheimer: Favor ACADEMIC, PRIMARY
- Barnes: Favor PRIMARY, LEGAL, INVESTIGATIVE
```

### C. With OGE Enforcement (cmc-oge-enforcement.mdc)

Add rule:

```markdown
## MIND-INFLUENCED TRAVERSAL

When generating E/F/G options, rank available connections
by affinity for the active MIND per PROTOCOL–MIND–NAVIGATION.

Frame option text using the MIND's analytical vocabulary.
```

### D. With SCHOLAR Mode (cmc-scholar-mode.mdc)

Add awareness:

```markdown
## MIND NAVIGATION AWARENESS

When a MIND is active, connection traversal and source
selection are biased per PROTOCOL–MIND–NAVIGATION.

This is soft bias, not hard constraint. All connections
and sources remain accessible.
```

### E. With Concept Index (CONCEPT–INDEX.md)

Add section:

```markdown
## MIND AFFINITIES

Concepts have affinity with MINDs per PROTOCOL–MIND–NAVIGATION:

- STRUCTURAL concepts: Mearsheimer-aligned
- CIVILIZATIONAL concepts: Mercouris-aligned
- MECHANISM concepts: Barnes-aligned
- PATTERN concepts: Mercouris-aligned
```

---

## VIII. IMPLEMENTATION PATH

### Phase 1 — Protocol Establishment (Immediate)

1. Approve PROTOCOL–MIND–NAVIGATION
2. Add NAVIGATION PREFERENCES stub to each MIND file
3. Add integration references to affected cursor rules

**Complexity:** Low. Reference additions only.

### Phase 2 — OGE Integration (CMC 3.2)

1. Update OGE generation logic to check active MIND
2. Implement connection ranking by affinity
3. Update option text generation to use MIND vocabulary

**Complexity:** Medium. Requires OGE logic changes.

### Phase 3 — ARC Integration (with Living ARC)

1. Tag ARC sources with source types
2. Implement source ranking by MIND affinity
3. Surface MIND-appropriate sources in citations

**Complexity:** Medium. Requires ARC source typing.

### Phase 4 — Concept Integration (CMC 3.3)

1. Tag concepts with MIND affinities in CONCEPT–INDEX
2. Implement concept emphasis by active MIND
3. Update SCHOLAR mode to surface MIND-aligned concepts

**Complexity:** Low. Metadata additions.

---

## IX. COMPLEXITY RISK MITIGATION

### A. Soft Bias, Not Hard Constraint

MIND affinity influences *ranking*, not *filtering*. All connections, sources, and concepts remain accessible. This prevents the system from becoming blind to relevant material.

### B. Override Rules

User intent and topic relevance override MIND affinity. The system suggests; it doesn't constrain.

### C. Static Matrices

Affinity matrices are static and human-readable. No dynamic scoring or machine learning. Changes require explicit protocol updates.

### D. Graceful Degradation

If MIND cannot be identified, fall back to neutral ranking (all affinities MEDIUM). System remains functional without MIND context.

---

## X. FUTURE EXTENSIONS

### A. Additional MINDs

If new MINDs are added (e.g., economic analyst, military strategist):
1. Add column to each affinity matrix
2. Define HIGH/MEDIUM/LOW for new MIND
3. Update integration points

### B. Fine-Grained Affinities

Current matrices use HIGH/MEDIUM/LOW. Could extend to numeric weights (0.0–1.0) if more precision needed. Defer unless necessary.

### C. Context-Dependent Affinity

Some topics might shift affinities (e.g., when discussing legal proceedings, even Mercouris might elevate LEGAL sources). Could add topic × MIND modifiers. Defer as complexity risk.

---

## XI. SUMMARY

MIND-influenced navigation ensures that:

1. **Connection traversal** surfaces paths aligned with the active MIND's lens
2. **Source selection** prioritizes materials suited to the MIND's analytical mode
3. **Concept surfacing** emphasizes categories aligned with the MIND's focus
4. **OGE options** are framed using the MIND's vocabulary

This creates coherent analytical sessions where the chosen perspective shapes not just *how* things are said, but *what* is surfaced to say.

The design maintains:
- **Accessibility** — All material remains reachable
- **Override capability** — User and topic can override affinity
- **Auditability** — Static matrices, no black-box scoring
- **Graceful degradation** — System works without MIND context

---

**END OF PROTOCOL — PROTOCOL–MIND–NAVIGATION v1.0**
