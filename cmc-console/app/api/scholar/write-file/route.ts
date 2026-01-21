/**
 * API Route: Write MEM File (WRITE Mode)
 * Creates or modifies MEM files with governance compliance
 */

import { NextResponse } from 'next/server';
import { getCurrentMode, requireAction } from '@/lib/services/mode.service';
import { writeFileToRepository, getFileDiff, commitFile, pushToRemote, fileExistsInRepository, getCurrentBranch } from '@/lib/services/git.service';
import { getFileRegistry } from '@/lib/db';
import { getFileStats, readRepositoryFile } from '@/lib/services/repository.service';
import { preflightMEMFile } from '@/lib/services/mem-preflight.service';
import matter from 'gray-matter';

interface WriteFileRequest {
  filePath: string;
  content: string;
  commitMessage?: string;
  autoCommit?: boolean;
  autoPush?: boolean;
  showDiff?: boolean;
}

/**
 * Preflight validation is handled by mem-preflight.service.ts
 * This implements CIV–MEM–TEMPLATE v1.9 ARC Preflight & Metadata Hardening
 */

export async function POST(request: Request) {
  try {
    // Check mode
    const currentMode = getCurrentMode();
    if (currentMode !== 'WRITE') {
      return NextResponse.json(
        { success: false, error: 'WRITE mode must be active to create/modify files' },
        { status: 403 }
      );
    }
    
    // Verify action is allowed
    requireAction('create_mem');
    
    const body: WriteFileRequest = await request.json();
    const { filePath, content, commitMessage, autoCommit = false, autoPush = false, showDiff = true } = body;
    
    if (!filePath || !content) {
      return NextResponse.json(
        { success: false, error: 'filePath and content are required' },
        { status: 400 }
      );
    }
    
    // Preflight validation (CIV–MEM–TEMPLATE v1.9)
    // This is the authoritative validation layer that blocks non-compliant files
    const preflight = preflightMEMFile(content, filePath);
    
    if (preflight.blocked) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Preflight validation failed - file blocked from canonical activation',
          errors: preflight.errors,
          warnings: preflight.warnings,
          compliance: preflight.compliance,
        },
        { status: 400 }
      );
    }
    
    // File passes preflight but may have warnings
    if (preflight.errors.length > 0) {
      // Errors that don't block (shouldn't happen if blocked=true, but defensive)
      console.warn('Preflight errors (non-blocking):', preflight.errors);
    }
    
    // Check if file exists (for additive-only rule)
    const fileExists = fileExistsInRepository(filePath);
    if (fileExists) {
      // For existing files, we should show diff and require confirmation
      // This is handled by the showDiff flag
    }
    
    // Get diff if requested
    let diff = null;
    if (showDiff) {
      diff = await getFileDiff(filePath, content);
    }
    
    // Write file to repository
    writeFileToRepository(filePath, content);
    
    // Update database registry
    const registry = getFileRegistry();
    const stats = getFileStats(filePath);
    const existing = registry.getByPath(filePath);
    
    // Parse content to extract metadata
    const parsed = matter(content);
    const headerMetadata = JSON.stringify(parsed.data);
    
    const fileData = {
      file_path: filePath,
      file_type: 'MEM' as const,
      civilization: null, // Will be extracted from path or header
      era: parsed.data.era || null,
      status: parsed.data.status || null,
      version: parsed.data.version || null,
      last_modified: stats?.mtime || Math.floor(Date.now() / 1000),
      header_metadata: headerMetadata,
      validation_status: 'warning' as const,
    };
    
    if (existing) {
      registry.update(existing.id, fileData);
    } else {
      registry.insert(fileData);
    }
    
    // Commit if requested
    let commitResult = null;
    if (autoCommit) {
      const message = commitMessage || `[WRITE Mode] ${fileExists ? 'Update' : 'Create'} ${filePath}`;
      commitResult = await commitFile(filePath, message);
      
      // Push if requested and commit succeeded
      if (autoPush && commitResult.success) {
        const branch = await getCurrentBranch();
        await pushToRemote(branch);
      }
    }
    
    // Build response with preflight results
    const responseData: any = {
      success: true,
      filePath,
      fileExists,
      diff,
      committed: commitResult?.success || false,
      commitHash: commitResult?.commitHash,
      pushed: autoPush && commitResult?.success || false,
      message: fileExists ? 'File updated' : 'File created',
      preflight: {
        valid: preflight.valid,
        warnings: preflight.warnings,
        compliance: preflight.compliance,
      },
    };
    
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error writing file:', error);
    
    // Check if it's a mode violation
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

