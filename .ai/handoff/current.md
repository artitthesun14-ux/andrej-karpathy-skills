# Handoff: ai-product-workflow-skills

Updated: 2026-10-16. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills) and the private Visual Style Library gallery artifact; make presentations with `/create-presentation` and restyle them with `/visual-style`.
- This session: (1) card size switch in the gallery, (2) a Thai deck that teaches the gallery, with animated phone demos, (3) restyle that deck in place to a new style, (4) add it to the gallery Works tab.
- Next milestone: none requested. The user's last message ("เพิ่ม") was ambiguous; it was asked which of three options they meant, no answer yet (section 9).

## 2. Current Status

- CONFIRMED: branch in sync with origin at `f3ca16e`. Working tree clean except this file (uncommitted; commit only if the user asks).
- CONFIRMED: gallery https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 19, 29 files: 76 styles, 30 palettes, 9 presets, Guide tab, Works tab with 5 works (new `vsl-guide` first).
- CONFIRMED: repo `library/gallery.html` equals the gallery `index.html` except the publish wrapper (diff checked before the v18 publish; v19 republished the same index.html).
- CONFIRMED: deck artifact https://claude.ai/artifact/DiiCFL535aE9UQtL9tVpn4 at version 2 (japanese-minimalism + primary-bold). The gallery copy `works/vsl-guide/index.html` is the same deck with doctype wrapper and the last-slide link changed to `../../`.
- UNKNOWN: both artifacts on a real phone in the Claude app (only Playwright 390x844); the Works card rendering on the live gallery (file list checked, page not opened).

## 3. Completed

1. Commit `f3ca16e` (repo + gallery v18): card size switch ใหญ่ / กลาง / เล็ก next to the style count. Medium = 2 per row on phones, small = 3; compact cards show thumb, name, select button; ⤢ button on the thumb opens the detail dialog. Stored in localStorage `vsl2-size`. Styles tab only. `TH` entries added (Card size, Large, Medium, Small, Expand).
2. Deck "Visual Style Library Guide" (11 slides, Thai): opener, 3 things in the library, 4-step flow, search demo, card size demo, select style demo, colors demo (tap only searches), search vs select comparison, apply and copy demo with a Claude Code panel, 4 tips, close. Demos run on a small JS timeline (`data-steps`, `data-loop`), steps clickable, replay button, reduced motion shows final state. Search demo uses the real result: "หรูหราแต่ไม่เยอะ" gives 4 of 76 (Luxury Editorial, Minimal Product Showcase, Embossed Print, Gallery and Art Catalogue), understood as minimal + luxury.
3. v1 style: historical-poster + inkwell (route B of `/create-presentation`).
4. v2 restyle (route C, `/visual-style style=japanese-minimalism palette=primary-bold use=motion`): same content, order, demos, links; new tokens, fonts (Noto Serif Thai, IBM Plex Sans Thai, IBM Plex Mono), hairlines, one primary mark per slide, 1.2 s fades, tap as an ink dot. Example names in demos and the command ticket changed to japanese-minimalism / Vivid Primaries so the self-reference stays true.
5. Gallery v19: `works.json` (new entry first, 4 old kept), `works/vsl-guide/index.html`, `works/vsl-guide/cover.jpg` (1280x800 shot of slide 1).
6. Answered a question about the Review & apply dialog (screenshot): normal behaviour. Command starts with `/visual-style` until "ใช้ทำ" is set to presentation; buttons hidden under the sticky dialog head when scrolled; constraint text is a placeholder.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Constraints placeholder stays English in Thai mode and looks like filled text | OPEN, CONFIRMED by code reading | `trAttrs()` returns early for elements matching `NO_TR`, which includes `textarea`, so its placeholder is never translated; no `::placeholder` color set | Not fixed. Fix: let `trAttrs` handle textarea attributes (skip only text content), add "ตัวอย่าง:" and a muted `::placeholder` color, in both repo and published copies | user screenshot; `gallery.html` `NO_TR` and `trAttrs` |
| Deck text cut off at the right on phones | FIXED | Band with `white-space: nowrap` widened the slide's implicit grid column | `.slide { grid-template-columns: minmax(0,1fr) }`, ellipsis on `.no`, hide `.mark` in portrait | Playwright 390x844 overflow check clean |
| Thai word broken in the closing title ("คัด/ลอก") | FIXED | No nowrap hints | `.nw` spans per word | render |
| Command text overflowed its box in the apply demo | FIXED | second command span absolutely positioned | stack both spans in one grid cell | render |
| Tray dots overlapped the palette name | FIXED | `.slot .v span` also matched the nested `.dots` span | selector `.slot .v > span` | crop render |
| Slide 3 kept all four stations blue at the end (v2) | FIXED, not re-rendered | cumulative `sN` classes | selectors use `[data-step="N"]` | code |
| Thai search misses words mid-text (ฟองอากาศ, ขั้นบันได) | OPEN (from 2026-10-15) | `textHas` regex needs a non-Thai char before the term | Fix: `includes` for Thai terms | earlier Playwright counts |
| `desert-stone` contrast note wrong (Rust on Basalt 2.28:1) | OPEN (from before) | | | `library.mjs contrast` |
| Selected style disappears silently when filtered out (issue 4) | OPEN | | | code reading |
| "Apply" implies a commit step (issue 5) | OPEN | | suggested "คัดลอกคำสั่ง" | code reading |

## 5. Attempts That Failed or Were Rejected

- Assembling the deck with `python3 ... && cat ...` where the python step failed still overwrote `index.html` (the `cat` ran on an earlier unchained line). Recovered from `render/before-jm.html`. Always chain the write after the transform with `&&`.
- `Artifact` publish with only `files` (no `file_path`) is refused; pass the gallery page as `file_path` too.
- Playwright `page.goto(url#hash)` on the same page does not reload; set `location.hash` instead (deck listens to `hashchange`).
- `pkill -f "http.server 8765"` exits 144 but stops the server; harmless.
- Rejected by user earlier: product-style workflow for research, auto-calling user-invoked skills, Supabase hosting.

## 6. Decisions and Constraints

User decisions:
- Deck style changed from historical-poster + inkwell to japanese-minimalism + primary-bold, by restyling the same artifact, not making a new one.
- Add the deck to the gallery Works tab (user replied "พี่เลย", read as "เพิ่มเลย").
- Decks stay out of the repo; works go to the gallery only after the user has seen them.

Agent decisions (user may reject):
- primary-bold is outside japanese-minimalism's `compatible_palettes` and more saturated than its color behavior; kept as chosen, used as small marks only (Red one mark per slide and the tap dot, Blue current step and selection, Yellow only under Black text). Same note for inkwell on historical-poster in v1.
- Phone screens in the deck are drawn in the deck palette, not the app's dark theme; slide 4 says so.
- Size switch only on the Styles tab.

Gallery publishing rules (IMPORTANT):
- Never publish in a way that drops `works.json` or `works/`; files left out of a publish are kept.
- To change the gallery: `Artifact read` the URL, Read every line of the saved HTML (about 1770 lines; read in chunks of about 200 to 230 lines, larger chunks are refused), edit, publish `index.html` as `file_path` plus only changed files to the same URL.
- Publish source for the page: build from repo `gallery.html` with `sed '1,5d' | grep -vx '</head>' | grep -vx '<body>' | head -n -2`, then diff against the live copy (`sed 1d saved | head -n -2`) so only your change differs.
- Every gallery code change goes into both repo `gallery.html` and the published `index.html`.
- A work page under `works/<id>/index.html` is a full HTML page with its own doctype; its back link is `../../`.

Deck sources (scratchpad, will be lost with the container; the live artifacts are the copies to rebuild from):
- `deck-vsl-guide/index.html` (v2) and `deck-vsl-guide/presentation-brief.md` (route C brief, v1 direction kept as history).
- To edit the deck again: `Artifact read` DiiCFL535aE9UQtL9tVpn4, edit, publish to the same URL, then also update `works/vsl-guide/index.html` in the gallery (wrap with doctype, change the last link to `../../`). The two copies can drift.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed (this session)

- Repo: `skills/productivity/visual-style/library/gallery.html` (commit `f3ca16e`); `.ai/handoff/current.md` (this file, uncommitted).
- Gallery artifact: v18 (`index.html`), v19 (`works.json`, `works/vsl-guide/index.html`, `works/vsl-guide/cover.jpg`).
- Deck artifact DiiCFL535aE9UQtL9tVpn4: v1 (historical-poster), v2 (japanese-minimalism).

## 8. Validation and Evidence

- Size switch: Playwright 390x844 Thai mode: medium 2 columns, small 3 columns, ⤢ opens the detail dialog, Select still works, size persists after reload, no horizontal scroll, no page errors.
- Deck v1 and v2: every slide rendered at 1440x900 and 390x844 with reduced motion; overflow check clean, no console errors, fonts loaded. Animated run: slide 4 reaches step 2 with the typed query; slide 9 reaches step 4 with the command typing in the Claude Code panel.
- Gallery v19: `list scope=files` shows 29 files including the 3 new ones; the work page loads locally with back link `../../` and no errors.
- No em-dashes in changed files.
- NOT verified: real phone in the Claude app; live Works card; slide 3 and 8 after the last v2 tweak (code change only).

## 9. Open Questions and Risks

- User's "เพิ่ม" is unanswered. Options offered: (1) size switch on Colors and Presets tabs, (2) fix the constraints placeholder (section 4), (3) add slides to the deck (topic needed).
- Two deck copies (standalone and gallery work) and two gallery copies (repo and published) can drift.
- Both artifacts are private until the user changes Share.
- Translation is pattern based: new UI strings need `TH` or `TH_RX` entries in `gallery.html`.

## 10. Next Actions, in priority order

1. Get the user's answer to "เพิ่ม" and do that option.
2. Fix the constraints placeholder (section 4) in repo and published gallery; verify in Thai mode at 390x844.
3. Fix Thai search: in `gallery.html` `textHas()`, use `text.includes(term)` when the term has Thai characters; verify ฟองอากาศ finds y2k and ขั้นบันได finds art-deco.
4. Ask about issue 5 (rename Apply) and issue 4 (notice when the selected style is filtered out).
5. Ask about the `desert-stone` note and the Bauhaus/Brutalism aliases (agent recommends keep).

## 11. Exact First Step for the Next Session

Run `git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline`. Success check: `f3ca16e` (or a commit of this handoff after it) on top. For gallery work, `Artifact read` TEgWtaAsxAdNuhwVjhX1QT and confirm version 19 or later with 5 works in `works.json`.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
gallery TEgWtaAsxAdNuhwVjhX1QT v19: มีปุ่มขนาดการ์ดแล้ว แท็บผลงานมี 5 งาน (vsl-guide อยู่บนสุด)
พรีเซนคู่มือ DiiCFL535aE9UQtL9tVpn4 v2 สไตล์ japanese-minimalism + primary-bold มีสำเนาใน gallery ที่ works/vsl-guide/
แก้ gallery ต้องแก้ทั้ง repo gallery.html และไฟล์ที่ publish และห้ามทำ works หาย
งานค้าง: ถามผู้ใช้ว่า "เพิ่ม" หมายถึงข้อไหน, placeholder ช่องข้อกำหนดไม่แปลไทย, บั๊กค้นหาคำไทยกลางประโยค, ข้อ 4/5, note desert-stone
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
