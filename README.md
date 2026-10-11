# AI Product Workflow Skills

ชุดนี้ออกแบบเป็น workflow สำหรับสร้าง Product / Website / Feature โดยผสมแนวคิดจาก disciplined engineering, research, design thinking และ experiment loops

## การติดตั้ง

Claude Code (2.1.275 ขึ้นไป):

```
/plugin install ai-product-workflow-skills --marketplace artitthesun14-ux/andrej-karpathy-skills
```

Codex และ agent อื่น:

```
npx skills@latest add artitthesun14-ux/andrej-karpathy-skills
```

## Workflow

/research
↓
/grill-with-docs
↓
/to-spec
↓
/ux-design
↓
/ui-design
↓
/prototype
↓
/to-tickets
↓
/implement
↓
/test
↓
/code-review
↓
/experiment

## หลักการใช้งาน

ไม่จำเป็นต้องเรียกทุก Skill ทุกครั้ง ให้ Orchestrator เลือกเฉพาะ Skill ที่เหมาะกับงาน

ตัวอย่าง:
- แก้ bug เล็ก ๆ → /implement → /test → /code-review
- ออกแบบ feature ใหม่ → /research → /grill-with-docs → /to-spec → /ux-design → /ui-design → /prototype
- สร้าง feature จริง → ใช้ workflow เต็ม
- ปรับปรุง design จากข้อมูล → /experiment → วนกลับไป /ux-design หรือ /ui-design ตามผล

## Skills

Promoted skills (bucket `engineering/`), เรียงตามลำดับ workflow:

| Skill | คำสั่ง | หน้าที่ | เอกสาร |
|---|---|---|---|
| Research | `/research` | ค้นข้อมูลก่อนตัดสินใจ ลดการเดา | [docs/engineering/research.md](docs/engineering/research.md) |
| Grill with Docs | `/grill-with-docs` | ซักถามด้วยเอกสารจริง ลด ambiguity | [docs/engineering/grill-with-docs.md](docs/engineering/grill-with-docs.md) |
| To Spec | `/to-spec` | แปลงข้อสรุปให้เป็นเป้าหมายที่ testable | [docs/engineering/to-spec.md](docs/engineering/to-spec.md) |
| UX Design | `/ux-design` | ออกแบบ flow ให้ชัด | [docs/engineering/ux-design.md](docs/engineering/ux-design.md) |
| UI Design | `/ui-design` | ออกแบบ visual system ให้สม่ำเสมอ | [docs/engineering/ui-design.md](docs/engineering/ui-design.md) |
| Prototype | `/prototype` | ลดความเสี่ยงก่อน build เต็ม | [docs/engineering/prototype.md](docs/engineering/prototype.md) |
| To Tickets | `/to-tickets` | แบ่งงานให้ตรวจสอบได้ | [docs/engineering/to-tickets.md](docs/engineering/to-tickets.md) |
| Implement | `/implement` | ลงมือสร้างของจริง | [docs/engineering/implement.md](docs/engineering/implement.md) |
| Test | `/test` | ตรวจ behavior | [docs/engineering/test.md](docs/engineering/test.md) |
| Code Review | `/code-review` | ตรวจคุณภาพจากมุมที่สอง | [docs/engineering/code-review.md](docs/engineering/code-review.md) |
| Experiment | `/experiment` | เรียนรู้จากผลลัพธ์จริง | [docs/engineering/experiment.md](docs/engineering/experiment.md) |

Promoted skills (bucket `productivity/`), ชุด animation แบบ model-invoked (ไม่มี slash command) Design → Implement → Inspect → Iterate:

| Skill | หน้าที่ | เอกสาร |
|---|---|---|
| Motion Design | ออกแบบ motion ของ UI อย่างมีเป้าหมาย: timing, easing, ลำดับ, hierarchy | [docs/productivity/motion-design.md](docs/productivity/motion-design.md) |
| Interaction Motion | ออกแบบ motion ของ state ต่าง ๆ เช่น hover, focus, modal, loading, success, error | [docs/productivity/interaction-motion.md](docs/productivity/interaction-motion.md) |
| Animation Implementation | เขียน animation ด้วย CSS, SVG, WAAPI, JS โดยเน้น performance และ accessibility | [docs/productivity/animation-implementation.md](docs/productivity/animation-implementation.md) |
| Animation Review | ตรวจ animation ด้าน purpose, timing, easing, layout, performance, accessibility | [docs/productivity/animation-review.md](docs/productivity/animation-review.md) |
| Visual Prototyping | ทำ prototype ของ motion ผ่าน storyboard, motion sequence, inspect และ iterate | [docs/productivity/visual-prototyping.md](docs/productivity/visual-prototyping.md) |

Visual production (bucket `productivity/`): เริ่มที่ `/visual-production` ลำดับ BRIEF → STORY → ART DIRECTION → VISUAL PLAN → BUILD → REVIEW → REFINE → FINAL ข้ามขั้นที่ไม่จำเป็นได้ และใช้ร่วมกับ skill animation ด้านบน

| Skill | การเรียก | หน้าที่ | เอกสาร |
|---|---|---|---|
| Visual Production | `/visual-production` | workflow งาน presentation, animation, data story และ technical visualization | [docs/productivity/visual-production.md](docs/productivity/visual-production.md) |
| Visual Storytelling | model-invoked | เปลี่ยนเนื้อหาซับซ้อนให้เป็นเรื่องราวที่เข้าใจง่าย | [docs/productivity/visual-storytelling.md](docs/productivity/visual-storytelling.md) |
| Presentation Design | model-invoked | ออกแบบ presentation ที่เล่าเรื่องและสวยงาม | [docs/productivity/presentation-design.md](docs/productivity/presentation-design.md) |
| Technical Visualization | model-invoked | ทำ technical diagram และ 3D scene (exploded, cutaway, layered) | [docs/productivity/technical-visualization.md](docs/productivity/technical-visualization.md) |
| Visual Review | model-invoked | ตรวจคุณภาพ visual output จริง | [docs/productivity/visual-review.md](docs/productivity/visual-review.md) |

Handoff (bucket `productivity/`): ส่งต่องานข้าม session

| Skill | การเรียก | หน้าที่ | เอกสาร |
|---|---|---|---|
| Handoff | `/handoff` | สรุปสถานะ ปัญหา การตัดสินใจ และขั้นตอนถัดไป บันทึกที่ `.ai/handoff/` | [docs/productivity/handoff.md](docs/productivity/handoff.md) |

## Token efficiency

ควรโหลด SKILL.md เฉพาะตอนที่ workflow ต้องใช้ Skill นั้น ไม่ควรใส่ทุก Skill เข้า context ทุกครั้ง

## Design philosophy

- Research ลดการเดา
- Grill ลด ambiguity
- Spec ทำให้เป้าหมาย testable
- UX ทำให้ flow ชัด
- UI ทำให้ visual system สม่ำเสมอ
- Prototype ลดความเสี่ยงก่อน build เต็ม
- Tickets ทำให้งานแบ่งและตรวจได้
- Implement ทำให้เกิดของจริง
- Test ตรวจ behavior
- Code Review ตรวจคุณภาพจากมุมที่สอง
- Experiment ทำให้ระบบเรียนรู้จากผลลัพธ์

## Repository layout

โครงสร้างนี้อ้างอิงรูปแบบเดียวกับ `mattpocock/skills`:

- `skills/engineering/`: promoted skills ทั้ง 11 ตัวข้างต้น
- `skills/productivity/`: promoted skills ชุด animation 5 ตัว ชุด visual production 5 ตัว และ handoff ข้างต้น
- `skills/misc/`, `skills/in-progress/`, `skills/deprecated/`: buckets อื่นที่เผื่อไว้สำหรับ skill ในอนาคต
- `docs/engineering/`: เอกสารประกอบต่อ skill
- `.claude-plugin/plugin.json`: manifest ของ plugin
- `.claude-plugin/marketplace.json`: marketplace สำหรับติดตั้งผ่าน `/plugin install`
- `.agents/invocation.md`: กติกาการเรียกใช้ skill (user-invoked vs model-invoked)
- `workflow-router`: router สำหรับ skill ที่เรียกใช้โดยผู้ใช้โดยตรง
- `openai.yaml`: config สำหรับ user-invoked skills
- `scripts/link-skills.sh`, `scripts/list-skills.sh`: เครื่องมือ maintenance

ดูกติกาการทำงานในโปรเจกต์นี้ที่ [`.claude/CLAUDE.md`](.claude/CLAUDE.md)
