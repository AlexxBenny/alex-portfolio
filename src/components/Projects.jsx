import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

/* ─── accent colors per project for visual variety ─── */
const accents = {
  aura: { color: "#60a5fa", gradient: "from-blue-500/20 to-violet-500/20" },
  "smart-glasses": { color: "#34d399", gradient: "from-emerald-500/20 to-teal-500/20" },
  "smart-acad": { color: "#f59e0b", gradient: "from-amber-500/20 to-orange-500/20" },
  fluento: { color: "#a78bfa", gradient: "from-violet-500/20 to-fuchsia-500/20" },
};

function Projects() {
  const featured = projects[0]; // MERLIN
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 space-y-10 border-t border-white/5 pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-base text-slate-400">
          Systems I've designed and built — from agentic AI to assistive tech.
        </p>
      </motion.div>

      {/* ─── Featured project (MERLIN) ─── */}
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.05}
        className="group relative rounded-2xl border border-accent/15 bg-white/[0.02] overflow-hidden hover:border-accent/30 transition-all duration-300"
      >
        {/* Top gradient shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-display font-bold text-white">
                  {featured.name}
                </h3>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent uppercase tracking-wider">
                  Flagship
                </span>
              </div>
              <p className="text-sm text-slate-400">{featured.subtitle}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-slate-400 hover:text-white hover:border-white/20 transition-all"
                >
                  GitHub ↗
                </a>
              )}
              {featured.deepDive && (
                <Link
                  to={featured.deepDive}
                  className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all inline-flex items-center gap-1.5"
                >
                  Deep Dive
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300 mb-5 max-w-3xl">
            {featured.description}
          </p>

          <div className="grid gap-2 sm:grid-cols-2 mb-5">
            {featured.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                {h}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* pip install badge */}
            <div className="rounded-md border border-accent/15 bg-accent/[0.04] px-3 py-1 font-mono text-[11px] text-slate-400">
              <span className="text-slate-600">$ </span>
              <span className="text-accent">pip install merlin-assistant</span>
            </div>
            <span className="hidden sm:inline text-slate-700 mx-1">·</span>
            {featured.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* ─── Other projects — responsive grid ─── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => {
          const accent = accents[project.id] || { color: "#94a3b8", gradient: "from-slate-500/20 to-slate-600/20" };
          return (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.06 * index}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${accent.gradient}`} />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 text-xs text-slate-600 hover:text-accent transition-colors"
                    >
                      ↗
                    </a>
                  )}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span
                        className="mt-1 h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: accent.color + "80" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
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
    </section>
  );
}

export default Projects;
