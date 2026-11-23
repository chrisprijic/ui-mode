# Landing and marketing pages

A landing page argues for one action, section by section. Visitors judge the product by the page's craft before they read it, so presentation is part of the pitch. Match the effects to the goal: signup and purchase pages stay restrained; brand and launch pages can spend more on spectacle.

## Process
1. Collect references: direct competitors, adjacent products, and a mood board. Use shot galleries for mood and shipped sites for structure.
2. Write the argument first: the one action, the 3-5 claims that earn it, and the proof for each. Merge pages that repeat a claim.
3. Assemble a wireframe from shipped sections. Pick a structure per claim from real sites, keep only the boxes, and drop their styling.
4. Build the identity separately, from one image that holds the mood. Pull the palette from it, pick a texture (grain, grid paper, halftone), and choose type that fits. Collect more imagery with the same light and grade.
5. Dress the wireframe section by section, then add motion as a small set of repeated motifs.
6. Test it twice:
   - Boxes test: replace content with gray blocks. The reading order should still be obvious.
   - Skim test: scroll the page for five seconds. Can you say what the product does and what to click?

## Hero
- A hero has four parts: nav, message, proof (logos, rating, a number), and the visual. The message shares the space with the other three.
- The headline runs ~4-8 words and promises one concrete outcome; one supporting sentence (~12-20 words) says how. Name the product's job, not its category ("Send invoices that get paid in days").
- Spacing: eyebrow to headline `space-3` (12px); headline to subtext `space-3`; subtext to buttons `space-6` (32px) or more, at least 2× the headline-to-subtext gap.
- Use one solid primary button and one quiet secondary (ghost or outline). When the hero and nav buttons go to the same place, they share a label.
- Pick the layout from the message's job:
  - one bold claim: centered, large, generous space
  - one feature shown: the visual leads, text supports it
  - several features: a bento grid
- The centered hero (big headline, big screenshot, lots of air) is the default SaaS pattern. Make it yours with one distinctive move: a characterful display face, a live or interactive product sample, an inline diagram, or a single-hue background wash.
- Show the real product. Use actual UI, cropped and enlarged to the part that sells it, instead of stock photography. The product name is legible at hero scale.
- For tool and AI products, put the input in the hero (a prompt box, a URL field, an upload zone). Starting the task before signup raises completion.
- Pick photo subjects shot wide enough to leave room for text, and source large originals. Text and imagery follow `imagery.md`.
- Check the first screen at 1440×900 and 1920×1080. Its job is to make the visitor want the second screen, so leave the rest to later screens instead of fitting everything into it.

## Sections
- Proof is a logo row (a slow marquee with faded edges for long lists), a number with its unit, or one specific testimonial with a name and photo.
- A tabbed showcase uses horizontal or vertical tabs that swap a product view, optionally auto-advancing with a visible timer. Design every tab's content, not just the first.
- A bento is a plain grid of uneven cards, each showing one capability with a visual. Tilt or break at most one card.
- Frame lines are thin, full-length lines that box sections and run the page height. They hold wide screens together.
- A nav dropdown that previews each product with a picture helps when product names don't explain themselves.
- Underused moves: a word that swaps on scroll; a hand-drawn underline or circle on a key word; a key word that animates into a tiny demo (a word that fills like a progress bar); a word that previews an image on hover.
- Give each section a layout the page hasn't used yet. Text-left/image-right repeated down the page is a template tell. When a row of items is too even, offset or enlarge one.
- The closing call to action repeats the hero's mechanism (the same input, the same button label), or becomes one card in the final grid.
- For niche or long content, use "Show more", a lightbox, or a small link to a details page instead of another full section.

## Ladder signs
The rungs are defined in `playbooks/review.md`. On a landing page they look like this:

| Rung | Signs |
|---|---|
| **Stock** | template section order; alternating text/image all the way down; stock photos unrelated to the product; vague headline; sharp images beside rounded buttons; default link blue everywhere |
| **Systematic** | consistent tokens and spacing; a real product shot; one clear CTA style; a headline that names the outcome; balanced nav |
| **Contextual** | layout chosen per section from what it argues; product crops zoomed to the selling detail; proof placed beside the claim it supports; tabbed or bento showcases; smooth section transitions |
| **Anticipatory** | visitors start the real task on the page (input in the hero, live demo, calculator with their numbers); copy answers the next objection before it's asked; visuals built to show exactly what the product does |

Each rung up comes from many small decisions rather than one big redesign.

## Identity
- Look like you know the customer's world. A tool for bakeries shows flour, trays, and order tickets. A page with no imagery at all reads as generic.
- Match the register:
  - playful: soft shapes, saturated color, round corners, bouncy buttons
  - professional: photography, tighter radius, restrained color, optional grain
  - in between: illustration or doodles over clean layout
- Context props around a centered message (receipts and coins for a payments tool) explain the product before any reading. Keep a clear margin around the text.
- A composed scatter follows rules: big pieces low and behind, small pieces high and in front, a clear zone around the text, density falling off from the center, edges darkened to pull focus inward.
- Type carries most of the page. Give the headline face character and animate at most one or two key words.
- A plain layout feels finished when nearly every interactive element has a small, deliberate hover.
- Subtle grain adds texture and smooths gradient banding. Keep it faint enough to vanish at a glance.

## Showcasing screens
For hero visuals and social posts, not product UI:
- set screens on a muted accent backdrop or soft blurred color fields
- tilt or offset a group of screens rather than gridding them; let one bleed off the edge
- show the hidden interaction in a short loop instead of describing it
- client-facing mockups favor realistic devices and settings over drama
