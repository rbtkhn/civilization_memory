/**
 * API Route: File Relationships
 * Manages relationship extraction and rebuilding
 */

import { NextResponse } from 'next/server';
import { rebuildAllRelationships, processFileRelationships } from '@/lib/services/relationship.service';
import { getFileRegistry } from '@/lib/db';
import { readRepositoryFile } from '@/lib/services/repository.service';

/**
 * POST /api/repository/relationships
 * Rebuild all relationships for all files
 */
export async function POST(request: Request) {
  try {
    const { action, fileId } = await request.json().catch(() => ({}));
    
    if (action === 'rebuild') {
      // Rebuild all relationships
      const result = await rebuildAllRelationships();
      return NextResponse.json({
        success: true,
        ...result,
        message: `Processed ${result.processed} files, stored ${result.stored} relationships, ${result.errors} errors`,
      });
    } else if (action === 'process' && fileId) {
      // Process relationships for a single file
      const registry = getFileRegistry();
      const file = registry.getById(Number(fileId));
      
      if (!file) {
        return NextResponse.json(
          { success: false, error: 'File not found' },
          { status: 404 }
        );
      }
      
      const parsed = readRepositoryFile(file.file_path);
      if (!parsed || !parsed.content) {
        return NextResponse.json(
          { success: false, error: 'Could not read file content' },
          { status: 400 }
        );
      }
      
      const result = processFileRelationships(file.id, parsed.content, file.civilization);
      return NextResponse.json({
        success: true,
        ...result,
        message: `Stored ${result.stored} relationships for file ${file.file_path}`,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Use { action: "rebuild" } or { action: "process", fileId: number }' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing relationships:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/repository/relationships?fileId=number
 * Get relationships for a specific file
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('fileId');
    
    if (!fileId) {
      return NextResponse.json(
        { success: false, error: 'fileId parameter required' },
        { status: 400 }
      );
    }
    
    const { getFileRelationships } = await import('@/lib/db');
    const relationshipService = getFileRelationships();
    const fileIdNum = Number(fileId);
    
    const sourceRelationships = relationshipService.getBySourceFile(fileIdNum);
    const targetRelationships = relationshipService.getByTargetFile(fileIdNum);
    
    return NextResponse.json({
      success: true,
      fileId: fileIdNum,
      sourceRelationships,
      targetRelationships,
      total: sourceRelationships.length + targetRelationships.length,
    });
  } catch (error) {
    console.error('Error fetching relationships:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

