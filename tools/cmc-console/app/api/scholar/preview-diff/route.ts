/**
 * API Route: Preview Diff (WRITE Mode)
 * Shows diff before writing file
 */

import { NextResponse } from 'next/server';
import { getCurrentMode } from '@/lib/services/mode.service';
import { getFileDiff } from '@/lib/services/git.service';

export async function POST(request: Request) {
  try {
    // Check mode (optional - can preview in any mode, but only WRITE can actually write)
    const currentMode = getCurrentMode();
    
    const body = await request.json();
    const { filePath, content } = body;
    
    if (!filePath || !content) {
      return NextResponse.json(
        { success: false, error: 'filePath and content are required' },
        { status: 400 }
      );
    }
    
    // Get diff
    const diff = await getFileDiff(filePath, content);
    
    if (!diff) {
      return NextResponse.json(
        { success: false, error: 'Could not generate diff' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      diff,
    });
  } catch (error) {
    console.error('Error previewing diff:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

