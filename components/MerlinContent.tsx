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
  INPUT: "#64748b", BRAIN: "#e11d48", COORD: "#d97706",
  CORTEX: "#7c3aed", VALID: "#d97706", EXEC: "#64748b",
  SKILL: "#059669", DONE: "#2563eb",
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
      <header className="fixed inset-x-0 top-0 z-40 bg-[#FAFAF7]/90 backdrop-blur-md border-b border-black/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111111] transition-colors font-medium"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-display font-medium tracking-wide text-[#111111]">MERLIN</span>
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-3 py-1.5 text-xs text-[#111111] shadow-sm hover:border-accent/40 hover:text-accent transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        {/* Data-stream gradient line */}
        <div
          className="h-px animate-data-stream"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, #2563EB 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </header>

      {/* Content */}
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6">

        {/* HERO */}
        <section className="pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#111111] leading-[1.1]">
              Intelligence compiles.
              <br />
              <span className="bg-gradient-to-r from-accent via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Execution is deterministic.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial="hidden" animate="visible" variants={fadeInUp} custom={0.1}
            className="mt-6 max-w-2xl text-lg text-[#6B7280] leading-relaxed"
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
            <div className="rounded-lg border border-black/10 bg-white px-4 py-2.5 font-mono text-sm shadow-sm flex items-center gap-3">
              <span className="text-[#6B7280]">$</span>
              <span className="text-accent font-semibold">{github.pip}</span>
            </div>
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-[#111111] shadow-sm hover:border-accent/40 hover:text-accent transition-all"
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
                className="rounded-xl border border-black/10 bg-white p-5 text-center shadow-sm hover:border-black/20 transition-all"
              >
                <p className="text-3xl sm:text-4xl font-display font-bold text-[#111111]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#111111]">{s.label}</p>
                <p className="text-xs text-[#6B7280]">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-t border-black/10 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent font-semibold tracking-widest uppercase mb-3">Architecture</p>
            <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
              Four layers. Strict boundaries.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#6B7280]">
              Intelligence never touches execution. Execution never reasons.
              Every layer has one job and enforced contracts at its boundaries.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {layers.map((l, i) => (
              <motion.div
                key={l.id}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp} custom={0.08 * i}
                className="group relative rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:border-black/20 transition-all overflow-hidden"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 transition-all duration-300"
                  style={{ backgroundColor: l.color }}
                />
                <div className="flex items-center gap-3 mb-3 pl-1">
                  <span className="font-mono text-xs tracking-widest font-bold" style={{ color: l.color }}>{l.num}</span>
                  <h3 className="text-base font-semibold text-[#111111]">{l.name}</h3>
                  <span
                    className="ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-medium border"
                    style={{ borderColor: `${l.color}40`, background: `${l.color}15`, color: l.color }}
                  >
                    {l.tag}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4 pl-1">{l.desc}</p>
                <div className="flex flex-wrap gap-1.5 pl-1">
                  {l.parts.map((p) => (
                    <span key={p} className="rounded-md border border-black/10 bg-[#FAFAF7] px-2 py-0.5 text-[11px] text-[#111111] font-mono font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PIPELINE */}
        <section className="border-t border-black/10 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent font-semibold tracking-widest uppercase mb-3">Execution Flow</p>
            <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
              Where intelligence ends. Where determinism begins.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#6B7280]">
              Most AI systems use the LLM at every step. MERLIN uses it at exactly two.
              Everything else is compiled, validated, and executed deterministically.
            </p>
          </motion.div>

          <div className="flex gap-5 mt-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
              <span className="text-[#6B7280] font-medium">Deterministic — no LLM</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.4)]" />
              <span className="text-[#6B7280] font-medium">LLM involved</span>
            </div>
          </div>

          <div className="mt-8 relative">
            <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-black/15 via-black/10 to-transparent" />
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
                      className="absolute left-1.5 sm:left-2.5 top-3.5 h-2.5 w-2.5 rounded-full border-2 bg-white"
                      style={{
                        borderColor: color,
                        boxShadow: `0 0 6px ${color}4d`,
                      }}
                    />
                    {node.branch && (
                      <span className="absolute left-10 sm:left-14 -top-1 text-[9px] font-mono uppercase tracking-wider text-[#6B7280] font-semibold">
                        {node.branch === "fast" ? "↳ simple command" : "↳ complex intent"}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[#111111]">{node.label}</span>
                      {node.fork && <span className="text-[10px] font-mono text-[#6B7280]">— routes to fast or complex path</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VERSUS TABLE */}
        <section className="border-t border-black/10 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent font-semibold tracking-widest uppercase mb-3">Engineering Decisions</p>
            <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
              What most AI agents do — and why MERLIN doesn&apos;t.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp} custom={0.1}
            className="mt-10 rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-black/10 text-xs font-mono uppercase tracking-widest font-semibold">
              <div className="bg-[#FAFAF7] px-4 py-3 text-[#6B7280]">Dimension</div>
              <div className="bg-[#FAFAF7] px-4 py-3 text-red-600">Typical Agent</div>
              <div className="bg-[#FAFAF7] px-4 py-3 text-accent">MERLIN</div>
            </div>
            {versus.map((row, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn} custom={0.04 * i}
                className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-black/5"
              >
                <div className="bg-white px-4 py-3.5 text-sm text-[#111111] font-medium">{row.dimension}</div>
                <div className="bg-white px-4 py-3.5 text-sm text-[#6B7280]">{row.typical}</div>
                <div className="bg-white px-4 py-3.5 text-sm text-[#111111] font-medium">{row.merlin}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* DESIGN CONSTRAINTS */}
        <section className="border-t border-black/10 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent font-semibold tracking-widest uppercase mb-3">System Laws</p>
            <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
              Enforced. Not aspirational.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#6B7280]">
              These aren&apos;t guidelines — they&apos;re architecturally enforced at every layer.
              Violations are compile-time errors, not runtime hopes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {constraints.map((c, i) => (
              <motion.div
                key={i} variants={countUp}
                className="rounded-xl border border-black/10 bg-white p-4 shadow-sm hover:border-black/20 transition-all"
              >
                <p className="text-sm font-semibold text-[#111111] mb-1.5">{c.rule}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROOF */}
        <section className="border-t border-black/10 pt-16 pb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} custom={0}>
            <p className="font-mono text-xs text-accent font-semibold tracking-widest uppercase mb-3">Proof</p>
            <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
              A compiled plan. A live trace. 48 skills.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {/* Mission IR */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp} custom={0}
              className="rounded-xl border border-black/10 bg-[#0f172a] shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-800 bg-slate-900/80">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-[11px] font-mono text-slate-300">mission_plan.json</span>
                <span className="ml-auto text-[10px] font-mono text-slate-400">IR v1</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 leading-relaxed overflow-x-auto">
                {JSON.stringify(missionIR, null, 2)}
              </pre>
            </motion.div>

            {/* Execution trace */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp} custom={0.08}
              className="rounded-xl border border-black/10 bg-[#0f172a] shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-800 bg-slate-900/80">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono text-slate-300">execution_trace.log</span>
                <span className="ml-auto text-[10px] font-mono text-slate-400">850ms total</span>
              </div>
              <div className="p-4 font-mono text-[11px] overflow-x-auto">
                {trace.map((line, i) => (
                  <div key={i} className="flex gap-2.5 py-px">
                    <span className="text-slate-400 flex-shrink-0 w-[66px]">{line.t}</span>
                    <span className="flex-shrink-0 w-[50px] font-semibold" style={{ color: tagColors[line.tag] || "#94a3b8" }}>
                      [{line.tag}]
                    </span>
                    <span className="text-slate-200">{line.msg}</span>
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
                className="rounded-xl border border-black/10 bg-white p-3 text-center shadow-sm hover:border-black/20 transition-all"
              >
                <p className="text-lg mb-0.5">{d.icon}</p>
                <p className="text-sm font-semibold text-[#111111]">{d.name}</p>
                <p className="text-xl font-display font-bold text-accent">{d.count}</p>
                <p className="text-[10px] text-[#6B7280] leading-snug mt-1">{d.examples}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="border-t border-black/10 pt-12 pb-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] shadow-sm hover:border-accent/40 hover:text-accent transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <div className="rounded-lg border border-black/10 bg-white px-4 py-2.5 font-mono text-xs text-[#111111] shadow-sm">
              <span className="text-[#6B7280]">$ </span><span className="text-accent font-semibold">{github.pip}</span>
            </div>
          </div>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
