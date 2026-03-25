export const education = {
  institution: "Viswajyothi College of Engineering and Technology",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  period: "2022 – 2026",
  location: "Kerala, India",
  honours: "Computational Biology",
  minor: "Electronics and Communication Engineering",
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java"],
  },
  {
    category: "AI Systems",
    items: ["LLM Agents", "RAG", "Tool Orchestrated AI Systems", "NLP"],
  },
  {
    category: "AI Infrastructure",
    items: ["Vector Databases (Chroma)", "Model Integration", "Retrieval Systems"],
  },
  {
    category: "Software & Backend",
    items: ["Flask", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    items: ["CI/CD Pipelines", "GitHub Actions", "Azure Deployment"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const experiences = [
  {
    id: "recode",
    role: "Software Developer Intern",
    company: "Recode AI Solutions",
    link: "https://keelzo.com",
    location: "Kerala, India",
    period: "Nov 2025 – Present",
    bullets: [
      "Identified and eliminated redundant API polling loops, reducing request volume by 60–70%.",
      "Designed and implemented multi-environment CI/CD pipelines using GitHub Actions and Azure.",
      "Built deployment workflows enforcing environment isolation and controlled rollouts.",
    ],
  },
  {
    id: "ictak",
    role: "AI Developer Intern",
    company: "ICT Academy of Kerala",
    location: "Thrissur, Kerala",
    period: "May 2025 – Jun 2025",
    bullets: [
      "Engineered NLP-based automation for an AI-driven LMS, reducing question paper generation time by 70%.",
      "Developed a performance analytics dashboard delivering actionable academic insights.",
      "Built and integrated an AI-powered chatbot to automate routine academic workflows.",
    ],
  },
];

export const projects = [
  {
    id: "aura",
    name: "MERLIN",
    subtitle: "Agentic AI Desktop Automation System",
    tech: ["Python", "LLMs", "OS APIs", "Speech Recognition", "TTS"],
    github: "https://github.com/AlexxBenny/Merlin",
    deepDive: "/merlin",
    description:
      "A JARVIS-style desktop AI system with hybrid deterministic + LLM-routed architecture, sub-15ms local skill execution, structured multi-step planning, and voice-controlled floating UI with wake-word detection.",
    highlights: [
      "Hybrid deterministic + LLM-routed system with sub-15ms local skill execution latency",
      "Execution Coordinator with bounded iteration control and conservative execution gating",
      "Structured multi-step planning with typed failure handling and bounded retry orchestration",
      "JARVIS-style floating UI with wake-word detection and voice feedback",
    ],
  },
  {
    id: "smart-glasses",
    name: "Smart Glasses",
    subtitle: "Assistive System for Visually Impaired",
    tech: ["Python", "YOLO", "BLIP", "EasyOCR", "InsightFace", "TTS"],
    github: null,
    description:
      "A wearable assistive system for real-time object detection, OCR, face recognition, and scene description with hands-free voice interaction.",
    highlights: [
      "Real-time object detection, OCR, face recognition, and scene description",
      "Hands-free interaction through voice commands and text-to-speech feedback",
    ],
  },
  {
    id: "smart-acad",
    name: "Smart-Acad",
    subtitle: "Academic Resource Management Platform",
    tech: ["Python", "Flask", "PostgreSQL", "ML", "HTML", "CSS"],
    github: "https://github.com/AlexxBenny/Smart_Acad",
    description:
      "A cloud-based academic platform to streamline student–faculty coordination with automation modules and analytics dashboards.",
    highlights: [
      "Streamlined student–faculty coordination and resource sharing",
      "Automation modules and analytics dashboards for institutional efficiency",
      "Winner — ICTAK Techathlon 2025",
    ],
  },
  {
    id: "fluento",
    name: "Fluento",
    subtitle: "AI Language Learning Platform",
    tech: ["Python", "GenAI", "Speech Analysis", "NLP"],
    github: "https://github.com/AlexxBenny/FLUENTO",
    description:
      "An adaptive GenAI-powered language learning platform with personalized exercises, AI-driven content generation, and pronunciation feedback.",
    highlights: [
      "Adaptive GenAI-powered platform with personalized exercises",
      "AI-driven content generation and pronunciation feedback",
      "Winner — EDEN 4.0 Hackathon",
    ],
  },
];

export const achievements = [
  {
    title: "ICTAK Techathlon 2025",
    event: "ICT Academy of Kerala",
    place: "Winner",
    image: "/Techathlon.JPG",
  },
  {
    title: "National-Level Gen AI Hackathon",
    event: "amFOSS · Hexinox",
    place: "3rd Place",
    image: "/hexinox.jpg",
  },
  {
    title: "Eden Hackathon 4.0",
    event: "Marian IEDC Trivandrum",
    place: "Winner",
    image: "/Eden.jpg",
  },
  {
    title: "INNOVISION 2K25",
    event: "ICET Muvattupuzha",
    place: "Winner",
    image: "/Innovision.jpg",
  },
];
