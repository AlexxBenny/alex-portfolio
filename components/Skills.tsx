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

      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Subtle connecting gradient lines behind cards */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <div className="absolute left-1/3 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-glow-violet/10 to-transparent hidden lg:block" />
          <div className="absolute left-2/3 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-glow-cyan/10 to-transparent hidden lg:block" />
        </div>

        {skills.map((group, i) => {
          const meta = categoryMeta[group.category] || { accent: "#94a3b8", icon: "●" };
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
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out before:z-10"
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
                    boxShadow: `0 0 12px ${meta.accent}20`,
                  }}
                >
                  {meta.icon}
                </span>
                <p className="text-sm font-semibold text-white tracking-wide">
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
                    className="rounded-md border px-3 py-1.5 text-[13px] font-medium transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      borderColor: `${meta.accent}20`,
                      backgroundColor: `${meta.accent}08`,
                      color: "#cbd5e1",
                    }}
                    whileHover={{
                      backgroundColor: `${meta.accent}18`,
                      borderColor: `${meta.accent}40`,
                      color: "#f1f5f9",
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
