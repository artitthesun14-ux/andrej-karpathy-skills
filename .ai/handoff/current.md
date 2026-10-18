# Handoff: ai-product-workflow-skills

Updated: 2026-10-18 (third session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. One self-contained file, because the user asked for one. Earlier history: `sessions/2026-10-11.md`, plus older versions of this file in git (`30457aa` has the Luxury Minimalism session in full; also `e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and the private Visual Style Library gallery artifact (built from `skills/productivity/visual-style/library/`), and use `/create-presentation` and `/visual-style` to make real works.
- This session:
  1. Read the previous handoff and ran its first-step check.
  2. `/create-presentation style=letterpress palette=warm-minimalism`: built a Thai discussion deck from the case "AI chatbot in telecom customer service" (3 employee reactions, 5 discussion questions), with explanatory animation where it helps.
  3. `/anatomy` "upgrade the model in artifact 9f7VDq6n6dJws4i4Vwdg9B" (the "On ทีละชิ้น" shoe page): the agent asked what "upgrade" meant. The user answered "ไม่ทำแล้วๆ" (dropped the task). Nothing was changed.
- Next milestone: the user's feedback on the AI deck, and whether to add it to the gallery Works tab.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `30457aa`. Repo working tree clean before this file was written. This file is uncommitted; commit only if the user asks.
- CONFIRMED: `library.mjs check` printed "81 styles, 38 palettes, 9 presets. 0 errors, 0 warnings."
- CONFIRMED: AI deck published as a private artifact, https://claude.ai/artifact/NjR1vHeghHG9RemNhgkVaQ (v1, title "แชทบอทในศูนย์บริการลูกค้า", icon `slides`).
- CONFIRMED: the deck is NOT in the gallery (TEgWtaAsxAdNuhwVjhX1QT is still v24 with 7 works). The skill says to add a deck only after the user has seen it.
- UNKNOWN: the user's verdict on the deck. They moved to another task without commenting.
- CONFIRMED: shoe artifact 9f7VDq6n6dJws4i4Vwdg9B untouched. Its full HTML was saved by `Artifact read` to `/root/.claude/projects/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/tool-results/artifact-461b5eba-1792214473-723f.html` but was not read in full.

## 3. Completed

1. **AI deck** (route B, "new in a given style"), 11 slides:
   1. opener
   2. scenario: animated question pills go customer → chatbot → "ได้คำตอบทันที" or "ส่งต่อพนักงาน", with a pause button
   3. three reactions (+ ! ?) with branch lines that draw in
   4. five questions as a program card; each row links to its slide
   5. Q1 factors flow: event → individual / job / organization (clickable) → perception → reaction
   6. Q2 Big Five, shown as ranges that grow from the center
   7. Q3a: the same fact read as helper or replacement
   8. Q3b: TAM (Davis 1989) with a sequenced pulse and a replay button
   9. Q4: actions per group, plus Lewin's three stages
   10. Q5: five-layer skills stack
   11. summary and a closing question
   - Navigation: arrow keys, Home and End, swipe, dots, `#s1` to `#s11` deep links. Thai-numeral counter.
   - Reduced motion: static final frames.
2. **Design:** two inks only (Espresso for text, Walnut for fills). Mushroom is used for lines only, never text. Beige debossed plates on oat paper with grain. Fonts: Chonburi for display, Trirong for text (Google Fonts). Single light theme on purpose, as the letterpress style allows.
3. **Brief** saved next to the deck: `presentation-brief.md` (storyline, direction, constraints, gallery_url).

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Thai headlines broke mid-word ("การรับ/รู้") | FIXED | Browser line break | `.nw` nowrap spans per phrase, released under 640 px | re-render |
| Question pills covered the chatbot box and the end labels on slide 2 | FIXED | Pills travelled to the path ends | Widened the viewBox to 1120. Pills move only along part of each path (in 0.25..0.62, out 0.38..0.66) and fade at the ends | shots/d02.png |
| Overlapping pills on slide 2 | FIXED | The static frame's pills stayed in the live list when animation started | `active()` clears the layer when motion is on. New static positions | re-render |
| Slide 10 layers broken on phone | FIXED | `.layer span{grid-column:2}` also caught the `.n` number span | `span:not(.n)` | shots/m10.png |
| Phone horizontal overflow on slide 2 (386 px) | FIXED | Grid item min-width auto | `.stage` uses `minmax(0,1fr)`, `.slide{min-width:0}`, fig scrolls inside itself (svg 760 px) | shot.cjs printed no overflow |
| Slide 2 diagram is small on phone; it scrolls sideways inside its frame | OPEN (minor) | Wide diagram | Could stack vertically on phone | m02.png |
| Carried over: gallery textarea placeholder English in Thai mode; Thai mid-text search; issues 4 and 5; `desert-stone` note; flood deck thin-part wobble | OPEN | see `30457aa` version of this file | | |

## 5. Attempts That Failed or Were Rejected

- The Slides Artifact type (from quickstart) was not used. A hand-written HTML deck was needed for the custom animation and to fit the gallery Works format, as with the flood deck.
- Shoe "upgrade" task: dropped by the user before any work. The options offered were an isometric anatomy redraw (one pair is a Hero, 2 to 4 h; both pairs is an Epic, 6 h or more), a more detailed side view, or newer shoe models. Do not start it unless the user asks again.

## 6. Decisions and Constraints

User decisions:
- Style letterpress, palette warm-minimalism. These are not a recommended pair (letterpress's compatible palettes are ink-paper, burgundy-cream, earth-tone and navy-trust). The pair is kept as chosen. Never change the chosen style.
- Shoe artifact task cancelled.
- Still valid from earlier: decks stay out of the repo; never lose gallery works; never publish to the anatomy gallery without an explicit yes; this handoff is one file.

Agent decisions (the user may reject):
- Content beyond the case text (slides 5 to 10) is general OB theory: Big Five, TAM, Lewin, perception. There are no invented figures. Slide 2's example questions are marked illustrative. Slide 6's ranges are marked approximate.
- The closing question and the 11-slide structure.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; keep the JSON hand formatting.

## 7. Files Changed

- Repo: only this file (uncommitted).
- Scratchpad (ephemeral, `/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/aicx/`):
  - `deck.html`: the published page source (no doctype; the Artifact skeleton adds it)
  - `presentation-brief.md`
  - `shot.cjs`: writes `test.html` with a doctype, renders all slides at 1440x900 and 390x844, prints overflow, loaded fonts and errors
  - `shots/`: d01..d11, m01..m11, contact sheets

## 8. Validation and Evidence

- `NODE_PATH=$(npm root -g) node shot.cjs`: no overflow on any slide at either width, 0 console or page errors, fonts loaded: Chonburi 400, Trirong 400/500/600.
- Contact sheets were read visually after the fixes.
- NOT verified: the published page in a real browser, a phone, Safari, reduced-motion mode, keyboard focus order.

## 9. Open Questions and Risks

- Does the user accept the deck's added theory content and the warm-minimalism pairing?
- Add the deck to the gallery Works tab? Needs the user's yes.
- Scratchpad files are lost when the container is reclaimed. The published artifact is the durable copy (`Artifact read` on NjR1vHeghHG9RemNhgkVaQ recovers the page).

## 10. Next Actions, in priority order

1. Get the user's feedback on the deck. For edits: change `deck.html`, re-run `shot.cjs`, republish the same file path (or with `url` from a new session after `Artifact read`).
2. If the user says yes to the gallery:
   - `Artifact read` TEgWtaAsxAdNuhwVjhX1QT, and read the saved page in full
   - read `works.json` and keep all 7 entries
   - add `works/<id>/index.html` (the deck with a doctype and a `../../` back link), `works/<id>/cover.jpg` (1280x800 of slide 1) and a `works.json` entry with style `letterpress` and palette `warm-minimalism`
   - publish to the same URL with `files`, then list the files (expect 36 or more)
3. Optional: a vertical slide 2 diagram for phones.
4. Carried-over items (section 4).

## 11. Exact First Step for the Next Session

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -2 --oneline
```

Success check: `30457aa` (or a later handoff commit) on top. Then check whether `.../scratchpad/aicx/deck.html` still exists. If it does not, recover the page with `Artifact read` on https://claude.ai/artifact/NjR1vHeghHG9RemNhgkVaQ.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุด: สร้าง deck อภิปราย "แชทบอทในศูนย์บริการลูกค้า" 11 หน้า สไตล์ letterpress + warm-minimalism (artifact NjR1vHeghHG9RemNhgkVaQ v1) ยังไม่ได้ใส่ใน gallery Works (TEgWtaAsxAdNuhwVjhX1QT ยังเป็น v24 มี 7 works)
งานอัพเกรดรองเท้า On (artifact 9f7VDq6n6dJws4i4Vwdg9B) ผู้ใช้ยกเลิกแล้ว อย่าเริ่มเอง
ใส่ deck ใน gallery ได้เมื่อผู้ใช้ตกลงเท่านั้น ห้ามทำ works เดิมหาย ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
