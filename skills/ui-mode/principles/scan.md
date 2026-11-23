# Scan

People scan before they read. Make the answer findable in about a second.

- **Lock content to edges.** Every element aligns to an **edge**: text to the start edge, numbers to the end edge like a ledger column. In compact components, each element touches at least two edges (a card side and a shared baseline). When a layout feels crowded, create or clear an edge before hiding anything.
- **Differentiate dense content.** Faces for people, chips for fixed value sets, icons for types, grouping by date or status. In a dense list, differentiation helps more than extra whitespace.
- **Show instead of describing.** Icons, thumbnails, diagrams, and charts replace sentences; universally known symbols need no label.
- **Let the data shape its display.**
  - numbers end-aligned, with tabular figures
  - long text truncated, full value on hover or focus
  - inactive rows dimmed
  - events over time on a timeline, not a timestamp column
  - quantities compared as bars, not prose
- **Align by content type.** Start-align text; center only short blocks (a heading, two or three lines at most); end-align numbers in columns.
- **Format values for people.** Relative dates for recent events ("2 h ago", exact time on hover), units attached to numbers, large numbers abbreviated where precision doesn't matter.
- **Pair color with a second cue.** Every color-coded meaning also gets an icon, text, or shape; in charts, vary lightness too so the chart reads in grayscale.

**Check:** Can a user find a given row or setting in about a second? Are numbers end-aligned and tabular? Does every color-coded state have a second cue?

**Values:** `references/components.md` (Tables, Chips, Charts), `references/type.md` (Alignment).
