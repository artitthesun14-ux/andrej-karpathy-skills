# Modernist and Swiss

Visible grid, systematic structure, typographic hierarchy, and every element with a job.

## swiss-international

**Visual DNA:** A modular grid that is visible in the alignments, flush-left ragged-right grotesk type, asymmetric placement, and hierarchy created only by size, weight, and position. Photography is objective; illustration is rare.
**Design principles:** Clarity over expression. Information is organized, not decorated. Consistent spacing units. White space is structural, not ornamental.
**Color behavior:** Black and white plus at most one signal color used to mark the most important element. Color never decorates; it indicates.
**Typography:** One grotesk family (neo-grotesk or neutral sans) in 3 to 4 sizes and 2 weights. Flush left, ragged right. Tight leading on headlines (1.0 to 1.1), comfortable on text (1.4 to 1.5). Numbers in tabular figures.
**Layout:** 6, 8, or 12 column modular grid with fields defined by baseline rows. Content snaps to field edges. Margins consistent on all pages.
**Composition:** Asymmetric balance: a heavy block in one field, white space in the opposite. Strong vertical alignment lines shared by many elements.
**Image treatment:** Objective photography (no styling tricks), often black and white, cropped to field sizes. Charts and diagrams follow the same grid.
**Texture and material:** None. Flat surfaces only.
**Motion language:** Precise cuts or short slides along grid axes (200 to 300 ms, standard ease). Elements move in straight lines and land exactly on grid positions.
**Best for:** Technical presentations, data storytelling, research reports, signage, editorial and documentation websites.
**Avoid when:** The brand needs warmth or handmade character, or the audience expects emotional storytelling over information.
**Differs from:** contemporary-poster starts from this grid and breaks it on purpose; swiss-international keeps it intact. brutalist-editorial exposes raw defaults; swiss-international is refined and controlled. constructivist-layout uses diagonals; swiss-international is orthogonal.
**Prompt recipe:** "Swiss International Style layout, 12-column modular grid, flush-left neo-grotesk type in three sizes, asymmetric composition, black and white with one signal red element, objective photography."
**Implementation notes:** Define the grid with CSS Grid (`grid-template-columns: repeat(12, 1fr)`) and a spacing scale (4 or 8 px base). Use `font-variant-numeric: tabular-nums` for data. Avoid centering text.

## constructivist-layout

**Visual DNA:** Strong diagonals (often around 15 to 45 degrees), heavy rectangular bars, red and black on light paper, photomontage, and type set at angles to create forward motion.
**Design principles:** The layout should push the viewer toward action. Tension and dynamism over calm. Geometry as propaganda: arrows, wedges, and bars direct attention.
**Color behavior:** Red, black, and paper. Red marks the call or the hero; black carries structure and type. Optional second accent is rare.
**Typography:** Condensed bold sans, uppercase, set along diagonals or stacked vertically. Sizes jump sharply (a huge word next to small text).
**Layout:** A dominant diagonal axis that organizes all elements; secondary elements align parallel or perpendicular to it.
**Composition:** Asymmetric, dynamic, with elements pointing toward one focal point. Overlaps between bars, photos, and type.
**Image treatment:** High-contrast black and white photography cut into shapes (photomontage). Figures looking or pointing along the diagonal.
**Texture and material:** Optional slight print grain or misregistration; mostly flat.
**Motion language:** Elements slam in along the diagonal axis (fast in, 150 to 250 ms, sharp ease-out), type appears word by word with impact.
**Best for:** Manifestos, campaigns, event posters, call-to-action slides, protest or movement branding.
**Avoid when:** The tone must be neutral, the audience is sensitive to political associations, or content is long-form reading.
**Differs from:** swiss-international is orthogonal and calm; constructivist-layout is diagonal and urgent. geometric-composition plays with shapes for balance; constructivist-layout uses them to direct.
**Prompt recipe:** "Constructivist poster layout, strong 30 degree diagonal axis, heavy red and black bars, condensed uppercase type on the diagonal, black and white photomontage figure, off-white paper."
**Implementation notes:** Rotate a wrapper with `transform: rotate(-20deg)` rather than each element, so alignment stays consistent. Keep rotated text short and large; check that it still reads on phones.

## brutalist-editorial

**Visual DNA:** Exposed structure: monospace or default-looking type, visible 1 px borders around every block, raw tables, underlined blue-black links, dense information, and little to no imagery styling.
**Design principles:** Honesty about the medium. Content density and function over polish. Deliberately unpolished, but still organized.
**Color behavior:** Mostly black on white or paper. A single harsh accent (pure red, acid, or default link blue) is acceptable.
**Typography:** Monospace or a system grotesk at one or two sizes. Hierarchy through uppercase, underline, or borders rather than size. Long lines tolerated.
**Layout:** Boxes with borders in a tight grid or simple stacked list. Columns of unequal width. Little padding.
**Composition:** Dense, flat hierarchy, with scanning helped by borders and labels. Occasional oversized element breaks the density.
**Image treatment:** Unprocessed images, often small, sometimes with visible file names or dimensions as captions.
**Texture and material:** None, or a screen-native texture (pixel, scanline).
**Motion language:** None or instant state changes. Hover inverts colors. No easing.
**Best for:** Independent publications, developer tool sites, archives, studio portfolios that want an anti-corporate tone.
**Avoid when:** The audience is non-technical, trust and polish matter (finance, health), or accessibility could suffer from density.
**Differs from:** swiss-international is refined and spacious; brutalist-editorial is raw and dense. experimental-typography distorts letters; brutalist-editorial keeps letters plain and exposes structure.
**Prompt recipe:** "Brutalist editorial website, monospace type, every block outlined with 1px black borders, dense table of contents, raw unstyled images, underlined links, black on white with one red accent."
**Implementation notes:** Rely on semantic HTML (tables, lists) so density stays accessible. Keep body text at 16 px minimum despite the raw look. Ensure focus states remain visible.

## geometric-composition

**Visual DNA:** Circles, squares, and triangles in flat primary colors arranged as the main actors, with geometric sans type that shares their construction.
**Design principles:** Reduce ideas to elementary forms. Balance through visual weight of shapes and colors. Form follows a simple rule set.
**Color behavior:** Primary red, yellow, blue plus black and off-white. Each shape gets one flat color; no gradients.
**Typography:** Geometric sans (constructed from circles and straight lines), often lowercase, at 2 to 3 sizes.
**Layout:** Grid-based placement of shapes; shapes often aligned to grid intersections or touching edges.
**Composition:** Asymmetric balance of large and small shapes. A big circle balanced by a small dense square. Overlaps create new shapes.
**Image treatment:** Few photographs; when used, cropped into geometric frames (circles, half-circles).
**Texture and material:** Flat. Optionally a subtle paper texture for a print feel.
**Motion language:** Shapes translate, rotate, and scale along clear paths; morph between primitives. Mechanical easing, 300 to 600 ms, often in sequence like a construction kit.
**Best for:** Education, design events, brand patterns, section dividers, children's content that still needs rigor.
**Avoid when:** The subject is somber or deeply emotional, or the brand needs luxury cues.
**Differs from:** constructivist-layout directs attention with diagonals and bars; geometric-composition balances shapes as a calm system. color-blocking uses rectangles as containers; geometric-composition uses shapes as subjects.
**Prompt recipe:** "Geometric composition, large red circle, blue square and yellow triangle on off-white, balanced asymmetric arrangement on a grid, geometric sans lowercase type, flat colors, no gradients."
**Implementation notes:** Build shapes with SVG primitives or CSS (`border-radius: 50%`, `clip-path`). Keep a shape vocabulary list so the system stays consistent across pages.
