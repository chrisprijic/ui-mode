// Color token checks: computes the numbers in references/color.md and
// references/depth.md instead of trusting them. Every value comes from the
// docs' own tables, so editing a token re-runs the math.

import { contrast, inGamut, luminance, maxChroma } from "../lib/oklch.mjs";
import { tableRows } from "../lib/markdown.mjs";

const TEXT_MIN = 4.5; // WCAG 1.4.3, body text
const UI_MIN = 3; // WCAG 1.4.11, focus rings and outlines that identify a control
const CLAIM_TOLERANCE = 0.05; // stated ratios may round, within 5%

const fmt = (n) => n.toFixed(2);
const NUM = String.raw`(\d+(?:\.\d+)?)`;

export function parseColorDocs({ colorMd, depthMd }) {
  const hue = Number(colorMd.match(new RegExp(String.raw`Worked example, an? \w+ at h ${NUM}`))?.[1]);
  const ramp = new Map(
    tableRows(colorMd, ["Step", "L", "C"]).map(([step, L, C]) => [Number(step), { L: Number(L), C: Number(C) }]),
  );
  const tint = colorMd.match(new RegExp(String.raw`Tint every gray toward the brand hue at C ${NUM}-${NUM}`));
  const neutrals = new Map(
    tableRows(colorMd, ["Token"]).map(([token, light, dark]) => [
      token.replaceAll("`", ""),
      {
        light: Number.parseFloat(light),
        dark: Number.parseFloat(dark),
        claim: Number(light.match(/~?(\d+(?:\.\d+)?):1/)?.[1] ?? Number.NaN),
      },
    ]),
  );
  const levels = depthMd.match(new RegExp(String.raw`\`bg\` ${NUM}, card ${NUM}, menu ${NUM}, modal ${NUM}`));
  return {
    hue,
    ramp,
    tintChroma: tint ? [Number(tint[1]), Number(tint[2])] : [],
    neutrals,
    darkLevels: levels ? levels.slice(1).map(Number) : [],
  };
}

export function checkColor(docs) {
  const rows = [];
  const add = (status, check, detail) => rows.push({ status, check, detail });
  const { hue, ramp, tintChroma, neutrals, darkLevels } = parseColorDocs(docs);

  const parseProblems = [
    Number.isNaN(hue) && "worked-example hue",
    ramp.size !== 11 && `ramp table (${ramp.size} of 11 steps)`,
    !tintChroma.length && "neutral tint chroma",
    !["bg", "surface", "subtle", "fg-1", "fg-2", "fg-3"].every((t) => neutrals.has(t)) && "neutrals table",
    darkLevels.length !== 4 && "dark elevation levels in depth.md",
    [...ramp.values()].some(({ L, C }) => Number.isNaN(L + C)) && "a ramp step value",
  ].filter(Boolean);
  if (parseProblems.length) {
    add("fail", "Parse color docs", `could not read: ${parseProblems.join(", ")}`);
    return rows;
  }

  // Ramp: in gamut, lightness falls step by step, chroma peaks at 500-600.
  const steps = [...ramp.keys()];
  const outOfGamut = steps
    .filter((s) => !inGamut(ramp.get(s).L, ramp.get(s).C, hue))
    .map((s) => `${s}: C ${ramp.get(s).C} > sRGB max ${maxChroma(ramp.get(s).L, hue)}`);
  add(outOfGamut.length ? "fail" : "pass", "Ramp in sRGB gamut", outOfGamut.join("; ") || `all ${steps.length} steps at h ${hue}`);

  const notFalling = steps.slice(1).filter((s, i) => ramp.get(s).L >= ramp.get(steps[i]).L);
  const peak = steps.reduce((a, b) => (ramp.get(b).C > ramp.get(a).C ? b : a));
  const shape = [
    notFalling.length && `L does not fall at ${notFalling.join(", ")}`,
    ![500, 600].includes(peak) && `chroma peaks at ${peak}, not 500-600`,
  ].filter(Boolean);
  add(shape.length ? "fail" : "pass", "Ramp shape", shape.join("; ") || `L falls monotonically, chroma peaks at ${peak}`);

  // Surfaces and text use the tinted neutrals; check both ends of the tint range.
  const neutralY = (L) => tintChroma.map((C) => luminance(L, C, hue));
  const rampY = (step) => [luminance(ramp.get(step).L, ramp.get(step).C, hue)];
  const white = [1];
  const lightSurfaces = ["bg", "surface", "subtle"].map((t) => [t, neutralY(neutrals.get(t).light)]);
  const darkSurfaces = [...new Set([...["bg", "surface", "subtle"].map((t) => neutrals.get(t).dark), ...darkLevels])].map(
    (L) => [`L ${L}`, neutralY(L)],
  );
  const worst = (fgYs, bgYs) => Math.min(...fgYs.flatMap((f) => bgYs.map((b) => contrast(f, b))));

  // Pairs the docs prescribe (color.md: Ramps "Roles by step", States, Dark mode).
  const rampPairs = [
    ["white on 600 (solid fill)", white, [["600", rampY(600)]], TEXT_MIN],
    ["white on 700 (hover)", white, [["700", rampY(700)]], TEXT_MIN],
    ["white on 800 (pressed)", white, [["800", rampY(800)]], TEXT_MIN],
    ["800 text on tint", rampY(800), [["50", rampY(50)], ["100", rampY(100)]], TEXT_MIN],
    ["900 text on tint", rampY(900), [["50", rampY(50)], ["100", rampY(100)]], TEXT_MIN],
    ["700 text on tint (selected)", rampY(700), [["50", rampY(50)], ["100", rampY(100)]], TEXT_MIN],
    ["600 links, light", rampY(600), lightSurfaces, TEXT_MIN],
    ["400 links, dark", rampY(400), darkSurfaces, TEXT_MIN],
    ["600 focus ring, light", rampY(600), lightSurfaces, UI_MIN],
    ["400 focus ring, dark", rampY(400), darkSurfaces, UI_MIN],
    ["300 text on 950 (dark selected)", rampY(300), [["950", rampY(950)]], TEXT_MIN],
    ["200 text on dark tint (chips)", rampY(200), [["900", rampY(900)], ["950", rampY(950)]], TEXT_MIN],
    ["300 text on dark tint (chips)", rampY(300), [["900", rampY(900)], ["950", rampY(950)]], TEXT_MIN],
  ];
  rows.push(pairRow("Ramp role pairs", rampPairs));

  const tiers = ["fg-1", "fg-2", "fg-3"];
  rows.push(
    pairRow(
      "Text tiers, light",
      tiers.map((t) => [t, neutralY(neutrals.get(t).light), lightSurfaces, TEXT_MIN]),
    ),
  );
  rows.push(
    pairRow(
      "Text tiers, dark",
      tiers.map((t) => [t, neutralY(neutrals.get(t).dark), darkSurfaces, TEXT_MIN]),
    ),
  );

  // Stated ratios in the neutrals table are the worst case across light surfaces.
  const claimProblems = tiers
    .filter((t) => !Number.isNaN(neutrals.get(t).claim))
    .map((t) => {
      const actual = worst(neutralY(neutrals.get(t).light), lightSurfaces.flatMap(([, ys]) => ys));
      const claim = neutrals.get(t).claim;
      return Math.abs(actual - claim) / actual > CLAIM_TOLERANCE ? `${t} says ~${claim}:1, computes ${fmt(actual)}:1` : null;
    })
    .filter(Boolean);
  add(claimProblems.length ? "fail" : "pass", "Stated contrast ratios", claimProblems.join("; ") || "within 5% of computed");

  const input = neutrals.get("border-input");
  if (!input) add("fail", "Input outline", "no `border-input` token in the neutrals table");
  else {
    rows.push(
      pairRow("Input outline", [
        ["border-input, light", neutralY(input.light), lightSurfaces, UI_MIN],
        ["border-input, dark", neutralY(input.dark), darkSurfaces, UI_MIN],
      ]),
    );
  }
  return rows;
}

// One report row for a set of [label, fgYs, [[bgName, bgYs]...], min] pairs.
function pairRow(check, pairs) {
  const failures = [];
  let tightest = { margin: Number.POSITIVE_INFINITY };
  for (const [label, fgYs, backgrounds, min] of pairs) {
    for (const [bgName, bgYs] of backgrounds) {
      const ratio = Math.min(...fgYs.flatMap((f) => bgYs.map((b) => contrast(f, b))));
      if (ratio < min) failures.push(`${label} on ${bgName}: ${fmt(ratio)}:1 < ${min}:1`);
      if (ratio - min < tightest.margin) tightest = { margin: ratio - min, text: `${label} on ${bgName} ${fmt(ratio)}:1` };
    }
  }
  return failures.length
    ? { status: "fail", check, detail: failures.join("\n") }
    : { status: "pass", check, detail: `tightest: ${tightest.text}` };
}
