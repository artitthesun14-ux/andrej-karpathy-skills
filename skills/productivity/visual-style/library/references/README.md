# Reference Images

Put real reference images here, one folder per style: `references/<style-id>/<file>`.

Register each image in that style's `reference_images` in `styles.json`:

```json
{ "path": "references/luxury-editorial/spread-01.jpg", "source": "Supplied by the user, 2026-10-11", "license": "Internal reference only", "kind": "user-supplied" }
```

Rules:

- `kind` separates real references (`user-supplied`, `licensed`, `public-domain`) from images made for illustration (`generated`). The gallery labels them differently.
- Record where the image came from and what it may be used for. If unknown, do not add it.
- References teach principles. Do not reproduce a referenced work in new output.
- Keep files small (long edge 1600 px or less, WebP or JPEG).
- `node scripts/library.mjs check` fails when a registered path does not exist.
