'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { FileRegistry } from '@/types';
import { parseMemFilesFromIndex, findMemFilePath } from '@/lib/services/index-parser.service';

interface MemFileSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMemFileSelect: (filePath: string, fileId: number) => void;
  onMemFileUnload?: (filePath: string) => void;
  loadedMemFiles?: Array<{ path: string; content: string; lastUsed: number }>;
  selectedScholar?: FileRegistry | null;
  indexContent?: string | null;
  allFiles?: FileRegistry[];
}

export default function MemFileSelectorModal({
  isOpen,
  onClose,
  onMemFileSelect,
  onMemFileUnload,
  loadedMemFiles = [],
  selectedScholar,
  indexContent,
  allFiles = [],
}: MemFileSelectorModalProps) {
  const [memFiles, setMemFiles] = useState<FileRegistry[]>([]);
  const [selectedMem, setSelectedMem] = useState<FileRegistry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [groupByCategory, setGroupByCategory] = useState(true);
  
  // Track pending changes (files to load/unload) - only execute on Accept
  const [pendingLoads, setPendingLoads] = useState<Set<number>>(new Set());
  const [pendingUnloads, setPendingUnloads] = useState<Set<string>>(new Set());

  // Load MEM files from INDEX when modal opens
  useMemo(() => {
    if (isOpen && selectedScholar?.civilization && indexContent) {
      // Parse MEM file names from INDEX content
      const memFileNames = parseMemFilesFromIndex(indexContent);
      
      // Map INDEX filenames to file registry entries
      const mappedFiles: FileRegistry[] = [];
      
      for (const fileName of memFileNames) {
        const filePath = findMemFilePath(
          fileName,
          allFiles,
          selectedScholar.civilization || null
        );
        
        if (filePath) {
          const registryFile = allFiles.find((f: FileRegistry) => 
            f.file_path === filePath && f.file_type === 'MEM'
          );
          
          if (registryFile) {
            mappedFiles.push(registryFile);
          }
        }
      }
      
      setMemFiles(mappedFiles);
    } else if (isOpen && selectedScholar?.civilization && !indexContent) {
      // Fallback: fetch from API if INDEX not available
      fetch(`/api/repository/mem-files?civilization=${selectedScholar.civilization}`)
        .then(r => r.json())
        .then(data => {
          if (data.success) {
            setMemFiles(data.files);
          }
        })
        .catch(error => console.error('Error loading MEM files:', error));
    } else {
      setMemFiles([]);
    }
  }, [isOpen, selectedScholar?.civilization, indexContent, allFiles]);

  // Reset pending changes when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setPendingLoads(new Set());
      setPendingUnloads(new Set());
      setSelectedMem(null);
    }
  }, [isOpen]);

  const handleMemSelect = useCallback((file: FileRegistry) => {
    setSelectedMem(file);
    // Add to pending loads (toggle if already pending)
    setPendingLoads(prev => {
      const next = new Set(prev);
      if (next.has(file.id)) {
        next.delete(file.id);
      } else {
        next.add(file.id);
      }
      return next;
    });
    // Remove from pending unloads if it was marked for unload
    setPendingUnloads(prev => {
      const next = new Set(prev);
      next.delete(file.file_path);
      return next;
    });
  }, []);

  const handleUnloadClick = useCallback((filePath: string) => {
    // Add to pending unloads (toggle if already pending)
    setPendingUnloads(prev => {
      const next = new Set(prev);
      if (next.has(filePath)) {
        next.delete(filePath);
      } else {
        next.add(filePath);
      }
      return next;
    });
    // Remove from pending loads if it was marked for load
    const file = memFiles.find(f => f.file_path === filePath);
    if (file) {
      setPendingLoads(prev => {
        const next = new Set(prev);
        next.delete(file.id);
        return next;
      });
    }
  }, [memFiles]);

  const handleAccept = useCallback(() => {
    // Execute all pending loads
    pendingLoads.forEach(fileId => {
      const file = memFiles.find(f => f.id === fileId);
      if (file) {
        onMemFileSelect(file.file_path, file.id);
      }
    });
    
    // Execute all pending unloads
    pendingUnloads.forEach(filePath => {
      onMemFileUnload?.(filePath);
    });
    
    // Close modal
    onClose();
  }, [pendingLoads, pendingUnloads, memFiles, onMemFileSelect, onMemFileUnload, onClose]);

  const handleCancel = useCallback(() => {
    // Discard all pending changes
    setPendingLoads(new Set());
    setPendingUnloads(new Set());
    setSelectedMem(null);
    // Close modal
    onClose();
  }, [onClose]);

  // Extract category from MEM filename
  const getMemCategory = (filePath: string): string => {
    const fileName = filePath.split('/').pop() || filePath;
    const match = fileName.match(/MEM–[A-Z]+–([A-Z]+(?:–[A-Z]+)*)/i);
    if (!match) return 'Other';
    
    const parts = match[1].split('–');
    const knownCategories = ['GEO', 'HIST', 'WAR', 'DYNASTY', 'LANG', 'CRUSADES', 'ITALY', 'RENAISSANCE'];
    const firstPart = parts[0].toUpperCase();
    
    if (knownCategories.includes(firstPart)) {
      return firstPart;
    }
    if (parts.length > 1 && knownCategories.includes(parts[1].toUpperCase())) {
      return parts[1].toUpperCase();
    }
    
    if (parts.length === 1 && /^[A-Z]+$/.test(parts[0])) {
      return 'Figures';
    }
    
    return 'Other';
  };

  // Filter and group MEM files
  const filteredAndGroupedMemFiles = useMemo(() => {
    let filtered = memFiles;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = memFiles.filter(file => 
        file.file_path.toLowerCase().includes(query) ||
        file.file_path.toLowerCase().replace(/[–-]/g, ' ').includes(query)
      );
    }
    
    if (groupByCategory) {
      const grouped: Record<string, FileRegistry[]> = {};
      filtered.forEach(file => {
        const category = getMemCategory(file.file_path);
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(file);
      });
      
      const sortedCategories = Object.keys(grouped).sort();
      return sortedCategories.map(category => ({
        category,
        files: grouped[category].sort((a, b) => a.file_path.localeCompare(b.file_path)),
      }));
    }
    
    return [{ category: 'All', files: filtered.sort((a, b) => a.file_path.localeCompare(b.file_path)) }];
  }, [memFiles, searchQuery, groupByCategory]);

  const isLoaded = (filePath: string): boolean => {
    return loadedMemFiles.some(loaded => loaded.path === filePath);
  };

  const isPendingLoad = (fileId: number): boolean => {
    return pendingLoads.has(fileId);
  };

  const isPendingUnload = (filePath: string): boolean => {
    return pendingUnloads.has(filePath);
  };

  const getFileState = (file: FileRegistry): 'loaded' | 'pending-load' | 'pending-unload' | 'available' => {
    const filePath = file.file_path;
    if (isPendingUnload(filePath)) return 'pending-unload';
    if (isLoaded(filePath) && !isPendingUnload(filePath)) return 'loaded';
    if (isPendingLoad(file.id)) return 'pending-load';
    return 'available';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col">
          {/* Header - Fixed */}
          <div className="flex-shrink-0 p-4 border-b border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Select MEM Files ({selectedScholar?.civilization || 'All'})
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {memFiles.length} MEM file{memFiles.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Loaded Files - Compact chips in header (no separate scroll) */}
            {loadedMemFiles.length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium text-gray-700">
                    Loaded ({loadedMemFiles.length}/5):
                  </span>
                  {loadedMemFiles.map((memFile) => {
                    const fileName = memFile.path.split('/').pop() || memFile.path;
                    const subjectMatch = fileName.match(/MEM–[A-Z]+–(?:[A-Z]+–)?(.+)$/i);
                    const displayName = subjectMatch ? subjectMatch[1].replace(/\.md$/i, '') : fileName;
                    const willUnload = isPendingUnload(memFile.path);
                    
                    return (
                      <div
                        key={memFile.path}
                        className={`inline-flex items-center gap-1.5 px-2 py-1 border rounded text-xs ${
                          willUnload
                            ? 'bg-yellow-100 border-yellow-400'
                            : 'bg-green-100 border-green-300'
                        }`}
                      >
                        <span className={`font-mono max-w-[200px] truncate ${
                          willUnload ? 'text-yellow-800' : 'text-green-800'
                        }`}>
                          {displayName}
                        </span>
                        {onMemFileUnload && (
                          <button
                            onClick={() => handleUnloadClick(memFile.path)}
                            className={`rounded px-1 ${
                              willUnload
                                ? 'text-yellow-700 hover:text-yellow-900 hover:bg-yellow-200'
                                : 'text-red-600 hover:text-red-800 hover:bg-red-200'
                            }`}
                            title={willUnload ? 'Cancel unload' : 'Mark for unload'}
                          >
                            {willUnload ? '↶' : '×'}
                          </button>
                        )}
                      </div>
                    );
                  })}
                  {loadedMemFiles.length >= 5 && (
                    <span className="text-xs text-yellow-600 italic">
                      ⚠️ Max reached
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content - Single scrollable area */}
          <div className="flex-1 overflow-y-auto p-4 min-h-0">
            {memFiles.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">
                No MEM files found for {selectedScholar?.civilization || 'this civilization'}.
              </p>
            ) : (
              <div className="space-y-3">
                {/* Search and Group Controls */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search MEM files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    autoFocus
                  />
                  <button
                    onClick={() => setGroupByCategory(!groupByCategory)}
                    className={`px-3 py-2 text-xs border rounded-md ${
                      groupByCategory
                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                    title="Toggle grouping by category"
                  >
                    {groupByCategory ? '📁 Grouped' : '📄 List'}
                  </button>
                </div>
                
                {/* MEM Files Display - Full height, single scroll */}
                <div className="border border-gray-200 rounded-md">
                  {filteredAndGroupedMemFiles.map(({ category, files }) => (
                    <div key={category} className="border-b border-gray-200 last:border-b-0">
                      {groupByCategory && filteredAndGroupedMemFiles.length > 1 && (
                        <div className="px-3 py-2 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                          <h4 className="text-xs font-semibold text-gray-700 uppercase">
                            {category} ({files.length})
                          </h4>
                        </div>
                      )}
                      <div className="divide-y divide-gray-100">
                        {files.map((file) => {
                          const fileState = getFileState(file);
                          const fileName = file.file_path.split('/').pop() || file.file_path;
                          const subjectMatch = fileName.match(/MEM–[A-Z]+–(?:[A-Z]+–)?(.+)$/i);
                          const displayName = subjectMatch ? subjectMatch[1].replace(/\.md$/i, '') : fileName;
                          
                          const getStateStyles = () => {
                            switch (fileState) {
                              case 'loaded':
                                return 'bg-green-50 border-l-2 border-green-400';
                              case 'pending-load':
                                return 'bg-blue-100 border-l-4 border-blue-600';
                              case 'pending-unload':
                                return 'bg-yellow-50 border-l-2 border-yellow-400';
                              default:
                                return 'hover:bg-blue-50 hover:border-l-2 hover:border-blue-400';
                            }
                          };

                          const getStateLabel = () => {
                            switch (fileState) {
                              case 'loaded':
                                return 'Loaded';
                              case 'pending-load':
                                return 'Will Load';
                              case 'pending-unload':
                                return 'Will Unload';
                              default:
                                return null;
                            }
                          };
                          
                          return (
                            <button
                              key={file.id}
                              onClick={() => handleMemSelect(file)}
                              className={`w-full text-left px-3 py-2 text-sm transition-colors ${getStateStyles()}`}
                              title={
                                fileState === 'loaded' ? 'Click to unload' :
                                fileState === 'pending-load' ? 'Click to cancel load' :
                                fileState === 'pending-unload' ? 'Click to cancel unload' :
                                `Click to load ${fileName}`
                              }
                            >
                              <div className="flex items-center justify-between">
                                <span className={`font-mono ${
                                  fileState === 'loaded' ? 'text-green-700' :
                                  fileState === 'pending-load' ? 'text-blue-900' :
                                  fileState === 'pending-unload' ? 'text-yellow-800' :
                                  'text-gray-900'
                                }`}>
                                  {displayName}
                                </span>
                                {getStateLabel() && (
                                  <span className={`ml-2 px-1.5 py-0.5 text-xs rounded ${
                                    fileState === 'loaded' ? 'bg-green-200 text-green-800' :
                                    fileState === 'pending-load' ? 'bg-blue-200 text-blue-800' :
                                    'bg-yellow-200 text-yellow-800'
                                  }`}>
                                    {getStateLabel()}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  {filteredAndGroupedMemFiles.length === 0 && searchQuery && (
                    <div className="p-4 text-center text-sm text-gray-500">
                      No MEM files match "{searchQuery}"
                    </div>
                  )}
                </div>
                
                {/* File count info */}
                <p className="text-xs text-gray-500">
                  {filteredAndGroupedMemFiles.reduce((sum, group) => sum + group.files.length, 0)} of {memFiles.length} files
                  {searchQuery && ' (filtered)'}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200 flex-shrink-0">
            <div className="text-xs text-gray-600">
              {pendingLoads.size > 0 && (
                <span className="text-blue-700">
                  {pendingLoads.size} file{pendingLoads.size !== 1 ? 's' : ''} to load
                </span>
              )}
              {pendingLoads.size > 0 && pendingUnloads.size > 0 && <span className="mx-2">•</span>}
              {pendingUnloads.size > 0 && (
                <span className="text-yellow-700">
                  {pendingUnloads.size} file{pendingUnloads.size !== 1 ? 's' : ''} to unload
                </span>
              )}
              {pendingLoads.size === 0 && pendingUnloads.size === 0 && (
                <span className="text-gray-500">No changes pending</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                disabled={pendingLoads.size === 0 && pendingUnloads.size === 0}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

