// Narrative content for the MERLIN deep-dive page.
// Curated from docs — NOT raw documentation text.

export const positioning = {
  tagline: "MERLIN is not a chatbot.",
  oneLiner:
    "A deterministic execution system that converts natural-language intent into controlled, auditable system actions.",
  notList: [
    "Not an LLM wrapper with a system prompt and a pray-it-works loop.",
    "Not a ReAct agent that reasons and acts in unpredictable cycles.",
    "Not a fragile prompt-injection chain stitched together with hope.",
  ],
  isList: [
    "A four-layer cognitive architecture that separates intelligence from execution.",
    "A compiled-plan execution engine where every action is validated before it runs.",
    "A determinism-first system where the LLM is a compiler, not a controller.",
  ],
  philosophy:
    "Intelligence is narrow, execution is broad. Structure replaces interpretation.",
};

export const architectureLayers = [
  {
    number: "01",
    name: "Perception Layer",
    subtitle: "The Senses",
    color: "#4299e1",
    what: "Manages concurrent, multi-modal inputs — text, voice, remote commands from Telegram, dashboard, and CLI — with explicit cancellation semantics.",
    why: "Separating input handling from interpretation means you can add any input channel (phone, browser, voice) without touching a single line of cognitive logic. Typing text instantly aborts an ongoing voice recording — no race conditions, no ambiguity.",
    components: ["Perception Orchestrator", "Conversation Frame", "Speech-to-Text", "Text Perception"],
  },
  {
    number: "02",
    name: "Nervous System",
    subtitle: "BrainCore & Reflexes",
    color: "#fc8181",
    what: "The routing authority and fast-path execution loop. BrainCore acts as a circuit breaker — structurally analyzing inputs to decide if they need heavy cognitive processing or can be handled in milliseconds.",
    why: "Most AI systems route everything through the LLM. That's wasteful and slow. When you say 'mute volume', that's a deterministic operation. The Reflex Engine matches intent and fires the skill in under 100ms — no LLM, no tokens, no latency.",
    components: ["BrainCore Circuit Breaker", "Structural Analyzer", "Reflex Engine", "Attention Manager"],
  },
  {
    number: "03",
    name: "Mission Cortex",
    subtitle: "The Compiler",
    color: "#9f7aea",
    what: "When complex reasoning is required, the Mission Cortex acts as an LLM-powered compiler. It translates natural-language intent into a deterministic Mission Plan — a validated Directed Acyclic Graph (DAG) with typed skill arguments and dependency chains.",
    why: "The LLM is used exactly once: to compile intent into structure. After compilation, the plan is frozen — no re-interpretation, no hallucinated arguments, no unbounded loops. The plan is validated against skill contracts before a single action is taken.",
    components: ["Cognitive Coordinator", "Mission Cortex Compiler", "LLM Router", "Escalation Policy"],
  },
  {
    number: "04",
    name: "Execution Layer",
    subtitle: "The Physiology",
    color: "#68d391",
    what: "The non-cognitive layer that mutates the world. Executes compiled DAGs with concurrent parallel nodes, enforced skill contracts, and effect-driven inline recovery.",
    why: "Execution must be predictable. Skills cannot hallucinate arguments, modify the plan, or call each other. Every action emits events to an append-only World Timeline. If a node fails, a three-tier recovery system handles it — bounded, deduped, and safety-gated — without breaking determinism.",
    components: ["Mission Executor", "Skill Registry", "Tick Scheduler", "Decision Engine"],
  },
];

export const executionFlow = [
  {
    step: "User Input",
    detail: "Text, voice, Telegram, or dashboard command",
    usesLLM: false,
    desc: "Raw input captured by the Perception layer.",
  },
  {
    step: "Perception",
    detail: "Wraps input into a Percept object",
    usesLLM: false,
    desc: "Multi-modal input handler with cancellation semantics.",
  },
  {
    step: "BrainCore",
    detail: "Structural analysis + route decision",
    usesLLM: false,
    desc: "Circuit breaker that analyzes structural features — no LLM involved. Decides: REFLEX, DIRECT, or MISSION.",
  },
  {
    step: "Reflex Engine",
    detail: "Fast path — deterministic match + execute",
    usesLLM: false,
    desc: "Zero-LLM pattern matching. Simple commands execute in <100ms. No compilation, no planning overhead.",
    isBranch: true,
    branchLabel: "Simple Command",
  },
  {
    step: "Cognitive Coordinator",
    detail: "Reasons about complexity tier",
    usesLLM: true,
    desc: "First LLM touch point. Classifies intent as DIRECT_ANSWER, SKILL_PLAN, or REASONED_PLAN.",
    branchLabel: "Complex Intent",
  },
  {
    step: "Mission Cortex",
    detail: "Compiles intent → DAG (single LLM call)",
    usesLLM: true,
    desc: "The compiler. Discovers candidate skills, builds context, calls LLM once, validates the resulting plan against skill contracts. Output: frozen MissionPlan IR v1.",
  },
  {
    step: "Mission Executor",
    detail: "Walks DAG, executes skills topologically",
    usesLLM: false,
    desc: "Pure execution — no reasoning. Respects dependency chains, runs parallel nodes concurrently. Each skill has enforced contracts.",
  },
  {
    step: "Recovery Loop",
    detail: "Three-tier failure handling",
    usesLLM: false,
    desc: "Tier 1: inline recovery (max 2 per node, deduped). Tier 2: post-execution decisions. Tier 3: constrained cortex recompile (max 1). Recovery never breaks determinism.",
    isRecovery: true,
  },
  {
    step: "World Timeline",
    detail: "Append-only event stream",
    usesLLM: false,
    desc: "Every action, input, and response emits events. State is derived — never mutated directly. Same events always produce same state.",
  },
];

export const hardProblems = [
  {
    title: "Deterministic + LLM Hybrid Execution",
    naive:
      "Let the LLM decide what to do at every step — ReAct loops, chain-of-thought with tool use, hope for the best.",
    whyFails:
      "LLMs are non-deterministic. Same input can produce different outputs. When execution depends on next-token probability, you can't audit, debug, or trust the system.",
    solution:
      "MERLIN uses the LLM as a compiler, not a controller. The LLM translates intent into a validated DAG exactly once. After compilation, execution is purely deterministic — no LLM in the loop. The boundary between intelligence and execution is architecturally enforced.",
  },
  {
    title: "Scheduling Without Re-Parsing Natural Language",
    naive:
      "Store the original natural-language command and re-parse it when the schedule fires. Let the LLM figure it out again.",
    whyFails:
      "Re-parsing introduces drift. The LLM might interpret the same sentence differently hours later. Context has changed. You've traded a deterministic schedule for a probabilistic one.",
    solution:
      'MERLIN compiles the intent at submission time into a frozen execution graph. The TickScheduler stores and fires the compiled plan — not the text. Scheduled execution is identical to immediate execution: same DAG, same skill calls, same contracts. No re-interpretation.',
  },
  {
    title: "World State as Single Source of Truth",
    naive:
      "Let each component track its own state. Pass state around in function arguments. Hope it stays consistent.",
    whyFails:
      "Distributed state leads to conflicts. The browser module thinks a tab is open, the execution layer thinks it isn't. There's no canonical version of reality.",
    solution:
      "MERLIN uses an append-only WorldTimeline. Every action emits events. WorldState is derived via a pure reducer function — same events always produce same state. Every component reads from a single projection. No mutable global state, no conflicts.",
  },
  {
    title: "Recovery Without Breaking Determinism",
    naive:
      "When something fails, ask the LLM to figure out how to fix it. Give it the error and let it reason freely about recovery.",
    whyFails:
      "Unbounded LLM recovery creates cascading failures. The model might hallucinate fix actions, retry indefinitely, or take destructive actions to 'recover'. You've lost all guarantees.",
    solution:
      'MERLIN uses a three-tier recovery system with hard bounds. Tier 1: inline recovery — max 2 attempts per node, deduped, restricted to safe effect types (reveal, create, maintain). Tier 2: post-execution analysis. Tier 3: constrained cortex recompile — max 1, only if the new plan differs from the original. Recovery is bounded, auditable, and deterministic.',
  },
];

export const capabilities = [
  {
    statement: "Executes multi-step workflows without re-entering LLM",
    detail:
      "Complex commands compile into validated DAGs. The executor walks nodes topologically with parallel branch support — no token cost, no latency, no variability after compilation.",
  },
  {
    statement:
      "Schedules compiled execution graphs with persistence and retry semantics",
    detail:
      "The TickScheduler fires frozen plans at scheduled times. Priority-ordered, concurrency-capped, exponential retry backoff. Boot recovery fast-forwards missed intervals instead of flooding.",
  },
  {
    statement: "Recovers from partial failures using constrained re-planning",
    detail:
      "Three-tier recovery: inline skill-level fixes → post-execution analysis → bounded cortex recompile. Every tier has hard limits, deduplication, and safety gates.",
  },
  {
    statement: "Routes commands through zero-LLM reflex path in under 100ms",
    detail:
      'The Reflex Engine pattern-matches simple commands ("mute", "volume 50", "open Spotify") and fires skills directly — bypassing compilation entirely. Sub-100ms response time.',
  },
  {
    statement: "Maintains perfect environmental awareness via append-only event stream",
    detail:
      "The WorldTimeline captures every system event (app changes, battery levels, media state). WorldState is derived — never mutated. This gives the compiler full context without stale data.",
  },
  {
    statement:
      "Enforces execution contracts — LLM cannot hallucinate skill arguments",
    detail:
      "Every skill has a typed contract with validated inputs. The compiler output is verified against the skill registry before execution begins. Invalid plans are rejected, not executed.",
  },
];

export const missionIRExample = {
  id: "mission_a7f3c",
  intent: "Set volume to 40 and brightness to 70",
  nodes: [
    {
      id: "n1",
      skill: "system.set_volume",
      inputs: { level: 40 },
      depends_on: [],
      mode: "foreground",
    },
    {
      id: "n2",
      skill: "system.set_brightness",
      inputs: { level: 70 },
      depends_on: [],
      mode: "foreground",
    },
  ],
  metadata: { ir_version: "1.0", parallel: true },
};

export const executionTrace = [
  { time: "00:00.000", level: "INPUT", msg: "Percept received: 'Set volume to 40 and brightness to 70'" },
  { time: "00:00.003", level: "BRAIN", msg: "BrainCore → route: MISSION (multi-skill intent detected)" },
  { time: "00:00.015", level: "COORD", msg: "CognitiveCoordinator → mode: SKILL_PLAN" },
  { time: "00:00.820", level: "CORTEX", msg: "MissionCortex compiled → 2 nodes, 0 dependencies (parallel)" },
  { time: "00:00.825", level: "VALID", msg: "IR validated ✓ — contracts: system.set_volume ✓, system.set_brightness ✓" },
  { time: "00:00.830", level: "EXEC", msg: "Executor → launching 2 parallel nodes" },
  { time: "00:00.842", level: "SKILL", msg: "n1: system.set_volume(level=40) → SUCCESS" },
  { time: "00:00.847", level: "SKILL", msg: "n2: system.set_brightness(level=70) → SUCCESS" },
  { time: "00:00.850", level: "DONE", msg: "Mission complete — 2/2 nodes succeeded (total: 850ms)" },
];

export const skillInventory = [
  { domain: "system", count: 19, examples: "media, volume, brightness, apps, jobs, time, battery" },
  { domain: "browser", count: 12, examples: "click, fill, scroll, navigate, go_back, autonomous_task" },
  { domain: "email", count: 5, examples: "read_inbox, draft_message, send_message, search_email" },
  { domain: "fs", count: 5, examples: "read_file, write_file, create_folder, search_file" },
  { domain: "memory", count: 4, examples: "get_preference, set_preference, set_fact, add_policy" },
  { domain: "whatsapp", count: 2, examples: "send_message, send_file" },
  { domain: "reasoning", count: 1, examples: "generate_text" },
];

export const github = {
  repo: "https://github.com/AlexxBenny/Merlin",
  pip: "pip install merlin-assistant",
  init: "merlin init",
  run: "merlin",
};
