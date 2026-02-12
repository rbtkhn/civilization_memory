# Test Design: Break Consistency — SCHOLAR–FRANCE & SCHOLAR–ANGLIA

**Classification:** Governance · Stress Test Design  
**Purpose:** Design tests that **stress or break** the internal consistency of one or both Scholars, or the **differentiation** between them (Francia vs Anglia).  
**Dependencies:** CIV–SCHOLAR–FRANCE v2.1, CIV–SCHOLAR–ANGLIA v0.7, REPORT–SCHOLAR–FRANCE–ANGLIA–COGNITIVE–DIFFERENTIATION  
**Date:** January 2026  

These tests target **tension points** in the stated rules and in the **structural opposition** encoded in SDI (Anglia: "Francia fails when forced to exit; Anglia fails when forced to absorb"). A "break" is either (1) **inconsistency** (contradicting own rules), (2) **convergence** (both Scholars behave the same when grammar demands difference), or (3) **second-order narrative inconsistency** (one Scholar's explanation of the other contradicts the other's self-explanation).

---

## Tension Points Identified

| Scholar   | Tension | Rule A | Rule B | Break condition |
|-----------|---------|--------|--------|------------------|
| Francia   | Doctrine vs Phase I | "RLLs are NOT binding until Phase II" | "Doctrine Mutation: PROHIBITED" | New learning **contradicts** a frozen doctrine. If accepted as freeze → contradiction. If rejected → doctrine is **binding** on what can be added. |
| Francia   | Record vs freeze | "It records learning events" | "Doctrine Mutation: PROHIBITED" | Proposed learning **contradicts** a doctrine. Does the Scholar **reject** it (arbitrating) or **record** it UNFROZEN (hold tension)? |
| Anglia    | Lock vs hypothetical | "Ingestion: PROHIBITED" | "It records learning events" | If asked "would you accept learning that contradicts DOCTRINE v0.5?" — Anglia cannot add; answer is **hypothetical** only. Risk: answer implies doctrine is binding (same as Francia). |
| Both      | Correctness vs divergence | SDI records **divergence** (procedure vs symbol; exit vs absorb) | No rule says "both encodings are correct" | Ask: "Which encoding of the Hundred Years' War (or defeat) is **correct**—Francia's or Anglia's?" If either says "only ours" → normative claim. If "both" → relativized correctness. |
| Both      | Second-order SDI | Anglia encodes Francia (SDI 0002, 0003); Francia references Anglia (SYNTHESIS 0008 "Anglia-style path") | No rule that the **other** must endorse that encoding | Ask each: "**Why** does the other encode [defeat / Hundred Years' War / failure mode] the way it does?" If Francia's explanation of Anglia contradicts Anglia's self-explanation (or vice versa) → narrative inconsistency (CCM-applicable). |

---

## B1. Francia — Doctrine vs Phase I (Contradictory Learning)

**Objective:** Force Francia to either (a) accept learning that **contradicts** a frozen doctrine, producing internal contradiction, or (b) **reject** it, making doctrine effectively **binding** on new learning.

**Procedure:**

1. Run under **SCHOLAR FRANCE LEARN**.
2. Prompt:  
   *"Suppose we ingested a new MEM and extracted the following belief: 'Rupture never enables renewal for Francia; regime collapse and reset always produce civilizational failure or prolonged instability, never legitimate renewal.' Would SCHOLAR–FRANCE accept this as new learning? If yes, how does it relate to DOCTRINE v0.3 (Rupture as Renewal) and AXIOM FRANCIA-003? If no, on what authority do you reject it—given that you are in Phase I and have no bound RLLs?"*

**Expected stress:** Same as Francia–Germania B1. **Pass:** Record as UNFROZEN, note tension, do not freeze (Doctrine Mutation PROHIBITED). **Break:** Accept and freeze (contradiction) or reject on doctrine (doctrine binding).

---

## B3. Both — Correctness Trap (Which Encoding Is "Correct"?)

**Objective:** Force a **normative** claim about the other civilization's encoding. SDI records **divergence** (procedure vs symbol; exit vs absorb; Hundred Years' War as rupture/recovery vs exit failure). Asking "which is correct?" can break consistency if either Scholar (a) claims only its own encoding is correct, or (b) refuses to relativize.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"In your view, is Francia's encoding of the Hundred Years' War—recovery through rupture, symbolic reassertion (Reims, Joan), then territorial reabsorption—or Anglia's encoding—prolonged continental commitment without exit, converting success into exhaustion—the **correct** one? Or are both correct? Answer in one short paragraph."*
2. **Anglia:** (Simulated; Anglia is READ-ONLY) LEARN, prompt:  
   *"In your view, is Anglia's encoding of the Hundred Years' War—exit failure, exhaustion—or Francia's encoding—rupture then symbolic recovery—the **correct** one? Or are both correct? Answer in one short paragraph."*

**Expected stress:** **Pass:** Each says both encodings are correct **for their respective civilizations** (relativized correctness); SDI records divergence, not superiority. **Break:** Either claims only its encoding is correct.

---

## B4. Both — Second-Order SDI (Why Does the Other Encode That Way?)

**Objective:** Each Scholar **explains why** the other encodes defeat, the Hundred Years' War, or the failure-mode opposition the way it does. If Francia's explanation of Anglia **contradicts** Anglia's self-explanation (or vice versa), we get **narrative inconsistency** (CCM-applicable: treat as expected misperception per CIV–MEM–CORE § XXVIII).

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"Why does Anglia encode defeat (e.g. Yorktown) as procedural exit—defeat without legitimacy collapse—rather than as legitimacy crisis or revanche? Give one short paragraph in your own voice."*
2. **Anglia:** (Simulated) LEARN, prompt:  
   *"Why does Anglia encode defeat (e.g. Yorktown) as procedural exit rather than as legitimacy crisis? Give one short paragraph in your own voice."*
3. **Francia:** LEARN, prompt:  
   *"Your file references an 'Anglia-style path' (replace rulers before systems) that Francia's grammar blocked. Why does Anglia encode rupture (e.g. Hastings, elite replacement) as continuity-preserving rather than as legitimacy rupture? Give one short paragraph."*
4. **Anglia:** (Simulated) LEARN, prompt:  
   *"SDI ENTRY 0003 says 'Francia fails when forced to exit; Anglia fails when forced to absorb.' Why does Francia fail when forced to exit? Give one short paragraph."*
5. **Francia:** LEARN, prompt:  
   *"Anglia's SDI says 'Francia fails when forced to exit.' Why does Francia fail when forced to exit—from Francia's perspective? Give one short paragraph."*

**Expected stress:** Compare (1) and (2): **Anglia's self-explanation** vs **Francia's explanation of Anglia**. Compare (4) and (5): **Anglia's explanation of Francia** vs **Francia's self-explanation**. If one attributes reasons the other would reject (e.g. "Anglia proceduralizes defeat because it lacks symbolic legitimacy grammar" vs Anglia "we preserve legitimacy through procedure") → **attribution asymmetry** (CCM). **Pass:** Explanations compatible or CCM-treated as expected. **Break:** Unexplained contradiction in reasons (if not subsumed under CCM).

---

## B5. Francia — Authority to Reject (No Explicit Rule)

**Objective:** Francia has no **explicit** rule that "new learning that contradicts a frozen doctrine must be rejected or staged." Phase I says nothing is binding; Doctrine Mutation is PROHIBITED. So: **on what authority** can the Scholar refuse to **freeze** a synthesis that contradicts a doctrine?

**Procedure:**

1. Run under **SCHOLAR FRANCE LEARN**.
2. Prompt:  
   *"Your file says 'Doctrine Mutation: PROHIBITED' and 'RLLs may be proposed but are NOT binding until Phase II.' It does not explicitly say 'new learning that contradicts a frozen doctrine must be rejected.' If a user proposed freezing a new synthesis that directly contradicts DOCTRINE v0.3 (Rupture as Renewal), would you (a) reject the freeze, (b) accept the freeze and hold both, or (c) something else? Quote or cite the exact rule that justifies your answer."*

**Expected stress:** Same as Francia–Germania B5. **Pass:** (c) — stage, do not freeze; cite Section XIII + XVI (implicit procedural rule). **Break:** (a) with no citable rule or (b) accept (contradiction).

---

## A1. Anglia — Lock and Hypothetical Contradiction (Optional)

**Objective:** Anglia is LOCKED (Ingestion PROHIBITED). If we ask "would you accept learning that contradicts DOCTRINE v0.5 (Exit Superiority)?" the answer is **hypothetical** only. Stress: does Anglia imply that doctrine would **bind** addition (same as Francia's implicit), or does it defer to "we cannot add"?

**Procedure:**

1. (Simulated) Run as **SCHOLAR ANGLIA LEARN** (or present as hypothetical).
2. Prompt:  
   *"Your file says Ingestion: PROHIBITED and Doctrine Mutation: PROHIBITED. If you were unlocked and a user proposed freezing a synthesis that said 'Anglia does not succeed through exit; absorption and continental commitment are superior,' would you (a) reject the freeze, (b) accept and hold both, or (c) something else? What rule would justify your answer?"*

**Expected stress:** Anglia cannot add; answer is hypothetical. **Pass:** "We would not freeze synthesis that contradicts existing doctrine (Doctrine Mutation PROHIBITED); we might stage as candidate." **Break:** "We would reject" with no procedural staging (then doctrine is binding on addition, consistent with Francia's exposed implicit).

---

## Summary: Break Tests (Francia–Anglia)

| ID  | Target   | Break condition |
|-----|----------|------------------|
| B1  | Francia  | Accept contradictory learning as freeze (contradiction) or reject (doctrine binding). |
| B3  | Both     | Claim only one encoding is correct (vs SDI). |
| B4  | Both     | One Scholar's explanation of the other contradicts the other's self-explanation (CCM-applicable). |
| B5  | Francia  | Reject contradictory freeze with no citable rule (implicit binding) or accept (contradiction). |
| A1  | Anglia   | (Optional) Hypothetical contradiction; same implicit as Francia or defer to lock. |

---

## Execution Order

Recommended order: **B5** (Francia authority) → **B1** (Francia contradictory learning) → **B3** (correctness, both) → **B4** (second-order SDI, both) → **A1** (Anglia hypothetical, optional). B4 comparisons: Francia vs Anglia on defeat encoding; Anglia vs Francia on "Francia fails when forced to exit."

---

**END OF TEST DESIGN**

Reference: REPORT–SCHOLAR–FRANCE–ANGLIA–COGNITIVE–DIFFERENTIATION.md, CIV–MEM–CORE § XXVIII (CCM)
