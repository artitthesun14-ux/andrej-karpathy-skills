#!/usr/bin/env node
// Visual style library CLI. No dependencies. Run with Node 18+.
//
//   node library.mjs find [--text q] [--category c] [--facet f] [--mood m] [--medium m] [--use u]
//                         [--motion m] [--typography t] [--layout l] [--palette p]
//   node library.mjs palettes [--text q] [--category c] [--mood m] [--style s] [--use u] [--ground light|dark]
//   node library.mjs style <id>        metadata plus the full profile section
//   node library.mjs palette <id>      palette with contrast table, ground, semantic colors, warnings
//   node library.mjs harmony <hex> [type]  color harmony from one color (types listed by `harmony`)
//   node library.mjs preset <id>       preset resolved against styles and palettes
//   node library.mjs contrast <fg> <bg>
//   node library.mjs check             validate the whole library (exit 1 on errors)

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LIB = join(dirname(fileURLToPath(import.meta.url)), "..", "library");
const load = (f) => JSON.parse(readFileSync(join(LIB, f), "utf8"));

// WCAG 2.2: 4.5 for body text, 3 for large text (24px, or 18.66px bold) and UI or graphics.
const THRESHOLD = { body: 4.5, large: 3, ui: 3 };

const PROFILE_FIELDS = [
  "Visual DNA", "Design principles", "Color behavior", "Typography", "Layout",
  "Composition", "Image treatment", "Texture and material", "Motion language",
  "Best for", "Avoid when", "Differs from", "Prompt recipe", "Implementation notes",
];
const STYLE_KEYS = [
  "id", "name", "category", "facet", "aliases", "summary", "mood", "typography_tags", "layout_tags",
  "medium", "use_cases", "motion_type", "compatible_palettes", "related_styles",
  "reference_images", "reference_sources", "preview", "profile",
];
const PALETTE_KEYS = [
  "id", "name", "category", "mood", "source", "colors", "text_pairs", "avoid_pairs",
  "contrast_notes", "use_cases", "example",
];
const ROLES = new Set([
  "background", "surface", "text", "text-muted", "primary", "secondary", "accent", "signal", "line",
]);

export function luminance(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? [...h].map((c) => c + c).join("") : h;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(full.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

// ---------- OKLCH (Bjorn Ottosson's Oklab), used for harmonies and semantic colors ----------
const srgbToLin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const linToSrgb = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
export function toOklch(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => srgbToLin(parseInt(hex.slice(i, i + 2), 16) / 255));
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(A, B), ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360];
}
function oklchToRgb(L, C, h) {
  const a = C * Math.cos((h * Math.PI) / 180), b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3, m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3, s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s];
}
// Out-of-gamut colors keep lightness and hue; chroma is reduced until the color fits sRGB.
export function fromOklch(L, C, h) {
  L = Math.min(1, Math.max(0, L)); C = Math.max(0, C); h = ((h % 360) + 360) % 360;
  let rgb = oklchToRgb(L, C, h);
  for (let i = 0; i < 40 && rgb.some((v) => v < -1e-4 || v > 1 + 1e-4); i++) { C *= 0.92; rgb = oklchToRgb(L, C, h); }
  return "#" + rgb.map((v) => Math.round(Math.min(1, Math.max(0, linToSrgb(Math.min(1, Math.max(0, v))))) * 255).toString(16).padStart(2, "0")).join("").toUpperCase();
}
// Move a color's lightness until it reaches the target ratio on bg (or stop at black or white).
export function fixContrast(fg, bg, target) {
  let [L, C, h] = toOklch(fg), out = fg;
  const dir = luminance(bg) > 0.18 ? -1 : 1;
  for (let n = 0; contrast(out, bg) < target && n < 100; n++) { L += dir * 0.01; out = fromOklch(L, C, h); }
  return out;
}

// Ground: whether the palette is built for a light or a dark page.
export const ground = (p) => (luminance((p.colors.find((c) => c.role === "background") || p.colors[0]).hex) > 0.18 ? "light" : "dark");

// Semantic status colors are derived per palette and kept apart from brand roles, so changing the
// palette never changes what red, amber, green, and blue mean. Each reaches 4.5:1 on the background.
const SEMANTIC_HUES = { success: 150, warning: 70, error: 27, info: 255 };
export function semantic(bgHex) {
  const dark = luminance(bgHex) <= 0.18;
  return Object.fromEntries(Object.entries(SEMANTIC_HUES).map(([k, h]) => [k, fixContrast(fromOklch(dark ? 0.78 : 0.5, 0.14, h), bgHex, 4.5)]));
}

// Harmonies: hue offsets in OKLCH, so steps look evenly spaced. Each entry is [hue offset, lightness change, chroma factor, role].
export const HARMONIES = {
  monochromatic: { name: "Monochromatic", note: "One hue in several values.", steps: [[0, 0, 1, "primary"], [0, 0.16, 0.7, "secondary"], [0, -0.18, 0.9, "accent"], [0, 0.3, 0.4, "extra"], [0, -0.3, 0.7, "extra"]] },
  analogous: { name: "Analogous", note: "Neighbouring hues within 60 degrees.", steps: [[0, 0, 1, "primary"], [-30, 0.04, 0.9, "secondary"], [30, -0.04, 1, "accent"], [-15, 0.2, 0.6, "extra"], [15, -0.2, 0.8, "extra"]] },
  complementary: { name: "Complementary", note: "The opposite hue as the accent.", steps: [[0, 0, 1, "primary"], [0, 0.18, 0.6, "secondary"], [180, 0, 1, "accent"], [180, 0.2, 0.5, "extra"], [0, -0.22, 0.8, "extra"]] },
  "split-complementary": { name: "Split-complementary", note: "The two hues beside the opposite.", steps: [[0, 0, 1, "primary"], [150, 0, 0.9, "secondary"], [210, 0, 1, "accent"], [0, 0.2, 0.5, "extra"], [0, -0.2, 0.8, "extra"]] },
  triadic: { name: "Triadic", note: "Three hues 120 degrees apart.", steps: [[0, 0, 1, "primary"], [120, 0, 0.9, "secondary"], [240, 0, 1, "accent"], [0, 0.22, 0.5, "extra"], [120, -0.2, 0.8, "extra"]] },
  tetradic: { name: "Tetradic", note: "Four hues 90 degrees apart.", steps: [[0, 0, 1, "primary"], [90, 0, 0.9, "secondary"], [180, 0, 1, "accent"], [270, 0, 0.9, "extra"], [0, 0.22, 0.5, "extra"]] },
  "neutral-accent": { name: "Neutral + accent", note: "Near-neutrals of the same hue, your color as the only accent.", steps: [[0, 0, 1, "accent"], [0, -0.05, 0.12, "primary"], [0, 0.15, 0.08, "secondary"], [0, 0.3, 0.05, "extra"], [0, -0.3, 0.1, "extra"]] },
  tonal: { name: "Tonal", note: "One hue, even lightness steps, chroma kept.", steps: [[0, 0, 1, "primary"], [0, 0.12, 1, "secondary"], [0, -0.12, 1, "accent"], [0, 0.24, 1, "extra"], [0, -0.24, 1, "extra"]] },
  "warm-cool": { name: "Warm / cool variations", note: "The same color pushed toward warm (orange) and cool (blue).", steps: [[0, 0, 1, "primary"], ["warm", 0.02, 1, "secondary"], ["cool", -0.02, 1, "accent"], ["warm2", 0.06, 0.9, "extra"], ["cool2", -0.06, 0.9, "extra"]] },
};
// Hue moved toward a target hue by a fixed amount, the short way round.
const toward = (h, target, amt) => { const d = ((target - h + 540) % 360) - 180; return h + Math.sign(d) * Math.min(Math.abs(d), amt); };
export function harmony(hex, type, adj = {}) {
  const def = HARMONIES[type]; if (!def) return null;
  const [L0, C0, h0] = toOklch(hex);
  const { hue = 0, sat = 0, light = 0 } = adj;
  const swatches = def.steps.map(([dh, dL, cm, role], i) => {
    if (i === 0 && !hue && !sat && !light) return { hex: hex.toUpperCase(), role };
    const h = typeof dh === "number" ? h0 + dh : toward(h0, dh.startsWith("warm") ? 55 : 250, dh.endsWith("2") ? 50 : 25);
    return { hex: fromOklch(L0 + dL + light, Math.max(0.005, C0 * cm * (1 + sat)), h + hue), role };
  });
  return { type, name: def.name, note: def.note, swatches };
}
// Six roles for a page: brand roles from the harmony, ground and text built from the base hue and contrast-fixed.
export function harmonyRoles(h, dark = false) {
  const by = (r) => (h.swatches.find((s) => s.role === r) || h.swatches[0]).hex;
  const [, C, hue] = toOklch(h.swatches[0].hex), c = Math.min(C, 0.03);
  const background = fromOklch(dark ? 0.18 : 0.975, c * 0.5, hue), surface = fromOklch(dark ? 0.24 : 0.93, c * 0.7, hue);
  let text = fixContrast(fromOklch(dark ? 0.94 : 0.22, c * 0.6, hue), background, 7);
  text = fixContrast(text, surface, 4.5);
  return { primary: by("primary"), secondary: by("secondary"), accent: by("accent"), background, surface, text };
}

const verdict = (r) =>
  r >= 7 ? "AAA body" : r >= 4.5 ? "AA body" : r >= 3 ? "large text and UI only" : "fails, decorative only";

function profiles() {
  const out = new Map();
  for (const s of load("styles.json").styles) {
    if (out.has(s.profile)) continue;
    const path = join(LIB, s.profile);
    out.set(s.profile, existsSync(path) ? readFileSync(path, "utf8") : null);
  }
  return out;
}

function section(md, id) {
  if (!md) return null;
  const m = md.split(/^## /m).find((part) => part.split("\n")[0].trim() === id);
  return m ? "## " + m.trimEnd() : null;
}

function args(argv) {
  const opts = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) opts[argv[i].slice(2)] = (argv[i + 1] ?? "").toLowerCase(), i++;
    else pos.push(argv[i]);
  }
  return { opts, pos };
}

const has = (list, v) => (list || []).some((x) => String(x).toLowerCase().includes(v));

function find(opts) {
  const { styles } = load("styles.json");
  const hits = styles.filter((s) => {
    if (opts.category && !s.category.includes(opts.category)) return false;
    if (opts.facet && s.facet !== opts.facet) return false;
    if (opts.mood && !has(s.mood, opts.mood)) return false;
    if (opts.medium && !has(s.medium, opts.medium)) return false;
    if (opts.use && !has(s.use_cases, opts.use)) return false;
    if (opts.motion && !has(s.motion_type, opts.motion)) return false;
    if (opts.typography && !has(s.typography_tags, opts.typography)) return false;
    if (opts.layout && !has(s.layout_tags, opts.layout)) return false;
    if (opts.palette && !s.compatible_palettes.includes(opts.palette)) return false;
    if (opts.text) {
      const blob = [s.id, s.name, s.summary, s.summary_th || "", ...s.aliases, ...s.mood, ...s.use_cases].join(" ").toLowerCase();
      if (!opts.text.split(/\s+/).every((w) => blob.includes(w))) return false;
    }
    return true;
  });
  for (const s of hits) console.log(`${s.id.padEnd(30)} [${s.facet} / ${s.category}] ${s.summary}`);
  if (!hits.length) console.log("No match. Loosen a filter, or try --text with a single word.");
}

function palettes(opts) {
  const hits = load("palettes.json").palettes.filter((p) => {
    if (opts.category && p.category !== opts.category) return false;
    if (opts.mood && !has(p.mood, opts.mood)) return false;
    if (opts.style && !stylesFor(p.id).includes(opts.style)) return false;
    if (opts.use && !has(p.use_cases, opts.use)) return false;
    if (opts.ground && ground(p) !== opts.ground) return false;
    if (opts.text) {
      const blob = [p.id, p.name, ...(p.aliases || []), ...p.mood, ...p.use_cases, ...p.colors.map((c) => c.name)].join(" ").toLowerCase();
      if (!opts.text.split(/\s+/).every((w) => blob.includes(w))) return false;
    }
    return true;
  });
  for (const p of hits) {
    console.log(`${p.id.padEnd(22)} [${p.category}, ${ground(p)}] ${p.name}: ${p.colors.map((c) => c.hex).join(" ")}`);
  }
  if (!hits.length) console.log("No match.");
}

function showStyle(id) {
  const s = load("styles.json").styles.find((x) => x.id === id);
  if (!s) return fail(`Unknown style "${id}". Run: find --text <word>`);
  const { profile, preview, ...meta } = s;
  for (const [k, v] of Object.entries(meta)) {
    const val = Array.isArray(v) ? v.map((x) => (typeof x === "object" ? JSON.stringify(x) : x)).join("; ") : v;
    console.log(`${k}: ${val || "(none)"}`);
  }
  console.log("\n" + (section(profiles().get(profile), id) ?? `(profile section missing in ${profile})`));
}

// Palette-to-style fit lives once, in each style's compatible_palettes.
function stylesFor(paletteId) {
  return load("styles.json").styles.filter((s) => s.compatible_palettes.includes(paletteId)).map((s) => s.id);
}

function pairColor(p, role) {
  return p.colors.find((c) => c.role === role || c.name === role);
}

function showPalette(id) {
  const p = load("palettes.json").palettes.find((x) => x.id === id);
  if (!p) return fail(`Unknown palette "${id}". Run: palettes`);
  console.log(`${p.name} (${p.id}) [${p.category}, ${ground(p)} ground]  source: ${p.source}${p.aliases ? `  also called: ${p.aliases.join(", ")}` : ""}`);
  for (const c of p.colors) console.log(`  ${c.hex}  ${c.name.padEnd(18)} ${c.role.padEnd(11)} ~${c.share}%`);
  console.log("Text pairs:");
  for (const t of p.text_pairs) {
    const [fg, bg] = [pairColor(p, t.fg), pairColor(p, t.bg)];
    const r = contrast(fg.hex, bg.hex);
    const warn = r < THRESHOLD[t.use] ? "  WARNING: below threshold" : "";
    console.log(`  ${fg.name} on ${bg.name} (${t.use}): ${r.toFixed(2)} ${verdict(r)}${warn}`);
  }
  for (const t of p.avoid_pairs) {
    const [fg, bg] = [pairColor(p, t.fg), pairColor(p, t.bg)];
    console.log(`  AVOID for text: ${fg.name} on ${bg.name}: ${contrast(fg.hex, bg.hex).toFixed(2)}`);
  }
  const bg = (p.colors.find((c) => c.role === "background") || p.colors[0]).hex;
  console.log("Semantic (derived, not brand colors; each 4.5:1 or more on the background):");
  for (const [k, v] of Object.entries(semantic(bg))) console.log(`  ${k.padEnd(8)} ${v}  ${contrast(v, bg).toFixed(2)}`);
  console.log(`Notes: ${p.contrast_notes}\nStyles: ${stylesFor(p.id).join(", ")}\nUse cases: ${p.use_cases.join(", ")}\nExample: ${p.example}`);
}

function showPreset(id) {
  const pr = load("presets.json").presets.find((x) => x.id === id);
  if (!pr) return fail(`Unknown preset "${id}".`);
  const { styles } = load("styles.json");
  console.log(JSON.stringify(pr, null, 2));
  for (const sid of [pr.primary_style, ...pr.secondary_styles]) {
    const s = styles.find((x) => x.id === sid);
    console.log(`\n${sid === pr.primary_style ? "Primary" : "Secondary"}: ${s.name}: ${s.summary}`);
  }
  console.log("\nRun `style <id>` and `palette <id>` for the full profiles.");
}

function showHarmony(hex, type) {
  const norm = /^#?[0-9a-f]{6}$/i.test(hex || "") ? "#" + hex.replace("#", "").toUpperCase() : null;
  if (!norm) return fail("Usage: harmony <#RRGGBB> [type]. Types: " + Object.keys(HARMONIES).join(", "));
  for (const t of type ? [type] : Object.keys(HARMONIES)) {
    const h = harmony(norm, t);
    if (!h) return fail(`Unknown harmony "${t}". Types: ${Object.keys(HARMONIES).join(", ")}`);
    console.log(`${h.name} (${t}): ${h.note}`);
    console.log("  " + h.swatches.map((s) => `${s.hex} ${s.role}`).join("  "));
    for (const dark of [false, true]) {
      const r = harmonyRoles(h, dark);
      console.log(`  ${dark ? "dark " : "light"} roles: ${Object.entries(r).map(([k, v]) => `${k} ${v}`).join(", ")}; text on background ${contrast(r.text, r.background).toFixed(2)}`);
    }
  }
}

function fail(msg) {
  console.error(msg);
  process.exitCode = 1;
}

function check() {
  const errors = [];
  const warnings = [];
  const { vocabulary, categories, styles } = load("styles.json");
  const { categories: pcats, palettes: pals } = load("palettes.json");
  const { presets } = load("presets.json");
  const styleIds = new Set(styles.map((s) => s.id));
  const palIds = new Set(pals.map((p) => p.id));
  const catIds = new Set(categories.map((c) => c.id));
  const { facets = [], featured = [] } = load("styles.json");
  const facetIds = new Set(facets.map((f) => f.id));
  for (const id of featured) if (!styleIds.has(id)) errors.push(`featured: unknown style ${id}`);

  // Contrast math self-test against known WCAG values.
  for (const [a, b, want] of [["#000000", "#FFFFFF", 21], ["#FFFFFF", "#FFFFFF", 1], ["#767676", "#FFFFFF", 4.54], ["#777777", "#FFFFFF", 4.48]]) {
    if (Math.abs(contrast(a, b) - want) > 0.01) errors.push(`contrast self-test: ${a} on ${b} gave ${contrast(a, b).toFixed(2)}, expected ${want}`);
  }
  for (const hex of ["#2F6B4F", "#D7261E", "#F2C200"]) {
    if (fromOklch(...toOklch(hex)) !== hex) errors.push(`OKLCH round trip failed for ${hex}`);
  }
  const md = profiles();

  const dup = (list, what) => {
    const seen = new Set();
    for (const x of list) seen.has(x) ? errors.push(`duplicate ${what}: ${x}`) : seen.add(x);
  };
  dup(styles.map((s) => s.id), "style id");
  dup(pals.map((p) => p.id), "palette id");
  dup(presets.map((p) => p.id), "preset id");
  dup(styles.flatMap((s) => [s.name, ...s.aliases].map((n) => n.toLowerCase())), "style name or alias");

  for (const s of styles) {
    for (const k of STYLE_KEYS) if (!(k in s)) errors.push(`style ${s.id}: missing ${k}`);
    if (!catIds.has(s.category)) errors.push(`style ${s.id}: unknown category ${s.category}`);
    if (!facetIds.has(s.facet)) errors.push(`style ${s.id}: unknown facet ${s.facet}`);
    if ("research" in s && !["verified", "unverified"].includes(s.research)) errors.push(`style ${s.id}: research must be verified or unverified`);
    for (const p of s.compatible_palettes || []) if (!palIds.has(p)) errors.push(`style ${s.id}: unknown palette ${p}`);
    for (const r of s.related_styles || []) if (!styleIds.has(r)) errors.push(`style ${s.id}: unknown related style ${r}`);
    for (const [key, vocab] of Object.entries(vocabulary)) {
      for (const v of s[key] || []) if (!vocab.includes(v)) errors.push(`style ${s.id}: "${v}" is not in vocabulary.${key}`);
    }
    if ((s.compatible_palettes || []).length < 2) warnings.push(`style ${s.id}: fewer than 2 compatible palettes`);
    for (const img of s.reference_images || []) {
      if (!img.path || !img.source || !img.kind) errors.push(`style ${s.id}: reference image needs path, source, kind`);
      else if (!existsSync(join(LIB, img.path))) errors.push(`style ${s.id}: reference image not found ${img.path}`);
    }
    const sec = section(md.get(s.profile), s.id);
    if (!sec) errors.push(`style ${s.id}: no "## ${s.id}" section in ${s.profile}`);
    else for (const f of PROFILE_FIELDS) {
      if (!sec.includes(`**${f}:**`)) errors.push(`style ${s.id}: profile missing "${f}"`);
    }
  }

  for (const [file, text] of md) {
    if (text === null) { errors.push(`missing profile file ${file}`); continue; }
    for (const id of text.match(/^## (\S+)/gm) || []) {
      if (!styleIds.has(id.slice(3))) errors.push(`${file}: section ${id.slice(3)} has no styles.json entry`);
    }
  }

  const pcatIds = new Set(pcats.map((c) => c.id));
  for (const p of pals) {
    for (const k of PALETTE_KEYS) if (!(k in p)) errors.push(`palette ${p.id}: missing ${k}`);
    if (!pcatIds.has(p.category)) errors.push(`palette ${p.id}: unknown category ${p.category}`);
    const bgc = p.colors.find((c) => c.role === "background");
    if (!bgc) errors.push(`palette ${p.id}: needs a background role`);
    else for (const [k, v] of Object.entries(semantic(bgc.hex))) if (contrast(v, bgc.hex) < 4.5) errors.push(`palette ${p.id}: derived ${k} ${v} is below 4.5:1 on the background`);
    for (const c of p.colors || []) {
      if (!/^#[0-9A-F]{6}$/.test(c.hex)) errors.push(`palette ${p.id}: hex must be #RRGGBB uppercase: ${c.hex}`);
      if (!ROLES.has(c.role)) errors.push(`palette ${p.id}: unknown role ${c.role}`);
    }
    const total = (p.colors || []).reduce((a, c) => a + c.share, 0);
    if (Math.abs(total - 100) > 1) errors.push(`palette ${p.id}: shares add to ${total}, expected 100`);
    for (const t of p.text_pairs || []) {
      const [fg, bg] = [pairColor(p, t.fg), pairColor(p, t.bg)];
      if (!fg || !bg) { errors.push(`palette ${p.id}: text pair refers to unknown color ${t.fg}/${t.bg}`); continue; }
      const r = contrast(fg.hex, bg.hex);
      if (!(t.use in THRESHOLD)) errors.push(`palette ${p.id}: text pair use must be body, large or ui`);
      else if (r < THRESHOLD[t.use]) errors.push(`palette ${p.id}: ${fg.name} on ${bg.name} is ${r.toFixed(2)}, below ${THRESHOLD[t.use]} for ${t.use}`);
    }
    for (const t of p.avoid_pairs || []) {
      const [fg, bg] = [pairColor(p, t.fg), pairColor(p, t.bg)];
      if (!fg || !bg) { errors.push(`palette ${p.id}: avoid pair refers to unknown color`); continue; }
      if (contrast(fg.hex, bg.hex) >= 4.5) warnings.push(`palette ${p.id}: avoid pair ${fg.name} on ${bg.name} actually passes 4.5`);
    }
    if (!(p.text_pairs || []).some((t) => t.use === "body")) errors.push(`palette ${p.id}: needs at least one body text pair`);
    if (!/^(authored|estimated-from-screenshot|verified: .+)$/.test(p.source || "")) {
      errors.push(`palette ${p.id}: source must be "authored", "estimated-from-screenshot" or "verified: <source>"`);
    }
  }

  for (const p of pals) {
    if (!styles.some((s) => s.compatible_palettes.includes(p.id))) warnings.push(`palette ${p.id}: no style lists it`);
  }

  for (const pr of presets) {
    for (const sid of [pr.primary_style, ...pr.secondary_styles]) if (!styleIds.has(sid)) errors.push(`preset ${pr.id}: unknown style ${sid}`);
    for (const pid of [pr.palette, ...pr.alt_palettes]) if (!palIds.has(pid)) errors.push(`preset ${pr.id}: unknown palette ${pid}`);
  }

  for (const f of ["styles.json", "palettes.json", "presets.json", ...md.keys()]) {
    if (readFileSync(join(LIB, f), "utf8").includes("\u2014")) errors.push(`${f}: contains an em-dash`);
  }

  for (const w of warnings) console.log(`warning: ${w}`);
  for (const e of errors) console.log(`error: ${e}`);
  console.log(`${styles.length} styles, ${pals.length} palettes, ${presets.length} presets. ${errors.length} errors, ${warnings.length} warnings.`);
  if (errors.length) process.exitCode = 1;
}

const [cmd, ...rest] = process.argv.slice(2);
const { opts, pos } = args(rest);
const FLAGS = {
  find: ["text", "category", "facet", "mood", "medium", "use", "motion", "typography", "layout", "palette"],
  palettes: ["text", "category", "mood", "style", "use", "ground"],
};
const unknown = Object.keys(opts).filter((k) => !(FLAGS[cmd] || []).includes(k));
if (unknown.length) {
  console.log(`Unknown option --${unknown[0]} for ${cmd}. Allowed: ${(FLAGS[cmd] || []).map((f) => "--" + f).join(" ") || "none"}`);
  process.exit(1);
}
switch (cmd) {
  case "find": find(opts); break;
  case "palettes": palettes(opts); break;
  case "style": showStyle(pos[0]); break;
  case "palette": showPalette(pos[0]); break;
  case "preset": showPreset(pos[0]); break;
  case "contrast": {
    const bad = [pos[0], pos[1]].filter((c) => !/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c ?? ""));
    if (bad.length) {
      console.log(`Not a hex color: ${bad.map((c) => c ?? "(missing)").join(", ")}. Use #RGB or #RRGGBB.`);
      process.exit(1);
    }
    const r = contrast(pos[0], pos[1]);
    console.log(`${r.toFixed(2)}: ${verdict(r)}`);
    if (r < 4.5) console.log("WARNING: not readable as body text (WCAG 2.2 needs 4.5).");
    break;
  }
  case "harmony": showHarmony(pos[0], pos[1]); break;
  case "check": check(); break;
  default:
    console.log("Commands: find, palettes, style <id>, palette <id>, preset <id>, harmony <hex> [type], contrast <fg> <bg>, check");
}
