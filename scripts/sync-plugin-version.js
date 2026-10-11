#!/usr/bin/env node
// Copy package.json's version into .claude-plugin/plugin.json after `changeset version`.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const pluginPath = path.join(root, ".claude-plugin", "plugin.json");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const plugin = JSON.parse(fs.readFileSync(pluginPath, "utf8"));

plugin.version = pkg.version;

fs.writeFileSync(pluginPath, JSON.stringify(plugin, null, 2) + "\n");
console.log(`Synced .claude-plugin/plugin.json to version ${pkg.version}`);
