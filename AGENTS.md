# Agent Instructions

This repository publishes one Agent Skill: `ai-native-founder-playbook`.

## Rules

- Keep `ai-native-founder-playbook/SKILL.md` concise. Put detailed guidance in `references/`.
- Keep trigger language in the SKILL.md frontmatter `description`.
- Keep `README.md` and `README.zh.md` aligned. `README.zh-CN.md` is only a compatibility pointer.
- Maintain bilingual references as pairs: `*.md` for English and `*.zh.md` for Chinese.
- Keep the Codex plugin mirror at `plugins/ai-native-founder-playbook/skills/ai-native-founder-playbook/` synchronized with the canonical skill.
- Keep `.agents/skills/ai-native-founder-playbook/` as a lightweight compatibility entry, not a second source of truth.
- Keep `DISTRIBUTION.md` and `submissions/` aligned with the README install paths.
- The source PDFs are intentionally included under `docs/` at the user's request. Do not add extracted full text dumps or long verbatim passages from source material.
- Attribute source material in README, `README.zh.md`, `references/source-map.md`, and `references/source-map.zh.md`.
- Keep scripts dependency-free unless there is a strong reason.
- Run `npm test` before publishing changes.
- When improving GEO/SEO, update README, `README.zh.md`, `llms.txt`, skill description, source document links, and GitHub topics together.

## Source Boundaries

The public playbook source is Anthropic's "The Founder's Playbook: Building an AI-Native Startup". This repo is an independent synthesis for agent workflows and does not claim official status.
