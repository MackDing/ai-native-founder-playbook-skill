<h1 align="center">AI-Native Founder Playbook Agent Skill</h1>

<p align="center">
<a href="https://github.com/MackDing/ai-native-founder-playbook-skill"><img alt="Agent Skill" src="https://img.shields.io/badge/Agent%20Skill-AI--Native%20Founder%20Playbook-111827" /></a>
<a href="https://github.com/MackDing/ai-native-founder-playbook-skill/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/MackDing/ai-native-founder-playbook-skill?color=blue" /></a>
<a href="https://opc.ren/"><img alt="OPC" src="https://img.shields.io/badge/OPC-AI%20Growth%20Operator-f97316" /></a>
<br />
English | <a href="./README.zh.md">简体中文</a>
</p>

> [OPC · AI Growth Operator](https://opc.ren/): an AI growth operating system for solo founders that diagnoses business bottlenecks with cited data, back-calculates market and channel strategy, and keeps the content → publish → data reflow → review growth loop moving.

![The Founder's Playbook cover](assets/founders-playbook-cover.png)

An open-source, bilingual, vendor-neutral Agent Skill that turns Anthropic's public **The Founder's Playbook: Building an AI-Native Startup** into reusable startup operating knowledge for AI agents.

Use it with Claude Code, OpenAI Codex, Cursor, Trae, OpenClaw, hermers-agent, Gemini CLI, VS Code, GitHub Copilot, OpenCode, Goose, or any agent that can read `SKILL.md` and follow filesystem-based instructions.

> Independent project. Not affiliated with Anthropic. Source PDFs are included under `docs/` for convenient reading and attribution; the reusable skill content is independent operational synthesis.

## What This Skill Helps With

- Validate AI-native startup ideas before building.
- Sharpen problem hypotheses and customer discovery plans.
- Plan MVP scope without agentic coding sprawl.
- Write architecture context for coding agents.
- Detect false product-market fit.
- Build launch-stage operating systems that reduce founder bottlenecks.
- Sequence technical debt, security, compliance, and production-readiness work.
- Build scale-stage GTM, enterprise-readiness, data flywheel, and workflow lock-in narratives.
- Convert founder domain expertise into durable agent context.

## Source Documents

- [English PDF: The Founder's Playbook: Building an AI-Native Startup](docs/The-Founders-Playbook-05062026_v3.pdf)
- [Chinese PDF: 创业者手册：构建 AI 原生创业公司](docs/创业者手册-构建AI原生创业公司-中文.pdf)
- [Claude blog source](https://claude.com/blog/the-founders-playbook)

## Install

### Skills CLI

If your agent environment supports the Skills CLI:

```bash
npx skills add MackDing/ai-native-founder-playbook-skill
```

### Claude Code

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

### OpenAI Codex

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

### Cursor, Trae, OpenClaw, hermers-agent, and other agents

Use the project-local pattern. Copy the skill into your repository and tell the agent to read it:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agent-skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agent-skills/
```

Then add this instruction to your repo's agent instruction file (`AGENTS.md`, `.cursorrules`, `.cursor/rules/*.mdc`, Trae rules, OpenClaw rules, hermers-agent rules, or equivalent):

```text
When startup strategy, MVP planning, PMF, launch operations, GTM, or AI-native founder workflows are relevant, use the skill at .agent-skills/ai-native-founder-playbook. Read SKILL.md first, then load references only as needed.
```

## Skills

| Skill | Trigger | What it does |
| --- | --- | --- |
| `$ai-native-founder-playbook` | "startup idea", "MVP scope", "PMF", "launch operations", "GTM", "AI-native startup", "创业想法", "产品市场匹配", "增长闭环" | Diagnoses startup stage, identifies the next evidence gate, produces founder-agent workflows, and generates reusable strategy artifacts. |

## Example Prompts

```text
Use $ai-native-founder-playbook to pressure-test this startup idea before I build the MVP.
```

```text
Use $ai-native-founder-playbook to create an MVP scope, architecture context, measurement plan, and coding-agent session template for this product.
```

```text
Use $ai-native-founder-playbook to diagnose whether our traction is real PMF or launch noise.
```

```text
Use $ai-native-founder-playbook to 判断我的项目当前处于 Idea、MVP、Launch 还是 Scale，并给出下一步验证动作。
```

## Bilingual Behavior

The skill adapts to the user's dominant language:

- English input → English output and English references by default.
- Chinese input → Chinese output and Chinese references by default.
- Mixed input → preserve important English product, model, framework, and startup terms while explaining in Chinese when helpful.

## Directory Structure

```text
├── ai-native-founder-playbook/          # Installable Agent Skill
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   ├── references/
│   │   ├── stage-gates.md
│   │   ├── stage-gates.zh.md
│   │   ├── workflows.md
│   │   ├── workflows.zh.md
│   │   ├── templates.md
│   │   ├── templates.zh.md
│   │   ├── source-map.md
│   │   └── source-map.zh.md
│   └── scripts/stage-checklist.mjs
├── assets/founders-playbook-cover.png
├── docs/
│   ├── The-Founders-Playbook-05062026_v3.pdf
│   └── 创业者手册-构建AI原生创业公司-中文.pdf
├── llms.txt
├── README.md
└── README.zh.md
```

## For Agents And Search Engines

This repository includes `llms.txt` so AI agents and generative search systems can quickly discover the canonical skill path, language behavior, install target, source documents, and source map.

Primary keywords: AI-native startup, founder playbook, Agent Skill, startup lifecycle, Idea stage, MVP stage, Launch stage, Scale stage, problem-solution fit, product-market fit, agentic coding, Claude Code, OpenAI Codex, Cursor, Trae, OpenClaw, hermers-agent, startup operating system, GEO, SEO, bilingual skill.

## Update

```bash
cd ai-native-founder-playbook-skill
git pull origin main
npm test
```

Restart your agent after updating if your client caches skills.

## Validation

```bash
npm test
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea zh
```

## Sources

- Anthropic / Claude blog: [The founder's playbook: Building an AI-native startup](https://claude.com/blog/the-founders-playbook)
- Included English PDF: [The Founder's Playbook: Building an AI-Native Startup](docs/The-Founders-Playbook-05062026_v3.pdf)
- Included Chinese PDF: [创业者手册：构建 AI 原生创业公司](docs/创业者手册-构建AI原生创业公司-中文.pdf)
- Agent Skills overview: [agentskills.io](https://agentskills.io/home)
- Agent Skills specification: [agentskills.io/specification](https://agentskills.io/specification)
- Skill creator best practices: [agentskills.io/skill-creation/best-practices](https://agentskills.io/skill-creation/best-practices)
- Reference layout inspired by [marswaveai/skills](https://github.com/marswaveai/skills/tree/main)

## Supported Clients

Claude Code · OpenAI Codex · Cursor · Trae · OpenClaw · hermers-agent · Gemini CLI · VS Code · GitHub Copilot · OpenCode · Goose · and more.

## License And Attribution

This repository's original synthesis, skill instructions, scripts, and templates are released under the MIT License.

The source playbook and Claude-related trademarks belong to their respective owners. This project summarizes and operationalizes publicly available ideas for agent workflows and includes the source PDFs for convenient reading and attribution.
