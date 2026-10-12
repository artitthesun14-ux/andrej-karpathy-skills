---
name: create-presentation
description: Single entry point for presentations (new decks, HTML or interactive slides, animated decks, visual stories). Reads the request, picks the route (create, create in a given style, restyle existing work, continue existing work), coordinates the specialist skills, keeps one brief across steps, and checks the rendered result.
disable-model-invocation: true
---

# /create-presentation (Create a Presentation)

Principle: one entry point, existing skills as specialists. This skill decides the route and carries the brief; the specialists do the specialist work.

## Purpose

The person says what they want, what content they have, and what result they expect. This skill:

1. Understands the goal of the presentation.
2. Inspects the content and files provided.
3. Sets the task type and size.
4. Picks the route.
5. Calls only the specialists the route needs.
6. Hands each one the complete brief (content, direction, constraints).
7. Checks the result against the goal.
8. Reports the result and its limits.

It does not do the specialists' work itself and does not restate their rules.

## How it reaches the specialists

`/visual-production` and `/visual-style` are user-invoked, and user-invoked skills never call each other (`.agents/invocation.md`). So this skill never runs those commands. It uses what they share instead:

- The model-invoked helpers they coordinate, called directly (table below).
- Their shared reference files, read as data: `../visual-style/references/style-direction.md` (style and palette selection, design direction, review against it), the style library under `../visual-style/library/` with its CLI `../visual-style/scripts/library.mjs`, and `../visual-production/references/visual-plan.md`.

Paths are relative to this skill's folder.

| Need | Specialist |
|---|---|
| Storyline, slide order, form per slide | `visual-storytelling` |
| Style and palette | style library plus `style-direction.md` |
| Slide roles, layout, deck build, navigation | `presentation-design` |
| Charts, KPI tiles | `dataviz` |
| Systems, mechanisms, layered or exploded views, 3D | `technical-visualization` |
| Motion between and inside slides | `motion-design`, then `animation-implementation`; `visual-prototyping` for complex sequences |
| Interactive controls (hover, expand, steps) | `interaction-motion` |
| Rendered review and fixes | `visual-review`; add `animation-review` when slides animate |
| Unclear or unverified facts | Check the provided sources. If research is needed, say so and suggest `/research` |

Call a specialist only when the route needs it. Load one style profile, not the library.

## Routes

Pick the route from the request and the files present. Do not make the person name it.

| Signals | Route |
|---|---|
| No existing deck; no style named | A. New |
| No existing deck; a style, palette, mix, or "show me options" named | B. New in a given style |
| Existing deck; change its look, motion, or layout | C. Transform |
| Existing deck; add, finish, or fix slides | D. Continue |

Ask only if the signals conflict (for example, an existing deck and "make a presentation about X" with no hint whether to extend or replace it).

### A. New

UNDERSTAND → CONTENT STRUCTURE → VISUAL PRODUCTION → REVIEW → FINAL

1. UNDERSTAND: read the provided files first. Fill the brief. Never invent facts, figures, or quotes; mark gaps.
2. CONTENT STRUCTURE: `visual-storytelling` produces the storyline (one job per slide, form per slide).
3. VISUAL PRODUCTION: pick style and palette automatically with `style-direction.md` (search, then take the best fit without a shortlist). For a medium or large deck, show the plan from `visual-plan.md`. Build with `presentation-design` and the specialists the storyline calls for. Use motion, diagrams, or 3D only where they explain something.
4. REVIEW and FINAL: the quality gate below.

### B. New in a given style

UNDERSTAND → VISUAL STYLE SELECTION → DESIGN DIRECTION → VISUAL PRODUCTION → REVIEW

- Map the named style, palette, or mix to library ids (`find --text` resolves aliases). Use the person's own colors with roles and a contrast check.
- If they asked for options, or named only a mood, present the shortlist of 3 from `style-direction.md` and wait for the choice.
- If style and palette are both clear, skip the shortlist.
- Write the design direction once, into the brief. VISUAL PRODUCTION then follows route A step 3 without choosing a style again.
- Never change a style the person chose. If it conflicts with readability, keep the style and fix the specific color or size, and say so.

### C. Transform an existing deck

INSPECT EXISTING WORK → IDENTIFY CHANGE SCOPE → APPLY STYLE OR MOTION → REVIEW → FINAL

1. Inspect the files and render the current deck before editing. Record in `preserve`: content, data, slide order, working features.
2. Set `change_scope` to exactly what was asked. "Change the colors" changes color tokens only, not layout, type, or motion. Widen the scope only with the person's agreement or when the request cannot work otherwise, and say which.
3. Apply: a new look uses `style-direction.md` and the library, mapped onto the existing structure; motion uses the motion specialists.
   A color change also covers colors hard-coded in SVG, charts, and images, and any text that names a color (legends, "actuals in teal").
4. Review: compare final-state renders with the step 1 renders; only the requested scope may differ. Then list the changes that matter (before and after where useful).

Do not rebuild the deck from scratch unless the person asks or the existing structure cannot carry the change; explain why if so.

### D. Continue an existing deck

1. Read the brief file if one exists (see Handoff), then inspect the deck: what is done, what is missing or broken.
2. Keep the existing design system: tokens, type, layouts, motion. New slides reuse existing slide patterns before inventing new ones.
3. Change only the slides concerned. Never create a second version of the deck alongside the first.
   Adding or removing a slide shifts numbering: update hard-coded slide counts and numbers, and tell the person which deep links now point elsewhere.
4. Review the changed slides and their neighbors at every target width (a reused pattern can lose its responsive rules), then update the brief.

## Handoff

Keep one brief for the whole job and pass it to each step instead of a vague instruction such as "follow the chosen design". Use the template in `references/presentation-brief.md`. Leave unknown fields as `unknown`; never fill them with guesses.

For a medium or large deck, save it as `presentation-brief.md` next to the deck so later sessions (route D) and other steps read the same decisions. Once the person picks a style or palette, it stays fixed in the brief until they change it.

## Questions

Use the request, the files, the project's existing design system, an existing brief, and `.ai/handoff/` before asking anything. Ask only when the answer would change the result significantly:

- New deck or edit of an existing one is unclear.
- Several files could be the source of truth.
- Constraints conflict.
- A style decision is genuinely the person's (they asked for options, or the content fits very different directions equally well).

Otherwise choose a sensible default, state it in one line, and continue.

## Quality gate

Apply the checks that fit the job; skip the rest.

- Content: the storyline reads in order; every slide has one job; no invented facts; text is no longer than needed.
- Visual: style and palette match the brief; type and layout show hierarchy; each slide's form fits its content; layouts are not repeated without reason.
- Motion: it explains or sequences something; timing does not block reading; reduced motion and performance are handled.
- Implementation: the deck opens and navigates in its target format; the rendered result was inspected with `visual-review` when a browser is available; responsive behavior matches the target.
- Direction: compare against the brief with `style-direction.md` > Review against the direction.

## Add to the gallery

When the person gives the link of their published Visual Style Library gallery (or the brief records one as `gallery_url`) and the session can publish artifacts, add the finished deck to it as a work. Skip this otherwise; never publish a deck the person has not seen.

1. Read the gallery's current `works.json` first (it may not exist yet). Keep every existing entry.
2. Publish to that same gallery link: the deck as `works/<id>/index.html` (a full HTML page with its own doctype), a cover screenshot of the first slide as `works/<id>/cover.jpg` when a browser is available, and `works.json` with the new entry added. Leave every other file of the gallery as it is.
3. Use the entry format in `../visual-style/references/library-schema.md` > works.json. The style and palette are the ones in the brief.
4. Give the deck a small link back to the gallery (`../../`).

## Report

End with: what was made or changed (files, and the gallery link when the deck was added to it), the route taken, style and palette used, what was verified and how, and what was not verified. Suggest the next command when one fits (for example `/code-review` for code, `/handoff` to pause).

## Rules

- Never run `/visual-production`, `/visual-style`, or any other user-invoked skill. Suggest it to the person if they need it outside this job.
- Do not copy specialist rules into this skill or into the brief; reference them.
- Do not re-run art direction when the brief already has a complete design direction.
- Do not restart the whole workflow for a small edit.

## Workflow position

Independent of the product workflow. For presentations, use this instead of choosing between `/visual-production` and `/visual-style`. Other visual work (animation, websites, brand) stays with those two commands. `/code-review` still applies to code.

See `README.md` for the full picture.
