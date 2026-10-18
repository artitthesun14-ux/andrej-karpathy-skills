# Handoff: ai-product-workflow-skills

Updated: 2026-10-18 (fifth session of the day). Repo: artitthesun14-ux/andrej-karpathy-skills. Work branch: `claude/setup-workflow-xd5lho`. One self-contained file, because the user asked for one. Earlier history: `sessions/2026-10-11.md`, plus older versions of this file in git (`8882233` has the full Canva Tank Day build session; `7c67075` the AI chatbot deck; `30457aa` Luxury Minimalism; also `e4797d2`, `5bb2c42`, `769098b`, `a2652bd`, `f5747e5`, `e66e6d7`, `9221fed`, `c95ea66`, `8cbe20b`).

## 1. Goal and Success Criteria

- Goal: maintain `ai-product-workflow-skills` and use `/visual-style` and `/create-presentation` to make real works.
- This session:
  1. Read the previous handoff (`8882233`) and summarized it.
  2. User asked for the Tank Day deck as a **motion graphic HTML presentation** in the style of their artifact https://claude.ai/artifact/YHGk1ndufSNXVMRtH9fj3G ("ทำไมกรุงเทพฯ น้ำท่วมง่าย", paper-cut style).
  3. Built and published it, then the user asked to delete it. Deleted.
- Success for this session: the user got what they asked (build, then delete). No open deliverable from this session.

## 2. Current Status

- CONFIRMED: motion artifact `1b2MRxmFRigj8HTk1MrqFk` **deleted** at the user's request (they chose "Artifact motion graphic" when asked what to delete). Its URL is dead; do not reuse it.
- CONFIRMED: Canva design `DAHYV68zUwE` ("Starbucks Korea Tank Day", 9 pages) untouched this session. Edit: https://www.canva.com/d/6AgFK8e4rTJtfBc. Not shared, not published. Page ids are in `8882233`'s handoff section 2.
- CONFIRMED: repo clean at `8882233` before this file was written. This file is uncommitted; commit only if the user asks.
- UNKNOWN: why the user deleted the motion deck (not stated). Do not rebuild it unless asked.
- The HTML source lived only in this session's scratchpad (`/tmp/claude-0/-home-user-andrej-karpathy-skills/eb143eb9-b25f-4481-aced-56e6f68cc3ef/scratchpad/tankday-motion.html`); assume it is gone next session.

## 3. Completed

1. Read the reference artifact (owned by the user, 1.3 MB). Its style: paper-cut warm paper with grain (`--void #EFE8DC`, `--surface #F8F3EA`, ink `#2A251F`, steel `#665B4E`, signal red `#C23A22`, blue `#2C78A8`), Noto Serif Thai + IBM Plex Sans Thai, editorial spread (figure card left with 4 corner labels, text column right, footer nav with dots and count), one red paper detail per slide, light theme only.
2. Built a 9-slide deck in that style with a paper cup motif: cover, timeline (6 steps, cup cracks then is repaired), topic 1 (approval belt with a missing gate), topic 2 (Risk Matrix, cups slide Inherent to Residual, R1 to R5 buttons), topic 3 (4T tiles plus response-speed and card-rank comparison), topic 4 (Prevention, Response, Recovery), topic 5 (LogisTech Input/Process/Output loop, "without the system" toggle), summary (3 lessons), references. Arrow/Space stepped through build steps; N notes; F fullscreen.
3. Headless Chromium run of every slide and step: no errors, no horizontal overflow at 1400 px or 390 px.
4. Published, then deleted on request.

## 4. Issues and Fixes

| Issue | Status | Cause | Resolution | Evidence |
|---|---|---|---|---|
| Slide 7 replay cancelled entrance animations | FIXED before publish | global `stopAll` in reset | per-slide timer list | headless run |
| Multi-paragraph copy injected into a `<p>` | FIXED before publish | invalid nesting | container changed to `div` | code |
| Ex-CEO quote has no citation number | OPEN (applies to Canva too) | earlier notes do not say which source | left uncited in the motion deck | `8882233` notes |
| Canva carry-overs: font mismatch on added text, gradient matrix shading, page 3 repeats page 2 | OPEN | see `8882233` section 4 | none this session | none |

## 5. Attempts That Failed or Were Rejected

- Motion graphic HTML deck: built, then rejected (deleted) by the user. Reason unknown.
- From earlier: Slides Artifact type not used; split-slide reveals in Canva offered, not chosen.

## 6. Decisions and Constraints

User decisions:
- Canva remains the deck of record. Palette forest-sage-ivory, style Material-Led Packaging.
- Do not share, publish, or move Canva files. Risk Matrix follows the course convention (Likelihood horizontal; 1-4 ต่ำ, 5-9 ปานกลาง, 10-15 สูง, 16-25 สูงมาก).
- Deletion of the motion artifact (this session).

Agent decisions (still apply to content): 5 risk types and all scores are the presenter's analysis; LogisTech Intelligence is an interpretation; death toll not stated; stock price unconfirmed. Scores: Inherent R1 20, R2 16, R3 12, R4 12, R5 9; Residual R1 8, R2 6, R3 6, R4 4, R5 4.

Tool rules: Canva `edit-design` needs a preview and the user's approval before `commit`. Artifact deletes are permanent and need the user's explicit request; ask which item when "ลบ" is ambiguous.

Repo rules (`.claude/CLAUDE.md`): no em-dashes; keep the JSON hand formatting.

## 7. Files Changed

- Repo: only this file (uncommitted).
- Content sources for the deck (speaker notes, full references, timeline and matrix text) were in an earlier scratchpad: `/tmp/claude-0/-home-user-andrej-karpathy-skills/b09ba2f5-ac02-5876-89f3-6b949654719d/scratchpad/tankday/` (`notes.md`, `p2a.json`, `p5.json`, `cups.md`). It still existed this session but is ephemeral. The Canva file is the durable copy (`read-design` field `presenter_notes`).

## 8. Validation and Evidence

- Motion deck: headless run, 4 screenshots reviewed (cover, topic 1, topic 2 with R1 selected, topic 5). Not tested on a real phone or projector. Moot now that it is deleted.
- Canva: nothing new verified this session.

## 9. Open Questions and Risks

- Does the user want any other version of the deck (or none)? Not asked after the delete.
- Carried over from `8882233`: feedback on Canva pages 2 and 5; keep or delete Canva page 3; expand wording on pages 4, 6, 7; split-slide reveals.
- Facts are as of 2026-10-18; the police investigation is ongoing.

## 10. Next Actions, in priority order

1. Wait for the user's direction. Do not rebuild the motion deck unprompted.
2. If they return to Canva: get feedback on pages 2 and 5 (`read-design` with `open_transaction: true` on one page, `edit-design` with `keep_open`, show the thumbnail, ask, then `commit`).
3. If asked: delete or shorten Canva page 3; expand pages 4, 6, 7.
4. Carried over from `7c67075`: AI chatbot deck (artifact NjR1vHeghHG9RemNhgkVaQ) awaits feedback and a gallery yes; gallery TEgWtaAsxAdNuhwVjhX1QT is v24 with 7 works.

## 11. Exact First Step for the Next Session

```
git fetch origin claude/setup-workflow-xd5lho && git checkout claude/setup-workflow-xd5lho && git status -sb && git log -2 --oneline
```

Then, only if the task is about the Canva deck, load the Canva tools (`ToolSearch` "select:mcp__Canva__read-design,mcp__Canva__edit-design") and run `read-design` on `DAHYV68zUwE` with fields `design_metadata`, `page_metadata`. Success check: 9 pages, ids as in `8882233` section 2.

## 12. Ready-to-paste Continuation Prompt

```
อ่าน .ai/handoff/current.md ก่อน แล้วทำต่อ
session ล่าสุด: ทำพรีเซน Tank Day แบบ motion graphic HTML ตามสไตล์ artifact น้ำท่วมกรุงเทพฯ แล้วผู้ใช้สั่งลบ artifact นั้นแล้ว (ห้ามใช้ลิงก์เดิม)
ไฟล์หลักยังเป็น Canva "Starbucks Korea Tank Day" (design DAHYV68zUwE, 9 หน้า) ยังรอ feedback หน้า 2 และ 5 และเรื่องลบหน้า 3
แก้ Canva ต้องแสดงตัวอย่างและให้ผู้ใช้อนุมัติก่อน commit ห้ามแชร์หรือ publish
ทำตาม .claude/CLAUDE.md (ไม่มี em-dash)
```
