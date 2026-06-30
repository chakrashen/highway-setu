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
                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative mt-12 min-h-[400px] w-full lg:min-h-[600px] lg:mt-0">
                            <Radar />
                        </div>
                    </Reveal>
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
                    <div className="mt-12 flex justify-center gap-4">
                        <Link
                            to="/"
                            className="rounded-md border border-emerald/30 bg-emerald/10 px-8 py-3.5 text-sm font-semibold text-emerald transition-colors hover:bg-emerald/20"
                        >
                            Explore Platform
                        </Link>
                        <Link
                            to="/auth/register/fleet"
                            className="rounded-md border border-emerald/30 bg-emerald/10 px-8 py-3.5 text-sm font-semibold text-emerald transition-colors hover:bg-emerald/20"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
}

function Radar() {
    return (
        <div 
            className="absolute inset-0 z-10 lg:-right-[50%] lg:w-[150%] lg:-translate-x-48"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)", maskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}
        >
            <img 
                src="/fleet independent.png" 
                alt="Fleet Command Center" 
                className="h-full w-full object-cover lg:object-left" 
            />
        </div>
    );
}
