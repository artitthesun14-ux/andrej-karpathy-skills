---
name: to-spec
description: แปลงข้อสรุปจาก research และ grill ให้เป็น spec ที่ testable วัดผลได้ชัดเจน
disable-model-invocation: true
---

# /to-spec (To Spec)

หลักการ: Spec ทำให้เป้าหมาย testable

## Purpose

เขียนเป้าหมาย ขอบเขต และเงื่อนไขความสำเร็จ (acceptance criteria) ให้เป็นรูปธรรม วัดผลได้ ไม่กำกวม

## When to use

หลังเคลียร์ ambiguity แล้ว ก่อนเริ่มออกแบบ UX

## Inputs

ข้อสรุปจาก grill-with-docs

## Outputs

เอกสาร spec: เป้าหมาย, ขอบเขต, acceptance criteria, สิ่งที่ไม่รวมอยู่ในขอบเขต

## Workflow position

- ขั้นตอนก่อนหน้า: `/grill-with-docs`
- ขั้นตอนถัดไป: `/ux-design`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
