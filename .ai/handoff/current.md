# Handoff: ai-product-workflow-skills

Updated: 2026-10-17. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (part of the `visual-style` skill, `skills/productivity/visual-style/`), and use `/create-presentation` and `/visual-style` to make real works from it.
- This session (2026-10-16/17) had no repo changes. It produced three works, outside the repo:
  1. A New Balance ABZORB 2010 deck (quiet-luxury + desert-stone). The user had it deleted.
  2. A `/create-prompt` explainer deck with animation (quiet-luxury + earth-tone). The user had it deleted.
  3. An On shoe parts explorer (quiet-luxury + swiss-signal, deeper accent). This one is kept as an artifact, with a PDF version.
- Next milestone: none requested.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `a2652bd`. Working tree clean except this file (uncommitted; commit only if the user asks).
- CONFIRMED: `node skills/productivity/visual-style/scripts/library.mjs check` gives 79 styles, 34 palettes, 9 presets, 0 errors, 0 warnings (run at session start).
- CONFIRMED: gallery https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT unchanged this session (v20, 29 files). No new works were added to it.
- CONFIRMED: live artifact https://claude.ai/artifact/9f7VDq6n6dJws4i4Vwdg9B ("On ทีละชิ้น", v1). The PDF was sent to the user as `on-cloudswift4-cloudxtempo.pdf`.
- CONFIRMED deleted at user request: artifacts Mv12Jb5AjVGFi9VeNFUT2A (NB 2010) and PuZCw8CrExZhc752BnHAyf (/create-prompt deck), plus their local files.
- UNKNOWN: whether the user wants the On page added to the gallery's Works tab. Not asked yet; the user has seen the page.

## 3. Completed

1. **NB ABZORB 2010 deck (deleted).** 9 Thai slides. Facts from the New Balance press release (May 7 2025, US$160, ABZORB 1993/998, SBS 2006/992) and sneaker media. Followed by a delete of the artifact and the local files.
2. **/create-prompt deck (deleted).** 10 slides with a step animation engine:
   - each slide plays at most 8 s;
   - "ถัดไป" skips to the final frame; there is a "เล่นซ้ำ" button;
   - reduced motion shows the final frame with step numbers;
   - 16:9 stage scaled to fit, reflowing below 760 px;
   - print gives 10 pages.
   Source files `skills/productivity/create-prompt/` do not exist in this repo, so it used the user's "facts" section. Published as an artifact after the user asked, then deleted on request.
3. **On parts explorer (kept).**
   - Phase 1 identified the black shoe as **Cloudswift 4 Black | Eclipse** (men's SKU 3MF10130106). Its cage, logo and pods match the on.com photo; the Cloudswift 3 (on.com page now redirects to /shop) was ruled out using a Pro-Direct photo.
   - The white/blue shoe is **Cloud X Tempo Ivory | Storm** (women's SKU 3WG30090980).
   - Part tables: 7 parts per model, all primary (on.com product page data). The user's claims were sorted into confirmed / conflicts / not found.
   - Page colours were asked for (the prompt had `{{...}}` placeholders). The user chose Swiss Signal with a deeper accent `#C41E16`, and Noto Serif Thai with IBM Plex Sans Thai.
   - Drawing: vector SVG traced from on.com transparent PNGs, with colours sampled from the user's photos. Exploded view 1.2 s, numbered labels, panel with Thai function, original quote and source link, "เลือกรุ่นไหนดี" table.
   - PDF: 9 A4 pages showing both models exploded, every part listed, and the comparison table.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| on.com WebFetch returned almost no product text | FIXED | Page is JS-rendered (Nuxt) | `curl` the page with a browser UA, then decode `__NUXT_DATA__` (devalue arrays: `["null",k,v,...]` objects, Apollo cache `__ref` keys). HighlightCards, `usps`, ProductFact and ProductTechnologyItem hold the product-specific text. | `scratchpad/on/parse.py` (session scratchpad, ephemeral) |
| Generic site-wide tech text looked product-specific | AVOIDED | Every on.com page embeds the global glossary (CloudTec, HIIT and similar) | Only cite text reachable from that product's ProductDetails (features, usps, highlightCards, technologies). Cloud X Tempo has `technologies: null`, so its CloudTec row uses only "Training optimized CloudTec® cushioning". | parse output |
| Cloudswift 3 page unavailable | WORKED AROUND | Discontinued, redirects to /shop | Compared against a retailer photo (secondary, labelled) | Pro-Direct 269788 |
| Black shoe's shadow merged with its pods in the alpha mask | FIXED | Shadow is opaque in the PNG | Remove dark connected components (max RGB below 13) that touch rows 655 and below | `cs4_sil.png` |
| Red accent invisible on black or blue shoe parts | FIXED without changing the user's colour | `#C41E16` on `#1E1E20` is 2.81:1 and on blue 1.07:1 | Highlight = white 9 px halo stroke under a 4 px red stroke (`vector-effect: non-scaling-stroke`) | screenshots |
| Exploded view showed holes where the cage and tongue sat | FIXED | Upper mask had the cage and tongue subtracted | Upper = full region; cage and tongue drawn on top | v4 screenshot |
| CloudTec highlight strips floated above the pods | FIXED | Midsole/pod split too low (U+40) | Split at U+30 (heel U+40) | v4 screenshot |
| Cloud X Tempo "outsole" took dark pod-window interiors | FIXED | Darkness mask alone | Outsole = dark pixels within 24 px of the bottom, or at the heel and toe rims; interiors become `ct_inner` inside CloudTec | preview |
| Blue tap flash on SVG parts on phones | FIXED | Default `-webkit-tap-highlight-color` | Set to transparent on `.part` | m screenshot |
| /create-prompt deck: "ถัดไป" disabled on the last slide during animation | FIXED (deck since deleted) | Button disabled whenever `cur == N-1` | Disabled only when on the last slide and not playing | test log |
| /create-prompt deck: badge numbers showed without reduced motion; double list numbers | FIXED (deck since deleted) | `.four span {display:block}` beat `.badge {display:none}`; `ol` kept its default markers | `!important` on the badge display; `list-style: none` | screenshots |
| Python edit with `assert t.count(a)==1` failed on a substring that occurred twice (`CT_HI = pct_color` inside `CS_CT_HI = ...`) | FIXED | Ambiguous anchor | Anchor with a leading newline | build.py |
| Playwright `goto(sameUrl#hash)` did not reload the page | FIXED | Hash-only navigation | `goto('about:blank')` first | test log |
| Carried over: constraints placeholder English in Thai mode (gallery) | OPEN | `trAttrs()` skips `textarea` via `NO_TR` | Translate textarea attributes, add a muted `::placeholder` | code reading |
| Carried over: Thai search misses mid-text words (ฟองอากาศ, ขั้นบันได) | OPEN | `textHas` regex needs a non-Thai char before the term | Use `includes` for Thai terms | earlier Playwright |
| Carried over: `desert-stone` contrast note wrong (Rust on Basalt 2.28:1) | OPEN | | | Guide tab |
| Carried over: selected style vanishes silently when filtered out (issue 4); "Apply" wording (issue 5) | OPEN | | suggested "คัดลอกคำสั่ง" | code reading |

## 5. What worked well (keep doing)

- Facts first, drawing second. Phase 1 tables with exact quotes and URLs before any visuals, and the user's claims checked into three groups.
- Identify the version by comparing images from the official site, side by side. Say which evidence decided it.
- When a prompt says to ask (placeholders, colour choice), ask with one AskUserQuestion that carries a recommended option and the contrast numbers.
- For product drawings: trace silhouettes from official transparent PNGs, align them to the user's photo with edge template matching (`cv2.matchTemplate` on Canny, scale about 0.732), sample colours from the user's photo, and label them `estimated-from-screenshot`.
- Mark every guessed placement in the UI itself (Speedboard position, cupped heel area, layer split) instead of hiding it.
- Test with Playwright before publishing: errors, timing, skip/replay, keyboard Tab order, touch emulation, reduced motion, 360 px horizontal scroll. Then look at screenshots and fix what they show.
- The final report states what was checked, how, and what was not (real phone, live page).

## 6. Mistakes to avoid (lessons)

- Don't trust a contact-sheet thumbnail when judging a render. A 40 dpi PDF preview made a correct page look broken; re-render the page at 90 dpi before deciding.
- Don't subtract overlying parts from a base part when the view can explode. Draw full layers and stack them.
- Don't use the default 5 px median on traced masks. A 9 px median removes speckle at colour boundaries.
- Check part boundaries against the photo's real features (pod highlight strips) before choosing the offset.
- `assert count == 1` edit anchors must be unique; a short anchor can sit inside a longer identifier.
- A deck file meant for a downloadable `.html` needs its own doctype. An artifact version must drop `<!doctype>`, `<html>`, `<head>` and `<body>`; build it as a separate file.
- Don't add a deck or work to the gallery until the user has seen it and agrees. Not done this session; ask first.

## 7. Decisions and Constraints

User decisions:
- Delete the NB deck and the /create-prompt deck (artifacts and local files).
- On page colours: background `#FFFFFF`, text `#0A0A0A`, accent `#C41E16`; fonts Noto Serif Thai + IBM Plex Sans Thai.
- Earlier, still valid: decks stay out of the repo; works go to the gallery only after the user has seen them. Rejected earlier: product-style workflow for research, auto-calling user-invoked skills, Supabase hosting.

Agent decisions (user may reject):
- Highlight technique: white halo plus red line, which keeps the user's colour.
- Speedboard drawn under the midsole in an assumed grey (on.com gives no position).
- No weight values (they differ by gender); drop 8 mm shown for both (on.com).
- Exploded labels show numbers only below 760 px, with a numbered legend under the drawing.

Gallery publishing rules (IMPORTANT, unchanged):
- Never publish in a way that drops `works.json` or `works/`.
- Build the page from repo `gallery.html` with `sed '1,5d' gallery.html | grep -vx '</head>' | grep -vx '<body>' | head -n -2`. Diff it against the live copy, then publish `index.html` as `file_path` plus the changed data files to the same URL with `root` = repo root.
- Every gallery code change goes into both the repo `gallery.html` and the published `index.html`.
- Republishing an artifact from another session needs `Artifact read` first.

Repo rules (`.claude/CLAUDE.md`):
- No em-dashes.
- Follow the Promotion Contract.
- User-invoked skills need `disable-model-invocation: true`, `openai.yaml` and a `workflow-router` row, and never call each other.
- After library edits run `node scripts/library.mjs check`.

Data rules learned for product work:
- Primary source = the on.com product page data for that SKU.
- Never move text from one model to another.
- Specs only from on.com.

## 8. Files Changed (this session)

- Repo: only `.ai/handoff/current.md` (this file, uncommitted).
- Outside the repo, in the session scratchpad (ephemeral): `on/` holds `gen.py`, `build.py`, `assemble.py`, `page.tpl.html`, `on-anatomy.html` (the published page), `on-cloudswift4-cloudxtempo.pdf`, and test scripts. The scratchpad also holds older files from earlier sessions that were not touched.

## 9. Validation and Evidence

- On page, Playwright: no console errors at desktop or mobile; explode settles in under 1.5 s (DUR 1200 ms); clicking a part works assembled and exploded; label click works; Tab order is laces → outsole and Enter opens the panel; arrow keys switch tabs; touch tap works with `hasTouch`; reduced motion jumps immediately; no horizontal scroll at 360 px on either model, assembled or exploded.
- Drawings compared side by side with on.com and the user's photos (not a translucent overlay).
- NOT verified: the live artifact page in a browser; a real phone; real finger swipes; the PDF pages other than page 2 at full resolution.
- `quiet-luxury` still has `research: unverified`.

## 10. Open Questions and Risks

- Gallery Works: add the On page as a work? The user has seen it; ask before adding.
- On page: the internal part boundaries on the black shoe and the Cloud X Tempo heel-cup area are estimates.
- Gallery v20 still not reviewed by the user (facets, Color harmony, mixer).
- Artifacts are private until the user shares them.

## 11. Next Actions, in priority order

1. Ask whether to add the On page (9f7VDq6n6dJws4i4Vwdg9B) to the gallery Works tab. If yes, follow `create-presentation` > Add to the gallery: read `works.json` first and keep every entry. The page needs its own doctype version under `works/<id>/index.html`.
2. Ask the user to review gallery v20 and collect changes.
3. Fix the gallery constraints placeholder and the Thai mid-text search (section 4). Apply both to the repo `gallery.html` and the published copy, and verify in Thai at 390x844.
4. Ask about issue 4 and issue 5. Fix the `desert-stone` note. Research sources for quiet-luxury, wabi-sabi and bauhaus.

## 12. Exact First Step for the Next Session

Run:

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && node skills/productivity/visual-style/scripts/library.mjs check
```

Success check: `a2652bd` (or a handoff commit after it) on top, and `79 styles, 34 palettes, 9 presets. 0 errors, 0 warnings.` For gallery work, `Artifact read` TEgWtaAsxAdNuhwVjhX1QT first. The On page source lived in the old scratchpad; if it is gone, `Artifact read` 9f7VDq6n6dJws4i4Vwdg9B to get it back.

## 13. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุดไม่ได้แก้ repo มีงาน 3 ชิ้นนอก repo: deck NB 2010 และ deck /create-prompt (ผู้ใช้สั่งลบแล้ว)
และหน้า interactive "On ทีละชิ้น" (artifact 9f7VDq6n6dJws4i4Vwdg9B, Cloudswift 4 Black|Eclipse และ Cloud X Tempo Ivory|Storm, ข้อมูลจาก on.com) ส่ง PDF ไปแล้ว
งานค้าง: ถามว่าจะใส่หน้า On ลง Works ใน gallery TEgWtaAsxAdNuhwVjhX1QT ไหม (ห้ามทำ works หาย), รอรีวิว gallery v20,
placeholder ช่องข้อกำหนดไม่แปลไทย, บั๊กค้นหาคำไทยกลางประโยค, ข้อ 4/5, note desert-stone, แหล่งอ้างอิงของ 3 สไตล์ใหม่
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) และรัน library.mjs check หลังแก้คลัง
```
