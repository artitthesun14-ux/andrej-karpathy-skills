# Invocation Rules

Every skill in this repo is either user-invoked or model-invoked.

## User-invoked

- Called explicitly by the person, as a slash command (`/research`, `/to-spec`, and so on).
- Must set `disable-model-invocation: true` in the skill's frontmatter.
- Must have a matching entry in `openai.yaml`.
- Must never call another user-invoked skill directly. If one workflow step needs
  another, the router (`workflow-router`) or the person decides to invoke the next
  command; the skill itself does not chain into it.
- May call model-invoked skills, and may read another skill's shared files under
  `references/`, `library/`, or `scripts/` as data. Reading a shared file is not invoking
  that skill; following another user-invoked skill's `SKILL.md` workflow is.

All eleven skills under `skills/engineering/` (research, grill-with-docs, to-spec,
ux-design, ui-design, prototype, to-tickets, implement, test, code-review,
experiment) are user-invoked, matching the `/command` workflow in `README.md`.

## Model-invoked

- Callable by the model on its own judgment, without the person typing a command.
- Does not set `disable-model-invocation: true`.
- Not listed in `openai.yaml`.
- Reserved for skills under `productivity/` or `misc/` that support the
  workflow steps but are not themselves workflow stages (for example, a lookup or
  formatting helper). The animation and visual helper skills in `productivity/` are
  model-invoked. `/visual-production`, `/visual-style`, `/create-presentation`, and `/handoff` are the user-invoked
  skills in `productivity/`.

## Choosing which step to run

Do not run the full workflow by default. Match the step to the size of the task:

- Small bug fix: `/implement` -> `/test` -> `/code-review`.
- New feature design: `/research` -> `/grill-with-docs` -> `/to-spec` -> `/ux-design`
  -> `/ui-design` -> `/prototype`.
- Full feature build: the entire workflow, in order.
- Data-driven design change: `/experiment`, then loop back into `/ux-design` or
  `/ui-design` based on the result.
- Ending a session or continuing work in a new one: `/handoff`. It records state, issues,
  decisions, and next steps. It does not change code and does not commit.
- Presentation (new, restyled, or continued): `/create-presentation`. It routes to the
  presentation, style, motion, and review helpers itself.
- Animation, data story, or technical visualization: `/visual-production`.
  It picks the helper skills it needs. It does not replace the product workflow above.
- Choosing a visual style or color palette for any visual work (site, deck, animation, brand):
  `/visual-style`. It searches the style and color library and applies the choice.

## Adding a new step

If a new workflow step is added between two existing ones:

1. Create `skills/engineering/<name>/SKILL.md` with `disable-model-invocation: true`.
2. Update the previous and next skill's "Workflow position" section.
3. Update `README.md`'s workflow diagram and skills table.
4. Update `.claude-plugin/plugin.json`.
5. Add a `docs/engineering/<name>.md` page.
6. Add an entry to `openai.yaml`.
7. Update `workflow-router`.
