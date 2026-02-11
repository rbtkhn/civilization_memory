PROPOSAL–RETRIEVAL–ACTIVATION — v1.0
Civilizational Memory Codex · Implementation Proposal
Full Concept-Based Retrieval Activation Plan

Status: DRAFT · PROPOSAL
Author: System Analysis
Date: 10 February 2026
Depends On: PROPOSAL–TIERED–RETRIEVAL, PROPOSAL–CONCEPT–INDEX, CONCEPT–INDEX

────────────────────────────────────────────────────────────
I. CONTEXT
────────────────────────────────────────────────────────────
Option B of the MEM Selection plan has been implemented:
• 30 highest-value Russia MEMs concept-tagged (4 concepts each)
• MEM–RELEVANCE–RUSSIA.md created (10 analytical dimensions,
  concept cross-reference)
• MEM SCAN step added to Decision Points procedure (step 2 in
  CIV–STATE–TEMPLATE v1.7)

This proposal is the roadmap for Option C: activating the full
concept-based retrieval system that has already been designed
across PROPOSAL–TIERED–RETRIEVAL, PROPOSAL–CONCEPT–INDEX, and
PROTOCOL–MIND–NAVIGATION.

────────────────────────────────────────────────────────────
II. CURRENT STATE OF INFRASTRUCTURE
────────────────────────────────────────────────────────────
| Component | Status | Location |
|-----------|--------|----------|
| Concept taxonomy (~40 concepts) | COMPLETE | CONCEPT–INDEX.md |
| MEM tagging format | DEFINED | CONCEPT–INDEX Section IV |
| Database schema (concepts, mem_concepts) | EXISTS | schema.sql |
| MIND affinity matrices | DOCUMENTED | PROTOCOL–MIND–NAVIGATION |
| Typed connection format | DEFINED | CIV–MEM–TEMPLATE |
| Tiered retrieval design | DESIGNED | PROPOSAL–TIERED–RETRIEVAL |
| Russia MEMs concept-tagged (30/191) | PARTIAL | MEM files |
| MEM relevance index (Russia) | COMPLETE | MEM–RELEVANCE–RUSSIA.md |
| MEM SCAN in Decision Points | COMPLETE | CIV–STATE–TEMPLATE v1.7 |
| Concept query API endpoints | NOT BUILT | — |
| MIND-influenced ranking | NOT BUILT | — |
| Automated retrieval pipeline | NOT BUILT | — |

Critical gap: The system is designed but has no data layer (most
MEMs untagged) and no retrieval layer (no query endpoints).

────────────────────────────────────────────────────────────
III. PHASES
────────────────────────────────────────────────────────────

PHASE 1: COMPLETE MEM TAGGING (Data Layer)
──────────────────────────────────
Scope: Tag all ~191 Russia MEMs with 2–4 concepts each.

Tasks:
1a. Tag remaining ~161 Russia MEMs using the existing taxonomy
    from CONCEPT–INDEX.md. Apply the same format used for the
    initial 30 files (CONCEPTS (SEMANTIC INDEX) section with
    Primary and Secondary tags).
1b. Review the initial 30 tags for consistency after bulk tagging.
1c. Assess whether the taxonomy needs expansion (new concepts
    appearing in 3+ MEMs that are not in the current ~40).

Estimated effort: ~2 sessions (batch tagging with AI assistance).
Prerequisite: None (can start immediately).
Deliverable: All 191 Russia MEMs tagged; any new concepts added
to CONCEPT–INDEX.md.

PHASE 2: MIGRATE CONNECTIONS TO TYPED FORMAT (Data Layer)
──────────────────────────────────
Scope: Convert existing untyped MEM CONNECTIONS to typed format
(DEPENDS_ON, ENABLES, PARALLELS, CONTRADICTS, GEOGRAPHIC,
TEMPORAL_BEFORE, TEMPORAL_AFTER).

Tasks:
2a. Define connection type taxonomy (extend the types already
    described in CIV–MEM–TEMPLATE and PROTOCOL–MIND–NAVIGATION).
2b. Migrate Russia MEM connections, starting with the 30
    highest-value tagged MEMs.
2c. Batch-migrate remaining Russia MEM connections.
2d. Validate connection consistency (bidirectional where required).

Estimated effort: ~3 sessions. Migration can be partially
automated: read each MEM's connection list and infer type from
the description text.
Prerequisite: Phase 1 complete (or at least 30 MEMs tagged).
Deliverable: All Russia MEM connections typed; migration
verified.

PHASE 3: BUILD CONCEPT QUERY ENDPOINTS (Retrieval Layer)
──────────────────────────────────
Scope: Implement concept-based retrieval in cmc-console.

Tasks:
3a. Implement /api/concepts — list all concepts from
    CONCEPT–INDEX with MEM counts.
3b. Implement /api/concepts/:key/mems — return MEMs tagged
    with a given concept, sorted by primary/secondary.
3c. Implement /api/mems/:id/concepts — return concepts for
    a given MEM.
3d. Implement /api/mems/search?concepts=a,b&civ=RUSSIA —
    multi-concept query with civilisation filter.
3e. Populate concepts and mem_concepts tables in the database
    from the MEM file CONCEPTS sections.
3f. Add a sync command to cmc-console that scans MEM files
    and updates concept tables.

Estimated effort: ~2 sessions (schema exists; mainly parsing
and API implementation).
Prerequisite: Phase 1 complete (tagged MEMs to query).
Deliverable: Working concept query API; database populated.

PHASE 4: MIND-INFLUENCED RANKING (Intelligence Layer)
──────────────────────────────────
Scope: When a MIND is active, rank retrieved MEMs and
connections by the MIND's affinity matrix.

Tasks:
4a. Implement ranking function that takes:
    - A set of retrieved MEMs (from concept query)
    - The active MIND (Mercouris/Mearsheimer/Barnes)
    - The MEM's connection types and concept categories
    and produces a ranked list biased toward the MIND's
    preferred connections and concept categories.
4b. Integrate ranking into concept query endpoints (optional
    ?mind= parameter).
4c. Integrate into Decision Points MEM SCAN step: when a
    MIND is active during STATE, the MEM scan ranks results
    by MIND affinity.

Estimated effort: ~1 session (affinity matrices already defined
in PROTOCOL–MIND–NAVIGATION; mainly applying weights).
Prerequisite: Phase 3 complete.
Deliverable: MIND-influenced MEM ranking operational.

PHASE 5: AUTOMATED RETRIEVAL IN DECISION POINTS (Integration)
──────────────────────────────────
Scope: Replace the manual MEM–RELEVANCE lookup (step 2) with
automated concept-based retrieval.

Tasks:
5a. Define a "topic extraction" step: given the news survey
    from step 1, extract 2–4 concept keys that characterise
    the decision landscape.
5b. Query the concept API with extracted keys + civilisation
    filter. Rank by MIND affinity.
5c. Surface top 5–10 MEMs as pre-loaded context before
    decision-point identification.
5d. The MEM–RELEVANCE–[CIV].md files remain as human-readable
    fallback but are no longer the primary lookup mechanism.

Estimated effort: ~1 session (mainly prompt engineering for
topic extraction and API integration).
Prerequisite: Phase 4 complete.
Deliverable: Fully automated MEM retrieval in Decision Points.

────────────────────────────────────────────────────────────
IV. CROSS-CIVILISATION SCALABILITY
────────────────────────────────────────────────────────────
The architecture is designed to scale. Once Russia is fully
activated:

1. Tag MEMs for next civilisation (e.g. ANGLIA, FRANCIA, INDIA)
   using the same taxonomy.
2. Create MEM–RELEVANCE–[CIV].md for each (or skip if Phase 5
   is operational — automated retrieval replaces manual index).
3. Cross-civilisation concept queries become possible:
   "Which civilisations have MEMs tagged with defection_cascade?"
4. STATE G-slot (cross-entity) options gain concept-based
   parallel discovery.

────────────────────────────────────────────────────────────
V. DEPENDENCY MAP
────────────────────────────────────────────────────────────
Phase 1 ←─── Phase 2 (can run in parallel with Phase 1)
   │
   └──→ Phase 3 ──→ Phase 4 ──→ Phase 5
         │
         └── Requires cmc-console operational

Phase 1 and 2 are DATA work (no code).
Phase 3, 4, 5 are CODE work (requires cmc-console).

Phases 1+2 can proceed immediately.
Phase 3 can begin once enough MEMs are tagged (~50+).

────────────────────────────────────────────────────────────
VI. RISK AND MITIGATION
────────────────────────────────────────────────────────────
| Risk | Impact | Mitigation |
|------|--------|------------|
| Over-tagging (>4 concepts/MEM) | Dilutes concept signal | Enforce 2–4 tag limit per CONCEPT–INDEX IV |
| Taxonomy sprawl (>60 concepts) | Reduces discovery precision | 3-MEM minimum for new concepts |
| cmc-console not maintained | Blocks Phases 3–5 | MEM–RELEVANCE files as permanent fallback |
| Tagging inconsistency across civilisations | Cross-civ queries unreliable | Use same taxonomy; review after each civ batch |

────────────────────────────────────────────────────────────
VII. SUCCESS CRITERIA
────────────────────────────────────────────────────────────
Option B success (ACHIEVED):
• [x] 30 Russia MEMs tagged
• [x] MEM–RELEVANCE–RUSSIA created
• [x] MEM SCAN step in Decision Points procedure

Option C success (this proposal):
• [ ] All 191 Russia MEMs tagged (Phase 1)
• [ ] All Russia MEM connections typed (Phase 2)
• [ ] Concept query API operational (Phase 3)
• [ ] MIND-influenced ranking working (Phase 4)
• [ ] Automated retrieval in Decision Points (Phase 5)
• [ ] Gap like Session 004's 1917 miss cannot recur

────────────────────────────────────────────────────────────
END OF FILE — PROPOSAL–RETRIEVAL–ACTIVATION v1.0
────────────────────────────────────────────────────────────
