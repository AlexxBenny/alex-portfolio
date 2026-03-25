"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/motion";
import {
  github,
  stats,
  layers,
  pipeline,
  versus,
  domains,
  missionIR,
  trace,
  constraints,
} from "@/lib/data/merlinData";

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const countUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tagColors: Record<string, string> = {
  INPUT: "#94a3b8", BRAIN: "#fc8181", COORD: "#f6ad55",
  CORTEX: "#b794f4", VALID: "#fbbf24", EXEC: "#94a3b8",
  SKILL: "#68d391", DONE: "#60a5fa",
};

export default function MerlinContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-display font-medium tracking-wide text-white">MERLIN</span>
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6">

        {/* HERO */}
        <section className="pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Intelligence compiles.
              <br />
              <span className="bg-gradient-to-r from-accent via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Execution is deterministic.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial="hidden" animate="visible" variants={fadeInUp} custom={0.1}
            className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed"
          >
            MERLIN is a four-layer cognitive architecture that converts natural-language
            intent into controlled, auditable system actions. The LLM is a compiler — not
            a controller. Every plan is validated before a single action is taken.
          </motion.p>

          {/* Quick install + GitHub */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeInUp} custom={0.2}
            className="mt-8 flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-sm flex items-center gap-3">
              <span className="text-slate-600">$</span>
              <span className="text-accent">{github.pip}</span>
            </div>
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent/40 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Source
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label} variants={countUp}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center group hover:border-accent/20 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-display font-bold text-white group-hover:text-accent transition-colors">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-300">{s.label}</p>
                <p className="text-xs text-slate-600">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-t border-white/5 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent/60 tracking-widest uppercase mb-3">Architecture</p>
            <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
              Four layers. Strict boundaries.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Intelligence never touches execution. Execution never reasons.
              Every layer has one job and enforced contracts at its boundaries.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {layers.map((l, i) => (
              <motion.div
                key={l.id}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp} custom={0.08 * i}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 transition-all overflow-hidden"
              >
                <div
                  className="absolute inset-y-0 left-0 w-0.5 group-hover:w-1 transition-all duration-300"
                  style={{ backgroundColor: l.color }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs tracking-widest" style={{ color: l.color }}>{l.num}</span>
                  <h3 className="text-base font-semibold text-white">{l.name}</h3>
                  <span
                    className="ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-medium border"
                    style={{ borderColor: `${l.color}33`, background: `${l.color}0d`, color: l.color }}
                  >
                    {l.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{l.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {l.parts.map((p) => (
                    <span key={p} className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-500 font-mono">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PIPELINE */}
        <section className="border-t border-white/5 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent/60 tracking-widest uppercase mb-3">Execution Flow</p>
            <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
              Where intelligence ends. Where determinism begins.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Most AI systems use the LLM at every step. MERLIN uses it at exactly two.
              Everything else is compiled, validated, and executed deterministically.
            </p>
          </motion.div>

          <div className="flex gap-5 mt-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
              <span className="text-slate-500">Deterministic — no LLM</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.4)]" />
              <span className="text-slate-500">LLM involved</span>
            </div>
          </div>

          <div className="mt-8 relative">
            <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            <div className="space-y-0">
              {pipeline.map((node, i) => {
                const color = node.llm ? "#8b5cf6" : "#10b981";
                return (
                  <motion.div
                    key={i}
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp} custom={0.04 * i}
                    className="relative pl-10 sm:pl-14 py-2.5"
                  >
                    <div
                      className="absolute left-1.5 sm:left-2.5 top-3.5 h-2.5 w-2.5 rounded-full border-2"
                      style={{
                        borderColor: color,
                        backgroundColor: `${color}33`,
                        boxShadow: `0 0 8px ${color}4d`,
                      }}
                    />
                    {node.branch && (
                      <span className="absolute left-10 sm:left-14 -top-1 text-[9px] font-mono uppercase tracking-wider text-slate-600">
                        {node.branch === "fast" ? "↳ simple command" : "↳ complex intent"}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-white">{node.label}</span>
                      {node.fork && <span className="text-[10px] font-mono text-slate-600">— routes to fast or complex path</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VERSUS TABLE */}
        <section className="border-t border-white/5 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent/60 tracking-widest uppercase mb-3">Engineering Decisions</p>
            <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
              What most AI agents do — and why MERLIN doesn&apos;t.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp} custom={0.1}
            className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
          >
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-white/5 text-xs font-mono uppercase tracking-widest">
              <div className="bg-background px-4 py-3 text-slate-600">Dimension</div>
              <div className="bg-background px-4 py-3 text-red-400/60">Typical Agent</div>
              <div className="bg-background px-4 py-3 text-accent/60">MERLIN</div>
            </div>
            {versus.map((row, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn} custom={0.04 * i}
                className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-white/5"
              >
                <div className="bg-background px-4 py-3.5 text-sm text-white font-medium">{row.dimension}</div>
                <div className="bg-background px-4 py-3.5 text-sm text-slate-500">{row.typical}</div>
                <div className="bg-background px-4 py-3.5 text-sm text-slate-300">{row.merlin}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* DESIGN CONSTRAINTS */}
        <section className="border-t border-white/5 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent/60 tracking-widest uppercase mb-3">System Laws</p>
            <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
              Enforced. Not aspirational.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              These aren&apos;t guidelines — they&apos;re architecturally enforced at every layer.
              Violations are compile-time errors, not runtime hopes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {constraints.map((c, i) => (
              <motion.div
                key={i} variants={countUp}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-accent/15 transition-colors"
              >
                <p className="text-sm font-semibold text-white mb-1.5">{c.rule}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROOF */}
        <section className="border-t border-white/5 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent/60 tracking-widest uppercase mb-3">Proof</p>
            <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
              A compiled plan. A live trace. 48 skills.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {/* Mission IR */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp} custom={0}
              className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <span className="h-2 w-2 rounded-full bg-accent/40" />
                <span className="text-[11px] font-mono text-slate-500">mission_plan.json</span>
                <span className="ml-auto text-[10px] font-mono text-slate-600">IR v1</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-400 leading-relaxed overflow-x-auto">
                {JSON.stringify(missionIR, null, 2)}
              </pre>
            </motion.div>

            {/* Execution trace */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp} custom={0.08}
              className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
                <span className="text-[11px] font-mono text-slate-500">execution_trace.log</span>
                <span className="ml-auto text-[10px] font-mono text-slate-600">850ms total</span>
              </div>
              <div className="p-4 font-mono text-[11px] overflow-x-auto">
                {trace.map((line, i) => (
                  <div key={i} className="flex gap-2.5 py-px">
                    <span className="text-slate-600 flex-shrink-0 w-[66px]">{line.t}</span>
                    <span className="flex-shrink-0 w-[50px]" style={{ color: tagColors[line.tag] || "#94a3b8" }}>
                      [{line.tag}]
                    </span>
                    <span className="text-slate-400">{line.msg}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skill grid */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7"
          >
            {domains.map((d) => (
              <motion.div
                key={d.name} variants={countUp}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center hover:border-white/10 transition-colors"
              >
                <p className="text-lg mb-0.5">{d.icon}</p>
                <p className="text-sm font-semibold text-white">{d.name}</p>
                <p className="text-xl font-display font-bold text-accent/80">{d.count}</p>
                <p className="text-[10px] text-slate-600 leading-snug mt-1">{d.examples}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="border-t border-white/5 pt-12 pb-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-slate-400">
              <span className="text-slate-600">$ </span><span className="text-accent">{github.pip}</span>
            </div>
          </div>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
