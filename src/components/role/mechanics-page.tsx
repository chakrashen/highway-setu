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

                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative mt-12 min-h-[400px] w-full lg:min-h-[600px] lg:mt-0">
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
                    <div className="mt-12 flex justify-center gap-4">
                        <Link
                            to="/"
                            className="rounded-full border border-purple/30 bg-purple/10 px-8 py-3.5 text-sm font-semibold text-purple transition-colors hover:bg-purple/20"
                        >
                            Explore Platform
                        </Link>
                        <Link
                            to="/auth/register/mechanic"
                            className="rounded-full border border-purple/30 bg-purple/10 px-8 py-3.5 text-sm font-semibold text-purple transition-colors hover:bg-purple/20"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
}

function DiagnosticsMockup() {
    return (
        <div 
            className="absolute inset-0 z-10 lg:-right-[50%] lg:w-[150%] lg:-translate-x-48"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)", maskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}
        >
            <img 
                src="/mechanic independent.png" 
                alt="Mechanic Dashboard" 
                className="h-full w-full object-cover lg:object-left" 
            />
        </div>
    );
}
