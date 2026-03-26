"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data/projects";
import { fadeInUp } from "@/lib/motion";

export default function Experience() {
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

      <div className="relative space-y-5 pl-6 md:pl-8">
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-white/10 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            custom={0.1 * index}
            className="relative group"
          >
            <div className="absolute -left-6 md:-left-8 top-5 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full border-2 border-accent/50 bg-background group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(96,165,250,0.4)] transition-all duration-300" />
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out before:z-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <p className="text-lg font-semibold text-white">
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-accent">{exp.company}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-sm text-slate-500">{exp.location}</span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-0.5 text-[11px] font-medium text-accent hover:bg-accent/15 hover:border-accent/40 transition-all"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        See it live · {exp.link.replace("https://", "")} ↗
                      </a>
                    )}
                  </div>
                </div>
                <span className="text-sm text-slate-600 font-mono flex-shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/40" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
