import { motion } from "framer-motion";
import { skills } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Skills() {
  return (
    <section
      id="skills"
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
          Technical Skills
        </h2>
        <p className="mt-3 max-w-xl text-base text-slate-400">
          The tools and technologies I work with regularly.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.05 * i}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/10"
          >
            <p className="text-sm font-medium text-accent mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
