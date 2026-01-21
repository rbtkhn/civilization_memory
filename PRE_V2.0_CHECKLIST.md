# Pre-v2.0 Upgrade Checklist
## CIV–MEM–CORE Version 2.0 Preparation

This document outlines all changes that should be made before upgrading CIV–MEM–CORE to version 2.0.

---

## 1. DEPRECATED TERMINOLOGY CLEANUP

### 1.1 CIV–CORE–TEMPLATE.md
**Current Issue:** Section XIX still references deprecated "LECTURE MODE" and "LOGE"
- Line 349: "XIX. LECTURE INTERFACE GOVERNANCE LAYER (LOGE COMPATIBILITY)"
- Line 351: "Lecture Mode as a pedagogical surface"
- Line 355-356: "Lecture Mode is expressive..."
- Line 359: "LOGE Compatibility"
- Line 363: "CIV–SCHOLAR–PROTOCOL (LOGE)"
- Line 365: "option generation in Lecture Mode"
- Line 385: "Lecture interface governance"

**Required Changes:**
- Rename Section XIX to "IMAGINE INTERFACE GOVERNANCE LAYER (IOGE COMPATIBILITY)"
- Replace all "Lecture Mode" → "IMAGINE Mode"
- Replace all "LOGE" → "IOGE" (IMAGINE Option Generation Engine)
- Update references to CIV–SCHOLAR–PROTOCOL v1.6 (current version)
- Update template version to v1.8

**Impact:** Breaking change for CIV–CORE files that reference this section

---

### 1.2 CIV–CORE–ROME.md
**Current Issue:** Contains deprecated TEACH MODE and LOGE/TOGE references
- Line 280-283: References to "Lecture Mode"
- Line 286-287: "CIV–SCHOLAR–PROTOCOL v1.4 (LOGE-enabled)" and "Lecture Option Generation Engine (LOGE)"
- Line 292-303: Section XX.a "TEACH MODE TERMINOLOGY BINDING" (now superseded by IMAGINE)

**Required Changes:**
- Update Section XX to reference IMAGINE Mode and IOGE
- Update protocol version reference to v1.6
- Deprecate or remove Section XX.a (TEACH MODE TERMINOLOGY BINDING) as it's now superseded
- Add note that IMAGINE Mode replaces both Lecture and Teach modes

**Impact:** CIV–CORE–ROME needs version bump and terminology update

---

### 1.3 Other CIV–CORE Files
**Action Required:** Audit all CIV–CORE–[CIVILIZATION] files for:
- References to "Lecture Mode" → should be "IMAGINE Mode"
- References to "Teach Mode" → should be "IMAGINE Mode"  
- References to "LOGE" → should be "IOGE"
- References to "TOGE" → should be "IOGE"
- Protocol version references → update to v1.6

---

## 2. VERSION CONSISTENCY ALIGNMENT

### 2.1 Template Version References
**Current State:**
- CIV–MEM–CORE: v1.10
- CIV–MEM–TEMPLATE: v1.9 (references CIV–MEM–CORE v1.8+)
- CIV–CORE–TEMPLATE: v1.7 (references CIV–SCHOLAR–PROTOCOL v1.4+)
- CIV–SCHOLAR–PROTOCOL: v1.6
- CIV–SCHOLAR–TEMPLATE: v1.9
- CIV–INDEX–TEMPLATE: v1.6
- CIV–DOCTRINE–TEMPLATE: v1.0 (references CIV–MEM–CORE v1.5+)

**Required Updates:**
- CIV–MEM–TEMPLATE: Update compatibility to "CIV–MEM–CORE v1.10+"
- CIV–CORE–TEMPLATE: Update to reference CIV–SCHOLAR–PROTOCOL v1.6+
- CIV–DOCTRINE–TEMPLATE: Update to reference CIV–MEM–CORE v1.10+

---

## 3. MERCOURIS PROFILE INTEGRATION REFERENCES

### 3.1 Separate File Status
**Current State:** MIND–PROFILE–MERCOURIS.md still exists but is no longer loaded
**Action Required:**
- Option A: Archive the file (move to ARCHIVE/ or mark as superseded)
- Option B: Add deprecation notice at top of file
- Option C: Delete the file (if fully integrated)

**Recommendation:** Add deprecation notice and archive

---

### 3.2 Documentation Updates
**Files to Update:**
- MERCOURIS_DEMONSTRATION.md: Update to reflect integration into CIV–MEM–CORE
- MERCOURIS_PROMPT_STRUCTURE.md: Update extraction method documentation
- Any other docs referencing separate file loading

---

## 4. CIV–MEM–CORE STRUCTURAL IMPROVEMENTS

### 4.1 Upgrade Note Consolidation
**Current Issue:** Multiple upgrade notes (v1.9, v1.10) accumulate
**Proposed:** For v2.0, consolidate upgrade notes into a single "v2.0 Upgrade Summary" that:
- Lists all major changes from v1.0 → v2.0
- Maintains backward compatibility guarantees
- Documents breaking changes (if any)

---

### 4.2 Section Completeness
**Verify:**
- All sections are complete (no placeholders)
- All cross-references are accurate
- All version numbers are consistent
- All governance rules are explicit (no "unchanged from vX" placeholders)

---

## 5. CODEBASE ALIGNMENT

### 5.1 System Prompt References
**Verify:** All code references to:
- Mode names (IMAGINE/LEARN/WRITE) are consistent
- Protocol versions match governance files
- MERCOURIS extraction works correctly
- No hardcoded references to deprecated modes

---

### 5.2 Database Schema
**Check:** Any database fields or indexes that reference:
- Deprecated mode names
- Old protocol versions
- Separate MERCOURIS file paths

---

## 6. DOCUMENTATION COMPLETENESS

### 6.1 Architecture Documentation
**Files to Review:**
- ARCHITECTURE.md
- SCHOLAR_MODE_ARCHITECTURE.md
- CURSOR_SYSTEM_PROMPT.md

**Action:** Update all references to:
- IMAGINE Mode (not Lecture/Teach)
- IOGE (not LOGE/TOGE)
- MERCOURIS integration (not separate file)
- Current protocol versions

---

## 7. BREAKING CHANGES DOCUMENTATION

### 7.1 For v2.0 Release
**Required:** Document any breaking changes:
- Terminology changes (Lecture/Teach → IMAGINE)
- File structure changes (MERCOURIS integration)
- Protocol version requirements
- Migration path for existing CIV–CORE files

---

## 8. TESTING CHECKLIST

### 8.1 Before v2.0 Release
- [ ] All templates reference correct CIV–MEM–CORE version
- [ ] All CIV–CORE files updated to use IMAGINE/IOGE terminology
- [ ] MERCOURIS extraction from CIV–MEM–CORE works correctly
- [ ] System prompts generate correctly with integrated profile
- [ ] No deprecated mode references in codebase
- [ ] All documentation updated
- [ ] Version compatibility verified across all file types

---

## PRIORITY ORDER

### High Priority (Must Fix Before v2.0)
1. **CIV–CORE–TEMPLATE.md** - Deprecated terminology cleanup
2. **CIV–CORE–ROME.md** - Update to IMAGINE/IOGE
3. **Version references** - Align all template compatibility statements
4. **MERCOURIS file** - Archive/deprecate separate file

### Medium Priority (Should Fix Before v2.0)
5. **Other CIV–CORE files** - Audit and update terminology
6. **Documentation** - Update architecture docs
7. **Upgrade note consolidation** - Clean up v2.0 upgrade summary

### Low Priority (Nice to Have)
8. **Code comments** - Update any outdated comments
9. **Test coverage** - Verify all changes work correctly

---

## RECOMMENDED v2.0 UPGRADE SUMMARY

**Proposed v2.0 Changes:**
1. **Terminology Standardization:** Complete deprecation of Lecture/Teach modes, full adoption of IMAGINE Mode and IOGE
2. **MERCOURIS Integration:** Profile fully integrated into CIV–MEM–CORE (no separate file)
3. **Version Alignment:** All templates reference current versions
4. **Governance Consolidation:** Clean upgrade notes, explicit breaking changes
5. **Architectural Clarity:** All deprecated terminology removed, consistent naming

**Backward Compatibility:**
- Existing MEM files remain valid
- Existing CIV–CORE files remain valid but should be updated for terminology
- Existing SCHOLAR files remain valid
- No data migration required

---

## ESTIMATED EFFORT

- **CIV–CORE–TEMPLATE update:** ~30 minutes
- **CIV–CORE–ROME update:** ~15 minutes
- **Other CIV–CORE files audit:** ~1-2 hours (depending on count)
- **Template version updates:** ~15 minutes
- **Documentation updates:** ~1 hour
- **Testing and verification:** ~1 hour

**Total Estimated Time:** 4-5 hours

---

## NOTES

- v2.0 should represent a **major milestone** with:
  - Complete terminology standardization
  - Full MERCOURIS integration
  - Clean governance structure
  - No deprecated references
  
- Consider v2.0 as a **stability release** that consolidates all recent improvements into a clean, consistent foundation

- After v2.0, future versions can focus on new features rather than cleanup
