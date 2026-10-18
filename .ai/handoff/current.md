# Handoff: ai-product-workflow-skills

Updated: 2026-10-18 (fourth session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. One self-contained file, because the user asked for one. Earlier history: `sessions/2026-10-11.md`, plus older versions of this file in git (`7c67075` has the AI chatbot deck session; `30457aa` has the Luxury Minimalism session; also `e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and use `/visual-style` and `/create-presentation` to make real works.
- This session:
  1. Read the previous handoff and ran its first-step check (all passed).
  2. `/visual-style palette=forest-sage-ivory`, built in **Canva** (not HTML): a Thai class deck "Starbucks Korea: แคมเปญ Tank Day ที่กลายเป็นวิกฤตระดับประเทศ", a risk management analysis with 5 topics, speaker notes, and a coffee cup motif.
  3. Answered how to animate in Canva (Canva Help Center via `mcp__Canva__help`).
  4. Follow-up from the user: filled their new blank page 2 with a detailed event timeline, and reworked topic 2 (Risk Matrix) to match the course slide (photo the user sent), with fuller wording.
- Success: an editable Canva file with facts sourced, analysis labelled, notes on every slide, palette colors, and no Starbucks branding or violent imagery. Met, except the items in sections 4 and 9.

## 2. Current Status

- CONFIRMED: Canva design `DAHYV68zUwE`, title "Starbucks Korea Tank Day", 9 pages, saved (both editing transactions committed). Edit link: https://www.canva.com/d/6AgFK8e4rTJtfBc (view: https://www.canva.com/d/OkboyTCsrHDMkP9). Not shared, not published.
- CONFIRMED: repo working tree clean at `7c67075` before this file was written. This file is uncommitted; commit only if the user asks.
- UNKNOWN: the user's verdict on the latest page 2 and topic 2 changes. They had not replied yet.
- Page order now (page ids for `edit-design`):
  1. Cover `PBpkpcPkRqjxjLCY` (plain cup)
  2. Timeline `PBXGz8wRqwxVMmd2` (added by the user, filled by the agent)
  3. Event summary `PBcGL9p0V2YSM3m5` (cracked cup)
  4. Topic 1 causes and risk types `PBWhD0fjH9DHLKzP`
  5. Topic 2 Risk Matrix `PBNbRLR2VjzrHK54`
  6. Topic 3 4T `PBdkVwbH1bwb5bsr`
  7. Topic 4 prevention, response, recovery `PBrnpwH0MfMdf4QM` (repaired cup)
  8. Topic 5 LogisTech Intelligence `PBhp17R2ZlyybwfM` (cup with lid, sleeve, saucer)
  9. References `PBR8xsPRbRsnCp1G`

## 3. Completed

1. **Fact check** (web): campaign, Gwangju 1980 and Park Jong-chul 1987 meaning, apologies, CEO dismissal, complaints, police raid, new CEO, card spending, Q2 loss. 10 sources, listed on slide 9 and in full (with URLs) in slide 9 notes.
2. **Style:** user chose Material-Led Packaging from a shortlist of 3 (palette given, style missing, so the agent asked). Text recolored to Forest `#1F3B2D` and Ivory `#F6F1E4`. Contrast Forest on Ivory 10.82.
3. **Canva build:** `create-design` with brief and outline, then many `edit-design` passes: typo fixes, citations, analysis labels, Input/Process/Output/Feedback labels, owner and KPI line on topic 5, speaker notes on all pages (with an `[แผนแอนิเมชัน]` block each).
4. **Page 2 timeline:** ivory background reused from media `MAHYV-PIqcE`, 6 cards (15-18 พ.ค., ทำไมเป็นปัญหา, 18-19 พ.ค., 20-26 พ.ค., มิ.ย.-ส.ค., ก.ค.-ต.ค.) with source numbers, notes about 1 minute.
5. **Topic 2 rework:** Likelihood is now the horizontal axis and Impact vertical (course convention); grid narrowed to x 860-1760; cups moved; levels table added with course thresholds 1-4 ต่ำ, 5-9 ปานกลาง, 10-15 สูง, 16-25 สูงมาก and their meanings; R1-R5 names, Inherent and Residual spelled out; notes rewritten.
6. Scores (agent analysis): Inherent R1 20, R2 16, R3 12, R4 12, R5 9. Residual R1 8, R2 6, R3 6, R4 4, R5 4.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Canva generated typos (ตนโต๊ะ, ฮ่อนไหว, ซม., ส่งกลัน) | FIXED | AI generation | `find_and_replace_text` | thumbnails after edit |
| Generated matrix cups did not match scores | FIXED | random placement | deleted extras, repositioned 10 cups, added score labels | page 5 thumbnail |
| Grid image cropped after resize | FIXED | resize keeps image box | `crop_media` to 900 x 788.48 | page 5 thumbnail |
| Added text came out 16 px black, other font | MITIGATED | `add_text` defaults; no font-family operation | size and color fixed by `format_text`; font still differs | element fontRef `YACgEZ1cb1Q` vs `YAFdJvhjN5k` |
| Animations not set | OPEN (tool limit) | Canva MCP has no animation operation; Help Center says order and on-click are not supported | plan written in notes; told the user | `mcp__Canva__help` answer |
| Grid shading is a smooth gradient, not the 4 course bands | OPEN (minor) | shading is a generated image | levels table and score labels carry the meaning | page 5 |
| Page 3 summary partly repeats page 2 timeline | OPEN | user added page 2 later | asked the user whether to keep or delete | none |
| Read output truncated at 100k chars | WORKED AROUND | large design JSON | read one page per call | tool notice |

## 5. Attempts That Failed or Were Rejected

- Slides Artifact type and HTML deck: not used; the user asked for Canva.
- Splitting slides to fake step-by-step animation: offered, not started (no page-duplicate operation; would need rebuilding elements). User has not chosen.

## 6. Decisions and Constraints

User decisions:
- Palette forest-sage-ivory, style Material-Led Packaging, built in Canva.
- Do not share, publish, or move other Canva files.
- Approved both commits after preview.
- Follow the course Risk Matrix convention (photo: Likelihood horizontal, 4 levels 1-4 / 5-9 / 10-15 / 16-25).

Agent decisions (the user may reject):
- 5 risk types (Reputational, Operational, Financial, Compliance/Governance, Strategic); all scores and the 4T mapping are the presenter's analysis.
- LogisTech Intelligence interpreted per the prompt (no course definition given), labelled on the slide.
- Death toll not stated (sources differ); stock price marked unconfirmed.
- Thai name spellings: อี แจมยอง, ซน จองฮยอน, ชอง ยงจิน, ปัก จงชุล.

Tool rules: `edit-design` needs a preview and the user's approval before `commit`. Existing media ids can be reused with `insert_fill`.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; keep the JSON hand formatting.

## 7. Files Changed

- Repo: only this file (uncommitted).
- Scratchpad (ephemeral, `/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/tankday/`): `notes.md` (notes source and full references, pages 1 and 3 to 9 in old numbering S1 to S8), `ops*.json`, `p2a.json`, `p5.json` (operation batches), `design.txt` (truncated first read).
- The Canva file is the durable copy; notes can be read back with `read-design` field `presenter_notes`.

## 8. Validation and Evidence

- Every edit checked against the returned thumbnail and element JSON; both transactions returned `committed`.
- After the first commit, pages 1 and 8 notes were read back and matched.
- NOT verified: Present mode in Canva, a phone, actual speaking time of notes (estimated from character counts), and pages 2 and 5 notes read back after the second commit.

## 9. Open Questions and Risks

- Keep or delete page 3 (summary) now that page 2 has the timeline?
- Expand short wording on other slides too (topic 1, 4T table, topic 4 flow)? Offered, no answer.
- Split slides to simulate step-by-step reveals? Offered, no answer.
- Facts are as of 2026-10-18; the police investigation is ongoing.

## 10. Next Actions, in priority order

1. Get the user's feedback on pages 2 and 5. For edits: `read-design` with `open_transaction: true` on one page, `edit-design` with `keep_open`, show the thumbnail, ask, then `commit`.
2. If asked: delete or shorten page 3; expand wording on pages 4, 6, 7.
3. If asked: build split-slide reveals (start with topic 4).
4. Carried over from `7c67075`: the AI chatbot deck (artifact NjR1vHeghHG9RemNhgkVaQ) still awaits feedback and a gallery yes; gallery TEgWtaAsxAdNuhwVjhX1QT is v24 with 7 works.

## 11. Exact First Step for the Next Session

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -2 --oneline
```

Then load the Canva tools (`ToolSearch` "select:mcp__Canva__read-design,mcp__Canva__edit-design") and run `read-design` on `DAHYV68zUwE` with fields `design_metadata`, `page_metadata`. Success check: 9 pages, ids as in section 2.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุด: ทำพรีเซนเทชัน Canva "Starbucks Korea Tank Day" (design DAHYV68zUwE, 9 หน้า, บันทึกแล้ว) สไตล์ Material-Led Packaging + forest-sage-ivory
เพิ่งเติมหน้า 2 ไทม์ไลน์ และปรับหัวข้อ 2 Risk Matrix ตามเกณฑ์อาจารย์ (Likelihood แนวนอน, ระดับ 1-4/5-9/10-15/16-25) รอผู้ใช้ตอบว่าพอใจไหม
แก้ Canva ต้องแสดงตัวอย่างและให้ผู้ใช้อนุมัติก่อน commit ห้ามแชร์หรือ publish ตั้งแอนิเมชันผ่านเครื่องมือไม่ได้
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
