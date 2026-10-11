---
name: technical-visualization
description: Visualize systems and objects in 2D or 3D: technical diagrams, layered and exploded views, cutaways, mechanical motion, Three.js scenes and cameras, and web integration.
---

# Technical Visualization

Principle: model what the object does, not only what it looks like.

## Choose the form

Pick the simplest that explains the idea:

1. Plain diagram or SVG (structure, flow, layers).
2. Animated SVG or CSS (sequence, cause and effect).
3. Canvas (many elements, particles, data flow at scale).
4. Three.js or WebGL (spatial relationships, camera, exploded or cutaway views that 2D cannot show).

Do not use 3D when 2D explains it more clearly.

## Before building

Understand structure, function, relationships between parts, and motion. List parts, what each does, what connects to what, and what moves. Use `visual-storytelling` for the narrative and `motion-design` for motion.

## Fact versus concept

For engineering content, separate evidence-backed models from conceptual illustration. Label conceptual views visibly. Do not present a conceptual render as real structure without evidence.

## Build

- Read `references/scene-and-camera.md` for 3D scene, camera, lighting, materials, exploded and cutaway views, and web integration.
- Animation states: initial state, action, state change, cause, result, final state.
- No dependency unless it materially helps. Three.js is justified for real 3D only.
- Respect reduced motion, provide a static fallback, and keep performance acceptable on mid-range phones.

## Review

Use `visual-review` on the rendered result. WebGL needs a real browser render, not a source read.
