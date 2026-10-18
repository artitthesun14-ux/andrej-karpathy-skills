# Handoff: ai-product-workflow-skills

Updated: 2026-10-18 (second session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (built from `skills/productivity/visual-style/library/`), and use `/create-presentation` and `/visual-style` to make real works.
- This session did two tasks:
  1. Added the Bangkok flood deck ("ทำไมกรุงเทพฯ น้ำท่วมง่าย", artifact YHGk1ndufSNXVMRtH9fj3G, v4) to the gallery Works tab.
  2. Built the Luxury Minimalism collection from the user's 8-phase brief (audit, distinct styles, palettes, style x palette pairings, previews, metadata, anti-patterns, validation).
- Brief's Definition of Done (status in section 8): styles tell apart by preview alone; differ by principle, not color or font; palettes beyond black, gold, beige; free style x palette mixing; old data and workflows still work.
- Next milestone: none requested. Waiting for the user's feedback on the luxury collection.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `9f4d287` ("Add Luxury Minimalism family to the visual style library"). Working tree clean except this file (uncommitted; commit only if the user asks).
- CONFIRMED: gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT is version 24 (label "Luxury Minimalism collection"), 33 files, private. Version 23 added the flood deck.
- CONFIRMED: `node scripts/library.mjs check` (run from `skills/productivity/visual-style/`): 81 styles, 38 palettes, 9 presets, 0 errors, 0 warnings.
- CONFIRMED: Works tab lists 7 works, newest first (flood deck first).
- UNKNOWN: the user's verdict on the luxury collection and on the flood deck in the gallery. Not tested on a real phone or Safari, and the published pages were not opened in a real browser.

## 3. Completed

1. **Flood deck in Works (v23):** `works/bangkok-flood-urban-water/index.html` is `flood/deck.html` byte-for-byte, plus a doctype and a "← Visual Style Library" link (`../../`) in the header bar. Added a 1280x800 `cover.jpg` and a `works.json` entry: style `quiet-luxury` with `custom` paper colours, because the library has no paper-cut style.
2. **Audit (Phase 1).** Results:
   - Existing, no change: luxury-editorial, contemporary-editorial, minimal-product-showcase, embossed-print, foil-stamping, material-led-packaging, japanese-minimalism.
   - Improve (IDs kept, the brief's names added as aliases): quiet-luxury ("Modern Quiet Luxury"), architectural-minimalism ("Architectural Luxury"), premium-product-campaign ("Sculptural Product Luxury").
   - Add: tactile-minimalism, heritage-luxury.
3. **Style changes:**
   - quiet-luxury: exactly 3 type levels (headline at least 1.6x body), alignment to 2 or 3 vertical lines, minimum type sizes. Palettes now start with metal-free ones: warm-minimalism, oxblood-cream, dusty-rose-cocoa, mono-graphite, charcoal-champagne (last).
   - architectural-minimalism: proportion ratio, stone and depth rules, new preview renderer `arch`.
   - premium-product-campaign: key light, rim light, reflection, macro inset. New renderer `sculptural` (it used to share `product` with product-render). Default preview palette is now `midnight-pearl`, not noir-gold.
   - New `tactile-minimalism` (category material-tactile) and `heritage-luxury` (editorial-luxury): full 14-field profiles with Differs from notes, renderers `tactile` and `heritage`.
   - related_styles and Differs from updated on embossed-print, neoclassical-editorial, luxury-editorial, foil-stamping.
4. **Palettes:** added oxblood-cream (warm), midnight-pearl (cool, dark), charcoal-silver (dark; the silver is a flat grey), dusty-rose-cocoa (muted colour). None uses gold. Aliases for the brief's other sets that already exist: warm-minimalism "Warm Ivory and Espresso", mono-graphite "Stone and Graphite", emerald-brass "Deep Forest and Brass". Olive + Sand not added (earth-tone covers it).
5. **Pairings (Phase 4):** `presets.json` has a new `pairings` list (6 style and palette pairs from the brief), with a `pairings_note`. `library.mjs check` validates them (unknown id, missing note, duplicate). The gallery mixer shows them under "Pairings to try"; the active pair's note shows underneath.
6. **Gallery (`library/gallery.html`):**
   - 4 new renderers in `R` (comment: "luxury minimalism family").
   - Pairing chips, plus the `ds.pairing` click handler.
   - New Guide section "หรูแบบมินิมอล" (`LUX_FAMILY`, `LUX_AVOID` with the 8 anti-patterns).
   - Thai search words: มรดก, เก่าแก่, โมโนแกรม, สัมผัส, พื้นผิว, สถาปัตย, ประติมากรรม.
   - TH string "Pairings to try".
7. **Docs:** `docs/productivity/visual-style.md` counts are now 81 styles and 38 palettes. `references/library-schema.md` documents `pairings`.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Built gallery work file was twice the expected size | FIXED | `find('</style>', i+1)` returned -1 (deck has one style block), so the slice duplicated content | Replaced the single `</style>` | Rebuilt file is 1,308,488 bytes |
| Publish with only `files` refused | WORKED AROUND | Publish needs `file_path`; the page counts as viewed only after reading all 2302 lines of the saved page | Read the whole page in 7 chunks, then published | v23 |
| Black triangle on the tactile preview | FIXED | Edge highlight `<path>` had no `fill="none"` | Added `fill="none"` | after.png, matrix.png |
| "MACRO · BRUSHED" label clipped at the right edge | FIXED | Text started at x=236 | Centered at x=262 | matrix.png |
| Muted text invisible on palettes with no muted role (emerald-brass) | FIXED | `roles().mut` falls back to the background | New renderers use `(c.mut === c.bg ? c.fg : c.mut)` | matrix.png |
| Data contradiction: quiet-luxury listed charcoal-champagne but its profile says "avoid metallics" | MITIGATED | Old data; palette alias "Quiet Luxury" | Kept the palette and alias (references preserved), moved it last, profile says Champagne is a flat tone only | styles.json, editorial-luxury.md |
| Carried over: gallery constraints placeholder stays English in Thai mode | OPEN | `trAttrs()` skips textarea (`NO_TR` includes textarea) | Translate textarea attributes | code reading |
| Carried over: Thai search misses mid-text words | OPEN | `textHas` regex | Use `includes` for Thai | earlier Playwright |
| Carried over: `desert-stone` contrast note wrong; issues 4 and 5 | OPEN | | | Guide tab |
| Carried over (flood deck): thin parts wobble with rough edges | OPEN (cosmetic) | Same noise amplitude on all parts | Offered a smaller amplitude | earlier screenshots |

## 5. Attempts That Failed or Were Rejected

- Adding all 5 luxury styles as new IDs: rejected. Sculptural Product Luxury has the same DNA as premium-product-campaign ("lit like a sculpture"), and Architectural Luxury the same as architectural-minimalism. The brief forbids duplicates under a new name, so they became aliases plus improvements.
- New palettes for Warm Ivory + Espresso, Stone + Mushroom + Graphite, Deep Forest + Brass, Olive + Sand + Walnut: rejected as duplicates of existing palettes (aliases added for the first three).
- Removing charcoal-champagne from quiet-luxury, or removing its "Quiet Luxury" alias: rejected to keep existing references.
- Multiple preview contexts per style (brand, editorial, packaging, cover): not built. The gallery has one renderer per style.

## 6. Decisions and Constraints

User decisions:
- Add the flood deck to Works (user asked). The style label in the gallery was agent-chosen (quiet-luxury with custom colours).
- Luxury brief: audit first, only add what is distinct, keep IDs and references, no false "tests passed".
- Still valid from earlier: decks stay out of the repo (`works.json` exists only in the published gallery); never lose gallery works; never publish to the anatomy gallery without an explicit yes.

Agent decisions (user may reject):
- Which styles are new and which are aliases (section 5).
- premium-product-campaign default preview palette is midnight-pearl.
- Pairings live in `presets.json`, not in a new file.

Repo rules (`.claude/CLAUDE.md`): no em-dashes (scan was 0); keep JSON hand formatting (edits were text inserts, not `json.dump`).

## 7. Files Changed

- Commit `9f4d287` (pushed):
  - `skills/productivity/visual-style/library/`: `styles.json`, `palettes.json`, `presets.json`, `gallery.html`, `styles/editorial-luxury.md`, `styles/material-tactile.md`, `styles/minimal-contemporary.md`, `styles/neoclassical-art.md`
  - `skills/productivity/visual-style/scripts/library.mjs` (pairings check)
  - `skills/productivity/visual-style/references/library-schema.md`
  - `docs/productivity/visual-style.md`
- Uncommitted: this file.
- Published gallery = repo `gallery.html` as `index.html`, plus the JSON and profile files. The live page differs from the repo only by the publish skeleton (checked with diff).
- Scratchpad (ephemeral, `b09ba2f5-.../scratchpad/`):
  - `lux/`: test scripts `cards.cjs`, `matrix.cjs`, `flows.cjs`, the `pub/` staging folder, screenshots.
  - `galwork/`: flood work files.
  - `flood/`: deck sources (see the git history of this file for details).

## 8. Validation and Evidence

- `library.mjs check`: 0 errors, 0 warnings. A deliberately bad pairing id was reported as an error, then reverted.
- Playwright Chromium at 1440 and 390 px, served over HTTP:
  - 81 cards. Search finds the new styles and aliases in English and Thai.
  - All 6 pairings set both style and palette.
  - Palette-only shuffle keeps the style; style-only shuffle keeps the palette. Save as preset works.
  - The handoff command reads `/visual-style style=quiet-luxury palette=oxblood-cream`; the JSON loads the profile and all contrast checks pass.
  - Dialogs of the new styles show all 14 fields. Guide section renders. No horizontal scroll. No page errors (the only 404 was `works.json`, which is not in the repo).
- Style x palette matrix: 5 styles x 6 palettes, visually checked. Each style keeps its composition on light, dark and coloured grounds.
- Works tab with the v24 data: 7 works, no errors.
- Brief DoD: preview distinctness, palette range and free mixing were confirmed in the tests above; whether styles are distinguishable "by preview alone" was judged by the agent only.
- NOT verified: published pages in a real browser, a real phone, Safari/WebKit.

## 9. Open Questions and Risks

- Does the user accept aliases (instead of new IDs) for Modern Quiet Luxury, Architectural Luxury and Sculptural Product Luxury?
- `quiet-luxury` keeps `research: unverified`; the new styles have no `reference_sources` and no reference images.
- Should the flood deck's Works style be a real paper-cut style? That would mean adding one to the library.
- Visual-style docs page and `SKILL.md` do not mention the luxury family by name (only the counts were updated).

## 10. Next Actions, in priority order

1. Get the user's feedback on v24. For edits: change the repo files, run `node scripts/library.mjs check`, serve `library/` and run the scratchpad `lux/flows.cjs` and `lux/matrix.cjs` (port 8771), then stage to `lux/pub/` and publish to the same URL with `files` (list files after, expect 33 or more).
2. Optional extras the brief allowed: multi-context previews; reference sources and images for the new styles.
3. Carried over: gallery textarea placeholder translation, Thai mid-text search, issues 4 and 5, the `desert-stone` note, sources for quiet-luxury, wabi-sabi and bauhaus; flood deck thin-part wobble.

## 11. Exact First Step for the Next Session

Run:

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && (cd skills/productivity/visual-style && node scripts/library.mjs check | tail -1)
```

Success check: `9f4d287` (or a later handoff commit) on top, and check prints "81 styles, 38 palettes, 9 presets. 0 errors, 0 warnings." Before any publish to TEgWtaAsxAdNuhwVjhX1QT, do `Artifact read` on it; to publish the page, the saved page file must be read in full (in chunks).

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุด: ใส่ deck น้ำท่วมกรุงเทพฯ ใน Works ของ gallery แล้ว และเพิ่มกลุ่ม Luxury Minimalism (commit 9f4d287, gallery artifact TEgWtaAsxAdNuhwVjhX1QT เวอร์ชัน 24)
เพิ่ม tactile-minimalism, heritage-luxury และ 4 palettes ใหม่ ส่วน Modern Quiet / Architectural / Sculptural Product Luxury เป็น alias ของสไตล์เดิมที่ปรับปรุงแล้ว
แหล่งจริงคือ skills/productivity/visual-style/library/ ต้องรัน library.mjs check ก่อน publish
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) ห้ามทำ works ใน gallery หาย ห้าม publish ขึ้น gallery ของ anatomy ถ้าผู้ใช้ไม่ยืนยัน
```
