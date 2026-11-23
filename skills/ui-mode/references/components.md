# Components

Specs for common components. Tokens come from `color.md`, `type.md`, `layout.md`, and `depth.md`.

## Buttons
- **Style by rank, not by meaning.** One **primary** per view: solid 600 fill, white text. **Secondary:** `subtle` fill or a `border-strong` outline. **Tertiary:** text style, `fg-2` or 600, underline on hover.
- **Destructive actions** are danger-coded, never brand-colored, and keep their rank. Off the main path: danger-700 text or a danger outline as secondary/tertiary, placed apart from the primary. Solid danger-600 appears only on the confirmation step itself (see `interaction-motion.md` for undo vs confirm).
- **Sizes:** 32px (dense), 36–40px (default), 44–48px (touch, marketing). Padding: horizontal ≈ 2× vertical (`space-2` × `space-4` at default size); larger buttons get proportionally more.
- **State set:** default, hover, pressed, focus-visible, disabled, loading. Loading keeps the button's width, swaps the label for a spinner plus verb ("Saving…"), and blocks double submit.
- **Labels:** verb + object, sentence case ("Create invoice"). The same destination carries the same label everywhere (nav CTA and hero CTA alike).
- **Ghost buttons** (no fill until hover) suit sidebars, toolbars, and the secondary action beside a solid primary.
- **Polish:** a 1–2px press-down or `scale(.98)` on press (`dur-1`); label slide or arrow nudge on hover for marketing CTAs.

## Forms
- **Labels sit above inputs** and stay visible; placeholder text is an example value ("e.g. Northwind Ltd"), never the label. Label → input `space-1`/`space-2`; field → field `space-4`; group → group `space-6`.
- **Inputs:** 40px tall (44px touch), `surface` fill, `radius-md`, 16px text on mobile. The outline must reach 3:1 against the surface when it is the only cue (≈ L 0.60); otherwise use a `subtle` fill with a `border` hairline.
- **Focus ring:** `:focus-visible { outline: 2px solid var(--primary-600); outline-offset: 2px; }` (400 in dark mode); ≥ 3:1 against neighbors. Every focusable element shows it.
- **Validation:** validate on blur, then live once a field has errored. Error = danger border + icon + text under the field saying how to fix it. Keep the user's input. Long forms add a summary at the top linking to each error.
- **Warnings** (soft issues) use the warning ramp and never block submit.
- **Edit forms open filled:** settings and edit screens show the current saved values, and Save stays quiet until something changes.
- **Accessibility:** every input has a programmatic label (`<label for>`), required fields are marked in text, not only color; `autocomplete`, `inputmode`, and `type` match the data.
- **Auth:** the sign-up screen says "Create account" in its heading so it isn't mistaken for sign-in, with a link to the other; onboarding has an exit to sign-in for people who land there by mistake.

## Input choice
Pick the control by how the user knows the value and how often they enter it, not by the data type.

| The user is… | Example | Control |
|---|---|---|
| picking from a small known set | seats in a car | segments with every option visible: `2 · 4 · 5 · 7+` ("7+" includes 8 and 9) |
| choosing among 2–6 options | plan, color, delivery speed | visible segments, swatches, or selectable cards — not a dropdown |
| nudging a value that already exists | cart quantity, guest count | stepper |
| exploring a range | price, mileage, distance | dual slider + min/max fields, with a histogram of results behind the track |
| picking a span of discrete values | model years 2018–2021 | tap the two ends; everything between selects |
| one-time entry within a known range | birth year, height | wheel or slider |
| entering a precise value often | grams logged, expense amount | numeric field, `inputmode="decimal"`, recent values as one-tap chips |
| giving a predictable answer | job title, country, industry | common answers as taps (with icons) + "Other", or autocomplete |
| setting a date | delivery date, deadline | calendar that also accepts typing, plus shortcuts ("Tomorrow", "Next Monday"); never three dropdowns |
| knowing something other than what's asked | down payment and monthly budget, not "max price" | ask for what they know, compute the rest, show the result |

## Chips
- **For fixed value sets:** status, role, category, tag. Chips can be swapped inline (click to change) instead of through a buried menu.
- **Size:** 20–24px tall, vertical padding ¼–½ of horizontal (`2–4px` × `8px`), `text-xs`/`text-sm` at 500, `radius-full` or `radius-sm`. Always shorter than buttons; too small reads broken, too big reads clickable.
- **Color only where it means something:** status chips take semantic tints (50/100 background, 800 text); categorical chips stay neutral unless the category is the information. Never the primary CTA color.

## Cards
- **Show what users scan for;** the rest goes to the detail page. A rental-bike card: photo, name, price per hour, distance, rating.
- **Group and rank:** name and subtitle top-left; the number that decides (price) top-right or bottom-right with emphasis; supporting facts in one icon row; low-rank data last.
- **Drop labels the layout implies.** Keep a label only where values could be confused (pickup vs return time).
- **Lock content to edges:** stack content against the card's outer edges and internal dividers. Crowded? Move an element to create or clear an edge before hiding anything.
- **Image on top** for color and fast scanning; for desire-driven categories the photo is the largest element, and text sits below it (see `imagery.md`, Catalog).
- **Whole-card links:** repeated navigation cards need no button; the card is the target, with an arrow that appears on hover. Cards for a distinct action keep their button.
- **Real content:** truncate long titles with an ellipsis and a full-text tooltip; plan for missing images and zero values.
- **One level of card.** A card inside a card stacks padding, borders, and radii; dissolve the inner one into a divider or spacing.
- **Overlay variant:** image filling ~¾ of the card, a gradient scrim from the bottom, text over it. Works only for controlled imagery; the stacked card always works.

## Tables
- **Separate rows** by spacing first, then a `border` hairline, then zebra fill.
- **Align:** text start, numbers end with `tabular-nums`, so place values line up; dates in one format.
- **Values explain themselves:** relative dates ("2 h ago", full timestamp on hover), units on the header, people as avatar + name, status as chips.
- **Truncate long text** to protect other columns; shade inactive or archived rows to `fg-3`.
- **A table becomes a tool** with search, filter, and sort; multi-select reveals a bulk-action bar.
- **Secondary actions on hover** (copy, edit, remove), each with a tooltip and an accessible name, and reachable by keyboard.
- **Combine related columns:** name with email beneath, product with thumbnail.
- **Events over time** go on a timeline, not a timestamp column to hunt through.
- **Let users choose the view** when no layout fits everyone: cards to browse, a compact list to compare.
- **Category grids:** solid, softly tinted tiles with isolated images in one style.

## Filters
Requirements are soft: a buyer who asked for under 60,000 miles will look at 62,000 for a better car. Filters should show what loosening or tightening each requirement does.
- **On the list:** quick-filter chips for the top 6–8 filters, a Filter button for the rest, Sort beside it, and a result count ("128 cars").
- **The filter panel:** a sheet over the results (mobile) or a side panel (desktop), all filters in one scroll, results still in view or counted live.
- **Apply button states the outcome,** updated live: "Show 128 cars". Zero results says so before the tap.
- **Counts per option:** "Electric (34)", "Under 60,000 mi (212)".
- **Market context:** "128 of 2,310 cars match", the median price, a histogram behind the price slider.
- **Translate inputs:** let users enter what they know (down payment, monthly budget, term), compute the limit, and mark it on the histogram.
- **Icons on option sets** (body type) speed recognition.
- **Prune:** each addition makes the panel heavier; keep what changes the decision.

## Charts
- **Readable first:** labeled axes, light gridlines, a headline value with its change ("$48.2k, +12% vs last month"), and a range selector (segments when space allows, a menu when tight).
- **Straight segments** between points so values are exact; the latest point at full strength, not faded.
- **Bars:** square value ends (rounding hides where the value stops); one bar per period; two-sided bars for in/out data.
- **Comparison:** previous period as a `fg-3` line plus a compare toggle; a legend or direct labels.
- **Hover:** a crosshair with exact value and change, other series dimmed; this is where app motion can show some character.
- **Identification:** logos or favicons on bar labels help when the series are brands.
- **Earn the chart:** if it only repeats numbers shown elsewhere, use chips or a stat row. An unfamiliar chart type needs a reason.
- Colors and accessibility: `color.md`, Charts.

## Overlays
Pick the container by how much context the task needs:

| Container | For | Notes |
|---|---|---|
| Tooltip | naming an icon, a short hint | 500ms first delay, instant on neighbors for 1.5s; also on keyboard focus |
| Popover | small, non-blocking context (share, display options) | dismiss on outside click with no loss; primary control at the top |
| Modal | a focused task while staying on the page (create, edit) | blocks the page; traps focus, Esc closes; confirm completion with a toast. A sparse side flyout should become a modal |
| Toast | result, warning, undo | `dur-3`, bottom or top-center, 4–6s (longer with an action), never covers the primary action |
| Bottom sheet (mobile) | doing something without leaving context | any height; title, optional search, confirm and close; swipe down to dismiss |
| Page | large or permanent context | always a back button or breadcrumb |
| Tabs | more views of one object without sidebar sprawl | keep state per tab |

## Navigation
- **Header:** logo at start, a short nav that stays quiet, one prominent CTA. Center the links when balance needs it; small dropdowns on key items. A single-product site can fold everything into one menu.
- **Mega menus** with product images give context before the click.
- **Footer:** mirrors the header. With few links: logo, one row of links, socials, then a legal line. Multi-column footers only when there are many real links.
- **Pagination:** "Load more" keeps the footer reachable and gives control; infinite scroll suits endless feeds only.
- **Current location** is always visible: active nav item (indicator bar or filled background), page title, breadcrumb for depth > 2.

## Search
- **Prominent in apps;** a collapsed search expands on click or `/` / `⌘K`.
- **Placeholder names what's searchable:** "Search plants, pots, or care guides".
- **On focus:** recent searches, popular items, and personal suggestions, field ready to type.
- **In the field:** a clear (×) button; result count once results show.
- **Results:** query shown at the top with a back action; highlight matches.
- **Command palette** for multi-screen apps (results jump to screens and actions); a floating search bar plus slide-out preview for single-screen apps.
- **No results:** say nothing matched, suggest corrections, offer a way out (clear filters, browse).

## Pricing
- **3–4 plans,** ordered by price. Very large or custom tiers become an "Enterprise" link or a small contact button, not a full column.
- **Hierarchy:** plan name small, price large, billing cadence directly under it ("$24 / month, billed yearly"), and the real yearly saving.
- **One featured plan** (tint background or accent border, tag) with the solid button; others get outline buttons.
- **Features:** checkmarks, an excluded item or two to show the difference, and "Everything in Starter, plus…" for higher tiers.
- **Separate price from features** with a tint band or spacing, not a hard rule.

## Carousels
- **Position:** "3 / 12" on a dark blurred pill over the image or below it, arrows beside it; the active dot can stretch into a timer for auto-advance.
- **Too many items** for the space: a horizontally scrolling row, not shrunk items.

## Empty states
- **First run:** an illustration or small animation, a message about the benefit ("Track every project in one place"), one or two concrete tips ("Import a spreadsheet", "Invite your team"), and one primary action ("Create project"). Hide tabs, filters, and sort until there's content to act on.
- **No results:** imagery, a plain statement that nothing matched, suggestions (spelling, broader filters), and an action that leaves the empty state.
- **Cleared:** a calm done state ("Inbox zero — nice"), optionally the next useful action.
- **Error:** what failed, what was kept, and a retry.
- Lists hold empty states better than grids.

## Onboarding
- **Learn by doing:** ask the use case first, then tailor the workspace and build the user's first real object with them ("Name your first project"). Say that every choice can be changed later.
- **Skip the slideshow tour;** people click through it and remember little.
- **The workspace opens in its first-run state** (Empty states above): one next step, with tabs, filters, and sort hidden until there's content.
- **Leave an exit:** Skip on every optional step, and a link to sign in for people who landed in signup by mistake.
- **Progressive guidance:** one hint on the most important action, then a second hint or a small corner checklist of 3–5 steps.
- **Value before effort:** show an insight or a result before asking for goals, profile details, or invitations.
- **Home adapts to stage:** new users see setup plus a few starting points; returning users see today's work; power users see their numbers first, then work and suggestions. Signup psychology lives in `principles/nudge.md`.

## Microcopy and small touches
- **Tooltips** on every ambiguous icon (timing in Overlays).
- **Name tags on hover** for small avatars.
- **Locked features:** reveal the upgrade detail on hover or tap ("Available on Team") instead of crossed-out text.
- **Privacy:** products that handle personal data say what they store and why, near where it's collected.
- **404 and other dead ends** are a place for a little personality, plus a way back.

## Finishing
- **Replace defaults with designed versions:**
  - bullets → checkmarks or topic icons
  - testimonial quotes → large, colored quote marks as a graphic element
  - links → custom underlines (offset, thicker on hover)
  - checkboxes and radios → brand color via `accent-color` or custom controls
- **Accent bars** add color without adding elements: a 3–4px top border on a featured card, a start-edge bar on the active nav item, a side stripe on an alert, a short bar under a section heading, a thin strip across the top of the app.
- **Background texture:** alternate section bands, a one-hue gradient, low-opacity patterns or simple shapes; decoration stays behind the content.
- **Richer stock components:**
  - menus with sections, icons, descriptions, and shortcuts
  - table cells that combine fields, avatars, chips, and color
  - radio groups as selectable cards
  - hover on a keyword that previews a related image
- **Borders last:** space, background, then shadow before adding a line (`layout.md`, Separation).
- **Stickers** break a boxy layout: a rounded star badge, a quirky display word, a hard offset shadow (`depth.md`, Without shadows).
