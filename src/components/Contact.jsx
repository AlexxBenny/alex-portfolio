import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion.js";

function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 space-y-12 border-t border-border pt-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0}
        className="flex flex-col gap-4 text-center md:text-left"
      >
        <h2 className="text-3xl font-display font-semibold text-white tracking-tight sm:text-4xl">
          Establish Connection.
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg mx-auto md:mx-0">
          If you&apos;re building AI products or architectures that need to behave deterministically in real-world scenarios, let&apos;s talk.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={fadeInUp}
        custom={0.05}
        className="relative group w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-transparent to-accent-purple/10 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center md:justify-between gap-8 border-accent-cyan/20 group-hover:border-accent-cyan/40 transition-colors">
          <div className="space-y-3 text-center md:text-left max-w-lg">
            <p className="font-mono text-xs tracking-widest text-accent-cyan">COMMUNICATION CHANNELS</p>
            <p className="text-sm md:text-base leading-relaxed text-slate-200">
              Pass me the context of your system, why it matters, and where you think deterministic execution is failing.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full md:w-auto">
            <a
              href="mailto:alexbenny2004@gmail.com"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-black/40 px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:border-accent-cyan/80 hover:shadow-cyan-glow hover:text-white hover:-translate-y-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-cyan-glow" />
              Email Protocol
            </a>
            <a
              href="https://github.com/alexxbenny"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-black/40 px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:text-white hover:-translate-y-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexx-benny"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-black/40 px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:border-accent-purple/80 hover:shadow-purple-glow hover:text-white hover:-translate-y-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple shadow-purple-glow" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center border-t border-border mt-16 pt-8 pb-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase text-center max-w-md">
          Interface is strictly minimal. End of transmission.
        </p>
      </div>
    </section>
  );
}

export default Contact;

