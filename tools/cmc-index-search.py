#!/usr/bin/env python3
"""Build/query a lightweight full-text index for CMC content.

Includes optional YAML frontmatter facets (see docs/taxonomy.md).

Usage:
  python3 tools/cmc-index-search.py build
  python3 tools/cmc-index-search.py query "monroe doctrine"
  python3 tools/cmc-index-search.py query "peace" --lane essay --theme theology
  python3 tools/cmc-index-search.py facets
  python3 tools/cmc-index-search.py list --lane essay
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sqlite3
import time


ROOT = pathlib.Path(__file__).resolve().parent.parent
DB_PATH = ROOT / ".cache" / "cmc_search.db"

# Indexed roots relative to repo root
INDEX_GLOBS = [
    "content/**/*.md",
    "docs/**/*.md",
]


def collect_docs() -> list[pathlib.Path]:
    seen: set[pathlib.Path] = set()
    out: list[pathlib.Path] = []
    for pattern in INDEX_GLOBS:
        for p in ROOT.glob(pattern):
            if p.is_file() and p.suffix.lower() == ".md":
                rp = p.resolve()
                if rp not in seen:
                    seen.add(rp)
                    out.append(rp)
    return sorted(out)


def doc_title(text: str, fallback: str) -> str:
    # Skip YAML frontmatter for title line
    body = strip_frontmatter(text)
    first = body.splitlines()[0].strip() if body else ""
    if first.startswith("#"):
        first = first.lstrip("#").strip()
    return first or fallback


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---"):
        return text
    parts = text.split("---", 2)
    if len(parts) >= 3:
        return parts[2].lstrip("\n")
    return text


def parse_frontmatter(text: str) -> dict:
    """Minimal frontmatter parser (taxonomy subset; no multiline values)."""
    if not text.startswith("---"):
        return {}
    m = re.match(r"^---\s*\n(.*?)\n---\s*", text, re.DOTALL)
    if not m:
        return {}
    block = m.group(1)
    out: dict = {}
    for line in block.splitlines():
        line = line.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            continue
        key, _, rest = line.partition(":")
        key = key.strip()
        rest = rest.strip()
        if not key:
            continue
        if rest.startswith("[") and rest.endswith("]"):
            inner = rest[1:-1]
            out[key] = [x.strip().strip("'\"") for x in inner.split(",") if x.strip()]
        elif (rest.startswith('"') and rest.endswith('"')) or (
            rest.startswith("'") and rest.endswith("'")
        ):
            out[key] = rest[1:-1]
        else:
            out[key] = rest
    return out


def meta_row(path: str, fm: dict) -> tuple:
    themes = fm.get("theme")
    if isinstance(themes, list):
        themes_json = json.dumps(themes)
    elif themes:
        themes_json = json.dumps([themes])
    else:
        themes_json = None
    aud = fm.get("audience")
    if isinstance(aud, list):
        aud_json = json.dumps(aud)
    elif aud:
        aud_json = json.dumps([aud])
    else:
        aud_json = None
    civ = fm.get("civilization")
    if isinstance(civ, list):
        civ = civ[0] if civ else None
    return (
        path,
        fm.get("lane"),
        civ,
        fm.get("era"),
        fm.get("artifact"),
        themes_json,
        aud_json,
        fm.get("title"),
        fm.get("updated"),
    )


def ensure_db(conn: sqlite3.Connection) -> None:
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute(
        """
        CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts
        USING fts5(path, title, body, tokenize='porter unicode61');
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS doc_meta (
            path TEXT PRIMARY KEY,
            lane TEXT,
            civilization TEXT,
            era TEXT,
            artifact TEXT,
            themes TEXT,
            audience TEXT,
            doc_title TEXT,
            updated TEXT
        );
        """
    )


def build_index() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    ensure_db(conn)
    conn.execute("DELETE FROM docs_fts")
    conn.execute("DELETE FROM doc_meta")

    start = time.time()
    docs = collect_docs()
    for path in docs:
        rel = path.relative_to(ROOT).as_posix()
        text = path.read_text(encoding="utf-8", errors="replace")
        title = doc_title(text, path.name)
        conn.execute(
            "INSERT INTO docs_fts(path, title, body) VALUES (?, ?, ?)",
            (rel, title, text),
        )
        fm = parse_frontmatter(text)
        if fm:
            conn.execute(
                """
                INSERT INTO doc_meta(path, lane, civilization, era, artifact, themes, audience, doc_title, updated)
                VALUES (?,?,?,?,?,?,?,?,?)
                """,
                meta_row(rel, fm),
            )

    conn.commit()
    conn.close()
    elapsed = time.time() - start
    print(f"Indexed {len(docs)} documents in {elapsed:.2f}s -> {DB_PATH}")


def run_query(
    q: str,
    limit: int,
    lane: str | None = None,
    civilization: str | None = None,
    theme: str | None = None,
    artifact: str | None = None,
) -> None:
    if not DB_PATH.exists():
        raise SystemExit(
            "Search index not found. Run: python3 tools/cmc-index-search.py build"
        )

    conn = sqlite3.connect(DB_PATH)
    use_meta = bool(lane or civilization or theme or artifact)
    wheres = ["docs_fts MATCH ?"]
    params: list = [q]
    join_sql = ""
    if use_meta:
        join_sql = "INNER JOIN doc_meta m ON m.path = docs_fts.path"
        if lane:
            wheres.append("m.lane = ?")
            params.append(lane)
        if civilization:
            wheres.append("m.civilization = ?")
            params.append(civilization)
        if theme:
            wheres.append("m.themes LIKE ?")
            params.append(f'%"{theme}"%')
        if artifact:
            wheres.append("m.artifact = ?")
            params.append(artifact)
    # FTS5: use table name docs_fts for MATCH/snippet (alias breaks some SQLite builds)
    if join_sql:
        sql = f"""
            SELECT docs_fts.path, docs_fts.title,
                   snippet(docs_fts, 2, '[', ']', ' … ', 12) AS hit
            FROM docs_fts
            {join_sql}
            WHERE {" AND ".join(wheres)}
            ORDER BY rank
            LIMIT ?;
        """
    else:
        sql = f"""
            SELECT docs_fts.path, docs_fts.title,
                   snippet(docs_fts, 2, '[', ']', ' … ', 12) AS hit
            FROM docs_fts
            WHERE {" AND ".join(wheres)}
            ORDER BY rank
            LIMIT ?;
        """
    params.append(limit)

    rows = conn.execute(sql, tuple(params)).fetchall()
    conn.close()

    if not rows:
        print("No matches.")
        return

    for idx, (path, title, hit) in enumerate(rows, start=1):
        print(f"{idx}. {path}")
        print(f"   {title}")
        print(f"   {hit}")


def run_facets() -> None:
    if not DB_PATH.exists():
        raise SystemExit("Run build first.")
    conn = sqlite3.connect(DB_PATH)
    print("=== lane ===")
    for row in conn.execute(
        "SELECT lane, COUNT(*) FROM doc_meta WHERE lane IS NOT NULL GROUP BY lane ORDER BY 2 DESC"
    ):
        print(f"  {row[0] or '(empty)'}: {row[1]}")
    print("=== civilization (top 15) ===")
    for row in conn.execute(
        """SELECT civilization, COUNT(*) FROM doc_meta WHERE civilization IS NOT NULL
           GROUP BY civilization ORDER BY 2 DESC LIMIT 15"""
    ):
        print(f"  {row[0]}: {row[1]}")
    print("=== artifact ===")
    for row in conn.execute(
        "SELECT artifact, COUNT(*) FROM doc_meta WHERE artifact IS NOT NULL GROUP BY artifact ORDER BY 2 DESC"
    ):
        print(f"  {row[0]}: {row[1]}")
    conn.close()


def run_list(lane: str | None, limit: int) -> None:
    if not DB_PATH.exists():
        raise SystemExit("Run build first.")
    conn = sqlite3.connect(DB_PATH)
    if lane:
        rows = conn.execute(
            "SELECT path, lane, civilization, themes FROM doc_meta WHERE lane = ? LIMIT ?",
            (lane, limit),
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT path, lane, civilization, themes FROM doc_meta LIMIT ?",
            (limit,),
        ).fetchall()
    conn.close()
    for path, la, civ, themes in rows:
        print(f"{path}\tlane={la}\tciv={civ}\tthemes={themes}")


def main() -> int:
    parser = argparse.ArgumentParser(description="CMC index/search + taxonomy facets")
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("build", help="Build or rebuild index (content + docs)")

    q = sub.add_parser("query", help="FTS query; optional facet filters")
    q.add_argument("text", help="FTS query text")
    q.add_argument("--limit", type=int, default=20)
    q.add_argument("--lane", help="Filter: state | scholar | essay | tool")
    q.add_argument("--civilization", help="Filter: e.g. russia, global")
    q.add_argument("--theme", help="Filter: theme tag must appear in frontmatter theme list")
    q.add_argument("--artifact", help="Filter: ledger | essay | ...")

    sub.add_parser("facets", help="Print facet counts from doc_meta")

    lp = sub.add_parser("list", help="List paths that have frontmatter metadata")
    lp.add_argument("--lane", help="Only this lane")
    lp.add_argument("--limit", type=int, default=50)

    args = parser.parse_args()
    if args.cmd == "build":
        build_index()
    elif args.cmd == "query":
        run_query(
            args.text,
            args.limit,
            lane=args.lane,
            civilization=args.civilization,
            theme=args.theme,
            artifact=args.artifact,
        )
    elif args.cmd == "facets":
        run_facets()
    else:
        run_list(getattr(args, "lane", None), args.limit)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
