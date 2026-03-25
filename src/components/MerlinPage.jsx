import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../utils/motion.js";
import StarBackground from "./StarBackground.jsx";
import {
  positioning,
  architectureLayers,
  executionFlow,
  hardProblems,
  capabilities,
  missionIRExample,
  executionTrace,
  skillInventory,
  github,
} from "../data/merlinData.js";

/* ──────────────────────────── helpers ──────────────────────────── */
const Section = ({ children, id, className = "" }) => (
  <section
    id={id}
    className={`relative scroll-mt-24 border-t border-white/5 pt-16 pb-8 ${className}`}
  >
    {children}
  </section>
);

const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="font-mono text-xs text-accent/70 tracking-widest">
      {number}
    </span>
    <span className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
  </div>
);

const Pill = ({ children, color }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border"
    style={{
      borderColor: `${color}33`,
      background: `${color}0d`,
      color: color,
    }}
  >
    {children}
  </span>
);

/* ──────────────────────────── page ──────────────────────────── */
export default function MerlinPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans">
      <StarBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* ─── Navbar ─── */}
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Portfolio
            </Link>
            <span className="text-sm font-display font-medium tracking-wide text-white">
              MERLIN
            </span>
          </div>
        </header>

        {/* ─── Content ─── */}
        <main className="relative mx-auto flex max-w-5xl flex-col px-4 pb-24 pt-28 sm:px-6">
          {/* ═══════════ S1: POSITIONING ═══════════ */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-20"
          >
            <p className="font-mono text-sm text-accent/60 tracking-widest uppercase mb-4">
              System Architecture Case Study
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              {positioning.tagline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-300">
              {positioning.oneLiner}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {/* NOT list */}
              <motion.div
                variants={fadeInUp}
                custom={0.1}
                className="rounded-xl border border-red-500/10 bg-red-500/[0.03] p-5"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-400/80 mb-4">
                  What MERLIN is not
                </h3>
                <ul className="space-y-3">
                  {positioning.notList.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* IS list */}
              <motion.div
                variants={fadeInUp}
                custom={0.15}
                className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-5"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-4">
                  What MERLIN actually is
                </h3>
                <ul className="space-y-3">
                  {positioning.isList.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.blockquote
              variants={fadeIn}
              custom={0.25}
              className="mt-8 border-l-2 border-accent/30 pl-4 italic text-sm text-slate-500"
            >
              {positioning.philosophy}
            </motion.blockquote>

            {/* ── Quick Start (inline) ── */}
            <motion.div
              variants={fadeInUp}
              custom={0.3}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <div className="rounded-xl border border-accent/20 bg-accent/[0.03] overflow-hidden flex-shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-accent/10 bg-accent/[0.02]">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-1.5 text-[10px] font-mono text-slate-600">terminal</span>
                </div>
                <div className="px-4 py-3 font-mono text-sm space-y-1">
                  <p><span className="text-slate-600">$</span>{" "}<span className="text-accent">{github.pip}</span></p>
                  <p><span className="text-slate-600">$</span>{" "}<span className="text-emerald-400">{github.init}</span></p>
                  <p><span className="text-slate-600">$</span>{" "}<span className="text-white">{github.run}</span></p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-slate-500">Pip-installable and open source. Three commands to a working system.</p>
                <a
                  href={github.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all w-fit"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════════ S2: ARCHITECTURE ═══════════ */}
          <Section id="architecture">
            <SectionLabel number="01" text="Architecture" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                Four-Layer Cognitive Architecture
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-400">
                Each layer has a single responsibility. Intelligence never
                touches execution directly. Execution never reasons.
              </p>
            </motion.div>

            <div className="mt-10 space-y-4">
              {architectureLayers.map((layer, i) => (
                <motion.div
                  key={layer.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={0.08 * i}
                  className="group relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-colors"
                >
                  {/* Accent bar */}
                  <div
                    className="absolute inset-y-0 left-0 w-1 transition-all group-hover:w-1.5"
                    style={{ backgroundColor: layer.color }}
                  />

                  <div className="pl-6 pr-5 py-5 sm:pl-8 sm:pr-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: layer.color }}
                      >
                        {layer.number}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {layer.name}
                      </h3>
                      <Pill color={layer.color}>{layer.subtitle}</Pill>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 mt-2">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                          What it does
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {layer.what}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                          Why it exists
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {layer.why}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {layer.components.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-500 font-mono"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design Constraints */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.1}
              className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] p-5 sm:p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent/70 mb-4">
                Design Constraints (Enforced, Not Aspirational)
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["No global mutable context", "WorldTimeline is append-only; WorldState is derived"],
                  ["Skills are isolated", "No inter-skill calls; no DAG modification"],
                  ["One LLM call per compilation", "MissionCortex compiles once; no loops"],
                  ["Infrastructure ≠ Intelligence", "Cortex cannot access OS, browser, or filesystem directly"],
                  ["Failures are bounded", "Inline recovery max 2 per node; Tier 3 limited to 1 recompile"],
                ].map(([rule, enforcement]) => (
                  <div key={rule} className="flex items-start gap-2.5">
                    <span className="mt-1 text-accent text-xs">◆</span>
                    <div>
                      <p className="text-sm text-white font-medium">{rule}</p>
                      <p className="text-xs text-slate-500">{enforcement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Section>

          {/* ═══════════ S3: EXECUTION FLOW ═══════════ */}
          <Section id="execution-flow">
            <SectionLabel number="02" text="Execution Flow" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                Request Lifecycle
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-400">
                Every request follows a deterministic path. The LLM is invoked at
                exactly two points — and nowhere else.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-500">No LLM</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  <span className="text-slate-500">Uses LLM</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 relative">
              {/* Vertical connector line */}
              <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

              <div className="space-y-1">
                {executionFlow.map((node, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeInUp}
                    custom={0.05 * i}
                    className="relative pl-12 sm:pl-16 py-3 group"
                  >
                    {/* Node dot */}
                    <div
                      className="absolute left-2.5 sm:left-3.5 top-4 h-3 w-3 rounded-full border-2 transition-shadow"
                      style={{
                        borderColor: node.usesLLM ? "#8b5cf6" : "#10b981",
                        backgroundColor: node.usesLLM
                          ? "rgba(139, 92, 246, 0.2)"
                          : "rgba(16, 185, 129, 0.2)",
                        boxShadow: `0 0 8px ${
                          node.usesLLM
                            ? "rgba(139, 92, 246, 0.3)"
                            : "rgba(16, 185, 129, 0.3)"
                        }`,
                      }}
                    />

                    {/* Branch label */}
                    {node.branchLabel && (
                      <span className="absolute left-[52px] sm:left-[72px] -top-1 text-[10px] font-mono uppercase tracking-wider text-slate-600">
                        {node.branchLabel}
                      </span>
                    )}

                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white">
                        {node.step}
                      </h4>
                      <span className="text-xs text-slate-600 font-mono">
                        {node.detail}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {node.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* ═══════════ S4: HARD PROBLEMS ═══════════ */}
          <Section id="hard-problems">
            <SectionLabel number="03" text="Hard Problems" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                Hard Problems Solved
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-400">
                The problems that separate engineering from wrapping an API.
                Each one has a naive approach that most projects use — and a
                concrete reason why it fails.
              </p>
            </motion.div>

            <div className="mt-10 space-y-5">
              {hardProblems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.08 * i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
                >
                  <div className="px-5 py-5 sm:px-6">
                    <h3 className="text-base font-semibold text-white mb-4">
                      {problem.title}
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-red-500/10 bg-red-500/[0.03] p-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-red-400/70 mb-2">
                          The Naive Approach
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {problem.naive}
                        </p>
                      </div>
                      <div className="rounded-lg border border-amber-500/10 bg-amber-500/[0.03] p-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400/70 mb-2">
                          Why It Fails
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {problem.whyFails}
                        </p>
                      </div>
                      <div className="rounded-lg border border-emerald-500/10 bg-emerald-500/[0.03] p-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/70 mb-2">
                          What MERLIN Built
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {problem.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ═══════════ S5: CAPABILITIES ═══════════ */}
          <Section id="capabilities">
            <SectionLabel number="04" text="Capabilities" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                Real Capabilities
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-400">
                Not feature bullets. Concrete engineering capabilities with the
                technical backing to prove them.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={0.06 * i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-accent/15 transition-colors group"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors leading-snug">
                    {cap.statement}
                  </p>
                  <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                    {cap.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ═══════════ S6: PROOF ═══════════ */}
          <Section id="proof">
            <SectionLabel number="05" text="Proof" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                Show, Don't Tell
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-400">
                A compiled mission plan, a real execution trace, and the skill
                surface that backs it all.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Mission IR */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0}
                className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
                  <span className="text-xs font-mono text-slate-500">
                    mission_plan.json — Compiled IR v1
                  </span>
                </div>
                <pre className="p-5 text-xs font-mono text-slate-400 leading-relaxed overflow-x-auto">
                  {JSON.stringify(missionIRExample, null, 2)}
                </pre>
              </motion.div>

              {/* Execution trace */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.08}
                className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                  <span className="text-xs font-mono text-slate-500">
                    execution_trace.log
                  </span>
                </div>
                <div className="p-4 space-y-0.5 font-mono text-xs overflow-x-auto">
                  {executionTrace.map((line, i) => (
                    <div key={i} className="flex gap-3 py-0.5">
                      <span className="text-slate-600 flex-shrink-0 w-[72px]">
                        {line.time}
                      </span>
                      <span
                        className="flex-shrink-0 w-[52px]"
                        style={{
                          color:
                            line.level === "SKILL"
                              ? "#68d391"
                              : line.level === "CORTEX"
                              ? "#9f7aea"
                              : line.level === "DONE"
                              ? "#60a5fa"
                              : line.level === "VALID"
                              ? "#fbbf24"
                              : "#94a3b8",
                        }}
                      >
                        [{line.level}]
                      </span>
                      <span className="text-slate-400">{line.msg}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Skill inventory */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.1}
              className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="text-xs font-mono text-slate-500">
                  Skill Registry — 48 skills across 7 domains
                </span>
              </div>
              <div className="p-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {skillInventory.map((s) => (
                    <div key={s.domain} className="flex items-start gap-3">
                      <span className="font-mono text-2xl font-bold text-white/10 leading-none">
                        {s.count}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {s.domain}
                        </p>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {s.examples}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Section>

          {/* ═══════════ FOOTER ═══════════ */}
          <div className="border-t border-white/5 pt-12 pb-4 mt-8 flex flex-col items-center gap-4">
            <a
              href={github.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <Link
              to="/"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              ← Back to portfolio
            </Link>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
