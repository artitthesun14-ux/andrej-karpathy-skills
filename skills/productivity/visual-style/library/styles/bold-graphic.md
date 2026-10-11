# Bold Graphic and Poster

Very large type, clear contrast between elements, strong shapes, and one focal point visible immediately.

## oversized-type

**Visual DNA:** One word, phrase, or number set so large it runs off the edges or fills the frame. Type is the main image; anything else is small and secondary.
**Design principles:** Say one thing at maximum volume. Scale contrast (huge versus tiny) creates the drama. Cropping the letters is allowed if the word stays recognizable.
**Color behavior:** Two-color contrast: type and ground at high value contrast, or a saturated ground with black type. A third color only for a small label.
**Typography:** Ultra-bold or condensed sans (or a heavy serif) at 20 to 40 percent of the frame height. Tight tracking and leading (0.85 to 0.95). Small supporting text in the same family at 12 to 16 px.
**Layout:** Full-bleed. The big word aligned to one edge and bleeding off another. Supporting text tucked into a corner.
**Composition:** Single focus. The negative spaces inside and around letters are shaped carefully. Contrast of a giant element against small details.
**Image treatment:** Usually none. If used, an image clipped inside the letters or a cut-out overlapping one letter.
**Texture and material:** Flat. Optional grain for print.
**Motion language:** Letters slide or scale into the frame on a strong ease-out (300 to 500 ms), or the word scrolls horizontally like a marquee. One move per slide.
**Best for:** Opening slides, campaign headlines, product launches, single key statistics ("87%"), section breaks.
**Avoid when:** More than one idea must be on screen, or the word is long and would become unreadable when cropped.
**Differs from:** kinetic-typography is about movement over time; oversized-type is a single still composition. contemporary-poster layers several text blocks on a grid; oversized-type has one dominant word.
**Prompt recipe:** "Oversized typography poster, a single word in ultra-condensed black sans filling the frame and bleeding off the right edge, tomato red ground, tiny supporting text in the bottom left corner."
**Implementation notes:** Size with viewport units (`font-size: 28vw`) and `line-height: 0.85`. Wrap in `overflow: hidden`. Provide the full word in accessible text if cropped visually. Check that it does not cause horizontal scroll on mobile.

## contemporary-poster

**Visual DNA:** A Swiss-descended grid that is deliberately broken: text blocks rotated 90 degrees, overlapping layers of type at different sizes, one strong color field, and small dense info text.
**Design principles:** Order and disruption together. A visible system, then one or two violations that create energy. Typography carries the image.
**Color behavior:** One dominant flat color field plus black and white; or a two-color overprint. Color defines zones.
**Typography:** Neo-grotesk or variable sans, many sizes and widths in one family. Vertical and rotated settings. Small info text (dates, venue) set like a table.
**Layout:** Modular grid visible in alignments; some elements cross the grid or rotate out of it.
**Composition:** Layered and asymmetric; type blocks overlap each other or a color field; a clear entry point (largest word) then a reading path.
**Image treatment:** Optional: a cut-out image or abstract shape as one layer among the type.
**Texture and material:** Flat digital, or riso-like overprint.
**Motion language:** Blocks shift along grid lines, rotated text slides in, variable-font axes animate (weight or width) in loops of 2 to 4 s.
**Best for:** Cultural events, festivals, exhibition promotion, talk series, academic programs.
**Avoid when:** The audience is conservative or the message needs very fast reading by everyone.
**Differs from:** swiss-international keeps the grid intact; contemporary-poster breaks it on purpose. experimental-typography distorts letterforms themselves; contemporary-poster keeps letters intact and plays with placement.
**Prompt recipe:** "Contemporary Swiss-influenced event poster, modular grid with one block of type rotated 90 degrees, overlapping text layers in a single neo-grotesk family, one cobalt color field, small tabular info text."
**Implementation notes:** Use `writing-mode: vertical-rl` or rotation for vertical text. Variable fonts allow width and weight changes without loading many files. Make sure date and place are readable at phone size.

## experimental-typography

**Visual DNA:** Letterforms themselves are manipulated: stretched, sliced, overlapping, set on curves, distorted, or built from unusual materials. Reading becomes a deliberate, rewarding act.
**Design principles:** Type as image and texture. Accept slower reading for a stronger impression. Keep at least one plain line (date, name) so the essential information still reads.
**Color behavior:** Often limited (one or two colors) so the form carries the work; or a clashing pair that adds vibration.
**Typography:** Variable fonts pushed to extreme axes, custom lettering, generative distortion, mono for the plain info line.
**Layout:** Freeform; the lettering defines the space.
**Composition:** Dense central mass of distorted type, or type following a path across the frame. Plain information in a quiet corner.
**Image treatment:** Rarely photographic; textures, scans, or generative patterns built from letters.
**Texture and material:** Can be digital glitch, photocopy, ink bleed, or 3D extruded letters.
**Motion language:** Continuous deformation (axes animating, letters melting, waves) in loops. Speed varies with sound or scroll.
**Best for:** Art events, music releases, zines, title sequences, experimental brand moments.
**Avoid when:** Information must be read fast and by everyone (wayfinding, forms, data), or for accessibility-critical content.
**Differs from:** contemporary-poster keeps letters intact; experimental-typography alters them. brutalist-editorial exposes defaults; experimental-typography transforms them.
**Prompt recipe:** "Experimental typography poster, title letters stretched vertically and overlapping, fluoro pink and blue overprint on newsprint, distorted variable font, one plain monospace line with the date."
**Implementation notes:** Animate variable font axes with `font-variation-settings`. For distortion use SVG filters (`feTurbulence` plus `feDisplacementMap`) or canvas. Always include the text content in the DOM for screen readers.

## pop-graphic

**Visual DNA:** Thick black outlines, flat saturated fills, Ben-Day or halftone dots, speech bubbles, starbursts, and comic-panel framing.
**Design principles:** Fun, immediate, and loud. Mass-culture visual language. Outline everything so shapes read at any size.
**Color behavior:** Bright primaries or electric hues with black outlines. Halftone in a second color for shading.
**Typography:** Condensed bold sans or comic-style display, often in bursts and bubbles, sometimes with outline or drop shadow.
**Layout:** Panel grid with gutters, or one big burst composition.
**Composition:** Dynamic angles, close-ups, action lines radiating from the subject.
**Image treatment:** Photos converted to halftone or posterized; illustrations with clean outlines.
**Texture and material:** Halftone dots, print misregistration.
**Motion language:** Snappy cuts and pops (scale overshoot 1.0 to 1.15 and back, 150 to 250 ms), bursts that appear with a shake.
**Best for:** Youth campaigns, food and drink, events, merchandise, social media.
**Avoid when:** The subject is serious, premium, or sensitive.
**Differs from:** oversized-type relies on type scale alone; pop-graphic relies on outlines, dots, and comic devices. color-blocking is clean and architectural; pop-graphic is noisy and playful.
**Prompt recipe:** "Pop graphic design, thick black outlines, flat magenta, cyan and lemon fills, halftone dot shading, starburst with condensed bold text, comic panel layout."
**Implementation notes:** Halftone: CSS `radial-gradient` repeat pattern or SVG pattern. Use `paint-order: stroke` for outlined text. Respect reduced motion for shaking effects.

## collage-editorial

**Visual DNA:** Cut-out photographs, torn paper edges, tape, scraps of type in different fonts, and fragments layered to make an argument by juxtaposition.
**Design principles:** Meaning comes from unexpected combinations. Handmade irregularity is intentional, but the hierarchy must still lead to one main idea.
**Color behavior:** Mixed from sources, unified by one or two dominant tones or a duotone treatment on photos.
**Typography:** Mixed: a serif headline, ransom-note fragments, typewriter captions. Keep body text in one consistent readable face.
**Layout:** Layered and freeform, though often anchored by an underlying grid for text.
**Composition:** Overlapping fragments around a focal image; scale contrasts (a giant hand, a tiny building).
**Image treatment:** Cut-outs with hard or torn edges, duotone or black and white, visible shadows to suggest paper layers.
**Texture and material:** Paper, tape, grain, scan artifacts.
**Motion language:** Stop-motion feel (8 to 12 fps steps), pieces sliding in like being placed by hand, subtle parallax between paper layers.
**Best for:** Opinion features, culture campaigns, zines, brand manifestos, music content.
**Avoid when:** Clean information display is needed, or rights to the source images are unclear.
**Differs from:** art-direction-editorial uses one clean concept; collage-editorial uses many fragments. pop-graphic is outlined and flat; collage-editorial is photographic and layered.
**Prompt recipe:** "Collage editorial illustration, black and white photo cut-outs with torn paper edges, tape strips, duotone in fluoro pink and blue, mixed serif and typewriter type fragments, layered with soft paper shadows."
**Implementation notes:** Use only images with clear rights; prefer the user's own or licensed sources. Create torn edges with SVG masks. Keep important text outside the collage layer so it stays accessible.
