# Invocation Rules

Every skill in this repo is either user-invoked or model-invoked.

## User-invoked

- Called explicitly by the person, as a slash command (`/research`, `/to-spec`, and so on).
- Must set `disable-model-invocation: true` in the skill's frontmatter.
- Must have a matching entry in `openai.yaml`.
- Must never call another user-invoked skill directly. If one workflow step needs
  another, the router (`workflow-router`) or the person decides to invoke the next
  command; the skill itself does not chain into it.

All eleven skills under `skills/engineering/` (research, grill-with-docs, to-spec,
ux-design, ui-design, prototype, to-tickets, implement, test, code-review,
experiment) are user-invoked, matching the `/command` workflow in `README.md`.

## Model-invoked

- Callable by the model on its own judgment, without the person typing a command.
- Does not set `disable-model-invocation: true`.
- Not listed in `openai.yaml`.
- Reserved for skills added later under `productivity/` or `misc/` that support the
  workflow steps but are not themselves workflow stages (for example, a lookup or
  formatting helper).

## Choosing which step to run

Do not run the full workflow by default. Match the step to the size of the task:

- Small bug fix: `/implement` -> `/test` -> `/code-review`.
- New feature design: `/research` -> `/grill-with-docs` -> `/to-spec` -> `/ux-design`
  -> `/ui-design` -> `/prototype`.
- Full feature build: the entire workflow, in order.
- Data-driven design change: `/experiment`, then loop back into `/ux-design` or
  `/ui-design` based on the result.

## Adding a new step

If a new workflow step is added between two existing ones:

1. Create `skills/engineering/<name>/SKILL.md` with `disable-model-invocation: true`.
2. Update the previous and next skill's "Workflow position" section.
3. Update `README.md`'s workflow diagram and skills table.
4. Update `.claude-plugin/plugin.json`.
5. Add a `docs/engineering/<name>.md` page.
6. Add an entry to `openai.yaml`.
7. Update `workflow-router`.
