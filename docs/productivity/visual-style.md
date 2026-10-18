# Visual Style

Command: `/visual-style`

คลังอ้างอิงด้าน visual: style library 81 สไตล์ใน 13 หมวด จัดกลุ่มเป็น 5 ประเภท (ลุค เลย์เอาต์ วัสดุ การเล่าเรื่อง โครงสร้างสี) (editorial, Swiss, neoclassical, poster, color systems, botanical, tactile, minimal, industrial, motion, illustration, design movements, digital UI) และ color library 38 palettes ที่แยกกันเพื่อจับคู่ได้อิสระ ทุก palette มีบทบาทสี สัดส่วน และคู่สีข้อความที่ผ่านการตรวจ contrast (WCAG 2.2) มี presets สำหรับงานยอดนิยม และ gallery ที่ค้นหาและกรองได้ สร้างฮาร์โมนีสีจากสีเดียว ผสมสไตล์กับสีแล้วบันทึกเป็นพรีเซ็ตของตัวเอง

workflow: เข้าใจงาน → ค้นหา library → เสนอ 3 ทางเลือกที่ต่างกันจริง → จับคู่ style กับ palette → สรุป design direction → ลงมือทำงานจริง → ตรวจผลเทียบกับ direction

ค้นหาด้วย `node scripts/library.mjs find ...` และตรวจ library หลังแก้ไขด้วย `node scripts/library.mjs check` (รันจากโฟลเดอร์ของ skill)

รายละเอียดฉบับเต็มอยู่ใน [`skills/productivity/visual-style/SKILL.md`](../../skills/productivity/visual-style/SKILL.md)

ดู workflow เต็มได้ที่ [README.md](../../README.md)
