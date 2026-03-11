GOVERNANCE–BUNDLE–SPEC
Civilizational Memory Codex · Exportable Governance Artifact
"Governance as Product" — Adoption and Testability

Status: ACTIVE
Date: February 2026
Governed by: CMC 3.5

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────
The governance bundle is a **versioned, self-contained artifact** that packages the rules and templates another project or pipeline needs to produce CIV–MEM–compliant content. It implements "governance as product": the same constraints that govern this repo can be consumed by adopters, regeneration pipelines, or validators without requiring full repo clone or cursor-rule load.

Use cases:
• **Regeneration pipeline** — Load bundle to enforce MEM structure, section roles, and content-composition when filling skeleton from corpus.
• **Adoption** — Another corpus or vertical (e.g. legal, policy) uses the same ontology and governance to produce comparable MEMs.
• **Validation** — A checker validates MEMs or draft output against bundle rules (required sections, voice roles, Barnes dimension).
• **Investor/demo** — Canonical snapshot of "what governance we enforce" in a single export.

────────────────────────────────────────────────────────────
II. BUNDLE CONTENTS
────────────────────────────────────────────────────────────
Each bundle version is a directory containing:

1. **CIV–MEM–CORE** (full or consumer extract)  
   The system core that defines MEM authority, connection rules, version decoupling, and the content-composition rule (VP-1.g). Consumer extract may omit internal upgrade notes and keep binding sections.

2. **CIV–MEM–TEMPLATE** (full or section summary)  
   The memory file template: required sections, layer-2/layer-3 architecture, evidentiary standards. Full file or a structured summary (section list, required vs optional, type-specific fields).

3. **Content-composition**  
   Standalone summary of: file types (GEO–MEM vs Subject MEM), primary/secondary voice by type, section-role guidance (which voice leads which section type), and Barnes dimension (required third role: jurisdiction, liability, defection, institutional survival, irreversibility; or N/A). No numerical proportions; emphasis by primary vs secondary and section role.

4. **Manifest** (`manifest.json`)  
   Machine-readable index: bundle version, list of included files with paths, and a **structured summary** for programmatic use:
   - `content_composition`: file types, voice roles, section_role_table, barnes_required
   - `template_sections`: ordered list of required/optional section titles
   - `connection_requirements`: MEM CONNECTIONS mandatory, connector-pair reference
   - `version`, `generated_at`, `source_repo` (or tag)

────────────────────────────────────────────────────────────
III. VERSIONING
────────────────────────────────────────────────────────────
• **Bundle version** follows semantic-ish versioning (e.g. v1.0, v1.1). Bump when CORE, template, or content-composition rules change in a way that affects downstream consumers.
• **Output path** — e.g. `governance-bundle/v1.0/` or `.governance-bundle/v1.0/`. One directory per bundle version; manifest at root of that directory.
• **Naming** — Optional single file alternative: `governance-bundle-v1.0.zip` or `governance-bundle-v1.0.json` (manifest only, with inline excerpts). Directory form is preferred for readability and diffing.

────────────────────────────────────────────────────────────
IV. CONSUMER CONTRACT
────────────────────────────────────────────────────────────
• **Humans** — Read CIV–MEM–CORE, CIV–MEM–TEMPLATE, and content-composition in the bundle to enforce or replicate MEM authoring rules.
• **Programs** — Read `manifest.json` for version and structured summary; optionally read full CORE/template files for section text. Pipeline or validator uses `content_composition` and `template_sections` to drive generation or validation.
• **Regeneration pipeline** — REGENERATION–PIPELINE–SPEC may reference the bundle as optional input ("Governance bundle path"); when provided, the pipeline applies bundle rules when generating content (section order, voice roles, Barnes dimension).

────────────────────────────────────────────────────────────
V. EXPORT SCRIPT CONTRACT
────────────────────────────────────────────────────────────
• **Input:** Repo paths to CIV–MEM–CORE, CIV–MEM–TEMPLATE, and (optional) path to content-composition rule or summary.
• **Output:** A directory `governance-bundle/<version>/` containing: copies of CORE and TEMPLATE; content-composition.md (summary); manifest.json.
• **Idempotent:** Re-run with same version overwrites; version supplied via CLI or inferred from CORE/template version.
• **No transformation of CORE/template** — Copy as-is so the bundle is a true snapshot. Content-composition is written as a short summary document by the script (or from a maintained source file).

────────────────────────────────────────────────────────────
END OF SPEC
────────────────────────────────────────────────────────────
