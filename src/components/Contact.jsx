import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion.js";

const links = [
  {
    label: "Email",
    href: "mailto:alexbenny2004@gmail.com",
    display: "alexbenny2004@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/AlexxBenny",
    display: "github.com/AlexxBenny",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexx-benny/",
    display: "linkedin.com/in/alexx-benny",
  },
];

function Contact() {
  return (
    <section
      id="contact"
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
          Get in Touch
        </h2>
        <p className="mt-3 max-w-xl text-base text-slate-400">
          Open to opportunities, collaborations, and conversations about AI systems.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        custom={0.05}
        className="flex flex-col sm:flex-row flex-wrap gap-4"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm transition-all duration-200 hover:border-accent/30 hover:bg-white/[0.04] group"
          >
            <span className="text-accent font-medium">{link.label}</span>
            <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
              {link.display}
            </span>
          </a>
        ))}
      </motion.div>

      <div className="border-t border-white/5 pt-8 pb-4">
        <p className="text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Alex Benny · Kerala, India
        </p>
      </div>
    </section>
  );
}

export default Contact;
