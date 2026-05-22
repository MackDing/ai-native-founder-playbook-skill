# Submission Draft: Cursor Marketplace

## Name

AI-Native Founder Playbook

## Short Description

Bilingual Agent Skill for startup stage gates, MVP planning, PMF diagnostics, launch operations, and scale-stage moat workflows.

## Long Description

AI-Native Founder Playbook is a bilingual Agent Skill for founders and AI coding agents. It turns AI-native startup strategy into reusable workflows for Idea, MVP, Launch, and Scale stages. Use it to validate startup ideas before building, define MVP scope, create architecture context for coding agents, diagnose PMF, design launch operating systems, and build GTM, enterprise-readiness, data flywheel, and moat narratives.

The skill is vendor-neutral and works with Cursor, Claude Code, OpenAI Codex, VS Code Copilot, GitHub Copilot, Trae, OpenClaw, hermers-agent, Gemini CLI, and other clients that can read `SKILL.md`.

## Install Pattern

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agents/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agents/skills/
```

Add this Cursor rule:

```text
When startup strategy, MVP scope, PMF, launch operations, GTM, or founder workflows are relevant, use .agents/skills/ai-native-founder-playbook. Read SKILL.md first, then load references only as needed.
```

## Tags

agent-skills, ai-native-startup, founder-playbook, startup-strategy, mvp, product-market-fit, cursor, ai-agents

## Links

- Repository: https://github.com/MackDing/ai-native-founder-playbook-skill
- Skill directory: https://github.com/MackDing/ai-native-founder-playbook-skill/tree/main/ai-native-founder-playbook
- ClawHub listing: https://clawhub.ai/mackding/ai-native-founder-playbook
- Distribution guide: https://github.com/MackDing/ai-native-founder-playbook-skill/blob/main/DISTRIBUTION.md
- OPC product: https://opc.ren/
- OPC community: https://t.me/opc_ren
- OPC official media: https://x.com/opc_ren

## Notes

This is an independent open-source project. It is not affiliated with Anthropic, Cursor, OpenAI, or GitHub.
