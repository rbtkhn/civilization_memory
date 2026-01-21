/**
 * API Route: Scan Repository
 * Scans the repository and updates the database index
 */

import { NextResponse } from 'next/server';
import { scanRepository, readRepositoryFile } from '@/lib/services/repository.service';
import { getFileRegistry } from '@/lib/db';
import { getFileStats } from '@/lib/services/repository.service';
import { processFileRelationships } from '@/lib/services/relationship.service';
import { processFileTemporalEntries } from '@/lib/services/temporal.service';

export async function POST() {
  try {
    // Scan repository
    const scanResult = await scanRepository();
    
    // Update database
    const registry = getFileRegistry();
    let added = 0;
    let updated = 0;
    
    for (const file of scanResult.files) {
      const existing = registry.getByPath(file.path);
      const stats = getFileStats(file.path);
      
      const headerMetadata = file.header ? JSON.stringify(file.header) : null;
      const classification = {
        file_path: file.path,
        file_type: file.type,
        civilization: file.civilization,
        era: file.header?.era || null,
        status: file.header?.status || null,
        version: file.header?.version || null,
        last_modified: stats?.mtime || Math.floor(Date.now() / 1000),
        header_metadata: headerMetadata,
        validation_status: 'warning' as const,
      };
      
      let fileId: number;
      if (existing) {
        // Update existing record
        registry.update(existing.id, classification);
        fileId = existing.id;
        updated++;
      } else {
        // Insert new record
        const result = registry.insert(classification);
        fileId = Number(result.lastInsertRowid);
        added++;
      }
      
      // Extract and store relationships and temporal entries for this file
      try {
        const parsed = readRepositoryFile(file.path);
        if (parsed && parsed.content) {
          // Extract relationships
          processFileRelationships(fileId, parsed.content, file.civilization);
          
          // Extract temporal entries
          processFileTemporalEntries(fileId, parsed.content, parsed.header, file.path);
        }
      } catch (extractionError) {
        // Log but don't fail the scan if extraction fails
        console.warn(`Failed to extract relationships/temporal entries for ${file.path}:`, extractionError);
      }
    }
    
    return NextResponse.json({
      success: true,
      scannedAt: scanResult.scannedAt,
      totalFiles: scanResult.totalFiles,
      added,
      updated,
    });
  } catch (error) {
    console.error('Error scanning repository:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to scan repository' });
}

