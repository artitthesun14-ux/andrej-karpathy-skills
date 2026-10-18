# Neoclassical and Art-Inspired

Structure borrowed from classical art and architecture: balanced proportion, serif letterforms, and dignified composition.

## neoclassical-editorial

**Visual DNA:** Bilateral symmetry, inscriptional Roman capitals with generous letter-spacing, text blocks proportioned like columns, thin keyline frames, and architectural motifs (arches, pediments, columns) used sparingly.
**Design principles:** Order, proportion, and permanence. Every element is centered on a common axis or deliberately paired. Ornament is minimal and structural (a rule, a frame), never playful.
**Color behavior:** A light stone or cream ground with one deep heritage color (burgundy, emerald, navy) for covers and section openers, and a brass or gold tone only for rules and frames.
**Typography:** Classical serif (Roman inscriptional capitals for titles, a Garalde or transitional for text). Titles in widely tracked uppercase. Small caps for subheads. Old-style figures in text.
**Layout:** Centered, symmetric pages. Margins in classical proportion (inner smaller than outer, bottom largest). Text in one or two equal columns.
**Composition:** Strong central axis. Heading, ornament, and text stacked like a facade. Arched image frames or round medallions for portraits.
**Image treatment:** Sculpture, architecture, and classical paintings; or contemporary photos treated with warm grading and placed in arched or framed windows.
**Texture and material:** Subtle stone or laid-paper texture; brass keylines.
**Motion language:** Slow, dignified fades and vertical rises (800 to 1400 ms). Frames draw in from the center outward. No bounce, no rotation.
**Best for:** Cultural institutions, heritage brands, law and finance firms, ceremonies, presentations that need authority and a distinct personality.
**Avoid when:** The brand is youthful or tech-forward, or the message is about speed and disruption.
**Differs from:** luxury-editorial is asymmetric and modern; neoclassical-editorial is symmetric and historical. heritage-luxury is a brand identity built on a monogram and a founding fact, asymmetric and modern; neoclassical-editorial is institutional and architectural. renaissance-composition is about pictorial composition and light; neoclassical-editorial is about typographic and architectural structure.
**Prompt recipe:** "Neoclassical editorial cover, centered symmetric layout, widely tracked Roman capitals title, thin brass keyline frame, arched image window with a marble sculpture, emerald ground, cream inner pages."
**Implementation notes:** Use `letter-spacing: 0.15em` to `0.25em` on uppercase titles. Arched frames: `border-radius: 50% 50% 0 0 / 30% 30% 0 0` or an SVG clip path. Keep symmetry on mobile by stacking along the same center axis.

## renaissance-composition

**Visual DNA:** A pyramidal or triangular grouping of elements, a central vanishing point or focal figure, chiaroscuro lighting that pulls a bright subject out of a dark ground, and rich earthy midtones.
**Design principles:** Lead the eye with geometry and light. The most important element is the brightest and sits at the apex or center. Supporting elements frame it.
**Color behavior:** Dark warm ground, a luminous subject, earth tones and one jewel tone. Value contrast does more work than hue.
**Typography:** Refined serif in a supporting role, placed in the dark areas. Titles modest so the image keeps the drama.
**Layout:** Image dominates the frame. Type in a band or corner of shadow.
**Composition:** Triangular arrangement with the hero at the apex; leading lines (architecture, gaze, gesture) converge on the hero; golden-section placement of the horizon.
**Image treatment:** Painterly lighting: one warm key light from upper side, deep shadows, soft falloff. Works for photography, 3D renders, and illustration.
**Texture and material:** Canvas or varnish-like softness; subtle vignette.
**Motion language:** Slow camera push toward the apex (3 to 6 s), light slowly rising on the subject. Feels like a painting coming alive.
**Best for:** Keynote openers, cultural campaigns, book covers, hero images for products that want gravitas.
**Avoid when:** The content is data-heavy, or the brand palette is bright and flat.
**Differs from:** neoclassical-editorial is typographic and architectural; renaissance-composition is pictorial and light-driven. product-render can borrow this lighting, but this style governs the whole scene.
**Prompt recipe:** "Renaissance-inspired composition, pyramidal grouping, single warm key light creating chiaroscuro, luminous subject at the apex, dark umber background, leading lines converging, refined serif title in the shadow area."
**Implementation notes:** For CSS scenes, use radial gradients for the light pool and a vignette overlay. In Three.js, one spotlight with soft shadows plus a dim fill. Keep text on the dark areas only and check contrast there.

## museum-exhibition

**Visual DNA:** Wall-scale graphics: large room numbers and section titles, short introductory wall text, consistent object labels, timelines along walls, and wayfinding in a strict system.
**Design principles:** Designed for standing, walking, and reading at distance. Information in layers: title (read from 5 m), intro (from 2 m), label (from 1 m). Consistency lets visitors navigate without thinking.
**Color behavior:** Each room or section gets one color from a coordinated set, applied to walls or panels; text stays dark on light or light on dark with high contrast.
**Typography:** Clear grotesk for wayfinding and labels, optionally a characterful serif for section titles. Large sizes; short line lengths (40 to 55 characters). Tabular figures for dates.
**Layout:** Panels on a modular grid matching wall heights (eye level around 145 cm center). Timelines as horizontal bands. Labels at consistent offsets from objects.
**Composition:** Sequential, with each panel completing one idea. Big numbers and dates as anchors.
**Image treatment:** Archival photographs with captions and credits; object photos on neutral backgrounds; maps and diagrams.
**Texture and material:** Matte panels, vinyl lettering, painted walls; on screen, flat color panels.
**Motion language:** On screen: scroll-driven progression room by room, timeline segments revealing as you advance, 300 to 500 ms fades.
**Best for:** Exhibitions, historical timelines, wayfinding systems, museum websites, educational microsites.
**Avoid when:** The content is a single persuasive pitch rather than a sequence of explanations.
**Differs from:** art-catalogue is for close reading of reproductions; museum-exhibition is for orientation and storytelling in space. scroll-narrative is a motion technique this style often uses on the web.
**Prompt recipe:** "Museum exhibition graphics, large room number and section title in grotesk, short wall text in a narrow column, horizontal timeline band with dates, color-coded sections, matte panels."
**Implementation notes:** Define label templates as components (title, maker, date, material, credit). On the web, use one color token per section. Test text at the actual viewing distance: on slides, the back row.

## historical-poster

**Visual DNA:** The interwar lithographic poster (roughly 1920s to 1930s travel and event posters): flat stylized illustration with simplified shapes, three or four flat inks, a dramatic perspective or sun motif, and stepped Deco lettering in a band.
**Design principles:** One image, one name, one promise. Simplify forms into flat areas of color. Lettering is part of the composition, not added on.
**Color behavior:** Limited flat inks: a warm sky or ground, a deep contrasting color, a highlight. Overlaps produce no new colors (no transparency).
**Typography:** Geometric Deco display (stepped, high-waisted, or monoline capitals) for the destination or event, a simple sans for details. All caps, set in a band at the top or bottom.
**Layout:** Tall poster proportion (roughly 2:3). Image fills the frame; lettering band at top or bottom, full width.
**Composition:** Low horizon or dramatic upward perspective, a single landmark or vehicle as hero, sun rays or speed lines radiating from it.
**Image treatment:** Flat vector illustration with simplified shading in 2 or 3 tones per color; no photographic detail.
**Texture and material:** Optional lithographic grain, slight paper yellowing.
**Motion language:** Gentle parallax between illustration layers (sky, mid, foreground) and a slow sun rise or vehicle drift. Calm, 4 to 8 s loops.
**Best for:** Travel and tourism, events, heritage packaging, anniversary campaigns, nostalgic brand moments.
**Avoid when:** The audience might read it as pastiche, or the content is technical. Pick a different era deliberately if the brand has one (Victorian, Art Nouveau, mid-century) and state the variant.
**Differs from:** contemporary-poster is typographic and grid-based; historical-poster is illustrative and era-specific. handcrafted-illustration shows the hand; historical-poster is flat and stylized.
**Prompt recipe:** "1930s lithographic travel poster, flat stylized illustration of a coastal landmark, low horizon with radiating sun, four flat inks, stepped Art Deco capitals in a band at the bottom, slight paper grain."
**Implementation notes:** Build illustration as layered SVG groups so parallax is easy. Choose a display face licensed for commercial use. Do not copy a specific historical poster; reuse its principles only.
