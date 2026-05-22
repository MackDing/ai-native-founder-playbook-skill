#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillDir = path.join(root, "ai-native-founder-playbook");
const skillFile = path.join(skillDir, "SKILL.md");
const required = [
  skillFile,
  path.join(skillDir, "agents", "openai.yaml"),
  path.join(skillDir, "references", "stage-gates.md"),
  path.join(skillDir, "references", "stage-gates.zh.md"),
  path.join(skillDir, "references", "workflows.md"),
  path.join(skillDir, "references", "workflows.zh.md"),
  path.join(skillDir, "references", "templates.md"),
  path.join(skillDir, "references", "templates.zh.md"),
  path.join(skillDir, "references", "source-map.md"),
  path.join(skillDir, "references", "source-map.zh.md"),
  path.join(skillDir, "scripts", "stage-checklist.mjs"),
  path.join(root, "assets", "founders-playbook-cover.png"),
  path.join(root, "docs", "The-Founders-Playbook-05062026_v3.pdf"),
  path.join(root, "docs", "创业者手册-构建AI原生创业公司-中文.pdf"),
  path.join(root, "README.md"),
  path.join(root, "README.zh.md"),
  path.join(root, "DISTRIBUTION.md"),
  path.join(root, ".agents", "skills", "ai-native-founder-playbook", "SKILL.md"),
  path.join(root, ".agents", "plugins", "marketplace.json"),
  path.join(root, "plugins", "ai-native-founder-playbook", ".codex-plugin", "plugin.json"),
  path.join(root, "plugins", "ai-native-founder-playbook", "assets", "founders-playbook-cover.png"),
  path.join(root, "plugins", "ai-native-founder-playbook", "docs", "The-Founders-Playbook-05062026_v3.pdf"),
  path.join(root, "plugins", "ai-native-founder-playbook", "docs", "创业者手册-构建AI原生创业公司-中文.pdf"),
  path.join(root, "plugins", "ai-native-founder-playbook", "skills", "ai-native-founder-playbook", "SKILL.md"),
  path.join(root, "submissions", "awesome-copilot.md"),
  path.join(root, "submissions", "cursor-marketplace.md"),
  path.join(root, "llms.txt"),
  path.join(root, "LICENSE")
];

const failures = [];

for (const file of required) {
  if (!existsSync(file)) failures.push(`Missing required file: ${path.relative(root, file)}`);
}

if (existsSync(skillFile)) {
  const text = readFileSync(skillFile, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    failures.push("SKILL.md must start with YAML frontmatter.");
  } else {
    const frontmatter = match[1];
    const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1]?.trim();

    if (name !== "ai-native-founder-playbook") {
      failures.push("SKILL.md name must be ai-native-founder-playbook.");
    }
    if (!description || description.length > 1024) {
      failures.push("SKILL.md description must be 1-1024 characters.");
    }
    if (name && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
      failures.push("Skill name must use lowercase letters, numbers, and single hyphens.");
    }
    const extraFrontmatterKeys = frontmatter
      .split("\n")
      .filter((line) => line.trim() && !/^\s/.test(line))
      .map((line) => line.split(":")[0])
      .filter((key) => !["name", "description", "metadata"].includes(key));
    if (extraFrontmatterKeys.length > 0) {
      failures.push(`Unexpected frontmatter keys: ${extraFrontmatterKeys.join(", ")}`);
    }

    if (!frontmatter.includes("homepage: https://github.com/MackDing/ai-native-founder-playbook-skill")) {
      failures.push("SKILL.md should include OpenClaw homepage metadata for registry provenance.");
    }
  }

  if (/TODO|\[TODO/i.test(text)) {
    failures.push("SKILL.md still contains TODO placeholders.");
  }
}

const rootTextFiles = ["README.md", "README.zh-CN.md", "llms.txt", "NOTICE"];
for (const fileName of rootTextFiles) {
  const file = path.join(root, fileName);
  if (existsSync(file) && /69fe2a55[\s\S]{10000,}/.test(readFileSync(file, "utf8"))) {
    failures.push(`${fileName} appears to contain a raw source dump.`);
  }
}

const mirrorRoot = path.join(root, "plugins", "ai-native-founder-playbook", "skills", "ai-native-founder-playbook");
const mirrorFiles = [
  "SKILL.md",
  path.join("agents", "openai.yaml"),
  path.join("references", "stage-gates.md"),
  path.join("references", "stage-gates.zh.md"),
  path.join("references", "workflows.md"),
  path.join("references", "workflows.zh.md"),
  path.join("references", "templates.md"),
  path.join("references", "templates.zh.md"),
  path.join("references", "source-map.md"),
  path.join("references", "source-map.zh.md"),
  path.join("scripts", "stage-checklist.mjs")
];

for (const relPath of mirrorFiles) {
  const canonical = path.join(skillDir, relPath);
  const mirror = path.join(mirrorRoot, relPath);
  if (!existsSync(mirror)) {
    failures.push(`Missing plugin mirror file: ${path.relative(root, mirror)}`);
    continue;
  }
  if (existsSync(canonical) && readFileSync(canonical, "utf8") !== readFileSync(mirror, "utf8")) {
    failures.push(`Plugin mirror is out of sync: ${relPath}`);
  }
}

const compatibilityFile = path.join(root, ".agents", "skills", "ai-native-founder-playbook", "SKILL.md");
if (existsSync(compatibilityFile)) {
  const text = readFileSync(compatibilityFile, "utf8");
  if (!text.includes("../../../ai-native-founder-playbook/SKILL.md")) {
    failures.push(".agents compatibility entry must point to the canonical skill.");
  }
}

const pluginJsonFile = path.join(root, "plugins", "ai-native-founder-playbook", ".codex-plugin", "plugin.json");
if (existsSync(pluginJsonFile)) {
  try {
    const plugin = JSON.parse(readFileSync(pluginJsonFile, "utf8"));
    if (plugin.name !== "ai-native-founder-playbook") failures.push("Codex plugin name must be ai-native-founder-playbook.");
    if (plugin.skills !== "./skills/") failures.push("Codex plugin skills path must be ./skills/.");
    if (!plugin.interface?.displayName) failures.push("Codex plugin interface.displayName is required.");
  } catch (error) {
    failures.push(`Codex plugin JSON is invalid: ${error.message}`);
  }
}

const marketplaceFile = path.join(root, ".agents", "plugins", "marketplace.json");
if (existsSync(marketplaceFile)) {
  try {
    const marketplace = JSON.parse(readFileSync(marketplaceFile, "utf8"));
    const entry = marketplace.plugins?.find((plugin) => plugin.name === "ai-native-founder-playbook");
    if (!entry) failures.push("Marketplace must include ai-native-founder-playbook.");
    if (entry && entry.source?.path !== "./plugins/ai-native-founder-playbook") {
      failures.push("Marketplace path must be ./plugins/ai-native-founder-playbook.");
    }
    if (entry && !entry.policy?.installation) failures.push("Marketplace entry must include policy.installation.");
    if (entry && !entry.policy?.authentication) failures.push("Marketplace entry must include policy.authentication.");
  } catch (error) {
    failures.push(`Marketplace JSON is invalid: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Skill validation passed.");
