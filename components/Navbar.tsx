"use client";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top - 72;
  window.scrollTo({ top: absoluteY, behavior: "smooth" });
};

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-sm font-display font-medium tracking-wide text-white hover:text-accent transition-colors"
        >
          Alex Benny
        </button>

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
      </div>
    </header>
  );
}
