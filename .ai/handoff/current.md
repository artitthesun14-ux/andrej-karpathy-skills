# Handoff: ai-product-workflow-skills

Updated: 2026-10-15. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. Single self-contained file (user asked for one file). Earlier history: `sessions/2026-10-11.md`; previous versions of this file in git (`c95ea66`, `8cbe20b`, `1ac7392`, `f9cca0a`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` (24 skills) and the private Visual Style Library gallery artifact; make presentations with `/create-presentation`.
- This session: `/research` on visual styles (luxury, minimal, and beyond), grid, motion, fonts, design systems. Delivered as data files, then merged into the gallery artifact. Fixed a scroll jump in the gallery's color picker.
- User said the research is for reference data only ("ไม่ได้จะสร้างโปรดัก"), not a product build. Do not push it into the `/grill-with-docs` workflow unless asked.
- Next milestone: none requested.

## 2. Current Status

- CONFIRMED: branch in sync with origin at `c95ea66`. No repo files changed this session except this file (uncommitted).
- CONFIRMED: Gallery artifact https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT at version 13, 29 files: 77 styles, 30 palettes, 9 presets, new Guide tab, Works tab still 4 works.
- CONFIRMED (2026-10-15, later): the 22 new styles, 3 palettes, 3 presets, `summary_th`, `research`, and the Guide tab were ported into the repo library, and the `chrome-anime` style was deleted from both repo and gallery (user request). Library now: 76 styles, 30 palettes, 9 presets; `library.mjs check` passes. Repo `gallery.html` now matches the gallery `index.html` (except the publish wrapper).
- REPORTED by user (from a phone screen recording): Pick a color jumped up on every tap. Fix published in v13; not yet confirmed by the user on a real phone.

## 3. Completed

Research (no repo change):
- Notes in chat: luxury/minimal palettes from the library, 8pt grid, 12/8/4 columns, productive vs expressive motion (Carbon), M3 easing curves, DTCG 2025.10 tokens, Latin and Thai font pairs.
- Files sent to the user (scratchpad, expect gone): `style-research.html` (visual, swatches) and `style-reference.md` (data file the user preferred). The user re-uploaded `style-reference.md`; it has 55 library styles with Thai one-liners, 22 outside styles, 27 palettes, foundations, job table, sources.

Gallery v12 (merged the research):
- `summary_th` (Thai summary) on all 55 existing styles; cards show Thai, dialog shows both; Thai text indexed in search.
- 2 new categories with profile files: `design-movements` (art-deco, art-nouveau, mid-century-modern, memphis, maximalism, retro-70s, y2k, vaporwave, cyberpunk, retro-futurism, scandinavian) and `digital-ui` (glassmorphism, neumorphism, claymorphism, neo-brutalism, bento-grid, flat-material, skeuomorphism, aurora-gradient, dark-tech-saas, flat-illustration-people, dopamine-design). 22 new SVG preview renderers in `index.html` (`R` object).
- New field `research: "verified" | "unverified"`; 8 unverified styles show a dashed "ยังไม่ตรวจแหล่ง" tag and a notice in the dialog: retro-futurism, scandinavian, neumorphism, claymorphism, skeuomorphism, aurora-gradient, flat-illustration-people, dopamine-design. (The user was told 9 in chat; the data has 8.)
- New medium `app` (label "app UI") in vocabulary.
- 3 palettes: `mid-century` (warm), `neon-noir` (experimental), `aurora` (pastel). Text pairs checked by script (body >= 4.5:1, large >= 3:1); shares sum to 100.
- 3 presets: `saas-product-site`, `youth-event-pop`, `app-interface-glass`.
- Guide tab (คู่มือ, Thai): pick by job (12 jobs, chips open styles/palettes), spacing scale and column demo, easing demo (play 600/1200 ms, respects reduced motion), 11 Latin + Thai font pairs (Google Fonts loaded lazily on first open), color rules, DTCG token example, unverified list, 21 sources.
- More Thai search words (เรโทร, กระจก, นีออน, ไล่สี, แอป, แดชบอร์ด, วัยรุ่น, เกม, ...). Help dialog mentions the Guide.

Gallery v13: Pick a color no longer scrolls when tapping a color while already in Pick mode (keeps `scrollY`, shows a toast "<name> <hex> picked. Results updated"). Taps from dialogs or other tabs still navigate and scroll to the result.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Pick a color jumps up on every color tap (phone) | FIXED, not confirmed by user | Click handler for `data-sw` always ran `#picked-anchor.scrollIntoView` | When already on Colors > Pick and not in a dialog, restore `scrollY` and toast instead | Playwright 390x844 touch: scrollY before = after on 3 taps, no page errors |
| Thai text in style data | FIXED | Library summaries English only | `summary_th` field | v12 render |
| `desert-stone` note wrong (Rust on Basalt 2.28:1) | OPEN | from before | PR #8 follow-up, not fixed; listed in Guide | `library.mjs contrast "#A0462A" "#2E2B28"` |
| Diagram labels small on phone in Motivate deck | OPEN, accepted | SVG scales down | deck is for projection | earlier renders |

## 5. Attempts That Failed or Were Rejected

- Rejected by user: a product-style workflow for the research (wanted data only).
- First file format (HTML page) was not what the user wanted; they asked for a plain data file, then for it to go into the gallery.
- `pkill -f "http.server 8765"` returns exit code 144 in this sandbox but still stops the server; harmless.
- Earlier sessions: `rm -f shots/*` after `cd` blocked by safety check (use a fresh folder); Supabase hosting rejected; auto-calling user-invoked skills rejected.

## 6. Decisions and Constraints

User decisions:
- Research goes into the gallery: add what is missing, skip what exists, extra improvements allowed.
- Decks stay out of the repo; artifacts only. `/create-presentation` adds finished decks to the gallery after the user has seen them.
- No auto-calling of user-invoked skills. Chrome Anime style deleted everywhere (user, 2026-10-15).

Agent decisions (user may reject):
- New styles kept in the gallery only (not the repo library), because the repo needs validation and the user did not ask for repo changes.
- New profiles written in English to match existing profile files; Thai in `summary_th` and the Guide.
- Unverified styles are labelled instead of omitted.

Gallery artifact differs from the repo (IMPORTANT):
- Gallery has (repo does not): `works.json` + `works/` (4 decks). Everything else in the library now matches the repo. Never republish the gallery without `works.json` and `works/`.
- To change the gallery: `Artifact read` the URL (no path), Read every line of the saved HTML, read changed data files by `path`, edit, publish `index.html` plus only new or changed files (other files are kept).
- Build sources from this session were in scratchpad `gal/` (`new-data.mjs`, `gen.mjs`, `contrast.mjs`, `out/`). Expect them gone; read the live files from the artifact instead.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; Promotion Contract; user-invoked skills need `disable-model-invocation: true`, `openai.yaml`, a `workflow-router` row, and never call each other.

## 7. Files Changed

- Repo: `.ai/handoff/current.md` only (uncommitted).
- Gallery v12: `index.html`, `styles.json`, `palettes.json`, `presets.json` changed; `styles/design-movements.md`, `styles/digital-ui.md` added. v13: `index.html` only.

## 8. Validation and Evidence

- Data generator checks: every style tag in vocabulary, every palette/related style/preset reference exists, text-pair contrast thresholds, shares = 100, no em-dash in new data files.
- Playwright (local server) 1440x900 and 390x844: no page errors, no horizontal overflow, new category grids, glass dialog, Guide tab rendered. 404s only for gallery files not copied locally (other profiles, images).
- Published file list after v12: 29 files, all 27 previous files present.
- NOT verified: the gallery inside the Claude phone app after v12/v13; Thai rendering of fonts other than Playfair, Inter, Noto Serif Thai, Noto Sans Thai in real work; M3 and Carbon duration numbers (secondary sources).

## 9. Open Questions and Risks

- OPEN (PR #8 follow-up): fix `desert-stone` note in `skills/productivity/visual-style/library/palettes.json`; keep or drop Bauhaus and Brutalism aliases (agent recommends keep).
- RISK: republishing the gallery from repo files would drop all gallery-only content above.
- Shareable deck link https://claude.ai/artifact/NFagUhWkbnoefD4trdcpCc (Motivate Employees) is still private until the user changes Share.

## 10. Next Actions, in priority order

1. If the user reports the color picker still jumps: get a new recording, extract frames with `ffmpeg -vf "fps=1,scale=360:-1,tile=6x2"`, and check the `ds.sw` branch of the document click handler in the gallery `index.html`.
3. Ask the user about the `desert-stone` note and the aliases.

## 11. Exact First Step for the Next Session

Run `git fetch origin main claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -3 --oneline`. Success check: `c95ea66` on top (or this handoff committed after it). Then wait for the user's request; for any gallery work, start with `Artifact read` of TEgWtaAsxAdNuhwVjhX1QT.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
gallery artifact TEgWtaAsxAdNuhwVjhX1QT อยู่ที่ v13: 76 สไตล์ 30 พาเลตต์ 9 presets มีแท็บ Guide และแก้ Pick a color ไม่ให้เด้งแล้ว
สไตล์ใหม่ 22 ตัวย้ายเข้า repo แล้ว (76 สไตล์ 30 พาเลตต์ 9 presets)
ห้ามเขียนทับ gallery จนทำให้ works 4 งานหาย (ข้อมูล library ตรงกับ repo แล้ว ลบ chrome-anime แล้ว)
งานค้าง: note palette desert-stone และ aliases Bauhaus/Brutalism
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
