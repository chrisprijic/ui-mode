// OKLCH -> linear sRGB (Björn Ottosson's OKLab matrices) and WCAG 2.x contrast.
// Pure math, no dependencies, so the token checks can run anywhere Node runs.

export function oklchToLinearSrgb(L, C, h) {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const GAMUT_EPS = 1e-4;

export const inGamut = (L, C, h) =>
  oklchToLinearSrgb(L, C, h).every((v) => v >= -GAMUT_EPS && v <= 1 + GAMUT_EPS);

// Largest chroma (to 0.001) that stays inside sRGB at this lightness and hue.
export function maxChroma(L, h) {
  let lo = 0;
  let hi = 0.5;
  while (hi - lo > 1e-6) {
    const mid = (lo + hi) / 2;
    if (inGamut(L, mid, h)) lo = mid;
    else hi = mid;
  }
  return Math.floor(lo * 1000) / 1000;
}

// WCAG relative luminance. Out-of-gamut channels clip, as a browser would.
export function luminance(L, C = 0, h = 0) {
  const [r, g, b] = oklchToLinearSrgb(L, C, h).map((v) => Math.min(Math.max(v, 0), 1));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(y1, y2) {
  const [hi, lo] = y1 > y2 ? [y1, y2] : [y2, y1];
  return (hi + 0.05) / (lo + 0.05);
}
