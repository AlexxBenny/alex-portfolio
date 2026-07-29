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

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 space-y-10 border-t border-black/10 pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#6B7280]">
          Systems I&apos;ve designed and built — from agentic AI to assistive tech.
        </p>
      </motion.div>

      {/* Featured project (MERLIN) */}
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.05}
        className="group relative rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden hover:border-black/20 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-accent" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-display font-bold text-[#111111]">
                  {featured.name}
                </h3>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent uppercase tracking-wider">
                  Flagship
                </span>
              </div>
              <p className="text-sm text-[#6B7280]">{featured.subtitle}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-black/10 bg-[#FAFAF7] px-3.5 py-2 text-xs text-[#111111] hover:border-accent hover:text-accent transition-all"
                >
                  GitHub ↗
                </a>
              )}
              {featured.deepDive && (
                <Link
                  href={featured.deepDive}
                  className="rounded-lg bg-accent px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-all inline-flex items-center gap-1.5 shadow-sm"
                >
                  Deep Dive
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#111111] mb-5 max-w-3xl">
            {featured.description}
          </p>

          <div className="grid gap-2 sm:grid-cols-2 mb-5">
            {featured.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {h}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-md border border-black/10 bg-[#FAFAF7] px-3 py-1 font-mono text-[11px] text-[#111111]">
              <span className="text-slate-400">$ </span>
              <span className="text-accent font-semibold">pip install merlin-assistant</span>
            </div>
            <span className="hidden sm:inline text-slate-300 mx-1">·</span>
            {featured.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-black/10 bg-[#FAFAF7] px-2.5 py-1 text-[11px] text-[#6B7280]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Other projects */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => {
          return (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.06 * index}
              className="group relative rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:border-black/20 hover:shadow-md transition-all duration-300 flex flex-col"
              whileHover={{ y: -6 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div className="flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-[#111111] group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-0.5">{project.subtitle}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 rounded-lg border border-black/10 bg-[#FAFAF7] px-3 py-1.5 text-xs text-[#111111] hover:border-accent hover:text-accent transition-all"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                <p className="text-[15px] text-[#111111] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-black/10 bg-[#FAFAF7] px-2 py-0.5 text-[10px] text-[#6B7280]"
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
    </section>
  );
}
