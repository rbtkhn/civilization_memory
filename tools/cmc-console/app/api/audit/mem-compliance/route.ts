/**
 * API Route: MEM Template Compliance Audit
 * Audits a MEM file for compliance with CIV–MEM–TEMPLATE v1.9
 */

import { NextResponse } from 'next/server';
import { getCurrentMode, requireAction } from '@/lib/services/mode.service';
import { getFileRegistry } from '@/lib/db';
import { preflightMEMFile } from '@/lib/services/mem-preflight.service';
import { readRepositoryFile } from '@/lib/services/repository.service';

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
    requireAction('audit_validation');

    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('fileId');

    if (!fileId) {
      return NextResponse.json(
        { success: false, error: 'fileId parameter is required' },
        { status: 400 }
      );
    }

    // Get file from registry
    const registry = getFileRegistry();
    const file = registry.getById(parseInt(fileId));

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      );
    }

    if (file.file_type !== 'MEM') {
      return NextResponse.json(
        { success: false, error: 'File is not a MEM file' },
        { status: 400 }
      );
    }

    // Read file content
    const content = await readRepositoryFile(file.file_path);
    if (!content) {
      return NextResponse.json(
        { success: false, error: 'Could not read file content' },
        { status: 500 }
      );
    }

    // Run preflight validation
    const auditResult = preflightMEMFile(content, file.file_path);

    return NextResponse.json({
      success: true,
      ...auditResult,
    });
  } catch (error) {
    console.error('Error in MEM compliance audit:', error);
    
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

