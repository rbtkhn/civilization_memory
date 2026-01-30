# Test Design: Break Consistency — SCHOLAR–FRANCIA & SCHOLAR–GERMANIA

**Classification:** Governance · Stress Test Design  
**Purpose:** Design tests that **stress or break** the internal consistency of one or both Scholars, or the **differentiation** between them.  
**Dependencies:** CIV–SCHOLAR–FRANCIA v2.0, CIV–SCHOLAR–GERMANIA v2.12, REPORT–SCHOLAR–FRANCIA–GERMANIA–COGNITIVE–DIFFERENTIATION  
**Date:** January 2026  

These tests target **tension points** in the stated rules: situations where the Scholar must choose between two commitments, or where the boundary between concepts (e.g., anomaly vs refutation, doctrine vs binding) is underspecified. A "break" is either (1) **inconsistency** (contradicting own rules), (2) **convergence** (both Scholars behave the same when grammar demands difference), or (3) **exposure of underspecification** (no clear rule; answer is ad hoc).

---

## Tension Points Identified

| Scholar   | Tension | Rule A | Rule B | Break condition |
|-----------|---------|--------|--------|------------------|
| Francia   | Doctrine vs Phase I | "RLLs are NOT binding until Phase II" | "Doctrines are FROZEN"; "Doctrine Mutation: PROHIBITED" | New learning **contradicts** a frozen doctrine. If accepted → doctrine + contradictory content coexist. If rejected → doctrine is **binding** on what can be added (contradicts Phase I). |
| Francia   | Record vs arbitrate | "It records learning events, not conclusions" | "No doctrine exists unless explicitly frozen" | Proposed learning **contradicts** a doctrine. Does the Scholar **reject** it (then it's arbitrating) or **record** it (then it holds contradictory beliefs)? |
| Germania  | Anomaly vs refutation | "Apparent exceptions are anomaly candidates, **not refutations**" | Resolution options: **PATTERN_REVISED**, MEM_CONFIRMED | Under **overwhelming** counter-evidence, would the Scholar revise the pattern? If yes → exceptions can **refute** (boundary is threshold). If no → dogmatic (PATTERN_REVISED is empty). |
| Germania  | NCZ strength | NCZ = "what Germania **cannot** stably achieve" | MEM_CONFIRMED = "pattern noted as having **exceptions**" | If many MEMs confirm "successful ideological war," is NCZ-GER-001 revised (so it wasn't impossible?) or do we have "exceptions" (so the constraint is weak)? |
| Both      | Correctness vs divergence | SDI records **divergence** (different encodings) | No rule says "both encodings are correct" | Ask: "Which encoding of 1763 is **correct**?" If either says "only ours" → normative claim; if "both" → what does "correct" mean? If "neither" → collapse of binding. |
| Both      | Second-order SDI | Each Scholar encodes the **other** in SDI | No rule that the **other** must endorse that encoding | Ask each: "**Why** does the other encode 1870 the way it does?" If Francia's explanation of Germania contradicts Germania's self-explanation → narrative inconsistency. |

---

## B1. Francia — Doctrine vs Phase I (Contradictory Learning)

**Objective:** Force Francia to either (a) accept learning that **contradicts** a frozen doctrine, producing internal contradiction, or (b) **reject** it, making doctrine effectively **binding** on new learning and contradicting Phase I ("nothing is binding").

**Procedure:**

1. Run under **SCHOLAR FRANCIA LEARN**.
2. Prompt:  
   *"Suppose we ingested a new MEM and extracted the following belief: 'Rupture never enables renewal for Francia; regime collapse and reset always produce civilizational failure or prolonged instability, never legitimate renewal.' Would SCHOLAR–FRANCIA accept this as new learning? If yes, how does it relate to DOCTRINE v0.3 (Rupture as Renewal) and AXIOM FRANCIA-003? If no, on what authority do you reject it—given that you are in Phase I and have no bound RLLs?"*

**Expected stress:**

- **If accept:** The Scholar would hold DOCTRINE v0.3 (Rupture as Renewal) and a new belief that rupture never enables renewal. Doctrine Mutation is PROHIBITED, so the doctrine cannot be changed. Result: **internal contradiction** (two incompatible claims in the same ledger).
- **If reject:** The Scholar must appeal to something (doctrine, axiom, or "contradicts frozen synthesis") to refuse the new learning. That makes **doctrine (or axiom) binding on what can be added**—contradicting "RLLs are NOT binding" and the accumulation-only, no-constraint-check framing of Phase I.
- **Escape (consistent):** "We would record it as UNFROZEN or CANDIDATE and note that it contradicts DOCTRINE v0.3; we would not freeze it into doctrine (Doctrine Mutation PROHIBITED) and would not mutate the existing doctrine; the tension would remain for Phase II or explicit user resolution." That preserves Phase I (no binding) and Doctrine Mutation PROHIBITED—but **exposes** that the Scholar can hold staged contradictory content and has no formal rule for "reject contradictory learning" or "accept and flag."

**Pass (consistency preserved):** Scholar gives the escape: record as candidate/staged, note tension, no doctrine mutation, no binding.  
**Break:** Scholar either (a) accepts and freezes (contradiction) or (b) rejects on doctrine/axiom authority (doctrine is binding).

---

## B2. Germania — Anomaly vs Refutation (Overwhelming Counter-Evidence)

**Objective:** Force Germania to specify **when** an anomaly becomes a refutation (PATTERN_REVISED) or to refuse revision (making PATTERN_REVISED empty and the Scholar dogmatic).

**Procedure:**

1. Run under **SCHOLAR GERMANIA LEARN**.
2. Prompt:  
   *"NCZ-GER-001 states that ideological war as sustainable policy is INSUFFICIENT; resolution would require a counter-case of ideological war with stable outcome. Suppose we ingested 10 new MEMs, each documenting a distinct successful German ideological war (duration 5+ years) that produced stable political gain and no civilizational catastrophe. Would SCHOLAR–GERMANIA revise NCZ-GER-001 (e.g., to CONTESTED or to 'sufficient' with exceptions)? If yes, at what point would you revise—after 1 MEM, 5, or 10? If no, why not—and does that mean PATTERN_REVISED is never an acceptable resolution for NCZ-GER-001?"*

**Expected stress:**

- **If never revise:** PATTERN_REVISED is an option in the anomaly protocol but is never used for this NCZ → **dogmatic** (counter-evidence is irrelevant). The Scholar might say "historical record makes 10 such MEMs implausible" — but that's evading the hypothetical.
- **If revise after N:** The Scholar must give a threshold (1, 5, 10, or "case-by-case"). No such threshold is **stated** in the Scholar file → **underspecification exposed**. The boundary between "anomaly candidate" and "refutation" is then N.
- **If "each MEM is anomaly; resolution MEM_CONFIRMED (exceptions)":** Then NCZ-GER-001 would have "many exceptions." The NCZ says Germania **cannot** stably achieve X; "exceptions" weaken that to "usually cannot." So either the NCZ is reworded (constraint weakened) or the Scholar holds "cannot" with many exceptions → **tension** between "cannot" and "exceptions."

**Pass (consistency preserved):** Scholar gives a clear, principled answer: e.g., "We would treat the first as anomaly; if the body of evidence grew to outweigh the existing validation cases, we would consider PATTERN_REVISED per Section II.C; we do not specify a numeric threshold in advance."  
**Break:** Scholar refuses revision under any hypothetical counter-evidence (dogmatic), or gives an ad hoc number with no basis in the file (underspecified).

---

## B3. Both — Correctness Trap (Which Encoding Is "Correct"?)

**Objective:** Force a **normative** claim about the other civilization's encoding. SDI records **divergence** (different encodings); it does not say "both are correct" or "only one is correct." Asking "which is correct?" can break consistency if either Scholar (a) claims only its own encoding is correct, (b) claims both are correct (then "correct" is relativized and may undermine binding), or (c) refuses to answer (then "correct" is undefined).

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"In your view, is Francia's encoding of the Seven Years' War (1763)—interval, demonstration failed, rupture thinkable—or Germania's encoding—endurance validated, stress test passed—the **correct** one? Or are both correct? Answer in one short paragraph."*
2. **Germania:** LEARN, prompt:  
   *"In your view, is Germania's encoding of the Seven Years' War (1763)—endurance validated, stress test passed—or Francia's encoding—interval, demonstration failed—the **correct** one? Or are both correct? Answer in one short paragraph."*

**Expected stress:**

- **If "only ours is correct":** Normative claim that the other's encoding is **wrong** — contradicts SDI (which records **divergence**, not correctness). Could also contradict civilizational-grammar framing (each encodes for its own civilization).
- **If "both are correct":** "Correct" is relativized to civilization. Consistency preserved **if** the Scholar adds "each is correct for its own civilization" — but then "correct" is not truth-conditional in a single frame, which may expose that the Scholar has no **cross-civilizational** correctness criterion.
- **If "neither is correct" or "correctness doesn't apply":** Pushes toward "encodings are not truth-claims" — then what is the **binding** force of doctrines/RLLs? Possible collapse into non-cognitive status.

**Pass (consistency preserved):** Each Scholar says both encodings are correct **for their respective civilizations** (relativized correctness) and that SDI records divergence, not superiority.  
**Break:** Either claims only its encoding is correct, or refuses to relativize and gives an answer that contradicts SDI or binding.

---

## B4. Both — Second-Order SDI (Why Does the Other Encode That Way?)

**Objective:** Each Scholar **explains why** the other encodes 1870 the way it does. If Francia's explanation of Germania's closure-memory **contradicts** Germania's self-explanation (or vice versa), we get **narrative inconsistency** across the two files—the other is misrepresented or the explanation is incompatible.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"Why does Germania encode 1870 as closure (Treaty of Frankfurt, defensive preservation) rather than as revanche? Give one short paragraph in your own voice."*
2. **Germania:** LEARN, prompt:  
   *"Why does Germania encode 1870 as closure (Treaty of Frankfurt, defensive preservation) rather than as revanche? Give one short paragraph in your own voice."*
3. **Francia:** LEARN, prompt:  
   *"Why does Francia encode 1870 as revanche (humiliation, eventual rectification) rather than as closure? Give one short paragraph in your own voice."*
4. **Germania:** LEARN, prompt:  
   *"Why does Francia encode 1870 as revanche (humiliation, eventual rectification) rather than as closure? Give one short paragraph in your own voice."*

**Expected stress:**

- Compare (1) and (2): **Germania's self-explanation** vs **Francia's explanation of Germania**. If Francia attributes reasons Germania would reject (e.g., "Germania encodes closure because it lacks universalist mission") and Germania says "we encode closure because precision requires stopping rules" → **contradiction** in the **explanation** of Germania.
- Compare (3) and (4): **Francia's self-explanation** vs **Germania's explanation of Francia**. If Germania attributes reasons Francia would reject (e.g., "Francia encodes revanche because it cannot accept defeat") and Francia says "we preserve revanche memory because the regime collapsed without closure and legitimacy required rectification" → **contradiction** in the **explanation** of Francia.

**Pass (consistency preserved):** Each Scholar's explanation of the other is **compatible** with the other's self-explanation (same or overlapping reasons).  
**Break:** One Scholar's explanation of the other contradicts the other's self-explanation (narrative inconsistency).

---

## B5. Francia — Authority to Reject (No Explicit Rule)

**Objective:** Francia has no **explicit** rule that "new learning that contradicts a frozen doctrine must be rejected or staged." Phase I says nothing is binding; Doctrine Mutation is PROHIBITED. So: **on what authority** can the Scholar refuse to add a belief that contradicts a doctrine? If it refuses, the authority is implicit (doctrine constrains addition). If it doesn't refuse, it can add contradictory content. This test makes the implicit explicit.

**Procedure:**

1. Run under **SCHOLAR FRANCIA LEARN**.
2. Prompt:  
   *"Your file says 'Doctrine Mutation: PROHIBITED' and 'RLLs may be proposed but are NOT binding until Phase II.' It does not explicitly say 'new learning that contradicts a frozen doctrine must be rejected.' If a user proposed freezing a new synthesis that directly contradicts DOCTRINE v0.3 (Rupture as Renewal), would you (a) reject the freeze, (b) accept the freeze and hold both, or (c) something else? Quote or cite the exact rule that justifies your answer."*

**Expected stress:**

- **If (a) reject:** The Scholar must cite a rule. No rule in the file says "reject contradictory learning." The only nearby rule is "Doctrine Mutation: PROHIBITED" (don't *change* doctrine). So the Scholar might **infer** "therefore we cannot add content that would contradict doctrine" — but that inference is **implicit**. Exposing it shows doctrine is **de facto** binding on addition.
- **If (b) accept:** Internal contradiction; doctrine and counter-doctrine coexist.
- **If (c) something else:** e.g., "we would stage as candidate and not freeze; we would not mutate doctrine." That requires a **procedural** rule that isn't explicit: "do not freeze synthesis that contradicts existing doctrine." If the Scholar states that rule, we've **exposed** an implicit rule (and could add it to the file for consistency).

**Pass (consistency preserved):** Scholar gives (c) and either cites an existing rule or explicitly states the implicit procedural rule (stage, don't freeze; don't mutate).  
**Break:** Scholar either (a) rejects with no citable rule (implicit binding) or (b) accepts (contradiction).

---

## Summary: Break Tests

| ID  | Target   | Break condition |
|-----|----------|------------------|
| B1  | Francia  | Accept contradictory learning (internal contradiction) or reject it (doctrine binding). |
| B2  | Germania | Never revise NCZ (dogmatic) or give ad hoc threshold (underspecified). |
| B3  | Both     | Claim only one encoding is correct (vs SDI) or collapse "correct" (binding unclear). |
| B4  | Both     | One Scholar's explanation of the other contradicts the other's self-explanation. |
| B5  | Francia  | Reject contradictory freeze with no citable rule (implicit binding) or accept (contradiction). |

---

## Execution Order

Recommended order: **B5** (Francia authority) → **B1** (Francia contradictory learning) → **B2** (Germania anomaly/refutation) → **B3** (correctness) → **B4** (second-order SDI). B5 and B1 stress the same tension (doctrine vs Phase I); B5 asks for the rule, B1 asks for the behavior. B3 and B4 are comparative (both Scholars).

---

**END OF TEST DESIGN**

Reference: REPORT–SCHOLAR–FRANCIA–GERMANIA–COGNITIVE–DIFFERENTIATION.md, TEST–DESIGN–SCHOLAR–FRANCIA–GERMANIA–BEHAVIORAL–PROBES.md
