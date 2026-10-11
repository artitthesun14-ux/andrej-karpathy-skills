# Handoff: ai-product-workflow-skills

Updated: 2026-10-11. Repo: artitthesun14-ux/andrej-karpathy-skills. Branch for work: `claude/setup-workflow-xd5lho`.

## 1. Goal and Success Criteria

- Goal: maintain the `ai-product-workflow-skills` collection (Claude Code and Codex). This session added a visual style and color library (`/visual-style`) and a single entry point for presentations (`/create-presentation`).
- Success for this round: both skills meet the Promotion Contract, validation passes, PR #6 is merged. Validation is reached; merge is pending the user.

## 2. Current Status

- CONFIRMED: PR #6 (https://github.com/artitthesun14-ux/andrej-karpathy-skills/pull/6) is open, `mergeable_state: clean`, head `dd3ac2e`, base `main` at `703e933`. 35 files, +4026 / -43. No CI workflows in the repo.
- CONFIRMED: 24 skills (`scripts/list-skills.sh`). `claude plugin validate . --strict` and `claude plugin validate .claude-plugin/plugin.json --strict` pass. `npm run check-plugin-version` passes (0.1.0). `library.mjs check`: 0 errors, 0 warnings.
- CONFIRMED: `origin/main` is an ancestor of the branch (merged `origin/main` in this session), so PR #6 merges cleanly.
- UNCOMMITTED: this handoff update only (`.ai/handoff/current.md`, `sessions/2026-10-11.md`).

## 3. Completed

- `/visual-style` (user-invoked, `skills/productivity/visual-style/`), commit `8292995`:
  - `library/styles.json` (53 styles, 10 categories, controlled vocabulary) plus `library/styles/<category>.md` (one `## <id>` profile per style, 14 prose fields). Near-duplicate names from the user's brief merged as aliases (for example International Typographic Style is an alias of `swiss-international`). Palette families from brief category E moved to the color library.
  - `library/palettes.json`: 25 palettes, 11 categories, roles, shares, `text_pairs`, `avoid_pairs`, all `source: authored`.
  - `library/presets.json`: 6 presets referencing style and palette ids.
  - `scripts/library.mjs`: `find`, `palettes`, `style`, `palette`, `preset`, `contrast`, `check` (schema, cross-refs, vocabulary, WCAG 2.2 contrast, em-dash scan).
  - `library/gallery.html`: filters on 8 axes, synthetic SVG previews, contrast checker, copyable selection with CSS tokens. Needs a local server (`python3 -m http.server`) because of `fetch`.
  - `references/library-schema.md`, `library/references/README.md`.
- `/create-presentation` (user-invoked, `skills/productivity/create-presentation/`), commit `dd3ac2e`: routes A new, B new in a given style, C transform, D continue; specialist table of model-invoked helpers; `references/presentation-brief.md` handoff template (14 fields); quality gate; report.
- Refactor so nothing is copied: style selection procedure moved to `visual-style/references/style-direction.md` (with the CLI commands); visual plan moved to `visual-production/references/visual-plan.md`. Both original skills point to them.
- Integration: README rows and counts, `plugin.json`, `openai.yaml`, `workflow-router`, `docs/productivity/visual-style.md` and `create-presentation.md`, `.agents/invocation.md` (new rule plus routing), `.claude/skills/` symlinks, one-line pointers in `visual-production` and `presentation-design`.
- Gallery published as a private artifact: https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT (copy built from the repo gallery, Version 1).

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Merge conflict in `.ai/handoff/current.md` when merging `origin/main` | FIXED | CONFIRMED: branch had a newer handoff than main | Kept the branch version (`--ours`) | merge commit `019e6e7` |
| Two palette text pairs below 4.5 (Dusty Blue 4.33, Steel 4.03) | FIXED | Authored colors too light | Darkened to `#55697F` and `#4F6676` | contrast 5.01 and 5.08 |
| Literal em-dash in `library.mjs` (the escape sequence for U+2014 was written as the character) | FIXED | Write tool output | Replaced with the escape via Python | `grep` finds none |
| Gallery previews showed other cards' colors | FIXED | CONFIRMED: SVG gradient and pattern ids repeated across 53 cards | Suffix ids per preview (`uid`) | Chromium render |
| "synthetic preview" tag covered preview text | FIXED | Bottom-left placement | Moved top-right | render |
| Test slide overlapped on phone (fixed 16:9 box) | FIXED (test file only) | `aspect-ratio` with content | Stacked layout below 700px, chart scrolls in its container | render at 390px |
| Color-only restyle left "Actuals in teal" | FIXED | Text named the old color | Changed word; added route C rule to `create-presentation/SKILL.md` | diff showed only color values changed otherwise |
| Contrast note overstated Antique Gold on Burgundy as failing (3.67 passes large) | FIXED | Wording | Note rewritten | `palette burgundy-cream` |

## 5. Attempts That Failed or Were Rejected

- Python `str.replace` edits failed when the anchor text wrapped differently than expected (`invocation.md` line starts with `  command; the skill...`). Read the exact lines before scripting edits.
- `grep -P` with a U+2014 code point fails in this shell ("code point too large"). Use bash ANSI-C quoting with the u2014 escape instead.
- Rejected design: `/create-presentation` calling `/visual-production` or `/visual-style`. Forbidden by `.agents/invocation.md`.

## 6. Decisions and Constraints

User decisions:
- Build the library per the user's long brief, then build `/create-presentation` per the second brief (orchestrator, no copied logic).
- Open PR #6 (asked). Merge not yet requested.

Agent decisions (accepted implicitly, not explicitly confirmed):
- Both new skills live in `productivity/` (not `engineering/`, which is the 11-step product workflow).
- Reading another skill's `references/`, `library/`, or `scripts/` is allowed and is not invocation; this rule is now written in `.agents/invocation.md`. The user was told and may reject it.
- Library data lives inside the `visual-style` skill folder so it ships with the plugin; `create-presentation` reaches it by relative path `../visual-style/`.
- Palette-to-style fit is stored once (style `compatible_palettes`); palettes derive their styles.
- No reference images and no URLs added; `reference_sources` only lists books or standards known to exist.

Repo rules (from `.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, and a `workflow-router` row, and never call each other; run `scripts/link-skills.sh` after adding skills.

## 7. Files Changed (in PR #6)

New: `skills/productivity/visual-style/**`, `skills/productivity/create-presentation/**`, `skills/productivity/visual-production/references/visual-plan.md`, `docs/productivity/visual-style.md`, `docs/productivity/create-presentation.md`, `.claude/skills/visual-style`, `.claude/skills/create-presentation`.
Modified: `.agents/invocation.md`, `.claude-plugin/plugin.json`, `README.md`, `openai.yaml`, `workflow-router`, `skills/productivity/visual-production/SKILL.md`, `skills/productivity/presentation-design/SKILL.md`, `.ai/handoff/*` (earlier session update carried in the PR).

## 8. Validation and Evidence

- Plugin validation (both commands), version check, `library.mjs check`, skill count 24, em-dash scan: all passed on `dd3ac2e`.
- `library.mjs check` negative test: four injected faults (bad contrast, unknown palette, missing profile field, off-vocabulary tag) all reported, exit 1.
- Gallery: Chromium at 1440px and 390px, no page errors, no horizontal overflow; detail dialog, use panel, filters (6 of 53 for Forest Sage palette plus packaging), palettes and presets tabs exercised. Google Fonts were blocked, so fallback fonts were seen.
- Dry run of `/visual-style` steps on one investor slide (preset `editorial-investor`), rendered and fixed at 390px.
- Dry run of `/create-presentation` route C (color-only change to `burgundy-cream`) on the same slide: `diff` with colors masked was identical; rendered and reviewed.
- Test slide files were in the scratchpad only; not in the repo.

## 9. Open Questions and Risks

- OPEN: PR #6 not merged; waiting for the user.
- OPEN: no changesets set up (`@changesets/cli` not installed, no `.changeset/`).
- UNKNOWN: `/create-presentation` route A (new deck from scratch) and route D (continue) have not been run end to end.
- UNKNOWN: whether `npx skills add` keeps sibling skill folders so `../visual-style/` resolves. Plugin installs keep the whole repo.
- UNKNOWN: the published gallery artifact was not opened after publishing; Google Fonts were not seen rendering.
- RISK: `visual-production` still lists presentations in its description; the router now sends presentations to `/create-presentation`. Overlap is intentional but may confuse.
- RISK: model-invoked helpers may not load automatically in some clients; users may need to name them.

## 10. Next Actions, in priority order

1. Ask the user whether to merge PR #6 (squash, as with PRs #1 to #5). Merge only on request, passing the full 40-char head SHA.
2. Test `/create-presentation` route A with real content: a short deck, rendered at desktop and phone width; fix the skill from what breaks.
3. Decide on changesets (install `@changesets/cli` or document that none are used).
4. Optionally add real reference images per style (`library/references/<style-id>/`, registered in `styles.json`), then run `check`.

## 11. Exact First Step for the Next Session

Run `git fetch origin && git status -sb` on `claude/setup-workflow-xd5lho`, then check PR #6 state. If still open, run `claude plugin validate . --strict` and `node skills/productivity/visual-style/scripts/library.mjs check`. Success check: validation passes, check reports 0 errors, PR #6 is still `clean`.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: repo ai-product-workflow-skills มี 24 skills.
session ก่อนเพิ่ม /visual-style (คลัง 53 สไตล์, 25 palettes, 6 presets, CLI library.mjs, gallery)
และ /create-presentation (orchestrator 4 เส้นทาง ใช้ไฟล์ reference ร่วม ไม่เรียก user-invoked skill อื่น)
อยู่ใน PR #6 ที่ยังไม่ merge.
เริ่มจากเช็กสถานะ PR #6 และรัน claude plugin validate . --strict กับ library.mjs check
แล้วถามฉันว่าจะ merge PR #6 ไหม และจะทดสอบ /create-presentation สร้าง deck ใหม่ด้วยเนื้อหาอะไร.
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash, Promotion Contract) และอย่า merge จนกว่าฉันจะสั่ง.
```
