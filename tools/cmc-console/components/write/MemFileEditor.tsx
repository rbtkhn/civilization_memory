'use client';

import { useState, useCallback, useEffect, useImperativeHandle, forwardRef, useMemo } from 'react';

interface MemFileEditorProps {
  onSave: (filePath: string, content: string, options: {
    autoCommit: boolean;
    autoPush: boolean;
    commitMessage?: string;
  }) => Promise<void>;
  onContentChange?: (filePath: string, content: string) => void;
  initialFilePath?: string;
  initialContent?: string;
  loadedMemFiles?: Array<{ path: string; content: string; lastUsed: number }>;
  onLoadMemFile?: (filePath: string, fileId: number) => Promise<void>;
  civilization?: string | null;
  allFiles?: Array<{ id: number; file_path: string; file_type: string; civilization?: string | null }>;
  onLockStateChange?: (isLocked: boolean) => void;
}

export interface MemFileEditorHandle {
  unlock: () => void;
  lock: () => void;
}

const MemFileEditor = forwardRef<MemFileEditorHandle, MemFileEditorProps>(function MemFileEditor({ onSave, onContentChange, initialFilePath = '', initialContent = '', loadedMemFiles = [], onLoadMemFile, civilization, allFiles = [], onLockStateChange }, ref) {
  const [filePath, setFilePath] = useState(initialFilePath);
  const [content, setContent] = useState(initialContent);
  const [previewEditable, setPreviewEditable] = useState(false);
  const [originalContent, setOriginalContent] = useState(initialContent); // Track original content for restore
  const [showMemDropdown, setShowMemDropdown] = useState(false);
  const [isSearchingMem, setIsSearchingMem] = useState(false); // Track if user is searching (filtering) vs just viewing

  // Expose unlock/lock methods via ref
  useImperativeHandle(ref, () => ({
    unlock: () => {
      setPreviewEditable(true);
    },
    lock: () => {
      setPreviewEditable(false);
    },
  }), []);

  // Sync with prop changes (when LLM updates content)
  useEffect(() => {
    if (initialFilePath !== filePath) {
      setFilePath(initialFilePath);
      // When file path changes, reset original content
      setOriginalContent(initialContent);
    }
    if (initialContent !== content) {
      setContent(initialContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFilePath, initialContent]);

  // Update original content when file is loaded or changed
  useEffect(() => {
    if (initialFilePath && initialContent) {
      setOriginalContent(initialContent);
    }
  }, [initialFilePath]); // Only when file path changes, not content

  // Sync preview with loaded MEM file (only if file path matches)
  // This ensures that when a file is loaded into LLM context, the editor reflects it
  useEffect(() => {
    if (loadedMemFiles.length > 0) {
      const loadedFile = loadedMemFiles[0];
      // Only update if the loaded file matches the current file path
      // This prevents overwriting when user selects a different file
      if (loadedFile.path === filePath) {
        setContent(loadedFile.content);
        // Set original content to loaded content (baseline for restore)
        setOriginalContent(loadedFile.content);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedMemFiles]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showDiff, setShowDiff] = useState(false);
  const [diffPreview, setDiffPreview] = useState<string | null>(null);
  const [loadingDiff, setLoadingDiff] = useState(false);

  // Notify parent of content changes
  useEffect(() => {
    if (onContentChange) {
      onContentChange(filePath, content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, filePath]);

  // Notify parent of lock state changes (including initial mount)
  useEffect(() => {
    if (onLockStateChange) {
      // previewEditable = false means locked (read-only)
      // previewEditable = true means unlocked (editable)
      // So isLocked = !previewEditable
      onLockStateChange(!previewEditable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewEditable]); // Only depend on previewEditable, not onLockStateChange (to avoid recreating callback)

  // Generate MEM file results based on filePath input
  const memSearchResults = useMemo(() => {
    const memFiles = allFiles.filter(f => 
      f.file_type === 'MEM' &&
      (!civilization || f.civilization === civilization?.toUpperCase())
    );

    let filtered;
    
    if (!filePath.trim() || !isSearchingMem) {
      // If no input or not actively searching, show all MEM files (for alphabetical browsing)
      filtered = memFiles.map(f => {
        const fileName = f.file_path.split('/').pop() || f.file_path;
        const subjectMatch = fileName.match(/MEM[–-][A-Z]+[–-](?:[A-Z]+[–-])?(.+)$/i);
        const displayName = subjectMatch ? subjectMatch[1].replace(/\.md$/i, '') : fileName;
        return {
          id: f.id,
          file_path: f.file_path,
          displayName,
        };
      });
      // Sort alphabetically by display name
      filtered.sort((a, b) => a.displayName.localeCompare(b.displayName));
    } else {
      // Filter based on filePath input
      const query = filePath.toLowerCase();
      filtered = memFiles
        .filter(f => {
          const fileName = f.file_path.split('/').pop() || f.file_path;
          const pathLower = f.file_path.toLowerCase();
          const nameLower = fileName.toLowerCase();
          return pathLower.includes(query) || nameLower.includes(query);
        })
        .map(f => {
          const fileName = f.file_path.split('/').pop() || f.file_path;
          const subjectMatch = fileName.match(/MEM[–-][A-Z]+[–-](?:[A-Z]+[–-])?(.+)$/i);
          const displayName = subjectMatch ? subjectMatch[1].replace(/\.md$/i, '') : fileName;
          return {
            id: f.id,
            file_path: f.file_path,
            displayName,
          };
        })
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
    }

    return filtered;
  }, [filePath, allFiles, civilization, isSearchingMem]);

  const handleMemSelect = async (e: React.MouseEvent, file: { id: number; file_path: string }) => {
    e.preventDefault();
    e.stopPropagation();
    setFilePath(file.file_path); // Set the file path
    setIsSearchingMem(false); // Exit search mode
    
    // Load file content for display (but NOT into LLM context yet)
    try {
      const response = await fetch(`/api/repository/file/${file.id}`);
      const data = await response.json();
      
      if (data.success && data.file) {
        // Use raw content (full file with frontmatter) for display
        const fileContent = data.file.raw || data.file.content;
        if (fileContent) {
          setContent(fileContent);
          setOriginalContent(fileContent); // Set baseline for restore
        }
      }
    } catch (error) {
      console.error('Error loading file content for display:', error);
    }
    
    setShowMemDropdown(false); // Close dropdown after selection
  };

  // Load diff preview when content or filePath changes
  useEffect(() => {
    if (filePath && content && filePath.trim() && content.trim()) {
      const timer = setTimeout(async () => {
        setLoadingDiff(true);
        try {
          const response = await fetch('/api/scholar/preview-diff', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath, content }),
          });
          const data = await response.json();
          if (data.success && data.diff) {
            setDiffPreview(data.diff.diff);
          }
        } catch (error) {
          console.error('Error loading diff:', error);
        } finally {
          setLoadingDiff(false);
        }
      }, 500); // Debounce

      return () => clearTimeout(timer);
    }
  }, [filePath, content]);

  const handleSave = useCallback(async () => {
    if (!filePath.trim() || !content.trim()) {
      setError('File path and content are required');
      return;
    }

    // Validate MEM file naming
    if (!filePath.match(/MEM–.*\.md$/i) && !filePath.match(/.*\/MEM–.*\.md$/i)) {
      setError('MEM file must follow naming convention: MEM–*.md');
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // Save with commit and push (manual operation)
      await onSave(filePath, content, {
        autoCommit: true,  // Always commit when saving
        autoPush: true,    // Always push to GitHub when saving
        commitMessage: `[WRITE Mode] ${filePath.match(/.*\/([^\/]+)$/)?.[1] || filePath}`,
      });
      
      // After successful save, update original content to current content
      setOriginalContent(content);
      setSuccess('File saved, committed, and pushed to GitHub successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save file');
    } finally {
      setSaving(false);
    }
  }, [filePath, content, onSave]);

  const handleLoad = useCallback(async () => {
    if (!filePath.trim()) {
      setError('No file selected to load');
      return;
    }

    // Find the file ID from allFiles
    const file = allFiles.find(f => f.file_path === filePath && f.file_type === 'MEM');
    if (!file) {
      setError('File not found in registry');
      return;
    }

    // Check if file is already loaded
    const isAlreadyLoaded = loadedMemFiles.length > 0 && loadedMemFiles[0].path === filePath;
    if (isAlreadyLoaded) {
      setSuccess('File is already loaded into LLM context');
      setTimeout(() => setSuccess(null), 2000);
      return;
    }

    // Load file into LLM context
    if (onLoadMemFile) {
      try {
        await onLoadMemFile(filePath, file.id);
        setSuccess('File loaded into LLM context');
        setTimeout(() => setSuccess(null), 3000);
      } catch (error) {
        setError(`Failed to load file: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  }, [filePath, allFiles, loadedMemFiles, onLoadMemFile]);

  const handleRestore = useCallback(() => {
    if (!originalContent) {
      setError('No original content to restore');
      return;
    }

    // Restore to original content
    setContent(originalContent);
    setError(null);
    setSuccess('File restored to previous version');
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(null), 3000);
  }, [originalContent]);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6 flex flex-col h-full overflow-hidden">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex-shrink-0">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md flex-shrink-0">
          <p className="text-sm text-green-800">{success}</p>
        </div>
      )}

      <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Consolidated File Path / MEM File Search */}
        <div className="mb-4 flex-shrink-0 relative">
          <input
            type="text"
            id="filePath"
            value={filePath}
            onChange={(e) => {
              setFilePath(e.target.value);
              setIsSearchingMem(true); // User is typing/searching
            }}
            onFocus={() => {
              // Show dropdown when input is focused (even if no query)
              setShowMemDropdown(true);
              setIsSearchingMem(false); // Show all files when first focused
            }}
            onBlur={() => {
              // Delay to allow click on dropdown item
              setTimeout(() => {
                setShowMemDropdown(false);
                setIsSearchingMem(false);
              }, 200);
            }}
            placeholder="content/civilizations/ROME/MEM–ROME–HIST–EXAMPLE.md or search MEM files..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
          
          {/* Autocomplete Dropdown */}
          {showMemDropdown && memSearchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {memSearchResults.map((file) => {
                const isLoaded = loadedMemFiles.length > 0 && loadedMemFiles[0].path === file.file_path;
                return (
                  <button
                    key={file.id}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent input blur
                      handleMemSelect(e, file);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center justify-between ${
                      isLoaded ? 'bg-green-50' : ''
                    }`}
                  >
                    <span className="text-sm text-gray-900 font-mono">{file.file_path}</span>
                    {isLoaded && (
                      <span className="text-xs text-green-600 ml-2">✓ Loaded</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Scrollable Text Box Area - ONLY this scrolls */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {previewEditable ? (
            <textarea
              id="preview"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full flex-1 min-h-0 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 font-mono text-sm bg-white overflow-y-auto"
              style={{ resize: 'none' }}
              placeholder="Edit content..."
            />
          ) : (
            <div className="w-full flex-1 min-h-0 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 font-mono text-sm overflow-y-auto">
              <div className="whitespace-pre-wrap">
                {content || (
                  <span className="text-gray-400 italic">No content to preview. Chat with the LLM on the left to create/edit this file.</span>
                )}
              </div>
            </div>
          )}

          {/* Diff Preview - Inside scrollable area but collapsible */}
          {diffPreview && (
            <div className="border-t border-gray-300 pt-2 pb-2 flex-shrink-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Diff Preview</h4>
                <button
                  onClick={() => setShowDiff(!showDiff)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {showDiff ? 'Hide' : 'Show'} Diff
                </button>
              </div>
              {showDiff && (
                <div className="bg-white border border-gray-200 rounded-md p-3 max-h-48 overflow-y-auto">
                  <pre className="text-xs font-mono whitespace-pre-wrap text-gray-800">
                    {diffPreview}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Buttons: Unlock/Lock | Restore | Save */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4 flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              setPreviewEditable(!previewEditable);
            }}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              previewEditable
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {previewEditable ? '🔒 Lock' : '🔓 Unlock'}
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleLoad}
              disabled={!filePath.trim() || (loadedMemFiles.length > 0 && loadedMemFiles[0].path === filePath)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              title="Load file into LLM context"
            >
              Load
            </button>
            <button
              type="button"
              onClick={handleRestore}
              disabled={!originalContent || content === originalContent}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              title="Revert all changes to previous version"
            >
              Restore
            </button>
            <button
              onClick={handleSave}
              disabled={saving || !filePath.trim() || !content.trim()}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MemFileEditor;

