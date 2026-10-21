# Handoff: ai-product-workflow-skills

Updated: 2026-10-21. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. One self-contained file, because the user asked for one. Earlier history: `sessions/2026-10-11.md`, plus older versions of this file in git (`f856a76` JD store rules deck in gallery; `e99cd36` Tank Day motion deck; `8882233` Canva Tank Day; `7c67075` AI chatbot deck; older: `30457aa`, `e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and make real works for the user.
- This session: a Thai exam-prep document for 90643026 Investment Planning (KMITL, ภาคเรียนที่ 1/2569) that answers the essay exam (3 main questions, 9 subparts). Deliver `.docx` and `.pdf` from the same docx, in the page layout of group 5's report "การจัดพอร์ตการลงทุน".
- User's Definition of Done (from their prompt): Letter, 1 in margins; TH SarabunPSK 14 pt body, 1.15 spacing, 0.5 in first-line indent; 16 pt bold headings (subheadings underlined); cover and numbered references like the template; all 9 subparts with lists plus examples; 1.2 has reasons, expected-return table (2,000,000 baht, 120,200 baht, 6.01%) and a picture; at least 6 figures with Thai alt text and the "ภาพประกอบเพื่ออธิบาย ไม่ใช่สัดส่วนจริง" label on conceptual ones; every external fact has a citation number, a date and a link; unconfirmed points say "ยังไม่มีข้อมูลยืนยัน"; analysis starts with "บทวิเคราะห์" and is conditional; no group 5 member names; every PDF page checked as an image; target 12-18 pages.
- Latest user request (2026-10-19): "อยากได้ครับตอบแบบเป็นนักศึกษากำลังจะเรียนจบ เตรียมตัวเริ่มทำงานเป็นครั้งแรก แต่มีประสบการณ์การทำงาน part time". Rewrite the answers in that student's voice.

## 2. Current Status

- CONFIRMED: v1 (neutral voice, 25 pages) was sent to the user as .docx and .pdf.
- CONFIRMED: v2 (persona voice) is built but **not sent and not fully reviewed**: `out/สรุปเตรียมสอบ_Investment_Planning.docx` and `.pdf`, 26 pages, 8 figures, 8 tables. Pages 3, 10 and 18 were rendered (`out/q-*.png`) but not looked at yet.
- CONFIRMED: both versions are over the 12-18 page target. Pages are nearly full (text reaches y≈700 of 720 pt on most pages), so the length is real content. The gaps come from figures that do not fit the rest of a page.
- UNKNOWN: whether "อยากได้ครับ" also meant yes to my offer to cut to ≤18 pages. I took it as yes, trimmed, and only got from 27 to 26. The user has not been told v2's page count yet.
- All work files are in the ephemeral scratchpad `S=/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/inv`. They still existed on 2026-10-21. Nothing is in the repo. If `S` is gone, only v1 survives (in the user's chat as sent files).
- Repo: clean at `f856a76` before this file. Only this file changes; commit only if the user asks.

## 3. Completed

1. Read both PDFs. Template: Word export, TH SarabunPSK, Letter. Body line pitch measured at 21.24 pt (pdftotext bbox). Headings: "1." bold 16; "2.1" bold 16 underlined. Tables in the template are Excel images (navy header, green total row). Exam sheet: CordiaNew, 1 page. The prompt named `c6ebe480-...` paths; the real uploads are `/root/.claude/uploads/b09ba2f5-ac02-5876-89f3-6b949654719d/495420e9-...pdf` (template, 11 pages) and `bf8eb1f8-...pdf` (exam). Copies are in `S/src/`.
2. Asked about the visual style (the prompt's Handoff slot was empty). User chose "เรียบ ๆ ให้เข้ากับรายงาน": navy/blue tones, Laksaman font in figures, readable in black and white.
3. Research by 5 subagents, saved in `S/research/` (`tax.md`, `sources_brokers.md`, `macro.md`, `verify_examples.md`, `firstjob.md`), each fact with URL and date, accessed 2026-10-19.
4. Recomputed the portfolio with scripts (`build/calc.py`): total 2,000,000; return 120,200 (6.01%); value after 5 years 2,677,713.87 (+33.89%, no rounding per year). It matches the report.
5. Built 8 figures as HTML, rendered to PNG at 2x with Playwright (`build/render.js`): roadmap, compounding, donut, tax table, investor status, risk staircase, situation map, decision tree.
6. Built the docx with docx-js (`build/build.js`, content in `content.js`, `part13/2/23/31/32/33.js`, `refs.js`, `doc.js`) using real styles, numbering and tables. Post-processing in `build/fixstyles.py` removes duplicate default Heading1-3 styles. `validate.py` from the docx skill passed.
7. v2 persona changes: intro "มุมมองของคำตอบ"; 1.1 rewritten (age 22, part-time 8,000/month, savings 20,000, first salary 25,000, budget table, emergency fund plan; all labelled สมมติ); 1.2 own-money paragraph; 1.3 first-salary tax table; 2.2, 2.3, 3.1 and 3.3 reframed; roadmap figure relabelled; condensed 1.3, 2.1, 3.2 and the dividend-credit example.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| TH SarabunPSK not installable | MITIGATED | no verified download source (GitHub mirrors 404, npm has only Sarabun / TH Sarabun New) | docx keeps "TH SarabunPSK". PDF uses `~/.fonts/lakrep/LaksamanReport-*.ttf`, a Laksaman copy (apt `fonts-tlwg-laksaman`) with line metrics set to ascent 960 / descent 359, aliased in `~/.config/fontconfig/fonts.conf` | `fc-match "TH SarabunPSK"` gives Laksaman Report; PDF pitch 21.2 pt equals the template |
| PDF lines overlapped and images were clipped to one line | FIXED | docx-js wrote `w:line="276"` without `lineRule`, and LibreOffice read it as exact 13.8 pt | `lineRule: AUTO` everywhere; image paragraphs use single spacing | re-render |
| Duplicate Heading1-3 styles in styles.xml | FIXED | docx-js defaults plus my custom styles | `fixstyles.py`, run after every build | styles.xml check |
| "→" fell back to other fonts (Inter, FreeSans) | FIXED | Laksaman has no U+2192 | replaced in body text (figures keep it, rendered by Chromium) | `pdffonts` shows only LaksamanReport |
| Over 18 pages | OPEN | content volume plus 8 figures plus about 56 references (3+ pages at 12 pt) | figures at 4.8 in, tables and references at 12 pt, references merged and trimmed; 32 to 25 (v1), 26 (v2) | `pdfinfo` |
| Group 5 report figures differ from sources | REPORTED to user (v1) | report errors | SCBGQUAL(A) factsheet (31 Aug 2569): 1-year 16.17%, 3-year 12.65%, not 14.09/11.14. The calc table keeps the report's 11.41% so the result is 120,200. ADVANC dividend yield is 9.94% vs 9.69% in the report; neither checkable. 2.3 uses the factsheet figures | `research/verify_examples.md` |

## 5. Attempts That Failed or Were Rejected

- matplotlib was not installed and has weak Thai shaping; used HTML/SVG in Chromium instead.
- Shrinking figures below about 4.8 in makes figure text about 7 pt, too small to print. Do not go smaller.
- Content trims saved only about 1 page each; figure gaps dominate the remaining slack.

## 6. Decisions and Constraints

User decisions: figure style is plain, matching the report. Answers in the persona voice: final-year student with part-time experience, about to start a first job.

Agent defaults (tell the user; v1 summary already listed most):
- The cover keeps the instructor (อาจารย์ภาณุวัฒน์ สังสิลลา), adds placeholders `{{ชื่อและรหัสนักศึกษา}}` and `{{เป้าหมายของฉัน}}`, and has no member list.
- Tax figures use tax-year 2568 rules (Ins91 guide). The 2569 guide is not published, so 2569 is marked unconfirmed.
- Social security uses 5% of wages up to 17,500 baht, so 875 baht a month. The ceiling is on sso.go.th from 1 Jan 2569; the rate and 875 come from news only.
- Persona numbers (สมมติ): first salary 25,000 means net income 129,500 and tax 0. At 35,000 the tax is 4,975, or 3,475 with ThaiESG 30,000 (`build/calc_persona.py`).
- At the macro research date the baht had weakened (33.495 on 15 Oct 2569 vs 30.87 in late January), and a VAT rise is only a plan (7% until 30 Sep 2570). 3.2 says this.

Repo rules: no em-dashes (`.claude/CLAUDE.md`). Do not commit unless asked.

## 7. Files Changed

- Repo: only this file.
- Scratchpad `S` (ephemeral): `src/`, `research/`, `figs/*.html` + `base.css`, `img/*.png`, `build/*` (sources above), `build_v1_backup/` (v1 sources), `out/` (v2 docx/pdf).

## 8. Validation and Evidence

- v1: every page rendered and checked; fonts embedded are only LaksamanReport; docx XML has Letter 12240x15840, margins 1440, Body 28 half-points, line 276 auto, firstLine 720; 8 images each with descr; validate.py PASSED.
- v2: built, `fixstyles.py` run, PDF 26 pages. Not yet: full visual check, validate.py re-run, `pdffonts` check, em-dash check.

## 9. Open Questions and Risks

- Does the user accept 25-26 pages, or want cuts to ≤18? Options: drop figure 2 (compounding, not required), shorten 3.1 tables, put references in a smaller font or fewer entries.
- The scratchpad can disappear and take every source with it. Offer to copy `S/build`, `S/figs` and `S/research` into the repo (for example `works/investment-exam-prep/`) and commit, only if the user agrees.
- The PDF font is Laksaman, not real TH SarabunPSK. The user can open the docx in Word with the real font and save as PDF.
- Carried over: JD deck rule 1 tag "ต้องทำ" question; Canva Tank Day `DAHYV68zUwE` feedback on pages 2, 5, 3; AI chatbot deck `NjR1vHeghHG9RemNhgkVaQ` feedback (see `f856a76`).

## 10. Next Actions, in priority order

1. Check `S` exists. If yes, view `out/q-03.png`, `q-10.png` and `q-18.png`, then all 26 pages (`pdftoppm -r 55` plus `build/sheet.py`), and fix any layout problem.
2. Run `validate.py`, `pdffonts` (only LaksamanReport) and an em-dash grep. Then send v2 docx and pdf with SendUserFile, and report: persona changes, 26 pages, the new tax/social-security facts and what is unconfirmed.
3. Ask whether to cut to ≤18 pages and which parts may go. Offer to save the sources in the repo.
4. Carried-over items in section 9.

## 11. Exact First Step for the Next Session

```
S=/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/inv; ls $S/build $S/out && fc-match "TH SarabunPSK" && pdfinfo $S/out/*.pdf | grep Pages
```

Success check: the build files are listed, fc-match prints "Laksaman Report", and the PDF has 26 pages. Rebuild: `cd $S && node build/build.js && python3 -I build/fixstyles.py out/*.docx && cd out && soffice --headless --convert-to pdf *.docx`. If `S` or the fonts are gone, tell the user that v2 is lost, and ask whether to rebuild from v1. The PDFs need re-uploading.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
งานล่าสุด: เอกสารสรุปเตรียมสอบ Investment Planning (docx+pdf) ตามรูปแบบรายงานกลุ่ม 5 v1 ส่งแล้ว (25 หน้า)
v2 เขียนแบบนักศึกษาจบใหม่ที่เคยทำพาร์ทไทม์และกำลังเริ่มงานแรก สร้างเสร็จแล้วแต่ยังไม่ได้ตรวจทุกหน้าและยังไม่ได้ส่ง (26 หน้า เกินเป้า 18)
ไฟล์ทั้งหมดอยู่ใน scratchpad .../b09ba2f5-.../scratchpad/inv (หายได้) ตรวจ ส่ง v2 แล้วถามเรื่องตัดให้ไม่เกิน 18 หน้า
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash) ห้าม commit ถ้าไม่ได้สั่ง
```
