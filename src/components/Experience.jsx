import { motion } from "framer-motion";
import { experienceHighlights } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 space-y-16 border-t border-border pt-20"
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
          <h2 className="text-3xl font-display font-semibold text-white tracking-tight sm:text-4xl">
            Impact & Application
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            From architecture to production. I focus on making systems behave predictably — fewer wasted calls, faster flows, and resilient infrastructure.
          </p>
        </div>
        <p className="max-w-xs text-sm text-slate-400 font-mono tracking-widest uppercase">
          Production Metrics
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline glowing line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent opacity-30 md:left-1/2 md:-ml-[1px]" />

        <div className="space-y-12">
          {experienceHighlights.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                variants={fadeInUp}
                custom={0.1 * index}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 flex items-center justify-center -translate-x-1/2 w-8 h-8 rounded-full border-2 border-surface bg-background z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-purple animate-pulse" />
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-panel p-6 relative group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/30 hover:shadow-purple-glow">
                    {/* Background gradient sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/0 via-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono tracking-widest text-accent-cyan">
                          0{index + 1}
                        </span>
                        <div className="h-[1px] flex-1 bg-border" />
                        <p className="text-[10px] font-mono tracking-widest text-slate-400 bg-surface px-2 py-0.5 rounded border border-border">
                          {item.label}
                        </p>
                      </div>
                      
                      <p className="text-2xl font-display font-semibold tracking-tight text-white mb-3">
                        {item.value}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

