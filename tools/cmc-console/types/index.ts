/**
 * Type definitions for CMC Console
 */

export type FileType = 
  | 'MEM'
  | 'CIV-CORE'
  | 'CIV-INDEX'
  | 'CIV-SCHOLAR'
  | 'CIV-SCHOLAR-PROTOCOL'
  | 'CIV-DOCTRINE'
  | 'TEMPLATE'
  | 'GOVERNANCE'
  | 'UNKNOWN';

export type Era = 'ancient' | 'medieval' | 'modern' | null;

export type FileStatus = 'draft' | 'published' | 'frozen' | null;

export type ValidationStatus = 'valid' | 'invalid' | 'warning';

export type ValidationType = 
  | 'header'
  | 'structure'
  | 'arc_compliance'
  | 'section_order'
  | 'naming_convention';

// Mode: Four mutually exclusive modes within the SCHOLAR system
export type ScholarMode = 'IMAGINE' | 'LEARN' | 'WRITE' | 'AUDIT' | null;

// Legacy mode type (for backward compatibility during migration)
export type Mode = ScholarMode;

export interface FileRegistry {
  id: number;
  file_path: string;
  file_type: FileType;
  civilization: string | null;
  era: Era;
  status: FileStatus;
  version: string | null;
  last_modified: number;
  header_metadata: string | null; // JSON string
  validation_status: ValidationStatus;
  created_at: number;
  updated_at: number;
  // Enhanced metadata columns (added via migration)
  mem_connections_count?: number;
  cross_civ_connections_count?: number;
  contradiction_count?: number;
  pattern_count?: number;
  date_start?: number | null;
  date_end?: number | null;
  extracted_constraints?: string | null; // JSON string
  extracted_patterns?: string | null;    // JSON string
}

export interface ValidationLog {
  id: number;
  file_id: number;
  validation_type: ValidationType;
  status: ValidationStatus;
  message: string | null;
  details: string | null; // JSON string
  created_at: number;
}

export interface ChangeHistory {
  id: number;
  file_id: number;
  change_type: 'create' | 'update' | 'delete';
  diff: string | null;
  mode: Mode;
  confirmed: boolean;
  created_at: number;
}

export interface FileHeaderMetadata {
  version?: string;
  status?: FileStatus;
  era?: Era;
  civilization?: string;
  arc_sources?: {
    primary?: number;
    secondary?: number;
  };
  sections?: string[];
  [key: string]: unknown;
}

export interface ParsedFile {
  path: string;
  type: FileType;
  civilization: string | null;
  header: FileHeaderMetadata | null;
  content: string;
  raw: string;
}

export interface FileClassification {
  file_type: FileType;
  civilization: string | null;
  era: Era;
  status: FileStatus;
  version: string | null;
}

// Relationship types for file_relationships table
export type RelationshipType = 
  | 'mem_connection'
  | 'civ_core_reference'
  | 'doctrine_reference'
  | 'contradiction'
  | 'temporal_sequence'
  | 'structural_similarity';

export interface FileRelationship {
  id: number;
  source_file_id: number;
  target_file_id: number;
  relationship_type: RelationshipType;
  relationship_context: string | null;
  strength: number;
  created_at: number;
}

// Temporal index types
export type TemporalDateType = 'start' | 'end' | 'event' | 'period';

export interface TemporalIndex {
  id: number;
  file_id: number;
  date_type: TemporalDateType;
  date_value: number | null;      // Normalized date (e.g., -753 for 753 BC, 476 for 476 AD)
  date_display: string | null;    // Original date string
  era: 'BC' | 'AD' | null;
  uncertainty: string | null;
  context: string | null;
  created_at: number;
}

export interface LoadedMemFile {
  path: string;
  content: string;
  lastUsed: number;
}

export interface DoctrineProposal {
  type: 'NEW' | 'MODIFICATION';
  existingDoctrineName?: string;
  existingDoctrineNumber?: string;
  proposedName: string;
  sourceSynthesis: string;
  rationale: string;
  definition: string;
  operationalMeaning: string[];
  hardConstraints: string[];
  evidenceBase: string[];
}

