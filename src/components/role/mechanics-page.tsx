import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    Wrench,
    ArrowRight,
    Gauge,
    Star,
    Hammer,
    Settings,
    Cpu,
    ClipboardCheck,
} from "lucide-react";
import { roleBySlug } from "@/lib/roles";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";

const role = roleBySlug("/mechanics");

/* Mechanics experience: Blueprint grid, diagnostics UI,
   rotating gears, and neon purple accents. */
export function MechanicsPage() {
    return (
        <div className="relative overflow-hidden bg-[#0a0510] light:bg-slate-50 text-purple-50 light:text-slate-900">
            {/* Background grid & glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e0717] via-[#0a0510] to-[#050208] light:from-slate-100 light:via-slate-50 light:to-slate-200" />
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="absolute left-1/3 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/20 blur-[160px]" />
                <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-glow/15 blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative px-4 pb-16 pt-36 md:pt-44">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full bg-purple/15 px-4 py-1.5 text-sm font-medium text-purple ring-1 ring-purple/40">
                                <Wrench className="h-4 w-4" /> Mechanic Bay
                            </span>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
                                {role.headline}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-xl text-lg text-purple-100/70 light:text-slate-600">{role.description}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#c084fc] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                                >
                                    Open Workshop <ArrowRight className="h-4 w-4" />
                                </Link>
                                <DemoModal trigger={<button><DemoTriggerButton /></button>} />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative mt-12 md:mt-16">
                            {/* Subtle rotating gears pinned to the mock */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-16 -top-20 z-0 text-purple/10"
                            >
                                <Settings className="h-64 w-64" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-4 top-24 z-0 text-purple/10"
                            >
                                <Settings className="h-40 w-40" />
                            </motion.div>

                            <DiagnosticsMockup />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Stats */}
            <section className="relative px-4 py-10">
                <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
                    {[
                        { s: role.stats[0], icon: Gauge },
                        { s: role.stats[1], icon: Wrench },
                        { s: role.stats[2], icon: Star },
                    ].map(({ s, icon: Icon }, i) => (
                        <Reveal key={s.label} delay={0.08 * i}>
                            <div className="rounded-2xl border border-purple/10 light:border-slate-200 bg-[#0d0718] light:bg-white p-8 backdrop-blur shadow-lg">
                                <Icon className="mb-4 h-5 w-5 text-purple/60 light:text-purple" />
                                <div className="font-display text-4xl font-bold bg-gradient-to-br from-white to-purple-200 light:from-slate-900 light:to-purple bg-clip-text text-transparent md:text-5xl">
                                    <AnimatedCounter
                                        value={s.value}
                                        prefix={s.prefix}
                                        suffix={s.suffix}
                                        decimals={s.value % 1 !== 0 ? 1 : 0}
                                    />
                                </div>
                                <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-purple-200/50 light:text-slate-500">{s.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Features (Tool rack) */}
            <section className="relative px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <h2 className="font-display text-3xl font-bold md:text-4xl">The complete tool rack</h2>
                        <p className="mt-3 max-w-2xl text-purple-100/60 light:text-slate-600">{role.tagline}</p>
                    </Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {role.features.map((f, i) => (
                            <Reveal key={f} delay={(i % 3) * 0.05}>
                                <div className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-purple/20 light:border-slate-200 bg-[#120924] light:bg-white px-6 py-4 backdrop-blur transition-all hover:border-purple/40 light:hover:border-purple/40 hover:bg-[#1a0d33] light:hover:bg-slate-50">
                                    <div className="absolute left-0 top-0 h-full w-1.5 bg-purple shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                                    <Hammer className="h-5 w-5 shrink-0 text-purple transition-transform group-hover:-rotate-12 group-hover:scale-110" />
                                    <span className="font-medium text-purple-50/90 light:text-slate-700">{f}</span>
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
                        <div className="relative overflow-hidden rounded-[2rem] border border-purple/30 light:border-slate-200 bg-gradient-to-br from-[#1c0f2e] to-[#0a0510] light:from-white light:to-slate-50 p-10 text-center md:p-16">
                            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple/30 blur-[100px]" />
                            <ClipboardCheck className="mx-auto h-10 w-10 text-purple" />
                            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
                                Ready to digitize your workshop?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-purple-100/70 light:text-slate-600">
                                Become part of India's most connected highway ecosystem.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="rounded-full bg-[#c084fc] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/"
                                    className="rounded-full border border-purple/30 bg-purple/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-purple/20"
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

function DiagnosticsMockup() {
    const bars = [
        { label: "Engine", val: 96 },
        { label: "Brakes", val: 88 },
        { label: "Battery", val: 72 },
        { label: "Tyres", val: 64 },
    ];
    return (
        <div className="relative z-10 mx-auto max-w-[440px] rounded-3xl border border-purple/30 light:border-slate-200 bg-[#0c0614]/90 light:bg-white/90 p-7 font-mono shadow-[0_0_80px_-20px_var(--purple-glow)] backdrop-blur">
            <div className="mb-8 flex items-center justify-between border-b border-purple/20 light:border-slate-200 pb-4 text-xs uppercase tracking-widest text-purple-100/60 light:text-slate-500">
                <span className="flex items-center gap-2 text-purple"><Cpu className="h-4 w-4" /> DIAGNOSTICS</span>
                <span className="flex items-center gap-1.5 text-purple-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple" /> LIVE
                </span>
            </div>
            
            <div className="space-y-6">
                {bars.map((b, i) => (
                    <div key={b.label} className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-purple-100/80 light:text-slate-600">
                            <span>{b.label}</span>
                            <span className="text-[#c084fc] light:text-purple">{b.val}%</span>
                        </div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-purple/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${b.val}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                                className="h-full rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.5)]"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-full border border-purple/20 light:border-slate-200 bg-purple/5 light:bg-slate-50 px-5 py-3.5 text-xs text-purple-100/70 light:text-slate-600">
                <span className="text-[#c084fc] light:text-purple mr-1">{'>'}</span> 3 new job requests in queue - est. ₹4,200 today
            </div>
        </div>
    );
}
