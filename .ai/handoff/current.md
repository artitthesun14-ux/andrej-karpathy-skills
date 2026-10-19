# Handoff: ai-product-workflow-skills

Updated: 2026-10-19. Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. One self-contained file, because the user asked for one. Earlier history: `sessions/2026-10-11.md`, plus older versions of this file in git (`e99cd36` Tank Day motion deck built and deleted; `8882233` Canva Tank Day build; `7c67075` AI chatbot deck; `30457aa` Luxury Minimalism; older: `e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and use `/visual-style` and `/create-presentation` to make real works.
- This session: `/create-presentation style=constructivist-layout palette=primary-bold` for an animated Thai deck that teaches all 39 JD Sports Fashion (Thailand) in-store rules through one employee's working day, for new staff.
- Success (from the user's Definition of Done): all 39 rules with original numbers, counter reaches 39/39, summary table of all 39, scenes in day order, each scene animation under 10 s with pause and replay, reduced motion shows every card, no horizontal scroll at 360 px, keyboard plus on-screen plus timeline navigation.

## 2. Current Status

- CONFIRMED: the deck lives only in the Visual Style Library gallery: https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT (version 27), Works tab, card "หนึ่งวันกับกฎร้าน", path `works/jd-store-rules-day/index.html` with `cover.jpg`; `works.json` entry id `jd-store-rules-day` added first, the 7 older works kept.
- CONFIRMED: the standalone artifact `UhNrRCyhEojSQp7Zg6PHhW` was **deleted at the user's request** ("ให้เหลือแค่ในคลังพอ"). Do not reuse that URL; do not republish a standalone copy unless asked.
- CONFIRMED: cards and summary now follow the user's source PDF (`In-Store Rules and Regulations`, 2 pages, uploaded this session at `/root/.claude/uploads/b09ba2f5-ac02-5876-89f3-6b949654719d/87b993ce-_________________.pdf`, ephemeral).
- CONFIRMED: a PDF export `หนึ่งวันกับกฎร้าน.pdf` (9 pages, screenshots, text not selectable, uneven page heights) was sent to the user, latest version after the PDF alignment.
- CONFIRMED: repo clean at `e99cd36` before this file was written. Only this file changes; commit only if the user asks.
- Gallery and deck are private; sharing is the user's choice from the Share menu.

## 3. Completed

1. Counted rules 1 to 39 in the prompt list: none missing. Multi-scene rules (4, 9, 10, 11, 13, 28) have one main card and short "ทวน" cards elsewhere.
2. Built the deck: cover with day timeline, scenes 1 to 7 (บ้าน, มาถึงร้าน, ทำงาน, ออกจากโซน, พักกินข้าว, ทำงานบ่าย = scene 6 "กฎที่ใช้ตลอดเวลา", เลิกงาน), summary table. Character walks along beats; cards slam in; counter "กฎที่ดูแล้ว x/39"; yellow "ใช้ตลอดเวลา" band at the bottom opens a dialog with rules 22, 23, 27, 31, 33, 34. Fonts Kanit + Sarabun; light single theme.
3. Mobile fix 1: page auto-scrolled to each new card (user video). Removed `scrollIntoView` below 960 px; added a rule box under the stage showing the current rule number, text and tags.
4. Mobile fix 2: the sticky stage plus box covered cards on a real phone (second video). Removed the sticky rule; stage scrolls with the page.
5. Added to gallery, made cover and PDF.
6. Summary table switched to verbatim PDF text (Thai plus English), tags removed from the table, document spellings kept (กลื่น, หริอ, สวดมนตร์, บันทุก, สับปลี่ยน, ทอยู่); only the lost "ำ" from text extraction was restored.
7. Cards aligned to the PDF on the user's instruction: new tag "ไม่ควรทำ" (15, 18, 19, 24, 31); "ควรทำ" for 17, 20, 24, 25; 11 is "ทำได้" plus "ต้องทำ" for the sealed container; 13 adds locking when finishing work; 28 says สวดมนต์ (no ละหมาด); 7 says makeup "เช่น"; beat captions and recap cards updated.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Phone: page scrolled down on play | FIXED | `scrollIntoView` on every card | only on two-column layout (min-width 960 px) plus rule box under stage | user video 13:50; headless 390 px scrollTop stayed 0 |
| Phone: rule box covered other text | FIXED | sticky stage took about half of a real phone screen | removed sticky | user video 13:55; not re-tested on a real phone |
| Mobile overflow and clipped timeline | FIXED before publish | grid children without `minmax(0,1fr)` | added minmax columns | headless 360/390/1400 px |
| Stage labels overlapping | FIXED | one label row | alternate rows, viewBox 600x322 | screenshots |
| Prompt list stronger or weaker than PDF | FIXED | prompt paraphrase | cards follow PDF (section 3 item 7) | PDF text extraction |
| Gallery publish refused without `file_path` | FIXED | tool needs the page file | read every line of the gallery page, published it unchanged with `files` | gallery v25 to v27 |

## 5. Attempts That Failed or Were Rejected

- Sticky stage with rule box on phones: rejected by the user (covered text). Do not bring it back.
- Standalone artifact: deleted by the user; the gallery copy is the only one.
- Slides Artifact type: offered by quickstart, not used (needs custom animation and 360 px layout).

## 6. Decisions and Constraints

User decisions:
- Style `constructivist-layout`, palette `primary-bold` (from the gallery command). Keep them.
- The PDF is the source of truth for rule wording; cards and summary follow it.
- Keep the deck only in the gallery.

Agent defaults (reported to the user, still in place):
- Rule 1 keeps the tag "ต้องทำ" though the PDF only says when briefing starts. User was told; no answer yet.
- No clock times (none in the source); a sun position shows time of day.
- No JD logo; company named only as the document source.
- Tags: ต้องทำ (blue), ห้ามทำ (red), ควรทำ (yellow), ไม่ควรทำ (red outline), ทำได้ (outline), ทวน (dashed).

Tool rules: artifact deletes are permanent and need the user's explicit request. Before republishing the gallery, read it fully (`action: read` then Read every line of the saved file) and publish that file with `files`; keep every existing work in `works.json`.

Repo rules (`.claude/CLAUDE.md`): no em-dashes.

## 7. Files Changed

- Repo: only this file.
- Deck source was in this session's scratchpad (`/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/jd-rules/`: `index.html`, `presentation-brief.md`, `src.py` with the verbatim PDF text, `gallery/`, `test/`). Assume it is gone next session. Durable copy: gallery file `works/jd-store-rules-day/index.html` (read it with `Artifact action: read, path`). In the gallery copy the brand bar has an extra "แกลเลอรี" link to `../../`.

## 8. Validation and Evidence

- Headless Chromium (Playwright 1.56): every scene, no page errors; counter 39/39; summary 39 rows; scenes finish in 9.9 s or less; pause freezes cards; reduced motion shows all cards; no horizontal scroll at 360, 390, 1280, 1400 px; 7 "ไม่ควรทำ" tags render.
- Contrast: white on red 5.02, white on blue 7.99, ink on yellow 11.23, muted on paper 8.38.
- Not verified: real phone after the last two fixes; gallery Works card rendering after publish; projector.

## 9. Open Questions and Risks

- Rule 1 tag "ต้องทำ": keep or remove? (asked, no answer)
- PDF export is image based; user may want an A4, searchable version (offered).
- Sharing the gallery shows all other works too.
- Carried over: Canva Tank Day deck `DAHYV68zUwE` awaits feedback on pages 2 and 5 and a decision on page 3 (see `8882233`); AI chatbot deck `NjR1vHeghHG9RemNhgkVaQ` awaits feedback.

## 10. Next Actions, in priority order

1. Wait for the user. If they report a problem on the JD deck, read the gallery file `works/jd-store-rules-day/index.html`, fix it, and republish the gallery (rule in section 6).
2. If asked: change rule 1's tag; make an A4 searchable PDF.
3. Carried over: Canva Tank Day feedback (pages 2, 5, 3).

## 11. Exact First Step for the Next Session

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -2 --oneline
```

Then, only if the task is the JD deck: `Artifact action: read, url: https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT, path: works/jd-store-rules-day/index.html`. Success check: the file has `const SRC=` with 39 entries and `shouldnt:'ไม่ควรทำ'`.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุด: ทำพรีเซนกฎร้าน JD 39 ข้อ (constructivist-layout + primary-bold) เก็บไว้ใน gallery เท่านั้น https://claude.ai/artifact/TEgWtaAsxAdNuhwVjhX1QT แท็บ Works "หนึ่งวันกับกฎร้าน" (ไฟล์ works/jd-store-rules-day/index.html) ตัว artifact แยกถูกลบแล้ว ห้ามใช้ลิงก์เดิม
การ์ดและตารางสรุปยึดตาม PDF ต้นฉบับของผู้ใช้แล้ว ค้างคำถาม: ป้ายข้อ 1 "ต้องทำ" เก็บหรือเอาออก
ก่อน publish gallery ต้องอ่านไฟล์หน้า gallery ให้ครบและเก็บงานเดิมใน works.json ทุกชิ้น
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
