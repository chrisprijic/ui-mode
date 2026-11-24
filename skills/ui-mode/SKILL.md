---
name: ui-mode
description: UI design mode that sets the process and done bar for UI work. Use for /ui-mode build, /ui-mode review, or any request to make, restyle, polish, critique, or audit a UI.
license: MIT
---

# UI mode

An interface built in this mode is decided throughout, with nothing added as decoration:
- every element has a reason the user would recognize
- every value is a **token**
- every screen and control has its full **state set**
- every action gets a visible response

## Capabilities

Pick the capability from the argument; without one, infer it from the request:
- **build:** `/ui-mode build`, or a request to make, change, restyle, or polish UI. Follow `playbooks/build.md`.
- **review:** `/ui-mode review`, or a request to critique, audit, or rate a UI, a screenshot, or a PR's UI. Follow `playbooks/review.md`.

Open a todo list whose first items are the playbook's steps, copied verbatim, before any task-specific items. A step you skip stays in the list as `skip: <reason>`.

## Non-negotiables

- Open by restating the user's goal, the surface (landing, app, mobile, desktop, AI product, or process), and the smallest UI that meets the goal.
- The repo's design system comes first. Read its tokens and components before anything else. Where they conflict with this mode, keep theirs and flag the conflict.
- Tokens come before styling (**System**). Color, size, space, radius, shadow, and motion values all come from named tokens.
- Every color sits on a ramp and has a job (**Palette**). Treat any generated or default palette as a draft you inspect.
- Every interactive element has its full state set, and every action shows a result within 100ms (**Silence**).
- Use only honest levers (**Nudge**). Every claim on screen is true today, and declining takes one neutral tap.
- Destructive actions read as destructive. They're red-coded, ranked by their place on the page, and never in the brand color. Prefer undo to a confirm step unless the action is irreversible (**Emphasis**, **Silence**).
- Done means seen. Render the real UI and look at it at 1440×900 and 390×844, plus 1920×1080 for wide layouts, in light and dark mode when both exist (**Reality**).
  - Use what the harness offers: a preview or browser tool, a control skill, or a screenshot script.
  - When you can't render, say what's missing and label visual claims unverified.
- Name your reasons. In the reply, name each principle that shaped a decision and the choice it changed. Cite only principles whose leaf you read this session.

## Principles

Read a principle's leaf, `principles/<name>.md`, in full before applying it. Each line says when to reach for it.

**Think**
- **Opinion.** Adding an element, copying a pattern, or accepting generated UI: every element earns its place with a reason the user would give.
- **Intent.** Starting a screen or component: build the control for the main intent first; the shell follows.
- **Iterate.** Shaping a design, or polishing before the structure holds: low fidelity and grayscale first, detail last.
- **Flow.** Work spanning several screens or linked objects: design the sequence, let the system carry complexity (Tesler), one job per screen.
- **Decide.** Any screen where the user chooses or commits: name **the decision**, keep its inputs in view, preview each option's consequence.

**See**
- **Emphasis.** More than one piece of content, a primary that won't stand out, or a noisy screen: **rank** everything, then quiet the neighbors.
- **Subtract.** Clutter, or the urge to add: fewest elements, fewest lines, without cutting what the decision needs.
- **Scan.** Lists, tables, cards, settings, dashboards: lock to **edges**, differentiate, let the data pick the form.
- **Space.** Layout, padding, gaps, widths: spacing tokens, outer gaps ≥ 2× inner gaps, widths sized to content.
- **Type.** Fonts, sizes, line height and length, links, copy: a finite scale, ~66ch lines, baselines aligned.
- **Palette.** Any color decision: **ramps** first in OKLCH, neutrals carry the UI, color carries meaning, contrast meets WCAG, dark mode is its own palette.
- **Depth.** Shadows, elevation, inset controls, dark surfaces: one light source, five elevations.
- **System.** Before styling, or about to type a raw value: decide once as a **token**, then design by elimination.

**Behave**
- **Silence.** Interactive elements, async work, lists, destructive actions: every action answers, every screen has its **state set**.
- **Sequence.** Secondary actions, overlays, onboarding, icon-heavy UI: disclose in order of frequency and importance.
- **Motion.** Any animation or gesture: motion explains change; eased, short, purposeful, reducible.
- **Nudge.** Forms, signup, paywalls, pricing, CTA copy: defaults, progress, value first, every one an **honest lever**.

**Ground**
- **Reality.** Real data, images, viewports, devices, domains, charts, assistive tech: design for real content and real hands.
- **Borrow.** Choosing a layout or pattern, or entering an unfamiliar surface: take structure from shipped products and name the source.
- **Soul.** Brand, tone, imagery, overall aesthetic: choose a personality that fits the actual user.
- **Finish.** The last 10%, or a correct UI that still feels generic: replace defaults where a custom version carries meaning.

## References

Concrete values live here; judgment lives in the principles. Read the ones the current step touches.

| File | Read when |
|---|---|
| `references/color.md` | building ramps, neutrals, text tiers, contrast pairs, dark mode, chart or state colors |
| `references/type.md` | choosing fonts, the type scale, weights, line height and length, letter-spacing, links, copy |
| `references/layout.md` | spacing tokens, grouping, widths, grids, responsive sizing, radius, separation |
| `references/depth.md` | shadow and elevation tokens, light, flat depth, dark-mode elevation |
| `references/imagery.md` | photos, text over images, catalogs, icons, uploads, screenshots |
| `references/components.md` | buttons, forms, input choice, chips, cards, tables, filters, charts, overlays, nav, search, pricing, empty states, onboarding, finishing touches |
| `references/interaction-motion.md` | feedback timing, undo vs confirm, intent, disclosure, gestures, motion tokens |
| `references/landing.md` | marketing pages, heroes, section patterns, identity |
| `references/dashboard.md` | SaaS apps, sidebars, data-heavy screens |
| `references/mobile.md` | mobile apps, tab bars, sheets, thumb reach |
| `references/macos.md` | desktop and native macOS apps |
| `references/processes.md` | anything with stages and a **commit** (checkout, booking, publishing, approvals, sends, deploys), and selling surfaces |
| `references/ai-products.md` | chat and prompt UIs, generation, prompting a model for UI |
| `references/tells.md` | every review, and every build's self-review |

Numbers in the references are working defaults. A repo's own tokens override them.

## Writing the reply

- Follow the playbook's **Reply** section.
- Values carry units, and every fix names a value.
- Visual claims come from a render you saw; label anything else unverified.
- Changed UI ships with before/after proof, a before and an after shot of each changed screen, captioned with viewport and theme. Show them inline when the harness displays images; otherwise give their paths and offer to show them.
