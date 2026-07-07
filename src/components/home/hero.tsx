import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const roadY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Night sky */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.06_280),_oklch(0.13_0.04_275))] light:bg-[radial-gradient(ellipse_at_top,_oklch(0.95_0.02_260),_oklch(0.98_0.005_260))]" />

      {/* Stars */}
      <div className="absolute inset-0 -z-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-foreground/60 light:bg-black/10"
            style={{
              top: `${(i * 37) % 70}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.3 + ((i * 13) % 50) / 100,
            }}
          />
        ))}
      </div>



      {/* Animated highway */}
      <motion.div
        style={{ y: roadY }}
        className="absolute inset-x-0 bottom-0 -z-10 h-[38%] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.15 0.04 275))",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        >
          {/* lane lines */}
          {[-2, -1, 0, 1, 2].map((lane) => (
            <div
              key={lane}
              className="absolute bottom-0 top-0 w-1"
              style={{
                left: `calc(50% + ${lane * 12}%)`,
                background:
                  "repeating-linear-gradient(to bottom, oklch(0.7 0.18 230 / 0.8) 0 24px, transparent 24px 56px)",
                animation: "road-dash 0.6s linear infinite",
              }}
            />
          ))}
          {/* moving truck light streaks */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute h-24 w-1.5 rounded-full bg-gradient-to-b from-orange-glow to-transparent blur-[2px]"
              style={{ left: `${42 + i * 8}%`, bottom: 0 }}
              animate={{ bottom: ["0%", "90%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 2.6 + i * 0.6,
                repeat: Infinity,
                ease: "easeIn",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </motion.div>



      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground light:text-foreground whitespace-nowrap tracking-wide mb-8"
        >
          Connecting Every Mile of <span className="text-[#d89cf6]">India's</span> <span className="text-[#d89cf6]">Highway</span> <span className="text-[#a7f3d0]">Ecosystem</span>
        </motion.h1>

      </motion.div>
    </section>
  );
}
