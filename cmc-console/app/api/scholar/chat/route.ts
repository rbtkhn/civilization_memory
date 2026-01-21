/**
 * API Route: SCHOLAR Chat
 * Handles LLM interactions with SCHOLAR file context
 */

import { NextResponse } from 'next/server';
import { getCurrentMode, requireAction } from '@/lib/services/mode.service';

interface ChatRequest {
  message: string;
  mode: 'IMAGINE' | 'LEARN' | 'WRITE' | 'AUDIT';
  scholarContent?: string;
  loadedMemFiles?: Array<{ path: string; content: string }>;
  civilization?: string;
  coreContent?: string;
  indexContent?: string;
  doctrineContent?: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

/**
 * Cache for CIV–MEM–CORE content
 * Stores content and file modification time to avoid redundant loads
 */
interface CIVMEMCORECache {
  content: string;
  mtime: number;
  filePath: string;
}

let civMemCoreCache: CIVMEMCORECache | null = null;

/**
 * Get the file path for CIV–MEM–CORE.md
 * Returns the primary path (will be checked for existence in load function)
 */
async function getCIVMEMCOREPath(): Promise<string> {
  const path = await import('path');
  const repoPath = process.env.GIT_REPO_PATH || path.join(process.cwd(), '..', 'civilization_memory');
  
  // Return primary path (CIV–MEM–CORE.md with en-dash)
  // Alternative path will be tried if primary fails
  return path.join(repoPath, 'CIV–MEM–CORE.md');
}

/**
 * Load CIV–MEM–CORE (global system law)
 * Must be loaded FIRST in every conversation (CIV–MEM–CORE v1.8 requirement)
 * Load Order: FIRST FILE IN EVERY NEW CONVERSATION
 * Status: ACTIVE · CANONICAL · GLOBAL PRELOAD
 * 
 * IMPLEMENTATION: Cached in memory for performance
 * - Loads once on first call
 * - Checks file modification time on subsequent calls
 * - Reloads only if file has changed
 * - Avoids database registry scan (direct file access)
 */
async function loadCIVMEMCORE(): Promise<string | null> {
  const fs = await import('fs/promises');
  const path = await import('path');
  
  try {
    // Get file path (try primary and alternative locations)
    const primaryPath = await getCIVMEMCOREPath();
    
    // Check if file exists and get modification time
    let filePath: string | null = null;
    let mtime: number = 0;
    
    try {
      const stats = await fs.stat(primaryPath);
      filePath = primaryPath;
      mtime = stats.mtimeMs;
    } catch (primaryError) {
      // Try alternative path format
      const repoPath = process.env.GIT_REPO_PATH || path.join(process.cwd(), '..', 'civilization_memory');
      const altPath = path.join(repoPath, 'CIV-MEM-CORE.md');
      try {
        const stats = await fs.stat(altPath);
        filePath = altPath;
        mtime = stats.mtimeMs;
      } catch (altError) {
        // File not found in either location
        console.warn('Could not find CIV–MEM–CORE.md in repository root:', primaryError);
        return null;
      }
    }
    
    if (!filePath) {
      return null;
    }
    
    // Check cache: if cached content exists and file hasn't changed, return cached content
    if (civMemCoreCache && civMemCoreCache.filePath === filePath) {
      try {
        const currentStats = await fs.stat(filePath);
        if (currentStats.mtimeMs === civMemCoreCache.mtime) {
          // File unchanged, return cached content (fast path)
          return civMemCoreCache.content;
        }
        // File changed, update mtime for reload below
        mtime = currentStats.mtimeMs;
      } catch (statError) {
        // File might have been deleted, clear cache and return null
        civMemCoreCache = null;
        return null;
      }
    }
    
    // Load file content (cache miss or file changed)
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Update cache
    civMemCoreCache = {
      content,
      mtime,
      filePath,
    };
    
    return content;
  } catch (error) {
    console.error('Error loading CIV–MEM–CORE:', error);
    // Clear cache on error to force reload on next attempt
    civMemCoreCache = null;
    return null;
  }
}

/**
 * Build system prompt based on mode and SCHOLAR content
 * CIV–MEM–CORE is loaded FIRST as required by v1.8
 */
async function buildSystemPrompt(
  mode: string, 
  scholarContent?: string, 
  loadedMemFiles?: Array<{ path: string; content: string }>,
  civilization?: string,
  coreContentOverride?: string | null,
  indexContentOverride?: string | null,
  doctrineContentOverride?: string | null
): Promise<string> {
  // Get file registry for broader context (IMAGINE, WRITE, and LEARN modes can extend beyond loaded files)
  let fileRegistryContext: string | undefined;
  if (mode === 'IMAGINE' || mode === 'WRITE' || mode === 'LEARN') {
    try {
      const { getFileRegistry } = await import('@/lib/db');
      const registry = getFileRegistry();
      const allFiles = registry.getAll();
      
      // Filter relevant files based on civilization
      const relevantFiles = civilization 
        ? allFiles.filter(f => !f.civilization || f.civilization === civilization.toUpperCase())
        : allFiles;
      
      // Group by type for context
      const filesByType = relevantFiles.reduce((acc, file) => {
        if (!acc[file.file_type]) acc[file.file_type] = [];
        acc[file.file_type].push(file.file_path);
        return acc;
      }, {} as Record<string, string[]>);
      
      // Reduced file registry context to save tokens - only essential info
      fileRegistryContext = `REPOSITORY CONTEXT:\n`;
      fileRegistryContext += `Total: ${allFiles.length} files`;
      if (civilization) {
        fileRegistryContext += ` | ${civilization}: ${relevantFiles.length} files`;
      }
      fileRegistryContext += ` | Types: ${Object.keys(filesByType).join(', ')}\n`;
      
      // Mode-specific repository context emphasis
      if (mode === 'LEARN') {
        // Load file relationships for LEARN mode - auto-discover related MEM files
        let relatedFilesContext = '';
        if (loadedMemFiles && loadedMemFiles.length > 0) {
          try {
            const { getFileRelationships } = await import('@/lib/db');
            const relationships = getFileRelationships();
            
            // Find related MEM files through relationships
            const relatedFileIds = new Set<number>();
            const relatedFilesByType: Record<string, Array<{ path: string; context: string; type: string }>> = {
              mem_connection: [],
              contradiction: [],
              structural_similarity: [],
            };
            
            // For each loaded MEM file, find related files
            for (const memFile of loadedMemFiles) {
              const sourceFile = registry.getByPath(memFile.path);
              if (!sourceFile) continue;
              
              // Get relationships where this file is the source
              const sourceRelations = relationships.getBySourceFile(sourceFile.id);
              for (const rel of sourceRelations) {
                // Only include MEM files and relevant relationship types
                if (rel.relationship_type === 'mem_connection' || 
                    rel.relationship_type === 'contradiction' || 
                    rel.relationship_type === 'structural_similarity') {
                  const targetFile = registry.getById(rel.target_file_id);
                  if (targetFile && targetFile.file_type === 'MEM' && !relatedFileIds.has(rel.target_file_id)) {
                    relatedFileIds.add(rel.target_file_id);
                    relatedFilesByType[rel.relationship_type].push({
                      path: targetFile.file_path,
                      context: rel.relationship_context || 'Related via file relationship',
                      type: rel.relationship_type,
                    });
                  }
                }
              }
              
              // Also check reverse relationships (where this file is the target)
              const targetRelations = relationships.getByTargetFile(sourceFile.id);
              for (const rel of targetRelations) {
                if (rel.relationship_type === 'mem_connection' || 
                    rel.relationship_type === 'contradiction' || 
                    rel.relationship_type === 'structural_similarity') {
                  const sourceFileRel = registry.getById(rel.source_file_id);
                  if (sourceFileRel && sourceFileRel.file_type === 'MEM' && !relatedFileIds.has(rel.source_file_id)) {
                    relatedFileIds.add(rel.source_file_id);
                    relatedFilesByType[rel.relationship_type].push({
                      path: sourceFileRel.file_path,
                      context: rel.relationship_context || 'Related via file relationship',
                      type: rel.relationship_type,
                    });
                  }
                }
              }
            }
            
            // Build related files context if any found
            const totalRelated = relatedFilesByType.mem_connection.length + 
                                 relatedFilesByType.contradiction.length + 
                                 relatedFilesByType.structural_similarity.length;
            
            if (totalRelated > 0) {
              relatedFilesContext += `\n═══════════════════════════════════════════════════════════════════\n`;
              relatedFilesContext += `RELATED MEM FILES (via file relationships) - AUTO-DISCOVERED:\n`;
              relatedFilesContext += `═══════════════════════════════════════════════════════════════════\n`;
              relatedFilesContext += `The following MEM files are related to your loaded files through file relationships.\n`;
              relatedFilesContext += `These files are HIGHLY RELEVANT for pattern detection and synthesis.\n`;
              relatedFilesContext += `Strongly consider analyzing these files when detecting patterns.\n\n`;
              
              if (relatedFilesByType.mem_connection.length > 0) {
                relatedFilesContext += `MEM CONNECTIONS (${relatedFilesByType.mem_connection.length} files):\n`;
                relatedFilesContext += `These files are directly referenced or connected to your loaded MEM files:\n`;
                relatedFilesByType.mem_connection.forEach(file => {
                  relatedFilesContext += `- ${file.path}`;
                  if (file.context && file.context !== 'Related via file relationship') {
                    relatedFilesContext += ` (${file.context})`;
                  }
                  relatedFilesContext += `\n`;
                });
                relatedFilesContext += `\n`;
              }
              
              if (relatedFilesByType.structural_similarity.length > 0) {
                relatedFilesContext += `STRUCTURAL SIMILARITY (${relatedFilesByType.structural_similarity.length} files):\n`;
                relatedFilesContext += `These files have similar structural patterns - excellent for pattern detection:\n`;
                relatedFilesByType.structural_similarity.forEach(file => {
                  relatedFilesContext += `- ${file.path}`;
                  if (file.context && file.context !== 'Related via file relationship') {
                    relatedFilesContext += ` (${file.context})`;
                  }
                  relatedFilesContext += `\n`;
                });
                relatedFilesContext += `\n`;
              }
              
              if (relatedFilesByType.contradiction.length > 0) {
                relatedFilesContext += `CONTRADICTIONS (SCL) (${relatedFilesByType.contradiction.length} files):\n`;
                relatedFilesContext += `These files contain contradictions with your loaded files - IMPORTANT for SCL tracking:\n`;
                relatedFilesByType.contradiction.forEach(file => {
                  relatedFilesContext += `- ${file.path}`;
                  if (file.context && file.context !== 'Related via file relationship') {
                    relatedFilesContext += ` (${file.context})`;
                  }
                  relatedFilesContext += `\n`;
                });
                relatedFilesContext += `\n`;
              }
              
              relatedFilesContext += `USAGE: When detecting patterns in loaded MEM files, check these related files for:\n`;
              relatedFilesContext += `- Similar patterns that strengthen evidence for doctrine proposals\n`;
              relatedFilesContext += `- Cross-file pattern recurrence (required for doctrine proposals: ≥3 files)\n`;
              relatedFilesContext += `- Contradictions that need to be flagged (SCL)\n`;
              relatedFilesContext += `- Structural similarities that reveal operational rules\n`;
              relatedFilesContext += `═══════════════════════════════════════════════════════════════════\n\n`;
            }
          } catch (error) {
            console.error('Error loading file relationships for LEARN mode:', error);
            // Continue without relationships if there's an error
          }
        }
        
        fileRegistryContext += `\n═══════════════════════════════════════════════════════════════════\n`;
        fileRegistryContext += `PATTERN DETECTION PRIORITY (LEARN MODE):\n`;
        fileRegistryContext += `═══════════════════════════════════════════════════════════════════\n`;
        fileRegistryContext += `CRITICAL: Doctrine proposals require pattern recurrence across ≥3 distinct MEM files.\n`;
        fileRegistryContext += `You MUST extend beyond loaded MEM files to find patterns across the repository.\n\n`;
        fileRegistryContext += `PATTERN DETECTION STRATEGY:\n`;
        fileRegistryContext += `1. Analyze loaded MEM files for initial patterns\n`;
        fileRegistryContext += `2. Check RELATED MEM FILES (listed above via file relationships) - these are auto-discovered and highly relevant\n`;
        fileRegistryContext += `3. Search repository for additional MEM files that might contain similar patterns\n`;
        fileRegistryContext += `4. Look for cross-civilizational patterns (patterns that appear in multiple civilizations)\n`;
        fileRegistryContext += `5. Use file relationships (MEM connections, structural similarity) to discover related content\n`;
        fileRegistryContext += `6. Synthesize patterns across multiple files before proposing doctrines\n\n`;
        fileRegistryContext += `CROSS-CIVILIZATION ANALYSIS:\n`;
        fileRegistryContext += `- Patterns that appear across multiple civilizations are STRONGER evidence for doctrine\n`;
        fileRegistryContext += `- Cross-civilization comparison is REQUIRED for many doctrine proposals\n`;
        fileRegistryContext += `- When a pattern appears in ${civilization ? 'other civilizations' : 'multiple civilizations'}, note this in your evidence base\n\n`;
        fileRegistryContext += `REPOSITORY NAVIGATION:\n`;
        fileRegistryContext += `- Related MEM files (via relationships) are listed above - prioritize these for pattern detection\n`;
        fileRegistryContext += `- You can reference any MEM file in the repository by its file path\n`;
        fileRegistryContext += `- Loaded MEM files are your PRIORITY layer, but you MUST extend inquiry beyond them\n`;
        fileRegistryContext += `- When detecting a pattern, check related files first, then search the broader repository\n`;
        fileRegistryContext += `═══════════════════════════════════════════════════════════════════\n\n`;
        
        // Add related files context before the strategy section
        fileRegistryContext = relatedFilesContext + fileRegistryContext;
      } else {
        fileRegistryContext += `\nYou can reference any of these files in your responses, even if they are not currently loaded.\n`;
        fileRegistryContext += `Loaded MEM files are your PRIORITY layer, but you should extend inquiry beyond them.\n\n`;
      }
    } catch (error) {
      console.error('Error loading file registry context:', error);
    }
  }
  // Load CIV–MEM–CORE FIRST (absolute authority, global preload)
  const civMemCore = await loadCIVMEMCORE();
  
  // Add current date for date-based recommendations
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  });
  
  let prompt = '';
  
  // Add current date context at the beginning
  prompt += `CURRENT DATE: ${dateString}\n`;
  prompt += `When recommending files based on date, consider historical events, anniversaries, and significant dates related to the current date.\n\n`;
  
  // CIV–MEM–CORE is the foundational governance layer
  if (civMemCore) {
    prompt += `═══════════════════════════════════════════════════════════════════\n`;
    prompt += `CIV–MEM–CORE (GLOBAL SYSTEM LAW) — LOADED FIRST\n`;
    prompt += `This file has ABSOLUTE PRECEDENCE. No file may contradict it.\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n\n`;
    prompt += `${civMemCore}\n\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n`;
    prompt += `END OF CIV–MEM–CORE\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n\n\n`;
  } else {
    // Warn if CIV–MEM–CORE cannot be loaded (should not happen in production)
    prompt += `WARNING: CIV–MEM–CORE could not be loaded. System operating without foundational governance law.\n\n`;
  }
  
  prompt += `You are operating in ${mode} mode within the Civilizational Memory Codex (CMC) system.\n\n`;

  // Mode-specific instructions
  switch (mode) {
    case 'IMAGINE':
      prompt += `IMAGINE MODE RULES (CIV–SCHOLAR–PROTOCOL v1.5):
- PRIMARY PURPOSE: Creative visualization and immersive exploration WITHOUT epistemic authority
- You are providing imaginative exploration - you visualize, you do NOT decide, learn, or write canon
- You must create engaging, immersive visualizations through the cognitive lens of the SCHOLAR file
- Present content in an engaging, story-like manner while maintaining historical accuracy
- You may visualize existing MEM, CORE, or SCHOLAR content through vivid, contextual narratives
- You MUST surface unresolved contradictions (SCL) explicitly - never resolve them
- You MUST generate multiple choice options using TOGE (Teach Option Generation Engine)
- TOGE is MANDATORY and must activate when presenting content
- EXTENDED INQUIRY: You are NOT bounded by loaded MEM files - extend your inquiry to discover connections across the entire repository and beyond
- PRIORITY LAYER: Loaded MEM files are your priority context, but you should explore relationships, patterns, and connections beyond them
- FORWARD COMPATIBILITY: This mode is designed for future integration with visual generation tools (AI video, images, etc.)

TOPIC GENERATION (When switching to IMAGINE mode with loaded MEM files):
- If the user requests topic generation based on loaded MEM files, you MUST:
  1. Analyze the loaded MEM files to identify key themes, subjects, and narrative opportunities
  2. Generate EXACTLY 4 distinct, engaging visualization/exploration topics inspired by the loaded MEM files
  3. Each topic should be inspired by the loaded MEM files but can extend beyond them to discover connections
  4. Format as multiple choice options: "a) Topic 1", "b) Topic 2", "c) Topic 3", "d) Topic 4"
  5. Topics should be mutually distinct, creatively meaningful, and suitable for immersive visualization
  6. Topics may reference specific MEM files, cross-civilizational comparisons, structural analysis, or historical narratives
  7. Present the topics clearly with a brief introduction, then list all 4 options, and wait for user selection
  8. Do NOT begin the visualization until the user selects a topic (a, b, c, or d)

TOGE REQUIREMENTS (BINDING):
- Generate options from AT LEAST THREE of these six classes:
  1) STRUCTURAL OPTION - Visualize through CIV–CORE architecture or constraints
     * CIV–CORE has AUTHORITY over SCHOLAR in structural matters
     * CIV–CORE files define constraint engines, diagnostic frameworks, and failure-physics models
     * When presenting structural options, you MUST reference CIV–CORE files as authoritative
     * SCHOLAR is advisory only - it cannot override CIV–CORE structural constraints
     * Structural options must respect CIV–CORE authority separation (CIV–CORE ↔ SCHOLAR)
  2) HISTORICAL OPTION - Visualize through SCHOLAR-ingested chronology
  3) COMPARATIVE OPTION - Contrast with another civilization or regime
  4) CONTRADICTION OPTION - Center unresolved SCL tension
  5) PROCESS OPTION - Visualize how the belief or doctrine formed procedurally
  6) EXPLORATION OPTION - Invite imaginative question pathways and creative exploration
- Format options clearly with single letters: "a) Option text", "b) Option text", etc.
- Options MUST be mutually distinct, non-leading, and creatively meaningful
- You MUST stop and await user selection - unilateral continuation is forbidden
- Options may NOT introduce new beliefs, resolve contradictions, freeze doctrine, or rank interpretations
- Options MUST declare CORE vs SCHOLAR sourcing, respect SCR confidence levels, reference SCL where relevant
- When presenting STRUCTURAL OPTIONS, explicitly state that CIV–CORE has authority and SCHOLAR is advisory

IMAGINE MODE PROHIBITIONS:
- You may NOT create new beliefs
- You may NOT resolve contradictions
- You may NOT modify files
- You may NOT insert learning (that is LEARN mode)
- You may NOT generate doctrine or authoritative conclusions

Your output should be exploratory, multi-path, non-final, imagination-directed, and immersive\n\n`;
      break;
    
    case 'LEARN':
      prompt += `LEARN MODE RULES:
- PRIMARY PURPOSE: Recursive learning and iteration of the SCHOLAR file
- You ingest, analyze, synthesize, and assimilate knowledge (especially from MEM files)
- You extract beliefs, rules, patterns, tensions, and insights from MEM files
- You update and evolve the SCHOLAR file through iterative learning cycles
- You record chronology of learning and track knowledge accumulation
- You flag contradictions (SCL) and record confidence levels (SCR)
- You synthesize information from multiple MEM files into coherent SCHOLAR entries
- IMPORTANT: You ingest and understand information REGARDLESS of format compliance
- ARC compliance is NOT required for learning - you learn from any information source
- Format validation (ARC, structure, etc.) is WRITE mode's responsibility, not LEARN mode's
- You may NOT explain pedagogically or offer teaching options
- You may NOT write new MEM files (that is WRITE mode's role)
- You may NOT create reports for external audiences
- Your output should be structured, logged, non-narrative, and traceable to source material
- Focus on knowledge assimilation and SCHOLAR file evolution

RECURSIVE LEARNING LOOP WITH CIV–DOCTRINE:
- CIV–DOCTRINE files contain FROZEN, ACCEPTED doctrines derived from prior SCHOLAR synthesis
- Doctrines participate in the recursive learning loop by INFORMING (not constraining) your learning:
  1) CONSTRAINTS/PRIORS: Doctrines represent accepted knowledge - use them to guide pattern recognition
  2) CONTRADICTION DETECTION: When new learning contradicts existing doctrines, this is a VALUABLE SIGNAL
     - Flag contradictions explicitly (SCL - Scholar Contradiction Log)
     - Contradictions may indicate: new evidence, doctrine refinement needed, or competing interpretations
  3) VALIDATION: New learning that supports or extends existing doctrines strengthens the knowledge base
  4) DIRECTION: Doctrines guide what patterns are worth extracting and what questions to pursue
- IMPORTANT: Doctrines remain LOCKED (you cannot modify them directly), but they actively INFORM your learning
- The recursive loop: MEM → SCHOLAR (LEARN) → synthesis → DOCTRINE (frozen) → back to SCHOLAR (LEARN) → informs future learning
- When you encounter new MEM content, compare it against existing doctrines:
  * Does it support a doctrine? → Strengthen that synthesis
  * Does it contradict a doctrine? → Flag as SCL, investigate the tension
  * Does it extend a doctrine? → Note the extension, consider if synthesis should be updated
  * Does it reveal a new pattern? → Extract as new learning, consider if it could become doctrine

DOCTRINE PROPOSAL DECISION CRITERIA (MANDATORY):
Doctrine proposals are RARE BY DESIGN. You MUST only propose when ALL of the following criteria are met:

FOR NEW DOCTRINE PROPOSALS:
1) PATTERN RECURRENCE: The pattern appears across ≥3 distinct MEM files or is strongly evidenced in ≥2 MEM files with high structural significance
2) STRUCTURAL SIGNIFICANCE: The pattern describes a constraint, failure mode, or operational rule - NOT just a narrative event or historical detail
3) OPERATIONAL CLARITY: The pattern can be stated as:
   - A constraint (what the civilization cannot do)
   - A failure condition (what invalidates the pattern)
   - An operational rule (how the pattern functions procedurally)
4) EVIDENCE BASE STRENGTH: The pattern is supported by:
   - Multiple MEM files (not just one)
   - Cross-civilizational comparison (if applicable)
   - Clear structural relationships to existing doctrines
5) DOCTRINAL GAP: No existing doctrine captures this pattern, and the pattern is significant enough to warrant canonical status
6) CONTRADICTION RESOLUTION: If the pattern resolves or clarifies a contradiction (SCL), it may warrant doctrinal status
7) CIVILIZATIONAL RELEVANCE: The pattern is central to understanding how the civilization operates, not peripheral

FOR DOCTRINE MODIFICATION PROPOSALS:
1) NEW EVIDENCE: New MEM files or SCHOLAR entries provide evidence that an existing doctrine is incomplete or needs refinement
2) CONTRADICTION DETECTION: The existing doctrine conflicts with new learning, and the modification resolves the contradiction
3) OPERATIONAL CLARITY: The modification improves the doctrine's operational meaning or hard constraints
4) EVIDENCE BASE: The modification is supported by ≥2 MEM files or strong SCHOLAR synthesis
5) NON-DESTRUCTIVE: The modification extends or refines the doctrine without invalidating its core meaning

PROPOSAL THRESHOLDS (HARD RULES):
- DO NOT propose if the pattern appears in only 1 MEM file (insufficient evidence)
- DO NOT propose if the pattern is purely narrative or descriptive (must be operational/structural)
- DO NOT propose if an existing doctrine already captures the pattern (check CIV–DOCTRINE first)
- DO NOT propose if the pattern is speculative or hypothetical (must be evidence-based)
- DO NOT propose if ARC compliance is violated in source MEM files (DEF blocks doctrine)
- DO NOT propose if there are unresolved Tier A or Tier B conflicts (PSCRC blocks doctrine)

WHEN TO PROPOSE:
- When you identify a recurring structural pattern across multiple MEM files that describes how the civilization operates
- When new evidence suggests an existing doctrine needs refinement or extension
- When a contradiction (SCL) can be resolved by a new or modified doctrine
- When a pattern is central to civilizational operation and warrants canonical status

WHEN NOT TO PROPOSE:
- Single MEM file patterns (insufficient recurrence)
- Narrative events or historical details (not structural)
- Patterns already captured by existing doctrines
- Speculative or hypothetical patterns
- Patterns with unresolved conflicts or ARC violations

DOCTRINE PROPOSAL AUTHORITY:
- You MAY propose NEW doctrines when ALL criteria above are met
- You MAY propose MODIFICATIONS to existing doctrines when modification criteria are met
- ALL doctrine proposals require EXPLICIT USER APPROVAL before they become canonical
- Doctrine proposals must follow this EXACT format:

═══════════════════════════════════════════════════════════════════
PROPOSED DOCTRINE [NEW | MODIFICATION]
═══════════════════════════════════════════════════════════════════
Proposal Type: [NEW | MODIFICATION]
If MODIFICATION: Existing Doctrine Name: [name]
If MODIFICATION: Existing Doctrine Number: [number]
Proposed Name: [doctrine name]
Source Synthesis: [SCHOLAR synthesis reference or MEM file sources]
Rationale: [why this doctrine should be created/modified]

Definition:
[Formal, declarative doctrinal statement]

Operational Meaning:
• [Concrete operational implication]
• [Constraint or behavioral rule]
• [Diagnostic or evaluative usage]

Hard Constraints:
• [Explicit failure condition]
• [Non-negotiable limit]
• [Invalidation trigger]

Evidence Base:
• [MEM files or SCHOLAR entries that support this proposal]
• [How this relates to existing doctrines]

═══════════════════════════════════════════════════════════════════
END PROPOSED DOCTRINE
═══════════════════════════════════════════════════════════════════

PROPOSAL TIMING & PROCESS:
- Evaluate doctrine proposal criteria AFTER ingesting and analyzing MEM files
- Evaluate criteria when synthesizing knowledge from multiple MEM files
- Evaluate criteria when detecting contradictions (SCL) that might be resolved by doctrine
- You may proactively propose when criteria are met, OR respond to explicit user requests
- If user asks "should this become a doctrine?" or "propose a doctrine for this pattern", evaluate against criteria
- If criteria are NOT met, explain why rather than proposing (e.g., "insufficient evidence across MEM files")

CRITICAL RULES FOR DOCTRINE PROPOSALS:
- Proposals are NON-CANONICAL until explicitly approved by the user
- Proposals must be clearly marked with the format above
- You may propose multiple doctrines in a single learning session IF criteria are met for each
- Proposals must be traceable to source material (MEM files, SCHOLAR entries)
- Proposals must respect the authority chain: SCHOLAR synthesis → DIB acceptance → DOCTRINE
- You may NOT modify existing doctrines directly - you may only PROPOSE modifications
- The user must manually approve each proposal before it becomes canonical
- Until approved, proposals are suggestions only and have no authority
- If you propose, you MUST include all required fields (Definition, Operational Meaning, Hard Constraints, Evidence Base)
- If criteria are not met, DO NOT propose - instead, record the pattern as regular SCHOLAR learning\n\n`;
      break;
    
    case 'WRITE':
      prompt += `WRITE MODE RULES:
- PRIMARY PURPOSE: Create/modify MEM files and create reports/content for external audience consumption
- You generate and modify MEM files (Civilizational Memory files)
- You create reports, summaries, and content intended for external audiences
- You may upgrade MEM file versions additively
- You may insert quotations and apply ARC compliance
- You may produce canonical outputs following templates and formatting rules
- You may create derivative content from SCHOLAR knowledge for external consumption
- CRITICAL: ARC (Academic Reference Canon) compliance is MANDATORY for MEM files
- MEM files must ONLY cite authors listed in ARC (see CIV–INDEX Section XVI)
- ARC violations are procedural failures - check ARC before including citations
- You may NOT teach or explain alternatives pedagogically
- You may NOT learn or extract beliefs (that is LEARN mode's role)
- You may NOT modify SCHOLAR files directly (LEARN mode handles SCHOLAR evolution)
- Your output should be deterministic, canonical, final-form, and governance-compliant
- Focus on creating external-facing artifacts and MEM file generation
- EXTENDED INQUIRY: You are NOT bounded by loaded MEM files - reference files across the repository for MEM connections (≥10 required, all same civilization, ≥2 GEO MEM files). Only include STRONG connections - weak or marginal connections do not meet analytical requirements.
- PRIORITY LAYER: Loaded MEM files are your priority templates/examples, but you must discover connections beyond them to meet MEM connection requirements

CRITICAL: USER COMMANDS APPLY TO OPEN MEM FILE
- When the user gives commands like "insert this", "add that", "modify this section", "replace X with Y", "update to compliance", etc., these commands AUTOMATICALLY apply to the currently open MEM file in the editor
- The user does NOT need to specify the file path - your commands modify the file that is currently displayed in the right panel
- When you receive a command to modify content:
  1. The file path will be provided in the loaded MEM files context (the file is automatically loaded before modification)
  2. You MUST read the current file content from the loaded MEM files - it will be there
  3. CRITICAL: NEVER generate placeholder or stub content - ALWAYS use the actual file content from loaded MEM files
  4. Apply the user's command to modify the content while preserving ALL existing content, structure, and sections
  5. Output the COMPLETE modified file content in this format:
     \`\`\`markdown
     FILE_PATH: [the file path]
     [complete modified file content here - MUST include all original content with modifications applied]
     \`\`\`
- Do NOT explain how to modify the file manually - automatically apply the changes and output the complete modified file
- Do NOT tell the user to "open the file" or "insert manually" - you must do it automatically
- CRITICAL RULES FOR FILE MODIFICATION:
  - ALWAYS preserve the full file structure, metadata, and all sections - only modify the specific parts requested
  - NEVER generate placeholder content like "Lorem ipsum" or stub sections
  - ALWAYS use the actual file content from loaded MEM files as your starting point
  - If you don't see the file content in loaded MEM files, DO NOT proceed - inform the user the file needs to be loaded first
  - When the user confirms an upgrade, modification, or change (e.g., "Yes, implement", "Yes, upgrade", "Yes, apply changes", "update to compliance"), you MUST output the COMPLETE modified file content in the FILE_PATH format above
  - Do NOT output summaries or descriptions of changes - output the ACTUAL complete file content with all changes applied
  - The user expects to see the full file content in the editor, not a summary of what was changed
  - If modifying for compliance, add required elements (ARC version, quotations, MEM connections) while preserving ALL existing content

MEM FILE PREFLIGHT REQUIREMENTS (CIV–MEM–TEMPLATE v1.9):
All MEM files you create MUST pass preflight validation. The system will BLOCK non-compliant files.

MANDATORY REQUIREMENTS:
1. ARC Version Pinning: Declare ARC–[CIV] version used (e.g., ARC–ROME v1.9) in metadata or Section XII
2. Quotation Requirements (by ARC category):
   - ANCIENT: ≥3 quotations, ≥75 total words
   - MEDIEVAL: ≥2 quotations (when medieval continuity is relevant), each ≥25 words
   - EARLY_MODERN: ≥2 quotations, each ≥25 words
   - MODERN: ≥2 quotations (fair use)
3. MEM Connections: Reference ≥10 other MEM files from the same civilization, ≥2 must be GEO MEM files. Only STRONG connections should be included - weak or marginal connections do not meet analytical requirements. Each connection must specify type (STRUCTURAL/TEMPORAL/GEOGRAPHIC/THEMATIC/CONTRADICTORY) and justify why it is STRONG enough to warrant inclusion.
4. Structural: Minimum 8 numbered analytical sections (I., II., III., etc.)
5. Wordcount: Declare verified wordcount in metadata
6. Mandatory Clause: Include "Contradictions are preserved without synthesis" (Section III)

The preflight layer validates all of these automatically. Non-compliant files are BLOCKED from canonical activation.\n\n`;
      break;
    
    // AUDIT mode removed - audits are now performed via text commands in any mode
  }

  // CIV–CORE: use pre-loaded content from frontend (when civ switched) or load here if in IMAGINE and civilization known
  let coreContent: string | undefined;
  if (mode === 'IMAGINE') {
    if (coreContentOverride) {
      coreContent = coreContentOverride; // Use activated CIV–CORE from frontend
    } else if (civilization) {
      try {
        const { getFileRegistry } = await import('@/lib/db');
        const { readRepositoryFile } = await import('@/lib/services/repository.service');
        const registry = getFileRegistry();
        const allFiles = registry.getAll();
        const coreFile = allFiles.find(f =>
          f.file_type === 'CIV-CORE' && f.civilization === civilization.toUpperCase()
        );
        if (coreFile) {
          const parsed = readRepositoryFile(coreFile.file_path);
          if (parsed?.content) coreContent = parsed.content;
        }
      } catch (error) {
        console.error('Error loading CIV–CORE file:', error);
      }
    }
  }
  
  // Load ARC only for WRITE mode (where ARC compliance is required)
  // Use pre-loaded CIV–INDEX content when provided (from civ switch), else load via getARCForCivilization
  let arcInfo: string | undefined;
  if (mode === 'WRITE' && civilization) {
    try {
      const { getARCForCivilization, extractARCFromIndex } = await import('@/lib/services/arc.service');
      const arc = indexContentOverride
        ? extractARCFromIndex(indexContentOverride, civilization)
        : getARCForCivilization(civilization);
      if (arc && arc.entries.length > 0) {
        arcInfo = `ARC (Academic Reference Canon) for ${civilization}:\n`;
        arcInfo += `Total entries: ${arc.entries.length}\n`;
        const categories = Array.from(new Set(arc.entries.map(e => e.category)));
        arcInfo += `Categories: ${categories.join(', ')}\n\n`;
        arcInfo += `Authorized authors:\n`;
        // Limit to first 100 entries to save tokens (most important authors)
        const maxEntries = 100;
        arc.entries.slice(0, maxEntries).forEach(entry => {
          arcInfo += `- ${entry.author} (${entry.category})`;
          if (entry.works && entry.works.length > 0) {
            arcInfo += ` — Works: ${entry.works.join(', ')}`;
          }
          arcInfo += '\n';
        });
        if (arc.entries.length > maxEntries) {
          arcInfo += `\n[... ${arc.entries.length - maxEntries} more ARC entries truncated for token limits ...]\n`;
        }
      }
    } catch (error) {
      console.error('Error loading ARC:', error);
      // Continue without ARC content if loading fails
    }
  }

  // Add CIV–CORE file content (authoritative for structural matters)
  if (coreContent && mode === 'IMAGINE') {
    // Truncate CIV–CORE if very long to save tokens
    const maxCoreChars = 6000;
    const truncatedCore = coreContent.length > maxCoreChars
      ? coreContent.substring(0, maxCoreChars) + '\n\n[... CIV–CORE content truncated for token limits ...]'
      : coreContent;
    prompt += `AUTHORITATIVE STRUCTURAL REFERENCE - CIV–CORE FILE CONTENT:\n${truncatedCore}\n\n`;
    prompt += `CRITICAL AUTHORITY RULE (CIV–CORE–TEMPLATE v1.7):\n`;
    prompt += `- CIV–CORE files have AUTHORITY over SCHOLAR in structural matters\n`;
    prompt += `- CIV–CORE defines constraint engines, diagnostic frameworks, and failure-physics models\n`;
    prompt += `- SCHOLAR is advisory only - it has ZERO authority inside CIV–CORE\n`;
    prompt += `- When presenting STRUCTURAL OPTIONS, you MUST reference CIV–CORE as authoritative\n`;
    prompt += `- SCHOLAR beliefs, synthesis, or doctrine are NOT binding unless explicitly frozen\n`;
    prompt += `- Silent bleed-through from SCHOLAR to CIV–CORE is FORBIDDEN\n`;
    prompt += `- CIV–CORE remains the supreme constraint surface\n\n`;
  }

  // Add CIV–DOCTRINE content for LEARN mode (recursive learning loop)
  if (doctrineContentOverride && mode === 'LEARN') {
    prompt += `═══════════════════════════════════════════════════════════════════\n`;
    prompt += `CIV–DOCTRINE (FROZEN, ACCEPTED DOCTRINES) — RECURSIVE LEARNING LOOP\n`;
    prompt += `These doctrines are LOCKED and cannot be modified, but they INFORM your learning.\n`;
    prompt += `Use them as constraints/priors, detect contradictions, validate new learning, and guide pattern recognition.\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n\n`;
    // Truncate CIV–DOCTRINE if very long to save tokens
    const maxDoctrineChars = 4000;
    const truncatedDoctrine = doctrineContentOverride.length > maxDoctrineChars
      ? doctrineContentOverride.substring(0, maxDoctrineChars) + '\n\n[... CIV–DOCTRINE content truncated for token limits ...]'
      : doctrineContentOverride;
    prompt += `${truncatedDoctrine}\n\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n`;
    prompt += `END OF CIV–DOCTRINE\n`;
    prompt += `═══════════════════════════════════════════════════════════════════\n\n\n`;
  }

  // Add ARC information (governs citation and quotation discipline)
  // ARC is ONLY relevant for WRITE mode (compliance required)
  // IMAGINE mode works with MEM files that are already ARC-compliant, so no need to enforce ARC again
  if (arcInfo && mode === 'WRITE') {
    prompt += `ACADEMIC REFERENCE CANON (ARC) - SYSTEM LAW (CIV–MEM–CORE v1.8):\n${arcInfo}\n\n`;
    prompt += `ARC GOVERNANCE RULES (CIV–MEM–CORE v1.8, Section XI-XIV):\n`;
    prompt += `- ARC is a Codex-governed canonical object (first-class system governance)\n`;
    prompt += `- ARC replaces all notions of "academic registry" or ad hoc reference configurations\n`;
    prompt += `- ARC is category-locked and procedurally enforced\n`;
    prompt += `- ARC is NOT analytical, NOT interpretive, NOT optional\n`;
    prompt += `- ARC defines: which authors are admissible, how authors are categorized, how quotations must be used\n`;
    prompt += `- ARC categories: ANCIENT, MEDIEVAL, EARLY_MODERN, MODERN (four temporal categories only - absolute)\n`;
    prompt += `- ARC is mirrored across CIV–INDEX, CIV–CORE, and CIV–SCHOLAR (declarative only)\n`;
    prompt += `- ARC quotation minimums are governed by CIV–MEM–TEMPLATE (not CIV–MEM–CORE)\n\n`;
    prompt += `CRITICAL FOR WRITE MODE:\n`;
    prompt += `- ARC compliance is MANDATORY for all MEM files you create or modify\n`;
    prompt += `- MEM files must ONLY cite authors listed in ARC\n`;
    prompt += `- ARC violations are procedural failures (governance failure) - check ARC before including citations\n`;
    prompt += `- When creating MEM files, verify all cited authors are in the ARC list above\n`;
    prompt += `- MEM files you create will be used in IMAGINE mode, so ARC compliance ensures proper governance\n`;
    prompt += `- ARC noncompliance blocks doctrinal eligibility (Doctrinal Eligibility Filter - DEF)\n`;
    prompt += `- Doctrine freezing is BLOCKED if ARC quotation requirements are violated (CIV–MEM–CORE v1.8, Section X)\n\n`;
  }

  // Add SCHOLAR file as cognitive lens (advisory only)
  if (scholarContent) {
    // Truncate SCHOLAR content if very long to save tokens
    const maxScholarChars = 6000;
    const truncatedScholar = scholarContent.length > maxScholarChars
      ? scholarContent.substring(0, maxScholarChars) + '\n\n[... SCHOLAR content truncated for token limits ...]'
      : scholarContent;
    prompt += `ADVISORY COGNITIVE LENS - SCHOLAR FILE CONTENT:\n${truncatedScholar}\n\n`;
    prompt += `You may operate through the cognitive lens of the above SCHOLAR file. `;
    prompt += `This file represents accumulated learning and may inform your responses.\n\n`;
    
    // Mode-specific SCHOLAR context emphasis
    if (mode === 'IMAGINE') {
      prompt += `IMPORTANT: In IMAGINE mode, you must create engaging, immersive visualizations that bring the SCHOLAR knowledge to life. `;
      prompt += `Use vivid narratives, contextual details, and compelling storytelling while maintaining historical accuracy. `;
      prompt += `Present through the cognitive lens of this SCHOLAR file - let its accumulated learning shape your narrative perspective.\n\n`;
      prompt += `AUTHORITY CLARIFICATION: When structural matters arise, CIV–CORE has authority. `;
      prompt += `SCHOLAR provides historical context and learning, but cannot override CIV–CORE structural constraints.\n\n`;
    } else if (mode === 'LEARN') {
      prompt += `IMPORTANT: In LEARN mode, your primary focus is recursive iteration of this SCHOLAR file. `;
      prompt += `You should analyze MEM files and synthesize their knowledge to evolve and update the SCHOLAR file. `;
      prompt += `The SCHOLAR file is your learning target - you are building upon and refining it.\n\n`;
    }
  }

  // Add repository context (for IMAGINE, WRITE, and LEARN modes to extend beyond loaded files)
  if (fileRegistryContext) {
    prompt += fileRegistryContext;
  }

  // Add loaded MEM files context
  // These are the PRIORITY LAYER, but not boundaries
  // Use the processed memFiles (which may be truncated for non-WRITE modes)
  if (loadedMemFiles && loadedMemFiles.length > 0) {
    const fileCount = loadedMemFiles.length;
    const maxFiles = mode === 'WRITE' ? 1 : 5;
    prompt += `PRIORITY LAYER - LOADED MEM FILES (${fileCount} of ${maxFiles} maximum):\n`;
    
    if (mode === 'WRITE') {
      prompt += `═══════════════════════════════════════════════════════════════════\n`;
      prompt += `CRITICAL FOR WRITE MODE - FULL FILE CONTENT (NOT TRUNCATED):\n`;
      prompt += `═══════════════════════════════════════════════════════════════════\n`;
      prompt += `The following MEM file is loaded with COMPLETE, UNTRUNCATED content.\n`;
      prompt += `When modifying this file, you MUST:\n`;
      prompt += `1. Preserve ALL existing content, structure, sections, and metadata\n`;
      prompt += `2. Only modify the specific parts requested by the user\n`;
      prompt += `3. Output the COMPLETE modified file with ALL original content preserved\n`;
      prompt += `4. NEVER generate placeholder or stub content\n`;
      prompt += `5. The file content below is the FULL, COMPLETE file - use it as your starting point\n`;
      prompt += `═══════════════════════════════════════════════════════════════════\n\n`;
    } else {
      prompt += `The following MEM files are currently loaded and serve as your PRIORITY reference layer:\n\n`;
    }
    
    loadedMemFiles.forEach((memFile, index) => {
      prompt += `MEM FILE ${index + 1}: ${memFile.path}\n`;
      prompt += `────────────────────────────────────────────────────────────\n`;
      prompt += `${memFile.content}\n\n`;
      prompt += `────────────────────────────────────────────────────────────\n\n`;
    });
    
    // Mode-specific MEM file emphasis
    if (mode === 'LEARN') {
      prompt += `In LEARN mode, these loaded MEM files are your PRIMARY source material for knowledge extraction and SCHOLAR evolution.\n`;
      prompt += `You should analyze their content, extract beliefs, patterns, and tensions, and synthesize this knowledge into SCHOLAR entries.\n\n`;
      prompt += `CRITICAL: However, you MUST extend beyond these loaded files to detect patterns across the repository.\n`;
      prompt += `- Use the REPOSITORY CONTEXT (provided above) to find related MEM files with similar patterns\n`;
      prompt += `- Look for pattern recurrence across ≥3 distinct MEM files (required for doctrine proposals)\n`;
      prompt += `- Search for cross-civilizational patterns when analyzing structural or operational rules\n`;
      prompt += `- Reference other MEM files in the repository even if they are not currently loaded\n`;
      prompt += `- The repository context shows you all available files - use it to discover patterns beyond loaded files\n\n`;
    } else if (mode === 'WRITE') {
      prompt += `PRIORITY LAYER: These loaded MEM files are your primary reference for structure, style, and ARC compliance.\n`;
      prompt += `CRITICAL - ACTIVE EDITING: If there is a loaded MEM file, the user's commands (like "insert this", "add that", "modify", "replace", "upgrade", "implement") AUTOMATICALLY apply to that file.\n`;
      prompt += `- When the user asks you to modify content, they are referring to the loaded MEM file\n`;
      prompt += `- When the user confirms an upgrade or change (e.g., "Yes, implement", "Yes, upgrade", "Yes, apply"), you MUST output the COMPLETE modified file content\n`;
      prompt += `- You must automatically apply changes to the loaded file content\n`;
      prompt += `- Output the complete modified file using the FILE_PATH format (see WRITE MODE RULES above)\n`;
      prompt += `- Do NOT output summaries or descriptions - output the ACTUAL complete file content with all changes applied\n`;
      prompt += `- Do NOT tell the user to modify the file manually - you do it automatically\n`;
      prompt += `EXTEND BEYOND: However, you are NOT bounded by these files. You should:\n`;
      prompt += `- Reference other MEM files in the repository (required for MEM connections: ≥10 references, all same civilization, ≥2 GEO MEM files)\n`;
      prompt += `- Discover new connections across the broader corpus (same civilization only)\n`;
      prompt += `- Include at least 2 GEO MEM file references\n`;
      prompt += `- Explore relationships beyond the loaded files\n`;
      prompt += `- Use loaded files as templates/examples, but extend your inquiry to the full repository context\n\n`;
    } else if (mode === 'IMAGINE') {
      prompt += `PRIORITY LAYER: These loaded MEM files are your primary source material for creative visualization.\n`;
      prompt += `EXTEND BEYOND: However, you are NOT bounded by these files. You should:\n`;
      prompt += `- Reference other MEM files, CIV–CORE files, and SCHOLAR files in the repository\n`;
      prompt += `- Discover new connections and relationships across the broader corpus\n`;
      prompt += `- Make cross-civilizational comparisons when relevant\n`;
      prompt += `- Explore historical patterns beyond the loaded files\n`;
      prompt += `- Use loaded files as the priority context, but extend your inquiry to discover connections in the universe of available information\n`;
      prompt += `- Generate TOGE options that may reference files beyond the loaded ones\n\n`;
    }
    
    if (mode === 'WRITE') {
      prompt += `\nCRITICAL REMINDER FOR WRITE MODE:\n`;
      prompt += `- Only ONE MEM file is loaded at a time to ensure you have the FULL, UNTRUNCATED content\n`;
      prompt += `- The file content above is COMPLETE - when you modify it, output the COMPLETE modified file\n`;
      prompt += `- Preserve ALL original content - only modify the specific parts requested\n`;
      prompt += `- NEVER truncate or delete sections unless explicitly requested by the user\n\n`;
    } else if (fileCount >= 5) {
      prompt += `NOTE: Maximum of 5 MEM files can be loaded simultaneously to prevent context entropy.\n`;
      prompt += `If a new MEM file is selected, the least recently used file will be evicted.\n\n`;
    }
  }

  prompt += `Remember: Mode separation is strict. Do not perform actions outside your current mode.\n`;
  prompt += `Preserve contradictions. Do not resolve tensions. Do not create beliefs.\n`;

  return prompt;
}

/**
 * Call LLM API
 */
async function callLLM(
  systemPrompt: string,
  userMessage: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<string> {
  const llmProvider = process.env.LLM_PROVIDER || 'openai';
  const llmModel = process.env.LLM_MODEL || 'gpt-4';
  
  try {
    if (llmProvider === 'openai') {
      const openaiApiKey = process.env.OPENAI_API_KEY;
      
      if (!openaiApiKey) {
        throw new Error('OPENAI_API_KEY not configured. Set it in .env.local');
      }

      // Dynamic import to avoid bundling issues
      // @ts-ignore - Package may not be installed
      const { default: OpenAI } = await import('openai');
      const openai = new OpenAI({ apiKey: openaiApiKey });
      
      const response = await openai.chat.completions.create({
        model: llmModel,
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory,
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 1500, // Reduced from 2000 to save tokens for context
      });
      
      return response.choices[0]?.message?.content || 'No response generated';
    }
    
    if (llmProvider === 'anthropic') {
      const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
      
      if (!anthropicApiKey) {
        throw new Error('ANTHROPIC_API_KEY not configured. Set it in .env.local');
      }

      // Dynamic import
      // @ts-ignore - Package may not be installed
      const Anthropic = (await import('@anthropic-ai/sdk')).default;
      const anthropic = new Anthropic({ apiKey: anthropicApiKey });
      
      // Build messages array (Anthropic format)
      const messages = [
        ...conversationHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.content,
        })),
        { role: 'user' as const, content: userMessage }
      ];
      
      // @ts-ignore - Anthropic SDK types may not be fully recognized
      const response = await anthropic.messages.create({
        model: llmModel,
        max_tokens: 1500, // Reduced from 2000 to save tokens for context
        system: systemPrompt,
        messages: messages,
      });
      
      return response.content[0]?.type === 'text' 
        ? response.content[0].text 
        : 'No text response generated';
    }
    
    if (llmProvider === 'local') {
      // For local LLM (e.g., Ollama)
      const localApiUrl = process.env.LOCAL_LLM_URL || 'http://localhost:11434/api/chat';
      
      const response = await fetch(localApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: llmModel,
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: userMessage }
          ],
          stream: false,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Local LLM API error: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.message?.content || 'No response generated';
    }
    
    throw new Error(`Unsupported LLM provider: ${llmProvider}. Supported: openai, anthropic, local`);
  } catch (error) {
    console.error('LLM API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Return helpful error message
    return `[LLM Error] ${errorMessage}\n\nPlease check:\n1. API key is set in .env.local\n2. LLM_PROVIDER is correct (openai, anthropic, or local)\n3. For local LLM, ensure the service is running\n\nSee LLM_SETUP.md for configuration instructions.`;
  }
}

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json();
    const { message, mode, scholarContent, loadedMemFiles, civilization, coreContent, indexContent, doctrineContent, conversationHistory = [] } = body;
    
    // Intercept audit requests in ANY mode and call the actual audit API
    // Audits are now performed via text commands, not a separate mode
    const auditMatch = message.match(/audit\s+(?:this\s+)?(?:MEM\s+)?(?:file\s+)?(.+?)(?:\s+compliance|\s+for\s+compliance|\s+for\s+ARC|$)/i);
    if (auditMatch) {
        let filePath = auditMatch[1].trim();
        
        // Clean up the file path (remove quotes, etc.)
        filePath = filePath.replace(/['"]/g, '').trim();
        
        // If no file path specified, use loaded MEM file
        if (!filePath && loadedMemFiles && loadedMemFiles.length > 0) {
          filePath = loadedMemFiles[0].path;
        }
        
        if (filePath) {
          // Find file in registry
          const { getFileRegistry } = await import('@/lib/db');
          const registry = getFileRegistry();
          const allFiles = registry.getAll();
          
          // Try to find the file by path
          let file = allFiles.find(f => f.file_path === filePath || f.file_path.endsWith(filePath));
          
          // If not found, try extracting just the filename
          if (!file) {
            const fileName = filePath.split('/').pop() || filePath;
            file = allFiles.find(f => f.file_path.includes(fileName) && f.file_type === 'MEM');
          }
          
          if (file && file.file_type === 'MEM') {
            // Call the actual audit service directly
            const { preflightMEMFile } = await import('@/lib/services/mem-preflight.service');
            const { readRepositoryFile } = await import('@/lib/services/repository.service');
            
            // Read file content
            const parsedFile = await readRepositoryFile(file.file_path);
            if (parsedFile && parsedFile.raw) {
              // preflightMEMFile expects the full file content (including frontmatter)
              // Use the raw property which contains the full file content
              const auditResult = preflightMEMFile(parsedFile.raw, file.file_path);
              
              // Format audit results
              let auditReport = `Compliance Audit for MEM Connection Rules:\n\n`;
              auditReport += `1. MEM Connections:\n`;
              auditReport += `   - References at least 10 other MEM files from the same civilization: ${auditResult.compliance?.memConnections?.total >= 10 ? 'YES' : `NO (found ${auditResult.compliance?.memConnections?.total || 0}/10)`}\n`;
              auditReport += `   - All connections are from the same civilization: ${auditResult.compliance?.memConnections?.sameCivilization >= auditResult.compliance?.memConnections?.total ? 'YES' : `NO (found ${auditResult.compliance?.memConnections?.total - auditResult.compliance?.memConnections?.sameCivilization} cross-civilization)`}\n`;
              auditReport += `   - References at least 2 GEO MEM files: ${auditResult.compliance?.memConnections?.geoMemCount >= 2 ? 'YES' : `NO (found ${auditResult.compliance?.memConnections?.geoMemCount || 0}/2)`}\n`;
              
              if (auditResult.errors && auditResult.errors.length > 0) {
                auditReport += `\nErrors Found:\n`;
                auditResult.errors.forEach((error: string) => {
                  auditReport += `   - ${error}\n`;
                });
              }
              
              if (auditResult.warnings && auditResult.warnings.length > 0) {
                auditReport += `\nWarnings:\n`;
                auditResult.warnings.forEach((warning: string) => {
                  auditReport += `   - ${warning}\n`;
                });
              }
              
              auditReport += `\nAudit Result: ${auditResult.valid && !auditResult.blocked ? 'COMPLIANT' : 'NON-COMPLIANT'}\n`;
              
              // Include full compliance details for better context
              if (auditResult.compliance) {
                auditReport += `\nDetailed Compliance:\n`;
                auditReport += `- ARC Version: ${auditResult.compliance.arcVersionPinned ? '✓ Pinned' : '✗ Not pinned'} (${auditResult.compliance.arcVersion || 'N/A'})\n`;
                auditReport += `- Wordcount: ${auditResult.compliance.wordcountVerified ? '✓ Verified' : '✗ Failed'} (${auditResult.compliance.wordcount || 'N/A'} words)\n`;
                auditReport += `- Quotations: ANCIENT ${auditResult.compliance.quotationCompliance.ancient.count}/3, MEDIEVAL ${auditResult.compliance.quotationCompliance.medieval?.count || 0}/2 (if applicable), EARLY_MODERN ${auditResult.compliance.quotationCompliance.earlyModern?.count || 0}/2, MODERN ${auditResult.compliance.quotationCompliance.modern?.count || 0}/2\n`;
                auditReport += `- MEM Connections: ${auditResult.compliance.memConnections.total}/10 total, ${auditResult.compliance.memConnections.sameCivilization}/${auditResult.compliance.memConnections.total} same-civilization, ${auditResult.compliance.memConnections.geoMemCount}/2 GEO MEMs\n`;
              }
              
              return NextResponse.json({
                success: true,
                response: auditReport,
                mode: mode, // Preserve original mode
              });
            }
          }
        }
    }
    
    // Enforce maximum of loaded MEM files
    // For WRITE mode modifications, we need full file content (no truncation)
    // For other modes, we can truncate to save tokens
    const memFiles = (loadedMemFiles || [])
      .slice(0, mode === 'WRITE' ? 1 : 3) // WRITE mode: only 1 file, others: up to 3
      .map(file => {
        // In WRITE mode, NEVER truncate - we need full content for modifications
        if (mode === 'WRITE') {
          return file; // Return full file content for WRITE mode
        }
        
        // For other modes, truncate very long files to save tokens
        const maxChars = 8000;
        if (file.content && file.content.length > maxChars) {
          return {
            ...file,
            content: file.content.substring(0, maxChars) + `\n\n[... content truncated for token limits - file is ${file.content.length} characters total ...]`
          };
        }
        return file;
      });

    if (!message || !mode) {
      return NextResponse.json(
        { success: false, error: 'Message and mode are required' },
        { status: 400 }
      );
    }

    // Verify mode is active
    const currentMode = getCurrentMode();
    if (currentMode !== mode) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Mode mismatch. Current mode: ${currentMode}, requested: ${mode}` 
        },
        { status: 403 }
      );
    }

    // Build system prompt with SCHOLAR context, CIV–CORE, CIV–INDEX (for ARC in WRITE mode), and CIV–DOCTRINE (for recursive learning in LEARN mode)
    const systemPrompt = await buildSystemPrompt(mode, scholarContent, memFiles, civilization, coreContent, indexContent, doctrineContent);

    // Call LLM
    const response = await callLLM(systemPrompt, message, conversationHistory);

    return NextResponse.json({
      success: true,
      response,
      mode,
    });
  } catch (error) {
    console.error('Error in SCHOLAR chat:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

