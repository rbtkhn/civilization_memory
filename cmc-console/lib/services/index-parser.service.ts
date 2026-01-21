/**
 * Index Parser Service
 * Extracts MEM file names from CIV–INDEX files
 */

/**
 * Parse MEM file names from CIV–INDEX content
 * CIV–INDEX files list MEM files in sections like:
 * "III. REGISTERED MEM FILES — PERSONS & FIGURES (ROME)"
 * "• MEM–ROME–CAESAR.md"
 */
export function parseMemFilesFromIndex(indexContent: string): string[] {
  const memFiles: string[] = [];
  
  // Pattern to match MEM file entries:
  // "• MEM–ROME–CAESAR.md"
  // "• MEM–ROME–GEO–IBERIA.md"
  // Lines typically start with bullet points or list markers
  const lines = indexContent.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Match lines that contain MEM file references
    // Pattern: "• MEM–..." or "- MEM–..." or just "MEM–..."
    const memPattern = /^[•\-\*]\s*(MEM–[A-Z]+(?:–[A-Z0-9]+)*\.md)/i;
    const match = trimmed.match(memPattern);
    
    if (match && match[1]) {
      const fileName = match[1].trim();
      if (!memFiles.includes(fileName)) {
        memFiles.push(fileName);
      }
      continue;
    }
    
    // Also match MEM files without bullet points (sometimes formatted differently)
    const memPattern2 = /\b(MEM–[A-Z]+(?:–[A-Z0-9]+)*\.md)\b/gi;
    const matches = trimmed.matchAll(memPattern2);
    for (const m of matches) {
      if (m[1] && !memFiles.includes(m[1])) {
        memFiles.push(m[1]);
      }
    }
  }
  
  return memFiles.sort();
}

/**
 * Extract MEM files by category from CIV–INDEX
 * Returns MEM files grouped by their section/category
 */
export function parseMemFilesByCategory(indexContent: string): Record<string, string[]> {
  const categories: Record<string, string[]> = {};
  const lines = indexContent.split('\n');
  
  let currentCategory: string | null = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Match section headers like:
    // "III. REGISTERED MEM FILES — PERSONS & FIGURES (ROME)"
    // "A) GEO"
    // "VIII. REGISTERED MEM FILES — INSTITUTIONS & CITIES"
    const sectionPattern = /^(?:[IVX]+\.\s+REGISTERED MEM FILES|(?:[A-H]\)|[IVX]+\.))\s*(?:—\s*)?([A-Z][A-Za-z\s&/]+)/i;
    const sectionMatch = trimmed.match(sectionPattern);
    
    if (sectionMatch) {
      // Extract category name
      const categoryName = sectionMatch[1]?.trim() || 'Other';
      currentCategory = categoryName;
      if (!categories[currentCategory]) {
        categories[currentCategory] = [];
      }
      continue;
    }
    
    // Match MEM file entries when we have a current category
    if (currentCategory) {
      const memPattern = /^[•\-\*]\s*(MEM–[A-Z]+(?:–[A-Z0-9]+)*\.md)/i;
      const match = trimmed.match(memPattern);
      
      if (match && match[1]) {
        const fileName = match[1].trim();
        if (!categories[currentCategory].includes(fileName)) {
          categories[currentCategory].push(fileName);
        }
      }
    }
  }
  
  return categories;
}

/**
 * Find MEM file path from filename in file registry
 * Maps index filename (e.g., "MEM–ROME–CAESAR.md") to full path
 */
export function findMemFilePath(fileName: string, allFiles: Array<{ file_path: string; file_type: string; civilization?: string | null }>, civilization?: string | null): string | null {
  // Try exact match first
  const exactMatch = allFiles.find(f => {
    const pathFileName = f.file_path.split('/').pop() || f.file_path;
    return pathFileName === fileName && 
           f.file_type === 'MEM' &&
           (!civilization || f.civilization === civilization);
  });
  
  if (exactMatch) {
    return exactMatch.file_path;
  }
  
  // Try without .md extension
  const nameWithoutExt = fileName.replace(/\.md$/i, '');
  const partialMatch = allFiles.find(f => {
    const pathFileName = f.file_path.split('/').pop() || f.file_path;
    const pathNameWithoutExt = pathFileName.replace(/\.md$/i, '');
    return pathNameWithoutExt === nameWithoutExt &&
           f.file_type === 'MEM' &&
           (!civilization || f.civilization === civilization);
  });
  
  if (partialMatch) {
    return partialMatch.file_path;
  }
  
  // Try path includes
  const includesMatch = allFiles.find(f => 
    f.file_path.includes(fileName) &&
    f.file_type === 'MEM' &&
    (!civilization || f.civilization === civilization)
  );
  
  return includesMatch?.file_path || null;
}

