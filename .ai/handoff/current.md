# Handoff: ai-product-workflow-skills

Updated: 2026-10-17 (second session that day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (part of the `visual-style` skill, `skills/productivity/visual-style/`), and use `/create-presentation` and `/visual-style` to make real works from it.
- This session had no repo changes except this file. It fixed the "On ทีละชิ้น" shoe parts page after user feedback from a phone, and installed a third-party skill.
- Next milestone: none requested. The user may still report more layout problems on the On page.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `769098b`. Working tree clean except this file (uncommitted; commit only if the user asks).
- CONFIRMED: `node skills/productivity/visual-style/scripts/library.mjs check` gives 79 styles, 34 palettes, 9 presets, 0 errors, 0 warnings (run at session start).
- CONFIRMED: On page artifact https://claude.ai/artifact/9f7VDq6n6dJws4i4Vwdg9B is now v2 (shared "anyone with the link").
- CONFIRMED: gallery https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT is now v22, 31 files. The user had already added the On page to Works before this session (`works.json` entry `on-shoe-parts`, dated 2026-10-17, plus `works/on-shoe-parts/index.html` and `cover.jpg`). This session replaced only `works/on-shoe-parts/index.html` with the v2 code. `index.html` was republished unchanged (identical to the repo build of `gallery.html`).
- CONFIRMED: third-party skill `anatomy` installed globally with `npx skills add wheresryan22/anatomy -g -a claude-code` into `~/.claude/skills/anatomy`. It lives in the container only, so a new session will not have it.
- UNKNOWN: whether the user finds the new explode proportions right. Not tested on a real iPhone.

## 3. Completed

1. **On page, thinner highlight** (user: "the red line hides the product").
   - Filled parts: outline changed from 4 px red on a 9 px white halo to 2 px red on a 4 px white halo (non-scaling).
   - Laces (stroked parts): before, a 12 px red line on a 22 px white halo covered the whole lace. Now a red rim of about 1.5 screen px each side, then the lace redrawn in its own colour on top. The width is computed from `k = viewBox width / svg clientWidth`, and the highlight is redrawn on resize.
   - Focus (Tab) dashes scaled down the same way.
2. **On page, explode proportions** (user: "the proportions are sometimes odd when exploded").
   - Offsets made even and tighter. Cloudswift 4: laces -235, cage -165, upper -95, helion 0, speedboard 60, cloudtec 120, outsole 180 (was -300, -215, -130, 0, 75, 150, 235). Cloud X Tempo: laces -235, tongue -165, upper -95, heel -95 with `dx: -55`, helion 0, cloudtec 80, outsole 160 (was -300, -215, -130, -55, 0, 110, 200).
   - The heel cup now moves with the upper and slides back (new optional `dx` per part, also applied to labels and the highlight). Its SVG group was moved after the upper so it paints on top; before it was hidden under the upper and showed as a sliver.
   - `svg.style.aspectRatio` is set every frame from the animated viewBox, as a guard against Safari not updating `height: auto` during the animation (HYPOTHESIS for the "sometimes" part; not reproduced, Chromium was fine).
3. A before/after image was sent to the user (`on-before-after.png` in the session scratchpad).
4. Installed and skimmed the `anatomy` skill. Only network action found: `scripts/publish.mjs`, which opens a PR to its community gallery and sends agent and model names. Its docs say to run it only after an explicit yes.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Red highlight covers the laces on a phone | FIXED | Non-scaling 12 px red plus 22 px halo on laces that are about 4 px wide at 390 px | Red rim (lace width + 3k) under the lace redrawn in its own colour; filled parts 2 px on 4 px | v3/v4 screenshots at 390x844 |
| Exploded view looks odd | FIXED (user not yet confirmed) | Uneven gaps (laces 170 above upper, others 75); heel cup hidden under the upper | Even offsets about 60 to 70; heel `dx` and repaint order | v4 screenshots; ratio check svg box = viewBox (1.241 and 1.262) |
| "Sometimes" odd on iPhone | HYPOTHESIS | Safari may not resize an inline SVG with `height: auto` while the viewBox animates | Explicit `aspect-ratio` per frame | Not reproduced; no WebKit in the container |
| Rerunning `assemble.v1.py` overwrote `on-anatomy.html` with the new template but old offsets | FIXED | Backup script still reads `page.tpl.html` | Ran `assemble.py` again; checked `"off": -235` appears twice | grep count |
| Gallery republish needs the page "viewed" | WORKED AROUND | Artifact tool requires reading every line of the live page (2302 lines) | Read it in chunks of at most 300 lines (450 exceeds the 25k token limit); it matched the repo build except one blank line | diff output |
| Carried over: constraints placeholder English in Thai mode (gallery) | OPEN | `trAttrs()` skips `textarea` via `NO_TR` | Translate textarea attributes, add a muted `::placeholder` | code reading |
| Carried over: Thai search misses mid-text words (ฟองอากาศ, ขั้นบันได) | OPEN | `textHas` regex needs a non-Thai char before the term | Use `includes` for Thai terms | earlier Playwright |
| Carried over: `desert-stone` contrast note wrong (Rust on Basalt 2.28:1) | OPEN | | | Guide tab |
| Carried over: selected style vanishes silently when filtered out (issue 4); "Apply" wording (issue 5) | OPEN | | suggested "คัดลอกคำสั่ง" | code reading |

## 5. Attempts That Failed or Were Rejected

- Heel cup with `dx: -70`, painted under the upper: still a sliver. Fixed by repainting it above the upper, `dx: -55`.
- Reading 450 lines of the gallery page in one Read call: over the token limit. Use 300 or fewer.

## 6. Decisions and Constraints

User decisions:
- On page colours stay: background `#FFFFFF`, text `#0A0A0A`, accent `#C41E16`; fonts Noto Serif Thai + IBM Plex Sans Thai.
- On page is in the gallery Works tab (done by the user).
- Earlier, still valid: decks stay out of the repo; works go to the gallery only after the user has seen them. Rejected earlier: product-style workflow for research, auto-calling user-invoked skills, Supabase hosting.

Agent decisions (user may reject):
- Highlight = thin red rim, so the part keeps its own colour.
- Even explode spacing; heel cup slides back instead of down.
- Speedboard drawn under the midsole in an assumed grey; no weights; drop 8 mm for both (unchanged).

Gallery publishing rules (IMPORTANT, unchanged):
- Never publish in a way that drops `works.json` or `works/`. After a publish, list files and check the count (31 now).
- Page build: `sed '1,5d' skills/productivity/visual-style/library/gallery.html | grep -vx '</head>' | grep -vx '<body>' | head -n -2`. Diff it against the live copy, then publish it as `file_path` plus only the changed files via `files` to the same URL.
- The gallery copy of a work needs its own doctype version: `<!doctype html>`, `<html lang="th">`, head with charset and viewport, `</head><body>` after `</style>`, and the eyebrow links back with `<a href="../../">← Visual Style Library</a>`.
- Republishing an artifact from another session needs `Artifact read` first, and reading every line of the saved page.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml` and a `workflow-router` row, and never call each other; run `node skills/productivity/visual-style/scripts/library.mjs check` after library edits.

Data rules for product work: primary source = on.com product page data for that SKU; never move text from one model to another; specs only from on.com.

## 7. Files Changed (this session)

- Repo: only `.ai/handoff/current.md` (this file, uncommitted).
- Session scratchpad (ephemeral, lost with the container), folder `on/`:
  - `page.tpl.html` (template, new highlight and `dx` code), `assemble.py` (new offsets), `svg_cxt.txt` (heel group moved after upper);
  - `on-anatomy.html` (published v2 fragment), `test.html` (doctype copy for tests), `gal/works/on-shoe-parts/index.html` (gallery copy);
  - backups `page.tpl.v1.html`, `assemble.v1.py`, `on-anatomy.v1.html`, `svg_cxt.v1.txt`;
  - tests `m.cjs` (390x844 screenshots), `d.cjs` (1280 and 360: scroll width, ratio, errors), `bb.cjs` (part bounding boxes).
- If the scratchpad is gone: `Artifact read` 9f7VDq6n6dJws4i4Vwdg9B (path `index.html`) gives the full v2 page; the template parts are inside it.

## 8. Validation and Evidence

- Playwright Chromium at 390x844 (touch, 2x): no page errors; both models assembled and exploded; laces and upper selected; screenshots looked at.
- At 1280 and 360: no horizontal scroll, svg box ratio equals viewBox ratio, label click opens the panel, 0 errors.
- NOT verified: real iPhone or Safari/WebKit; the PDF and the gallery cover image (both still show the old version); the live artifact pages in a browser.

## 9. Open Questions and Risks

- Does the user still see odd proportions? If yes, ask which model, which tap, and for a screenshot.
- Should the PDF (`on-cloudswift4-cloudxtempo.pdf`, 9 pages) and the gallery cover be rebuilt from v2? Offered, not answered.
- `anatomy` skill: user may want it kept across sessions (install without `-g` and commit, or add to the environment setup script). Offered, not answered. It runs with full agent permissions; never run its publish script without an explicit yes.
- Gallery v20 features (facets, Color harmony, mixer) still not reviewed by the user.
- Internal part boundaries on both shoes remain estimates.

## 10. Next Actions, in priority order

1. Wait for the user's verdict on the On page v2. If more fixes: edit `page.tpl.html` / `assemble.py`, run `python3 assemble.py`, rebuild `test.html` and the gallery copy, run `m.cjs` and `d.cjs`, then publish both (On artifact, and gallery with only `works/on-shoe-parts/index.html` changed).
2. If asked: regenerate the PDF and the gallery cover from v2.
3. Ask the user to review gallery v20 and collect changes.
4. Fix the gallery constraints placeholder and the Thai mid-text search (section 4) in both the repo `gallery.html` and the published copy; verify in Thai at 390x844.
5. Ask about issue 4 and issue 5. Fix the `desert-stone` note. Research sources for quiet-luxury, wabi-sabi and bauhaus.

## 11. Exact First Step for the Next Session

Run:

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && node skills/productivity/visual-style/scripts/library.mjs check
```

Success check: `769098b` (or a handoff commit after it) on top, and `79 styles, 34 palettes, 9 presets. 0 errors, 0 warnings.` Before any On page or gallery work, `Artifact read` the artifact you will publish to (9f7VDq6n6dJws4i4Vwdg9B or TEgWtaAsxAdNuhwVjhX1QT).

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุดแก้หน้า "On ทีละชิ้น" (artifact 9f7VDq6n6dJws4i4Vwdg9B เป็น v2) ให้เส้นไฮไลต์แดงบางลง และระยะแยกชิ้นส่วนเท่ากันขึ้น
อัปเดตฉบับใน gallery TEgWtaAsxAdNuhwVjhX1QT (v22, 31 ไฟล์) แล้ว ยังไม่ได้ทดสอบบน iPhone จริง
งานค้าง: รอผู้ใช้ตอบว่าสัดส่วนโอเคไหม, ทำ PDF และภาพปกใหม่ถ้าผู้ใช้ขอ, รีวิว gallery v20,
placeholder ช่องข้อกำหนดไม่แปลไทย, บั๊กค้นหาคำไทยกลางประโยค, ข้อ 4/5, note desert-stone, แหล่งอ้างอิงของ 3 สไตล์
skill anatomy ติดตั้งไว้แค่ใน container เดิม ถ้าต้องใช้ให้ติดตั้งใหม่
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) และห้ามทำ works ใน gallery หาย
```
