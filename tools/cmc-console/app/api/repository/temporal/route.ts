/**
 * API Route: Temporal Index
 * Manages temporal extraction and querying
 */

import { NextResponse } from 'next/server';
import { rebuildAllTemporalEntries, processFileTemporalEntries } from '@/lib/services/temporal.service';
import { getFileRegistry, getTemporalIndex } from '@/lib/db';
import { readRepositoryFile } from '@/lib/services/repository.service';
import {
  queryFilesByDateRange,
  findFilesInPeriod,
  findFilesAtDate,
  getChronologicalFiles,
  getTimeline,
  findFilesInEra,
} from '@/lib/services/temporal-query.service';
import { TemporalIndex } from '@/types';

/**
 * POST /api/repository/temporal
 * Rebuild all temporal entries or process a single file
 */
export async function POST(request: Request) {
  try {
    const { action, fileId } = await request.json().catch(() => ({}));
    
    if (action === 'rebuild') {
      // Rebuild all temporal entries
      const result = await rebuildAllTemporalEntries();
      return NextResponse.json({
        success: true,
        ...result,
        message: `Processed ${result.processed} files, stored ${result.stored} temporal entries, ${result.errors} errors`,
      });
    } else if (action === 'process' && fileId) {
      // Process temporal entries for a single file
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
      
      const result = processFileTemporalEntries(file.id, parsed.content, parsed.header, file.file_path);
      return NextResponse.json({
        success: true,
        ...result,
        message: `Stored ${result.stored} temporal entries for file ${file.file_path}`,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Use { action: "rebuild" } or { action: "process", fileId: number }' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing temporal entries:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/repository/temporal
 * Enhanced query parameters:
 * - fileId: Get entries for a specific file
 * - startDate & endDate: Query by date range
 * - civilization: Filter by civilization
 * - fileType: Filter by file type (e.g., 'MEM')
 * - dateType: Filter by date type ('start', 'end', 'event', 'period')
 * - era: Filter by era ('BC' or 'AD')
 * - overlapMode: 'contains', 'overlaps', or 'within' (default: 'overlaps')
 * - query: 'files' (default), 'entries', 'timeline', 'chronological', 'era'
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('fileId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const civilization = searchParams.get('civilization');
    const fileType = searchParams.get('fileType');
    const dateType = searchParams.get('dateType') as 'start' | 'end' | 'event' | 'period' | null;
    const era = searchParams.get('era') as 'BC' | 'AD' | null;
    const overlapMode = searchParams.get('overlapMode') as 'contains' | 'overlaps' | 'within' | null;
    const query = searchParams.get('query') || 'files';
    
    const temporalService = getTemporalIndex();
    
    // Query: Get temporal entries for a specific file
    if (fileId && query === 'entries') {
      const entries = temporalService.getByFileId(Number(fileId));
      return NextResponse.json({
        success: true,
        fileId: Number(fileId),
        entries,
        total: entries.length,
      });
    }
    
    // Query: Get files (with temporal data)
    if (query === 'files' || !query) {
      if (startDate && endDate) {
        // Date range query
        const start = Number(startDate);
        const end = Number(endDate);
        const files = queryFilesByDateRange({
          startDate: start,
          endDate: end,
          civilization: civilization || undefined,
          fileType: fileType || undefined,
          dateType: dateType || undefined,
          era: era || undefined,
          overlapMode: overlapMode || 'overlaps',
        });
        
        return NextResponse.json({
          success: true,
          query: 'files',
          startDate: start,
          endDate: end,
          civilization: civilization || undefined,
          fileType: fileType || undefined,
          overlapMode: overlapMode || 'overlaps',
          files,
          total: files.length,
        });
      } else if (startDate) {
        // Single date query
        const date = Number(startDate);
        const files = findFilesAtDate(date, civilization || undefined);
        
        return NextResponse.json({
          success: true,
          query: 'files',
          date,
          civilization: civilization || undefined,
          files,
          total: files.length,
        });
      } else if (era) {
        // Era query
        const files = findFilesInEra(era, civilization || undefined);
        
        return NextResponse.json({
          success: true,
          query: 'files',
          era,
          civilization: civilization || undefined,
          files,
          total: files.length,
        });
      }
    }
    
    // Query: Get timeline
    if (query === 'timeline' && startDate && endDate) {
      const start = Number(startDate);
      const end = Number(endDate);
      const timeline = getTimeline(start, end, civilization || undefined);
      
      return NextResponse.json({
        success: true,
        query: 'timeline',
        startDate: start,
        endDate: end,
        civilization: civilization || undefined,
        ...timeline,
        totalEvents: timeline.events.length,
        totalFiles: timeline.files.length,
      });
    }
    
    // Query: Get chronological list
    if (query === 'chronological') {
      const files = getChronologicalFiles(civilization || undefined, fileType || undefined);
      
      return NextResponse.json({
        success: true,
        query: 'chronological',
        civilization: civilization || undefined,
        fileType: fileType || undefined,
        files,
        total: files.length,
      });
    }
    
    // Query: Get raw temporal entries (legacy support)
    if (query === 'entries') {
      if (startDate && endDate) {
        const start = Number(startDate);
        const end = Number(endDate);
        
        let entries: TemporalIndex[];
        if (civilization) {
          entries = temporalService.getByCivilizationAndDateRange(civilization, start, end);
        } else {
          entries = temporalService.getByDateRange(start, end);
        }
        
        // Apply additional filters
        if (dateType) {
          entries = entries.filter(e => e.date_type === dateType);
        }
        if (era) {
          entries = entries.filter(e => e.era === era);
        }
        
        return NextResponse.json({
          success: true,
          query: 'entries',
          startDate: start,
          endDate: end,
          civilization: civilization || undefined,
          entries,
          total: entries.length,
        });
      }
    }
    
    // Default: Return error if no valid query
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid query. Use fileId, startDate+endDate, era, or query=chronological/timeline',
        availableQueries: [
          'files (default) - Get files matching date criteria',
          'entries - Get raw temporal entries',
          'timeline - Get timeline of events in period',
          'chronological - Get all files sorted by date',
        ],
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error fetching temporal data:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

