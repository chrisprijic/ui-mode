# Emphasis

Importance is relative: an element stands out only by contrast with its neighbours.

- **Rank before you style.** Give every element a **rank** (primary, secondary, or tertiary) before choosing size, weight, color, or position. Most views have one primary.
- **Rank with tone and weight before size.** Three text tones (`fg-1`, `fg-2`, `fg-3`) and two or three weights cover most UI; size alone makes everything shout. UI text stays at weight 400 or above, and gets quieter through tone or size. Values: `references/type.md` (Scale), `references/color.md` (Neutrals).
- **Lift the primary by quieting its neighbours.** When the key element won't stand out, lower what competes (inactive nav to `fg-2`, default values to `fg-3`, other buttons to outline) instead of making it louder.
- **Spend emphasis sparingly.** A colored chip among colored chips is invisible; bold everywhere is bold nowhere.
- **Let data label itself.** An email, a phone number, a price, or a date needs no "Email:" prefix. Fold the label into the value ("Due in 3 days", "4 seats"). Where a label stays, it's the quieter element, except on spec sheets, where people scan the labels to find a row.
- **Set visual weight independently of markup.** Heading levels serve structure and assistive tech; a section title acting as a label can look small and quiet while staying an `h2`.
- **Balance heavy and light elements.** Solid icons and bold text read heavier than their size, so give them a softer tone; a hairline may need more width rather than more darkness.
- **Style actions by rank, not by meaning.**
  - **Primary:** solid fill, one per view.
  - **Secondary:** outline or tinted fill.
  - **Tertiary:** text button.

  Values: `references/components.md` (Buttons).
- **Red-code destructive actions at their rank.** "Delete workspace" on a settings page is secondary or tertiary: red text or a red outline, set apart from the main action. Solid red appears only on the confirmation step that performs the deletion. Destructive actions stay out of the brand color.
- **Position follows rank.** The primary sits where the eye starts (top, start side); the deciding number (a price, a total) gets a prominent, consistent spot.
- **Show focus as clearly as hover.** Every interactive element gets a visible focus ring. Values: `references/color.md` (Contrast).

**Check:** Run the **squint test**: blur or zoom out until the text is unreadable. Does the intended primary still win? Does any label repeat what its value already says? Is there more than one solid button in any view?

**Values:** `references/type.md`, `references/color.md` (Neutrals), `references/components.md` (Buttons).
