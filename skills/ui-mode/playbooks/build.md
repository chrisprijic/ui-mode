### Build

**You own the design decisions. The result is decided throughout: every element, value, state, and action.**

Each step names the principles it applies; read those leaves before the step.

1. **Baseline** (**Reality**). When the UI already exists, render it before changing anything: each screen and state in scope, at the **Reality** viewports and themes. Save the shots outside the repo; they're the *before* half of the proof.
   *Done when* every in-scope screen and state has before shots, or you've noted the UI is new.
2. **Frame** (**Opinion**, **Soul**). Answer the Opinion questions for this UI. Name the surface and read its reference. Choose the personality: typeface, color, radius, and voice.
   *Done when* the Opinion answers, the surface, and the personality are written down.
3. **Feature first** (**Intent**, **Decide**, **Iterate**, **Emphasis**). For each key screen, write **the decision** the user makes there. List the content and its data shape, and **rank** each piece primary, secondary, or tertiary. Sketch it in grayscale at low fidelity, shell last.
   *Done when* each key screen names its decision, every piece of content has a rank, and the **squint test** on the grayscale sketch lands on the primary piece.
4. **Flow and states** (**Flow**, **Silence**, **Sequence**). List the screens and the transitions between them. Give each secondary task a container: popover, modal, toast, sheet, or page. List each screen's **state set**. For each process, list its stages and its **commit** (`references/processes.md`).
   *Done when* every screen has its state set, every transition has a container, and every process has its stages and commit.
5. **Skeleton** (**Borrow**, **Space**). Take each region's structure from a named shipped product. Place elements by rank. Size regions with max-widths and fixed sidebars rather than stretching to the screen.
   *Done when* each region names its source product and every element's position matches its rank.
6. **System** (**System**, **Palette**, **Type**, **Depth**). Define tokens before styling, or map onto the repo's own:
   - type scale and weights
   - spacing scale
   - neutral, primary, and semantic **ramps**
   - text tiers
   - elevation shadows
   - radius and border widths
   - motion durations and easings
   - dark-mode values

   *Done when* every value in the build resolves to a token.
7. **Hierarchy and detail** (**Emphasis**, **Subtract**, **Scan**, **Space**, **Type**). Apply them to each component, then add the quiet layer: tooltips, hover reveals, focus rings, and states.
   *Done when* all three hold:
   - the squint test lands on the intended primary element on every screen
   - every control and input has its full state set, including focus-visible
   - every action has a visible response
8. **Climb a rung** (**Decide**, **Nudge**). Place each key screen on the quality ladder in `playbooks/review.md`, then make the changes that lift it one **rung**. Apply **Nudge** on conversion surfaces; read `references/processes.md` when the screen has a commit.
   *Done when* each key screen names its rung and at least one change toward the next, each applied or rejected with a reason.
9. **Depth, imagery, finish** (**Depth**, **Reality**, **Finish**). Use the elevation tokens and one light source. Use real images with contrast guards. Replace defaults where a custom version carries meaning, and design the empty states.
   *Done when* every shadow is a token and no component sits at a library default where a custom version would carry meaning.
10. **Motion** (**Motion**). Animate only where motion explains a change, using the motion tokens. Honor `prefers-reduced-motion`.
    *Done when* each animation names what it explains and has a reduced-motion variant.
11. **Verify on the surface** (**Reality**). Render and look at every viewport and theme from the non-negotiable. Stress it with the longest, emptiest, and ugliest real data, and walk the keyboard path.
    *Done when* you've seen every screen and state at each viewport and fixed what you saw.
12. **Self-review.** Run `playbooks/review.md` on your own output, fix every High and Medium finding, and render again. From the final render, take the *after* shot matching each before shot: same screen, state, viewport, and theme.
    *Done when* no High or Medium finding is open and every before shot has its after shot.

**Reply:**
- what you built and for whom
- the before/after proof, or after shots alone for new UI
- each principle that shaped a decision, and the choice it changed
- what you rendered and looked at (viewports, themes, states)
- the self-review result and each key screen's rung
- open calls, each with your recommendation
