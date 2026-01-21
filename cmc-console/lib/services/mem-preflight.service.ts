/**
 * MEM Preflight Validation Service
 * Implements CIV–MEM–TEMPLATE v1.9 ARC Preflight & Metadata Hardening
 * 
 * This service performs PRE-INGEST validation of MEM files:
 * - Author admissibility (ARC compliance)
 * - Category completeness (quotation requirements by category)
 * - Quotation counts and lengths
 * - ARC version parity
 * - Wordcount verification
 * - MEM connection requirements (≥10 total, all same civilization, ≥2 GEO MEM files)
 * - Structural compliance
 * 
 * MEM files DO NOT self-validate. This preflight layer blocks non-compliant files.
 */

import matter from 'gray-matter';
import { classifyFile } from './file-classifier.service';
import { getARCForCivilization, isAuthorInARC, getARCCategory, ARC, ARCEntry } from './arc.service';
import { readRepositoryFile } from './repository.service';
import { getFileRegistry } from '@/lib/db';

export interface PreflightResult {
  valid: boolean;
  blocked: boolean; // True if file should be blocked from canonical activation
  errors: string[];
  warnings: string[];
  compliance: {
    arcVersionPinned: boolean;
    arcVersion?: string;
    arcVersionParity: boolean;
    wordcountVerified: boolean;
    wordcount?: number;
    quotationCompliance: {
      ancient: { count: number; totalWords: number; required: { count: 3; totalWords: 75 } };
      medieval: { count: number; minWordsPerQuote: number; required: { count: 2; minWordsPerQuote: 25 } };
      earlyModern: { count: number; minWordsPerQuote: number; required: { count: 2; minWordsPerQuote: 25 } };
      modern: { count: number; required: { count: 2 } };
    };
    memConnections: { total: number; sameCivilization: number; geoMemCount: number; required: { total: 10; sameCivilization: 10; geoMem: 2 } };
    structuralCompliance: boolean;
  };
}

/**
 * Extract quotations from MEM file content
 * Looks for quoted text with attribution
 */
function extractQuotations(content: string): Array<{ text: string; author?: string; category?: ARCEntry['category'] }> {
  const quotations: Array<{ text: string; author?: string; category?: ARCEntry['category'] }> = [];
  
  // Pattern 1: Block quotes with attribution
  // > "quoted text" — Author Name
  // > "quoted text" (Author Name)
  const blockQuotePattern = />\s*[""]([^""]+)[""]\s*[—(]\s*([^—)]+)[—)]/g;
  let match;
  while ((match = blockQuotePattern.exec(content)) !== null) {
    quotations.push({
      text: match[1].trim(),
      author: match[2].trim(),
    });
  }
  
  // Pattern 2: Inline quotes with attribution
  // "quoted text" (Author Name, Work)
  const inlineQuotePattern = /[""]([^""]{20,})[""]\s*\(([^)]+)\)/g;
  while ((match = inlineQuotePattern.exec(content)) !== null) {
    const attribution = match[2].trim();
    // Try to extract author name (before comma if present)
    const author = attribution.split(',')[0].trim();
    quotations.push({
      text: match[1].trim(),
      author,
    });
  }
  
  // Pattern 3: Author said: "quoted text"
  const authorSaidPattern = /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:said|wrote|stated|noted|observed|remarked)[:;]\s*[""]([^""]+)[""]/g;
  while ((match = authorSaidPattern.exec(content)) !== null) {
    quotations.push({
      text: match[2].trim(),
      author: match[1].trim(),
    });
  }
  
  return quotations;
}

/**
 * Count words in a text string
 */
function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Extract MEM file references from content
 * Looks for references to other MEM files
 */
function extractMEMReferences(content: string, currentCivilization: string | null): {
  total: number;
  sameCivilization: number;
  geoMemCount: number;
  references: string[];
} {
  const references: string[] = [];
  const memFilePattern = /MEM–[A-Z]+(?:–[A-Z]+)*/gi;
  const matches = Array.from(content.matchAll(memFilePattern));
  
  for (const match of matches) {
    const memRef = match[0];
    if (!references.includes(memRef)) {
      references.push(memRef);
    }
  }
  
  // Determine same-civilization references (all must be same CIV)
  let sameCivilization = 0;
  let geoMemCount = 0;
  if (currentCivilization) {
    for (const ref of references) {
      // Extract civilization from MEM filename
      const civMatch = ref.match(/MEM–([A-Z]+)/i);
      if (civMatch && civMatch[1].toUpperCase() === currentCivilization.toUpperCase()) {
        sameCivilization++;
        // Check if this is a GEO MEM file
        // GEO MEM files typically have format: MEM–[CIV]–GEO–[SUBJECT]
        if (/MEM–[A-Z]+–GEO/i.test(ref)) {
          geoMemCount++;
        }
      }
    }
  }
  
  return {
    total: references.length,
    sameCivilization,
    geoMemCount,
    references,
  };
}

/**
 * Extract ARC version from MEM file metadata or Section XII
 */
function extractARCVersion(content: string, header: any): string | null {
  // Check header metadata first
  if (header?.arc_version) {
    return String(header.arc_version);
  }
  if (header?.arcVersion) {
    return String(header.arcVersion);
  }
  
  // Check Section XII for ARC version declaration
  const sectionXIIPattern = /XII\.\s*ARC\s+(?:COMPLIANCE|VERSION|PINNING)[^\n]*\n([\s\S]*?)(?=XIII\.|END|$)/i;
  const match = content.match(sectionXIIPattern);
  if (match) {
    const sectionContent = match[1];
    const versionMatch = sectionContent.match(/ARC[–-](?:\[CIV\]|ROME|CHINA|ANGLIA|AFRICA)\s*v?(\d+\.\d+)/i);
    if (versionMatch) {
      return versionMatch[1];
    }
  }
  
  return null;
}

/**
 * Verify ARC version parity with CIV–CORE and CIV–SCHOLAR
 */
function verifyARCVersionParity(
  memARCVersion: string | null,
  civilization: string
): { parity: boolean; coreVersion?: string; scholarVersion?: string; error?: string } {
  if (!memARCVersion) {
    return { parity: false, error: 'ARC version not declared in MEM file' };
  }
  
  try {
    const registry = getFileRegistry();
    const allFiles = registry.getAll();
    
    // Check CIV–CORE
    const coreFile = allFiles.find(f => 
      f.file_type === 'CIV-CORE' && 
      f.civilization === civilization.toUpperCase()
    );
    
    let coreVersion: string | undefined;
    if (coreFile) {
      const parsed = readRepositoryFile(coreFile.file_path);
      if (parsed?.content) {
        // Look for ARC version in CIV–CORE (Section XVI)
        const arcSectionMatch = parsed.content.match(/XVI\.\s*ACADEMIC\s+REFERENCE\s+CANON[^\n]*\n([\s\S]*?)(?=XVII\.|END|$)/i);
        if (arcSectionMatch) {
          const versionMatch = arcSectionMatch[1].match(/ARC[–-](?:\[CIV\]|ROME|CHINA|ANGLIA|AFRICA)\s*v?(\d+\.\d+)/i);
          if (versionMatch) {
            coreVersion = versionMatch[1];
          }
        }
      }
    }
    
    // Check CIV–SCHOLAR
    const scholarFile = allFiles.find(f => 
      f.file_type === 'CIV-SCHOLAR' && 
      f.civilization === civilization.toUpperCase()
    );
    
    let scholarVersion: string | undefined;
    if (scholarFile) {
      const parsed = readRepositoryFile(scholarFile.file_path);
      if (parsed?.content) {
        // Look for ARC version in CIV–SCHOLAR
        const versionMatch = parsed.content.match(/ARC[–-](?:\[CIV\]|ROME|CHINA|ANGLIA|AFRICA)\s*v?(\d+\.\d+)/i);
        if (versionMatch) {
          scholarVersion = versionMatch[1];
        }
      }
    }
    
    // Verify parity
    const versions = [memARCVersion, coreVersion, scholarVersion].filter(Boolean);
    if (versions.length === 0) {
      return { parity: false, error: 'No ARC versions found in CIV–CORE or CIV–SCHOLAR' };
    }
    
    // All versions should match
    const uniqueVersions = new Set(versions);
    const parity = uniqueVersions.size === 1;
    
    return {
      parity,
      coreVersion,
      scholarVersion,
      error: parity ? undefined : `ARC version mismatch: MEM=${memARCVersion}, CORE=${coreVersion || 'N/A'}, SCHOLAR=${scholarVersion || 'N/A'}`,
    };
  } catch (error) {
    return { parity: false, error: `Error verifying ARC version parity: ${error}` };
  }
}

/**
 * Verify wordcount in metadata
 */
function verifyWordcount(content: string, header: any): { verified: boolean; declared?: number; actual?: number; error?: string } {
  const actualWordcount = countWords(content);
  
  if (!header?.wordcount && !header?.Wordcount) {
    return { verified: false, actual: actualWordcount, error: 'Wordcount not declared in metadata' };
  }
  
  const declaredWordcount = Number(header.wordcount || header.Wordcount);
  if (isNaN(declaredWordcount)) {
    return { verified: false, actual: actualWordcount, error: 'Wordcount in metadata is not a valid number' };
  }
  
  // Allow ±5% tolerance for wordcount verification
  const tolerance = Math.max(10, declaredWordcount * 0.05);
  const verified = Math.abs(actualWordcount - declaredWordcount) <= tolerance;
  
  return {
    verified,
    declared: declaredWordcount,
    actual: actualWordcount,
    error: verified ? undefined : `Wordcount mismatch: declared=${declaredWordcount}, actual=${actualWordcount} (tolerance: ±${Math.round(tolerance)})`,
  };
}

/**
 * Main preflight validation function
 * Performs all CIV–MEM–TEMPLATE v1.9 compliance checks
 */
export function preflightMEMFile(
  content: string,
  filePath: string
): PreflightResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Parse file
  let parsed;
  try {
    parsed = matter(content);
  } catch (error) {
    return {
      valid: false,
      blocked: true,
      errors: ['Failed to parse YAML front matter'],
      warnings: [],
      compliance: {
        arcVersionPinned: false,
        arcVersionParity: false,
        wordcountVerified: false,
        quotationCompliance: {
          ancient: { count: 0, totalWords: 0, required: { count: 3, totalWords: 75 } },
          medieval: { count: 0, minWordsPerQuote: 0, required: { count: 2, minWordsPerQuote: 25 } },
          earlyModern: { count: 0, minWordsPerQuote: 0, required: { count: 2, minWordsPerQuote: 25 } },
          modern: { count: 0, required: { count: 2 } },
        },
        memConnections: { total: 0, sameCivilization: 0, geoMemCount: 0, required: { total: 10, sameCivilization: 10, geoMem: 2 } },
        structuralCompliance: false,
      },
    };
  }
  
  const header = parsed.data;
  const bodyContent = parsed.content;
  
  // Classify file
  const classification = classifyFile(filePath);
  const civilization = classification.civilization;
  
  if (!civilization) {
    errors.push('Cannot determine civilization from file path');
  }
  
  // Check file naming convention
  if (!filePath.match(/^MEM–.*\.md$/i) && !filePath.match(/^.*\/MEM–.*\.md$/i)) {
    errors.push('MEM file must follow naming convention: MEM–*.md');
  }
  
  // Load ARC for this civilization
  let arc: ARC | null = null;
  if (civilization) {
    try {
      arc = getARCForCivilization(civilization);
      if (!arc) {
        warnings.push(`No ARC (Academic Reference Canon) defined for ${civilization}. MEM file may not be canonizable.`);
      }
    } catch (error) {
      warnings.push(`Could not load ARC for ${civilization}: ${error}`);
    }
  }
  
  // Extract and validate quotations
  const quotations = extractQuotations(bodyContent);
  const quotationCompliance = {
    ancient: { count: 0, totalWords: 0, required: { count: 3, totalWords: 75 } },
    medieval: { count: 0, minWordsPerQuote: Infinity, required: { count: 2, minWordsPerQuote: 25 } },
    earlyModern: { count: 0, minWordsPerQuote: Infinity, required: { count: 2, minWordsPerQuote: 25 } },
    modern: { count: 0, required: { count: 2 } },
  };
  
  if (arc && quotations.length > 0) {
    // Categorize quotations by ARC
    for (const quote of quotations) {
      if (quote.author) {
        const category = getARCCategory(quote.author, arc);
        if (category) {
          quote.category = category;
          
          if (category === 'ANCIENT') {
            quotationCompliance.ancient.count++;
            quotationCompliance.ancient.totalWords += countWords(quote.text);
          } else if (category === 'MEDIEVAL') {
            quotationCompliance.medieval.count++;
            const wordCount = countWords(quote.text);
            quotationCompliance.medieval.minWordsPerQuote = Math.min(
              quotationCompliance.medieval.minWordsPerQuote,
              wordCount
            );
          } else if (category === 'EARLY_MODERN') {
            quotationCompliance.earlyModern.count++;
            const wordCount = countWords(quote.text);
            quotationCompliance.earlyModern.minWordsPerQuote = Math.min(
              quotationCompliance.earlyModern.minWordsPerQuote,
              wordCount
            );
          } else if (category === 'MODERN') {
            quotationCompliance.modern.count++;
          }
        } else {
          // Author not in ARC
          warnings.push(`Quotation from author "${quote.author}" not found in ARC for ${civilization}`);
        }
      }
    }
    
    // Check compliance requirements
    if (quotationCompliance.ancient.count < 3) {
      errors.push(`ANCIENT category: Required ≥3 quotations, found ${quotationCompliance.ancient.count}`);
    }
    if (quotationCompliance.ancient.totalWords < 75) {
      errors.push(`ANCIENT category: Required ≥75 total words, found ${quotationCompliance.ancient.totalWords}`);
    }
    // MEDIEVAL is optional (when medieval continuity is relevant)
    if (quotationCompliance.medieval.count > 0 && quotationCompliance.medieval.count < 2) {
      errors.push(`MEDIEVAL category: If used, requires ≥2 quotations, found ${quotationCompliance.medieval.count}`);
    }
    if (quotationCompliance.medieval.count > 0 && quotationCompliance.medieval.minWordsPerQuote < 25) {
      errors.push(`MEDIEVAL category: Each quotation must be ≥25 words, minimum found: ${quotationCompliance.medieval.minWordsPerQuote}`);
    }
    if (quotationCompliance.earlyModern.count < 2) {
      errors.push(`EARLY_MODERN category: Required ≥2 quotations, found ${quotationCompliance.earlyModern.count}`);
    }
    if (quotationCompliance.earlyModern.minWordsPerQuote < 25) {
      errors.push(`EARLY_MODERN category: Each quotation must be ≥25 words, minimum found: ${quotationCompliance.earlyModern.minWordsPerQuote}`);
    }
    if (quotationCompliance.modern.count < 2) {
      errors.push(`MODERN category: Required ≥2 quotations, found ${quotationCompliance.modern.count}`);
    }
  } else if (arc && quotations.length === 0) {
    errors.push('No quotations found in MEM file. MEM files must include verbatim quotations from ARC sources.');
  }
  
  // Extract ARC version
  const arcVersion = extractARCVersion(bodyContent, header);
  const arcVersionPinned = arcVersion !== null;
  if (!arcVersionPinned) {
    errors.push('ARC version not declared. MEM files must declare ARC–[CIV] version used for compliance (Section XI/XII).');
  }
  
  // Verify ARC version parity
  let arcVersionParity = false;
  if (arcVersion && civilization) {
    const parityResult = verifyARCVersionParity(arcVersion, civilization);
    arcVersionParity = parityResult.parity;
    if (!parityResult.parity) {
      errors.push(`ARC version parity failure: ${parityResult.error}`);
    }
  }
  
  // Verify wordcount
  const wordcountResult = verifyWordcount(bodyContent, header);
  const wordcountVerified = wordcountResult.verified;
  if (!wordcountResult.verified) {
    errors.push(`Wordcount verification failed: ${wordcountResult.error}`);
  }
  
  // Check MEM connections
  const memRefs = extractMEMReferences(bodyContent, civilization);
  if (memRefs.total < 10) {
    errors.push(`MEM connection requirement: Required ≥10 MEM file references, found ${memRefs.total}`);
  }
  if (memRefs.sameCivilization < memRefs.total) {
    const crossCivCount = memRefs.total - memRefs.sameCivilization;
    errors.push(`MEM same-civilization requirement: All MEM connections must be to the same civilization. Found ${crossCivCount} cross-civilization reference(s), which is not allowed.`);
  }
  if (memRefs.geoMemCount < 2) {
    errors.push(`MEM GEO requirement: Required ≥2 GEO MEM file references, found ${memRefs.geoMemCount}`);
  }
  
  // Check structural compliance (minimum 8 numbered sections)
  const numberedSectionPattern = /^[IVX]+\.\s+[A-Z]/gm;
  const sections = bodyContent.match(numberedSectionPattern);
  const sectionCount = sections ? sections.length : 0;
  const structuralCompliance = sectionCount >= 8;
  if (!structuralCompliance) {
    errors.push(`Structural compliance: Required ≥8 numbered analytical sections, found ${sectionCount}`);
  }
  
  // Check for mandatory clause
  if (!bodyContent.includes('Contradictions are preserved without synthesis')) {
    warnings.push('Mandatory clause not found: "Contradictions are preserved without synthesis" (Section III)');
  }
  
  // Determine if file should be blocked
  const blocked = errors.length > 0;
  const valid = !blocked;
  
  return {
    valid,
    blocked,
    errors,
    warnings,
    compliance: {
      arcVersionPinned,
      arcVersion: arcVersion || undefined,
      arcVersionParity,
      wordcountVerified,
      wordcount: wordcountResult.actual,
      quotationCompliance: {
        ancient: {
          count: quotationCompliance.ancient.count,
          totalWords: quotationCompliance.ancient.totalWords,
          required: { count: 3 as const, totalWords: 75 as const },
        },
        medieval: {
          count: quotationCompliance.medieval.count,
          minWordsPerQuote: quotationCompliance.medieval.minWordsPerQuote === Infinity ? 0 : quotationCompliance.medieval.minWordsPerQuote,
          required: { count: 2 as const, minWordsPerQuote: 25 as const },
        },
        earlyModern: {
          count: quotationCompliance.earlyModern.count,
          minWordsPerQuote: quotationCompliance.earlyModern.minWordsPerQuote === Infinity ? 0 : quotationCompliance.earlyModern.minWordsPerQuote,
          required: { count: 2 as const, minWordsPerQuote: 25 as const },
        },
        modern: {
          count: quotationCompliance.modern.count,
          required: { count: 2 as const },
        },
      },
      memConnections: {
        total: memRefs.total,
        sameCivilization: memRefs.sameCivilization,
        geoMemCount: memRefs.geoMemCount,
        required: { total: 10, sameCivilization: 10, geoMem: 2 },
      },
      structuralCompliance,
    },
  };
}

