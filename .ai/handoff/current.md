# Handoff: ai-product-workflow-skills

Updated: 2026-10-15 (evening). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills) and the private Visual Style Library gallery artifact; make presentations with `/create-presentation`.
- This session: port the gallery-only styles into the repo, delete Chrome Anime, then fix gallery usability (color tap vs palette, Apply flow, color filter), add a one-line command handoff, and add a Thai interface toggle.
- Next milestone: none requested. Remaining items are listed in section 10.

## 2. Current Status

- CONFIRMED: branch pushed and in sync with origin at `96d99f6`. Working tree clean except this file.
- CONFIRMED: gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 17, 27 files: 76 styles, 30 palettes, 9 presets, Guide tab, Works tab (4 decks).
- CONFIRMED: repo library and gallery data are identical (`styles.json`, `palettes.json`, `presets.json`, profile md files). Repo `library/gallery.html` equals gallery `index.html` except the publish wrapper (first line) and the closing tags.
- CONFIRMED: `node scripts/library.mjs check` (from `skills/productivity/visual-style`): 76 styles, 30 palettes, 9 presets, 0 errors, 0 warnings.
- UNKNOWN: behaviour on a real phone in the Claude app (only Playwright 390x844 tested); a real `/create-presentation` run with the new one-line command (not run end to end).

## 3. Completed

Commits this session (all on the work branch):

1. `7d56465` Port and delete:
   - 22 styles (`design-movements`, `digital-ui` categories), 3 palettes (`mid-century`, `neon-noir`, `aurora`), 3 presets (`saas-product-site`, `youth-event-pop`, `app-interface-glass`) moved from gallery to repo, with optional fields `summary_th` and `research` (`verified`/`unverified`).
   - `chrome-anime` style deleted everywhere (user decision): styles.json entry, profile section, `references/chrome-anime/` images (repo `example-01.webp`; gallery `example-01.webp` and `user-01.webp`), `chrome` SVG renderer. y2k and cyberpunk "Differs from" and `related_styles` rewritten. Palette `chrome-noir` kept (other styles use it).
   - `library.mjs`: `find --text` also searches `summary_th`; `check` validates `research` values.
   - Docs: `library-schema.md` (new fields, Guide tab), `docs/productivity/visual-style.md` (76 styles, 13 categories, 30 palettes).
   - Repo JSON kept in its compact format with a formatter that reproduced the old files byte for byte before merging.
2. `d86e5f5` Issue 3 and 2 (wording only): Pick a color says taps only search; wall row renamed "Search with your colors"; toast "Showing palettes with X. Your selected colors did not change"; result note "Your selection is still X"; tray marks the missing half "Optional" and shows "enough to apply"; review dialog notice when style or colors are missing; help text.
3. `c203ce7` Issue 1: Styles color filter options read "Works with ...", filter labelled Colors; a note says it only narrows the list, with "Select <palette>" button or a link to Colors; card sketch tag names its palette.
4. `96d99f6` One-line command and Thai toggle:
   - Apply defaults to a command, e.g. `/create-presentation style=art-deco palette=noir-gold` plus constraint lines. Keys: `preset=`, `style=`, `palette=`, `colors=` (6 HEX without `#`, order primary, secondary, accent, background, surface, text), `use=` (only for `/visual-style`). Tabs Command / Full prompt / JSON.
   - Shared spec in `skills/productivity/visual-style/references/style-direction.md` > Gallery command; pointers in `visual-style/SKILL.md` step 1 and `create-presentation/SKILL.md` route B. Rule: always load every id with `library.mjs`; complete a missing half with the shortlist; report unknown ids; mention `research: unverified`.
   - ไทย / EN button: `TH` phrase table plus `TH_RX` patterns applied by a MutationObserver to text nodes and placeholder/aria-label/title. Skips `svg, pre, code, textarea, #guide-body, .hex, .ch, .fact p, [data-no-tr]`. Help dialog has a separate Thai version. Language stored in localStorage `vsl2-lang`; default Thai when the browser language is Thai. Library data (names, profiles) stays English.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Tapping a single color looked like it changed the palette | FIXED (wording) | Tap only runs `setPick`; nothing said so | Intro, label, toast, result note | Playwright: tray palette unchanged after tap, texts as expected |
| Unclear whether Apply needs both style and colors | FIXED (wording) | `1 of 2 chosen` hidden on phones | "Optional" slot text, notice in review, help | Playwright 390x844 |
| Styles color filter looked like a selection | FIXED | Filter recolors cards, options named "Palette: X" | Renamed options, note with Select button, palette name on sketch tag | Playwright; chip text "Colors: Works with ..." (duplicate "Works with" fixed by relabelling) |
| Copying a long handoff on a phone is hard | FIXED | Handoff was 40 to 60 lines | One-line command default | Commands for library palette, custom colors, preset all produced correctly |
| Thai search misses words in the middle of Thai text (e.g. ฟองอากาศ 0 results, ขั้นบันได 0, ดาว 2 of 3) | OPEN, CONFIRMED | `textHas` regex requires a non-Thai char before the term; Thai has no spaces | Not fixed. Fix: for terms containing Thai chars, use plain `includes` | Playwright search counts vs `summary_th` contents |
| `desert-stone` note wrong (Rust on Basalt 2.28:1) | OPEN | from before | Not fixed; listed in Guide | `library.mjs contrast "#A0462A" "#2E2B28"` |
| Selected style disappears silently when a filter excludes it (issue 4) | OPEN | No notice | Not fixed | Code reading |
| "Apply" wording implies a commit step (issue 5) | OPEN | Apply only builds copy text | Not fixed; suggested rename e.g. "Copy handoff" | Code reading |
| Diagram labels small on phone in Motivate deck | OPEN, accepted | SVG scales down | deck is for projection | earlier renders |

## 5. Attempts That Failed or Were Rejected

- Playwright `page.goto(url#hash)` on the same page does not reload, so the `#style-id` deep link test timed out; open the dialog by clicking `[data-detail=...]` instead.
- The ไทย / EN button cannot be clicked while a modal dialog is open (dialog intercepts pointer); code that re-rendered help on toggle was removed as unreachable.
- First translation pattern `X on Y` was too broad (would garble palette contrast notes); narrowed to short capitalised names.
- `pkill -f "http.server 8765"` exits 144 in this sandbox but stops the server; harmless.
- Rejected by user earlier: product-style workflow for research, auto-calling user-invoked skills, Supabase hosting.

## 6. Decisions and Constraints

User decisions:
- Port the gallery-only styles into the repo (done). Delete Chrome Anime as a whole style, not only the image (asked explicitly).
- Fix order chosen by user: 3, 2, then 1, then the one-line command (option A), plus a Thai toggle.
- Decks stay out of the repo; finished decks go to the gallery Works tab only after the user has seen them.
- No auto-calling of user-invoked skills.

Agent decisions (user may reject):
- Option B (gallery saves selection to artifact storage so no copy is needed) not built; possible later on top of A.
- Thai toggle translates interface only; library data stays English (cards already show `summary_th`).
- Chrome-noir palette kept after deleting chrome-anime.

Gallery publishing rules (IMPORTANT):
- Gallery has `works.json` + `works/` (4 decks) that the repo does not. Never publish in a way that drops them; files left out of a publish are kept.
- To change the gallery: `Artifact read` the URL (no path), Read every line of the saved HTML, edit, publish `index.html` (plus only changed data files) to the same URL. The publish source used this session was a scratchpad copy; expect it gone. Rebuild it from the live artifact or from repo `gallery.html` (replace the repo's first 5 head lines with nothing and keep the body; the artifact wrapper is added at publish).
- Every gallery code change must be applied to both repo `gallery.html` and the published `index.html`. This session used one Python replace script per change against both files (each replacement asserted to match exactly once).

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed (this session)

- `skills/productivity/visual-style/library/styles.json`, `palettes.json`, `presets.json`, `gallery.html`
- `skills/productivity/visual-style/library/styles/design-movements.md` (new), `digital-ui.md` (new), `illustration-character.md`
- `skills/productivity/visual-style/library/references/chrome-anime/example-01.webp` (deleted)
- `skills/productivity/visual-style/scripts/library.mjs`
- `skills/productivity/visual-style/references/library-schema.md`, `style-direction.md`
- `skills/productivity/visual-style/SKILL.md`, `skills/productivity/create-presentation/SKILL.md`
- `docs/productivity/visual-style.md`
- `.ai/handoff/current.md` (this file; uncommitted)
- Gallery artifact: v14 (data, profiles, image deletions, index.html), v15, v16, v17 (index.html only).

## 8. Validation and Evidence

- `library.mjs check`: 0 errors, 0 warnings. `find --text กระจก` returns glassmorphism.
- `library.mjs style art-deco` returns all metadata plus 14 profile fields; `palette noir-gold` returns roles, contrast table, avoid pair; unknown id prints `Unknown style "..."`; `retro-futurism` shows `research: unverified`. So the one-line command gives the skill a superset of the old long handoff (which carried 6 profile fields).
- Playwright (local `python3 -m http.server` in `library/`), 1440x900 and 390x844: no page errors; style counts; dialogs; pick flow; filter note; review notice; commands for palette, custom colors, preset; Thai crawl of all screens leaves only library data in English; toggling back restores English.
- No em-dashes in changed files.
- NOT verified: real phone in the Claude app; clipboard behaviour inside the app; an actual `/create-presentation` session consuming the command.

## 9. Open Questions and Risks

- Thai search bug (section 4) affects searches for Thai words not in the keyword map.
- Two copies of the gallery (repo and published) can drift; a build script that produces the publish file from repo `gallery.html` was proposed, not built.
- Previews are synthetic for 75 of 76 styles; only `vintage-rubber-hose` has a reference image. Needs licensed images, not code.
- Translation is pattern based: new English UI strings added later will show in English in Thai mode until added to `TH`/`TH_RX` in `gallery.html`.
- Selection lives in browser localStorage only.
- Shareable deck link https://claude.ai/artifact/NFagUhWkbnoefD4trdcpCc (Motivate Employees) is still private until the user changes Share.

## 10. Next Actions, in priority order

1. Fix Thai search: in `gallery.html` `textHas()` (search for `function textHas`), when the term contains Thai characters use `text.includes(term)`; keep word-start matching for Latin. Apply to repo and published copies; verify ฟองอากาศ finds y2k and ขั้นบันได finds art-deco.
2. Ask the user whether to do issue 5 (rename Apply, e.g. "Copy handoff" / "คัดลอกคำสั่ง") and issue 4 (notice when the selected style is filtered out).
3. Ask the user about the `desert-stone` note and the Bauhaus/Brutalism aliases (agent recommends keep).
4. Optional: build script for the publish copy; option B (no-copy handoff via artifact storage).
5. If the user reports wrong or missing Thai text: add the exact English string to `TH` or a pattern to `TH_RX` in both copies.

## 11. Exact First Step for the Next Session

Run `git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline`. Success check: `96d99f6` (or a commit of this handoff after it) on top. For any gallery work, start with `Artifact read` of TEgWtaAsxAdNuhwVjhX1QT and confirm it is version 17 or later.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
gallery TEgWtaAsxAdNuhwVjhX1QT v17: 76 สไตล์ 30 พาเลตต์ 9 presets ข้อมูลตรงกับ repo แล้ว ลบ chrome-anime แล้ว
มีคำสั่งบรรทัดเดียวใน Apply และปุ่ม ไทย/EN แล้ว
แก้ gallery ต้องแก้ทั้ง repo gallery.html และไฟล์ที่ publish และห้ามทำ works 4 งานหาย
งานค้าง: บั๊กค้นหาคำไทยกลางประโยค, ข้อ 4/5 (แจ้งเตือนสไตล์ถูกกรองหาย, ชื่อปุ่ม Apply), note desert-stone, aliases Bauhaus/Brutalism
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
