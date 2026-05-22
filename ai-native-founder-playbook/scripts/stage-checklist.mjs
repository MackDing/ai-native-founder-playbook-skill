#!/usr/bin/env node

const stages = {
  idea: {
    title: "Idea",
    question: "Is this worth building?",
    gate: "Problem-solution fit from direct evidence.",
    evidence: [
      "Target segment is specific.",
      "Pain has frequency, severity, and a current workaround.",
      "Customer discovery includes real conversations.",
      "Competitive map includes direct, indirect, adjacent, and incumbent threats.",
      "Disconfirming evidence has been actively sought."
    ],
    risks: [
      "Building before validating.",
      "Treating a prototype as proof.",
      "Using AI to confirm the founder's belief."
    ],
    next: [
      "Sharpen the hypothesis.",
      "Run adversarial research.",
      "Audit interview questions for bias.",
      "Synthesize evidence after every five interviews.",
      "Build only the smallest prototype for one core interaction."
    ]
  },
  mvp: {
    title: "MVP",
    question: "What exactly should we build first?",
    gate: "Evidence that a specific user group returns, pays, refers, or repeatedly uses the product.",
    evidence: [
      "MVP scope is written and excludes nonessential features.",
      "Architecture context exists for coding agents.",
      "Measurement framework is defined before launch.",
      "Security review happens before real user exposure.",
      "Feedback loop separates signal from enthusiasm."
    ],
    risks: [
      "Agentic technical debt.",
      "False PMF from launch spikes.",
      "Zero-friction scope creep.",
      "Functional but insecure code."
    ],
    next: [
      "Write MVP_SCOPE.md.",
      "Write architecture context.",
      "Build in short coding-agent sessions.",
      "Define activation, retention, revenue, referral, and false-positive metrics.",
      "Run a pivot diagnostic after three weak iteration cycles."
    ]
  },
  launch: {
    title: "Launch",
    question: "Does this business deserve to grow?",
    gate: "Repeatable growth, production readiness, and founder-independent operations.",
    evidence: [
      "Acquisition channels have known unit economics.",
      "Infrastructure handles production workloads.",
      "Security and compliance work is active.",
      "Support, triage, planning, and reporting do not depend on founder memory.",
      "Technical debt has been audited and sequenced."
    ],
    risks: [
      "MVP debt becomes structural.",
      "Founder remains in every loop.",
      "Security and compliance are deferred.",
      "Expansion hides the original PMF signal."
    ],
    next: [
      "Run architecture and test coverage audit.",
      "Inventory founder-owned workflows.",
      "Automate recurring operational loops.",
      "Stand up product management cadence.",
      "Track CAC, LTV, payback, reliability, support, and security metrics."
    ]
  },
  scale: {
    title: "Scale",
    question: "Can the company compound without the founder running daily operations?",
    gate: "Systematic growth, mature operations, enterprise trust, and defensible moat.",
    evidence: [
      "Governance and compliance are auditable.",
      "Enterprise documentation, SLAs, support, observability, and incident response exist.",
      "GTM function is repeatable beyond founder-led growth.",
      "Domain expertise is captured in product and agent context.",
      "Data loops and workflow integrations increase switching cost."
    ],
    risks: [
      "Founder cannot delegate because context is uncodified.",
      "Enterprise buyers find operational immaturity.",
      "GTM ceiling appears after organic growth stalls.",
      "Competitors can copy visible features without needing your accumulated context."
    ],
    next: [
      "Map founder bottlenecks.",
      "Test what breaks if the founder is unavailable for a week.",
      "Create enterprise readiness artifacts.",
      "Build GTM segmentation, messaging, playbooks, and reporting.",
      "Turn vertical edge cases into tests, validations, integrations, and workflows."
    ]
  }
};

function renderList(items) {
  return items.map((item) => `- [ ] ${item}`).join("\n");
}

const stageName = (process.argv[2] || "").toLowerCase();

if (!stageName || !stages[stageName]) {
  console.error("Usage: node scripts/stage-checklist.mjs <idea|mvp|launch|scale>");
  process.exit(1);
}

const stage = stages[stageName];

console.log(`# ${stage.title} Stage Checklist

## Main Question
${stage.question}

## Stage Gate
${stage.gate}

## Evidence Checklist
${renderList(stage.evidence)}

## Risk Checklist
${renderList(stage.risks)}

## Next Moves
${renderList(stage.next)}
`);
