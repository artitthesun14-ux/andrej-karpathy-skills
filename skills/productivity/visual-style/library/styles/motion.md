# Motion and Animated Visuals

Each entry describes rhythm, movement, and why to use it, not just the effect name. Timing, easing, and accessibility details follow the `motion-design` skill; build with `animation-implementation`. Pair any motion style with a static style for the frames.

## kinetic-typography

**Visual DNA:** Words move in time with speech, music, or reading pace: each phrase arrives, holds long enough to read, and leaves with intent. Emphasis is shown by scale, weight, or position change.
**Design principles:** Motion follows meaning: stressed words get bigger moves. Reading time first: hold each phrase at least as long as it takes to read twice (about 250 ms per word, 1 s minimum).
**Color behavior:** High contrast; one accent color reserved for the key word in each phrase.
**Typography:** Bold condensed or grotesk with a variable weight axis; limited to one family.
**Layout:** Centered or grid-aligned frames; one phrase per frame.
**Composition:** Single focus per moment; previous words exit before new ones crowd.
**Image treatment:** Usually none; occasional background footage.
**Texture and material:** Flat.
**Motion language:** Rhythm is the beat or syllable: entrances 200 to 400 ms with strong ease-out, holds 1 to 2 s, exits faster than entrances. Moves: slide, scale, weight morph, mask reveal.
**Best for:** Title sequences, social videos, keynote openers, manifesto films, lyric videos.
**Avoid when:** Viewers need to read long text, or the audience includes people sensitive to motion without a static alternative.
**Differs from:** oversized-type is a single static frame; kinetic-typography is timed sequence. experimental-typography distorts letters; kinetic-typography moves intact words.
**Prompt recipe:** "Kinetic typography sequence, one phrase per frame, bold condensed sans, key word scaling up in signal red, entrances 300 ms ease-out, holds of 1.5 s, synced to a steady beat."
**Implementation notes:** Script phrases with timestamps first. Use WAAPI or GSAP timelines. Respect `prefers-reduced-motion` by showing phrases as static frames with cross-fades.

## morphing-shapes

**Visual DNA:** One shape transforms smoothly into the next (circle to square, icon to icon, blob to chart), so viewers see that two ideas are the same thing in different states.
**Design principles:** Continuity communicates relationship. Morph only between related ideas. Keep the point count and center consistent to avoid chaotic in-betweens.
**Color behavior:** Color can morph with shape to signal state change (calm to alert).
**Typography:** Geometric sans labels that cross-fade during the morph.
**Layout:** Single focus, centered.
**Composition:** The morphing shape stays in one place; context changes around it.
**Image treatment:** Vector shapes.
**Texture and material:** Flat or soft gradients.
**Motion language:** 400 to 800 ms per morph, ease-in-out, a short hold before and after so both states are readable.
**Best for:** Concept transitions, logo animation, state changes, onboarding steps.
**Avoid when:** The two states are unrelated; the morph would imply a false connection.
**Differs from:** organic-shapes is a static surface language; morphing-shapes is about meaningful transformation. editorial-scene-transitions carries content between layouts; morphing-shapes transforms one object.
**Prompt recipe:** "Morphing shape animation, a lilac circle smoothly becomes a rounded square then a bar chart, 600 ms ease-in-out per morph, holds of 800 ms, centered on a shell background."
**Implementation notes:** Use SVG paths with matching point counts (Flubber or manual), or CSS `clip-path` with equal vertex counts. Reduced motion: cross-fade states.

## editorial-scene-transitions

**Visual DNA:** Page-turn logic: an element (image, headline, number) from one scene carries into the next and becomes part of the new layout, so sections feel like spreads in one publication.
**Design principles:** Continuity of attention: the eye follows a shared element. Transitions mark chapter changes, not every slide.
**Color behavior:** Background may cross-fade between section colors; shared element keeps its color.
**Typography:** Serif display headlines that can scale and move between positions.
**Layout:** Each scene has a different editorial layout; the shared element links them.
**Composition:** Shared element as the anchor; other content enters around it.
**Image treatment:** Images that crop or reframe as they move (mask changes).
**Texture and material:** Flat.
**Motion language:** 600 to 1000 ms shared-element moves with a smooth ease-in-out; secondary content fades in after the anchor lands (stagger 80 ms).
**Best for:** Editorial decks, brand stories, case studies, long-form web features.
**Avoid when:** Content is non-linear (dashboards) or navigation must be instant.
**Differs from:** scroll-narrative is driven by scroll position; editorial-scene-transitions is driven by step navigation. kinetic-typography is about word rhythm; this style is about layout continuity.
**Prompt recipe:** "Editorial scene transition, the hero image from slide one shrinks and slides into a column on slide two while the didone headline moves to the top left, 800 ms ease-in-out, new text fades in after."
**Implementation notes:** Use the View Transitions API (`view-transition-name`) where supported, or FLIP technique. Provide instant navigation fallback for reduced motion.

## camera-driven-storytelling

**Visual DNA:** A virtual camera moves through one continuous scene; each stop is a chapter: establish (wide), approach, detail (close), pull back (context).
**Design principles:** Spatial understanding through movement. Camera moves are motivated: each answers a question the viewer has.
**Color behavior:** Scene lighting provides mood; labels and highlights use signal colors.
**Typography:** Minimal overlays that appear at each stop.
**Layout:** Full-bleed scene with small text panels.
**Composition:** Each stop is framed like a still photograph (rule of thirds, clear subject).
**Image treatment:** 3D scenes or large 2D illustrations panned and zoomed.
**Texture and material:** Depends on the paired static style.
**Motion language:** Smooth dolly, orbit, and zoom with ease-in-out (1.5 to 3 s per move), holds at each stop long enough to read the label. No sudden cuts.
**Best for:** Product tours, architecture walkthroughs, system explainers, keynotes.
**Avoid when:** The content has no spatial dimension, or the camera would wander without purpose.
**Differs from:** product-reveal-3d is a short single hero moment; camera-driven-storytelling is a multi-stop journey. scroll-narrative can drive this camera, but this entry is about the camera grammar.
**Prompt recipe:** "Camera-driven explainer, establishing wide shot of the system, slow dolly to the processor, close detail with label, pull back to context, 2 s ease-in-out moves, dark technical scene."
**Implementation notes:** Define camera keyframes as data (position, target, fov). Follow `technical-visualization` references for scene and camera setup. Allow skipping between stops.

## scroll-narrative

**Visual DNA:** Scroll position drives the story: a sticky visual (chart, map, scene) updates step by step while text panels scroll over it. Layers at different speeds (parallax) add depth when it helps.
**Design principles:** The reader controls pace. Each text step changes exactly one thing in the visual. Parallax only to separate layers, never as decoration.
**Color behavior:** Visual uses highlight color for what changed in the current step; rest muted.
**Typography:** Readable text panels (serif or grotesk 17 to 20 px) with solid or blurred backgrounds.
**Layout:** Sticky visual area plus scrolling step panels; on mobile, visual on top and steps below.
**Composition:** One change per step, clearly linked to its text.
**Image treatment:** Charts, maps, diagrams, or 3D scenes.
**Texture and material:** Flat.
**Motion language:** Transitions tied to scroll (scrubbed) or triggered at step thresholds (300 to 600 ms). Parallax ratios small (0.8 to 1.2).
**Best for:** Data journalism, product stories, annual report sites, museum websites.
**Avoid when:** The content is short, or users need to jump directly to information.
**Differs from:** editorial-scene-transitions is step navigation; scroll-narrative is continuous scrolling. museum-exhibition is a visual system; scroll-narrative is the interaction pattern.
**Prompt recipe:** "Scroll-based narrative, sticky chart on the right that highlights one series per step, text panels scrolling on the left, navy palette with teal highlight, steps change at 50 percent viewport."
**Implementation notes:** Use IntersectionObserver or CSS scroll-driven animations (`animation-timeline: view()`). Never hijack scroll speed. All content must be readable with motion off.

## mechanical-animation

**Visual DNA:** Gears, pistons, cams, and linkages move with correct ratios and timing so the mechanism explains itself. Motion is repetitive, precise, and causally connected.
**Design principles:** Cause and effect must be visible: the driver moves first, the driven part follows. Ratios are real (a 2:1 gear turns half as fast).
**Color behavior:** Neutral parts; the driving part and the output in highlight colors.
**Typography:** Monospace labels for parts and ratios.
**Layout:** Mechanism centered; labels aligned around.
**Composition:** Side or isometric view showing all moving parts without occlusion.
**Image treatment:** Line art or simple shaded vectors; cutaways where needed.
**Texture and material:** Optional metal shading.
**Motion language:** Linear easing for continuous rotation; ease-in-out for reciprocating parts; loops of 2 to 6 s; slow-motion option for key moments.
**Best for:** How-it-works explainers, engineering education, product mechanisms, manufacturing.
**Avoid when:** The mechanism is too complex to show legibly (split into steps instead).
**Differs from:** exploded-cutaway shows assembly; mechanical-animation shows operation. data-flow-animation shows abstract flows; mechanical-animation shows physical motion.
**Prompt recipe:** "Mechanical animation, two meshing gears at a 2:1 ratio driving a piston, white line art on blueprint blue, driver gear highlighted, linear rotation loop of 4 s, monospace part labels."
**Implementation notes:** Derive all rotations from one time variable and the real ratios. SVG `transform-origin` at gear centers. Provide a pause control.

## layer-reveal

**Visual DNA:** Layers peel, slide, or fade away in order so the viewer sees what is underneath, one level at a time.
**Design principles:** Progressive disclosure. One layer per step, with a label for each. The remaining layers re-settle so the structure stays clear.
**Color behavior:** Each layer has a distinct value or color; revealed layer highlighted.
**Typography:** Layer labels with a short description, appearing as each layer is revealed.
**Layout:** Centered object or stack.
**Composition:** Removed layers move out of frame or aside, not overlapping remaining ones.
**Image treatment:** Vector illustration or simple 3D.
**Texture and material:** Matches the subject (food, materials, technical layers).
**Motion language:** Each peel 400 to 700 ms ease-in-out, hold for reading, then next; reverse to rebuild.
**Best for:** Anatomy of a product, tech stacks, food or material layers, before and after.
**Avoid when:** Layers are not ordered or the viewer needs to see all at once.
**Differs from:** layered-system is the static stack; layer-reveal is the sequence. exploded-cutaway separates everything at once; layer-reveal removes one at a time.
**Prompt recipe:** "Layer reveal animation, a burger illustration peeling layer by layer from top bun to bottom, each layer sliding out to the right with a label, 500 ms per peel, remaining layers re-settling."
**Implementation notes:** Model layers as an ordered array; animate with transforms only. Provide step controls (next, previous) and keyboard support.

## data-flow-animation

**Visual DNA:** Particles, dashes, or pulses travel along paths between nodes; speed, density, and color encode real volume and state.
**Design principles:** Motion encodes data honestly: faster or denser means more. Direction must be unambiguous. Do not animate fake data as if it were real.
**Color behavior:** Neutral nodes and paths; flows in a primary color; errors or bottlenecks in a signal color.
**Typography:** Monospace labels for nodes and throughput values.
**Layout:** Node graph, pipeline, or architecture diagram.
**Composition:** Left to right or top to bottom flow; nodes aligned on a grid.
**Image treatment:** Vector diagrams.
**Texture and material:** Optional subtle glow on active paths.
**Motion language:** Continuous linear motion along paths (dash offset or particles); bursts for events; loop seamlessly.
**Best for:** Architecture diagrams, networks and pipelines, supply chains, dashboard heroes.
**Avoid when:** Exact numbers matter more than the sense of flow; use a chart instead.
**Differs from:** mechanical-animation is physical; data-flow-animation is abstract. layered-system shows structure; data-flow-animation shows movement through it.
**Prompt recipe:** "Data flow animation, nodes on a dark technical grid, cyan dashes travelling along connection paths at speed proportional to throughput, amber pulse at one bottleneck node, monospace labels."
**Implementation notes:** Animate `stroke-dashoffset` on SVG paths, or canvas particles for many flows. Label simulated data as illustrative. Pause on reduced motion.

## product-reveal-3d

**Visual DNA:** The product emerges from darkness or abstraction, turns once to show its form, and settles on the hero angle, with light catching key materials.
**Design principles:** Build anticipation, then deliver clarity. One reveal, one rotation, one hero frame. The final frame must work as a still.
**Color behavior:** Dark or deep ground; product's materials and one rim light color.
**Typography:** Name and tagline appear after the product settles.
**Layout:** Centered product.
**Composition:** Start with a partial silhouette or detail, end at a three-quarter hero angle.
**Image treatment:** 3D render with dramatic key and rim light.
**Texture and material:** Physically based materials; reflections that sweep.
**Motion language:** 2 to 4 s total: light rises (500 ms), camera orbit 90 to 180 degrees (1.5 to 2.5 s ease-in-out), settle, then text fade (400 ms).
**Best for:** Product launches, keynotes, hero videos, ads.
**Avoid when:** The product has no distinctive form, or bandwidth and device constraints prevent 3D (use a video).
**Differs from:** camera-driven-storytelling is a multi-stop journey; product-reveal-3d is one moment. product-render is the static asset.
**Prompt recipe:** "3D product reveal, product emerges from black with a rim light, camera orbits 120 degrees in 2 s ease-in-out, settles at a three-quarter hero angle, bronze gold light sweep, tagline fades in."
**Implementation notes:** Pre-render to video for wide reach; use Three.js only when interaction matters. Provide a poster frame and reduced-motion still.
