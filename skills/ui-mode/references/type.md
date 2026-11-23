# Typography

Tokens and values for text. Judgment lives in `principles/type.md` and `principles/emphasis.md`.

## Fonts
- **One family carries the UI.** A second is allowed for display or long-form reading; a monospace is allowed for code, IDs, and figures. More than two text families is a token leak.
- **UI text:** a neutral, well-hinted sans with at least five weights and tabular figures (Inter-class grotesques, system UI stacks, or a characterful equivalent the brand earns).
- **Pairings that work:** display face + neutral sans (most common); serif headings + sans UI; sans UI + serif for long reading.
- **Body text uses a text face.** Display, script, and handwritten faces stay at headline sizes, where their details are visible.
- **Personality:** serif reads editorial or established; rounded sans reads friendly; geometric sans reads crisp and modern; neutral grotesque reads quiet. Marketing pages can earn a distinctive display face; app screens keep to the UI sans.
- **Figures:** set numbers in tables, prices, timers, and counters with `font-variant-numeric: tabular-nums` so columns and changing values don't jitter.

## Scale
| Token | px | Typical use |
|---|---|---|
| `text-xs` | 12 | captions, badges, fine print (floor for any visible text) |
| `text-sm` | 14 | dense app UI, table cells, secondary labels |
| `text-base` | 16 | app body, form inputs (16px avoids iOS zoom on focus) |
| `text-lg` | 18 | reading body, lead paragraphs |
| `text-xl` | 20 | card titles, small section heads |
| `text-2xl` | 24 | page titles in apps (app screens rarely go higher) |
| `text-3xl` | 30 | marketing section heads |
| `text-4xl` | 36 | marketing section heads, small heroes |
| `text-5xl` | 48 | hero headlines |
| `text-6xl` | 60 | large hero headlines |
| display | 72 | one statement per page, at most |

- Steps are tight at the small end (2px) and wide at the large end, because small differences matter more at small sizes.
- Declare sizes in px or rem; `em` compounds when nested.
- A marketing page uses ≤ 6 sizes; an app screen ≤ 5.
- **Fluid headlines (marketing only):** `font-size: clamp(36px, 2.4rem + 2.2vw, 60px)` — pick min and max from the scale so the endpoints stay tokens.
- **Platforms:** iOS body 17pt, macOS body 13pt, Android body 14–16sp. Mobile text is never smaller than its desktop equivalent; headings shrink, body stays.

## Weight
- 400 body · 500 UI labels and buttons · 600 headings and emphasis · 700 rarely, for a single loud element.
- UI text stays at 400 or above; thin weights break up at small sizes and on low-DPI screens. Quiet text with a lower text tier (`fg-2`, `fg-3`) or a smaller size instead.
- **Ranking text, in order:** list the text elements by rank; let size carry the page title; make subheads 600; keep body at `fg-1` and 400. A bold heading over a faded paragraph inverts the hierarchy.
- At 12–14px, weight and tier blur together; pick one lever per element and keep tiers clearly apart.

## Rhythm
| Context | Line height |
|---|---|
| Reading body (16–18px) | 1.5–1.6 |
| UI labels, table cells, buttons | 1.3–1.4 |
| Headings (20–36px) | 1.15–1.25 |
| Display (≥ 48px) | 1.0–1.1 |

- Longer lines need taller line height; very short lines (captions in a narrow column) can go tighter.
- **Line length:** aim for about 66 characters per line; keep reading text between 45 and 75 (`max-width: 66ch`). Full-width paragraphs in a wide layout are a **tell**.
- **Letter-spacing:**
  - display text ≥ 36px: −0.01 to −0.02em
  - body: 0
  - all caps and small caps: +0.06 to +0.1em (caps are hard to read when tight)
  - above ~72px, check pairs by eye; gaps that look broken are usually spacing, not the font.
- **Paragraph spacing:** about 0.75× the line height between paragraphs; headings sit closer to the text they introduce than to the text above them (see `layout.md`, Spacing).

## Alignment
- Left-align (start-align) running text and most labels.
- Center only short blocks: a headline, a two- or three-line lead, an empty-state message.
- Right-align (end-align) numbers in tables, with tabular figures, so place values stack.
- Justify only with hyphenation on, and never in narrow columns.
- **Mixed sizes on one line** (a title with a count, a price with its unit): align on the shared baseline (`align-items: baseline`), not the box center.

## Links
- **Links in running text** need a non-color cue as well as color: an underline (`text-underline-offset: 0.2em; text-decoration-thickness: 1px`, thicker on hover).
- **Link-dense UI** (nav, tables, card titles): use weight or `fg-1` vs `fg-2`, and reveal the underline or accent color on hover and focus.
- A text-style button is the tertiary action (see `components.md`, Buttons).
- Visited state matters on content sites and search results; skip it in app navigation.

## Copy
- **Headlines:** one concrete promise in about 5–10 words; supporting line about 15–25 words that says how it helps.
- **Buttons:** verb + object ("Create invoice", "Send 3 reminders"), sentence case.
- **Errors:** what happened + what to do next ("Card declined. Try another card or contact your bank."). Keep the user's input.
- **Values over labels:** format data so it explains itself ("Due Friday", "4 seats free", "$1,204.50 / mo") and drop the "Label:" prefix. Keep labels only where values could be confused (start vs end date).
- **Plain words:** friendly, specific language over category jargon ("We'll remind you two days before" beats "Leverage automated notifications").
- **Cut:** labels the layout implies, the product's name repeated in every heading, vague paragraphs that could sit on any site.
- **Length budget:** UI strings grow 30–40% in translation; leave room or test with a long locale.
