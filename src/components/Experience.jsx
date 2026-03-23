import { motion } from "framer-motion";
import { experiences } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 space-y-10 border-t border-white/5 pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
          Experience
        </h2>
        <p className="mt-3 max-w-xl text-base text-slate-400">
          Professional work building real systems.
        </p>
      </motion.div>

      <div className="relative space-y-8 pl-6 md:pl-8">
        {/* Timeline line */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-white/10" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            custom={0.1 * index}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 md:-left-8 top-1.5 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full border-2 border-accent/50 bg-background" />
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <p className="text-base font-semibold text-white">
                    {exp.role}
                  </p>
                  <p className="text-sm text-accent">
                    {exp.company}
                    <span className="text-slate-500"> · {exp.location}</span>
                  </p>
                </div>
                <p className="text-sm text-slate-500 font-mono">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
