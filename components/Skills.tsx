"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/projects";
import { fadeInUp } from "@/lib/motion";

const categoryMeta: Record<string, { accent: string; icon: string }> = {
  Programming:            { accent: "#60a5fa", icon: "⟨/⟩" },
  "AI Systems":           { accent: "#a78bfa", icon: "◈" },
  "AI Infrastructure":    { accent: "#f472b6", icon: "⬡" },
  "Software & Backend":   { accent: "#34d399", icon: "⧉" },
  "DevOps & Cloud":       { accent: "#f59e0b", icon: "⟐" },
  Tools:                  { accent: "#94a3b8", icon: "⚙" },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipAnim = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 space-y-10 border-t border-black/10 pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-3xl font-display font-semibold text-[#111111] tracking-tight">
          Technical Skills
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#6B7280]">
          Core technologies and tools across the AI and software stack.
        </p>
      </motion.div>

      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Subtle connecting gradient lines behind cards */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        </div>

        {skills.map((group, i) => {
          const meta = categoryMeta[group.category] || { accent: "#2563EB", icon: "●" };
          return (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0.05 * i}
              whileHover={{ y: -4 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="group relative rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-md overflow-hidden"
            >
              {/* Top accent gradient bar */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent, ${meta.accent}60, transparent)`,
                }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                  style={{
                    backgroundColor: `${meta.accent}15`,
                    color: meta.accent,
                  }}
                >
                  {meta.icon}
                </span>
                <p className="text-sm font-semibold text-[#111111] tracking-wide">
                  {group.category}
                </p>
              </div>

              {/* Skill chips */}
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
                    className="rounded-md border border-black/10 bg-[#FAFAF7] px-3 py-1.5 text-[13px] font-medium text-[#111111] transition-all duration-200 hover:scale-105 cursor-default hover:border-accent hover:text-accent"
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
