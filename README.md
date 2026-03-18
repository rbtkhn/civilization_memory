# Civilization Memory Codex (CMC)

A structured corpus for the study of civilizational history and strategy, optimized for structured interface with large language models.

## Repository Structure

```
civilization_memory/
├── docs/                       # Documentation and governance
│   ├── architecture/           # Technical architecture docs
│   ├── governance/            # Core governance files and templates
│   ├── guides/                # User guides and tutorials
│   ├── essays/                # Essays (taxonomy frontmatter)
│   ├── taxonomy.md            # Content classification axes
│   └── templates/             # Template files for content creation
├── content/                    # Historical content
│   ├── civilizations/         # Civilization-specific files
│   │   ├── rome/             # Roman civilization
│   │   ├── china/            # Chinese civilization
│   │   ├── anglia/           # English/British civilization
│   │   └── [other civs]/     # Additional civilizations
│   ├── scholar/              # Learning accumulations
│   └── archive/              # Archived content
├── tools/                     # Application code
│   └── cmc-console/          # Web console for content management
└── scripts/                  # Build and deployment scripts
```

## Core Components

### 📚 Documentation (`docs/`)
- **Architecture**: Technical design and system architecture
- **Governance**: Core rules and governance framework
- **Guides**: User guides and demonstrations
- **Templates**: File templates for content creation

### 📜 Historical Content (`content/`)
- **Civilizations**: Structured historical content for each civilization
- **Scholar**: Learning accumulations and procedural cognition
- **Archive**: Historical content preservation

### 🛠️ Tools (`tools/`)
- **CMC Console**: Web application for content management and analysis

## File Classification System

The CMC uses a strict taxonomy for content organization:

- `CIV–MEM–CORE`: Global system law and governance
- `CIV–CORE–[CIVILIZATION]`: Civilization-specific continuity engines
- `MEM–[CIVILIZATION]–[SUBJECT]`: Atomic historical memory objects
- `CIV–INDEX–[CIVILIZATION]`: Canonical registries
- `CIV–SCHOLAR–[CIVILIZATION]`: Learning accumulation ledgers
- `CIV–DOCTRINE–[NAME]`: Frozen synthesis outputs

## Operating Modes

The CMC Console supports three distinct modes:

1. **Write Mode**: File editing and drafting (blocks learning extraction)
2. **Learn Mode**: Extract learning from MEM files, insert into SCHOLAR files
3. **Lecture Mode**: Pedagogical exposition with mandatory LOGE (Lecture Option Generation Engine)

## Governance Principles

- **No Epistemic Authority**: Validates structure, not truth claims
- **Additive-Only Modification**: All changes are explicit and diff-tracked
- **Contradiction Preservation**: Historical tensions preserved, not resolved
- **Plain-Text Canonical**: Git repository files are single source of truth

## Getting Started

1. **Setup**: Navigate to `tools/cmc-console/` and run `npm install`
2. **Development**: Run `npm run dev` to start the development server
3. **Repository Scan**: Use the web interface to scan and index content files
4. **Quality Checks**:
   - `tools/cmc-governance-checks.sh .`
   - `python3 tools/cmc-validate-corpus.py --changed-only`
5. **Fast Local Search**:
   - `python3 tools/cmc-index-search.py build`
   - `python3 tools/cmc-index-search.py query "your terms"`

## Contributing

See `CONTRIBUTING.md` for PR workflow, doctrinal eligibility checklist,
and local validation commands.

## License

This repository uses split licensing:

- Code and tooling: `LICENSE-CODE` (MIT)
- Historical content: `LICENSE-CONTENT` (CC BY-SA 4.0 unless overridden in-file)
