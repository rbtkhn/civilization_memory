# PROPOSAL — CIV–CORE–TEMPLATE v2.1

**Status:** DRAFT  
**Scope:** Additive clarifications to CIV–CORE–TEMPLATE v2.0  
**Source:** AUDIT CIV–CORE–CHINA vs CIV–CORE–TEMPLATE (2026-02-02)  
**Governance:** CIV–MEM–CORE v2.9 · VERSION–MANIFEST  
**Last Updated:** February 2026

────────────────────────────────────────────────────────────
I. PURPOSE
────────────────────────────────────────────────────────────

Align CIV–CORE–TEMPLATE with observed practice across all civilization CORE instances (CHINA, PERSIA, GERMANIA, FRANCIA, ANGLIA, INDIA, ISLAM, ROME, RUSSIA) and update governance references to current canonical versions. No mandatory upgrade; all changes are additive clarifications.

────────────────────────────────────────────────────────────
II. RATIONALE
────────────────────────────────────────────────────────────

Audit of CIV–CORE–CHINA found full compliance but identified four template–instance mismatches:

1. **Lock Level:** Template specifies only "TOTAL"; all CORE instances use "STRUCTURAL (content expandable without renumbering)".
2. **Governance refs:** Template cites CIV–MEM–CORE v2.2+ and CIV–SCHOLAR–PROTOCOL v2.1+; current versions are v2.9 and v2.6.
3. **Optional header fields:** Governed by, ARC Reference, and INDEX scope appear in most instances but are not documented in the template.
4. **Section naming:** Civilization-specific section subtitles (e.g., IX "Social Control" vs "Social Order") are used but not explicitly permitted.

────────────────────────────────────────────────────────────
III. PROPOSED CHANGES (ADDITIVE ONLY)
────────────────────────────────────────────────────────────

### A. Lock Level (§ III Header Requirements)

**Current (v2.0):**
> Lock Level: TOTAL (no silent mutation)

**Proposed (v2.1):**

Add after "Lock Level" in § III:

```
Lock Level (one of):
• TOTAL — No silent mutation; strict structural lock
• STRUCTURAL — Sections fixed; content expandable without renumbering
  (De facto standard for civilization instances; preserves additivity.)
```

Update template header Lock Level line to:
> Lock Level: TOTAL or STRUCTURAL (see § III)

### B. Governed by / Compatibility

**Current (v2.0 header):**
> Compatibility: CIV / MEM / SCHOLAR Architecture (CMC v2.2+)
> Governed by:
> • CIV–MEM–CORE v2.2+ (global system law)
> • CIV–CORE–GOVERNANCE–LAW v1.0 (implicit)
> • CIV–SCHOLAR–PROTOCOL v2.1+ (interaction layer only)

**Proposed (v2.1):**
> Compatibility: CIV / MEM / SCHOLAR Architecture (CMC v2.9+)
> Governed by:
> • CIV–MEM–CORE v2.9+ (global system law)
> • CIV–CORE–GOVERNANCE–LAW v1.0 (implicit)
> • CIV–SCHOLAR–PROTOCOL v2.6+ (interaction layer only)

### C. Optional Header Fields (§ III)

**Current:** Lists DIB Status, Scholar Reference Mode as "if applicable".

**Proposed:** Add RECOMMENDED (not mandatory) header fields:

```
RECOMMENDED (best practice; most instances include):
• Governed by: CIV–MEM–CORE vX.X (explicit version)
• ARC Reference: CIV–ARC–[CIV] vX.X
• CIV–INDEX–[CIV] vX.X (MEM scope: N files)
```

### D. Section Naming Flexibility (§ VI)

**Current:** § VI lists exact section titles.

**Proposed:** Add after the section list:

```
SECTION TITLE VARIANTS:
Civilization-specific subtitle variants are permitted when they preserve
semantic intent. Example: IX may be "Internal Security & Social Order"
or "Internal Security & Social Control" when the civilization's doctrine
emphasizes control over order. Additive parentheticals (e.g., "GRID-CH",
"RIR-ISLAM") are permitted. Renumbering is forbidden.
```

### E. OGE Reference (§ XV)

**Current:**
> OGE behavior is governed exclusively by:
> • CIV–SCHOLAR–PROTOCOL v2.1+

**Proposed:**
> OGE behavior is governed exclusively by:
> • CIV–SCHOLAR–PROTOCOL v2.6+

────────────────────────────────────────────────────────────
IV. UPGRADE NOTE (v2.0 → v2.1)
────────────────────────────────────────────────────────────

```
UPGRADE NOTE (v2.1) — ALIGNMENT CLARIFICATIONS

This version adds clarifications derived from CIV–CORE instance audit.

v2.1 introduces:
• Lock Level: STRUCTURAL explicitly permitted as variant
• Governance refs: CIV–MEM–CORE v2.9+, CIV–SCHOLAR–PROTOCOL v2.6+
• Recommended header fields: Governed by, ARC Reference, INDEX scope
• Section title variants: civilization-specific subtitles permitted

No structural changes. No constraint weakening. Additive only.
```

────────────────────────────────────────────────────────────
V. IMPLEMENTATION CHECKLIST
────────────────────────────────────────────────────────────

- [ ] Update CIV–CORE–TEMPLATE header (Version, Supersedes, Upgrade Type, Compatibility, Governed by, Lock Level)
- [ ] Add UPGRADE NOTE (v2.1) after v2.0 note
- [ ] Amend § III (Header Requirements) — Lock Level enumeration, RECOMMENDED fields
- [ ] Amend § VI (Required Core Sections) — Section title variants paragraph
- [ ] Amend § XV — CIV–SCHOLAR–PROTOCOL v2.6+
- [ ] Update footer to v2.1
- [ ] VERSION–MANIFEST: CIV–CORE–TEMPLATE v2.0 → v2.1

────────────────────────────────────────────────────────────
VI. RISKS & MITIGATION
────────────────────────────────────────────────────────────

| Risk | Mitigation |
|------|------------|
| Over-specification of Lock Level | Keep definitions minimal; STRUCTURAL matches de facto use |
| Version bump fatigue | v2.1 is additive only; no instance changes required |
| Section title drift | Clarify "preserve semantic intent"; audit can flag abuse |

────────────────────────────────────────────────────────────
END OF PROPOSAL
────────────────────────────────────────────────────────────
