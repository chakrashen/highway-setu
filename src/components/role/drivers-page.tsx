import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    Truck,
    ArrowRight,
    ShieldAlert,
    Users,
    Navigation,
    Route as RouteIcon,
    RadioTower,
    MapPin
} from "lucide-react";
import { roleBySlug } from "@/lib/roles";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";

const role = roleBySlug("/drivers");

/* Truck Driver experience: Deep highway night theme, glowing road lines,
   animated truck crossing, and a smart navigation dashboard mock. */
export function DriversPage() {
    return (
        <div className="relative overflow-hidden bg-[#020617] text-blue-50">
            {/* Background & highway lines */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#06102b] via-[#020617] to-[#01030a]" />
                
                {/* Highway dotted lines moving downward to simulate forward motion */}
                <div className="absolute left-[15%] top-0 h-full w-[1px] opacity-20" 
                     style={{ background: "repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 20px, transparent 20px, transparent 40px)" }} />
                <div className="absolute right-[15%] top-0 h-full w-[1px] opacity-20" 
                     style={{ background: "repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 20px, transparent 20px, transparent 40px)" }} />
                     
                <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue/20 blur-[160px]" />
                <div className="absolute bottom-10 right-1/3 h-80 w-80 rounded-full bg-blue-glow/15 blur-[140px]" />

                {/* Animated Truck crossing the background */}
                <div className="absolute bottom-[15%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue/10 to-transparent">
                  <motion.div
                    initial={{ x: "-10vw" }}
                    animate={{ x: "110vw" }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-7 flex items-center"
                  >
                    <div className="absolute left-0 top-1/2 h-12 w-24 -translate-y-1/2 rounded-full bg-blue/20 blur-xl" />
                    <Truck className="relative z-10 h-10 w-10 text-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                    <div className="absolute left-8 top-[60%] h-4 w-64 -translate-y-1/2 bg-gradient-to-r from-blue-glow/40 to-transparent blur-md" />
                  </motion.div>
                </div>
            </div>

            {/* HERO */}
            <section className="relative px-4 pb-16 pt-36 md:pt-44">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6]/15 px-4 py-1.5 text-sm font-medium text-blue ring-1 ring-blue/40">
                                <Truck className="h-4 w-4" /> Driver's Seat
                            </span>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
                                {role.headline}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-xl text-lg text-blue-100/70">{role.description}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform hover:scale-105"
                                >
                                    Start Journey <ArrowRight className="h-4 w-4" />
                                </Link>
                                <DemoModal trigger={<button><DemoTriggerButton /></button>} />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative mt-12 md:mt-16">
                            <NavigationMockup />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Stats */}
            <section className="relative px-4 py-10">
                <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
                    {[
                        { s: role.stats[0], icon: Users },
                        { s: role.stats[1], icon: RadioTower },
                        { s: role.stats[2], icon: RouteIcon },
                    ].map(({ s, icon: Icon }, i) => (
                        <Reveal key={s.label} delay={0.08 * i}>
                            <div className="rounded-2xl border border-blue/10 bg-[#060c1c] p-8 backdrop-blur shadow-lg">
                                <Icon className="mb-4 h-5 w-5 text-blue/60" />
                                <div className="font-display text-4xl font-bold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent md:text-5xl">
                                    <AnimatedCounter
                                        value={s.value}
                                        prefix={s.prefix}
                                        suffix={s.suffix}
                                        decimals={s.value % 1 !== 0 ? 1 : 0}
                                    />
                                </div>
                                <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-blue-200/50">{s.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="relative px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <h2 className="font-display text-3xl font-bold md:text-4xl">Everything for the road</h2>
                        <p className="mt-3 max-w-2xl text-blue-100/60">{role.tagline}</p>
                    </Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {role.features.map((f, i) => (
                            <Reveal key={f} delay={(i % 3) * 0.05}>
                                <div className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-blue/20 bg-[#091124] px-6 py-4 backdrop-blur transition-all hover:border-blue/40 hover:bg-[#0c162e]">
                                    <div className="absolute left-0 top-0 h-full w-1.5 bg-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                                    <MapPin className="h-5 w-5 shrink-0 text-blue transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                                    <span className="font-medium text-blue-50/90">{f}</span>
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
                        <div className="relative overflow-hidden rounded-[2rem] border border-blue/30 bg-gradient-to-br from-[#0c1838] to-[#040914] p-10 text-center md:p-16">
                            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue/30 blur-[100px]" />
                            <Navigation className="mx-auto h-10 w-10 text-blue" />
                            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
                                Ready to hit the road safely?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-blue-100/70">
                                Join thousands of truck drivers who rely on Highway Setu every day.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="rounded-full bg-[#3b82f6] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                                >
                                    Download App
                                </Link>
                                <Link
                                    to="/"
                                    className="rounded-full border border-blue/30 bg-blue/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-blue/20"
                                >
                                    View Features
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

function NavigationMockup() {
    return (
        <div className="relative z-10 mx-auto max-w-[440px] rounded-3xl border border-blue/30 bg-[#060c1c]/90 p-7 font-sans shadow-[0_0_80px_-20px_var(--blue-glow)] backdrop-blur">
            <div className="mb-6 flex items-center justify-between border-b border-blue/20 pb-4 text-xs uppercase tracking-widest text-blue-100/60">
                <span className="flex items-center gap-2 text-blue"><Navigation className="h-4 w-4" /> LIVE NAVIGATION</span>
                <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" /> EN ROUTE
                </span>
            </div>
            
            {/* Map representation */}
            <div className="relative mb-6 h-44 w-full overflow-hidden rounded-2xl border border-blue/15 bg-[#030712]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue/10 via-transparent to-[#030712]" />
                
                {/* SVG Route Line */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 20,80 Q 40,40 50,60 T 80,20"
                        fill="none"
                        stroke="rgba(59,130,246,0.3)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />
                    <motion.path
                        d="M 20,80 Q 40,40 50,60 T 80,20"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ filter: "drop-shadow(0px 0px 4px rgba(59,130,246,0.8))" }}
                    />
                </svg>

                {/* Moving pin */}
                <motion.div 
                    className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_#ffffff]"
                    animate={{ 
                        left: ["20%", "45%", "80%"], 
                        top: ["80%", "50%", "20%"] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue/15 bg-blue/5 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-blue-100/50">Next Stop</div>
                    <div className="mt-1 font-semibold text-blue-50">Dhaba 44</div>
                    <div className="text-xs text-blue-300/80">In 12 km</div>
                </div>
                <div className="rounded-2xl border border-blue/15 bg-blue/5 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-blue-100/50">Est. Arrival</div>
                    <div className="mt-1 font-semibold text-blue-50">14:30</div>
                    <div className="text-xs text-emerald-400">On time</div>
                </div>
            </div>

            <div className="mt-5 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3.5 flex items-center justify-center gap-2 text-sm font-bold tracking-wide text-red-400 cursor-pointer shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-colors hover:bg-red-500/20">
                <ShieldAlert className="h-4 w-4" /> SOS EMERGENCY
            </div>
        </div>
    );
}
