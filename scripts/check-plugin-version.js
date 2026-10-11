#!/usr/bin/env node
// Read-only check: package.json version must match .claude-plugin/plugin.json version.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const plugin = JSON.parse(
  fs.readFileSync(path.join(root, ".claude-plugin", "plugin.json"), "utf8")
);

if (pkg.version !== plugin.version) {
  console.error(
    `Version mismatch: package.json is ${pkg.version}, .claude-plugin/plugin.json is ${plugin.version}`
  );
  process.exit(1);
}

console.log(`OK: both package.json and plugin.json are at ${pkg.version}`);
