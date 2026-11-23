# Mobile apps

A phone screen is its own medium; don't shrink a desktop layout onto it. Each screen has one job, scrolls in one direction per section, and keeps its actions under the thumb.

## Size and reach
- Type and spacing stay the same as desktop or grow. iOS body text is 17pt (macOS is 13pt), and small screens usually need larger targets and more space.
- Touch targets are 44×44pt on iOS and 48×48dp on Android. The WCAG 2.2 AA floor is 24×24 CSS px with spacing; treat that as a minimum, never the target.
- Frequent and primary actions sit in the bottom third, the thumb zone. A top-heavy layout photographs well and works worse one-handed. Lean secondary action columns toward the right edge, where most thumbs rest.
- Long detail pages (a product, a ticket, a rental) pin a sticky bottom bar with the total or quantity and the primary button, so the commit stays reachable after reading. Pad it for the home indicator (~34pt safe area).
- Per Fitts's law, a target's size and distance set its speed. Full-width bottom buttons and whole-screen swipe areas are the fastest controls on a phone.
- Each extra choice slows the decision (Hick's law), so cut options before shrinking them.

## Tab bar
- 3-4 tabs is ideal, 5 the most. A floating bar or a broken-out key action is fine.
- Tabs hold top-level destinations only (Jakob's law: users expect what other apps taught them): home, browse or search, create, inbox, profile. Help, settings, sign out, legal, and back live in the profile or the top bar.
- A create tab earns its slot only when creating is the app's most frequent job, and it sits in line with the others. A raised circled "+" for an occasional action steals the bar's best spot.
- Spread icons evenly, each target at least 44×44pt, aligned on one baseline.
- Icons are 24pt and labels 10-12pt on one line. The bar sits above the home indicator. Check it at the smallest and largest supported widths.
- The active tab changes at least two things: outline to filled plus the accent color, or color plus a heavier label. One change alone is too easy to miss.
- Inactive icons stay readable at 3:1 or better against the bar (WCAG non-text contrast). The accent belongs to the active tab only; the bar stays neutral, with no color per tab.
- Use one icon style, outlined at rest and filled when active, all from one library at one stroke weight. Pick plain, familiar glyphs (a magnifier for search).
- The profile tab can use the user's photo.
- Show labels unless every icon is unmistakable to this audience. For broad or less tech-fluent audiences, always show them, dark enough to read.
- Badges sit top-right of the icon, ringed in the bar's background color, with a legible count. Badge only what needs attention, or people learn to ignore all of them.
- Separate the bar from content with a 1px `border`, a tinted surface, or a soft upward shadow. A translucent, blurred bar is optional.
- On tap, show a quick color or scale change and an indicator that glides to the new tab. Switching tabs cross-fades or cuts; sliding belongs to pushing deeper.
- Hide the bar inside focused flows (checkout, compose, onboarding) and bring it back after.

## Other navigation
- With too many destinations for a tab bar, make a list of sections the home screen, with recents at the top and counts on the trailing side. That frees the bottom for one large search or create button.
- The top bar is contextual per screen: title, back, and one or two actions (notifications, ⋯).
- Contextual actions replace navigation while a task is open. Composing hides the tab bar and shows formatting and Send; a picker shows only Cancel and Done. Animate the swap (`dur-3`).

## Layout
- Each screen does one job (home is the exception). When a screen needs a second job, give it a new screen or a sheet rather than a denser layout.
- A section stacks vertically or scrolls horizontally off the edge, never both.
- Desktop shows many modules at once; mobile shows one per screen.
- The building blocks are cards (they do the grouping that whitespace does on desktop), text and links, images, and inputs.
- Keep to one card level. A card inside a card stacks padding and radius; group the inner items with space instead.
- Bottom sheets do a task without leaving context: any height, with a title, optional search, Done/✕, and swipe-down to dismiss. A "+" can open a short action sheet or an input already focused.

## Gestures and motion
- On swipe back, the previous screen slides in from ~30% offset as the current one follows the finger.
- Behind a sheet, the screen scales to ~0.94 and dims; dismissal reverses it.
- Pull down to search on list screens, or swipe up from a home screen to search.
- Long press opens actions or a preview (`interaction-motion.md` Gestures).
- Horizontal scrollers have momentum and snap with a slight overshoot.
- Page dots morph between positions instead of jumping.
- In a shared-element transition, a card expands into the next screen in the direction of travel, then its content fades up.
- Every gesture has a button or menu twin. Teach a gesture once, then rely on it.
- Swipe or hold to confirm one-tap actions that move money or can't be undone (paying, sending a transfer).
- There's no hover, so press states do the feedback (one ramp step darker) and hover-only reveals get a tap path.

## Onboarding and empty states
- Onboarding is the app's best first impression: one idea per screen, motion that follows the swipe, and Next that works by tap or swipe.
- The fastest tutorial is a choice. Pick a few interests or a goal, then land in the real app with it tailored.
- On first run, point at the main action with one callout and give the empty screen a visual, a sentence on what will appear, and the button that fills it.
- A no-results screen gets a visual, a plain statement that nothing matched, spelling or broader-search suggestions, and a way out (clear filters).

## Recaps and stories
- Tap-through stories suit music, motion, and narrative, but they're the slowest way to read numbers. Pair them with a scrollable summary that works like a dashboard.
- Extend a pattern users know before inventing one; a recap in a familiar scrolling feed works better than a novel format.
- For sharing, one always-visible share button at the bottom opens a menu that picks the scope (this card, the whole recap).
- Tap-to-pause is learned behavior, so an explicit pause button is clutter.
