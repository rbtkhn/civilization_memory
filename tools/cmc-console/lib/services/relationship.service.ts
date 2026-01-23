/**
 * Relationship Extraction Service
 * Extracts and stores relationships between files (MEM connections, CIV–CORE references, etc.)
 */

import { getFileRegistry, getFileRelationships } from '@/lib/db';
import { RelationshipType } from '@/types';

export interface ExtractedRelationship {
  targetFileName: string;
  relationshipType: RelationshipType;
  context?: string;
  strength?: number;
}

/**
 * Extract MEM file references from content
 * Pattern: MEM–{CIV}–{SUBJECT} or CMC–MEM–{CIV}–{SUBJECT}
 */
export function extractMEMReferences(content: string): string[] {
  const references: string[] = [];
  // Match MEM–ROME–CAESAR, MEM–CHINA–*, CMC–MEM–CHINA–* patterns
  const memFilePattern = /(?:MEM–|CMC–MEM–)[A-Z]+(?:–[A-Z0-9]+)*/gi;
  const matches = Array.from(content.matchAll(memFilePattern));
  
  for (const match of matches) {
    const memRef = match[0].trim();
    if (memRef && !references.includes(memRef)) {
      references.push(memRef);
    }
  }
  
  return references;
}

/**
 * Extract CIV–CORE references from content
 * Pattern: CIV–CORE–{CIVILIZATION} or references to specific sections
 */
export function extractCIVCOREReferences(content: string): string[] {
  const references: string[] = [];
  // Match CIV–CORE–ROME, CIV–CORE–CHINA, etc.
  const corePattern = /CIV–CORE–[A-Z]+/gi;
  const matches = Array.from(content.matchAll(corePattern));
  
  for (const match of matches) {
    const coreRef = match[0].trim();
    if (coreRef && !references.includes(coreRef)) {
      references.push(coreRef);
    }
  }
  
  // Also look for section references like "CIV–CORE–ROME Section V" or "Section V of CIV–CORE"
  const sectionPattern = /(?:Section\s+[IVX]+|Section\s+\d+).*?CIV–CORE|CIV–CORE.*?(?:Section\s+[IVX]+|Section\s+\d+)/gi;
  const sectionMatches = Array.from(content.matchAll(sectionPattern));
  for (const match of sectionMatches) {
    // Extract the CIV–CORE filename from context
    const context = match[0];
    const coreMatch = context.match(/CIV–CORE–[A-Z]+/i);
    if (coreMatch) {
      const coreRef = coreMatch[0].trim();
      if (coreRef && !references.includes(coreRef)) {
        references.push(coreRef);
      }
    }
  }
  
  return references;
}

/**
 * Extract CIV–DOCTRINE references from content
 * Pattern: CIV–DOCTRINE–{NAME} or doctrine references
 */
export function extractDOCTRINEReferences(content: string): string[] {
  const references: string[] = [];
  // Match CIV–DOCTRINE–ROME, CIV–DOCTRINE–*, etc.
  const doctrinePattern = /CIV–DOCTRINE–[A-Z]+/gi;
  const matches = Array.from(content.matchAll(doctrinePattern));
  
  for (const match of matches) {
    const doctrineRef = match[0].trim();
    if (doctrineRef && !references.includes(doctrineRef)) {
      references.push(doctrineRef);
    }
  }
  
  // Also look for doctrine name references (e.g., "Doctrine ## Name: ...")
  const doctrineNamePattern = /Doctrine\s+##\s+Name:\s*([A-Z][A-Za-z\s]+)/gi;
  const nameMatches = Array.from(content.matchAll(doctrineNamePattern));
  for (const match of nameMatches) {
    // This is a doctrine name, not a file reference, but we can note it
    // For now, we'll focus on file references
  }
  
  return references;
}

/**
 * Extract all relationships from file content
 */
export function extractAllRelationships(
  content: string,
  sourceFileId: number,
  sourceCivilization: string | null
): ExtractedRelationship[] {
  const relationships: ExtractedRelationship[] = [];
  
  // Extract MEM references
  // NOTE: As of CIV–MEM–TEMPLATE v1.9, all MEM connections must be to the same civilization
  // Cross-civilization MEM connections are tracked here for historical files but are invalid for new files
  const memRefs = extractMEMReferences(content);
  for (const memRef of memRefs) {
    // Determine if it's cross-civilization (for tracking purposes - new files must be same-civ only)
    const civMatch = memRef.match(/(?:MEM–|CMC–MEM–)([A-Z]+)/i);
    const isCrossCiv = civMatch && sourceCivilization && 
                      civMatch[1].toUpperCase() !== sourceCivilization.toUpperCase();
    
    relationships.push({
      targetFileName: memRef,
      relationshipType: 'mem_connection',
      context: isCrossCiv ? 'Cross-civilization MEM connection (invalid per CIV–MEM–TEMPLATE v1.9)' : 'Same-civilization MEM connection',
      strength: isCrossCiv ? 0.5 : 1.0, // Cross-civ connections are invalid but tracked for historical data
    });
  }
  
  // Extract CIV–CORE references
  const coreRefs = extractCIVCOREReferences(content);
  for (const coreRef of coreRefs) {
    relationships.push({
      targetFileName: coreRef,
      relationshipType: 'civ_core_reference',
      context: 'Reference to CIV–CORE structural constraints',
      strength: 1.0,
    });
  }
  
  // Extract DOCTRINE references
  const doctrineRefs = extractDOCTRINEReferences(content);
  for (const doctrineRef of doctrineRefs) {
    relationships.push({
      targetFileName: doctrineRef,
      relationshipType: 'doctrine_reference',
      context: 'Reference to frozen doctrine',
      strength: 1.0,
    });
  }
  
  return relationships;
}

/**
 * Store relationships in database
 * Maps file names to file IDs and creates relationship records
 */
export function storeRelationships(
  sourceFileId: number,
  relationships: ExtractedRelationship[]
): { stored: number; errors: number } {
  const registry = getFileRegistry();
  const relationshipService = getFileRelationships();
  
  let stored = 0;
  let errors = 0;
  
  for (const rel of relationships) {
    try {
      // Find target file by name (try various path formats)
      const allFiles = registry.getAll();
      const targetFile = allFiles.find(f => {
        const fileName = f.file_path.split('/').pop() || f.file_path;
        const fileNameWithoutExt = fileName.replace(/\.md$/i, '');
        const targetNameWithoutExt = rel.targetFileName.replace(/\.md$/i, '');
        
        // Match exact filename (with or without extension)
        return fileName === rel.targetFileName ||
               fileName === `${rel.targetFileName}.md` ||
               fileNameWithoutExt === rel.targetFileName ||
               fileNameWithoutExt === targetNameWithoutExt ||
               fileName.includes(rel.targetFileName) ||
               f.file_path.includes(rel.targetFileName) ||
               // Also try matching just the base name (e.g., "CAESAR" from "MEM–ROME–CAESAR")
               (rel.targetFileName.includes('–') && fileNameWithoutExt.includes(rel.targetFileName.split('–').pop() || ''));
      });
      
      if (!targetFile) {
        // Target file not found in registry - skip but don't error
        // This can happen if the referenced file hasn't been scanned yet
        continue;
      }
      
      // Check if relationship already exists
      const existing = relationshipService.getBySourceFile(sourceFileId);
      const alreadyExists = existing.some(
        r => r.target_file_id === targetFile.id && 
             r.relationship_type === rel.relationshipType
      );
      
      if (alreadyExists) {
        continue; // Skip duplicates
      }
      
      // Store relationship
      relationshipService.insert({
        source_file_id: sourceFileId,
        target_file_id: targetFile.id,
        relationship_type: rel.relationshipType,
        relationship_context: rel.context || null,
        strength: rel.strength || 1.0,
      });
      
      stored++;
    } catch (error) {
      console.error(`Error storing relationship ${rel.targetFileName}:`, error);
      errors++;
    }
  }
  
  return { stored, errors };
}

/**
 * Update file_registry metadata columns with relationship counts
 */
export function updateFileRelationshipCounts(fileId: number): void {
  const registry = getFileRegistry();
  const relationshipService = getFileRelationships();
  
  // Get all relationships for this file
  const sourceRelationships = relationshipService.getBySourceFile(fileId);
  const targetRelationships = relationshipService.getByTargetFile(fileId);
  const allRelationships = [...sourceRelationships, ...targetRelationships];
  
  // Count MEM connections
  const memConnections = allRelationships.filter(
    r => r.relationship_type === 'mem_connection'
  ).length;
  
  // Count cross-civilization connections (for historical tracking - new files must be same-civ only per CIV–MEM–TEMPLATE v1.9)
  const file = registry.getById(fileId);
  if (!file) return;
  
  const crossCivConnections = allRelationships.filter(r => {
    if (r.relationship_type !== 'mem_connection') return false;
    const targetFile = registry.getById(r.target_file_id);
    return targetFile && targetFile.civilization && 
           targetFile.civilization !== file.civilization;
  }).length;
  
  // Count contradictions
  const contradictions = allRelationships.filter(
    r => r.relationship_type === 'contradiction'
  ).length;
  
  // Update file_registry
  registry.update(fileId, {
    mem_connections_count: memConnections,
    cross_civ_connections_count: crossCivConnections,
    contradiction_count: contradictions,
  });
}

/**
 * Process a file and extract/store all relationships
 * This is the main entry point for relationship extraction
 */
export function processFileRelationships(
  fileId: number,
  content: string,
  civilization: string | null
): { stored: number; errors: number } {
  // Extract relationships from content
  const relationships = extractAllRelationships(content, fileId, civilization);
  
  // Store relationships in database
  const result = storeRelationships(fileId, relationships);
  
  // Update file_registry metadata columns
  updateFileRelationshipCounts(fileId);
  
  return result;
}

/**
 * Rebuild all relationships for all files in registry
 * Useful for initial population or after schema changes
 */
export async function rebuildAllRelationships(): Promise<{ processed: number; stored: number; errors: number }> {
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
      
      // Process relationships
      const result = processFileRelationships(file.id, parsed.content, file.civilization);
      totalStored += result.stored;
      totalErrors += result.errors;
      processed++;
    } catch (error) {
      console.error(`Error processing relationships for ${file.file_path}:`, error);
      totalErrors++;
    }
  }
  
  return { processed, stored: totalStored, errors: totalErrors };
}

