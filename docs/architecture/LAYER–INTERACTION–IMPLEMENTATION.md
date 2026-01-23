# Layer Interaction Protocol — Implementation Specification

## Overview

This document provides the technical implementation specification for the LAYER–INTERACTION–PROTOCOL v1.0. It extends the existing CMC Console architecture with concrete database schemas, TypeScript interfaces, and service definitions.

---

## 1. Database Schema Extensions

### 1.1 Learning Event Records (LER)

```sql
-- Tracks MEM → SCHOLAR ingestion events
CREATE TABLE IF NOT EXISTS learning_event_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ler_id TEXT UNIQUE NOT NULL,              -- LER–[CIV]–[TIMESTAMP]
  civilization TEXT NOT NULL,
  source_mem_files TEXT NOT NULL,           -- JSON array of MEM file paths
  ingestion_mode TEXT NOT NULL CHECK(ingestion_mode IN ('SINGLE', 'BATCH', 'COMPARATIVE')),
  
  -- Extraction summary
  claims_extracted INTEGER NOT NULL DEFAULT 0,
  contradictions_noted INTEGER NOT NULL DEFAULT 0,
  source_tier_primary INTEGER NOT NULL DEFAULT 0,
  source_tier_contextual INTEGER NOT NULL DEFAULT 0,
  source_tier_secondary INTEGER NOT NULL DEFAULT 0,
  source_tier_critical INTEGER NOT NULL DEFAULT 0,
  
  -- Pattern effects (JSON arrays of pattern IDs/descriptions)
  patterns_confirmed TEXT,                  -- JSON array
  patterns_stressed TEXT,                   -- JSON array
  novel_candidates TEXT,                    -- JSON array
  
  confidence TEXT NOT NULL CHECK(confidence IN ('HIGH', 'MED', 'LOW', 'UNCERTAIN')),
  status TEXT NOT NULL CHECK(status IN ('PENDING', 'CONFIRMED', 'REJECTED')) DEFAULT 'PENDING',
  
  -- Metadata
  scholar_file_id INTEGER REFERENCES file_registry(id),
  scholar_phase TEXT CHECK(scholar_phase IN ('ACCUMULATION', 'CONSTRAINT_GRAMMAR', 'SNAPSHOT')),
  user_id TEXT,                             -- User who confirmed (if applicable)
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  confirmed_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_ler_civilization ON learning_event_records(civilization);
CREATE INDEX IF NOT EXISTS idx_ler_status ON learning_event_records(status);
CREATE INDEX IF NOT EXISTS idx_ler_created ON learning_event_records(created_at);
```

### 1.2 RLL Registry

```sql
-- Tracks RLL lifecycle across SCHOLAR and CORE
CREATE TABLE IF NOT EXISTS rll_registry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rll_id TEXT UNIQUE NOT NULL,              -- RLL–[NNNN]
  civilization TEXT NOT NULL,
  
  -- RLL specification
  constraint_type TEXT NOT NULL CHECK(constraint_type IN (
    'SEQUENCING',
    'FAILURE_CONDITION', 
    'LEGITIMACY_DEPENDENCY',
    'STRUCTURAL_IMPOSSIBILITY'
  )),
  scope TEXT NOT NULL CHECK(scope IN ('CIVILIZATION_SPECIFIC', 'CROSS_CIVILIZATIONAL')),
  description TEXT NOT NULL,
  activation_trigger TEXT NOT NULL,
  affected_file_classes TEXT NOT NULL,      -- JSON array: ['MEM', 'SCHOLAR', 'DOCTRINE', etc.]
  
  -- Failure-first grounding
  failure_grounding TEXT NOT NULL,          -- What breaks when violated
  historical_violations TEXT,               -- JSON array of historical instances
  
  -- Falsifiability
  falsification_conditions TEXT NOT NULL,
  
  -- Supporting evidence
  source_mem_files TEXT NOT NULL,           -- JSON array of MEM file paths
  confirming_mem_count INTEGER NOT NULL DEFAULT 0,
  tension_points INTEGER NOT NULL DEFAULT 0,
  
  -- Lifecycle state
  state TEXT NOT NULL CHECK(state IN (
    'CANDIDATE',
    'PROPOSED', 
    'BOUND',
    'UNDER_REVIEW',
    'SUPERSEDED'
  )) DEFAULT 'CANDIDATE',
  
  -- Binding information (populated when BOUND)
  bound_to_core_file_id INTEGER REFERENCES file_registry(id),
  bound_at INTEGER,
  bound_by_user TEXT,
  core_version_at_binding TEXT,
  
  -- Supersession information (populated when SUPERSEDED)
  superseded_by_rll_id TEXT REFERENCES rll_registry(rll_id),
  superseded_at INTEGER,
  supersession_rationale TEXT,
  
  -- Metadata
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_rll_civilization ON rll_registry(civilization);
CREATE INDEX IF NOT EXISTS idx_rll_state ON rll_registry(state);
CREATE INDEX IF NOT EXISTS idx_rll_constraint_type ON rll_registry(constraint_type);
```

### 1.3 Binding Event Records (BER)

```sql
-- Tracks SCHOLAR → CORE promotion events
CREATE TABLE IF NOT EXISTS binding_event_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ber_id TEXT UNIQUE NOT NULL,              -- BER–[CIV]–[TIMESTAMP]
  rll_id TEXT NOT NULL REFERENCES rll_registry(rll_id),
  
  -- Promotion path
  source_scholar_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  target_core_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  
  -- Coherence audit results
  source_mem_files TEXT NOT NULL,           -- JSON array
  confirming_mem_count INTEGER NOT NULL,
  tension_points INTEGER NOT NULL,
  coherence_audit_result TEXT NOT NULL CHECK(coherence_audit_result IN ('ELIGIBLE', 'INELIGIBLE', 'CONFLICT')),
  
  -- Authorization
  authorized_by_user TEXT,
  authorization_timestamp INTEGER,
  
  -- Binding result
  binding_status TEXT NOT NULL CHECK(binding_status IN ('BOUND', 'DEFERRED', 'REJECTED')),
  
  -- Version tracking
  core_version_before TEXT NOT NULL,
  core_version_after TEXT,
  
  -- Propagation
  propagation_status TEXT CHECK(propagation_status IN ('COMPLETE', 'PENDING', 'FAILED')),
  propagation_completed_at INTEGER,
  
  -- Metadata
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_ber_rll ON binding_event_records(rll_id);
CREATE INDEX IF NOT EXISTS idx_ber_status ON binding_event_records(binding_status);
```

### 1.4 Scholar Annotation Records (SAR)

```sql
-- Tracks SCHOLAR annotations on MEM files
CREATE TABLE IF NOT EXISTS scholar_annotation_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sar_id TEXT UNIQUE NOT NULL,              -- SAR–[CIV]–[MEM-FILE]–[TIMESTAMP]
  
  -- References
  target_mem_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  scholar_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  
  -- Annotation content
  annotation_type TEXT NOT NULL CHECK(annotation_type IN (
    'TENSION',
    'COMPLIANCE',
    'UPGRADE',
    'RLL_RELEVANCE'
  )),
  content TEXT NOT NULL,
  
  -- Context
  scholar_phase TEXT NOT NULL CHECK(scholar_phase IN ('ACCUMULATION', 'CONSTRAINT_GRAMMAR')),
  related_rll_ids TEXT,                     -- JSON array (for RLL_RELEVANCE type)
  related_mem_files TEXT,                   -- JSON array (for TENSION type)
  
  -- Status
  status TEXT NOT NULL CHECK(status IN ('ACTIVE', 'SUPERSEDED', 'ARCHIVED')) DEFAULT 'ACTIVE',
  superseded_by_sar_id TEXT REFERENCES scholar_annotation_records(sar_id),
  
  -- Metadata
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_sar_target_mem ON scholar_annotation_records(target_mem_file_id);
CREATE INDEX IF NOT EXISTS idx_sar_scholar ON scholar_annotation_records(scholar_file_id);
CREATE INDEX IF NOT EXISTS idx_sar_type ON scholar_annotation_records(annotation_type);
CREATE INDEX IF NOT EXISTS idx_sar_status ON scholar_annotation_records(status);
```

### 1.5 Cross-Layer Conflict Log

```sql
-- Tracks conflicts between layers
CREATE TABLE IF NOT EXISTS cross_layer_conflicts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  conflict_id TEXT UNIQUE NOT NULL,         -- CONFLICT–[TYPE]–[TIMESTAMP]
  
  -- Conflict classification
  conflict_type TEXT NOT NULL CHECK(conflict_type IN (
    'MEM_VS_MEM',
    'SCHOLAR_VS_MEM',
    'CORE_VS_SCHOLAR',
    'CORE_VS_MEM'
  )),
  
  -- Parties
  layer_1_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  layer_1_content TEXT NOT NULL,            -- The conflicting assertion
  layer_2_file_id INTEGER REFERENCES file_registry(id),
  layer_2_content TEXT NOT NULL,            -- The conflicting assertion
  
  -- Resolution
  resolution_status TEXT NOT NULL CHECK(resolution_status IN (
    'OPEN',
    'MANAGED',
    'RLL_REVIEW_TRIGGERED',
    'CLOSED'
  )) DEFAULT 'OPEN',
  resolution_rationale TEXT,
  authority_applied TEXT,                   -- Which layer's authority prevailed
  
  -- For RLL review triggers
  triggered_rll_review_id TEXT REFERENCES rll_registry(rll_id),
  
  -- Metadata
  detected_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  resolved_at INTEGER,
  resolved_by_user TEXT
);

CREATE INDEX IF NOT EXISTS idx_conflict_type ON cross_layer_conflicts(conflict_type);
CREATE INDEX IF NOT EXISTS idx_conflict_status ON cross_layer_conflicts(resolution_status);
```

### 1.6 Pipeline Audit Log

```sql
-- Append-only audit trail for all pipeline operations
CREATE TABLE IF NOT EXISTS pipeline_audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  audit_id TEXT UNIQUE NOT NULL,            -- AUDIT–[TYPE]–[TIMESTAMP]
  
  -- Event classification
  event_type TEXT NOT NULL CHECK(event_type IN (
    'INGESTION',
    'PROMOTION',
    'CONFLICT',
    'LIFECYCLE',
    'ANNOTATION'
  )),
  
  -- Event details
  event_subtype TEXT,                       -- More specific classification
  actors TEXT NOT NULL,                     -- JSON: { system: [], user: [] }
  inputs TEXT NOT NULL,                     -- JSON: What triggered the event
  outputs TEXT NOT NULL,                    -- JSON: What resulted
  
  -- References
  related_ler_id TEXT REFERENCES learning_event_records(ler_id),
  related_ber_id TEXT REFERENCES binding_event_records(ber_id),
  related_rll_id TEXT REFERENCES rll_registry(rll_id),
  related_conflict_id TEXT REFERENCES cross_layer_conflicts(conflict_id),
  
  -- Authorization
  authorization_type TEXT CHECK(authorization_type IN ('AUTOMATIC', 'USER', 'NONE')),
  authorized_by TEXT,
  
  -- Immutable timestamp
  timestamp INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

-- No UPDATE or DELETE operations should be performed on this table
-- Enforce via application layer

CREATE INDEX IF NOT EXISTS idx_audit_event_type ON pipeline_audit_log(event_type);
CREATE INDEX IF NOT EXISTS idx_audit_timestamp ON pipeline_audit_log(timestamp);
```

### 1.7 Post-Write Queue Records (PWQR)

```sql
-- Tracks MEMs queued for LEARN mode ingestion after WRITE mode
CREATE TABLE IF NOT EXISTS post_write_queue_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pwqr_id TEXT UNIQUE NOT NULL,             -- PWQR–[CIV]–[TIMESTAMP]
  civilization TEXT NOT NULL,
  
  -- Target MEM
  mem_file_id INTEGER NOT NULL REFERENCES file_registry(id),
  mem_file_path TEXT NOT NULL,
  write_type TEXT NOT NULL CHECK(write_type IN ('NEW', 'MODIFIED', 'UPGRADED')),
  previous_version TEXT,                    -- Version before modification (if applicable)
  new_version TEXT NOT NULL,
  
  -- Queue status
  queue_status TEXT NOT NULL CHECK(queue_status IN (
    'PENDING',
    'IN_PROGRESS',
    'COMPLETE',
    'FAILED'
  )) DEFAULT 'PENDING',
  
  -- Queued actions (JSON array of action types)
  queued_actions TEXT NOT NULL DEFAULT '["FULL_INGESTION", "PATTERN_COHERENCE", "CONTRADICTION_DETECTION", "RLL_STRESS_TEST", "CONNECTION_VALIDATION"]',
  
  -- Processing results (populated when complete)
  processing_results TEXT,                  -- JSON: results of each queued action
  resulting_ler_id TEXT REFERENCES learning_event_records(ler_id),
  
  -- Timestamps
  queued_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  processing_started_at INTEGER,
  completed_at INTEGER,
  
  -- Priority (lower = higher priority)
  priority INTEGER NOT NULL DEFAULT 100
);

CREATE INDEX IF NOT EXISTS idx_pwqr_civilization ON post_write_queue_records(civilization);
CREATE INDEX IF NOT EXISTS idx_pwqr_status ON post_write_queue_records(queue_status);
CREATE INDEX IF NOT EXISTS idx_pwqr_priority ON post_write_queue_records(priority);
CREATE INDEX IF NOT EXISTS idx_pwqr_queued_at ON post_write_queue_records(queued_at);
```

### 1.8 Write Context Cache

```sql
-- Caches Write Context Packages for active WRITE sessions
CREATE TABLE IF NOT EXISTS write_context_cache (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wcp_id TEXT UNIQUE NOT NULL,              -- WCP–[CIV]–[SESSION]–[TIMESTAMP]
  civilization TEXT NOT NULL,
  
  -- Target MEM
  target_mem_path TEXT,                     -- NULL for NEW MEMs
  subject_area TEXT,
  
  -- Context data (JSON structures)
  bound_rlls TEXT NOT NULL,                 -- JSON: [{ rllId, description, relevance }]
  scholar_patterns TEXT NOT NULL,           -- JSON: [{ pattern, description, state, supportingMems }]
  negative_capability_zones TEXT,           -- JSON: [descriptions]
  suggested_connections TEXT,               -- JSON: [{ memPath, connectionType }]
  active_contradictions TEXT,               -- JSON: [{ sclId, description }]
  
  -- Confidence assessment
  confidence_level TEXT NOT NULL CHECK(confidence_level IN ('HIGH', 'MED', 'LOW', 'UNCERTAIN')),
  confidence_basis TEXT,                    -- JSON: { memsIngested, patternsConfirmed }
  
  -- Session tracking
  session_id TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  expires_at INTEGER,                       -- WCP expires after session ends
  
  -- Advisory flags generated during session
  advisory_flags TEXT                       -- JSON: [{ flagType, content, dismissed }]
);

CREATE INDEX IF NOT EXISTS idx_wcp_civilization ON write_context_cache(civilization);
CREATE INDEX IF NOT EXISTS idx_wcp_session ON write_context_cache(session_id);
```

### 1.9 Pedagogical Observation Records (POR)

```sql
-- Captures observations from IMAGINE mode for potential LEARN investigation
CREATE TABLE IF NOT EXISTS pedagogical_observation_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  por_id TEXT UNIQUE NOT NULL,              -- POR–[CIV]–[SESSION]–[TIMESTAMP]
  civilization TEXT NOT NULL,
  session_id TEXT NOT NULL,
  session_duration INTEGER,                 -- Duration in seconds
  
  -- Observation classification
  observation_type TEXT NOT NULL CHECK(observation_type IN (
    'EXPLANATION_GAP',
    'CONTRADICTION_SURFACED',
    'USER_CHALLENGE',
    'QUESTION_CLUSTER',
    'OPTION_SELECTION_PATTERN'
  )),
  
  -- Observation content (structure varies by type)
  observation_content TEXT NOT NULL,        -- JSON: type-specific details
  
  -- Related SCHOLAR content
  related_patterns TEXT,                    -- JSON: [pattern IDs]
  related_rlls TEXT,                        -- JSON: [RLL IDs]
  related_scls TEXT,                        -- JSON: [SCL IDs]
  related_mem_files TEXT,                   -- JSON: [MEM file paths]
  
  -- Suggested action
  suggested_action TEXT,                    -- What LEARN might investigate
  
  -- User review status
  status TEXT NOT NULL CHECK(status IN (
    'RECORDED',
    'REVIEWED',
    'DISMISSED',
    'DEFERRED',
    'ACTED_UPON'
  )) DEFAULT 'RECORDED',
  
  -- User decision (populated when reviewed)
  user_decision TEXT,
  decision_rationale TEXT,
  reviewed_at INTEGER,
  reviewed_by TEXT,
  
  -- LEARN action tracking (populated if ACTED_UPON)
  resulting_ler_id TEXT REFERENCES learning_event_records(ler_id),
  learn_task_id TEXT,                       -- If converted to LEARN task
  
  -- Metadata
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_por_civilization ON pedagogical_observation_records(civilization);
CREATE INDEX IF NOT EXISTS idx_por_session ON pedagogical_observation_records(session_id);
CREATE INDEX IF NOT EXISTS idx_por_type ON pedagogical_observation_records(observation_type);
CREATE INDEX IF NOT EXISTS idx_por_status ON pedagogical_observation_records(status);
```

### 1.10 IMAGINE Session Registry

```sql
-- Tracks IMAGINE mode sessions for POR aggregation
CREATE TABLE IF NOT EXISTS imagine_session_registry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT UNIQUE NOT NULL,
  civilization TEXT NOT NULL,
  
  -- Session details
  started_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  ended_at INTEGER,
  duration INTEGER,                         -- Calculated on session end
  
  -- Topics covered
  topics TEXT,                              -- JSON: [topic descriptions]
  mem_files_referenced TEXT,                -- JSON: [MEM file paths]
  
  -- Interaction summary
  oge_options_presented INTEGER DEFAULT 0,
  oge_options_selected INTEGER DEFAULT 0,
  questions_asked INTEGER DEFAULT 0,
  contradictions_surfaced INTEGER DEFAULT 0,
  
  -- POR summary
  por_count INTEGER DEFAULT 0,
  por_acted_upon INTEGER DEFAULT 0,
  
  -- Session status
  status TEXT NOT NULL CHECK(status IN ('ACTIVE', 'ENDED', 'ABANDONED')) DEFAULT 'ACTIVE'
);

CREATE INDEX IF NOT EXISTS idx_imagine_session_civ ON imagine_session_registry(civilization);
CREATE INDEX IF NOT EXISTS idx_imagine_session_status ON imagine_session_registry(status);
```

---

## 2. TypeScript Interfaces

### 2.1 Core Types

```typescript
// lib/types/pipeline.types.ts

// ============================================
// LEARNING EVENT RECORDS (MEM → SCHOLAR)
// ============================================

export type IngestionMode = 'SINGLE' | 'BATCH' | 'COMPARATIVE';
export type ConfidenceLevel = 'HIGH' | 'MED' | 'LOW' | 'UNCERTAIN';
export type LERStatus = 'PENDING' | 'CONFIRMED' | 'REJECTED';

export interface SourceTierDistribution {
  primary: number;
  contextual: number;
  secondary: number;
  critical: number;
}

export interface PatternEffects {
  confirmed: string[];      // Pattern IDs
  stressed: string[];       // Pattern IDs
  novelCandidates: string[]; // Descriptions
}

export interface ExtractionSummary {
  claimsExtracted: number;
  contradictionsNoted: number;
  sourceTiers: SourceTierDistribution;
}

export interface LearningEventRecord {
  lerId: string;            // LER–[CIV]–[TIMESTAMP]
  civilization: string;
  sourceMemFiles: string[];
  ingestionMode: IngestionMode;
  extractionSummary: ExtractionSummary;
  patternEffects: PatternEffects;
  confidence: ConfidenceLevel;
  status: LERStatus;
  scholarPhase: ScholarPhase;
  createdAt: Date;
  confirmedAt?: Date;
  userId?: string;
}

// ============================================
// RLL REGISTRY
// ============================================

export type RLLConstraintType = 
  | 'SEQUENCING'
  | 'FAILURE_CONDITION'
  | 'LEGITIMACY_DEPENDENCY'
  | 'STRUCTURAL_IMPOSSIBILITY';

export type RLLScope = 'CIVILIZATION_SPECIFIC' | 'CROSS_CIVILIZATIONAL';

export type RLLState = 
  | 'CANDIDATE'
  | 'PROPOSED'
  | 'BOUND'
  | 'UNDER_REVIEW'
  | 'SUPERSEDED';

export type AffectedFileClass = 'MEM' | 'SCHOLAR' | 'DOCTRINE' | 'CORE' | 'SIMULATION';

export type ScholarPhase = 'ACCUMULATION' | 'CONSTRAINT_GRAMMAR' | 'SNAPSHOT';

export interface RLLSpecification {
  rllId: string;            // RLL–[NNNN]
  civilization: string;
  constraintType: RLLConstraintType;
  scope: RLLScope;
  description: string;
  activationTrigger: string;
  affectedFileClasses: AffectedFileClass[];
}

export interface RLLGrounding {
  failureGrounding: string;
  historicalViolations: string[];
  falsificationConditions: string;
}

export interface RLLEvidence {
  sourceMemFiles: string[];
  confirmingMemCount: number;
  tensionPoints: number;
}

export interface RLLBindingInfo {
  boundToCoreFileId?: number;
  boundAt?: Date;
  boundByUser?: string;
  coreVersionAtBinding?: string;
}

export interface RLLSupersessionInfo {
  supersededByRllId?: string;
  supersededAt?: Date;
  supersessionRationale?: string;
}

export interface RecursiveLearningLaw {
  specification: RLLSpecification;
  grounding: RLLGrounding;
  evidence: RLLEvidence;
  state: RLLState;
  binding?: RLLBindingInfo;
  supersession?: RLLSupersessionInfo;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// BINDING EVENT RECORDS (SCHOLAR → CORE)
// ============================================

export type CoherenceAuditResult = 'ELIGIBLE' | 'INELIGIBLE' | 'CONFLICT';
export type BindingStatus = 'BOUND' | 'DEFERRED' | 'REJECTED';
export type PropagationStatus = 'COMPLETE' | 'PENDING' | 'FAILED';

export interface CoherenceAudit {
  sourceMemFiles: string[];
  confirmingMemCount: number;
  tensionPoints: number;
  result: CoherenceAuditResult;
}

export interface BindingEventRecord {
  berId: string;            // BER–[CIV]–[TIMESTAMP]
  rllId: string;
  sourceScholarFileId: number;
  targetCoreFileId: number;
  coherenceAudit: CoherenceAudit;
  authorizedByUser?: string;
  authorizationTimestamp?: Date;
  bindingStatus: BindingStatus;
  coreVersionBefore: string;
  coreVersionAfter?: string;
  propagationStatus?: PropagationStatus;
  propagationCompletedAt?: Date;
  createdAt: Date;
}

// ============================================
// SCHOLAR ANNOTATION RECORDS
// ============================================

export type AnnotationType = 'TENSION' | 'COMPLIANCE' | 'UPGRADE' | 'RLL_RELEVANCE';
export type AnnotationStatus = 'ACTIVE' | 'SUPERSEDED' | 'ARCHIVED';

export interface ScholarAnnotationRecord {
  sarId: string;            // SAR–[CIV]–[MEM-FILE]–[TIMESTAMP]
  targetMemFileId: number;
  scholarFileId: number;
  annotationType: AnnotationType;
  content: string;
  scholarPhase: ScholarPhase;
  relatedRllIds?: string[];
  relatedMemFiles?: string[];
  status: AnnotationStatus;
  supersededBySarId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// CROSS-LAYER CONFLICTS
// ============================================

export type ConflictType = 
  | 'MEM_VS_MEM'
  | 'SCHOLAR_VS_MEM'
  | 'CORE_VS_SCHOLAR'
  | 'CORE_VS_MEM';

export type ConflictResolutionStatus = 
  | 'OPEN'
  | 'MANAGED'
  | 'RLL_REVIEW_TRIGGERED'
  | 'CLOSED';

export interface CrossLayerConflict {
  conflictId: string;
  conflictType: ConflictType;
  layer1FileId: number;
  layer1Content: string;
  layer2FileId?: number;
  layer2Content: string;
  resolutionStatus: ConflictResolutionStatus;
  resolutionRationale?: string;
  authorityApplied?: string;
  triggeredRllReviewId?: string;
  detectedAt: Date;
  resolvedAt?: Date;
  resolvedByUser?: string;
}

// ============================================
// PIPELINE AUDIT
// ============================================

export type AuditEventType = 
  | 'INGESTION'
  | 'PROMOTION'
  | 'CONFLICT'
  | 'LIFECYCLE'
  | 'ANNOTATION';

export type AuthorizationType = 'AUTOMATIC' | 'USER' | 'NONE';

export interface AuditActors {
  system: string[];
  user?: string[];
}

export interface PipelineAuditEntry {
  auditId: string;
  eventType: AuditEventType;
  eventSubtype?: string;
  actors: AuditActors;
  inputs: Record<string, unknown>;
  outputs: Record<string, unknown>;
  relatedLerId?: string;
  relatedBerId?: string;
  relatedRllId?: string;
  relatedConflictId?: string;
  authorizationType: AuthorizationType;
  authorizedBy?: string;
  timestamp: Date;
}

// ============================================
// SCHOLAR → WRITE MODE INTERFACE
// ============================================

export type WriteType = 'NEW' | 'MODIFIED' | 'UPGRADED';
export type QueueStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';
export type AdvisoryFlagType = 
  | 'POTENTIAL_CONTRADICTION'
  | 'RLL_ENGAGEMENT'
  | 'CONNECTION_SUGGESTION'
  | 'CONFIDENCE_DISCLOSURE';

export type ConnectionType = 'THEMATIC' | 'TEMPORAL' | 'CAUSAL' | 'STRUCTURAL';
export type Relevance = 'HIGH' | 'MED' | 'LOW';

// Write Context Package — surfaces SCHOLAR learning for WRITE mode
export interface BoundRLLContext {
  rllId: string;
  description: string;
  relevance: Relevance;
}

export interface ScholarPatternContext {
  patternId: string;
  description: string;
  state: 'CANDIDATE' | 'PROPOSED';
  supportingMemCount: number;
}

export interface SuggestedConnection {
  memFilePath: string;
  connectionType: ConnectionType;
  rationale: string;
}

export interface ActiveContradiction {
  sclId: string;
  description: string;
  involvedMemFiles: string[];
}

export interface ConfidenceBasis {
  memsIngested: number;
  patternsConfirmed: number;
  scholarPhase: ScholarPhase;
}

export interface WriteContextPackage {
  wcpId: string;                    // WCP–[CIV]–[SESSION]–[TIMESTAMP]
  civilization: string;
  targetMemPath?: string;           // undefined for NEW MEMs
  subjectArea?: string;
  
  // SCHOLAR context
  boundRlls: BoundRLLContext[];
  scholarPatterns: ScholarPatternContext[];
  negativeCapabilityZones: string[];
  suggestedConnections: SuggestedConnection[];
  activeContradictions: ActiveContradiction[];
  
  // Confidence assessment
  confidenceLevel: ConfidenceLevel;
  confidenceBasis: ConfidenceBasis;
  
  // Session tracking
  sessionId: string;
  createdAt: Date;
  expiresAt?: Date;
}

// Advisory Flag — generated during WRITE mode
export interface AdvisoryFlag {
  flagId: string;
  flagType: AdvisoryFlagType;
  content: string;
  relatedRllId?: string;
  relatedPatternId?: string;
  relatedMemFiles?: string[];
  dismissed: boolean;
  dismissedAt?: Date;
  createdAt: Date;
}

// Post-Write Queue Record — tracks MEMs awaiting LEARN ingestion
export interface QueuedAction {
  actionType: 'FULL_INGESTION' | 'PATTERN_COHERENCE' | 'CONTRADICTION_DETECTION' | 'RLL_STRESS_TEST' | 'CONNECTION_VALIDATION';
  status: QueueStatus;
  result?: string;
  completedAt?: Date;
}

export interface PostWriteQueueRecord {
  pwqrId: string;                   // PWQR–[CIV]–[TIMESTAMP]
  civilization: string;
  
  // Target MEM
  memFileId: number;
  memFilePath: string;
  writeType: WriteType;
  previousVersion?: string;
  newVersion: string;
  
  // Queue status
  queueStatus: QueueStatus;
  queuedActions: QueuedAction[];
  
  // Processing results
  resultingLerId?: string;          // LER created when processing completes
  
  // Timestamps
  queuedAt: Date;
  processingStartedAt?: Date;
  completedAt?: Date;
  
  // Priority
  priority: number;
}

// ============================================
// SCHOLAR ↔ IMAGINE MODE INTERFACE
// ============================================

export type PORObservationType = 
  | 'EXPLANATION_GAP'
  | 'CONTRADICTION_SURFACED'
  | 'USER_CHALLENGE'
  | 'QUESTION_CLUSTER'
  | 'OPTION_SELECTION_PATTERN';

export type PORStatus = 
  | 'RECORDED'
  | 'REVIEWED'
  | 'DISMISSED'
  | 'DEFERRED'
  | 'ACTED_UPON';

export type QuestionType = 'CLARIFICATION' | 'EXTENSION' | 'CHALLENGE';

// Type-specific observation content structures

export interface ExplanationGapContent {
  topic: string;
  missingContext: string[];
  missingConnections: string[];
  scholarConfidenceInArea: ConfidenceLevel;
  suggestedMemsToIngest: string[];
}

export interface ContradictionSurfacedContent {
  contradictionDescription: string;
  involvedPatterns: string[];
  involvedMemFiles: string[];
  whyNotPreviouslyVisible: string;
  suggestedSclEntry: string;
}

export interface UserChallengeContent {
  claimChallenged: string;
  userCounterArgument: string;
  userEvidence?: string;
  affectedPattern?: string;
  affectedMemFile?: string;
  confidenceImpact: 'NONE' | 'MINOR' | 'SIGNIFICANT';
}

export interface QuestionClusterContent {
  subjectArea: string;
  questionTypes: QuestionType[];
  frequencyInSession: number;
  scholarCoverageOfArea: ConfidenceLevel;
  exampleQuestions: string[];
}

export interface OptionSelectionPatternContent {
  optionClassesSelected: string[];
  optionClassesIgnored: string[];
  sessionCount: number;
  possibleImplications: string;
}

export type PORObservationContent = 
  | ExplanationGapContent
  | ContradictionSurfacedContent
  | UserChallengeContent
  | QuestionClusterContent
  | OptionSelectionPatternContent;

export interface PedagogicalObservationRecord {
  porId: string;                    // POR–[CIV]–[SESSION]–[TIMESTAMP]
  civilization: string;
  sessionId: string;
  sessionDuration?: number;
  
  // Observation
  observationType: PORObservationType;
  observationContent: PORObservationContent;
  
  // Related SCHOLAR content
  relatedPatterns?: string[];
  relatedRlls?: string[];
  relatedScls?: string[];
  relatedMemFiles?: string[];
  
  // Suggested action
  suggestedAction?: string;
  
  // Status and review
  status: PORStatus;
  userDecision?: string;
  decisionRationale?: string;
  reviewedAt?: Date;
  reviewedBy?: string;
  
  // LEARN action tracking
  resultingLerId?: string;
  learnTaskId?: string;
  
  createdAt: Date;
}

export type ImagineSessionStatus = 'ACTIVE' | 'ENDED' | 'ABANDONED';

export interface ImagineSessionSummary {
  sessionId: string;
  civilization: string;
  startedAt: Date;
  endedAt?: Date;
  duration?: number;
  
  // Topics and references
  topics: string[];
  memFilesReferenced: string[];
  
  // Interaction metrics
  ogeOptionsPresented: number;
  ogeOptionsSelected: number;
  questionsAsked: number;
  contradictionsSurfaced: number;
  
  // POR summary
  porCount: number;
  porActedUpon: number;
  
  status: ImagineSessionStatus;
}
```

---

## 3. Service Architecture

### 3.1 Ingestion Service

```typescript
// lib/services/pipeline/ingestion.service.ts

import type { 
  LearningEventRecord, 
  ExtractionSummary, 
  PatternEffects,
  ConfidenceLevel,
  IngestionMode 
} from '@/lib/types/pipeline.types';

export interface IngestionRequest {
  memFilePaths: string[];
  mode: IngestionMode;
  scholarFileId: number;
}

export interface IngestionValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface IngestionResult {
  ler: LearningEventRecord;
  validationResult: IngestionValidation;
}

export class IngestionService {
  /**
   * Step 1: Validate MEM file(s) for ingestion
   */
  async validateForIngestion(memFilePaths: string[]): Promise<IngestionValidation>;
  
  /**
   * Step 2: Extract claims, contradictions, and source tiers
   */
  async extractContent(memFilePath: string): Promise<ExtractionSummary>;
  
  /**
   * Step 3: Generate pattern candidates by comparing with existing SCHOLAR patterns
   */
  async generatePatternCandidates(
    extraction: ExtractionSummary, 
    scholarFileId: number
  ): Promise<PatternEffects>;
  
  /**
   * Step 4: Assess confidence based on source quality and pattern fit
   */
  assessConfidence(
    extraction: ExtractionSummary, 
    patternEffects: PatternEffects
  ): ConfidenceLevel;
  
  /**
   * Step 5: Create Learning Event Record
   */
  async createLER(request: IngestionRequest): Promise<LearningEventRecord>;
  
  /**
   * Step 6: Confirm ingestion (updates SCHOLAR state)
   */
  async confirmIngestion(lerId: string, userId: string): Promise<LearningEventRecord>;
  
  /**
   * Reject ingestion (marks LER as rejected)
   */
  async rejectIngestion(lerId: string, userId: string, reason: string): Promise<void>;
  
  /**
   * Get pending ingestions for a civilization
   */
  async getPendingIngestions(civilization: string): Promise<LearningEventRecord[]>;
}
```

### 3.2 Promotion Service

```typescript
// lib/services/pipeline/promotion.service.ts

import type {
  RecursiveLearningLaw,
  BindingEventRecord,
  CoherenceAudit,
  BindingStatus,
  RLLState
} from '@/lib/types/pipeline.types';

export interface PromotionEligibility {
  isEligible: boolean;
  crossMemCoherence: boolean;
  failureFirstGrounding: boolean;
  nonContradiction: boolean;
  falsifiabilitySpecified: boolean;
  scopeDeclared: boolean;
  errors: string[];
}

export interface PromotionRequest {
  rllId: string;
  targetCoreFileId: number;
  userId: string;
}

export class PromotionService {
  /**
   * Check if RLL meets promotion eligibility criteria
   */
  async checkEligibility(rllId: string): Promise<PromotionEligibility>;
  
  /**
   * Perform coherence audit against supporting MEM files
   */
  async performCoherenceAudit(rllId: string): Promise<CoherenceAudit>;
  
  /**
   * Check for contradictions with existing RLLs and CORE axioms
   */
  async checkContradictions(rllId: string, targetCoreFileId: number): Promise<{
    hasContradictions: boolean;
    contradictingRlls: string[];
    contradictingAxioms: string[];
  }>;
  
  /**
   * Propose RLL for binding (moves from CANDIDATE to PROPOSED)
   */
  async proposeForBinding(rllId: string): Promise<RecursiveLearningLaw>;
  
  /**
   * Bind RLL to CORE (requires user authorization)
   */
  async bindToCORE(request: PromotionRequest): Promise<BindingEventRecord>;
  
  /**
   * Defer binding (returns RLL to CANDIDATE state)
   */
  async deferBinding(rllId: string, reason: string): Promise<RecursiveLearningLaw>;
  
  /**
   * Reject binding (marks RLL as rejected, can be re-proposed later)
   */
  async rejectBinding(rllId: string, userId: string, reason: string): Promise<void>;
  
  /**
   * Get RLLs pending promotion for a civilization
   */
  async getPendingPromotions(civilization: string): Promise<RecursiveLearningLaw[]>;
  
  /**
   * Propagate bound RLL to downstream files
   */
  async propagateBinding(berId: string): Promise<void>;
}
```

### 3.3 Lifecycle Service

```typescript
// lib/services/pipeline/lifecycle.service.ts

import type { RecursiveLearningLaw, RLLState } from '@/lib/types/pipeline.types';

export interface StateTransition {
  fromState: RLLState;
  toState: RLLState;
  trigger: string;
  authorization: 'AUTOMATIC' | 'USER';
  timestamp: Date;
}

export interface RLLReviewContext {
  contradictingMemFiles: string[];
  evidenceStrength: 'WEAK' | 'MODERATE' | 'STRONG';
  recommendation: 'REAFFIRM' | 'SCOPE' | 'SUPERSEDE';
}

export class LifecycleService {
  /**
   * Get current state of an RLL
   */
  async getState(rllId: string): Promise<RLLState>;
  
  /**
   * Get full lifecycle history for an RLL
   */
  async getLifecycleHistory(rllId: string): Promise<StateTransition[]>;
  
  /**
   * Trigger review of a bound RLL based on contradicting evidence
   */
  async triggerReview(rllId: string, contradictingMemFiles: string[]): Promise<void>;
  
  /**
   * Get context for reviewing an RLL under review
   */
  async getReviewContext(rllId: string): Promise<RLLReviewContext>;
  
  /**
   * Reaffirm an RLL after review (keeps BOUND state)
   */
  async reaffirmRLL(
    rllId: string, 
    userId: string, 
    rationale: string
  ): Promise<RecursiveLearningLaw>;
  
  /**
   * Scope an RLL (adds exceptions or narrows applicability)
   */
  async scopeRLL(
    rllId: string, 
    userId: string, 
    scopeModifications: string
  ): Promise<RecursiveLearningLaw>;
  
  /**
   * Supersede an RLL with a new one
   */
  async supersedeRLL(
    rllId: string, 
    replacementRllId: string, 
    userId: string, 
    rationale: string
  ): Promise<RecursiveLearningLaw>;
  
  /**
   * Check if any RLLs should be triggered for review based on new MEM evidence
   */
  async checkForReviewTriggers(memFileId: number): Promise<string[]>;
}
```

### 3.4 Conflict Service

```typescript
// lib/services/pipeline/conflict.service.ts

import type { 
  CrossLayerConflict, 
  ConflictType, 
  ConflictResolutionStatus 
} from '@/lib/types/pipeline.types';

export interface ConflictDetectionResult {
  hasConflict: boolean;
  conflicts: CrossLayerConflict[];
}

export interface ResolutionAction {
  conflictId: string;
  action: 'MANAGE' | 'TRIGGER_RLL_REVIEW' | 'CLOSE';
  rationale: string;
  authorityApplied?: string;
  userId: string;
}

export class ConflictService {
  /**
   * Detect conflicts when a new MEM file is ingested
   */
  async detectConflictsOnIngestion(memFileId: number): Promise<ConflictDetectionResult>;
  
  /**
   * Detect conflicts when an RLL is bound
   */
  async detectConflictsOnBinding(rllId: string): Promise<ConflictDetectionResult>;
  
  /**
   * Get all open conflicts for a civilization
   */
  async getOpenConflicts(civilization: string): Promise<CrossLayerConflict[]>;
  
  /**
   * Get conflicts by type
   */
  async getConflictsByType(conflictType: ConflictType): Promise<CrossLayerConflict[]>;
  
  /**
   * Apply resolution to a conflict
   */
  async resolveConflict(action: ResolutionAction): Promise<CrossLayerConflict>;
  
  /**
   * Determine authority hierarchy for a conflict
   */
  determineAuthority(conflictType: ConflictType): {
    higherAuthority: 'CORE' | 'SCHOLAR' | 'MEM';
    resolution: string;
  };
}
```

### 3.5 Audit Service

```typescript
// lib/services/pipeline/audit.service.ts

import type { 
  PipelineAuditEntry, 
  AuditEventType,
  AuditActors 
} from '@/lib/types/pipeline.types';

export interface AuditQuery {
  eventType?: AuditEventType;
  civilization?: string;
  startDate?: Date;
  endDate?: Date;
  relatedRllId?: string;
  limit?: number;
  offset?: number;
}

export interface TraceabilityChain {
  rllId: string;
  sourceMemFiles: string[];
  scholarPhase: string;
  learningEvents: string[];       // LER IDs
  bindingEvent?: string;          // BER ID
  authorizations: {
    type: string;
    user?: string;
    timestamp: Date;
  }[];
}

export class AuditService {
  /**
   * Log an audit entry (append-only)
   */
  async log(entry: Omit<PipelineAuditEntry, 'auditId' | 'timestamp'>): Promise<PipelineAuditEntry>;
  
  /**
   * Query audit log
   */
  async query(query: AuditQuery): Promise<PipelineAuditEntry[]>;
  
  /**
   * Get full traceability chain for a bound RLL
   */
  async getTraceabilityChain(rllId: string): Promise<TraceabilityChain>;
  
  /**
   * Get audit entries related to a specific MEM file
   */
  async getAuditForMemFile(memFileId: number): Promise<PipelineAuditEntry[]>;
  
  /**
   * Get audit entries for a specific time period
   */
  async getAuditByPeriod(startDate: Date, endDate: Date): Promise<PipelineAuditEntry[]>;
  
  /**
   * Export audit log for external analysis
   */
  async exportAuditLog(query: AuditQuery, format: 'JSON' | 'CSV'): Promise<string>;
}
```

### 3.6 Write Context Service

```typescript
// lib/services/pipeline/write-context.service.ts

import type {
  WriteContextPackage,
  AdvisoryFlag,
  PostWriteQueueRecord,
  ConfidenceLevel,
  AdvisoryFlagType,
  WriteType
} from '@/lib/types/pipeline.types';

export interface WriteSessionRequest {
  civilization: string;
  targetMemPath?: string;           // undefined for NEW MEMs
  sessionId: string;
}

export interface AdvisoryCheckRequest {
  wcpId: string;
  draftContent: string;
  memConnections: string[];
}

export class WriteContextService {
  /**
   * Generate Write Context Package when entering WRITE mode
   * Surfaces relevant SCHOLAR learning for the author
   */
  async generateWriteContext(request: WriteSessionRequest): Promise<WriteContextPackage>;
  
  /**
   * Get bound RLLs relevant to the target MEM subject area
   */
  async getRelevantRLLs(civilization: string, subjectArea?: string): Promise<BoundRLLContext[]>;
  
  /**
   * Get SCHOLAR patterns (not yet RLL) relevant to the subject
   */
  async getRelevantPatterns(civilization: string, subjectArea?: string): Promise<ScholarPatternContext[]>;
  
  /**
   * Get negative capability zones for the civilization
   */
  async getNegativeCapabilityZones(civilization: string): Promise<string[]>;
  
  /**
   * Suggest MEM connections based on SCHOLAR patterns
   */
  async suggestConnections(civilization: string, subjectArea?: string): Promise<SuggestedConnection[]>;
  
  /**
   * Get active contradictions (SCLs) in the subject area
   */
  async getActiveContradictions(civilization: string, subjectArea?: string): Promise<ActiveContradiction[]>;
  
  /**
   * Assess SCHOLAR confidence in the subject area
   */
  async assessConfidence(civilization: string, subjectArea?: string): Promise<{
    level: ConfidenceLevel;
    basis: ConfidenceBasis;
  }>;
  
  /**
   * Run advisory checks on draft content during WRITE mode
   * Returns flags but does NOT block writing
   */
  async runAdvisoryChecks(request: AdvisoryCheckRequest): Promise<AdvisoryFlag[]>;
  
  /**
   * Check for potential contradictions between draft and SCHOLAR patterns
   */
  async checkPotentialContradictions(wcpId: string, draftContent: string): Promise<AdvisoryFlag[]>;
  
  /**
   * Check if draft engages with relevant bound RLLs
   */
  async checkRLLEngagement(wcpId: string, draftContent: string): Promise<AdvisoryFlag[]>;
  
  /**
   * Dismiss an advisory flag (author proceeds regardless)
   */
  async dismissFlag(flagId: string): Promise<void>;
  
  /**
   * Get all flags for a WCP session
   */
  async getSessionFlags(wcpId: string): Promise<AdvisoryFlag[]>;
}
```

### 3.7 Post-Write Queue Service

```typescript
// lib/services/pipeline/post-write-queue.service.ts

import type {
  PostWriteQueueRecord,
  QueueStatus,
  WriteType,
  LearningEventRecord
} from '@/lib/types/pipeline.types';

export interface QueueRequest {
  memFileId: number;
  memFilePath: string;
  civilization: string;
  writeType: WriteType;
  previousVersion?: string;
  newVersion: string;
  priority?: number;
}

export interface ProcessingResult {
  pwqrId: string;
  success: boolean;
  resultingLer?: LearningEventRecord;
  errors?: string[];
}

export class PostWriteQueueService {
  /**
   * Queue a newly written/modified MEM for LEARN mode ingestion
   * Called automatically after WRITE mode commits
   */
  async queueForIngestion(request: QueueRequest): Promise<PostWriteQueueRecord>;
  
  /**
   * Get pending queue items for a civilization
   */
  async getPendingQueue(civilization: string): Promise<PostWriteQueueRecord[]>;
  
  /**
   * Get full queue (all statuses) for a civilization
   */
  async getFullQueue(civilization: string): Promise<PostWriteQueueRecord[]>;
  
  /**
   * Get queue item by ID
   */
  async getQueueItem(pwqrId: string): Promise<PostWriteQueueRecord>;
  
  /**
   * Process next item in queue (called during LEARN mode)
   * Returns processing result including resulting LER
   */
  async processNextItem(civilization: string): Promise<ProcessingResult | null>;
  
  /**
   * Process specific queue item
   */
  async processItem(pwqrId: string): Promise<ProcessingResult>;
  
  /**
   * Update queue item status
   */
  async updateStatus(pwqrId: string, status: QueueStatus): Promise<PostWriteQueueRecord>;
  
  /**
   * Set priority for queue item (lower = higher priority)
   */
  async setPriority(pwqrId: string, priority: number): Promise<PostWriteQueueRecord>;
  
  /**
   * Get queue statistics
   */
  async getQueueStats(civilization: string): Promise<{
    pending: number;
    inProgress: number;
    complete: number;
    failed: number;
    oldestPending?: Date;
  }>;
  
  /**
   * Retry failed queue item
   */
  async retryItem(pwqrId: string): Promise<PostWriteQueueRecord>;
}
```

### 3.8 Pedagogical Observation Service

```typescript
// lib/services/pipeline/pedagogical-observation.service.ts

import type {
  PedagogicalObservationRecord,
  PORObservationType,
  PORObservationContent,
  PORStatus,
  LearningEventRecord
} from '@/lib/types/pipeline.types';

export interface PORGenerationContext {
  sessionId: string;
  civilization: string;
  observationType: PORObservationType;
  observationContent: PORObservationContent;
  relatedPatterns?: string[];
  relatedRlls?: string[];
  relatedScls?: string[];
  relatedMemFiles?: string[];
}

export interface PORReviewAction {
  porId: string;
  action: 'DISMISS' | 'DEFER' | 'INVESTIGATE' | 'CONVERT_TO_TASK';
  userId: string;
  rationale?: string;
}

export interface InvestigationResult {
  porId: string;
  success: boolean;
  resultingLer?: LearningEventRecord;
  learnTaskId?: string;
  errors?: string[];
}

export class PedagogicalObservationService {
  /**
   * Generate a POR from an IMAGINE mode observation
   */
  async generatePOR(context: PORGenerationContext): Promise<PedagogicalObservationRecord>;
  
  /**
   * Get all PORs for a session
   */
  async getSessionPORs(sessionId: string): Promise<PedagogicalObservationRecord[]>;
  
  /**
   * Get PORs by status for a civilization
   */
  async getPORsByStatus(civilization: string, status: PORStatus): Promise<PedagogicalObservationRecord[]>;
  
  /**
   * Get pending PORs awaiting review
   */
  async getPendingReview(civilization: string): Promise<PedagogicalObservationRecord[]>;
  
  /**
   * Get a specific POR
   */
  async getPOR(porId: string): Promise<PedagogicalObservationRecord>;
  
  /**
   * Review and act on a POR
   */
  async reviewPOR(action: PORReviewAction): Promise<PedagogicalObservationRecord>;
  
  /**
   * Dismiss a POR (observation noted but no action taken)
   */
  async dismissPOR(porId: string, userId: string, rationale?: string): Promise<PedagogicalObservationRecord>;
  
  /**
   * Defer a POR for later review
   */
  async deferPOR(porId: string, userId: string): Promise<PedagogicalObservationRecord>;
  
  /**
   * Trigger LEARN investigation based on POR
   */
  async investigatePOR(porId: string, userId: string): Promise<InvestigationResult>;
  
  /**
   * Convert POR to a LEARN task (queued for future processing)
   */
  async convertToLearnTask(porId: string, userId: string): Promise<PedagogicalObservationRecord>;
  
  /**
   * Get POR statistics for a civilization
   */
  async getPORStats(civilization: string): Promise<{
    recorded: number;
    reviewed: number;
    dismissed: number;
    deferred: number;
    actedUpon: number;
    byType: Record<PORObservationType, number>;
  }>;
  
  /**
   * Check if automatic POR generation is warranted
   * Called during IMAGINE mode at friction points
   */
  async shouldGeneratePOR(
    sessionId: string, 
    observationType: PORObservationType,
    context: Partial<PORObservationContent>
  ): Promise<boolean>;
}
```

### 3.9 IMAGINE Session Service

```typescript
// lib/services/pipeline/imagine-session.service.ts

import type {
  ImagineSessionSummary,
  ImagineSessionStatus,
  PedagogicalObservationRecord,
  ConfidenceLevel
} from '@/lib/types/pipeline.types';

export interface StartSessionRequest {
  civilization: string;
  initialTopics?: string[];
}

export interface SessionInteraction {
  type: 'OGE_PRESENTED' | 'OGE_SELECTED' | 'QUESTION' | 'CONTRADICTION_SURFACED';
  details: Record<string, unknown>;
}

export interface ImagineContext {
  // SCHOLAR state read for IMAGINE exposition
  patterns: Array<{ patternId: string; description: string; confidence: ConfidenceLevel }>;
  boundRlls: Array<{ rllId: string; description: string }>;
  activeContradictions: Array<{ sclId: string; description: string }>;
  negativeCapabilityZones: string[];
  confidenceTopology: Record<string, ConfidenceLevel>;
}

export class ImagineSessionService {
  /**
   * Start a new IMAGINE session
   */
  async startSession(request: StartSessionRequest): Promise<ImagineSessionSummary>;
  
  /**
   * Get current session
   */
  async getCurrentSession(sessionId: string): Promise<ImagineSessionSummary>;
  
  /**
   * End an IMAGINE session
   */
  async endSession(sessionId: string): Promise<ImagineSessionSummary>;
  
  /**
   * Abandon a session (ended abnormally)
   */
  async abandonSession(sessionId: string): Promise<void>;
  
  /**
   * Record an interaction within the session
   */
  async recordInteraction(sessionId: string, interaction: SessionInteraction): Promise<void>;
  
  /**
   * Add a topic to the session
   */
  async addTopic(sessionId: string, topic: string): Promise<void>;
  
  /**
   * Add a MEM file reference to the session
   */
  async addMemReference(sessionId: string, memFilePath: string): Promise<void>;
  
  /**
   * Get IMAGINE context (SCHOLAR state for exposition)
   * This is the LEARN → IMAGINE read interface
   */
  async getImagineContext(civilization: string, topics?: string[]): Promise<ImagineContext>;
  
  /**
   * Get session history for a civilization
   */
  async getSessionHistory(civilization: string, limit?: number): Promise<ImagineSessionSummary[]>;
  
  /**
   * Get PORs generated during a session
   */
  async getSessionPORs(sessionId: string): Promise<PedagogicalObservationRecord[]>;
  
  /**
   * Get aggregate statistics across sessions
   */
  async getAggregateStats(civilization: string): Promise<{
    totalSessions: number;
    totalDuration: number;
    avgSessionDuration: number;
    totalQuestionsAsked: number;
    totalContradictionsSurfaced: number;
    porConversionRate: number;  // % of PORs that were ACTED_UPON
  }>;
}
```

---

## 4. API Routes

```typescript
// app/api/pipeline/ingest/route.ts
POST /api/pipeline/ingest
  Body: { memFilePaths: string[], mode: IngestionMode, scholarFileId: number }
  Response: LearningEventRecord

// app/api/pipeline/ingest/[lerId]/confirm/route.ts
POST /api/pipeline/ingest/[lerId]/confirm
  Response: LearningEventRecord

// app/api/pipeline/ingest/[lerId]/reject/route.ts  
POST /api/pipeline/ingest/[lerId]/reject
  Body: { reason: string }
  Response: void

// app/api/pipeline/promote/route.ts
POST /api/pipeline/promote
  Body: { rllId: string }
  Response: RecursiveLearningLaw

// app/api/pipeline/bind/route.ts
POST /api/pipeline/bind
  Body: { rllId: string, targetCoreFileId: number }
  Response: BindingEventRecord

// app/api/pipeline/conflicts/route.ts
GET /api/pipeline/conflicts?civilization=RUSSIA&status=OPEN
  Response: CrossLayerConflict[]

// app/api/pipeline/conflicts/[conflictId]/resolve/route.ts
POST /api/pipeline/conflicts/[conflictId]/resolve
  Body: ResolutionAction
  Response: CrossLayerConflict

// app/api/pipeline/audit/route.ts
GET /api/pipeline/audit?eventType=INGESTION&limit=50
  Response: PipelineAuditEntry[]

// app/api/pipeline/audit/trace/[rllId]/route.ts
GET /api/pipeline/audit/trace/[rllId]
  Response: TraceabilityChain

// app/api/rll/route.ts
GET /api/rll?civilization=RUSSIA&state=BOUND
  Response: RecursiveLearningLaw[]

// app/api/rll/[rllId]/route.ts
GET /api/rll/[rllId]
  Response: RecursiveLearningLaw

// app/api/rll/[rllId]/review/route.ts
POST /api/rll/[rllId]/review
  Body: { contradictingMemFiles: string[] }
  Response: void

// app/api/rll/[rllId]/reaffirm/route.ts
POST /api/rll/[rllId]/reaffirm
  Body: { rationale: string }
  Response: RecursiveLearningLaw

// app/api/rll/[rllId]/supersede/route.ts
POST /api/rll/[rllId]/supersede
  Body: { replacementRllId: string, rationale: string }
  Response: RecursiveLearningLaw

// ============================================
// SCHOLAR → WRITE MODE INTERFACE ROUTES
// ============================================

// app/api/write-context/route.ts
POST /api/write-context
  Body: { civilization: string, targetMemPath?: string, sessionId: string }
  Response: WriteContextPackage

// app/api/write-context/[wcpId]/route.ts
GET /api/write-context/[wcpId]
  Response: WriteContextPackage

// app/api/write-context/[wcpId]/advisory-check/route.ts
POST /api/write-context/[wcpId]/advisory-check
  Body: { draftContent: string, memConnections: string[] }
  Response: AdvisoryFlag[]

// app/api/write-context/[wcpId]/flags/route.ts
GET /api/write-context/[wcpId]/flags
  Response: AdvisoryFlag[]

// app/api/write-context/[wcpId]/flags/[flagId]/dismiss/route.ts
POST /api/write-context/[wcpId]/flags/[flagId]/dismiss
  Response: void

// ============================================
// POST-WRITE QUEUE ROUTES
// ============================================

// app/api/post-write-queue/route.ts
POST /api/post-write-queue
  Body: QueueRequest
  Response: PostWriteQueueRecord

// app/api/post-write-queue/route.ts
GET /api/post-write-queue?civilization=RUSSIA&status=PENDING
  Response: PostWriteQueueRecord[]

// app/api/post-write-queue/[pwqrId]/route.ts
GET /api/post-write-queue/[pwqrId]
  Response: PostWriteQueueRecord

// app/api/post-write-queue/[pwqrId]/process/route.ts
POST /api/post-write-queue/[pwqrId]/process
  Response: ProcessingResult

// app/api/post-write-queue/[pwqrId]/priority/route.ts
PATCH /api/post-write-queue/[pwqrId]/priority
  Body: { priority: number }
  Response: PostWriteQueueRecord

// app/api/post-write-queue/[pwqrId]/retry/route.ts
POST /api/post-write-queue/[pwqrId]/retry
  Response: PostWriteQueueRecord

// app/api/post-write-queue/stats/route.ts
GET /api/post-write-queue/stats?civilization=RUSSIA
  Response: { pending, inProgress, complete, failed, oldestPending }

// app/api/post-write-queue/process-next/route.ts
POST /api/post-write-queue/process-next
  Body: { civilization: string }
  Response: ProcessingResult | null

// ============================================
// PEDAGOGICAL OBSERVATION ROUTES
// ============================================

// app/api/por/route.ts
POST /api/por
  Body: PORGenerationContext
  Response: PedagogicalObservationRecord

// app/api/por/route.ts
GET /api/por?civilization=RUSSIA&status=RECORDED
  Response: PedagogicalObservationRecord[]

// app/api/por/[porId]/route.ts
GET /api/por/[porId]
  Response: PedagogicalObservationRecord

// app/api/por/[porId]/review/route.ts
POST /api/por/[porId]/review
  Body: PORReviewAction
  Response: PedagogicalObservationRecord

// app/api/por/[porId]/dismiss/route.ts
POST /api/por/[porId]/dismiss
  Body: { rationale?: string }
  Response: PedagogicalObservationRecord

// app/api/por/[porId]/defer/route.ts
POST /api/por/[porId]/defer
  Response: PedagogicalObservationRecord

// app/api/por/[porId]/investigate/route.ts
POST /api/por/[porId]/investigate
  Response: InvestigationResult

// app/api/por/[porId]/convert-to-task/route.ts
POST /api/por/[porId]/convert-to-task
  Response: PedagogicalObservationRecord

// app/api/por/stats/route.ts
GET /api/por/stats?civilization=RUSSIA
  Response: { recorded, reviewed, dismissed, deferred, actedUpon, byType }

// ============================================
// IMAGINE SESSION ROUTES
// ============================================

// app/api/imagine-session/route.ts
POST /api/imagine-session
  Body: StartSessionRequest
  Response: ImagineSessionSummary

// app/api/imagine-session/route.ts
GET /api/imagine-session?civilization=RUSSIA&limit=10
  Response: ImagineSessionSummary[]

// app/api/imagine-session/[sessionId]/route.ts
GET /api/imagine-session/[sessionId]
  Response: ImagineSessionSummary

// app/api/imagine-session/[sessionId]/end/route.ts
POST /api/imagine-session/[sessionId]/end
  Response: ImagineSessionSummary

// app/api/imagine-session/[sessionId]/interaction/route.ts
POST /api/imagine-session/[sessionId]/interaction
  Body: SessionInteraction
  Response: void

// app/api/imagine-session/[sessionId]/pors/route.ts
GET /api/imagine-session/[sessionId]/pors
  Response: PedagogicalObservationRecord[]

// app/api/imagine-session/context/route.ts
GET /api/imagine-session/context?civilization=RUSSIA&topics=reform,succession
  Response: ImagineContext

// app/api/imagine-session/stats/route.ts
GET /api/imagine-session/stats?civilization=RUSSIA
  Response: { totalSessions, totalDuration, avgSessionDuration, ... }
```

---

## 5. UI Components (Conceptual)

### 5.1 Pipeline Visualization

```
┌─────────────────────────────────────────────────────────────┐
│  PIPELINE STATUS: RUSSIA                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MEM FILES ──────────────────────────────────────┐          │
│  ┌────────────────────────────────────────────┐  │          │
│  │ Total: 118    Ingested: 87    Pending: 5   │  │          │
│  └────────────────────────────────────────────┘  │          │
│                       │                          │          │
│                       ▼                          │          │
│            [ INGESTION QUEUE: 5 ]                │          │
│                       │                          │          │
│                       ▼                          │          │
│  CIV–SCHOLAR–RUSSIA ─────────────────────────────┤          │
│  ┌────────────────────────────────────────────┐  │          │
│  │ Phase: CONSTRAINT GRAMMAR                  │  │          │
│  │ RLLs: 8 bound, 3 proposed, 2 candidates    │  │          │
│  │ Annotations: 42 active                     │  │          │
│  └────────────────────────────────────────────┘  │          │
│                       │                          │          │
│                       ▼                          │          │
│            [ PROMOTION QUEUE: 3 ]                │          │
│                       │                          │          │
│                       ▼                          │          │
│  CIV–CORE–RUSSIA ────────────────────────────────┘          │
│  ┌────────────────────────────────────────────┐             │
│  │ Version: 1.9                               │             │
│  │ Bound RLLs: 8                              │             │
│  │ Axioms: 8 (locked)                         │             │
│  └────────────────────────────────────────────┘             │
│                                                             │
│  ⚠ CONFLICTS: 2 open                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Ingestion Queue

```
┌─────────────────────────────────────────────────────────────┐
│  INGESTION QUEUE                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─ LER–RUSSIA–20260123T141500 ──────────────────────────┐  │
│  │ Source: MEM–RUSSIA–STOLYPIN.md                        │  │
│  │ Mode: SINGLE                                          │  │
│  │ Claims: 12 | Contradictions: 2 | Confidence: HIGH     │  │
│  │ Patterns: +2 confirmed, 1 stressed, 0 novel           │  │
│  │ Status: PENDING                                       │  │
│  │                                                       │  │
│  │ [ CONFIRM ]  [ REJECT ]  [ DETAILS ]                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─ LER–RUSSIA–20260123T143000 ──────────────────────────┐  │
│  │ Source: MEM–RUSSIA–KIEVAN–RUS.md                      │  │
│  │         MEM–RUSSIA–RURIKIDS.md                        │  │
│  │ Mode: BATCH                                           │  │
│  │ Claims: 28 | Contradictions: 4 | Confidence: MED      │  │
│  │ Patterns: +4 confirmed, 2 stressed, 1 novel           │  │
│  │ Status: PENDING                                       │  │
│  │                                                       │  │
│  │ [ CONFIRM ]  [ REJECT ]  [ DETAILS ]                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 RLL Registry

```
┌─────────────────────────────────────────────────────────────┐
│  RLL REGISTRY: RUSSIA                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  BOUND (8)                                                  │
│  ├── RLL–0001 Corridor Primacy Law              [DETAILS]   │
│  ├── RLL–0002 Sacral Ratification Sequence      [DETAILS]   │
│  ├── RLL–0003 Corridor vs Sacral Sequencing     [DETAILS]   │
│  ├── RLL–0004 Indirect Rule Absorption Law      [DETAILS]   │
│  ├── RLL–0005 Succession Failure vs Sacral      [DETAILS]   │
│  ├── RLL–0006 Law as Immobilization Technology  [DETAILS]   │
│  ├── RLL–0007 Rurikid → Petrine Continuity      [DETAILS]   │
│  └── RLL–0008 Coercive Modernization Trap       [DETAILS]   │
│                                                             │
│  PROPOSED (3) ─────────────────────────────────────────────│
│  ├── RLL–0009 Resource Curse Centralization     [BIND]      │
│  ├── RLL–0010 Orthodox Church State Fusion      [BIND]      │
│  └── RLL–0011 Peripheral Absorption Sequence    [BIND]      │
│                                                             │
│  CANDIDATES (2) ───────────────────────────────────────────│
│  ├── RLL–0012 Intelligentsia Alienation Cycle   [PROMOTE]   │
│  └── RLL–0013 Reform-Reaction Oscillation       [PROMOTE]   │
│                                                             │
│  UNDER REVIEW (0)                                           │
│  SUPERSEDED (0)                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Migration Path

### Phase 1: Database Setup
1. Create new tables (non-destructive)
2. Migrate existing RLL references from SCHOLAR/CORE files to rll_registry
3. Backfill learning_event_records from existing SCHOLAR ingestion history (if available)

### Phase 2: Service Integration
1. Implement IngestionService with existing LEARN mode
2. Implement PromotionService with existing RLL binding logic
3. Add audit logging to all operations

### Phase 3: UI Integration
1. Add Pipeline Visualization component
2. Add Ingestion Queue interface
3. Add RLL Registry browser
4. Add Audit Explorer

### Phase 4: Validation
1. Test ingestion → promotion → binding flow
2. Verify audit trail completeness
3. Test conflict detection and resolution
4. Validate traceability chains

---

## 7. Governance Notes

- This implementation specification is subordinate to LAYER–INTERACTION–PROTOCOL v1.0
- All database operations must maintain append-only audit trail
- No DELETE operations on audit_log table
- User authorization required for all binding operations
- Automatic operations must be logged with authorization_type = 'AUTOMATIC'
