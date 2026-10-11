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

**Visual DNA:** Large planes of tone, hard light and crisp shadows, monumental scale, and thin type set like annotations on a plan.
**Design principles:** Form and light as content. Geometry and proportion drive everything. Few materials, perfectly executed.
**Color behavior:** Greys, concrete, stone, or a single muted tone. Light creates the variation.
**Typography:** Light or regular grotesk, small, often uppercase with tracking; monospace for dimensions and data.
**Layout:** Full-bleed photographs of space; text in narrow columns aligned to architectural lines in the image.
**Composition:** Strong verticals and horizontals; diagonal shadows as the only dynamic element.
**Image treatment:** Architectural photography or renders with hard sun, long shadows, and minimal people.
**Texture and material:** Concrete, stone, plaster, glass.
**Motion language:** Slow camera dolly or the sun moving (shadow sweeps over 4 to 8 s).
**Best for:** Architecture practices, real estate, furniture, property launches.
**Avoid when:** Warmth and human presence are central to the message.
**Differs from:** japanese-minimalism is soft and intimate; architectural-minimalism is monumental and hard-lit. sculpted-surface is curved and soft; architectural-minimalism is planar.
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
