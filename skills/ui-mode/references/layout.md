# Layout, spacing, radius

Tokens for space, width, and corners. Judgment lives in `principles/space.md`.

## Spacing
| Token | px | Typical use |
|---|---|---|
| `space-1` | 4 | icon-to-label, label-to-input |
| `space-2` | 8 | inside chips and tight groups, heading-to-subtext |
| `space-3` | 12 | control padding (vertical), list row padding |
| `space-4` | 16 | control padding (horizontal), between fields in a group |
| `space-5` | 24 | card padding, between field groups |
| `space-6` | 32 | between cards, between form sections |
| `space-7` | 48 | between page sections (app) |
| `space-8` | 64 | section padding (marketing, mobile) |
| `space-9` | 96 | section padding (marketing, desktop) |
| `space-10` | 128 | hero padding, large breaks |

- Every padding, margin, gap, and fixed size comes from this table. A value like 13px or 22px is a **tell**.
- Neighboring steps differ enough to be seen; if 48 feels too small and 64 too big, change the layout around it and keep the scale.
- The gap between groups is at least 2× the gap inside a group. Label to input `space-1`/`space-2`; field to field `space-4`; group to group `space-6` or more.
- In a hero stack, eyebrow to headline is `space-3`, headline to supporting line `space-3`/`space-4`, and supporting line to buttons `space-6` or more. The gap before the buttons is the largest in the stack.
- In lists, the gap between items is larger than the line gap inside an item.
- Density is a choice. Start roomy and remove space until it stops helping. Dense layouts (data tables, trading screens) declare their density on purpose; mobile needs more room than it first seems.
- Extra space around enormous type reads as disconnected; pull related items back together instead of spreading them.
- Give dense content differentiation (avatars, chips, icons, grouping); more whitespace alone doesn't fix it.

## Width
- Give each element the width its content needs, whatever the viewport, and cap it with `max-width`:
  - forms: 400-560px
  - reading text: `max-width: 66ch`
  - settings pages: a ~720px column
  - app content beside a sidebar: flexible, often capped at 1200-1440px
- When content is narrower than the screen, add a column (explanation beside a form, preview beside settings) before stretching the content.
- Check at 1440×900 (desktop), 1920×1080 (wide layouts), and 390×844 (mobile). A design that only works on a tall canvas fails at 900px of height; check what's visible before the first scroll.
- Design the smallest width first (~360-390px), then add room. Removing room later is harder.

## Grids
- A column grid is a tool for repeating content and responsive behavior: 12 columns desktop, 8 tablet, 4 mobile, gutters `space-5`/`space-4`.
- Fix widths where the content is fixed (sidebars 240-280px, inspectors 320-360px) and let the content area flex.
- Prefer `max-width` and fixed tracks to percentage columns; shrink an element only when the screen forces it.
- Marketing sections can break columns when the composition stays balanced. App screens follow the grid more strictly, because they use the full screen.
- Use container queries for components that appear in several widths (a card in a sidebar and in a main column).

## Responsive
- Each breakpoint gets its own values, not one root multiplier. Headlines shrink much more than body text (a 60px hero might become 36px; body stays 16px).
- Padding isn't proportional to font size. Large buttons get relatively more padding, small buttons relatively less.
- On mobile:
  - one scroll direction per section: stack vertically or scroll horizontally off the edge, never both
  - one module per screen; desktop can show several
  - touch targets 44×44pt (iOS) / 48×48dp (Android); WCAG 2.2 floor 24×24 CSS px with spacing
- Test text growth with long names and translations 30-40% longer.

## Radius
| Token | px | Use |
|---|---|---|
| `radius-sm` | 4 | chips in dense tables, checkboxes, tags |
| `radius-md` | 8 | default control radius: buttons, inputs, small cards |
| `radius-lg` | 12 | cards, popovers, menus |
| `radius-xl` | 16 | sheets, modals, large media |
| `radius-full` | 9999 | pills, avatars, switches |

- One control radius. Every small control shares `radius-md` (or the one radius the brand picks). Images and media in the same layout get a radius too; sharp photos beside rounded buttons is a **tell**.
- Nested radius: inner = outer − padding (minimum 2px). A `radius-xl` 16px card with 8px padding gets 8px inner corners. Past ~24px of padding, judge by eye. Pills are exempt.
- Radius sets personality: 0-4px reads precise and serious, 8-12px neutral, 16px+ friendly and soft. Pick once and apply everywhere.
- Optional continuous ("squircle") corners smooth large radii on Apple-like surfaces.

## Separation
Separate things in this order, stopping at the first that works:
1. space (a larger gap)
2. a background shift (`surface` vs `subtle`)
3. a subtle shadow (`shadow-1`/`shadow-2`, see `depth.md`)
4. a hairline in `border` (L 0.90), never pure black

Lines on every edge make a layout look like a spreadsheet. Dividers earn their place when they are the deliberate style (a full-height column grid running the page) or when two dense regions would otherwise merge.
