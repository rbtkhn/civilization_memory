/**
 * Git Service
 * Handles Git operations for committing and pushing files
 */

import simpleGit, { SimpleGit } from 'simple-git';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { getRepositoryPath } from './repository.service';

export interface GitCommitOptions {
  filePath: string;
  content: string;
  message: string;
  author?: {
    name: string;
    email: string;
  };
}

export interface GitDiff {
  filePath: string;
  diff: string;
  status: 'created' | 'modified' | 'deleted';
}

/**
 * Get Git instance for the repository
 */
function getGit(): SimpleGit {
  const repoPath = getRepositoryPath();
  return simpleGit(repoPath);
}

/**
 * Check if repository is clean (no uncommitted changes)
 */
export async function isRepositoryClean(): Promise<boolean> {
  try {
    const git = getGit();
    const status = await git.status();
    return status.isClean();
  } catch (error) {
    console.error('Error checking repository status:', error);
    return false;
  }
}

/**
 * Get diff for a file (before writing)
 */
export async function getFileDiff(filePath: string, newContent: string): Promise<GitDiff | null> {
  try {
    const repoPath = getRepositoryPath();
    const fullPath = join(repoPath, filePath);
    
    let status: 'created' | 'modified' | 'deleted' = 'created';
    let oldContent = '';
    
    // Check if file exists
    if (existsSync(fullPath)) {
      status = 'modified';
      oldContent = readFileSync(fullPath, 'utf-8');
    }
    
    // Simple diff calculation
    let diff = '';
    if (status === 'created') {
      diff = `New file: ${filePath}\n\nContent preview (first 500 chars):\n${newContent.substring(0, 500)}${newContent.length > 500 ? '...' : ''}`;
    } else {
      const oldLines = oldContent.split('\n');
      const newLines = newContent.split('\n');
      const diffLines: string[] = [];
      
      // Simple line-by-line diff
      const maxLines = Math.max(oldLines.length, newLines.length);
      for (let i = 0; i < maxLines && i < 100; i++) { // Limit to first 100 lines for display
        if (i >= oldLines.length) {
          diffLines.push(`+${newLines[i]}`);
        } else if (i >= newLines.length) {
          diffLines.push(`-${oldLines[i]}`);
        } else if (oldLines[i] !== newLines[i]) {
          diffLines.push(`-${oldLines[i]}`);
          diffLines.push(`+${newLines[i]}`);
        } else {
          diffLines.push(` ${oldLines[i]}`);
        }
      }
      
      if (maxLines > 100) {
        diffLines.push(`\n... (${maxLines - 100} more lines)`);
      }
      
      diff = `Modified file: ${filePath}\n\nLine changes:\n${diffLines.join('\n')}`;
    }
    
    return {
      filePath,
      diff,
      status,
    };
  } catch (error) {
    console.error('Error getting file diff:', error);
    return null;
  }
}

/**
 * Write file to repository (without committing)
 */
export function writeFileToRepository(filePath: string, content: string): void {
  const repoPath = getRepositoryPath();
  const fullPath = join(repoPath, filePath);
  
  // Ensure directory exists
  const { dirname } = require('path');
  const { mkdirSync } = require('fs');
  const dir = dirname(fullPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  writeFileSync(fullPath, content, 'utf-8');
}

/**
 * Stage and commit a file
 */
export async function commitFile(
  filePath: string,
  message: string,
  author?: { name: string; email: string }
): Promise<{ success: boolean; commitHash?: string; error?: string }> {
  try {
    const git = getGit();
    
    // Stage the file
    await git.add(filePath);
    
    // Configure author if provided
    if (author) {
      await git.addConfig('user.name', author.name);
      await git.addConfig('user.email', author.email);
    }
    
    // Commit
    const commit = await git.commit(message);
    
    return {
      success: true,
      commitHash: commit.commit,
    };
  } catch (error) {
    console.error('Error committing file:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Push changes to remote repository
 */
export async function pushToRemote(
  branch: string = 'main'
): Promise<{ success: boolean; error?: string }> {
  try {
    const git = getGit();
    await git.push('origin', branch);
    
    return { success: true };
  } catch (error) {
    console.error('Error pushing to remote:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get current branch
 */
export async function getCurrentBranch(): Promise<string> {
  try {
    const git = getGit();
    const status = await git.status();
    return status.current || 'main';
  } catch (error) {
    console.error('Error getting current branch:', error);
    return 'main';
  }
}

/**
 * Check if file exists in repository
 */
export function fileExistsInRepository(filePath: string): boolean {
  const repoPath = getRepositoryPath();
  const fullPath = join(repoPath, filePath);
  return existsSync(fullPath);
}

