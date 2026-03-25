export interface MerlinGithub {
  repo: string;
  pip: string;
  init: string;
  run: string;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export interface Layer {
  id: string;
  num: string;
  name: string;
  tag: string;
  color: string;
  desc: string;
  parts: string[];
}

export interface PipelineNode {
  label: string;
  llm: boolean;
  fork?: boolean;
  branch?: string;
}

export interface VersusRow {
  dimension: string;
  typical: string;
  merlin: string;
}

export interface Domain {
  name: string;
  count: number;
  icon: string;
  examples: string;
}

export interface TraceEntry {
  t: string;
  tag: string;
  msg: string;
}

export interface Constraint {
  rule: string;
  detail: string;
}

export const github: MerlinGithub = {
  repo: "https://github.com/AlexxBenny/Merlin",
  pip: "pip install merlin-assistant",
  init: "merlin init",
  run: "merlin",
};

export const stats: Stat[] = [
  { value: "48", label: "Executable Skills", sub: "across 7 domains" },
  { value: "<100", label: "Milliseconds", sub: "reflex path latency" },
  { value: "4", label: "Cognitive Layers", sub: "strict separation" },
  { value: "10", label: "Dashboard Pages", sub: "full system visibility" },
];

export const layers: Layer[] = [
  {
    id: "perception",
    num: "01",
    name: "Perception",
    tag: "The Senses",
    color: "#4299e1",
    desc: "Multi-modal input handling — text, voice, Telegram, dashboard — with explicit cancellation semantics. Typing aborts voice. No race conditions.",
    parts: ["Perception Orchestrator", "Conversation Frame", "STT Engine"],
  },
  {
    id: "nervous",
    num: "02",
    name: "Nervous System",
    tag: "The Router",
    color: "#fc8181",
    desc: "BrainCore acts as a circuit breaker. It structurally analyzes every input and decides: is this a simple command or a complex intent? Simple commands never touch the LLM.",
    parts: ["BrainCore", "Reflex Engine", "Structural Analyzer", "Attention Manager"],
  },
  {
    id: "cortex",
    num: "03",
    name: "Mission Cortex",
    tag: "The Compiler",
    color: "#b794f4",
    desc: "The LLM is used exactly once — as a compiler. It translates intent into a validated DAG with typed skill arguments. After compilation, the plan is frozen. No re-interpretation.",
    parts: ["Cognitive Coordinator", "Cortex Compiler", "LLM Router", "Escalation Policy"],
  },
  {
    id: "execution",
    num: "04",
    name: "Execution Layer",
    tag: "The Physiology",
    color: "#68d391",
    desc: "Pure deterministic execution. Walks compiled DAGs, fires skills with enforced contracts, handles failures with bounded three-tier recovery. No LLM in the loop.",
    parts: ["Mission Executor", "Skill Registry", "Tick Scheduler", "Decision Engine"],
  },
];

export const pipeline: PipelineNode[] = [
  { label: "User Input", llm: false },
  { label: "Perception", llm: false },
  { label: "BrainCore Router", llm: false, fork: true },
  { label: "Reflex Engine", llm: false, branch: "fast" },
  { label: "Cognitive Coordinator", llm: true, branch: "complex" },
  { label: "Mission Cortex", llm: true },
  { label: "Mission Executor", llm: false },
  { label: "Recovery Loop", llm: false },
  { label: "World Timeline", llm: false },
];

export const versus: VersusRow[] = [
  {
    dimension: "Execution model",
    typical: "ReAct loop — reason → act → observe → repeat",
    merlin: "Compile once → execute deterministically → recover bounded",
  },
  {
    dimension: "LLM usage",
    typical: "Every step invokes the LLM",
    merlin: "LLM used at exactly 2 points — coordinator and compiler",
  },
  {
    dimension: "Failure recovery",
    typical: "Ask LLM to figure it out (unbounded)",
    merlin: "Three-tier bounded recovery: inline (max 2) → post-exec → recompile (max 1)",
  },
  {
    dimension: "State management",
    typical: "Scattered mutable state across components",
    merlin: "Append-only WorldTimeline → pure reducer → derived state",
  },
  {
    dimension: "Skill invocation",
    typical: "LLM generates function calls with hallucinated args",
    merlin: "Validated contracts — args checked before execution begins",
  },
  {
    dimension: "Scheduling",
    typical: "Re-parse natural language when schedule fires",
    merlin: "Compiled execution graph stored and fired as-is",
  },
];

export const domains: Domain[] = [
  { name: "System", count: 19, icon: "⚡", examples: "volume, brightness, apps, battery, media" },
  { name: "Browser", count: 12, icon: "🌐", examples: "click, navigate, scroll, autonomous task" },
  { name: "Email", count: 5, icon: "📧", examples: "read inbox, draft, send, search" },
  { name: "Files", count: 5, icon: "📁", examples: "read, write, search, create folder" },
  { name: "Memory", count: 4, icon: "🧠", examples: "preferences, facts, policies" },
  { name: "WhatsApp", count: 2, icon: "💬", examples: "send message, send file" },
  { name: "Reasoning", count: 1, icon: "🔮", examples: "generate text" },
];

export const missionIR = {
  id: "mission_a7f3c",
  nodes: [
    { id: "n1", skill: "system.set_volume", inputs: { level: 40 }, depends_on: [] as string[], mode: "foreground" },
    { id: "n2", skill: "system.set_brightness", inputs: { level: 70 }, depends_on: [] as string[], mode: "foreground" },
  ],
  metadata: { ir_version: "1.0", parallel: true },
};

export const trace: TraceEntry[] = [
  { t: "00:00.000", tag: "INPUT", msg: "Percept: 'Set volume to 40 and brightness to 70'" },
  { t: "00:00.003", tag: "BRAIN", msg: "BrainCore → MISSION (multi-skill)" },
  { t: "00:00.015", tag: "COORD", msg: "Coordinator → SKILL_PLAN" },
  { t: "00:00.820", tag: "CORTEX", msg: "Compiled → 2 nodes, parallel" },
  { t: "00:00.825", tag: "VALID", msg: "Contracts validated ✓" },
  { t: "00:00.830", tag: "EXEC", msg: "Launching 2 parallel nodes" },
  { t: "00:00.842", tag: "SKILL", msg: "n1: set_volume(40) → OK" },
  { t: "00:00.847", tag: "SKILL", msg: "n2: set_brightness(70) → OK" },
  { t: "00:00.850", tag: "DONE", msg: "Mission complete — 850ms" },
];

export const constraints: Constraint[] = [
  { rule: "No global mutable state", detail: "WorldTimeline is append-only. State is derived." },
  { rule: "Skills are isolated", detail: "No inter-skill calls. No DAG modification at runtime." },
  { rule: "One LLM call per plan", detail: "Cortex compiles once. No reasoning loops." },
  { rule: "Intelligence ≠ Infrastructure", detail: "Cortex cannot access OS, browser, or filesystem." },
  { rule: "Failures are bounded", detail: "Max 2 inline recoveries per node. Max 1 recompile." },
];
