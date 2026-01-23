# CMC Console - Design Summary

## Overview

A **local-first web application** built with Next.js 14, TypeScript, and SQLite, serving as a governance console for the Civilizational Memory Codex (CMC). The console allows users to view, index, validate, and manage structured historical-civilizational text files stored in a Git repository.

## What Was Built (Phase 1)

### ✅ Core Infrastructure
- **Next.js 14 Application** with App Router
- **TypeScript** throughout for type safety
- **SQLite Database** for local indexing and validation logs
- **Tailwind CSS** for styling

### ✅ Database Schema
- `file_registry` - Index of all files with metadata
- `validation_logs` - Track validation results
- `change_history` - Audit trail of modifications

### ✅ Services
1. **Repository Service** (`lib/services/repository.service.ts`)
   - Recursive directory scanning
   - Git repository integration
   - File reading and stats

2. **File Classifier Service** (`lib/services/file-classifier.service.ts`)
   - Automatic file type detection (MEM, CIV-CORE, CIV-INDEX, etc.)
   - Civilization extraction from path
   - Pattern matching for file naming conventions

3. **Parser Service** (`lib/services/parser.service.ts`)
   - Front matter (YAML header) parsing
   - Metadata extraction
   - Content separation

### ✅ API Routes
- `POST /api/repository/scan` - Scan repository and update index
- `GET /api/repository/files` - Get all indexed files
- `GET /api/repository/file/[id]` - Get specific file with content

### ✅ User Interface
1. **Main Registry Page** (`app/page.tsx`)
   - File registry table with metadata
   - Scan repository button
   - File count and statistics

2. **File Registry Table** (`components/file-registry/FileRegistryTable.tsx`)
   - Sortable table view
   - Color-coded file types and validation status
   - Click to view file details

3. **File Viewer Page** (`app/file/[id]/page.tsx`)
   - File metadata display
   - Header metadata (JSON view)
   - File content display

## File Structure

```
tools/cmc-console/
├── app/
│   ├── api/
│   │   └── repository/
│   │       ├── scan/route.ts          # Scan repository API
│   │       ├── files/route.ts         # List files API
│   │       └── file/[id]/route.ts     # Get file API
│   ├── file/[id]/
│   │   └── page.tsx                   # File viewer page
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Main registry page
├── components/
│   └── file-registry/
│       └── FileRegistryTable.tsx      # Registry table component
├── lib/
│   ├── db/
│   │   ├── index.ts                   # Database connection & queries
│   │   └── schema.sql                 # Database schema
│   ├── services/
│   │   ├── file-classifier.service.ts # File classification logic
│   │   ├── parser.service.ts          # File parsing logic
│   │   └── repository.service.ts      # Repository operations
│   └── utils/
│       └── fs.ts                      # File system utilities
├── types/
│   └── index.ts                       # TypeScript type definitions
├── database/                          # SQLite database (gitignored)
│   └── index.db
└── [config files]                     # package.json, tsconfig.json, etc.
```

## Key Features

### 1. Repository Ingestion
- Scans local Git repository recursively
- Identifies all `.md` files
- Extracts file metadata automatically
- Updates SQLite index

### 2. File Classification
Automatically classifies files by:
- **Type**: MEM, CIV-CORE, CIV-INDEX, CIV-SCHOLAR, etc.
- **Civilization**: ROME, CHINA, ANGLIA, etc. (from directory structure)
- **Era**: ancient, medieval, modern (from header metadata)
- **Status**: draft, published, frozen (from header metadata)

### 3. Header Parsing
- Parses YAML front matter from files
- Extracts metadata (version, status, era, ARC sources, etc.)
- Handles files without front matter gracefully

### 4. User Interface
- Clean, modern UI with Tailwind CSS
- Responsive design
- Color-coded status indicators
- Easy navigation between registry and file views

## Design Principles Implemented

✅ **Local-First**: All data stored locally in SQLite, no cloud dependencies  
✅ **Plain-Text Canonical**: Files in Git repository remain source of truth  
✅ **Non-Intrusive**: Read-only in Phase 1, no file modifications  
✅ **Type-Safe**: Full TypeScript coverage  
✅ **Modular**: Clear separation of concerns (services, API, UI)

## Governance Rules (Enforced in Future Phases)

The architecture supports (but doesn't yet enforce) the governance rules:

- ⏳ **No Epistemic Authority**: Validation will check structure, not truth
- ⏳ **Additive-Only Modification**: Write operations will require explicit diffs
- ⏳ **Contradiction Preservation**: System will not resolve tensions
- ⏳ **Mode Symmetry**: Write/Learn/Lecture modes will have strict boundaries

## Next Steps (Future Phases)

### Phase 2: Validation Engine
- Header validation
- Section order validation
- ARC compliance checks
- Governance violation reporting

### Phase 3: Write Mode
- File editor
- Diff viewer
- Confirmation-gated writes
- Version tracking

### Phase 4: Learn Mode
- Learning extraction from MEM files
- Duplication detection
- Anchored insertion into CIV-SCHOLAR files
- Confirmation requirements

### Phase 5: Lecture Mode
- Mode locking
- LOGE (Lecture Option Generation Engine)
- Pedagogical option generation
- Explicit branching control

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (better-sqlite3)
- **Git**: simple-git
- **Parsing**: gray-matter (YAML front matter)

## Running the Application

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Configuration

Set `GIT_REPO_PATH` environment variable or edit `.env` file to point to your `civilization_memory` repository.

Default: `.` (current directory, which is the civilization_memory repository root)

## Notes

- Database is automatically initialized on first run
- Repository path can be configured via environment variable
- All file operations are read-only in Phase 1
- The system respects the governance principles outlined in the system prompt

