# CMC content taxonomy

**Purpose:** Classify and retrieve corpus material by **axes** that cut across folder layout. Folders stay coarse (civilization, scholar, essays); **frontmatter** (or the optional MEM tail block) carries the taxonomy.

**Governed by:** CMC 3.4. This doc is **additive**: it does not replace MEM prefixes (`MEM–`, `CIV–CORE–`, etc.) or operating modes (STATE, SCHOLAR, WRITE).

---

## 1. Epistemic lane (`lane`)

How stable or argumentative the file is treated as.

| Value | Use when |
|-------|----------|
| **state** | Canon you would cite as settled record (ledgers, reviewed MEM summaries). |
| **scholar** | Work-in-progress, debate, scratch paths. |
| **essay** | Long argument or open letter; not a fact ledger. |
| **tool** | Scripts, index builders, routing — not historical content. |

One **primary** `lane` per file. Scholar may graduate to state with review.

---

## 2. Civilization / region (`civilization`)

- **Scalar or list:** e.g. `rome`, `russia`, `china`, `global`, `meta`.
- **global** — cross-civilization or non-place-bound (many essays).
- **meta** — about the system itself (governance, architecture).

MEM files default to the folder civilization; essays often use `global`.

---

## 3. Theme lens (`theme`)

Controlled vocabulary (extend via PR; avoid one-off snowflakes).

| Tag | Use when |
|-----|----------|
| **power** | Law, empire, war, elites, institutions. |
| **economy** | Trade, labor, money, infrastructure. |
| **theology** | Meaning, ritual, religion, sacred narrative. |
| **knowledge** | Science, tech, education, archives. |
| **culture** | Art, story, language, identity. |
| **coordination** | Group alignment, game theory, focal points, peace mechanics. |
| **environment** | Land, climate, food, disease. |

Prefer **1–3** tags per file.

---

## 4. Era (`era`)

Optional coarse slice: `ancient` | `medieval` | `early_modern` | `modern` | `contemporary`.

Use when the **subject** is era-bound. Essays may omit or use `contemporary`.

---

## 5. Artifact type (`artifact`)

| Value | Role |
|-------|------|
| **ledger** | Atomic claims / MEM-style entries. |
| **essay** | Argument, letter, manifesto. |
| **brief** | Short actionable note. |
| **index** | Pointers only. |
| **source_ref** | Citation shell. |
| **distribution** | Spread / campaign strategy. |

---

## 6. Audience (`audience`)

| Tag | Meaning |
|-----|--------|
| **operator** | Internal; draft OK. |
| **publish** | Safe to link publicly. |
| **teach** | Suitable to simplify for learners. |

List form: `[operator, publish]`.

---

## Frontmatter contract (Markdown)

Use at the **top** of essays and standalone docs:

```yaml
---
lane: essay
civilization: global
theme: [theology, coordination]
era: contemporary
artifact: essay
audience: [publish, operator]
updated: YYYY-MM-DD
---
```

**MEM files:** Legacy headers stay first. Optionally append after the header block (before body sections), as a fenced or indented block — see §8.

---

## Relation to existing naming

| Existing | Taxonomy role |
|----------|----------------|
| `MEM–CIV–TOPIC` | `lane: state`, `artifact: ledger`, `civilization` from path. |
| `CIV–SCHOLAR–*` | `lane: scholar` + themes from content. |
| `docs/essays/*` | `lane: essay`, themes from substance. |
| `tools/`, `scripts/` | `lane: tool`. |

No rename required for adoption.

---

## Index and search

- **Phase A:** Tags live in frontmatter only; humans and grep filter.
- **Phase B (live):** `tools/cmc-index-search.py build` indexes `content/**/*.md` and `docs/**/*.md`, parses leading `---` frontmatter into table `doc_meta`, and keeps full-text in FTS5.
  - `python3 tools/cmc-index-search.py query "peace" --lane essay --theme theology`
  - `python3 tools/cmc-index-search.py facets`
  - `python3 tools/cmc-index-search.py list --lane essay`

---

## Adoption order

1. New essays and new governance docs → full frontmatter.
2. When editing a MEM, add optional taxonomy tail (§8).
3. No big-bang backfill.

---

## Pilot files

| File | lane | civilization | theme (summary) |
|------|------|----------------|-----------------|
| [docs/essays/THE-SIMPLE-CONDITION.md](essays/THE-SIMPLE-CONDITION.md) | essay | global | theology, coordination |
| [docs/essays/THE-COORDINATION-HYPOTHESIS.md](essays/THE-COORDINATION-HYPOTHESIS.md) | essay | global | knowledge, coordination |
| `content/civilizations/RUSSIA/MEM–RUSSIA–MOSCOW–PATRIARCHATE.md` | state | russia | theology, power, culture |

---

## Version

- **2026-03-14** — Initial taxonomy + essay pilots + MEM optional block.
