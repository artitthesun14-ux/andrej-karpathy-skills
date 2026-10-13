# Handoff: ai-product-workflow-skills

Updated: 2026-10-13. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md` and the previous `current.md` in git at `f398658`.

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex).
- This session: fix three open risks; open PR #8; add a Works tab to the Visual Style Library gallery and a gallery step to `/create-presentation`; test it by making a deck; add two styles (Vintage Rubber Hose, Chrome Anime) with example images. ALL REACHED.
- Next milestone: PR #8 merged into `main`, only when the user says so.

## 2. Current Status

- CONFIRMED: branch at `f46823d`, pushed, in sync with origin. `main` at `a8ed227`. Tree diff: 21 files (`git diff --stat origin/main HEAD`; `git log` lists many old commits because `main` was squash-merged).
- CONFIRMED: PR #8 https://github.com/artitthesun14-ux/andrej-karpathy-skills/pull/8 open, not merged, head `f46823d`, mergeable_state unknown at last read, no CI configured that we know of. User rule: do not merge until told.
- CONFIRMED on `f46823d`: `library.mjs check` 55 styles, 27 palettes, 6 presets, 0 errors, 0 warnings; `list-skills.sh` 24; `check-plugin-version` OK at 0.1.0. `claude plugin validate . --strict` last passed after `9f420fd` (no manifest changed since).
- CONFIRMED: PR #8 description is outdated (says 53 styles, 25 palettes; does not mention Works tab, new styles, example images).
- CONFIRMED: this `current.md` is NOT committed (handoff skill does not commit without a request).
- Artifacts (private, owned by the user):
  - Gallery: https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT, version 9. Has a Works tab with 2 works.
  - Deck "How /create-presentation Works" lives only inside the gallery at `works/create-presentation-how-it-works/`. Its standalone artifact was deleted at the user's request.
  - Old test deck artifact https://claude.ai/artifact/Y5NEPaLjKWw73tzM8XWffP still exists (also copied into the gallery Works tab).

## 3. Completed (commits on the work branch)

| Commit | Change |
|---|---|
| `9f420fd` | `marketplace.json` version synced by the `version` hook and checked by `check-plugin-version`; `visual-production` no longer claims presentations; gallery features documented in `visual-style/SKILL.md` and `references/library-schema.md`. |
| `e58f577` | Gallery Works tab (optional `works.json` next to the page: Open, "Use this style again"; hidden when absent). `works.json` format in `library-schema.md`. `/create-presentation` section "Add to the gallery"; `gallery_url` field in `references/presentation-brief.md`. |
| `a6860f3` | `/create-presentation` finds the gallery without a link: link given, then `gallery_url` in brief, then the user's artifacts titled "Visual Style Library" (one match: use it; several: ask; none: skip). |
| `c24fc47` | New category `illustration-character` (`styles/illustration-character.md`). Styles `vintage-rubber-hose` (aliases include "Rubber House") and `chrome-anime`. Palettes `inkwell` and `chrome-noir`. Gallery SVG sketch renderers `rubberhose`, `chrome`; Thai search words (การ์ตูน, อนิเมะ, โครม, วินเทจ, มาสคอต). Docs: 55 styles, 11 categories, 27 palettes. |
| `7d97da8` | Original example illustrations (generated) at `library/references/<id>/example-01.webp` for both new styles, registered in `reference_images`. Gallery: a style's first reference image replaces the sketch on its card (sketch returns with "Show in my colors" or a color filter) and shows in the detail view with a label. Profiles refined from the user's reference images. |
| `f46823d` | Gallery CSS: portrait example images capped at 70vh in the detail view. |

Test of the new flow (CONFIRMED): `/create-presentation` route B with user handoff (luxury-editorial + earth-tone), 10 Thai slides, fonts embedded (Bodoni Moda, Noto Serif Thai, @fontsource 5.0.14). Gallery found by title with no link. Deck shown to the user first, then added to the gallery on request.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Deck slide 1 title overflowed; slide 10 heading overlapped list | FIXED (deck only) | Display size too large for a 4-5 column text block | h1 clamp(38px, 4.4vw, 76px); default h2 size on slide 10 | Playwright re-render, no overflow |
| Eight-step list read out of order for screen readers | FIXED (deck only) | DOM order 1,5,2,6... for a 2-column look | DOM 1..8 with `grid-auto-flow: column` | source |
| Banner text "THE INKWELL SHOW" clipped in the rubber hose illustration | FIXED | Text longer than its arc path | Smaller type, longer arc | render |
| First chrome illustration looked like a 3D robot and had cross shapes close to a user reference | FIXED | No ink outline, round head, cross props | Ink outlines, pointed chin, slanted red eye slits, plain light pillars | render |
| Artifact publish refused "not viewed live version" | WORKED AROUND | Tool requires viewing before publish | Diff showed only own changes; republished unchanged, accepted | tool output |

## 5. Attempts That Failed or Were Rejected

- Rejected (user): letting `/create-presentation` call `/visual-production` or `/visual-style` automatically. Agent analysis: blocked by `disable-model-invocation: true` and `.agents/invocation.md`; little gain. Agent also proposed moving the Apply step and rules from those `SKILL.md` files into shared `references/`; user said NOT to do it ("ไม่ต้องแก้").
- Not done on purpose: storing user-supplied images in the repo (unknown artist and license; `library/references/README.md` says do not add). See decision in section 6.
- Earlier sessions (still valid): Playwright must be `playwright@1.56.1` with `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome`; Google Fonts are blocked in the container, so embed fonts for renders; `grep -P` with U+2014 fails, use `grep -c $'\u2014' <file>` (type the escape, not the character); force push denied.

## 6. Decisions and Constraints

User decisions:
- Do not merge PR #8 until told. Test decks stay out of the repo.
- `/create-presentation` adds finished decks to the gallery as a skill step, and finds the gallery by title when no link is given.
- Do not add auto-calling of user-invoked skills; do not move rules into shared references (for now).
- Chrome Anime: the user's own image (red-eyed chrome figure in water) is used ONLY in the private gallery artifact. Repo keeps the generated illustration.

Agent decisions (user may reject):
- New category `illustration-character` instead of forcing the styles into existing categories.
- Name "Vintage Rubber Hose" (correct term), with "Rubber House" as an alias.
- Example images are original SVG drawings rasterized to WebP (kind `generated`).

Gallery artifact differs from the repo (IMPORTANT):
- Artifact `styles.json` entry `chrome-anime` has `reference_images` = `references/chrome-anime/user-01.webp` (kind `user-supplied`, "Supplied by the user, 2026-10-12. Artist unknown", "Private gallery only, not in the repository"). Repo has `example-01.webp` (generated).
- Artifact also holds `works.json` and `works/` (2 decks). Never overwrite these from the repo.
- When republishing the gallery: read the artifact's `styles.json` and `works.json` first and keep these differences; publish only changed files.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed (work branch against `main`, 21 files)

`.claude/CLAUDE.md`, `package.json`, `scripts/sync-plugin-version.js`, `scripts/check-plugin-version.js`, `README.md`, `docs/productivity/visual-style.md`, `skills/productivity/create-presentation/SKILL.md`, `skills/productivity/create-presentation/references/presentation-brief.md`, `skills/productivity/presentation-design/references/presentation-principles.md`, `skills/productivity/visual-production/SKILL.md`, `skills/productivity/visual-style/SKILL.md`, `skills/productivity/visual-style/references/library-schema.md`, `skills/productivity/visual-style/scripts/library.mjs`, `skills/productivity/visual-style/library/gallery.html`, `.../library/styles.json`, `.../library/palettes.json`, `.../library/styles/illustration-character.md` (new), `.../library/references/vintage-rubber-hose/example-01.webp` (new), `.../library/references/chrome-anime/example-01.webp` (new), `.ai/handoff/current.md`, `.ai/handoff/sessions/2026-10-11.md`.

## 8. Validation and Evidence

- Gallery (local server, Playwright 1440x900 and 390x844): Works tab (2 cards, newest first), Open and "‹ Gallery" back link, "Use this style again", searches "rubber house", "การ์ตูนวินเทจ", "chrome anime", "อนิเมะโครม", example images on cards and in details, user image in artifact copy. No page errors, no horizontal overflow.
- Deck: all 10 slides at both widths; fonts drawn; phone slides 6 to 8 scroll inside the slide.
- Palettes: contrast computed for every text pair (`check` enforces thresholds).
- NOT verified: anything inside the real Claude app or on a real phone (Works Open link, "‹ Gallery" `../../` link, swipe, motion with reduced motion off); Google Fonts in the gallery (blocked in container).

## 9. Open Questions and Risks

- OPEN: when to merge PR #8 (user).
- OPEN: keep or drop Bauhaus and Brutalism aliases (asked since 2026-10-11, no answer).
- RISK: republishing the gallery from repo files would drop the user's Chrome Anime image and the Works data (section 6).
- RISK: the user's Chrome Anime image is third-party art with unknown artist; fine while private, needs credit or removal before sharing the gallery link.
- RISK: Works "Open" and "‹ Gallery" use relative links inside the artifact; untested in the app.
- RISK (older): `--mood` and `--use` in `library.mjs` are free text; `npx skills add` may not keep sibling folders, so `../visual-style/` paths may not resolve; custom palettes saved in viewers' localStorage before `25bce26` keep the old surface.
- Deck sources and `presentation-brief.md` were only in the session scratchpad (gone). The deck can be read back from the gallery; the brief is lost.

## 10. Next Actions, in priority order

1. Update PR #8 description: 55 styles, 11 categories, 27 palettes; Works tab; `/create-presentation` gallery step and title lookup; new styles and generated example images. Keep the open question on aliases.
2. Ask the user: merge PR #8? keep Bauhaus/Brutalism aliases? commit this `current.md`?
3. Ask the user to test in the Claude app: gallery Works "Open" and the deck's "‹ Gallery" link; fix if broken.
4. Optional (only if asked): Rubber Hose black-and-white poster variant illustration; a more human anime figure for the repo's generated Chrome Anime image.

## 11. Exact First Step for the Next Session

Do NOT reset the branch to `main`. Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git diff --stat origin/main HEAD`. Success check: branch at `f46823d` or later, 21 files differ. Then `node skills/productivity/visual-style/scripts/library.mjs check` (0 errors, 55 styles) and `scripts/list-skills.sh | wc -l` (24). Before any gallery publish, read the artifact's `styles.json` and `works.json` with the Artifact tool and preserve the differences in section 6. To publish the page, strip the doctype/html/head/meta/body lines from `library/gallery.html` into a scratch `index.html`.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: branch claude/setup-workflow-xd5lho (PR #8 ยังเปิดอยู่ ห้าม merge จนกว่าฉันสั่ง)
ห้าม reset branch ไป main. เช็ก git diff --stat origin/main HEAD, รัน library.mjs check และ list-skills.
gallery artifact TEgWtaAsxAdNuhwVjhX1QT มี works.json และรูป Chrome Anime ของฉันที่ไม่อยู่ใน repo ห้ามเขียนทับ
งานแรก: อัปเดตคำอธิบาย PR #8 แล้วถามฉันเรื่อง merge และ aliases Bauhaus/Brutalism
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
