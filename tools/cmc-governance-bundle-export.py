#!/usr/bin/env python3
"""Export governance bundle: CIV–MEM–CORE, MEM template, content-composition, manifest.

Produces a versioned directory (governance-bundle/v1.0/) that another project or
the regeneration pipeline can consume. Implements "governance as product" per
docs/governance/GOVERNANCE–BUNDLE–SPEC.md.

Usage:
  python3 tools/cmc-governance-bundle-export.py [--output DIR] [--version v1.0]
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
from datetime import datetime, timezone


ROOT = pathlib.Path(__file__).resolve().parent.parent
GOVERNANCE = ROOT / "docs" / "governance"
TEMPLATES = ROOT / "docs" / "templates"
CORE_PATH = GOVERNANCE / "CIV–MEM–CORE.md"
TEMPLATE_PATH = TEMPLATES / "CIV–MEM–TEMPLATE.md"
DEFAULT_BUNDLE_DIR = ROOT / "governance-bundle"


CONTENT_COMPOSITION_MD = """# Content Composition (Summary)

Governance rule for MEM authoring: primary vs secondary voice and section role.
No numerical proportions. Source: CIV–MEM–CORE VP-1.g; cmc-blend-law.

## File types

- **GEO–MEM:** Primary = Mearsheimer (structural/power, terrain). Secondary = Mercouris (ARC quotes, civilizational evidence). Barnes dimension required.
- **Subject MEM:** Primary = Mercouris (narrative, legitimacy). Secondary = Mearsheimer (constraints). Barnes dimension required.

## Section role (who leads)

| Section type                    | Primary   | Secondary   |
|---------------------------------|-----------|-------------|
| Strategic context / force ratio | Mearsheimer | Mercouris   |
| Civilizational / legitimacy     | Mercouris | Mearsheimer |
| Evidence / ARC quotes           | Mercouris | —           |
| Structural assessment           | Mearsheimer | —         |
| Liability / mechanism           | Barnes    | —           |

## Barnes (third role — required)

Every MEM must satisfy a Barnes dimension: at least one subsection or thread applying jurisdiction, personal liability, defection incentive, institutional survival, irreversibility; or state N/A for this subject.
"""


def _roman_to_int(s: str) -> int:
    """Roman numeral to integer (I=1 .. XXVIII=28)."""
    val = {"I": 1, "V": 5, "X": 10}
    n = 0
    prev = 0
    for c in reversed(s):
        v = val.get(c, 0)
        n += v if v >= prev else -v
        prev = v
    return n


def extract_template_section_titles(text: str) -> list[str]:
    """Top-level section titles: lines 'N. TITLE' that follow a ──── separator."""
    lines = text.splitlines()
    titles: list[tuple[int, str]] = []
    for i, line in enumerate(lines):
        if i == 0:
            continue
        prev = lines[i - 1].strip()
        if not prev.startswith("─") or len(prev) < 10:
            continue
        m = re.match(r"^([IVX]+)\.\s+(.+)$", line.strip())
        if not m:
            continue
        roman, title = m.group(1), m.group(2).strip()
        if not title or len(roman) > 5:
            continue
        num = _roman_to_int(roman)
        if 1 <= num <= 30:
            titles.append((num, f"{roman}. {title}"))
    # one per numeral, first occurrence
    seen: dict[int, str] = {}
    for num, s in titles:
        if num not in seen:
            seen[num] = s
    return [seen[k] for k in sorted(seen.keys())]


def build_manifest(version: str, bundle_dir: pathlib.Path, section_titles: list[str]) -> dict:
    return {
        "version": version,
        "generated_at": datetime.now(tz=timezone.utc).isoformat(),
        "source_repo": "CIV–MEM",
        "files": [
            "CIV–MEM–CORE.md",
            "CIV–MEM–TEMPLATE.md",
            "content-composition.md",
        ],
        "content_composition": {
            "file_types": ["GEO–MEM", "Subject MEM"],
            "geo_primary": "Mearsheimer",
            "geo_secondary": "Mercouris",
            "subject_primary": "Mercouris",
            "subject_secondary": "Mearsheimer",
            "barnes_required": True,
            "section_role_note": "See content-composition.md for full table.",
        },
        "template_sections_sample": section_titles[:20],
        "connection_requirements": "MEM CONNECTIONS section mandatory; connector pairs per CONCEPT–ROME–ISLAM–DOUBLE–HELIX IV-A when applicable.",
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Export governance bundle (CORE + template + composition + manifest)")
    ap.add_argument("--output", "-o", default=None, help=f"Output base directory (default: {DEFAULT_BUNDLE_DIR})")
    ap.add_argument("--version", "-V", default="v1.0", help="Bundle version (e.g. v1.0)")
    args = ap.parse_args()
    out_base = pathlib.Path(args.output) if args.output else DEFAULT_BUNDLE_DIR
    out_base = out_base.resolve()
    version = args.version.strip()
    bundle_dir = out_base / version
    bundle_dir.mkdir(parents=True, exist_ok=True)

    if not CORE_PATH.exists():
        raise SystemExit(f"CORE not found: {CORE_PATH}")
    if not TEMPLATE_PATH.exists():
        raise SystemExit(f"Template not found: {TEMPLATE_PATH}")

    # Copy CORE and TEMPLATE as-is
    (bundle_dir / "CIV–MEM–CORE.md").write_text(CORE_PATH.read_text(encoding="utf-8", errors="replace"), encoding="utf-8")
    template_text = TEMPLATE_PATH.read_text(encoding="utf-8", errors="replace")
    (bundle_dir / "CIV–MEM–TEMPLATE.md").write_text(template_text, encoding="utf-8")

    # Write content-composition summary
    (bundle_dir / "content-composition.md").write_text(CONTENT_COMPOSITION_MD, encoding="utf-8")

    # Manifest with structured summary
    section_titles = extract_template_section_titles(template_text)
    manifest = build_manifest(version, bundle_dir, section_titles)
    (bundle_dir / "manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    print(f"Governance bundle {version} -> {bundle_dir}")
    print(f"  CIV–MEM–CORE.md, CIV–MEM–TEMPLATE.md, content-composition.md, manifest.json")


if __name__ == "__main__":
    main()
