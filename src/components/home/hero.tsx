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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      {/* Night sky */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.06_280),_oklch(0.13_0.04_275))]" />

      {/* Stars */}
      <div className="absolute inset-0 -z-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/60"
            style={{
              top: `${(i * 37) % 70}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.3 + ((i * 13) % 50) / 100,
            }}
          />
        ))}
      </div>

      {/* Parallax mountains */}
      <motion.svg
        style={{ y: mountainsY }}
        className="absolute bottom-[28%] left-0 -z-10 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="oklch(0.17 0.04 275)"
          d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,320L0,320Z"
        />
        <path
          fill="oklch(0.2 0.05 280)"
          opacity="0.7"
          d="M0,256L160,234.7C320,213,640,171,960,176C1280,181,1440,235,1440,235L1440,320L0,320Z"
        />
      </motion.svg>

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
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
          India's Highway Operating System
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-balance text-5xl font-extrabold leading-[1.02] md:text-7xl"
        >
          Connecting Every Mile of{" "}
          <GradientText>India's Highway Ecosystem</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Highway Setu is an intelligent digital platform connecting truck
          drivers, fleet managers, mechanics and dhaba owners into one seamless
          highway ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/"
            hash="ecosystem"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-primary to-purple px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105"
          >
            Explore Platform
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <DemoModal
            trigger={
              <button>
                <DemoTriggerButton />
              </button>
            }
          />
        </motion.div>


      </motion.div>
    </section>
  );
}
