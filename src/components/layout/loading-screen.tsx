import { motion } from "motion/react";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      onAnimationComplete={(d) => {
        const a = d as { opacity?: number };
        if (a.opacity === 0) {
          const el = document.getElementById("hs-loader");
          if (el) el.style.display = "none";
        }
      }}
      id="hs-loader"
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-bold tracking-tight"
        >
          Highway<span className="text-gradient"> Setu</span>
        </motion.div>
        <div className="h-[2px] w-44 overflow-hidden rounded-full bg-white/10 light:bg-black/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-r from-blue via-purple to-emerald"
          />
        </div>
      </div>
    </motion.div>
  );
}
