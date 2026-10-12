# Illustration and Character

Drawn characters carry the piece. The look comes from how figures are drawn, inked, and lit, more than from layout or type.

## vintage-rubber-hose

**Visual DNA:** Characters with jointless, tube-like arms and legs that bend in smooth arcs, round heads, pie-cut eyes (a black oval with a wedge cut out), four-finger white gloves, oversized shoes, and uniform black ink lines on aged paper.
**Design principles:** Everything is soft and elastic: no elbows, no knees, no sharp corners on the body. Silhouette first, so a figure reads as a black shape. One character, one action, one clear pose per frame.
**Color behavior:** Mostly ink and paper: about 55 percent paper ground, 30 percent ink, the rest in one or two flat grey or sepia tones for shading. A later color variant adds one spot color (a red bow or nose) at under 5 percent.
**Typography:** Display: chunky decorative or slab lettering with a bounce, often outlined or set on an arc, 48 to 140 px. Text: a plain book serif at 16 to 18 px. Title cards use hand-drawn lettering when possible; at most two families.
**Layout:** Centered single-focus title cards, or a symmetric frame (oval vignette, scalloped border, concentric swirl rings) around one character. Titles sit on a ribbon banner with folded tails across the top; group posters stack characters in a pyramid with the lead in front. Background drawn more simply than the figure, with flat horizon and rounded trees or clouds.
**Composition:** Full-body figures at mid size so the limbs' curves show. Strong S or C curves through the whole pose. Props scale up (a giant inkwell, a huge flower bouquet) to read at a glance.
**Image treatment:** Clean vector or brush-inked line art at a constant 3 to 5 px weight at 1080 px. Optional film treatment: light grain, a faint vignette, slight gate weave in motion.
**Texture and material:** Aged paper tone, film grain at low opacity, occasional ink bleed. For an old-print or film-card look: sepia toning, dust specks, thin vertical scratches, rounded card corners, and a dark edge vignette. No gradients on the figures.
**Motion language:** Looping "rubber" bounce: the whole body squashes and stretches on the beat (about 2 beats per second), limbs swing as one curve, walk cycles of 8 to 12 drawings on twos. Hold the key pose briefly before each action. Respect reduced motion by showing the key pose.
**Best for:** Mascots, animated explainers with charm, merchandise, music and event posters, retro game art, playful brand moments.
**Avoid when:** The subject is serious, clinical, or premium-minimal, or the piece needs realistic people or precise technical detail.
**Differs from:** pop-graphic uses halftone dots, starbursts, and saturated primaries; vintage-rubber-hose is ink on paper with elastic characters. handcrafted-illustration shows the maker's hand and texture in organic subjects; vintage-rubber-hose follows strict cartoon conventions (pie eyes, gloves, tube limbs). historical-poster is period typography and layout; vintage-rubber-hose is character-led.
**Prompt recipe:** "Vintage rubber hose cartoon, character with jointless noodle arms and legs, pie-cut eyes, white four-finger gloves, big shoes, black ink line art on aged cream paper, flat grey shading, light film grain, playful bouncing pose."
**Implementation notes:** Draw limbs as single SVG paths with round caps and a constant stroke (`stroke-linecap: round`), so bending is a path morph, not a joint rotation. Pie-cut eyes are an ellipse with a wedge `path` cut out. For bounce, animate `transform: scale(1.04, .96)` and back with `ease-in-out` on a 500 ms loop. Grain: an SVG `feTurbulence` overlay at 6 to 10 percent opacity.

## chrome-anime

**Visual DNA:** Anime-proportioned figures (sharp chins, long limbs, spiky or flowing hair, armor or blades) rendered as polished liquid metal: hard-edged specular highlights, mirror reflections of the environment, four-point star glints, on a near-black or cold sky ground.
**Design principles:** Light is the subject. Contrast between near-black and white-hot highlights does the drawing. One figure, one dramatic pose, one light source plus a rim light. Menace and elegance over cuteness.
**Color behavior:** About 55 percent near-black, 30 percent chrome tones built from a stepped gradient (dark steel to silver to white), the rest a cold tint (ice blue or teal) in reflections. One warm signal color at most (a red eye or visor line) under 2 percent.
**Typography:** Display: condensed sans or sharp variable type, often wide-tracked uppercase or with a chrome fill, 40 to 120 px. Text: monospace or small grotesk at 12 to 16 px in silver on black. Japanese or katakana accents only when the content is actually Japanese.
**Layout:** Single-focus, often full-bleed with the figure cropped by the frame. Diagonal blades or limbs cross the frame. Text in a corner block, small, away from the face.
**Composition:** Low or high camera angles, foreshortened limbs and weapons toward the viewer, strong diagonals. Highlights cluster on the head, blade edge, and shoulder to lead the eye. Leave black space around the silhouette.
**Image treatment:** Hard cel-style highlight shapes rather than soft airbrush; reflections painted as bands with crisp edges and a thin ink outline around the silhouette. Add 2 to 5 star glints (four-point stars with a soft core) at the brightest spots. Glowing red eyes or visor slits carry the menace. A mirror floor (still water with ripple rings) doubles the figure. Variant: glowing-outline line art, white light lines with a prismatic fringe on black, no fill. Slight chromatic fringe on the strongest highlight is optional.
**Texture and material:** Mirror chrome and wet-look metal. A retro anime-print finish adds soft film grain and a deep blue to violet gradient behind the figure.
**Motion language:** Slow camera push or orbit (2 to 4 s) with a light sweep traveling across the chrome (600 to 900 ms), glints that flare and fade (200 to 300 ms). Cuts on the beat for trailers. Nothing bounces. Reduced motion: show the lit still.
**Best for:** Album and single covers, game key art, streetwear graphics, event and club posters, character reveals, tech launches with attitude.
**Avoid when:** The audience needs a friendly, calm, or trustworthy tone, the content is text-heavy, or the brand rules out dark and aggressive imagery.
**Differs from:** product-render shows real products in neutral studio light; chrome-anime turns characters into metal with dramatic light. foil-stamping is a print finish on type and marks; chrome-anime is a full illustration rendering. pop-graphic is flat and loud; chrome-anime is dark and glossy.
**Prompt recipe:** "Anime character rendered as polished liquid chrome, hard specular highlights and mirror reflections, four-point star glints, cold blue rim light, near-black background, dramatic low angle, sharp linework, single red eye accent."
**Implementation notes:** Fake chrome in SVG or CSS with a hard-stop `linearGradient` (dark steel, silver, white, steel, ice) rather than a smooth one, and add a moving highlight band with `mask` or `background-position` animation. Glints: a four-point star path plus a blurred circle with `mix-blend-mode: screen`. Keep text solid color, never chrome-filled at body size.
