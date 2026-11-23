# Space

Space groups, separates, and lets a screen breathe. Start roomy, then tighten on purpose.

- It's easier to see which gaps to tighten than which to widen, so start roomy and take space away. Density is a deliberate choice for data-heavy tools, never the default.
- Group by proximity. The gap between groups is at least 2× the gap inside a group: a label sits nearer its own field than the field above it; a heading sits nearer its paragraph than the previous section. An element equidistant from two groups is a spacing bug.
- Take every gap from the scale, `space-1` to `space-10` (4 to 128 px), with adjacent steps far enough apart to see. Values: `references/layout.md` (Spacing).
- Size to the content, then cap it. Each element gets the width it needs, bounded by a max-width; forms and paragraphs stay narrow on wide screens. Lay out the narrow screen first (about 390 px), then add room.
- Grids are scaffolding. Put fixed-width sidebars beside a flexible content area, prefer max-widths over percentage columns, and shrink an element only when the viewport forces it. A 12-column grid guides alignment but doesn't dictate every width.
- Size each breakpoint on its own terms. Large headings shrink much more than body text on small screens; button padding grows less than proportionally with font size. Values: `references/layout.md` (Responsive).
- Watch both failure directions. Huge gaps around huge text read as disconnected; packed layouts read as anxious. Dense content wants differentiation (**Scan**) more than extra space.
- Touch layouts get more room: targets of at least 44 pt, with space between them. Values: `references/mobile.md`.

**Check:** Is every gap a token? Is every between-group gap at least 2× the within-group gap? Does anything stretch wider than its content needs?

**Values:** `references/layout.md`.
