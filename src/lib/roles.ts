import {
  Truck,
  Wrench,
  UtensilsCrossed,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export type AccentKey = "blue" | "purple" | "orange" | "emerald";

export interface RoleData {
  key: AccentKey;
  slug: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  tagline: string;
  description: string;
  features: string[];
  stats: { label: string; value: number; prefix?: string; suffix?: string }[];
  accentClass: string; // text color
  gradient: string; // from-x to-y
  glow: string;
}

export const ACCENT_META: Record<
  AccentKey,
  { gradient: string; glow: string; text: string; bgSoft: string; ring: string }
> = {
  blue: {
    gradient: "from-blue to-blue-glow",
    glow: "glow-blue",
    text: "text-blue",
    bgSoft: "bg-blue/15",
    ring: "ring-blue/40",
  },
  purple: {
    gradient: "from-purple to-purple-glow",
    glow: "glow-purple",
    text: "text-purple",
    bgSoft: "bg-purple/15",
    ring: "ring-purple/40",
  },
  orange: {
    gradient: "from-orange to-orange-glow",
    glow: "glow-orange",
    text: "text-orange",
    bgSoft: "bg-orange/15",
    ring: "ring-orange/40",
  },
  emerald: {
    gradient: "from-emerald to-emerald-glow",
    glow: "glow-emerald",
    text: "text-emerald",
    bgSoft: "bg-emerald/15",
    ring: "ring-emerald/40",
  },
};

export const ROLES: RoleData[] = [
  {
    key: "blue",
    slug: "/drivers",
    name: "Truck Driver",
    icon: Truck,
    headline: "Your Intelligent Highway Companion",
    tagline: "Built for the people who keep India moving.",
    description:
      "From smart navigation to emergency support, Highway Setu rides shotgun on every journey — keeping drivers safe, informed and connected across every mile.",
    features: [
      "Smart Navigation",
      "Driver Community",
      "Digital Documents",
      "Safety Notifications",
      "Real-time Road Updates",
      "Identity Verification",
    ],
    stats: [
      { label: "Active drivers", value: 48000, suffix: "+" },
      { label: "Avg. SOS response", value: 4, suffix: " min" },
      { label: "Routes optimized", value: 2.1, prefix: "", suffix: "M" },
    ],
    accentClass: "text-blue",
    gradient: "from-blue to-blue-glow",
    glow: "glow-blue",
  },
  {
    key: "purple",
    slug: "/mechanics",
    name: "Mechanic",
    icon: Wrench,
    headline: "Transform Every Workshop into a Smart Service Center",
    tagline: "Turn your garage into a digital service hub.",
    description:
      "Receive job requests, diagnose faster, manage parts and get paid — all from one premium dashboard designed for highway workshops.",
    features: [
      "Receive Service Requests",
      "Accept Jobs",
      "Vehicle Diagnosis",
      "Spare Parts Management",
      "Customer Communication",
      "Earnings Dashboard",
    ],
    stats: [
      { label: "Workshops onboarded", value: 9200, suffix: "+" },
      { label: "Jobs completed", value: 310, suffix: "K" },
      { label: "Avg. rating", value: 4.8, suffix: "★" },
    ],
    accentClass: "text-purple",
    gradient: "from-purple to-purple-glow",
    glow: "glow-purple",
  },
  {
    key: "orange",
    slug: "/dhaba",
    name: "Dhaba Owner",
    icon: UtensilsCrossed,
    headline: "Empowering Highway Businesses",
    tagline: "Bring your dhaba into the digital age.",
    description:
      "Manage menus, take online orders, understand peak hours and grow revenue with analytics built for highway hospitality.",
    features: [
      "Smart Menu Management",
      "Online Orders",
      "Customer Reviews",
      "Business Profile",
      "Best Selling Items",
      "Digital Payments",
    ],
    stats: [
      { label: "Dhabas listed", value: 6400, suffix: "+" },
      { label: "Orders / month", value: 1.4, suffix: "M" },
      { label: "Avg. revenue lift", value: 32, suffix: "%" },
    ],
    accentClass: "text-orange",
    gradient: "from-orange to-orange-glow",
    glow: "glow-orange",
  },
  {
    key: "emerald",
    slug: "/fleet",
    name: "Fleet Manager",
    icon: LayoutDashboard,
    headline: "The Complete Fleet Command Center",
    tagline: "Total visibility over every vehicle and driver.",
    description:
      "Track vehicles, manage drivers, schedule maintenance and turn operational data into decisions — your entire fleet in one command center.",
    features: [
      "Fleet Dashboard",
      "Driver Management",
      "Vehicle Management",
      "Maintenance Scheduling",
      "Expense Tracking",
      "Revenue Reports",
      "Driver Performance",
      "Vehicle Analytics",
      "Document Management",
      "Alerts & Notifications",
      "Operational Insights",
    ],
    stats: [
      { label: "Vehicles managed", value: 120000, suffix: "+" },
      { label: "Uptime improvement", value: 27, suffix: "%" },
      { label: "Fuel savings", value: 18, suffix: "%" },
    ],
    accentClass: "text-emerald",
    gradient: "from-emerald to-emerald-glow",
    glow: "glow-emerald",
  },
];

export const roleBySlug = (slug: string) => ROLES.find((r) => r.slug === slug)!;
