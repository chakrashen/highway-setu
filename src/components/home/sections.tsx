import { useState } from "react";
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
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            The Problem
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
            India's highways move the nation — yet run on{" "}
            <span className="text-orange">disconnected systems</span>.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <TiltCard className="glass h-full rounded-2xl p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-orange/15 text-orange">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
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
  return (
    <section id="ecosystem" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue">
              The Solution
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
              One unified ecosystem,{" "}
              <GradientText>connected end to end</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Highway Setu links every participant of the highway economy
              through a single intelligent platform.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* connection lines */}
          <svg
            className="absolute inset-0 h-full w-full"
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
                <stop offset="0%" stopColor="oklch(0.65 0.19 255)" />
                <stop offset="100%" stopColor="oklch(0.62 0.23 300)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid grid-cols-2 gap-6 md:gap-16">
            {nodes.map((n, i) => {
              const a = ACCENT_META[n.key];
              const Icon = n.icon;
              return (
                <Reveal key={n.slug} delay={i * 0.12}>
                  <Link
                    to={n.slug}
                    className={cn(
                      "glass-strong group flex flex-col items-center gap-3 rounded-3xl p-6 text-center transition-transform hover:scale-105",
                      a.glow,
                    )}
                  >
                    <div
                      className={cn(
                        "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white",
                        a.gradient,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">{n.name}</span>
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
              className="glass-strong grid h-24 w-24 place-items-center rounded-full text-center text-xs font-bold leading-tight"
            >
              Highway
              <br />
              Setu
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
    <section className="relative px-4 py-24">
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
                      "glass-strong group relative h-full overflow-hidden rounded-3xl p-8 transition-shadow hover:shadow-2xl",
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
                        a.gradient,
                      )}
                    />
                    <div
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white",
                        a.gradient,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{r.name}</h3>
                    <p className={cn("mt-1 text-sm font-medium", a.text)}>
                      {r.headline}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {r.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      Explore{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
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
    <section className="relative px-4 py-24">
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
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/10 md:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-blue via-purple to-emerald md:left-1/2"
          />
          <div className="space-y-10">
            {steps.map((s, i) => (
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
                    <div className="glass rounded-2xl p-5">
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Platform features ----------------------------- */
const platformFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: UserCheck,
    title: "AI Verification",
    desc: "Automated identity and document verification you can trust.",
  },
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
    icon: Cloud,
    title: "Cloud Storage",
    desc: "All documents and data, safely stored and synced.",
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
    icon: BarChart3,
    title: "Analytics",
    desc: "Turn raw operations into actionable insight.",
  },
  {
    icon: MapPin,
    title: "GPS Integration",
    desc: "Live location, routing and geo-aware services.",
  },
  {
    icon: FileText,
    title: "Reports",
    desc: "Exportable reports for finance and compliance.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Assistance",
    desc: "One-tap SOS and rapid roadside response.",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "A connected network across the highway economy.",
  },
];

export function PlatformFeatures() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">
              Platform
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
              One platform. <GradientText>Every capability.</GradientText>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {platformFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <motion.div
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
                className="glass relative h-full overflow-hidden rounded-2xl p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue to-purple text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <motion.div
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
                {active !== i && (
                  <p className="pt-2 text-sm text-muted-foreground/70 line-clamp-1">
                    {f.desc}
                  </p>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
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
                <div key={m.label} className="rounded-2xl bg-white/5 p-5">
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
              <div className="rounded-2xl bg-white/5 p-5 lg:col-span-2">
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
              <div className="rounded-2xl bg-white/5 p-5">
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

/* ----------------------------- Why Highway Setu ----------------------------- */
const comparison = [
  "Centralized communication",
  "Real-time emergency support",
  "Verified mechanic network",
  "Digital documentation",
  "Live fleet visibility",
  "Data-driven insights",
  "Online dhaba discovery",
  "Automated verification",
];

export function WhySection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Why Highway Setu
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              The smarter way to run highways
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong mt-12 overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-white/10 text-sm font-semibold">
              <div className="p-4 md:p-5">Capability</div>
              <div className="p-4 text-center text-muted-foreground md:p-5">
                Traditional
              </div>
              <div className="bg-gradient-to-r from-blue/10 to-purple/10 p-4 text-center md:p-5">
                Highway Setu
              </div>
            </div>
            {comparison.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-white/5 text-sm last:border-0"
              >
                <div className="p-4 md:p-5">{c}</div>
                <div className="flex items-center justify-center p-4 md:p-5">
                  <X className="h-5 w-5 text-red-400/70" />
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-blue/5 to-purple/5 p-4 md:p-5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald/20 text-emerald">
                    <Check className="h-4 w-4" />
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
      "Highway Setu's SOS feature got me help within minutes when I broke down at midnight. It's a lifesaver.",
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
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Loved on the highway
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Trusted across the ecosystem
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-strong mx-auto mt-12 max-w-2xl rounded-3xl p-8 md:p-10"
          >
            <Quote className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-5 text-lg md:text-xl">{t.quote}</p>
            <div className="mt-6">
              <div className="font-semibold">{t.name}</div>
              <div className={cn("text-sm", t.c)}>{t.role}</div>
            </div>
          </motion.div>
        </Reveal>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                idx === i
                  ? "w-8 bg-gradient-to-r from-blue to-purple"
                  : "w-2 bg-white/20",
              )}
            />
          ))}
        </div>

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
              <Link
                to="/drivers"
                className="rounded-full bg-gradient-to-r from-blue via-primary to-purple px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/"
                hash="ecosystem"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
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
