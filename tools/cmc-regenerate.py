#!/usr/bin/env python3
"""Regeneration pipeline stub: skeleton + corpus config -> populated MEMs + provenance.

Implements the contract in docs/governance/REGENERATION–PIPELINE–SPEC.md.
Stub: no real retrieval or generation; copies skeleton to output and logs extension points.

Usage:
  python3 tools/cmc-regenerate.py [--config FILE] [--skeleton DIR] [--corpus DIR] [--output DIR]
  python3 tools/cmc-regenerate.py --skeleton .skeleton --corpus ./corpus --output .regenerated
  python3 tools/cmc-regenerate.py --dry-run
"""

from __future__ import annotations

import argparse
import json
import pathlib
import shutil
from datetime import datetime, timezone


ROOT = pathlib.Path(__file__).resolve().parent.parent
DEFAULT_CONFIG_PATH = ROOT / "pipeline-config.json"


def load_config(args: argparse.Namespace) -> dict:
    """Config from file (if --config) and CLI overrides."""
    config = {}
    if getattr(args, "config", None) and pathlib.Path(args.config).exists():
        path = pathlib.Path(args.config).resolve()
        config = json.loads(path.read_text(encoding="utf-8"))
    if getattr(args, "skeleton", None):
        config["skeleton_dir"] = args.skeleton
    if getattr(args, "corpus", None):
        config["corpus_path"] = args.corpus
    if getattr(args, "output", None):
        config["output_dir"] = args.output
    config.setdefault("skeleton_dir", ".skeleton")
    config.setdefault("corpus_path", "./corpus")
    config.setdefault("output_dir", ".regenerated")
    return config


def list_skeleton_nodes(skeleton_dir: pathlib.Path) -> list[pathlib.Path]:
    """All .md files under skeleton_dir (relative paths from skeleton_dir)."""
    if not skeleton_dir.exists():
        return []
    return sorted(skeleton_dir.rglob("*.md"))


def main() -> None:
    ap = argparse.ArgumentParser(
        description="Regeneration pipeline stub: skeleton + corpus -> populated MEMs + provenance"
    )
    ap.add_argument("--config", "-C", default=None, help="Path to pipeline-config.json")
    ap.add_argument("--skeleton", "-s", default=None, help="Skeleton directory (e.g. .skeleton)")
    ap.add_argument("--corpus", "-c", default=None, help="Corpus path (e.g. ./corpus)")
    ap.add_argument("--output", "-o", default=None, help="Output directory (e.g. .regenerated)")
    ap.add_argument("--dry-run", action="store_true", help="Log only; do not write output")
    args = ap.parse_args()

    config = load_config(args)
    skeleton_dir = (ROOT / config["skeleton_dir"]).resolve()
    corpus_path = (ROOT / config["corpus_path"]).resolve()
    output_dir = (ROOT / config["output_dir"]).resolve()

    nodes = list_skeleton_nodes(skeleton_dir)
    if not nodes:
        print("No skeleton files found. Run: python3 tools/cmc-skeleton-export.py --output .skeleton --civilization all")
        raise SystemExit(1)

    node_ids = [p.stem for p in nodes]
    for p in nodes:
        print(f"Would fill from corpus: {p.stem}")

    if args.dry_run:
        print(f"Dry-run: {len(node_ids)} nodes; output would go to {output_dir}")
        return

    output_dir.mkdir(parents=True, exist_ok=True)
    for p in nodes:
        rel = p.relative_to(skeleton_dir)
        out_path = output_dir / rel
        out_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(p, out_path)

    provenance = {
        "timestamp": datetime.now(tz=timezone.utc).isoformat(),
        "config": {
            "skeleton_dir": str(skeleton_dir.relative_to(ROOT)),
            "corpus_path": str(corpus_path.relative_to(ROOT)),
            "output_dir": str(output_dir.relative_to(ROOT)),
        },
        "nodes_filled": len(node_ids),
        "node_ids": node_ids,
        "pipeline": "cmc-regenerate.py (stub)",
        "extension_points": "Retrieve and Generate not implemented; skeleton copied as placeholder.",
    }
    prov_path = output_dir / "provenance.json"
    prov_path.write_text(json.dumps(provenance, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Regeneration stub: {len(node_ids)} nodes -> {output_dir} (provenance: {prov_path.name})")


if __name__ == "__main__":
    main()
