# Palette

Decide every color before building. Neutrals do the work; color carries meaning.

- Work in OKLCH. Its lightness is perceptual, so equal steps look equal and contrast is predictable; hex hides how shades relate. Fall back to HSL only where OKLCH isn't available.
- The palette is a neutral **ramp** tinted toward the brand hue, a primary ramp, and semantic ramps for danger, warning, and success, plus info or chart hues as needed. Each ramp has 11 steps, 50-950.
- Build each ramp deliberately, then freeze it. Fix the base (600, the step that works as a solid button), set the lightest step (tint backgrounds) and the darkest (text on tints) by eye, fill between, and lock the ramp before the build. A shade invented mid-build is a **tell**. Values: `references/color.md` (Ramps).
- Keep chroma alive at both ends. Light steps wash out and dark steps go muddy unless chroma stays up toward the ends and the hue drifts a few degrees across the ramp. Values: `references/color.md` (Ramps).
- Grays carry a trace of the brand hue, cool or warm, so the whole UI coheres.
- Let neutrals carry product UI. Surfaces, text, and borders are neutral layers. Color is a small share, reserved for state, meaning, and data. Icons stay neutral unless they're active or showing status. Landing pages can run more colorful.
- Destructive actions and errors use the red danger ramp whatever the brand color (**Emphasis** sets how loud).
- Meet contrast without flattening the design. Text needs 4.5:1; large text and UI graphics need 3:1.
  - When white on a mid-tone fails, flip it: dark text from the same ramp (800/900) on a tint (50/100).
  - On a colored background, secondary text is a lighter or darker step of that hue, not gray.

  Values: `references/color.md` (Contrast).
- Pair color with a second cue (an icon, text, or shape), as in **Scan**.
- Design dark mode as its own palette. Surfaces lighten as they rise, steps between neutrals widen, text is light gray rather than white, borders brighten, and accents move to lighter ramp steps with a little less chroma. Inverting the light palette fails. Values: `references/color.md` (Dark mode).
- Own every color. Treat a generator's or a model's palette as a first draft, and check each value against its job and its contrast.

**Check:** Is every color a token from a ramp? Is there gray text on any colored background? Does each colored element mean something? Does every text pair pass contrast?

**Values:** `references/color.md`.
