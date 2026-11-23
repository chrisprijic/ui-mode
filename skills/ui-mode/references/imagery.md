# Images and icons

Values for photos, uploads, and icons. Judgment lives in `principles/reality.md` and `principles/soul.md`.

## Photos
- **Design with the image you will ship.** A placeholder shapes the layout around the wrong crop, color, and focal point. Commission photography or license quality images before the layout is final.
- **Software shows itself.** A real screen, cropped to the part that proves the claim, beats any stock photo. Stock imagery unrelated to the product is a Stock-rung **tell** (see `playbooks/review.md`).
- **A page with no imagery at all** reads generic; one strong, specific image changes the whole impression.
- **Hero subjects:** frame with breathing room; an enormous close-up crop overwhelms at full width. Source originals at 2× the display size to avoid softness.

## Text on images
Contrast must hold across every pixel the text covers, on every image the slot can receive. Choose the lightest touch that passes:
1. **Tone down the image:** lower its contrast or brightness (`filter: brightness(.8) contrast(.9)`).
2. **Duotone it:** desaturate, then lay a solid brand color over it with a blend mode (`mix-blend-mode: multiply`).
3. **Scrim with a gradient:** fade from transparent to a readable color behind the text (`linear-gradient(to top, hsl(0 0% 0% / .65), transparent 60%)`); optionally add a progressive blur in the same region.
4. **Overlay the whole image** at 30–50% opacity — the bluntest option; it flattens the photo, so prefer a localized scrim.
5. **Glow the text:** a large-blur, zero-offset text shadow (`0 0 24px hsl(0 0% 0% / .45)`) for small labels.

Always:
- **Keep text off the focal point** (faces, the product). Place it above, below, or beside the subject, over the calmest region.
- **Icons on photos** sit on a solid or blurred circle (≥ 32px, ~80% opacity) so they read on any image. On product imagery, a subtle container with a 1px outline is enough.
- **Test the extremes:** the brightest, darkest, and busiest image in the set, not the hero you picked.

## Catalog
For any grid of comparable items (products, listings, menu items, rentals):
- **One image system:** same background, light direction, framing, and scale for every item. Mixed backdrops make the grid look like a flea market.
- **One subject per image,** centered with consistent margin; natural props only where the category expects them.
- **Show the unit being sold:** a 250 g bag, not a sack; one plant in its pot, not the greenhouse.
- **Show it in use** when the buyer must imagine the result: the lamp lit in a room, the planner open to a filled page.
- **Appetite and desire categories** (food, travel, fashion, rentals): the photo is the largest element on the card; a logo identifies, a photo sells.
- **Text sits below the photo,** not printed over it, so any upload keeps the card readable.

## Native size
- **Icons are drawn for a size** (usually 16, 20, or 24px). Scaled to 48px they look clumsy. For a larger visual, place the small icon inside a tinted shape (40–48px circle or `radius-lg` square, 50/100 tint, icon in 600), or use an illustration drawn at that size.
- **Screenshots:** a full-page capture shrunk to a card is unreadable. Capture at a smaller viewport, crop to the relevant region, or redraw it as a simplified illustration.
- **Favicons and logos:** redraw the mark for 16–32px instead of shrinking the full lockup.

## Uploads
- **Fixed shape, flexible content:** fixed-aspect containers (`aspect-ratio: 1` for avatars, `4/3` or `3/2` for media) with `object-fit: cover` and a sensible `object-position`.
- **Contain edge bleed:** when an upload's background matches the page, add `box-shadow: inset 0 0 0 1px hsl(var(--shadow-color) / .08)` (via an overlay pseudo-element) rather than a visible border.
- **Plan the ugly case:** tiny images (show at native size inside the frame, or blur-fill the frame), extreme aspect ratios, transparent PNGs, and missing images (fallback: initials on a tinted circle, or a neutral glyph).
- **Lazy-load and reserve space** (`width`/`height` or `aspect-ratio`) so uploads don't shift the layout.

## Icons
- **One library,** one style (stroke weight, corner, fill rule) across the product: Phosphor, Lucide, Heroicons, or SF Symbols on Apple platforms. Emoji are content, never the icon system.
- **Size to the line:** 16px with 14px text, 20px with 16px text, 24px for touch targets and tab bars. Icons commonly ship too large; tighten the gap to the label (`space-1`/`space-2`).
- **Weight balance:** solid icons are visually heavy, so set them in `fg-2` beside `fg-1` text. Outline icons may need `fg-1`.
- **Color:** neutral by default; colored only to show active, selected, or status.
- **Accessible names:** every icon-only button has an `aria-label` (and a tooltip on pointer devices). Decorative icons get `aria-hidden="true"`.
- **Labels:** universally understood glyphs (search, home, close, settings, share) can stand alone; anything domain-specific gets a visible label or a tooltip. A toolbar of unfamiliar glyphs is a **tell**.
- **Swap words for glyphs** only when the glyph is unambiguous (a trash can for delete, a star for favorite).
- **Lists:** replace default bullets with checkmarks, arrows, or topic icons when the list is a feature or benefit list.

## Brand imagery
- **Start the identity from one image that captures the mood.** Crop it, adjust its tone, add grain if it fits, then collect more images in the same light and palette. Sample the color tokens from the images.
- **Context illustrations** around a centered message (invoices and coins for a payments product, seed packets for a garden app) explain the product before anyone reads. Give them generous margin so they frame the text rather than crowd it.
- **Images in navigation** (product photos in a mega-menu) help when product names alone don't explain what each is.
