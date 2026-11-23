# System

Decide once, then design by choosing from what you decided.

- Define tokens before styling. A **token** is a named design value. Before the first component, set scales for font size, weight, line height, color (ramps and roles), spacing, widths, shadows, radius, border width, opacity, and motion duration and easing. From then on every value is picked, never typed. Values: each file in `references/`.
- Adopt the repo's system first. Where the repo already has tokens or a design system, map onto them and flag conflicts rather than overriding them.
- Lock the recurring choices:
  - one control radius (`radius-md`), with nested radius = outer − padding
  - one icon library, at one stroke weight
  - one button spacing and one set of text styles across every screen

  Values: `references/layout.md` (Radius), `references/imagery.md` (Icons).
- Consistency builds trust. The same action looks and sits the same everywhere, and the primary position never holds a destructive action.
- Size the system to the work. A solo project needs a short token file; a team needs documented components. Breaking the system is a deliberate, recorded decision.

**Check:** Search the code for raw values (hex, px) outside the token file. Are radii mixed? Is more than one icon library in use?
