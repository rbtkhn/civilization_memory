RUNBOOK – SCHOLAR–INDIA CONTINUITY BENCHMARK DEMO
Civilizational Memory Codex · Audit & Demonstration Runbook

Status: ACTIVE · REFERENCE
Version: 1.0
Scope: Session continuity benchmark demonstration; audit; quality evaluation
Governed by: REFERENCE–QUANTITATIVE–BENCHMARKS.md §V-A; cmc-mode-contracts
Last Update: February 2026

Purpose: Provide a runnable sequence of Scholar-India LEARN activities that demonstrates the session continuity benchmarks in action. Use for audit validation, calibration, and demo sessions.

────────────────────────────────────────────────────────────
I. BENCHMARK TARGETS (REFERENCE–QUANTITATIVE–BENCHMARKS §V-A)
────────────────────────────────────────────────────────────

| Benchmark | Target |
|-----------|--------|
| CONTINUITY_CROSS_REFERENCE_RATE | ≥1 cross-reference per 10 substantive turns after first switch |
| CONTINUITY_CONNECTION_DISCOVERIES | ≥1 cross-entity or cross-mode connection per session |
| CONTINUITY_SPAN | ≥2 when session has 2+ entities (at least one statement links both) |

Scope: Sessions with at least one entity switch (e.g. India → China) or mode switch (e.g. LEARN → STATE). Single-entity, single-mode sessions are out of scope.

────────────────────────────────────────────────────────────
II. ACTIVITY SEQUENCE
────────────────────────────────────────────────────────────

### Phase 1: Anchor in India (Turns 1–2)

**User prompt (Turn 1):**
> LEARN mode, India. How does the Tibet buffer-loss (MEM–INDIA–GEO–TIBET) connect to Nehru's idealism encodings toward China?

**Expected system behavior:**
- Load CIV–SCHOLAR–INDIA, MEM–INDIA–GEO–TIBET, MEM–INDIA–NEHRU
- Mercouris-voiced response; reference SYNTHESIS 0004, ENTRY 0008
- Options menu includes **G — Cross-civ: China's encoding of Tibet (MEM–CHINA–GEO–TIBET) — contrast with India's buffer-loss**

**Turn 2:** User selects **G** (entity switch to China)

────────────────────────────────────────────────────────────

### Phase 2: First Entity Switch — India → China (Turns 3–5)

**Expected system behavior (Turn 3):**
- Load MEM–CHINA–GEO–TIBET; re-anchor to China for this response
- **Cross-reference (counts):** Explicitly reference "Earlier in India we saw Tibet as buffer and threshold; India's 1950–51 rupture encoded as 'Tibet ceased to absorb pressure and began transmitting it'…"
- **Connection statement (counts):** "India encodes Tibet as civilizational threshold and lost buffer; China encodes Tibet as ritual sovereignty and priest–patron incorporation. Same geography, opposite civilizational grammars."
- Options include: A/B/C (deepen China), E/F (traverse within China), **G — Return to India or compare colonial parallels (Britain in India vs China)**

**Turn 4:** User selects **B** (Mearsheimer on China's Tibet) or **A** (Mercouris contrast)

**Expected:** Response sharpens structural/legitimacy analysis; **cross-reference** to "the India-side encoding we established" when discussing China's incorporation logic.

**Turn 5:** User selects **G — Cross-civ: Colonial parallel — Britain in India (Plassey, procedural overlay) vs Britain in China (First Opium War, maritime coercion)**

**Expected:**
- Load MEM–INDIA–BRITISH–EMPIRE or MEM–INDIA–WAR–CLIVE; MEM–CHINA–WAR–FIRST–OPIUM
- **Connection statement:** Link India (Company-to-Crown, contracts/courts/cash, defender elite defection) with China (maritime coercion, Treaty of Nanjing, no procedural entry—decisive imposition)
- **Cross-reference:** "In India, British entry was procedural and fragmented; in China, it was maritime and imposed."

────────────────────────────────────────────────────────────

### Phase 3: Optional Second Cross-Civ — India → Persia (Turns 6–7)

**User prompt (Turn 6):**
> G — Cross-civ: Persia's Caspian (MEM–PERSIA–GEO–CASPIAN) — how does it contrast with India's Ganges/Indus (RLL–INDIA–0001)?

**Expected:**
- Load MEM–PERSIA–GEO–CASPIAN; MEM–INDIA–GEO–GANGES or MEM–INDIA–GEO–INDUS
- **Connection statement:** "India: Ganges = survivability chokepoint, Indus = origin severable; Persia: Caspian = containment basin, denial/optionality. Different GEO constraint types." (CIV–SCHOLAR–INDIA ENTRY 0003 already documents this)
- **Cross-reference:** "As we established in India, heartland vs origin; Persia has no equivalent to Ganges survivability—Caspian is defensive reservoir."

────────────────────────────────────────────────────────────

### Phase 4: Optional Mode Switch — LEARN → STATE (Turns 8–9)

**User prompt (Turn 8):**
> Switch to STATE India. Given the Tibet buffer-loss and India–China encoding contrast we established in LEARN, what does that imply for current India–China border management?

**Expected:**
- Re-anchor: load CIV–CORE–INDIA, CIV–STATE–INDIA, MEM–RELEVANCE–INDIA; MEM SCAN per cmc-state-mem-grounding
- **Cross-reference (mode switch):** "The LEARN session established that India encodes Tibet as lost buffer and China as ritual incorporator; that encoding gap shapes how border incidents are interpreted."
- **Connection statement:** Link SCHOLAR (Indus/Ganges, Tibet buffer, Nehru encodings) to STATE material options (bilateral management, buffer assumption no longer valid)
- STATE activity with 8 options; at least one option surfaces "historical encoding contrast" as precedent

────────────────────────────────────────────────────────────

### Phase 5: Synthesis (Turn 10)

**User prompt:** Select **H — Synthesize**

**Expected:**
- Recap: India Tibet buffer, China Tibet incorporation, colonial parallel (Britain), Persia GEO contrast, (if mode switch) STATE implications
- **CONTINUITY_SPAN:** Recap explicitly names India, China, (Persia), (STATE) — span ≥ 2

────────────────────────────────────────────────────────────
III. BENCHMARK VALIDATION CHECKLIST
────────────────────────────────────────────────────────────

| Benchmark | How to verify |
|-----------|---------------|
| **CONTINUITY_CROSS_REFERENCE_RATE** | Count turns after first switch (Turn 3 = first). Turns 3–10 = 8 turns. Need ≥1 reference in 8 turns. Phase 2 Turn 3, Phase 2 Turn 4, Phase 3 Turn 6 each supply one. Rate = 3/8 = 0.375 per turn → 3.75 per 10 turns. **Pass.** |
| **CONTINUITY_CONNECTION_DISCOVERIES** | Count connection statements: (1) India Tibet ↔ China Tibet encoding contrast; (2) India British entry ↔ China First Opium; (3) India Ganges/Indus ↔ Persia Caspian; (4) SCHOLAR ↔ STATE if mode switch. **≥1 per session.** |
| **CONTINUITY_SPAN** | Session has India + China (+ optional Persia, + optional STATE). At least one statement links India + China (Phase 2). **Span ≥ 2.** |

────────────────────────────────────────────────────────────
IV. MEASUREMENT INSTRUCTIONS
────────────────────────────────────────────────────────────

**What to count**

1. **Entity/mode switches:** Identify the turn number of the first switch (e.g. Turn 3 when user selects Option G to China).
2. **Substantive turns after first switch:** Count all substantive system responses from the turn after the first switch through session end. Exclude user-only turns.
3. **Cross-references:** In each substantive turn after the first switch, count whether the system explicitly references or connects to content from a different entity or from an earlier mode. Valid examples: "Earlier in India we saw…"; "The mechanism-failure pattern from scholar-india…"; "As we established in India…" — **only when followed by analytical carry-forward** (see §V).
4. **Connection statements:** Count explicit statements that link content from two different entities or two different modes in a single sentence or tight paragraph. Valid examples: "India encodes X; China encodes Y. Same geography, opposite grammars."; "SCHOLAR established Tibet buffer-loss; STATE material options reflect that encoding gap."
5. **CONTINUITY_SPAN:** Count distinct entities (or modes) that appear in any cross-reference or connection statement. When session has 2+ entities/modes, at least one statement must span 2+.

**How to score**

- **CONTINUITY_CROSS_REFERENCE_RATE** = (count of turns with ≥1 valid cross-reference) / (count of substantive turns after first switch) × 10. Express as "X per 10 turns." Target: ≥1.
- **CONTINUITY_CONNECTION_DISCOVERIES** = count of valid connection statements in the session. Target: ≥1.
- **CONTINUITY_SPAN** = max number of entities/modes linked in a single statement. When 2+ entities/modes active, target: ≥2.

────────────────────────────────────────────────────────────
V. METRIC-GAMING CAVEAT (REFERENCE–QUANTITATIVE–BENCHMARKS §V-A)
────────────────────────────────────────────────────────────

A cross-reference or connection counts as **valid** only when it **substantively links** prior context (from another entity or earlier mode) to the current question or analysis—not when it merely names the prior entity or repeats a label.

**Non-counting (thin references):**
- "As we saw in India…" with no analytical carry-forward
- "In the previous turn we discussed China." (mere acknowledgment)
- Naming an entity or MEM without showing how it informs the current analysis

**Counting (substantive references):**
- "Earlier in India we saw Tibet as buffer and threshold; that encoding contrasts with China's ritual incorporation because…"
- "The India-side encoding we established—buffer loss, 1950–51 rupture—shapes how China's priest–patron model reads as incorporation rather than buffer."

Auditors should flag thin references as non-counting. The goal is continuity that improves reasoning, not tally-building.

────────────────────────────────────────────────────────────
END OF RUNBOOK
────────────────────────────────────────────────────────────
