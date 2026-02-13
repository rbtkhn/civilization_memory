# Proposal: Burke Verbatim Insertions into MEM–AMERICA Files

**Date:** February 2026  
**Context:** Burke verbatim quotes from *Speech on Conciliation with the Colonies* (22 March 1775) to ground America’s Revolution-era MEMs in Anglian procedural encoding.  
**Version rule:** Content change → increment MEM content version only (cmc-version-upgrade-on-edit).

---

## 1. MEM–AMERICA–REVOLUTION

**File:** `content/civilizations/AMERICA/MEM–AMERICA–REVOLUTION.md`  
**Current version:** 1.1  
**Proposed version:** 1.2  
**Upgrade type:** ADDITIVE · Burke verbatim primary (Speech on Conciliation)

**Placement:** Section II, after the Paine SOURCE block (after line 58), before the section break for III.

**Rationale:** The sequence section already has Paine (universal cause, defection). Burke is the **Anglian parliamentary voice** that offered conciliation and described Americans in procedural terms; his speech (March 1775) preceded Lexington (April 1775). Adding Burke shows that a procedural path existed and was rejected by Parliament—rupture occurs against that backdrop.

**Insert (after the Paine SOURCE block, before "────────────────────────────────────────────────────────────" for III):**

```markdown
In Parliament (22 March 1775), Edmund Burke had urged conciliation and
governing by circumstance rather than abstract right—a procedural
alternative that Parliament did not adopt:

SOURCE — Burke, Speech on Conciliation with the Colonies (ARC-T-EARLY-MOD):
> "We must govern America according to that nature and to those circumstances, and not according to our own imaginations, nor according to abstract ideas of right—by no means according to mere general theories of government, the resort to which appears to me, in our present situation, no better than arrant trifling."
> — Edmund Burke, Speech on Moving His Resolutions for Conciliation with the Colonies, House of Commons, 22 March 1775; *The Works of the Right Honourable Edmund Burke*, 6 vols. (London: Henry G. Bohn, 1854–56), 1:464–71; also Wikisource, Project Gutenberg 5655 (ARC-T-EARLY-MOD) [ERC-PRIMARY].
```

**Header/bibliography:**  
- In header block: set Version 1.2, Supersedes v1.1, Upgrade Type: ADDITIVE · Burke verbatim primary (Speech on Conciliation).  
- In Section VIII MEM BIBLIOGRAPHY: add line:  
  `• Burke, Edmund. Speech on Conciliation with the Colonies, 22 Mar. 1775 (ARC-T-EARLY-MOD) [ERC-PRIMARY].`

---

## 2. MEM–AMERICA–REVOLUTION–CONTINENTAL–CONGRESS

**File:** `content/civilizations/AMERICA/MEM–AMERICA–REVOLUTION–CONTINENTAL–CONGRESS.md`  
**Current version:** 1.1  
**Proposed version:** 1.2  
**Upgrade type:** ADDITIVE · Burke verbatim primary (Speech on Conciliation)

**Placement:** Section IV (OLIVE BRANCH AND RUPTURE), after the Olive Branch SOURCE block (after line 95), before the paragraph that begins "**Liability mechanism**".

**Rationale:** The Congress sent the Olive Branch (July 1775); Burke had spoken in March 1775 for peace and conciliation. His "proposition is peace" frames the **British parliamentary alternative** that failed; the Congress’s petition is the colonies’ procedural move. Both conciliation paths (Burke in London, Olive Branch from Philadelphia) failed—tightens the procedural-failure narrative.

**Insert (after the Olive Branch SOURCE block, before "**Liability mechanism**"):**

```markdown
Burke had already framed the choice in Parliament (March 1775) as peace
by concession, not force—a path Parliament did not take:

SOURCE — Burke, Speech on Conciliation with the Colonies (ARC-T-EARLY-MOD):
> "The proposition is peace. Not peace through the medium of war; not peace to be hunted through the labyrinth of intricate and endless negotiations; not peace to arise out of universal discord fomented, from principle, in all parts of the Empire … It is simple peace; sought in its natural course, and in its ordinary haunts. It is peace sought in the spirit of peace, and laid in principles purely pacific."
> — Edmund Burke, Speech on Moving His Resolutions for Conciliation with the Colonies, House of Commons, 22 March 1775; *Works* (Bohn 1854–56), 1:464–71 (ARC-T-EARLY-MOD) [ERC-PRIMARY].
```

**Header/bibliography:**  
- Version 1.2, Supersedes v1.1, Upgrade Type: ADDITIVE · Burke verbatim primary (Speech on Conciliation).  
- Section IX MEM BIBLIOGRAPHY: add:  
  `• Burke, Edmund. Speech on Conciliation with the Colonies, 22 Mar. 1775 (ARC-T-EARLY-MOD) [ERC-PRIMARY].`

---

## 3. MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE

**File:** `content/civilizations/AMERICA/MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE.md`  
**Current version:** 1.3 (header shows 1.2 in one line—normalize to 1.3)  
**Proposed version:** 1.4  
**Upgrade type:** ADDITIVE · Burke verbatim primary (Speech on Conciliation)

**Placement:** Section II (STRATEGIC ENTRY: GRIEVANCE & LEGITIMACY FRAME), after the sentence "America claims continuity of Anglian grammar against Crown and Parliament." (after line 55), before the Jefferson SOURCE block.

**Rationale:** Section II states that the colonies enter as "procedural claimants" and that "America claims continuity of Anglian grammar." Burke is the **Anglian MP who encoded Americans that way**—"liberty according to English ideas," "love of freedom … predominating feature." One SOURCE grounds the procedural/English-liberty framing in a primary Anglian voice.

**Insert (after "America claims continuity of Anglian grammar against Crown and Parliament." and before "Jefferson, in his Autobiography..."):**

```markdown
Burke, in the same Parliament that rejected conciliation (March 1775),
had already described the colonists in terms that match that self-understanding:

SOURCE — Burke, Speech on Conciliation with the Colonies (ARC-T-EARLY-MOD):
> "In this character of the Americans, a love of freedom is the predominating feature which marks and distinguishes the whole … This fierce spirit of liberty is stronger in the English colonies probably than in any other people of the earth … They are therefore not only devoted to liberty, but to liberty according to English ideas, and on English principles."
> — Edmund Burke, Speech on Conciliation with the Colonies, 22 Mar. 1775, *Works* (Bohn 1854–56), 1:464–71; The Founders' Constitution, 1:1:2 (ARC-T-EARLY-MOD) [ERC-PRIMARY].
```

**Header/bibliography:**  
- Version 1.4, Supersedes v1.3, Upgrade Type: ADDITIVE · Burke verbatim primary (Speech on Conciliation).  
- Add to bibliography section (VIII or equivalent) if present:  
  `• Burke, Edmund. Speech on Conciliation with the Colonies, 22 Mar. 1775 (ARC-T-EARLY-MOD) [ERC-PRIMARY].`  
  (This file has no "MEM BIBLIOGRAPHY" subsection; add to CONTINUITY INSIGHTS or create a single "Primary sources" line in header area, or append to VII MEM CONNECTIONS as a reference only—per file convention, a short "Sources added" note in the upgrade line may suffice.)

---

## Summary

| File | Section | Burke quote theme | Version |
|------|---------|-------------------|--------|
| MEM–AMERICA–REVOLUTION | II (Sequence) | Govern by nature/circumstance, not abstract right | 1.1 → 1.2 |
| MEM–AMERICA–REVOLUTION–CONTINENTAL–CONGRESS | IV (Olive Branch) | Proposition is peace; simple peace | 1.1 → 1.2 |
| MEM–AMERICA–WAR–AMERICAN–INDEPENDENCE | II (Grievance & legitimacy) | Love of freedom; liberty according to English ideas | 1.3 → 1.4 |

**ARC:** All citations use ARC-T-EARLY-MOD (early modern primary). If CIV–ARC–AMERICA does not yet list Burke’s *Works* or the speech, add as [ERC-PRIMARY] with editorial note "Parliamentary speech; standard text from Bohn *Works* / Founders’ Constitution / Wikisource."

**Optional CONNECTIONS:**  
- MEM–AMERICA–REVOLUTION and MEM–AMERICA–REVOLUTION–CONTINENTAL–CONGRESS already reference MEM–ANGLIA–AMERICAN–REVOLUTION in PARALLELS.  
- Consider adding MEM–ANGLIA–LIT–BURKE to MEM CONNECTIONS (Cross-Civilizational or PARALLELS) in one or more of these files if the project tracks scholar/lit links (e.g. "Burke’s conciliation speech; procedural encoding of American resistance"). Omit if CONNECTIONS are strictly event/entity-based.

---

## Application

Apply the three insertions and version/bibliography updates only after user approval. No governance file changes.
