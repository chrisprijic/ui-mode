#!/usr/bin/env node
// Validates every skill in skills/: structure, cross-references, stated counts,
// and (where a skill ships color tokens) the color math.
// Usage: node scripts/validate.mjs [repo-root]. Exits 1 on any FAIL.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { checkColor } from "./checks/color.mjs";
import { checkStructure } from "./checks/structure.mjs";

const LABEL = { pass: "PASS", warn: "WARN", fail: "FAIL" };

export function validateRepo(repoRoot) {
  const skillsDir = join(repoRoot, "skills");
  return readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const skillDir = join(skillsDir, entry.name);
      const rows = checkStructure({ repoRoot, skillDir });
      const colorPath = join(skillDir, "references", "color.md");
      const depthPath = join(skillDir, "references", "depth.md");
      if (existsSync(colorPath) && existsSync(depthPath)) {
        rows.push(...checkColor({ colorMd: readFileSync(colorPath, "utf8"), depthMd: readFileSync(depthPath, "utf8") }));
      }
      return { skill: entry.name, rows };
    });
}

function print(results) {
  for (const { skill, rows } of results) {
    console.log(`\nskills/${skill}`);
    for (const { status, check, detail } of rows) {
      const [first, ...rest] = detail.split("\n");
      console.log(`  [${LABEL[status]}] ${check.padEnd(24)} ${first}`);
      for (const line of rest) console.log(`  ${" ".repeat(31)}${line}`);
    }
  }
  const failed = results.flatMap((r) => r.rows).filter((row) => row.status === "fail").length;
  console.log(failed ? `\n${failed} check(s) failed.` : "\nAll checks pass.");
  return failed;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const repoRoot = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
  process.exit(print(validateRepo(repoRoot)) ? 1 : 0);
}
