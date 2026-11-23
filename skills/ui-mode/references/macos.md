# Desktop and macOS apps

A good desktop app behaves like part of the computer: it shows up where the user already is, does its job, and gets out of the way. Measure it by how little window it needs.

## Outside the main window
- Design the surfaces beyond the window: menu-bar popovers, floating panels, notifications, and secondary windows. A meeting app can surface a small join panel at start time; a clipboard tool can slide a strip up from the screen edge.
- For a summon-and-dismiss panel (the launcher pattern), a global shortcut opens a centered, draggable panel with the input focused. Escape or losing focus closes it.
- Quick capture:
  - a borderless window without traffic lights
  - one focused input, an optional drop zone, and buttons with their key hints (`↩ Save`, `esc Cancel`)
  - native vibrancy/blur for the background
  - on Return it shrinks into a brief confirmation (`Saved to Inbox`) that slides away; Escape discards

## Layout
Follow the system utility pattern (file browser, notes, reminders, settings):
- Global actions go in the toolbar, navigation in the sidebar, content in the center. Each app does one job.
- Traffic lights belong to the layout, aligned with the toolbar or sidebar content like any other control.
- The top ~50px is the drag area. Keep it sparse so the window is easy to grab and the content breathes.
- Skip the sidebar when navigation is trivial (one list plus search). Ask what the least chrome is that lets the content lead.
- Disclose progressively. Filters appear once there's content, and metadata appears in an inspector on selection.

## Behavior
- Keep the UI optimistic. Move, delete, and rename apply instantly and sync in the background (`interaction-motion.md` Feedback).
- Search is always one keystroke away.
  - Multi-view apps: a command palette (⌘K) whose results jump to views and run actions.
  - Single-view apps: a floating search field with a slide-out preview of the selection.
  - Search content, not only titles (text inside documents and images), and show a result count and a clear (✕) button.
- Work keyboard first:
  - every shortcut produces a visible change: the affected item moves, highlights, or animates, and the menu item flashes
  - a shortcut sheet opens with ⌘/ (and lives in Help)
  - show key hints beside buttons and in menus; animate them briefly when first taught
- Support drag and drop everywhere: into the app, within it, and out to Finder or other apps.
- Offer a system Share button and a floating action bar over previews (Copy, Find, Delete).
- Onboarding exists on desktop too. End it by having the user perform the shortcut it just taught.
- Follow native conventions. The default button responds to Return and Cancel to Escape, and the destructive button is never the default.

## Light and dark
- Follow the system appearance and switch live.
- Build dark mode as its own palette instead of inverting light mode. Dark surfaces need wider lightness steps between layers, light mode narrower ones. The two share a character and differ in values. Values in `color.md`.
