import { motion } from "framer-motion";
import { skills } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

/* accent colors for each skill category */
const categoryAccents = {
  Programming: "#60a5fa",
  "AI Systems": "#a78bfa",
  "AI Infrastructure": "#f472b6",
  "Software & Backend": "#34d399",
  "DevOps & Cloud": "#f59e0b",
  Tools: "#94a3b8",
};

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

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
          Core technologies and tools across the AI and software stack.
        </p>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const accent = categoryAccents[group.category] || "#94a3b8";
          return (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.05 * i}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/10 overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className="absolute inset-y-0 left-0 w-0.5 group-hover:w-1 transition-all duration-300"
                style={{ backgroundColor: accent }}
              />

              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}4d` }}
                />
                <p className="text-sm font-semibold text-white">{group.category}</p>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipAnim}
                    className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200"
                    style={{
                      borderColor: `${accent}25`,
                      backgroundColor: `${accent}0d`,
                      color: "#e2e8f0",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
