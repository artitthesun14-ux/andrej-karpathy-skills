#!/usr/bin/env node
// Visual style library CLI. No dependencies. Run with Node 18+.
//
//   node library.mjs find [--text q] [--category c] [--mood m] [--medium m] [--use u]
//                         [--motion m] [--typography t] [--layout l] [--palette p]
//   node library.mjs palettes [--text q] [--category c] [--mood m] [--style s] [--use u]
//   node library.mjs style <id>        metadata plus the full profile section
//   node library.mjs palette <id>      palette with contrast table and warnings
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
  "id", "name", "category", "aliases", "summary", "mood", "typography_tags", "layout_tags",
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
    if (opts.mood && !has(s.mood, opts.mood)) return false;
    if (opts.medium && !has(s.medium, opts.medium)) return false;
    if (opts.use && !has(s.use_cases, opts.use)) return false;
    if (opts.motion && !has(s.motion_type, opts.motion)) return false;
    if (opts.typography && !has(s.typography_tags, opts.typography)) return false;
    if (opts.layout && !has(s.layout_tags, opts.layout)) return false;
    if (opts.palette && !s.compatible_palettes.includes(opts.palette)) return false;
    if (opts.text) {
      const blob = [s.id, s.name, s.summary, ...s.aliases, ...s.mood, ...s.use_cases].join(" ").toLowerCase();
      if (!opts.text.split(/\s+/).every((w) => blob.includes(w))) return false;
    }
    return true;
  });
  for (const s of hits) console.log(`${s.id.padEnd(30)} [${s.category}] ${s.summary}`);
  if (!hits.length) console.log("No match. Loosen a filter, or try --text with a single word.");
}

function palettes(opts) {
  const hits = load("palettes.json").palettes.filter((p) => {
    if (opts.category && p.category !== opts.category) return false;
    if (opts.mood && !has(p.mood, opts.mood)) return false;
    if (opts.style && !stylesFor(p.id).includes(opts.style)) return false;
    if (opts.use && !has(p.use_cases, opts.use)) return false;
    if (opts.text) {
      const blob = [p.id, p.name, ...p.mood, ...p.colors.map((c) => c.name)].join(" ").toLowerCase();
      if (!opts.text.split(/\s+/).every((w) => blob.includes(w))) return false;
    }
    return true;
  });
  for (const p of hits) {
    console.log(`${p.id.padEnd(22)} [${p.category}] ${p.name}: ${p.colors.map((c) => c.hex).join(" ")}`);
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
  console.log(`${p.name} (${p.id}) [${p.category}]  source: ${p.source}`);
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
  find: ["text", "category", "mood", "medium", "use", "motion", "typography", "layout", "palette"],
  palettes: ["text", "category", "mood", "style", "use"],
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
    const r = contrast(pos[0], pos[1]);
    console.log(`${r.toFixed(2)}: ${verdict(r)}`);
    if (r < 4.5) console.log("WARNING: not readable as body text (WCAG 2.2 needs 4.5).");
    break;
  }
  case "check": check(); break;
  default:
    console.log("Commands: find, palettes, style <id>, palette <id>, preset <id>, contrast <fg> <bg>, check");
}
