'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { FileRegistry } from '@/types';

interface ScholarFileSelectorProps {
  onScholarFileLoad: (filePath: string, content: string, civilization: string | null, scholarFile?: FileRegistry) => void;
  requestedCivilization?: string | null;
  onCivilizationRequestProcessed?: () => void;
}

export default function ScholarFileSelector({ onScholarFileLoad, requestedCivilization, onCivilizationRequestProcessed }: ScholarFileSelectorProps) {
  const [scholarFiles, setScholarFiles] = useState<FileRegistry[]>([]);
  const [selectedScholar, setSelectedScholar] = useState<FileRegistry | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);

  // Track if we've already loaded files to prevent re-fetching
  const filesLoadedRef = useRef(false);
  
  // Load SCHOLAR files on mount (only once)
  useEffect(() => {
    // Prevent re-fetching if files are already loaded
    if (filesLoadedRef.current) {
      return;
    }
    
    const loadScholarFiles = async () => {
      try {
        const response = await fetch('/api/repository/scholar-files');
        const data = await response.json();
        if (data.success) {
          setScholarFiles(data.files);
          filesLoadedRef.current = true;
          
          // Set loading to false immediately - UI can render while content loads
          setLoading(false);
          
          // Auto-select CIV–SCHOLAR–ROME.md if it exists
          const romeScholar = data.files.find((f: FileRegistry) => 
            f.file_path.includes('CIV–SCHOLAR–ROME') || 
            f.file_path.includes('CIV-SCHOLAR-ROME')
          );
          
          if (romeScholar) {
            // Load ROME SCHOLAR content in background (non-blocking)
            // MEM files will be loaded from INDEX via the useEffect that watches indexContent
            setSelectedScholar(romeScholar);
            setLoadingContent(true);
            
            // Load SCHOLAR content asynchronously - don't block UI
            // MEM files are loaded from INDEX (not from database query)
            fetch(`/api/repository/file/${romeScholar.id}`)
              .then(r => r.json())
              .then(scholarData => {
                if (scholarData.success && scholarData.file.content) {
                  onScholarFileLoad(romeScholar.file_path, scholarData.file.content, romeScholar.civilization || null, romeScholar);
                }
                setLoadingContent(false);
              })
              .catch(error => {
                console.error('Error loading ROME SCHOLAR content:', error);
                setLoadingContent(false);
              });
          }
        }
      } catch (error) {
        console.error('Error loading SCHOLAR files:', error);
        setLoading(false);
      }
    };
    
    loadScholarFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  const handleScholarSelect = useCallback(async (file: FileRegistry) => {
    setSelectedScholar(file);
    setLoadingContent(true);
    
    try {
      // Load the SCHOLAR file content
      const response = await fetch(`/api/repository/file/${file.id}`);
      const data = await response.json();
      
      if (data.success && data.file.content) {
        onScholarFileLoad(file.file_path, data.file.content, file.civilization || null, file);
      }
    } catch (error) {
      console.error('Error loading SCHOLAR file content:', error);
    } finally {
      setLoadingContent(false);
    }
  }, [onScholarFileLoad]);

  // When parent requests a civilization (e.g. from CivilizationSwitcher), select that SCHOLAR file
  useEffect(() => {
    if (!requestedCivilization || !scholarFiles.length) return;
    const civUpper = requestedCivilization.toUpperCase();
    if (selectedScholar?.civilization?.toUpperCase() === civUpper) {
      onCivilizationRequestProcessed?.();
      return;
    }
    const file = scholarFiles.find(f => f.civilization?.toUpperCase() === civUpper);
    if (file) {
      handleScholarSelect(file);
    }
    onCivilizationRequestProcessed?.();
  }, [requestedCivilization, scholarFiles, selectedScholar?.civilization, handleScholarSelect, onCivilizationRequestProcessed]);


  // Component handles loading/switching logic but doesn't render UI
  // The selected civilization is already shown in the civilization switcher
  return null;
}

