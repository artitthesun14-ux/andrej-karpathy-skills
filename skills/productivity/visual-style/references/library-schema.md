# Library Schema

Read when adding or editing styles, palettes, or presets, or when a field's meaning is unclear. Run `node scripts/library.mjs check` after any edit.

## Why the split

- `styles.json` holds short, filterable metadata, so search never loads long text.
- `styles/<category>.md` holds the prose profile, one `## <id>` section per style, so a single style loads alone.
- `palettes.json` is independent of styles, so any style can take any palette.
- Which palettes suit which style is stored once, in each style's `compatible_palettes`. A palette's matching styles are derived from it.

## Style entry

A style is one `styles.json` record plus one profile section with the same id.

`styles.json` fields:

| Field | Meaning |
|---|---|
| `id` | kebab-case, unique, stable |
| `name` | Display name |
| `category` | One of `categories[].id` |
| `aliases` | Other names that mean the same style. Searched by `find --text` |
| `summary` | One sentence a designer could sketch from |
| `mood` | 2 to 4 adjectives |
| `typography_tags`, `layout_tags`, `medium`, `motion_type` | Values from `vocabulary` only (enforced by `check`) |
| `use_cases` | Concrete jobs |
| `compatible_palettes` | Palette ids, best fit first, at least 2 |
| `related_styles` | Neighbors that a person might confuse with this one |
| `reference_images` | `[{ "path", "source", "license", "kind" }]`, `kind` is `user-supplied`, `licensed`, `public-domain`, or `generated`. Paths are relative to `library/` and must exist |
| `reference_sources` | Verifiable books, standards, or pages. Leave empty rather than guess |
| `preview` | Gallery hint: `renderer`, `display` and `text` font keys, default `palette` |
| `profile` | Path of the Markdown file holding the profile |

Profile section fields, one bold label each, in this order: Visual DNA, Design principles, Color behavior, Typography, Layout, Composition, Image treatment, Texture and material, Motion language, Best for, Avoid when, Differs from, Prompt recipe, Implementation notes.

Writing rules:

- Every field must be actionable: sizes, ratios, timings, counts, named techniques. "Elegant and modern" is not a description.
- `Differs from` names at least one related style and the concrete difference.
- `Prompt recipe` describes the look in plain terms, never "in the style of <living designer or brand>".

## Palette entry

| Field | Meaning |
|---|---|
| `id`, `name`, `category` | `category` is one of the palette `categories` |
| `mood` | 2 to 4 adjectives |
| `source` | `authored` (made for this library), `estimated-from-screenshot`, or `verified: <source>` |
| `colors` | `[{ "hex", "name", "role", "share" }]`. HEX as uppercase `#RRGGBB`. `role` is background, surface, text, text-muted, primary, secondary, accent, signal, or line. `share` is the approximate percent of area; shares add to 100 |
| `text_pairs` | `[{ "fg", "bg", "use" }]` by color name. `use` is `body` (needs 4.5:1), `large` or `ui` (needs 3:1). `check` fails any pair below its threshold |
| `avoid_pairs` | Pairs that look tempting but are unreadable as text |
| `contrast_notes` | How to use the weak colors safely |
| `use_cases`, `example` | Where it fits, and one concrete application |

Thresholds follow WCAG 2.2 (https://www.w3.org/TR/WCAG22/), success criteria 1.4.3 and 1.4.11.

## Preset entry

`primary_style`, `secondary_styles` with a `secondary_role` sentence, `palette`, `alt_palettes`, a `direction` that records only decisions the styles do not already settle, and `adjustable` fields. Presets never copy rules from profiles.

## Merged and remapped names

Names from the original brief that describe the same Visual DNA were merged as aliases rather than separate entries (for example International Typographic Style, Modernist Grid, Swiss Minimalism, and Functional Typography are aliases of `swiss-international`). Run `find --text <name>` to resolve any of them.

Palette families from the brief (Earth Tone, Pastel, Vivid Primary, Muted Editorial, Dark Technical) are palettes in `palettes.json`, not styles. Category E styles describe how color is structured (swatch cards, limited, complementary, analogous, monochromatic, color blocking).

## Adding an entry

1. Search first (`find --text`). If an existing style has the same Visual DNA, add an alias instead.
2. Add the `styles.json` record and the profile section, or the palette record.
3. Never add a URL, HEX value, or source you have not verified. Colors sampled from an image are `estimated-from-screenshot`. Never call a color an official Pantone color without an official source.
4. Reference images go in `library/references/<style-id>/` with their source and license recorded (see `library/references/README.md`).
5. Run `check`. Fix every error; read every warning.

## Gallery

`library/gallery.html` reads the three JSON files. Browsers block that from `file://`, so serve the folder:

```
cd skills/productivity/visual-style/library && python3 -m http.server 8000
```

Then open http://localhost:8000/gallery.html. Previews are synthetic (drawn from the palette and the style's layout pattern), not reference images.

What it offers:

- Search over all fields (keyword matching with a small Thai/English map, not AI), quick filters (mood, color, use) and an all-filters drawer.
- Tabs for styles, colors, and presets. Colors: a swatch wall of every library color (tap to see palettes that use it), palette browsing, and a 6-role palette builder with live WCAG checks. Generated palettes are labelled and contrast-fixed.
- Compare grids: one style across its palettes or all palettes, one palette across its styles.
- A selection tray and a Review & apply dialog that copies a handoff (prompt or JSON) for `/create-presentation` when the use is a presentation, otherwise `/visual-style`. A palette with no surface role uses its background as the surface.
- A Works tab, shown only when a `works.json` sits next to the page and lists at least one work.

### works.json

Optional, and only in a published copy of the gallery (finished work stays out of the repo). Each work's files sit beside it under `works/<id>/`.

```json
{ "works": [ {
  "id": "q3-board-update", "title": "Q3 Board Update", "kind": "presentation", "slides": 12, "created": "2026-10-12",
  "style": "neoclassical-editorial", "palette": "burgundy-cream",
  "summary": "One line on what it is", "path": "works/q3-board-update/index.html", "cover": "works/q3-board-update/cover.jpg"
} ] }
```

`style` must be a library style id. Use `palette` for a library palette, or `custom` with the six roles (`primary`, `secondary`, `accent`, `background`, `surface`, `text`) as HEX. `cover` is optional; without it the card shows a synthetic sketch. Works are listed newest first by `created`. "Use this style again" puts the work's style and colors into the selection.
