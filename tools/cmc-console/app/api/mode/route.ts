/**
 * API Route: Mode Management
 * Get current mode and set mode (with validation)
 */

import { NextResponse } from 'next/server';
import { 
  getCurrentMode, 
  setMode, 
  isActionAllowed,
  getModeDescription,
  getAllowedActions,
} from '@/lib/services/mode.service';
import { ScholarMode } from '@/types';

/**
 * GET: Get current mode
 */
export async function GET() {
  try {
    const mode = getCurrentMode();
    
    return NextResponse.json({
      success: true,
      mode,
      description: getModeDescription(mode),
      allowedActions: mode ? getAllowedActions(mode) : [],
    });
  } catch (error) {
    console.error('Error getting mode:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST: Set mode
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { mode } = body;
    
    // Validate mode - null is not allowed (a mode must always be active)
    // AUDIT mode removed - audits are now performed via text commands in any mode
    if (!mode || !['IMAGINE', 'LEARN', 'WRITE'].includes(mode)) {
      return NextResponse.json(
        { success: false, error: `Invalid mode: ${mode}. Must be IMAGINE, LEARN, or WRITE. A mode must always be active.` },
        { status: 400 }
      );
    }
    
    // Set mode
    setMode(mode as ScholarMode);
    
    return NextResponse.json({
      success: true,
      mode: getCurrentMode(),
      description: getModeDescription(mode as ScholarMode),
      allowedActions: mode ? getAllowedActions(mode as ScholarMode) : [],
    });
  } catch (error) {
    console.error('Error setting mode:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

