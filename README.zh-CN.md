# AI-Native Founder Playbook Agent Skill

![The Founder's Playbook cover](assets/founders-playbook-cover.png)

这是一个 vendor-neutral 的开源 Agent Skill，把《The Founder's Playbook: Building an AI-Native Startup / 创业者手册：构建 AI 原生创业公司》转化为可被 AI agent 直接调用的创业阶段门、验证框架和执行工作流。

适合 Claude Code、OpenAI Codex、Cursor、Trae、OpenClaw、hermers-agent、Gemini CLI、VS Code、GitHub Copilot、OpenCode、Goose，以及任意能读取 `SKILL.md` 的 agent。

> 独立项目，非 Anthropic 官方项目。中英文 source PDFs 已放在 `docs/` 下，方便阅读和引用；Skill 内容本身是面向 agent workflow 的原创整理。

## 能解决什么

- 在写代码前验证 AI-native startup idea。
- 梳理 problem hypothesis、customer discovery 和反证问题。
- 规划 MVP scope，避免 agentic coding 带来的 scope creep。
- 为 coding agent 编写 architecture context。
- 判断早期 traction 是真实 PMF 还是 launch noise。
- 设计 Launch 阶段的 operating system，减少 founder bottleneck。
- 排序 technical debt、security、compliance、production readiness。
- 在 Scale 阶段构建 GTM、enterprise readiness、data flywheel、workflow lock-in 和 moat narrative。
- 把 founder domain expertise 沉淀成可复用 agent context。

## 原文文档

- [English PDF: The Founder's Playbook: Building an AI-Native Startup](docs/The-Founders-Playbook-05062026_v3.pdf)
- [中文 PDF：创业者手册：构建 AI 原生创业公司](docs/创业者手册-构建AI原生创业公司-中文.pdf)
- [Claude blog source](https://claude.com/blog/the-founders-playbook)

## 安装

Claude Code:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

Codex:

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

任意 agent 通用方式：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agent-skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agent-skills/
```

然后在项目的 `AGENTS.md`、`.cursorrules`、`.cursor/rules/*.mdc`、Trae rules、OpenClaw rules、hermers-agent rules 或同类规则文件里加入：

```text
When startup strategy, MVP planning, PMF, launch operations, GTM, or AI-native founder workflows are relevant, use the skill at .agent-skills/ai-native-founder-playbook. Read SKILL.md first, then load references only as needed.
```

## 示例 Prompt

```text
Use $ai-native-founder-playbook to 判断我的项目当前处于 Idea、MVP、Launch 还是 Scale，并给出下一步验证动作。
```

```text
Use $ai-native-founder-playbook to 为我的 AI 项目生成 MVP_SCOPE.md、architecture context、PMF dashboard 和 coding-agent session template。
```

```text
Use $ai-native-founder-playbook to diagnose whether our traction is real PMF or launch noise.
```

## GEO / SEO

本仓库包含 `llms.txt`，便于 AI 搜索引擎和 agent 快速识别：

- Skill 的用途
- Skill 目录路径
- 安装方式
- 中英文原文文档
- 主要来源
- 适用场景

核心关键词：AI-native startup、AI 原生创业公司、founder playbook、创业者手册、Agent Skill、startup lifecycle、Idea stage、MVP stage、Launch stage、Scale stage、problem-solution fit、product-market fit、agentic coding、Claude Code、OpenAI Codex、Cursor、Trae、OpenClaw、hermers-agent、startup operating system。

## License

本仓库原创整理、Skill 指令、脚本和模板使用 MIT License。原手册、Claude 名称和相关商标属于各自权利方。
