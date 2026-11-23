# Emphasis

An element stands out only by contrast with its neighbours.

- Give every element a **rank** (primary, secondary, or tertiary) before you choose its size, weight, color, or position. Most views have one primary.
- Rank with tone and weight before size. Three text tones (`fg-1`, `fg-2`, `fg-3`) and two or three weights cover most UI; size alone makes everything shout. UI text stays at weight 400 or above and gets quieter through tone or size. Values: `references/type.md` (Scale), `references/color.md` (Neutrals).
- When the primary won't stand out, lower what competes (inactive nav to `fg-2`, default values to `fg-3`, other buttons to outline) instead of making the primary louder.
- Spend emphasis sparingly. A colored chip among colored chips is invisible, and bolding everything cancels the bold.
- Let data label itself. An email, a phone number, a price, or a date needs no "Email:" prefix; fold the label into the value ("Due in 3 days", "4 seats"). Where a label stays, it's the quieter element, except on spec sheets, where people scan the labels to find a row.
- Visual weight is independent of markup. Heading levels serve structure and assistive tech, so a section title acting as a label can look small and quiet and still be an `h2`.
- Balance heavy and light elements. Solid icons and bold text read heavier than their size, so give them a softer tone. A hairline may need more width rather than more darkness.
- Style actions by rank, not by meaning:
  - Primary: solid fill, one per view.
  - Secondary: outline or tinted fill.
  - Tertiary: text button.

  Values: `references/components.md` (Buttons).
- Red-code destructive actions at their rank. "Delete workspace" on a settings page is secondary or tertiary, so it gets red text or a red outline, set apart from the main action. Solid red appears only on the confirmation step that performs the deletion, and destructive actions never take the brand color.
- Position follows rank. The primary sits where the eye starts (top, start side), and the deciding number (a price, a total) gets a prominent, consistent spot.
- Every interactive element gets a focus ring as visible as its hover state. Values: `references/color.md` (Contrast).

**Check:** Run the **squint test**: blur or zoom out until the text is unreadable. Does the intended primary still win? Does any label repeat what its value already says? Is there more than one solid button in any view?

**Values:** `references/type.md`, `references/color.md` (Neutrals), `references/components.md` (Buttons).
