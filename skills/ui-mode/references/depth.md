# Depth and elevation

Tokens for shadows and layering. Judgment lives in `principles/depth.md`.

## Elevation
Five levels, each a pair of shadows: a **key** shadow (larger, softer, offset down, cast by the light above) and an **ambient** shadow (tight, close to the edge, the contact darkness). As elevation rises the key shadow grows and the ambient one fades. Shadow color is a tinted neutral, never pure black.

```css
--shadow-color: 220 30% 12%;            /* hsl triple: tinted near-black */
--shadow-1: 0 1px 2px hsl(var(--shadow-color) / .06),  0 1px 1px hsl(var(--shadow-color) / .04);
--shadow-2: 0 2px 6px -1px hsl(var(--shadow-color) / .08), 0 1px 2px hsl(var(--shadow-color) / .05);
--shadow-3: 0 8px 20px -4px hsl(var(--shadow-color) / .12), 0 2px 4px hsl(var(--shadow-color) / .05);
--shadow-4: 0 14px 32px -8px hsl(var(--shadow-color) / .14), 0 3px 6px hsl(var(--shadow-color) / .04);
--shadow-5: 0 24px 56px -12px hsl(var(--shadow-color) / .20), 0 4px 8px hsl(var(--shadow-color) / .03);
```

| Token | Use | Reads as |
|---|---|---|
| `shadow-1` | buttons, inputs, segmented controls | resting on the page |
| `shadow-2` | cards, hovered list rows | slightly lifted |
| `shadow-3` | menus, popovers, tooltips, dropdowns | floating over content |
| `shadow-4` | drawers, sticky headers and footers | a panel above the page |
| `shadow-5` | modals, dialogs, command palettes | the top layer |

- These five are the only shadows. A one-off `box-shadow` in a component is a **tell**.
- **Cards need little.** Many cards look best at `shadow-1` plus a `border` hairline; anything that floats over other content needs at least `shadow-3`.
- **On colored surfaces,** set `--shadow-color` to a dark step of that surface's hue. A gray shadow on a lavender panel looks dirty.
- **Interaction:** while dragging, raise the item two levels (card `shadow-2` → `shadow-4`); while pressing, drop one level or to none.
- **Strength check:** a shadow should register as lift, not as an outline. Tool defaults are usually too dark and too tight; widen the blur and tint the color before lowering opacity.

## Light
One light, slightly above the screen. Every surface agrees with it.
- **Raised controls** (buttons, toggles' thumbs): a 1px inner highlight on the top edge plus the key shadow below.
  `box-shadow: inset 0 1px 0 hsl(0 0% 100% / .18), var(--shadow-1);`
- **Recessed controls** (inputs, wells, switch tracks, progress tracks): a soft inner shadow at the top, optionally a lighter bottom edge.
  `box-shadow: inset 0 1px 2px hsl(var(--shadow-color) / .08);`
- **Tactile buttons** combine both: top highlight, bottom key shadow, and a 1px darker bottom border.
- Light from two directions on one screen (highlights on top, shadows offset upward) is a **tell**.

## Without shadows
- **Lightness is depth.** A lighter surface reads closer, a darker one further away, so a white card on an L 0.965 frame already floats.
- **Flat style:** a solid offset shadow with zero blur (`4px 4px 0` in a darker shade of the element, 100% opacity) gives a printed, sticker-like depth. Use it as a deliberate brand style, consistently.
- **Overlap creates layers:**
  - a card that straddles the boundary between a colored band and the page
  - an image or panel that extends past its container's edge
  - stacked avatars separated by a 2px ring in the background color, so each overlap reads cleanly

## Dark mode
- **Lighter surface = higher.** Each level adds 0.03–0.04 L to the surface (see `color.md`, Dark mode): `bg` 0.16 → card 0.19 → menu 0.22 → modal 0.25.
- **Edges carry separation:** a 1px `border` (L 0.30) or a top highlight `inset 0 1px 0 hsl(0 0% 100% / .06)`.
- **Shadows mostly disappear.** Keep at most a broad, dark shadow under modals to separate them from the scrim.
- **Soft glass** (AI products, overlays on media, showcase shots):
  - semi-transparent surface (white at 4–8% over dark)
  - `backdrop-filter: blur(16–24px)`
  - 1px border at white 8–12%
  - a faint inner top highlight
  - optionally a very subtle vertical gradient

## Showcase only
Perspective tilts, pop-out frames with deep shadows, and glow shapes belong to presentation images and marketing composites, not to the product UI itself.
