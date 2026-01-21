# Codebase Simplification Opportunities

## 1. **page.tsx: Duplicate Civilization Content Loading Logic**

**Location**: Lines 200-298

**Issue**: Three nearly identical `useEffect` hooks load CIV–CORE, CIV–INDEX, and CIV–DOCTRINE with almost identical patterns.

**Simplification**: Extract into a single reusable hook or function:
```typescript
function useCivilizationContent(civilization: string | null, contentType: 'CORE' | 'INDEX' | 'DOCTRINE') {
  const [content, setContent] = useState<string | null>(null);
  const lastCivRef = useRef<string | null>(null);
  
  useEffect(() => {
    const civ = civilization;
    if (!civ || civ === lastCivRef.current) {
      if (!civ) setContent(null);
      return;
    }
    
    lastCivRef.current = civ;
    // Load logic here...
  }, [civilization]);
  
  return content;
}
```

**Benefits**: 
- Reduces ~90 lines to ~30 lines
- Single source of truth for loading logic
- Easier to maintain and debug

---

## 2. **page.tsx: Redundant Civilization State Variables**

**Location**: Lines 19-20

**Issue**: `selectedScholarCivilization` and `requestedCivilization` track essentially the same thing with different timing.

**Current Logic**:
- `requestedCivilization` = what user clicked
- `selectedScholarCivilization` = what's currently active
- Both used in dependencies: `requestedCivilization || selectedScholarCivilization`

**Simplification**: Use single state with update function that handles the transition:
```typescript
const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null);

// When user clicks, immediately update
const handleCivilizationSelect = (civ: string) => {
  if (civ !== selectedCivilization) {
    setScholarContent(''); // Clear SCHOLAR when switching
  }
  setSelectedCivilization(civ);
};
```

**Benefits**: 
- Removes one state variable
- Simplifies all dependency arrays
- Clearer intent

---

## 3. **page.tsx: Multiple Civilization Tracking Refs**

**Location**: Line 30+ (lastCivForCoreRef, lastCivForIndexRef, lastCivForDoctrineRef)

**Issue**: Three separate refs tracking the same information (which civilization is loaded).

**Simplification**: Use a single object or Map:
```typescript
const loadedCivilizationsRef = useRef<Set<string>>(new Set());
// Or:
const civContentCacheRef = useRef<Map<string, { core?: string; index?: string; doctrine?: string }>>(new Map());
```

**Benefits**: 
- Single tracking mechanism
- Can implement caching layer
- Easier to debug what's loaded

---

## 4. **page.tsx: Separate Write Mode State**

**Location**: Lines 27-28

**Issue**: `writeModeFilePath` and `writeModeContent` are always used together but stored separately.

**Simplification**: Combine into single object:
```typescript
const [writeModeFile, setWriteModeFile] = useState<{ path: string; content: string } | null>(null);
```

**Benefits**: 
- Single state update instead of two
- Atomic updates (no intermediate inconsistent state)
- Cleaner prop passing

---

## 5. **MemFileEditor.tsx: Duplicate Content Syncing**

**Location**: Lines 31-48

**Issue**: Two `useEffect` hooks both sync `initialContent` and `initialFilePath`:
1. Lines 31-41: Syncs both filePath and content
2. Lines 44-48: Syncs originalContent based on initialFilePath

**Simplification**: Combine into one effect:
```typescript
useEffect(() => {
  if (initialFilePath !== filePath) {
    setFilePath(initialFilePath);
    setOriginalContent(initialContent);
  }
  if (initialContent !== content) {
    setContent(initialContent);
  }
}, [initialFilePath, initialContent]);
```

**Benefits**: 
- Removes redundant effect
- Clearer update logic
- Fewer re-renders

---

## 6. **ScholarInterface.tsx: Complex File Content Detection**

**Location**: Lines 199-253

**Issue**: Nested conditionals with repeated patterns for detecting file content in LLM responses.

**Simplification**: Extract into helper function:
```typescript
function detectFileContent(response: string, loadedFiles: Array<{path: string}>) {
  // Try explicit FILE_PATH format first
  const explicitMatch = response.match(/```(?:markdown|md)?\s*\nFILE_PATH:\s*([^\n]+)\n([\s\S]*?)```/i);
  if (explicitMatch) {
    return { filePath: explicitMatch[1].trim(), content: explicitMatch[2].trim() };
  }
  
  // Try code block with YAML
  const yamlBlockMatch = response.match(/```(?:markdown|md)?\s*\n(---[\s\S]*?---[\s\S]*?)```/i);
  if (yamlBlockMatch && loadedFiles.length > 0) {
    return { filePath: loadedFiles[0].path, content: yamlBlockMatch[1].trim() };
  }
  
  // Try direct YAML
  const directYaml = response.match(/^(---[\s\S]*?---[\s\S]*)$/);
  if (directYaml && loadedFiles.length > 0) {
    return { filePath: loadedFiles[0].path, content: directYaml[1].trim() };
  }
  
  return null;
}
```

**Benefits**: 
- Testable in isolation
- Reusable
- Clearer intent
- Easier to extend

---

## 7. **page.tsx: Complex loadedMemFiles Updates**

**Location**: Multiple locations (lines 371, 442, 487, 590)

**Issue**: Multiple similar but slightly different update patterns for `loadedMemFiles` state.

**Simplification**: Create helper functions:
```typescript
const updateLoadedMem = useCallback((filePath: string, updates: Partial<LoadedMemFile>) => {
  setLoadedMemFiles(prev => 
    prev.map(f => f.path === filePath ? { ...f, ...updates } : f)
  );
}, []);

const addLoadedMem = useCallback((file: LoadedMemFile, maxFiles: number = 5) => {
  setLoadedMemFiles(prev => {
    const filtered = prev.filter(f => f.path !== file.path);
    const updated = [...filtered, file];
    return updated.length > maxFiles ? updated.slice(-maxFiles) : updated;
  });
}, []);
```

**Benefits**: 
- DRY principle
- Consistent behavior
- Easier to modify logic in one place

---

## 8. **ScholarModeSelector.tsx: Unnecessary Polling**

**Location**: Lines 110-125

**Issue**: Polls every 5 seconds to check for mode changes, but mode changes are already handled via callbacks.

**Simplification**: Remove polling if not needed, or make it conditional:
```typescript
// Only poll if mode hasn't been set manually recently
const lastManualModeChangeRef = useRef<number>(Date.now());

useEffect(() => {
  const interval = setInterval(() => {
    // Only poll if no manual changes in last 10 seconds
    if (Date.now() - lastManualModeChangeRef.current > 10000) {
      loadMode();
    }
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

**Benefits**: 
- Reduces unnecessary API calls
- Better performance
- Still maintains sync capability

---

## 9. **page.tsx: Event Listener Cleanup**

**Location**: Lines 32-43, 45-100

**Issue**: Custom event listeners using `window.addEventListener` with type casting.

**Simplification**: Use a custom hook or context for mode/file state management:
```typescript
// Create a context provider for app-level state
const AppStateContext = createContext<{
  mode: ScholarMode;
  setMode: (mode: ScholarMode) => void;
  // ... other state
}>();

// Use context instead of custom events
```

**Benefits**: 
- Type-safe
- React-native pattern
- No global event pollution
- Easier to test

---

## 10. **MemFileEditor.tsx: Search Filter Logic**

**Location**: Lines 77-117

**Issue**: Search filtering logic is embedded in useEffect with multiple steps.

**Simplification**: Extract to useMemo:
```typescript
const filteredMemFiles = useMemo(() => {
  if (!memSearchQuery.trim()) return [];
  
  const query = memSearchQuery.toLowerCase();
  return allFiles
    .filter(f => f.file_type === 'MEM' && (!civilization || f.civilization === civilization?.toUpperCase()))
    .filter(f => {
      const fileName = f.file_path.split('/').pop() || f.file_path;
      return f.file_path.toLowerCase().includes(query) || fileName.toLowerCase().includes(query);
    })
    .slice(0, 10)
    .map(f => {
      const fileName = f.file_path.split('/').pop() || f.file_path;
      const subjectMatch = fileName.match(/MEM[–-][A-Z]+[–-](?:[A-Z]+[–-])?(.+)$/i);
      return {
        id: f.id,
        file_path: f.file_path,
        displayName: subjectMatch ? subjectMatch[1].replace(/\.md$/i, '') : fileName,
      };
    });
}, [memSearchQuery, allFiles, civilization]);
```

**Benefits**: 
- More efficient (only recalculates when dependencies change)
- Clearer separation of concerns
- Easier to test

---

## Summary

**High Priority** (Biggest impact):
1. #1: Extract civilization content loading (removes ~60 lines of duplicate code)
2. #2: Consolidate civilization state variables
3. #6: Extract file content detection logic

**Medium Priority** (Good simplification):
4. #3: Consolidate tracking refs
5. #4: Combine write mode state
6. #5: Merge duplicate effects in MemFileEditor

**Low Priority** (Nice to have):
7. #7: Helper functions for mem file updates
8. #8: Conditional polling
9. #9: Context instead of events
10. #10: useMemo for search

**Estimated Total Reduction**: ~200-300 lines of code, improved maintainability, and better performance.
