# Motion

Motion explains change: where something came from, where it went, and what just happened.

- **Give every animation a job.** If you can't say what it clarifies (origin, destination, cause, or status), cut it.
- **Ease everything that moves.** Enter with ease-out, exit with ease-in, move with ease-in-out; linear is for spinners and progress only. Curve and duration set the tone: quick and crisp for tools, springy for playful products, longer and softer for premium ones. Values: `references/interaction-motion.md` (Motion tokens).
- **Let direction carry meaning.** Up from the bottom is temporary (sheet, toast); in from the side is forward in a sequence; gesture-driven transitions follow the finger.
- **Preserve continuity.** A shared element that grows into the next view beats a page swap; under a sheet, the page behind recedes slightly.
- **Keep it short and calm.** Most UI motion runs 100–320 ms, with exits faster than entrances. Loops are slow and simple, preloaders brief. Product UI stays calm; charts and onboarding can play more.
- **Give landing pages a motion signature.** Repeat two or three motifs across the page instead of one-off effects, and point the motion at the product. Leave native scrolling alone: hijacked scroll breaks reading.
- **Back every gesture with a visible control:** a button, a menu item, or a long-press equivalent.
- **Honor `prefers-reduced-motion`.** Swap travel for opacity fades or instant changes, and offer a pause for anything that loops longer than 5 s (WCAG 2.2.2).

**Check:** Can each animation name what it clarifies? Is any easing linear outside progress indicators? Does reduced motion remove the travel?

**Values:** `references/interaction-motion.md`.
