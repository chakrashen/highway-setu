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
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.06_280),_oklch(0.13_0.04_275))] light:bg-[radial-gradient(ellipse_at_top,_oklch(0.95_0.02_260),_oklch(0.98_0.005_260))]" />

      {/* Stars */}
      <div className="absolute inset-0 -z-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/60 light:bg-black/10"
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

      {/* Vehicle Group */}
      <motion.div
        style={{ y: roadY }}
        className="absolute bottom-0 left-[-50px] lg:left-[-100px] z-0 w-full pointer-events-none"
      >
        {/* Driver */}
        <img
          src="/driver-1.png"
          alt="Truck Driver"
          className="absolute bottom-[200px] left-[-80px] lg:left-[-120px] w-[420px] lg:w-[550px] object-contain drop-shadow-2xl"
        />

        {/* Left side truck */}
        <img
          src="/truck-1.png"
          alt="Highway Truck"
          className="absolute bottom-[170px] left-[10%] lg:left-[15%] w-[300px] lg:w-[480px] object-contain drop-shadow-2xl"
        />

        {/* Mechanic */}
        <img
          src="/mechanic-1.png"
          alt="Mechanic"
          className="absolute bottom-[130px] left-[calc(10%+240px)] lg:left-[calc(15%+400px)] w-[350px] lg:w-[500px] object-contain drop-shadow-2xl"
        />

        {/* Dhaba */}
        <img
          src="/dhaba-2.png"
          alt="Dhaba Owner"
          className="absolute bottom-[160px] left-[calc(10%+460px)] lg:left-[calc(15%+700px)] w-[300px] lg:w-[450px] object-contain drop-shadow-2xl"
        />

        {/* Second Truck */}
        <img
          src="/my-truck.png"
          alt="Second Highway Truck"
          className="absolute bottom-[170px] left-[calc(10%+650px)] lg:left-[calc(15%+950px)] w-[300px] lg:w-[480px] object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white light:text-foreground whitespace-nowrap tracking-wide mb-8"
        >
          Connecting Every Mile of <span className="text-[#d89cf6]">India's</span> <span className="text-[#d89cf6]">Highway</span> <span className="text-[#a7f3d0]">Ecosystem</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-[400px] flex flex-wrap items-center justify-center gap-4"
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
