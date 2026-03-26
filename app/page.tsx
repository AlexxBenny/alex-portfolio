import type { Metadata } from "next";
import SystemsBackground from "@/components/SystemsBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Alex Benny — AI Systems Engineer & Software Developer",
  description:
    "Portfolio of Alex Benny — AI systems engineer and software developer specializing in deterministic AI automation, NLP, and full-stack systems. Creator of MERLIN, a four-layer cognitive architecture for desktop AI.",
  openGraph: {
    title: "Alex Benny — AI Systems Engineer",
    description:
      "AI systems engineer building deterministic automation systems. Creator of MERLIN — a four-layer cognitive architecture for desktop AI.",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans">
      <SystemsBackground />

      <div className="relative z-10">
        <Navbar />

        <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-24 sm:px-6">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}
