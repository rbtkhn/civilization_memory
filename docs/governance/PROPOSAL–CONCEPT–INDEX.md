PROPOSAL–CONCEPT–INDEX — v1.0
Civilizational Memory Codex · Structural Improvement Proposal
Add Semantic Concept Layer for Discovery and Search

Status: IMPLEMENTED · CMC 3.1
Author: System Analysis
Date: February 2026
Implemented: 2026-02-04

────────────────────────────────────────────────────────────
I. PROBLEM STATEMENT
────────────────────────────────────────────────────────────
With 1,000+ MEMs, there is no semantic discovery mechanism.

CURRENT STATE:
• Files are organized by civilization folder
• CIV–INDEX files list MEMs but provide no conceptual grouping
• cmc-console indexes files by type, civilization, temporal data
• No concept-to-MEM mapping exists

DISCOVERY GAPS:
• Cannot query "Which MEMs discuss legitimacy through suffering?"
• Cannot find "All MEMs where stopping power of water applies"
• Cannot discover "Parallels to fragment inheritance across civilizations"
• Cannot ask "What patterns does the system know about autocracy?"

CONSEQUENCE:
• Users must know file names to find content
• Cross-civ patterns are invisible
• LLM context loading is guesswork
• OGE traversal options lack semantic grounding

────────────────────────────────────────────────────────────
II. PROPOSED SOLUTION
────────────────────────────────────────────────────────────
Create a Concept Index that maps analytical concepts to MEMs.

A) CONCEPT TAXONOMY

Define a controlled vocabulary of analytical concepts:

STRUCTURAL CONCEPTS (Mearsheimer-derived):
• stopping_power_of_water
• regional_hegemony
• offshore_balancing
• balance_of_power
• security_competition
• power_projection
• force_ratio
• corridor_control
• chokepoint
• strategic_depth

CIVILIZATIONAL CONCEPTS (Mercouris-derived):
• legitimacy_through_continuity
• legitimacy_through_suffering
• institutional_absorption
• sacral_legitimacy
• civilizational_grammar
• authority_translation
• fragment_inheritance
• procedural_legitimacy

MECHANISM CONCEPTS (Barnes-derived):
• liability_chain
• jurisdiction
• defection_incentive
• institutional_survival
• personal_exposure
• coercive_enforcement

PATTERN CONCEPTS (Cross-cutting):
• compression_under_pressure
• elite_overproduction
• reform_failure
• succession_crisis
• expansion_ceiling
• maritime_coherence
• corridor_primacy

B) CONCEPT TAGGING IN MEM FILES

Add optional CONCEPTS section to MEM template:

```
────────────────────────────────────────────────────────────
CONCEPTS (SEMANTIC INDEX)
────────────────────────────────────────────────────────────
Primary:
• legitimacy_through_suffering — Peter's reforms create suffering that later regimes harvest
• coercive_enforcement — Modernization requires state violence

Secondary:
• corridor_control — Baltic access as strategic objective
• elite_overproduction — Western-trained elites without absorption pathway
```

C) CONCEPT INDEX FILE

Create centralized index:

docs/governance/CONCEPT–INDEX.md

```
────────────────────────────────────────────────────────────
CONCEPT: legitimacy_through_suffering
────────────────────────────────────────────────────────────
Definition: Authority derived from collective memory of endured hardship.
Frame: Mercouris (civilizational)

MEMs tagged:
• MEM–RUSSIA–WAR–GREAT–PATRIOTIC (primary)
• MEM–RUSSIA–WAR–NAPOLEON–1812 (primary)
• MEM–RUSSIA–PETER–GREAT (secondary)
• MEM–RUSSIA–SIEGE–LENINGRAD (primary)

Related RLLs:
• RLL–RUSSIA–0017 (Sacrifice Generates Legitimacy)

Related Doctrines:
• CIV–DOCTRINE–RUSSIA DOCTRINE 01 (Endurance Through Compression)

Cross-Civ Parallels:
• MEM–ANGLIA–BLITZ (similar pattern)
• MEM–CHINA–LONG–MARCH (similar pattern)
```

D) DATABASE SCHEMA ADDITION

```sql
-- Concept definitions
CREATE TABLE IF NOT EXISTS concepts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  concept_key TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  definition TEXT,
  frame TEXT CHECK(frame IN ('mearsheimer', 'mercouris', 'barnes', 'cross_cutting')),
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

-- MEM-to-concept mappings
CREATE TABLE IF NOT EXISTS mem_concepts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER NOT NULL,
  concept_id INTEGER NOT NULL,
  relevance TEXT CHECK(relevance IN ('primary', 'secondary')),
  explanation TEXT,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE,
  UNIQUE(file_id, concept_id)
);

CREATE INDEX IF NOT EXISTS idx_mem_concepts_file ON mem_concepts(file_id);
CREATE INDEX IF NOT EXISTS idx_mem_concepts_concept ON mem_concepts(concept_id);
```

────────────────────────────────────────────────────────────
III. QUERY CAPABILITIES
────────────────────────────────────────────────────────────
With concept index, enable:

QUERY: "What MEMs discuss stopping power of water?"
RESULT: List of MEMs tagged with stopping_power_of_water concept

QUERY: "Find cross-civ parallels for legitimacy through suffering"
RESULT: All MEMs tagged with legitimacy_through_suffering, grouped by civilization

QUERY: "What patterns apply to reform failure?"
RESULT: MEMs tagged with reform_failure, plus related RLLs and Doctrines

QUERY: "Show me all Mearsheimer-frame concepts with examples"
RESULT: Concepts where frame='mearsheimer', with top MEM examples

API ENDPOINT:
GET /api/content/concepts — List all concepts
GET /api/content/concepts/:key — Get concept with tagged MEMs
GET /api/content/mems/:id/concepts — Get concepts for a MEM

────────────────────────────────────────────────────────────
IV. OGE INTEGRATION
────────────────────────────────────────────────────────────
Concept index enables smarter OGE options:

CURRENT (no concept awareness):
```
G — Cross-civ: Louis XIV, state-building parallel
```

PROPOSED (concept-aware):
```
G — Explore "coercive_enforcement" pattern in Francia (MEM–FRANCIA–LOUIS–XIV shares this concept)
```

The system can:
• Identify which concepts are active in current MEM
• Find other MEMs sharing those concepts
• Generate traversal options based on conceptual similarity, not just file adjacency

────────────────────────────────────────────────────────────
V. IMPLEMENTATION PATH
────────────────────────────────────────────────────────────
PHASE 1 — Define Taxonomy
• Create initial concept vocabulary (~50 concepts)
• Document definitions and frame assignments
• Create CONCEPT–INDEX.md skeleton

PHASE 2 — Tag High-Value MEMs
• Tag Russia Phase II MEMs (194 files) — highest density
• Tag Rome Doctrines and key figures
• Build initial concept-MEM mappings

PHASE 3 — Tooling
• Add concepts table to cmc-console schema
• Create API endpoints for concept queries
• Update OGE to use concept similarity

PHASE 4 — Ongoing Tagging
• New MEMs include CONCEPTS section
• Existing MEMs tagged incrementally
• LLM-assisted tagging for bulk processing

────────────────────────────────────────────────────────────
VI. IMPACT ANALYSIS
────────────────────────────────────────────────────────────
BENEFITS:
• Semantic discovery across 1,000+ files
• Cross-civ pattern recognition
• Smarter OGE traversal options
• LLM context loading based on conceptual relevance
• Foundation for future semantic search

COSTS:
• Upfront taxonomy design
• Per-MEM tagging effort
• Additional metadata to maintain
• Schema and tooling updates

RISKS:
• Taxonomy may not cover all concepts
• Tagging may be inconsistent across authors
• Over-tagging (everything tagged with everything)

MITIGATION:
• Start with limited taxonomy, expand as needed
• Limit to 2-4 concepts per MEM
• Require explanation for each tag
• Review sampling for consistency

────────────────────────────────────────────────────────────
VII. IMPLEMENTATION STATUS
────────────────────────────────────────────────────────────
**STATUS: IMPLEMENTED** — 2026-02-04

Decision: ACCEPT (Option A)

IMPLEMENTATION ARTIFACTS:
• CONCEPT–INDEX.md — Full taxonomy with ~40 concepts
• CIV–MEM–TEMPLATE Section XXV.E — Optional CONCEPTS section
• schema.sql — concepts and mem_concepts tables added
• EXAMPLE–MEM–CONCEPT–TAGS.md — Example file
• cmc-scholar-mode.mdc — Concept index awareness

CONCEPT CATEGORIES IMPLEMENTED:
• Structural (Mearsheimer): 12 concepts
• Civilizational (Mercouris): 10 concepts
• Mechanism (Barnes): 8 concepts
• Cross-cutting: 10 concepts

PHASE STATUS:
• Phase 1: COMPLETE — Taxonomy defined
• Phase 2: PENDING — Tag high-value MEMs
• Phase 3: PENDING — API endpoints
• Phase 4: ONGOING — New MEMs may include CONCEPTS section

────────────────────────────────────────────────────────────
END OF PROPOSAL — PROPOSAL–CONCEPT–INDEX v1.0 · IMPLEMENTED
────────────────────────────────────────────────────────────
