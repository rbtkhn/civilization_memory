# Repository Setup

## Default Path

The app expects files from the current directory (the civilization_memory repository root).

Since `cmc-console` is now part of the `civilization_memory` repository, it can access files directly from the repository root.

## Option 1: Clone the Repository (Recommended)

Clone the repository to the expected location:

```bash
cd /Users/robertkuhne/Documents/CIV–MEM
git clone https://github.com/rbtkhn/civilization_memory.git
```

This will create `/Users/robertkuhne/Documents/CIV–MEM/civilization_memory/` with all the files.

## Option 2: Set Custom Path via Environment Variable

If your repository is elsewhere, create a `.env` file in the `cmc-console` directory:

```bash
cd /Users/robertkuhne/Documents/CIV–MEM/cmc-console
echo "GIT_REPO_PATH=/absolute/path/to/your/civilization_memory" > .env
```

Or set it when running the dev server:

```bash
export GIT_REPO_PATH=/absolute/path/to/your/civilization_memory
npm run dev
```

## Verify the Path

After cloning or setting the path, verify it exists:

```bash
ls -la /Users/robertkuhne/Documents/CIV–MEM/civilization_memory
```

You should see directories like:
- CIVILIZATION/
- SCHOLAR/
- SYMPOSIUM/
- ARCHIVE/
- etc.

## After Setup

Once the repository is in place, start the app and click "Scan Repository" in the browser to index all files.

