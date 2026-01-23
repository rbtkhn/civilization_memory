# Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Access to the `civilization_memory` Git repository (or set `GIT_REPO_PATH` environment variable)

## Installation

1. **Navigate to the project directory**:
```bash
cd cmc-console
```

2. **Install dependencies**:
```bash
npm install
```

Note: If you encounter permission errors with npm, you may need to use a different Node version manager (like `nvm`) or install packages globally.

3. **Configure repository path** (optional):
   - Copy `.env.example` to `.env`
   - Edit `.env` and set `GIT_REPO_PATH` to the absolute path of your `civilization_memory` repository
   - If not set, defaults to `.` (current directory, which is the civilization_memory repository root)

4. **Run the development server**:
```bash
npm run dev
```

5. **Access the console**:
   - Open http://localhost:3000 in your browser
   - Click "Scan Repository" to index all files in the repository

## Database

The SQLite database will be automatically created on first run at:
- `database/index.db`

This file is gitignored and contains:
- File registry (indexed files)
- Validation logs
- Change history

## Troubleshooting

### "Repository not found" errors
- Ensure the `civilization_memory` repository exists at the configured path
- Check that `GIT_REPO_PATH` environment variable is set correctly
- Verify the repository contains markdown files

### Database errors
- Ensure the `database/` directory is writable
- Delete `database/index.db` and restart to recreate the database

### File parsing errors
- Check that files have valid YAML front matter (if expected)
- Files without front matter will still be indexed but with minimal metadata

## Next Steps

After setup, you can:
1. Scan the repository to index all files
2. Browse the file registry
3. View individual file contents and metadata
4. (Future phases) Validate files, edit files, use different modes

