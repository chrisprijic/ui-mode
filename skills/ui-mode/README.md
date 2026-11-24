# ui-mode

A UI design mode for agents. It sets the process and the done bar for building and reviewing interfaces.

**Status:** in active development, not yet stable. Principles, token values, tell IDs, and playbook steps can change without notice.

| Capability | Trigger | What it does |
|---|---|---|
| Build | `/ui-mode build` | Designs and builds a UI in 12 steps, each with a "done when" check. It screenshots the existing UI first so the reply carries before/after proof, and ends by reviewing its own output. |
| Review | `/ui-mode review` | Captures the real UI, sweeps it against ~120 tells, places each key screen on a four-rung quality ladder (Stock -> Systematic -> Contextual -> Anticipatory), and returns findings ranked by severity, each with a fix in concrete values. |

## How it's organized

`SKILL.md` is the router: capabilities, non-negotiables, and the index of 21 principles in four groups (Think, See, Behave, Ground). Each principle gets its own file of judgment calls. Concrete values sit in the references, and the review checklist is `references/tells.md`.

```
ui-mode/
  SKILL.md               router: capabilities, non-negotiables, principle index
  playbooks/build.md     12 steps, each with its "done when" check
  playbooks/review.md    capture, load, sweep, findings, rank, deliver; quality ladder
  principles/*.md        21 principles: rules, a check, and pointers to values
  references/*.md        tokens and specs: color, type, layout, depth, imagery,
                         components, interaction-motion, landing, dashboard,
                         mobile, macos, processes, ai-products, tells
  SOURCES.md             acknowledgments
```

## Defaults worth knowing

- Colors are OKLCH ramps (50-950); neutrals carry the UI.
- Spacing is a 4px-based token scale; gaps between groups are at least twice the gaps inside them.
- Five elevation tokens, each a key plus ambient shadow; dark mode raises surfaces by lightness instead.
- Motion is five duration tokens with eased curves and a reduced-motion variant.
- A repo's existing design system always wins; the mode flags conflicts rather than overriding them.
