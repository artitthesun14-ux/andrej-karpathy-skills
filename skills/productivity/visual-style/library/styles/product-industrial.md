# Product and Industrial Visualization

Explaining objects and complex systems: technical presentations, hardware, semiconductors, manufacturing. For building these scenes (cameras, Three.js, exploded geometry), follow the `technical-visualization` skill; these entries define the look.

## exploded-cutaway

**Visual DNA:** Parts pulled apart along one axis with even gaps, or a section cut open to show the inside, with thin leader lines and numbered callouts.
**Design principles:** Reveal how it is made and how it fits. Preserve spatial relationships: parts move only along their assembly axis. Label only what the story needs.
**Color behavior:** Neutral parts in two or three greys or the product's real colors; one highlight color for the part under discussion; cut faces in a distinct hatch or color.
**Typography:** Small grotesk labels, monospace part numbers, numbered callouts in circles.
**Layout:** Object centered with callouts in clean columns on one or both sides.
**Composition:** Explosion axis vertical or along the object's main axis; consistent spacing between parts; leader lines that never cross.
**Image treatment:** Clean-shaded 3D or line art; consistent light; slight ambient occlusion for depth.
**Texture and material:** Simplified materials; avoid photoreal noise that hides edges.
**Motion language:** Parts separate in assembly order (staggered 80 to 150 ms, 600 to 900 ms each, ease-in-out), hold, then reassemble. Camera stays mostly still.
**Best for:** Product explanation, hardware, manufacturing, teardowns, semiconductor packaging.
**Avoid when:** The audience needs function (what it does) rather than structure (what it is made of).
**Differs from:** layered-system shows abstract layers of a system; exploded-cutaway shows physical parts. isometric-diagram maps a whole system at equal scale; exploded-cutaway focuses on one object.
**Prompt recipe:** "Exploded view technical illustration, parts separated vertically along the assembly axis with even gaps, thin leader lines to numbered callouts, neutral greys with one cyan highlighted part, dark technical background."
**Implementation notes:** Keep each part a separate object with its own offset vector. Label with HTML overlays positioned from projected 3D coordinates. Mark simplified or conceptual geometry as conceptual.

## isometric-diagram

**Visual DNA:** Objects drawn on 30 degree axes with no perspective, so sizes stay comparable, and systems read as a map of blocks, platforms, and connections.
**Design principles:** Clarity and comparability. One consistent grid. Simple block forms, no unnecessary detail.
**Color behavior:** Three tones per object (top light, left mid, right dark) from one hue; one accent for active elements.
**Typography:** Grotesk labels on flat tags, aligned to the screen (not skewed) for readability.
**Layout:** Diagram centered on an isometric grid, labels outside or on tags.
**Composition:** Flow from top-left to bottom-right or along a clear path; grouping by platforms.
**Image treatment:** Vector illustration; no photos.
**Texture and material:** Flat with three-tone shading.
**Motion language:** Data packets moving along paths, blocks rising into place (300 to 500 ms), gentle stagger.
**Best for:** System architecture, factory layouts, process maps, onboarding illustrations.
**Avoid when:** True scale, perspective, or realism is required.
**Differs from:** exploded-cutaway focuses on one object's parts; isometric-diagram maps a system of objects. layered-system stacks layers vertically; isometric-diagram spreads objects across a plane.
**Prompt recipe:** "Isometric diagram of a system, blocks on a 30 degree grid, three-tone shading per block in cobalt and frost, connection paths between platforms, flat grotesk labels."
**Implementation notes:** Use an SVG group with `transform: rotate(45deg) scaleY(0.577)` approximations or draw on a precomputed iso grid. Keep labels unskewed.

## product-render

**Visual DNA:** Photoreal or clean-shaded 3D of the product under studio lighting, accurate materials, at a three-quarter hero angle on a seamless background.
**Design principles:** Truthful representation; flattering but not misleading. Material accuracy matters (metal looks like metal).
**Color behavior:** Product's real colors; background neutral or tonal; no colored lights unless brand-motivated.
**Typography:** Minimal grotesk overlays for names and specs.
**Layout:** Single focus, centered or on the rule of thirds.
**Composition:** Three-quarter view showing two sides and top; soft floor shadow or reflection.
**Image treatment:** Studio three-point lighting, high-quality anti-aliasing.
**Texture and material:** Physically based materials.
**Motion language:** Turntable rotation (one revolution in 6 to 12 s), or hero camera moves.
**Best for:** Product pages, launch decks, configurators, spec presentations.
**Avoid when:** No accurate model exists and the result would misrepresent the product.
**Differs from:** premium-product-campaign is the full ad composition; product-render is the asset. product-reveal-3d is the motion sequence.
**Prompt recipe:** "Clean studio product render, three-quarter hero angle, soft three-point lighting, accurate brushed aluminium and glass materials, seamless light grey background, soft floor shadow."
**Implementation notes:** For the web use `<model-viewer>` or Three.js with environment lighting. Compress models (Draco, KTX2). Provide a poster image while loading.

## industrial-editorial

**Visual DNA:** Factory and process photography arranged in a magazine grid, with specification tables, part numbers, and units used as typographic texture.
**Design principles:** Pride in making. Facts as design material. Strong grid, dense but organized data.
**Color behavior:** Neutral and navy or dark technical base; one safety or signal color (amber, orange) for highlights.
**Typography:** Condensed grotesk for headlines, monospace or tabular grotesk for specs and numbers.
**Layout:** Editorial grid mixing full-bleed photos and data tables.
**Composition:** Alternating rhythm of image and data; big numbers as anchors.
**Image treatment:** Documentary industrial photography: machines, hands, materials; cool grading with warm accents.
**Texture and material:** Metal, concrete, safety markings.
**Motion language:** Counters for key figures, cuts between process steps, subtle parallax on photos.
**Best for:** Manufacturing, semiconductors, B2B annual reports, supplier decks.
**Avoid when:** The audience is consumer-focused and wants emotional storytelling.
**Differs from:** swiss-international is generic and neutral; industrial-editorial is anchored in factory imagery and specs. brutalist-editorial is raw on purpose; industrial-editorial is organized.
**Prompt recipe:** "Industrial editorial spread, documentary photo of a clean-room machine, condensed grotesk headline, monospace spec table with units, navy and cloud palette with one amber highlight."
**Implementation notes:** Use real figures with units and sources; label estimates. Tabular numerals for spec tables.

## blueprint-diagram

**Visual DNA:** White or cyan line drawing on deep blue, with a measurement grid, dimension lines with arrows, construction lines, and a title block in the corner.
**Design principles:** Engineering clarity and a sense of origin. Lines have meaning: solid for visible edges, dashed for hidden, thin for dimensions.
**Color behavior:** Blueprint blue ground, white lines and text, a lighter cyan for secondary lines, one warm mark for callouts.
**Typography:** Monospace or condensed technical lettering, uppercase, small.
**Layout:** Drawing centered on a grid with a title block (name, scale, date, revision) bottom right.
**Composition:** Orthographic views (front, side, top) or a single isometric drawing with dimensions.
**Image treatment:** Line art only.
**Texture and material:** Optional faint paper grain or fold lines.
**Motion language:** Lines draw on in construction order (outline, then details, then dimensions), 1 to 3 s total.
**Best for:** Engineering explainers, product anatomy, architecture plans, startup origin stories.
**Avoid when:** The audience needs realistic appearance, or the nostalgic tone does not fit a modern brand.
**Differs from:** exploded-cutaway shows parts separated in 3D; blueprint-diagram shows orthographic line drawings. dark-technical styles use dark UI panels; blueprint-diagram imitates a drawing sheet.
**Prompt recipe:** "Blueprint technical drawing, white line art on deep blue with a faint measurement grid, dimension lines with arrows, dashed hidden edges, monospace uppercase title block in the corner, one red callout circle."
**Implementation notes:** SVG with `vector-effect: non-scaling-stroke` keeps line weights consistent. Draw-on via `stroke-dashoffset`. Ensure label text, not only lines, passes contrast.

## layered-system

**Visual DNA:** A system shown as stacked translucent planes, each plane one layer (hardware, OS, app; or substrate, transistor, interconnect), with connections passing between them.
**Design principles:** Show hierarchy and dependency. Each layer has one label and one color. Connections are the story.
**Color behavior:** One hue ramp for layers (darker at the bottom), signal color for active paths.
**Typography:** Grotesk layer labels, monospace for technical names.
**Layout:** Centered stack in isometric or slight perspective; labels aligned in a column.
**Composition:** Vertical stack with even spacing; highlighted layer slightly separated.
**Image treatment:** Clean vector or simple 3D planes with transparency.
**Texture and material:** Glass-like translucency, subtle edges.
**Motion language:** Layers separate to reveal internals (500 to 800 ms), a highlighted layer lifts, data travels vertically through layers.
**Best for:** Software architecture, chip stacks, network layers, tech stack slides.
**Avoid when:** The system is not hierarchical (use isometric-diagram or a network graph).
**Differs from:** exploded-cutaway is physical; layered-system is conceptual. layer-reveal is the motion pattern; layered-system is the static visual.
**Prompt recipe:** "Layered system visualization, five translucent planes stacked in slight perspective, each labelled in grotesk, indigo ramp from dark bottom to light top, cyan data path passing vertically."
**Implementation notes:** CSS 3D transforms (`rotateX(60deg) rotateZ(-45deg)`) can stack planes without WebGL. Label conceptual diagrams as conceptual.
