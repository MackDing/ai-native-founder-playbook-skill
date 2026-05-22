<h1 align="center">AI-Native Founder Playbook Agent Skill</h1>

<p align="center">
<a href="https://github.com/MackDing/ai-native-founder-playbook-skill"><img alt="Agent Skill" src="https://img.shields.io/badge/Agent%20Skill-AI--Native%20Founder%20Playbook-111827" /></a>
<a href="https://github.com/MackDing/ai-native-founder-playbook-skill/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/MackDing/ai-native-founder-playbook-skill?color=blue" /></a>
<a href="https://opc.ren/"><img alt="OPC" src="https://img.shields.io/badge/OPC-AI%20Growth%20Operator-f97316" /></a>
<a href="https://t.me/opc_ren"><img alt="OPC Telegram" src="https://img.shields.io/badge/Telegram-OPC%20Community-26A5E4" /></a>
<a href="https://x.com/opc_ren"><img alt="OPC on X" src="https://img.shields.io/badge/X-@opc__ren-111111" /></a>
<a href="https://github.com/MackDing/ai-native-founder-playbook-skill/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/MackDing/ai-native-founder-playbook-skill?style=social" /></a>
<br />
<a href="./README.md">English</a> | 简体中文
</p>

> [OPC · AI Growth Operator](https://opc.ren/)：面向 solo founders 的 AI 增长运营系统，用带来源的数据诊断业务瓶颈、反推市场与渠道策略，并持续跑通 content → publish → data reflow → review 的增长闭环。
>
> 社群：加入 [OPC Telegram 群](https://t.me/opc_ren)，一起讨论 AI-native growth、founder workflows 和 agent skill 更新。
>
> 官媒：关注 X 上的 [@opc_ren](https://x.com/opc_ren)。
>
> 如果这个 Skill 帮你的 AI Agent 更清晰地判断创业方向、MVP、PMF 和增长路径，欢迎给仓库点亮小星星，帮助更多创业者和 Agent 发现它：⭐ [MackDing/ai-native-founder-playbook-skill](https://github.com/MackDing/ai-native-founder-playbook-skill)

![The Founder's Playbook cover](assets/founders-playbook-cover.png)

这是一个开源、双语、vendor-neutral 的 Agent Skill，把 Anthropic 公开发布的 **The Founder's Playbook: Building an AI-Native Startup / 创业者手册：构建 AI 原生创业公司** 转化为 AI agent 可复用的创业操作系统。

适合 Claude Code、OpenAI Codex、Cursor、Trae、OpenClaw、hermers-agent、Gemini CLI、VS Code、GitHub Copilot、OpenCode、Goose，以及任意能读取 `SKILL.md` 并遵循文件系统指令的 agent。

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

### Skills CLI

如果你的 agent 环境支持 Skills CLI：

```bash
npx skills add MackDing/ai-native-founder-playbook-skill
```

### Claude Code

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.claude/skills/
```

### OpenAI Codex

如果你希望以 Codex plugin 的方式安装，使用这个插件包：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
```

Plugin path：

```text
plugins/ai-native-founder-playbook
```

Repo marketplace metadata：

```text
.agents/plugins/marketplace.json
```

如果只需要直接安装 Skill：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p ~/.codex/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook ~/.codex/skills/
```

### 通用 `.agents/skills` 客户端

如果你的 agent 会扫描 `.agents/skills/`，可以把 canonical skill 复制进去：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agents/skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agents/skills/
```

本仓库也内置 `.agents/skills/ai-native-founder-playbook/` 轻量兼容入口，方便直接浏览仓库的 agent 识别。

### Cursor、Trae、OpenClaw、hermers-agent 与其他 agent

使用项目级安装方式，把 skill 复制到项目里，并告诉 agent 读取它：

```bash
git clone https://github.com/MackDing/ai-native-founder-playbook-skill.git
mkdir -p .agent-skills
cp -R ai-native-founder-playbook-skill/ai-native-founder-playbook .agent-skills/
```

然后在项目的 agent 指令文件中加入，例如 `AGENTS.md`、`.cursorrules`、`.cursor/rules/*.mdc`、Trae rules、OpenClaw rules、hermers-agent rules 或同类规则文件：

```text
当任务涉及 startup strategy、MVP planning、PMF、launch operations、GTM 或 AI-native founder workflows 时，使用 .agent-skills/ai-native-founder-playbook。先读 SKILL.md，再按需加载 references。
```

## Skill

| Skill | 触发词 | 功能 |
| --- | --- | --- |
| `$ai-native-founder-playbook` | "创业想法"、"MVP scope"、"PMF"、"产品市场匹配"、"Launch operations"、"GTM"、"增长闭环"、"AI-native startup" | 判断创业阶段、识别下一道 evidence gate、生成 founder-agent workflows，并产出可复用策略文档。 |

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

## 双语行为

这个 Skill 会根据用户主要语言输出：

- 英文输入 → 默认英文输出并加载英文 references。
- 中文输入 → 默认中文输出并加载中文 references。
- 中英混合 → 保留重要英文产品名、模型名、框架名、startup 术语，同时用中文解释。

## 目录结构

```text
├── .agents/
│   ├── skills/ai-native-founder-playbook/ # 通用兼容入口
│   └── plugins/marketplace.json           # Codex repo marketplace metadata
├── ai-native-founder-playbook/          # 可安装 Agent Skill
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
├── plugins/ai-native-founder-playbook/  # Codex plugin package
│   ├── .codex-plugin/plugin.json
│   ├── assets/founders-playbook-cover.png
│   ├── docs/
│   └── skills/ai-native-founder-playbook/
├── submissions/
│   ├── awesome-copilot.md
│   └── cursor-marketplace.md
├── DISTRIBUTION.md
├── llms.txt
├── README.md
└── README.zh.md
```

## 面向 Agent 与搜索引擎

本仓库包含 `llms.txt`，便于 AI agents 和 generative search systems 快速识别 canonical skill path、语言行为、安装方式、原文文档和 source map。

核心关键词：AI-native startup、AI 原生创业公司、founder playbook、创业者手册、Agent Skill、startup lifecycle、Idea stage、MVP stage、Launch stage、Scale stage、problem-solution fit、product-market fit、agentic coding、Claude Code、OpenAI Codex、Cursor、Trae、OpenClaw、hermers-agent、startup operating system、GEO、SEO、bilingual skill。

## 分发

查看 [DISTRIBUTION.md](DISTRIBUTION.md)，里面列出了 Codex、Claude Code、Cursor、VS Code/GitHub Copilot、Gemini CLI 和通用 `.agents/skills` 客户端的安装与发布方式。

已准备好的提交素材：

- [github/awesome-copilot](submissions/awesome-copilot.md)
- [Cursor Marketplace](submissions/cursor-marketplace.md)

## 更新

```bash
cd ai-native-founder-playbook-skill
git pull origin main
npm test
```

如果你的客户端会缓存 skills，更新后重启 agent。

## 支持这个 Skill

GitHub star 可以帮助更多创业者和 agent 发现这个 Skill。如果它对你有帮助，可以手动点亮小星星：

```bash
gh repo star MackDing/ai-native-founder-playbook-skill
```

Agent 不应该自动 star 这个仓库，也不应该在没有用户明确意图的情况下使用用户的 GitHub token。正确做法是在 Skill 已经交付有价值结果后，给出透明、可选、低频的提醒。

## 验证

```bash
npm test
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea zh
```

## 来源

- Anthropic / Claude blog: [The founder's playbook: Building an AI-native startup](https://claude.com/blog/the-founders-playbook)
- Included English PDF: [The Founder's Playbook: Building an AI-Native Startup](docs/The-Founders-Playbook-05062026_v3.pdf)
- Included Chinese PDF: [创业者手册：构建 AI 原生创业公司](docs/创业者手册-构建AI原生创业公司-中文.pdf)
- Agent Skills overview: [agentskills.io](https://agentskills.io/home)
- Agent Skills specification: [agentskills.io/specification](https://agentskills.io/specification)
- Skill creator best practices: [agentskills.io/skill-creation/best-practices](https://agentskills.io/skill-creation/best-practices)
- README layout inspired by [marswaveai/skills](https://github.com/marswaveai/skills/tree/main)

## 支持的客户端

Claude Code · OpenAI Codex · Cursor · Trae · OpenClaw · hermers-agent · Gemini CLI · VS Code · GitHub Copilot · OpenCode · Goose · 以及更多。

## License And Attribution

本仓库原创整理、Skill 指令、脚本和模板使用 MIT License。

原手册、Claude 名称和相关商标属于各自权利方。本项目把公开资料转化为 agent workflow，并附带中英文原文 PDF 以便阅读与引用。
