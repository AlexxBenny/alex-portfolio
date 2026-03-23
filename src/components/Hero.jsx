import { motion } from "framer-motion";
import { education } from "../data/projects.js";
import { fadeInUp } from "../utils/motion.js";

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

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center pb-12 pt-8"
    >
      <div className="grid gap-12 md:gap-16 md:grid-cols-[auto_1fr] items-center w-full">
        {/* Profile Photo — Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          custom={0}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-md" />
            <img
              src="/Alex_passport.jpg"
              alt="Alex Benny"
              className="relative h-52 w-52 md:h-64 md:w-64 rounded-full object-cover border-2 border-white/10"
            />
          </div>
        </motion.div>

        {/* About — Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          custom={0.1}
          className="space-y-6 text-center md:text-left"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              Alex Benny
            </h1>
            <p className="mt-2 text-lg text-accent font-medium">
              AI & Software Developer
            </p>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-slate-400 mx-auto md:mx-0">
            AI engineer developing systems that translate intent into real-world actions, currently pursuing B.Tech in AI & Data Science.
            Focused on automation, NLP, and deployable systems.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 justify-center md:justify-start">
            <span>{education.institution}</span>
            <span className="hidden sm:inline">·</span>
            <span>{education.location}</span>
            <span className="hidden sm:inline">·</span>
            <span>CGPA: {education.cgpa}</span>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 transition-all duration-200 hover:border-accent/40 hover:text-white hover:bg-white/[0.06]"
                aria-label={s.label}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
