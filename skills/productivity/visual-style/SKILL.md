---
name: visual-style
description: Pick, combine, and apply a visual style and a color palette from the built-in style library (editorial, Swiss, neoclassical, poster, botanical, tactile, minimal, industrial, motion) to real work, then review the result against the style profile.
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
| `library/gallery.html` | Browsable gallery with filters and synthetic previews (serve the folder, see `references/library-schema.md`) |
| `references/library-schema.md` | Field definitions, merged names, rules for adding entries |

Search and load with the CLI (Node 18+, no install), from this skill's folder:

```
node scripts/library.mjs find --medium presentation --mood calm   # also --category --use --motion --typography --layout --palette --text
node scripts/library.mjs style <id>          # metadata plus the one profile section
node scripts/library.mjs palettes --style <id>
node scripts/library.mjs palette <id>        # roles, shares, contrast table, warnings
node scripts/library.mjs preset <id>
node scripts/library.mjs contrast "#hex" "#hex"
node scripts/library.mjs check               # after editing the library
```

Without Node, `grep` the JSON files and read only the matching `## <id>` section of the profile file.

## Workflow

### 1. Understand the task

Name the work type (presentation, website, animation, infographic, brand design, product visualization, data storytelling), the audience, the medium, and hard constraints (brand colors, fonts, accessibility, deadline). Take these from the conversation, the repo, or an existing design system first. Ask only for what is missing and changes the choice.

### 2. Search the library

Run `find` with two or three filters from step 1, and `palettes` for the candidates. Read full profiles only for the styles you will propose. Never load all profile files.

### 3. Present a shortlist

If the person has not chosen a style, offer 3 options that differ in Visual DNA, not only in color. For each, in a few lines:

1. Style name and personality
2. Why it fits this work
3. Palette (id, 3 to 4 colors with roles)
4. Typography and composition
5. Motion approach, if the work moves

If the person already named a style, palette, or preset, use it and skip the shortlist. Map their words to an id via `find --text`; aliases are searchable.

### 4. Combine style and color

Supported choices:

- **A style as is**, with one of its `compatible_palettes`.
- **A separate palette** with any style. If it is not in the style's compatible list, say why it still works and check its text pairs.
- **Two styles mixed.** Name one primary and one secondary. The primary owns typography, grid, and composition. The secondary contributes one layer only (texture, image treatment, or motion). If both want to own the same layer, the primary wins.
- **The person's own colors.** Assign each a role (background, surface, text, text-muted, primary, secondary, accent, signal, line), estimate shares, and run `contrast` for every text pair. Warn on any body pair below 4.5:1 and any large-text or UI pair below 3:1, and propose the nearest passing shade.
- **A variant.** Change one axis of an existing style (palette, type family, density, or motion) and name it `<style-id>` plus the change, for example "swiss-international, serif headlines".
- **A preset**, adjusted through its `adjustable` fields.

### 5. Write the design direction

For medium and large work, state this before building:

```
Style: <primary id> (+ <secondary id>: <its one layer>)
Palette: <id or custom>, roles: background, text, accent, ...
Typography: display face, text face, scale, case and tracking rules
Composition: grid, alignment, focal rule, spacing unit
Image treatment: source, crop, grade
Motion: what moves, why, timing, reduced-motion fallback (or "none")
Avoid: 3 to 5 concrete things this style must not do here
```

For a small change (one component, one slide), skip the written direction and apply it.

### 6. Apply to the actual work

Translate the profile into the artifact, not into a prompt, unless the person only asked for a prompt.

- HTML and CSS: palette roles become color tokens, the type rules become a scale, the grid becomes CSS Grid. Follow `implementation_notes`.
- Slides: follow `presentation-design` for slide roles; this skill only sets the look.
- SVG diagrams, 3D scenes, charts: follow `technical-visualization` and `dataviz`, themed with the palette roles.
- Animation: follow `motion-design` and `animation-implementation`, using the style's motion language.
- Image or asset prompts: start from the style's `prompt_recipe`, add the palette colors and the subject.

Use real fonts with fallbacks. Never invent image URLs; use the person's assets, licensed sources, or synthetic visuals (shapes, swatches, diagrams) labelled as such.

### 7. Review against the direction

Render the result and compare it with the design direction and the style profile on: color (roles and shares), typography, composition, spacing, material, motion, consistency across pages or slides, and readability (contrast, size, responsive layout). Use `visual-review` for the rendering and inspection steps. Fix only what deviates from the direction or breaks readability, then re-inspect. Report what was checked and how.

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

Independent. Fills the ART DIRECTION step of `/visual-production`, and can feed `/ui-design` with a style and palette. After building, `/code-review` still applies to code.

See `README.md` for the full picture.
