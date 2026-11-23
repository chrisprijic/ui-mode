# Tells

A **tell** is a visible symptom of a UI nobody decided. This is the checklist for the review sweep (steps 3–4 of `playbooks/review.md`) and every build's self-review. Mark each row **hit** or **clear** by its ID; the review's Sweep line lists every hit ID, so no row goes unread. Fixes are short; the referenced section holds the values.

## Think

| # | Tell | Principle | Fix |
|---|---|---|---|
| T1 | A part copied from another product whose reason doesn't hold here (workspace switcher in a single-workspace app, two Help entries) | Opinion | Keep only what the user expects at that spot; delete the rest |
| T2 | Shell polished, feature thin (perfect sidebar around a stub editor) | Intent | Build the feature first; size the shell to what it holds |
| T3 | The main intent's control isn't the most prominent element | Intent | Make it the primary; demote everything around it |
| T4 | Color or polish carries all the hierarchy; grayscale version is flat | Iterate | Back to grayscale; rank with size, space, and contrast first |
| T5 | UI promises features that don't exist (dead tabs, "coming soon" buttons) | Iterate | Ship only what's built |
| T6 | Every concept became a page reachable only from the sidebar | Flow | Make objects clickable where they appear, with hover previews |
| T7 | One screen doing several jobs; a desktop layout squeezed onto mobile | Flow | One job per screen; use a sheet or a new page |
| T8 | Complexity left with the user (date as three selects, manual unit conversion) | Flow | Tesler: the system carries it (a typeable calendar, computed values) |
| T9 | Onboarding is a slideshow of feature claims | Flow | Ask the use case, build the first real object with them (`components.md` Onboarding) |
| T10 | Related choices split across screens; results hidden while choosing | Decide | One surface for connected choices, results in view (`components.md` Filters) |
| T11 | Commit button hides the outcome ("Submit", "Continue", "Apply") | Decide | Name action, object, and amount: "Book desk · Thu 9:00", "Show 18 bikes" |
| T12 | Asks for a value the user doesn't know (max loan amount, wattage) | Decide | Ask what they know (monthly payment, room size) and compute the rest |
| T13 | A range where one number per option is possible ("$40–60") | Decide | One number per option, with its context |
| T14 | Paywall leads with a feature list and a monthly price | Decide | Lead with how the trial runs, as a timeline (`processes.md` Selling) |
| T15 | The objection that stalls the choice goes unanswered at the CTA | Decide | Answer it under the button: "Cancel before Jun 3, pay nothing" |
| T16 | Free typing where choosing works (country, job role, recent payee) | Decide | Common options as taps or autocomplete, plus "Other" |
| T17 | New and power users see the same home | Decide | Adapt home by stage: setup → today → stats |

## See

| # | Tell | Principle | Fix |
|---|---|---|---|
| T18 | Everything emphasized: every chip colored, bold everywhere | Emphasis | Rank, then quiet the neighbors (`color.md` States) |
| T19 | Hierarchy carried by size alone | Emphasis | Rank with weight and the `fg-1/2/3` tiers (`color.md` Neutrals) |
| T20 | More than ~6 font sizes on one screen | Type | Snap every size to the scale (`type.md` Scale) |
| T21 | UI text under weight 400 | Emphasis | 400+; de-emphasize with `fg-2`/`fg-3` or a smaller size |
| T22 | Bold heading above a washed-out paragraph | Emphasis | Size carries the heading; paragraph at `fg-1` |
| T23 | `Label: value` pairs everywhere | Emphasis | Format values to explain themselves, or fold the label into the value ("Due Fri") |
| T24 | Several solid buttons in one view | Emphasis | One primary; secondary outline or tint; tertiary text (`components.md` Buttons) |
| T25 | A destructive action styled solid, or equal to the main action | Emphasis | Red text or outline, set apart; solid red only on its confirm step |
| T26 | Solid icons louder than the text beside them | Emphasis | Icons at `fg-2` (`imagery.md` Icons) |
| T27 | Gray text on a colored background | Palette | Same-hue text from the ramp (`color.md` Contrast) |
| T28 | Palette from a generator or model: saturated, clashing, blue on everything | Palette | Neutral layers plus one ramp; color only where it means something |
| T29 | Shades invented mid-build; hex values tuned by eye | Palette | Ramps first, in OKLCH, frozen (`color.md` Ramps) |
| T30 | Washed-out light shades or muddy dark ones | Palette | Rebuild the ramp's ends (`color.md` Ramps) |
| T31 | Pure `#000` (or `#fff` on dark) body text | Palette | `fg-1` tinted neutral (`color.md` Neutrals) |
| T32 | 1px black or high-contrast borders | Palette | `border` neutral, or no border (`layout.md` Separation) |
| T33 | White text on a mid-tone fill under 4.5:1 | Palette | Darken to step 600+, or dark text on a 50/100 tint |
| T34 | Meaning carried by color alone | Palette | Add an icon, label, or weight change |
| T35 | Destructive action in the brand color | Palette | Red ramp, always |
| T36 | Dark mode made by inverting light mode | Palette | Separate dark palette (`color.md` Dark mode) |
| T37 | Colored icons throughout navigation | Palette | Neutral icons; color only for active or status |
| T38 | Borders around everything; boxes inside boxes | Subtract | Separate with space, then a background step (`layout.md` Separation) |
| T39 | Labels the layout already implies | Subtract | Remove them |
| T40 | Glow, multi-hue gradients, decorative shadows | Subtract | One hue or none; elevation tokens only |
| T41 | Cards that do nothing; the same KPI cards repeated across pages | Subtract | Delete or merge; pick a better visualization |
| T42 | Too many options (5+ plans, 6+ tabs) | Subtract | 3–4 plans; ≤5 tabs |
| T43 | Numbers left-aligned in tables or stats | Scan | Right-align with `tabular-nums` |
| T44 | A centered block longer than ~3 lines | Scan | Left-align it, or cut it to ≤3 short lines |
| T45 | Fixed value sets as plain text; people as name strings | Scan | Chips; avatars |
| T46 | Dense content left undifferentiated | Scan | Avatars, chips, icons, grouping before more whitespace |
| T47 | Raw data formats (ISO timestamps, `1204.5`, unbounded strings) | Scan | Relative dates, units, currency formatting, truncation with full value on hover |
| T48 | A label equally far from two inputs | Space | Outer gap ≥ 2× inner gap (`layout.md` Spacing) |
| T49 | Off-scale values (13px, 22px, 37px) | Space | Spacing tokens |
| T50 | Everything stretched to the viewport; sidebar in % | Space | Max-widths; fixed sidebar; split into columns (`layout.md` Width) |
| T51 | Cramped everywhere, or huge gaps around huge text | Space | Start generous, tighten; pull related items together |
| T52 | Lines over ~75 characters; any paragraph without a `max-width` | Type | Every text block capped at 45–75ch, target ~66ch |
| T53 | Tight body line height or loose heading line height | Type | Body 1.5–1.6; headings 1.15–1.25 (`type.md` Rhythm) |
| T54 | Mixed sizes on one line centered vertically | Type | Align to the baseline |
| T55 | All-caps text at default tracking | Type | +0.06 to +0.1em |
| T56 | Display headlines (≥36px) at default tracking | Type | −0.01 to −0.02em |
| T57 | Every link colored in link-dense UI (nav, tables), or browser-default link blue | Type | Weight or `fg-1`, color on hover (`type.md` Links) |
| T58 | Links inside body text indistinguishable from text | Type | Color plus underline |
| T59 | Display or script face used for body or UI text | Type | A neutral UI sans for running text (`type.md` Fonts) |
| T60 | Three or more font families | Type | One family, two at most, plus optional mono |
| T61 | Inconsistent shadows; more than one light direction | Depth | One light from above; `shadow-1…5` (`depth.md` Elevation) |
| T62 | Heavy default shadows that read before the content | Depth | Elevation tokens: low alpha, more blur, tinted color |
| T63 | Shadows doing the elevation work in dark mode | Depth | Lighter surface plus 1px border (`depth.md` Dark mode) |
| T64 | Emoji as the icon system; mixed icon styles | System | One icon library, one stroke weight (`imagery.md` Icons) |
| T65 | Mixed radii; square images beside rounded buttons | System | One control radius; nested = outer − padding (`layout.md` Radius) |
| T66 | Raw values with no token | System | Tokenize, or map to the repo's system |
| T67 | Stepper for a value the user knows; slider for frequent precise entry | Scan | Pick by how the value is known (`components.md` Input choice) |
| T68 | A dropdown hiding 2–6 options; filter and sort buried in menus | Scan | Visible segments or cards; quick-filter chips plus Filter and Sort |
| T69 | Tab bar: active tab differs by one cue; inactive icons under 3:1; a color per tab | Emphasis | Two active cues; inactive ≥3:1; neutral bar (`mobile.md`) |
| T70 | Tab bar holds Help, Logout, Back, or a logo; a raised "+" for a rare action | Opinion | Top-level destinations only; inline create only when it's the top job |
| T71 | Tab bar blends into the content above it | Depth | Hairline border, tinted fill, or soft upward shadow |
| T72 | Rating far from the product name; price below the fold | Scan | Rating beside the title; price near the top (`processes.md` Selling) |

## Behave

| # | Tell | Principle | Fix |
|---|---|---|---|
| T73 | Only the happy path exists | Silence | Empty, loading, partial, error, success, and first-run states |
| T74 | Controls missing hover, pressed, disabled, or loading; inputs missing focus or error | Silence | Full state sets (`components.md` Buttons, Forms) |
| T75 | No visible focus, or `outline: none` with no replacement | Silence | Focus ring: 2px, ≥3:1, 2px offset (`components.md` Buttons) |
| T76 | Empty states that are blank or say "No data" | Silence | What will appear here, why it helps, one action (`components.md` Empty states) |
| T77 | Actions with no feedback (copy, save, shortcut, toggle) | Silence | A visible change within 100ms (`interaction-motion.md` Feedback) |
| T78 | Confirm dialog on a routine, reversible action | Silence | Act, then an undo toast; confirm only the irreversible (`interaction-motion.md` Undo) |
| T79 | A frozen spinner or dead screen while waiting | Silence | Optimistic update, streaming, or a skeleton that matches the layout |
| T80 | Errors that only turn a border red, or that clear the user's input | Silence | Message under the field: what happened and how to fix; keep the input |
| T81 | Dead controls: a button with no handler or link | Silence | Wire it or remove it |
| T82 | An edit or settings form that opens blank instead of showing saved values | Silence | Prefill current values (`components.md` Forms) |
| T83 | Icon-only buttons with no tooltip or accessible name | Sequence | `aria-label` plus a tooltip (`components.md` Finishing) |
| T84 | Everything visible at once | Sequence | Order by frequency and importance; reveal on hover, menu, or popover |
| T85 | Primary content behind a button or promo banner | Sequence | Promote it to a section; show the top items directly |
| T86 | Wrong container (a sparse flyout; a blocking modal for a quick setting) | Sequence | Choose by context size (`components.md` Overlays) |
| T87 | Linear easing; rigid swipes; full-page slides between tabs | Motion | Motion tokens; momentum; cross-fade tabs (`interaction-motion.md` Motion tokens) |
| T88 | Slow or showy motion that delays the content (> `dur-5`, long travel) | Motion | ≤ `dur-5` (480ms), ≤ 16px travel, purpose-first |
| T89 | Scroll hijacking (wheel handlers, snap-per-section) | Motion | Native scroll |
| T90 | No `prefers-reduced-motion` variant | Motion | Swap movement for opacity, or cut it |
| T91 | Blank form with no defaults | Nudge | Pre-fill the most common honest choice |
| T92 | Progress that starts at 0% after real work is done | Nudge | Count completed steps; name each stage |
| T93 | A wall before any value; results blurred behind signup | Nudge | Real partial result first, then the ask |
| T94 | A cost shown alone (an add-on on its own page) | Nudge | Beside the item it belongs to, with its relative size |
| T95 | Heavy or vague CTA ("SUBMIT", "Subscribe") | Nudge | Sentence case, owned, specific, total in the button |
| T96 | Fabricated proof or urgency (resetting timers, invented stock, fake "was" prices, vague stars) | Nudge | Only true, current, specific claims ("4.7 · 1,203 reviews") |
| T97 | Guilt-trip or hidden decline (shaming copy, tiny faint link) | Nudge | Neutral "No thanks" with equal ease |
| T98 | A paid add-on pre-checked | Nudge | Unchecked by default; price and terms visible |
| T99 | Blank panel when search gets focus | Silence | Recent, popular, and suggested items |
| T100 | Process status as a data dump | Silence | Status and time first, whose turn it is, the people, a stage timeline (`processes.md` After the commit) |
| T101 | Draft and live look the same | Silence | State badge on the object; "Unpublished changes" while editing something live |

## Ground

| # | Tell | Principle | Fix |
|---|---|---|---|
| T102 | Designed only for ideal content | Reality | Test the longest, the empty, and the ugliest; truncate with a full-value tooltip |
| T103 | Uploads distort, crop badly, or bleed into the page | Reality | Fixed aspect + `object-fit: cover`; inner hairline (`imagery.md` Uploads) |
| T104 | Stock or placeholder imagery; the product shown tiny or not at all | Reality | Real product, cropped to the part that matters |
| T105 | Text across an image's focal point; contrast that varies across the image | Reality | Move the text; scrim or gradient (`imagery.md` Text on images) |
| T106 | Small icons scaled up; full screenshots shrunk to illegibility | Reality | Icon in a tinted shape; crop or simplify the screenshot |
| T107 | Chart without axes or gridlines; smoothed curves; latest point faded; rounded bar tops | Reality | `components.md` Charts |
| T108 | Domain nonsense (a "Withdraw" button on a gift card) | Reality | Check what the real object can do |
| T109 | Designed on a canvas taller than the real viewport | Reality | Judge the first screen at 1440×900 |
| T110 | Touch targets under 44pt; key mobile actions at the top | Reality | 44pt+; primary action in thumb reach |
| T111 | A gesture with no button fallback; hover-only on touch | Reality | Provide both |
| T112 | Infinite scroll trapping the footer | Reality | "Load more" or pagination |
| T113 | Strings that break at +30% length | Reality | Flexible containers; test long translations |
| T114 | No layout for small screens: fixed widths, multi-column rows with no breakpoint, overflow at 390px | Reality | Stack below ~768px; fluid widths; check 390×844 (`layout.md` Responsive) |
| T115 | A pattern with no shipped reference; a showcase-only layout | Borrow | Take the structure from a real product and name it |
| T116 | Alternating text/image rows all the way down | Borrow | Pick each section's layout by what its content does (`landing.md`) |
| T117 | Sterile and imageless; would fit any product | Soul | Personality, imagery of the user's world, plain specific copy |
| T118 | Library defaults everywhere (disc bullets, stock checkboxes, plain tables) | Finish | `components.md` Finishing |
| T119 | A long page on one flat background | Finish | Alternate section surfaces; subtle single-hue texture |
| T120 | Icons over photos that vanish on light images | Reality | A filled backing shape; test on the brightest image |
| T121 | Catalog photos with mixed backgrounds, light, and framing | Reality | One image spec (`imagery.md` Catalog) |
| T122 | Appetite photos shrunk so more rows fit above the fold | Reality | The photo leads the card; the fold is a bar, not a quota |
| T123 | Name and price printed over an uploaded photo | Reality | Text below the photo |
| T124 | A long mobile detail page with no sticky action | Reality | Sticky bottom bar with price and CTA (`mobile.md`) |
