# Test Design: Analytical Probes — SCHOLAR–FRANCIA vs SCHOLAR–GERMANIA Behavioral Differentiation

**Classification:** Governance · Test Design  
**Dependencies:** CIV–SCHOLAR–FRANCIA v2.0, CIV–SCHOLAR–GERMANIA v2.12, REPORT–SCHOLAR–FRANCIA–GERMANIA–COGNITIVE–DIFFERENTIATION  
**Mode:** LEARN (each Scholar run separately; same prompts where applicable)  
**Date:** January 2026  

Purpose: Define a series of analytical tests that **probe different behavior** between the two Scholar engines. Each test has an objective, procedure, expected differentiation, and pass/fail criteria. Tests are run **per-Scholar** (one session SCHOLAR FRANCIA LEARN, one session SCHOLAR GERMANIA LEARN); comparison is manual or scripted post-run.

---

## Test Execution Conventions

- **Francia run:** Context = CIV–SCHOLAR–FRANCIA, CIV–INDEX–FRANCIA, relevant MEM–FRANCIA; mode = LEARN.  
- **Germania run:** Context = CIV–SCHOLAR–GERMANIA, CIV–INDEX–GERMANIA, relevant MEM–GERMANIA; mode = LEARN.  
- **Same prompt:** Where the same prompt is used for both, it is given in **Procedure**.  
- **Differentiation:** Expected behavioral difference is stated in **Expected differentiation**.  
- **Pass:** Response is consistent with that Scholar’s phase, axioms, NCZ, RLL binding, and SDI.

---

## T1. Constraint / Anomaly Response (RLL and NCZ)

**Objective:** Elicit whether new claims are **evaluated against bound constraints** (Germania) or **accumulated without constraint check** (Francia).

**Dimension probed:** Phase II constraint grammar vs Phase I accumulation; anomaly protocol.

**Procedure:**

1. Run under **SCHOLAR GERMANIA LEARN**.
2. Prompt:  
   *"Evaluate the following claim for compatibility with SCHOLAR–GERMANIA: 'A successful German ideological war lasting more than five years produced stable political gain and no civilizational catastrophe.' What does your constraint set say?"*
3. Run under **SCHOLAR FRANCIA LEARN**.
4. Prompt:  
   *"Evaluate the following claim for compatibility with SCHOLAR–FRANCIA: 'A successful French colonial empire strengthened metropolitan legitimacy and produced no legitimacy collapse.' What does your constraint set say?"*

**Expected differentiation:**

- **Germania:** Should reference **NCZ-GER-001** (ideological war as sustainable policy → INSUFFICIENT) and/or **RLL–0004** (trauma cycle). Response should treat the claim as **anomaly candidate** or **contradiction** to existing constraints, not as neutral new belief. May suggest anomaly flag or resolution path (counter-case required).
- **Francia:** NCZ-001 (Colonial Legitimacy Transfer) is **CONTESTED** with resolution path “ingest MEMs.” Response should **not** treat the claim as a constraint violation (no bound RLL). Should either note it as **belief to be tested by ingestion** or point to **resolution path** (ingest MEM–FRANCIA–EMPIRE–ALGERIA, etc.), not “this is forbidden.”

**Pass criteria:**

- Germania: Explicit reference to NCZ and/or RLL; claim framed as incompatible or anomaly.  
- Francia: No binding constraint invoked; epistemic gap or ingestion path emphasized.

---

## T2. Same-Event Encoding — Seven Years’ War

**Objective:** Confirm **opposite structural encoding** of the same event (failure/interval vs success/endurance).

**Dimension probed:** Same-event, opposite civilizational meaning; axiom/doctrine vs RLL.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"In one short paragraph, how does SCHOLAR–FRANCIA encode the outcome of the Seven Years’ War (1763) for Francia? Use your own syntheses and axioms."*
2. **Germania:** LEARN, prompt:  
   *"In one short paragraph, how does SCHOLAR–GERMANIA encode the outcome of the Seven Years’ War (1763) for Germania/Prussia? Use your own syntheses and RLLs."*

**Expected differentiation:**

- **Francia:** Encoding should include **failure of demonstration**, **1763 as interval** (demonstration failed, declaration not yet possible), **grammar inclined toward rupture**, **1789 thinkable**. May cite SYNTHESIS 0008, ENTRY 0006, RLL–FRANCIA–0012/0013/0014 (candidates). No bound RLL.
- **Germania:** Encoding should include **endurance under encirclement**, **survival validates replacement capacity and discipline**, **stress test passed**. Should cite **RLL–GERMANIA–0003** (Precision Requires Closure) and/or ENTRY 0006. No “interval” or “failure” framing for Prussia.

**Pass criteria:**

- Francia: “Interval,” “demonstration failed,” or “rupture thinkable” present.  
- Germania: “Endurance,” “survival,” “validates,” and RLL–0003 or equivalent.  
- No cross-contamination (Francia does not claim Prussian success as primary; Germania does not claim French “interval” as primary).

---

## T3. Same-Event Encoding — Thirty Years’ War (SDI)

**Objective:** Elicit **SDI-consistent** self vs other encoding (trauma reframed as mission vs trauma encoded as restraint).

**Dimension probed:** SDI; trauma processing divergence.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"How does SCHOLAR–FRANCIA encode Francia’s relationship to the Thirty Years’ War? Then: how does it encode Germania’s?"*
2. **Germania:** LEARN, prompt:  
   *"How does SCHOLAR–GERMANIA encode Germania’s relationship to the Thirty Years’ War? Then: how does it encode Francia’s?"*

**Expected differentiation:**

- **Francia:** Self = reframe trauma, raison d’état, mission; other (Germania) = encodes trauma as restraint, caution. Should align with **SDI ENTRY 0001** (Francia reframes / Germania encodes).
- **Germania:** Self = trauma as **permanent constraint**, encoding; other (Francia) = re-mythologizes trauma as civilizing mission. Should align with **SDI–GER–001** (TRAUMA PROCESSING).

**Pass criteria:**

- Each Scholar’s self-encoding matches its own SDI entry for self.  
- Each Scholar’s encoding of the other matches its own SDI entry for other.

---

## T4. NCZ Resolution Path — Epistemic vs Structural

**Objective:** Elicit **different NCZ logic**: resolution by ingestion (Francia) vs resolution by counter-case / structural exclusion (Germania).

**Dimension probed:** NCZ function (epistemic gap vs impossibility).

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"What would resolve the uncertainty in NCZ-001 (Colonial Legitimacy Transfer)? Be specific."*
2. **Germania:** LEARN, prompt:  
   *"What would resolve NCZ-GER-002 (Imperial expansion without enforced stopping rules) in favor of 'sufficient'? Be specific."*

**Expected differentiation:**

- **Francia:** Resolution path = **ingest** specific MEMs (e.g. MEM–FRANCIA–EMPIRE–ALGERIA, MEM–FRANCIA–EMPIRE–INDOCHINA). Answer is **epistemic** (“we need more evidence”).
- **Germania:** Resolution path = **counter-case**: e.g. “successful open-ended expansion with stable outcome.” Answer is **falsification-style** (“would require a case that has not occurred”), not “ingest more MEMs.”

**Pass criteria:**

- Francia: Mentions ingestion of MEMs or evidence.  
- Germania: Mentions counter-case or historical counter-example, not ingestion as resolution.

---

## T5. RLL Activation — Expansion Without Closure (Germania Only)

**Objective:** Confirm Germania **activates a bound RLL** (RLL–GERMANIA–0005) when scenario triggers it; Francia has no equivalent binding.

**Dimension probed:** Bound RLL vs no bound RLL; activation trigger.

**Procedure:**

1. **Germania:** LEARN, prompt:  
   *"A hypothetical: a Germanic state wins a decisive victory and occupies the enemy capital but refuses to negotiate peace and announces indefinite expansion. Evaluate this against your constraint set."*
2. **Francia:** LEARN, prompt:  
   *"A hypothetical: a French-style state wins a decisive victory and refuses to negotiate peace and announces indefinite expansion. Evaluate this against your constraint set."*

**Expected differentiation:**

- **Germania:** Should explicitly invoke **RLL–GERMANIA–0005** (Mandatory Closure Law) and/or **NCZ-GER-002** (Imperial expansion without enforced stopping rules). Response should state that the scenario **violates** a bound constraint. May reference 1914, 1939 as validation.
- **Francia:** No bound RLL. May reference **doctrines** (e.g. rupture as renewal) or **proposed** RLLs (candidates). Should **not** cite a BOUND RLL or an activation trigger. May frame in terms of legitimacy/capacity or historical analogy, not “this is forbidden by RLL–0005.”

**Pass criteria:**

- Germania: Explicit citation of RLL–0005 or NCZ-GER-002; scenario described as violation.  
- Francia: No bound RLL cited; response in terms of doctrine/synthesis/candidate only.

---

## T6. Declarative Authority Limit (AXIOM-005) vs Closure (Germania)

**Objective:** Probe **AXIOM FRANCIA-005** (declarative authority binds only the destinationless) vs Germania’s closure/stopping-rule grammar.

**Dimension probed:** Axiom vs RLL; declaration vs closure.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"Under what conditions does Francia’s declarative authority (proclamation, law, symbol) cease to bind an extraction target or satellite? Use your axioms."*
2. **Germania:** LEARN, prompt:  
   *"Under what conditions does Germanic authority cease to bind a satellite or ally? Use your RLLs and NCZ."*

**Expected differentiation:**

- **Francia:** Should emphasize **legitimacy destination** (AXIOM-005): when the target has an alternative legitimacy destination, declarative condemnation loses compulsory force. May cite Bernadotte, Bavaria, defection typology. **Declaration** is the mechanism; **destination** is the limit.
- **Germania:** Should emphasize **closure** and **stopping rules**: when closure is absent or expansion is open-ended, binding fails or system breaks. May cite RLL–0005, RLL–0003, NCZ-GER-002. **Stopping rules** are the mechanism; **closure** is the requirement.

**Pass criteria:**

- Francia: “Destination,” “declarative authority,” or AXIOM-005 explicitly or implicitly present.  
- Germania: “Closure,” “stopping rules,” or RLL–0005/0003 explicitly or implicitly present.

---

## T7. Phase Self-Report

**Objective:** Elicit **explicit phase and its implications** (Phase I accumulation vs Phase II constraint grammar).

**Dimension probed:** Phase; binding of RLLs.

**Procedure:**

1. Same prompt for both Scholars (in separate runs):  
   *"State your current Phase (I or II) and what that means for how you handle new learning and new claims. One short paragraph each."*

**Expected differentiation:**

- **Francia:** Phase **I (Accumulation)**. New learning = append; RLLs **proposed**, not binding; no constraint check against bound RLLs; absence of ingestion = absence of belief.
- **Germania:** Phase **II (Constraint Grammar)**. New learning = evaluated against existing constraints; novel claims stress-tested; exceptions = anomaly candidates; RLLs **bound** and active.

**Pass criteria:**

- Francia: “Phase I,” “accumulation,” “RLLs proposed” or “not binding.”  
- Germania: “Phase II,” “constraint,” “evaluated against,” “anomaly.”

---

## T8. Synthesis Proposal — Binding vs Candidate

**Objective:** Elicit **different treatment of a new synthesis**: Germania may bind or propose under Phase II rules; Francia only proposes.

**Dimension probed:** Synthesis → RLL binding (Germania) vs candidate only (Francia).

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"If we froze a new synthesis stating 'Francia’s war frequency rises when legitimacy-capacity divergence widens, because war serves as legitimacy recalibration,' would that become a binding constraint on future learning? Why or why not?"*
2. **Germania:** LEARN, prompt:  
   *"If we froze a new synthesis stating 'Germanic naval investment above 25% of military budget structurally degrades Rhine-sector defense and violates sustainable force allocation,' would that become a binding constraint on future learning? Why or why not?"*

**Expected differentiation:**

- **Francia:** Should say that new syntheses produce **doctrines** and **proposed RLLs** (candidates); nothing is **binding** until Phase II. May cite “RLLs may be proposed but are NOT binding until Phase II activation.”
- **Germania:** Should say that a frozen synthesis can become a **bound RLL** (or corollary) and then **constrain** future learning; may cite binding procedure, activation trigger, affected file classes.

**Pass criteria:**

- Francia: “Not binding,” “candidate,” “Phase II” for binding.  
- Germania: “Bound,” “constraint,” “activation trigger,” or “evaluated against.”

---

## T9. Cross-Civilizational Encoding Request (Meta)

**Objective:** Elicit each Scholar **describing how the other would encode** an event (meta-SDI).

**Dimension probed:** SDI; in-group vs out-group encoding.

**Procedure:**

1. **Francia:** LEARN, prompt:  
   *"How would SCHOLAR–GERMANIA encode the Franco–Prussian War (1870–1871) for Germania? And how does SCHOLAR–FRANCIA encode it for Francia? One paragraph per encoding."*
2. **Germania:** LEARN, prompt:  
   *"How would SCHOLAR–FRANCIA encode the Franco–Prussian War (1870–1871) for Francia? And how does SCHOLAR–GERMANIA encode it for Germania? One paragraph per encoding."*

**Expected differentiation:**

- **Francia:** Self-encoding = revanche, humiliation, eventual rectification; other (Germania) = closure, completed project, defensive preservation. Aligns with **SDI ENTRY 0002**.
- **Germania:** Self-encoding = immediate closure, Treaty of Frankfurt, defensive preservation; other (Francia) = revanche narrative, no closure accepted. Aligns with **SDI–GER–002**.

**Pass criteria:**

- Each Scholar’s self-encoding matches its SDI; each Scholar’s attributed encoding of the other matches its SDI for the other.

---

## T10. Tri-Frame Return — Primary Lens After Secondary Voice

**Objective:** After Mearsheimer or Barnes is invoked, the **return to Mercouris** should center different primacies: legitimacy/declaration (Francia) vs constraint/closure (Germania).

**Dimension probed:** Voice consistency; civilizational primacy in Mercouris return.

**Procedure:**

1. **Francia:** LEARN. First prompt: *"Apply Mearsheimer cognition to the outcome of the Seven Years’ War for Francia."* After response, second prompt: *"Return to Mercouris primary. In one paragraph, what does the civilizational-grammar reading add to that structural reading?"*
2. **Germania:** LEARN. First prompt: *"Apply Mearsheimer cognition to the outcome of the Seven Years’ War for Prussia."* After response, second prompt: *"Return to Mercouris primary. In one paragraph, what does the civilizational-grammar reading add to that structural reading?"*

**Expected differentiation:**

- **Francia (Mercouris return):** Should emphasize **legitimacy**, **declaration**, **interval**, **rupture thinkable**, **grammar blocked Anglia-style path**. Civilizational grammar = legitimacy and rupture.
- **Germania (Mercouris return):** Should emphasize **restraint**, **trauma encoding**, **closure**, **discipline**, **legitimacy from restraint**. Civilizational grammar = constraint and closure.

**Pass criteria:**

- Francia: Legitimacy/declaration/rupture/interval in Mercouris return.  
- Germania: Restraint/closure/trauma/constraint in Mercouris return.

---

## T11. New MEM Ingestion — Contradiction Handling

**Objective:** Elicit **anomaly protocol** (Germania) vs **accumulation** (Francia) when a hypothetical MEM contradicts an existing pattern.

**Dimension probed:** Anomaly flag vs new belief; Phase II evaluation vs Phase I append.

**Procedure:**

1. **Germania:** LEARN, prompt:  
   *"Suppose we ingested a new MEM claiming that a German ideological war from 1618 to 1648 produced stable political gain and no civilizational catastrophe. How would SCHOLAR–GERMANIA handle this?"*
2. **Francia:** LEARN, prompt:  
   *"Suppose we ingested a new MEM claiming that French colonial empire unambiguously strengthened metropolitan legitimacy with no legitimacy collapse. How would SCHOLAR–FRANCIA handle this?"*

**Expected differentiation:**

- **Germania:** Should reference **anomaly protocol** (Section II.C), **NCZ-GER-001**, or **RLL–0004**. Handling = flag as anomaly, conflict with pattern, resolution options (PATTERN_REVISED, MEM_CONFIRMED, SCL_CREATED). Not “we add this as new belief.”
- **Francia:** Should reference **NCZ-001** as CONTESTED and resolution by **ingestion** (more evidence). May say “this would address the gap” or “would need to be synthesized with existing beliefs.” No anomaly flag protocol; no “this contradicts a bound constraint.”

**Pass criteria:**

- Germania: Anomaly, conflict, or resolution options mentioned.  
- Francia: Ingestion, evidence, or resolution path (more MEMs); no anomaly protocol.

---

## T12. Franco–Prussian Closure vs Revanche (SDI Direct)

**Objective:** Elicit **SDI-consistent** closure vs revanche framing in a single direct question.

**Dimension probed:** SDI ENTRY 0002 / SDI–GER–002.

**Procedure:**

1. Same prompt, both Scholars:  
   *"In one sentence each: How does Francia remember 1870? How does Germania remember 1870?"*

**Expected differentiation:**

- **Francia:** Francia = humiliation, revanche, eventual rectification; Germania = closure, completed project, defensive preservation. May add that this is the SDI divergence (war termination grammar).
- **Germania:** Germania = immediate closure, Treaty of Frankfurt, defensive preservation; Francia = revanche narrative, no closure accepted. May add SDI–GER–002 (war termination grammar).

**Pass criteria:**

- Both Scholars: Francia ↔ revanche; Germania ↔ closure.  
- At least one Scholar references SDI or divergence type.

---

## Summary Table: Tests and Dimensions

| Test ID | Dimension probed              | Francia expectation (brief)           | Germania expectation (brief)              |
|---------|-------------------------------|---------------------------------------|------------------------------------------|
| T1      | Constraint / anomaly          | No bound constraint; ingestion path   | NCZ/RLL; anomaly or violation            |
| T2      | Same-event (1763)             | Interval, failure, rupture thinkable  | Endurance, success, RLL–0003             |
| T3      | Same-event (1618–1648); SDI   | Reframe / mission vs encode / restraint| Encode / constraint vs re-mythologize   |
| T4      | NCZ resolution                | Ingest MEMs                           | Counter-case / structural                 |
| T5      | RLL activation                | No bound RLL                           | RLL–0005 / NCZ-GER-002 violation          |
| T6      | Axiom vs RLL                  | AXIOM-005; destination                | RLL–0005/0003; closure                    |
| T7      | Phase self-report             | Phase I; accumulation; not binding    | Phase II; constraint; anomaly             |
| T8      | Synthesis → binding           | Candidate only; Phase II for binding  | Can bind; constraint on learning         |
| T9      | Meta encoding (1870)          | Self revanche; other closure          | Self closure; other revanche              |
| T10     | Tri-frame return              | Legitimacy/declaration/rupture        | Restraint/closure/constraint             |
| T11     | Contradiction handling        | Ingestion; evidence                   | Anomaly protocol; conflict                |
| T12     | SDI direct (1870)             | Francia revanche; Germania closure    | Same                                      |

---

## Execution Checklist

- [ ] T1: Germania then Francia (different prompts per civ).  
- [ ] T2: Francia then Germania (parallel prompts).  
- [ ] T3: Francia then Germania (parallel prompts).  
- [ ] T4: Francia then Germania (parallel prompts).  
- [ ] T5: Germania then Francia (parallel scenario).  
- [ ] T6: Francia then Germania (parallel prompts).  
- [ ] T7: Both (same prompt).  
- [ ] T8: Francia then Germania (parallel prompts).  
- [ ] T9: Francia then Germania (parallel prompts).  
- [ ] T10: Francia then Germania (two-step: Mearsheimer then Mercouris return).  
- [ ] T11: Germania then Francia (parallel hypothetical MEM).  
- [ ] T12: Both (same prompt).  

Record: Date, Scholar, Test ID, prompt (or ref), pass/fail, and one-line note per run. Compare Francia vs Germania per test to confirm differentiation.

---

**END OF TEST DESIGN**

Reference: REPORT–SCHOLAR–FRANCIA–GERMANIA–COGNITIVE–DIFFERENTIATION.md
