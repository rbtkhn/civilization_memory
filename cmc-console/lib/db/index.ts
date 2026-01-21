/**
 * Database initialization and connection
 */

import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { mkdirSync, existsSync } from 'fs';
import { FileRegistry, ValidationLog, ChangeHistory, FileRelationship, TemporalIndex } from '@/types';

let db: Database.Database | null = null;

/**
 * Check if a column exists in a table
 */
function columnExists(db: Database.Database, tableName: string, columnName: string): boolean {
  try {
    const stmt = db.prepare(`PRAGMA table_info(${tableName})`);
    const columns = stmt.all() as Array<{ name: string }>;
    return columns.some(col => col.name === columnName);
  } catch {
    return false;
  }
}

/**
 * Run database migrations to add new columns safely
 */
function runMigrations(db: Database.Database) {
  // Migration: Add enhanced metadata columns to file_registry
  // Note: cross_civ_connections_count is for historical tracking only
  // Per CIV–MEM–TEMPLATE v1.9, all MEM connections must be same civilization
  const newColumns = [
    { name: 'mem_connections_count', type: 'INTEGER DEFAULT 0' },
    { name: 'cross_civ_connections_count', type: 'INTEGER DEFAULT 0' }, // Historical only - new files must have all same-civ connections
    { name: 'contradiction_count', type: 'INTEGER DEFAULT 0' },
    { name: 'pattern_count', type: 'INTEGER DEFAULT 0' },
    { name: 'date_start', type: 'INTEGER' },
    { name: 'date_end', type: 'INTEGER' },
    { name: 'extracted_constraints', type: 'TEXT' }, // JSON
    { name: 'extracted_patterns', type: 'TEXT' },    // JSON
  ];

  for (const column of newColumns) {
    if (!columnExists(db, 'file_registry', column.name)) {
      try {
        db.exec(`ALTER TABLE file_registry ADD COLUMN ${column.name} ${column.type}`);
      } catch (error) {
        // Column might already exist or table might not exist yet
        console.warn(`Migration: Could not add column ${column.name}:`, error);
      }
    }
  }

  // Migration: Update scholar_mode_state table to include AUDIT mode
  // SQLite doesn't support modifying CHECK constraints, so we need to recreate the table
  // Only run this migration once by checking if the constraint already allows AUDIT
  try {
    // Check if table exists
    const tableCheck = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='scholar_mode_state'");
    const tableExists = tableCheck.get() !== undefined;
    
    if (tableExists) {
      // Check if migration is needed by checking the table schema
      const schemaCheck = db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name='scholar_mode_state'");
      const schema = schemaCheck.get() as { sql: string } | undefined;
      
      // If schema doesn't include AUDIT in the CHECK constraint, we need to migrate
      const needsMigration = schema && schema.sql && !schema.sql.includes("'AUDIT'");
      
      if (needsMigration) {
        // Get current mode value before recreating
        let modeValue = 'LEARN';
        try {
          const currentModeStmt = db.prepare('SELECT current_mode FROM scholar_mode_state WHERE id = 1');
          const currentMode = currentModeStmt.get() as { current_mode: string } | undefined;
          modeValue = currentMode?.current_mode || 'LEARN';
        } catch (e) {
          // If we can't read the current mode, default to LEARN
          console.warn('Could not read current mode, defaulting to LEARN:', e);
        }
        
              // Validate mode value to prevent SQL injection
              // Map old TEACH mode to IMAGINE for migration
              const validModes = ['IMAGINE', 'LEARN', 'WRITE', 'AUDIT'];
              const migratedModeValue = modeValue === 'TEACH' ? 'IMAGINE' : modeValue;
              const safeModeValue = validModes.includes(migratedModeValue) ? migratedModeValue : 'LEARN';

              // Drop old table
              db.exec('DROP TABLE IF EXISTS scholar_mode_state');

              // Recreate with updated CHECK constraint (TEACH -> IMAGINE)
              db.exec(`
                CREATE TABLE scholar_mode_state (
                  id INTEGER PRIMARY KEY CHECK (id = 1),
                  current_mode TEXT NOT NULL CHECK(current_mode IN ('IMAGINE', 'LEARN', 'WRITE', 'AUDIT')) DEFAULT 'LEARN',
            last_switched_at INTEGER,
            updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
          )
        `);
        
        // Restore the mode value using parameterized query
        const insertStmt = db.prepare('INSERT INTO scholar_mode_state (id, current_mode) VALUES (1, ?)');
        insertStmt.run(safeModeValue);
        
        console.log(`Migration: Updated scholar_mode_state table to include AUDIT mode (restored mode: ${safeModeValue})`);
      }
    }
  } catch (error) {
    // Don't let migration errors break the app - just log and continue
    console.warn('Migration: Could not update scholar_mode_state table:', error);
  }
}

export function getDatabase(): Database.Database {
  if (db) {
    return db;
  }

  // Ensure database directory exists
  const dbPath = join(process.cwd(), 'database', 'index.db');
  const dbDir = dirname(dbPath);
  if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true });
  }
  
  // Initialize database
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  // Run schema
  const schemaPath = join(process.cwd(), 'lib', 'db', 'schema.sql');
  const schema = readFileSync(schemaPath, 'utf-8');
  db.exec(schema);

  // Run migrations (add new columns to existing tables)
  runMigrations(db);

  return db;
}

export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}

// Prepared statements for common queries
export function getFileRegistry() {
  const database = getDatabase();
  return {
    getAll: (): FileRegistry[] => {
      const stmt = database.prepare('SELECT * FROM file_registry ORDER BY file_path');
      return stmt.all() as FileRegistry[];
    },
    getById: (id: number): FileRegistry | undefined => {
      const stmt = database.prepare('SELECT * FROM file_registry WHERE id = ?');
      return stmt.get(id) as FileRegistry | undefined;
    },
    getByPath: (path: string): FileRegistry | undefined => {
      const stmt = database.prepare('SELECT * FROM file_registry WHERE file_path = ?');
      return stmt.get(path) as FileRegistry | undefined;
    },
    getByType: (fileType: string): FileRegistry[] => {
      const stmt = database.prepare('SELECT * FROM file_registry WHERE file_type = ? ORDER BY file_path');
      return stmt.all(fileType) as FileRegistry[];
    },
    getByTypeAndCivilization: (fileType: string, civilization: string): FileRegistry[] => {
      const stmt = database.prepare('SELECT * FROM file_registry WHERE file_type = ? AND civilization = ? ORDER BY file_path');
      return stmt.all(fileType, civilization.toUpperCase()) as FileRegistry[];
    },
    insert: (file: Omit<FileRegistry, 'id' | 'created_at' | 'updated_at'>) => {
      const stmt = database.prepare(`
        INSERT INTO file_registry 
        (file_path, file_type, civilization, era, status, version, last_modified, header_metadata, validation_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      return stmt.run(
        file.file_path,
        file.file_type,
        file.civilization,
        file.era,
        file.status,
        file.version,
        file.last_modified,
        file.header_metadata,
        file.validation_status
      );
    },
    update: (id: number, file: Partial<FileRegistry>) => {
      const updates: string[] = [];
      const values: unknown[] = [];
      
      if (file.file_type !== undefined) {
        updates.push('file_type = ?');
        values.push(file.file_type);
      }
      if (file.civilization !== undefined) {
        updates.push('civilization = ?');
        values.push(file.civilization);
      }
      if (file.era !== undefined) {
        updates.push('era = ?');
        values.push(file.era);
      }
      if (file.status !== undefined) {
        updates.push('status = ?');
        values.push(file.status);
      }
      if (file.version !== undefined) {
        updates.push('version = ?');
        values.push(file.version);
      }
      if (file.last_modified !== undefined) {
        updates.push('last_modified = ?');
        values.push(file.last_modified);
      }
      if (file.header_metadata !== undefined) {
        updates.push('header_metadata = ?');
        values.push(file.header_metadata);
      }
      if (file.validation_status !== undefined) {
        updates.push('validation_status = ?');
        values.push(file.validation_status);
      }
      
      updates.push('updated_at = strftime("%s", "now")');
      values.push(id);
      
      const stmt = database.prepare(`
        UPDATE file_registry 
        SET ${updates.join(', ')} 
        WHERE id = ?
      `);
      return stmt.run(...values);
    },
    delete: (id: number) => {
      const stmt = database.prepare('DELETE FROM file_registry WHERE id = ?');
      return stmt.run(id);
    }
  };
}

export function getValidationLogs() {
  const database = getDatabase();
  return {
    getByFileId: (fileId: number): ValidationLog[] => {
      const stmt = database.prepare('SELECT * FROM validation_logs WHERE file_id = ? ORDER BY created_at DESC');
      return stmt.all(fileId) as ValidationLog[];
    },
    insert: (log: Omit<ValidationLog, 'id' | 'created_at'>) => {
      const stmt = database.prepare(`
        INSERT INTO validation_logs (file_id, validation_type, status, message, details)
        VALUES (?, ?, ?, ?, ?)
      `);
      return stmt.run(log.file_id, log.validation_type, log.status, log.message, log.details);
    }
  };
}

export function getChangeHistory() {
  const database = getDatabase();
  return {
    getByFileId: (fileId: number): ChangeHistory[] => {
      const stmt = database.prepare('SELECT * FROM change_history WHERE file_id = ? ORDER BY created_at DESC');
      return stmt.all(fileId) as ChangeHistory[];
    },
    insert: (change: Omit<ChangeHistory, 'id' | 'created_at'>) => {
      const stmt = database.prepare(`
        INSERT INTO change_history (file_id, change_type, diff, mode, confirmed)
        VALUES (?, ?, ?, ?, ?)
      `);
      return stmt.run(change.file_id, change.change_type, change.diff, change.mode, change.confirmed ? 1 : 0);
    }
  };
}

/**
 * File Relationships: Track connections between files
 */
export function getFileRelationships() {
  const database = getDatabase();
  return {
    getBySourceFile: (fileId: number): FileRelationship[] => {
      const stmt = database.prepare('SELECT * FROM file_relationships WHERE source_file_id = ? ORDER BY created_at DESC');
      return stmt.all(fileId) as FileRelationship[];
    },
    getByTargetFile: (fileId: number): FileRelationship[] => {
      const stmt = database.prepare('SELECT * FROM file_relationships WHERE target_file_id = ? ORDER BY created_at DESC');
      return stmt.all(fileId) as FileRelationship[];
    },
    getByType: (type: string): FileRelationship[] => {
      const stmt = database.prepare('SELECT * FROM file_relationships WHERE relationship_type = ? ORDER BY created_at DESC');
      return stmt.all(type) as FileRelationship[];
    },
    insert: (relationship: Omit<FileRelationship, 'id' | 'created_at'>) => {
      const stmt = database.prepare(`
        INSERT INTO file_relationships (source_file_id, target_file_id, relationship_type, relationship_context, strength)
        VALUES (?, ?, ?, ?, ?)
      `);
      return stmt.run(
        relationship.source_file_id,
        relationship.target_file_id,
        relationship.relationship_type,
        relationship.relationship_context,
        relationship.strength
      );
    },
    delete: (id: number) => {
      const stmt = database.prepare('DELETE FROM file_relationships WHERE id = ?');
      return stmt.run(id);
    }
  };
}

/**
 * Temporal Index: Track dates for timeline generation
 */
export function getTemporalIndex() {
  const database = getDatabase();
  return {
    getByFileId: (fileId: number): TemporalIndex[] => {
      const stmt = database.prepare('SELECT * FROM temporal_index WHERE file_id = ? ORDER BY date_value');
      return stmt.all(fileId) as TemporalIndex[];
    },
    getByDateRange: (startDate: number, endDate: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT * FROM temporal_index 
        WHERE date_value >= ? AND date_value <= ? 
        ORDER BY date_value
      `);
      return stmt.all(startDate, endDate) as TemporalIndex[];
    },
    getByCivilizationAndDateRange: (civilization: string, startDate: number, endDate: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        JOIN file_registry fr ON ti.file_id = fr.id
        WHERE fr.civilization = ? AND ti.date_value >= ? AND ti.date_value <= ?
        ORDER BY ti.date_value
      `);
      return stmt.all(civilization, startDate, endDate) as TemporalIndex[];
    },
    // Enhanced query: Find files whose date ranges overlap with the query range
    getOverlappingDateRange: (startDate: number, endDate: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        JOIN file_registry fr ON ti.file_id = fr.id
        WHERE (ti.date_value >= ? AND ti.date_value <= ?)
           OR (fr.date_start IS NOT NULL AND fr.date_end IS NOT NULL 
               AND fr.date_start <= ? AND fr.date_end >= ?)
        ORDER BY ti.date_value
      `);
      return stmt.all(startDate, endDate, endDate, startDate) as TemporalIndex[];
    },
    // Enhanced query: Find files by civilization with overlapping date ranges
    getCivilizationOverlappingDateRange: (civilization: string, startDate: number, endDate: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        JOIN file_registry fr ON ti.file_id = fr.id
        WHERE fr.civilization = ?
          AND ((ti.date_value >= ? AND ti.date_value <= ?)
           OR (fr.date_start IS NOT NULL AND fr.date_end IS NOT NULL 
               AND fr.date_start <= ? AND fr.date_end >= ?))
        ORDER BY ti.date_value
      `);
      return stmt.all(civilization, startDate, endDate, endDate, startDate) as TemporalIndex[];
    },
    // Enhanced query: Find files before a specific date
    getBeforeDate: (date: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        WHERE ti.date_value <= ?
        ORDER BY ti.date_value DESC
      `);
      return stmt.all(date) as TemporalIndex[];
    },
    // Enhanced query: Find files after a specific date
    getAfterDate: (date: number): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        WHERE ti.date_value >= ?
        ORDER BY ti.date_value ASC
      `);
      return stmt.all(date) as TemporalIndex[];
    },
    // Enhanced query: Find files within a specific era (BC or AD)
    getByEra: (era: 'BC' | 'AD'): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        WHERE ti.era = ?
        ORDER BY ti.date_value
      `);
      return stmt.all(era) as TemporalIndex[];
    },
    // Enhanced query: Find files by date type
    getByDateType: (dateType: string): TemporalIndex[] => {
      const stmt = database.prepare(`
        SELECT ti.* FROM temporal_index ti
        WHERE ti.date_type = ?
        ORDER BY ti.date_value
      `);
      return stmt.all(dateType) as TemporalIndex[];
    },
    insert: (temporal: Omit<TemporalIndex, 'id' | 'created_at'>) => {
      const stmt = database.prepare(`
        INSERT INTO temporal_index (file_id, date_type, date_value, date_display, era, uncertainty, context)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      return stmt.run(
        temporal.file_id,
        temporal.date_type,
        temporal.date_value,
        temporal.date_display,
        temporal.era,
        temporal.uncertainty,
        temporal.context
      );
    },
    delete: (id: number) => {
      const stmt = database.prepare('DELETE FROM temporal_index WHERE id = ?');
      return stmt.run(id);
    }
  };
}

