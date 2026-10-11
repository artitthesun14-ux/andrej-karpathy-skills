---
name: implement
description: ลงมือเขียนโค้ดตาม ticket ให้เกิดของจริงตรงตาม spec
disable-model-invocation: true
---

# /implement (Implement)

หลักการ: Implement ทำให้เกิดของจริง

## Purpose

เขียนโค้ดตาม ticket โดยยึด spec และ design เป็นแหล่งอ้างอิงหลัก

## When to use

เมื่อมี ticket ที่ขอบเขตชัดเจนแล้ว

## Inputs

ticket จาก to-tickets

## Outputs

โค้ดที่ทำงานได้ตรงตาม ticket

## Workflow position

- ขั้นตอนก่อนหน้า: `/to-tickets`
- ขั้นตอนถัดไป: `/test`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
