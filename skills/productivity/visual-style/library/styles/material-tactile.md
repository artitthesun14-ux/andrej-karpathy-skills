# Material and Tactile

Surface, material, light, shadow, and depth are part of the design, including how the material responds to light.

## letterpress

**Visual DNA:** Type and rules pressed into thick cotton paper: a debossed bite, slight ink spread at the edges, one or two flat inks, and centered classical arrangements.
**Design principles:** Craft and permanence. Fewer words, chosen carefully. The impression in the paper is part of the message.
**Color behavior:** Paper color plus one or two inks (black, navy, burgundy). No gradients.
**Typography:** Classic serif or slab, sometimes wood-type display; small caps; ornaments and rules from the type case.
**Layout:** Centered, symmetric, generous margins.
**Composition:** Stacked lines of differing sizes, separated by rules or ornaments.
**Image treatment:** Line illustrations or engravings, never photos.
**Texture and material:** Cotton paper texture, deboss shadow, ink spread.
**Motion language:** Mostly static. A press-in moment (scale 1.02 to 1.0 with shadow deepening, 300 ms) can introduce a logo.
**Best for:** Stationery, invitations, menus, craft brand websites.
**Avoid when:** The message is digital-native or the content is dense.
**Differs from:** embossed-print raises shapes with no ink; letterpress presses inked type into paper. historical-poster is illustrative and colorful; letterpress is typographic and restrained.
**Prompt recipe:** "Letterpress invitation, thick cotton paper, black ink type debossed into the paper with slight ink spread, centered classic serif and slab lines, simple rules and ornaments."
**Implementation notes:** On screen, simulate deboss with `text-shadow: 0 1px 0 rgba(255,255,255,.6), 0 -1px 0 rgba(0,0,0,.25)` on a paper texture. Keep it subtle; heavy effects look fake.

## embossed-print

**Visual DNA:** Blind emboss: shapes and type raised from the paper with no ink, so light and shadow alone draw them. Includes visible paper texture as part of the surface.
**Design principles:** Discovery by light. Information hierarchy must still be clear, so key text is usually printed while the emboss carries the brand mark or pattern.
**Color behavior:** Monochrome, the paper color itself. Optional one printed ink for essential text.
**Typography:** Serif or grotesk logo embossed; printed text small and clear.
**Layout:** Centered, single focus.
**Composition:** One raised element with ample flat space around it.
**Image treatment:** None; the surface is the image.
**Texture and material:** Heavy paper, soft raking light, subtle shadows.
**Motion language:** Light sweeps across the surface to reveal the relief (2 to 5 s), or the camera tilts to catch the light.
**Best for:** Luxury packaging, book covers, certificates, brand reveal moments.
**Avoid when:** The surface must deliver detailed information or viewers need high contrast (accessibility).
**Differs from:** letterpress presses inked type in; embossed-print raises shapes without ink. sculpted-surface is a 3D digital material; embossed-print imitates paper. tactile-minimalism is the whole system around it: layered stocks, edges, and printed hierarchy.
**Prompt recipe:** "Blind embossed brand mark on heavy grey paper, no ink, soft raking light from the top left revealing the relief, minimal small printed text below."
**Implementation notes:** Never put essential text only in emboss: contrast is near 1:1. Use the palette's text pairs for printed information.

## foil-stamping

**Visual DNA:** A small metallic mark (gold, silver, copper) on dark or deep-colored stock that flashes as the angle changes.
**Design principles:** Precious and scarce. Foil on one element only. The mark is small; the stock does the rest.
**Color behavior:** Deep ground (noir, emerald, burgundy, navy) with a metallic gradient on the mark. Text that must be read is solid, not foil.
**Typography:** Didone or classical serif monogram, or a fine geometric mark.
**Layout:** Centered, single focus.
**Composition:** Small mark, large deep field, perhaps a thin foil frame.
**Image treatment:** None, or a photographed product with real foil.
**Texture and material:** Metallic reflection, slight emboss beneath the foil.
**Motion language:** A light glint travelling across the foil (1 to 2 s), triggered once on entry or by cursor movement.
**Best for:** Luxury packaging, invitations, awards, limited editions.
**Avoid when:** Overuse would cheapen it, or text legibility depends on foil.
**Differs from:** embossed-print uses shadow on paper; foil-stamping uses reflection. luxury-editorial is a layout style; foil-stamping is a surface accent.
**Prompt recipe:** "Bronze gold foil-stamped monogram on deep noir textured paper, metallic gradient with a single glint, thin foil keyline frame, centered."
**Implementation notes:** Simulate foil with a multi-stop `linear-gradient` (dark gold, light gold, dark gold) clipped to text via `background-clip: text`, and animate `background-position` for the glint. Check that flat fallback colors still pass contrast.

## sculpted-surface

**Visual DNA:** Digital clay, plaster, or stone: soft 3D relief with rounded forms rendered under raking light, used as a backdrop or as a logo object.
**Design principles:** Tactile calm. One material, one light setup. Forms are simple and soft.
**Color behavior:** Monochrome or two-tone matte material; color comes from the light (warm or cool).
**Typography:** Clean grotesk placed on flat areas, or the logo itself sculpted.
**Layout:** Full-bleed surface with a quiet region for content.
**Composition:** Flowing relief leading toward the content area.
**Image treatment:** 3D renders with soft global illumination and contact shadows.
**Texture and material:** Matte plaster, clay, stone, subtle noise.
**Motion language:** Slow light rotation or camera drift (5 to 10 s), forms gently inflating or eroding.
**Best for:** Brand films, hero backgrounds, product backdrops, app splash screens.
**Avoid when:** Low-power devices are the main audience and no static fallback exists.
**Differs from:** embossed-print imitates paper; sculpted-surface is volumetric 3D. architectural-minimalism uses planes and hard light; sculpted-surface uses soft curved forms.
**Prompt recipe:** "Sculpted plaster surface, soft rounded relief forms, matte sandstone material, warm raking light, contact shadows, quiet flat area for a grotesk headline."
**Implementation notes:** Pre-render to image or video for the web unless interaction is essential. In Three.js, use `MeshStandardMaterial` with high roughness and one directional light. Provide a static image fallback.

## material-led-packaging

**Visual DNA:** The substrate is the design: kraft, glass, uncoated board, tin, or textile, with minimal print (a small label or stamp) that lets the material show.
**Design principles:** Honesty and sustainability. Print only what is needed. The material's color and texture are the brand color.
**Color behavior:** The natural material color plus one ink (black or a dark brand color).
**Typography:** Small grotesk or monospace for information-like labels; or a single serif wordmark.
**Layout:** Small label areas on a large plain surface; information grouped in a tidy block.
**Composition:** Asymmetric placement of a small label; generous plain material.
**Image treatment:** Product photography that shows texture in raking light.
**Texture and material:** Kraft fiber, glass reflections, uncoated paper.
**Motion language:** Slow camera moves revealing texture; a stamp pressing onto the surface.
**Best for:** Sustainable products, cosmetics, coffee, spirits, food.
**Avoid when:** Shelf visibility among loud competitors is the priority.
**Differs from:** letterpress focuses on type impression; material-led-packaging focuses on the whole substrate. minimal-product-showcase is about presenting products; material-led-packaging is about the package itself.
**Prompt recipe:** "Material-led packaging, plain kraft box with a small black monospace label and stamped logo, natural fiber texture visible in raking light."
**Implementation notes:** For mockups, use real texture photos with clear rights. Keep regulatory text legible (minimum sizes depend on the market).

## tactile-minimalism

**Visual DNA:** Layered matte stocks with visible edges, fine paper grain, one blind deboss or emboss per surface, and a soft raking light from one corner, with small, printed, fully readable type.
**Design principles:** Touch is the luxury, so remove everything that does not change how the surface feels or reads. One relief per surface, one light direction per system. Relief carries brand marks and pattern; information is always printed at readable contrast.
**Color behavior:** Two or three stocks in close tones from one family (for example oat, beige, and walnut board) plus one ink. A colored edge or a second-color stock may replace an accent. No foil or gloss by default.
**Typography:** A text serif or a quiet grotesk at 14 to 18px for printed copy, one display size at 28 to 40px. Debossed type is set larger (24px or more) and heavier than printed type so its shadow edge reads.
**Layout:** Stacked panels offset by 8 to 16px so edges show; one deboss panel or emboss mark per surface with at least 25 percent of the area left flat around it. Asymmetric placement on a 12-column grid.
**Composition:** The light comes from the top left at about 30 to 45 degrees: highlights on top-left edges of raised forms, shadows on the bottom-right; debossed forms reverse this. Keep every relief consistent with that one light.
**Image treatment:** Macro photographs of paper fibers, cotton board, ceramic glaze, or linen, lit with one low side light; product photographed on the same stocks used in print.
**Texture and material:** Cotton and uncoated papers, soft-touch laminate, felt, matte ceramic, unglazed clay. Grain at 3 to 8 percent opacity on screen; shadows short (1 to 3px offset, 2 to 6px blur) because paper relief is shallow.
**Motion language:** The light moves, not the object: a highlight sweep across the relief over 2 to 4 s, or a card lifting 4 to 8px with its shadow lengthening. Reduced motion shows the lit state.
**Best for:** Stationery and brand kits, ceramics and craft studios, skincare and fragrance packaging, invitation suites, websites that sell paper or textile goods.
**Avoid when:** The audience reads mostly on small, low-quality screens, information density is high, or the brand cannot afford real finishing in print (the digital version then promises a feel the product does not have).
**Differs from:** embossed-print is one technique (a single blind emboss); tactile-minimalism is a whole system of layered stocks, edges, light, and printed hierarchy that may include one emboss. quiet-luxury puts texture in photography and keeps graphics flat; tactile-minimalism builds texture into the graphic surfaces. material-led-packaging shows raw honest substrates such as kraft and tin; tactile-minimalism uses refined matte stocks and precise relief.
**Prompt recipe:** "Tactile minimalism brand kit, three layered matte cotton cards in oat, beige, and walnut with visible edges, one blind debossed square panel with a small raised circle mark, soft raking light from the top left, fine paper grain, small printed serif text, no foil, no gloss."
**Implementation notes:** Draw relief with two thin offset copies of the shape (highlight at -1px with white at 50 to 70 percent, shadow at +1px with the text color at 15 to 25 percent), not with heavy box shadows. Bake grain into one small tiled image or an SVG filter on a static layer; do not filter animated layers. Never put essential text only in relief.
