/**
 * API Route: Check if action is allowed in current mode
 */

import { NextResponse } from 'next/server';
import { isActionAllowed, getCurrentMode, requireAction } from '@/lib/services/mode.service';
import { ModeAction } from '@/lib/services/mode.service';

/**
 * POST: Check if action is allowed
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;
    
    if (!action) {
      return NextResponse.json(
        { success: false, error: 'Action is required' },
        { status: 400 }
      );
    }
    
    const allowed = isActionAllowed(action as ModeAction);
    const currentMode = getCurrentMode();
    
    // If checking, don't throw - just return result
    if (allowed) {
      return NextResponse.json({
        success: true,
        allowed: true,
        mode: currentMode,
        action,
      });
    } else {
      // Try to require it (will throw if not allowed)
      try {
        requireAction(action as ModeAction);
        return NextResponse.json({
          success: true,
          allowed: true,
          mode: currentMode,
          action,
        });
      } catch (error) {
        return NextResponse.json({
          success: true,
          allowed: false,
          mode: currentMode,
          action,
          error: error instanceof Error ? error.message : 'Action not allowed',
        }, { status: 403 });
      }
    }
  } catch (error) {
    console.error('Error checking action:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

