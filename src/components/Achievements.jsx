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
        <p className="mt-3 max-w-xl text-base text-slate-400">
          Recognitions from hackathons and competitions.
        </p>
      </motion.div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={0.08 * i}
            whileHover={{ y: -6 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="group relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10"
          >
            {/* Photo */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-sm font-semibold text-white leading-snug">
                {item.title}
              </p>
              {item.event && (
                <p className="text-xs text-slate-500 mt-1">{item.event}</p>
              )}
              <span className={`inline-block mt-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                item.place === "Winner"
                  ? "bg-amber-500/15 text-amber-300 border border-amber-500/25"
                  : "bg-white/5 text-slate-400 border border-white/10"
              }`}>
                {item.place === "Winner" ? "🏆 Winner" : `🥉 ${item.place}`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
