---
name: test
description: ตรวจสอบ behavior ของสิ่งที่ implement แล้วว่าตรงตาม acceptance criteria
disable-model-invocation: true
---

# /test (Test)

หลักการ: Test ตรวจ behavior

## Purpose

ตรวจสอบว่าโค้ดที่เขียนทำงานตรงตาม acceptance criteria ที่ระบุใน spec และ ticket ครอบคลุม edge case ที่สำคัญ

## When to use

หลัง implement เสร็จ ก่อนขอ code review

## Inputs

โค้ดจาก implement และ acceptance criteria

## Outputs

ผลทดสอบ พร้อมรายการ bug หรือ edge case ที่พบ

## Workflow position

- ขั้นตอนก่อนหน้า: `/implement`
- ขั้นตอนถัดไป: `/code-review`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
