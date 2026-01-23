/**
 * API Route: Get All Files
 * Returns all files in the registry
 * Auto-scans repository if database is empty or needs sync
 */

import { NextResponse } from 'next/server';
import { getFileRegistry } from '@/lib/db';
import { scanRepository, readRepositoryFile, getFileStats } from '@/lib/services/repository.service';
import { processFileRelationships } from '@/lib/services/relationship.service';
import { processFileTemporalEntries } from '@/lib/services/temporal.service';

/**
 * Check if database needs scanning (empty or stale)
 */
async function needsScanning(): Promise<boolean> {
  const registry = getFileRegistry();
  const files = registry.getAll();
  
  // Auto-scan if database is empty
  if (files.length === 0) {
    return true;
  }
  
  // Optional: Check if files have been modified (incremental sync)
  // This could be enhanced to check file modification times
  // For now, we only auto-scan if empty
  
  return false;
}

/**
 * Perform incremental sync - only update changed files
 */
async function incrementalSync(): Promise<{ added: number; updated: number }> {
  const scanResult = await scanRepository();
  const registry = getFileRegistry();
  let added = 0;
  let updated = 0;
  
  for (const file of scanResult.files) {
    const existing = registry.getByPath(file.path);
    const stats = getFileStats(file.path);
    const fileMtime = stats?.mtime || Math.floor(Date.now() / 1000);
    
    // Only update if file is new or has been modified
    if (!existing || existing.last_modified < fileMtime) {
      const headerMetadata = file.header ? JSON.stringify(file.header) : null;
      const classification = {
        file_path: file.path,
        file_type: file.type,
        civilization: file.civilization,
        era: file.header?.era || null,
        status: file.header?.status || null,
        version: file.header?.version || null,
        last_modified: fileMtime,
        header_metadata: headerMetadata,
        validation_status: 'warning' as const,
      };
      
      let fileId: number;
      if (existing) {
        registry.update(existing.id, classification);
        fileId = existing.id;
        updated++;
      } else {
        const result = registry.insert(classification);
        fileId = Number(result.lastInsertRowid);
        added++;
      }
      
      // Extract relationships and temporal entries for new/changed files
      try {
        const parsed = readRepositoryFile(file.path);
        if (parsed && parsed.content) {
          processFileRelationships(fileId, parsed.content, file.civilization);
          processFileTemporalEntries(fileId, parsed.content, parsed.header, file.path);
        }
      } catch (extractionError) {
        console.warn(`Failed to extract relationships/temporal entries for ${file.path}:`, extractionError);
      }
    }
  }
  
  return { added, updated };
}

export async function GET(request: Request) {
  try {
    const registry = getFileRegistry();
    
    // Check if auto-scan is needed
    if (await needsScanning()) {
      console.log('[Auto-Sync] Database empty or needs sync, performing automatic scan...');
      await incrementalSync();
    }
    
    const files = registry.getAll();
    
    return NextResponse.json({
      success: true,
      files,
      count: files.length,
    });
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

