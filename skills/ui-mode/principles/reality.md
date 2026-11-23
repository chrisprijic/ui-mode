# Reality

Design for real content, real screens, real hands, and the real domain.

- Design with real, ugly data: the longest name, the empty field, the seven-digit number, the translation that runs 40% longer. Truncate with a way to see the full value.
- Contain user uploads in fixed aspect-ratio frames with `object-fit: cover`, a hairline inner ring so an image whose background matches the page still has an edge, and a fallback (initials, a placeholder) for missing images. Values: `references/imagery.md` (Uploads).
- Use the real images. Design with the photos and product screenshots you'll ship; a placeholder shapes the design around the wrong picture. For software, show the product itself, cropped to the part that matters.
- Text over images keeps its contrast everywhere under the text, through a gradient scrim, a darker or desaturated image, a tinted overlay, or a soft glow, with the text kept off the focal point. Test on the brightest, darkest, and busiest image in the set. Values: `references/imagery.md` (Text on images).
- Respect native size. Icons drawn for 16-24 px turn chunky when scaled, so set them inside a shape or use a set drawn larger; crop or simplify screenshots instead of shrinking them; redraw favicons at size. Values: `references/imagery.md` (Native size).
- Design for the whole image set. Catalog images share background, light, and framing, and every overlay works on every image. Values: `references/imagery.md` (Catalog).
- People scroll. The first screen has to make continuing worthwhile, with items at the size their job needs rather than shrunk to fit more above the fold.
- Render on real viewports and for real hands. Desktop 1440×900 (plus 1920×1080 for wide layouts) and mobile 390×844. Touch targets of at least 44 pt, primary mobile actions within thumb reach at the bottom, and mobile text the same size or larger. Values: `references/mobile.md`.
- Respect the domain's logic. A credit card can be locked or paid off but not deposited into; a shipped order can't be edited. Check every action against what the object can actually do.
- Make charts readable: labeled axes, light gridlines, straight segments, the latest point at full strength, and a summary value. Values: `references/components.md` (Charts).
- Make it work for everyone: a keyboard path through every control, a visible focus ring, accessible names, text alternatives for meaningful images, and no breakage at 200% zoom.

**Check:** Have you tried the longest, empty, and ugliest data? Rendered at 1440×900 and 390×844, in light and dark? Is every text-on-image legible on the worst image? Can you tab through every control?

**Values:** `references/imagery.md`, `references/mobile.md`, `references/components.md` (Charts).
