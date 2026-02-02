# MEM Upgrade Verification Checklist

**Purpose:** Run this checklist before declaring major MEM upgrades complete. Prevents compliance gaps that require post-hoc fixes.

**When to use:** Before completing any batch of MEM upgrades (v1.x → v2.0, additive integrations, corpus-wide changes).

**Authority:** CIV–MEM–TEMPLATE v2.9 · CIV–MEM–CORE v2.9 · cmc-blend-law

---

## I. CHECKLIST (PER MEM)

For each modified MEM, verify:

### 1. 20% Verbatim Quote Standard
- [ ] MEM contains block quotes (≥25 words per quote per CIV–MEM–TEMPLATE)
- [ ] Verbatim content (excluding metadata, headers) ≈ ≥20% of total word count
- [ ] All quotes attributed to ARC-compliant sources
- [ ] No paraphrase presented as verbatim

**Quick check:** Count block-quote words vs total prose. If quotes < 15% of total, flag for additional verbatim insertion.

---

### 2. Proportional Blend Law
- [ ] **GEO–MEM:** ~2/3 Mearsheimer (strategic analysis) + 1/3 Mercouris (ARC quotes)
- [ ] **Subject MEM:** ~2/3 Mercouris (civilizational/legitimacy) + 1/3 Mearsheimer (structural constraints)
- [ ] GEO–MEM: 4 ARC sections present (ARC-T-ANCIENT, ARC-T-MEDIEVAL, ARC-T-EARLY-MOD, ARC-T-MODERN)
- [ ] GEO–MEM: Cognitive layer declaration present

**Quick check:** Skim for voice markers. Subject MEM should read recursively/hedged (Mercouris); GEO–MEM should read structurally (Mearsheimer) with ARC quote sections.

---

### 3. Layer 2 Structured Data
- [ ] **WAR MEM:** WAR STRUCTURED DATA section (Belligerents, Classification, Outcome, Force Ratios, Casualties)
- [ ] **FIGURE MEM:** FIGURE STRUCTURED DATA (BIRTH, DEATH, CAREER, etc.)
- [ ] **GEO MEM:** GEO STRUCTURED DATA (GEO_TYPE, STRATEGIC_SIGNIFICANCE, CONTROL_SEQUENCE)
- [ ] **CITY MEM:** CITY STRUCTURED DATA
- [ ] **INSTITUTION MEM:** INSTITUTION STRUCTURED DATA

**Quick check:** Grep for "STRUCTURED DATA" or "LAYER 2" in file. Type-appropriate section must exist for new MEMs; optional for legacy upgrades.

---

### 4. MEM CONNECTIONS
- [ ] MEM CONNECTIONS section present
- [ ] Same-civilization connections ≥3 (WAR/Subject); GEO–MEMs per template
- [ ] "Breaks if removed" entries where critical dependencies exist
- [ ] Sibling/corpus links (e.g., WAR corpus grouping) where applicable
- [ ] Cross-civilization connections declared with ARC when citing other civs

**Quick check:** Grep "MEM CONNECTIONS" and verify ≥3 same-civ refs. Corpus MEMs should link to siblings.

---

### 5. Bibliography
- [ ] MEM BIBLIOGRAPHY (or BIBLIOGRAPHY) section present
- [ ] All verbatim-cited sources listed
- [ ] ARC declaration for cross-ARC citations (e.g., Tacitus ARC–ROME)

---

### 6. Versioning & Metadata
- [ ] Version incremented appropriately (v1.x → v1.x+1 additive; v1.x → v2.0 major)
- [ ] Upgrade Type stated in header
- [ ] END OF FILE version matches header

---

## II. BATCH-LEVEL CHECKS (POST-PER-MEM)

After all MEMs pass per-MEM checks:

- [ ] VERSION–MANIFEST updated with changelog entry
- [ ] CIV–INDEX–[CIV] updated if MEM count or categories changed
- [ ] Cross-references validated (linked MEMs exist; no broken refs)
- [ ] Section numbering consistent (no duplicate I, II, III within same file)

---

## III. FAILURE MODES TO AVOID

| Failure | Prevention |
|---------|------------|
| search_replace fails on apostrophe/Unicode | Copy exact string from file; check for curly quotes |
| ENTRY/SYNTHESIS not added | Verify with grep after bulk edits; add in second pass if needed |
| GEO section numbering duplicates | Full section renumber pass before declaring complete |
| ARC version drift (Index vs Scholar) | Update CIV–INDEX Section II when ARC changes |
| 20% compliance assumed, not verified | Run word-count check on 1–2 sample MEMs per batch |

---

## IV. REFERENCE

- CIV–MEM–TEMPLATE v2.9 — Layer 2, 20% EQS, Blend Law
- cmc-blend-law — Proportional ratios by MEM type
- REPORT–SCHOLAR–PERSIA–WAR–CORPUS–INTEGRATION–2026–02–01 — Example batch
- UPGRADE–REPORT–PERSIA–v2.0–MEM–BATCH–2026–02–01 — Example v2.0 batch

---

**END OF CHECKLIST**
