# Dashboards and SaaS apps

An app is a container for the user's data and the work they do on it. Apps fail far more often from disorganization than from ugliness, so most of the craft is orchestration: what shows, where, and when. If a screen needs a manual, it's doing too much; give each screen one job.

## Sidebar
- **Holds only what's global:** navigation, the account, and search. Account and search may live in a top bar instead.
- **Top: the account switcher,** an avatar, the workspace name, and a chevron that says it opens. Its popover holds what people expect there: switch workspace, status, pause notifications, sign out. Show an email only when it tells accounts apart.
- **Links:** a recognizable icon and a one- or two-word title. That pairing survives collapsing and leaves room for counts and a `New` chip.
  - Group links by what they're used for; the grouping itself replaces generic section headers.
  - Mark the active link with a filled background or a leading bar, plus a weight or color change.
  - Tuck rarely visited pages into an expandable group.
- **Bottom:** settings and help. Fold billing and usage into settings.
- **Optional:** team avatars with Manage, integrations, an announcement card.
- **Page-irrelevant data stays out.** Traffic stats don't belong beside the user while they edit Domains.
- **Design the collapsed state** (icons with tooltips) and the mobile state (a sheet or the home screen).

## Main area
- **The top of the page holds the page's verbs** (a primary `New invoice`) or its local navigation. Spend the first screen on what this domain cares about most: open tasks for a project tool, cash position for a finance tool.
- **Tier the modules** high, mid, and low. High goes top-left. Follow the grid strictly, since an app uses the whole screen; pick the arrangement that leaves no awkward holes, and fill a hole with a module the domain needs, never filler.
- **Domain sense:**
  - Every module states its purpose and context: a subscription card shows the plan, the price, and the renewal date.
  - Actions fit the object: a paid invoice offers Refund and Download, not Send reminder.
  - Title each card by what it shows.
- **Merge and cut.** Fold related modules together (growth rate into the revenue chart; Freeze into the card widget). Cut duplicate controls, modules that show nothing new, and features outside the domain.
- **Primary content is a section, not a button.** If tasks are the point, they're on the page.
- **Low-interest data** sits behind a ⋯ menu or a details panel.
- **Density:** app type runs smaller with small steps between sizes, rarely above `text-2xl` (24px).
- **Four building blocks** compose nearly every app screen, even dense settings: lists/tables, cards, inputs, and tabs.

## Let the data shape the screen
- Fixed value sets → chips. Numbers → right-aligned with tabular numerals. Long text → truncated with a full-value tooltip. Inactive rows → muted.
- People → avatars. Events over time → a timeline in a side panel or a wide column.
- Time series → a summary chart instead of a timestamp column to scan.
- Give flat data a shape: in/out money as bars above and below a zero line, regional data as a shaded map, a row of percentage KPIs as small rings.
- Report the real number ("72% complete"), not a vague status ("In progress").
- **Color comes from the data:** red for what's overdue or failing, status colors that match their meaning, neutral everywhere else. Marketing pages can afford decorative color; app screens use color to say something.
- **Alerts read in order:** severity icon, then amount, date, and source.

## Signs of an inexperienced app
1. **The data didn't shape the screen** (see above).
2. **The wrong things are visible.** Order by frequency, importance, and space (`interaction-motion.md` Disclosure): share lives in a popover, secondary row actions appear on hover, onboarding starts with one pointer instead of a modal of bullet points.
3. **The quiet layer is missing:** tooltips on icons, copy-on-hover, comment markers, drawers, hidden states, and feature announcements. Assume nobody knows what an icon means. A new feature rarely needs its own page.

## Structure across screens
- **Every object named on screen is a link to that object.** A task's project and owner open their own pages, and a hover card previews what matters from here. When a page can be reached only from the sidebar, people take four clicks to answer one question.
- **Tabs add views** of one object without growing the sidebar.
- **States:**
  - empty dashboard: a visual, what will appear here, and the first action
  - long jobs (builds, imports, exports): immediate status, then progress, then a result
  - integrations: connecting, connected, failed with the reason and Retry
- **Flows chain small decisions:** New → pick a template → fill the essentials → share. After creating a team space, offer to add members, with Skip.

## Motion
Keep it calm and tied to state: optimistic removal, hover, status changes, toasts rising from the bottom. Charts are where motion can be richer: hover values, a delta bubble, dimming the other series.

## Repairing a generated app (highest payoff first)
1. **Layout and cards,** where generators are weakest. Restructure into tabs or two columns. In busy rows, move actions into a ⋯ menu, turn text chips into icons, and put the key metric on the right. Turn a sparse flyout into a modal with advanced options collapsed.
2. **Color.** Neutralize backgrounds and icons on purpose; let small charts and status carry the color.
3. **Repeats.** The same KPI cards on several pages, or cards that show nothing, get deleted or merged.
4. **Billing:** plans (`components.md` Pricing), billing email, payment method, usage.
5. **Cheap, high-value features:** a compare-period toggle on charts, an icon row of key facts, a map view where location matters.
