import assert from "node:assert/strict";
import { test } from "node:test";
import { contrast, inGamut, luminance, maxChroma, oklchToLinearSrgb } from "../lib/oklch.mjs";

const close = (actual, expected, tolerance) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} not within ${tolerance} of ${expected}`);

test("white and black map to the sRGB extremes", () => {
  assert.equal(luminance(1), 1);
  assert.equal(luminance(0), 0);
  close(contrast(luminance(1), luminance(0)), 21, 1e-9);
});

test("oklch(0.628 0.2577 29.23) is sRGB red", () => {
  const [r, g, b] = oklchToLinearSrgb(0.628, 0.2577, 29.23);
  close(r, 1, 2e-3);
  close(g, 0, 2e-3);
  close(b, 0, 2e-3);
});

test("neutral gray contrast matches WCAG", () => {
  // oklch L 0.5693 ≈ #777777, the well-known 4.48:1 on white.
  close(contrast(luminance(0.5693), 1), 4.48, 0.02);
});

test("gamut edge: a light blue cannot carry much chroma", () => {
  assert.equal(maxChroma(0.97, 262), 0.014);
  assert.ok(inGamut(0.97, 0.014, 262));
  assert.ok(!inGamut(0.97, 0.02, 262));
});
