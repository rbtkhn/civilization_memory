# UPGRADE PLAN — ANGLIA LIT–* MEM Template Compliance

**Date:** 2026-01-31  
**Mode:** WRITE  
**Scope:** 9 MEM–ANGLIA–LIT–* files  
**Goal:** Bring all LIT–* files into full compliance with CIV–MEM–TEMPLATE v2.9  
**Estimated Duration:** 4.5-6.75 hours (30-45 min per file)

---

## I. EXECUTIVE SUMMARY

**Current Status:** All 9 LIT–* files missing required MEM CONNECTIONS and Bibliography sections.

**Required Actions:**
1. Add MEM CONNECTIONS sections (≥10 same-civ, ≥2 GEO)
2. Add Bibliography/References sections
3. Standardize Subject line format
4. Version increment (v1.x → v1.x+1)

**Priority:** HIGH — Template compliance required for canonical status.

---

## II. UPGRADE CHECKLIST (PER FILE)

For each LIT–* file, complete:

- [ ] **Step 1:** Standardize Subject line (if needed)
- [ ] **Step 2:** Add MEM CONNECTIONS section (≥10 same-civ, ≥2 GEO, with justifications)
- [ ] **Step 3:** Add Bibliography/References section (ARC sources, ERC classifications)
- [ ] **Step 4:** Update version number (v1.x → v1.x+1)
- [ ] **Step 5:** Update Upgrade Type in header
- [ ] **Step 6:** Update Last Update date
- [ ] **Step 7:** Verify section numbering (MEM CONNECTIONS = X, Bibliography = XI, END OF FILE follows)

---

## III. SUBJECT LINE STANDARDIZATION

**Current Inconsistency:**
- Some files: Name only (SHAKESPEARE, MILTON)
- Some files: Name + descriptive subtitle (HOBBES, LOCKE, PAINE, SMITH, HUME)
- One file: Name + classification (BURKE: "Literature / Political Thought")

**Standard Format (Recommended):**
```
Subject: [Full Name] ([Descriptive Subtitle])
```

**Action Plan:**

| File | Current | Standardized To |
|------|---------|----------------|
| LIT–BURKE | "Edmund Burke (Literature / Political Thought)" | "Edmund Burke (Procedural Conservatism & Anti-Revolutionary Restraint)" |
| LIT–SHAKESPEARE | "William Shakespeare" | "William Shakespeare (Authority Examined, Order Preserved)" |
| LIT–MILTON | "John Milton" | "John Milton (Liberty Through Restraint, Order Through Law)" |
| LIT–KING–JAMES–BIBLE | "King James Bible (Authorized Version)" | "King James Bible (Authorized Version)" ✓ (keep as is) |

**Rationale:** Descriptive subtitles align with HOBBES, LOCKE, PAINE, SMITH, HUME format and provide civilizational context.

---

## IV. MEM CONNECTIONS TEMPLATE

**Required Format:**

```
────────────────────────────────────────────────────────────
X. MEM CONNECTIONS
────────────────────────────────────────────────────────────
Same-civilization (Anglia):
• MEM–ANGLIA–[NAME] — [Justification: dependency/necessity/what breaks if removed]
• [Repeat ≥10 times]

GEO–MEM (required ≥2):
• MEM–ANGLIA–GEO–[NAME] — [Justification: geographic context/strategic terrain]
• MEM–ANGLIA–GEO–[NAME] — [Justification]

Cross-civilizational (if applicable):
• MEM–[CIV]–[NAME] — [Justification]
```

**Connection Justification Format:**
- Concise explanation (one sentence)
- States dependency or structural necessity
- Explains what breaks if connection removed
- Not evaluative, purely explanatory

**Example (from MEM–ANGLIA–HAMILTON):**
```
• MEM–ANGLIA–BANK–ENGLAND — First Bank modelled on Bank of England; public credit, national bank template
```

---

## V. BIBLIOGRAPHY TEMPLATE

**Required Format:**

```
────────────────────────────────────────────────────────────
XI. PRIMARY SOURCES & REFERENCES
────────────────────────────────────────────────────────────
Secondary / critical (ARC-T-MODERN):
• **[Author Name]**, *[Title]* ([Place]: [Publisher], [Year]) — [Brief description]; ERC-[CLASSIFICATION] ([notes]).

Additional scholarly (ARC-T-MODERN):
• **[Author Name]**, *[Title]* ([Place]: [Publisher], [Year]) — [Brief description]; ARC-T-MODERN [ERC-CLASSIFICATION].
```

**ERC Classifications:**
- ERC-PRIMARY — Direct evidence from subject period
- ERC-CONTEXTUAL — Contemporary/near-contemporary analysis
- ERC-SECONDARY — Scholarly analysis and synthesis
- ERC-CRITICAL — Modern historiographical evaluation

**Example (from MEM–ANGLIA–HAMILTON):**
```
Secondary / critical (ARC-T-MODERN):
• **G. Edward Griffin**, *The Creature from Jekyll Island: A Second Look at the Federal Reserve* (Westlake Village, CA: American Media, 1994) — Fed founding, Jekyll Island 1910; ERC-CRITICAL (interpretive/polemical).

Additional scholarly (ARC-T-MODERN):
• **Niall Ferguson**, *The Ascent of Money: A Financial History of the World* (New York: Penguin Press, 2008) — public credit, bonds, Bank of England lineage; Hamilton's financial logic in global context; ARC-T-MODERN [ERC-SECONDARY].
```

---

## VI. FILE-SPECIFIC UPGRADE GUIDANCE

### VI.A MEM–ANGLIA–LIT–BURKE.md (v1.1 → v1.2)

**Subject Line:** Change to "Edmund Burke (Procedural Conservatism & Anti-Revolutionary Restraint)"

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–LAW–PARLIAMENT — Burke as MP; parliamentary tradition defender
2. MEM–ANGLIA–GLORIOUS–REVOLUTION — Burke's contrast: Glorious Revolution (procedural) vs. French Revolution (rupture)
3. MEM–ANGLIA–AMERICAN–REVOLUTION — Burke's defense of American colonial rights; procedural vs. revolutionary contrast
4. MEM–ANGLIA–PITT–YOUNGER — Contemporary political ally; Rockingham Whigs
5. MEM–ANGLIA–WILBERFORCE — Contemporary; Burke's ambivalence vs. Wilberforce's moral clarity
6. MEM–ANGLIA–LIT–LOCKE — Intellectual predecessor; procedural liberalism
7. MEM–ANGLIA–LIT–HOBBES — Contrast: order through fear vs. order through tradition
8. MEM–ANGLIA–WAR–NAPOLEON — Burke predicts French Revolution consequences; coalition response
9. MEM–ANGLIA–BRITISH–EMPIRE–INDIA — Burke's critique of East India Company abuses
10. MEM–ANGLIA–DYNASTY–HANOVER — Burke operates within Hanoverian constitutional framework
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; Burke's procedural continuity vs. continental rupture
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as civilizational operating system; Burke's trans-Atlantic perspective

**Bibliography:** Extract from existing SOURCE blocks (Churchill Vol. 3).

---

### VI.B MEM–ANGLIA–LIT–SHAKESPEARE.md (v1.3 → v1.4)

**Subject Line:** Change to "William Shakespeare (Authority Examined, Order Preserved)"

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–RICHARD–II — *Richard II*; deposition, "blessed plot"
2. MEM–ANGLIA–RICHARD–III — *Richard III*; terminal Plantagenet, Bosworth
3. MEM–ANGLIA–HENRY–IV — *Henry IV* 1 & 2; usurper-king, "uneasy lies the head"
4. MEM–ANGLIA–HENRY–VI — *Henry VI* 1–3; weak king, Wars of the Roses trigger
5. MEM–ANGLIA–HENRY–V — *Henry V*; St Crispin's Day, legitimacy through performance
6. MEM–ANGLIA–DYNASTY–PLANTAGENET — Shakespeare's Plantagenet cycle; legitimacy questions
7. MEM–ANGLIA–DYNASTY–LANCASTER — Lancaster/York conflict; Shakespeare's Wars of the Roses
8. MEM–ANGLIA–DYNASTY–YORK — York/Lancaster conflict; Shakespeare's Wars of the Roses
9. MEM–ANGLIA–WAR–ROSES — Shakespeare's primary subject; civil war, legitimacy collapse
10. MEM–ANGLIA–ELIZABETH–I — Shakespeare's patron; Elizabethan theater, censorship, legitimacy
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — "This fortress built by Nature"; Channel as defensive identity
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as civilizational operating system; Shakespeare's England as maritime power

**Bibliography:** Extract from existing SOURCE blocks (Shakespeare quotes).

---

### VI.C MEM–ANGLIA–LIT–HOBBES.md (v1.3 → v1.4)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–WAR–HASTINGS — Hobbes shares Hastings's lesson: personal authority collapse produces total systemic failure
2. MEM–ANGLIA–WAR–ENGLISH–CIVIL — Hobbes writes during/after Civil War; *Leviathan* as response to disorder
3. MEM–ANGLIA–CHARLES–I — Execution of Charles I; Hobbes's fear of authority collapse
4. MEM–ANGLIA–CROMWELL — Cromwell as Leviathan; order restored through indivisible authority
5. MEM–ANGLIA–DYNASTY–STUART — Stuart collapse; Hobbes's diagnosis of authority failure
6. MEM–ANGLIA–LIT–LOCKE — Contrast: Hobbes (order before liberty) vs. Locke (liberty through procedure)
7. MEM–ANGLIA–LIT–MILTON — Contemporary; Milton (liberty through restraint) vs. Hobbes (order through fear)
8. MEM–ANGLIA–LAW–PARLIAMENT — Parliament's authority challenge; Hobbes's indivisible sovereignty
9. MEM–ANGLIA–GLORIOUS–REVOLUTION — Post-Hobbes; procedural revolution vs. Hobbes's indivisible authority
10. MEM–ANGLIA–WILLIAM–III — William as Leviathan; order restored without absolute authority
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; Hobbes's fear of invasion/chaos
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as operating system; Hobbes's state as island fortress

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.D MEM–ANGLIA–LIT–LOCKE.md (v1.3 → v1.4)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–GLORIOUS–REVOLUTION — Locke's *Two Treatises* justify Glorious Revolution; procedural legitimacy
2. MEM–ANGLIA–WILLIAM–III — William as Locke's legitimate ruler; consent, not divine right
3. MEM–ANGLIA–DYNASTY–STUART — Stuart collapse; Locke's procedural alternative
4. MEM–ANGLIA–LAW–PARLIAMENT — Parliamentary supremacy; Locke's consent theory
5. MEM–ANGLIA–AMERICAN–REVOLUTION — Locke's influence on American founders; consent, natural rights
6. MEM–ANGLIA–LAW–FEDERALIST–PAPERS — Federalist Papers cite Locke; procedural liberalism
7. MEM–ANGLIA–HAMILTON — Hamilton's procedural republicanism; Locke's influence
8. MEM–ANGLIA–LIT–HOBBES — Contrast: Locke (liberty through procedure) vs. Hobbes (order through fear)
9. MEM–ANGLIA–LIT–BURKE — Burke as Locke's inheritor; procedural continuity, not rupture
10. MEM–ANGLIA–WAR–ENGLISH–CIVIL — Post-Civil War context; Locke's procedural alternative to Hobbes
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; Locke's procedural order vs. continental absolutism
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as operating system; Locke's trans-Atlantic influence

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.E MEM–ANGLIA–LIT–MILTON.md (v1.0 → v1.1)

**Subject Line:** Change to "John Milton (Liberty Through Restraint, Order Through Law)"

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–WAR–ENGLISH–CIVIL — Milton writes during Civil War; *Areopagitica*, republican ideals
2. MEM–ANGLIA–CHARLES–I — Execution of Charles I; Milton's defense of regicide
3. MEM–ANGLIA–CROMWELL — Milton serves under Cromwell; republican administration
4. MEM–ANGLIA–DYNASTY–STUART — Stuart collapse; Milton's republican alternative
5. MEM–ANGLIA–LIT–HOBBES — Contemporary; Milton (liberty through restraint) vs. Hobbes (order through fear)
6. MEM–ANGLIA–LIT–LOCKE — Locke inherits Milton's liberty themes; procedural vs. revolutionary
7. MEM–ANGLIA–GLORIOUS–REVOLUTION — Post-Milton; procedural revolution vs. Milton's republican rupture
8. MEM–ANGLIA–LAW–PARLIAMENT — Parliamentary authority; Milton's republican parliamentarianism
9. MEM–ANGLIA–AMERICAN–REVOLUTION — Milton's influence on American founders; liberty, republicanism
10. MEM–ANGLIA–LIT–KING–JAMES–BIBLE — Milton's *Paradise Lost* vs. KJV; biblical authority, literary tradition
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; Milton's island republic
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as operating system; Milton's trans-Atlantic republican influence

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.F MEM–ANGLIA–LIT–PAINE.md (v1.4 → v1.5)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–AMERICAN–REVOLUTION — Paine's *Common Sense*; revolutionary catalyst
2. MEM–ANGLIA–WAR–AMERICAN–INDEPENDENCE–YORKTOWN — Paine serves in Continental Army; revolutionary commitment
3. MEM–ANGLIA–LIT–BURKE — Contrast: Paine (revolutionary rupture) vs. Burke (procedural continuity)
4. MEM–ANGLIA–LIT–LOCKE — Paine extends Locke; natural rights, consent, rupture
5. MEM–ANGLIA–HAMILTON — Contrast: Paine (revolutionary simplicity) vs. Hamilton (procedural complexity)
6. MEM–ANGLIA–LAW–FEDERALIST–PAPERS — Federalist Papers respond to Paine; procedural vs. revolutionary
7. MEM–ANGLIA–FRANKLIN — Paine's American connection; trans-Atlantic revolutionary network
8. MEM–ANGLIA–WAR–NAPOLEON — Paine's French Revolution involvement; revolutionary internationalism
9. MEM–ANGLIA–DYNASTY–HANOVER — Paine challenges Hanoverian legitimacy; revolutionary alternative
10. MEM–ANGLIA–BRITISH–EMPIRE — Paine's critique of empire; revolutionary anti-imperialism
11. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as revolutionary corridor; Paine's trans-Atlantic influence
12. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as barrier; Paine's revolutionary break from Anglia

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.G MEM–ANGLIA–LIT–SMITH.md (v1.4 → v1.5)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–BRITISH–EMPIRE — Smith's *Wealth of Nations*; empire, trade, markets
2. MEM–ANGLIA–BANK–ENGLAND — Smith's analysis of banking; markets, credit, order
3. MEM–ANGLIA–HAMILTON — Hamilton reads Smith; markets, public credit, national bank
4. MEM–ANGLIA–ROTHSCHILD — Smith's market logic; financial networks, order without command
5. MEM–ANGLIA–BRITISH–EMPIRE–INDIA — Smith's critique of East India Company; markets vs. monopoly
6. MEM–ANGLIA–WAR–SEVEN–YEARS — Smith writes during/after Seven Years' War; markets, trade, empire
7. MEM–ANGLIA–PITT–YOUNGER — Smith's influence on Pitt; free trade, markets
8. MEM–ANGLIA–LIT–LOCKE — Smith extends Locke; property, markets, procedural order
9. MEM–ANGLIA–LIT–BURKE — Contemporary; Smith (markets) vs. Burke (tradition); both procedural
10. MEM–ANGLIA–DYNASTY–HANOVER — Hanoverian stability; Smith's market order
11. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as market corridor; Smith's trans-Atlantic trade
12. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as trade route; Smith's maritime markets

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.H MEM–ANGLIA–LIT–HUME.md (v1.3 → v1.4)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–LIT–LOCKE — Hume critiques Locke; skepticism, convention, order without certainty
2. MEM–ANGLIA–LIT–SMITH — Hume's influence on Smith; moral sentiment, convention, markets
3. MEM–ANGLIA–LIT–BURKE — Contemporary; Hume (skepticism) vs. Burke (tradition); both procedural
4. MEM–ANGLIA–SCOTLAND — Hume as Scottish Enlightenment; Scottish-Anglian intellectual fusion
5. MEM–ANGLIA–DYNASTY–HANOVER — Hanoverian stability; Hume's convention-based order
6. MEM–ANGLIA–LAW–PARLIAMENT — Parliamentary tradition; Hume's convention, not contract
7. MEM–ANGLIA–AMERICAN–REVOLUTION — Hume's influence on American founders; skepticism, convention
8. MEM–ANGLIA–HAMILTON — Hamilton reads Hume; convention, order, markets
9. MEM–ANGLIA–GLORIOUS–REVOLUTION — Post-1688 stability; Hume's convention-based legitimacy
10. MEM–ANGLIA–BRITISH–EMPIRE — Hume's analysis of empire; convention, order, markets
11. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; Hume's convention-based order
12. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as operating system; Hume's trans-Atlantic influence

**Bibliography:** Extract from existing SOURCE blocks.

---

### VI.I MEM–ANGLIA–LIT–KING–JAMES–BIBLE.md (v1.0 → v1.1)

**Subject Line:** ✓ Already standardized

**MEM CONNECTIONS (Suggested ≥10):**
1. MEM–ANGLIA–JAMES–I — James I commissions KJV; Authorized Version, royal authority
2. MEM–ANGLIA–DYNASTY–STUART — Stuart legitimacy; KJV as Stuart achievement
3. MEM–ANGLIA–LAW–PARLIAMENT — KJV translation process; parliamentary/ecclesiastical authority
4. MEM–ANGLIA–HENRY–VIII — Henry's break with Rome; KJV as post-Reformation synthesis
5. MEM–ANGLIA–ELIZABETH–I — Elizabethan religious settlement; KJV as Anglican synthesis
6. MEM–ANGLIA–LIT–SHAKESPEARE — Shakespeare writes during KJV translation; biblical language, literary tradition
7. MEM–ANGLIA–LIT–MILTON — Milton's *Paradise Lost*; KJV as source, literary tradition
8. MEM–ANGLIA–AMERICAN–REVOLUTION — KJV in America; trans-Atlantic religious/literary tradition
9. MEM–ANGLIA–UNITED–STATES–AMERICA — KJV as American biblical text; settler zone, religious continuity
10. MEM–ANGLIA–CANADA — KJV in Canada; settler zone, religious continuity
11. MEM–ANGLIA–GEO–ATLANTIC — Atlantic as religious/literary corridor; KJV's trans-Atlantic influence
12. MEM–ANGLIA–GEO–ENGLISH–CHANNEL — Channel as defensive filter; KJV as Anglian identity marker

**Bibliography:** Extract from existing SOURCE blocks.

---

## VII. EXECUTION ORDER

**Recommended Sequence:**

1. **Phase 1:** Standardize Subject lines (batch update, 5 files)
   - LIT–BURKE, LIT–SHAKESPEARE, LIT–MILTON (others already standardized)

2. **Phase 2:** Add MEM CONNECTIONS sections (one file at a time)
   - Start with LIT–BURKE (most connections identified)
   - Then LIT–SHAKESPEARE (clear historical connections)
   - Continue through remaining files

3. **Phase 3:** Add Bibliography sections (one file at a time)
   - Extract from existing SOURCE blocks
   - Format per template
   - Add ERC classifications

4. **Phase 4:** Version increment and header updates
   - Update version number
   - Update Upgrade Type
   - Update Last Update date

**Estimated Time per File:**
- Subject line standardization: 2 min
- MEM CONNECTIONS section: 20-30 min
- Bibliography section: 10-15 min
- Header updates: 2 min
- **Total: 34-49 min per file**

---

## VIII. QUALITY CHECKLIST

After each file upgrade, verify:

- [ ] Subject line standardized (if applicable)
- [ ] MEM CONNECTIONS section present
- [ ] ≥10 same-civilization connections
- [ ] ≥2 GEO–MEM connections
- [ ] Each connection has justification
- [ ] Bibliography section present
- [ ] ARC sources properly formatted
- [ ] ERC classifications included
- [ ] Version number incremented
- [ ] Upgrade Type updated
- [ ] Last Update date current
- [ ] Section numbering correct (MEM CONNECTIONS = X, Bibliography = XI)
- [ ] END OF FILE marker present

---

## IX. COMPLETION CRITERIA

**Upgrade complete when:**
- All 9 files have MEM CONNECTIONS sections (≥10 same-civ, ≥2 GEO)
- All 9 files have Bibliography sections
- All 9 files have standardized Subject lines
- All 9 files version incremented
- All 9 files pass quality checklist

**Verification:** Run audit command to verify template compliance.

---

END OF PLAN — 2026-01-31 (ANGLIA LIT–* MEM Template Compliance Upgrade Plan)
