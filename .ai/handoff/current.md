# Handoff: ai-product-workflow-skills

Updated: 2026-10-12. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. This file is self-contained; history before 2026-10-11 is in `sessions/2026-10-11.md`.

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills for Claude Code and Codex). Current round: settle versioning, then test `/create-presentation` on all four routes and fix what breaks.
- Success for this round: all four routes run end to end with rendered checks, fixes pushed to the work branch, validation passes. REACHED.
- Next milestone: PR from the work branch into `main`, only when the user asks.

## 2. Current Status

- CONFIRMED: `main` at `a8ed227` (PR #6 `/visual-style` and `/create-presentation`, then handoff PR #7).
- CONFIRMED: work branch `claude/setup-workflow-xd5lho` at `53a07f4`, pushed, 8 commits ahead of `main` (includes one `-s ours` merge `a0602a1` with no tree change). No PR open. User said: do not open a PR or merge until told.
- CONFIRMED: this rewrite of `current.md` is not committed (the handoff skill does not commit without an explicit request).
- CONFIRMED on `67ef3c2`: `library.mjs check` 53 styles, 25 palettes, 6 presets, 0 errors, 0 warnings; `scripts/list-skills.sh` 24; `npm run check-plugin-version` OK at 0.1.0. Plugin validate last run on `a8ed227` (both `claude plugin validate . --strict` and `.claude-plugin/plugin.json --strict` pass); no manifest changed since.
- No CI workflows in the repo.

## 3. Completed (this round, on the work branch)

| Commit | Change |
|---|---|
| `4141454` | No changesets (user decision). `package.json`: removed `@changesets/cli` and `changeset` script; `version` script is now the npm hook `node scripts/sync-plugin-version.js`. `.claude/CLAUDE.md`: bump with `npm version <patch\|minor\|major> --no-git-tag-version`; changeset step removed from Change Workflow. `sync-plugin-version.js` comment updated. |
| `0a0a5f6` | `library.mjs`: unknown options now error with the allowed list (exit 1). `presentation-principles.md`: check headline breaks for Thai, Chinese, Japanese. |
| `95f0390` | `create-presentation/SKILL.md` route D: update hard-coded slide counts and numbers, report moved deep links, review at every target width. |
| `67ef3c2` | `library.mjs contrast`: rejects non-hex input. `styles.json`: aliases `Bauhaus`, `Bauhaus Geometric` on `geometric-composition`; `Brutalism`, `Web Brutalism` on `brutalist-editorial`. `presentation-principles.md`: confirm the drawn font, embed fonts for offline decks. Route C step 4: compare final renders with the baseline. |
| `0ce75b3`, `53a07f4` | Handoff and session log updates, including the test record. |

## 4. Test Record: `/create-presentation`

Method (repeatable): each deck is one HTML file in the scratchpad. A Node Playwright script (Chromium preinstalled at `/opt/pw-browsers`) opens each slide by `#n`, waits past transitions, screenshots at 1440x900 and 390x844, and reports page errors, slide overflow (`scrollHeight > clientHeight`), document `scrollWidth` against the viewport, and elements past the right edge; then presses Home and ArrowRight and checks the hash. Font check: CDP `CSS.getPlatformFontsForNode` on the heading and body. Em-dash scan on every file. Thai fonts came from `npm pack @fontsource/noto-sans-thai@5.0.13` and `@fontsource/noto-serif-thai@5.0.13`.

| Route | Input | Result | Defects and fixes |
|---|---|---|---|
| A new | 7-slide Thai deck introducing this repo; facts from README and library counts | Auto pick `swiss-international` + `swiss-signal` via `find --medium presentation --use "technical presentation"`; passes both widths | Thai headlines broke mid-word (nowrap spans, principle line). `find --help` returned unfiltered results with exit 0 (unknown options now rejected). |
| D continue | Same deck and brief; add a slide after slide 5 (route A in 4 stages) | Reused the flow pattern; HTML diff only the planned changes | Slide count hard-coded in 8 places (computed in script); deep link `#6` moved; reused pattern overflowed at 390px (modifier beat the mobile rule). First draft said 5 stages, which did not match `SKILL.md`; corrected to 4. |
| B options | 4-slide release notes of this branch | Shortlist: brutalist-editorial + clash-tomato-mint, oversized-type + dark-technical, japanese-minimalism + earth-tone. User picked Japanese Minimalism. Passes both widths | Serif headline never drew; embedded a 10 KB Thai serif subset as a data URI. One-word widow fixed. |
| B named | `--text` bauhaus, brutalism, blueprint, japanese, "swiss minimalism" | Last three resolved | Bauhaus and Brutalism found nothing (aliases added). |
| B own colors | `contrast "#1B4D3E" "#F4D35E"` = 6.58; short hex works | Works | `contrast green "#fff"` printed NaN with exit 0 (now exit 1). |
| C motion only | Route D deck; flow steps enter in order (12px along the flow axis, 250ms ease-out, 60ms stagger) | Baseline renders first; final frames compared pixel by pixel: 13 of 16 identical, 3 differ by one pixel at one brightness level; reduced motion shows all; re-entry replays | Added baseline comparison to route C. |

Earlier (2026-10-11, PR #6): route C color-only change tested; "Actuals in teal" leftover found and a rule added.

All test decks lived in the scratchpad and are gone. The final 8-slide deck was published as a private artifact and deleted at the user's request.

## 5. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Unknown CLI flags silently ignored | FIXED | `args()` accepted any `--x` | Per-command allowlist, exit 1 | `find --bogus x` exits 1 |
| `contrast` accepted non-colors | FIXED | No input check; `luminance` returned NaN | Hex regex before computing | `contrast green "#fff"` exits 1 |
| Common style names not found | FIXED | Missing aliases | Aliases added | `find --text bauhaus` hits |
| Thai mid-word headline breaks | FIXED in decks, guidance added | Line breaking in Chromium | nowrap spans | renders |
| Fonts fell back silently | FIXED in route B deck, guidance added | CONFIRMED: Chromium ignored woff2 files in `~/.fonts`; Thai drew in system Loma | Embed font as data URI | CDP font report |
| Hard-coded slide count | FIXED in deck, guidance added | Labels written per slide | Computed in script | aria labels "N of 8" |
| Reused pattern lost mobile rule | FIXED in deck, guidance added | `.flow.f4` more specific than mobile `.flow` | Mobile rule covers both | 390px render |

## 6. Attempts That Failed or Were Rejected

- Installing fonts into `~/.fonts` as woff2 for Chromium: does not work (CONFIRMED). Embed the font or use Google Fonts where allowed.
- Splitting route A into 5 stages on a slide: rejected, `SKILL.md` defines 4.
- Force push: denied in an earlier session. Use `git merge -s ours origin/<branch>` instead.
- `grep -P` with the U+2014 code point fails in this shell. Use `grep -c $'\u2014' <file>`.
- Rejected design (earlier): `/create-presentation` calling `/visual-production` or `/visual-style` (forbidden by `.agents/invocation.md`).

## 7. Decisions and Constraints

User decisions:
- No changesets; bump with `npm version`.
- Test content: a deck introducing this repo. Route B style: Japanese Minimalism.
- Do not open a PR or merge until told. Artifacts deleted when asked.

Agent decisions (user may reject):
- Bauhaus and Brutalism aliases.
- Test decks kept out of the repo.
- Reading another skill's `references/`, `library/`, `scripts/` is not invocation (written in `.agents/invocation.md`, from PR #6).

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract (README, `plugin.json`, `docs/<bucket>/<skill>.md`); user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 8. Files Changed (work branch against `main`)

`.claude/CLAUDE.md`, `package.json`, `scripts/sync-plugin-version.js`, `skills/productivity/create-presentation/SKILL.md`, `skills/productivity/presentation-design/references/presentation-principles.md`, `skills/productivity/visual-style/library/styles.json`, `skills/productivity/visual-style/scripts/library.mjs`, `.ai/handoff/current.md`, `.ai/handoff/sessions/2026-10-11.md`. No manifest, README, or docs page changed, so the Promotion Contract is unaffected.

## 9. Open Questions and Risks

- OPEN: PR for the work branch (waiting on the user).
- OPEN: keep or drop the Bauhaus and Brutalism aliases.
- RISK: `.claude-plugin/marketplace.json` has its own `version` (0.1.0); neither script syncs or checks it.
- RISK: `--mood` and `--use` are free text with no listed values (`--use explainer` matched nothing).
- RISK: `visual-production` still lists presentations in its description while the router sends presentations to `/create-presentation`.
- UNKNOWN: whether `npx skills add` keeps sibling skill folders so `../visual-style/` resolves.
- UNKNOWN: deleted artifacts were never opened after publishing; Google Fonts were never seen rendering (blocked in the container).

## 10. Next Actions, in priority order

1. Ask the user whether to open a PR from `claude/setup-workflow-xd5lho` into `main` (body: changeset decision plus fixes from the four-route test).
2. Ask whether to keep the Bauhaus and Brutalism aliases.
3. If wanted: add a way to list `mood` and `use_cases` values (for example `library.mjs vocab`), and sync or check the `marketplace.json` version.
4. Optional: real reference images per style under `library/references/<style-id>/`, registered in `styles.json`, then `check`.

## 11. Exact First Step for the Next Session

Do NOT reset the branch to `main`: it holds unmerged work. Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log --oneline origin/main..HEAD`. Success check: branch matches its remote at `53a07f4` or later and shows the commits in section 3. Then run `node skills/productivity/visual-style/scripts/library.mjs check` (0 errors) and `scripts/list-skills.sh | wc -l` (24). If the PR has since been merged, restart the branch from `origin/main` and push with `git merge -s ours origin/claude/setup-workflow-xd5lho` first (no force push).

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ: branch claude/setup-workflow-xd5lho มีงานที่ยังไม่เข้า main
(ไม่ใช้ changeset, แก้ library.mjs, aliases Bauhaus/Brutalism, คำแนะนำ presentation และ route C/D จากการทดสอบ /create-presentation ครบ 4 route).
ห้าม reset branch ไป main. เช็ก git log origin/main..HEAD แล้วรัน library.mjs check และ list-skills.
จากนั้นถามฉันว่าจะเปิด PR หรือไม่ และจะเก็บ aliases Bauhaus/Brutalism ไหม.
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash, Promotion Contract) และอย่าเปิด PR หรือ merge จนกว่าฉันจะสั่ง.
```
