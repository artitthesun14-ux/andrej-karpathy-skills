# Handoff: ai-product-workflow-skills

Updated: 2026-10-14 (after PR #8 merged). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`1ac7392`, `f9cca0a`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex).
- Done this session (2026-10-14): franchise research deck via `/create-presentation`, added to the gallery, PDF sent; PR #8 description updated and PR #8 merged (user request).
- Next milestone: the two follow-ups listed in PR #8 (section 9), as a NEW PR from the restarted branch, only if the user asks.

## 2. Current Status

- CONFIRMED: PR #8 merged into `main` by squash: `a3f3f40` "Gallery redesign and Works tab, new illustration styles, /create-presentation gallery step, version sync (#8)". Merge was clean; the repo has no CI.
- CONFIRMED: work branch restarted from `origin/main` (`a3f3f40`) because PR #8 is merged; old branch tree was identical to `main`. Only this `current.md` differs from `main`.
- CONFIRMED on `a3f3f40`: `library.mjs check` 55 styles, 27 palettes, 6 presets, 0 errors, 0 warnings; `list-skills.sh` 24; `check-plugin-version` OK at 0.1.0.
- CONFIRMED: Gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 10, 25 files, Works tab has 3 works.
- Franchise deck: lives in the gallery at `works/franchise-research-3-brands/` (`index.html`, `cover.jpg`). HTML and PDF were sent to the user. Sources and build scripts were only in the old session scratchpad (expect them gone); read the deck back from the gallery if it must change.

## 3. Completed

Merged in PR #8 (`a3f3f40` on `main`):

- Versioning without changesets: `version` hook syncs `plugin.json` and `marketplace.json`; `check-plugin-version` checks all three.
- Gallery redesign (search, filters, tabs, swatch wall, palette builder with WCAG checks, compare grids, selection tray, Review & apply handoff).
- Works tab (optional `works.json`, documented in `references/library-schema.md`).
- `/create-presentation` "Add to the gallery" step; gallery found by link, then `gallery_url`, then title "Visual Style Library".
- Category `illustration-character`; styles `vintage-rubber-hose`, `chrome-anime`; palettes `inkwell`, `chrome-noir`; generated example images.
- Surface fallback fix; `library.mjs` input validation; Bauhaus and Brutalism aliases; presentation guidance fixes; docs consistency.

This session, outside the repo:

- Deck "3 แฟรนไชส์ 3 คำถาม" (13 slides, Swiss International + Desert Stone): Cafe Amazon, ชายสี่บะหมี่เกี๊ยว, Otteri Wash & Dry; investment model, break-even, training; every figure tagged "ทางการ" or "ภายนอก"; sources slide.
- Original animated SVG product illustrations (slides 1, 4, 6, 8); static under reduced motion.
- Print CSS and a 13-page PDF; `‹ Gallery` link shown only under `/works/<id>/`.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Deck layout gaps, clipped brand name, phone chart overlap, PDF extra page and nav on every page | FIXED (deck only) | Grid row for headline; display size; absolute labels; print rule order | Grid rows per slide type; smaller clamp; static labels on phone; `!important` print rules | Playwright renders, `pdfinfo` 13 pages |
| Gallery publish refused twice | WORKED AROUND | `files` needs the page `file_path`; live version must be viewed | Read the artifact's `index.html`, publish it unchanged plus new files; retry accepted | file list 25 files |
| `desert-stone` palette note wrong | OPEN | Note says Rust labels on Bone or Basalt; Rust on Basalt is 2.28:1 | Not fixed; listed as PR #8 follow-up | `library.mjs contrast "#A0462A" "#2E2B28"` |
| Merged-PR branch reuse | HANDLED | PR #8 merged; new work must not stack on merged history | Branch reset to `origin/main` before writing this file | `git status -sb` |

## 5. Attempts That Failed or Were Rejected

- Not done on purpose: brand photos or logos in the deck (rights unknown); original drawings instead.
- Rejected by the user earlier: auto-calling `/visual-production` or `/visual-style` from `/create-presentation`; moving rules into shared references. User images stay out of the repo.
- Environment notes: Playwright `playwright@1.56.1` with `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome`; Google Fonts blocked, embed fonts (`@fontsource/inter@5.0.18`, `/root/.fonts/noto-sans-thai-thai-{400,700}-normal.woff2`); check em-dashes with `grep -c $'\u2014' <file>`; force push was denied in an earlier session (see section 11 for the branch reset push).

## 6. Decisions and Constraints

User decisions:
- PR #8 merged (user said so on 2026-10-14).
- Job and test decks stay out of the repo.
- `/create-presentation` adds finished decks to the gallery and finds it by title.
- No auto-calling of user-invoked skills.
- Chrome Anime user image only in the private gallery.

Agent decisions (user may reject):
- Franchise brands: Cafe Amazon, ชายสี่บะหมี่เกี๊ยว, Otteri.
- Rust used only on Bone in the deck.
- Squash merge for PR #8 (matches how `main` was merged before).

Gallery artifact differs from the repo (IMPORTANT):
- `styles.json` `chrome-anime` uses `references/chrome-anime/user-01.webp` (user-supplied, private). Repo uses `example-01.webp`.
- `works.json` and `works/` (3 decks) exist only in the artifact. Never overwrite from the repo.
- To add files: read the artifact's `works.json` and `index.html` first, keep all entries, publish `index.html` unchanged with only new or changed files.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed

- Against `main`: `.ai/handoff/current.md` only.
- Gallery artifact v10: added `works/franchise-research-3-brands/index.html` and `cover.jpg`; updated `works.json`.
- GitHub: PR #8 title and description updated, then merged.

## 8. Validation and Evidence

- `main` at `a3f3f40`: library check, list-skills and plugin version checks pass (section 2).
- `claude plugin validate . --strict`: last passed before the merge; no manifest changed since.
- Deck: Playwright 1440x900 and 390x844, 13 slides, no page errors; PDF 13 pages inspected.
- NOT verified: Works "Open" and "‹ Gallery" links inside the Claude app; any page on a real phone; franchise figures beyond the subagents' cited sources.

## 9. Open Questions and Risks

- OPEN (PR #8 follow-up): keep or drop Bauhaus and Brutalism aliases.
- OPEN (PR #8 follow-up): fix the `desert-stone` note in `skills/productivity/visual-style/library/palettes.json` (Rust labels on Bone only).
- RISK: Chrome Anime user image is third-party art; credit or remove before sharing the gallery link.
- RISK: republishing the gallery from repo files would drop the user image and all Works.
- RISK: franchise prices change; some deck figures are third-party estimates (labelled).
- RISK (older): free-text `--mood`/`--use`; `npx skills add` may not keep sibling folders; old custom palettes in localStorage.

## 10. Next Actions, in priority order

1. Ask the user: fix the `desert-stone` note? keep the Bauhaus/Brutalism aliases?
2. If yes: edit `palettes.json` (and aliases in `styles.json` if dropped), run `library.mjs check`, commit on this branch, push, and open a NEW PR only if the user asks.
3. Ask the user to test in the Claude app: Works "Open" and "‹ Gallery" for the franchise deck.
4. Optional (only if asked): real brand photos in the franchise deck (user supplies them), route D, republish only that work.

## 11. Exact First Step for the Next Session

Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline && git diff --stat origin/main HEAD`. Success check: branch is `main` (`a3f3f40` or later) plus at most the handoff commit; diff shows only `.ai/handoff/current.md`. If the remote branch still holds the old pre-merge history, the reset needs `git push --force-with-lease origin claude/setup-workflow-xd5lho`; if that is denied, tell the user. Then `node skills/productivity/visual-style/scripts/library.mjs check` (0 errors, 55 styles) and `scripts/list-skills.sh | wc -l` (24).

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: PR #8 merge แล้ว (main = a3f3f40) branch claude/setup-workflow-xd5lho เริ่มใหม่จาก main
เช็ก git status, git diff --stat origin/main HEAD, รัน library.mjs check และ list-skills
gallery artifact TEgWtaAsxAdNuhwVjhX1QT (v10) มี works.json 3 งาน และรูป Chrome Anime ของฉันที่ไม่อยู่ใน repo ห้ามเขียนทับ
งานแรก: ถามฉันเรื่องแก้ note ของ palette desert-stone และ aliases Bauhaus/Brutalism ถ้าทำ ให้เปิด PR ใหม่ (ไม่ใช้ PR #8)
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
