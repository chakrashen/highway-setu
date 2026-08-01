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
  Bell,
  Lock,
  KeyRound,
  Cloud,
  FileCheck2,
  LayoutDashboard,
  MapPin,
  FileText,
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
import { ROLES, getRoles, ACCENT_META } from "@/lib/roles";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

/* ----------------------------- Problem ----------------------------- */
export function ProblemSection() {
  const { language, t } = useLanguage();
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
        src={language === "hi" ? "/problem-section_hindi.png" : "/problem-section.png"} 
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
        <a
          href="https://wa.me/919335358644?text=hiii"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 px-4 py-3 text-[11px] font-semibold text-white shadow-xl shadow-green-500/25 transition-transform hover:scale-105 md:px-7 md:py-3.5 md:text-sm"
        >
          {language === "hi" ? "संपर्क करें" : "Contact us"}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </a>
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
  const { language } = useLanguage();
  const rolesList = getRoles(language);
  const nodes = [
    { ...rolesList[0] },
    { ...rolesList[3] },
    { ...rolesList[1] },
    { ...rolesList[2] },
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
              {language === "hi" ? "समाधान" : "The Solution"}
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-5xl text-slate-900 dark:text-foreground">
              {language === "hi" ? "एक एकीकृत पारिस्थितिकी तंत्र, " : "One unified ecosystem, "}
              <GradientText>{language === "hi" ? "शुरू से अंत तक जुड़ा हुआ" : "connected end to end"}</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-muted-foreground">
              {language === "hi" ? "हाईवे24 हाईवे अर्थव्यवस्था के हर भागीदार को एक ही बुद्धिमान प्लेटफॉर्म के माध्यम से जोड़ता है।" : "Highways24 links every participant of the highway economy through a single intelligent platform."}
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
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <Reveal key={node.slug} delay={i * 0.12}>
                  <Link
                    to={node.slug}
                    className={cn(
                      "group relative flex flex-col rounded-3xl p-6 md:p-8 min-h-[180px] md:min-h-[220px] text-left transition-transform hover:scale-105 shadow-lg overflow-hidden",
                      "bg-gradient-to-br from-[#0F172A] to-[#1E293B]"
                    )}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-full z-0">
                      <img 
                        src={
                          node.key === 'blue' ? "/truck%20driver%20for%20box.png" :
                          node.key === 'purple' ? "/mechanic%20for%20box.png" :
                          node.key === 'orange' ? "/dhaba%20for%20box.png" :
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
                        style={{ backgroundColor: iconColors[node.key] }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl md:text-3xl font-extrabold text-white mt-auto">{node.name}</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
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
  const { language } = useLanguage();
  const rolesList = getRoles(language);

  return (
    <section className="relative px-4 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-5xl">
            {language === "hi" ? "राजमार्ग पर " : "Built for "}
            <GradientText>{language === "hi" ? "हर भूमिका के लिए" : "every role"}</GradientText>
            {language === "hi" ? " निर्मित" : " on the highway"}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {rolesList.map((r, i) => {
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
                        {language === "hi" ? "देखें" : "Explore"}{" "}
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
export function HowItWorks() {
  const { language } = useLanguage();

  const steps = [
    {
      title: language === "hi" ? "भूमिका चुनें" : "Choose Role",
      desc: language === "hi" ? "चालक, मैकेनिक, ढाबा मालिक या फ्लीट मैनेजर।" : "Driver, mechanic, dhaba owner or fleet manager.",
    },
    { 
      title: language === "hi" ? "पंजीकरण करें" : "Register", 
      desc: language === "hi" ? "अपनी जानकारी दर्ज कर मिनटों में साइन अप करें।" : "Sign up in minutes with your details." 
    },
    { 
      title: language === "hi" ? "सत्यापन" : "Verification", 
      desc: language === "hi" ? "एआई-सहायता प्राप्त पहचान और दस्तावेज़ जांच।" : "AI-assisted identity and document checks." 
    },
    { 
      title: language === "hi" ? "डैशबोर्ड तक पहुंच" : "Access Dashboard", 
      desc: language === "hi" ? "आपका व्यक्तिगत कमांड सेंटर।" : "Your personalized command center." 
    },
    { 
      title: language === "hi" ? "परिचालन प्रबंधित करें" : "Manage Operations", 
      desc: language === "hi" ? "दैनिक कार्यों को एक ही स्थान पर संचालित करें।" : "Run day-to-day work in one place." 
    },
    { 
      title: language === "hi" ? "व्यवसाय बढ़ाएं" : "Grow Business", 
      desc: language === "hi" ? "डेटा विश्लेषण से अधिक कमाएं और व्यवसाय का विस्तार करें।" : "Use insights to earn and scale more." 
    },
  ];

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
              {language === "hi" ? "कार्यप्रणाली" : "How it works"}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {language === "hi" ? "पंजीकरण से व्यवसाय विस्तार तक" : "From sign-up to scale"}
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
export function PlatformFeatures() {
  const { language } = useLanguage();
  return (
    <section className="relative w-full bg-[#e37b78]">
      {/* Desktop Image */}
      <img 
        src={language === "hi" ? "/Screenshot 2026-07-08 153624_hindi.png" : "/Screenshot 2026-07-08 153624.png"} 
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
export function DashboardPreview() {
  const { language } = useLanguage();

  const dashMetrics = [
    {
      label: language === "hi" ? "राजस्व" : "Revenue",
      value: 4.8,
      prefix: "₹",
      suffix: "करोड़",
      color: "text-emerald",
    },
    { label: language === "hi" ? "चालक" : "Drivers", value: 1280, suffix: "", color: "text-blue" },
    { label: language === "hi" ? "वाहन" : "Vehicles", value: 940, suffix: "", color: "text-purple" },
    { label: language === "hi" ? "यात्राएं" : "Trips", value: 32400, suffix: "", color: "text-orange" },
    { label: language === "hi" ? "रखरखाव" : "Maintenance", value: 86, suffix: "%", color: "text-blue" },
    { label: language === "hi" ? "ईंधन बचत" : "Fuel saved", value: 18, suffix: "%", color: "text-emerald" },
    { label: language === "hi" ? "सूचनाएं" : "Notifications", value: 512, suffix: "", color: "text-purple" },
    {
      label: language === "hi" ? "खर्च" : "Expenses",
      value: 1.2,
      prefix: "₹",
      suffix: "करोड़",
      color: "text-orange",
    },
  ];

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue">
              {language === "hi" ? "लाइव पूर्वावलोकन" : "Live preview"}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {language === "hi" ? "आपके संपूर्ण परिचालन" : "Your operations, visualized"}
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
                  {language === "hi" ? "मासिक यात्राएं" : "Monthly trips"}
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
                  {language === "hi" ? "फ्लीट स्वास्थ्य" : "Fleet health"}
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
export function WhySection() {
  const { language } = useLanguage();

  const comparison = [
    language === "hi" ? "वास्तविक समय आपातकालीन सहायता" : "Real-time emergency support",
    language === "hi" ? "डिजिटल दस्तावेजीकरण" : "Digital documentation",
    language === "hi" ? "ऑनलाइन ढाबा खोज" : "Online dhaba discovery",
  ];

  return (
    <section className="relative px-4 pt-16 pb-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#e37b78] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              {language === "hi" ? "हाईवे24 क्यों" : "Why Highways24"}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {language === "hi" ? "राजमार्गों को चलाने का स्मार्ट तरीका" : "The smarter way to run highways"}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong mt-12 overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b dark:border-foreground/10 border-foreground light:border-black/10 text-sm font-semibold">
              <div className="p-4 md:p-5">{language === "hi" ? "क्षमता" : "Capability"}</div>
              <div className="p-4 text-center text-muted-foreground md:p-5">
                {language === "hi" ? "पारंपरिक" : "Traditional"}
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
export function TechStack() {
  const { language } = useLanguage();

  const techCards: { icon: LucideIcon; title: string; tag: string }[] = [
    { icon: Cpu, title: language === "hi" ? "फ़्रंटएंड" : "Frontend", tag: "React · Motion" },
    { icon: Server, title: language === "hi" ? "बैकएंड" : "Backend", tag: "Edge functions" },
    { icon: Cloud, title: language === "hi" ? "क्लाउड" : "Cloud", tag: language === "hi" ? "वैश्विक नेटवर्क" : "Globally distributed" },
    { icon: Database, title: language === "hi" ? "डेटाबेस" : "Database", tag: "Postgres" },
    { icon: Shield, title: language === "hi" ? "सुरक्षा" : "Security", tag: language === "hi" ? "एंड-टू-एंड" : "End-to-end" },
    { icon: MapIcon, title: language === "hi" ? "मानचित्र" : "Maps", tag: "GPS & routing" },
    { icon: Activity, title: language === "hi" ? "विश्लेषण" : "Analytics", tag: language === "hi" ? "वास्तविक समय" : "Real-time" },
  ];

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">
              {language === "hi" ? "उच्च प्रदर्शन तकनीक" : "Engineered to scale"}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {language === "hi" ? "आधुनिक तकनीक द्वारा संचालित" : "Powered by a modern stack"}
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
export function Testimonials() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      quote: language === "hi" 
        ? "जब मध्यरात्रि में मेरा ट्रक खराब हुआ, तो हाईवे24 के एसओएस फीचर से 4 मिनट में सहायता आ गई। यह वास्तव में जीवनरक्षक है।"
        : "Highways24's SOS feature got me help within minutes when I broke down at midnight. It's a lifesaver.",
      name: language === "hi" ? "बलविंदर सिंह" : "Balwinder Singh",
      role: language === "hi" ? "ट्रक चालक" : "Truck Driver",
      c: "text-blue",
    },
    {
      quote: language === "hi"
        ? "हमने वाहनों के खराब रहने के समय को 25% कम किया और अब पूरे फ्लीट पर स्पष्ट दृश्यता है।"
        : "We cut vehicle downtime by a quarter and finally have real visibility across the whole fleet.",
      name: language === "hi" ? "अनिता राव" : "Anita Rao",
      role: language === "hi" ? "फ्लीट मालिक" : "Fleet Owner",
      c: "text-emerald",
    },
    {
      quote: language === "hi"
        ? "काम के अनुरोध सीधे मेरे डैशबोर्ड पर आते हैं। मेरी कार्यशाला अब व्यवस्थित है और आय बढ़ी है।"
        : "Job requests come straight to my dashboard. My workshop is busier and better organized than ever.",
      name: language === "hi" ? "इमरान खान" : "Imran Khan",
      role: language === "hi" ? "मैकेनिक" : "Mechanic",
      c: "text-purple",
    },
    {
      quote: language === "hi"
        ? "ऑनलाइन ऑर्डर और विश्लेषण से शाम की बिक्री दोगुनी हो गई। मेरा ढाबा अब डिजिटल मानचित्र पर है।"
        : "Online orders and analytics doubled my evening rush. My dhaba is finally on the map — literally.",
      name: language === "hi" ? "लक्ष्मी देवी" : "Lakshmi Devi",
      role: language === "hi" ? "ढाबा मालिक" : "Dhaba Owner",
      c: "text-orange",
    },
    {
      quote: language === "hi"
        ? "हाईवे24 के साथ, मुझे कभी भी रुकने और खाने के लिए सुरक्षित स्थान की चिंता नहीं होती। यह सभी सत्यापित स्थानों को दिखाता है।"
        : "With Highways24, I never worry about finding a safe spot to park and eat. It shows all the verified stops.",
      name: language === "hi" ? "रमेश पटेल" : "Ramesh Patel",
      role: language === "hi" ? "लंबी दूरी का चालक" : "Long-haul Driver",
      c: "text-blue",
    },
    {
      quote: language === "hi"
        ? "स्वचालित बिलिंग और त्वरित टोल पास एकीकरण से कागजी कार्रवाई का समय काफी बच गया है।"
        : "The automated billing and fast toll pass integrations have saved my transport business hours of paperwork every week.",
      name: language === "hi" ? "सुरेश गुप्ता" : "Suresh Gupta",
      role: language === "hi" ? "ट्रांसपोर्ट ऑपरेटर" : "Transport Operator",
      c: "text-emerald",
    },
  ];

  const marqueeWords = language === "hi" 
    ? ["चालक", "फ्लीट", "मैकेनिक", "ढाबे", "लॉजिस्टिक्स", "ट्रांसपोर्टर", "कार्यशालाएं", "राजमार्ग"]
    : ["Drivers", "Fleets", "Mechanics", "Dhabas", "Logistics", "Transporters", "Workshops", "Highways"];

  return (
    <section className="relative px-4 pt-4 pb-24 bg-gradient-to-b from-transparent to-[#38BDF8]/20 to-[30%]">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            {language === "hi" ? "राजमार्ग पर पसंदीदा" : "Loved on the highway"}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {language === "hi" ? "पूरे नेटवर्क में विश्वसनीय" : "Trusted across the ecosystem"}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Marquee pauseOnHover className="[--duration:50s]">
              {testimonials.map((tItem, idx) => (
                <div
                  key={idx}
                  className="glass-strong mx-4 w-[300px] md:w-[400px] shrink-0 rounded-3xl p-6 md:p-8 whitespace-normal text-left"
                >
                  <Quote className="h-6 w-6 text-muted-foreground/50" />
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200">{tItem.quote}</p>
                  <div className="mt-6">
                    <div className="font-semibold text-slate-900 dark:text-foreground">{tItem.name}</div>
                    <div className={cn("text-sm", tItem.c)}>{tItem.role}</div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        <div className="mt-16">
          <Marquee>
            {marqueeWords.map((w) => (
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
              {t("nav.register", "Register")}
            </button>
          </GetStartedModal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA ----------------------------- */
export function CtaSection() {
  const { language, t } = useLanguage();
  return (
    <section id="cta" className="relative scroll-mt-24 px-4 pb-28 pt-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-20">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue via-purple to-emerald opacity-30 blur-[120px]" />
            <Sparkles className="mx-auto h-10 w-10 text-purple" />
            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-extrabold md:text-6xl">
              {language === "hi" ? "हाईवे परिचालन में " : "Ready to "}
              <GradientText>{language === "hi" ? "क्रांति लाने के लिए तैयार हैं?" : "Transform Highway Operations?"}</GradientText>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              {language === "hi" ? "भारत के सबसे जुड़े हाईवे नेटवर्क का निर्माण कर रहे हजारों लोगों से जुड़ें।" : "Join thousands already building India's most connected highway ecosystem."}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <GetStartedModal>
                <button className="rounded-full bg-gradient-to-r from-blue via-primary to-purple px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple/25 transition-transform hover:scale-105">
                  {t("nav.register", "Register")}
                </button>
              </GetStartedModal>
              <Link
                to="/"
                hash="ecosystem"
                className="rounded-full border dark:border-foreground/15 border-foreground light:border-black/15 bg-foreground/5 light:bg-black/5 px-8 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-foreground/10 light:hover:bg-black/10"
              >
                {language === "hi" ? "डेमो देखें" : "Book a Demo"}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
