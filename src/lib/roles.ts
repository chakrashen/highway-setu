import {
  Truck,
  Wrench,
  UtensilsCrossed,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { Language } from "@/hooks/use-language";

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
      "From smart navigation to emergency support, Highways24 rides shotgun on every journey — keeping drivers safe, informed and connected across every mile.",
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
      "Revenue Reports",
      "Document Management",
      "Alerts & Notifications",
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

export const HI_ROLES: RoleData[] = [
  {
    key: "blue",
    slug: "/drivers",
    name: "ट्रक चालक",
    icon: Truck,
    headline: "आपका बुद्धिमान हाईवे साथी",
    tagline: "भारत को गतिमान रखने वाले चालकों के लिए विशेष रूप से निर्मित।",
    description:
      "स्मार्ट नेविगेशन से लेकर आपातकालीन सहायता तक, हाईवे24 हर यात्रा पर चालकों को सुरक्षित, सूचित और कनेक्टेड रखता है।",
    features: [
      "स्मार्ट नेविगेशन",
      "चालक समुदाय",
      "डिजिटल दस्तावेज़",
      "सुरक्षा अलर्ट",
      "लाइव सड़क अपडेट",
      "पहचान सत्यापन",
    ],
    stats: [
      { label: "सक्रिय चालक", value: 48000, suffix: "+" },
      { label: "औसत एसओएस प्रतिक्रिया", value: 4, suffix: " मिनट" },
      { label: "अनुकूलित मार्ग", value: 2.1, prefix: "", suffix: "M" },
    ],
    accentClass: "text-blue",
    gradient: "from-blue to-blue-glow",
    glow: "glow-blue",
  },
  {
    key: "purple",
    slug: "/mechanics",
    name: "मैकेनिक",
    icon: Wrench,
    headline: "हर कार्यशाला को स्मार्ट सर्विस सेंटर में बदलें",
    tagline: "अपने गैराज को एक डिजिटल सर्विस हब बनाएं।",
    description:
      "सेवा अनुरोध प्राप्त करें, तेजी से निदान करें, स्पेयर पार्ट्स प्रबंधित करें और भुगतान प्राप्त करें — हाईवे कार्यशालाओं के लिए निर्मित डैशबोर्ड से।",
    features: [
      "सेवा अनुरोध प्राप्त करें",
      "नौकरी स्वीकार करें",
      "वाहन निदान",
      "स्पेयर पार्ट्स प्रबंधन",
      "ग्राहक संचार",
      "आय डैशबोर्ड",
    ],
    stats: [
      { label: "पंजीकृत कार्यशालाएं", value: 9200, suffix: "+" },
      { label: "पूर्ण किए गए काम", value: 310, suffix: "K" },
      { label: "औसत रेटिंग", value: 4.8, suffix: "★" },
    ],
    accentClass: "text-purple",
    gradient: "from-purple to-purple-glow",
    glow: "glow-purple",
  },
  {
    key: "orange",
    slug: "/dhaba",
    name: "ढाबा मालिक",
    icon: UtensilsCrossed,
    headline: "हाईवे व्यवसायों को सशक्त बनाना",
    tagline: "अपने ढाबे को डिजिटल युग में लाएं।",
    description:
      "मेनू प्रबंधित करें, ऑनलाइन ऑर्डर लें, पीक आवर्स समझें और हाईवे हॉस्पिटैलिटी विश्लेषण से अपनी आय बढ़ाएं।",
    features: [
      "स्मार्ट मेनू प्रबंधन",
      "ऑनलाइन ऑर्डर",
      "ग्राहक समीक्षाएं",
      "व्यावसायिक प्रोफ़ाइल",
      "लोकप्रिय व्यंजन",
      "डिजिटल भुगतान",
    ],
    stats: [
      { label: "सूचीबद्ध ढाबे", value: 6400, suffix: "+" },
      { label: "ऑर्डर / माह", value: 1.4, suffix: "M" },
      { label: "औसत आय वृद्धि", value: 32, suffix: "%" },
    ],
    accentClass: "text-orange",
    gradient: "from-orange to-orange-glow",
    glow: "glow-orange",
  },
  {
    key: "emerald",
    slug: "/fleet",
    name: "फ्लीट मैनेजर",
    icon: LayoutDashboard,
    headline: "पूर्ण फ्लीट कमांड सेंटर",
    tagline: "प्रत्येक वाहन और चालक पर पूर्ण दृश्यता।",
    description:
      "वाहनों को ट्रैक करें, चालकों को प्रबंधित करें, रखरखाव शेड्यूल करें और डेटा को सही निर्णयों में बदलें — आपका पूरा फ्लीट एक ही स्थान पर।",
    features: [
      "फ्लीट डैशबोर्ड",
      "चालक प्रबंधन",
      "वाहन प्रबंधन",
      "आय रिपोर्ट",
      "दस्तावेज़ प्रबंधन",
      "सुरक्षा अलर्ट",
    ],
    stats: [
      { label: "प्रबंधित वाहन", value: 120000, suffix: "+" },
      { label: "अपटाइम सुधार", value: 27, suffix: "%" },
      { label: "ईंधन बचत", value: 18, suffix: "%" },
    ],
    accentClass: "text-emerald",
    gradient: "from-emerald to-emerald-glow",
    glow: "glow-emerald",
  },
];

export const getRoles = (lang: Language = "en"): RoleData[] => {
  return lang === "hi" ? HI_ROLES : ROLES;
};

export const roleBySlug = (slug: string, lang: Language = "en") => {
  const rolesList = getRoles(lang);
  return rolesList.find((r) => r.slug === slug) || rolesList[0];
};
