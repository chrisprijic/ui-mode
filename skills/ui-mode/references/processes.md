# Processes

Values for any flow that moves an object through **stages** to a **commit**: checkout, booking, publishing, approvals, sends, deploys, transfers. The commit is the moment the user pays, publishes, sends, submits, or deploys. Everything before it reduces doubt, and everything after it reports the true current state. Every lever here is an **honest lever** (`principles/nudge.md`).

## Stages
- Show a visible track. A stepper or timeline lists every stage by name and highlights the current one:
  - Draft -> In review -> Scheduled -> Live
  - Quote requested -> Priced -> Booked -> In transit -> Delivered
- Give the future dates. List upcoming steps with when they happen, the system's own steps included:
  - `Today: full access · Day 12: reminder email · Day 14: first charge`
  - `Thu 07:00: goes live · 2,300 followers notified`
- Print state on the object. A badge on the item itself says Draft, Scheduled, or Live. Editing something already live shows an `Unpublished changes` marker, and the public version stays as it was until the user publishes.
- Progress reflects work already done, so when account creation is step 1 of 4, the bar opens at 25%.

## Before the commit
- Show the outcome, then the diff. Render the result the way its audience will see it, and summarize what changes: `5 products updated, 2 hidden`, `Visible to all members`, `Remaining balance: €3,180`.
- Make the target concrete. Recipients, channel, environment, or account each get an avatar or icon. Recent targets lead, search covers the rest, and the usual target is preselected.
- Put the full cost (items, fees, taxes, total) before the button. Nothing new appears after the click.

## At the commit
- The button reads as a sentence with a verb, an object, and a scope or amount:
  - `Send to 2,300 followers`
  - `Deploy 6 commits to production`
  - `Book desk · Thu 3 Apr · €18`
  - `Pay invoice · $1,240.00`
- A line under the button settles the worry, most often about reversibility: `Unschedule anytime before 07:00`, `Revert from History in one click`, `Free cancellation until Wed 18:00`.
- Only one button is loud. It sits in thumb reach on mobile; Save draft and Back stay quiet.
- Scale the guard with reversibility: an undo window, a cancel-until deadline, or a confirm step only for what can't come back (`interaction-motion.md` Undo).
- The button owns its failure. It shows progress while working, blocks a double submit, and on error keeps every entered value and says what to fix.

## After the commit
- Lead with status and time, then the destination: `Live since 07:02`, `Picked up · arrives Fri 10–12 · Dock 4`.
- Show the people involved (reviewer, approver, driver, host) with a photo, a name, and a Message or Call action.
- Say whose move it is: `Waiting on Priya's approval`. When the move is the user's, it's the primary button.
- Each stage has a failure state that says what failed, what survived, and how to retry (`Payment declined · your cart is saved · Try another card`).
- Show thumbnails for the things involved: items, pages, files.

## Selling
Images follow `imagery.md`; long mobile pages get the sticky bottom bar from `mobile.md`.

### The listing
A shopper scans for four answers, so place them in this order, all above the description: **what it is, whether it's good, what it costs, what to pick.**
- The name says what the thing is. Variants (size, count, color) belong to the picker, not the title.
- Proof is a specific rating with its count (`4.7 · 312 reviews`) right next to the name. Status tags (`Staff pick`) sit above the name; discount tags stay short (`15% off`).
- The price is a formatted number on its own line, with no `Price:` prefix.
- Choose the picker with `components.md` (Input choice). Offer the sizes people actually buy (`250 g`, `500 g`, `1 kg`) plus a stepper for custom amounts, put the unit inside the control, and keep the control next to the buy button.
- At the button, answer the doubt specific to this product in a few words (`Ships in a recyclable pot`, `30-day plant guarantee`).
- On scroll, the details panel rises over the hero image, and once the image leaves the viewport the name pins to the top bar.

### Options and add-ons
- Show plans as cards side by side (subscription, one-time, multi-pack). Identical stacked radios make unequal options look equal.
- The recommended card states its own terms inside the card: tinted fill, a short tag, price, cadence, and how to leave (`Save 10% · Skip or cancel anytime`).
- Multi-packs show their true saving (`2 bags −8%`, `3 bags −12%`).
- Add-ons live under the item they extend, unchecked by default, with their cost relative to it (`Theft cover · $9 · 1.5% of your bike`).

### Trials and paywalls
- Open with the trial's timeline, reminder day included, before any feature list.
- Show what's inside: real sessions, screens, or items the user is about to unlock.
- The button says `Try free for 7 days`, with `No charge today` beneath. Price, cadence, and cancellation sit on the same screen, and `Not now` is a plain exit with equal weight.

### Reservations
- Gallery: full-width imagery over the top half, a position count (`1 of 18`), and earned badges (`Quiet floor`).
- Name: concrete and sensory (`Sunlit corner desk by the window`).
- Dates: weekday plus duration (`Thu 3 Apr – Fri 4 Apr · 2 days`).
- Price: one figure per unit of time; a genuine earlier price may sit beside it (`€24 → €18`).

### Quotes and service levels
- Lock the scope first (route, address, dates), then reveal the options.
- Each option gets one price and the one thing that differs: `Arrives Thu · 2 days`, `Pickup in 15 min`.
- Put a best-value tag only on the option that really is cheapest or fastest.

### Money movement
- The amount leads, large and centered, with a currency picker in the field's corner that defaults to the usual currency.
- Keep both ends (from and to) visible, with the source switchable before confirming.
- The confirmation names the amount and the recipient. On mobile, a swipe or press-and-hold commits.
