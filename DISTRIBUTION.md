# Distribution Guide

This repository publishes `ai-native-founder-playbook` as a bilingual, vendor-neutral Agent Skill. GitHub is the canonical source; platform-specific entries should point back here.

## Canonical Source

- Repository: https://github.com/MackDing/ai-native-founder-playbook-skill
- Skill path: `ai-native-founder-playbook/`
- Generic compatibility path: `.agents/skills/ai-native-founder-playbook/`
- Codex plugin path: `plugins/ai-native-founder-playbook/`
- Source PDFs: `docs/`
- Agent discovery file: `llms.txt`

## OpenAI Codex

Use the Codex plugin package:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
```

Then install or test the plugin from:

```text
plugins/ai-native-founder-playbook
```

The plugin package includes the skill, cover image, and source PDFs so it can be reviewed as a standalone Codex plugin.

The repo marketplace entry is available at:

```text
.agents/plugins/marketplace.json
```

For a direct skill install without the plugin wrapper:

```bash
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

## Claude Code

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

For project-level use:

```bash
mkdir -p .claude/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .claude/skills/
```

## Generic `.agents/skills` Clients

For clients that scan `.agents/skills/`, clone the repository into a project or copy the compatibility entry:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agents/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agents/skills/
```

If the full repository is present, `.agents/skills/ai-native-founder-playbook/` also provides a lightweight compatibility entry that routes agents to the canonical skill.

## Cursor

Use a project-level installation:

```bash
mkdir -p .agents/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agents/skills/
```

Add a Cursor rule:

```text
When startup strategy, MVP scope, PMF, launch operations, GTM, or founder workflows are relevant, use .agents/skills/ai-native-founder-playbook. Read SKILL.md first, then load references only as needed.
```

Marketplace submission copy is prepared in `submissions/cursor-marketplace.md`.

## VS Code And GitHub Copilot

Use one of the supported skill locations:

```bash
mkdir -p .github/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .github/skills/
```

or:

```bash
mkdir -p .agents/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agents/skills/
```

Submission copy for `github/awesome-copilot` is prepared in `submissions/awesome-copilot.md`.

## Gemini CLI And Other Agent Skills Clients

If the client supports direct repository installation:

```bash
gemini skills install https://github.com/MackDing/ai-native-founder-playbook-skill
```

If not, use the generic `.agents/skills` pattern.

## Community Directories

Prepared targets:

- `github/awesome-copilot`
- Cursor Marketplace
- agentskills.io ecosystem listings
- agentskills.to
- Hugging Face Skills or related agent resource directories

Keep submission copy aligned with `README.md`, `README.zh.md`, `llms.txt`, and GitHub repository topics.
