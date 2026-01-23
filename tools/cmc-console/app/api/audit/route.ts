/**
 * API Route: Audit System
 * Provides audit functionality for examining mode behavior and compliance
 */

import { NextResponse } from 'next/server';
import { getCurrentMode, requireAction } from '@/lib/services/mode.service';
import { getFileRegistry } from '@/lib/db';
import { getDatabase } from '@/lib/db';

export async function GET(request: Request) {
  try {
    // Check mode
    const currentMode = getCurrentMode();
    if (currentMode !== 'AUDIT') {
      return NextResponse.json(
        { success: false, error: 'AUDIT mode must be active to access audit functions' },
        { status: 403 }
      );
    }

    // Verify action is allowed
    requireAction('audit_system_state');

    const { searchParams } = new URL(request.url);
    const auditType = searchParams.get('type') || 'overview';

    switch (auditType) {
      case 'overview':
        return NextResponse.json(await getAuditOverview());
      case 'mode_history':
        return NextResponse.json(await getModeHistory());
      case 'compliance':
        return NextResponse.json(await getComplianceReport());
      case 'validation':
        return NextResponse.json(await getValidationReport());
      case 'file_registry':
        return NextResponse.json(await getFileRegistryReport());
      default:
        return NextResponse.json(
          { success: false, error: `Unknown audit type: ${auditType}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error in audit route:', error);
    
    if (error instanceof Error && error.message.includes('Mode Violation')) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 403 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * Get audit overview
 */
async function getAuditOverview() {
  const db = getDatabase();
  const registry = getFileRegistry();
  
  // Get current mode state
  const modeStmt = db.prepare('SELECT * FROM scholar_mode_state WHERE id = 1');
  const modeState = modeStmt.get() as any;
  
  // Get file statistics
  const allFiles = registry.getAll();
  const filesByType = allFiles.reduce((acc, file) => {
    acc[file.file_type] = (acc[file.file_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Get validation statistics
  const validationStmt = db.prepare(`
    SELECT validation_status, COUNT(*) as count 
    FROM file_registry 
    GROUP BY validation_status
  `);
  const validationStats = validationStmt.all() as Array<{ validation_status: string; count: number }>;
  
  // Get change history statistics
  const changeStmt = db.prepare(`
    SELECT change_type, COUNT(*) as count 
    FROM change_history 
    GROUP BY change_type
  `);
  const changeStats = changeStmt.all() as Array<{ change_type: string; count: number }>;
  
  return {
    success: true,
    overview: {
      currentMode: modeState?.current_mode || 'LEARN',
      modeLastSwitched: modeState?.last_switched_at || null,
      totalFiles: allFiles.length,
      filesByType,
      validationStats: validationStats.reduce((acc, stat) => {
        acc[stat.validation_status] = stat.count;
        return acc;
      }, {} as Record<string, number>),
      changeStats: changeStats.reduce((acc, stat) => {
        acc[stat.change_type] = stat.count;
        return acc;
      }, {} as Record<string, number>),
    },
  };
}

/**
 * Get mode history
 */
async function getModeHistory() {
  // Note: Mode history would ideally be tracked in a separate table
  // For now, we return current mode state
  const db = getDatabase();
  const modeStmt = db.prepare('SELECT * FROM scholar_mode_state WHERE id = 1');
  const modeState = modeStmt.get() as any;
  
  return {
    success: true,
    modeHistory: {
      currentMode: modeState?.current_mode || 'LEARN',
      lastSwitchedAt: modeState?.last_switched_at || null,
      updatedAt: modeState?.updated_at || null,
      note: 'Full mode transition history would require a mode_history table',
    },
  };
}

/**
 * Get compliance report
 */
async function getComplianceReport() {
  const registry = getFileRegistry();
  const allFiles = registry.getAll();
  
  // Analyze compliance by file type
  const complianceByType: Record<string, {
    total: number;
    valid: number;
    invalid: number;
    warning: number;
  }> = {};
  
  for (const file of allFiles) {
    if (!complianceByType[file.file_type]) {
      complianceByType[file.file_type] = {
        total: 0,
        valid: 0,
        invalid: 0,
        warning: 0,
      };
    }
    
    complianceByType[file.file_type].total++;
    complianceByType[file.file_type][file.validation_status]++;
  }
  
  return {
    success: true,
    compliance: {
      byType: complianceByType,
      summary: {
        totalFiles: allFiles.length,
        validFiles: allFiles.filter(f => f.validation_status === 'valid').length,
        invalidFiles: allFiles.filter(f => f.validation_status === 'invalid').length,
        warningFiles: allFiles.filter(f => f.validation_status === 'warning').length,
      },
    },
  };
}

/**
 * Get validation report
 */
async function getValidationReport() {
  const db = getDatabase();
  const registry = getFileRegistry();
  
  // Get validation logs
  const validationStmt = db.prepare(`
    SELECT vl.*, fr.file_path, fr.file_type
    FROM validation_logs vl
    JOIN file_registry fr ON vl.file_id = fr.id
    ORDER BY vl.created_at DESC
    LIMIT 100
  `);
  const validationLogs = validationStmt.all() as any[];
  
  // Get files with validation issues
  const invalidFiles = registry.getAll().filter(f => f.validation_status === 'invalid');
  
  return {
    success: true,
    validation: {
      recentLogs: validationLogs,
      invalidFiles: invalidFiles.map(f => ({
        path: f.file_path,
        type: f.file_type,
        status: f.validation_status,
      })),
      totalLogs: validationLogs.length,
    },
  };
}

/**
 * Get file registry report
 */
async function getFileRegistryReport() {
  const registry = getFileRegistry();
  const allFiles = registry.getAll();
  
  // Group by civilization
  const byCivilization: Record<string, number> = {};
  for (const file of allFiles) {
    const civ = file.civilization || 'UNKNOWN';
    byCivilization[civ] = (byCivilization[civ] || 0) + 1;
  }
  
  // Group by era
  const byEra: Record<string, number> = {};
  for (const file of allFiles) {
    const era = file.era || 'UNKNOWN';
    byEra[era] = (byEra[era] || 0) + 1;
  }
  
  return {
    success: true,
    registry: {
      totalFiles: allFiles.length,
      byCivilization,
      byEra,
      recentFiles: allFiles
        .sort((a, b) => b.last_modified - a.last_modified)
        .slice(0, 20)
        .map(f => ({
          path: f.file_path,
          type: f.file_type,
          civilization: f.civilization,
          lastModified: f.last_modified,
        })),
    },
  };
}

