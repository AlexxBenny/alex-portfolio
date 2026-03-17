import { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero.jsx";
import SystemGraph from "./components/SystemGraph.jsx";
import Projects from "./components/Projects.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import StarBackground from "./components/StarBackground.jsx";

const Experience = lazy(() => import("./components/Experience.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

const sections = [
  { id: "hero", label: "Overview" },
  { id: "system", label: "System Map" },
  { id: "projects", label: "Systems" },
  { id: "experience", label: "Impact" },
  { id: "contact", label: "Contact" }
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top - 72;
  window.scrollTo({ top: absoluteY, behavior: "smooth" });
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [loadExperience, setLoadExperience] = useState(false);
  const [loadContact, setLoadContact] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans selection:bg-accent-cyan/30 selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} key="loader" />}
      </AnimatePresence>

      <StarBackground />
      <div className="noise-overlay" />
      <div className="space-grid" />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan shadow-cyan-glow"></span>
                </div>
                <span className="font-display tracking-wide text-white">ALEX BENNY</span>
              </div>
              <nav className="hidden gap-6 text-sm font-medium text-slate-400 sm:flex">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="relative overflow-hidden px-1 py-1 transition-colors hover:text-white group"
                  >
                    <span
                      className={`relative z-10 transition-colors ${
                        activeSection === section.id ? "text-accent-cyan" : ""
                      }`}
                    >
                      {section.label}
                    </span>
                    {activeSection === section.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-cyan shadow-cyan-glow"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </header>

          <main className="relative mx-auto flex max-w-6xl flex-col gap-32 px-4 pb-32 pt-32 sm:px-6 lg:px-8 lg:pt-40">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_60%)] blur-3xl mix-blend-screen" />
            <div className="pointer-events-none absolute right-0 top-[20%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1),_transparent_60%)] blur-3xl mix-blend-screen" />

            <Hero />
            <SystemGraph />
            <Projects />

            <motion.div
              className="h-8 w-px bg-gradient-to-b from-accent-cyan/50 to-transparent mx-auto"
              onViewportEnter={() => setLoadExperience(true)}
            />
            {loadExperience && (
              <Suspense fallback={<div className="h-40 animate-pulse rounded-2xl bg-surface/50" />}>
                <Experience />
              </Suspense>
            )}

            <motion.div
              className="h-8 w-px bg-gradient-to-b from-accent-purple/50 to-transparent mx-auto"
              onViewportEnter={() => setLoadContact(true)}
            />
            {loadContact && (
              <Suspense fallback={<div className="h-40 animate-pulse rounded-2xl bg-surface/50" />}>
                <Contact />
              </Suspense>
            )}
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
