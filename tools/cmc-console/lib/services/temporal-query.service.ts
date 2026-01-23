/**
 * Temporal Query Service
 * Enhanced query functions for historical periods and date ranges
 */

import { getFileRegistry, getTemporalIndex } from '@/lib/db';
import { FileRegistry, TemporalIndex } from '@/types';

export interface FileWithTemporal extends FileRegistry {
  temporalEntries: TemporalIndex[];
  startDate: number | null;
  endDate: number | null;
}

export interface TemporalQueryOptions {
  startDate?: number;
  endDate?: number;
  civilization?: string;
  fileType?: string;
  dateType?: 'start' | 'end' | 'event' | 'period';
  era?: 'BC' | 'AD';
  overlapMode?: 'contains' | 'overlaps' | 'within'; // How to match date ranges
}

/**
 * Query files by date range
 * Returns files that match the temporal criteria
 */
export function queryFilesByDateRange(options: TemporalQueryOptions): FileWithTemporal[] {
  const registry = getFileRegistry();
  const temporalService = getTemporalIndex();
  
  let temporalEntries: TemporalIndex[] = [];
  
  // Determine query mode based on overlapMode
  const overlapMode = options.overlapMode || 'overlaps';
  
  if (options.startDate !== undefined && options.endDate !== undefined) {
    // Date range query
    if (options.civilization) {
      if (overlapMode === 'overlaps') {
        temporalEntries = temporalService.getCivilizationOverlappingDateRange(
          options.civilization,
          options.startDate,
          options.endDate
        );
      } else {
        temporalEntries = temporalService.getByCivilizationAndDateRange(
          options.civilization,
          options.startDate,
          options.endDate
        );
      }
    } else {
      if (overlapMode === 'overlaps') {
        temporalEntries = temporalService.getOverlappingDateRange(
          options.startDate,
          options.endDate
        );
      } else {
        temporalEntries = temporalService.getByDateRange(
          options.startDate,
          options.endDate
        );
      }
    }
  } else if (options.startDate !== undefined) {
    // Single date: find files after this date
    temporalEntries = temporalService.getAfterDate(options.startDate);
  } else if (options.endDate !== undefined) {
    // Single date: find files before this date
    temporalEntries = temporalService.getBeforeDate(options.endDate);
  }
  
  // Filter by era if specified
  if (options.era) {
    temporalEntries = temporalEntries.filter(e => e.era === options.era);
  }
  
  // Filter by date type if specified
  if (options.dateType) {
    temporalEntries = temporalEntries.filter(e => e.date_type === options.dateType);
  }
  
  // Group by file_id and get unique files
  const fileIdSet = new Set(temporalEntries.map(e => e.file_id));
  const files: FileWithTemporal[] = [];
  
  for (const fileId of fileIdSet) {
    const file = registry.getById(fileId);
    if (!file) continue;
    
    // Apply additional filters
    if (options.civilization && file.civilization !== options.civilization) {
      continue;
    }
    
    if (options.fileType && file.file_type !== options.fileType) {
      continue;
    }
    
    // Get all temporal entries for this file
    const fileTemporalEntries = temporalEntries.filter(e => e.file_id === fileId);
    
    // Apply overlap mode filtering for 'contains' and 'within'
    if (options.startDate !== undefined && options.endDate !== undefined) {
      let matchesOverlapMode = true;
      
      if (overlapMode === 'contains') {
        // File's date range must contain the query range
        const fileStart = file.date_start ?? Math.min(...fileTemporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
        const fileEnd = file.date_end ?? Math.max(...fileTemporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
        matchesOverlapMode = fileStart !== null && fileEnd !== null &&
                            fileStart <= options.startDate && fileEnd >= options.endDate;
      } else if (overlapMode === 'within') {
        // File's date range must be within the query range
        const fileStart = file.date_start ?? Math.min(...fileTemporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
        const fileEnd = file.date_end ?? Math.max(...fileTemporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
        matchesOverlapMode = fileStart !== null && fileEnd !== null &&
                            fileStart >= options.startDate && fileEnd <= options.endDate;
      }
      
      if (!matchesOverlapMode) {
        continue;
      }
    }
    
    files.push({
      ...file,
      temporalEntries: fileTemporalEntries,
      startDate: file.date_start ?? null,
      endDate: file.date_end ?? null,
    });
  }
  
  // Sort by start date (or earliest temporal entry)
  files.sort((a, b) => {
    const aStart = a.startDate ?? Math.min(...a.temporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
    const bStart = b.startDate ?? Math.min(...b.temporalEntries.map(e => e.date_value || 0).filter(v => v !== null));
    return (aStart ?? 0) - (bStart ?? 0);
  });
  
  return files;
}

/**
 * Find files that contain a specific date
 */
export function findFilesAtDate(date: number, civilization?: string): FileWithTemporal[] {
  return queryFilesByDateRange({
    startDate: date,
    endDate: date,
    civilization,
    overlapMode: 'overlaps',
  });
}

/**
 * Find files in a specific historical period
 * Example: findFilesInPeriod(-100, -44, 'ROME') finds files covering 100-44 BC in Rome
 */
export function findFilesInPeriod(
  startDate: number,
  endDate: number,
  civilization?: string,
  fileType?: string
): FileWithTemporal[] {
  return queryFilesByDateRange({
    startDate,
    endDate,
    civilization,
    fileType,
    overlapMode: 'overlaps',
  });
}

/**
 * Find files that start within a date range
 */
export function findFilesStartingInPeriod(
  startDate: number,
  endDate: number,
  civilization?: string
): FileWithTemporal[] {
  return queryFilesByDateRange({
    startDate,
    endDate,
    civilization,
    dateType: 'start',
  });
}

/**
 * Find files that end within a date range
 */
export function findFilesEndingInPeriod(
  startDate: number,
  endDate: number,
  civilization?: string
): FileWithTemporal[] {
  return queryFilesByDateRange({
    startDate,
    endDate,
    civilization,
    dateType: 'end',
  });
}

/**
 * Find files in a specific era (BC or AD)
 */
export function findFilesInEra(era: 'BC' | 'AD', civilization?: string): FileWithTemporal[] {
  return queryFilesByDateRange({
    era,
    civilization,
  });
}

/**
 * Get chronological list of files (sorted by start date)
 */
export function getChronologicalFiles(civilization?: string, fileType?: string): FileWithTemporal[] {
  const registry = getFileRegistry();
  const temporalService = getTemporalIndex();
  
  let allFiles = registry.getAll();
  
  // Apply filters
  if (civilization) {
    allFiles = allFiles.filter(f => f.civilization === civilization);
  }
  
  if (fileType) {
    allFiles = allFiles.filter(f => f.file_type === fileType);
  }
  
  // Get temporal entries for all files
  const filesWithTemporal: FileWithTemporal[] = allFiles
    .filter(f => f.date_start !== null || f.date_end !== null)
    .map(file => {
      const temporalEntries = temporalService.getByFileId(file.id);
      return {
        ...file,
        temporalEntries,
        startDate: file.date_start ?? null,
        endDate: file.date_end ?? null,
      };
    });
  
  // Sort by start date
  filesWithTemporal.sort((a, b) => {
    const aStart = a.startDate ?? 0;
    const bStart = b.startDate ?? 0;
    return aStart - bStart;
  });
  
  return filesWithTemporal;
}

/**
 * Get timeline of events for a specific period
 */
export function getTimeline(startDate: number, endDate: number, civilization?: string): {
  events: TemporalIndex[];
  files: FileWithTemporal[];
} {
  const temporalService = getTemporalIndex();
  
  let events: TemporalIndex[];
  if (civilization) {
    events = temporalService.getByCivilizationAndDateRange(civilization, startDate, endDate);
  } else {
    events = temporalService.getByDateRange(startDate, endDate);
  }
  
  // Filter for event type entries
  const eventEntries = events.filter(e => e.date_type === 'event');
  
  // Get associated files
  const fileIdSet = new Set(eventEntries.map(e => e.file_id));
  const files = Array.from(fileIdSet).map(fileId => {
    const registry = getFileRegistry();
    const file = registry.getById(fileId);
    if (!file) return null;
    
    const temporalEntries = temporalService.getByFileId(fileId);
    return {
      ...file,
      temporalEntries,
      startDate: file.date_start ?? null,
      endDate: file.date_end ?? null,
    };
  }).filter((f): f is FileWithTemporal => f !== null);
  
  return {
    events: eventEntries.sort((a, b) => (a.date_value ?? 0) - (b.date_value ?? 0)),
    files,
  };
}

