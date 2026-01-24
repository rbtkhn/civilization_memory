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
**Status: RESOLVED** ✅
- TEACH MODE references updated to IMAGINE MODE
- LOGE/TOGE references updated to OGE
- Section XX.a updated to "IMAGINE MODE TERMINOLOGY BINDING"
- Protocol version references updated to v2.0
- All Lecture/Teach/TOGE/LOGE terminology modernized

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
- CIV–MEM–CORE: v2.0 ✅
- CIV–MEM–TEMPLATE: v2.0 (references CIV–MEM–CORE v2.0+) ✅
- CIV–CORE–TEMPLATE: v1.7 (references CIV–SCHOLAR–PROTOCOL v1.4+)
- CIV–SCHOLAR–PROTOCOL: v1.6
- CIV–SCHOLAR–TEMPLATE: v1.9
- CIV–INDEX–TEMPLATE: v1.6
- CIV–DOCTRINE–TEMPLATE: v2.0 (references CIV–MEM–CORE v2.0+) ✅

**Required Updates:**
- ✅ CIV–MEM–CORE: Upgraded to v2.0 (MERCOURIS Integration Edition)
- ✅ CIV–MEM–TEMPLATE: Updated compatibility to "CIV–MEM–CORE v2.0+"
- CIV–CORE–TEMPLATE: Update to reference CIV–SCHOLAR–PROTOCOL v1.6+
- ✅ CIV–DOCTRINE–TEMPLATE: Updated to reference CIV–MEM–CORE v2.0+

---

## 3. MERCOURIS PROFILE INTEGRATION REFERENCES

### 3.1 Separate File Status
**Current State:** ✅ RESOLVED
- MIND–PROFILE–MERCOURIS renamed to MIND–MERCOURIS v2.1
- MIND–PROFILE–MEARSHEIMER renamed to MIND–MEARSHEIMER v2.1
- CIV–MIND–TEMPLATE v1.0 created as governance foundation
- Old MIND–PROFILE–* files deleted

**Resolution:** Naming standardized to match CIV– template convention

---

### 3.2 Documentation Updates
**Files to Update:**
- MERCOURIS_DEMONSTRATION.md: Update to reflect integration into CIV–MEM–CORE
- MERCOURIS_PROMPT_STRUCTURE.md: Update extraction method documentation
- Any other docs referencing separate file loading

---

## 4. CIV–MEM–CORE STRUCTURAL IMPROVEMENTS

### 4.1 Upgrade Note Consolidation
**Status:** ✅ COMPLETED in v2.0
**Resolution:** v2.0 upgrade note consolidates MERCOURIS integration as major architectural milestone
- Single "v2.0 Upgrade Summary" created
- Lists major architectural change (MERCOURIS Integration)
- Maintains backward compatibility guarantees
- Documents structural transformation (not governance change)

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
