#!/usr/bin/env python3
"""Extract and validate connector pairs (same subject, different encoding).

Reads CONCEPT–ROME–ISLAM–DOUBLE–HELIX IV-A and IV-B tables; optionally validates
that both MEM files exist. Outputs JSON registry for use as first-class primitive.

Usage:
  python3 tools/cmc-connector-pairs.py [--validate] [--output FILE]
  python3 tools/cmc-connector-pairs.py --validate --output connector-pairs.json
"""

from __future__ import annotations

import argparse
import json
import re
import pathlib


ROOT = pathlib.Path(__file__).resolve().parent.parent
CONCEPT_PATH = ROOT / "docs" / "governance" / "CONCEPT–ROME–ISLAM–DOUBLE–HELIX.md"
CONTENT = ROOT / "content" / "civilizations"


def parse_table_row(line: str) -> list[str] | None:
    """Split markdown table row into cells; return None if not a data row."""
    line = line.strip()
    if not line.startswith("|") or line.endswith("|") is False:
        return None
    # Skip separator row
    if re.match(r"^\|[\s\-:]+\|", line):
        return None
    cells = [c.strip() for c in line.split("|")[1:-1]]
    return cells if len(cells) >= 3 else None


def mem_id_to_path(mem_id: str) -> pathlib.Path | None:
    """MEM–ROME–ARMENIA -> content/civilizations/ROME/MEM–ROME–ARMENIA.md (en-dash preserved)."""
    mem_id = mem_id.strip()
    if not (mem_id.startswith("MEM–") or mem_id.startswith("MEM-")):
        return None
    # Split on en-dash or hyphen: MEM, ROME, ARMENIA (or MEM, ISLAM, GEO, SICILY)
    parts = re.split(r"[–\-]", mem_id, maxsplit=2)  # max 3 parts: MEM, CIV, rest
    if len(parts) < 3:
        return None
    civ = parts[1].strip()
    fname = mem_id + ".md" if not mem_id.endswith(".md") else mem_id
    return CONTENT / civ / fname


def extract_connector_pairs(text: str) -> tuple[list[dict], list[dict]]:
    """Parse IV-A and IV-B tables. Return (iva_pairs, ivb_pairs)."""
    iva = []
    ivb = []
    lines = text.splitlines()
    in_iva = False
    in_ivb = False
    for i, line in enumerate(lines):
        if "IV-A" in line or "Canonical connector pairs" in line:
            in_iva = True
            in_ivb = False
            continue
        if "IV-B" in line or "Connector pairs (aligned and asymmetric" in line:
            in_ivb = True
            in_iva = False
            continue
        if in_iva or in_ivb:
            cells = parse_table_row(line)
            if not cells:
                if "**" in line or line.strip().startswith("#"):
                    in_iva = in_ivb = False
                continue
            subject = cells[0]
            rome = cells[1].strip()
            islam = cells[2].strip()
            note = cells[3] if len(cells) > 3 else ""
            if not rome.startswith("MEM–ROME–") or not islam.startswith("MEM–ISLAM–"):
                continue
            pair = {"subject": subject, "rome": rome, "islam": islam, "note": note}
            if in_iva:
                iva.append(pair)
            else:
                ivb.append(pair)
    return iva, ivb


def validate_pairs(pairs: list[dict]) -> list[dict]:
    """Add exists_rome, exists_islam for each pair."""
    out = []
    for p in pairs:
        rp = mem_id_to_path(p["rome"])
        ip = mem_id_to_path(p["islam"])
        out.append({
            **p,
            "exists_rome": rp.is_file() if rp else False,
            "exists_islam": ip.is_file() if ip else False,
        })
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description="Extract connector pairs from CONCEPT; optional validation")
    ap.add_argument("--validate", action="store_true", help="Check that both MEM files exist")
    ap.add_argument("--output", "-o", default=None, help="Write JSON here (default: stdout)")
    args = ap.parse_args()

    text = CONCEPT_PATH.read_text(encoding="utf-8", errors="replace")
    iva, ivb = extract_connector_pairs(text)
    payload = {
        "source": str(CONCEPT_PATH.relative_to(ROOT)),
        "iv_a_canonical": iva,
        "iv_b_aligned_asymmetric": ivb,
    }
    if args.validate:
        payload["iv_a_canonical"] = validate_pairs(iva)
        payload["iv_b_aligned_asymmetric"] = validate_pairs(ivb)
        iva_ok = sum(1 for p in payload["iv_a_canonical"] if p["exists_rome"] and p["exists_islam"])
        ivb_ok = sum(1 for p in payload["iv_b_aligned_asymmetric"] if p["exists_rome"] and p["exists_islam"])
        payload["validation"] = {
            "iv_a_pairs_total": len(iva),
            "iv_a_both_exist": iva_ok,
            "iv_b_pairs_total": len(ivb),
            "iv_b_both_exist": ivb_ok,
        }

    j = json.dumps(payload, indent=2, ensure_ascii=False)
    if args.output:
        pathlib.Path(args.output).write_text(j, encoding="utf-8")
        print(f"Wrote {args.output}")
    else:
        print(j)


if __name__ == "__main__":
    main()
