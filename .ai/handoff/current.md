# Handoff: ai-product-workflow-skills

Updated: 2026-10-14. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`, and the previous `current.md` in git at `1ac7392` (session of 2026-10-12/13).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex).
- This session (2026-10-14): read the handoff; run `/create-presentation` for a real research deck (3 Thai franchises: beverage, restaurant, laundromat; questions: investment model, break-even, training) in Swiss International + Desert Stone; add animated product illustrations; add the deck to the gallery; export PDF. ALL REACHED.
- Next milestone (unchanged): PR #8 merged into `main`, only when the user says so.

## 2. Current Status

- CONFIRMED: branch at `1ac7392`, in sync with origin. No repo files changed this session except this `current.md` (NOT committed; the handoff skill does not commit without a request).
- CONFIRMED at session start: 21 files differ from `origin/main`; `library.mjs check` 55 styles, 27 palettes, 6 presets, 0 errors; `list-skills.sh` 24.
- CONFIRMED: PR #8 https://github.com/artitthesun14-ux/andrej-karpathy-skills/pull/8 open, not merged. Description still outdated (says 53 styles, 25 palettes; no Works tab, new styles, example images). Not updated this session.
- CONFIRMED: Gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT is at version 10, 25 files, Works tab now has 3 works.
- Deliverables (outside the repo, by user decision that test or job decks stay out of the repo):
  - Deck in gallery: `works/franchise-research-3-brands/index.html` + `cover.jpg`; entry added first in `works.json` (created 2026-10-14, style `swiss-international`, palette `desert-stone`, 13 slides).
  - HTML and PDF were sent to the user as files. Local copies live only in the old session scratchpad (`.../6ae15be4-.../scratchpad/`: `franchise-deck.html`, `franchise-deck.pdf`, `presentation-brief.md`, `deck/src.html`, `build.js`, `pdf.js`, `shot.js`). Expect them to be gone; the deck can be read back from the gallery.

## 3. Completed

Earlier sessions (commits on the work branch, all in PR #8):

| Commit | Change |
|---|---|
| `9f420fd` | `marketplace.json` version synced and checked; `visual-production` no longer claims presentations; gallery features documented. |
| `e58f577` | Gallery Works tab (`works.json`); `/create-presentation` "Add to the gallery" step; `gallery_url` in the brief. |
| `a6860f3` | `/create-presentation` finds the gallery by title "Visual Style Library" when no link is given. |
| `c24fc47` | Category `illustration-character`; styles `vintage-rubber-hose`, `chrome-anime`; palettes `inkwell`, `chrome-noir`; Thai search words. |
| `7d97da8` | Generated example images for both new styles; gallery shows a style's first reference image. |
| `f46823d` | Portrait example images capped at 70vh. |
| `1ac7392` | Handoff update (the previous `current.md`). |

This session (no commits):

- Research by 3 parallel subagents (web search, every figure with source and official/third-party label). Brands chosen by the agent with user approval ("let me pick Thai franchises"): Cafe Amazon (OR), ชายสี่บะหมี่เกี๊ยว, Otteri Wash & Dry.
- Deck "3 แฟรนไชส์ 3 คำถาม", 13 slides, route B: opener; brief; investment comparison (range bars); per brand investment slide and payback+training slide; payback comparison; training comparison; questions to ask each brand; sources. Tags "ทางการ" (solid) and "ภายนอก" (dashed or hatched) on every figure.
- Key figures used: Cafe Amazon Shop 2,374,000 to 3,674,000 THB ex VAT, royalty 3% + marketing 3%, 6-year contract, mandatory training with theory and practical test, payback about 23 to 36 months (third party). Chaixi about 97,634 THB (agent sum of official items), no published % royalty, payback 5 to 28 months depending on daily sales (third party), training 3 days 2 nights (Thairath 2023). Otteri packages 2,422,380 to 3,701,400 THB (Sanook 2024), official "from 2.9M incl. tax, excl. construction", fee, royalty and contract term not found, payback 2 to 3 years (third party).
- Original SVG product illustrations (iced coffee, noodle bowl with chopsticks, washing machine) on slides 1, 4, 6, 8. Entrance plus slow loops; static final state under reduced motion.
- Print CSS (1600x900 pages) and PDF export via Playwright `page.pdf` (13 pages, selectable text).
- `‹ Gallery` link in the deck nav, shown only when the path matches `/works/<id>/` (same pattern as the earlier decks).

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Slides with a headline had a large empty gap; content sat at the bottom | FIXED | Grid `auto 1fr auto`: the headline took the `1fr` row | `.slide:has(.head)` uses `auto auto 1fr auto`; content placed in row 3 | Playwright re-render |
| "Cafe Amazon" clipped in the brand block | FIXED | Display size too large for a 3-column block | Smaller clamp for `.s-brand .block .big` | render |
| Phone: charts squeezed, labels overlapped; nav covered text; table overflowed page | FIXED | Absolute labels, flex item min-width | Static labels below bars on phone, nav with background, table scrolls inside its own container, swipe ignored there | render 390x844 |
| PDF had 14 pages and showed nav on every page | FIXED | Last slide page break; print rule placed before the base `.nav` rule | `.slide:last-child` no break; `display:none !important` | `pdfinfo` 13 pages, page render |
| Gallery publish refused twice | WORKED AROUND | `files` needs `file_path` of the page; tool requires the live version to be viewed | Read `index.html` from the artifact, publish it unchanged with the 3 new files; second publish accepted | tool output, file list shows 25 files |
| Palette note in repo is wrong | OPEN | `desert-stone` note says "Put Rust labels on Bone or Basalt" but Rust on Basalt is 2.28:1 | Not fixed (not asked). Deck avoids Rust text on Basalt | `library.mjs contrast "#A0462A" "#2E2B28"` |

## 5. Attempts That Failed or Were Rejected

- Not done on purpose: brand photos or logos in the deck (rights unknown). Original drawings used; user can supply real photos.
- Earlier sessions (still valid): user rejected auto-calling `/visual-production` or `/visual-style` from `/create-presentation`, and moving rules into shared references. User images are not stored in the repo.
- Environment notes (still valid): Playwright `playwright@1.56.1` with `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome`; Google Fonts blocked, embed fonts (this session: `@fontsource/inter@5.0.18` latin and `/root/.fonts/noto-sans-thai-thai-{400,700}-normal.woff2`); use `grep -c $'\u2014' <file>` for em-dash checks; force push denied.

## 6. Decisions and Constraints

User decisions:
- Do not merge PR #8 until told. Job and test decks stay out of the repo.
- The franchise deck is real research (not an assignment template); agent picks one Thai franchise per category.
- Style `swiss-international` + palette `desert-stone` as given by the user, although Desert Stone is outside the style's compatible list.
- Add the deck to the gallery and send a PDF (done).

Agent decisions (user may reject):
- Brands: Cafe Amazon, ชายสี่บะหมี่เกี๊ยว, Otteri (most complete public data in each category).
- Rust used only on Bone; never on Sandstone or Basalt.
- Fonts: Inter (Latin, tabular figures) + Noto Sans Thai, both embedded.

Gallery artifact differs from the repo (IMPORTANT):
- `styles.json` entry `chrome-anime` uses `references/chrome-anime/user-01.webp` (user-supplied, private only). Repo uses `example-01.webp`.
- `works.json` and `works/` (3 decks) exist only in the artifact. Never overwrite from the repo.
- To add files: read the artifact's current `works.json`, keep all entries, publish with `file_path` = the artifact's own `index.html` (read it first) plus only the new or changed files.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed

- Repo this session: `.ai/handoff/current.md` only (uncommitted).
- Work branch against `main` (unchanged, 21 files): see `git diff --stat origin/main HEAD`.
- Gallery artifact v10: added `works/franchise-research-3-brands/index.html`, `works/franchise-research-3-brands/cover.jpg`; updated `works.json`.

## 8. Validation and Evidence

- Deck: Playwright at 1440x900 and 390x844, all 13 slides: no page errors; no horizontal overflow (except the slide 11 table, which scrolls inside its container on phone by design); 4 embedded fonts loaded; animation final states and reduced motion checked by screenshot.
- PDF: 13 pages, 1200x675 pt, pages rendered and inspected.
- Gallery: file listing after publish shows 25 files including the 2 earlier works and `user-01.webp`.
- NOT verified: Works "Open" and "‹ Gallery" links inside the Claude app (open since 2026-10-12); the deck on a real phone; the research figures were not re-checked by a second pass beyond the subagents' sources.

## 9. Open Questions and Risks

- OPEN: when to merge PR #8 (user).
- OPEN: keep or drop Bauhaus and Brutalism aliases (asked since 2026-10-11).
- OPEN: fix the `desert-stone` palette note (Rust on Basalt fails) in PR #8? Asked this session, no answer.
- RISK: franchise prices change; the deck says so. Some figures are third-party estimates (labelled).
- RISK: Chrome Anime user image is third-party art; credit or remove before sharing the gallery link.
- RISK: republishing the gallery from repo files would drop the user image and all Works.
- RISK (older): free-text `--mood`/`--use`; `npx skills add` may not keep sibling folders; old custom palettes in localStorage.

## 10. Next Actions, in priority order

1. Update PR #8 description: 55 styles, 11 categories, 27 palettes; Works tab; `/create-presentation` gallery step and title lookup; new styles and generated example images.
2. Ask the user: merge PR #8? keep Bauhaus/Brutalism aliases? fix the `desert-stone` note? commit this `current.md`?
3. If the user agrees to the palette fix: in `skills/productivity/visual-style/library/palettes.json`, change the `desert-stone` note to put Rust labels on Bone only; run `library.mjs check`.
4. Ask the user to test in the Claude app: Works "Open" and "‹ Gallery" for the franchise deck.
5. Optional (only if asked): real brand photos in the franchise deck (user supplies them); changes to the deck go through route D and a gallery republish of that work only.

## 11. Exact First Step for the Next Session

Do NOT reset the branch to `main`. Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git diff --stat origin/main HEAD`. Success check: branch at `1ac7392` or later, 21 files differ (22 if this handoff was committed). Then `node skills/productivity/visual-style/scripts/library.mjs check` (0 errors, 55 styles) and `scripts/list-skills.sh | wc -l` (24). Before any gallery publish, read the artifact's `works.json` and `index.html` with the Artifact tool and preserve section 6.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: branch claude/setup-workflow-xd5lho (PR #8 ยังเปิดอยู่ ห้าม merge จนกว่าฉันสั่ง)
ห้าม reset branch ไป main. เช็ก git diff --stat origin/main HEAD, รัน library.mjs check และ list-skills.
gallery artifact TEgWtaAsxAdNuhwVjhX1QT (v10) มี works.json 3 งาน และรูป Chrome Anime ของฉันที่ไม่อยู่ใน repo ห้ามเขียนทับ
งานแรก: อัปเดตคำอธิบาย PR #8 แล้วถามฉันเรื่อง merge, aliases Bauhaus/Brutalism และการแก้ note ของ palette desert-stone
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
