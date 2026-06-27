import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    UtensilsCrossed,
    ArrowRight,
    Flame,
    Star,
    ChefHat,
    Soup,
} from "lucide-react";
import { roleBySlug } from "@/lib/roles";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DemoModal, DemoTriggerButton } from "@/components/ui/demo-modal";

const role = roleBySlug("/dhaba");

/* Dhaba owner experience: warm chalkboard menu, rising steam,
   string-light header and a hand-written specials board. */
export function DhabaPage() {
    return (
        <div className="relative overflow-hidden bg-[#140c04] light:bg-slate-50 text-orange-50 light:text-slate-900">
            {/* Warm glow background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1c1206] via-[#140c04] to-[#0a0602] light:from-slate-100 light:via-slate-50 light:to-slate-200" />
                <div className="absolute left-1/2 top-0 h-96 w-[60vw] -translate-x-1/2 rounded-full bg-orange/20 blur-[140px]" />
                {/* rising steam */}
                {[20, 50, 80].map((x, i) => (
                    <motion.div
                        key={x}
                        className="absolute bottom-0 h-40 w-24 rounded-full bg-orange-glow/10 blur-2xl"
                        style={{ left: `${x}%` }}
                        animate={{ y: [0, -60, 0], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* String lights */}
            <div className="pointer-events-none absolute left-0 top-24 flex w-full justify-around">
                {Array.from({ length: 14 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-orange-glow"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </div>

            {/* HERO */}
            <section className="relative px-4 pb-16 pt-36 md:pt-44">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-1.5 text-sm font-medium text-orange ring-1 ring-orange/40">
                                <UtensilsCrossed className="h-4 w-4" /> {role.name} Kitchen
                            </span>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
                                {role.headline}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-xl text-lg text-orange-100/75 light:text-slate-600">{role.description}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/"
                                    hash="cta"
                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-glow px-7 py-3.5 text-sm font-semibold text-[#140c04] transition-transform hover:scale-105"
                                >
                                    List My Dhaba <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* Image Mockup */}
                    <Reveal delay={0.2}>
                        <div className="relative mt-12 min-h-[400px] w-full lg:min-h-[600px] lg:mt-0">
                            {/* Subtle floating dhaba icons pinned to the mock */}
                            <motion.div
                                animate={{ rotate: [0, 8, 0, -8, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-16 -top-20 z-0 text-orange/10"
                            >
                                <ChefHat className="h-64 w-64" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: [0, -10, 0, 10, 0] }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute -left-12 bottom-0 z-0 text-orange/10"
                            >
                                <UtensilsCrossed className="h-48 w-48" />
                            </motion.div>

                            <MenuBoard />
                        </div>
                    </Reveal>
                </div>
            </section>



            {/* Features served as menu items */}
            <section className="relative px-4 py-20">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <div className="text-center">
                            <ChefHat className="mx-auto h-8 w-8 text-orange" />
                            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Today's specials</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-orange-100/60 light:text-slate-600">{role.tagline}</p>
                        </div>
                    </Reveal>
                    <div className="mt-10 rounded-3xl border border-orange/20 light:border-slate-200 bg-[#1a1006]/70 light:bg-foreground/70 p-6 backdrop-blur md:p-10">
                        {role.features.map((f, i) => (
                            <Reveal key={f} delay={(i % 4) * 0.04}>
                                <div className="flex items-center gap-3 border-b border-dashed border-orange/20 light:border-slate-200 py-3 last:border-0">
                                    <Soup className="h-4 w-4 shrink-0 text-orange" />
                                    <span className="font-medium">{f}</span>
                                    <span className="mx-2 flex-1 border-b border-dotted border-orange/20" />
                                    <Flame className="h-4 w-4 text-orange-glow" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center gap-4">
                        <Link
                            to="/"
                            className="rounded-full border border-orange/30 bg-orange/10 px-8 py-3.5 text-sm font-semibold text-orange transition-colors hover:bg-orange/20"
                        >
                            Explore Platform
                        </Link>
                        <Link
                            to="/auth/register/dhaba"
                            className="rounded-full border border-orange/30 bg-orange/10 px-8 py-3.5 text-sm font-semibold text-orange transition-colors hover:bg-orange/20"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
}

function MenuBoard() {
    return (
        <div 
            className="absolute inset-0 z-10 lg:-right-[50%] lg:w-[150%] lg:-translate-x-48"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)", maskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}
        >
            <img 
                src="/dhaba independent.png" 
                alt="Independent Dhaba" 
                className="h-full w-full object-cover lg:object-left" 
            />
        </div>
    );
}
