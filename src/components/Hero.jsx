import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "../utils/motion.js";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center gap-14 pb-12 pt-16 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeIn}
        custom={0}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur md:text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          <span>AI systems engineer · Agentic & deterministic execution</span>
        </div>
        <p className="text-xs text-slate-400 md:text-sm">
          Based in India · Working across product and infra layers
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          custom={0.05}
          className="space-y-7"
        >
          <div className="flex items-center gap-4">
            <img
              src="/Alex_passport.jpg"
              alt="Portrait of Alex Benny"
              className="h-16 w-16 rounded-2xl border border-slate-700/80 object-cover shadow-[0_14px_40px_rgba(15,23,42,0.9)] md:h-20 md:w-20"
            />
            <div>
              <p className="text-sm font-medium text-slate-200 md:text-base">Alex Benny</p>
              <p className="text-xs text-slate-400 md:text-sm">
                I build deterministic AI systems that plan, reason, and execute.
              </p>
            </div>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            I build deterministic AI systems that don&apos;t just respond — they execute.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Most AI systems stop at generation. I focus on agentic architectures, execution
            pipelines, and memory systems so that AI can reliably plan, coordinate, and complete
            real tasks — not just talk about them.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={scaleIn}
          custom={0.1}
          className="relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.95)]"
        >
          <div className="mb-5 flex items-center justify-between text-xs text-slate-400 md:text-sm">
            <span className="font-mono text-[11px] tracking-[0.18em] text-slate-400">
              CURRENT FOCUS
            </span>
            <span className="rounded-full border border-slate-800/60 px-2 py-0.5 text-xs text-slate-300">
              Deterministic AI execution
            </span>
          </div>

          <div className="space-y-4 text-sm text-slate-200 md:text-base">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-slate-100 md:text-base">Execution runtime</p>
                <p className="text-xs text-slate-400 md:text-sm">MERLIN · Tools · Execution layer</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                STABLE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-2.5">
                <p className="text-[11px] font-medium text-slate-200">
                  Planning
                </p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">
                  Explicit plans, observable traces, controlled execution.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-2.5">
                <p className="text-[11px] font-medium text-slate-200">
                  Determinism
                </p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">
                  Reproducible behaviours over probabilistic models.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

