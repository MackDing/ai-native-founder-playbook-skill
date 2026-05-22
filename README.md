# AI-Native Founder Playbook Agent Skill

An open-source Agent Skill that turns Anthropic's public "The Founder's Playbook: Building an AI-Native Startup" into reusable, agent-readable startup operating knowledge.

Use it with Claude Code, OpenAI Codex, Cursor, Gemini CLI, VS Code, GitHub Copilot, OpenCode, Goose, and other clients that support the Agent Skills format. The skill helps founders and AI agents reason through the four AI-native startup stages: Idea, MVP, Launch, and Scale.

> Independent project. Not affiliated with Anthropic. The original ebook is not redistributed in this repository.

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

## Install

Copy the skill folder into your agent's skills directory:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

For Codex-style local skills:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

For project-local use, copy `ai-native-founder-playbook/` into your repository's `.claude/skills/`, `.codex/skills/`, or equivalent Agent Skills directory.

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
Use $ai-native-founder-playbook to design a launch-stage operating system that removes me as the bottleneck.
```

## Repository Structure

```text
ai-native-founder-playbook/
  SKILL.md
  agents/openai.yaml
  references/
    stage-gates.md
    workflows.md
    templates.md
    source-map.md
  scripts/
    stage-checklist.mjs
llms.txt
scripts/validate-skill.mjs
```

## For Agents And Search Engines

This repository includes `llms.txt` so AI agents and generative search systems can quickly discover the canonical skill path, purpose, install target, and source map.

Primary keywords: AI-native startup, founder playbook, Agent Skill, startup lifecycle, Idea stage, MVP stage, Launch stage, Scale stage, problem-solution fit, product-market fit, agentic coding, Claude Code, OpenAI Codex, Cursor, startup operating system, GEO, SEO.

## Sources

- Anthropic / Claude blog: [The founder's playbook: Building an AI-native startup](https://claude.com/blog/the-founders-playbook)
- Public PDF: [The Founder's Playbook: Building an AI-Native Startup](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69fe2a55b93bb0732b1fe33c_The-Founders-Playbook-05062026_v3%20(1).pdf)
- Agent Skills overview: [agentskills.io](https://agentskills.io/home)
- Agent Skills specification: [agentskills.io/specification](https://agentskills.io/specification)
- Skill creator best practices: [agentskills.io/skill-creation/best-practices](https://agentskills.io/skill-creation/best-practices)

## Validation

```bash
npm test
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea
```

## License And Attribution

This repository's original synthesis, skill instructions, scripts, and templates are released under the MIT License.

The source playbook and Claude-related trademarks belong to their respective owners. This project summarizes and operationalizes publicly available ideas for agent workflows; it does not include the original PDF or long verbatim excerpts.
