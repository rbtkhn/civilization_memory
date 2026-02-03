#!/usr/bin/env python3
"""Upgrade Russia MEMs from v2.7/v2.8/v2.8.1/v2.9 to v3.0 per plan."""

import re
from pathlib import Path

RUSSIA_DIR = Path(__file__).parent.parent / "content" / "civilizations" / "RUSSIA"
TARGET_VERSIONS = ("2.7", "2.8", "2.8.1", "2.9")


def upgrade_file(filepath: Path) -> bool:
    """Upgrade a single MEM file. Returns True if modified."""
    text = filepath.read_text(encoding="utf-8")
    original = text

    # Skip if already v3.0
    if "Version: 3.0" in text:
        return False

    # Extract current version
    ver_match = re.search(r"Version: (2\.7|2\.8|2\.8\.1|2\.9)", text)
    if not ver_match:
        return False
    old_ver = ver_match.group(1)

    # Get base name for Supersedes (e.g. MEM–RUSSIA–UKRAINE)
    base_name = filepath.stem

    # 1. Title line: — v2.x → — v3.0
    text = re.sub(rf"({re.escape(base_name)}) — v{re.escape(old_ver)}", r"\1 — v3.0", text, count=1)

    # 2. Version line
    text = re.sub(rf"Version: {re.escape(old_ver)}", "Version: 3.0", text, count=1)

    # 3. Supersedes - update to previous version (add if missing)
    if re.search(r"^Supersedes:", text, re.MULTILINE):
        text = re.sub(r"Supersedes:.*$", f"Supersedes: {base_name} v{old_ver}", text, count=1, flags=re.MULTILINE)
    else:
        # Insert after Version line
        text = re.sub(r"(Version: 3\.0\n)", r"\1Supersedes: " + base_name + " v" + old_ver + "\n", text, count=1)

    # 4. Upgrade Type - replace entire line
    text = re.sub(r"Upgrade Type:.*$", "Upgrade Type: ALIGNMENT · v3.0", text, count=1, flags=re.MULTILINE)

    # 5. Governance refs
    text = re.sub(r"CIV–MEM–CORE v2\.\d+(\+?)\s*", "CIV–MEM–CORE v3.0 ", text)
    text = re.sub(r"CIV–MEM–TEMPLATE v2\.\d+", "CIV–MEM–TEMPLATE v3.0", text)
    text = re.sub(r"ARC–RUSSIA v1\.5", "ARC–RUSSIA v3.1", text)
    text = re.sub(r"CIV–ARC–RUSSIA v1\.5", "CIV–ARC–RUSSIA v3.1", text)
    text = re.sub(r"CIV–MIND–MEARSHEIMER v2\.2", "CIV–MIND–MEARSHEIMER v3.0", text)
    text = re.sub(r"CIV–MIND–MERCOURIS v2\.2", "CIV–MIND–MERCOURIS v3.0", text)
    text = re.sub(r"COMPLIANT \(CIV–MEM–TEMPLATE v2\.\d+\)", "COMPLIANT (CIV–MEM–TEMPLATE v3.0)", text)
    text = re.sub(r"v2\.7 COMPLIANT", "v3.0 COMPLIANT", text)

    # 6. Add upgrade note before first UPGRADE NOTE or SUBJECT TYPE DECLARATION
    upgrade_note = f"""────────────────────────────────────────────────────────────
UPGRADE NOTE (v3.0) — ALIGNMENT · v3.0
────────────────────────────────────────────────────────────
Version bump to v3.0 per CMC–BOOTSTRAP and CIV–MEM–CORE v3.0.
Governance refs updated to v3.0. No analytical content changed.
Supersedes v{old_ver}.

────────────────────────────────────────────────────────────
"""
    # Insert before first "SUBJECT TYPE DECLARATION" or "UPGRADE NOTE" or "I. MEMORY"
    if "UPGRADE NOTE (v3.0)" not in text:
        insert_pattern = r"(────────────────────────────────────────────────────────────\n(?:SUBJECT TYPE DECLARATION|UPGRADE NOTE|I\. MEMORY PURPOSE))"
        text = re.sub(insert_pattern, upgrade_note + r"\1", text, count=1)

    # 7. SUBJECT TYPE DECLARATION (v2.x) -> (v3.0)
    text = re.sub(r"SUBJECT TYPE DECLARATION \(v2\.\d+(?:\.\d+)?\)", "SUBJECT TYPE DECLARATION (v3.0)", text)

    # 8. END OF FILE
    text = re.sub(rf"END OF FILE — {re.escape(base_name)} v{re.escape(old_ver)}", f"END OF FILE — {base_name} v3.0", text)

    if text != original:
        filepath.write_text(text, encoding="utf-8")
        return True
    return False


def main():
    upgraded = 0
    for mem_file in sorted(RUSSIA_DIR.glob("MEM–RUSSIA–*.md")):
        if upgrade_file(mem_file):
            upgraded += 1
            print(f"Upgraded: {mem_file.name}")
    print(f"\nTotal upgraded: {upgraded}")


if __name__ == "__main__":
    main()
