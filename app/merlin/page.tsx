import type { Metadata } from "next";
import StarBackground from "@/components/StarBackground";
import MerlinContent from "@/components/MerlinContent";

export const metadata: Metadata = {
  title: "MERLIN — Deterministic AI Desktop Automation System",
  description:
    "MERLIN is a four-layer cognitive architecture that converts natural-language intent into controlled, auditable system actions. The LLM is a compiler — not a controller. 48 executable skills across 7 domains with sub-100ms reflex path latency.",
  openGraph: {
    title: "MERLIN — Deterministic AI Desktop Automation",
    description:
      "A four-layer cognitive architecture: Perception → Nervous System → Mission Cortex → Execution. 48 skills, sub-100ms latency, zero LLM-in-the-loop execution.",
  },
  keywords: [
    "MERLIN",
    "AI Assistant",
    "Desktop Automation",
    "Deterministic AI",
    "Cognitive Architecture",
    "LLM Agent",
    "Alex Benny",
  ],
};

export default function MerlinPage() {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans">
      <StarBackground />
      <MerlinContent />
    </div>
  );
}
