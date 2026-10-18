# Minimal and Contemporary

Only the elements that are needed, intentional empty space, and close attention to proportion and typography.

## japanese-minimalism

**Visual DNA:** Ma (empty space as an active element), one small off-center mark, natural textures, quiet asymmetry, and sometimes vertical text rhythm.
**Design principles:** Emptiness has meaning. Asymmetric balance. Natural imperfection over polish. Restraint in count, attention in detail.
**Color behavior:** Paper, ink, and one natural tone (clay, moss, indigo). Very low saturation.
**Typography:** Small, light type; a refined serif or Mincho-style face for headlines, simple sans for details. Small sizes surrounded by space.
**Layout:** Large empty fields with content placed off center, often near an edge or corner.
**Composition:** A single object or line of text balanced by emptiness. Odd numbers of elements.
**Image treatment:** Natural light, shadows, raw materials, close details. Muted grading.
**Texture and material:** Washi paper, wood grain, ceramic glaze, linen.
**Motion language:** Very slow fades (1 to 2 s), almost still. Elements appear like ink settling.
**Best for:** Craft brands, hospitality, tea and ceramics, portfolios.
**Avoid when:** Content is dense or the audience expects bold calls to action.
**Differs from:** swiss-international fills the grid with information; japanese-minimalism leaves it mostly empty. architectural-minimalism uses hard light and monumental planes; japanese-minimalism uses soft light and natural texture.
**Prompt recipe:** "Japanese-inspired minimal layout, vast empty paper space, one small ceramic bowl off center in soft natural light, small refined serif text near the lower edge, washi texture."
**Implementation notes:** Resist filling space on wide screens; cap content width and let the margins grow. Avoid Japanese stereotypes or decorative clichés (cherry blossoms, brush fonts) unless the subject is Japanese.

## architectural-minimalism

**Visual DNA:** Large planes of tone and stone, one hard directional light with crisp, deep cast shadows, monumental scale and exact proportion, and thin type set like annotations on a plan. Works with photography or with built graphic planes.
**Design principles:** Form and light as content. Geometry and proportion drive everything: pick one ratio (for example 1:2 or 2:3) and repeat it in planes, openings, and text blocks. Few materials, perfectly executed. Depth comes from overlapping planes and one consistent shadow angle, never from gradients chosen for effect.
**Color behavior:** Greys, concrete, stone, or a single muted tone. Light creates the variation.
**Typography:** Light or regular grotesk, small, often uppercase with tracking; monospace for dimensions and data.
**Layout:** Full-bleed photographs of space; text in narrow columns aligned to architectural lines in the image.
**Composition:** Strong verticals and horizontals; diagonal shadows as the only dynamic element.
**Image treatment:** Architectural photography or renders with hard sun, long shadows, and minimal people.
**Texture and material:** Concrete, honed stone, travertine, plaster, glass. In graphics, stone is a flat tone with at most a faint grain; the light and shadow make it read as material.
**Motion language:** Slow camera dolly or the sun moving (shadow sweeps over 4 to 8 s).
**Best for:** Architecture practices, real estate, furniture, property launches.
**Avoid when:** Warmth and human presence are central to the message.
**Differs from:** japanese-minimalism is soft and intimate; architectural-minimalism is monumental and hard-lit. sculpted-surface is curved and soft; architectural-minimalism is planar. tactile-minimalism works at the scale of paper relief (1 to 3px); architectural-minimalism works at the scale of walls and long cast shadows.
**Prompt recipe:** "Architectural minimalism, concrete planes in hard sunlight with long diagonal shadows, full-bleed image, thin tracked uppercase grotesk annotations, monospace dimensions."
**Implementation notes:** Align text to lines in the photo by choosing crops intentionally per breakpoint (`object-position`). Use monospace only for numeric data.

## contemporary-editorial

**Visual DNA:** Modern publishing on screen: a serif display and grotesk text pairing (or the reverse), a flexible column grid, clear section labels, and generous but not extreme space.
**Design principles:** Readability first, personality second. Consistent rhythm. Every module has a clear purpose (lede, pull quote, figure, note).
**Color behavior:** Muted neutrals with one editorial accent for links and labels; chart colors from the same palette.
**Typography:** Serif display for headlines, grotesk or readable serif for body at 17 to 20 px, small uppercase labels for sections.
**Layout:** Main column of 60 to 75 characters with wider breakout figures and side notes.
**Composition:** Varied rhythm: text, full-width figure, pull quote, text.
**Image treatment:** Documentary photography and clear charts, captioned and credited.
**Texture and material:** Flat.
**Motion language:** Scroll-triggered subtle reveals of figures, sticky charts for data passages.
**Best for:** Publication websites, long-form articles, reports, newsletters.
**Avoid when:** The piece is a single-moment visual (poster, launch hero).
**Differs from:** luxury-editorial is slower and more exclusive; contemporary-editorial is practical and readable. swiss-international is grotesk-only and stricter.
**Prompt recipe:** "Contemporary editorial web article, serif headline and grotesk body, 68 character column with wide breakout figures, small uppercase section labels, muted palette with dusty blue links."
**Implementation notes:** Use a named-line CSS grid (`full`, `wide`, `content`) for breakouts. Body at least 17 px. Test print styles if the piece will be saved as PDF.

## minimal-product-showcase

**Visual DNA:** Product on a seamless tone, one spec line in small type, and a strict grid of identical tiles for the range.
**Design principles:** Let the product speak; restrain everything else. Consistent photography so items compare. Typography is small, quiet, and precise.
**Color behavior:** Neutral or product-matched seamless background; one accent only for the buy action.
**Typography:** One grotesk family, two sizes, two weights. No decorative type.
**Layout:** Uniform tile grid; detail pages with a large image and a short spec list.
**Composition:** Centered products at identical scale and angle.
**Image treatment:** Consistent studio photography, same light, same shadow, same crop.
**Texture and material:** Product materials only.
**Motion language:** Hover reveals an alternate angle (cross-fade 200 ms); gentle zoom on detail pages.
**Best for:** Ecommerce, product ranges, catalogues, spec sheets.
**Avoid when:** The product needs a story or emotional context.
**Differs from:** premium-product-campaign dramatizes one hero; minimal-product-showcase presents many calmly. luxury-editorial is serif-led and narrative; this style is grotesk-only and factual.
**Prompt recipe:** "Minimal product showcase grid, identical tiles with products centered on seamless light grey, same studio lighting and angle, small grotesk name and price under each."
**Implementation notes:** Fix tile `aspect-ratio` and use `object-fit: contain` so products align. Use consistent image dimensions to avoid layout shift.

## wabi-sabi

**Visual DNA:** Uneven, handmade edges (torn paper, brush strokes, hand-thrown clay), rough natural textures, earthy low-chroma tones, and quiet asymmetry with large empty areas that feel weathered rather than clean.
**Design principles:** Accept imperfection, impermanence, and incompleteness. Nothing is perfectly aligned or polished; marks of making and age stay visible. Fewer things, each with presence.
**Color behavior:** Earth, ash, clay, moss, and unbleached paper. Low saturation, close values, one darker earth for text. No pure white or pure black.
**Typography:** A soft old-style serif or a humanist face at small sizes, sometimes one brush-written word as the only display element. Generous line height (1.6 to 1.8).
**Layout:** Asymmetric placement on a loose grid; one element off-center with 50 to 70% of the area left empty. Edges of images and shapes can be irregular.
**Composition:** A single object (cup, bowl, branch, stone) placed low or to one side, with negative space carrying the mood. Pairs of uneven sizes instead of symmetric sets.
**Image treatment:** Natural side light, visible texture, muted grade with lifted shadows. Objects show wear: cracks, glaze runs, patina, mended seams.
**Texture and material:** Raw clay, washi and handmade paper, linen, aged wood, stone, rust. A visible paper or plaster grain on backgrounds.
**Motion language:** Slow fades of 800 to 1200 ms, ink-spread or paper-reveal masks with irregular edges. Never bouncy or snappy.
**Best for:** Ceramics and craft studios, tea houses, slow-living and wellness brands, restaurant menus, and artisanal packaging.
**Avoid when:** The product needs to look precise, technical, or new, or the audience expects crisp corporate polish.
**Differs from:** japanese-minimalism uses precise, clean emptiness (ma) and a single exact mark; wabi-sabi embraces rough edges, age, and visible making. handcrafted-illustration is about drawn characters and pictures; wabi-sabi is about texture and restraint. sculpted-surface is smooth and lit like a studio object; wabi-sabi is rough and weathered.
**Prompt recipe:** "Wabi-sabi still life, a hand-thrown ash-glazed bowl with a small crack placed low and off-center, rough unbleached paper background, soft side light, earthy muted tones, small old-style serif caption, large empty space."
**Implementation notes:** Use `mask-image` with an irregular SVG edge for photo frames and a subtle noise texture (SVG `feTurbulence`, opacity 4 to 8%) on backgrounds. Keep text contrast at 4.5:1 or more even though the palette is low chroma.
