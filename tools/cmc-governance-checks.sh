#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-.}"
STATE_FILE="${2:-$ROOT/content/civilizations/AMERICA/CIV–STATE–AMERICA.md}"

get_file_version() {
  local file="$1"
  local v
  v="$(awk '/^Version:/ { print $2; exit }' "$file")"
  if [[ -z "$v" ]]; then
    v="$(awk '
      NR==1 {
        if (match($0, /— v[0-9]+\.[0-9]+/)) {
          s=substr($0, RSTART+3, RLENGTH-3)
          print s
        }
      }
    ' "$file")"
  fi
  v="$(echo "$v" | awk '{gsub(/^ +| +$/,"",$0); print}')"
  echo "$v"
}

echo "== CMC governance consistency checks =="
echo "Root: $ROOT"
echo "State file: $STATE_FILE"
echo

echo "[1/4] Option-length policy drift"
option_drift="$(awk '
  /6–10 words|6-10 words/ { print FILENAME ":" FNR ":" $0 }
' "$ROOT"/.cursor/rules/cmc-*.mdc)"
if [[ -n "$option_drift" ]]; then
  echo "DRIFT: Found legacy 6-10 wording in cursor rules:"
  echo "$option_drift"
else
  echo "OK: No 6-10 wording found in cursor rules."
fi
echo

echo "[2/4] STATE Source Versions freshness"
if [[ -f "$STATE_FILE" ]]; then
  rows="$(awk '/^\| CIV–.* \| v[0-9]+\.[0-9]+/ { print NR ":" $0 }' "$STATE_FILE")"
  if [[ -z "$rows" ]]; then
    echo "WARN: No Source Versions rows found."
  else
    while IFS= read -r row; do
      line="${row#*:}"
      src="$(echo "$line" | awk -F'|' '{gsub(/^ +| +$/,"",$2); print $2}')"
      expected="$(echo "$line" | awk -F'|' '{gsub(/^ +| +$/,"",$3); print $3}')"
      file_path=""
      for candidate in "$ROOT"/content/civilizations/*/"$src.md"; do
        if [[ -f "$candidate" ]]; then
          file_path="$candidate"
          break
        fi
      done
      if [[ -z "$file_path" ]]; then
        echo "WARN: $src listed in STATE table but file not found."
        continue
      fi
      current="$(get_file_version "$file_path")"
      if [[ "${current}" != v* ]]; then
        current="v${current}"
      fi
      if [[ "$current" != "$expected" ]]; then
        echo "DRIFT: $src expected $expected, current $current ($file_path)"
      fi
    done <<< "$rows"
    echo "Done checking Source Versions rows."
  fi
else
  echo "WARN: STATE file not found at $STATE_FILE"
fi
echo

echo "[3/4] MEM header/footer version parity (sampled AMERICA MEMs)"
shopt -s nullglob
mem_paths=("$ROOT"/content/civilizations/AMERICA/MEM–AMERICA*.md)
shopt -u nullglob
if [[ "${#mem_paths[@]}" -eq 0 ]]; then
  echo "WARN: No AMERICA MEM files found."
else
  for f in "${mem_paths[@]}"; do
    header="$(get_file_version "$f")"
    footer="$(awk '
      /END OF FILE .* — v[0-9]+\.[0-9]+/ {
        line=$0
      }
      END {
        if (line != "") {
          split(line, parts, "— v")
          print parts[2]
        }
      }
    ' "$f")"
    if [[ -n "$header" && -n "$footer" && "$header" != "$footer" ]]; then
      echo "DRIFT: version mismatch in $f (header $header vs footer $footer)"
    fi
  done
  echo "Done checking MEM header/footer parity."
fi
echo

echo "[4/4] Mandatory MEM CONNECTIONS section (sampled AMERICA MEMs)"
missing=0
for f in "${mem_paths[@]:-}"; do
  if ! awk '/MEM CONNECTIONS \(MANDATORY\)/ { found=1 } END { exit !found }' "$f"; then
    echo "DRIFT: missing MEM CONNECTIONS (MANDATORY) in $f"
    missing=1
  fi
done
if [[ "$missing" -eq 0 ]]; then
  echo "OK: sampled MEM files include MEM CONNECTIONS section."
fi

echo
echo "Checks complete."
