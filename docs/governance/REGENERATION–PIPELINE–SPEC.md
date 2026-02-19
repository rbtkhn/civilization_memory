REGENERATION–PIPELINE–SPEC
Civilizational Memory Codex · Corpus-Driven Content Pipeline
Contract and Extension Points

Status: ACTIVE
Date: February 2026
Governed by: CMC 3.4

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
The regeneration pipeline takes the **invariant skeleton** (structure + CONNECTIONS only) and a **curated corpus**, and produces **populated MEMs** with full provenance. The graph and governance rules constrain output; the pipeline does not define the ontology—it fills it.

────────────────────────────────────────────────────────────
II. INPUTS
────────────────────────────────────────────────────────────
1. **Skeleton directory** (required)  
   Path to the output of `cmc-skeleton-export.py` (e.g. `.skeleton/`). Each file is one MEM node: header + MEM CONNECTIONS only. Structure is invariant.

2. **Corpus config** (required for real runs)  
   Describes the curated corpus: path(s) to documents, optional tags (theme, civilization, period), and attribution rules. Format: path to a corpus manifest (e.g. JSON or directory listing). Stub may use a placeholder path.

3. **Governance bundle** (optional)  
   Path to exported governance (templates, content-composition rules, perspective/attribution). If absent, pipeline uses repo defaults (CIV–MEM–CORE, CIV–MEM–TEMPLATE). To produce a bundle: run `python3 tools/cmc-governance-bundle-export.py [--output DIR] [--version v1.0]`; output lives at `governance-bundle/<version>/` (or `DIR/<version>/`). Pass that directory as `governance_bundle` in pipeline config. Spec: `docs/governance/GOVERNANCE–BUNDLE–SPEC.md`.

4. **Connector-pairs registry** (optional)  
   Path to `connector-pairs.json` (from `cmc-connector-pairs.py`). Used to enforce same-subject pairing when filling connector-pair nodes.

────────────────────────────────────────────────────────────
III. OUTPUTS
────────────────────────────────────────────────────────────
1. **Populated MEMs**  
   One file per skeleton node, under the output directory, preserving directory structure (e.g. `output/content/civilizations/ROME/MEM–ROME–ARMENIA.md`). Each file: header + filled sections (from template) + CONNECTIONS unchanged. Content is generated or selected from the corpus under governance rules.

2. **Provenance file** (required)  
   Single file per run, e.g. `provenance.json` in the output directory:
   - `run_id` or `timestamp` (ISO)
   - `config`: skeleton_dir, corpus_path, output_dir
   - `nodes_filled`: count and/or list of MEM ids
   - `corpus_version` or `corpus_manifest_hash` (if available)
   - `pipeline_version` or script identifier

3. **Per-node provenance** (optional)  
   For each populated MEM, a sidecar or inline block recording: corpus segments used, model/call id (if LLM), governance rules applied.

────────────────────────────────────────────────────────────
IV. STEPS (CONTRACT)
────────────────────────────────────────────────────────────
1. **Load config** — Resolve skeleton_dir, corpus_path, output_dir (and optional governance bundle, connector-pairs registry).
2. **Enumerate nodes** — List all skeleton files; each corresponds to one MEM id (from path/filename).
3. **For each node:**
   a. Read skeleton (header + CONNECTIONS).
   b. **Extension point: retrieve** — From corpus, retrieve segments relevant to this node (by subject, civilization, template section). Stub: no-op or placeholder.
   c. **Extension point: generate** — For each template section (except CONNECTIONS), generate or select content from retrieved segments, respecting governance (perspective, attribution, connection semantics). Stub: leave empty or copy placeholder text.
   d. Write populated MEM to output dir (same relative path as skeleton).
   e. Optionally write per-node provenance.
4. **Write run provenance** — Single provenance.json in output_dir with timestamp, config, nodes_filled.
5. **Exit** — 0 on success; non-zero on config error or write failure.

────────────────────────────────────────────────────────────
V. EXTENSION POINTS (WHERE TO PLUG IN CORPUS + LLM)
────────────────────────────────────────────────────────────
- **Retrieve:** Given (mem_id, section, governance), return list of corpus segments (text + attribution). Implement as: corpus index lookup, vector search over corpus, or API to external store.
- **Generate:** Given (skeleton section, retrieved segments, governance rules), return draft text. Implement as: template fill from segments only, or LLM call with prompt that includes segments + governance constraints (e.g. "same subject as connector pair X", "use perspective Y").
- **Validate:** After generate, check connection constraints (e.g. connector pairs share subject; CONNECTIONS unchanged). Optional step before write.

────────────────────────────────────────────────────────────
VI. CONFIG FILE FORMAT (RECOMMENDED)
────────────────────────────────────────────────────────────
Example `pipeline-config.json` (repo root or tools/):

```json
{
  "skeleton_dir": ".skeleton",
  "corpus_path": "./corpus",
  "output_dir": ".regenerated",
  "governance_bundle": null,
  "connector_pairs": "connector-pairs.json"
}
```

CLI may override: e.g. `--skeleton .skeleton --corpus ./corpus --output .regenerated`.

────────────────────────────────────────────────────────────
VII. STUB BEHAVIOUR
────────────────────────────────────────────────────────────
The stub script (`cmc-regenerate.py`) implements the contract with no real retrieval or generation:
- Reads config; enumerates skeleton nodes.
- For each node: logs "Would fill from corpus: <mem_id>"; optionally copies skeleton to output (so output dir is structurally complete).
- Writes provenance.json with timestamp, config, nodes_filled count and list.
- Ensures the pipeline interface is runnable and documentable; extension points are clearly marked in code.

────────────────────────────────────────────────────────────
END OF SPEC
────────────────────────────────────────────────────────────
