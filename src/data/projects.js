export const systemNodes = [
  {
    id: "MERLIN",
    label: "MERLIN",
    role: "Cognitive execution",
    description:
      "Cognitive execution architecture for desktop and backend systems that separates reasoning, planning, and tool execution into explicit phases.",
    details:
      "MERLIN models user intent as executable graphs and enforces a strict separation between thought and action, enabling traceable decision paths, resilient automation, and reproducible outcomes."
  },
  {
    id: "Execution",
    label: "Execution",
    role: "Deterministic runtime",
    description:
      "Deterministic execution layer that turns plans into auditable, replayable traces with bounded uncertainty.",
    details:
      "Execution coordinates tools, APIs, and system calls with explicit contracts, timeouts, and rollback semantics."
  },
  {
    id: "Memory",
    label: "Memory",
    role: "Structured persistence",
    description:
      "Hierarchical memory system that distinguishes ephemeral context from long-lived knowledge.",
    details:
      "Memory combines vector search with typed stores so agents can recall just enough to act, without drowning in history."
  },
  {
    id: "Skills",
    label: "Skills",
    role: "Tooling surface",
    description:
      "Curated tool and skill registry with explicit schemas, pre/post-conditions, and safety envelopes.",
    details:
      "Skills expose capabilities to agents as contracts, making composition, testing, and observability first-class."
  }
];

export const projects = [
  {
    id: "merlin",
    name: "MERLIN",
    title: "Cognitive AI execution system",
    focus: "Deterministic orchestration · Typed missions · Reliable desktop automation",
    what:
      "MERLIN is a JARVIS-style desktop AI system built for reliable execution, not just conversation. It plans missions, coordinates tools, and runs work as background jobs instead of one-off prompts.",
    architecture:
      "Hybrid design: LLMs handle planning and structural reasoning, while deterministic pipelines own execution. An ExecutionCoordinator decides when to trust the model versus a scripted path, with typed mission steps, bounded retries, and outcome-aware replanning.",
    impact:
      "Turns multi-step manual workflows into repeatable automations with sub-15ms local skill execution, persistent job scheduling, and replayable traces for every run."
  },
  {
    id: "smart-acad",
    name: "Smart-Acad",
    title: "Academic automation platform",
    focus: "Student–faculty workflows · Analytics · Automation",
    what:
      "Smart-Acad was built to fix slow, manual coordination between students and faculty — from sharing resources to tracking performance.",
    architecture:
      "Flask-based backend with NLP modules for content handling, analytics pipelines, and dashboards that surface real academic signals instead of raw data.",
    impact:
      "Automated key academic workflows, reduced manual overhead, and won ICTAK Techathlon as validation that the system solved a real institutional problem."
  },
  {
    id: "fluento",
    name: "Fluento",
    title: "Adaptive AI language learning",
    focus: "Pronunciation feedback · Personalized exercises · Real-time adaptation",
    what:
      "Fluento was my answer to static language learning apps. It adapts in real time, generating exercises around the learner and reacting to how they actually speak.",
    architecture:
      "GenAI-backed content generation with speech analysis for pronunciation, wired into a feedback loop that adjusts difficulty and focus based on performance.",
    impact:
      "Built during EDEN 4.0 and won first place because it demonstrated how AI can make language learning feel responsive instead of pre-scripted."
  },
  {
    id: "smart-glasses",
    name: "Smart Glasses",
    title: "Assistive AI system for vision",
    focus: "Real-time perception · Voice interaction · On-device support",
    what:
      "Smart Glasses is a real-time assistive system for visually impaired users, built to describe the world instead of just labeling it.",
    architecture:
      "Pipeline combining object detection, OCR, face recognition, and scene description, all wrapped in a voice-first interface.",
    impact:
      "Pushed me into multi-model, real-time AI — balancing usefulness with cognitive load so information helps rather than overwhelms."
  }
];

export const experienceHighlights = [
  {
    id: "api-calls",
    label: "API footprint reduction",
    value: "60–70%",
    description:
      "Cut redundant API calls by introducing caching, batching, and deterministic planning around external dependencies."
  },
  {
    id: "cicd",
    label: "Deployment pipelines",
    value: "GitHub Actions → Azure",
    description:
      "Built CI/CD pipelines with environment isolation, blue/green-style rollouts, and observability baked into each release."
  },
  {
    id: "nlp-automation",
    label: "NLP automation systems",
    value: "Production workloads",
    description:
      "Designed and shipped NLP pipelines that transform unstructured input into reliable, queryable signals."
  },
  {
    id: "chat-analytics",
    label: "Chatbots & analytics",
    value: "Full-stack",
    description:
      "Delivered AI chatbot experiences with analytics dashboards that close the loop between conversation and insight."
  }
];

