# AI Product Workflow Skills

ชุดนี้ออกแบบเป็น workflow สำหรับสร้าง Product / Website / Feature โดยผสมแนวคิดจาก disciplined engineering, research, design thinking และ experiment loops

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

- `skills/engineering/` — promoted skills ทั้ง 11 ตัวข้างต้น
- `skills/productivity/`, `skills/misc/`, `skills/in-progress/`, `skills/deprecated/` — buckets อื่นที่เผื่อไว้สำหรับ skill ในอนาคต
- `docs/engineering/` — เอกสารประกอบต่อ skill
- `.claude-plugin/plugin.json` — manifest ของ plugin
- `.agents/invocation.md` — กติกาการเรียกใช้ skill (user-invoked vs model-invoked)
- `workflow-router` — router สำหรับ skill ที่เรียกใช้โดยผู้ใช้โดยตรง
- `openai.yaml` — config สำหรับ user-invoked skills
- `scripts/link-skills.sh`, `scripts/list-skills.sh` — เครื่องมือ maintenance

ดูกติกาการทำงานในโปรเจกต์นี้ที่ [`CLAUDE.md`](CLAUDE.md)
