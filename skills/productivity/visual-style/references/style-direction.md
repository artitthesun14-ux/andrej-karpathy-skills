# Style Direction

Shared procedure for choosing a style and palette and turning it into a design direction. Used by `/visual-style` and `/create-presentation`. Paths are relative to the `visual-style` skill folder.

## Search the library

Search and load with the CLI (Node 18+, no install), run from the `visual-style` skill folder:

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

Run `find` with two or three filters taken from the task (work type, audience, medium, constraints), and `palettes` for the candidates. Read full profiles only for the styles you will propose. Never load all profile files.

## Present a shortlist

If the person has not chosen a style, offer 3 options that differ in Visual DNA, not only in color. For each, in a few lines:

1. Style name and personality
2. Why it fits this work
3. Palette (id, 3 to 4 colors with roles)
4. Typography and composition
5. Motion approach, if the work moves

If the person already named a style, palette, or preset, use it and skip the shortlist. Map their words to an id via `find --text`; aliases are searchable.

## Combine style and color

Supported choices:

- **A style as is**, with one of its `compatible_palettes`.
- **A separate palette** with any style. If it is not in the style's compatible list, say why it still works and check its text pairs.
- **Two styles mixed.** Name one primary and one secondary. The primary owns typography, grid, and composition. The secondary contributes one layer only (texture, image treatment, or motion). If both want to own the same layer, the primary wins.
- **The person's own colors.** Assign each a role (background, surface, text, text-muted, primary, secondary, accent, signal, line), estimate shares, and run `contrast` for every text pair. Warn on any body pair below 4.5:1 and any large-text or UI pair below 3:1, and propose the nearest passing shade.
- **A variant.** Change one axis of an existing style (palette, type family, density, or motion) and name it `<style-id>` plus the change, for example "swiss-international, serif headlines".
- **A preset**, adjusted through its `adjustable` fields.

## Write the design direction

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

## Review against the direction

Render the result and compare it with the design direction and the style profile on: color (roles and shares), typography, composition, spacing, material, motion, consistency across pages or slides, and readability (contrast, size, responsive layout). Use `visual-review` for the rendering and inspection steps. Fix only what deviates from the direction or breaks readability, then re-inspect. Report what was checked and how.
