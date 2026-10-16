# Handoff: ai-product-workflow-skills

Updated: 2026-10-16 (second session that day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (part of the `visual-style` skill, `skills/productivity/visual-style/`).
- This session: the user pasted a 10-phase prompt "Upgrade Visual Style Library: Style Taxonomy, Palette Intelligence & Style Mixing" (audit first, then taxonomy, selective new styles, palette roles and semantic colors, harmony generator, more palettes, style x palette mixing, discovery UX, Design Direction output, verification). Keep existing ids and the `/visual-style` / `/create-presentation` command contract working.
- Definition of done from the prompt: find styles without knowing names, see differences between near styles, pick palettes by mood/use/starting color, generate harmonies, mix style and palette freely, preview before use, save presets, hand off a full design direction. All eight are implemented (section 3); quality on a real phone is unverified.
- Next milestone: none requested. The user has not reviewed the new gallery yet.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `52b5b31` (the upgrade). Working tree clean except this file (uncommitted; commit only if the user asks).
- CONFIRMED: gallery https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 20, 29 files (same paths as v19; `works.json` and all 5 works kept). Library now 79 styles, 34 palettes, 9 presets.
- CONFIRMED: published `index.html` is built from repo `gallery.html` at `52b5b31` (v19 live copy was diffed equal to the previous repo version before publishing).
- CONFIRMED: `node scripts/library.mjs check`: 79 styles, 34 palettes, 9 presets, 0 errors, 0 warnings.
- UNKNOWN: real phone in the Claude app; the live v20 page was not opened after publishing (only local Playwright).

## 3. Completed (commit `52b5b31`, gallery v20)

1. Audit (Phase 1), reported to the user: most requested styles already existed; duplicates or confusion were Bauhaus as an alias of `geometric-composition`, color-systems styles being color structure rather than looks, and "Cinematic" living in `camera-driven-storytelling`. Six requested palettes already existed under other names (now `aliases`).
2. Taxonomy: `styles.json` gains top-level `facets` (look, layout, material, story, color) and `featured` (12 ids); every style has `facet`. `category` stays the primary category.
3. New styles with full 14-field profiles and new preview renderers (`quiet`, `wabi`, `bauhaus`): `quiet-luxury` (editorial-luxury.md), `wabi-sabi` (minimal-contemporary.md), `bauhaus` (design-movements.md). All three `research: "unverified"`, no sources. `geometric-composition` lost the Bauhaus aliases (now "Shape Composition", "Primitive Shapes"), summary and Color behavior made palette-neutral, Differs from names bauhaus. `camera-driven-storytelling` aliases "Cinematic Storytelling", "Cinematic".
4. New palettes: `electric-editorial` (vivid), `jewel-tones` (luxury), `warm-minimalism` (neutral), `high-contrast` (neutral, every text pair 7:1 or more). Each added at the end of several styles' `compatible_palettes`. Palette `aliases`: charcoal-champagne Quiet Luxury, mono-graphite Monochrome Architecture, dark-technical Cyber Industrial, earth-tone Earthy Mediterranean, pastel-soft Soft Digital Pastel, forest-sage-ivory Neo Botanical.
5. `scripts/library.mjs`: OKLCH conversion with gamut clipping, `fixContrast`, derived `ground` (light if background luminance > 0.18), derived semantic colors (hues success 150, warning 70, error 27, info 255, each 4.5:1 on the background), `HARMONIES` table (9 types) and `harmony <hex> [type]` command, `find --facet`, `palettes --ground`, palette text search includes aliases and use cases. `check` adds: facet and featured validation, contrast self-test (#000/#FFF 21, #767676 4.54, #777777 4.48), OKLCH round trip, semantic 4.5:1 per palette.
6. Gallery (`library/gallery.html`):
   - Styles: row All / Featured / five facets with a note; card tags are facet, first use case, first mood.
   - Colors: new mode Color harmony (base picker and HEX, 9 harmonies, hue/sat/light sliders, light/dark ground, Lock per swatch, Regenerate with seeded jitter, Reset, hand edits shown as Edited with the computed value and ΔE plus Use computed, role mapping, calculated checks, Use / Edit in builder / Save palette). Browse gains mood, ground, and use selects, a My palettes family, cards with role labels, ground, a small UI sample with status dots, Fits N styles, aliases, Edit. Builder gains Save palette.
   - Presets: mixer (Shuffle style / colors / both, Lock style / colors, Recommended pairs only, fit note that never blocks, recommended palette chips and fitting style chips, nearest library palette for custom colors, Save as preset) and My presets (Use, Rename inline with Enter/Escape, Duplicate, Update from selection, two-step Delete). Library presets gain Copy to my presets.
   - Handoff: JSON adds `design_direction` (schema `visual-style/design-direction@1`) with ids, color roles plus textMuted and border (own role or derived, listed in `derivedRoles`), semantic colors, profile typography/layout/composition/principles/color behavior/image/texture/motion, constraints, avoid list, contrast checks, compatibility, gallery hash. Full prompt adds muted, border, and status tokens. One-line command unchanged.
   - All selection changes go through `setSel()` (clears preset, saved-palette and saved-preset links). New localStorage keys: `vsl2-facet`, `vsl2-pf`, `vsl2-lock`, `vsl2-fit`, `vsl2-mypalettes`, `vsl2-mypresets`, `vsl2-harmony`; `vsl2-sel` gains `name`, `mine`, `myPal`.
   - Thai strings for every new UI text (TH and TH_RX), help dialog fact "Browse, mix, save" in both languages.
7. Docs: `references/library-schema.md` (facet, featured, palette aliases, derived ground/semantic/muted/border, gallery features), `references/style-direction.md` (CLI flags, harmony, status colors rule, `design_direction`), `SKILL.md` library table, `docs/productivity/visual-style.md` counts (79 / 34).

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Commit chain did not run | FIXED | `pkill -f "http.server 8765"` exits 144 and stopped the `&&` chain before `git commit` | Re-ran commit and push without pkill | `52b5b31` pushed |
| Duplicate TH keys ("Try", "Remove") after first pass | FIXED | Added keys that already existed | Removed the new duplicates; node scan found none | scratchpad key scan |
| Harmony palette name stayed English in Thai tray | FIXED | Name built as "<Harmony> from #HEX" | TH_RX entry translating harmony names | Playwright tray text "สามเส้า (Triadic) จาก #D7261E" |
| Constraints textarea placeholder stays English in Thai mode | OPEN (from earlier) | `trAttrs()` skips elements matching `NO_TR`, which includes `textarea` | Fix: translate textarea attributes, add a muted `::placeholder` color | code reading |
| Thai search misses words mid-text (ฟองอากาศ, ขั้นบันได) | OPEN (from 2026-10-15) | `textHas` regex needs a non-Thai char before the term | Fix: use `includes` for Thai terms | earlier Playwright counts |
| `desert-stone` contrast note wrong (Rust on Basalt 2.28:1) | OPEN (older) | | | Guide tab lists it |
| Selected style disappears silently when filtered out (issue 4) | OPEN | | | code reading |
| "Apply" implies a commit step (issue 5) | OPEN | | suggested "คัดลอกคำสั่ง" | code reading |

## 5. Attempts That Failed or Were Rejected

- `pkill` inside a `&&` chain kills the chain (exit 144); run it alone.
- Republishing an artifact needs `Artifact read` of the URL without `path`, then Read every line of the saved file (about 1795 lines in chunks of 230 or less), even after diffing it.
- `Artifact` publish with only `files` (no `file_path`) is refused; pass the page as `file_path`.
- Python edit scripts with `assert t.count(old) == 1` were reliable for this large file; keep that pattern.
- Not done on purpose: no reference sources for the 3 new styles (rule: never add unverified sources); no new palettes for names that already exist (aliases instead); no change to the one-line gallery command.
- Rejected by user earlier: product-style workflow for research, auto-calling user-invoked skills, Supabase hosting.

## 6. Decisions and Constraints

User decisions:
- Run the full upgrade prompt (this session); audit first, keep ids and references.
- Earlier: decks stay out of the repo; works go to the gallery only after the user has seen them.

Agent decisions (user may reject):
- Bauhaus split into its own style; `geometric-composition` keeps its id and becomes the shape-only arrangement.
- Wabi-Sabi as a separate style rather than an alias of `japanese-minimalism` (different texture and finish).
- Status colors are derived, never stored, so brand palettes cannot redefine them.
- Saved palettes and presets live in browser storage only (no shared storage capability declared).
- User presets hand off as `style=` plus `palette=`/`colors=` (the `preset=` key stays for library presets).
- Mixer lives in the Presets tab; tabs stay Styles, Colors, Presets, Guide, Works.

Gallery publishing rules (IMPORTANT):
- Never publish in a way that drops `works.json` or `works/`; files left out of a publish are kept.
- Build the page from repo `gallery.html` with `sed '1,5d' gallery.html | grep -vx '</head>' | grep -vx '<body>' | head -n -2`, diff against the live copy (`sed 1d saved | head -n -2`) so only your change differs, then publish `index.html` as `file_path` plus changed data files (`styles.json`, `palettes.json`, `styles/*.md`, `contentType: text/markdown`) to the same URL with `root` = repo root.
- Every gallery code change goes into both repo `gallery.html` and the published `index.html`.
- Local test: `cd skills/productivity/visual-style/library && python3 -m http.server 8765`; Playwright from `$(npm root -g)/playwright` with `/opt/pw-browsers`. A 404 for `works.json` locally is expected.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other. After library edits run `node scripts/library.mjs check`.

## 7. Files Changed (this session)

- Commit `52b5b31`: `skills/productivity/visual-style/library/{styles.json, palettes.json, gallery.html}`, `library/styles/{design-movements, editorial-luxury, minimal-contemporary, modernist-swiss}.md`, `scripts/library.mjs`, `references/{library-schema, style-direction}.md`, `SKILL.md`, `docs/productivity/visual-style.md`.
- Gallery artifact v20: `index.html`, `styles.json`, `palettes.json`, the four profile files above.
- `.ai/handoff/current.md` (this file, uncommitted).

## 8. Validation and Evidence

- `check`: 0 errors, 0 warnings (includes the new self-tests).
- CLI spot checks: `palette jewel-tones` prints semantic colors 4.9 to 5.6:1; `harmony 2F6B4F complementary` light/dark text 16.1 and 15.8:1; `find --facet layout` 6 styles; `palettes --ground dark` 5 palettes; `find --text bauhaus` finds `bauhaus`.
- Playwright, 1440x900 English and 390x844 Thai, run twice (second run after the last edit): 79 cards; Featured order starts Quiet Luxury; layout facet 6; searches for bauhaus and quiet luxury rank the new styles first; dark ground filter 5 palettes; triadic harmony; lock kept through Regenerate; edit shows Edited; save and select harmony palette; My palettes lists it; mixer shuffle with style lock keeps the style; save, duplicate, rename, two-step delete, copy library preset; JSON has `design_direction` (25 keys) with typography and semantic colors; command unchanged; no horizontal overflow on Styles, every Colors mode, Presets; no page errors.
- Screenshots reviewed: harmony and presets at 1440, browse and styles at 390, phone harmony full page, new style cards, Jewel Tones card.
- Published files listed after publish: 29 files, works intact.
- NOT verified: live v20 page in a browser, real phone in the Claude app, dialogs (style/palette detail) with the new styles beyond search.

## 9. Open Questions and Risks

- User has not reviewed the upgrade; facet assignments and the Bauhaus split are agent choices.
- New styles have no checked sources ("ยังไม่ตรวจแหล่ง" tag shows on cards).
- Phone: Styles tab now has the facet row above three filter selects; the Colors mode switch scrolls horizontally inside itself at 390px.
- Two gallery copies (repo and published) can drift; two deck copies too (see `f5747e5` handoff for deck details: deck artifact DiiCFL535aE9UQtL9tVpn4 v2, copy at `works/vsl-guide/`).
- Translation is pattern based: new UI strings need `TH` or `TH_RX` entries.
- Artifacts are private until the user shares them.

## 10. Next Actions, in priority order

1. Ask the user to review gallery v20 (Styles facets, Colors > Color harmony, Presets mixer) and collect changes.
2. Fix the constraints placeholder (section 4) in repo and published gallery; verify in Thai at 390x844.
3. Fix Thai search mid-text in `gallery.html` `textHas()` (use `includes` for Thai terms); verify ฟองอากาศ finds y2k and ขั้นบันได finds art-deco.
4. Ask about issue 5 (rename Apply) and issue 4 (notice when the selected style is filtered out).
5. Optional: research sources for quiet-luxury, wabi-sabi, bauhaus and set `research: verified` only with real sources; fix the `desert-stone` note.

## 11. Exact First Step for the Next Session

Run `git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && node skills/productivity/visual-style/scripts/library.mjs check`. Success check: `52b5b31` (or a handoff commit after it) on top and `79 styles, 34 palettes, 9 presets. 0 errors, 0 warnings.` For gallery work, `Artifact read` TEgWtaAsxAdNuhwVjhX1QT and confirm version 20 or later with 29 files.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
อัปเกรดคลัง visual-style เสร็จแล้ว (commit 52b5b31, gallery TEgWtaAsxAdNuhwVjhX1QT v20):
facets 5 ประเภท + Featured, สไตล์ใหม่ quiet-luxury / wabi-sabi / bauhaus, พาเลตต์ใหม่ 4 ชุด,
ฮาร์โมนีสี 9 แบบ, mixer + พรีเซ็ตของฉัน, design_direction ใน JSON, CLI harmony/--facet/--ground
แก้ gallery ต้องแก้ทั้ง repo gallery.html และไฟล์ที่ publish และห้ามทำ works หาย
งานค้าง: รอผู้ใช้รีวิว v20, placeholder ช่องข้อกำหนดไม่แปลไทย, บั๊กค้นหาคำไทยกลางประโยค, ข้อ 4/5, note desert-stone, แหล่งอ้างอิงของ 3 สไตล์ใหม่
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) และรัน library.mjs check หลังแก้คลัง
```
