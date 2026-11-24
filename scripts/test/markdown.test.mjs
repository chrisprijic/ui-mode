import assert from "node:assert/strict";
import { test } from "node:test";
import { docRefs, frontmatter, relativeLinks, tableRows } from "../lib/markdown.mjs";

test("frontmatter reads simple keys and strips quotes", () => {
  assert.deepEqual(frontmatter('---\nname: demo\ndescription: "Does a thing."\n---\n# Demo\n'), {
    name: "demo",
    description: "Does a thing.",
  });
  assert.equal(frontmatter("# No frontmatter\n"), null);
});

test("tableRows returns the body of the matching table", () => {
  const md = "| A | B |\n|---|---|\n| 1 | 2 |\n| 3 | 4 |\n\n| Step | L |\n|---|---|\n| 50 | 0.97 |\n";
  assert.deepEqual(tableRows(md, ["Step"]), [["50", "0.97"]]);
  assert.deepEqual(tableRows(md, ["Missing"]), []);
});

test("docRefs reads every section-reference form the skill uses", () => {
  const refs = (md) => docRefs(md).map(({ dir, file, sections }) => [dir + file, sections]);
  assert.deepEqual(refs("Values: `references/type.md` (Scale), `references/color.md` (Neutrals)."), [
    ["references/type.md", ["Scale"]],
    ["references/color.md", ["Neutrals"]],
  ]);
  assert.deepEqual(refs("(`components.md` Buttons, Forms)"), [["components.md", ["Buttons", "Forms"]]]);
  assert.deepEqual(refs("(see `layout.md`, Spacing)"), [["layout.md", ["Spacing"]]]);
  assert.deepEqual(refs("(`processes.md` After the commit)"), [["processes.md", ["After the commit"]]]);
  assert.deepEqual(refs("Follow `playbooks/build.md`. Each step"), [["playbooks/build.md", []]]);
  assert.deepEqual(refs("`references/color.md` (≈ L 0.60)"), [["references/color.md", []]]);
});

test("relativeLinks skips URLs and anchors", () => {
  const md = "[a](LICENSE) [b](https://x.dev) [c](#top) [d](skills/x/README.md#install)";
  assert.deepEqual(
    relativeLinks(md).map((l) => l.target),
    ["LICENSE", "skills/x/README.md"],
  );
});
