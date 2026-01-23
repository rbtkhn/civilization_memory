/**
 * Temporal Extraction Service
 * Extracts and stores temporal information (dates, periods, events) from files
 */

import { getFileRegistry, getTemporalIndex } from '@/lib/db';
import { TemporalDateType, TemporalIndex } from '@/types';

export interface ExtractedTemporalEntry {
  dateType: TemporalDateType;
  dateValue: number | null;  // Normalized: BC = negative, AD = positive
  dateDisplay: string;       // Original date string
  era: 'BC' | 'AD' | null;
  uncertainty: string | null;
  context: string;           // What this date represents
}

/**
 * Normalize a date string to a numeric value
 * BC dates are negative, AD dates are positive
 * Examples: "753 BC" → -753, "476 AD" → 476, "AD 800" → 800
 */
export function normalizeDate(year: number, era: 'BC' | 'AD'): number {
  return era === 'BC' ? -year : year;
}

/**
 * Parse a date string with uncertainty markers
 * Returns: { year, era, uncertainty }
 * Examples: "c. 753 BC" → { year: 753, era: 'BC', uncertainty: 'c.' }
 */
export function parseDateString(dateStr: string): {
  year: number | null;
  era: 'BC' | 'AD' | null;
  uncertainty: string | null;
} {
  const trimmed = dateStr.trim();
  
  // Extract uncertainty markers
  let uncertainty: string | null = null;
  let remaining = trimmed;
  
  const uncertaintyPatterns = [
    { pattern: /^(c\.|circa|approximately|approx\.|ca\.)\s+/i, marker: 'c.' },
    { pattern: /^(~|≈)\s*/, marker: '~' },
    { pattern: /^around\s+/i, marker: 'around' },
  ];
  
  for (const { pattern, marker } of uncertaintyPatterns) {
    if (pattern.test(remaining)) {
      uncertainty = marker;
      remaining = remaining.replace(pattern, '').trim();
      break;
    }
  }
  
  // Extract era and year
  // Patterns: "753 BC", "476 AD", "AD 800", "800 AD", "c. 100 BC"
  const bcPattern = /(\d+(?:\s*,\s*\d{3})*)\s*BC/i;
  const adPattern1 = /(\d+(?:\s*,\s*\d{3})*)\s*AD/i;  // "476 AD"
  const adPattern2 = /AD\s*(\d+(?:\s*,\s*\d{3})*)/i;  // "AD 800"
  
  let year: number | null = null;
  let era: 'BC' | 'AD' | null = null;
  
  if (bcPattern.test(remaining)) {
    const match = remaining.match(bcPattern);
    if (match && match[1]) {
      year = parseInt(match[1].replace(/,/g, ''), 10);
      era = 'BC';
    }
  } else if (adPattern1.test(remaining)) {
    const match = remaining.match(adPattern1);
    if (match && match[1]) {
      year = parseInt(match[1].replace(/,/g, ''), 10);
      era = 'AD';
    }
  } else if (adPattern2.test(remaining)) {
    const match = remaining.match(adPattern2);
    if (match && match[1]) {
      year = parseInt(match[1].replace(/,/g, ''), 10);
      era = 'AD';
    }
  } else if (/^\d+(?:\s*,\s*\d{3})*$/.test(remaining)) {
    // If just a number with no era, assume AD (modern default)
    year = parseInt(remaining.replace(/,/g, ''), 10);
    era = 'AD';
  }
  
  return { year, era, uncertainty };
}

/**
 * Parse a date range string
 * Examples: "100–44 BC" → [{ year: 100, era: 'BC' }, { year: 44, era: 'BC' }]
 *           "c. 60–44 BC" → [{ year: 60, era: 'BC', uncertainty: 'c.' }, { year: 44, era: 'BC' }]
 */
export function parseDateRange(dateRangeStr: string): Array<{
  year: number | null;
  era: 'BC' | 'AD' | null;
  uncertainty: string | null;
}> {
  const trimmed = dateRangeStr.trim();
  
  // Handle common range separators: "–", "-", " to ", " - "
  const rangeSeparators = [/–/, /-/, /\s+to\s+/i, /\s+-\s+/];
  let parts: string[] = [];
  
  for (const separator of rangeSeparators) {
    if (separator.test(trimmed)) {
      parts = trimmed.split(separator).map(p => p.trim());
      break;
    }
  }
  
  if (parts.length === 0) {
    // Not a range, try parsing as single date
    const parsed = parseDateString(trimmed);
    return [parsed];
  }
  
  // Parse both parts of the range
  const startParsed = parseDateString(parts[0]);
  const endParsed = parseDateString(parts[1]);
  
  // If end part doesn't have era, inherit from start
  if (!endParsed.era && startParsed.era) {
    endParsed.era = startParsed.era;
  }
  
  // If start part has uncertainty, apply to end if end doesn't have one
  if (startParsed.uncertainty && !endParsed.uncertainty) {
    endParsed.uncertainty = startParsed.uncertainty;
  }
  
  return [startParsed, endParsed];
}

/**
 * Extract dates from MEM file header
 * Looks for "Dates:" field in the header metadata
 */
export function extractDatesFromHeader(header: any, filePath: string): ExtractedTemporalEntry[] {
  const entries: ExtractedTemporalEntry[] = [];
  
  // Check header metadata for Dates field
  const datesStr = header?.Dates || header?.dates || header?.Date || header?.date;
  if (!datesStr || typeof datesStr !== 'string') {
    return entries;
  }
  
  // Parse date range or single date
  const parsed = parseDateRange(datesStr);
  
  if (parsed.length === 1) {
    // Single date - treat as event
    const { year, era, uncertainty } = parsed[0];
    if (year && era) {
      entries.push({
        dateType: 'event',
        dateValue: normalizeDate(year, era),
        dateDisplay: datesStr,
        era,
        uncertainty,
        context: 'File header date range',
      });
    }
  } else if (parsed.length === 2) {
    // Date range - start and end
    const [start, end] = parsed;
    
    if (start.year && start.era) {
      entries.push({
        dateType: 'start',
        dateValue: normalizeDate(start.year, start.era),
        dateDisplay: datesStr,
        era: start.era,
        uncertainty: start.uncertainty,
        context: 'File header start date',
      });
    }
    
    if (end.year && end.era) {
      entries.push({
        dateType: 'end',
        dateValue: normalizeDate(end.year, end.era),
        dateDisplay: datesStr,
        era: end.era,
        uncertainty: end.uncertainty,
        context: 'File header end date',
      });
    }
    
    // Also add period entry if both dates are valid
    if (start.year && start.era && end.year && end.era) {
      entries.push({
        dateType: 'period',
        dateValue: normalizeDate(start.year, start.era), // Use start for period
        dateDisplay: datesStr,
        era: start.era,
        uncertainty: start.uncertainty || end.uncertainty,
        context: 'File header date period',
      });
    }
  }
  
  return entries;
}

/**
 * Extract temporal entries from content
 * Looks for date patterns in the file content
 */
export function extractDatesFromContent(content: string, filePath: string): ExtractedTemporalEntry[] {
  const entries: ExtractedTemporalEntry[] = [];
  
  // Patterns to match dates in content:
  // - "753 BC", "476 AD", "AD 800"
  // - "c. 100 BC", "circa 500 AD"
  // - Date ranges: "100–44 BC", "c. 60–44 BC"
  // - In context: "In 753 BC", "by 476 AD", "around c. 100 BC"
  
  // Match date ranges with separators
  const dateRangePattern = /(?:c\.|circa|approximately|approx\.|ca\.|~|≈|around)?\s*\d+(?:\s*,\s*\d{3})*\s*(?:–|-|to|-\s)\s*(?:c\.|circa|approximately|approx\.|ca\.|~|≈|around)?\s*\d+(?:\s*,\s*\d{3})*\s*(?:BC|AD)/gi;
  const rangeMatches = Array.from(content.matchAll(dateRangePattern));
  
  for (const match of rangeMatches) {
    const dateRangeStr = match[0];
    const parsed = parseDateRange(dateRangeStr);
    
    if (parsed.length === 2 && parsed[0].year && parsed[0].era && parsed[1].year && parsed[1].era) {
      // Add period entry
      entries.push({
        dateType: 'period',
        dateValue: normalizeDate(parsed[0].year, parsed[0].era),
        dateDisplay: dateRangeStr,
        era: parsed[0].era,
        uncertainty: parsed[0].uncertainty || parsed[1].uncertainty,
        context: `Date range found in content: "${dateRangeStr.substring(0, 50)}..."`,
      });
    }
  }
  
  // Match single dates with BC/AD
  const singleDatePattern = /(?:c\.|circa|approximately|approx\.|ca\.|~|≈|around)?\s*\d+(?:\s*,\s*\d{3})*\s*(?:BC|AD)|(?:AD|BC)\s*\d+(?:\s*,\s*\d{3})*/gi;
  const singleMatches = Array.from(content.matchAll(singleDatePattern));
  
  for (const match of singleMatches) {
    const dateStr = match[0];
    // Skip if already captured as part of a range
    if (rangeMatches.some(rangeMatch => rangeMatch[0].includes(dateStr))) {
      continue;
    }
    
    const parsed = parseDateString(dateStr);
    if (parsed.year && parsed.era) {
      // Extract context (surrounding text)
      const matchIndex = match.index || 0;
      const contextStart = Math.max(0, matchIndex - 30);
      const contextEnd = Math.min(content.length, matchIndex + dateStr.length + 30);
      const context = content.substring(contextStart, contextEnd).replace(/\n/g, ' ').trim();
      
      entries.push({
        dateType: 'event',
        dateValue: normalizeDate(parsed.year, parsed.era),
        dateDisplay: dateStr,
        era: parsed.era,
        uncertainty: parsed.uncertainty,
        context: `Date found in content: "${context}"`,
      });
    }
  }
  
  return entries;
}

/**
 * Extract all temporal entries from a file
 */
export function extractAllTemporalEntries(
  content: string,
  header: any,
  filePath: string
): ExtractedTemporalEntry[] {
  const entries: ExtractedTemporalEntry[] = [];
  
  // Extract from header (primary dates)
  const headerEntries = extractDatesFromHeader(header, filePath);
  entries.push(...headerEntries);
  
  // Extract from content (additional dates/events)
  const contentEntries = extractDatesFromContent(content, filePath);
  entries.push(...contentEntries);
  
  // Remove duplicates (same date_value and date_type)
  const uniqueEntries: ExtractedTemporalEntry[] = [];
  const seen = new Set<string>();
  
  for (const entry of entries) {
    const key = `${entry.dateType}-${entry.dateValue}-${entry.era}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueEntries.push(entry);
    }
  }
  
  return uniqueEntries;
}

/**
 * Store temporal entries in database
 */
export function storeTemporalEntries(
  fileId: number,
  entries: ExtractedTemporalEntry[]
): { stored: number; errors: number } {
  const temporalService = getTemporalIndex();
  
  let stored = 0;
  let errors = 0;
  
  for (const entry of entries) {
    try {
      // Check if entry already exists
      const existing = temporalService.getByFileId(fileId);
      const alreadyExists = existing.some(
        e => e.date_type === entry.dateType &&
             e.date_value === entry.dateValue &&
             e.era === entry.era
      );
      
      if (alreadyExists) {
        continue; // Skip duplicates
      }
      
      // Store entry
      temporalService.insert({
        file_id: fileId,
        date_type: entry.dateType,
        date_value: entry.dateValue,
        date_display: entry.dateDisplay,
        era: entry.era,
        uncertainty: entry.uncertainty,
        context: entry.context,
      });
      
      stored++;
    } catch (error) {
      console.error(`Error storing temporal entry for file ${fileId}:`, error);
      errors++;
    }
  }
  
  return { stored, errors };
}

/**
 * Update file_registry metadata columns with temporal information
 */
export function updateFileTemporalMetadata(fileId: number): void {
  const registry = getFileRegistry();
  const temporalService = getTemporalIndex();
  
  // Get all temporal entries for this file
  const entries = temporalService.getByFileId(fileId);
  
  // Find start and end dates
  const startDates = entries.filter(e => e.date_type === 'start').map(e => e.date_value).filter((v): v is number => v !== null);
  const endDates = entries.filter(e => e.date_type === 'end').map(e => e.date_value).filter((v): v is number => v !== null);
  
  // Also check event dates for single-date files
  if (startDates.length === 0 && endDates.length === 0) {
    const eventDates = entries.filter(e => e.date_type === 'event').map(e => e.date_value).filter((v): v is number => v !== null);
    if (eventDates.length > 0) {
      const sorted = eventDates.sort((a, b) => a - b);
      startDates.push(sorted[0]);
      if (sorted.length > 1) {
        endDates.push(sorted[sorted.length - 1]);
      }
    }
  }
  
  // Update file_registry
  const minStart = startDates.length > 0 ? Math.min(...startDates) : null;
  const maxEnd = endDates.length > 0 ? Math.max(...endDates) : null;
  
  registry.update(fileId, {
    date_start: minStart,
    date_end: maxEnd,
  });
}

/**
 * Process a file and extract/store all temporal entries
 * This is the main entry point for temporal extraction
 */
export function processFileTemporalEntries(
  fileId: number,
  content: string,
  header: any,
  filePath: string
): { stored: number; errors: number } {
  // Extract temporal entries
  const entries = extractAllTemporalEntries(content, header, filePath);
  
  // Store entries in database
  const result = storeTemporalEntries(fileId, entries);
  
  // Update file_registry metadata columns
  updateFileTemporalMetadata(fileId);
  
  return result;
}

/**
 * Rebuild all temporal entries for all files in registry
 * Useful for initial population or after schema changes
 */
export async function rebuildAllTemporalEntries(): Promise<{ processed: number; stored: number; errors: number }> {
  const registry = getFileRegistry();
  const { readRepositoryFile } = await import('@/lib/services/repository.service');
  
  const allFiles = registry.getAll();
  let processed = 0;
  let totalStored = 0;
  let totalErrors = 0;
  
  for (const file of allFiles) {
    try {
      // Read file content
      const parsed = readRepositoryFile(file.file_path);
      if (!parsed || !parsed.content) {
        continue;
      }
      
      // Process temporal entries
      const result = processFileTemporalEntries(file.id, parsed.content, parsed.header, file.file_path);
      totalStored += result.stored;
      totalErrors += result.errors;
      processed++;
    } catch (error) {
      console.error(`Error processing temporal entries for ${file.file_path}:`, error);
      totalErrors++;
    }
  }
  
  return { processed, stored: totalStored, errors: totalErrors };
}

