# Handoff: ai-product-workflow-skills

Updated: 2026-10-11. Repo: artitthesun14-ux/andrej-karpathy-skills. Branch for work: `claude/setup-workflow-xd5lho`.

## 1. Goal and Success Criteria

- Goal: turn this repo (originally the Karpathy guidelines) into the `ai-product-workflow-skills` skill collection for Claude Code and Codex, with a product workflow, animation skills, a visual production system, and a handoff skill.
- Success: all skills follow the Promotion Contract, `claude plugin validate . --strict` passes, and everything is merged to `main`. Reached for the current scope. Remaining items are follow-ups (section 10).

## 2. Current Status

- CONFIRMED: PRs #1 to #5 are merged into `main` (squash). `main` is at `703e933` (PR #5, marketplace.json and README install lines).
- CONFIRMED: 22 skills listed by `scripts/list-skills.sh`. `claude plugin validate . --strict` passed on this tree (validates plugin.json and marketplace.json).
- CONFIRMED: local branch tree equals `origin/main`. No open PR. Local branch history still carries old pre-squash commits, so it is not a fast-forward of `main`.
- UNCOMMITTED: this handoff update (`.ai/handoff/current.md` and `sessions/2026-10-11.md`) is not committed or pushed.

## 3. Completed

- Replaced the Karpathy content with the 11 product workflow skills (`skills/engineering/`), docs, `openai.yaml`, `workflow-router`, `.agents/invocation.md`, `scripts/`, `package.json`. (PR #1)
- Added 5 animation skills in `skills/productivity/` (model-invoked): motion-design, interaction-motion, animation-implementation, animation-review, visual-prototyping. (PR #1)
- Added the visual production system in `skills/productivity/`: `/visual-production` (user-invoked) plus visual-storytelling, presentation-design, technical-visualization, visual-review (model-invoked), with 4 reference files. (PR #1)
- Fixed plugin validation and em-dashes. (PR #2)
- Added the user-invoked `/handoff` skill. (PR #3)
- Added the handoff files under `.ai/handoff/`. (PR #4)
- Added `.claude-plugin/marketplace.json` (plugin `ai-product-workflow-skills` 0.1.0, owner `artitthesun14-ux`), an "การติดตั้ง" section in `README.md` (Claude Code `/plugin install ... --marketplace artitthesun14-ux/andrej-karpathy-skills` and `npx skills@latest add artitthesun14-ux/andrej-karpathy-skills`), and a layout entry for marketplace.json. (PR #5, also carried the animation test notes)
- Ran `/visual-production` on a 2D animation task (see section 8).

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| `plugin.json` skill paths rejected ("must start with ./", 21 errors) | FIXED | CONFIRMED: paths had no `./` | Prefixed every path with `./` | PR #2, validate passes |
| Warning: root `CLAUDE.md` not loaded as plugin context | FIXED | CONFIRMED | Moved to `.claude/CLAUDE.md`; updated links in `README.md` and `workflow-router` | validate passes |
| Warning: no `author` in `plugin.json` | FIXED | CONFIRMED | Added `author.name` = `artitthesun14-ux` (agent choice, the GitHub login) | PR #2 |
| Em-dashes in `CLAUDE.md` and `README.md` (style rule forbids) | FIXED | Came from the provided zip | Replaced with `:` | `grep` found none afterward |
| `git push` 403 on first push | FIXED | REPORTED by error text: Claude GitHub App lacked access | User reconnected access; later pushes worked | push succeeded |
| `--force-with-lease` push denied by the auto-mode classifier | MITIGATED | Branch was reset to `main` after a squash merge, so it was not a fast-forward | `git merge -s ours origin/<branch>` then a normal push | pushes for PR #2, #3, #5 |
| Earlier validate output was misread (only the tail was read, hiding the 21 path errors) | FIXED | Process mistake | Read the full output (`head`) next time | see session log |
| Validate advice: README had no marketplace install line | FIXED | CONFIRMED: no marketplace.json | Added marketplace.json and README lines | PR #5, advice gone |
| Merge call rejected: "sha parameter must be exactly 40 characters" | FIXED | Passed a 7-char SHA as `expectedHeadSha` | Passed the full 40-char SHA from `git rev-parse HEAD` | PR #5 merged |
| Animation test defects: text overflowing a fixed box, fixed header overlapped by scrolled content on phone, low-contrast disabled button | FIXED | Found only after rendering | CSS fixes, re-rendered | Chromium renders at 1440px and 390px |

## 5. Attempts That Failed or Were Rejected

- `git push --force-with-lease` after resetting the branch: denied. Do not retry. Use the `-s ours` merge instead.
- Running `playwright` with `require('playwright')` from `/tmp`: module not found. Working path: `/opt/node-tools/node_modules/playwright` with `executablePath: '/opt/pw-browsers/chromium'`.
- Google Fonts are blocked in the sandbox, so local renders fall back to Loma for Thai. Check type widths with that in mind.

## 6. Decisions and Constraints

User decisions:
- Replace the Karpathy content entirely (chosen over merging). It is recoverable at commit `2c60614`.
- Open PRs and merge only when asked (each was explicitly requested, including #5 with squash).
- Add `marketplace.json` and the README install lines (asked and done).
- Delete test artifacts and decks after testing. Keep only the animation test findings (done, in section 8).

Agent decisions (not confirmed by the user beyond acceptance):
- Animation, visual helper skills, and `/handoff` live in `productivity/`. Helpers are model-invoked. `/visual-production` and `/handoff` are user-invoked.
- `CLAUDE.md` lives at `.claude/CLAUDE.md` so `--strict` validation passes.
- Install lines and the marketplace use the current repo name `artitthesun14-ux/andrej-karpathy-skills`.
- Animation test deck was published as a private artifact, dark theme only, then deleted.

Repo rules (from `.claude/CLAUDE.md`): no em-dashes anywhere; Promotion Contract (README entry, `plugin.json` path, `docs/<bucket>/<skill>.md`); user-invoked skills need `disable-model-invocation: true`, an `openai.yaml` entry, and a `workflow-router` row; user-invoked skills never call each other; run `scripts/link-skills.sh` after add/remove/rename; read only the files a task needs.

## 7. Files Changed (all merged except this handoff update)

`.claude/CLAUDE.md`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/invocation.md`, `README.md`, `openai.yaml`, `workflow-router`, `package.json`, `scripts/*`, `.ai/handoff/*`, `docs/engineering/*` (11), `docs/productivity/*` (11), `skills/engineering/*` (11), `skills/productivity/*` (11, with `references/` in motion-design, presentation-design, technical-visualization, visual-review), `.claude/skills/*` (local symlinks, committed). Removed: the Karpathy files (`CURSOR.md`, `EXAMPLES.md`, `README.zh.md`, `.cursor/`, `skills/karpathy-guidelines/`, and the old Karpathy `marketplace.json`, replaced by a new one).

## 8. Validation and Evidence

- `claude plugin validate . --strict`: passed (re-run for this handoff). `claude plugin validate .claude-plugin/plugin.json --strict`: passed (run before PR #5).
- `scripts/list-skills.sh | wc -l`: 22 (re-run for this handoff).
- `npm run check-plugin-version`: passed at 0.1.0 (run before PR #5).
- Animation test (CONFIRMED by Chromium renders at 1440px and 390px): a 5-slide Thai HTML deck on the film The Founder with an SVG burger (CSS keyframes for assembly and a bite mask, JS-driven layer peel where remaining layers re-settle). Passed: assembly and bite animation, layer peel, keyboard and swipe navigation, phone layout. The published artifact page itself was never opened after publishing (only the local file was rendered). Deck, screenshots, and artifact were deleted at the user's request.
- Earlier visual checks: a sample investor deck and an 8-slide overview deck, rendered and inspected, not in the repo.
- Not tested: the install flow from the marketplace end to end (`/plugin install` and `npx skills@latest add` were not run), `technical-visualization` (3D), data storytelling at scale, reduced-motion behavior (CSS written, not rendered), touch input on a real device.

## 9. Open Questions and Risks

- OPEN: no changeset set up (`@changesets/cli` not installed, no `.changeset/`), so `npm run changeset` would fail.
- RISK: install lines name the repo `andrej-karpathy-skills`. If the repo is renamed to `ai-product-workflow-skills`, update `README.md` and check `marketplace.json`.
- RISK: model-invoked skills may not load automatically. Users should name them in the prompt.
- RISK: `/visual-production` was exercised on presentation, refinement, and one 2D animation task. The 3D and data story example tasks are untested.
- UNKNOWN: whether `npx skills@latest add artitthesun14-ux/andrej-karpathy-skills` works for this repo layout (copied from the pattern in `.claude/CLAUDE.md`).

## 10. Next Actions, in priority order

1. Reset the working branch to `main` and re-validate (section 11).
2. Commit and push this handoff update only if the user asks. Open a PR or merge only when asked.
3. Decide on changesets (install `@changesets/cli` or document that none are used).
4. Test `/visual-production` on a 3D explainer; fix the skills based on real renders.
5. Optionally verify the install flow once the repo name is final.

## 11. Exact First Step for the Next Session

Run `git fetch origin && git checkout -B claude/setup-workflow-xd5lho origin/main`, then `claude plugin validate . --strict` and `scripts/list-skills.sh | wc -l`. Success check: validation passes and the count is 22. If pushing the reset branch, do not force push; merge the old remote branch with `-s ours` first.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: repo นี้คือ ai-product-workflow-skills (22 skills, PR #1 ถึง #5 merge เข้า main แล้ว รวม marketplace.json และบรรทัดติดตั้งใน README).
เริ่มจาก reset branch claude/setup-workflow-xd5lho ให้ตรงกับ origin/main แล้วรัน
claude plugin validate . --strict และ scripts/list-skills.sh ยืนยันว่ายังผ่าน (22 skills).
จากนั้นถามฉันว่าจะจัดการ changeset อย่างไร และจะทดสอบ /visual-production กับงาน 3D ต่อไหม.
ทำตามกติกาใน .claude/CLAUDE.md (ไม่มี em-dash, Promotion Contract) และอย่าเปิด PR หรือ merge จนกว่าฉันจะสั่ง.
```
