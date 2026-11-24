# Color

All color work happens in OKLCH: `L` is perceived lightness (0 is black, 1 is white), `C` is chroma, `h` is hue. Equal steps in `L` look like equal steps, which hex and HSL can't promise. Judgment lives in `principles/palette.md`; this file holds the tokens.

## Inventory
Define these before any styling:

| Group | Steps | Job |
|---|---|---|
| Neutrals (tinted toward the brand hue) | 11 (50-950) | surfaces, text tiers, borders, controls |
| Primary | 11 (50-950) | actions, focus, selection, links |
| Danger, warning, success, info | 11 each | destructive and error, caution, done, neutral notices |
| Data accents | as many series as the charts need | charts, tags, categories |

Product UI is overwhelmingly neutral. Color covers a few percent of the pixels, and every colored pixel signals state, meaning, or data. Colorful splits like 60-30-10 belong to marketing pages.

## Ramps
A **ramp** is an 11-step scale, 50 (lightest) to 950 (darkest). Build every ramp before the first screen, then freeze it.

1. Anchor 600. Pick the color that will fill a solid button. It must carry white text at 4.5:1 or better (≈ L 0.52-0.56).
2. Set the ends by hand. 50 is a tint you could use as a page wash (L ≈ 0.97); 950 is dark enough for text on that tint (L ≈ 0.24).
3. Space the lightness. Fill the steps between so `L` drops in near-even increments, slightly wider in the middle.
4. Shape the chroma. Peak chroma at 500-600 and taper toward both ends, but keep the ends colored: give 50 as much chroma as the gamut allows at its lightness (a blue tops out near C 0.014), and keep 950 at C ≥ 0.06. A ramp whose ends go gray reads washed out at the top and muddy at the bottom.
5. Hold the hue. OKLCH keeps perceived hue stable, so most ramps need no drift. If a step looks off-hue (yellows turning green when dark, blues turning purple when light), nudge `h` by up to 8° across the whole ramp.
6. Clip to gamut. Where a step falls outside sRGB, lower its chroma rather than shifting its lightness.
7. Freeze. No new shade enters mid-build. A missing shade sends you back to the ramp; never patch it with an inline hex.

Worked example, a blue at h 262:

| Step | L | C | Typical role |
|---|---|---|---|
| 50 | 0.97 | 0.014 | tint background |
| 100 | 0.94 | 0.028 | tint background, selected row |
| 200 | 0.88 | 0.058 | tint border |
| 300 | 0.80 | 0.10 | dark-mode hover |
| 400 | 0.70 | 0.155 | dark-mode accent, dark-mode links |
| 500 | 0.62 | 0.19 | icons on light tints, chart series |
| 600 | 0.54 | 0.20 | solid fill, buttons, light-mode links |
| 700 | 0.47 | 0.18 | hover |
| 800 | 0.39 | 0.15 | pressed; text on tint |
| 900 | 0.32 | 0.11 | text on tint |
| 950 | 0.24 | 0.08 | darkest text, dark-mode tint background |

Steps 50-400 sit at the sRGB edge, so their chroma is the gamut maximum for their lightness (step 6).

Roles by step: solid fill 600 · hover 700 · pressed 800 · tint background 50/100 · text on tint 800/900 · links 600 (light) / 400 (dark) · dark-mode accent 400, its hover 300.

## Neutrals
Tint every gray toward the brand hue at C 0.005-0.015: cool brands get cool grays, warm brands warm ones. Pure `#000` and pure gray read as unconsidered.

| Token | Light L (worst contrast) | Dark L | Use |
|---|---|---|---|
| `bg` | 0.985 | 0.16 | page |
| `surface` | 1.0 | 0.19 | cards, panels, inputs |
| `subtle` | 0.965 | 0.22 | app frame, sidebar, hover rows, section bands |
| `border` | 0.90 | 0.30 | default hairline |
| `border-strong` | 0.82 | 0.38 | dividers that must read |
| `border-input` | 0.60 | 0.55 | outline of an input with no fill cue (≥ 3:1) |
| `fg-1` | 0.21 (~16:1) | 0.93 | headings, primary text |
| `fg-2` | 0.44 (~7.0:1) | 0.75 | body secondary, metadata |
| `fg-3` | 0.54 (~4.6:1) | 0.64 | placeholders, tertiary labels; the floor for readable text |

- Contrast is the worst case across `bg`, `surface`, and `subtle`; dark values clear 4.5:1 on every dark elevation level (`depth.md`, Dark mode).
- Three text tiers cover almost every screen. Disabled text may drop below `fg-3` only because it carries no information the user needs.
- The app frame (sidebar, top bar) sits one step off the content surface (`subtle` vs `surface`), so content reads as the lit area.
- A product UI needs about four surface layers, one or two border strengths, and three text tiers. More than that is a token leak.
- Buttons rise in darkness with importance: ghost (no fill), `subtle` fill, then solid 600 or `fg-1` fill with white text.

## Contrast
- Text needs 4.5:1, and large text (≥ 24px, or ≥ 18.66px bold) needs 3:1. UI graphics, input outlines that identify the control (`border-input`), and focus rings need 3:1 (WCAG 2.2).
- If white on a mid-tone fails, invert the pairing: 800/900 text on a 50/100 tint of the same hue. Keep white-on-600 for the primary action.
- Secondary text on a colored surface uses the surface's own hue, lighter or darker, at reduced chroma. Gray on color looks dirty and usually fails contrast.
- For colored text on a colored surface, move the text further along the same ramp (e.g. 900 on 100) before reaching for white.
- Meaning needs two channels. Pair every color signal with an icon, a word, a weight, or a pattern. In charts, separate series by lightness as well as hue.
- If a brand color fails, adapt it. Use the next darker step for text and keep the brand step for fills.
- In multi-color layouts, check every chip and tinted-card pair. Five different accent tints on five cards is five contrast checks, and some will fail.

## Where color goes
- Before adding a color, answer: *what does this tell the user?* No answer, no color.
- Icons are `fg-2` by default and take color only for active, selected, or status.
- Surfaces stay neutral. Large saturated backgrounds belong to marketing bands and hero moments.
- On app screens, color comes from data (status, charts, urgency), never from decoration.
- Small purposeful spots can take color: the focus ring, a "New" chip, an announcement bar, the selected nav item.
- Semantic hues: red = danger or destructive, amber = warning, green = success, blue = informational or neutral link. Destructive actions are red even when the brand is red-adjacent or purple; the brand hue never marks a destructive action.

## States
| State | Light | Dark |
|---|---|---|
| Hover | one step darker (600 to 700) or `subtle` fill on ghost | one step lighter (400 to 300) |
| Pressed | two steps darker (800) | 200 |
| Selected | 50/100 tint + 700 text or a 600 indicator | 950 tint + 300 text |
| Focus | 2px ring in 600 (light) / 400 (dark), 2px offset, ≥ 3:1 against the adjacent surface | same |
| Disabled | `subtle` fill, `fg-3` text, no shadow; keep the label legible | same tokens |

On touch, pressed does the job hover does with a pointer.

## Dark mode
Build dark mode as a sibling palette. Inverting the light one doesn't work.
- Steps get wider. Adjacent surfaces differ by 0.03-0.04 L (vs ~0.015-0.02 in light) so layers stay distinguishable.
- Elevation lightens. Each raised layer adds 0.03-0.04 L and slightly lowers chroma. See `depth.md` (Dark mode).
- Text dims, with `fg-1` at L 0.93 instead of pure white. Reserve the brightest white for one element per screen, if any.
- Borders brighten relative to the surface (L 0.30), stopping short of harsh white lines.
- The accent moves to 400 and its hover to 300, with chroma lowered 10-20% so it doesn't vibrate.
- Chips and tints use a dark tinted background (900/950 at low chroma) with light text (200/300).
- Neutrals keep the brand tint. Deep tinted backgrounds (plum, forest, ink) work as well as navy-gray.
- Follow the system setting by default (`prefers-color-scheme`); offer an override.

## Charts
- For the series palette, fix L (≈ 0.62-0.70) in OKLCH, aim for C ≈ 0.14-0.18, and step the hue 25-40° per series, so no series shouts louder than another. Yellows (h ≈ 70-110) and teals or cyans (h ≈ 170-230) can't reach that chroma in sRGB at that lightness; lower their chroma, never their lightness. HSL equal-lightness palettes make greens and yellows glare.
- Avoid a single-ramp palette for categories (adjacent series become indistinguishable) and all-gray palettes (lifeless).
- The comparison period is a `fg-3` line, dashed or thinner.
- For color-blind safety, vary lightness between adjacent series and add direct labels or markers.
- Sequential data (low to high) uses one ramp; diverging data uses two ramps meeting at a neutral midpoint.

## Theming
To derive a themed neutral set from a base one: keep each step's L, raise C by about 0.01-0.02, and set h to the theme hue. Re-check `fg-3` contrast afterward.

## Backgrounds and decoration
- Gradients stay within one hue family (endpoints ≤ 30° apart in h) or move along one ramp. Cross-spectrum gradients (blue to green to amber) read as default-generator output.
- Section bands alternate `bg` and `subtle`, or use a 50 tint, to separate long-page sections without lines.
- For texture, use noise at 2-4% opacity or a faint grid/dot pattern at ≤ 6% opacity. Visible grain is too much.
- Only presentation shots get a darkened, desaturated accent backdrop (light) or large blurred accent shapes behind the UI (dark).
