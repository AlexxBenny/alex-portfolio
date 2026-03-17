import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  // We can just render a simple pulsing star or planet
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex items-center justify-center">
        {/* Core star */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-12 w-12 rounded-full bg-cyan-400 blur-sm"
        />
        <div className="absolute h-8 w-8 rounded-full bg-white shadow-cyan-glow" />

        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute h-32 w-32 rounded-full border border-cyan-500/20"
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-cyan shadow-cyan-glow" />
        </motion.div>
        
        {/* Outer Orbit ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute h-48 w-48 rounded-full border border-purple-500/20"
        >
          <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-purple shadow-purple-glow" />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 font-mono text-sm tracking-[0.2em] text-cyan-400/80"
      >
        INITIALIZING SYSTEMS...
      </motion.p>
    </motion.div>
  );
}
