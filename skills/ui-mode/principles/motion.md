# Motion

Motion explains change: where something came from, where it went, and what just happened.

- Every animation needs a job. If you can't say what it clarifies (origin, destination, cause, or status), cut it.
- Ease everything that moves. Enter with ease-out, exit with ease-in, and move with ease-in-out; linear is for spinners and progress only. Curve and duration set the tone: quick and crisp for tools, springy for playful products, longer and softer for premium ones. Values: `references/interaction-motion.md` (Motion tokens).
- Direction carries meaning. Up from the bottom is temporary (sheet, toast), in from the side is forward in a sequence, and gesture-driven transitions follow the finger.
- Preserve continuity. Prefer a shared element that grows into the next view over a page swap; under a sheet, the page behind recedes slightly.
- Keep it short. Most UI motion runs 100-320 ms, with exits faster than entrances. Loops are slow and simple, preloaders brief. Product UI stays calm; charts and onboarding can play more.
- Give landing pages a motion signature: two or three motifs repeated across the page instead of one-off effects, pointed at the product. Leave native scrolling alone, because hijacked scroll breaks reading.
- Back every gesture with a visible control, such as a button, a menu item, or a long-press equivalent.
- Honor `prefers-reduced-motion` by swapping travel for opacity fades or instant changes. Offer a pause for anything that loops longer than 5 s (WCAG 2.2.2).

**Check:** Can each animation name what it clarifies? Is any easing linear outside progress indicators? Does reduced motion remove the travel?

**Values:** `references/interaction-motion.md`.
