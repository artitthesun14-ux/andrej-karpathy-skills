# Scene and Camera Guidelines

Read when building a 3D or technical scene, or planning exploded, cutaway, or layered views.

## Scene structure

- Group parts by function (one group per assembly). Name groups after the real part.
- Set a clear origin and scale. Keep units consistent.
- Separate data (parts, relations, steps) from rendering so the story can change without rebuilding geometry.

## Camera

- Start with an orienting wide shot, then move toward the point of interest.
- One camera move per idea. Ease in and out. Avoid constant drift.
- Use a perspective camera for objects, orthographic for diagrams and schematics.
- Keep the subject framed on phone and desktop aspect ratios. Test both.
- Interactive orbit: limit angles and zoom so the viewer cannot get lost. Offer a reset.

## Lighting and materials

- Key light plus soft fill plus a subtle rim. Avoid flat or harsh lighting.
- Use material contrast to separate parts (matte body, glossy detail). Highlight the active part, dim the rest.
- Keep texture and shadow cost low. Prefer simple geometry.

## Exploded view

Move parts along their assembly axis, in assembly order, with consistent spacing. Show connection lines to preserve relationships. Animate separation then reassembly so the viewer sees the order.

## Cutaway and layers

Clip or fade the outer layer to reveal the inner one. Label what is revealed. Keep one reference silhouette so position stays understood.

## Mechanical motion

Animate cause then effect (input moves, linked part follows). Respect real constraints (pivot points, travel limits, gear ratios) when known. State when motion is illustrative.

## Web integration

- Lazy load the scene. Show a poster or static fallback while loading and for reduced motion.
- Pause rendering when offscreen. Cap pixel ratio. Dispose geometries and textures on teardown.
- Provide text alternatives for the key message.
