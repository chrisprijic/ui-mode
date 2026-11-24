// Small Markdown readers for the skill docs: frontmatter, headings, tables,
// links, and the `file.md` (Section) cross-references the skill uses.

export function frontmatter(text) {
  const block = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!block) return null;
  const fields = {};
  for (const line of block[1].split("\n")) {
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return fields;
}

export const headings = (text) =>
  text
    .split("\n")
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => line.replace(/^#+\s*/, "").trim());

const cells = (line) => line.split("|").slice(1, -1).map((cell) => cell.trim());

// Body rows of the first table whose header row begins with `headerCells`.
export function tableRows(text, headerCells) {
  const lines = text.split("\n");
  const start = lines.findIndex(
    (line) => line.startsWith("|") && headerCells.every((h, i) => cells(line)[i] === h),
  );
  if (start < 0) return [];
  const rows = [];
  for (const line of lines.slice(start + 2)) {
    if (!line.startsWith("|")) break;
    rows.push(cells(line));
  }
  return rows;
}

export const lineOf = (text, index) => text.slice(0, index).split("\n").length;

// Relative Markdown links: [text](target), skipping URLs and in-page anchors.
export function relativeLinks(text) {
  const links = [];
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const target = m[1];
    if (/^([a-z]+:|#)/i.test(target)) continue;
    links.push({ target: target.split("#")[0], line: lineOf(text, m.index) });
  }
  return links;
}

// Backticked doc paths, with the sections named after them:
//   `references/color.md` (Ramps, Contrast)   (`components.md` Buttons)
//   (see `layout.md`, Spacing)                 `color.md`, Charts.
// A section list only counts when every item starts with a capital letter, so
// prose in parentheses after a path is ignored.
const SECTION = String.raw`[A-Z][\w-]*(?:[ \t]+[a-z][\w-]*)*`;
const REF = new RegExp(
  String.raw`\`((?:references|principles|playbooks)/)?([a-z][a-z0-9-]*\.md)\`` +
    String.raw`(?:\s*\(([^()\`]+)\)|,?[ \t]+(${SECTION}(?:,[ \t]*${SECTION})*))?`,
  "g",
);

export function docRefs(text) {
  const refs = [];
  for (const m of text.matchAll(REF)) {
    const [, dir = "", file, inParens, bare] = m;
    const items = (inParens ?? bare ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const sections = items.length && items.every((s) => /^[A-Z]/.test(s)) ? items : [];
    refs.push({ dir, file, sections, line: lineOf(text, m.index) });
  }
  return refs;
}
