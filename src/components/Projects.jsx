import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

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
          Systems I've built — from agentic AI to assistive tech and academic platforms.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id;

          return (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.05 * index}
              className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                isExpanded
                  ? "bg-white/[0.04] border-accent/20"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedId(isExpanded ? null : project.id)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-base font-semibold text-white">
                      {project.name}
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-accent hover:underline"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">
                    {project.subtitle}
                  </p>
                </div>

                <motion.span
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-lg text-slate-500"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="border-t border-white/5 px-5 pb-6 pt-4 sm:px-6"
                  >
                    <p className="text-sm leading-relaxed text-slate-300 mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
                        >
                          {t}
                        </span>
                      ))}

                      {project.deepDive && (
                        <Link
                          to={project.deepDive}
                          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all"
                        >
                          Deep Dive
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
