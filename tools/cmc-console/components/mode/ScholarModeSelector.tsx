'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { ScholarMode } from '@/types';

interface ModeState {
  mode: ScholarMode;
  description: string;
  allowedActions: string[];
}

interface ScholarModeSelectorProps {
  onModeChange?: (mode: ScholarMode) => void;
}

export default function ScholarModeSelector({ onModeChange }: ScholarModeSelectorProps = {}) {
  const [modeState, setModeState] = useState<ModeState>({
    mode: 'LEARN', // Default to LEARN
    description: 'Recursive learning: ingest, analyze, synthesize, and assimilate knowledge into SCHOLAR',
    allowedActions: [],
  });
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(true);
  
  // Initialize mode to LEARN on mount if not set
  useEffect(() => {
    loadMode();
  }, []);

  const loadMode = useCallback(async () => {
    if (!isMountedRef.current) return;
    
    try {
      const response = await fetch('/api/mode');
      const data = await response.json();
      if (data.success && isMountedRef.current) {
        setModeState(prevState => {
          // Only update if state actually changed
          if (
            prevState.mode === data.mode &&
            prevState.description === data.description &&
            JSON.stringify(prevState.allowedActions) === JSON.stringify(data.allowedActions || [])
          ) {
            return prevState;
          }
          const newState = {
            mode: data.mode,
            description: data.description,
            allowedActions: data.allowedActions || [],
          };
          // Notify parent of mode change
          if (onModeChange && prevState.mode !== data.mode) {
            onModeChange(data.mode);
          }
          return newState;
        });
      }
    } catch (error) {
      console.error('Error loading mode:', error);
    }
  }, [onModeChange]);

  const setMode = useCallback(async (mode: ScholarMode) => {
    if (!isMountedRef.current || !mode) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/mode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode }),
      });
      
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        console.error('Failed to set mode:', data.error || 'Unknown error');
        alert(`Failed to switch mode: ${data.error || 'Unknown error'}`);
        return;
      }
      
      if (isMountedRef.current) {
        setModeState(prevState => {
          const previousMode = prevState.mode;
          const newState = {
            mode: data.mode,
            description: data.description,
            allowedActions: data.allowedActions || [],
          };
          
          // Notify parent of mode change
          if (onModeChange && previousMode !== data.mode) {
            onModeChange(data.mode);
          }
          
          console.log(`Mode switched from ${previousMode} to ${data.mode}`);
          return newState;
        });
      }
    } catch (error) {
      console.error('Error setting mode:', error);
      alert(`Error switching mode: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [onModeChange]);

  useEffect(() => {
    isMountedRef.current = true;
    loadMode();
    // Poll for mode changes every 5 seconds (less frequent to reduce load)
    // Note: This helps sync if mode is changed elsewhere, but won't override manual changes
    const interval = setInterval(() => {
      if (isMountedRef.current && !loading) {
        loadMode();
      }
    }, 5000);
    
    return () => {
      isMountedRef.current = false;
      clearInterval(interval);
    };
  }, [loadMode, loading]);

  const getModeColor = (mode: ScholarMode) => {
    switch (mode) {
      case 'IMAGINE':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'LEARN':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'WRITE':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getModeIcon = (mode: ScholarMode) => {
    switch (mode) {
      case 'IMAGINE':
        return '✨';
      case 'LEARN':
        return '📖';
      case 'WRITE':
        return '✍️';
      default:
        return '⚪';
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <button
        onClick={() => setMode('IMAGINE')}
        disabled={loading || modeState.mode === 'IMAGINE'}
        className={`px-4 py-2 rounded-md font-medium text-sm transition-colors w-28 ${
          modeState.mode === 'IMAGINE'
            ? 'bg-blue-600 text-white cursor-default'
            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
        } disabled:opacity-50`}
      >
        ✨ IMAGINE
      </button>
      <button
        onClick={() => setMode('LEARN')}
        disabled={loading || modeState.mode === 'LEARN'}
        className={`px-4 py-2 rounded-md font-medium text-sm transition-colors w-28 ${
          modeState.mode === 'LEARN'
            ? 'bg-green-600 text-white cursor-default'
            : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
        } disabled:opacity-50`}
      >
        📖 LEARN
      </button>
      <button
        onClick={() => setMode('WRITE')}
        disabled={loading || modeState.mode === 'WRITE'}
        className={`px-4 py-2 rounded-md font-medium text-sm transition-colors w-28 ${
          modeState.mode === 'WRITE'
            ? 'bg-purple-600 text-white cursor-default'
            : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
        } disabled:opacity-50`}
      >
        ✍️ WRITE
      </button>
    </div>
  );
}

