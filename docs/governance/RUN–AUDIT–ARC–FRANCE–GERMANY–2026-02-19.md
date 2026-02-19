# Audit Report: CIV–ARC–FRANCE & CIV–ARC–GERMANY

**Date:** 19 February 2026  
**Scope:** CIV–ARC–FRANCE v3.1, CIV–ARC–GERMANY v3.2  
**Reference:** CIV–ARC–TEMPLATE v3.5, CIV–MEM–CORE v3.4, CMC–BOOTSTRAP (CMC 3.4)  
**Mode:** SYSTEM (governance audit)

────────────────────────────────────────────────────────────
EXECUTIVE SUMMARY
────────────────────────────────────────────────────────────
Both ARC files are structurally compliant. Required sections are present: I–IX, IX-B (ARC-T-INSTITUTIONAL), blacklist (template § IX-D). ARC-T categories (ANCIENT, MEDIEVAL, EARLY-MOD, MODERN), temporal precedence, discovery framework, V-A Cross-ARC, orthogonality, mirroring rule, and indigenous-language requirement (IV-A) are implemented. IX-B has ≥2 sources per sub-type (OFFICIAL, RESEARCH, NEWS, SPECIALIST). Wikipedia is in the blacklist.

**Remedial findings:** (1) **Version mismatch** — Both ARCs: EOF version trails header (France v3.1/v3.0; Germany v3.2/v3.0). (2) **Mirroring** — France: CORE, SCHOLAR, INDEX cite v2.0 or v3.0 (actual v3.1). Germany: CORE, SCHOLAR, STATE Section IX, INDEX cite v1.1 or v2.5 (actual v3.2). (3) **Header governance** — Both ARCs cite CIV–MEM–CORE v3.0; governance is v3.4. Optional: update for parity.

────────────────────────────────────────────────────────────
I. CIV–ARC–FRANCE — VERIFICATION
────────────────────────────────────────────────────────────

**1.1 Header**
| Element | Required | CIV–ARC–FRANCE | Status |
|---------|----------|----------------|--------|
| Title, version | ✓ | CIV–ARC–FRANCE — v3.1 | ✓ |
| Status | ✓ | ACTIVE · CANONICAL | ✓ |
| Scope | ✓ | Author admissibility and temporal precedence | ✓ |
| Compatibility | — | CIV–MEM–CORE v3.0 · CIV–MEM–TEMPLATE v3.0 | Behind (v3.4) |
| Last Update | ✓ | February 2026 | ✓ |

**1.2 EOF version mismatch**
- **Header:** v3.1
- **EOF line:** "END OF FILE — CIV–ARC–FRANCE v3.0"
- **Recommendation:** Update EOF to v3.1

**1.3 Section structure**
I (Purpose & Scope), II (ARC-Temporal Categories), III (Temporal Precedence), IV (Author Admissibility), IV-A (Indigenous-language — declared), V (Discovery), V-A (Cross-ARC TSP), VI (Orthogonality), VII (What ARC Does Not Govern), VIII (Mirroring), IX (Versioning), IX-B (ARC-T-INSTITUTIONAL), XII (Blacklist — template IX-D). **Compliant.** Blacklist uses "XII" instead of "IX-D"; content present, Wikipedia mandatory entry included.

**1.4 IX-B ARC-T-INSTITUTIONAL**
| Sub-type | Count | Format | Status |
|----------|-------|--------|--------|
| OFFICIAL | 5 | Name — URL; Authoritative For; Editorial Note | ✓ |
| RESEARCH | 5 | Same | ✓ |
| NEWS | 5 | Same | ✓ |
| SPECIALIST | 4 | Same | ✓ |

**1.5 Blacklist (IX-D)**
Wikipedia (all language editions) present with reason. **Compliant.**

**1.6 Mirroring (VIII)**
ARC states it must be referenced in CIV–CORE–FRANCE and CIV–SCHOLAR–FRANCE.
- **CIV–SCHOLAR–FRANCE:** Governed by "CIV–ARC–FRANCE v2.0" — **stale** (actual v3.1)
- **CIV–CORE–FRANCE:** Governed by "CIV–ARC–FRANCE v2.0" — **stale** (actual v3.1)
- **CIV–INDEX–FRANCE:** CIV–ARC–FRANCE v3.0 — **stale** (actual v3.1)

────────────────────────────────────────────────────────────
II. CIV–ARC–GERMANY — VERIFICATION
────────────────────────────────────────────────────────────

**2.1 Header**
| Element | Required | CIV–ARC–GERMANY | Status |
|---------|----------|-----------------|--------|
| Title, version | ✓ | CIV–ARC–GERMANY — v3.2 | ✓ |
| Status | ✓ | ACTIVE · CANONICAL · SIMPLIFIED | ✓ |
| Scope | ✓ | Author admissibility and temporal precedence | ✓ |
| Compatibility | — | CIV–MEM–CORE v3.0 · CIV–MEM–TEMPLATE v3.0 | Behind (v3.4) |
| Last Update | ✓ | February 2026 | ✓ |

**2.2 EOF version mismatch**
- **Header:** v3.2
- **EOF line:** "END OF FILE — CIV–ARC–GERMANY v3.0"
- **Recommendation:** Update EOF to v3.2

**2.3 Section structure**
I–IX, IX-B, XII (Blacklist). Same structural pattern as France. **Compliant.**

**2.4 IX-B ARC-T-INSTITUTIONAL**
| Sub-type | Count | Format | Status |
|----------|-------|--------|--------|
| OFFICIAL | 4 | Name — URL; Authoritative For; Editorial Note | ✓ |
| RESEARCH | 6 | Same | ✓ |
| NEWS | 4 | Same | ✓ |
| SPECIALIST | 4 | Same | ✓ |

**2.5 Blacklist (IX-D)**
Wikipedia present. **Compliant.**

**2.6 Mirroring (VIII)**
- **CIV–SCHOLAR–GERMANY:** "CIV–ARC–GERMANY v1.1 (Pinned)" — **stale** (actual v3.2)
- **CIV–CORE–GERMANY:** ARC Reference "CIV–ARC–GERMANY v2.5" — **stale** (actual v3.2)
- **CIV–STATE–GERMANY Section IX (Source Versions):** CIV–ARC–GERMANY v2.5 — **stale** (actual v3.2)
- **CIV–INDEX–GERMANY:** CIV–ARC–GERMANY v2.5 — **stale** (actual v3.2)

────────────────────────────────────────────────────────────
III. RECOMMENDATIONS SUMMARY
────────────────────────────────────────────────────────────

**A. ARC internal (version consistency)**  
| # | File | Action |
|---|------|--------|
| 1 | CIV–ARC–FRANCE | EOF line: "v3.0" → "v3.1" |
| 2 | CIV–ARC–GERMANY | EOF line: "v3.0" → "v3.2" |

**B. Mirroring — France (actual ARC v3.1)**  
| # | File | Location | Action |
|---|------|----------|--------|
| 3 | CIV–CORE–FRANCE | Governed by | CIV–ARC–FRANCE v2.0 → v3.1 |
| 4 | CIV–SCHOLAR–FRANCE | Governed by | CIV–ARC–FRANCE v2.0 → v3.1 |
| 5 | CIV–INDEX–FRANCE | Section II (CANONICAL GOVERNANCE FILES) | CIV–ARC–FRANCE v3.0 → v3.1 |

**C. Mirroring — Germany (actual ARC v3.2)**  
| # | File | Location | Action |
|---|------|----------|--------|
| 6 | CIV–CORE–GERMANY | ARC Reference | CIV–ARC–GERMANY v2.5 → v3.2 |
| 7 | CIV–SCHOLAR–GERMANY | Governed by | CIV–ARC–GERMANY v1.1 → v3.2 |
| 8 | CIV–STATE–GERMANY | Section IX (Source Versions table) | CIV–ARC–GERMANY v2.5 → v3.2 |
| 9 | CIV–INDEX–GERMANY | Section II / FILE REGISTER | CIV–ARC–GERMANY v2.5 → v3.2 |

**D. Optional**  
| # | File(s) | Action |
|---|---------|--------|
| 10 | CIV–ARC–FRANCE, CIV–ARC–GERMANY | Compatibility: CIV–MEM–CORE v3.0 → v3.4 (per cmc-version-upgrade-on-edit: governance refs; optional parity) |

**Note:** MEM files (e.g. MEM–GERMANY–BISMARCK) declare ARC compliance at creation time. Per cmc-version-upgrade-on-edit, do not bulk-update MEM headers for governance changes; update only when content is edited.

────────────────────────────────────────────────────────────
IV. FORBIDDEN BEHAVIORS CHECK
────────────────────────────────────────────────────────────
- No synthesis of preserved contradictions.
- No autonomous doctrine generation.
- No override of civilization-specific cognition.
- No inflation of certainty beyond source warrant.

**Audit complete.**

────────────────────────────────────────────────────────────
END OF AUDIT — ARC–FRANCE–GERMANY — 2026-02-19
────────────────────────────────────────────────────────────
