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
