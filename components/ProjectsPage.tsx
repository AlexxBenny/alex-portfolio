"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { fadeInUp } from "@/lib/motion";

const accents: Record<string, { color: string; gradient: string }> = {
  aura: { color: "#60a5fa", gradient: "from-blue-500/20 to-violet-500/20" },
  "smart-glasses": { color: "#34d399", gradient: "from-emerald-500/20 to-teal-500/20" },
  "smart-acad": { color: "#f59e0b", gradient: "from-amber-500/20 to-orange-500/20" },
  fluento: { color: "#a78bfa", gradient: "from-violet-500/20 to-fuchsia-500/20" },
};

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Portfolio
          </Link>
          <span className="text-sm font-display font-medium tracking-wide text-white">Projects</span>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Systems I&apos;ve designed and built — from agentic AI to assistive tech,
            academic platforms, and AI-powered language learning.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const accent = accents[project.id] || { color: "#94a3b8", gradient: "from-slate-500/20 to-slate-600/20" };
            return (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.08 * index}
                whileHover={{ y: -4 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                <div className={`h-0.5 bg-gradient-to-r ${accent.gradient}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-lg font-display font-bold text-white group-hover:text-accent transition-colors">
                        {project.name}
                      </h2>
                      <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition-all"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.deepDive && (
                        <Link
                          href={project.deepDive}
                          className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20 transition-all"
                        >
                          Deep Dive →
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span
                          className="mt-1 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: accent.color + "80" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
