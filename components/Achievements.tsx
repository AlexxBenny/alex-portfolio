"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { achievements } from "@/lib/data/projects";
import { fadeInUp } from "@/lib/motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#6B7280]">
          Recognitions from hackathons and competitions.
        </p>
      </motion.div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
            className="group relative rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-black/20 hover:shadow-md"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-4">
              <p className="text-sm font-semibold text-[#111111] leading-snug">
                {item.title}
              </p>
              {item.event && (
                <p className="text-xs text-[#6B7280] mt-1">{item.event}</p>
              )}
              <span
                className={`inline-block mt-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  item.place === "Winner"
                    ? "bg-amber-500/15 text-amber-700 border border-amber-500/30"
                    : item.place === "Runner-Up"
                    ? "bg-slate-200 text-slate-700 border border-slate-300"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                }`}
              >
                {item.place === "Winner"
                  ? "🏆 Winner"
                  : item.place === "Runner-Up"
                  ? "🥈 Runner-Up"
                  : `🥉 ${item.place}`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
