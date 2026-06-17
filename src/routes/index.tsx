import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import {
  ProblemSection,
  EcosystemSection,
  RoleTeasers,
  HowItWorks,
  PlatformFeatures,
  DashboardPreview,
  WhySection,
  TechStack,
  Testimonials,
  CtaSection,
} from "@/components/home/sections";
import { AnimatedBackground } from "@/components/ui/animated-background";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highway Setu — Connecting Every Mile of India's Highways" },
      {
        name: "description",
        content:
          "Highway Setu connects truck drivers, fleet managers, mechanics and dhaba owners into one intelligent highway ecosystem.",
      },
      { property: "og:title", content: "Highway Setu" },
      {
        property: "og:description",
        content:
          "The intelligent digital ecosystem for India's highway transportation industry.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="noise relative">
      <Hero />
      <div className="relative">
        <AnimatedBackground />
        <ProblemSection />
        <EcosystemSection />
        <RoleTeasers />
        <HowItWorks />
        <PlatformFeatures />
        <DashboardPreview />
        <WhySection />
        <TechStack />
        <Testimonials />
        <CtaSection />
      </div>
    </div>
  );
}
