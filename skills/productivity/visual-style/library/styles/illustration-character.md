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

