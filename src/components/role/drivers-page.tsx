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
        <div className="relative overflow-hidden bg-[#020617] light:bg-slate-50 text-blue-50 light:text-slate-900">
            {/* Background & highway lines */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#06102b] via-[#020617] to-[#01030a] light:from-slate-100 light:via-slate-50 light:to-slate-200" />
                
                {/* Highway dotted lines moving downward to simulate forward motion */}
                <div className="absolute left-[15%] top-0 h-full w-[1px] opacity-20 light:opacity-10" 
                     style={{ background: "repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 20px, transparent 20px, transparent 40px)" }} />
                <div className="absolute right-[15%] top-0 h-full w-[1px] opacity-20" 
                     style={{ background: "repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 20px, transparent 20px, transparent 40px)" }} />
                     
                <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue/20 blur-[160px]" />
                <div className="absolute bottom-10 right-1/3 h-80 w-80 rounded-full bg-blue-glow/15 blur-[140px]" />

                {/* Animated Truck crossing the background */}
                <div className="absolute bottom-[5%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue/10 to-transparent">
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

                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative mt-12 min-h-[400px] w-full lg:min-h-[600px] lg:mt-0">
                            <NavigationMockup />
                        </div>
                    </Reveal>
                </div>
            </section>



            {/* Features */}
            <section className="relative px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <h2 className="font-display text-3xl font-bold md:text-4xl">Everything for the road</h2>
                        <p className="mt-3 max-w-2xl text-blue-100/60 light:text-slate-600">{role.tagline}</p>
                    </Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {role.features.map((f, i) => (
                            <Reveal key={f} delay={(i % 3) * 0.05}>
                                <div className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-blue/20 light:border-slate-200 bg-[#091124] light:bg-white px-6 py-4 backdrop-blur transition-all hover:border-blue/40 light:hover:border-blue/40 hover:bg-[#0c162e] light:hover:bg-slate-50">
                                    <div className="absolute left-0 top-0 h-full w-1.5 bg-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                                    <MapPin className="h-5 w-5 shrink-0 text-blue transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                                    <span className="font-medium text-blue-50/90 light:text-slate-700">{f}</span>
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
                        <div className="relative -mt-12 p-10 text-center md:-mt-20 md:p-16">
                            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue/20 blur-[100px]" />
                            <Navigation className="mx-auto h-10 w-10 text-blue" />
                            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
                                Ready to hit the road safely?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-blue-100/70 light:text-slate-600">
                                Join thousands of truck drivers who rely on Highway Setu every day.
                            </p>
                            <div className="mt-8 flex justify-center gap-4">
                                <Link
                                    to="/"
                                    className="rounded-full border border-blue/30 bg-blue/10 px-8 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-blue/20"
                                >
                                    View Platform
                                </Link>
                                <Link
                                    to="/auth/register/driver"
                                    className="rounded-full border border-blue/30 bg-blue/10 px-8 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-blue/20"
                                >
                                    Sign Up
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
        <div 
            className="absolute inset-0 z-10 lg:-right-[50%] lg:w-[150%] lg:-translate-x-48"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)", maskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}
        >
            <img 
                src="/driver independent.png" 
                alt="Driver Companion" 
                className="h-full w-full object-cover lg:object-left" 
            />
        </div>
    );
}
