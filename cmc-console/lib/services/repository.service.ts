/**
 * Repository Service
 * Handles file system scanning and Git repository operations
 */

import { readdirSync, statSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import simpleGit from 'simple-git';
import { ParsedFile } from '@/types';
import { parseFile } from './parser.service';

const GIT_REPO_PATH = process.env.GIT_REPO_PATH || join(process.cwd(), '..', 'civilization_memory');
const FILE_EXTENSIONS = ['.md'];

export interface RepositoryScanResult {
  files: ParsedFile[];
  scannedAt: number;
  totalFiles: number;
}

/**
 * Recursively scan directory for markdown files
 */
export function scanDirectory(dirPath: string, basePath: string = dirPath): ParsedFile[] {
  const files: ParsedFile[] = [];
  
  try {
    const entries = readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      const relativePath = relative(basePath, fullPath);
      
      if (entry.isDirectory()) {
        // Skip hidden directories and node_modules
        if (entry.name.startsWith('.') || entry.name === 'node_modules') {
          continue;
        }
        files.push(...scanDirectory(fullPath, basePath));
      } else if (entry.isFile()) {
        // Check if file has markdown extension
        const ext = entry.name.substring(entry.name.lastIndexOf('.'));
        if (FILE_EXTENSIONS.includes(ext)) {
          try {
            const content = readFileSync(fullPath, 'utf-8');
            const parsed = parseFile(relativePath, content);
            files.push(parsed);
          } catch (error) {
            console.error(`Error reading file ${fullPath}:`, error);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
  }
  
  return files;
}

/**
 * Scan the repository and return all parsed files
 */
export async function scanRepository(): Promise<RepositoryScanResult> {
  const files = scanDirectory(GIT_REPO_PATH, GIT_REPO_PATH);
  
  return {
    files,
    scannedAt: Date.now(),
    totalFiles: files.length,
  };
}

/**
 * Get Git repository information
 */
export async function getGitInfo() {
  try {
    const git = simpleGit(GIT_REPO_PATH);
    const status = await git.status();
    const log = await git.log({ maxCount: 1 });
    
    return {
      branch: status.current || 'unknown',
      isRepo: true,
      lastCommit: log.latest?.hash || null,
      lastCommitMessage: log.latest?.message || null,
    };
  } catch (error) {
    return {
      branch: null,
      isRepo: false,
      lastCommit: null,
      lastCommitMessage: null,
    };
  }
}

/**
 * Get file stats (last modified time)
 */
export function getFileStats(filePath: string): { mtime: number; size: number } | null {
  try {
    const fullPath = join(GIT_REPO_PATH, filePath);
    const stats = statSync(fullPath);
    return {
      mtime: Math.floor(stats.mtimeMs / 1000), // Unix timestamp
      size: stats.size,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Read a single file from the repository
 */
export function readRepositoryFile(filePath: string): ParsedFile | null {
  try {
    const fullPath = join(GIT_REPO_PATH, filePath);
    const content = readFileSync(fullPath, 'utf-8');
    return parseFile(filePath, content);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

export function getRepositoryPath(): string {
  return GIT_REPO_PATH;
}

