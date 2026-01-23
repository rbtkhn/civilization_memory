/**
 * Helper functions to detect and extract MEM file content from LLM responses
 * Supports multiple formats:
 * 1. Explicit FILE_PATH format: ```markdown\nFILE_PATH: path/to/file.md\n...content...\n```
 * 2. Code block with YAML front matter
 * 3. Direct YAML front matter without code blocks
 */

export interface FileContentResult {
  filePath: string;
  content: string;
}

export interface ProcessFileContentOptions {
  response: string;
  loadedFiles: Array<{ path: string }>;
  isFileLocked: boolean;
  onFileContentUpdate: (filePath: string, content: string) => void;
  onError: (message: string) => void;
  onUnlockRequest?: () => void;
  onShowUnlockMessage?: (message: string, onUnlock: () => void) => void;
}

export interface ProcessFileContentResult {
  detected: boolean;
  locked: boolean;
  filePath?: string;
}

/**
 * Core detection function - extracts file content from LLM response
 */
export function detectFileContent(
  response: string,
  loadedFiles: Array<{ path: string }>
): FileContentResult | null {
  // Try explicit FILE_PATH format first
  const explicitMatch = response.match(/```(?:markdown|md)?\s*\nFILE_PATH:\s*([^\n]+)\n([\s\S]*?)```/i);
  if (explicitMatch) {
    const filePath = explicitMatch[1].trim();
    const content = explicitMatch[2].trim();
    if (filePath && content) {
      return { filePath, content };
    }
  }

  // If no explicit format and no loaded files, can't determine file path
  if (loadedFiles.length === 0) {
    return null;
  }

  const defaultFilePath = loadedFiles[0].path;

  // Try code block with YAML front matter
  const yamlBlockMatch = response.match(/```(?:markdown|md)?\s*\n(---[\s\S]*?---[\s\S]*?)```/i);
  if (yamlBlockMatch) {
    const potentialContent = yamlBlockMatch[1].trim();
    if (potentialContent.includes('---') && potentialContent.length > 100) {
      return { filePath: defaultFilePath, content: potentialContent };
    }
  }

  // Try direct YAML front matter (no code block markers)
  const directYamlMatch = response.match(/^(---[\s\S]*?---[\s\S]*)$/);
  if (directYamlMatch && directYamlMatch[1].includes('---')) {
    const directContent = directYamlMatch[1].trim();
    if (directContent.length > 100) {
      return { filePath: defaultFilePath, content: directContent };
    }
  }

  return null;
}

/**
 * High-level function that processes file content detection, lock checking, and updates
 * Encapsulates the entire workflow: detect -> check lock -> update or error
 * This makes the logic easier to test and reuse
 */
export function processDetectedFileContent(
  options: ProcessFileContentOptions
): ProcessFileContentResult {
  const { response, loadedFiles, isFileLocked, onFileContentUpdate, onError } = options;

  // Detect file content in response
  const detectedFile = detectFileContent(response, loadedFiles);

  if (!detectedFile) {
    return { detected: false, locked: false };
  }

  // Check if file is locked
  if (isFileLocked) {
    const unlockMessage = `⚠️ The MEM file is currently locked (read-only) and must be unlocked to implement changes. Would you like to unlock it now?`;
    
    if (options.onShowUnlockMessage && options.onUnlockRequest) {
      // Show message with unlock option
      options.onShowUnlockMessage(unlockMessage, options.onUnlockRequest);
    } else {
      // Fallback to error message if callbacks not provided
      onError(unlockMessage + '\n\nPlease click the "🔓 Unlock" button in the right panel to unlock the file.');
    }
    
    return { detected: true, locked: true, filePath: detectedFile.filePath };
  }

  // File is not locked, proceed with update
  onFileContentUpdate(detectedFile.filePath, detectedFile.content);
  return { detected: true, locked: false, filePath: detectedFile.filePath };
}
