import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "../utils/motion.js";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center gap-14 pb-12 pt-16 md:pt-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeIn}
        custom={0}
        className="flex flex-wrap items-center justify-center gap-4 text-center md:hidden mb-8"
      >
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-slate-300 backdrop-blur shadow-glass">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
          </span>
          <span>AI systems engineer · Agentic execution</span>
        </div>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          custom={0.05}
          className="space-y-8 relative z-10"
        >
          <div className="hidden md:flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-slate-300 backdrop-blur shadow-glass w-fit">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
            </span>
            <span>AI systems engineer · Agentic deterministic execution</span>
          </div>

          <h1 className="text-balance text-4xl font-display font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl leading-tight">
            I build AI systems that <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan animate-pulse-slow">
              actually execute.
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Most AI stops at generation. I engineer agentic architectures, determinism, and memory systems so AI can reliably plan, reason, and complete real tasks in outer space and beyond.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-full bg-accent-cyan/10 border border-accent-cyan text-accent-cyan font-medium hover:bg-accent-cyan/20 transition-all shadow-cyan-glow">
              Explore Systems
            </button>
            <p className="text-sm text-slate-400 px-4">Based in India</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={scaleIn}
          custom={0.1}
          className="relative group w-full max-w-md mx-auto"
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-2xl border border-accent-purple/30 z-0 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500" />
          <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-2xl border border-accent-cyan/30 z-0 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500" />
          
          <div className="relative glass-panel p-6 z-10 animate-float">
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="/Alex_passport.jpg"
                  alt="Portrait of Alex Benny"
                  className="relative h-20 w-20 rounded-full border border-slate-700/80 object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-display font-medium text-white">Alex Benny</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-emerald-glow"></span>
                  <p className="text-xs text-slate-400">System Online</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono tracking-widest text-accent-purple">FOCUS MODULE</span>
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-slate-300">
                  Execution Runtime
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-black/40 px-4 py-3 group-hover:border-accent-cyan/50 transition-colors">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-100">MERLIN Layer</p>
                  <p className="text-xs text-slate-400">Tools · Routing</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-mono tracking-wide text-emerald-400 border border-emerald-500/20 shadow-emerald-glow">
                  STABLE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-xl border border-border bg-black/40 p-3 hover:border-accent-purple/50 transition-colors">
                  <p className="text-[11px] font-mono text-accent-purple">01. PLANNING</p>
                  <p className="mt-2 text-xs text-slate-300">
                    Observable traces & controlled execution.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-black/40 p-3 hover:border-accent-cyan/50 transition-colors">
                  <p className="text-[11px] font-mono text-accent-cyan">02. DETERMINISM</p>
                  <p className="mt-2 text-xs text-slate-300">
                    Reproducible behaviors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

