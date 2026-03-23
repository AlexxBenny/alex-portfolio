import { motion } from "framer-motion";
import { achievements } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </h2>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.05 * i}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-colors duration-200 hover:border-white/10"
          >
            <span className="text-accent text-sm">✦</span>
            <span className="text-sm text-slate-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
