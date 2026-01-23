'use client';

import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { MemFileEditorHandle } from '@/components/write/MemFileEditor';
import ScholarModeSelector from '@/components/mode/ScholarModeSelector';
import ScholarInterface from '@/components/scholar/ScholarInterface';
import CivilizationSwitcher from '@/components/scholar/CivilizationSwitcher';
import ScholarFileSelector from '@/components/scholar/ScholarFileSelector';
import MemFileEditor from '@/components/write/MemFileEditor';
import MemFileSelectorModal from '@/components/scholar/MemFileSelectorModal';
import { FileRegistry, ScholarMode } from '@/types';
import { useCivilizationContent } from '@/hooks/useCivilizationContent';

export default function Home() {
  const [files, setFiles] = useState<FileRegistry[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMode, setCurrentMode] = useState<ScholarMode>('LEARN'); // Default to LEARN
  const [scholarContent, setScholarContent] = useState<string>('');
  const [loadedMemFiles, setLoadedMemFiles] = useState<Array<{ path: string; content: string; lastUsed: number }>>([]);
  // Consolidated civilization state - single source of truth
  const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null);
  
  // Use custom hook for civilization content loading
  const activeCoreContent = useCivilizationContent(selectedCivilization, 'CORE');
  const activeIndexContent = useCivilizationContent(selectedCivilization, 'INDEX');
  const activeDoctrineContent = useCivilizationContent(selectedCivilization, 'DOCTRINE');
  const [memModalOpen, setMemModalOpen] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState<FileRegistry | null>(null);
  const [lastSavedFile, setLastSavedFile] = useState<{ filePath: string; commitHash?: string } | null>(null);
  const [writeModeFilePath, setWriteModeFilePath] = useState<string>('');
  const [writeModeContent, setWriteModeContent] = useState<string>('');
  const [isMemFileLocked, setIsMemFileLocked] = useState<boolean>(true); // Default to locked (read-only)
  const memFileEditorRef = useRef<MemFileEditorHandle>(null);

  // Listen for mode switch requests from ScholarInterface
  useEffect(() => {
    const handleModeSwitch = (e: CustomEvent) => {
      if (e.detail?.mode) {
        setCurrentMode(e.detail.mode as ScholarMode);
      }
    };
    window.addEventListener('switchMode', handleModeSwitch as EventListener);
    return () => {
      window.removeEventListener('switchMode', handleModeSwitch as EventListener);
    };
  }, []);

  // Listen for push to GitHub requests
  useEffect(() => {
    const handlePushToGitHub = async (e: Event) => {
      const customEvent = e as CustomEvent;
      if (lastSavedFile?.filePath) {
        try {
          // Get file from registry to read content
          const registryResponse = await fetch('/api/repository/files');
          const registryData = await registryResponse.json();
          
          if (!registryData.success) {
            throw new Error('Could not access file registry');
          }

          const file = registryData.files.find((f: FileRegistry) => f.file_path === lastSavedFile.filePath);
          if (!file) {
            throw new Error('File not found in registry');
          }

          // Read file content using file ID
          const fileResponse = await fetch(`/api/repository/file/${file.id}`);
          const fileData = await fileResponse.json();
          
          if (!fileData.success || !fileData.file?.content) {
            throw new Error('Could not read file content');
          }

          // Commit and push the file
          const commitResponse = await fetch('/api/scholar/write-file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filePath: lastSavedFile.filePath,
              content: fileData.file.content,
              autoCommit: true,
              autoPush: true,
              commitMessage: `[WRITE Mode] Push compliant file: ${lastSavedFile.filePath}`,
            }),
          });

          const commitData = await commitResponse.json();
          
          if (commitData.success && commitData.pushed) {
            if ((window as any).__scholarAddMessage) {
                (window as any).__scholarAddMessage('system', `✅ Successfully pushed "${lastSavedFile.filePath}" to GitHub!\n\nCommit: ${commitData.commitHash || 'N/A'}\n\nOptions:\n\na) Continue editing\nb) View file in repository`);
            }
            // Update last saved file with new commit hash
            setLastSavedFile({ filePath: lastSavedFile.filePath, commitHash: commitData.commitHash });
          } else {
            throw new Error(commitData.error || 'Failed to push to GitHub');
          }
        } catch (error) {
          if ((window as any).__scholarAddMessage) {
            (window as any).__scholarAddMessage('error', `Failed to push to GitHub: ${error instanceof Error ? error.message : 'Unknown error'}`);
          }
        }
      } else {
        if ((window as any).__scholarAddMessage) {
          (window as any).__scholarAddMessage('error', 'No file to push. Please save a file first.');
        }
      }
    };
    window.addEventListener('pushToGitHub', handlePushToGitHub);
    return () => {
      window.removeEventListener('pushToGitHub', handlePushToGitHub);
    };
  }, [lastSavedFile]);

  // Listen for view diff requests
  useEffect(() => {
    const handleViewDiff = async (e: Event) => {
      const customEvent = e as CustomEvent;
      if (lastSavedFile?.filePath) {
        // Trigger diff view in MemFileEditor or show in ScholarInterface
        if ((window as any).__scholarAddMessage) {
          (window as any).__scholarAddMessage('system', `To view the diff for "${lastSavedFile.filePath}", check the file editor or use the audit interface.`);
        }
      }
    };
    window.addEventListener('viewDiff', handleViewDiff);
    return () => {
      window.removeEventListener('viewDiff', handleViewDiff);
    };
  }, [lastSavedFile]);


  // All known civilizations in the repository
  const ALL_CIVILIZATIONS = [
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
  ] as const;

  // Get civilizations from files (for dynamic discovery)
  const civilizationsFromFiles = useMemo(() =>
    Array.from(new Set(
      files
        .filter(f => f.civilization)
        .map(f => f.civilization!)
    )),
    [files]
  );

  // Combine known civilizations with any discovered from files, then sort
  const civilizations = useMemo(() =>
    Array.from(new Set([
      ...ALL_CIVILIZATIONS,
      ...civilizationsFromFiles,
    ])).sort(),
    [civilizationsFromFiles]
  );

  const MAX_LOADED_MEM_FILES = 5;

  const loadFiles = async () => {
    try {
      // Show loading state immediately
      setLoading(true);
      const response = await fetch('/api/repository/files');
      const data = await response.json();
      if (data.success) {
        setFiles(data.files);
      }
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleCivilizationRequestProcessed = useCallback(() => {
    // No longer needed - handled directly in handleCivilizationSelect
  }, []);

  const handleCivilizationSelect = useCallback((civ: string) => {
    if (civ !== selectedCivilization) {
      setScholarContent(''); // Deactivate current CIV–SCHOLAR
    }
    setSelectedCivilization(civ);
  }, [selectedCivilization]);

  useEffect(() => {
    loadFiles();
  }, []);

  // Civilization content loading is now handled by useCivilizationContent hook

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <header className="bg-white shadow-sm border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Civilizational Cognition Engine
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 min-h-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-hidden flex flex-col">
        {/* Content section - NO scrolling here */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden space-y-3">
          {/* Civilization Switcher */}
          <div>
            <CivilizationSwitcher
              civilizations={civilizations}
              selectedCivilization={selectedCivilization}
              onSelect={handleCivilizationSelect}
            />
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2 flex-wrap">
            <ScholarModeSelector onModeChange={setCurrentMode} />
          </div>

          {/* SCHOLAR File Selector */}
          <div>
          <ScholarFileSelector
            requestedCivilization={null}
            onCivilizationRequestProcessed={handleCivilizationRequestProcessed}
            onScholarFileLoad={(filePath, content, civilization, scholarFile) => {
              // Check if civilization changed - if so, evict all MEM files
              const prevCivilization = selectedCivilization;
              if (prevCivilization && prevCivilization !== civilization) {
                console.log(`Civilization changed from ${prevCivilization} to ${civilization}. Evicting all loaded MEM files.`);
                setLoadedMemFiles([]);
              }
              
              setScholarContent(content);
              setSelectedCivilization(civilization);
              if (scholarFile) {
                setSelectedScholar(scholarFile);
              }
              console.log('SCHOLAR file loaded:', filePath, 'Civilization:', civilization);
            }}
          />
        </div>

        {/* MEM File Selector Modal */}
        <MemFileSelectorModal
          isOpen={memModalOpen}
          onClose={() => setMemModalOpen(false)}
                  onMemFileSelect={async (filePath, fileId) => {
                    // Safety check: Only load MEM files if a SCHOLAR civilization is selected
                    if (!selectedCivilization) {
                      console.warn('Cannot load MEM file: No SCHOLAR civilization selected');
                      return;
                    }
                    
                    // Load MEM file content
                    try {
                      const response = await fetch(`/api/repository/file/${fileId}`);
                      const data = await response.json();
                      
                      if (data.success && data.file.content) {
                        const now = Date.now();
                        
                        setLoadedMemFiles(prev => {
                          // Safety: Filter out any MEM files from different civilizations (shouldn't happen, but defensive)
                          const sameCivilization = prev.filter(f => {
                            // Extract civilization from file path
                            const pathCiv = f.path.match(/MEM[–-]([A-Z]+)/i)?.[1];
                            return !pathCiv || pathCiv.toUpperCase() === selectedCivilization.toUpperCase();
                          });
                  
                  // Check if file is already loaded
                  const existingIndex = sameCivilization.findIndex(f => f.path === filePath);
                  
                  if (existingIndex >= 0) {
                    // Update lastUsed timestamp (move to most recent)
                    const updated = [...sameCivilization];
                    updated[existingIndex] = {
                      ...updated[existingIndex],
                      lastUsed: now,
                    };
                    // Move to end (most recently used)
                    const [moved] = updated.splice(existingIndex, 1);
                    updated.push(moved);
                    return updated;
                  } else {
                    // Add new file
                    const newFile = {
                      path: filePath,
                      content: data.file.content,
                      lastUsed: now,
                    };
                    
                    // If at limit, remove least recently used (first in array)
                    if (sameCivilization.length >= MAX_LOADED_MEM_FILES) {
                      const evicted = sameCivilization[0];
                      console.log(`Evicting least recently used MEM file: ${evicted.path}`);
                      return [...sameCivilization.slice(1), newFile];
                    } else {
                      return [...sameCivilization, newFile];
                    }
                  }
                });
                
                console.log('MEM file loaded:', filePath);
              }
            } catch (error) {
              console.error('Error loading MEM file content:', error);
            }
          }}
          onMemFileUnload={(filePath) => {
            setLoadedMemFiles(prev => prev.filter(f => f.path !== filePath));
            console.log('MEM file unloaded:', filePath);
          }}
          loadedMemFiles={loadedMemFiles}
          selectedScholar={selectedScholar}
          indexContent={activeIndexContent}
          allFiles={files}
        />

          {/* WRITE Mode: Chat Interface + File Preview Side-by-Side */}
          {currentMode === 'WRITE' && (
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden">
              {/* Left Side: ScholarInterface (Chat with LLM) */}
              <div className="flex flex-col min-h-0 overflow-hidden">
                <ScholarInterface
                  mode={currentMode}
                  scholarContent={scholarContent}
                  loadedMemFiles={loadedMemFiles}
                  civilization={selectedCivilization}
                  coreContent={activeCoreContent}
                  indexContent={activeIndexContent}
                  doctrineContent={activeDoctrineContent}
                  allFiles={files}
                  onSwitchMemFile={async (filePath, fileId) => {
                    // Load file content for display in editor (WRITE mode)
                    try {
                      const response = await fetch(`/api/repository/file/${fileId}`);
                      const data = await response.json();
                      
                      if (data.success && data.file) {
                        const fileContent = data.file.raw || data.file.content;
                        if (fileContent) {
                          setWriteModeFilePath(filePath);
                          setWriteModeContent(fileContent);
                        }
                      }
                    } catch (error) {
                      console.error('Error loading file for display:', error);
                      throw error;
                    }
                  }}
                  onLoadMemFileToLLM={async (filePath, fileId) => {
                    // Load file into LLM context (WRITE mode)
                    if (!selectedCivilization) {
                      throw new Error('No SCHOLAR civilization selected');
                    }
                    
                    try {
                      const response = await fetch(`/api/repository/file/${fileId}`);
                      const data = await response.json();
                      
                      if (data.success && data.file) {
                        const fileContent = data.file.raw || data.file.content;
                        if (fileContent) {
                          setLoadedMemFiles(prev => {
                            // Check if file is already loaded
                            const existing = prev.find(f => f.path === filePath);
                            if (existing) {
                              return prev.map(f => 
                                f.path === filePath 
                                  ? { ...f, lastUsed: Date.now() }
                                  : f
                              );
                            }
                            // Add new file, respecting MAX_LOADED_MEM_FILES limit
                            const sameCivilization = prev.filter(f => {
                              const pathCiv = f.path.match(/MEM[–-]([A-Z]+)/i)?.[1];
                              return !pathCiv || pathCiv.toUpperCase() === selectedCivilization.toUpperCase();
                            });
                            
                            const newFile = {
                              path: filePath,
                              content: fileContent,
                              lastUsed: Date.now(),
                            };
                            
                            if (sameCivilization.length >= MAX_LOADED_MEM_FILES) {
                              // Evict least recently used
                              return [...sameCivilization.slice(1), newFile];
                            } else {
                              return [...sameCivilization, newFile];
                            }
                          });
                        }
                      }
                    } catch (error) {
                      console.error('Error loading file into LLM context:', error);
                      throw error;
                    }
                  }}
                  onMemFileUsed={(filePath) => {
                    setLoadedMemFiles(prev => {
                      const existing = prev.find(f => f.path === filePath);
                      if (existing) {
                        return prev.map(f => 
                          f.path === filePath 
                            ? { ...f, lastUsed: Date.now() }
                            : f
                        );
                      }
                      return prev;
                    });
                  }}
                  onFileContentUpdate={(filePath, content) => {
                    setWriteModeFilePath(filePath);
                    setWriteModeContent(content);
                  }}
                  isMemFileLocked={isMemFileLocked}
                  onUnloadMemFile={(filePath) => {
                    setLoadedMemFiles(prev => prev.filter(f => f.path !== filePath));
                  }}
                  onClearLoadedFiles={() => {
                    setLoadedMemFiles([]);
                  }}
                />
              </div>

              {/* Right Side: MEM File Preview/Editor */}
              <div className="flex flex-col min-h-0 overflow-hidden">
                <MemFileEditor
                  ref={memFileEditorRef}
                  initialFilePath={writeModeFilePath}
                  initialContent={writeModeContent}
                  loadedMemFiles={loadedMemFiles}
                  civilization={selectedCivilization}
                  allFiles={files}
                  onLockStateChange={(isLocked) => {
                    setIsMemFileLocked(isLocked);
                  }}
                  onLoadMemFile={async (filePath, fileId) => {
                    // Safety check: Only load MEM files if a SCHOLAR civilization is selected
                    if (!selectedCivilization) {
                      console.warn('Cannot load MEM file: No SCHOLAR civilization selected');
                      return;
                    }
                    
                    // Load MEM file content
                    try {
                      const response = await fetch(`/api/repository/file/${fileId}`);
                      const data = await response.json();
                      
                      if (data.success && data.file) {
                        // Use raw content (full file with frontmatter) for LLM context
                        // Fall back to content (body only) if raw is not available
                        const fileContent = data.file.raw || data.file.content;
                        
                        if (fileContent) {
                          // Only one MEM file can be loaded at a time - replace any existing
                          setLoadedMemFiles([{
                            path: filePath,
                            content: fileContent,
                            lastUsed: Date.now(),
                          }]);
                          console.log('MEM file loaded into LLM context:', filePath);
                        }
                      }
                    } catch (error) {
                      console.error('Error loading MEM file content:', error);
                    }
                  }}
                  onSave={async (filePath, content, options) => {
                    try {
                  const response = await fetch('/api/scholar/write-file', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      filePath,
                      content,
                      autoCommit: options.autoCommit,
                      autoPush: options.autoPush,
                      commitMessage: options.commitMessage,
                      showDiff: true,
                    }),
                  });

                  const data = await response.json();
                  
                  if (!data.success) {
                    throw new Error(data.error || 'Failed to save file');
                  }

                  // Reload files after save
                  await loadFiles();

                  // Store file info for push operations
                  setLastSavedFile({ filePath, commitHash: data.commitHash });

                  // If file is now compliant and not already pushed, present push options
                  if (data.preflight?.valid && !data.preflight.blocked && !data.pushed) {
                    // Check if file was committed
                    const wasCommitted = data.committed || options.autoCommit;
                    
                    let message = `File "${filePath}" has been successfully upgraded to compliance!\n\n`;
                    message += `Compliance Status: ✅ Valid\n`;
                    if (data.preflight.compliance) {
                      message += `• ARC Version: ${data.preflight.compliance.arcVersionPinned ? '✓ Pinned' : '✗ Not pinned'}\n`;
                      message += `• Wordcount: ${data.preflight.compliance.wordcountVerified ? '✓ Verified' : '✗ Failed'}\n`;
                      message += `• Quotations: ${data.preflight.compliance.quotationCompliance.ancient.count >= 3 ? '✓' : '✗'} ANCIENT, ${data.preflight.compliance.quotationCompliance.medieval?.count >= 2 ? '✓' : '✗'} MEDIEVAL (if applicable), ${data.preflight.compliance.quotationCompliance.earlyModern?.count >= 2 ? '✓' : '✗'} EARLY_MODERN, ${data.preflight.compliance.quotationCompliance.modern?.count >= 2 ? '✓' : '✗'} MODERN\n`;
                      message += `• MEM Connections: ${data.preflight.compliance.memConnections.total >= 10 ? '✓' : '✗'} Total (${data.preflight.compliance.memConnections.total}/10), ${data.preflight.compliance.memConnections.sameCivilization >= data.preflight.compliance.memConnections.total ? '✓' : '✗'} Same CIV, ${(data.preflight.compliance.memConnections.geoMemCount || 0) >= 2 ? '✓' : '✗'} GEO (${data.preflight.compliance.memConnections.geoMemCount || 0}/2)\n`;
                    }
                    message += `\nFile Status: ${wasCommitted ? '✅ Committed' : '⚠️ Not committed'}\n`;
                    message += `\nOptions:\n\na) Push updated file to GitHub\nb) View file diff\nc) Continue editing`;
                    
                    // Present options in ScholarInterface
                    if ((window as any).__scholarAddMessage) {
                      (window as any).__scholarAddMessage('system', message);
                    }
                  }
                    } catch (error) {
                      throw error;
                    }
                  }}
                  onContentChange={(filePath, content) => {
                    setWriteModeFilePath(filePath);
                    setWriteModeContent(content);
                  }}
                />
              </div>
            </div>
          )}

          {/* SCHOLAR Interface (always rendered for text output, except in WRITE mode where it's in the side-by-side layout) */}
          {currentMode !== 'WRITE' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <ScholarInterface 
              mode={currentMode}
              scholarContent={scholarContent}
              loadedMemFiles={loadedMemFiles}
              civilization={selectedCivilization}
              coreContent={activeCoreContent}
              indexContent={activeIndexContent}
              doctrineContent={activeDoctrineContent}
              allFiles={files}
              onSwitchMemFile={async (filePath, fileId) => {
                // In non-WRITE modes, switch means load into LLM context directly
                try {
                  const response = await fetch(`/api/repository/file/${fileId}`);
                  const data = await response.json();
                  
                  if (data.success && data.file) {
                    const fileContent = data.file.raw || data.file.content;
                    if (fileContent) {
                      setLoadedMemFiles([{
                        path: filePath,
                        content: fileContent,
                        lastUsed: Date.now(),
                      }]);
                    }
                  }
                } catch (error) {
                  console.error('Error loading file:', error);
                  throw error;
                }
              }}
              onLoadMemFileToLLM={async (filePath, fileId) => {
                // Load file into LLM context (non-WRITE modes)
                try {
                  const response = await fetch(`/api/repository/file/${fileId}`);
                  const data = await response.json();
                  
                  if (data.success && data.file) {
                    const fileContent = data.file.raw || data.file.content;
                    if (fileContent) {
                      setLoadedMemFiles(prev => {
                        // Check if file is already loaded
                        const existing = prev.find(f => f.path === filePath);
                        if (existing) {
                          return prev.map(f => 
                            f.path === filePath 
                              ? { ...f, lastUsed: Date.now() }
                              : f
                          );
                        }
                        // Add new file, respecting MAX_LOADED_MEM_FILES limit
                        const sameCivilization = prev.filter(f => {
                          const pathCiv = f.path.match(/MEM[–-]([A-Z]+)/i)?.[1];
                          return !pathCiv || pathCiv.toUpperCase() === selectedCivilization?.toUpperCase();
                        });
                        
                        const newFile = {
                          path: filePath,
                          content: fileContent,
                          lastUsed: Date.now(),
                        };
                        
                        if (sameCivilization.length >= MAX_LOADED_MEM_FILES) {
                          // Evict least recently used
                          return [...sameCivilization.slice(1), newFile];
                        } else {
                          return [...sameCivilization, newFile];
                        }
                      });
                    }
                  }
                } catch (error) {
                  console.error('Error loading file into LLM context:', error);
                  throw error;
                }
              }}
              onAddMessage={(type, content) => {
                // This will be set up internally by ScholarInterface
              }}
              onMemFileUsed={(filePath) => {
                  // Update lastUsed timestamp when MEM file is used in conversation
                  setLoadedMemFiles(prev => {
                    const index = prev.findIndex(f => f.path === filePath);
                    if (index >= 0) {
                      const updated = [...prev];
                      updated[index] = {
                        ...updated[index],
                        lastUsed: Date.now(),
                      };
                      // Move to end (most recently used)
                      const [moved] = updated.splice(index, 1);
                      updated.push(moved);
                      return updated;
                    }
                    return prev;
                  });
                }}
                onUnloadMemFile={(filePath) => {
                  setLoadedMemFiles(prev => prev.filter(f => f.path !== filePath));
                }}
                onClearLoadedFiles={() => {
                  setLoadedMemFiles([]);
                }}
              />
              </div>
          )}
        </div>
      </main>
    </div>
  );
}

