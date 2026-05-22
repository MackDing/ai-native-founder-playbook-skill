---
name: ai-native-founder-playbook
description: Apply an AI-native startup operating playbook for founders, product builders, and startup agents. Use when evaluating startup ideas, validating problem-solution fit, planning an MVP, avoiding AI-generated technical debt, measuring product-market fit, designing launch operations, scaling GTM or enterprise readiness, turning founder knowledge into durable agent context, or asking for stage-specific startup strategy, experiments, checklists, prompts, or decision frameworks.
---

# AI-Native Founder Playbook

## Overview

Use this skill to turn AI-native startup questions into stage-appropriate strategy, experiments, operating systems, and agent workflows. Treat AI as leverage for founder judgment: speed is useful only when evidence, scope, architecture, security, and learning loops stay ahead of execution.

## Core Rules

1. Identify the startup stage before advising: Idea, MVP, Launch, Scale, or mixed/unclear.
2. Separate facts, assumptions, hypotheses, and missing evidence.
3. Push against premature certainty. Ask what would disconfirm the current plan.
4. Prefer wedge-first experiments over broad platform plans.
5. Keep founder sense-making ahead of agentic building.
6. Translate recommendations into concrete agent workflows: research agent, coding agent, workspace/automation agent, or human-in-the-loop review.
7. Do not present AI security, legal, compliance, fundraising, or financial analysis as professional advice. Flag when expert review is required.

## Reference Loading

Load only the file needed for the task:

- Read `references/stage-gates.md` for stage diagnosis, exit criteria, failure modes, and stage transitions.
- Read `references/workflows.md` for step-by-step AI-native founder workflows and prompt patterns.
- Read `references/templates.md` when producing reusable artifacts such as a problem hypothesis, MVP scope, architecture context, PMF dashboard, launch operating system, or moat narrative.
- Read `references/source-map.md` when attribution, source caveats, copyright boundaries, or Agent Skills format details matter.

For a quick checklist without loading reference files, run:

```bash
node ai-native-founder-playbook/scripts/stage-checklist.mjs idea
node ai-native-founder-playbook/scripts/stage-checklist.mjs mvp
node ai-native-founder-playbook/scripts/stage-checklist.mjs launch
node ai-native-founder-playbook/scripts/stage-checklist.mjs scale
```

## Stage Map

| Stage | Main Question | Evidence Target | Main Risk |
| --- | --- | --- | --- |
| Idea | Is this worth building? | Problem-solution fit from real customer discovery | Building before validating |
| MVP | What exactly should we build first? | Early product-market fit signals through retention, revenue, or referral | AI-generated scope creep and technical debt |
| Launch | Does this business deserve to grow? | Repeatable acquisition, production readiness, and founder-independent operations | The founder stays in every loop |
| Scale | Can the company compound without the founder running daily operations? | Auditable growth, mature operations, enterprise trust, and defensible moat | Operational, GTM, and governance gaps |

## Default Workflow

1. Diagnose the stage and state the evidence basis.
2. Name the strongest current hypothesis and the weakest assumption.
3. Identify the next stage gate and what would qualify as passing evidence.
4. Surface the top 3 failure modes for this stage.
5. Propose 1-3 experiments or operating changes with owner, output, metric, and review cadence.
6. Assign each workstream to the right execution surface:
   - research or reasoning assistant for synthesis, adversarial analysis, and strategy
   - coding agent for implementation, tests, architecture audits, integrations, and instrumentation
   - workspace/automation agent for recurring reports, outreach, feedback loops, CRM hygiene, and documentation updates
   - human expert for legal, security, compliance, finance, or high-stakes customer commitments
7. End with a short decision record: proceed, narrow, pivot, pause, or return to an earlier stage.

## Output Contract

When the user asks for analysis, produce:

- `Stage diagnosis`
- `Facts`
- `Assumptions`
- `Stage gate`
- `Failure modes`
- `Recommended next moves`
- `Agent workflow`
- `Metrics or exit criteria`
- `Open validation questions`

When the user asks for an artifact, use `references/templates.md` and output a ready-to-use document.

When the user is overbuilding, challenge the scope directly and propose the smallest evidence-producing action.

When the user is under-specifying, require a written scope, architecture, or measurement artifact before recommending more agentic coding.
