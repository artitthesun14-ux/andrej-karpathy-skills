# Organic and Botanical

Shapes from nature, plant motifs, curves, texture, and harmonious color.

## botanical-illustration

**Visual DNA:** A scientific plate: one specimen drawn with fine line and soft wash, isolated on paper, often showing leaf, flower, and seed parts separately, with a Latin name and plate number.
**Design principles:** Accuracy and calm. The specimen is the hero; the page is quiet and archival.
**Color behavior:** Paper ground, natural greens and one floral accent, iron-gall or sepia ink for line and text.
**Typography:** Book serif, italic for Latin names, small caps for plate numbers. Modest sizes.
**Layout:** Centered specimen with generous margins; caption below; optional numbered parts around it.
**Composition:** Vertical, centered, stem leading up; secondary parts arranged neatly at the sides.
**Image treatment:** Line plus watercolor wash illustration, or herbarium scans. No photographic backgrounds.
**Texture and material:** Laid or cotton paper texture, slight foxing optional.
**Motion language:** Line drawing animates on (stroke dash, 1.5 to 3 s), wash fades in after. Gentle and slow.
**Best for:** Tea, apothecary, and skincare packaging, natural history content, book covers, garden brands.
**Avoid when:** The brand is tech-forward or the message is urgent.
**Differs from:** tonal-botanical uses one hue and relief; botanical-illustration uses natural color and line. floral-pattern repeats motifs; botanical-illustration presents one specimen.
**Prompt recipe:** "Botanical illustration plate, single specimen with fine sepia line and soft watercolor wash, leaf and seed details beside it, parchment paper, italic Latin name and plate number in a book serif."
**Implementation notes:** Commission, license, or use public-domain plates with their source recorded in `reference_sources`. For draw-on animation use SVG `stroke-dasharray` with `pathLength="1"`.

## organic-shapes

**Visual DNA:** Soft blobs, pebble curves, and flowing edges replace rectangles. Containers, image masks, and buttons feel grown rather than built.
**Design principles:** Friendliness and approachability. Curves guide the eye gently. Keep the content grid regular underneath so the page stays usable.
**Color behavior:** Soft analogous colors or pastels for the shapes; one deep color for text.
**Typography:** Rounded geometric sans or soft serif.
**Layout:** Regular grid for content; organic shapes behind or around it as masks and backgrounds.
**Composition:** Overlapping blobs create depth; images masked into irregular shapes.
**Image treatment:** Photos clipped into blob masks; lifestyle imagery with natural light.
**Texture and material:** Soft gradients, subtle grain.
**Motion language:** Slow morphing of blob outlines (6 to 10 s loops), gentle float. Respect reduced motion.
**Best for:** Wellness brands, consumer apps, sustainability, food brands.
**Avoid when:** Precision and authority are needed (finance, engineering).
**Differs from:** geometric-composition uses perfect primitives; organic-shapes uses irregular curves. morphing-shapes is about meaningful transformation over time; organic-shapes is a static surface language that may drift.
**Prompt recipe:** "Organic shapes design, soft irregular blobs in lilac and peach overlapping behind content, product photo clipped into a pebble shape, rounded sans headline in indigo ink."
**Implementation notes:** Generate blob paths in SVG; animate with path interpolation that keeps the same point count. Use `clip-path: path()` or SVG masks for images.

## floral-pattern

**Visual DNA:** A repeating tile of flowers, leaves, and stems covering a surface, with type held in a calm cartouche, label, or band.
**Design principles:** Rhythm and abundance. The repeat must be seamless and balanced (no obvious rows). Type never sits directly on busy pattern.
**Color behavior:** Two to four colors in the pattern, one ground; the cartouche uses the ground color for calm.
**Typography:** Elegant serif or script for the name, small serif for details, inside the cartouche.
**Layout:** Full-bleed pattern, centered cartouche.
**Composition:** Even density across the tile, a half-drop or brick repeat to hide the grid.
**Image treatment:** Illustrated motifs; no photos in the pattern.
**Texture and material:** Paper, fabric, or printed tin surfaces.
**Motion language:** Slow drift of the pattern or a cartouche that fades in over a still pattern. Mostly static.
**Best for:** Packaging wraps, stationery, textiles, gift brands.
**Avoid when:** The surface must carry a lot of information.
**Differs from:** botanical-illustration shows one specimen; floral-pattern repeats many. handcrafted-illustration emphasizes the mark; floral-pattern emphasizes the repeat.
**Prompt recipe:** "Seamless floral pattern in burgundy, rosewood and antique gold on cream, half-drop repeat, centered cream cartouche with an elegant serif product name."
**Implementation notes:** Build a seamless SVG tile and use it as `background-image` with `background-size`. Test the repeat at several sizes to catch visible seams.

## handcrafted-illustration

**Visual DNA:** Visible human marks (brush, pencil, gouache, linocut) with imperfect edges, paired with hand-lettering or a warm serif.
**Design principles:** Warmth and authenticity. Imperfection is a feature but the hierarchy stays clear.
**Color behavior:** Earthy or friendly palettes; colors slightly off-register or with visible strokes.
**Typography:** Hand-lettered headlines; a warm serif or humanist sans for body text (never hand-lettered body text).
**Layout:** Loose, but anchored to margins.
**Composition:** Illustrations interact with text (a vine wrapping a word, a figure sitting on a line).
**Image treatment:** Scanned or brush-textured illustration; photos rarely.
**Texture and material:** Paper grain, brush texture, pencil.
**Motion language:** Boiling line (frame-by-frame jitter at 8 to 12 fps), elements drawn on.
**Best for:** Small-batch food, children's books, cafes, craft brands.
**Avoid when:** The brand is corporate, technical, or luxury minimal.
**Differs from:** botanical-illustration is scientific and precise; handcrafted-illustration is expressive. historical-poster is flat and stylized; handcrafted-illustration shows the hand.
**Prompt recipe:** "Handcrafted gouache illustration with visible brush strokes, earthy palette, hand-lettered headline, warm serif body text, linen paper texture."
**Implementation notes:** Commission or license illustrations; record the source. Hand-lettering as SVG with an accessible text alternative.

## tonal-botanical

**Visual DNA:** Leaves, stems, and flowers in the same hue as the ground, a few steps darker or lighter, or raised as relief, so form reads by value and shadow rather than by color.
**Design principles:** Subtle, premium calm. The botanical motif is felt before it is seen. Text sits clearly on top in a contrasting step.
**Color behavior:** One hue family (sage on sage, ivory on ivory, green on green) with value steps; text in the darkest step or a neutral.
**Typography:** Refined serif or light grotesk, generously spaced.
**Layout:** Full-bleed tonal pattern or composition; text centered or aligned on a clear area.
**Composition:** Botanical elements crossing the edges of the frame, leaving a calm center for content.
**Image treatment:** Illustration or 3D relief; photography with a strong monochrome grade.
**Texture and material:** Embossed paper, plaster relief, or soft-shadow 3D.
**Motion language:** A slow light sweep across the relief (4 to 8 s) revealing the motif; leaves sway barely.
**Best for:** Premium packaging, spa and hotel brands, skincare, invitations.
**Avoid when:** Strong color recognition or high-energy messaging is needed.
**Differs from:** botanical-illustration uses natural color and line; tonal-botanical uses one hue and relief. embossed-print is the general material technique; tonal-botanical applies it to plant motifs.
**Prompt recipe:** "Tonal botanical composition, sage green leaves embossed on sage green paper, soft raking light revealing relief, warm ivory text panel, refined serif, calm and premium."
**Implementation notes:** On screen, fake relief with two offset drop shadows (one light, one dark). In 3D, use a normal map on a plane with a moving directional light.
