import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Projects() {
  const [expandedId, setExpandedId] = useState("merlin");

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 space-y-12 border-t border-border pt-20"
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
          <h2 className="text-3xl font-display font-semibold text-white tracking-tight sm:text-4xl">Systems, not demos.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Every project here started from a concrete failure point — slow workflows, unreliable
            execution, or inaccessible interfaces — and ended as a system that actually runs in the
            real world.
          </p>
        </div>
        <p className="max-w-xs text-sm text-slate-400 font-mono tracking-widest uppercase">
          Select a module
        </p>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id;
          const isCore = project.id === "aura" || project.id === "merlin";

          return (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeInUp}
              custom={0.04 * index}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isExpanded 
                  ? "bg-surface border-accent-cyan/40 shadow-cyan-glow" 
                  : "bg-surface/50 border-border hover:border-accent-purple/40 hover:bg-surface/80"
              }`}
            >
              <button
                type="button"
                onClick={() => setExpandedId(project.id)}
                className="flex w-full items-stretch justify-between gap-4 px-5 py-5 text-left sm:px-6 relative group"
              >
                {/* Subtle hover glow behind button text */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/0 to-transparent opacity-0 group-hover:from-accent-cyan/5 transition-opacity duration-500 rounded-t-2xl" />
                
                <div className="flex flex-1 items-center gap-4 relative z-10">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-300 ${
                      isCore
                        ? "border-accent-cyan/80 bg-accent-cyan/10 text-accent-cyan shadow-cyan-glow"
                        : isExpanded 
                          ? "border-accent-purple/80 bg-accent-purple/10 text-accent-purple shadow-purple-glow"
                          : "border-border bg-black/40 text-slate-300"
                    }`}
                  >
                    {project.name}
                  </div>
                  <div className="space-y-1">
                    <p className={`text-base font-medium transition-colors ${isExpanded ? "text-white" : "text-slate-200"}`}>
                      {project.title}
                    </p>
                    <p className="text-sm text-slate-400">{project.focus}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-400 relative z-10">
                  <span className={`hidden rounded-full border px-3 py-1 text-xs tracking-wide transition-colors sm:inline ${
                    isCore 
                      ? "border-accent-cyan/30 text-accent-cyan/80 bg-accent-cyan/5" 
                      : "border-border text-slate-400"
                  }`}>
                    {isCore ? "Core architecture" : "System module"}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center justify-center h-8 w-8 rounded-full border transition-colors ${
                      isExpanded ? "border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10" : "border-border text-slate-500 group-hover:text-white group-hover:border-slate-600"
                    }`}
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-border/50 bg-black/30 px-5 pb-6 pt-5 text-base text-slate-300 sm:px-6"
                  >
                    <div className="grid gap-6 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1.7fr)]">
                      <div className="space-y-5">
                        <div className="relative pl-4 border-l-2 border-accent-cyan/30">
                          <p className="text-xs font-mono tracking-widest text-accent-cyan">MODULE FUNCTION</p>
                          <p className="mt-2 leading-relaxed text-slate-200">{project.what}</p>
                        </div>
                        <div className="relative pl-4 border-l-2 border-accent-purple/30">
                          <p className="text-xs font-mono tracking-widest text-accent-purple">ARCHITECTURE</p>
                          <p className="mt-2 leading-relaxed text-slate-200">
                            {project.architecture}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        <div className="relative pl-4 border-l-2 border-emerald-500/30">
                          <p className="text-xs font-mono tracking-widest text-emerald-400">IMPACT METRICS</p>
                          <p className="mt-2 leading-relaxed text-slate-200">{project.impact}</p>
                        </div>
                        
                        <div className="mt-4 rounded-xl border border-border bg-black/40 p-4">
                          <p className="text-[10px] font-mono tracking-widest text-slate-400 mb-3">EXECUTION PATH</p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                            <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-1 text-accent-cyan">
                              Intent
                            </span>
                            <span className="text-slate-600">→</span>
                            <span className="rounded-full border border-border bg-surface px-2.5 py-1">
                              Planning
                            </span>
                            <span className="text-slate-600">→</span>
                            <span className="rounded-full border border-border bg-surface px-2.5 py-1">
                              Tools / Skills
                            </span>
                            <span className="text-slate-600">→</span>
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-400">
                              Execution
                            </span>
                            <span className="text-slate-600">→</span>
                            <span className="rounded-full border border-border bg-surface px-2.5 py-1">
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

