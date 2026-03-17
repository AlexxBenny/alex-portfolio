import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion.js";

function Contact() {
  return (
    <section
      id="contact"
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
            Let&apos;s talk about real systems.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            If you&apos;re building LLM agents, MERLIN-style execution layers, RAG pipelines, or AI
            products that need to behave consistently in production, I&apos;d be happy to talk.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={fadeInUp}
        custom={0.05}
        className="flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="space-y-2 text-sm text-slate-300 md:text-base">
          <p className="font-mono text-xs tracking-[0.18em] text-slate-500">Preferred channels</p>
          <p className="leading-relaxed">
            Short context about your system, why it matters, and where you think AI can make it
            more deterministic is perfect.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <a
            href="mailto:alexbenny2004@gmail.com"
            className="rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-slate-200 transition hover:border-sky-400/80 hover:bg-sky-500/10 hover:text-sky-100"
          >
            Email
          </a>
          <a
            href="https://github.com/alexxbenny"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-slate-200 transition hover:border-sky-400/80 hover:bg-sky-500/10 hover:text-sky-100"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexx-benny"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-slate-200 transition hover:border-sky-400/80 hover:bg-sky-500/10 hover:text-sky-100"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <p className="pt-4 text-xs text-slate-500 md:text-sm">
        This interface is intentionally minimal — no blog, no feed. Just the systems and the impact.
      </p>
    </section>
  );
}

export default Contact;

