---
name: visual-style
description: Pick, combine, and apply a visual style and a color palette from the built-in style library (editorial, Swiss, neoclassical, poster, botanical, tactile, minimal, industrial, motion, illustration) to real work, then review the result against the style profile.
disable-model-invocation: true
---

# /visual-style (Visual Style Library)

Principle: choose style and color as two separate systems, write down the direction, apply it to the real work, then check the result against it.

## Purpose

Give art direction a searchable source: style profiles that say exactly how a look is built (type, grid, composition, image, material, motion), palettes with roles and checked contrast, and presets for common jobs.

## Library

Everything lives in this skill's folder. Load only what the task needs.

| File | Holds |
|---|---|
| `library/styles.json` | Searchable metadata per style: category, mood, type, layout, medium, use cases, motion, compatible palettes |
| `library/styles/<category>.md` | Full profile per style, one `## <id>` section each |
| `library/palettes.json` | Palettes: HEX, names, roles, shares, readable text pairs, pairs to avoid, notes |
| `library/presets.json` | Ready combinations for common jobs, all adjustable |
| `library/gallery.html` | Gallery: search, filters, color picking and palette building, style vs palette compare, a copyable one-line command (Gallery command), and an optional Works tab (serve the folder, see `references/library-schema.md`) |
| `references/style-direction.md` | Search, shortlist, combine, design direction, and review procedure |
| `references/library-schema.md` | Field definitions, merged names, rules for adding entries |

Search and load with the CLI in `scripts/library.mjs` (commands in `references/style-direction.md` > Search the library).

## Workflow

### 1. Understand the task

If the message is a gallery command (`style=`, `palette=`, `preset=`, `colors=`), read it with `references/style-direction.md` > Gallery command; the choice is made, so skip search and shortlist and go to the design direction.

Name the work type (presentation, website, animation, infographic, brand design, product visualization, data storytelling), the audience, the medium, and hard constraints (brand colors, fonts, accessibility, deadline). Take these from the conversation, the repo, or an existing design system first. Ask only for what is missing and changes the choice.

### 2 to 5. Search, shortlist, combine, direct

Follow `references/style-direction.md`: search the library, present a shortlist of 3 when no style is chosen, combine style and color (including mixing two styles or the person's own colors), and write the design direction.

### 6. Apply to the actual work

Translate the profile into the artifact, not into a prompt, unless the person only asked for a prompt.

- HTML and CSS: palette roles become color tokens, the type rules become a scale, the grid becomes CSS Grid. Follow `implementation_notes`.
- Slides: follow `presentation-design` for slide roles; this skill only sets the look.
- SVG diagrams, 3D scenes, charts: follow `technical-visualization` and `dataviz`, themed with the palette roles.
- Animation: follow `motion-design` and `animation-implementation`, using the style's motion language.
- Image or asset prompts: start from the style's `prompt_recipe`, add the palette colors and the subject.

Use real fonts with fallbacks. Never invent image URLs; use the person's assets, licensed sources, or synthetic visuals (shapes, swatches, diagrams) labelled as such.

### 7. Review against the direction

Follow `references/style-direction.md` > Review against the direction.

## Rules

- Style and color stay separate: never hard-wire a palette into a style decision the person did not ask for.
- Do not copy a specific designer's or brand's work. Use the principles in the profile.
- Never fabricate sources, URLs, HEX values, or official color names (for example Pantone numbers). Colors taken from a screenshot are estimates and are labelled `estimated-from-screenshot`.
- Keep text readable: contrast checked, body text at a sensible size, layouts working at phone width.
- Do not add motion that does not help understanding. Always provide a reduced-motion fallback.
- Do not let every project drift to the same look: the shortlist must contain real differences.
- When adding to the library, follow `references/library-schema.md` and run `check`.
- Do not call another user-invoked skill. Suggest the next command instead.

## Workflow position

Independent. `/create-presentation` uses the same library and `references/style-direction.md` for decks. Fills the ART DIRECTION step of `/visual-production`, and can feed `/ui-design` with a style and palette. After building, `/code-review` still applies to code.

See `README.md` for the full picture.
