# ui-mode

Agent skills for UI work. Each skill lives in `skills/<name>/` with its own `SKILL.md`, the
layout the [`skills` CLI](https://github.com/vercel-labs/skills) discovers.

| Skill | What it does |
|---|---|
| [`ui-mode`](skills/ui-mode/README.md) | UI design mode: `/ui-mode build` designs and builds a UI in 12 checked steps; `/ui-mode review` audits a real UI and returns ranked findings with concrete fixes. |

## Install

```sh
npx skills add chrisprijic/ui-mode              # pick agents interactively
npx skills add chrisprijic/ui-mode -g -y        # all detected agents, user-level
npx skills add chrisprijic/ui-mode --list       # list skills without installing
```

The repository is private for now, so the clone needs GitHub access (`gh auth login` or an
SSH key). `npx skills update` pulls new versions.

Without the CLI, copy or link `skills/ui-mode` into your agent's skills folder, for example
`~/.claude/skills/ui-mode`.

## Add a skill

Create `skills/<name>/SKILL.md` with `name: <name>` in its frontmatter, matching the folder.
Keep relative links inside the skill folder so they survive installation.

## License

[MIT](LICENSE). The skills are original writing. `skills/ui-mode/SOURCES.md` acknowledges the
works that inspired them; ui-mode is not affiliated with or endorsed by any of them, and the
license grants no rights in those works.
