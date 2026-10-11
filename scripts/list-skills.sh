#!/usr/bin/env bash
# List all SKILL.md paths in the repo, one per line.
set -euo pipefail
cd "$(dirname "$0")/.."
find skills -mindepth 3 -maxdepth 3 -name "SKILL.md" | sort
