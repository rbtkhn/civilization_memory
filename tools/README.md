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

### Ontology-First & Corpus-Swap (Structure + CONNECTIONS)

**Skeleton export** — Strip MEMs to structure + CONNECTIONS only (invariant for corpus-swap):

```bash
python3 tools/cmc-skeleton-export.py --output .skeleton --civilization all
```

**Connector-pairs registry** — Extract Rome–Islam connector pairs from CONCEPT; validate both MEMs exist:

```bash
python3 tools/cmc-connector-pairs.py --validate --output connector-pairs.json
```

**Graph export** — Nodes and edges (JSON) for Neo4j or other graph tools:

```bash
python3 tools/cmc-graph-export.py --output .graph --civilization all
```

**Incremental:** Skeleton and graph export skip regeneration when input MEMs are unchanged (signature of paths + mtimes). Use `--force` to regenerate anyway.

**Regeneration pipeline (stub):** Skeleton + corpus config → populated MEMs + provenance. Spec: `docs/governance/REGENERATION–PIPELINE–SPEC.md`. Stub copies skeleton to output and writes provenance; extension points (retrieve, generate) are documented for future corpus + LLM integration:

```bash
python3 tools/cmc-regenerate.py --skeleton .skeleton --corpus ./corpus --output .regenerated
python3 tools/cmc-regenerate.py --dry-run   # log only
```

**Governance bundle (export as product):** Package CIV–MEM–CORE, MEM template, and content-composition rules into a versioned artifact for adoption or for the regeneration pipeline. Spec: `docs/governance/GOVERNANCE–BUNDLE–SPEC.md`.

```bash
python3 tools/cmc-governance-bundle-export.py [--output DIR] [--version v1.0]
```

Output: `governance-bundle/<version>/` (or `DIR/<version>/`) containing `CIV–MEM–CORE.md`, `CIV–MEM–TEMPLATE.md`, `content-composition.md`, and `manifest.json`. The manifest provides a structured summary (content_composition, template_sections_sample, connection_requirements) for programmatic consumers. Use `--output` to write elsewhere; use the same path as `governance_bundle` in the regeneration pipeline config when running with an exported bundle.

**Versioning:** After adding or editing MEMs or CONCEPT connector tables (IV-A / IV-B), run the three export scripts and commit the updated `.skeleton/`, `.graph/`, and (if used) `connector-pairs.json` so the ontology stays versioned with the repo. Do not add these outputs to `.gitignore`.

### Modes

1. **Write Mode**: File editing and drafting
2. **Learn Mode**: Extract learning from MEM files
3. **Lecture Mode**: Pedagogical exposition with LOGE

### Architecture

- **Frontend**: Next.js 14, TypeScript, React, Tailwind CSS
- **Backend**: SQLite database, Node.js file system API
- **AI Integration**: OpenAI and Anthropic API clients

See the cmc-console README.md for detailed setup and usage instructions.