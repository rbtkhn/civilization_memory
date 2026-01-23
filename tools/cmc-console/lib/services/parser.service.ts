/**
 * Parser Service
 * Extracts header metadata and content from files
 */

import matter from 'gray-matter';
import { FileHeaderMetadata, ParsedFile, FileType } from '@/types';
import { classifyFile } from './file-classifier.service';

export function parseFile(filePath: string, content: string): ParsedFile {
  const classification = classifyFile(filePath);
  
  try {
    // Parse front matter using gray-matter
    const parsed = matter(content);
    
    // Extract header metadata
    const header: FileHeaderMetadata = parsed.data as FileHeaderMetadata;
    
    // Normalize era
    if (header.era) {
      const eraLower = header.era.toString().toLowerCase();
      if (['ancient', 'medieval', 'modern'].includes(eraLower)) {
        header.era = eraLower as 'ancient' | 'medieval' | 'modern';
      }
    }
    
    return {
      path: filePath,
      type: classification.file_type,
      civilization: classification.civilization || header.civilization || null,
      header,
      content: parsed.content,
      raw: content,
    };
  } catch (error) {
    // If parsing fails, return file with minimal metadata
    return {
      path: filePath,
      type: classification.file_type,
      civilization: classification.civilization,
      header: null,
      content,
      raw: content,
    };
  }
}

export function extractHeaderMetadata(parsedFile: ParsedFile): FileHeaderMetadata | null {
  return parsedFile.header;
}

