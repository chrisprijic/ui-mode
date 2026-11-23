# Sequence

Disclose progressively. Put each thing where its frequency and importance earn it a place, rather than showing everything at once.

- Place each action on a visibility ladder, from most to least visible: labeled button -> icon button -> revealed on hover, focus, or swipe -> inside a menu or popover. Place by how often it's used, how much it matters, and how much room there is. Values: `references/interaction-motion.md` (Disclosure).
- Match the container to the task's weight:
  - popover: light and non-blocking
  - modal: a focused task that keeps the page's context
  - toast: status or undo
  - sheet: a mobile task without leaving context
  - page: large or lasting work

  Values: `references/components.md` (Overlays).
- Build the quiet layer: tooltips on icon-only controls (delayed on first hover, instant on neighbours, shown on keyboard focus too), hover reveals for row actions, drawers for detail, and indicators for comments or unread items. Values: `references/interaction-motion.md` (Disclosure).
- Onboard in steps. Point at the one key action first, then offer a short checklist; skip the multi-slide intro.
- When a screen feels full, regroup and fix its edges first (**Scan**, **Space**). Hide only low-frequency items; hiding doesn't fix an unclear layout.
- Put the valuable thing on the surface. A banner promising "200 recipes" puts a tap between the user and the recipes, so show the top few directly.
- Advanced options start closed, and long but important text gets "Show more".
- Contextual controls appear when relevant (formatting while editing) and leave when they're not.

**Check:** Does every icon-only control have a tooltip and an accessible name? Is a rarely used action occupying prime space? Is anything used often buried?
