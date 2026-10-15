# Digital UI and Web Trends

Surface and layout styles from apps and websites. They describe how interface parts look and stack, so they pair well with a style from another category for the content.

## glassmorphism

**Visual DNA:** Translucent panels with background blur, a thin bright edge, soft shadow, and color bleeding through from a colorful layer behind.
**Design principles:** Depth through layers. Content stays in front; the glass shows context behind. Use glass for controls and chrome, not for long reading.
**Color behavior:** A colorful or photographic background, with white or tinted glass at 10 to 40 percent opacity on top.
**Typography:** Clean grotesk or system UI fonts, medium weight for legibility on glass.
**Layout:** Floating cards, tab bars, and sheets layered over a full-bleed background.
**Composition:** One vivid background, two or three glass layers, clear focus on the top one.
**Image treatment:** Blurred gradients or photos behind glass; never busy detail directly under text.
**Texture and material:** Frosted glass, light refraction, specular rims.
**Motion language:** Panels slide and scale with spring-like but quick motion; the blur updates as content scrolls.
**Best for:** App UI, dashboards, floating navigation bars, product websites.
**Avoid when:** Text-heavy pages or when contrast cannot be guaranteed behind the glass.
**Differs from:** flat-material uses opaque layers; glassmorphism uses translucent ones. aurora-gradient is often the background that glass sits on.
**Prompt recipe:** "Glassmorphism app screen, frosted translucent cards with a thin white rim over a soft purple and aqua gradient, medium-weight grotesk labels, floating tab bar."
**Implementation notes:** Use `backdrop-filter: blur(16px) saturate(140%)` with a solid fallback when unsupported. Raise the panel's opacity until text reaches 4.5:1 on the worst part of the background.

## neumorphism

**Visual DNA:** Buttons and cards pushed out of or pressed into a single-color surface, drawn only with one light shadow and one dark shadow.
**Design principles:** One material, one light source. Pressed versus raised shows state.
**Color behavior:** A light grey or pastel ground; elements are the same color; one accent for active state.
**Typography:** Rounded or geometric sans in a darker tone of the ground.
**Layout:** Centered control groups, big round buttons, generous padding.
**Composition:** Few large controls on an empty surface.
**Image treatment:** Rarely uses photos; icons are simple line or solid.
**Texture and material:** Soft molded plastic.
**Motion language:** Raised to pressed on tap (shadow inverts), 120 to 200 ms.
**Best for:** Control panels, smart home and music player apps, small utilities.
**Avoid when:** Accessibility matters for many users: edges and states have very low contrast.
**Differs from:** skeuomorphism imitates real materials in detail; neumorphism uses one plain material. claymorphism is colorful and 3D; neumorphism is monochrome and flat-lit.
**Prompt recipe:** "Neumorphic smart home app, light grey surface, round raised buttons with soft light and dark shadows, one pressed active button in teal, rounded sans labels."
**Implementation notes:** Two `box-shadow` values (light top-left, dark bottom-right); `inset` for pressed. Add a visible focus ring and a color change for state, since shadows alone fail contrast. Not checked against a source in this research round.

## claymorphism

**Visual DNA:** Inflated rounded cards and icons with a light inner highlight, a darker inner shadow at the bottom, and a soft drop shadow, in candy pastels.
**Design principles:** Touchable and friendly. Everything rounded. Depth without realism.
**Color behavior:** Pastel fills with slightly darker inner shades; a white or tinted ground.
**Typography:** Rounded geometric sans, bold for headings.
**Layout:** Centered cards and floating 3D icons.
**Composition:** A few large puffy objects with space around them.
**Image treatment:** Clay-like 3D renders or CSS-shaded shapes.
**Texture and material:** Soft clay, matte plastic.
**Motion language:** Squash and stretch on tap; gentle floating idle.
**Best for:** Kids apps, education, icon sets, onboarding screens.
**Avoid when:** The product must feel serious, financial, or enterprise.
**Differs from:** sculpted-surface is calm and monumental; claymorphism is cute and colorful. neumorphism is monochrome.
**Prompt recipe:** "Claymorphism UI card and 3D icons, puffy rounded shapes in pastel pink mint and blue, inner highlights and soft drop shadows, bold rounded sans heading."
**Implementation notes:** Combine an outer shadow with two inset shadows (light top, dark bottom). Not checked against a source in this research round.

## neo-brutalism

**Visual DNA:** Cards and buttons with 2 to 4 px black borders, solid black offset shadows, flat saturated fills, and heavy grotesk type.
**Design principles:** Honest structure, playful color. Everything clickable looks clickable.
**Color behavior:** Bright flat fills (yellow, pink, blue, mint) with pure black lines and an off-white ground.
**Typography:** Heavy grotesk headings, monospace for small labels.
**Layout:** Simple modular grid of bordered boxes.
**Composition:** Boxes slightly tilted or offset; one loud call to action.
**Image treatment:** Flat stickers, simple illustrations, or photos in thick frames.
**Texture and material:** Flat, no gradients.
**Motion language:** Buttons shift into their shadow on press (translate 4 px); no easing curves needed.
**Best for:** Startup sites, developer tools, calls to action, portfolios.
**Avoid when:** The brand is luxury, medical, or must feel quiet. Reviews in 2026 note it is cooling as a full-page style but still strong for calls to action.
**Differs from:** brutalist-editorial is raw and default-looking; neo-brutalism is raw but designed and colorful.
**Prompt recipe:** "Neo-brutalist landing page, cards with thick black borders and hard offset shadows, flat yellow pink and blue fills, heavy grotesk headings, one big call-to-action button."
**Implementation notes:** `border: 3px solid #111; box-shadow: 4px 4px 0 #111;` and `translate(4px,4px)` with no shadow on `:active`.

## bento-grid

**Visual DNA:** A rectangle divided into rounded tiles of 1x1, 2x1, and 2x2 sizes with equal gaps; each tile holds one stat, image, or feature.
**Design principles:** One idea per tile. Size equals importance. Equal gaps and radius everywhere.
**Color behavior:** Neutral tiles with one or two highlighted in the accent; works in light or dark mode.
**Typography:** One grotesk family; big numbers and short headings inside tiles.
**Layout:** CSS grid with spanning tiles; collapses to one column on phones.
**Composition:** The largest tile holds the hero point; small tiles support it.
**Image treatment:** Product shots, UI crops, or icons fitted to each tile.
**Texture and material:** Flat tiles with subtle borders or soft shadows.
**Motion language:** Tiles fade and rise in a short stagger as they scroll into view.
**Best for:** Feature pages, dashboards, portfolios, summary slides.
**Avoid when:** Content is a linear argument that must be read in order.
**Differs from:** minimal-product-showcase uses identical tiles; bento-grid uses mixed sizes. modular grids in swiss-international hold text columns; bento holds self-contained cards.
**Prompt recipe:** "Bento grid feature section, rounded tiles of mixed sizes with equal gaps, big stat numbers, one hero tile with product image, neutral tiles and one accent tile, grotesk type."
**Implementation notes:** `display:grid; grid-template-columns: repeat(4,1fr); gap:16px;` with `grid-column: span 2` for wide tiles. Reviews in 2026 rate it the most durable web trend.

## flat-material

**Visual DNA:** Solid color shapes, simple icons, cards with small shadows to show elevation, a floating action button, and clear typography.
**Design principles:** Clarity first. Layers behave like paper. Motion explains change.
**Color behavior:** One primary, one secondary, and neutral surfaces; status colors for feedback.
**Typography:** Grotesk or geometric sans with a strict type scale.
**Layout:** Responsive grid with standard margins and gutters.
**Composition:** Cards and lists; one primary action per screen.
**Image treatment:** Flat icons and illustrations, consistent stroke and corner radius.
**Texture and material:** Flat paper with small elevation shadows.
**Motion language:** Container transforms and shared-axis transitions, 200 to 300 ms with standard easing.
**Best for:** Corporate websites, apps, infographics, onboarding.
**Avoid when:** The brand needs a strong, distinctive personality on its own.
**Differs from:** glassmorphism (Liquid Glass) is translucent and is described as a move away from flat; flat-material is opaque.
**Prompt recipe:** "Flat material app screen, solid blue primary and soft surfaces, simple line icons, cards with small elevation shadows, floating action button, clear grotesk type."
**Implementation notes:** Define elevation levels as tokens (0, 1, 2, 3) and map each to one shadow value.

## skeuomorphism

**Visual DNA:** Stitched leather, wood grain, brushed metal knobs, glossy buttons, paper notepads, and realistic shadows.
**Design principles:** Familiar objects teach the interface. Materials signal function.
**Color behavior:** Material colors: leather browns, wood, steel greys, with small LED accents.
**Typography:** Slab or serif labels engraved or embossed into the material.
**Layout:** Centered device-like panels.
**Composition:** A single object (a mixer, a notebook, a dial) as the interface.
**Image treatment:** Photoreal textures and lighting.
**Texture and material:** Leather, wood, metal, glass, paper.
**Motion language:** Knobs rotate, switches flip, pages curl, with physical timing.
**Best for:** Music and audio apps, game UI, nostalgic products.
**Avoid when:** Content changes often or the UI must scale to many screen sizes cheaply.
**Differs from:** neumorphism uses one plain material; skeuomorphism imitates many real materials.
**Prompt recipe:** "Skeuomorphic audio app, brushed metal knobs on a walnut wood panel, stitched leather edge, engraved slab labels, glowing amber LEDs, realistic shadows."
**Implementation notes:** Use layered gradients and small texture images; keep hit areas large. Not checked against a source in this research round.

## aurora-gradient

**Visual DNA:** Large soft blobs of color blurred into each other, a fine noise grain on top, and a sharp grotesk headline in the calm area.
**Design principles:** Atmosphere without imagery. Color as mood. Text stays crisp and on a calm zone.
**Color behavior:** Three or four neighboring hues (violet, blue, aqua, pink) blending smoothly.
**Typography:** Clean grotesk, often large and tight, in white or deep ink.
**Layout:** Full-bleed gradient with centered or left-aligned headline.
**Composition:** Brightest color away from the text; text over the most even area.
**Image treatment:** Usually none; sometimes a product or UI floating on top.
**Texture and material:** Film grain, light haze.
**Motion language:** Blobs drift slowly (10 to 30 s loops).
**Best for:** AI and SaaS websites, deck covers, social posts, event key visuals.
**Avoid when:** Content needs real imagery or the brand palette is strict.
**Differs from:** analogous-system is a color rule; aurora-gradient is a specific blurred background look.
**Prompt recipe:** "Aurora mesh gradient background, soft blurred violet blue aqua and pink fields, fine film grain, large crisp white grotesk headline over the calmest area."
**Implementation notes:** Stack 3 to 4 radial gradients with heavy blur; add an SVG `feTurbulence` grain at 5 to 8 percent. Check text contrast at the brightest point. Not checked against a source in this research round.

## dark-tech-saas

**Visual DNA:** Near-black surfaces in two or three steps, hairline borders and grid lines, glowing accent on one element, code snippets, and monospace figures.
**Design principles:** Calm, precise, and fast. The product UI is the hero. One accent color carries attention.
**Color behavior:** Near-black and dark greys with white text and a single cyan, green, or violet accent.
**Typography:** Grotesk for headlines (tight tracking), monospace for numbers, code, and labels.
**Layout:** Centered hero with a product screenshot, then bento or modular feature sections.
**Composition:** A glowing product screenshot or terminal under the headline.
**Image treatment:** Real UI screenshots, code, and subtle glow; no stock photos.
**Texture and material:** Hairline grids, faint noise, glass panels.
**Motion language:** Short fades and rises; data or particles flowing along lines.
**Best for:** Software products, dashboards, developer tools, launch pages.
**Avoid when:** The audience prefers warmth or reads long text (use a light theme for docs).
**Differs from:** cyberpunk is noisy and dramatic; dark-tech-saas is calm and precise. layered-system is a diagram style; this is a page style.
**Prompt recipe:** "Dark SaaS landing page, near-black ground with hairline grid, glowing product screenshot, tight grotesk headline, monospace stats, single cyan accent on the main button."
**Implementation notes:** Use three surface levels as tokens. Keep text at least #E4E9EF on the darkest ground. Reviews in 2026 say dark mode is still winning.

## flat-illustration-people

**Visual DNA:** Flat vector figures with exaggerated long arms and legs, tiny heads, no facial detail, unusual skin colors, and simple props.
**Design principles:** Friendly and neutral. Anyone can see themselves. Simple shapes scale everywhere.
**Color behavior:** Bright flat fills, often purple, blue, coral, and yellow on white.
**Typography:** Geometric sans.
**Layout:** A figure scene next to or above a short message.
**Composition:** One or two figures doing an action that matches the message.
**Image treatment:** Pure flat vector, no gradients or texture.
**Texture and material:** None.
**Motion language:** Simple limb loops and props sliding in.
**Best for:** Onboarding, corporate websites, explainers, empty states.
**Avoid when:** You need a distinctive brand: the style now reads as generic unless you give it your own twist.
**Differs from:** handcrafted-illustration shows the hand; this style is clean vector. flat-material is about UI parts, not people.
**Prompt recipe:** "Flat corporate illustration, two people with long limbs and small heads building a block tower, purple coral and yellow flat colors on white, no outlines."
**Implementation notes:** Use SVG with a small shared color set. Not checked against a source in this research round.

## dopamine-design

**Visual DNA:** Many bright colors at once, pill and blob shapes, rounded bold type, stickers, and smiling icons.
**Design principles:** Make people feel good. Color as energy. Rounded and soft, never aggressive.
**Color behavior:** Four to six saturated colors in balance, often on white or a light tint.
**Typography:** Rounded bold geometric display, playful sizes.
**Layout:** Colorful blocks and pills in a loose grid.
**Composition:** Color blocks frame a cheerful message; lots of small delights.
**Image treatment:** Bright product shots, stickers, emoji-like icons.
**Texture and material:** Glossy or flat candy colors.
**Motion language:** Bouncy springs, wiggles, and pops.
**Best for:** Consumer brands, social posts, lifestyle apps, kids products.
**Avoid when:** The subject is serious, sad, or high-trust.
**Differs from:** memphis is ironic and angular; dopamine-design is sincere and round. color-blocking is structured; dopamine is loose.
**Prompt recipe:** "Dopamine design social post, bright pink orange lemon cyan and green pill shapes, rounded bold headline, stickers and smiley icons on white, cheerful and bouncy."
**Implementation notes:** Keep text on white or deep ink, not on mid-tone brights. Not checked against a source in this research round.
