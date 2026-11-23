# Components

Specs for common components. Tokens come from `color.md`, `type.md`, `layout.md`, and `depth.md`.

## Buttons
- Style by rank, not by meaning. One **primary** per view: solid 600 fill, white text. Secondary gets a `subtle` fill or a `border-strong` outline. Tertiary is text style, `fg-2` or 600, underlined on hover.
- Destructive actions are danger-coded, never brand-colored, and keep their rank. Off the main path, use danger-700 text or a danger outline as secondary/tertiary, placed apart from the primary. Solid danger-600 appears only on the confirmation step itself (see `interaction-motion.md` for undo vs confirm).
- Sizes: 32px (dense), 36-40px (default), 44-48px (touch, marketing). Horizontal padding is about 2× vertical (`space-2` × `space-4` at default size); larger buttons get proportionally more.
- The **state set** is default, hover, pressed, focus-visible, disabled, loading. Loading keeps the button's width, swaps the label for a spinner plus verb ("Saving…"), and blocks double submit.
- Labels are verb + object in sentence case ("Create invoice"). The same destination carries the same label everywhere, nav CTA and hero CTA alike.
- Ghost buttons (no fill until hover) suit sidebars, toolbars, and the secondary action beside a solid primary.
- For polish, add a 1-2px press-down or `scale(.98)` on press (`dur-1`). Marketing CTAs can slide the label or nudge an arrow on hover.

## Forms
- Labels sit above inputs and stay visible. Placeholder text is an example value ("e.g. Northwind Ltd"), never the label. Label to input `space-1`/`space-2`; field to field `space-4`; group to group `space-6`.
- Inputs are 40px tall (44px touch) with a `surface` fill, `radius-md`, and 16px text on mobile. When the outline is the only cue it must reach 3:1 against the surface (≈ L 0.60); otherwise use a `subtle` fill with a `border` hairline.
- Focus ring: `:focus-visible { outline: 2px solid var(--primary-600); outline-offset: 2px; }` (400 in dark mode), ≥ 3:1 against neighbors. Every focusable element shows it.
- Validate on blur, then live once a field has errored. An error shows a danger border, an icon, and text under the field saying how to fix it. Keep the user's input. Long forms add a summary at the top linking to each error.
- Warnings (soft issues) use the warning ramp and never block submit.
- Edit forms open filled. Settings and edit screens show the current saved values, and Save stays quiet until something changes.
- Every input has a programmatic label (`<label for>`), required fields are marked in text, not only color, and `autocomplete`, `inputmode`, and `type` match the data.
- The sign-up screen says "Create account" in its heading so it isn't mistaken for sign-in, and links to the other. Onboarding has an exit to sign-in for people who land there by mistake.

## Input choice
Pick the control by how the user knows the value and how often they enter it. Don't pick by data type.

| The user is | Example | Control |
|---|---|---|
| picking from a small known set | seats in a car | segments with every option visible: `2 · 4 · 5 · 7+` ("7+" includes 8 and 9) |
| choosing among 2-6 options | plan, color, delivery speed | visible segments, swatches, or selectable cards; never a dropdown |
| nudging a value that already exists | cart quantity, guest count | stepper |
| exploring a range | price, mileage, distance | dual slider + min/max fields, with a histogram of results behind the track |
| picking a span of discrete values | model years 2018-2021 | tap the two ends; everything between selects |
| one-time entry within a known range | birth year, height | wheel or slider |
| entering a precise value often | grams logged, expense amount | numeric field, `inputmode="decimal"`, recent values as one-tap chips |
| giving a predictable answer | job title, country, industry | common answers as taps (with icons) + "Other", or autocomplete |
| setting a date | delivery date, deadline | calendar that also accepts typing, plus shortcuts ("Tomorrow", "Next Monday"); never three dropdowns |
| knowing something other than what's asked | down payment and monthly budget, not "max price" | ask for what they know, compute the rest, show the result |

## Chips
- Chips are for fixed value sets: status, role, category, tag. They can be swapped inline (click to change) instead of through a buried menu.
- Size: 20-24px tall, vertical padding 1/4 to 1/2 of horizontal (`2-4px` × `8px`), `text-xs`/`text-sm` at 500, `radius-full` or `radius-sm`. Always shorter than buttons. Too small reads broken; too big reads clickable.
- Use color only where it means something. Status chips take semantic tints (50/100 background, 800 text); categorical chips stay neutral unless the category is the information. Never use the primary CTA color.

## Cards
- Show what users scan for and move the rest to the detail page. A rental-bike card shows photo, name, price per hour, distance, rating.
- Group and rank. Name and subtitle go top-left; the number that decides (price) goes top-right or bottom-right with emphasis; supporting facts share one icon row; low-rank data comes last.
- Drop labels the layout implies. Keep a label only where values could be confused (pickup vs return time).
- Lock content to edges by stacking it against the card's outer edges and internal dividers. When a card is crowded, move an element to create or clear an edge before hiding anything.
- Put the image on top for color and fast scanning. For desire-driven categories the photo is the largest element and text sits below it (see `imagery.md`, Catalog).
- Repeated navigation cards need no button. The whole card is the target, with an arrow that appears on hover. Cards for a distinct action keep their button.
- Plan for real content: truncate long titles with an ellipsis and a full-text tooltip, and handle missing images and zero values.
- Use one level of card. A card inside a card stacks padding, borders, and radii; dissolve the inner one into a divider or spacing.
- The overlay variant has an image filling ~¾ of the card, a gradient scrim from the bottom, and text over it. It works only for controlled imagery; the stacked card always works.

## Tables
- Separate rows by spacing first, then a `border` hairline, then zebra fill.
- Align text to the start and numbers to the end with `tabular-nums`, so place values line up. Use one date format.
- Values explain themselves: relative dates ("2 h ago", full timestamp on hover), units on the header, people as avatar + name, status as chips.
- Truncate long text to protect other columns; shade inactive or archived rows to `fg-3`.
- Search, filter, and sort turn a table into a tool; multi-select reveals a bulk-action bar.
- Secondary actions (copy, edit, remove) appear on hover, each with a tooltip and an accessible name, and are reachable by keyboard.
- Combine related columns: name with email beneath, product with thumbnail.
- Events over time go on a timeline. A timestamp column makes people hunt.
- When no layout fits everyone, let users choose the view: cards to browse, a compact list to compare.
- Category grids use solid, softly tinted tiles with isolated images in one style.

## Filters
Requirements are soft: a buyer who asked for under 60,000 miles will look at 62,000 for a better car. Filters should show what loosening or tightening each requirement does.
- On the list, show quick-filter chips for the top 6-8 filters, a Filter button for the rest, Sort beside it, and a result count ("128 cars").
- The filter panel is a sheet over the results (mobile) or a side panel (desktop), with all filters in one scroll and results still in view or counted live.
- The Apply button states the outcome, updated live: "Show 128 cars". With zero results it says so before the tap.
- Show counts per option: "Electric (34)", "Under 60,000 mi (212)".
- Give market context: "128 of 2,310 cars match", the median price, a histogram behind the price slider.
- Translate inputs. Let users enter what they know (down payment, monthly budget, term), compute the limit, and mark it on the histogram.
- Icons on option sets (body type) speed recognition.
- Prune. Each addition makes the panel heavier, so keep what changes the decision.

## Charts
- Make it readable first: labeled axes, light gridlines, a headline value with its change ("$48.2k, +12% vs last month"), and a range selector (segments when space allows, a menu when tight).
- Draw straight segments between points so values are exact, and keep the latest point at full strength instead of fading it.
- Bars get square value ends, since rounding hides where the value stops. One bar per period; two-sided bars for in/out data.
- Show the previous period as a `fg-3` line with a compare toggle, and use a legend or direct labels.
- On hover, show a crosshair with exact value and change and dim the other series. This is where app motion can show some character.
- Logos or favicons on bar labels help when the series are brands.
- Earn the chart. If it only repeats numbers shown elsewhere, use chips or a stat row. An unfamiliar chart type needs a reason.
- Colors and accessibility: `color.md`, Charts.

## Overlays
Pick the container by how much context the task needs:

| Container | For | Notes |
|---|---|---|
| Tooltip | naming an icon, a short hint | 500ms first delay, instant on neighbors for 1.5s; also on keyboard focus |
| Popover | small, non-blocking context (share, display options) | dismiss on outside click with no loss; primary control at the top |
| Modal | a focused task while staying on the page (create, edit) | blocks the page; traps focus, Esc closes; confirm completion with a toast. A sparse side flyout should become a modal |
| Toast | result, warning, undo | `dur-3`, bottom or top-center, 4-6s (longer with an action), never covers the primary action |
| Bottom sheet (mobile) | doing something without leaving context | any height; title, optional search, confirm and close; swipe down to dismiss |
| Page | large or permanent context | always a back button or breadcrumb |
| Tabs | more views of one object without sidebar sprawl | keep state per tab |

## Navigation
- The header has the logo at the start, a short nav that stays quiet, and one prominent CTA. Center the links when balance needs it, with small dropdowns on key items. A single-product site can fold everything into one menu.
- Mega menus with product images give context before the click.
- The footer mirrors the header. With few links, use the logo, one row of links, socials, then a legal line. Use multi-column footers only when there are many real links.
- For pagination, "Load more" keeps the footer reachable and gives control; infinite scroll suits endless feeds only.
- Always show the current location: the active nav item (indicator bar or filled background), the page title, and a breadcrumb for depth > 2.

## Search
- Make search prominent in apps. A collapsed search expands on click or `/` / `⌘K`.
- The placeholder names what's searchable: "Search plants, pots, or care guides".
- On focus, show recent searches, popular items, and personal suggestions, with the field ready to type.
- The field has a clear (×) button and shows a result count once results appear.
- Results show the query at the top with a back action, and highlight matches.
- Multi-screen apps get a command palette (results jump to screens and actions); single-screen apps get a floating search bar plus slide-out preview.
- With no results, say nothing matched, suggest corrections, and offer a way out (clear filters, browse).

## Pricing
- Show 3-4 plans, ordered by price. Very large or custom tiers shrink to an "Enterprise" link or a small contact button instead of a full column.
- Set the plan name small and the price large, with the billing cadence directly under it ("$24 / month, billed yearly") and the real yearly saving.
- One featured plan (tint background or accent border, tag) gets the solid button; the others get outline buttons.
- Feature lists use checkmarks, an excluded item or two to show the difference, and "Everything in Starter, plus…" for higher tiers.
- Separate price from features with a tint band or spacing instead of a hard rule.

## Carousels
- Show position as "3 / 12" on a dark blurred pill over the image or below it, with arrows beside it. The active dot can stretch into a timer for auto-advance.
- When there are too many items for the space, use a horizontally scrolling row instead of shrinking them.

## Empty states
- First run: an illustration or small animation, a message about the benefit ("Track every project in one place"), one or two concrete tips ("Import a spreadsheet", "Invite your team"), and one primary action ("Create project"). Hide tabs, filters, and sort until there's content to act on.
- No results: imagery, a plain statement that nothing matched, suggestions (spelling, broader filters), and an action that leaves the empty state.
- Cleared: a calm done state ("Inbox zero. Nice."), optionally the next useful action.
- Error: what failed, what was kept, and a retry.
- Lists hold empty states better than grids.

## Onboarding
- Let people learn by doing. Ask the use case first, then tailor the workspace and build the user's first real object with them ("Name your first project"). Say that every choice can be changed later.
- Skip the slideshow tour; people click through it and remember little.
- The workspace opens in its first-run state (Empty states above): one next step, with tabs, filters, and sort hidden until there's content.
- Leave an exit. Put Skip on every optional step, and a link to sign in for people who landed in signup by mistake.
- Guide progressively: one hint on the most important action, then a second hint or a small corner checklist of 3-5 steps.
- Show value before asking for effort. An insight or a result comes before any request for goals, profile details, or invitations.
- Home adapts to the user's stage. New users see setup plus a few starting points, returning users see today's work, and power users see their numbers first, then work and suggestions. Signup psychology lives in `principles/nudge.md`.

## Microcopy and small touches
- Every ambiguous icon gets a tooltip (timing in Overlays).
- Small avatars show a name tag on hover.
- Locked features reveal the upgrade detail on hover or tap ("Available on Team") instead of crossed-out text.
- Products that handle personal data say what they store and why, near where it's collected.
- 404 and other dead ends are a place for a little personality, plus a way back.

## Finishing
- Replace defaults with designed versions:
  - bullets with checkmarks or topic icons
  - testimonial quotes with large, colored quote marks as a graphic element
  - links with custom underlines (offset, thicker on hover)
  - checkboxes and radios with the brand color via `accent-color` or custom controls
- Accent bars add color without adding elements: a 3-4px top border on a featured card, a start-edge bar on the active nav item, a side stripe on an alert, a short bar under a section heading, a thin strip across the top of the app.
- Background texture comes from alternating section bands, a one-hue gradient, or low-opacity patterns and simple shapes. Decoration stays behind the content.
- Make stock components richer:
  - menus with sections, icons, descriptions, and shortcuts
  - table cells that combine fields, avatars, chips, and color
  - radio groups as selectable cards
  - hover on a keyword that previews a related image
- Add borders last. Try space, background, then shadow before adding a line (`layout.md`, Separation).
- Stickers break a boxy layout: a rounded star badge, a quirky display word, a hard offset shadow (`depth.md`, Without shadows).
