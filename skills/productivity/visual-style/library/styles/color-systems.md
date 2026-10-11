# Color and Brand Systems

Color used as a system: each color has a defined role (primary, secondary, accent, background, text). These entries describe how color is structured. The concrete colors live in `palettes.json`; pick a palette with each system.

## swatch-card-presentation

**Visual DNA:** Colors shown as labelled chips: a solid block on top and a white strip below with name and code, laid out like a swatch book or fan deck.
**Design principles:** Make color tangible and nameable. Each chip has the same size and label format so colors compare fairly.
**Color behavior:** The palette itself is the content. The surrounding page stays neutral white or light grey so it does not tint perception.
**Typography:** Small grotesk for names, monospace or tabular figures for codes (HEX, RGB). Consistent label structure.
**Layout:** Uniform grid of cards, or a fanned row. Optional large hero chip for the key color.
**Composition:** Even rhythm; one chip enlarged or lifted to show the primary.
**Image treatment:** Optional photographs cropped to match each chip, showing the color in use.
**Texture and material:** Slight card shadow or paper edge to suggest physical chips.
**Motion language:** Chips deal in one after another (stagger 60 to 100 ms) or fan open from a stack.
**Best for:** Brand guidelines, palette reveals, product colorways, moodboards.
**Avoid when:** Colors are only supporting elements and do not deserve a stage of their own.
**Differs from:** color-blocking uses colors as layout zones; swatch-card-presentation shows colors as specimens.
**Prompt recipe:** "Swatch card presentation, five equal color chips with a white label strip showing name and HEX code in monospace, neutral light grey page, one chip enlarged as hero."
**Implementation notes:** Never label a chip with a Pantone name or number unless the value is verified from an official source; use "Pantone-inspired" or the palette's own color names. Show contrast results next to each text-safe pair.

## limited-palette

**Visual DNA:** Two or three inks plus paper, with tints (percentages) of those inks doing the work a larger palette would.
**Design principles:** Constraint creates cohesion. Every new need is solved with a tint, a pattern, or a shape, not a new color.
**Color behavior:** Ink A (dominant, about 60 percent of colored area), ink B (supporting), paper. Tints at 20, 40, 60, 80 percent. Overprints create a third color where inks overlap.
**Typography:** Any; set in ink A or black. Type never introduces a new color.
**Layout:** Any, but zones are defined by tints rather than new hues.
**Composition:** Contrast through value (tints) rather than hue.
**Image treatment:** Photos as duotones in the two inks.
**Texture and material:** Optional halftone or riso grain.
**Motion language:** Tint shifts and duotone cross-fades rather than hue changes.
**Best for:** Presentation themes, brand systems, infographics, budget print runs.
**Avoid when:** Many data series need distinct colors (more than 4 categories).
**Differs from:** monochromatic-system uses one hue; limited-palette uses two or three. complementary-system is about the relationship of two opposite hues; limited-palette is about restraint in count.
**Prompt recipe:** "Limited two-color palette design, fluoro pink and blue on newsprint, tints at 20 to 80 percent, duotone photographs, overprint where inks overlap."
**Implementation notes:** Generate tints with `color-mix(in srgb, var(--ink-a) 40%, var(--paper))`. Duotone images with CSS filters or SVG `feColorMatrix`. Check each tint used for text.

## complementary-system

**Visual DNA:** Two hues from opposite sides of the color wheel. One dominates the area; the other appears in small doses as the point of tension. Neutrals separate them.
**Design principles:** Contrast draws the eye. Unequal proportions (around 80 to 20 or 90 to 10) prevent vibration and decide which hue leads.
**Color behavior:** Dominant hue for grounds and large shapes, complement for the call to action, highlights, or key data point. Never place both at equal lightness edge to edge as text.
**Typography:** Neutral (black, white, or very dark) for text so the pair stays in shapes.
**Layout:** Any.
**Composition:** The complement placed exactly where attention should go.
**Image treatment:** Photos graded toward the dominant hue so the complement pops.
**Texture and material:** Flat.
**Motion language:** The complement appears last or pulses once to mark the key moment.
**Best for:** Comparisons, before and after, brand accents, calls to action.
**Avoid when:** Calm or trust is the goal; or for long reading surfaces.
**Differs from:** analogous-system is harmonious and low-tension; complementary-system is high-tension by design.
**Prompt recipe:** "Complementary color system, tomato red dominant field, mint accent on one key element, black text, 85 to 15 ratio, flat shapes."
**Implementation notes:** Equal-lightness complements vibrate as text on each other; the palette `avoid_pairs` lists these. Run `contrast` for every text pair.

## analogous-system

**Visual DNA:** Neighboring hues (for example green to sage to olive, or lilac to peach) that shift gradually, with one deep color as the anchor for text.
**Design principles:** Harmony and immersion. Changes are gentle, so hierarchy must come from value and scale.
**Color behavior:** Three to four adjacent hues at varied lightness; the darkest one carries text; gradients and bands between neighbors.
**Typography:** Soft serif or humanist sans in the anchor color.
**Layout:** Full-bleed bands or gradient fields behind content.
**Composition:** Calm, horizontal flow; color steps lead the eye in one direction.
**Image treatment:** Photos graded into the same hue family.
**Texture and material:** Soft gradients, slight grain to prevent banding.
**Motion language:** Slow hue drifts and gradient shifts (6 to 12 s), cross-fades between neighbors.
**Best for:** Wellness, illustration, mood pieces, gradient backgrounds, nature brands.
**Avoid when:** A strong call to action must stand out (add one complementary accent then).
**Differs from:** monochromatic-system keeps one hue; analogous-system spans several neighbors. complementary-system creates tension; analogous-system removes it.
**Prompt recipe:** "Analogous color system, horizontal bands shifting from forest green through moss to sage on warm ivory, soft grain, forest green serif text, calm and natural."
**Implementation notes:** Use `linear-gradient(in oklch, ...)` where supported to avoid muddy midpoints. Add a noise overlay to prevent gradient banding.

## monochromatic-system

**Visual DNA:** One hue across a lightness ramp (for example 50 to 900). Every element is a step of the same color; hierarchy comes only from value.
**Design principles:** Unity and focus. Contrast discipline is everything: text sits at least three to four steps from its ground.
**Color behavior:** Background at the lightest steps, surfaces one or two steps darker, text at the darkest step, accent at a saturated middle step.
**Typography:** Any clean face, in the darkest step.
**Layout:** Layered cards and panels distinguished by step, not by borders.
**Composition:** Depth through stacking tones.
**Image treatment:** Duotone or tinted photos in the hue.
**Texture and material:** Flat or soft shadows tinted with the hue.
**Motion language:** Value shifts on interaction (a card darkens one step), slow fades.
**Best for:** Data stories with sequential scales, chart themes, brand systems, architecture portfolios (grey monochrome), dark modes.
**Avoid when:** Categorical data with more than three categories, or status colors (error, success) are essential; add a neutral and a signal then.
**Differs from:** limited-palette uses two or three hues; monochromatic-system uses one. tonal-botanical applies the same idea to botanical imagery.
**Prompt recipe:** "Monochromatic indigo design system, ten-step lightness ramp, light indigo background, mid-indigo cards, darkest indigo text, sequential chart in the same hue."
**Implementation notes:** Define the ramp as tokens (`--hue-50` to `--hue-900`). For charts, a sequential ramp encodes order correctly; do not use it for unordered categories.

## color-blocking

**Visual DNA:** Large flat rectangles of saturated color meeting at hard edges, each block holding one piece of content.
**Design principles:** Color as architecture. Each block is a container with a role. Hard edges and no gradients.
**Color behavior:** Three to five saturated colors plus black or white. Adjacent blocks must differ clearly in value, not only hue.
**Typography:** Bold grotesk or condensed sans, in black or white chosen per block for contrast.
**Layout:** Modular grid of unequal blocks (like a Mondrian-style partition but with content).
**Composition:** Balance of block sizes; the largest block holds the key message.
**Image treatment:** Cut-out photos placed on blocks, or none.
**Texture and material:** Flat.
**Motion language:** Blocks slide or wipe in from their edges (250 to 400 ms), color swaps on section change.
**Best for:** Landing page sections, campaigns, agenda slides, sport and youth brands.
**Avoid when:** Long reading, or a calm premium feel is required.
**Differs from:** geometric-composition uses shapes as subjects; color-blocking uses rectangles as containers. swatch-card-presentation shows colors; color-blocking uses them to structure content.
**Prompt recipe:** "High-contrast color blocking layout, large flat rectangles of primary red, blue and yellow meeting at hard edges, bold grotesk text in black or white per block, no gradients."
**Implementation notes:** CSS Grid with `grid-template-areas`. Pick text color per block from the palette's `text_pairs`. On mobile, stack blocks and keep the color order meaningful.
