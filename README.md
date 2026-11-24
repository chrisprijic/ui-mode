# ui-mode

Agent skills for UI work. Each skill lives in `skills/<name>/` with its own `SKILL.md`, the
layout the [`skills` CLI](https://github.com/vercel-labs/skills) discovers.

| Skill | What it does |
|---|---|
| [`ui-mode`](skills/ui-mode/README.md) | UI design mode: `/ui-mode build` designs and builds a UI in 12 checked steps; `/ui-mode review` audits a real UI and returns ranked findings with concrete fixes. |

## Install

The CLI needs Node.js 22.20 or later.

```sh
npx skills add chrisprijic/ui-mode                       # pick skills and agents interactively
npx skills add chrisprijic/ui-mode -g -a claude-code -y  # Claude Code, user-level, no prompts
npx skills add chrisprijic/ui-mode --list                # list skills without installing
```

Swap `claude-code` for your agent (`codex`, `cursor`, and the rest of the CLI's
[supported agents](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)).
`npx skills update` pulls new versions.

Without the CLI, copy or link `skills/ui-mode` into your agent's skills folder, for example
`~/.claude/skills/ui-mode`.

## Add a skill

Create `skills/<name>/SKILL.md` with `name: <name>` (matching the folder) and `license: MIT`
in its frontmatter. Keep relative links inside the skill folder so they survive installation.

## Check

```sh
npm run check
```

Node 22 or later, no dependencies. It validates every skill, then runs the tests:

- frontmatter, relative links, and every `` `file.md` (Section) `` reference
- the counts the docs state in prose: tells, principles, build steps
- ui-mode's color tokens: WCAG contrast for each documented pairing and the sRGB gamut of the
  worked ramp, computed from the tables in `references/color.md` rather than trusted

CI runs it on every push to `main` and every pull request.

## License

[MIT](LICENSE). The skills are original writing. `skills/ui-mode/SOURCES.md` acknowledges the
works that inspired them; ui-mode is not affiliated with or endorsed by any of them, and the
license grants no rights in those works.
