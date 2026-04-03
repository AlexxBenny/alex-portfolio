"use client";

import { useState, useCallback, useEffect } from "react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback(
    (id: string) => {
      setMobileOpen(false);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    },
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-sm font-display font-medium tracking-wide text-white hover:text-accent transition-colors"
        >
          Alex Benny
        </button>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm text-slate-400 sm:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="transition-colors hover:text-white"
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Hamburger toggle — mobile only */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                mobileOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Data-stream gradient line */}
      <div
        className="h-px animate-data-stream"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, #60a5fa 25%, #a78bfa 50%, #22d3ee 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 sm:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-1 px-6 pt-8">
          {sections.map((section, i) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full rounded-lg px-4 py-4 text-center text-lg font-display tracking-wide text-slate-300 transition-all duration-200 hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${
                mobileOpen ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${i * 60}ms`,
                animationFillMode: "both",
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
