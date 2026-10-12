#!/usr/bin/env node
// Read-only check: package.json version must match plugin.json and its marketplace.json entry.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const plugin = JSON.parse(
  fs.readFileSync(path.join(root, ".claude-plugin", "plugin.json"), "utf8")
);

const marketplace = JSON.parse(
  fs.readFileSync(path.join(root, ".claude-plugin", "marketplace.json"), "utf8")
);
const entry = marketplace.plugins.find((p) => p.name === plugin.name);

const errors = [];
if (pkg.version !== plugin.version) {
  errors.push(`package.json is ${pkg.version}, .claude-plugin/plugin.json is ${plugin.version}`);
}
if (!entry) {
  errors.push(`.claude-plugin/marketplace.json has no plugin entry named ${plugin.name}`);
} else if (pkg.version !== entry.version) {
  errors.push(`package.json is ${pkg.version}, .claude-plugin/marketplace.json is ${entry.version}`);
}

if (errors.length) {
  for (const e of errors) console.error(`Version mismatch: ${e}`);
  process.exit(1);
}

console.log(`OK: package.json, plugin.json, and marketplace.json are at ${pkg.version}`);
