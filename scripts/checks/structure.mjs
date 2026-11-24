// Structure checks for one skill folder: frontmatter, links, cross-references,
// and the counts the docs state in prose (tells, principles, build steps).

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { docRefs, frontmatter, headings, relativeLinks } from "../lib/markdown.mjs";

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function markdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith(".md") ? [path] : [];
  });
}

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export function checkStructure({ repoRoot, skillDir }) {
  const rows = [];
  const add = (status, check, detail) => rows.push({ status, check, detail });
  const rel = (path) => relative(repoRoot, path);
  const read = (path) => readFileSync(path, "utf8");
  const docs = markdownFiles(skillDir).map((path) => ({ path, text: read(path) }));
  const skillMd = join(skillDir, "SKILL.md");
  const skillText = existsSync(skillMd) ? read(skillMd) : "";

  // Frontmatter (Agent Skills spec: name matches the folder, description <= 1024 chars).
  const fm = frontmatter(skillText);
  const folder = basename(skillDir);
  const fmProblems = [];
  if (!fm) fmProblems.push("SKILL.md missing or has no frontmatter");
  else {
    if (fm.name !== folder) fmProblems.push(`name "${fm.name}" != folder "${folder}"`);
    if (!NAME_RE.test(fm.name ?? "") || fm.name.length > 64) fmProblems.push("name must be kebab-case, <= 64 chars");
    if (!fm.description) fmProblems.push("description missing");
    else if (fm.description.length > 1024) fmProblems.push(`description is ${fm.description.length} chars (max 1024)`);
    if (!fm.license) fmProblems.push("license missing (installs copy only the skill folder)");
  }
  add(fmProblems.length ? "fail" : "pass", "Frontmatter", fmProblems.join("; ") || `name ${folder}, license ${fm.license}`);

  // Relative Markdown links, in the skill and in the repo README.
  const rootReadme = join(repoRoot, "README.md");
  const linkSources = existsSync(rootReadme) ? [...docs, { path: rootReadme, text: read(rootReadme) }] : docs;
  const brokenLinks = linkSources.flatMap(({ path, text }) =>
    relativeLinks(text)
      .filter(({ target }) => !existsSync(join(dirname(path), target)))
      .map(({ target, line }) => `${rel(path)}:${line} -> ${target}`),
  );
  add(brokenLinks.length ? "fail" : "pass", "Markdown links", brokenLinks.join("\n") || "all relative links resolve");

  // `file.md` (Section) references: the file exists and has that heading.
  // Prefixed paths are skill-root relative; a bare name is a sibling of the
  // source, else a file in references/ (the shared namespace the docs cite).
  const missing = [];
  let refCount = 0;
  for (const { path, text } of docs) {
    for (const ref of docRefs(text)) {
      refCount += 1;
      const sibling = join(dirname(path), ref.file);
      const target = ref.dir
        ? join(skillDir, ref.dir, ref.file)
        : existsSync(sibling)
          ? sibling
          : join(skillDir, "references", ref.file);
      const where = `${rel(path)}:${ref.line}`;
      if (!existsSync(target)) {
        missing.push(`${where} -> ${ref.dir}${ref.file} (no such file)`);
        continue;
      }
      const known = new Set(headings(read(target)).map((h) => h.toLowerCase()));
      for (const section of ref.sections) {
        if (!known.has(section.toLowerCase())) missing.push(`${where} -> ${ref.dir}${ref.file} (${section})`);
      }
    }
  }
  add(missing.length ? "fail" : "pass", "Cross-references", missing.join("\n") || `${refCount} references resolve`);

  rows.push(...checkCounts({ skillDir, docs, skillText, repoRoot, read }));
  return rows;
}

function checkCounts({ skillDir, docs, skillText, repoRoot, read }) {
  const rows = [];
  const add = (status, check, detail) => rows.push({ status, check, detail });
  const tellsPath = join(skillDir, "references", "tells.md");
  const principlesDir = join(skillDir, "principles");
  const buildPath = join(skillDir, "playbooks", "build.md");
  const readmes = [join(repoRoot, "README.md"), join(skillDir, "README.md")].filter(existsSync);
  const claimTexts = [...readmes.map((path) => ({ path, text: read(path) })), ...docs];
  const claims = (re, texts = claimTexts) =>
    texts.flatMap(({ path, text }) =>
      [...text.matchAll(re)].map((m) => ({ n: Number(m[1]), where: relative(repoRoot, path) })),
    );

  const principles = existsSync(principlesDir)
    ? readdirSync(principlesDir).filter((f) => f.endsWith(".md")).map((f) => capitalize(f.slice(0, -3)))
    : [];

  if (existsSync(tellsPath)) {
    const tells = [...read(tellsPath).matchAll(/^\| T(\d+) \|[^|]*\|\s*([^|]+?)\s*\|/gm)].map((m) => ({
      id: Number(m[1]),
      principle: m[2],
    }));
    const ids = tells.map((t) => t.id);
    const max = Math.max(...ids);
    const gaps = Array.from({ length: max }, (_, i) => i + 1).filter((id) => !ids.includes(id));
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    const badPrinciple = tells.filter((t) => !principles.includes(t.principle)).map((t) => `T${t.id} (${t.principle})`);
    const problems = [
      gaps.length && `missing T${gaps.join(", T")}`,
      dupes.length && `duplicate T${dupes.join(", T")}`,
      badPrinciple.length && `unknown principle: ${badPrinciple.join(", ")}`,
    ].filter(Boolean);
    add(problems.length ? "fail" : "pass", "Tells table", problems.join("; ") || `T1-T${max}, each mapped to a principle`);

    const rangeClaims = claims(/\bT1-T(\d+)\b/g).filter((c) => c.n !== max);
    const strayIds = claims(/\bT(\d+)\b/g).filter((c) => c.n > max);
    const approx = claims(/~(\d+) tells\b/g).filter((c) => Math.abs(c.n - max) / max > 0.1);
    const countProblems = [
      ...rangeClaims.map((c) => `${c.where} says T1-T${c.n}`),
      ...strayIds.map((c) => `${c.where} cites T${c.n}`),
      ...approx.map((c) => `${c.where} says ~${c.n} tells`),
    ];
    add(countProblems.length ? "fail" : "pass", "Tell counts in prose", countProblems.join("\n") || `all claims match ${max} tells`);
  }

  if (principles.length) {
    const indexed = [...skillText.matchAll(/^- \*\*([A-Z][a-z]+)\.\*\*/gm)].map((m) => m[1]);
    const notIndexed = principles.filter((p) => !indexed.includes(p));
    const noFile = indexed.filter((p) => !principles.includes(p));
    const wrongCount = claims(/\b(\d+) (?:principles|leaves)\b/g).filter((c) => c.n !== principles.length);
    const problems = [
      notIndexed.length && `not in SKILL.md index: ${notIndexed.join(", ")}`,
      noFile.length && `indexed without a file: ${noFile.join(", ")}`,
      ...wrongCount.map((c) => `${c.where} says ${c.n}`),
    ].filter(Boolean);
    add(problems.length ? "fail" : "pass", "Principles", problems.join("; ") || `${principles.length} files, all indexed and counted`);
  }

  if (existsSync(buildPath)) {
    const steps = [...read(buildPath).matchAll(/^(\d+)\. \*\*[^*]+\*\*(?: \(([^)]*)\))?/gm)];
    const numbers = steps.map((m) => Number(m[1]));
    const outOfOrder = numbers.some((n, i) => n !== i + 1);
    const unknown = steps.flatMap((m) =>
      [...(m[2] ?? "").matchAll(/\*\*([^*]+)\*\*/g)].map((p) => p[1]).filter((p) => !principles.includes(p)),
    );
    const readmeAndSkill = claimTexts.filter(({ path }) => path.endsWith("README.md") || path.endsWith("SKILL.md"));
    const wrongCount = claims(/\b(\d+) (?:checked )?steps\b/g, readmeAndSkill).filter((c) => c.n !== steps.length);
    const problems = [
      outOfOrder && "steps not numbered 1..n",
      unknown.length && `unknown principles: ${unknown.join(", ")}`,
      ...wrongCount.map((c) => `${c.where} says ${c.n} steps`),
    ].filter(Boolean);
    add(problems.length ? "fail" : "pass", "Build steps", problems.join("; ") || `${steps.length} steps, principles and counts match`);
  }
  return rows;
}
