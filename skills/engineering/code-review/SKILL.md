---
name: code-review
description: ตรวจคุณภาพโค้ดจากมุมมองที่สอง ก่อนนำไปทดลองจริงหรือ deploy
disable-model-invocation: true
---

# /code-review (Code Review)

หลักการ: Code Review ตรวจคุณภาพจากมุมที่สอง

## Purpose

ทบทวนคุณภาพโค้ด ความถูกต้อง ความปลอดภัย และความสอดคล้องกับ convention ของโปรเจกต์ จากมุมมองที่ไม่ใช่คนเขียนเอง

## When to use

หลัง test ผ่านแล้ว ก่อนปล่อยให้ทดลองจริงหรือ deploy

## Inputs

โค้ดที่ผ่าน test แล้ว

## Outputs

รายการ finding พร้อมความรุนแรง และคำแนะนำแก้ไข

## Workflow position

- ขั้นตอนก่อนหน้า: `/test`
- ขั้นตอนถัดไป: `/experiment`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
