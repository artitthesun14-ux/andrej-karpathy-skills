# Editorial and Luxury

Typography with a clear personality, magazine composition, images that carry meaning, deliberate white space, and a strict reading order.

## luxury-editorial

**Visual DNA:** A high-contrast serif headline (Didone or sharp transitional) set large and light, a small grotesk or serif for text, one hero image cropped with intent, and margins wider than the content would need.
**Design principles:** Fewer elements at higher quality. Every page has one dominant element, one supporting, the rest silent. Scarcity of decoration is the luxury signal.
**Color behavior:** Neutral ground (warm white or near-black) carries about 80 percent of the area. One metallic-feeling or deep accent appears only on rules, numerals, or a single word.
**Typography:** Display: Didone or high-contrast serif, 48 to 120 px, weight light or regular, tracking slightly negative. Text: a book serif or neutral grotesk at 16 to 18 px. Labels in small caps or tracked uppercase at 11 to 12 px. At most two families.
**Layout:** 12-column grid with wide outer margins (8 to 12 percent of the width). Text column narrow (45 to 60 characters). Image often spans 7 of 12 columns, text sits in 4.
**Composition:** Asymmetric balance: a large image against a small, precise text block. Generous space above headlines. Alignment lines are shared between image edge and text edge.
**Image treatment:** Few images, each full quality. Muted grading, controlled highlights, no busy backgrounds. Crops are deliberate (a detail of a hand, a fabric fold) rather than whole-scene.
**Texture and material:** Mostly flat. If any texture, a faint paper grain or a single foil-like accent. No gradients on UI.
**Motion language:** Slow (600 to 1200 ms), ease-out fades and short vertical drifts (8 to 16 px). Images reveal with a mask wipe. Nothing bounces.
**Best for:** Executive and investor presentations, premium brands, private banking, real estate, fashion houses, investment theses that must feel considered.
**Avoid when:** Dense data or many items must fit on one screen, the audience needs quick scanning, or the brand voice is playful.
**Differs from:** fashion-magazine lets the image fill the frame and puts type over it; luxury-editorial keeps image and type in separate zones with space between. minimal-product-showcase uses grotesk-only type and product tiles; luxury-editorial is serif-led and narrative.
**Prompt recipe:** "Luxury editorial layout, high-contrast Didone headline in light weight, wide margins, one hero image cropped to a detail, small tracked uppercase labels, warm white ground with a single champagne rule, calm and restrained."
**Implementation notes:** Use `clamp()` for the display size so it scales. Set `font-optical-sizing: auto` when the face supports it. Keep line length with `max-width: 60ch`. Check that thin Didone strokes survive at the smallest display size and on projectors; increase weight one step for slides.

## fashion-magazine

**Visual DNA:** A full-bleed photograph fills the page; a masthead or headline sits on top of it, sometimes partly hidden behind the subject; short cover lines cluster at the edges.
**Design principles:** The image leads and type serves it. Layering type with the photo creates depth. Each spread is a mood, not an argument.
**Color behavior:** Color comes from the photography. Type is usually one color pulled from the image (or black or white) so it belongs to the shot. One accent color per issue or season.
**Typography:** Masthead: very high-contrast serif or ultra-condensed sans, set huge and tight. Cover lines: condensed or grotesk at 2 to 3 sizes, mixing weights. Pull quotes in italic serif.
**Layout:** Full-bleed image as the base layer. Type blocks anchored to corners and edges. Interior spreads alternate full-bleed images with text columns on a 3 or 4 column grid.
**Composition:** Subject placed off center on a third line; type fills the negative space the pose leaves. Headline may overlap the subject (subject in front via a cut-out mask).
**Image treatment:** Editorial fashion photography: strong light direction, styled color grade, models or garments as the focus. Cut-outs for overlap effects.
**Texture and material:** Glossy, flat. Occasionally film grain to suggest analog.
**Motion language:** Fast cuts on beat (200 to 400 ms holds between looks), headline letters sliding in behind the subject, short zooms. Energetic but brief.
**Best for:** Fashion and beauty, lookbooks, seasonal campaigns, editorial covers, social carousels.
**Avoid when:** There is no strong photography available, or content is explanatory and needs a reading order.
**Differs from:** luxury-editorial separates image and text and stays slow; fashion-magazine overlaps them and moves fast. art-direction-editorial builds one concept per page; fashion-magazine sells a mood and a look.
**Prompt recipe:** "Fashion magazine cover, full-bleed editorial portrait, huge high-contrast serif masthead partly behind the model's head, condensed cover lines at the edges, color grade pulled into the type color."
**Implementation notes:** Put the subject cut-out (transparent PNG or WebP) in a layer above the headline to fake the overlap. Check text legibility on the busiest part of the image; add a local gradient scrim only where needed. On mobile, crop the image to keep the subject, then move cover lines below.

## art-direction-editorial

**Visual DNA:** Each page is built around one visual idea: an image and a headline that only make sense together, such as a pun, an unexpected crop, or a scale shift.
**Design principles:** Concept first, layout second. The reader should get the idea in two seconds and smile or think. Remove anything that dilutes the one idea.
**Color behavior:** Color supports the concept: often a neutral page with one color tied to the subject of the image (the red of an apple, the blue of a pool).
**Typography:** Serif display for the headline idea, grotesk for supporting text. The headline is short (3 to 7 words) and sits in a precise relationship to the image (aligned to an edge, continuing a line in the photo).
**Layout:** Simple grids (2 or 3 columns) so the concept is not lost. Large single-focus images, small text blocks.
**Composition:** The headline and image interact: type follows a line in the photo, an object points to a word, or the image completes the sentence.
**Image treatment:** Conceptual still life or staged photography, clean backgrounds, objects isolated. Commissioned or carefully chosen, never generic stock.
**Texture and material:** Flat and clean so the idea reads.
**Motion language:** A single reveal that delivers the idea's punchline (an object moves into place, a word swaps), timed so the viewer reads the setup first (setup 1 to 2 s, payoff 400 ms).
**Best for:** Thought leadership, brand stories, keynote section openers, magazine features.
**Avoid when:** The content is purely informational with no idea to dramatize, or the timeline does not allow concept development.
**Differs from:** collage-editorial makes its point with many fragments; art-direction-editorial uses one clean visual idea. luxury-editorial is about refinement; art-direction-editorial is about wit.
**Prompt recipe:** "Conceptual editorial spread, one staged still-life photograph on a clean background, short serif headline that completes the visual pun, generous white space, one subject color."
**Implementation notes:** Write the concept as one sentence before designing. Test the page at thumbnail size: if the idea is not clear there, simplify.

## premium-product-campaign

**Visual DNA:** One product, lit like sculpture, in a large tonal field. A short headline (2 to 5 words) and a single line of copy. No feature lists on the hero.
**Design principles:** Desire over information. The product silhouette must be recognizable. Light and material quality do the persuading.
**Color behavior:** Background is a tone derived from the product (darker or lighter variant of its main color, or deep neutral). Text is one color. Accent appears only in the call to action.
**Typography:** Clean grotesk, medium weight, tight tracking for the headline; or a refined serif for heritage brands. Price and CTA in the same family, smaller.
**Layout:** Centered or slightly offset product occupying 40 to 60 percent of the frame. Headline above or beside. Ample space on all sides.
**Composition:** Product at a three-quarter angle with a soft shadow or reflection grounding it. Light from one side to show form.
**Image treatment:** Studio photography or high-quality render, seamless background, accurate materials, controlled reflections.
**Texture and material:** The product's own material (brushed metal, glass, leather) is the texture; the background stays smooth.
**Motion language:** Slow orbit or dolly-in (2 to 4 s), light sweep across surfaces, headline fades in after the product settles.
**Best for:** Product launches, ecommerce heroes, out-of-home ads, keynote reveals, premium devices and cosmetics.
**Avoid when:** The product is visually unremarkable or the message is about service, process, or many SKUs.
**Differs from:** minimal-product-showcase presents a range in neutral tiles with specs; premium-product-campaign stages one hero with drama. product-render is the asset; this style is the full campaign composition.
**Prompt recipe:** "Premium product campaign hero, single product at three-quarter angle, side key light, soft floor reflection, deep tonal background matched to the product, short medium-weight grotesk headline, lots of space."
**Implementation notes:** Serve the product image with transparent background and build the tonal backdrop in CSS so it adapts. Use `aspect-ratio` to prevent layout shift. Pair with `product-reveal-3d` for motion.

## art-catalogue

**Visual DNA:** Artwork reproduced accurately and at the correct proportion, alone on a quiet page, with a small caption block: artist, title, year, medium, dimensions, collection.
**Design principles:** The work is sacred: no cropping, no overlays, no color shifts. The design recedes. Captions follow a strict consistent format.
**Color behavior:** Neutral page (white, warm grey, or stone) chosen not to tint the artwork. Text in dark grey. No accent color except perhaps in section openers.
**Typography:** Small, precise grotesk or book serif for captions (9 to 12 pt print, 13 to 15 px screen). Essays in a readable serif. Plate numbers and dimensions in tabular figures.
**Layout:** Classic catalogue grid: image on the right page, caption below or on the facing page. Essays in two columns. Consistent image box with the work centered and scaled to fit.
**Composition:** One work per page or spread; the work centered optically (slightly above geometric center). Caption aligned to the image's left edge.
**Image treatment:** Color-accurate reproduction, neutral background, no shadows unless photographing an object in space. Installation shots as a separate category.
**Texture and material:** Matte uncoated paper feel; nothing on screen that competes with the work.
**Motion language:** Minimal: cross-fade between works (400 to 600 ms), zoom to detail on request only. Never auto-animate the artwork.
**Best for:** Exhibition catalogues, artist portfolios, gallery websites, collection archives.
**Avoid when:** Commercial persuasion is the goal, or the visuals are not artworks.
**Differs from:** museum-exhibition designs for walls and walking; art-catalogue designs for close reading of reproductions. luxury-editorial dramatizes images; art-catalogue presents them neutrally.
**Prompt recipe:** "Contemporary art catalogue page, single artwork reproduced uncropped on a warm grey page, small precise grotesk caption block with artist, title, year, medium, dimensions, plate number, lots of empty space."
**Implementation notes:** Use `object-fit: contain` and never `cover` for artworks. Keep caption data structured (artist, title, year, medium, dimensions) so it renders identically. Provide alt text from the caption.

## quiet-luxury

**Visual DNA:** Close-up photographs of material (knit, wool, linen, leather grain, stone), tonal neutral grounds one or two steps apart, small calm type, and no visible logo or metallic accent.
**Design principles:** Value is shown by material and fit, never announced. Remove every element that signals price directly (logos, gold, big claims). Consistency across pages matters more than any single hero.
**Color behavior:** Tonal neutrals (oat, taupe, stone, espresso) with values close together; contrast comes from one dark text color. No saturated accent; at most one deep neutral fill per page.
**Typography:** A light transitional or old-style serif for headlines at modest sizes (32 to 48px on web, not display-huge), and a quiet grotesk for text and labels at 13 to 16px. Sentence case, normal tracking; small caps for labels only.
**Layout:** A 12-column editorial grid with wide outer margins (8 to 12% of width) and one image per spread or slide. Text blocks stay narrow (45 to 60 characters).
**Composition:** One subject per frame, often cropped tight to the material. Images and text sit in separate zones; repeat the same crop ratio across a sequence.
**Image treatment:** Soft natural daylight, low contrast, no harsh shadows. Macro shots of fabric and surface; people photographed from the shoulder or in part, faces optional. Muted, slightly warm grade; no filters or vignettes.
**Texture and material:** The texture lives in the photography. Graphic surfaces stay flat; a faint paper grain on print is the maximum.
**Motion language:** Slow fades of 600 to 900 ms and slow image crossfades. No movement on type; no parallax beyond 8px.
**Best for:** Fashion and knitwear brands, boutique hotels, private client and wealth decks, lookbooks, and interiors.
**Avoid when:** The audience needs loud calls to action, the brand is young and playful, or there is no good material photography to show.
**Differs from:** luxury-editorial is serif-led drama with high-contrast Didone headlines and a hero image; quiet-luxury is smaller type, tonal color, and material close-ups. minimal-product-showcase arranges many products in identical tiles; quiet-luxury tells one material story. charcoal-champagne colors bring a metallic note; quiet-luxury avoids metallics.
**Prompt recipe:** "Quiet luxury lookbook spread, macro photograph of oat wool knit in soft daylight, tonal oat and taupe background, small light serif headline, small grotesk caption, wide margins, no logo, no gold."
**Implementation notes:** Set color tokens as close tonal steps (for example 4 neutrals within one hue). Keep headline sizes modest and use `font-weight: 300` to `400`. Preload the hero image and use `object-fit: cover` with a fixed `aspect-ratio` so crops repeat exactly.
