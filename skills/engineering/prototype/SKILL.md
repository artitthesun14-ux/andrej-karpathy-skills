---
name: prototype
description: สร้าง prototype เพื่อลดความเสี่ยงก่อนลงมือ build เต็มรูปแบบ
disable-model-invocation: true
---

# /prototype (Prototype)

หลักการ: Prototype ลดความเสี่ยงก่อน build เต็ม

## Purpose

สร้างต้นแบบที่คลิกได้หรือทดลองได้จริง เพื่อทดสอบสมมติฐานสำคัญก่อนลงทุนเวลา build ระบบเต็ม

## When to use

เมื่อมีความเสี่ยงด้าน UX หรือเทคนิคที่ยังไม่แน่ใจ ก่อนแตกงานเป็น ticket

## Inputs

hi-fi design จาก ui-design

## Outputs

prototype ที่ทดสอบได้ พร้อมผลตอบรับเบื้องต้น

## Workflow position

- ขั้นตอนก่อนหน้า: `/ui-design`
- ขั้นตอนถัดไป: `/to-tickets`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
