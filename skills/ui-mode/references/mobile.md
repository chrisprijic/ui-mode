# Mobile apps

A phone screen is a different medium, not a smaller desktop. Each screen has one job, scrolls in one direction per section, and keeps its actions under the thumb.

## Size and reach
- **Type and spacing stay the same as desktop or grow.** iOS body text is 17pt (macOS is 13pt); small screens usually need larger targets and more space, not less.
- **Touch targets:** 44×44pt on iOS, 48×48dp on Android. The WCAG 2.2 AA floor is 24×24 CSS px with spacing; treat that as a minimum, never the target.
- **Thumb zone:** frequent and primary actions sit in the bottom third. A top-heavy layout photographs well and works worse one-handed. Lean secondary action columns toward the right edge, where most thumbs rest.
- **Sticky commit:** long detail pages (a product, a ticket, a rental) pin a bottom bar with the total or quantity and the primary button, so the action is reachable after reading. Pad it for the home indicator (~34pt safe area).
- **Fitts's law:** a target's size and distance set its speed. Full-width bottom buttons and whole-screen swipe areas are the fastest controls on a phone.
- **Hick's law:** each extra choice slows the decision. Cut options before shrinking them.

## Tab bar
- **3–4 tabs is ideal, 5 the most.** A floating bar or a broken-out key action is fine.
- **Top-level destinations only** (Jakob's law: users expect what other apps taught them): home, browse or search, create, inbox, profile. Help, settings, sign out, legal, and back live in the profile or the top bar.
- **A create tab** earns its slot only when creating is the app's most frequent job, and it sits in line with the others. A raised circled "+" for an occasional action steals the bar's best spot.
- **Hit areas:** spread icons evenly, each target at least 44×44pt, aligned on one baseline.
- **Sizes:** icons 24pt; labels 10–12pt on one line. The bar sits above the home indicator. Check it at the smallest and largest supported widths.
- **The active tab changes at least two things:** outline → filled plus the accent color, or color plus a heavier label. One change alone is too easy to miss.
- **Inactive icons stay readable at 3:1 or better** against the bar (WCAG non-text contrast). The accent belongs to the active tab only; the bar stays neutral, with no color per tab.
- **One icon style:** outlined at rest, filled when active, all from one library at one stroke weight. Pick plain, familiar glyphs (a magnifier for search).
- **The profile tab can use the user's photo.**
- **Labels:** show them unless every icon is unmistakable to this audience; show them always for broad or less tech-fluent audiences, dark enough to read.
- **Badges:** top-right of the icon, ringed in the bar's background color, with a legible count. Badge only what needs attention, or people learn to ignore all of them.
- **Separate the bar from content** with a 1px `border`, a tinted surface, or a soft upward shadow. A translucent, blurred bar is optional.
- **Tap feedback:** a quick color or scale change and an indicator that glides to the new tab. Switching tabs cross-fades or cuts; sliding belongs to pushing deeper.
- **Hide the bar inside focused flows** (checkout, compose, onboarding) and bring it back after.

## Other navigation
- **Too many destinations for a tab bar:** make a list of sections the home screen, with recents at the top and counts on the trailing side. That frees the bottom for one large search or create button.
- **Top bar:** contextual per screen. Title, back, and one or two actions (notifications, ⋯).
- **Contextual actions replace navigation while a task is open:** composing hides the tab bar and shows formatting and Send; a picker shows only Cancel and Done. Animate the swap (`dur-3`).

## Layout
- **One screen, one job** (home is the exception). When a screen needs a second job, give it a new screen or a sheet rather than a denser layout.
- **One direction per section:** a section stacks vertically or scrolls horizontally off the edge, never both.
- **Desktop shows many modules at once; mobile shows one per screen.**
- **Building blocks:** cards (they do the grouping that whitespace does on desktop), text and links, images, and inputs.
- **One card level.** A card inside a card stacks padding and radius; group the inner items with space instead.
- **Bottom sheets** do a task without leaving context: any height, with a title, optional search, Done/✕, and swipe-down to dismiss. A "+" can open a short action sheet or an input already focused.

## Gestures and motion
- **Swipe back:** the previous screen slides in from ~30% offset as the current one follows the finger.
- **Sheets:** the screen behind scales to ~0.94 and dims; dismissal reverses it.
- **Pull down to search** on list screens, or swipe up from a home screen to search.
- **Long press** opens actions or a preview (`interaction-motion.md` Gestures).
- **Horizontal scrollers** have momentum and snap with a slight overshoot.
- **Page dots** morph between positions instead of jumping.
- **Shared-element transitions:** a card expands into the next screen in the direction of travel, then its content fades up.
- **Every gesture has a button or menu twin.** Teach a gesture once, then rely on it.
- **Swipe or hold to confirm** one-tap actions that move money or can't be undone (paying, sending a transfer).
- **No hover:** press states do the feedback (one ramp step darker) and hover-only reveals get a tap path.

## Onboarding and empty states
- **Onboarding is the app's best first impression:** one idea per screen, motion that follows the swipe, and Next that works by tap or swipe.
- **The fastest tutorial is choosing:** pick a few interests or a goal, then land in the real app with it tailored.
- **First run:** point at the main action with one callout and give the empty screen a visual, a sentence on what will appear, and the button that fills it.
- **No results:** a visual, a plain statement that nothing matched, spelling or broader-search suggestions, and a way out (clear filters).

## Recaps and stories
- **Tap-through stories** suit music, motion, and narrative; they're the slowest way to read numbers. Pair them with a scrollable summary that works like a dashboard.
- **Extend a pattern users know** before inventing one: a recap in a familiar scrolling feed beats a novel format.
- **Sharing:** one always-visible share button at the bottom whose menu picks the scope (this card, the whole recap).
- **Implicit controls:** tap-to-pause is learned behavior, so an explicit pause button is clutter.
