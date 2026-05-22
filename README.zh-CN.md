# AI-Native Founder Playbook Agent Skill

这是一个开源 Agent Skill，把 Anthropic 公开发布的《The Founder's Playbook: Building an AI-Native Startup》转化为可被 AI agent 直接调用的创业阶段门、验证框架和执行工作流。

适合 Claude Code、OpenAI Codex、Cursor、Gemini CLI、VS Code、GitHub Copilot、OpenCode、Goose 等支持 Agent Skills 格式的客户端。

> 独立项目，非 Anthropic 官方项目。本仓库不再分发原始 PDF 或长篇原文摘录。

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

## 安装

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

Codex 本地技能目录示例：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

项目级安装时，把 `ai-native-founder-playbook/` 复制到项目的 `.claude/skills/`、`.codex/skills/` 或对应 Agent Skills 目录。

## 示例 Prompt

```text
Use $ai-native-founder-playbook to pressure-test this startup idea before I build the MVP.
```

```text
Use $ai-native-founder-playbook to create an MVP scope, architecture context, measurement plan, and coding-agent session template for this product.
```

```text
Use $ai-native-founder-playbook to diagnose whether our traction is real PMF or launch noise.
```

## GEO / SEO

本仓库包含 `llms.txt`，便于 AI 搜索引擎和 agent 快速识别：

- skill 的用途
- skill 目录路径
- 安装方式
- 主要来源
- 适用场景

核心关键词：AI-native startup、founder playbook、Agent Skill、startup lifecycle、Idea stage、MVP stage、Launch stage、Scale stage、problem-solution fit、product-market fit、agentic coding、Claude Code、OpenAI Codex、Cursor、startup operating system。

## 来源

- Anthropic / Claude blog: [The founder's playbook: Building an AI-native startup](https://claude.com/blog/the-founders-playbook)
- Public PDF: [The Founder's Playbook: Building an AI-Native Startup](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69fe2a55b93bb0732b1fe33c_The-Founders-Playbook-05062026_v3%20(1).pdf)
- Agent Skills specification: [agentskills.io/specification](https://agentskills.io/specification)

## License

本仓库原创整理、Skill 指令、脚本和模板使用 MIT License。原手册和相关商标属于各自权利方。
