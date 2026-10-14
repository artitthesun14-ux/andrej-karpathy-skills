# Handoff: ai-product-workflow-skills

Updated: 2026-10-14 (second session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`8cbe20b`, `1ac7392`, `f9cca0a`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex) and make presentations with `/create-presentation`.
- Done this session: class deck "How to Motivate Employees" from the user's Word outline, added to the gallery, published as its own artifact for sharing.
- Next milestone: none requested. Open repo follow-ups from PR #8 still wait on the user (section 9).

## 2. Current Status

- CONFIRMED: branch = `main` (`a3f3f40`) + `8cbe20b` (previous handoff commit), in sync with origin. No repo files changed this session except this file (not committed).
- CONFIRMED: `library.mjs check` 55 styles, 27 palettes, 6 presets, 0 errors; `list-skills.sh` 24.
- CONFIRMED: Gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 11, 27 files, Works tab has 4 works (new one first).
- CONFIRMED: standalone deck artifact https://claude.ai/artifact/NFagUhWkbnoefD4trdcpCc (version 1, private). User must set Share > "Anyone with the link" to send it.
- REPORTED by user: Works "Open" and "‹ Gallery" links work in the Claude app.

## 3. Completed

Deck "How to Motivate Employees" (Thai, 13 slides, route B):
- Source: user's Word outline (class talk, about 10 minutes). No facts added beyond it.
- Style `luxury-editorial`, palette `primary-bold` (user's choice from the gallery handoff; outside the style's compatible palettes, kept as chosen). Color roles: Off White about 80 percent, Red only on numerals, rules and large type, Blue for labels and diagrams, Yellow only as a ground for Black text.
- Step animations explaining each idea: engaged vs burnout bars (2), SMART letters and arrow to target (4), recognition loop with travelling dot and rewards (5), uniform tiles turning varied (6), one-way commands turning two-way with a Trust ground (7), tilted scale balancing then a learning staircase (8), coin shrinking and three pillars holding "meaningful work" (10), Valued + Trust + Autonomy (11), cage opening into an environment, Win-Win (12).
- Controls: arrows, space, click, swipe; N speaker notes (script from the outline); F fullscreen; hash deep links; reduced motion; print CSS.
- Single offline HTML with embedded fonts (Playfair Display, Noto Serif Thai, Noto Sans Thai, Inter), PDF 13 pages, cover.jpg. HTML and PDF sent to the user.
- Gallery: `works/motivate-employees/index.html`, `cover.jpg`, `works.json` entry added; gallery `index.html` republished byte-identical (sha256 `a1c6d882...`).

Answered, no action: Supabase cannot serve HTML pages (Storage returns HTML as plain text); free plan allows 2 active projects (user has 1: `jd-work-handoff`). User then dropped the website idea.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Thai headlines broke badly (orphan "และ", "คือ") | FIXED | `nowrap` spans grouped the wrong words | Group connective words with the following phrase | Playwright renders 1440x900 |
| "ชีวิต" label overlapped the grown circle (slide 8) | FIXED | label too low for scale | Label y 174, scale 1.6 | render |
| Diagram labels small on phone (about 11px) | OPEN, accepted | SVG scales down at 390px | Deck is meant for projection | 390x844 renders |
| `desert-stone` palette note wrong (Rust on Basalt 2.28:1) | OPEN | from before | PR #8 follow-up, not fixed | `library.mjs contrast "#A0462A" "#2E2B28"` |

## 5. Attempts That Failed or Were Rejected

- `rm -f shots/*` after `cd` was blocked by the safety check; use a fresh output folder per run instead.
- Rejected by the user: hosting the gallery as a website with Supabase (asked, then said not needed).
- Rejected earlier: auto-calling `/visual-production` or `/visual-style` from `/create-presentation`; brand photos or logos in decks; moving rules into shared references.

## 6. Decisions and Constraints

User decisions:
- Decks stay out of the repo; they live only in artifacts.
- `/create-presentation` adds finished decks to the gallery (only after the user has seen them).
- No auto-calling of user-invoked skills.
- Chrome Anime user image only in the private gallery.

Agent decisions (user may reject):
- Shareable link is a separate artifact holding only the deck, so the gallery (third-party image, other works) is not exposed.
- Title tag of the deck is Thai ("สร้างแรงจูงใจพนักงาน"), so the artifact shows that name.

Gallery artifact differs from the repo (IMPORTANT):
- `styles.json` `chrome-anime` uses `references/chrome-anime/user-01.webp` (user-supplied). Repo uses `example-01.webp`.
- `works.json` and `works/` (4 decks) exist only in the artifact. Never overwrite from the repo.
- To add files: read the artifact without `path` and Read every line of the saved HTML (counts as viewed), read `works.json`, keep all entries, publish `index.html` unchanged plus only new or changed files.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed

- Repo: `.ai/handoff/current.md` only (uncommitted).
- Gallery artifact v11: added `works/motivate-employees/index.html`, `cover.jpg`; updated `works.json`.
- New artifact NFagUhWkbnoefD4trdcpCc (the deck).
- Deck source and build scripts were in the old session scratchpad (`.../00d8425a-.../scratchpad/build/`: `src.html`, `build.mjs`, `shoot.mjs`, `pdf.mjs`, `out/presentation-brief.md`). Expect them gone; read the deck back from either artifact (`works/motivate-employees/index.html`). Fonts are base64-embedded in that file.

## 8. Validation and Evidence

- Playwright 1.56.1 (`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`): every step of every slide at 1440x900 and 390x844, no page errors, all six font faces loaded.
- PDF: `pdfinfo` 13 pages, final states inspected.
- Gallery file list after publish: 27 files, all previous ones present.
- NOT verified: projector; real phone; standalone artifact with public sharing on (user has not switched it yet).

## 9. Open Questions and Risks

- OPEN (PR #8 follow-up): fix `desert-stone` note in `skills/productivity/visual-style/library/palettes.json`; keep or drop Bauhaus and Brutalism aliases (agent recommends keep).
- RISK: Chrome Anime user image is third-party art; credit or remove before sharing the gallery link.
- RISK: republishing the gallery from repo files would drop the user image and all Works.
- RISK (older): free-text `--mood`/`--use`; `npx skills add` may not keep sibling folders.

## 10. Next Actions, in priority order

1. Only if asked: edit the deck (rename title, change slides) by reading it from the artifact, editing, re-rendering with Playwright, and republishing both the standalone artifact (NFagUhWkbnoefD4trdcpCc) and the gallery work.
2. Ask the user: fix the `desert-stone` note? keep the aliases? If yes, edit, run `library.mjs check`, commit, push, new PR only if asked.

## 11. Exact First Step for the Next Session

Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline`. Success check: `8cbe20b` on top of `a3f3f40` (or this handoff committed after it). If PR work starts and `main` moved, restart the branch from `origin/main`. Then wait for the user's request.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
เด็ค "How to Motivate Employees" อยู่ใน gallery artifact TEgWtaAsxAdNuhwVjhX1QT (v11, works/motivate-employees/) และลิงก์แยก NFagUhWkbnoefD4trdcpCc
ห้ามเขียนทับ gallery จาก repo (มี works 4 งานและรูป Chrome Anime ของฉัน)
งานค้าง: ถามฉันเรื่องแก้ note palette desert-stone และ aliases Bauhaus/Brutalism
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
