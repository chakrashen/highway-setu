import { CheckCircle2, Shield, Star, Zap } from "lucide-react";

export function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Basic access for individual drivers.",
      features: ["Basic map access", "Emergency SOS", "Standard support", "Limited history"],
      button: "Current Plan",
      current: true,
      icon: Shield,
      color: "text-foreground/60",
      bg: "bg-foreground/5 border-foreground/10"
    },
    {
      name: "Premium Driver",
      price: "₹199",
      period: "per month",
      description: "Advanced tools for professional drivers.",
      features: ["Smart route optimization", "Ad-free experience", "Priority SOS response", "Unlimited history", "Advanced weather alerts"],
      button: "Upgrade Now",
      current: false,
      icon: Star,
      color: "text-blue",
      bg: "bg-blue/5 border-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden",
      badge: "Most Popular"
    },
    {
      name: "Enterprise Fleet",
      price: "₹1999",
      period: "per month",
      description: "Complete suite for fleet operations.",
      features: ["Up to 50 vehicles", "Advanced analytics", "Driver performance tracking", "Bulk payments", "Dedicated account manager"],
      button: "Contact Sales",
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
          
          <p className="text-sm text-foreground/60 mb-6 h-10">{plan.description}</p>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-foreground/40">/{plan.period}</span>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.current ? 'text-foreground/40' : plan.color}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
            plan.current 
              ? 'bg-foreground/10 text-foreground/60 cursor-default' 
              : `bg-foreground/10 hover:bg-foreground/20 text-white border border-foreground/10 ${plan.badge ? 'bg-blue hover:bg-blue/90 border-blue text-white shadow-lg shadow-blue/20' : ''}`
          }`}>
            {plan.button}
          </button>
        </div>
      ))}
    </div>
  );
}
