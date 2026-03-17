import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { systemNodes } from "../data/projects.js";
import { fadeInUp, scaleIn } from "../utils/motion.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

const positions = {
  MERLIN: { x: 0, y: -80 },
  Execution: { x: 120, y: -10 },
  Memory: { x: -120, y: -10 },
  Skills: { x: 0, y: 90 }
};

function SystemGraph() {
  const [activeNode, setActiveNode] = useState("MERLIN");
  const isMobile = useIsMobile();

  const handleSelect = (id) => {
    setActiveNode((current) => (current === id && isMobile ? current : id));
  };

  const active = systemNodes.find((n) => n.id === activeNode) ?? systemNodes[0];

  return (
    <section
      id="system"
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
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Most AI breaks at execution.</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            They generate responses but fail to act reliably in real environments. I design stacks
            where LLM reasoning, structured execution pipelines, and evolving memory systems are
            separate, observable pieces of one system.
          </p>
        </div>
        <p className="max-w-xs text-xs text-slate-400 md:text-sm">
          Tap or hover to see how MERLIN, execution, memory, and skills work together to turn AI
          from something that “talks” into something that actually “does”.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scaleIn}
        custom={0.08}
        className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950/40 p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="relative flex min-h-[280px] items-center justify-center">
            {systemNodes.map((node) => {
              const pos = positions[node.id];
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => handleSelect(node.id)}
                  className="absolute"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`
                  }}
                >
                  <motion.div
                    className={`group relative flex h-24 w-40 items-center justify-center rounded-xl border text-sm ${
                      activeNode === node.id
                        ? "border-sky-400/80 bg-sky-500/10 shadow-soft-glow"
                        : "border-slate-800/90 bg-slate-900/80"
                    }`}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative space-y-1 text-center">
                      <p className="text-sm font-medium text-slate-100">{node.label}</p>
                      <p className="text-xs text-slate-400">{node.role}</p>
                    </div>
                  </motion.div>
                </button>
              );
            })}

            {systemNodes.map((source) =>
              systemNodes.map((target) => {
                if (source.id === target.id || source.id === "Execution") return null;
                const from = positions[source.id];
                const to = positions[target.id];
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2;
                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

                return (
                  <motion.span
                    key={`${source.id}-${target.id}`}
                    className="pointer-events-none absolute origin-center bg-slate-700/60"
                    style={{
                      width: `${length}px`,
                      height: 1,
                      transform: `translate(${midX}px, ${midY}px) rotate(${angle}deg)`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                  />
                );
              })
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative rounded-xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:p-6"
            >
              <p className="text-xs font-mono tracking-[0.18em] text-slate-500">{active.label}</p>
              <p className="mt-1 text-sm text-slate-400">{active.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{active.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{active.details}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default SystemGraph;

