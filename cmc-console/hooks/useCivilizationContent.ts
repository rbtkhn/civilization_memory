import { useState, useEffect, useRef } from 'react';

type ContentType = 'CORE' | 'INDEX' | 'DOCTRINE';

/**
 * Custom hook to load civilization-specific content (CIV–CORE, CIV–INDEX, or CIV–DOCTRINE)
 * Handles caching, cancellation, and deduplication automatically
 */
export function useCivilizationContent(
  civilization: string | null,
  contentType: ContentType
): string | null {
  const [content, setContent] = useState<string | null>(null);
  const lastCivRef = useRef<string | null>(null);

  useEffect(() => {
    if (!civilization) {
      setContent(null);
      lastCivRef.current = null;
      return;
    }

    // Skip if already loaded or loading for this civilization
    if (civilization === lastCivRef.current) {
      return;
    }

    lastCivRef.current = civilization;
    setContent(null);

    let cancelled = false;

    (async () => {
      try {
        // Determine API endpoint based on content type
        const endpoint = contentType === 'CORE' 
          ? 'core-files'
          : contentType === 'INDEX'
          ? 'index-files'
          : 'doctrine-files';

        const res = await fetch(`/api/repository/${endpoint}?civilization=${encodeURIComponent(civilization)}`);
        const data = await res.json();
        
        if (!data.success || !data.files?.length || cancelled) {
          return;
        }

        const file = data.files[0];
        const fileRes = await fetch(`/api/repository/file/${file.id}`);
        const fileData = await fileRes.json();
        
        if (!fileData.success || !fileData.file?.content || cancelled) {
          return;
        }

        if (!cancelled) {
          setContent(fileData.file.content);
        }
      } catch (error) {
        console.error(`Error loading CIV–${contentType}:`, error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [civilization, contentType]);

  return content;
}
