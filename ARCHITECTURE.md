# CMC Console Architecture Design

## Overview

The Civilizational Memory Codex (CMC) Console is a **local-first web application** serving as a governance console for managing, validating, auditing, and pedagogically deploying a corpus of structured historical-civilizational text files.

## Core Principles

1. **No Epistemic Authority** - The system validates structure, not truth
2. **Additive-Only Modification** - All changes are explicit and diff-tracked
3. **Contradiction Preservation** - Tensions must be preserved, not resolved
4. **Mode Symmetry** - Strict boundaries between Write/Learn/Lecture modes
5. **Plain-Text Canonical** - Git repository files are the single source of truth

---

## Technology Stack

### Frontend & Framework
- **Next.js 14+** (App Router) - Local-first, server-side rendering
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React** - UI components

### Backend & Data
- **SQLite** (via `better-sqlite3`) - Local indexing and validation logs
- **Node.js File System API** - Direct file system access
- **Git** (via `simple-git`) - Repository interaction

### Validation & Parsing
- **Custom parsers** - Header/metadata extraction
- **YAML parser** - For structured metadata blocks
- **Markdown parser** - For content sections

### Development
- **ESLint + Prettier** - Code quality
- **Vitest** - Testing framework

---

## Architecture Layers

### 1. Data Layer
```
┌─────────────────────────────────────┐
│  Git Repository (Plain Text Files)  │  ← Canonical Source of Truth
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│  SQLite Index Database               │  ← Local Index & Validation Logs
│  - file_registry                     │
│  - validation_logs                   │
│  - change_history                    │
└─────────────────────────────────────┘
```

### 2. Service Layer
```
┌─────────────────────────────────────┐
│  Repository Service                  │  ← File scanning, Git operations
├─────────────────────────────────────┤
│  Parser Service                      │  ← Header/metadata extraction
├─────────────────────────────────────┤
│  Validator Service                   │  ← Structure, ARC compliance
├─────────────────────────────────────┤
│  Mode Service                        │  ← Write/Learn/Lecture enforcement
└─────────────────────────────────────┘
```

### 3. API Layer (Next.js Route Handlers)
```
/api/repository/scan       - Scan repository, update index
/api/repository/files      - List files with metadata
/api/repository/file/:id   - Get file content
/api/validate/:id          - Validate specific file
/api/mode/set              - Set active mode (Write/Learn/Lecture)
/api/mode/status           - Get current mode status
```

### 4. UI Layer
```
/                         - Dashboard/registry view
/file/[id]                - File viewer/editor
/validate                 - Validation dashboard
/modes/write              - Write mode interface
/modes/learn              - Learn mode interface
/modes/lecture            - Lecture mode interface (with LOGE)
```

---

## Database Schema

### `file_registry`
```sql
CREATE TABLE file_registry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_path TEXT UNIQUE NOT NULL,
  file_type TEXT NOT NULL,           -- MEM, CIV-CORE, CIV-INDEX, CIV-SCHOLAR, etc.
  civilization TEXT,                 -- ROME, CHINA, ANGLIA, etc.
  era TEXT,                          -- Ancient, Medieval, Modern
  status TEXT,                       -- draft, published, frozen
  version TEXT,
  last_modified INTEGER,             -- Unix timestamp
  header_metadata TEXT,              -- JSON blob of parsed header
  validation_status TEXT,            -- valid, invalid, warning
  created_at INTEGER DEFAULT (strftime('%s', 'now')),
  updated_at INTEGER DEFAULT (strftime('%s', 'now'))
);
```

### `validation_logs`
```sql
CREATE TABLE validation_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER REFERENCES file_registry(id),
  validation_type TEXT NOT NULL,     -- header, structure, arc_compliance, etc.
  status TEXT NOT NULL,              -- pass, fail, warning
  message TEXT,
  details TEXT,                      -- JSON blob
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);
```

### `change_history`
```sql
CREATE TABLE change_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER REFERENCES file_registry(id),
  change_type TEXT NOT NULL,         -- create, update, delete
  diff TEXT,                         -- Git diff or change description
  mode TEXT,                         -- Write, Learn, Lecture
  confirmed BOOLEAN DEFAULT 0,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);
```

---

## File Classification Logic

The system must recognize and classify files based on naming patterns:

```typescript
const FILE_PATTERNS = {
  'MEM': /^MEM–.*\.md$/,
  'CIV-CORE': /^CIV–CORE–.*\.md$/,
  'CIV-INDEX': /^CIV–INDEX–.*\.md$/,
  'CIV-SCHOLAR': /^CIV–SCHOLAR–.*\.md$/,
  'CIV-SCHOLAR-PROTOCOL': /^CIV–SCHOLAR–PROTOCOL.*\.md$/,
} as const;
```

Extraction from path:
- `CIVILIZATION/ROME/MEM–ROME–HIST–MOMMSEN.md` → civilization: "ROME", type: "MEM"

---

## Header Parser Requirements

Each file must have a mandatory header block. Parser must extract:
- Version
- Status
- Era classification
- ARC source requirements
- Canonical section ordering
- Any other governance metadata

Example header format (to be confirmed from actual files):
```yaml
---
version: "1.0"
status: "draft"
era: "ancient"
civilization: "ROME"
arc_sources:
  primary: 3
  secondary: 2
sections:
  - header
  - context
  - narrative
  - sources
  - analysis
---
```

---

## Mode Enforcement

### Write Mode
- File editing/drafting
- **Blocked**: Learning extraction, pedagogical branching

### Learn Mode
- Extract learning events from MEM files
- Insert into CIV–SCHOLAR files at explicit anchors
- Require confirmation before writes
- Detect duplication

### Lecture Mode
- Pedagogical exposition only
- **Mandatory**: LOGE (Lecture Option Generation Engine)
- Generate multiple options (at least 3 distinct classes)
- Pause and await user choice
- No belief creation or learning insertion

---

## LOGE (Lecture Option Generation Engine)

When in Lecture Mode, must generate pedagogical options from these classes:

1. **Structural** - Organization, narrative flow, section ordering
2. **Historical** - Chronological framing, periodization
3. **Comparative** - Cross-civilizational comparisons
4. **Contradiction-centered** - Highlight tensions, competing interpretations
5. **Process-based** - Methodological approaches, source analysis
6. **Student-inquiry simulation** - Questions a student might ask

Rules:
- Options are **not conclusions**
- No ranking of interpretations
- System must pause and await user choice
- Silent continuation is forbidden

---

## ARC Compliance Validation

ARC (Source Requirements) validation without interpretation:

- **Ancient era**: Require ancient primary sources
- **Medieval era**: Require medieval primary sources
- **Modern era**: Require modern primary sources
- Verify verbatim quotations present where required
- Check balance between source classes
- Validate correct placement of quotations

**May flag**: Missing sources, imbalanced sourcing, structural noncompliance  
**May NOT**: Judge adequacy of arguments, decide historiographical merit

---

## Phase 1 Implementation Scope

### Repository Ingestion
- [x] File scanner (recursive directory traversal)
- [x] Header parser (extract metadata from file headers)
- [x] File classifier (determine type, civilization, era from path/name)
- [x] SQLite index creation and population
- [x] Minimal registry UI (table view of files with metadata)

### Out of Scope for Phase 1
- Write/Edit functionality
- Validation engine (full)
- Learn Mode
- Lecture Mode / LOGE
- ARC compliance checking
- Diff viewer

---

## Security & Permissions

- **Local-only**: No cloud dependencies
- **File system access**: Read-only initially, write requires explicit confirmation
- **Git operations**: Read-only for Phase 1, write requires explicit confirmation
- **No authentication**: Single-user local application

---

## File Structure

```
cmc-console/
├── app/                          # Next.js App Router
│   ├── api/                      # API route handlers
│   ├── (dashboard)/              # Dashboard routes
│   ├── file/                     # File viewer/editor
│   └── layout.tsx
├── components/                   # React components
│   ├── ui/                       # Base UI components
│   ├── file-registry/            # File registry components
│   └── modes/                    # Mode-specific components
├── lib/                          # Core logic
│   ├── db/                       # Database setup and queries
│   ├── services/                 # Business logic services
│   │   ├── repository.service.ts
│   │   ├── parser.service.ts
│   │   └── validator.service.ts
│   └── utils/                    # Utilities
├── types/                        # TypeScript definitions
├── public/                       # Static assets
└── database/                     # SQLite database files (gitignored)
    └── index.db
```

---

## Development Roadmap

### Phase 1: Repository Ingestion & Indexing ✅ (Current)
- File scanner
- Header parser
- File classification
- Minimal registry UI

### Phase 2: Validation Engine
- Header validation
- Section order validation
- ARC compliance checks
- Governance violation reporting

### Phase 3: Write Mode
- File editor
- Header editor
- Diff viewer
- Confirmation-gated writes

### Phase 4: Learn Mode
- Learning extraction
- Duplication detection
- Anchored insertion
- Confirmation-gated writes

### Phase 5: Lecture Mode
- Mode locking
- LOGE enforcement
- Explicit branching control
- Option generation UI

---

## Future Enhancements

### Phase 6: AI Video Generation for TEACH Mode (Planned)

**Vision**: Enhance TEACH mode with AI-generated video content to create immersive "holodeck-type" lessons that combine textual pedagogical exposition with visual/experiential media.

#### Objectives

- **Multi-Modal Pedagogical Exposition**: Extend TEACH mode output beyond text to include AI-generated video content
- **Immersive Learning Experience**: Create visually rich, contextually accurate representations of historical scenarios, structures, and events
- **Governance-Compliant Visual Media**: Ensure video generation adheres to TEACH mode principles (no epistemic authority, preserve contradictions, maintain TOGE)

#### Architecture Components

**1. Video Generation Service**
```
lib/services/video-generation.service.ts
- Interface with AI video generation APIs (Runway, Pika, Stable Video Diffusion, etc.)
- Convert TEACH mode narrative content into structured video generation specifications
- Manage video generation jobs, progress tracking, and result storage
```

**2. Video Generation API Route**
```
/api/teach/generate-video/route.ts
- Accept video generation specifications from TEACH mode LLM output
- Coordinate with video generation service
- Return video URLs or embedding paths
- Handle generation errors and fallbacks
```

**3. Video Player Component**
```
components/teach/VideoPlayer.tsx
- Display generated video content alongside text exposition
- Support branching video sequences based on TOGE option selections
- Provide controls for pause, replay, and navigation
```

**4. Enhanced TEACH Mode Output Format**

TEACH mode LLM output will include structured video generation specifications alongside text:

```typescript
interface TeachModeOutput {
  text: string;                    // Existing narrative text
  videoSpecs?: VideoGenerationSpec[];  // New: video generation commands
  togeOptions: TOGEOption[];       // Existing TOGE options
}

interface VideoGenerationSpec {
  sceneId: string;
  description: string;              // Scene narrative for video generation
  visualElements: {
    location?: string;
    characters?: string[];
    objects?: string[];
    atmosphere?: string;
    timeOfDay?: string;
  };
  duration?: number;                // Target duration in seconds
  style?: string;                   // Visual style reference
  position?: 'before' | 'after' | 'concurrent';  // Relative to text content
}
```

#### Governance Constraints

**Visual Media Must Respect TEACH Mode Principles**:

1. **No Epistemic Authority**
   - Visual representations are pedagogical illustrations, not assertions of historical truth
   - All video content must be clearly marked as "pedagogical representation" not "historical reconstruction"

2. **Contradiction Preservation**
   - When contradictions (SCL) exist in source material, video generation must either:
     - Present multiple visual interpretations side-by-side
     - Clearly indicate uncertainty or alternative perspectives
     - Defer to textual exposition for contradiction details

3. **TOGE Integration**
   - Video branching must respect TOGE option generation
   - User selection of TOGE options may trigger different video sequences
   - Video content should not pre-determine option selection

4. **CIV–CORE Authority**
   - Structural visualizations (architecture, governance systems) must reference CIV–CORE as authoritative source
   - Visual representations of constraints or failure modes must align with CIV–CORE definitions

5. **Source Attribution**
   - Video scenes should reference source MEM files when depicting specific historical scenarios
   - Visual elements should be traceable to MEM file content or CIV–CORE structural definitions

#### Implementation Considerations

**1. Video Generation Tool Selection**
- Evaluate AI video generation APIs for:
  - Historical accuracy (ability to represent ancient/medieval contexts)
  - Consistency (maintaining visual coherence across scenes)
  - Control (ability to specify detailed scene elements)
  - Cost and rate limits

**2. Content Generation Flow**
```
TEACH Mode LLM → Text + Video Specs → Video Generation Service → Video Assets
                                                                      ↓
                                                    TEACH Interface (Text + Video Player)
```

**3. Storage and Caching**
- Generated videos may be large; consider:
  - Local caching of generated videos
  - Compression and optimization
  - Lazy loading based on TOGE option selection

**4. Fallback Behavior**
- If video generation fails or is unavailable:
  - System should gracefully degrade to text-only TEACH mode
  - No disruption to core pedagogical exposition
  - User preference to disable video generation

**5. Interactive Video Sequences**
- Support for branching video paths based on user TOGE option selections
- Ability to pause video at decision points
- Replay and exploration of alternative video branches

#### Integration with Existing TEACH Mode

**Text Remains Primary**:
- Video content supplements but does not replace textual exposition
- All core TEACH mode functionality (TOGE, contradiction preservation, CIV–CORE authority) remains text-based
- Video provides visual reinforcement and immersive context

**TOGE Enhancement**:
- TOGE options may include video preview hints ("see visual reconstruction", "explore 3D model")
- Video generation can be triggered by specific option classes (e.g., Structural Options → architectural visualizations)

**Mem File Loading**:
- Loaded MEM files influence video generation specifications
- Visual scenes inspired by MEM content, extended across repository context

#### Technical Requirements

- **Dependencies**: AI video generation API client libraries
- **Configuration**: API keys, model selection, generation parameters
- **Error Handling**: Graceful degradation, retry logic, user feedback
- **Performance**: Async video generation, progress indicators, background processing

#### Documentation Updates Required

When implementing this enhancement:
- Update `CIV–SCHOLAR–PROTOCOL.md` to include video generation governance rules
- Update `ARCHITECTURE.md` (this document) with implementation details
- Create `VIDEO_GENERATION_GUIDE.md` for video generation specification format
- Update `CURSOR_SYSTEM_PROMPT.md` to include video generation capabilities in TEACH mode prompts

---

### Phase 7: Crusader Kings 3 Mod Integration (Planned)

**Vision**: Create a CK3 (Crusader Kings 3) mod that uses CMC data to enhance and make more realistic the AI strategy/behavior in the game, applying CIV–CORE structural constraints, MEM historical patterns, and SCHOLAR learning to game AI decision-making.

#### Objectives

- **Historical Realism in AI Strategy**: Apply CIV–CORE structural constraints to CK3 AI behavior patterns
- **Civilization-Specific AI Personality**: Use MEM files to inform civilization-specific decision-making tendencies
- **Dynamic Learning Integration**: Leverage SCHOLAR accumulated knowledge to refine AI behavior over time
- **Governance-Compliant Simulation**: Ensure game mechanics respect CMC governance principles while remaining playable

#### Architecture Components

**1. CK3 Data Export Service**
```
lib/services/ck3-export.service.ts
- Parse CIV–CORE files to extract structural constraints, failure modes, and behavioral rules
- Convert CIV–CORE sections (Governance, Military Doctrine, Economic Doctrine) to CK3 AI parameters
- Extract MEM file patterns to inform historical behavioral tendencies
- Format data as CK3 mod-compatible JSON/YAML configuration
```

**2. CK3 Mod Configuration Generator**
```
lib/services/ck3-mod-generator.service.ts
- Generate CK3 mod files from CMC data:
  - AI personality traits based on CIV–CORE identity axioms
  - Decision weights based on MEM historical patterns
  - Strategy preferences based on CIV–CORE military doctrine
  - Economic behaviors based on CIV–CORE economic doctrine
- Create civilization-specific AI characters and dynasties
- Generate event chains based on MEM historical narratives
```

**3. CIV–CORE → CK3 Parameter Mapping**

CIV–CORE structural constraints map to CK3 game mechanics:

```typescript
interface CIVCoreToCK3Mapping {
  // Governance Architecture (CIV–CORE Section V)
  governanceStructure: {
    centralization: number;      // From CIV–CORE governance analysis
    successionType: string;      // From legitimacy accounting
    vassalLoyaltyModifier: number; // From internal security analysis
  };
  
  // Military–Strategic Doctrine (CIV–CORE Section VIII)
  militaryStrategy: {
    offensiveTendency: number;   // From military doctrine analysis
    defensivePosture: number;    // From failure physics
    expansionRate: number;       // From strategic red lines
    warDecisionWeights: Record<string, number>; // From MEM war patterns
  };
  
  // Economic–Industrial Doctrine (CIV–CORE Section VI)
  economicBehavior: {
    developmentPriority: number; // From economic doctrine
    tradeFocus: number;          // From spatial geometry
    resourceManagement: Record<string, number>; // From economic constraints
  };
  
  // Failure Physics (CIV–CORE Section XIV)
  failureConditions: {
    stabilityThresholds: number[];  // Irreversibility grid indicators
    collapseTriggers: string[];     // Failure physics conditions
    recoveryCapability: number;     // Restoration invalidation analysis
  };
  
  // MEM Historical Patterns
  behavioralTendencies: {
    decisionPatterns: Array<{
      condition: string;         // Game state condition
      action: string;            // CK3 action type
      weight: number;            // Probability/priority
      source: string;            // MEM file reference
    }>;
    personalityTraits: string[]; // From MEM character analysis
    eventPreferences: Record<string, number>; // From MEM event patterns
  };
}
```

**4. SCHOLAR Learning → AI Refinement**

SCHOLAR accumulated knowledge informs AI behavior refinement:

```typescript
interface ScholarToCK3Learning {
  // Contradiction Patterns (SCL)
  contradictionAwareness: {
    conflictingPreferences: Array<{
      context: string;
      preferenceA: string;
      preferenceB: string;
      resolutionStrategy: 'weighted' | 'contextual' | 'preserve_tension';
    }>;
  };
  
  // Confidence Levels (SCR)
  confidenceBasedWeights: {
    highConfidenceActions: string[];    // Actions from high-SCR sources
    lowConfidenceActions: string[];     // Actions requiring caution
    uncertaintyMarkers: Record<string, number>; // SCR-based uncertainty
  };
  
  // Accumulated Learning
  learnedPatterns: Array<{
    pattern: string;              // Recurring historical pattern
    gameMechanic: string;         // CK3 mechanic to modify
    influence: number;            // Learning-derived weight
    sourceFiles: string[];        // MEM files contributing to pattern
  }>;
}
```

#### Governance Constraints

**CMC Data Remains Authoritative**:

1. **CIV–CORE Structural Constraints are Binding**
   - CK3 AI cannot violate CIV–CORE hard constraints (failure physics, strategic red lines)
   - Game mechanics must respect CIV–CORE governance architecture definitions
   - Irreversibility grid conditions must be reflected in game state transitions

2. **MEM Historical Patterns Inform but Don't Dictate**
   - MEM files provide behavioral tendencies, not deterministic outcomes
   - Game randomness and player agency must be preserved
   - MEM patterns suggest probabilities/weights, not fixed actions

3. **SCHOLAR Learning is Advisory for Refinement**
   - SCHOLAR accumulated knowledge refines AI behavior over time
   - Contradictions (SCL) create decision tension points in AI logic
   - Confidence levels (SCR) weight AI decision-making probabilities

4. **Game Simulation vs. Historical Truth**
   - CK3 is a simulation, not a historical reconstruction
   - CMC data enhances realism but cannot override game mechanics
   - Player agency and game balance take precedence over strict historical accuracy

5. **Civilization-Specific Mods**
   - Each civilization (ROME, CHINA, ANGLIA, etc.) has its own CK3 mod configuration
   - CIV–CORE–[CIV] and MEM–[CIV]–* files directly map to civilization-specific AI behaviors
   - Cross-civilizational comparisons from SCHOLAR inform diplomatic/interaction mechanics

#### Implementation Considerations

**1. CK3 Mod Format Compatibility**
- CK3 uses Paradox's mod system (JSON/YAML configuration files)
- Mods modify AI personality, decision weights, event triggers, and game rules
- Must respect CK3 modding limitations and API constraints

**2. Data Export Pipeline**
```
CMC Repository → Parse CIV–CORE/MEM/SCHOLAR → Extract Game-Relevant Data → 
Transform to CK3 Format → Generate Mod Files → Validate Mod Structure → 
Package for CK3 Mod Installation
```

**3. AI Parameter Mapping Strategy**
- **Structural Constraints**: CIV–CORE hard rules → CK3 AI decision modifiers
- **Historical Patterns**: MEM behavioral tendencies → CK3 personality traits and event weights
- **Learning Refinement**: SCHOLAR contradictions/confidence → CK3 AI uncertainty/weighting adjustments

**4. Civilization-Specific Configurations**
- Each CIV–CORE file generates a civilization-specific AI configuration
- MEM files contribute civilization-specific behavioral patterns
- SCHOLAR learning refines civilization-specific decision-making over time

**5. Dynamic Updates**
- As CMC repository evolves (new MEM files, SCHOLAR learning updates), mod can be regenerated
- Version tracking ensures mod updates align with CMC data changes
- Users can opt-in to automatic mod regeneration based on CMC updates

**6. Mod Structure**
```
ck3-cmc-mod/
├── descriptor.mod           # CK3 mod metadata
├── common/                  # Common game data
│   ├── scripted_effects/    # CIV–CORE-derived game effects
│   ├── scripted_triggers/   # MEM pattern-based triggers
│   └── scripted_values/     # SCHOLAR learning-derived values
├── common/ai_weights/       # CIV–CORE constraint-based AI weights
├── common/decisions/        # MEM pattern-informed decisions
├── common/character_interactions/  # SCHOLAR-refined interactions
└── events/                  # MEM-inspired event chains
```

**7. Integration with CMC Console**
- CMC Console provides "Export to CK3 Mod" functionality
- Export service reads currently loaded civilization data (CIV–CORE, MEM, SCHOLAR)
- Generates mod files in CK3-compatible format
- Validates mod structure before export

#### Technical Requirements

**1. CK3 Modding API**
- Understand CK3 mod file structure and format
- Implement CK3-compatible configuration generation
- Validate generated mods against CK3 requirements

**2. Data Transformation**
- Parse CIV–CORE structured text to extract game-relevant constraints
- Extract behavioral patterns from MEM files
- Convert SCHOLAR learning data to game mechanics

**3. Civilization Mapping**
- Map CMC civilizations (ROME, CHINA, ANGLIA, etc.) to CK3 cultures/religions
- Handle time period differences (CMC spans broader temporal scope)
- Account for CK3 game mechanics limitations

**4. Export Service**
```
lib/services/ck3-export/
├── core-parser.ts           # Parse CIV–CORE constraints
├── mem-pattern-extractor.ts # Extract MEM behavioral patterns
├── scholar-learning-mapper.ts # Map SCHOLAR to game mechanics
├── ck3-mod-generator.ts     # Generate CK3 mod files
└── mod-validator.ts         # Validate generated mods
```

#### Documentation Updates Required

When implementing this enhancement:
- Create `CK3_MOD_INTEGRATION_GUIDE.md` for CIV–CORE → CK3 parameter mapping
- Create `CK3_EXPORT_SERVICE.md` for export service API documentation
- Update `ARCHITECTURE.md` (this document) with implementation details
- Document CK3 mod structure and configuration format in `CK3_MOD_STRUCTURE.md`
- Create examples showing how CIV–CORE constraints map to CK3 AI parameters

#### Relationship to CMC Core Principles

**No Epistemic Authority in Game**: The mod enhances AI realism but remains a game simulation. CMC data informs but doesn't assert historical truth in gameplay.

**Additive-Only Modifications**: Mod configuration changes must be traceable to CMC data updates. Version tracking links mod versions to CMC file versions.

**Contradiction Preservation**: When MEM files contain contradictions (SCL), AI creates decision tension points rather than forcing resolution. Game AI preserves contradiction awareness.

**Civilization-Specific**: Each civilization has distinct AI behavior derived from its CIV–CORE and MEM files, preserving CMC's civilization-specific approach.

---

### Phase 8: Educational Curriculum Tool (Planned)

**Vision**: Create an educational tool that supplements and enhances traditional school history curriculum by providing CMC-based pedagogical content, primary source engagement, and structured historical inquiry aligned with educational standards.

#### Objectives

- **Curriculum Alignment**: Map CMC content to traditional history curriculum standards (Common Core, AP World History, IB History, etc.)
- **Primary Source Engagement**: Use MEM files as accessible primary source material for students
- **Structured Inquiry**: Leverage TEACH mode for curriculum-aligned lessons and activities
- **Assessment Integration**: Provide tools for teachers to assess student understanding of historical structures and patterns
- **Multi-Level Learning**: Support different educational levels (middle school, high school, AP/IB, college)

#### Architecture Components

**1. Curriculum Mapping Service**
```
lib/services/curriculum-mapping.service.ts
- Map CMC civilizations and MEM files to curriculum standards
- Align CIV–CORE structural concepts with learning objectives
- Generate curriculum-aligned lesson plans from TEACH mode content
- Track coverage of curriculum requirements
```

**2. Educational Content Generator**
```
lib/services/educational-content.service.ts
- Generate student-facing content from TEACH mode output
- Create age-appropriate adaptations of MEM files
- Produce guided inquiry questions based on CIV–CORE structures
- Generate assessment materials aligned with curriculum standards
```

**3. Student Interface**
```
components/education/StudentInterface.tsx
- Age-appropriate UI for students
- Interactive exploration of MEM files
- Guided inquiry activities
- Progress tracking and learning paths
- Primary source analysis tools
```

**4. Teacher Dashboard**
```
components/education/TeacherDashboard.tsx
- Curriculum coverage visualization
- Student progress tracking
- Assessment creation and grading tools
- Lesson plan customization
- Resource library (MEM files, CIV–CORE summaries, SCHOLAR insights)
```

**5. Assessment Engine**
```
lib/services/assessment.service.ts
- Generate questions based on CIV–CORE structural concepts
- Create primary source analysis assessments from MEM files
- Track student understanding of historical patterns
- Provide feedback aligned with curriculum standards
```

#### Curriculum Integration Strategy

**1. Standards Alignment**

```typescript
interface CurriculumMapping {
  standard: string;              // e.g., "CCSS.ELA-LITERACY.RH.9-10.1"
  standardDescription: string;
  cmcContent: {
    memFiles: string[];          // MEM files addressing this standard
    civCoreSections: string[];   // CIV–CORE sections relevant
    scholarInsights: string[];   // SCHOLAR learning applicable
  };
  learningObjectives: string[];
  assessmentTypes: string[];     // Types of assessments for this standard
}
```

**2. Grade Level Adaptations**

- **Middle School (6-8)**: Simplified MEM content, visual storytelling, basic CIV–CORE concepts
- **High School (9-12)**: Full MEM files, CIV–CORE structural analysis, primary source engagement
- **AP/IB Level**: Advanced CIV–CORE analysis, contradiction exploration (SCL), SCHOLAR synthesis
- **College Level**: Full CMC system access, independent research using MEM files, CIV–CORE constraint analysis

**3. Subject Area Integration**

- **World History**: Cross-civilizational comparisons using multiple CIV–CORE files
- **AP World History**: CIV–CORE structural analysis, MEM primary sources, periodization
- **European History**: ROME, ANGLIA, FRANCIA, GERMANIA CIV–CORE and MEM files
- **Asian History**: CHINA, INDIA, PERSIA CIV–CORE and MEM files
- **Comparative Government**: CIV–CORE Governance Architecture sections across civilizations

#### Educational Features

**1. Primary Source Engagement**

MEM files serve as accessible primary source material:
- **Structured Analysis**: MEM files provide structured primary source engagement
- **ARC Compliance**: Students learn proper citation and source evaluation
- **Contradiction Awareness**: Students encounter preserved contradictions (SCL) as historical reality
- **Source Evaluation**: Students analyze source reliability using ARC categories

**2. Structured Historical Inquiry**

CIV–CORE provides framework for historical analysis:
- **Structural Thinking**: Students learn to analyze civilizations through constraint frameworks
- **Failure Analysis**: CIV–CORE Failure Physics teaches students about historical collapse patterns
- **Comparative Analysis**: Multiple CIV–CORE files enable cross-civilizational comparison
- **Legitimacy Analysis**: Students understand how authority and legitimacy function historically

**3. TEACH Mode Lessons**

TEACH mode generates curriculum-aligned lessons:
- **Topic Generation**: TEACH mode generates 4 topics aligned with curriculum units
- **TOGE Options**: Students explore multiple perspectives through TOGE option classes
- **Interactive Learning**: Students guide lessons through option selection
- **Immersive Content**: Future video generation enhances engagement

**4. Assessment Tools**

- **Primary Source Analysis**: Questions based on MEM file content and ARC requirements
- **Structural Analysis**: Assessments on CIV–CORE concepts (governance, failure modes, constraints)
- **Comparative Essays**: Cross-civilizational analysis using multiple CIV–CORE files
- **Contradiction Analysis**: Students identify and analyze preserved contradictions (SCL)
- **Historical Argumentation**: Students construct arguments using MEM evidence and CIV–CORE frameworks

#### Implementation Considerations

**1. Curriculum Standards Database**

```
lib/data/curriculum-standards/
├── common-core.json          # Common Core State Standards
├── ap-world-history.json     # AP World History curriculum
├── ib-history.json          # IB History curriculum
├── state-standards/          # State-specific standards
└── mapping/                  # CMC content → standards mappings
```

**2. Age-Appropriate Content Adaptation**

```typescript
interface ContentAdaptation {
  originalContent: string;     // Full CMC content
  adaptedContent: string;      // Age-appropriate version
  gradeLevel: string;          // Target grade level
  simplificationLevel: number; // 1-10 complexity reduction
  vocabularyAdjustments: Record<string, string>; // Term replacements
  conceptReductions: string[]; // Concepts simplified or removed
}
```

**3. Lesson Plan Generation**

TEACH mode output → Structured lesson plans:

```typescript
interface LessonPlan {
  title: string;
  curriculumStandards: string[];
  learningObjectives: string[];
  duration: number;            // Minutes
  materials: string[];         // Required MEM files, CIV–CORE sections
  activities: Array<{
    type: 'primary_source' | 'structural_analysis' | 'comparison' | 'discussion';
    description: string;
    memFiles?: string[];
    civCoreSections?: string[];
    assessment?: string;
  }>;
  assessments: Assessment[];
  extensions: string[];         // Additional resources
}
```

**4. Student Progress Tracking**

```typescript
interface StudentProgress {
  studentId: string;
  curriculumCoverage: {
    standard: string;
    completed: boolean;
    masteryLevel: number;      // 0-100
    assessments: string[];
  }[];
  memFilesEngaged: string[];
  civCoreConceptsMastered: string[];
  learningPath: LearningPathStep[];
}
```

**5. Teacher Tools**

- **Curriculum Planner**: Visualize curriculum coverage, identify gaps
- **Resource Library**: Searchable MEM files, CIV–CORE summaries, SCHOLAR insights
- **Assessment Builder**: Create custom assessments from CMC content
- **Student Analytics**: Track class progress, identify struggling concepts
- **Lesson Customization**: Adapt TEACH mode lessons for specific classes

#### Governance Constraints

**1. Educational Standards Compliance**

- Content must align with curriculum standards without compromising CMC governance
- Age-appropriate adaptations must preserve core historical accuracy
- Assessments must measure curriculum objectives while respecting CMC principles

**2. No Epistemic Authority in Education**

- CMC content provides structured inquiry, not definitive answers
- Students learn to analyze contradictions, not resolve them
- TEACH mode maintains pedagogical exploration, not authoritative conclusions

**3. Primary Source Integrity**

- MEM files remain evidence-bearing, non-doctrinal
- ARC compliance teaches proper source evaluation
- Students engage with primary sources, not synthesized interpretations

**4. Contradiction as Learning Opportunity**

- Preserved contradictions (SCL) become teaching moments
- Students learn that history contains unresolved tensions
- Assessment includes contradiction identification and analysis

**5. Civilization-Specific Learning**

- Each civilization (ROME, CHINA, etc.) provides distinct learning modules
- Cross-civilizational comparison enables comparative analysis
- Students understand civilizations as distinct structural systems

#### Technical Requirements

**1. Multi-Tenant Architecture**

- Support multiple schools/districts
- Student and teacher account management
- Class and assignment organization
- Privacy and data protection (FERPA compliance)

**2. Content Delivery**

- Age-appropriate UI/UX for different grade levels
- Responsive design for various devices
- Offline capability for limited connectivity
- Accessibility compliance (WCAG standards)

**3. Assessment Infrastructure**

- Question bank from CMC content
- Automated grading for objective questions
- Rubric-based grading for essays and analysis
- Progress tracking and analytics

**4. Integration Capabilities**

- LMS integration (Canvas, Google Classroom, etc.)
- Gradebook export
- Parent/guardian portal
- Reporting and analytics

#### Documentation Updates Required

When implementing this enhancement:
- Create `EDUCATIONAL_TOOL_GUIDE.md` for curriculum integration
- Create `CURRICULUM_MAPPING.md` documenting standards alignment
- Create `ASSESSMENT_FRAMEWORK.md` for assessment design
- Update `ARCHITECTURE.md` (this document) with implementation details
- Create teacher training materials for CMC educational tool usage

#### Relationship to CMC Core Principles

**No Epistemic Authority in Education**: Students learn structured inquiry, not definitive historical truth. CMC provides frameworks for analysis, not answers.

**Primary Source Engagement**: MEM files serve as accessible primary sources, teaching students proper source evaluation and citation (ARC compliance).

**Contradiction Preservation**: Preserved contradictions (SCL) become learning opportunities, teaching students that history contains unresolved tensions.

**Structured Analysis**: CIV–CORE provides frameworks for understanding civilizations structurally, teaching analytical thinking skills.

**Additive-Only Learning**: As CMC repository grows, educational content expands additively, providing more resources over time.

---

### Phase 9: Additional Innovative Enhancements (Conceptual)

The following enhancements represent additional innovative applications of the CMC system:

#### 9.1. Historical Pattern Prediction & Analysis Tool

**Vision**: Use CIV–CORE failure physics and SCHOLAR learning to identify structural patterns that signal civilizational stress, transformation, or collapse indicators.

**Key Features**:
- Apply CIV–CORE failure indicators as diagnostic tools
- Use SCHOLAR accumulated patterns for pattern recognition
- Preserve contradictions (SCL) as uncertainty markers
- Support comparative analysis across civilizations

**Use Cases**: Political science research, civilizational stability analysis, cross-civilizational comparison studies

---

#### 9.2. Knowledge Graph & Relationship Visualization

**Vision**: Interactive graph visualization showing relationships between civilizations, MEM files, doctrines, contradictions, and structural patterns.

**Key Features**:
- Visualize CMC corpus structure as interconnected network
- Highlight contradictions (SCL) as relationship nodes
- Show CIV–CORE constraint networks
- Map MEM file connections across civilizations

**Use Cases**: Research navigation, discovery of hidden connections, pattern visualization for analysis

---

#### 9.3. Historical Debate & Contradiction Exploration Platform

**Vision**: Structured debate/simulation platform using preserved contradictions (SCL) to explore multiple historical perspectives side-by-side.

**Key Features**:
- Make contradictions (SCL) interactive and explorable
- Present multiple valid perspectives without forcing resolution
- TOGE options become debate pathways
- Maintain CMC's "no epistemic authority" principle

**Use Cases**: Academic debates, student exercises, multi-perspective historical exploration

---

#### 9.4. Policy Analysis Tool Using Historical Constraints

**Vision**: Apply CIV–CORE structural constraints and MEM historical patterns to analyze modern policy decisions through a civilizational lens.

**Key Features**:
- Use historical constraints to inform modern analysis
- Provide structural frameworks (CIV–CORE) for policy evaluation
- Draw on historical failure patterns (Failure Physics)
- Do not assert truth, but highlight structural constraints

**Use Cases**: Policy research, governance analysis, strategic planning with historical context

---

#### 9.5. Collaborative Research Platform

**Vision**: Multi-user platform for historians to contribute MEM files with CMC governance ensuring quality, ARC compliance, and contradiction preservation.

**Key Features**:
- Scale CMC through collaborative contribution
- Governance validation ensures quality
- ARC compliance enforced automatically
- Preserve contradiction awareness in contributions

**Use Cases**: Academic collaboration, crowdsourced historical research, quality-controlled historical database building

---

#### 9.6. Virtual Museum & Exhibition Builder

**Vision**: Generate interactive virtual museum exhibits from MEM files and CIV–CORE structures, with immersive experiences (enhanced by future video generation).

**Key Features**:
- Make CMC content accessible to general audiences
- Combine MEM primary sources with visual experiences
- Use TEACH mode for exhibit narratives
- Maintain historical accuracy through governance

**Use Cases**: Public education, museum partnerships, virtual field trips, cultural heritage preservation

---

#### 9.7. Domain-Specific Historical LLM Training

**Vision**: Use CMC corpus as training data for specialized historical LLMs that respect governance principles (no epistemic authority, contradiction preservation).

**Key Features**:
- Produce governance-compliant historical AI
- Trained on structured, validated historical data
- Respects contradictions and uncertainty
- ARC-compliant source usage

**Use Cases**: Research assistance, educational AI tutors, historical analysis tools, governance-compliant AI for historical inquiry

---

#### 9.8. Interactive Multi-Civilizational Timeline

**Vision**: Visual timeline showing events across civilizations simultaneously, with MEM file connections, CIV–CORE structural markers, and contradiction indicators.

**Key Features**:
- Cross-civilizational synchronization visualization
- Show temporal relationships between civilizations
- Highlight contradictions at specific time points
- Interactive exploration of historical connections

**Use Cases**: Comparative historical research, educational timeline exploration, pattern discovery across time and civilizations

---

## Architectural Optimizations for Future Enhancements

To prepare for the future enhancements described above, the following architectural optimizations should be implemented **now** (or in the near term):

### 1. Relationship & Connection Tracking

**Current State**: MEM connections are validated but not stored/indexed.

**Optimization Needed**:
```sql
-- New table: file_relationships
CREATE TABLE IF NOT EXISTS file_relationships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_file_id INTEGER NOT NULL,
  target_file_id INTEGER NOT NULL,
  relationship_type TEXT NOT NULL CHECK(relationship_type IN (
    'mem_connection',      -- MEM file references another MEM
    'civ_core_reference', -- MEM references CIV–CORE section
    'doctrine_reference',  -- MEM references doctrine
    'contradiction',      -- SCL contradiction between files
    'temporal_sequence',  -- Temporal relationship
    'structural_similarity' -- Similar structural patterns
  )),
  relationship_context TEXT, -- Description of relationship
  strength REAL DEFAULT 1.0,  -- Relationship strength (0-1)
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (source_file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  FOREIGN KEY (target_file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  UNIQUE(source_file_id, target_file_id, relationship_type)
);

CREATE INDEX IF NOT EXISTS idx_file_relationships_source ON file_relationships(source_file_id);
CREATE INDEX IF NOT EXISTS idx_file_relationships_target ON file_relationships(target_file_id);
CREATE INDEX IF NOT EXISTS idx_file_relationships_type ON file_relationships(relationship_type);
```

**Service**: `lib/services/relationship-extractor.service.ts`
- Extract MEM connections during file parsing
- Identify CIV–CORE references in MEM files
- Track MEM connections (all must be same civilization per CIV–MEM–TEMPLATE v1.9)
- Build relationship graph for visualization

**Why Now**: Foundation for Knowledge Graph (9.2), Timeline (9.8), and Pattern Analysis (9.1)

---

### 2. Contradiction (SCL) Indexing

**Current State**: Contradictions are mentioned in SCHOLAR but not systematically indexed.

**Optimization Needed**:
```sql
-- New table: contradictions (SCL)
CREATE TABLE IF NOT EXISTS contradictions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contradiction_id TEXT UNIQUE NOT NULL, -- SCL identifier
  file_id_1 INTEGER NOT NULL,
  file_id_2 INTEGER,
  contradiction_type TEXT NOT NULL CHECK(contradiction_type IN (
    'mem_vs_mem',           -- Two MEM files contradict
    'mem_vs_core',          -- MEM contradicts CIV–CORE
    'mem_vs_doctrine',      -- MEM contradicts doctrine
    'scholar_internal',     -- Internal SCHOLAR contradiction
    'tier_a_conflict',      -- Primary source conflict (PSCRC)
    'tier_b_conflict'       -- Contemporaneous corroboration conflict
  )),
  description TEXT NOT NULL,
  context TEXT,              -- Where contradiction appears
  tier TEXT,                 -- PSCRC tier if applicable
  preserved BOOLEAN NOT NULL DEFAULT 1, -- Contradiction preserved, not resolved
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id_1) REFERENCES file_registry(id) ON DELETE CASCADE,
  FOREIGN KEY (file_id_2) REFERENCES file_registry(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_contradictions_file1 ON contradictions(file_id_1);
CREATE INDEX IF NOT EXISTS idx_contradictions_file2 ON contradictions(file_id_2);
CREATE INDEX IF NOT EXISTS idx_contradictions_type ON contradictions(contradiction_type);
```

**Service**: `lib/services/contradiction-extractor.service.ts`
- Extract contradictions from SCHOLAR files (SCL entries)
- Identify contradictions during MEM file parsing
- Track PSCRC tier conflicts
- Support contradiction exploration UI

**Why Now**: Foundation for Debate Platform (9.3), Pattern Analysis (9.1), and Knowledge Graph (9.2)

---

### 3. Temporal/Date Indexing

**Current State**: Dates are in file headers but not indexed for temporal queries.

**Optimization Needed**:
```sql
-- New table: temporal_index
CREATE TABLE IF NOT EXISTS temporal_index (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER NOT NULL,
  date_type TEXT NOT NULL CHECK(date_type IN ('start', 'end', 'event', 'period')),
  date_value INTEGER,        -- Normalized date (e.g., -753 for 753 BC, 476 for 476 AD)
  date_display TEXT,        -- Original date string (e.g., "753 BC", "476 AD")
  era TEXT CHECK(era IN ('BC', 'AD')),
  uncertainty TEXT,         -- Date uncertainty (e.g., "c.", "circa", "approximately")
  context TEXT,              -- What this date represents
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_temporal_index_file ON temporal_index(file_id);
CREATE INDEX IF NOT EXISTS idx_temporal_index_date ON temporal_index(date_value);
CREATE INDEX IF NOT EXISTS idx_temporal_index_era ON temporal_index(era);
```

**Service**: `lib/services/temporal-parser.service.ts`
- Parse dates from MEM file headers and content
- Normalize dates to comparable format (BC/AD with year number)
- Extract date ranges and periods
- Support temporal queries and timeline generation

**Why Now**: Foundation for Timeline (9.8), Pattern Analysis (9.1), and Educational Tool (Phase 8)

---

### 4. Pattern Extraction & Storage

**Current State**: Patterns are mentioned in SCHOLAR but not systematically extracted and stored.

**Optimization Needed**:
```sql
-- New table: historical_patterns
CREATE TABLE IF NOT EXISTS historical_patterns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pattern_id TEXT UNIQUE NOT NULL,
  pattern_type TEXT NOT NULL CHECK(pattern_type IN (
    'structural_constraint',  -- From CIV–CORE
    'failure_mode',          -- From CIV–CORE Failure Physics
    'behavioral_tendency',   -- From MEM files
    'recurring_event',       -- From MEM files
    'doctrinal_pattern',     -- From doctrines
    'cross_civilizational'  -- Pattern across multiple civs
  )),
  pattern_description TEXT NOT NULL,
  source_files TEXT,          -- JSON array of file IDs
  civilizations TEXT,          -- JSON array of civilizations
  confidence_level TEXT,      -- SCR confidence if applicable
  recurrence_count INTEGER,   -- How many times pattern appears
  first_detected_at INTEGER,
  last_updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (pattern_id) REFERENCES file_registry(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_patterns_type ON historical_patterns(pattern_type);
CREATE INDEX IF NOT EXISTS idx_patterns_civilizations ON historical_patterns(civilizations);
```

**Service**: `lib/services/pattern-extractor.service.ts`
- Extract patterns from SCHOLAR learning entries
- Identify recurring patterns across MEM files
- Extract structural patterns from CIV–CORE
- Support pattern-based queries and analysis

**Why Now**: Foundation for Pattern Prediction (9.1), Policy Analysis (9.4), and Knowledge Graph (9.2)

---

### 5. Structural Constraint Indexing

**Current State**: CIV–CORE constraints are in files but not queryable.

**Optimization Needed**:
```sql
-- New table: structural_constraints
CREATE TABLE IF NOT EXISTS structural_constraints (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  civ_core_file_id INTEGER NOT NULL,
  constraint_type TEXT NOT NULL CHECK(constraint_type IN (
    'governance_architecture',
    'military_doctrine',
    'economic_doctrine',
    'failure_physics',
    'strategic_red_line',
    'irreversibility_condition',
    'legitimacy_requirement'
  )),
  section_number TEXT,        -- CIV–CORE section (e.g., "V", "VIII", "XIV")
  constraint_description TEXT NOT NULL,
  constraint_value TEXT,      -- JSON for structured constraints
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (civ_core_file_id) REFERENCES file_registry(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_constraints_file ON structural_constraints(civ_core_file_id);
CREATE INDEX IF NOT EXISTS idx_constraints_type ON structural_constraints(constraint_type);
```

**Service**: `lib/services/constraint-extractor.service.ts`
- Parse CIV–CORE sections to extract constraints
- Index governance architecture rules
- Extract failure physics conditions
- Extract strategic red lines
- Support constraint-based queries

**Why Now**: Foundation for Policy Analysis (9.4), CK3 Mod (Phase 7), and Pattern Analysis (9.1)

---

### 6. Export Format Infrastructure

**Current State**: No standardized export formats for external tools.

**Optimization Needed**:
```typescript
// lib/services/export.service.ts
export interface ExportFormat {
  format: 'json' | 'yaml' | 'graphml' | 'csv' | 'rdf' | 'training_data';
  includeRelationships: boolean;
  includeContradictions: boolean;
  includeTemporalData: boolean;
  includePatterns: boolean;
  civilization?: string;
}

export function exportCMCData(format: ExportFormat): Promise<string | Buffer>;
```

**Formats to Support**:
- **JSON**: For API consumption, CK3 mod generation
- **GraphML**: For knowledge graph visualization
- **RDF/Turtle**: For semantic web integration
- **Training Data**: For LLM training (governance-compliant)
- **CSV**: For spreadsheet analysis

**Why Now**: Foundation for all export-based enhancements (CK3 Mod, LLM Training, Knowledge Graph)

---

### 7. Confidence Level (SCR) Tracking

**Current State**: SCR mentioned in SCHOLAR but not systematically tracked.

**Optimization Needed**:
```sql
-- New table: confidence_levels (SCR)
CREATE TABLE IF NOT EXISTS confidence_levels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER NOT NULL,
  entry_reference TEXT,      -- Reference to specific SCHOLAR entry
  confidence_level TEXT NOT NULL CHECK(confidence_level IN (
    'high', 'medium', 'low', 'uncertain'
  )),
  confidence_score REAL,      -- 0-1 numeric score
  source_files TEXT,          -- JSON array of source MEM file IDs
  rationale TEXT,            -- Why this confidence level
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_confidence_file ON confidence_levels(file_id);
CREATE INDEX IF NOT EXISTS idx_confidence_level ON confidence_levels(confidence_level);
```

**Service**: `lib/services/confidence-tracker.service.ts`
- Extract SCR entries from SCHOLAR files
- Track confidence levels for learning entries
- Support confidence-weighted queries
- Enable uncertainty-aware analysis

**Why Now**: Foundation for Pattern Analysis (9.1), Policy Analysis (9.4), and Debate Platform (9.3)

---

### 8. Enhanced File Metadata Extraction

**Current State**: Basic header metadata is extracted, but deeper structural data is not.

**Optimization Needed**:
```sql
-- Extend file_registry with additional indexed fields
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS mem_connections_count INTEGER DEFAULT 0;
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS cross_civ_connections_count INTEGER DEFAULT 0; -- Historical tracking only; new files must have all same-civ connections per CIV–MEM–TEMPLATE v1.9
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS contradiction_count INTEGER DEFAULT 0;
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS pattern_count INTEGER DEFAULT 0;
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS date_start INTEGER;
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS date_end INTEGER;
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS extracted_constraints TEXT; -- JSON
ALTER TABLE file_registry ADD COLUMN IF NOT EXISTS extracted_patterns TEXT;   -- JSON
```

**Service**: Enhanced parsing in `lib/services/parser.service.ts`
- Extract and count MEM connections during parsing
- Extract temporal dates during parsing
- Pre-compute relationship counts
- Store extracted constraints and patterns

**Why Now**: Improves query performance for all future enhancements

---

### 9. Graph-Friendly Data Structures

**Current State**: Relational database only.

**Optimization Needed**:
```typescript
// lib/services/graph-builder.service.ts
export interface GraphNode {
  id: string;
  type: 'file' | 'civilization' | 'contradiction' | 'pattern' | 'constraint';
  label: string;
  properties: Record<string, any>;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: string;
  weight?: number;
  properties?: Record<string, any>;
}

export interface KnowledgeGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export function buildKnowledgeGraph(civilization?: string): KnowledgeGraph;
```

**Why Now**: Foundation for Knowledge Graph visualization (9.2) and relationship exploration

---

### 10. API Endpoints for Future Enhancements

**Optimization Needed**:
```typescript
// New API routes to prepare for future enhancements
/api/relationships/          // Get file relationships
/api/contradictions/         // Get contradictions (SCL)
/api/patterns/              // Get historical patterns
/api/timeline/              // Get temporal data for timeline
/api/constraints/           // Get structural constraints
/api/graph/                 // Get knowledge graph data
/api/export/                // Export in various formats
```

**Why Now**: Provides foundation APIs that future enhancements can build upon

---

### Implementation Priority

**High Priority (Implement Soon)**:
1. Relationship & Connection Tracking (foundation for multiple enhancements)
2. Temporal/Date Indexing (needed for Timeline, Pattern Analysis)
3. Enhanced File Metadata Extraction (improves all queries)

**Medium Priority (Implement Next)**:
4. Contradiction (SCL) Indexing (needed for Debate Platform, Pattern Analysis)
5. Pattern Extraction & Storage (needed for Pattern Prediction)
6. Export Format Infrastructure (needed for CK3 Mod, LLM Training)

**Lower Priority (Can Wait)**:
7. Structural Constraint Indexing (can be added when Policy Analysis is implemented)
8. Confidence Level (SCR) Tracking (can be added when Pattern Analysis is implemented)
9. Graph-Friendly Data Structures (can be added when Knowledge Graph is implemented)
10. API Endpoints (can be added incrementally as enhancements are built)

---

## Governance Enforcement Points

1. **Parser**: Validates header structure, flags missing required fields
2. **Classifier**: Ensures files follow naming conventions
3. **Validator**: Checks ARC compliance, section ordering
4. **Mode Service**: Enforces mode boundaries (blocks invalid operations)
5. **Write Service**: Ensures additive-only modifications, requires diffs
6. **UI**: Visual indicators of governance violations, mode restrictions

---

## Notes

- All writes must be explicit, additive, and confirmed
- Diffs must be shown before any file modification
- Version bumps must be explicit
- Contradictions must be preserved, not resolved
- The system never asserts historical truth or resolves tensions

