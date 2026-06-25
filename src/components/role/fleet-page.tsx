import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    LayoutDashboard,
    ArrowRight,
    Activity,
    Truck,
    Satellite,
    BarChart3,
} from "lucide-react";
import { roleBySlug } from "@/lib/roles";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";

const role = roleBySlug("/fleet");

/* Fleet manager experience: a mission-control command center with a
   radar sweep, live vehicle grid and data-dense monitoring panels. */
export function FleetPage() {
    return (
        <div className="relative overflow-hidden bg-[#04100b] light:bg-slate-50 text-emerald-50 light:text-slate-900">
            {/* Command-center grid */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#06160f] via-[#04100b] to-[#020806] light:from-slate-100 light:via-slate-50 light:to-slate-200" />
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            "linear-gradient(var(--emerald) 1px, transparent 1px), linear-gradient(90deg, var(--emerald) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-emerald/20 blur-[140px]" />
                <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-emerald-glow/15 blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative px-4 pb-16 pt-36 md:pt-44">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-md bg-emerald/15 px-4 py-1.5 font-mono text-sm font-medium text-emerald ring-1 ring-emerald/40">
                                <LayoutDashboard className="h-4 w-4" /> {role.name} · Mission Control
                            </span>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
                                {role.headline}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-xl text-lg text-emerald-100/70 light:text-slate-600">{role.description}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald to-emerald-glow px-7 py-3.5 text-sm font-semibold text-[#04100b] transition-transform hover:scale-105"
                                >
                                    Launch Command Center <ArrowRight className="h-4 w-4" />
                                </Link>
                                <DemoModal trigger={<button><DemoTriggerButton /></button>} />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <Radar />
                    </Reveal>
                </div>
            </section>

            {/* Telemetry stats */}
            <section className="relative px-4 py-10">
                <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
                    {role.stats.map((s, i) => (
                        <Reveal key={s.label} delay={0.08 * i}>
                            <div className="rounded-md border border-emerald/25 light:border-slate-200 bg-emerald/5 light:bg-white p-6 font-mono backdrop-blur">
                                <Activity className="mb-3 h-5 w-5 text-emerald" />
                                <div className="font-display text-3xl font-bold text-emerald md:text-4xl">
                                    <AnimatedCounter
                                        value={s.value}
                                        prefix={s.prefix}
                                        suffix={s.suffix}
                                        decimals={s.value % 1 !== 0 ? 1 : 0}
                                    />
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-widest text-emerald-100/60 light:text-slate-500">{s.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Live vehicle module grid */}
            <section className="relative px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <h2 className="font-display text-3xl font-bold md:text-4xl">All systems on one screen</h2>
                        <p className="mt-3 max-w-2xl text-emerald-100/60 light:text-slate-600">{role.tagline}</p>
                    </Reveal>
                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {role.features.map((f, i) => (
                            <Reveal key={f} delay={(i % 3) * 0.05}>
                                <div className="group rounded-md border border-emerald/20 light:border-slate-200 bg-emerald/5 light:bg-white p-5 font-mono backdrop-blur transition-all hover:border-emerald/50 light:hover:border-slate-300 hover:bg-emerald/10 light:hover:bg-slate-50">
                                    <div className="mb-3 flex items-center justify-between">
                                        <BarChart3 className="h-5 w-5 text-emerald" />
                                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-emerald-100/50 light:text-slate-500">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" /> online
                                        </span>
                                    </div>
                                    <h3 className="font-sans font-semibold">{f}</h3>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative px-4 pb-24">
                <div className="mx-auto max-w-5xl">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-2xl border border-emerald/30 light:border-slate-200 bg-gradient-to-br from-[#082016] to-[#04100b] light:from-white light:to-slate-50 p-10 text-center md:p-16">
                            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald/30 blur-[100px]" />
                            <Satellite className="mx-auto h-8 w-8 text-emerald" />
                            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                                Ready to command your fleet?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-emerald-100/70 light:text-slate-600">
                                Become part of India's most connected highway ecosystem.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="rounded-md bg-gradient-to-r from-emerald to-emerald-glow px-7 py-3.5 text-sm font-semibold text-[#04100b] transition-transform hover:scale-105"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/"
                                    className="rounded-md border border-emerald/30 bg-emerald/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-emerald/20"
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

function Radar() {
    return (
        <div className="relative mx-auto max-w-md rounded-2xl border border-emerald/25 light:border-slate-200 bg-[#06160f]/80 light:bg-white/90 p-6 font-mono shadow-[0_0_80px_-20px_var(--emerald-glow)] backdrop-blur">
            <div className="flex items-center justify-between pb-4 text-xs uppercase tracking-widest text-emerald-100/50 light:text-slate-500">
                <span className="flex items-center gap-2"><Satellite className="h-4 w-4 text-emerald" /> Fleet radar</span>
                <span className="text-emerald">TRACKING</span>
            </div>
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-emerald/30">
                {[0.33, 0.66, 1].map((r) => (
                    <div
                        key={r}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald/20"
                        style={{ width: `${r * 100}%`, height: `${r * 100}%` }}
                    />
                ))}
                {/* sweep */}
                <motion.div
                    className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left"
                    style={{
                        background: "conic-gradient(from 0deg, var(--emerald-glow) 0deg, transparent 60deg)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                {/* blips */}
                {[
                    { x: 30, y: 40 },
                    { x: 65, y: 30 },
                    { x: 55, y: 70 },
                    { x: 75, y: 60 },
                ].map((b, i) => (
                    <motion.span
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-emerald"
                        style={{ left: `${b.x}%`, top: `${b.y}%` }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                {[
                    { l: "On route", v: "1,284" },
                    { l: "Idle", v: "112" },
                    { l: "Maintenance", v: "37" },
                    { l: "Alerts", v: "4" },
                ].map((t) => (
                    <div key={t.l} className="flex items-center justify-between rounded border border-emerald/15 light:border-slate-200 bg-emerald/5 light:bg-slate-50 px-3 py-2">
                        <span className="flex items-center gap-1.5 text-emerald-100/60 light:text-slate-600">
                            <Truck className="h-3.5 w-3.5" /> {t.l}
                        </span>
                        <span className="text-emerald">{t.v}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
