import { CheckCircle2, Shield, Star, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function PricingPlans() {
  const { language, t } = useLanguage();

  const plans = [
    {
      name: language === "hi" ? "मुफ्त योजना" : "Free",
      price: "₹0",
      period: language === "hi" ? "हमेशा" : "forever",
      description: language === "hi" ? "व्यक्तिगत चालकों के लिए बुनियादी पहुंच।" : "Basic access for individual drivers.",
      features: [
        language === "hi" ? "बुनियादी मानचित्र पहुंच" : "Basic map access", 
        language === "hi" ? "आपातकालीन एसओएस" : "Emergency SOS", 
        language === "hi" ? "मानक सहायता" : "Standard support"
      ],
      button: language === "hi" ? "वर्तमान योजना" : "Current Plan",
      current: true,
      icon: Shield,
      color: "dark:text-foreground/60 text-foreground",
      bg: "bg-foreground/5 dark:border-foreground/10 border-foreground"
    },
    {
      name: language === "hi" ? "प्रीमियम ड्राइवर" : "Premium Driver",
      price: "₹199",
      period: language === "hi" ? "प्रति माह" : "per month",
      description: language === "hi" ? "पेशेवर चालकों के लिए उन्नत टूल।" : "Advanced tools for professional drivers.",
      features: [
        language === "hi" ? "स्मार्ट मार्ग अनुकूलन" : "Smart route optimization", 
        language === "hi" ? "विज्ञापन-मुक्त अनुभव" : "Ad-free experience", 
        language === "hi" ? "प्राथमिकता एसओएस प्रतिक्रिया" : "Priority SOS response", 
        language === "hi" ? "उन्नत मौसम अलर्ट" : "Advanced weather alerts"
      ],
      button: language === "hi" ? "अभी अपग्रेड करें" : "Upgrade Now",
      current: false,
      icon: Star,
      color: "text-blue",
      bg: "bg-blue/5 border-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden",
      badge: language === "hi" ? "सबसे लोकप्रिय" : "Most Popular"
    },
    {
      name: language === "hi" ? "एंटरप्राइज फ्लीट" : "Enterprise Fleet",
      price: "₹1999",
      period: language === "hi" ? "प्रति माह" : "per month",
      description: language === "hi" ? "फ्लीट संचालन के लिए पूर्ण पैकेज।" : "Complete suite for fleet operations.",
      features: [
        language === "hi" ? "50 वाहनों तक" : "Up to 50 vehicles", 
        language === "hi" ? "उन्नत विश्लेषण" : "Advanced analytics", 
        language === "hi" ? "चालक प्रदर्शन ट्रैकिंग" : "Driver performance tracking", 
        language === "hi" ? "समर्पित सहायता" : "Dedicated account manager"
      ],
      button: language === "hi" ? "बिक्री टीम से संपर्क करें" : "Contact Sales",
      current: false,
      icon: Zap,
      color: "text-emerald-400",
      bg: "bg-emerald-500/5 border-emerald-500/30"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.name} className={`rounded-3xl p-6 glass-strong border ${plan.bg}`}>
          {plan.badge && (
            <div className="absolute top-0 right-0">
              <div className="bg-blue text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                {plan.badge}
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-xl bg-foreground/5 ${plan.color}`}>
              <plan.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          </div>
          
          <p className="text-sm dark:text-foreground/60 text-foreground mb-6 h-10">{plan.description}</p>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm dark:text-foreground/40 text-foreground">/{plan.period}</span>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm dark:text-foreground/80 text-foreground">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.current ? 'dark:text-foreground/40 text-foreground' : plan.color}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
            plan.current 
              ? 'bg-foreground/10 dark:text-foreground/60 text-foreground cursor-default' 
              : `bg-foreground/10 hover:bg-foreground/20 text-white border dark:border-foreground/10 border-foreground ${plan.badge ? 'bg-blue hover:bg-blue/90 border-blue text-white shadow-lg shadow-blue/20' : ''}`
          }`}>
            {plan.button}
          </button>
        </div>
      ))}
    </div>
  );
}
