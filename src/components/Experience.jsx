import { motion } from "framer-motion";
import { experienceHighlights } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Experience() {
  return (
    <section
      id="experience"
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
            Where I&apos;ve applied these ideas.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            From MERLIN to work at Recode AI Solutions and ICT Academy of Kerala, I focus on one
            thing: making AI systems behave predictably in production — fewer wasted calls, faster
            flows, and clearer traces.
          </p>
        </div>
        <p className="max-w-xs text-xs text-slate-400 md:text-sm">
          Metrics and statements are simplified, not exaggerated. The goal is clarity over hype.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={fadeInUp}
        custom={0.05}
        className="grid gap-4 md:grid-cols-2"
      >
        {experienceHighlights.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-mono tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <span className="text-xs text-slate-500">0{index + 1}</span>
            </div>
            <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;

