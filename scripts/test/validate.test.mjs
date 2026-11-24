import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { checkColor, parseColorDocs } from "../checks/color.mjs";
import { checkStructure } from "../checks/structure.mjs";
import { validateRepo } from "../validate.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const refs = join(repoRoot, "skills", "ui-mode", "references");
const docs = {
  colorMd: readFileSync(join(refs, "color.md"), "utf8"),
  depthMd: readFileSync(join(refs, "depth.md"), "utf8"),
};
const failed = (rows) => rows.filter((r) => r.status === "fail").map((r) => r.check);
const replaceOnce = (text, from, to) => {
  assert.equal(text.split(from).length, 2, `expected one "${from}"`);
  return text.replace(from, to);
};

test("the repo passes every check", () => {
  for (const { skill, rows } of validateRepo(repoRoot)) assert.deepEqual(failed(rows), [], skill);
});

test("dark elevation levels parse, including the sentence-final modal value", () => {
  assert.deepEqual(parseColorDocs(docs).darkLevels, [0.16, 0.19, 0.22, 0.25]);
});

test("fg-3 at L 0.56 fails on bg and subtle", () => {
  const colorMd = replaceOnce(docs.colorMd, "| `fg-3` | 0.54", "| `fg-3` | 0.56");
  assert.ok(failed(checkColor({ ...docs, colorMd })).includes("Text tiers, light"));
});

test("an out-of-gamut ramp step fails", () => {
  const colorMd = replaceOnce(docs.colorMd, "| 50 | 0.97 | 0.014 |", "| 50 | 0.97 | 0.02 |");
  assert.ok(failed(checkColor({ ...docs, colorMd })).includes("Ramp in sRGB gamut"));
});

test("unparseable color docs fail loudly instead of passing", () => {
  assert.deepEqual(failed(checkColor({ colorMd: "", depthMd: "" })), ["Parse color docs"]);
});

test("a malformed token value fails loudly instead of passing", () => {
  for (const [from, to] of [
    ["| `fg-3` | 0.54", "| `fg-3` | oops"],
    ["| `bg` | 0.985 | 0.16 |", "| `bg` | 0.985 | |"],
    ["| `border-input` | 0.60 | 0.55 |", "| `border-input` | 0.60 | 0.55x |"],
    ["| 600 | 0.54 | 0.20 |", "| 600 | 0.54 | |"],
  ]) {
    const colorMd = replaceOnce(docs.colorMd, from, to);
    assert.deepEqual(failed(checkColor({ ...docs, colorMd })), ["Parse color docs"], to);
  }
});

test("structure checks catch a missing license, broken refs, and drifted counts", () => {
  const root = mkdtempSync(join(tmpdir(), "ui-mode-validate-"));
  const skill = join(root, "skills", "demo");
  mkdirSync(join(skill, "references"), { recursive: true });
  writeFileSync(join(root, "README.md"), "[demo](skills/demo/MISSING.md)\n");
  writeFileSync(
    join(skill, "SKILL.md"),
    "---\nname: demo\ndescription: Demo.\n---\n# Demo\nSee `references/notes.md` (Usage) and T1-T3.\n",
  );
  writeFileSync(join(skill, "references", "notes.md"), "# Notes\n## Setup\n");
  writeFileSync(join(skill, "references", "tells.md"), "| # | Tell | Principle | Fix |\n|---|---|---|---|\n| T1 | x | Opinion | y |\n");
  assert.deepEqual(failed(checkStructure({ repoRoot: root, skillDir: skill })), [
    "Frontmatter",
    "Markdown links",
    "Cross-references",
    "Tells table",
    "Tell counts in prose",
  ]);
});
