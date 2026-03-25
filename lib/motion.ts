import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.19, 1, 0.22, 1],
      delay,
    },
  }),
};
