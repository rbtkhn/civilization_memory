/**
 * ARC (Academic Reference Canon) Service
 * Extracts and manages ARC information from CIV–INDEX files
 * 
 * ARC is a governed object that must be mirrored across:
 * - CIV–INDEX (Section XVI)
 * - CIV–CORE
 * - CIV–SCHOLAR
 * 
 * ARC governs citation eligibility and quotation discipline only.
 */

import { readRepositoryFile } from './repository.service';

export interface ARCEntry {
  author: string;
  category: 'ANCIENT' | 'MEDIEVAL' | 'EARLY_MODERN' | 'MODERN';
  works?: string[];
  notes?: string;
}

export interface ARC {
  civilization: string;
  entries: ARCEntry[];
  citationRequirements?: {
    minimumCitations?: number;
    verbatimQuotationThreshold?: number;
    categoryRequirements?: Record<string, number>;
  };
}

/**
 * Extract ARC section from CIV–INDEX file content
 * Looks for Section XVI: Academic Reference Canon (ARC)
 */
export function extractARCFromIndex(content: string, civilization: string): ARC | null {
  try {
    // Look for ARC section (Section XVI)
    // Pattern: "XVI. Academic Reference Canon (ARC)" or similar
    const arcSectionRegex = /XVI\.\s*Academic\s+Reference\s+Canon\s*\(ARC\)[^\n]*\n([\s\S]*?)(?=XVII\.|END|$)/i;
    const match = content.match(arcSectionRegex);
    
    if (!match) {
      return null; // No ARC section found
    }
    
    const arcSection = match[1];
    const entries: ARCEntry[] = [];
    
    // Parse ARC entries - new structure uses category sections:
    // III. CATEGORY A — ANCIENT
    // IV. CATEGORY B — MEDIEVAL
    // V. CATEGORY C — EARLY MODERN
    // VI. CATEGORY D — MODERN
    // Authors are listed as bullet points under each category section
    
    const lines = arcSection.split('\n');
    let currentCategory: ARCEntry['category'] | null = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      
      // Detect category section headers
      if (trimmed.match(/III\.\s*CATEGORY\s+A[—–-]\s*ANCIENT/i) || 
          trimmed.match(/CATEGORY\s+A[—–-]\s*ANCIENT/i)) {
        currentCategory = 'ANCIENT';
        continue;
      }
      if (trimmed.match(/IV\.\s*CATEGORY\s+B[—–-]\s*MEDIEVAL/i) || 
          trimmed.match(/CATEGORY\s+B[—–-]\s*MEDIEVAL/i)) {
        currentCategory = 'MEDIEVAL';
        continue;
      }
      if (trimmed.match(/V\.\s*CATEGORY\s+C[—–-]\s*EARLY\s*MODERN/i) || 
          trimmed.match(/CATEGORY\s+C[—–-]\s*EARLY\s*MODERN/i)) {
        currentCategory = 'EARLY_MODERN';
        continue;
      }
      if (trimmed.match(/VI\.\s*CATEGORY\s+D[—–-]\s*MODERN/i) || 
          trimmed.match(/CATEGORY\s+D[—–-]\s*MODERN/i)) {
        currentCategory = 'MODERN';
        continue;
      }
      
      // If we're in a category section and find a bullet point, it's an author
      if (currentCategory && trimmed.match(/^[-•*]\s+/)) {
        // Extract author name (everything after bullet until optional parenthetical or colon)
        const authorMatch = trimmed.match(/^[-•*]\s+(.+?)(?:\s*\(|$)/);
        if (authorMatch) {
          const author = authorMatch[1].trim();
          // Skip non-author entries like "Acts of the Apostles" or section headers
          if (!author.match(/Acts\s+of\s+the\s+Apostles/i) && 
              !author.match(/^Approved|^Definition|^Temporal|^Classification/i)) {
            entries.push({
              author,
              category: currentCategory,
            });
          }
        }
      }
      
      // Reset category when we hit a new major section (VII+)
      if (trimmed.match(/^[IVX]+\.\s+[A-Z]/) && !trimmed.match(/CATEGORY/)) {
        const sectionMatch = trimmed.match(/^([IVX]+)\./);
        if (sectionMatch) {
          const sectionNum = sectionMatch[1];
          // Reset if we hit section VII or higher
          if (sectionNum === 'VII' || sectionNum === 'VIII' || sectionNum === 'IX' || 
              sectionNum === 'X' || sectionNum.match(/^X[IVX]+/)) {
            currentCategory = null;
          }
        }
      }
    }
    
    if (entries.length === 0) {
      return null;
    }
    
    return {
      civilization,
      entries,
    };
  } catch (error) {
    console.error('Error extracting ARC from CIV–INDEX:', error);
    return null;
  }
}

/**
 * Get ARC for a civilization from CIV–ARC file or CIV–INDEX file
 * ARC files are standalone (CIV–ARC–[CIVILIZATION].md) but may also be embedded in CIV–INDEX Section XVI
 */
export function getARCForCivilization(civilization: string): ARC | null {
  try {
    const { getFileRegistry } = require('@/lib/db');
    const registry = getFileRegistry();
    const allFiles = registry.getAll();
    
    // First, try to find standalone CIV–ARC file
    const arcFile = allFiles.find((f: { file_path: string; civilization?: string }) => 
      f.file_path.match(new RegExp(`CIV[–-]ARC[–-]${civilization.toUpperCase()}\\.md$`, 'i'))
    );
    
    if (arcFile) {
      const parsed = readRepositoryFile(arcFile.file_path);
      if (parsed?.content) {
        // Extract ARC from standalone file (entire file is ARC content)
        return extractARCFromIndex(parsed.content, civilization);
      }
    }
    
    // Fallback: try CIV–INDEX file (Section XVI)
    const indexFile = allFiles.find((f: { file_type: string; civilization: string }) => 
      f.file_type === 'CIV-INDEX' && 
      f.civilization === civilization.toUpperCase()
    );
    
    if (indexFile) {
      const parsed = readRepositoryFile(indexFile.file_path);
      if (parsed?.content) {
        // Extract ARC from Section XVI
        return extractARCFromIndex(parsed.content, civilization);
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error getting ARC for ${civilization}:`, error);
    return null;
  }
}

/**
 * Validate if an author is in ARC
 */
export function isAuthorInARC(author: string, arc: ARC): boolean {
  return arc.entries.some(entry => 
    entry.author.toLowerCase().includes(author.toLowerCase()) ||
    author.toLowerCase().includes(entry.author.toLowerCase())
  );
}

/**
 * Get ARC category for an author
 */
export function getARCCategory(author: string, arc: ARC): ARCEntry['category'] | null {
  const entry = arc.entries.find(e => 
    e.author.toLowerCase().includes(author.toLowerCase()) ||
    author.toLowerCase().includes(e.author.toLowerCase())
  );
  return entry?.category || null;
}

