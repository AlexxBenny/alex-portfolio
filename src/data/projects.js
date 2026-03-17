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
    title: "Agentic AI execution & desktop automation",
    focus: "Deterministic orchestration · Safety rails · Traceable execution",
    what:
      "MERLIN is a cognitive execution architecture that powers desktop-scale and backend agent systems, operating across applications, files, and APIs while remaining fully observable and interruptible.",
    architecture:
      "Graph-based planner plus deterministic execution coordinator with bounded iteration control, typed failure handling, JSON-safe compilation, and conservative execution gating.",
    impact:
      "Turned multi-minute manual workflows into reliable automations with sub-15ms local skill execution latency and full, replayable traces."
  },
  {
    id: "smart-acad",
    name: "Smart-Acad",
    title: "Intelligent academic platform",
    focus: "NLP automation · Evaluation pipelines",
    what:
      "Smart-Acad is an academic productivity platform that helps students and institutions analyze, track, and improve learning outcomes.",
    architecture:
      "Modular NLP services for extraction and evaluation, feeding into a real-time analytics dashboard.",
    impact: "Won competition recognition and significantly reduced manual review time for academic content."
  },
  {
    id: "fluento",
    name: "Fluento",
    title: "AI language learning system",
    focus: "Adaptive curriculum · Conversational agents",
    what:
      "Fluento uses AI tutors to adaptively shape language learning paths around a learner’s intent, context, and performance.",
    architecture:
      "Conversation engine + spaced-repetition scheduler + content generation pipeline tuned for skill acquisition.",
    impact:
      "Increased session engagement and learning retention by focusing on feedback loops instead of generic drills."
  },
  {
    id: "smart-glasses",
    name: "Smart Glasses",
    title: "Assistive AI system",
    focus: "On-device inference · Real-time assistance",
    what:
      "Smart Glasses is an assistive interface that surfaces information and guidance in real time without overwhelming the wearer.",
    architecture:
      "Lightweight perception models with a context-aware helper agent, optimized for latency and clarity.",
    impact:
      "Provided accessible, real-time assistance while keeping interaction minimal and cognitively light."
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

