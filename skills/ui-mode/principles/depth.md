# Depth

Elevation tells users what sits on top and what they can grab. Use one light and a fixed set of heights.

- **Light comes from one direction: above.** Raised elements (buttons, cards) can carry a faint lighter top edge and cast shadow downward; recessed elements (inputs, wells, toggle tracks) take a soft inner shadow at the top. Values: `references/depth.md` (Light).
- **Shadow size encodes height.** Five elevation tokens, `shadow-1…shadow-5`: controls, cards, menus and popovers, drawers and sticky bars, modals. Higher means a larger offset, more blur, and a softer edge. Use only these. Values: `references/depth.md` (Elevation).
- **Pair a key shadow with an ambient one.** A larger, softer, offset key shadow, plus a tight, low-offset ambient shadow that grounds the element. The ambient part fades as elevation rises.
- **Let elevation answer interaction.** Lift on drag (one or two levels), settle on press.
- **Keep shadows quiet.** Low opacity, generous blur, color tinted toward the surface hue (on a colored background, tint the shadow with that hue). A shadow you notice before the element is too strong.
- **Get depth without shadows in a flat style.** Lighter surfaces read nearer and darker ones farther; a solid, unblurred offset shadow suits a flat, graphic look. Values: `references/depth.md` (Without shadows).
- **Overlap to build layers.** Let a card straddle a background change, or push an image past its container edge; ring overlapping avatars with the surface color so each edge stays clean.
- **Elevate dark mode with lightness.** Each level is a lighter surface plus a 1px border; shadows mostly drop away. Values: `references/depth.md` (Dark mode).

**Check:** Is there exactly one light direction? Does every shadow come from the elevation set? Does dark mode elevate with lighter surfaces rather than shadows?

**Values:** `references/depth.md`.
