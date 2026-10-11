---
name: to-tickets
description: แตก prototype/spec ที่ผ่านการยืนยันแล้วให้เป็นงานย่อยที่แบ่งและตรวจสอบได้
disable-model-invocation: true
---

# /to-tickets (To Tickets)

หลักการ: Tickets ทำให้งานแบ่งและตรวจได้

## Purpose

แปลงงานที่ผ่านการยืนยันจาก prototype ให้เป็น ticket ย่อยที่มีขอบเขตชัดเจน ประมาณงานได้ และตรวจสอบความคืบหน้าได้

## When to use

หลัง prototype ผ่านการทดสอบแล้ว ก่อนเริ่ม implement

## Inputs

prototype ที่ยืนยันแล้ว และ spec

## Outputs

รายการ ticket พร้อมขอบเขตงานและ acceptance criteria ต่อ ticket

## Workflow position

- ขั้นตอนก่อนหน้า: `/prototype`
- ขั้นตอนถัดไป: `/implement`

ดูภาพรวม workflow ทั้งหมดได้ที่ `README.md`
