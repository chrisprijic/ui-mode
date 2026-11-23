# AI products

AI products have converged on a shared look. Much of it is worth keeping, because the patterns solve real problems: slow output, uncertain answers, and long histories.

## Patterns worth keeping
1. The input is the front door. Put a large prompt box first, above the fold, so people start immediately, and make it do real work:
   - attached files render as preview blocks (PDF pages, image thumbnails)
   - pasted code or long text collapses into an expandable block
   - mode chips for common jobs (`Summarize`, `Draft email`, `Analyze data`)
   - attach context: files, folders, a URL, a connected app
   - connector buttons for the user's tools
   - advanced controls (model, length, cost estimate) behind an Advanced toggle
2. Give loaders character without weight: a short, looping, fluid mark (pulsing dots, a turning glyph) that stops the moment output starts.
3. Stream the output. Render tokens as they arrive so waiting turns into reading, and pair streaming with a visible Stop button. Non-text results get skeletons that match the final layout.
4. Show the work. Steps, sources, and tool calls appear one at a time as collapsible rows, each source linked. The assistant reads as a collaborator whose reasoning can be checked.
5. Make confidence visible with a small pill under an answer (`Verified from 3 sources`, `Unverified`) that opens the evidence or score on click.
6. Treat history as a workspace. Each conversation shows a title and a first-line preview, with search, rename, pin, and bulk delete. Group by recency or project.
7. Memory is visible and editable. A panel lists what's remembered, shows how much is stored, and allows adding a fact, editing, and bulk deleting. Memory buried in settings erodes trust.
8. Edit in place. Select text and type the change, or use per-block actions (rewrite, shorten, expand). Keep the control compact with a few presets and shortcuts; revising one paragraph never regenerates the whole answer.
9. Soft glass on dark suits AI surfaces and showcases: a dark background, a semi-transparent panel with a faint gradient, background blur (16-24px), a 1px light border at low opacity, and a soft inner glow. An animated shimmer on the border is optional and gets a pause control.

## Visual vocabulary
- Mesh gradients, faint grain, and fully rounded controls are genre cues. They signal an AI product; general product UI stays plainer.
- Gradients come from the brand. Blend two brand ramp steps, shifted darker for dark mode, instead of adding new hues.
- The hero CTA is a working prompt field instead of a button, even if submitting leads to sign-in. The user has already begun.

## Prompting a model to generate UI
Use these when you prompt for UI, and as a checklist when reviewing generated UI.
- Say it's a design and name the output format (HTML/CSS, a React component, a frame for import).
- State the purpose and the user: what the screen is for and the task it supports (`an expense tracker where a team lead approves reimbursements`).
- Name the parts: `a left sidebar with icons and labels`, `a table of requests with status chips`, `a detail drawer`.
- Require an icon library by name; without one, models fall back to emoji.
- Give clean references, such as shipped products and calm, realistic sites. Dense gallery shots lose their small details in the model's reading.
- Choose fonts, alignment, and color yourself after generation. Treat the model's palette and layout as a draft to rework.
- Expect gaps. Models are good at mockups and imitating a look, and weak at structure, the quiet layer (tooltips, states, feedback), and anything that takes a point of view. Review those first.
