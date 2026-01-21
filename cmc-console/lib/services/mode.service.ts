/**
 * Mode Service
 * 
 * Enforces strict mode separation within the SCHOLAR system:
 * - IMAGINE: Creative visualization and immersive exploration (no epistemic authority)
 * - LEARN: Controlled ingestion and belief extraction
 * - WRITE: Canonical artifact generation
 * 
 * AUDIT mode removed - audits are now performed via text commands in any mode.
 * Modes are mutually exclusive. Cross-mode leakage is forbidden.
 */

import { ScholarMode } from '@/types';
import { getDatabase } from '@/lib/db';

// Mode action types
export type ModeAction = 
  | 'explain_content'
  | 'extract_beliefs'
  | 'write_file'
  | 'generate_options'
  | 'update_scholar'
  | 'modify_mem'
  | 'create_mem'
  | 'create_report'
  | 'synthesize_knowledge'
  | 'assimilate_learning'
  | 'resolve_contradiction'
  | 'create_belief'
  | 'narrate_content'
  | 'apply_arc_compliance'
  | 'audit_mode_behavior'
  | 'audit_compliance'
  | 'audit_validation'
  | 'audit_mode_history'
  | 'audit_file_registry'
  | 'audit_system_state';

// Mode guard map: which actions are allowed in which modes
const MODE_PERMISSIONS: Record<string, Set<ModeAction>> = {
  'IMAGINE': new Set([
    'explain_content',
    'generate_options',
    'narrate_content',
  ] as ModeAction[]),
  'LEARN': new Set([
    'extract_beliefs',
    'update_scholar',
    'synthesize_knowledge',
    'assimilate_learning',
  ] as ModeAction[]),
  'WRITE': new Set([
    'write_file',
    'modify_mem',
    'create_mem',
    'create_report',
    'apply_arc_compliance',
  ] as ModeAction[]),
  // AUDIT mode removed - audits are now performed via text commands in any mode
};

// Actions forbidden in all modes
const FORBIDDEN_ACTIONS: Set<ModeAction> = new Set([
  'resolve_contradiction',  // Contradictions must be preserved
  'create_belief',          // Belief creation is always forbidden
] as ModeAction[]);

// Mode listeners (for client-side updates - not used in server context)
let modeListeners: Array<(mode: ScholarMode) => void> = [];

/**
 * Get current mode from database
 * Defaults to LEARN if no mode is set
 */
export function getCurrentMode(): ScholarMode {
  try {
    const db = getDatabase();
    const stmt = db.prepare('SELECT current_mode FROM scholar_mode_state WHERE id = 1');
    const row = stmt.get() as { current_mode: ScholarMode } | undefined;
    const mode = row?.current_mode;
    
    // If no mode is set, initialize to LEARN (default)
    if (!mode) {
      const initStmt = db.prepare(`
        UPDATE scholar_mode_state 
        SET current_mode = 'LEARN', last_switched_at = strftime('%s', 'now'), updated_at = strftime('%s', 'now')
        WHERE id = 1
      `);
      initStmt.run();
      return 'LEARN';
    }
    
    return mode;
  } catch (error) {
    console.error('Error getting mode from database:', error);
    return 'LEARN'; // Default to LEARN on error
  }
}

/**
 * Set mode (explicit mode switch required)
 * Mode must be one of: IMAGINE, LEARN, WRITE (null is not allowed)
 * AUDIT mode removed - audits are now performed via text commands in any mode
 */
export function setMode(mode: ScholarMode): void {
  try {
    // A mode must always be active - null is not allowed
    if (mode === null) {
      throw new Error('Mode cannot be null. A mode (IMAGINE, LEARN, or WRITE) must always be active.');
    }
    
    // Validate mode - AUDIT mode removed, audits are now performed via text commands
    if (!['IMAGINE', 'LEARN', 'WRITE'].includes(mode)) {
      throw new Error(`Invalid mode: ${mode}. Must be IMAGINE, LEARN, or WRITE`);
    }
    
    const db = getDatabase();
    const previousMode = getCurrentMode();
    
    if (mode !== previousMode) {
      // Ensure the row exists (INSERT OR IGNORE won't update if it exists)
      const insertStmt = db.prepare(`
        INSERT OR IGNORE INTO scholar_mode_state (id, current_mode, last_switched_at, updated_at) 
        VALUES (1, 'LEARN', strftime('%s', 'now'), strftime('%s', 'now'))
      `);
      insertStmt.run();
      
      // Update the mode
      const updateStmt = db.prepare(`
        UPDATE scholar_mode_state 
        SET current_mode = ?, last_switched_at = strftime('%s', 'now'), updated_at = strftime('%s', 'now')
        WHERE id = 1
      `);
      const result = updateStmt.run(mode);
      
      if (result.changes === 0) {
        throw new Error('Failed to update mode in database. Row may not exist.');
      }
      
      // Notify listeners (if any in server context)
      modeListeners.forEach(listener => listener(mode));
      
      console.log(`[Mode] Switched from ${previousMode} to ${mode}`);
    }
  } catch (error) {
    console.error('Error setting mode in database:', error);
    throw error;
  }
}

/**
 * Check if an action is allowed in the current mode
 */
export function isActionAllowed(action: ModeAction): boolean {
  // Check if action is globally forbidden
  if (FORBIDDEN_ACTIONS.has(action)) {
    return false;
  }
  
  // Check if mode is active
  const currentMode = getCurrentMode();
  if (currentMode === null) {
    return false;
  }
  
  // Check mode-specific permissions
  const allowedActions = MODE_PERMISSIONS[currentMode] || new Set();
  return allowedActions.has(action);
}

/**
 * Guard function: throw error if action is not allowed
 */
export function requireAction(action: ModeAction): void {
  if (!isActionAllowed(action)) {
    const currentMode = getCurrentMode();
    const modeStr = currentMode || 'no mode active';
    throw new Error(
      `[Mode Violation] Action "${action}" is not allowed in ${modeStr} mode. ` +
      `Required mode: ${getRequiredModeForAction(action)}`
    );
  }
}

/**
 * Check for mode conflict (action requires multiple modes)
 */
export function checkModeConflict(actions: ModeAction[]): { conflict: boolean; message?: string } {
  const requiredModes = new Set<ScholarMode>();
  
  for (const action of actions) {
    const requiredMode = getRequiredModeForAction(action);
    if (requiredMode) {
      requiredModes.add(requiredMode);
    }
  }
  
  if (requiredModes.size > 1) {
    return {
      conflict: true,
      message: `Mode conflict: Actions require multiple modes: ${Array.from(requiredModes).join(', ')}`
    };
  }
  
  return { conflict: false };
}

/**
 * Get the required mode for an action
 */
function getRequiredModeForAction(action: ModeAction): ScholarMode | null {
  for (const [mode, actions] of Object.entries(MODE_PERMISSIONS)) {
    if (actions.has(action)) {
      return mode as ScholarMode;
    }
  }
  return null;
}

/**
 * Subscribe to mode changes
 */
export function onModeChange(listener: (mode: ScholarMode) => void): () => void {
  modeListeners.push(listener);
  return () => {
    modeListeners = modeListeners.filter(l => l !== listener);
  };
}

/**
 * Reset mode to null (exit SCHOLAR)
 */
export function exitScholarMode(): void {
  setMode(null);
}

/**
 * Get mode description
 */
export function getModeDescription(mode: ScholarMode): string {
  switch (mode) {
    case 'IMAGINE':
      return 'Creative visualization and immersive exploration without epistemic authority';
    case 'LEARN':
      return 'Controlled ingestion and belief extraction';
    case 'WRITE':
      return 'Canonical artifact generation';
    // AUDIT mode removed - audits are now performed via text commands
    case null:
      return 'Mode not active';
    default:
      return 'Unknown mode';
  }
}

/**
 * Get allowed actions for a mode
 */
export function getAllowedActions(mode: ScholarMode): ModeAction[] {
  if (mode === null) {
    return [];
  }
  return Array.from(MODE_PERMISSIONS[mode] || []);
}

/**
 * Get forbidden actions for a mode
 */
export function getForbiddenActions(mode: ScholarMode): ModeAction[] {
  const allowed = getAllowedActions(mode);
  const allActions: ModeAction[] = [
    'explain_content',
    'extract_beliefs',
    'write_file',
    'generate_options',
    'update_scholar',
    'modify_mem',
    'resolve_contradiction',
    'create_belief',
    'narrate_content',
    'apply_arc_compliance',
  ];
  return allActions.filter(action => !allowed.includes(action));
}

