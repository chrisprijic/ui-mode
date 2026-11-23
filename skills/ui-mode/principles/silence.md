# Silence

A UI that doesn't answer feels broken. Every action gets a response, and every screen has its full **state set**.

- **Design the whole state set.**
  - **Screens:** first run, empty, loading, partial, success, error, and offline where it applies.
  - **Buttons:** default, hover, pressed, focus, disabled, loading.
  - **Inputs:** default, focus, filled, error, warning, disabled.

  Values: `references/components.md` (Buttons, Forms).
- **Make empty states start something.** A first-run empty state shows a visual, says what the user gains, and offers one clear action, plus one or two tips or templates at most. Filters, tabs, and sort appear once there's content to act on. Values: `references/components.md` (Empty states).
- **Answer every action visibly within 100 ms.** A copy shows "Copied" at the button; a save fills its icon; a keyboard shortcut flashes its target. No visible change reads as failure. Values: `references/interaction-motion.md` (Feedback).
- **Fill each wait by its length.** Under 1 s: a state change. Over 1 s: a skeleton shaped like the content, or streamed output. Over 10 s: progress with steps, and let the user leave. Update optimistically for actions that almost always succeed.
- **Prefer undo to confirm.** Act immediately and offer undo (a toast, a trash, a grace period). Keep confirmation for irreversible, costly, or unusual actions, and make it name the object and the consequence. For high-stakes taps, a deliberate gesture (hold or slide) prevents accidents. Values: `references/interaction-motion.md` (Undo).
- **Make errors say what happened and what to do.** Place the message next to its cause, in words as well as color, and keep the user's input.
- **Answer "where does it stand?" after a commit.** Lead with status and time, then whose turn it is, the people involved, and the stages left. Values: `references/processes.md` (After the commit).
- **Tell assistive tech too.** Toasts and async results use a live region; focus moves into dialogs when they open and returns when they close.

**Check:** For each action, what does the user see within 100 ms? For each list, what does the empty state look like? For each failure, is there a message with a way forward? After each commit, does the user know where things stand?

**Values:** `references/interaction-motion.md`, `references/components.md`.
