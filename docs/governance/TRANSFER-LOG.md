# Transfer Log (Decision Records)

Append-only audit log for relay/transfer actions. Inspired by the essay: "Publish Decision Records. These are auditable logs showing exactly who changed what, when, and why."

## Location

`logs/transfer.ndjson` (relative to repo root, i.e. `CIVMEM_CONTENT_ROOT`).

## Schema (one JSON object per line)

```json
{"timestamp":"2026-02-17T12:00:00.000Z","action":"relay_to_scholar","entity":"RUSSIA","summary":"Added ENTRY 0015 synthesis; RLL proposal for Doctrine 06"}
```

| Field     | Required | Description                                                                 |
|-----------|----------|-----------------------------------------------------------------------------|
| timestamp | (auto)   | ISO8601; added by append().                                                 |
| action    | yes      | `relay_to_scholar` or `relay_to_state`                                     |
| entity    | yes      | Entity ID (e.g. RUSSIA, PERSIA)                                            |
| summary   | yes      | Brief description of what was transferred                                  |

## When to append

- **relay_to_scholar**: When the user approves a relay and the system writes to CIV–SCHOLAR–[CIV].
- **relay_to_state**: When the user approves a relay and the system writes to CIV–STATE–[CIV].

## How to append

1. **From Cursor (AI)**: When applying a transfer, append one line to `logs/transfer.ndjson` in the format above.
2. **Programmatic**: `require('./apps/chat/src/transfer-log').append({ action, entity, summary })`
3. **CLI**: `node -e "require('./apps/chat/src/transfer-log').append({action:'relay_to_scholar',entity:'RUSSIA',summary:'...'})"`
