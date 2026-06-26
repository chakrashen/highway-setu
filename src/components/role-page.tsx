import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles, Truck } from "lucide-react";
import { ACCENT_META, type RoleData } from "@/lib/roles";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";
import { cn } from "@/lib/utils";
import { GetStartedModal } from "@/components/auth/get-started-modal";

export function RolePage({ role }: { role: RoleData }) {
  const a = ACCENT_META[role.key];
  const Icon = role.icon;

  return (
    <div className="noise relative">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-36 md:pt-44">
        {role.slug === "/drivers" && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute bottom-4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 light:via-black/10 to-transparent md:bottom-10">
              <motion.div
                initial={{ x: "-10vw" }}
                animate={{ x: "110vw" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-7 flex items-center"
              >
                {/* Truck Body Glow */}
                <div className="absolute left-0 top-1/2 h-10 w-16 -translate-y-1/2 rounded-full bg-blue/20 blur-xl" />
                <Truck className="relative z-10 h-8 w-8 text-blue drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                {/* Headlight beams */}
                <div className="absolute left-6 top-[60%] h-3 w-40 -translate-y-1/2 bg-gradient-to-r from-blue-glow/50 to-transparent blur-md" />
              </motion.div>
            </div>
          </div>
        )}
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1",
                a.bgSoft,
                a.text,
                a.ring,
              )}
            >
              <Icon className="h-4 w-4" /> {role.name}
            </span>
          </Reveal>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal delay={0.05}>
                <h1 className="text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
                  {role.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  {role.description}
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GetStartedModal>
                    <button
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105",
                        a.gradient,
                      )}
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </button>
                  </GetStartedModal>
                  <DemoModal
                    trigger={
                      <button>
                        <DemoTriggerButton />
                      </button>
                    }
                  />
                </div>
              </Reveal>
            </div>

            {/* Animated illustration / dashboard mockup */}
            <Reveal delay={0.2}>
              <RoleMockup role={role} />
            </Reveal>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {role.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="glass rounded-3xl p-6">
                  <div className={cn("text-3xl font-bold md:text-4xl", a.text)}>
                    <AnimatedCounter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Everything a {role.name.toLowerCase()} needs
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {role.tagline}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {role.features.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 0.06}>
                <TiltCard className="glass group h-full rounded-2xl p-5 transition-shadow hover:shadow-2xl">
                  <div
                    className={cn(
                      "mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white transition-transform group-hover:scale-110",
                      a.gradient,
                    )}
                  >
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{f}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Native, real-time and built for the highway.
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div
              className={cn(
                "glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16",
                a.glow,
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r opacity-30 blur-[100px]",
                  a.gradient,
                )}
              />
              <Sparkles className={cn("mx-auto h-8 w-8", a.text)} />
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Ready to join as a {role.name.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Become part of India's most connected highway ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <GetStartedModal>
                  <button
                    className={cn(
                      "rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105",
                      a.gradient,
                    )}
                  >
                    Get Started
                  </button>
                </GetStartedModal>
                <Link
                  to="/"
                  className="rounded-full border border-foreground/15 light:border-black/15 bg-foreground/5 light:bg-black/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-foreground/10 light:hover:bg-black/10"
                >
                  Explore Platform
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function RoleMockup({ role }: { role: RoleData }) {
  const a = ACCENT_META[role.key];
  return (
    <div className={cn("glass-strong relative rounded-3xl p-5", a.glow)}>
      <div className="flex items-center gap-2 pb-4">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-muted-foreground">
          {role.name} dashboard
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {role.stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-foreground/5 light:bg-black/5 p-3">
            <div className={cn("text-lg font-bold", a.text)}>
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.value % 1 !== 0 ? 1 : 0}
              />
            </div>
            <div className="truncate text-[10px] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-32 items-end gap-2 rounded-2xl bg-foreground/5 light:bg-black/5 p-4">
        {[40, 65, 50, 80, 60, 95, 72, 88].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("flex-1 rounded-md bg-gradient-to-t", a.gradient)}
          />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {role.features.slice(0, 3).map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 rounded-xl bg-foreground/5 light:bg-black/5 px-3 py-2 text-sm"
          >
            <Check className={cn("h-4 w-4", a.text)} /> {f}
          </div>
        ))}
      </div>
    </div>
  );
}
