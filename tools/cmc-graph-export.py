#!/usr/bin/env python3
"""Export memory graph as nodes and edges (JSON) for Neo4j or other graph tools.

Nodes: MEM id, label (from Subject or id), civilization.
Edges: source, target, type (SAME_CIV | CROSS_CIV | CONNECTOR_PAIR).

Usage:
  python3 tools/cmc-graph-export.py [--output DIR] [--civilization ROME|ISLAM|all]
  python3 tools/cmc-graph-export.py --output .graph --civilization all
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import pathlib
from datetime import datetime, timezone


ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE_FILENAME = ".cache.json"
CONTENT = ROOT / "content" / "civilizations"
SEP = "────────────────────────────────────────────────────────────"
MEM_PATTERN = re.compile(r"MEM–[A-Z]+–[A-Z0-9–]+(?:\s|;|\.|,|\)|$)")


def extract_connections_section(text: str) -> str:
    """Return raw text of MEM CONNECTIONS section."""
    lines = text.splitlines()
    in_conn = False
    start_idx = None
    for i, line in enumerate(lines):
        if re.search(r"MEM\s*CONNECTIONS", line, re.IGNORECASE):
            for j in range(i + 1, len(lines)):
                if SEP in lines[j]:
                    start_idx = j + 1
                    in_conn = True
                    break
            break
    if start_idx is None:
        return ""
    out = []
    for i in range(start_idx, len(lines)):
        if SEP in lines[i] or lines[i].strip().startswith("END OF FILE"):
            break
        out.append(lines[i])
    return "\n".join(out)


def extract_mem_refs(conn_text: str) -> list[tuple[str, str]]:
    """(mem_id, edge_type). edge_type: SAME_CIV | CROSS_CIV | CONNECTOR_PAIR."""
    refs = []
    current_type = "SAME_CIV"
    for line in conn_text.splitlines():
        line_lower = line.lower()
        if "same-civilization" in line_lower or "same_civilization" in line_lower:
            current_type = "SAME_CIV"
        if "cross-civilization" in line_lower or "connector pair" in line_lower:
            current_type = "CONNECTOR_PAIR"  # treat cross-civ as connector pair when from CONCEPT
        for m in MEM_PATTERN.finditer(line):
            mem_id = m.group(0).strip().rstrip(".;,)")
            refs.append((mem_id, current_type))
    return refs


def mem_path_to_id(path: pathlib.Path) -> str:
    """content/civilizations/ROME/MEM–ROME–ARMENIA.md -> MEM–ROME–ARMENIA"""
    return path.stem


def mem_id_to_civ(mem_id: str) -> str:
    """MEM–ROME–ARMENIA -> ROME."""
    parts = re.split(r"[–\-]", mem_id, maxsplit=2)
    return parts[1].strip() if len(parts) >= 2 else ""


def collect_mem_paths(civilization: str | None) -> list[pathlib.Path]:
    """All MEM–*.md under content/civilizations/[CIV] or all."""
    paths = []
    if civilization and civilization != "all":
        base = CONTENT / civilization
        if base.exists():
            paths = sorted(base.glob("MEM–*.md"))
    else:
        for civ_dir in sorted(CONTENT.iterdir()):
            if civ_dir.is_dir():
                paths.extend(sorted(civ_dir.glob("MEM–*.md")))
    return paths


def build_graph(mem_paths: list[pathlib.Path]) -> tuple[list[dict], list[dict]]:
    """(nodes, edges). Nodes have id, label, civilization; edges have source, target, type."""
    node_ids = {mem_path_to_id(p) for p in mem_paths}
    nodes = []
    for p in mem_paths:
        nid = mem_path_to_id(p)
        civ = mem_id_to_civ(nid)
        nodes.append({"id": nid, "label": nid.replace("MEM–" + civ + "–", ""), "civilization": civ})
    edges = []
    for p in mem_paths:
        text = p.read_text(encoding="utf-8", errors="replace")
        conn = extract_connections_section(text)
        if not conn:
            continue
        source = mem_path_to_id(p)
        for target, etype in extract_mem_refs(conn):
            if target in node_ids and target != source:
                edges.append({"source": source, "target": target, "type": etype})
    return nodes, edges


def compute_signature(paths: list[pathlib.Path]) -> str:
    """Hash of (path, mtime) for all paths so we skip when inputs unchanged."""
    key = sorted((str(p.relative_to(ROOT)), p.stat().st_mtime) for p in paths)
    return hashlib.sha256(repr(key).encode()).hexdigest()


def main() -> None:
    ap = argparse.ArgumentParser(description="Export MEM graph (nodes + edges) for Neo4j/integration")
    ap.add_argument("--output", "-o", default=".graph", help="Output directory (default: .graph)")
    ap.add_argument("--civilization", "-c", default="all", help="ROME, ISLAM, or all")
    ap.add_argument("--force", "-f", action="store_true", help="Regenerate even if signature unchanged")
    args = ap.parse_args()
    out_dir = (ROOT / args.output).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    paths = collect_mem_paths(args.civilization)
    signature = compute_signature(paths)
    cache_path = out_dir / CACHE_FILENAME
    if not args.force and cache_path.exists():
        try:
            cache = json.loads(cache_path.read_text(encoding="utf-8"))
            if cache.get("signature") == signature:
                print("No change (signature unchanged). Skipping graph regeneration.")
                return
        except (json.JSONDecodeError, KeyError):
            pass
    nodes, edges = build_graph(paths)
    payload = {"nodes": nodes, "edges": edges}
    out_path = out_dir / "graph.json"
    out_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    cache_path.write_text(
        json.dumps({
            "signature": signature,
            "generated_at": datetime.now(tz=timezone.utc).isoformat(),
            "nodes": len(nodes),
            "edges": len(edges),
        }, indent=2),
        encoding="utf-8",
    )
    print(f"Graph export: {len(nodes)} nodes, {len(edges)} edges -> {out_path}")


if __name__ == "__main__":
    main()
