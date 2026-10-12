#!/usr/bin/env node
// Copy package.json's version into .claude-plugin/plugin.json and marketplace.json (runs as the npm `version` hook).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const pluginPath = path.join(root, ".claude-plugin", "plugin.json");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const plugin = JSON.parse(fs.readFileSync(pluginPath, "utf8"));

plugin.version = pkg.version;

fs.writeFileSync(pluginPath, JSON.stringify(plugin, null, 2) + "\n");

const marketplacePath = path.join(root, ".claude-plugin", "marketplace.json");
const marketplace = JSON.parse(fs.readFileSync(marketplacePath, "utf8"));
for (const entry of marketplace.plugins) {
  if (entry.name === plugin.name) entry.version = pkg.version;
}
fs.writeFileSync(marketplacePath, JSON.stringify(marketplace, null, 2) + "\n");

console.log(`Synced plugin.json and marketplace.json to version ${pkg.version}`);
