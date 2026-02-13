#!/usr/bin/env python3
"""Build/query a lightweight full-text index for CMC content.

Usage:
  python3 tools/cmc-index-search.py build
  python3 tools/cmc-index-search.py query "monroe doctrine"
"""

from __future__ import annotations

import argparse
import pathlib
import sqlite3
import time


ROOT = pathlib.Path(".").resolve()
DB_PATH = ROOT / ".cache" / "cmc_search.db"


def collect_docs() -> list[pathlib.Path]:
    return sorted(
        p for p in (ROOT / "content").glob("**/*.md") if p.is_file()
    )


def doc_title(text: str, fallback: str) -> str:
    first = text.splitlines()[0].strip() if text else ""
    return first or fallback


def ensure_db(conn: sqlite3.Connection) -> None:
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute(
        """
        CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts
        USING fts5(path, title, body, tokenize='porter unicode61');
        """
    )


def build_index() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    ensure_db(conn)
    conn.execute("DELETE FROM docs_fts")

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

    conn.commit()
    conn.close()
    elapsed = time.time() - start
    print(f"Indexed {len(docs)} documents in {elapsed:.2f}s -> {DB_PATH}")


def run_query(q: str, limit: int) -> None:
    if not DB_PATH.exists():
        raise SystemExit(
            "Search index not found. Run: python3 tools/cmc-index-search.py build"
        )

    conn = sqlite3.connect(DB_PATH)
    sql = """
        SELECT path, title, snippet(docs_fts, 2, '[', ']', ' … ', 12) AS hit
        FROM docs_fts
        WHERE docs_fts MATCH ?
        ORDER BY rank
        LIMIT ?;
    """
    rows = conn.execute(sql, (q, limit)).fetchall()
    conn.close()

    if not rows:
        print("No matches.")
        return

    for idx, (path, title, hit) in enumerate(rows, start=1):
        print(f"{idx}. {path}")
        print(f"   {title}")
        print(f"   {hit}")


def main() -> int:
    parser = argparse.ArgumentParser(description="CMC index/search helper")
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("build", help="Build or rebuild search index")

    q = sub.add_parser("query", help="Query search index")
    q.add_argument("text", help="FTS query text")
    q.add_argument("--limit", type=int, default=20, help="Max results")

    args = parser.parse_args()
    if args.cmd == "build":
        build_index()
    else:
        run_query(args.text, args.limit)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
