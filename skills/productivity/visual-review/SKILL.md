---
name: visual-review
description: Review rendered visual output (presentations, animations, charts, 3D) for composition, typography, spacing, hierarchy, contrast, consistency, motion timing, responsiveness, performance, and visual bugs, then fix and re-inspect.
---

# Visual Review

Review the result as rendered, not the source code alone. For UI interaction motion, also apply `animation-review`.

## Steps

1. Render it. Use what the environment offers: built-in browser, Playwright with Chromium (`/opt/pw-browsers`), or screenshots. Capture desktop and phone widths, and key animation frames or states.
2. Inspect against `references/review-checklist.md`.
3. List findings, most important first (Critical, Important, Polish). Each: Problem, why it matters, concrete fix. No numeric scores.
4. Fix the top problems only. Do not redesign without evidence.
5. Re-render and re-inspect. Repeat until no Critical or Important findings remain.

## Honesty about verification

State exactly what was inspected and how. If a check could not be run (no browser, no GPU, no touch device, no real data), say so. Never claim a test that was not run.

## Output

Findings list, fixes made, what was verified, what remains unverified.
