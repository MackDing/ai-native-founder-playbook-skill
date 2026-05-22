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
  path.join(skillDir, "references", "workflows.md"),
  path.join(skillDir, "references", "templates.md"),
  path.join(skillDir, "references", "source-map.md"),
  path.join(skillDir, "scripts", "stage-checklist.mjs"),
  path.join(root, "assets", "founders-playbook-cover.png"),
  path.join(root, "docs", "The-Founders-Playbook-05062026_v3.pdf"),
  path.join(root, "docs", "创业者手册-构建AI原生创业公司-中文.pdf"),
  path.join(root, "README.md"),
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
      .map((line) => line.split(":")[0])
      .filter(Boolean)
      .filter((key) => !["name", "description"].includes(key));
    if (extraFrontmatterKeys.length > 0) {
      failures.push(`Unexpected frontmatter keys: ${extraFrontmatterKeys.join(", ")}`);
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

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Skill validation passed.");
