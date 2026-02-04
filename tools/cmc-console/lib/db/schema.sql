-- CMC Console Database Schema

-- File Registry: Index of all files in the repository
CREATE TABLE IF NOT EXISTS file_registry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_path TEXT UNIQUE NOT NULL,
  file_type TEXT NOT NULL,
  civilization TEXT,
  era TEXT CHECK(era IN ('ancient', 'medieval', 'modern')),
  status TEXT CHECK(status IN ('draft', 'published', 'frozen')),
  version TEXT,
  last_modified INTEGER NOT NULL,
  header_metadata TEXT, -- JSON blob of parsed header
  validation_status TEXT NOT NULL DEFAULT 'warning' CHECK(validation_status IN ('valid', 'invalid', 'warning')),
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_file_registry_type ON file_registry(file_type);
CREATE INDEX IF NOT EXISTS idx_file_registry_civilization ON file_registry(civilization);
CREATE INDEX IF NOT EXISTS idx_file_registry_validation ON file_registry(validation_status);

-- Validation Logs: Track validation results
CREATE TABLE IF NOT EXISTS validation_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER NOT NULL,
  validation_type TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('valid', 'invalid', 'warning')),
  message TEXT,
  details TEXT, -- JSON blob
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_validation_logs_file ON validation_logs(file_id);
CREATE INDEX IF NOT EXISTS idx_validation_logs_type ON validation_logs(validation_type);

-- Change History: Track all modifications
CREATE TABLE IF NOT EXISTS change_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER,
  change_type TEXT NOT NULL CHECK(change_type IN ('create', 'update', 'delete')),
  diff TEXT,
  mode TEXT CHECK(mode IN ('write', 'learn', 'lecture')),
  confirmed BOOLEAN NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_change_history_file ON change_history(file_id);
CREATE INDEX IF NOT EXISTS idx_change_history_mode ON change_history(mode);

-- Mode State: Track current mode (IMAGINE, LEARN, WRITE, or AUDIT)
-- A mode must always be active (default: LEARN)
CREATE TABLE IF NOT EXISTS scholar_mode_state (
  id INTEGER PRIMARY KEY CHECK (id = 1), -- Single row table
  current_mode TEXT NOT NULL CHECK(current_mode IN ('IMAGINE', 'LEARN', 'WRITE', 'AUDIT')) DEFAULT 'LEARN',
  last_switched_at INTEGER,
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

-- Insert initial row with default LEARN mode
INSERT OR IGNORE INTO scholar_mode_state (id, current_mode) VALUES (1, 'LEARN');

-- ============================================================================
-- HIGH-PRIORITY SCHEMA ADDITIONS FOR FUTURE ENHANCEMENTS
-- ============================================================================

-- File Relationships: Track typed directional connections between files (CMC 4.0)
-- Implements PROPOSAL–TYPED–CONNECTIONS
CREATE TABLE IF NOT EXISTS file_relationships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_file_id INTEGER NOT NULL,
  target_file_id INTEGER NOT NULL,
  relationship_type TEXT NOT NULL CHECK(relationship_type IN (
    -- Typed MEM connections (CMC 4.0)
    'depends_on',          -- Prerequisite: source cannot be understood without target
    'enables',             -- Consequence: source is required to understand target
    'contradicts',         -- Tension: source presents claims in tension with target
    'parallels',           -- Similarity: source exhibits patterns similar to target
    'temporal_before',     -- Chronological: source precedes target in time
    'temporal_after',      -- Chronological: source follows target in time
    'geographic',          -- Spatial: source operates within or is shaped by target
    -- Reference connections
    'civ_core_reference',  -- MEM references CIV–CORE section
    'doctrine_reference',  -- MEM references doctrine
    -- Legacy types (for backward compatibility)
    'mem_connection',      -- Untyped MEM connection (legacy format)
    'contradiction',       -- SCL contradiction (legacy)
    'temporal_sequence',   -- Temporal relationship (legacy)
    'structural_similarity' -- Similar structural patterns (legacy)
  )),
  relationship_explanation TEXT, -- One-line explanation of WHY connected (required for typed)
  relationship_context TEXT,     -- Legacy: Description of relationship
  strength REAL DEFAULT 1.0,     -- Legacy: Relationship strength (0-1) - deprecated
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (source_file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  FOREIGN KEY (target_file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  UNIQUE(source_file_id, target_file_id, relationship_type)
);

CREATE INDEX IF NOT EXISTS idx_file_relationships_source ON file_relationships(source_file_id);
CREATE INDEX IF NOT EXISTS idx_file_relationships_target ON file_relationships(target_file_id);
CREATE INDEX IF NOT EXISTS idx_file_relationships_type ON file_relationships(relationship_type);

-- Temporal Index: Track dates for timeline generation and temporal queries
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

-- Enhanced File Metadata: Add columns to file_registry for pre-computed counts and extracted data
-- Note: SQLite doesn't support IF NOT EXISTS for ALTER TABLE, so we'll check and add conditionally
-- These will be added via migration-safe approach in the database initialization

-- ============================================================================
-- CONCEPT INDEX SCHEMA (CMC 4.0)
-- ============================================================================

-- Concept definitions: Controlled vocabulary of analytical concepts
CREATE TABLE IF NOT EXISTS concepts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  concept_key TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  definition TEXT,
  frame TEXT CHECK(frame IN ('mearsheimer', 'mercouris', 'barnes', 'cross_cutting')),
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_concepts_key ON concepts(concept_key);
CREATE INDEX IF NOT EXISTS idx_concepts_frame ON concepts(frame);

-- MEM-to-concept mappings: Which concepts apply to which MEMs
CREATE TABLE IF NOT EXISTS mem_concepts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id INTEGER NOT NULL,
  concept_id INTEGER NOT NULL,
  relevance TEXT CHECK(relevance IN ('primary', 'secondary')),
  explanation TEXT, -- One-line explanation of how concept applies to this MEM
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  FOREIGN KEY (file_id) REFERENCES file_registry(id) ON DELETE CASCADE,
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE,
  UNIQUE(file_id, concept_id)
);

CREATE INDEX IF NOT EXISTS idx_mem_concepts_file ON mem_concepts(file_id);
CREATE INDEX IF NOT EXISTS idx_mem_concepts_concept ON mem_concepts(concept_id);
CREATE INDEX IF NOT EXISTS idx_mem_concepts_relevance ON mem_concepts(relevance);

-- Migration: Add new columns to file_registry (run conditionally to avoid errors on existing databases)
-- These columns support future enhancements without breaking existing functionality

