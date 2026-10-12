# Handoff: ai-product-workflow-skills

Updated: 2026-10-12 (second session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. This file is self-contained. Older history: `sessions/2026-10-11.md`.

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex).
- This session: redesign the Visual Style Library gallery (`skills/productivity/visual-style/library/gallery.html`, published as an artifact) to be visual-first with easy color selection; then test the gallery handoff by building a deck with `/create-presentation`; fix what the test found. ALL REACHED.
- Next milestone: PR from the work branch into `main`, only when the user asks.

## 2. Current Status

- CONFIRMED: work branch at `25bce26`, pushed, in sync with origin. `main` still at `a8ed227`. No PR open. User rule: do not open a PR or merge until told.
- CONFIRMED: tree diff against `main` is 10 files (section 7). `git log origin/main..HEAD` lists many older commits because `main` was squash-merged; judge by `git diff --stat origin/main HEAD`.
- CONFIRMED on `25bce26`: `library.mjs check` 53 styles, 25 palettes, 6 presets, 0 errors, 0 warnings; `scripts/list-skills.sh` 24. No manifest changed, so plugin validate was not re-run (last pass on `a8ed227`).
- CONFIRMED: this `current.md` rewrite is NOT committed (handoff skill does not commit without a request).
- Artifacts (private, owned by the user):
  - Gallery: https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT (version 4, matches `25bce26`). Its `styles.json` was republished from the work branch (includes Bauhaus/Brutalism aliases). Other data files there are from the earlier publish, not re-sent.
  - Test deck: https://claude.ai/artifact/Y5NEPaLjKWw73tzM8XWffP (8 slides). Source lived only in the scratchpad (gone after this session).

## 3. Completed

| Commit | Change |
|---|---|
| `4141454`, `0a0a5f6`, `95f0390`, `67ef3c2` (earlier, 2026-10-11/12) | No changesets (bump with `npm version`); `library.mjs` rejects unknown flags and non-hex `contrast` input; Bauhaus/Brutalism aliases; presentation guidance (Thai headline breaks, embed fonts); route C baseline compare; route D renumbering. |
| `3fc2c11` | Gallery redesign: compact header, one search box over all fields plus a Thai/English keyword map and hue-based color words, tabs Styles/Colors/Presets, 3 quick filters (Mood, Color, Use for) plus an All filters drawer with chips and Clear all, Colors modes (Pick a color, Browse palettes, Build my palette with 6 roles, live WCAG checks), Style only/Colors only/Combined preview, sticky selection tray, Review & apply handoff (Prompt or JSON: command, style id, palette id or custom colors, direction from profile, constraints, use). Dark single theme by user direction. |
| `d6aedd7` | User's top 3: (1) swatch wall of all 113 library colors grouped by hue; tap shows library palettes that use it (column sheets with name and HEX, tap any column to keep exploring) then generated palettes; (2) compare grids: a style across its palettes or all 25, a palette across its styles; (3) selection plus Apply in a sticky footer inside every dialog. Dialogs are bottom sheets on phones so Close sits below the app bar (114 px from top at 390x844, was hidden under the bar). |
| `25bce26` | `six()` maps a missing surface role to the background, not secondary. Preview cards get a hairline border. |

Deck test (route B, `/create-presentation`): handoff from the gallery used as given (neoclassical-editorial + burgundy-cream). Topic defaulted to "deck introducing this repo" (earlier user decision). 8 slides, fonts embedded (Cinzel, EB Garamond, Noto Serif Thai from `@fontsource` 5.0.15 / 5.0.20 / 5.0.14), brief written per `references/presentation-brief.md`.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Handoff set surface to Rosewood for burgundy-cream; Raisin Ink on Rosewood 3.08:1 | FIXED (`25bce26`) | `six()` fell back to secondary when a palette has no surface | Fall back to background | Handoff now `--color-surface: #F3EBDD`, text on surface 14.03:1; dark-technical keeps its own surface `#161C24` |
| Search too broad or noisy (tech deck query, "สีแดงกับครีม" gave 41 styles, "bauhaus" stemmed to "bauhau") | FIXED (`3fc2c11`) | Substring matching, profile-text hits counted as matches, naive plural strip | Word-start matching; profile-only hits add score but do not count; styles match colors via first 2 compatible palettes; no strip after s/u | Queries: "หรูหราแต่ไม่เยอะ" 4 styles, "เขียวธรรมชาติ" 4, "3D technical animation" 7, "bauhaus" 1 |
| Review dialog overflowed on phones | FIXED | Grid children with auto min-width (pre block) | `.dlg > * { min-width: 0 }` | 390 px screenshot |
| Close button under the app bar on iPhone (user screenshot) | FIXED (`d6aedd7`) | Centered modal ignores the app's top overlay | Bottom sheet, max-height leaves `env(safe-area-inset-top) + 88px` | Close top 114 px at 390x844 |
| Near-black colors grouped under Reds/Oranges in the swatch wall | FIXED | Lightness floor 0.10 | Floor 0.16, dark colors go to Neutrals | wall render |
| Deck slide 6 (desktop) and slide 3 (phone) ran under the nav buttons | FIXED in deck | Arch height by aspect ratio; 11-item list in one column | Arch height by vh; 2 columns on phone | per-slide overflow check |
| Thai phrases with a stray mid-phrase space in the deck | FIXED in deck | Space between nowrap spans | `<wbr>` instead of space | render |

## 5. Attempts That Failed or Were Rejected

- Playwright 1.47.2 with the preinstalled Chromium: fails (expects chromium-1134). Use `playwright@1.56.1` with `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome`.
- `pkill -f "http.server 8765"` inside a compound command kills its own shell (exit 144). Use the pattern `"http.server 876[5]"`.
- `rm` with a glob after `cd` in one command is blocked by the safety check. Overwrite files instead.
- Installing woff2 fonts into `~/.fonts` for Chromium: does not work (earlier session). Embed as data URIs.
- Force push: denied earlier. Use `git merge -s ours` if a branch restart is ever needed.
- `grep -P` with U+2014 fails here. Use bash `grep -c $'—' <file>` (write the escape, not the character).
- Rejected design: `/create-presentation` calling `/visual-style` or `/visual-production` (forbidden by `.agents/invocation.md`).

## 6. Decisions and Constraints

User decisions:
- No changesets; bump with `npm version`.
- Gallery direction: Dark Editorial, dark charcoal; visual-first; priorities: tap swatches, compare style vs palette visually, selection always visible.
- Do not open a PR or merge until told. Test decks stay out of the repo.
- "Fix it" for the surface fallback (done).

Agent decisions (user may reject):
- Gallery is single dark theme (no light mode).
- Apply copies a handoff to paste into Claude Code (no other mechanism exists). `Use for: presentation` starts with `/create-presentation`, otherwise `/visual-style`. Not changed after the user's test (intended).
- Search is keyword matching plus a small Thai map, not AI; the help dialog says so.
- Generated palettes are labelled "Generated" and contrast-fixed (text 7:1 on background, accent 3:1).
- Bauhaus and Brutalism aliases (still awaiting user answer).

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract (README, `plugin.json`, `docs/<bucket>/<skill>.md`); user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed (work branch against `main`)

`.claude/CLAUDE.md`, `package.json`, `scripts/sync-plugin-version.js`, `skills/productivity/create-presentation/SKILL.md`, `skills/productivity/presentation-design/references/presentation-principles.md`, `skills/productivity/visual-style/library/gallery.html`, `skills/productivity/visual-style/library/styles.json`, `skills/productivity/visual-style/scripts/library.mjs`, `.ai/handoff/current.md`, `.ai/handoff/sessions/2026-10-11.md`. No manifest, README, or docs page changed.

## 8. Validation and Evidence

- Gallery: Playwright at 1440x900 and 390x844 (served with `python3 -m http.server` from `library/`): search queries, quick filters, drawer, chips, detail, select, swatch wall tap, column re-pick, compare grids (4 best fits, 25 all, 11 styles for burgundy-cream), mini tray Apply, build roles (picker and HEX synced, invalid HEX flagged), presets, handoff Prompt and JSON, copy. No page errors, no horizontal overflow.
- Deck: every slide at both widths with no overflow, nothing under the nav, no errors; CDP confirmed Cinzel, EB Garamond, Noto Serif Thai drawn; keys, End, hash deep links; reduced motion shows content at rest.
- NOT verified: either artifact on a real iPhone or inside the Claude app; swipe on a touch device; Google Fonts in the gallery (blocked in the container, fallbacks used in screenshots).

## 9. Open Questions and Risks

- OPEN: PR for the work branch (waiting on the user).
- OPEN: keep or drop Bauhaus and Brutalism aliases.
- RISK: viewers who saved a custom palette in the gallery before `25bce26` keep the old Rosewood surface in localStorage until they reselect.
- RISK: `marketplace.json` has its own `version` (0.1.0); no script syncs or checks it.
- RISK: `--mood` and `--use` in `library.mjs` are free text with no listed values.
- RISK: `visual-production` description still lists presentations while the router sends them to `/create-presentation`.
- RISK: `references/library-schema.md` and `SKILL.md` describe the gallery as "filters and synthetic previews"; still true but not updated for the new features.
- UNKNOWN: whether `npx skills add` keeps sibling skill folders so `../visual-style/` resolves.

## 10. Next Actions, in priority order

1. Ask the user whether to open a PR from `claude/setup-workflow-xd5lho` into `main` (body: changeset decision, `/create-presentation` fixes, gallery redesign, surface fix).
2. Ask whether to keep the Bauhaus and Brutalism aliases.
3. Ask whether to commit this `current.md`.
4. If wanted: `library.mjs vocab` to list mood and use values; sync or check the `marketplace.json` version; update the gallery line in `references/library-schema.md`.

## 11. Exact First Step for the Next Session

Do NOT reset the branch to `main`. Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git diff --stat origin/main HEAD`. Success check: branch at `25bce26` or later, 10 files differ from `main`. Then `node skills/productivity/visual-style/scripts/library.mjs check` (0 errors) and `scripts/list-skills.sh | wc -l` (24). To edit the gallery artifact, edit `library/gallery.html`, strip the doctype/html/head/body lines into a scratch copy, and publish to the gallery URL above.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: branch claude/setup-workflow-xd5lho มีงานที่ยังไม่เข้า main
(ไม่ใช้ changeset, แก้ /create-presentation, redesign gallery ของ Visual Style Library, แก้ surface fallback).
ห้าม reset branch ไป main. เช็ก git diff --stat origin/main HEAD แล้วรัน library.mjs check และ list-skills.
จากนั้นถามฉันว่าจะเปิด PR หรือไม่ และจะเก็บ aliases Bauhaus/Brutalism ไหม.
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash, Promotion Contract) และอย่าเปิด PR หรือ merge จนกว่าฉันจะสั่ง.
```
