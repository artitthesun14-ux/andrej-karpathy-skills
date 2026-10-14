---
name: visual-production
description: Run a visual production workflow (brief, story, art direction, visual plan, build, review, refine, final) for animations, data stories, and technical visualizations. Presentations go to /create-presentation.
disable-model-invocation: true
---

# /visual-production (Visual Production)

Principle: story before visuals, design before implementation, inspect the real result.

## Purpose

Coordinate visual work end to end by choosing only the helper skills the task needs.

## When to use

Animated explainers, data stories, 3D or technical visualizations, and visual refinement of existing work. Not for slide decks (use `/create-presentation`) or ordinary product pages (use the product workflow in `README.md`).

## Workflow

BRIEF -> STORY -> ART DIRECTION -> VISUAL PLAN -> BUILD -> REVIEW -> REFINE -> FINAL

Skip steps when the input already covers them. A small animation fix can start at BUILD.

| Step | Do | Helper skill |
|---|---|---|
| BRIEF | Goal, audience, constraints, format, source data | none |
| STORY | Core message, sequence, scenes or slides | `visual-storytelling` |
| ART DIRECTION | Style, typography, color, mood. Never a stock template. Style and palette can come from the `visual-style` library files (read them; do not run `/visual-style` from here) | `presentation-design`, `ui-design` for product UI |
| VISUAL PLAN | The plan below | `motion-design`, `technical-visualization`, `dataviz` |
| BUILD | Smallest tech that works: CSS, SVG, Canvas, Three.js | `animation-implementation`, `interaction-motion` |
| REVIEW | Inspect the rendered result | `visual-review`, `animation-review` |
| REFINE | Fix the most important visible problem first, then re-inspect | `visual-prototyping` for motion |
| FINAL | Check completeness, state what was and was not verified | none |

## Visual plan (medium and large work)

Show a short plan before coding, using `references/visual-plan.md`. Keep it to what prevents wrong turns.

## Rules

- Choose the form by content: plain text or a simple chart beats a diagram when clearer. 3D only when 2D cannot explain it.
- Do not add dependencies without a clear need.
- Never overstate data. Label conceptual visuals as conceptual.
- Do not call another user-invoked skill. Suggest the next command instead.

## Workflow position

Independent of the product workflow. For presentations, use `/create-presentation`. Can follow `/ui-design` or `/prototype` when a product needs a visual explainer, and `/code-review` still applies to code.

See `README.md` for the full picture.
