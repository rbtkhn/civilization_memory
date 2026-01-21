# CMC Console

Governance console for the Civilizational Memory Codex (CMC) - a local-first web application for managing, validating, auditing, and pedagogically deploying a corpus of structured historical-civilizational text files.

## Features (Phase 1)

- **Repository Ingestion**: Scan local Git repository and index all markdown files
- **File Classification**: Automatic classification of files by type (MEM, CIV-CORE, etc.), civilization, and era
- **Header Parsing**: Extract and parse front matter metadata from files
- **File Registry**: View all indexed files in a searchable table
- **File Viewer**: View individual file contents and metadata

## Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Configure repository path**:
   - Set `GIT_REPO_PATH` environment variable to point to your civilization_memory repository
   - Default: `.` (current directory, which is the civilization_memory repository root)

3. **Initialize database**:
   - Database will be automatically initialized on first run
   - Located at `database/index.db`

4. **Run development server**:
```bash
npm run dev
```

5. **Access the console**:
   - Open http://localhost:3000
   - Click "Scan Repository" to index files

## Project Structure

```
cmc-console/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── file/[id]/         # File viewer page
│   └── page.tsx           # Main registry page
├── components/            # React components
│   └── file-registry/     # File registry components
├── lib/                   # Core logic
│   ├── db/               # Database setup
│   └── services/         # Business logic services
├── types/                # TypeScript definitions
└── database/             # SQLite database (gitignored)
```

## Architecture

See [ARCHITECTURE.md](../ARCHITECTURE.md) for detailed architecture documentation.

## Governance Rules

This system enforces strict governance rules:

- **No Epistemic Authority**: Validates structure, not truth
- **Additive-Only Modification**: All changes are explicit and diff-tracked
- **Contradiction Preservation**: Tensions are preserved, not resolved
- **Mode Symmetry**: Strict boundaries between Write/Learn/Lecture modes

## Development Roadmap

- [x] Phase 1: Repository Ingestion & Indexing
- [ ] Phase 2: Validation Engine
- [ ] Phase 3: Write Mode
- [ ] Phase 4: Learn Mode
- [ ] Phase 5: Lecture Mode (with LOGE)

## License

Private project - see repository license.

