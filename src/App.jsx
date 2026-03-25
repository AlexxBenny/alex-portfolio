import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import StarBackground from "./components/StarBackground.jsx";
import MerlinPage from "./components/MerlinPage.jsx";

const sections = [
  { id: "hero", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top - 72;
  window.scrollTo({ top: absoluteY, behavior: "smooth" });
};

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans">
      <StarBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Navbar */}
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-display font-medium tracking-wide text-white hover:text-accent transition-colors"
            >
              Alex Benny
            </button>

            <nav className="hidden gap-6 text-sm text-slate-400 sm:flex">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="transition-colors hover:text-white"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-16 pt-24 sm:px-6">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/merlin" element={<MerlinPage />} />
    </Routes>
  );
}

export default App;
