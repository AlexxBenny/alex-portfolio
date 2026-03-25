import type { Metadata } from "next";
import StarBackground from "@/components/StarBackground";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects — Alex Benny",
  description:
    "Projects by Alex Benny — MERLIN (deterministic AI desktop automation), Smart Glasses (assistive wearable), Smart-Acad (academic platform), and Fluento (AI language learning).",
  openGraph: {
    title: "Projects — Alex Benny",
    description:
      "Systems designed and built by Alex Benny — from agentic AI to assistive tech and academic platforms.",
  },
};

export default function ProjectsRoute() {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans">
      <StarBackground />
      <ProjectsPage />
    </div>
  );
}
