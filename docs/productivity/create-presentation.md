# Create a Presentation

Command: `/create-presentation`

จุดเริ่มต้นเดียวสำหรับงาน presentation, HTML หรือ interactive slides, presentation ที่มี animation และ visual storytelling บอกแค่ว่าอยากได้อะไร มีเนื้อหาอะไร และต้องการผลแบบไหน skill จะเลือกเส้นทางให้เอง:

- สร้างใหม่: เล่าเรื่อง → เลือกสไตล์และสีจากคลังอัตโนมัติ → สร้าง → ตรวจ
- สร้างตามสไตล์ที่ระบุ: ใช้สไตล์หรือสีที่ให้มา หรือเสนอ 3 ทางเลือกเมื่อขอ แล้วสร้าง
- ปรับงานเดิม: ตรวจของเดิม เปลี่ยนเฉพาะส่วนที่ขอ เช่น สีอย่างเดียว แล้วรายงานสิ่งที่เปลี่ยน
- ทำต่อจากงานเดิม: ใช้ design system เดิม แก้เฉพาะ slide ที่เกี่ยวข้อง

ใช้ helper skill ที่มีอยู่ (visual-storytelling, presentation-design, dataviz, motion, technical-visualization, visual-review) และคลังสไตล์ของ `/visual-style` ผ่านไฟล์ reference ที่ใช้ร่วมกัน ไม่เรียก `/visual-production` หรือ `/visual-style` โดยตรงตามกติกาใน `.agents/invocation.md` เก็บการตัดสินใจทั้งหมดไว้ใน `presentation-brief.md` ข้างไฟล์ deck เพื่อให้ทำต่อข้าม session ได้

รายละเอียดฉบับเต็มอยู่ใน [`skills/productivity/create-presentation/SKILL.md`](../../skills/productivity/create-presentation/SKILL.md)

ดู workflow เต็มได้ที่ [README.md](../../README.md)
