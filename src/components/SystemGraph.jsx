import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { systemNodes } from "../data/projects.js";
import { fadeInUp, scaleIn } from "../utils/motion.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

const positions = {
  MERLIN: { x: 0, y: -90 },
  Execution: { x: 140, y: -10 },
  Memory: { x: -140, y: -10 },
  Skills: { x: 0, y: 100 }
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
          <h2 className="text-3xl font-display font-semibold text-white tracking-tight sm:text-4xl">Architecture map.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            They generate responses but fail to act reliably in real environments. I design stacks
            where LLM reasoning, structured execution pipelines, and evolving memory systems are
            separate, observable pieces of one system.
          </p>
        </div>
        <p className="max-w-xs text-sm text-slate-400 font-mono tracking-widest uppercase md:text-right">
          Interactive Node Diagram
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scaleIn}
        custom={0.08}
        className="relative overflow-hidden rounded-2xl border border-border bg-black/40 p-6 md:p-10 backdrop-blur-sm"
      >
        {/* Background glow behind the graph */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_60%)] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-glass-gradient opacity-50" />

        <div className="relative grid gap-8 lg:gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          
          <div className="relative flex min-h-[300px] items-center justify-center py-8">
            {/* Draw connecting lines first so they are behind nodes */}
            {systemNodes.map((source) =>
              systemNodes.map((target) => {
                if (source.id === target.id || source.id === "Execution") return null;
                const from = positions[source.id];
                const to = positions[target.id];
                
                // SVG line approach for cleaner glow effects
                return (
                  <svg key={`line-${source.id}-${target.id}`} className="absolute inset-0 pointer-events-none w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id={`grad-${source.id}-${target.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                      </linearGradient>
                    </defs>
                    <motion.line
                      x1={`calc(50% + ${from.x}px)`}
                      y1={`calc(50% + ${from.y}px)`}
                      x2={`calc(50% + ${to.x}px)`}
                      y2={`calc(50% + ${to.y}px)`}
                      stroke={`url(#grad-${source.id}-${target.id})`}
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />
                  </svg>
                );
              })
            )}

            {/* Render Nodes */}
            {systemNodes.map((node) => {
              const pos = positions[node.id];
              const isActive = activeNode === node.id;
              
              return (
                <div
                  key={node.id}
                  className="absolute z-10 flex items-center justify-center ml-2" /* added ml-2 as hack for centering */
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(node.id)}
                    className="relative group -ml-[80px] -mt-[48px]" /* size offset w-40, h-24 */
                  >
                    {/* Node animated border glow */}
                    <div className={`absolute -inset-0.5 rounded-xl blur-md transition-opacity duration-500 ${
                      isActive ? 'bg-accent-cyan opacity-50' : 'bg-accent-purple opacity-0 group-hover:opacity-30'
                    }`} />
                    
                    <motion.div
                      className={`relative flex h-24 w-40 flex-col items-center justify-center rounded-xl border transition-colors duration-300 ${
                        isActive
                          ? "border-accent-cyan/80 bg-black/80"
                          : "border-border bg-black/60 hover:border-slate-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-accent-cyan/10" />
                      )}
                      <p className={`text-sm font-semibold tracking-wide ${isActive ? "text-accent-cyan drop-shadow-md" : "text-white"}`}>
                        {node.label}
                      </p>
                      <p className="mt-1 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                        {node.role}
                      </p>
                    </motion.div>
                  </button>
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 backdrop-blur shadow-glass"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-transparent rounded-t-2xl opacity-50" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-accent-cyan shadow-cyan-glow animate-pulse" />
                <p className="text-xs font-mono tracking-widest text-accent-cyan uppercase">{active.label} MODULE</p>
              </div>
              
              <p className="text-xl font-display font-medium text-white mb-2">{active.role}</p>
              
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-300">{active.description}</p>
                <div className="h-px w-full bg-border" />
                <p className="text-sm leading-relaxed text-slate-400 font-mono tracking-tight">{active.details}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default SystemGraph;

