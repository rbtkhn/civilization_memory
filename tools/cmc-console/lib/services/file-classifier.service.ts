/**
 * File Classification Service
 * Determines file type, civilization, era, and status from file path and name
 */

import { FileType, FileClassification, Era, FileStatus } from '@/types';

const FILE_PATTERNS: Record<FileType, RegExp> = {
  // MEM–{CIV}–* (canonical) and CMC–MEM–* (legacy; accept during/after migration)
  'MEM': /^(MEM–|CMC–MEM–).*\.md$/i,
  'CIV-CORE': /^CIV–CORE–.*\.md$/i,
  'CIV-INDEX': /^CIV–INDEX–.*\.md$/i,
  'CIV-SCHOLAR': /^CIV–SCHOLAR–.*\.md$/i,
  'CIV-SCHOLAR-PROTOCOL': /^CIV–SCHOLAR–PROTOCOL.*\.md$/i,
  'CIV-DOCTRINE': /^CIV–DOCTRINE–.*\.md$/i,
  'TEMPLATE': /.*TEMPLATE.*\.md$/i,
  'GOVERNANCE': /.*GOVERNANCE.*|.*PROTOCOL.*\.md$/i,
  'UNKNOWN': /.*/,
};

const CIVILIZATION_NAMES = [
  'AFRICA',
  'ANGLIA',
  'CHINA',
  'FRANCIA',
  'GERMANIA',
  'INDIA',
  'ISLAM',
  'PERSIA',
  'ROME',
  'RUSSIA',
];

export function classifyFile(filePath: string): FileClassification {
  const fileName = filePath.split('/').pop() || '';
  const pathParts = filePath.split('/').filter(p => p);
  
  // Determine file type from name
  let fileType: FileType = 'UNKNOWN';
  for (const [type, pattern] of Object.entries(FILE_PATTERNS)) {
    if (pattern.test(fileName)) {
      fileType = type as FileType;
      break;
    }
  }
  
  // Extract civilization from path (look in content/civilizations/ directory)
  let civilization: string | null = null;
  const contentIndex = pathParts.indexOf('content');
  const civIndex = pathParts.indexOf('civilizations');
  if (civIndex >= 0 && pathParts[civIndex + 1]) {
    const potentialCiv = pathParts[civIndex + 1].toUpperCase();
    if (CIVILIZATION_NAMES.includes(potentialCiv)) {
      civilization = potentialCiv;
    }
  }
  
  // Era extraction would typically come from header metadata
  // For now, default to null (will be populated from header)
  const era: Era = null;
  
  // Status extraction would typically come from header metadata
  const status: FileStatus = null;
  
  // Version extraction would typically come from header metadata
  const version: string | null = null;
  
  return {
    file_type: fileType,
    civilization,
    era,
    status,
    version,
  };
}

