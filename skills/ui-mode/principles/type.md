# Type

Most of an interface is text. Set it from a system.

- **Use a fixed type scale.** A finite set of sizes (`text-xs…text-6xl`) in px or rem; em compounds when nested, so keep it out of the scale. Marketing pages may use a fluid ratio scale with `clamp()`, still as a finite set. Values: `references/type.md` (Scale).
- **Choose a workhorse family.** A neutral, well-made sans with at least five weights carries UI. One family is enough and two is the ceiling, plus an optional mono for code and data. Display and script faces stay at headline sizes; body text always gets a text face. Values: `references/type.md` (Fonts).
- **Cap the line length.** Paragraphs run 45–75 characters (aim for about 66ch), even in wide layouts: set `max-width` in `ch`.
- **Match line height to size and measure.** Body text is loose, longer lines looser still; headings and display text are tight. Values: `references/type.md` (Rhythm).
- **Align mixed sizes on the baseline.** A title and its meta label, or a price and its unit, share a baseline rather than a vertical center.
- **Style links by context.** Inside prose, a link needs color, an underline, or both. In link-dense UI (nav, tables), use weight or tone, and reveal the underline or color on hover. Values: `references/type.md` (Links).
- **Track by size and case.** Large display text tightens slightly, all-caps labels open up, and body text stays at the default. Values: `references/type.md` (Scale).
- **Let size carry headings and keep body text strong.** Headings get size, subheads get weight, and paragraphs stay at `fg-1` or `fg-2`. A bold heading over a faded paragraph is backwards.
- **Keep mobile text the same size or larger.** iOS body text is 17 pt; small screens never get smaller body text.

**Check:** Count the distinct font sizes: are they all on the scale? Are paragraphs 75ch or narrower? Is any body text set in a display face or below weight 400?

**Values:** `references/type.md`.
