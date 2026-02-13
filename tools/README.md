# Tools

This directory contains application code and tools for the Civilization Memory Codex (CMC) system.

## Directory Structure

- **cmc-console/**: Main web application for content management and analysis

## CMC Console

The CMC Console is a Next.js web application that provides:

### Features
- **Repository Management**: Scan and index historical content files
- **File Registry**: Browse and search structured content
- **Mode Operations**: Write, Learn, and Lecture modes
- **LLM Integration**: Structured interface with large language models

### Getting Started

```bash
cd tools/cmc-console
npm install
npm run dev
```

### Run in Docker

```bash
cd tools/cmc-console
docker build -t cmc-console .
docker run --rm -p 3000:3000 cmc-console
```

### Fast Content Search

```bash
python3 tools/cmc-index-search.py build
python3 tools/cmc-index-search.py query "monroe doctrine"
```

### Validation Helpers

```bash
tools/cmc-governance-checks.sh .
python3 tools/cmc-validate-corpus.py --changed-only
```

### Modes

1. **Write Mode**: File editing and drafting
2. **Learn Mode**: Extract learning from MEM files
3. **Lecture Mode**: Pedagogical exposition with LOGE

### Architecture

- **Frontend**: Next.js 14, TypeScript, React, Tailwind CSS
- **Backend**: SQLite database, Node.js file system API
- **AI Integration**: OpenAI and Anthropic API clients

See the cmc-console README.md for detailed setup and usage instructions.