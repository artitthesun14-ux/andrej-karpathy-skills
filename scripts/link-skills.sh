#!/usr/bin/env bash
# Update local skill symlinks after adding, removing, or renaming skills.
# Mirrors every skills/<bucket>/<name> directory into .claude/skills/<name>
# so a local Claude Code checkout picks up the skill without duplication.
set -euo pipefail
cd "$(dirname "$0")/.."

TARGET_DIR=".claude/skills"
mkdir -p "$TARGET_DIR"

# Remove stale symlinks first.
find "$TARGET_DIR" -maxdepth 1 -type l -exec rm {} \;

for bucket in skills/*/; do
  bucket_name="$(basename "$bucket")"
  [ "$bucket_name" = "deprecated" ] && continue
  for skill_dir in "$bucket"*/; do
    [ -d "$skill_dir" ] || continue
    skill_name="$(basename "$skill_dir")"
    ln -s "../../$skill_dir" "$TARGET_DIR/$skill_name"
  done
done

echo "Linked skills into $TARGET_DIR:"
ls -1 "$TARGET_DIR"
