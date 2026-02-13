#!/usr/bin/env python3
"""Lightweight corpus validator for CMC MEM files.

Checks:
- Header/footer version parity
- Presence of MEM CONNECTIONS (MANDATORY)
"""

from __future__ import annotations

import argparse
import pathlib
import re
import subprocess
import sys
from typing import Iterable, List


HEADER_VERSION_RE = re.compile(r"^Version:\s*([0-9]+\.[0-9]+)\s*$", re.MULTILINE)
FOOTER_VERSION_RE = re.compile(r"END OF FILE .* — v([0-9]+\.[0-9]+)")
MANDATORY_CONNECTIONS_RE = re.compile(r"MEM CONNECTIONS \(MANDATORY\)")


def git_changed_files(base_ref: str | None = None, head_ref: str | None = None) -> List[pathlib.Path]:
    if base_ref and head_ref:
        cmd = ["git", "diff", "--name-only", "--diff-filter=AMR", f"{base_ref}...{head_ref}"]
    else:
        # Local default: working tree + staged changes against HEAD.
        cmd = ["git", "diff", "--name-only", "--diff-filter=AMR", "HEAD"]
    out = subprocess.run(cmd, capture_output=True, text=True, check=False)
    if out.returncode != 0:
        return []
    paths: List[pathlib.Path] = []
    for line in out.stdout.splitlines():
        p = pathlib.Path(line.strip())
        if p:
            paths.append(p)
    return paths


def mem_files_from_paths(paths: Iterable[pathlib.Path]) -> List[pathlib.Path]:
    result: List[pathlib.Path] = []
    for p in paths:
        name = p.name
        if (
            "content/civilizations/" in p.as_posix()
            and name.startswith("MEM")
            and name.endswith(".md")
            and p.exists()
        ):
            result.append(p)
    return sorted(set(result))


def all_mem_files(root: pathlib.Path) -> List[pathlib.Path]:
    return sorted(
        p
        for p in root.glob("content/civilizations/**/MEM*.md")
        if p.is_file()
    )


def validate_file(path: pathlib.Path) -> List[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    issues: List[str] = []

    header = HEADER_VERSION_RE.search(text)
    footer = FOOTER_VERSION_RE.search(text)
    if header and footer and header.group(1) != footer.group(1):
        issues.append(
            f"version mismatch header={header.group(1)} footer={footer.group(1)}"
        )

    if not MANDATORY_CONNECTIONS_RE.search(text):
        issues.append("missing 'MEM CONNECTIONS (MANDATORY)' section label")

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate CMC MEM corpus")
    parser.add_argument(
        "--changed-only",
        action="store_true",
        help="Validate only changed files (local: HEAD vs working tree; CI: base...head)",
    )
    parser.add_argument("--base-ref", help="Base git ref for changed-only mode")
    parser.add_argument("--head-ref", help="Head git ref for changed-only mode")
    parser.add_argument(
        "--path",
        action="append",
        default=[],
        help="Validate specific file(s) or directory subtree(s)",
    )
    args = parser.parse_args()

    root = pathlib.Path(".").resolve()
    files: List[pathlib.Path] = []

    if args.path:
        selected: List[pathlib.Path] = []
        for raw in args.path:
            p = (root / raw).resolve()
            if p.is_file():
                selected.append(p)
            elif p.is_dir():
                selected.extend(p.glob("**/MEM*.md"))
        files = mem_files_from_paths([p.relative_to(root) for p in selected])
        files = [root / p for p in files]
    elif args.changed_only:
        changed = git_changed_files(args.base_ref, args.head_ref)
        files = mem_files_from_paths(changed)
    else:
        files = all_mem_files(root)

    if not files:
        print("No MEM files selected for validation.")
        return 0

    total_issues = 0
    for file_path in files:
        issues = validate_file(file_path)
        if issues:
            total_issues += len(issues)
            rel = file_path.relative_to(root)
            for issue in issues:
                print(f"[FAIL] {rel}: {issue}")

    if total_issues:
        print(f"\nValidation failed: {total_issues} issue(s) across {len(files)} file(s).")
        return 1

    print(f"Validation passed: {len(files)} file(s) checked.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
