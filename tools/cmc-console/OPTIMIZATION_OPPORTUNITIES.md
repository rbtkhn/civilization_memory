# Optimization Opportunities Analysis

## Summary
After implementing INDEX-first MEM file loading, several similar optimization opportunities exist throughout the system. This document identifies them and estimates potential efficiency gains.

---

## 1. **CIV–MEM–CORE Caching** ⚡ HIGH IMPACT

### Current Behavior
- **Location**: `app/api/scholar/chat/route.ts` → `loadCIVMEMCORE()`
- **Called**: On **every LLM request** (every user message)
- **Process**: 
  1. Calls `getAll()` - scans entire registry (~1,000+ files)
  2. Searches through all files for CIV–MEM–CORE
  3. Reads file from disk
  4. Returns content

### Problem
- CIV–MEM–CORE is a **global preload file** that rarely changes
- Called on **every chat message** (high frequency)
- Full registry scan is unnecessary for a single, well-known file

### Optimization
**Cache CIV–MEM–CORE content in memory:**
- Load once on server startup or first request
- Cache with file modification time check
- Invalidate cache only if file changes
- Use direct file path lookup instead of `getAll()` scan

### Estimated Efficiency Gain
- **Before**: ~50-100ms per LLM request (database scan + file read)
- **After**: ~0-1ms per request (memory lookup)
- **Improvement**: **50-100x faster**
- **Impact**: Reduces latency on every user message

---

## 2. **Database Query Optimization: Replace `getAll()` + Filter with SQL WHERE** ⚡ HIGH IMPACT

### Current Behavior
**Affected Routes:**
- `/api/repository/core-files` → `getAll()` + filter `file_type === 'CIV-CORE'`
- `/api/repository/index-files` → `getAll()` + filter `file_type === 'CIV-INDEX'`
- `/api/repository/doctrine-files` → `getAll()` + filter `file_type === 'CIV-DOCTRINE'`
- `/api/repository/scholar-files` → `getAll()` + filter `file_type === 'CIV-SCHOLAR'`
- `/api/repository/mem-files` → `getAll()` + filter `file_type === 'MEM'`

**Pattern:**
```typescript
const allFiles = registry.getAll();  // Loads ALL files
files = files.filter(f => f.file_type === 'CIV-CORE');  // Filter in memory
```

### Problem
- Loads entire registry (~1,000+ files) into memory
- Filters in JavaScript instead of SQL
- Unnecessary data transfer and memory usage

### Optimization
**Add SQL WHERE clause methods to `getFileRegistry()`:**
```typescript
getByType: (fileType: FileType): FileRegistry[]
getByTypeAndCivilization: (fileType: FileType, civilization: string): FileRegistry[]
```

**Update routes to use:**
```typescript
const files = registry.getByType('CIV-CORE');
// or
const files = registry.getByTypeAndCivilization('CIV-CORE', civilization);
```

### Estimated Efficiency Gain
- **Before**: Load ~1,000 files, filter to ~10-50 files
- **After**: SQL returns only ~10-50 files directly
- **Database I/O**: **90-95% reduction**
- **Memory**: **90-95% reduction**
- **Speed**: **5-10x faster** per request

---

## 3. **Double-Fetch Pattern: Combine File List + Content** ⚡ MEDIUM IMPACT

### Current Behavior
**Location**: `app/page.tsx` (CIV–CORE, CIV–INDEX, CIV–DOCTRINE loading)

**Pattern:**
```typescript
// Step 1: Fetch file list
const res = await fetch(`/api/repository/core-files?civilization=${civ}`);
const data = await res.json();
const coreFile = data.files[0];

// Step 2: Fetch file content separately
const fileRes = await fetch(`/api/repository/file/${coreFile.id}`);
const fileData = await fileRes.json();
const content = fileData.file.content;
```

### Problem
- Two network round trips per file
- Two database queries per file
- Sequential loading (can't parallelize easily)

### Optimization
**Create combined endpoint:**
```typescript
GET /api/repository/civ-files?type=CIV-CORE&civilization=ROME&includeContent=true
```

**Returns:**
```json
{
  "success": true,
  "file": {
    "id": 123,
    "path": "...",
    "content": "...",  // Included if includeContent=true
    ...
  }
}
```

### Estimated Efficiency Gain
- **Before**: 2 network calls + 2 database queries per file
- **After**: 1 network call + 1 database query per file
- **Latency**: **~50% reduction** (eliminates one round trip)
- **Database**: **50% reduction** in queries

---

## 4. **Multiple `getAll()` Calls in Chat Route** ⚡ MEDIUM IMPACT

### Current Behavior
**Location**: `app/api/scholar/chat/route.ts` → `buildSystemPrompt()`

**Calls `getAll()` multiple times:**
1. Line 33: `loadCIVMEMCORE()` → `getAll()`
2. Line 98: Fallback CIV–CORE loading → `getAll()`
3. Line 405: IMAGINE mode CIV–CORE loading → `getAll()`

### Problem
- Same data loaded multiple times in single request
- Redundant database scans

### Optimization
**Pass file registry data as parameter:**
- Load registry once at start of request
- Pass to `buildSystemPrompt()` and `loadCIVMEMCORE()`
- Reuse same registry instance

### Estimated Efficiency Gain
- **Before**: 3x `getAll()` calls per LLM request
- **After**: 1x `getAll()` call per request
- **Database I/O**: **66% reduction**
- **Speed**: **~30-50ms faster** per request

---

## 5. **CIV–CORE/INDEX/DOCTRINE Metadata from INDEX** ⚡ LOW-MEDIUM IMPACT

### Current Behavior
**Similar to MEM files before optimization:**
- Query database for CIV–CORE file
- Query database for CIV–INDEX file
- Query database for CIV–DOCTRINE file

### Opportunity
**CIV–INDEX already contains:**
- Section II: Canonical CIV–CORE Engine (filename + version)
- Section XVI: Academic Reference Canon (ARC) info
- Could potentially include CIV–DOCTRINE reference

**Optimization:**
- Parse CIV–CORE filename from INDEX Section II
- Use direct file path lookup instead of database query
- Similar to MEM file optimization

### Estimated Efficiency Gain
- **Before**: Database query for CIV–CORE file
- **After**: Parse from INDEX + direct file lookup
- **Database**: **1 query eliminated** per civilization switch
- **Speed**: **~20-30ms faster** per switch

**Note**: Lower impact than MEM files because:
- Only 1 file per civilization (vs 151 MEM files)
- Less frequent (only on civilization switch vs every MEM selection)

---

## 6. **File Registry Client-Side Caching** ⚡ MEDIUM IMPACT

### Current Behavior
**Location**: `app/page.tsx`

**Pattern:**
- `loadFiles()` called on mount → fetches all files
- `loadFiles()` called after scan → refetches all files
- Files state passed to multiple components

### Problem
- Full registry fetched on every page load
- Refetched unnecessarily after scans
- No client-side caching

### Optimization
**Implement client-side cache:**
- Cache file registry in localStorage or React state
- Only refetch if:
  - Scan completes (invalidate cache)
  - Explicit refresh requested
  - Cache timestamp exceeds threshold (e.g., 5 minutes)
- Use React Query or SWR for automatic cache management

### Estimated Efficiency Gain
- **Before**: Full registry fetch on every page load (~100-200ms)
- **After**: Instant load from cache (~0-5ms)
- **Network**: **100% reduction** on cached loads
- **UX**: **Instant page load** after first visit

---

## 7. **Batch File Content Loading** ⚡ LOW-MEDIUM IMPACT

### Current Behavior
**Location**: `components/scholar/ScholarFileSelector.tsx`

**Pattern:**
- Load SCHOLAR file content individually
- Load MEM file content individually (when selected)
- Each file requires separate API call

### Opportunity
**Batch loading endpoint:**
```typescript
POST /api/repository/files/batch
Body: { fileIds: [1, 2, 3, 4, 5] }
Returns: { files: [{ id, content, ... }, ...] }
```

### Estimated Efficiency Gain
- **Before**: N network calls for N files
- **After**: 1 network call for N files
- **Latency**: **~80% reduction** for 5 files (eliminates 4 round trips)
- **Database**: Can use `IN` clause for batch query

---

## Priority Ranking

### 🔴 **High Priority** (Implement First)
1. **CIV–MEM–CORE Caching** - Called on every LLM request
2. **Database Query Optimization** - Affects all file-type routes

### 🟡 **Medium Priority** (Implement Next)
3. **Double-Fetch Pattern** - Improves civilization switching UX
4. **Multiple `getAll()` Calls** - Reduces redundant queries
5. **File Registry Client-Side Caching** - Improves page load time

### 🟢 **Low Priority** (Nice to Have)
6. **CIV–CORE/INDEX/DOCTRINE from INDEX** - Lower impact, similar to MEM optimization
7. **Batch File Content Loading** - Useful for bulk operations

---

## Implementation Notes

### Database Query Optimization
**Add to `lib/db/index.ts`:**
```typescript
getByType: (fileType: FileType): FileRegistry[] => {
  const stmt = database.prepare('SELECT * FROM file_registry WHERE file_type = ? ORDER BY file_path');
  return stmt.all(fileType) as FileRegistry[];
},
getByTypeAndCivilization: (fileType: FileType, civilization: string): FileRegistry[] => {
  const stmt = database.prepare('SELECT * FROM file_registry WHERE file_type = ? AND civilization = ? ORDER BY file_path');
  return stmt.all(fileType, civilization.toUpperCase()) as FileRegistry[];
},
```

### CIV–MEM–CORE Caching
**Add to `app/api/scholar/chat/route.ts`:**
```typescript
let civMemCoreCache: { content: string; mtime: number } | null = null;

async function loadCIVMEMCORE(): Promise<string | null> {
  // Check cache validity
  if (civMemCoreCache) {
    // Verify file hasn't changed (check mtime)
    // Return cached content if valid
  }
  
  // Load and cache
  // ...
}
```

---

## Expected Overall Impact

If all optimizations are implemented:

- **LLM Request Latency**: **~100-150ms faster** (CIV–MEM–CORE cache + multiple getAll() reduction)
- **Civilization Switch**: **~70-100ms faster** (double-fetch elimination + INDEX parsing)
- **Page Load**: **~100-200ms faster** (client-side caching)
- **Database Load**: **~80-90% reduction** in unnecessary queries
- **Network Traffic**: **~60-70% reduction** in redundant requests

**Total System Efficiency Gain: ~3-5x improvement** in typical user workflows.

