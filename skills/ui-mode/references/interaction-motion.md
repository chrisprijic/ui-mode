# Interaction and motion

Values for how the UI answers the user: feedback, undo, intent, disclosure, gestures, and motion tokens. Judgment lives in **Silence**, **Sequence**, and **Motion**.

## Feedback
Every action changes something the user can see. An unchanged screen reads as a failed action.

| Time to result | Show |
|---|---|
| ≤ 100ms | the result itself; it feels instant |
| 100ms–1s | a state change on the control (pressed, loading label) |
| > 1s | progress: a skeleton, streamed output, or a determinate bar |
| > 10s | percent or named steps, an estimate, and a way to leave and come back |

- **Confirm small actions in place.** "Copy link" swaps its icon for a check and shows a `Copied` chip for ~1.5s; "Save" fills the bookmark icon and bumps a count on the Saved tab.
- **Keyboard shortcuts get the same response as clicks:** the affected element flashes, moves, or changes state, and the shortcut's key hint pulses.
- **Skeletons match the final layout** so content drops in without shifting; shimmer at most once per 1.5s.
- **Optimistic UI.** Apply the change locally, sync in the background, and roll back with an error toast that offers Retry when the server refuses.
- **Slow buttons.** On press, switch the label to a progress verb ("Saving…"), keep the width fixed, and block a double submit.

## Undo
Undo beats confirmation: the user acts at full speed and still gets a way back.
- **Reversible actions act immediately** and show a toast with Undo for 5–8s. Archive, delete-to-trash, move, mark read.
- **Soft delete.** Deleted items go to a Trash or Recently deleted view and purge after 30 days.
- **Send delay.** Outgoing messages wait 5–10s in an outbox with Undo while the UI already reads "Sent".
- **Auto-save with version history** replaces Save/Cancel; settings apply as they change.
- **Confirm only what can't come back,** or what's new and expensive: wiring money, sending to a 10,000-person list, deleting an account. The dialog names the object and the scope ("Delete workspace Northwind and its 48 projects"). Its confirm button is solid red and repeats the verb.
- **Escalate the guard with the stakes:** undo toast → confirm dialog → type-the-name confirm → hold or swipe to confirm (for one-tap mobile actions with real money).

## Intent
Each interaction guesses what the user means. Pick a strategy and pay its price knowingly: waiting costs time, inferring costs certainty, acting early costs trust.
- **Wait** only when one target has competing gestures (single tap plays, double tap likes). Keep the window ≤ 250ms. Where the first action is harmless either way (click selects, double click opens), act on the first event with no delay.
- **Drop the competing gesture** when the delay hurts the main action more than the shortcut helps.
- **Infer from motion.**
  - Submenus stay open while the pointer travels toward them (a safe triangle), and switch when it drifts.
  - A collapsed sidebar opens only after the pointer rests at the edge ~300ms.
  - Dragging near a list edge auto-scrolls, faster the closer the pointer gets, with the drop position previewed.
- **Let the user signal.**
  - Buttons fire on release, so sliding off cancels.
  - Menu triggers open on press, so press-drag-release picks an item in one motion.
  - Pull-to-refresh, swipe-to-archive, and app switchers show progress and stay reversible until release; Escape cancels.

## Disclosure
Place each control on the **visibility ladder** by how often it's used, how much it matters, and the room you have. Higher rungs cost space; lower rungs cost discovery.
1. labeled button, always visible
2. icon button, always visible (with a tooltip)
3. shown on hover, focus, or swipe
4. inside a menu, popover, or overflow (⋯)

- **Tooltips:** show after 500ms hover or immediately on keyboard focus, then instantly on neighbors for 1.5s.
- **Advanced options start collapsed;** long text that matters gets "Show more".
- **Contextual controls** appear with their context and leave with it: opening a document swaps the nav for formatting tools. Animate them in and out (`dur-3`).
- **Fix crowding before hiding.** Rework grouping and alignment first; hide only what's still competing after that.

## Gestures
- **Every gesture has a visible twin:** swipe-to-archive also has an Archive button or a long-press menu.
- **Gestures speed up experts:** swipe actions, pull to refresh, swipe back. Teach each once with a hint, then rely on it.
- **Long press** is touch's context menu: dim and blur the rest, lift the element slightly (scale 1.03), show actions or a preview.
- **Touch has no hover.** Press states carry the feedback (fill one ramp step darker), and hover-only reveals get a tap or long-press path.
- **Swiped content has momentum** and settles with a small overshoot (`spring-bouncy`); rigid, linear swiping feels broken.

## Motion tokens
| Token | Value | Use |
|---|---|---|
| `dur-1` | 100ms | press, toggle, checkbox |
| `dur-2` | 160ms | hover, small reveal, tooltip |
| `dur-3` | 240ms | menus, popovers, toasts |
| `dur-4` | 320ms | sheets, modals, drawers |
| `dur-5` | 480ms | page and shared-element transitions |

- **Exit ≈ 70% of enter** (a 320ms sheet leaves in ~220ms).
- **Easing:** `ease-out` cubic-bezier(0.2, 0, 0, 1) for entering; `ease-in-out` cubic-bezier(0.4, 0, 0.2, 1) for moving on screen; `ease-in` cubic-bezier(0.4, 0, 1, 1) for leaving. Linear is for spinners and progress bars only.
- **Springs:** `spring-snappy` (stiffness 400, damping 30) for UI that must feel fast; `spring-bouncy` (stiffness 260, damping 18) for playful moments and swipes.
- **Tone:** fast curves feel efficient, springs feel playful, longer ease-in-out feels calm and premium. Pick one tone per product.
- **Direction carries meaning:**
  - up from the bottom: temporary (sheet, toast); it leaves the way it came
  - in from the trailing side: forward in a flow; back reverses it
  - with the finger: transitions follow the swipe direction
- **Continuity:** a tapped card grows into the next screen's header (shared element); the screen under a sheet scales to ~0.94 and dims; swipe-back slides the previous screen in from ~30% offset.
- **Entrances:** menus start 4–8px offset toward their trigger at 0 opacity and settle in `dur-3`. A product moment can have more character (a pop, a small overshoot), once per screen.
- **Restraint:**
  - loops are slow and simple; marquees are slow enough to read
  - preloaders stay under ~1s and hand off to the content
  - continuous effects (shimmering borders, ambient gradients) get a pause control
  - scroll-jacking: avoid; let the page scroll natively
- **Motion points at the product.** One hover that demonstrates the feature beats ambient decoration; dashboards keep motion to state changes, with charts as the place for richer hover.
- **`prefers-reduced-motion`:** replace movement with opacity fades ≤ `dur-2`, stop loops and parallax, keep state changes visible.
