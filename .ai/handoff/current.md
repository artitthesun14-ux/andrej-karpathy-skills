# Handoff: ai-product-workflow-skills

Updated: 2026-10-18. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (`skills/productivity/visual-style/`), and use `/create-presentation` and `/visual-style` to make real works.
- This session: built a Thai presentation "ทำไมกรุงเทพฯ น้ำท่วมง่าย: ผังเมืองกับการไหลของน้ำ" with `/create-presentation style=quiet-luxury palette=chrome-noir`, isometric figures made with the `anatomy` skill. Then, on user request: added a zoom-into-a-street animation, switched the whole deck to a paper-cut style, and added rough hand-cut paper edges.
- Success criteria (from the user's prompt, all met, see section 8):
  - Artifact opens; slides change by keyboard and on-screen buttons; slide number shown.
  - Main animation shows rain, roof, street, pipe, canal, pump station, river, sea; flooding when rain or tide rises.
  - Plan slide toggle gives a visibly different result.
  - Every number has a source on the last slide; no invented numbers.
  - Reduced motion shows a readable still; no horizontal scroll at 360 px.
  - Contrast checks pass.
- Next milestone: none requested. The user may give more visual feedback on the deck.

## 2. Current Status

- CONFIRMED: repo working tree clean before this file; branch in sync with origin at `5bb2c42`. No repo files changed this session except this file (uncommitted; commit only if the user asks).
- CONFIRMED: deck artifact https://claude.ai/artifact/YHGk1ndufSNXVMRtH9fj3G is version 4 (label "Rough paper edges"), private, not shared, 11 slides.
- CONFIRMED: `library.mjs check` gave 79 styles, 34 palettes, 9 presets, 0 errors, 0 warnings at session start.
- CONFIRMED: deck NOT added to the gallery Works tab (rule: only after the user has seen it and agrees). Not published to the anatomy community gallery (needs explicit yes).
- CONFIRMED: `anatomy` skill present at `~/.claude/skills/anatomy` in this container. It is container-only; a new container may not have it.
- UNKNOWN: whether the user is happy with paper-cut v4. Not tested on a real phone or Safari.

## 3. Completed

1. **Research** (subagent, web): figures with sources and years. DDS site returned 503, IGES 403, no recent DGR report found, so many figures come from news quoting agencies (tagged "ข่าว" on the reference slide).
2. **Deck v1** (11 slides now, was 10): cover, terrain section, zoom (added later), water cycle sim, bottlenecks, planning toggle, subsidence, three waters, measures (tunnel), summary, references.
   - One persistent isometric model city (68 depth-sorted items, plinth with ruler and the engraved label "ภาพจำลองเพื่ออธิบาย ไม่ใช่สัดส่วนจริง"), front cut showing culvert, canal, pump station with 3 pumps, floodwall panels, river, sea, deep tunnel (slide 9 only).
   - Each slide eases the SVG viewBox to its camera (`cams` in `build.mjs`).
   - Explanatory steady-state model in the page script `solve()`: pipe capacity 60 mm/hr (the only real number in the model, source [6]), runoff coefficient 0.55 open / 0.92 filled, pump capacity falls with river level. Model values are labelled as assumed on the reference slide.
3. **Zoom slide (slide 3)**, from the user's sketch: camera zooms into the district street on the main model (tau 0.6, ~1.7 s), then crossfades to a separate close-up SVG (`zoom.mjs`). Close-up: 3 buildings with windows, shutters, awnings, AC units, roof tanks, downpipes, lamp, tree, bollards; slanted rain; route roof › downpipe › sidewalk › curb inlet › basin › pipe › drop shaft › deep sewer to the canal; pipe fills and turns red when full; water ponds on the street.
4. **Paper-cut style (v3)**, user chose: whole deck, light paper colours. Cream paper ground with grain, buildings in 4 paper hues (cream, sage, blush, sand, `data-h` on `.pc` groups), blue paper water, white waterlines, red paper for the one bottleneck detail, paper-tab buttons.
5. **Rough edges (v4)**: noise-displaced edges baked into path data at assemble time (`rough.mjs`, `roughSvg`), live water paths roughened in the page with the same function (`ROUGH_SRC`), baked offset shadows (`.pcs` paths) instead of CSS filters.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Slides type cannot host the deck | WORKED AROUND | Slides type: no script in slides, x-embed 16 KB max | Hand-written HTML artifact | type instructions read |
| All slides showed at once in local test | FIXED | `article{display:contents}` beat `hidden`; publish skeleton adds the rule, local test did not | Added `[hidden]{display:none!important}` | screenshot |
| Ground looked hollow (dark v1) | FIXED | Tone ramp too close to card colour | Lifted ramp | z3 screenshots |
| Water looked like glass boxes | FIXED | Stroked water polygons | Fill only plus separate waterline path `wl` | screenshots |
| Floating "sea level" line | FIXED | Line in mid-air over the city | Ghost level plane `msl` drawn under buildings | z2/z6 |
| Buttons on hidden slides acted | FIXED | Click handler not scoped | Ignore buttons outside the current article | s6 test |
| Floating line ends (anatomy `lines.mjs`) | FIXED | Culvert outline legs, ladder rungs, dashed lane line, short grate slots | Closed outlines, edge-to-edge rungs, lane marks as closed shapes, outlined opening walls | `line ends: 0` both drawings |
| Signal Red text 4.35:1 on card (dark v1) | FIXED | Brand red too dark | Derived error colour for text | contrast CLI |
| Kit light theme overrode my tokens | FIXED | `.iso[data-theme="light"]` more specific | Selector `.iso,.iso[data-theme="light"]` | screenshots |
| Floodwall panels got random paper hues | FIXED | Hue on every `.pc` | Hue only on buildings (`items[].b`) | grep count |
| Zoom ran at 6.5 fps with SVG displacement filter | FIXED | Filters re-render on every viewBox frame | Bake roughness into paths, offset shadow paths, no filters | `fps.cjs`: 41.5 zooming, 59.5 close-up (headless Chromium) |
| Deck size grew to 1.66 MB | MITIGATED | Subdivided edges | Step 2.4 to 3.4 units: 1.30 MB | assemble output |
| Thin parts (tide gauge, pump columns) look wobbly | OPEN (cosmetic) | Same noise amplitude on all parts | Offered smaller amplitude for small parts | screenshots |
| Carried over: gallery constraints placeholder English in Thai mode | OPEN | `trAttrs()` skips textarea | Translate textarea attributes | code reading |
| Carried over: Thai search misses mid-text words | OPEN | `textHas` regex | Use `includes` for Thai | earlier Playwright |
| Carried over: `desert-stone` contrast note wrong; issues 4 and 5 | OPEN | | | Guide tab |

## 5. Attempts That Failed or Were Rejected

- SVG `feTurbulence` + `feDisplacementMap` filter on paper groups: looked right but 6.5 fps while zooming. Do not use filters on large groups that animate.
- CSS `drop-shadow` per building: 15.5 fps while zooming. Replaced by baked offset shadow paths.
- First noise frequency 0.55: looked fuzzy, not cut. 0.16 (main) reads as hand-cut.
- Signal-red readout text on dark card: failed contrast (dark version only).
- Figure 1.77 m high tide (2022): dropped, no source URL.
- Design rainfall 80 mm/hr (2026 news): not used, weak source.

## 6. Decisions and Constraints

User decisions:
- Deck style: started quiet-luxury + chrome-noir (gallery command); then user asked for paper-cut, chose "whole deck" and "light paper colours". Paper-cut is not in the Visual Style Library; colours are agent-made, not a library palette.
- Rough paper edges: yes.
- Zoom into one street, as in the user's sketch (rain slanted, pipe goes down, along, down again, then right).
- Earlier, still valid: decks stay out of the repo; works go to the gallery only after the user has seen them; never publish to the anatomy gallery without explicit yes.

Agent decisions (user may reject):
- Hero size (anatomy tiers), not Epic. Steady-state model instead of time integration; levels settle in about 3 s; subsidence play 6 s.
- Slide 3 zoom target: front street of the inland district.
- Reduced motion: no zoom movement, close-up shown at once, no rain motion.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills never call each other.

## 7. Files Changed

- Repo: only `.ai/handoff/current.md` (this file, uncommitted).
- Session scratchpad (ephemeral), folder `flood/`:
  - `build.mjs` (main city, cameras, live data), `zoom.mjs` (close-up), `rough.mjs` (edge roughening, shared with the page), `template.html` (page, CSS tokens, slide text, live script), `assemble.mjs` (writes `deck.html` for publish and `test.html` with doctype).
  - `template.noir.html`: the dark quiet-luxury template before paper-cut.
  - Tests: `t.cjs` (all slides 1440 and 360, errors, h-scroll), `z.cjs` (2x card shots), `zz.cjs` (zoom sequence), `rm.cjs` (reduced motion), `fps.cjs` (frame rate), `s6.cjs` (interactions).
  - Build: `node build.mjs && node zoom.mjs && node assemble.mjs`, then publish `deck.html` to the same artifact.
- If the scratchpad is gone: `Artifact read` YHGk1ndufSNXVMRtH9fj3G gives the full built page (sources are not in it; geometry is baked, so big geometry edits need a rebuild from scratch).

## 8. Validation and Evidence

- Playwright Chromium, all 11 slides at 1440x900 and 360x780: no page errors, no horizontal scroll (latest run after v4).
- Reduced motion: rain path unchanged over time (still frame), story readable.
- anatomy `scripts/lines.mjs` with `CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`: `line ends: 0` on the main city and on the close-up (close-up checked through `testz.html`, which forces the close-up visible).
- Contrast (library CLI): ink on paper 12.47, soft ink 5.44 to 5.99, error text 5.91, success text 5.14, pressed button 13.74.
- Frame rate (headless, software): 41.5 fps zooming, 59.5 fps close-up.
- NOT verified: real phone, Safari/WebKit, a timed 10-minute talk, the published page in a browser.

## 9. Open Questions and Risks

- Does the user want the deck in the gallery Works tab? Not asked yet in a yes/no form.
- Edge roughness amount and thin-part wobble: offered tuning, not answered.
- Paper-cut as a library style: if wanted, add it to the Visual Style Library (style entry, palette, research sources) and run `library.mjs check`.
- Several figures are secondary (news) sources; primary DDS documents were unreachable.
- Scratchpad sources are lost with the container.

## 10. Next Actions, in priority order

1. Wait for the user's verdict on deck v4. For edits: change `template.html` / `build.mjs` / `zoom.mjs` / `rough.mjs`, rebuild, run `t.cjs`, `lines.mjs` on `test.html` and `testz.html`, `fps.cjs`, then publish `deck.html` to the same URL.
2. If the user agrees: add the deck to the gallery (TEgWtaAsxAdNuhwVjhX1QT) as `works/<id>/index.html` with doctype and a `../../` back link, a cover image, and a `works.json` entry; keep all 31 existing files (list files after publish).
3. Carried over: gallery placeholder translation, Thai mid-text search, issues 4 and 5, `desert-stone` note, sources for quiet-luxury, wabi-sabi and bauhaus.

## 11. Exact First Step for the Next Session

Run:

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && ls ~/.claude/skills
```

Success check: `5bb2c42` (or a later handoff commit) on top, clean tree. Then `Artifact read` https://claude.ai/artifact/YHGk1ndufSNXVMRtH9fj3G before any publish to it. If the scratchpad `flood/` folder is gone, say so before promising geometry edits.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุดทำพรีเซนเทชัน "ทำไมกรุงเทพฯ น้ำท่วมง่าย" (artifact YHGk1ndufSNXVMRtH9fj3G เวอร์ชัน 4, 11 สไลด์)
ภาพเมือง isometric ด้วย skill anatomy มีสไลด์ซูมเข้าถนน ตอนนี้เป็นสไตล์ตัดกระดาษสีอ่อน ขอบหยักแบบตัดมือ
ยังไม่ได้ใส่ใน gallery Works และยังไม่ได้ทดสอบบนมือถือจริง
ไฟล์ build อยู่ใน scratchpad เดิม ถ้าหายต้องเริ่มจาก Artifact read
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) ห้ามทำ works ใน gallery หาย ห้าม publish ขึ้น gallery ของ anatomy ถ้าผู้ใช้ไม่ยืนยัน
```
