---
name: experiment
description: ปล่อยให้ระบบเรียนรู้จากผลลัพธ์จริง แล้ววนกลับไปปรับ UX หรือ UI ตามข้อมูล
disable-model-invocation: true
---

# /experiment (Experiment)

หลักการ: Experiment ทำให้ระบบเรียนรู้จากผลลัพธ์

## Purpose

วัดผลลัพธ์จริงหลัง deploy หรือปล่อยฟีเจอร์ แล้วนำข้อมูลย้อนกลับไปปรับปรุง ux-design หรือ ui-design ตามความเหมาะสม

## When to use

หลัง deploy หรือปล่อยฟีเจอร์ให้ผู้ใช้จริงแล้ว

## Inputs

ข้อมูลการใช้งานจริงหรือผลการทดลอง

## Outputs

ข้อสรุปพร้อมคำแนะนำว่าจะวนกลับไปที่ ux-design หรือ ui-design ขั้นตอนไหน

## Workflow position

- ขั้นตอนก่อนหน้า: `/code-review`
- ขั้นตอนถัดไป: วนกลับไปที่ `/ux-design` หรือ `/ui-design` ตามผลการทดลอง

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
