#!/usr/bin/env python3
"""Export MEM skeleton: structure + CONNECTIONS only (ontology-first, corpus-swap base).

Preserves: header block (title, Status, Version, Civilization, Subject, Dates, Class)
           + MEM CONNECTIONS section only. All other content cleared.

Usage:
  python3 tools/cmc-skeleton-export.py [--output DIR] [--civilization ROME|ISLAM|all]
  python3 tools/cmc-skeleton-export.py --output .skeleton --civilization all

Implements: structure-content separation; skeleton as invariant artifact for regeneration.
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


def extract_header(text: str) -> str:
    """Everything before the first section (block starting with SEP then "I. ")."""
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if SEP in line and i + 1 < len(lines):
            next_line = lines[i + 1].strip()
            if re.match(r"^I\.\s", next_line):
                return "\n".join(lines[:i]).rstrip()
    return "\n".join(lines).rstrip()


def extract_connections(text: str) -> str | None:
    """MEM CONNECTIONS section (from section start to next SEP or END OF FILE)."""
    # Find line that starts a section containing "MEM CONNECTIONS"
    lines = text.splitlines()
    in_conn = False
    start_idx = None
    for i, line in enumerate(lines):
        if re.match(r".*MEM\s*CONNECTIONS.*", line, re.IGNORECASE):
            # Section title line; section starts after the next SEP
            for j in range(i + 1, len(lines)):
                if SEP in lines[j]:
                    start_idx = j + 1
                    in_conn = True
                    break
            break
    if start_idx is None:
        return None
    out = []
    for i in range(start_idx, len(lines)):
        if SEP in lines[i] or lines[i].strip().startswith("END OF FILE"):
            break
        out.append(lines[i])
    return "\n".join(out).rstrip() if out else None


def collect_mem_paths(civilization: str | None) -> list[pathlib.Path]:
    """All MEM–*.md under content/civilizations/[CIV] or all civs."""
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


def write_skeleton(mem_path: pathlib.Path, out_dir: pathlib.Path) -> bool:
    """Write skeleton file; return True if CONNECTIONS found."""
    text = mem_path.read_text(encoding="utf-8", errors="replace")
    header = extract_header(text)
    conn = extract_connections(text)
    if not conn:
        return False
    rel = mem_path.relative_to(ROOT)
    out_path = out_dir / rel
    out_path.parent.mkdir(parents=True, exist_ok=True)
    body = (
        header
        + "\n\n"
        + SEP + "\n"
        + "SKELETON — CONTENT CLEARED FOR CORPUS-SWAP\n"
        + "Preserved: structure + CONNECTIONS only. Regenerate content from curated corpus.\n"
        + SEP + "\n\n"
        + SEP + "\n"
        + "MEM CONNECTIONS (MANDATORY)\n"
        + SEP + "\n\n"
        + conn
        + "\n\n"
        + SEP + "\n"
        + f"END OF FILE — {mem_path.stem} — skeleton\n"
        + SEP + "\n"
    )
    out_path.write_text(body, encoding="utf-8")
    return True


def compute_signature(paths: list[pathlib.Path]) -> str:
    """Hash of (path, mtime) for all paths so we skip when inputs unchanged."""
    key = sorted((str(p.relative_to(ROOT)), p.stat().st_mtime) for p in paths)
    return hashlib.sha256(repr(key).encode()).hexdigest()


def main() -> None:
    ap = argparse.ArgumentParser(description="Export MEM skeleton (structure + CONNECTIONS only)")
    ap.add_argument("--output", "-o", default=".skeleton", help="Output directory (default: .skeleton)")
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
                print("No change (signature unchanged). Skipping skeleton regeneration.")
                return
        except (json.JSONDecodeError, KeyError):
            pass
    written = 0
    skipped = 0
    for p in paths:
        if write_skeleton(p, out_dir):
            written += 1
        else:
            skipped += 1
    cache_path.write_text(
        json.dumps({
            "signature": signature,
            "generated_at": datetime.now(tz=timezone.utc).isoformat(),
            "written": written,
            "skipped": skipped,
        }, indent=2),
        encoding="utf-8",
    )
    print(f"Skeleton export: {written} written, {skipped} skipped (no CONNECTIONS) -> {out_dir}")


if __name__ == "__main__":
    main()
