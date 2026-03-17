import { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero.jsx";
import SystemGraph from "./components/SystemGraph.jsx";
import Projects from "./components/Projects.jsx";

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
  const [activeSection, setActiveSection] = useState("hero");
  const [loadExperience, setLoadExperience] = useState(false);
  const [loadContact, setLoadContact] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-sky-500/40 selection:text-sky-50">
      <div className="noise-overlay" />
      <div className="grid-overlay" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span>Alex Benny</span>
          </div>
          <nav className="hidden gap-5 text-sm font-medium text-slate-400 sm:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative overflow-hidden px-1 py-1"
              >
                <span
                  className={`transition-colors ${
                    activeSection === section.id ? "text-sky-300" : "hover:text-slate-200"
                  }`}
                >
                  {section.label}
                </span>
                {activeSection === section.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_65%)]" />
        <Hero />
        <SystemGraph />
        <Projects />

        <motion.div
          className="h-4 w-px"
          onViewportEnter={() => setLoadExperience(true)}
        />
        {loadExperience && (
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        )}

        <motion.div
          className="h-4 w-px"
          onViewportEnter={() => setLoadContact(true)}
        />
        {loadContact && (
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;
