# Flow

Design the path through screens, not screens in isolation.

- **Design each screen from its neighbours.** Ask how the user arrived and what they most likely do next, and make that next step one action away. Chain small decisions (pick a template → add people → send) so each step feels like the obvious move.
- **Move complexity into the system (Tesler's law).** Some complexity can't be removed; the question is who carries it. A date field that accepts typing and opens a calendar beats three dropdowns; a pasted address that splits itself beats five fields.
- **Link every object you show.** When a task shows its project and its assignee, both open their own pages, and hovering shows a preview card with what matters from here. An object reachable only from the sidebar means links are missing.
- **Give each screen one job.** Home may summarize; elsewhere, more needs mean a new page or a sheet, not a denser layout.
- **Onboard by making the first real thing.** Ask what they're here to do, branch on it (solo vs team), build their first project with them, and say that every choice can change later. Values: `references/components.md` (Onboarding).
- **Extend familiar patterns (Jakob's law).** For a new format, start from the nearest pattern users already know and change only what the content demands.

**Check:** From each screen, is the next likely action one step away? Can every object shown be opened directly from where it appears?
