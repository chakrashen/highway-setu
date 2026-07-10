import { useState } from "react";
import { GetStartedModal } from "@/components/auth/get-started-modal";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  MessageSquareOff,
  ShieldAlert,
  Wrench,
  Network,
  Search,
  Store,
  FileStack,
  TrendingDown,
  UserCheck,
  Bell,
  Lock,
  KeyRound,
  Cloud,
  FileCheck2,
  LayoutDashboard,
  BarChart3,
  MapPin,
  FileText,
  LifeBuoy,
  Users,
  Check,
  X,
  ArrowRight,
  Sparkles,
  Quote,
  Cpu,
  Server,
  Database,
  Shield,
  Map as MapIcon,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Marquee } from "@/components/ui/marquee";
import { ROLES, ACCENT_META } from "@/lib/roles";
import { cn } from "@/lib/utils";

/* ----------------------------- Problem ----------------------------- */
const problems: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: MessageSquareOff,
    title: "Fragmented communication",
    desc: "Drivers, fleets and services operate in silos with no shared channel.",
  },
  {
    icon: ShieldAlert,
    title: "Driver safety issues",
    desc: "No reliable SOS or emergency support on long highway routes.",
  },
  {
    icon: Wrench,
    title: "Vehicle breakdowns",
    desc: "Finding help mid-route is slow, costly and unpredictable.",
  },
  {
    icon: Network,
    title: "No centralized fleet management",
    desc: "Operations scattered across calls, spreadsheets and paper.",
  },
  {
    icon: Search,
    title: "Trusted mechanics are hard to find",
    desc: "No verified network of workshops along the route.",
  },
  {
    icon: Store,
    title: "Dhabas lack digital support",
    desc: "Highway businesses miss out on online discovery and orders.",
  },
  {
    icon: FileStack,
    title: "Paper-based documentation",
    desc: "Permits and records get lost, expire or go unverified.",
  },
  {
    icon: TrendingDown,
    title: "Operational inefficiencies",
    desc: "Idle time, fuel waste and blind spots erode margins.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-[#F9EFE5] pt-20 md:pt-0">
      {/* Mobile background stripes as requested */}
      <svg className="absolute top-0 left-0 w-16 h-20 pointer-events-none md:hidden z-0" viewBox="0 0 100 125">
        <line x1="-10" y1="10" x2="40" y2="60" stroke="black" strokeWidth="20" />
        <line x1="-10" y1="55" x2="65" y2="130" stroke="black" strokeWidth="20" />
        <line x1="-10" y1="100" x2="90" y2="200" stroke="black" strokeWidth="20" />
      </svg>
      {/* Desktop Image */}
      <img 
        src="/problem-section.png" 
        alt="Connecting Truck and their need" 
        className="hidden md:block w-full"
      />
      {/* Mobile Image */}
      <img 
        src="/problem-section-mobile.png" 
        alt="Connecting Truck and their need" 
        className="block md:hidden w-full"
      />
      <div className="absolute inset-x-0 bottom-[8%] flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          hash="ecosystem"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-primary to-purple px-4 py-3 text-[11px] font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105 md:px-7 md:py-3.5 md:text-sm"
        >
          Explore Platform
          <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <DemoModal
          trigger={
            <button>
              <DemoTriggerButton />
            </button>
          }
        />
      </div>
    </section>
  );
}

/* ----------------------------- Solution / Ecosystem ----------------------------- */
export function EcosystemSection() {
  const nodes = [
    { ...ROLES[0] },
    { ...ROLES[3] },
    { ...ROLES[1] },
    { ...ROLES[2] },
  ];

  const iconColors: Record<string, string> = {
    blue: '#38BDF8',
    emerald: '#22C55E',
    purple: '#A855F7',
    orange: '#F59E0B'
  };

  return (
    <section id="ecosystem" className="relative scroll-mt-24 px-4 pt-8 pb-12 bg-gradient-to-b from-[#FFA500]/50 from-[80%] to-transparent">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue">
              The Solution
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-5xl text-slate-900 dark:text-foreground">
              One unified ecosystem,{" "}
              <GradientText>connected end to end</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-muted-foreground">
              Highways24 links every participant of the highway economy
              through a single intelligent platform.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* connection lines */}
          <svg
            className="absolute inset-0 h-full w-full hidden md:block"
            viewBox="0 0 400 400"
            fill="none"
            preserveAspectRatio="none"
          >
            {[
              "M200,200 L80,80",
              "M200,200 L320,80",
              "M200,200 L80,320",
              "M200,200 L320,320",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="url(#eco-grad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              />
            ))}
            <defs>
              <linearGradient id="eco-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid grid-cols-2 gap-6 md:gap-16">
            {nodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <Reveal key={n.slug} delay={i * 0.12}>
                  <Link
                    to={n.slug}
                    className={cn(
                      "group relative flex flex-col rounded-3xl p-6 md:p-8 min-h-[180px] md:min-h-[220px] text-left transition-transform hover:scale-105 shadow-lg overflow-hidden",
                      "bg-gradient-to-br from-[#0F172A] to-[#1E293B]"
                    )}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-full z-0">
                      <img 
                        src={
                          n.key === 'blue' ? "/truck%20driver%20for%20box.png" :
                          n.key === 'purple' ? "/mechanic%20for%20box.png" :
                          n.key === 'orange' ? "/dhaba%20for%20box.png" :
                          "/fleet%20for%20box.png"
                        }
                        alt="" 
                        className="h-full w-full object-cover object-top opacity-100 light:opacity-90"
                        style={{
                          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                        }}
                      />
                    </div>
                    <div className="relative z-10 flex flex-1 flex-col w-full items-start justify-between">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl text-foreground shadow-lg"
                        style={{ backgroundColor: iconColors[n.key] }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl md:text-3xl font-extrabold text-white mt-auto">{n.name}</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* center hub */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="grid h-24 w-24 place-items-center rounded-full text-center text-xs font-bold leading-tight bg-yellow-400 text-slate-900"
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.15)' }}
            >
              Highways
              <br />
              24
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Role teasers ----------------------------- */
export function RoleTeasers() {
  return (
    <section className="relative px-4 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-5xl">
            Built for <GradientText>every role</GradientText> on the highway
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ROLES.map((r, i) => {
            const a = ACCENT_META[r.key];
            const Icon = r.icon;
            return (
              <Reveal key={r.slug} delay={(i % 2) * 0.1}>
                <Link to={r.slug}>
                  <TiltCard
                    className={cn(
                      "glass-strong group relative h-full min-h-[320px] overflow-hidden rounded-3xl p-8 transition-shadow hover:shadow-2xl",
                    )}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[95%] z-0">
                      <img 
                        src={
                          r.key === 'blue' ? "/truck%20driver%20for%20box.png" :
                          r.key === 'purple' ? "/mechanic%20for%20box.png" :
                          r.key === 'orange' ? "/dhaba%20for%20box.png" :
                          "/fleet%20for%20box.png"
                        }
                        alt="" 
                        className="h-full w-full object-cover object-top opacity-100 light:opacity-90"
                        style={{
                          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                        }}
                      />
                    </div>
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-2xl z-0",
                        a.gradient,
                      )}
                    />
                    <div className="relative z-10 flex h-full flex-col">
                      <div
                        className={cn(
                          "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white",
                          a.gradient,
                        )}
                      >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-24 text-3xl font-extrabold">{r.name}</h3>
                    
                    <div className="mt-auto flex items-end justify-between pt-2">
                      <p className={cn("text-sm font-medium pr-4", a.text)}>
                        {r.headline}
                      </p>
                      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
                        Explore{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- How it works ----------------------------- */
const steps = [
  {
    title: "Choose Role",
    desc: "Driver, mechanic, dhaba owner or fleet manager.",
  },
  { title: "Register", desc: "Sign up in minutes with your details." },
  { title: "Verification", desc: "AI-assisted identity and document checks." },
  { title: "Access Dashboard", desc: "Your personalized command center." },
  { title: "Manage Operations", desc: "Run day-to-day work in one place." },
  { title: "Grow Business", desc: "Use insights to earn and scale more." },
];

export function HowItWorks() {
  return (
    <section 
      className="relative px-4 py-24"
      style={{
        background: 'radial-gradient(75% 65% at 50% 0%, transparent 99.9%, rgba(255, 255, 0, 0.5) 100%)'
      }}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              From sign-up to scale
            </h2>
          </div>
        </Reveal>
        <div className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-foreground/10 light:bg-black/10 md:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-blue via-purple to-emerald md:left-1/2"
          />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const bgColors = [
                "bg-[#FDE047] text-slate-900", // Yellow
                "bg-[#38BDF8] text-slate-900", // Sky Blue
                "bg-[#EA580C] text-foreground", // Orange
                "bg-[#22C55E] text-slate-900", // Green
                "bg-[#6D28D9] text-foreground", // Purple
                "bg-[#EC4899] text-foreground" // Pink for 6th
              ];
              const boxClass = bgColors[i] || bgColors[5];
              return (
              <Reveal key={s.title} delay={0.05}>
                <div
                  className={cn(
                    "relative flex items-center gap-6 md:gap-0",
                    i % 2 === 1 && "md:flex-row-reverse",
                  )}
                >
                  <div className="absolute -left-[1.35rem] top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-blue to-purple text-xs font-bold text-white md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </div>
                  <div className="md:w-1/2 md:px-10">
                    <div className={cn("rounded-2xl p-5 shadow-lg", boxClass)}>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className={cn("mt-1 text-sm", boxClass.includes("text-foreground") ? "dark:text-foreground/90 text-foreground" : "text-slate-800")}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Platform features ----------------------------- */
const platformFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Bell,
    title: "Real-Time Notifications",
    desc: "Instant alerts for jobs, trips, safety and operations.",
  },
  {
    icon: KeyRound,
    title: "Role Based Access",
    desc: "Every user sees exactly what they need, nothing more.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    desc: "Bank-grade security protecting every account.",
  },
  {
    icon: FileCheck2,
    title: "Document Verification",
    desc: "Validate permits, licenses and records digitally.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    desc: "A personalized command center for every role.",
  },
  {
    icon: FileText,
    title: "Reports",
    desc: "Exportable reports for finance and compliance.",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "A connected network across the highway economy.",
  },
];

export function PlatformFeatures() {
  return (
    <section className="relative w-full bg-[#e37b78]">
      {/* Desktop Image */}
      <img 
        src="/Screenshot 2026-07-08 153624.png" 
        alt="Platform Features" 
        className="hidden md:block w-full h-auto"
      />
      {/* Mobile Image */}
      <img 
        src="/screenshot-mobile.png" 
        alt="Platform Features" 
        className="block md:hidden w-full h-auto"
      />
    </section>
  );
}

/* ----------------------------- Interactive dashboard ----------------------------- */
const dashMetrics = [
  {
    label: "Revenue",
    value: 4.8,
    prefix: "₹",
    suffix: "Cr",
    color: "text-emerald",
  },
  { label: "Drivers", value: 1280, suffix: "", color: "text-blue" },
  { label: "Vehicles", value: 940, suffix: "", color: "text-purple" },
  { label: "Trips", value: 32400, suffix: "", color: "text-orange" },
  { label: "Maintenance", value: 86, suffix: "%", color: "text-blue" },
  { label: "Fuel saved", value: 18, suffix: "%", color: "text-emerald" },
  { label: "Notifications", value: 512, suffix: "", color: "text-purple" },
  {
    label: "Expenses",
    value: 1.2,
    prefix: "₹",
    suffix: "Cr",
    color: "text-orange",
  },
];

export function DashboardPreview() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue">
              Live preview
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Your operations, visualized
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong mt-12 rounded-[2rem] p-6 md:p-8 glow-blue">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dashMetrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-foreground/5 light:bg-black/5 p-5">
                  <div
                    className={cn("text-2xl font-bold md:text-3xl", m.color)}
                  >
                    <AnimatedCounter
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      decimals={m.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl bg-foreground/5 light:bg-black/5 p-5 lg:col-span-2">
                <p className="mb-4 text-sm text-muted-foreground">
                  Monthly trips
                </p>
                <div className="flex h-40 items-end gap-2">
                  {[45, 60, 52, 75, 68, 88, 72, 95, 80, 90, 84, 99].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className="flex-1 rounded-md bg-gradient-to-t from-blue to-purple"
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="rounded-2xl bg-foreground/5 light:bg-black/5 p-5">
                <p className="mb-4 text-sm text-muted-foreground">
                  Fleet health
                </p>
                <div className="flex h-40 items-center justify-center">
                  <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="oklch(1 0 0 / 0.08)"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="oklch(0.72 0.17 162)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 48}
                      initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                      whileInView={{
                        strokeDashoffset: 2 * Math.PI * 48 * 0.14,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Why Highways24 ----------------------------- */
const comparison = [
  "Real-time emergency support",
  "Digital documentation",
  "Online dhaba discovery",
];

export function WhySection() {
  return (
    <section className="relative px-4 pt-16 pb-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#e37b78] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Why Highways24
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              The smarter way to run highways
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong mt-12 overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b dark:border-foreground/10 border-foreground light:border-black/10 text-sm font-semibold">
              <div className="p-4 md:p-5">Capability</div>
              <div className="p-4 text-center text-muted-foreground md:p-5">
                Traditional
              </div>
              <div className="bg-gradient-to-r from-blue/10 to-purple/10 p-4 text-center md:p-5">
                Highways24
              </div>
            </div>
            {comparison.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[1.5fr_1fr_1fr] border-b dark:border-foreground/5 border-foreground light:border-black/5 text-sm last:border-0"
              >
                <div className="p-4 md:p-5">{c}</div>
                <div className="flex items-center justify-center p-4 md:p-5">
                  <X className="h-5 w-5 text-red-600" strokeWidth={3} />
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-blue/5 to-purple/5 p-4 md:p-5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald/30">
                    <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" strokeWidth={3} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Tech stack ----------------------------- */
const techCards: { icon: LucideIcon; title: string; tag: string }[] = [
  { icon: Cpu, title: "Frontend", tag: "React · Motion" },
  { icon: Server, title: "Backend", tag: "Edge functions" },
  { icon: Cloud, title: "Cloud", tag: "Globally distributed" },
  { icon: Database, title: "Database", tag: "Postgres" },
  { icon: Shield, title: "Security", tag: "End-to-end" },
  { icon: MapIcon, title: "Maps", tag: "GPS & routing" },
  { icon: Activity, title: "Analytics", tag: "Real-time" },
];

export function TechStack() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">
              Engineered to scale
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Powered by a modern stack
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {techCards.map((t, i) => (
            <Reveal key={t.title} delay={(i % 7) * 0.05}>
              <TiltCard className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-purple text-white">
                  <t.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.tag}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ----------------------------- */
const testimonials = [
  {
    quote:
      "Highways24's SOS feature got me help within minutes when I broke down at midnight. It's a lifesaver.",
    name: "Balwinder Singh",
    role: "Truck Driver",
    c: "text-blue",
  },
  {
    quote:
      "We cut vehicle downtime by a quarter and finally have real visibility across the whole fleet.",
    name: "Anita Rao",
    role: "Fleet Owner",
    c: "text-emerald",
  },
  {
    quote:
      "Job requests come straight to my dashboard. My workshop is busier and better organized than ever.",
    name: "Imran Khan",
    role: "Mechanic",
    c: "text-purple",
  },
  {
    quote:
      "Online orders and analytics doubled my evening rush. My dhaba is finally on the map — literally.",
    name: "Lakshmi Devi",
    role: "Dhaba Owner",
    c: "text-orange",
  },
  {
    quote:
      "With Highways24, I never worry about finding a safe spot to park and eat. It shows all the verified stops.",
    name: "Ramesh Patel",
    role: "Long-haul Driver",
    c: "text-blue",
  },
  {
    quote:
      "The automated billing and fast toll pass integrations have saved my transport business hours of paperwork every week.",
    name: "Suresh Gupta",
    role: "Transport Operator",
    c: "text-emerald",
  },
  {
    quote:
      "I can source spare parts locally through the app's network. It's transformed how quickly I can finish repairs.",
    name: "Rajesh Kumar",
    role: "Spare Parts Vendor",
    c: "text-purple",
  },
  {
    quote:
      "We get advance notice of truck convoys, so we prep food on time. Highways24 brings us guaranteed business.",
    name: "Priya Sharma",
    role: "Dhaba Manager",
    c: "text-orange",
  },
  {
    quote:
      "Managing 50+ trucks was a nightmare. Now, I have live GPS and driver status right on my phone.",
    name: "Vikram Singh",
    role: "Logistics Coordinator",
    c: "text-emerald",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-4 pt-4 pb-24 bg-gradient-to-b from-transparent to-[#38BDF8]/20 to-[30%]">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Loved on the highway
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Trusted across the ecosystem
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Marquee pauseOnHover className="[--duration:50s]">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="glass-strong mx-4 w-[300px] md:w-[400px] shrink-0 rounded-3xl p-6 md:p-8 whitespace-normal text-left"
                >
                  <Quote className="h-6 w-6 text-muted-foreground/50" />
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200">{t.quote}</p>
                  <div className="mt-6">
                    <div className="font-semibold text-slate-900 dark:text-foreground">{t.name}</div>
                    <div className={cn("text-sm", t.c)}>{t.role}</div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        <div className="mt-16">
          <Marquee>
            {[
              "Drivers",
              "Fleets",
              "Mechanics",
              "Dhabas",
              "Logistics",
              "Transporters",
              "Workshops",
              "Highways",
            ].map((w) => (
              <span
                key={w}
                className="glass rounded-full px-6 py-2 text-sm text-muted-foreground"
              >
                {w}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mt-12 flex justify-center">
          <GetStartedModal>
            <button className="rounded-full bg-gradient-to-r from-blue via-primary to-purple px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105">
              Register
            </button>
          </GetStartedModal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA ----------------------------- */
export function CtaSection() {
  return (
    <section id="cta" className="relative scroll-mt-24 px-4 pb-28 pt-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-20">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue via-purple to-emerald opacity-30 blur-[120px]" />
            <Sparkles className="mx-auto h-10 w-10 text-purple" />
            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-extrabold md:text-6xl">
              Ready to{" "}
              <GradientText>Transform Highway Operations?</GradientText>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Join thousands already building India's most connected highway
              ecosystem.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <GetStartedModal>
                <button className="rounded-full bg-gradient-to-r from-blue via-primary to-purple px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105">
                  Register
                </button>
              </GetStartedModal>
              <Link
                to="/"
                hash="ecosystem"
                className="rounded-full border dark:border-foreground/15 border-foreground light:border-black/15 bg-foreground/5 light:bg-black/5 px-8 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-foreground/10 light:hover:bg-black/10"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
