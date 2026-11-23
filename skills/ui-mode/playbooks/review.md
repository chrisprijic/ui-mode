### Review

Find what a user would trip on and what makes the UI look undecided. Every finding carries a fix with values.

1. **Capture.** Get the real thing. Render the URL, local build, or HTML and screenshot it at the **Reality** viewports and themes. For a PR, capture the screens it changes. With code only, read the components and tokens and state that the review is code-only.
   *Done when* you hold screenshots, or a stated code-only scope, for every screen in scope.
2. **Load.** Read `references/tells.md`, the reference for the surface, and every leaf in `principles/`; the sweep covers all four groups.
   *Done when* `tells.md`, the surface reference, and all 21 leaves are read.
3. **Sweep.** Make four passes in order, **Think**, **See**, **Behave**, **Ground**, following the groups in `tells.md`. Read every row and mark each **tell** **hit** or **clear** by its ID. A row that bundles symptoms is a hit if any one applies; cover each symptom in the fix. Place each key screen on the quality ladder below.
   *Done when* all rows T1-T124 are marked and each key screen has a **rung**.
4. **Write findings.** Each hit records:
   - where: screen and element, plus `file:line` when you have code
   - tell: the tell ID(s) it hits (T-numbers from `tells.md`)
   - principle: the principle it breaks
   - severity
   - fix: the change, with concrete values; a token name always carries its value (`shadow-2` = its CSS, `fg-2` = its color), since the reader may not have the tokens
   - metric, on conversion surfaces only (product page, paywall, booking, checkout, signup): the measure the fix should move, stated as a hypothesis (add-to-cart rate, trial starts)

   Severity:
   - High: blocks, misleads, or excludes the user. A missing state, a destructive action styled as safe, text under 4.5:1, an unreachable control, a broken flow, a false or unverifiable persuasion claim.
   - Medium: clearly undecided. No system, noisy hierarchy, a default palette, ambiguous spacing.
   - Low: polish.

   *Done when* every hit has all its fields.
5. **Rank by payoff.** High first. Within a severity: structure (layout, cards, hierarchy), then color, then states and feedback, then polish. Merge duplicates into one finding listing every location.
   *Done when* the list is ordered and deduplicated.
6. **Deliver.** Report the findings. When asked to fix them, fix from the top down, then repeat step 1 on the result.
   *Done when* the report is delivered; when fixing, once fresh captures show the fixes, paired with their step-1 captures as before/after proof.

## Quality ladder

Each **rung** keeps everything below it. Place a screen on the highest rung it fully meets.

1. **Stock.** Assembled from defaults. No visible decisions: library components as shipped, one emphasis level everywhere, options pushed into dropdowns and extra pages, images sized by accident.
2. **Systematic.** Built from tokens. One shape language, a clear rank on every screen, full state sets, and actions labeled with their outcome.
3. **Contextual.** Shows the user where they stand: result counts, comparisons, distributions, each option's consequence before the commit, and content that shapes its own layout.
4. **Anticipatory.** Does the user's work: asks for what they know and computes the rest, adapts to their stage, personalizes defaults, and holds up under any real content.

For each key screen, the top finding names the change that lifts it one rung. Surface-specific signs for each rung: `references/landing.md` for marketing pages; the tells for everything else.

**Reply:**
1. Verdict: one sentence on what this UI is and its biggest problem, plus each key screen's rung.
2. Findings table:

   | # | Sev | Where | Tell and fix (with values) | Principle |
   |---|---|---|---|---|

   On conversion surfaces, add a **Metric** column.

3. Sweep: `Hits: T4, T17, ...` listing every hit ID, then `Clear: all other rows of T1-T124`. Every hit ID appears in some finding.
4. Passed: the principle groups that came back clear.
5. Not checked: for example dark mode, real data, a mobile viewport, screen reader. State plainly whether the review was code-only.
6. Before/after proof, when you fixed findings.
