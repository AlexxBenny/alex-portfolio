import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Projects() {
  const [expandedId, setExpandedId] = useState("aura");

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 space-y-8 border-t border-slate-800/60 pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Systems that are already in the world.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Each project is treated as a module in a larger AI operating system — with clear
            responsibilities, boundaries, and feedback loops.
          </p>
        </div>
        <p className="max-w-xs text-xs text-slate-400 md:text-sm">
          Tap a module to see what it does, how it&apos;s built, and what changed because of it.
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
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeInUp}
              custom={0.04 * index}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80"
            >
              <button
                type="button"
                onClick={() => setExpandedId(project.id)}
                className="flex w-full items-stretch justify-between gap-4 px-4 py-4 text-left sm:px-5"
              >
                <div className="flex flex-1 items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-semibold ${
                      project.id === "aura" || project.id === "merlin"
                        ? "border-sky-400/80 bg-sky-500/10 text-sky-100 shadow-soft-glow"
                        : "border-slate-800/80 bg-slate-900/80 text-slate-100"
                    }`}
                  >
                    {project.name}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-100 sm:text-base">
                      {project.title}
                    </p>
                    <p className="text-xs text-slate-400 sm:text-sm">{project.focus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 sm:text-sm">
                  <span className="hidden rounded-full border border-slate-800/80 px-2 py-0.5 sm:inline">
                    {project.id === "aura" || project.id === "merlin"
                      ? "Core architecture"
                      : "System module"}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-slate-500"
                  >
                    ▸
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="border-t border-slate-800/70 bg-slate-950/90 px-4 pb-4 pt-3 text-sm text-slate-300 sm:px-5 md:text-base"
                  >
                    <div className="grid gap-4 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1.7fr)]">
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-slate-400">What it does</p>
                          <p className="mt-1 leading-relaxed text-slate-200">{project.what}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-400">Architecture</p>
                          <p className="mt-1 leading-relaxed text-slate-200">
                            {project.architecture}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-slate-400">Impact</p>
                          <p className="mt-1 leading-relaxed text-slate-200">{project.impact}</p>
                        </div>
                        <div className="mt-2 rounded-lg border border-slate-800/80 bg-slate-900/60 p-3">
                          <p className="text-xs font-medium text-slate-400">Execution path</p>
                          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                            <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-sky-200">
                              Intent
                            </span>
                            <span className="h-px w-4 bg-slate-700" />
                            <span className="rounded-full bg-slate-800/80 px-2 py-0.5">
                              Planning
                            </span>
                            <span className="h-px w-4 bg-slate-700" />
                            <span className="rounded-full bg-slate-800/80 px-2 py-0.5">
                              Tools / Skills
                            </span>
                            <span className="h-px w-4 bg-slate-700" />
                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-200">
                              Execution
                            </span>
                            <span className="h-px w-4 bg-slate-700" />
                            <span className="rounded-full bg-slate-800/80 px-2 py-0.5">
                              Observability
                            </span>
                          </div>
                        </div>
                      </div>
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

