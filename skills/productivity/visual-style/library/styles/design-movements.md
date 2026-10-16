# Design Movements and Eras

Named periods and movements that people ask for by name. Each one is a complete look with its own era, color habits, and type.

## art-deco

**Visual DNA:** Symmetric frames of stepped lines, sunburst and fan motifs, chevrons, and tall geometric lettering, usually in gold or brass on a deep ground.
**Design principles:** Luxury through precision. Strong central axis. Ornament made of straight lines and arcs, never loose curves. Repetition creates rhythm.
**Color behavior:** Deep jewel or black grounds with one metallic accent; cream for text panels. Two or three colors at most.
**Typography:** Tall, thin-and-thick geometric display faces with high waistlines, set in widely tracked capitals; a plain geometric sans for details.
**Layout:** Centered and symmetric, often inside a stepped border or arch.
**Composition:** A central motif (fan, sunburst, arch) with lines radiating toward the edges; text sits on the axis.
**Image treatment:** Stylized flat illustration or high-contrast black and white photography inside geometric frames.
**Texture and material:** Lacquer, brass, marble, and foil.
**Motion language:** Lines draw on outward from the center, then a slow light sweep across the metallic accent.
**Best for:** Hotels and bars, invitations, premium packaging, gala events, and anniversary campaigns.
**Avoid when:** The brand needs to feel casual, young, or eco-natural.
**Differs from:** historical-poster is an illustrated travel poster; art-deco is ornamental geometry. neoclassical-editorial uses Roman proportions and serifs; art-deco uses stepped geometry and display sans.
**Prompt recipe:** "Art Deco invitation, symmetric stepped gold frame and sunburst fan on deep emerald, tall geometric capitals with wide tracking, cream text panel, fine brass lines."
**Implementation notes:** Draw ornaments as SVG with `stroke` so they scale cleanly. Keep body text in a readable sans; the display face is for short headings only.

## art-nouveau

**Visual DNA:** Long flowing whiplash lines, stylized flowers and stems, arched frames, halo shapes behind a figure, and hand-drawn ornamental lettering.
**Design principles:** Nature as structure. Every line flows into the next. Ornament and frame are one piece. Asymmetry inside a symmetric frame.
**Color behavior:** Muted naturals: olive, ochre, dusty rose, and cream, with dark outlines holding the shapes.
**Typography:** Organic display lettering with soft curves; a classic serif for text.
**Layout:** A central panel inside an ornamental arch or border; text in a cartouche.
**Composition:** A figure or flower centered and framed by curving stems that run to the corners.
**Image treatment:** Flat lithographic illustration with dark contour lines and soft fills.
**Texture and material:** Aged paper, lithograph grain, stained glass.
**Motion language:** Vines grow along their paths (stroke draw-on), slow fades between panels.
**Best for:** Cosmetics, tea and wine labels, book covers, boutique and craft brands.
**Avoid when:** Content is data-heavy or must feel modern and technical.
**Differs from:** art-deco is straight-lined and geometric; art-nouveau is curved and organic. floral-pattern is a repeating tile; art-nouveau is a framed composition.
**Prompt recipe:** "Art Nouveau label, central iris flower framed by whiplash vines and an arched border, dark contour lines, olive ochre and dusty rose on cream, ornamental lettering in a cartouche."
**Implementation notes:** Use SVG paths for the frame and `stroke-dasharray` for draw-on. Keep ornament out of the reading area.

## mid-century-modern

**Visual DNA:** Boomerangs, kidney shapes, starbursts, thin-legged lines, and overlapping flat shapes in a warm limited palette on cream.
**Design principles:** Optimism and function. Simple geometry with a playful tilt. Few colors, clearly separated.
**Color behavior:** Mustard, teal, tangerine, and walnut brown on cream; flat fills that sometimes overlap.
**Typography:** Geometric sans or casual brush-script headings; clean sans for text.
**Layout:** Asymmetric blocks with shapes breaking past the grid edge.
**Composition:** Off-center stacks of shapes balanced by a block of text.
**Image treatment:** Flat illustration or warm-toned photography of objects and interiors.
**Texture and material:** Light paper grain, walnut wood, slightly misregistered print.
**Motion language:** Shapes slide and rotate into place with a short overshoot, then hold.
**Best for:** Furniture brands, cafes, event posters, lifestyle and interior brands.
**Avoid when:** The tone must be strictly corporate or high-tech.
**Differs from:** bauhaus is primary colors and strict; mid-century-modern is warmer and looser. retro-70s is rounder with stripes and sunsets.
**Prompt recipe:** "Mid-century modern poster, boomerang and starburst shapes in mustard teal and tangerine on cream, walnut brown text, off-center layout, light paper grain."
**Implementation notes:** A 3 or 4 color palette is enough; add a subtle grain with an SVG noise filter at low opacity.

## memphis

**Visual DNA:** Scattered squiggles, dots, zigzags, triangles, and half circles in bright clashing colors, often with black outlines and terrazzo patterns.
**Design principles:** Break good taste on purpose. Clash is the point. Pattern everywhere, but the message stays in one clear block.
**Color behavior:** Hot pink, cyan, yellow, and black with pastel grounds; high saturation, little shading.
**Typography:** Chunky geometric sans, sometimes tilted or outlined.
**Layout:** Freeform scatter of shapes around a calm central content block.
**Composition:** Shapes at random angles fill the edges; the center stays readable.
**Image treatment:** Cut-out photos with patterned backdrops, or none.
**Texture and material:** Terrazzo, laminate, flat print.
**Motion language:** Shapes pop in with quick scale and spin, then idle with small wobbles.
**Best for:** Youth brands, events, social campaigns, and merch.
**Avoid when:** The audience expects calm, trust, or luxury.
**Differs from:** pop-graphic uses comic halftones and outlines; memphis uses abstract shapes and pattern. dopamine-design is softer and rounder.
**Prompt recipe:** "Memphis design poster, scattered squiggles dots zigzags and tilted triangles in hot pink cyan and yellow with black outlines, pastel ground, chunky geometric sans in a calm center block."
**Implementation notes:** Place decoration on a separate layer with `pointer-events: none`; keep text on a solid panel for contrast.

## maximalism

**Visual DNA:** Layer upon layer of pattern, color, ornament, and mixed typefaces filling the whole surface.
**Design principles:** Abundance over restraint. Contrast of scale keeps order. One hero element must still win.
**Color behavior:** Many saturated colors at once, often clashing; dark outlines or one neutral to rest the eye.
**Typography:** Several faces mixed (serif display, condensed, decorative) at very different sizes.
**Layout:** Overlapping layers with no empty field; the hero sits on top.
**Composition:** A large central subject surrounded by dense pattern and secondary elements.
**Image treatment:** Saturated photography, cut-outs, ornament, and pattern combined.
**Texture and material:** Print textures, fabric, wallpaper patterns.
**Motion language:** Parallax layers at different speeds; quick cuts between dense frames.
**Best for:** Fashion, music, food brands, festivals, anything that needs to stand out in a feed.
**Avoid when:** The content is instructional or the reader needs to scan quickly.
**Differs from:** collage-editorial argues by juxtaposition; maximalism decorates by abundance. memphis uses abstract primitives.
**Prompt recipe:** "Maximalist poster, dense layered patterns and saturated clashing colors, mixed serif and condensed type at extreme sizes, one large central hero image."
**Implementation notes:** Test the hero message at thumbnail size. Put text on a solid band; never set body text over pattern.

## retro-70s

**Visual DNA:** Bold rounded or soft-serif lettering, rainbow stripes that bend around corners, sunset arcs, and warm earthy color.
**Design principles:** Warmth and flow. Curves over corners. Stripes carry the eye.
**Color behavior:** Orange, rust, brown, mustard, and cream in stacked bands.
**Typography:** Fat rounded display or soft high-contrast serif, tight letter spacing.
**Layout:** Centered emblems or full-bleed stripes behind a big title.
**Composition:** Arcs and stripes radiate from a sun or curve around the title.
**Image treatment:** Warm faded photography with grain, or flat illustration.
**Texture and material:** Film grain, corduroy, sun-faded print.
**Motion language:** Stripes slide in sequence like a wave; slow wobble on the title.
**Best for:** Coffee, music, retro merch, cafes, and summer campaigns.
**Avoid when:** The brand needs to feel cutting-edge or clinical.
**Differs from:** mid-century-modern is flatter and more angular; retro-70s is rounder with stripes and sunsets.
**Prompt recipe:** "1970s retro poster, fat rounded lettering, stacked orange rust mustard and brown stripes curving around a sunset arc, cream ground, film grain."
**Implementation notes:** Build stripes as concentric SVG paths so they bend cleanly. Check orange text on cream for contrast; use brown for small text.

## y2k

**Visual DNA:** Liquid chrome shapes, bubble and inflated lettering, iridescent gradients, star sparkles, pixel icons, and translucent plastic.
**Design principles:** Shine and optimism about technology. Glossy over flat. Playful futurism.
**Color behavior:** Silver and chrome with baby pink, lilac, and aqua; iridescent gradients.
**Typography:** Inflated, rounded, or wide techno display; small pixel or monospace for UI details.
**Layout:** Floating layered objects and stickers around a central title.
**Composition:** A shiny centerpiece with sparkles and small icons orbiting it.
**Image treatment:** Glossy 3D renders, chrome, holographic foil, low-res pixel accents.
**Texture and material:** Chrome, translucent plastic, holographic film.
**Motion language:** Blobs morph and wobble; sparkles twinkle; text bounces in.
**Best for:** Fashion, music releases, youth social content, streetwear.
**Avoid when:** The audience is formal, older, or the topic is serious.
**Differs from:** cyberpunk is dark and neon-lit; y2k is bright and cute. vaporwave is ironic and nostalgic, y2k is shiny and optimistic.
**Prompt recipe:** "Y2K aesthetic graphic, liquid chrome blob and bubble lettering, iridescent pink lilac and aqua gradient, star sparkles and small pixel icons, glossy plastic."
**Implementation notes:** Fake chrome with multi-stop linear gradients in SVG. Keep sparkles decorative and out of the reading line.

## vaporwave

**Visual DNA:** Neon perspective grid running to the horizon, a striped sunset, pink-to-purple-to-cyan gradients, classical statues, palm trees, and VHS scanlines.
**Design principles:** Irony and nostalgia. Retro technology as dreamscape. Glow over detail.
**Color behavior:** Hot pink, purple, and cyan on near-black or dusk purple.
**Typography:** Chrome or outlined display, wide-tracked caps, and monospace or Japanese text as texture.
**Layout:** Centered horizon composition with the title above the sun.
**Composition:** One-point perspective grid below, sun and object above, text on the axis.
**Image treatment:** Low-res renders, VHS noise, chromatic aberration.
**Texture and material:** Scanlines, glow, neon tubes.
**Motion language:** Grid scrolls toward the viewer endlessly; slow glow pulses; glitch flickers.
**Best for:** Music covers, art and night events, streaming overlays.
**Avoid when:** The message needs clarity or credibility over mood.
**Differs from:** cyberpunk is dense and urban; vaporwave is empty and dreamy. retro-futurism is 1950s optimism; vaporwave is 1980s to 90s irony.
**Prompt recipe:** "Vaporwave artwork, neon pink perspective grid to the horizon, striped sunset gradient, marble bust, cyan and purple glow, VHS scanlines, chrome title."
**Implementation notes:** Animate the grid with `transform` only. Offer a reduced-motion static frame. Keep body text off the glow.

## cyberpunk

**Visual DNA:** Dark rainy city tones, neon signs in pink and cyan, glitch slices, HUD brackets, warning stripes, and dense monospace data.
**Design principles:** High tech, low life. Glow against darkness. Information overload as atmosphere.
**Color behavior:** Near-black with one or two neon colors; yellow warning stripes as a signal.
**Typography:** Condensed sans for headlines, monospace for data, sometimes glitched or sliced.
**Layout:** Diagonal panels, HUD frames, and corner brackets.
**Composition:** A figure or object lit by neon, framed by interface overlays.
**Image treatment:** Night photography, neon glow, chromatic aberration, glitch.
**Texture and material:** Wet asphalt reflections, scanlines, carbon.
**Motion language:** Glitch cuts, flicker, text typing in like a terminal.
**Best for:** Games, tech events, streetwear, esports.
**Avoid when:** The audience is sensitive to flicker or the brand must feel calm.
**Differs from:** vaporwave is empty and dreamy; cyberpunk is dense and urban. dark-tech-saas is clean and calm; cyberpunk is noisy.
**Prompt recipe:** "Cyberpunk poster, near-black rainy city, neon pink and cyan signs, glitch slices, HUD corner brackets, condensed headline, dense monospace data, yellow warning stripe."
**Implementation notes:** Respect `prefers-reduced-motion` and avoid flashing faster than 3 times per second.

## retro-futurism

**Visual DNA:** Rockets with fins, ringed planets, domed cities, streamlined chrome, starbursts, and swooping orbit lines.
**Design principles:** Optimism about progress. Streamlined curves. Adventure and wonder.
**Color behavior:** Teal, coral, cream, and mustard, with chrome highlights and a deep space blue.
**Typography:** Wide geometric or streamlined display with speed lines.
**Layout:** Centered hero object with orbit lines around it.
**Composition:** Rocket or planet as hero, diagonal motion lines, stars in the background.
**Image treatment:** Painted illustration with soft airbrush gradients.
**Texture and material:** Airbrush, chrome, enamel.
**Motion language:** Slow camera push toward the planet; orbit lines rotate.
**Best for:** Tech events, film posters, science brands, kids education.
**Avoid when:** The subject is serious current technology that should not look nostalgic.
**Differs from:** vaporwave is ironic and neon; retro-futurism is sincere and pastel. mid-century-modern is domestic; retro-futurism is about space.
**Prompt recipe:** "Retro-futurist poster, finned rocket and ringed planet, swooping orbit lines, airbrushed teal coral and cream, streamlined geometric lettering, starfield."
**Implementation notes:** Not checked against a source in this research round; treat the description as general knowledge.

## scandinavian

**Visual DNA:** Light airy rooms, pale wood, wool and linen, fog greys and soft blues, simple grotesk type, and plenty of daylight.
**Design principles:** Function and comfort together (hygge). Natural materials. Nothing loud.
**Color behavior:** Warm white with fog grey, pale blue, and wood tones; one muted accent.
**Typography:** Friendly grotesk or geometric sans, regular weights, sentence case.
**Layout:** Simple grid with generous spacing and large lifestyle photos.
**Composition:** Objects in use in a real room; people present but calm.
**Image treatment:** Soft daylight photography, low contrast, natural grading.
**Texture and material:** Oak, birch, wool, linen, ceramics.
**Motion language:** Gentle fades and short slides, under 400 ms.
**Best for:** Home and furniture, lifestyle brands, wellness, hospitality.
**Avoid when:** The brand needs drama, luxury gloss, or high energy.
**Differs from:** japanese-minimalism is emptier and more contemplative; scandinavian is cosier and lived-in.
**Prompt recipe:** "Scandinavian interior brand page, warm white and fog grey, pale oak and wool textures, soft daylight photo, friendly grotesk headings, generous spacing."
**Implementation notes:** Not checked against a source in this research round; treat the description as general knowledge.

## bauhaus

**Visual DNA:** Shape, color, and type treated as one system: elementary forms in primaries (yellow triangle, red square, blue circle as the school's teaching example), lowercase sans-serif type, heavy black bars and rules, and asymmetric layouts that expose their construction.
**Design principles:** Form follows function. Use the fewest elements that do the job; let structure show. Type, image, and shape share one grid and one logic, so the layout reads as a built object.
**Color behavior:** Red, yellow, blue with black and off-white. Color marks function (one color for headings, one for the key shape), always flat. Black bars carry as much weight as color.
**Typography:** Geometric or grotesk sans, often all lowercase, set flush left. Bold weights for short headings, regular for text; heavy horizontal or vertical rules separate sections. Type can run vertically along a bar.
**Layout:** Asymmetric modular grid; content aligned to strong vertical and horizontal axes. Wide black or colored bars divide the page into functional zones.
**Composition:** One dominant shape or bar, a column of text pulled to one side, and small numbers or labels pinned to grid lines. Photomontage frames sit in rectangles or circles.
**Image treatment:** Black and white photography, photomontage, and tight geometric crops (circle, rectangle). Diagrams and arrows are welcome.
**Texture and material:** Flat print. Optionally a slight paper tone; no gradients or shadows.
**Motion language:** Bars slide in along their axis, shapes snap to grid positions in sequence, 200 to 400 ms with mechanical easing; type follows the bar it belongs to.
**Best for:** Design schools and workshops, exhibition posters, architecture studios, method explainers, and brands that want to look rational and constructive.
**Avoid when:** The subject needs warmth, luxury, or nostalgia for a different era, or text must be mixed case for accessibility in long reading.
**Differs from:** geometric-composition arranges shapes for balance in any palette; bauhaus is a whole system where type, bars, and color-to-shape rules work together. swiss-international is calmer and text-led on a strict grid; bauhaus is more experimental with heavy bars and lowercase. constructivist-layout pushes diagonals and urgency; bauhaus keeps strong horizontals and verticals.
**Prompt recipe:** "Bauhaus exhibition poster, heavy black horizontal bars, red square, yellow triangle and blue circle on off-white, lowercase geometric sans text flush left, asymmetric modular grid, flat print, no gradients."
**Implementation notes:** Build bars and shapes with CSS Grid areas and SVG primitives. Use `text-transform: lowercase` only on short display text; keep body copy in normal case for readability. Map each color to one function in the token file.
