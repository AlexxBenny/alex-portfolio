import { motion } from "framer-motion";
import { achievements } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

const icons = ["🏆", "🥉", "🏆", "🏆"];

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
        <p className="mt-3 max-w-xl text-base text-slate-400">
          Recognitions from hackathons and competitions.
        </p>
      </motion.div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.06 * i}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.03] text-center"
          >
            <span className="text-2xl mb-3 block">{icons[i] || "✦"}</span>
            <p className="text-sm font-medium text-slate-300 leading-snug">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
