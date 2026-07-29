"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "@/lib/data/projects";
import { fadeInUp } from "@/lib/motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AlexxBenny",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexx-benny/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:alexbenny2004@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center pb-12 pt-8"
    >
      <div className="flex flex-col gap-10 w-full">
        {/* Top Hero Row: 3D Photo + Name & Intro */}
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-[auto_1fr] items-center">
          {/* Profile Photo - Ultra-Clean Rounded Square */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            custom={0}
            className="flex justify-center md:justify-start"
          >
            <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              {/* Soft modern ambient backdrop blur */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent/20 to-black/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Clean Single Image Card (Rounded Square) */}
              <div className="relative h-full w-full rounded-2xl border border-black/10 bg-white overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_16px_50px_rgba(37,99,235,0.1)]">
                <Image
                  src="/Alex_passport.jpg"
                  alt="Alex Benny — AI Systems Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
          </motion.div>

          {/* Name & Side Content Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            custom={0.1}
            className="grid gap-6 grid-cols-1 lg:grid-cols-[auto_1fr] items-center text-center md:text-left"
          >
            {/* Giant ALEX BENNY Name matched to Photo Height */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.9] text-[#111111] uppercase flex flex-col justify-between">
              <span>ALEX</span>
              <span className="text-accent">BENNY</span>
            </h1>

            {/* Description Text positioned to the right of the giant name */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#6B7280] border-l-0 lg:border-l lg:border-black/10 lg:pl-6">
              <p className="font-semibold text-[#111111] text-base sm:text-lg">
                Systems Engineer at TCS.
              </p>

              <p>
                Building AI agents, <br className="hidden sm:block" />
                computer vision systems, <br className="hidden sm:block" />
                and automation software.
              </p>

              <p className="text-xs sm:text-sm">
                Previously built MERLIN, <br className="hidden sm:block" />
                Smart Glasses, Curabot, <br className="hidden sm:block" />
                and multiple hackathon-winning projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Badges & Social Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-6">
          {/* Education badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 text-xs justify-center sm:justify-start"
          >
            <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[#6B7280]">
              {education.degree}
            </span>
            <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[#6B7280]">
              {education.location}
            </span>
          </motion.div>

          {/* Social buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-3 justify-center sm:justify-end"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group/btn flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm text-[#111111] shadow-sm transition-all duration-200 hover:border-accent/40 hover:text-accent hover:-translate-y-0.5"
                aria-label={s.label}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
