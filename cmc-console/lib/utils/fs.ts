/**
 * File system utilities
 */

import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';

/**
 * Ensure directory exists, creating it if necessary
 */
export function ensureDirectoryExists(dirPath: string): void {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Get absolute path relative to project root
 */
export function getProjectPath(relativePath: string): string {
  return join(process.cwd(), relativePath);
}

