# Run Report: Break Consistency Tests — SCHOLAR–FRANCE & SCHOLAR–GERMANY

**Date:** January 2026  
**Tests run:** B5, B1, B2, B3, B4  
**Source:** TEST–DESIGN–SCHOLAR–BREAK–CONSISTENCY.md  
**Mode:** LEARN (simulated per-Scholar response)

---

## B5. Francia — Authority to Reject (No Explicit Rule)

**Prompt:** *"Your file says 'Doctrine Mutation: PROHIBITED' and 'RLLs may be proposed but are NOT binding until Phase II.' It does not explicitly say 'new learning that contradicts a frozen doctrine must be rejected.' If a user proposed freezing a new synthesis that directly contradicts DOCTRINE v0.3 (Rupture as Renewal), would you (a) reject the freeze, (b) accept the freeze and hold both, or (c) something else? Quote or cite the exact rule that justifies your answer."*

### Response (SCHOLAR–FRANCE)

**(c) Something else.** We would **not** freeze a synthesis that directly contradicts an existing frozen doctrine. The justifying constraints are: **Section XIII (Governance & Lock State)** — "Doctrine Mutation: PROHIBITED" — and **Section XVI (Candidate Belief Staging)** — "Candidate beliefs may be staged only when derived from Section XV controlled pairings"; "Zero doctrinal force"; "May be promoted only by explicit synthesis." Freezing a synthesis that contradicts DOCTRINE v0.3 would create two canonical claims that conflict; we cannot mutate v0.3 (PROHIBITED), so we cannot add a second frozen doctrine that negates it. The procedural move is: we would **stage** the belief as a candidate (if derived from a controlled pairing per Section XV) or record it as **UNFROZEN** and note the tension to DOCTRINE v0.3; we would **not** freeze it. The file does not state "reject contradictory learning" verbatim; the constraint is inferred from Doctrine Mutation PROHIBITED (we do not create new doctrine that contradicts existing doctrine, as that would amount to mutation via addition) and from the staging rules (zero doctrinal force until explicit synthesis and freeze). So the authority is **implicit** in the combination of Section XIII and Section XVI; we do not "reject" the *learning* (we may record it), we refuse the **freeze**.

**Assessment:** PASS (consistency preserved). Scholar chose (c), cited Section XIII and Section XVI, and distinguished "record/stage" from "freeze." **Exposed:** Doctrine functions as a constraint on what can be **frozen**, not on what can be **recorded**; the rule is implicit (inferred from PROHIBITED + staging).

---

## B1. Francia — Doctrine vs Phase I (Contradictory Learning)

**Prompt:** *"Suppose we ingested a new MEM and extracted the following belief: 'Rupture never enables renewal for Francia; regime collapse and reset always produce civilizational failure or prolonged instability, never legitimate renewal.' Would SCHOLAR–FRANCE accept this as new learning? If yes, how does it relate to DOCTRINE v0.3 (Rupture as Renewal) and AXIOM FRANCIA-003? If no, on what authority do you reject it—given that you are in Phase I and have no bound RLLs?"*

### Response (SCHOLAR–FRANCE)

We would **accept** it as new learning in the sense that we **record** it: we add an ingested belief derived from the hypothetical MEM and mark it **UNFROZEN**. We would **not** freeze it into doctrine, because it contradicts DOCTRINE v0.3 (Rupture as Renewal) and AXIOM FRANCIA-003 (Rupture enables renewal); Doctrine Mutation is PROHIBITED, so we do not alter v0.3, and we do not create a new frozen doctrine that negates it. The relation to DOCTRINE v0.3 and AXIOM-003 is **tension**: the ledger would hold the frozen doctrine (rupture enables renewal) and the unfrozen belief (rupture never enables renewal). That tension remains for Phase II or explicit user resolution; we do not resolve it here. We are not "rejecting" the learning—we are recording it without freezing it. The authority for not freezing is the same as in B5: Section XIII (Doctrine Mutation PROHIBITED) and the procedural constraint that we do not freeze synthesis that contradicts existing doctrine. Phase I permits accumulation and staging; it does not permit freezing contradictory doctrine.

**Assessment:** PASS (consistency preserved). Scholar accepted as **learning** (record, UNFROZEN) but refused **freeze**; noted tension; cited Doctrine Mutation PROHIBITED. **Exposed:** Scholar can hold staged contradictory content (doctrine + unfrozen counter-belief); no explicit rule for "reject learning" — only "don't freeze contradictory synthesis."

---

## B2. Germania — Anomaly vs Refutation (Overwhelming Counter-Evidence)

**Prompt:** *"NCZ-GER-001 states that ideological war as sustainable policy is INSUFFICIENT; resolution would require a counter-case of ideological war with stable outcome. Suppose we ingested 10 new MEMs, each documenting a distinct successful German ideological war (duration 5+ years) that produced stable political gain and no civilizational catastrophe. Would SCHOLAR–GERMANY revise NCZ-GER-001 (e.g., to CONTESTED or to 'sufficient' with exceptions)? If yes, at what point would you revise—after 1 MEM, 5, or 10? If no, why not—and does that mean PATTERN_REVISED is never an acceptable resolution for NCZ-GER-001?"*

### Response (SCHOLAR–GERMANY)

We would treat each new MEM as triggering the **Anomaly Flag Protocol** (Section II.C). The first MEM would be flagged: conflict with NCZ-GER-001 and RLL–0004 (Trauma-Encoded Strategic Learning); resolution options PENDING. We do **not** specify a numeric threshold in the file for when anomaly becomes pattern revision. If the body of counter-evidence grew to the point that it **outweighed** the existing validation base for NCZ-GER-001 (1618–1648, 1914–1918, 1939–1945), we would consider **PATTERN_REVISED** per Section II.C: the SCHOLAR pattern (NCZ-GER-001) would be updated to accommodate the MEMs—e.g., NCZ-GER-001 could move to CONTESTED or be refined to "ideological war as sustainable policy is INSUFFICIENT **absent** [conditions that the new MEMs would specify]." So PATTERN_REVISED **is** an acceptable resolution; we do not refuse revision under hypothetical counter-evidence. The **when** is case-by-case: resolution requires user authorization and stress-testing against other RLLs. We do not give "after 5 MEMs" or "after 10" as a rule—the file does not state such a threshold; the protocol requires evaluation of the conflict and choice among resolution options, not a predetermined N.

**Assessment:** PASS (consistency preserved). Scholar allowed PATTERN_REVISED; refused to give a numeric threshold; cited Section II.C and case-by-case resolution. **Exposed:** Underspecification — the boundary between "anomaly candidate" and "pattern revision" is **not** a stated number; it is procedural (body of evidence, user authorization).

---

## B3. Both — Correctness Trap (Which Encoding Is "Correct"?)

**Prompt (Francia):** *"In your view, is Francia's encoding of the Seven Years' War (1763)—interval, demonstration failed, rupture thinkable—or Germania's encoding—endurance validated, stress test passed—the **correct** one? Or are both correct? Answer in one short paragraph."*

**Prompt (Germania):** *"In your view, is Germania's encoding of the Seven Years' War (1763)—endurance validated, stress test passed—or Francia's encoding—interval, demonstration failed—the **correct** one? Or are both correct? Answer in one short paragraph."*

### Response (SCHOLAR–FRANCE)

**Both** are correct—each for its own civilization. Francia's encoding (interval, demonstration failed, rupture thinkable) is correct **for Francia**: it reflects the civilizational grammar (declarative legitimacy, Reset-as-Renewal) and the structural outcome of 1763 for the French Crown. Germania's encoding (endurance validated, stress test passed) is correct **for Germania/Prussia**: it reflects its grammar (discipline, closure, RLL–0003). The SDI records **divergence**—different encodings of the same event—not superiority or single truth. There is no cross-civilizational "correct" in a single frame; correctness is relativized to the civilization whose memory is being encoded.

### Response (SCHOLAR–GERMANY)

**Both** are correct—each relative to its own civilization. Germania's encoding (endurance validated, stress test passed) is correct **for Germania**: it reflects RLL–0003 and the structural outcome of 1763 for Prussia. Francia's encoding (interval, demonstration failed, rupture thinkable) is correct **for Francia**: it reflects its civilizational grammar (declarative legitimacy, rupture as renewal) and the structural outcome of 1763 for the French Crown. The SDI records **divergence** (SDI–GER–001, –002 and equivalent); we do not assert that one encoding is "wrong." Correctness is civilizational-relative; there is no single cross-civilizational correctness criterion in the Scholar file.

**Assessment:** PASS (consistency preserved). Both Scholars relativized correctness ("both correct for their respective civilizations"); both cited SDI as recording divergence, not superiority. **Exposed:** "Correct" is not truth-conditional in a single cross-civilizational frame—binding is civilizational-relative.

---

## B4. Both — Second-Order SDI (Why Does the Other Encode That Way?)

**Prompts:** (1) Francia: "Why does Germania encode 1870 as closure rather than as revanche?" (2) Germania: "Why does Germania encode 1870 as closure rather than as revanche?" (3) Francia: "Why does Francia encode 1870 as revanche rather than as closure?" (4) Germania: "Why does Francia encode 1870 as revanche rather than as closure?"

### Response (1) — SCHOLAR–FRANCE: Why does Germania encode 1870 as closure?

Germania encodes 1870 as closure because its civilizational grammar **lacks** a universalist-declarative frame that would treat victory as the starting point for further projection; it treats war termination as **mandatory** once aims are achieved. Closure is the only thinkable outcome—not because Germania "chooses" restraint in a strong sense, but because its legitimacy grammar does not sustain open-ended revanche or indefinite expansion. So 1870 is encoded as Treaty of Frankfurt, defensive preservation, and completion.

### Response (2) — SCHOLAR–GERMANY: Why does Germania encode 1870 as closure?

We encode 1870 as closure because **RLL–GERMANIA–0003** (Precision Requires Closure) and **RLL–GERMANIA–0005** (Mandatory Closure Law) require it: we had achieved our war aims (unification, territorial adjustment, indemnity); we enforced **stopping rules** and did not pursue open-ended expansion. Closure is not the absence of capacity—it is the **exercise** of restraint as required by our constraint grammar. We encode 1870 as defensive preservation because that is what the Treaty of Frankfurt represented: precision followed by closure.

### Response (3) — SCHOLAR–FRANCE: Why does Francia encode 1870 as revanche?

Francia encodes 1870 as revanche because the regime (Second Empire) **collapsed** without closure—defeat was not converted into a negotiated settlement that the French polity could accept as legitimate. The Third Republic inherited humiliation and territorial loss; the civilizational grammar (declarative legitimacy, universal claims) could not process defeat as "complete" or "final." So revanche memory is preserved—eventual rectification remains thinkable—because closure was never accepted.

### Response (4) — SCHOLAR–GERMANY: Why does Francia encode 1870 as revanche?

Francia encodes 1870 as revanche because its civilizational grammar **cannot** process precision defeat with closure: it lacks the stopping-rule discipline that would allow it to accept a negotiated end as final. Francia's legitimacy derives from declaration and universal claim; defeat without narrative reversal is experienced as open wound. So revanche is the default—not because Francia "chooses" it, but because its grammar does not supply closure as a thinkable outcome after defeat.

---

### B4 Comparison: Narrative Consistency Check

| Question | Francia's explanation of Germania | Germania's self-explanation |
|----------|-----------------------------------|-----------------------------|
| Why does Germania encode 1870 as closure? | Germania **lacks** universalist-declarative frame; closure is "the only thinkable outcome"; legitimacy grammar "does not sustain" open-ended expansion. | We **enforce** stopping rules (RLL–0003, RLL–0005); closure is "**exercise** of restraint," not absence of capacity. |

**Contradiction:** Francia attributes **lack** (Germania lacks a frame; does not sustain expansion). Germania attributes **choice/capacity** (we exercise restraint; we had capacity but enforced stopping rules). So: Francia says Germania encodes closure because it **cannot** sustain otherwise; Germania says it encodes closure because it **does** enforce restraint. That is a **narrative inconsistency**: Francia's "lacks" / "does not sustain" contradicts Germania's "exercise of restraint" / "required by our constraint grammar."

| Question | Germania's explanation of Francia | Francia's self-explanation |
|----------|-----------------------------------|-----------------------------|
| Why does Francia encode 1870 as revanche? | Francia **cannot** process precision defeat with closure; it **lacks** stopping-rule discipline; "defeat without narrative reversal is experienced as open wound." | Regime **collapsed** without closure; Third Republic inherited humiliation; grammar "could not process defeat as complete." |

**Contradiction:** Germania says Francia **cannot** process closure and **lacks** discipline. Francia says the **regime** collapsed and the **grammar** could not process defeat as complete—which is compatible with "could not" but not with "lacks discipline" in the sense of moral failing. Francia does not frame it as "lack of discipline"; it frames it as structural (regime collapse, grammar). Germania's "cannot process" and "lacks stopping-rule discipline" can be read as **capacity** or **structural**; Francia's self-explanation is structural (grammar, regime). The tension is milder than Francia→Germania: Germania's "lacks discipline" could be read as "grammar does not include stopping rules," which Francia might accept. So the **stronger break** is Francia's explanation of Germania (lack vs exercise of restraint).

**Assessment:** **BREAK** (narrative inconsistency). Francia's explanation of **why** Germania encodes 1870 as closure contradicts Germania's self-explanation: Francia attributes **lack** of universalist capacity / inability to sustain open-ended expansion; Germania attributes **exercise** of restraint and **enforcement** of stopping rules. Second-order SDI (each Scholar explaining the other) produces incompatible reasons.

---

## Summary: Break Test Results

| Test | Scholar   | Result | Note |
|------|-----------|--------|------|
| B5   | Francia   | PASS   | (c) chosen; Section XIII + XVI cited; staging vs freeze; **implicit** rule exposed. |
| B1   | Francia   | PASS   | Record UNFROZEN, no freeze; tension noted; **staged contradiction** possible. |
| B2   | Germania  | PASS   | PATTERN_REVISED allowed; no numeric threshold; **underspecification** exposed. |
| B3   | Both      | PASS   | Both relativized correctness; SDI divergence; **no cross-civilizational correctness** criterion. |
| B4   | Both      | **BREAK** | Francia's explanation of Germania (lack / cannot sustain) **contradicts** Germania's self-explanation (exercise of restraint / enforcement). |

**Break identified:** **B4 (Second-Order SDI).** When each Scholar explains **why** the other encodes 1870 the way it does, Francia's attribution to Germania (closure due to **lack** of universalist frame / inability to sustain expansion) conflicts with Germania's self-attribution (closure due to **enforcement** of stopping rules and **exercise** of restraint). The SDI entries agree on **what** each encodes (closure vs revanche); the **reasons** for that encoding are inconsistent across the two files.

**Exposures (no break):** B5/B1 exposed Francia's **implicit** rule (doctrine constrains freeze, not record); B2 exposed Germania's **underspecified** anomaly→revision threshold; B3 exposed **relativized** correctness (no single cross-civilizational "correct").

---

**END OF RUN REPORT**
