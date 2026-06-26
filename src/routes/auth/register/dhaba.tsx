import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, UtensilsCrossed, Store, MapPin, CheckCircle2, User, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/auth/register/dhaba")({
  component: RegisterDhabaPage,
});

function RegisterDhabaPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      await login("dhaba@example.com", "dhaba");
      navigate({ to: "/dashboard/dhaba" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex items-center justify-between mb-10 relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange/20 text-orange">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            Dhaba Registration
          </h1>
          <p className="text-muted-foreground">List your business on Highway Setu</p>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= s ? 'bg-orange text-white' : 'bg-foreground/10 text-foreground/40'}`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && <div className={`w-8 h-[2px] ${step > s ? 'bg-orange' : 'bg-foreground/10'}`} />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleRegister} className="space-y-6 relative z-10">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-foreground/10 pb-2">Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/80">Owner Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input type="text" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="Ramesh Kumar" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input type="email" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="owner@dhaba.com" />
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium text-foreground/80">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input type="password" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="Create a strong password" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-foreground/10 pb-2">Business Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium text-foreground/80">Dhaba Name</label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input type="text" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="Sher-e-Punjab Dhaba" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/80">Highway Route</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input type="text" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="NH-44" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/80">Landmark / Milestone</label>
                <input type="text" required className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 px-4 text-foreground focus:ring-2 focus:ring-orange/50 outline-none" placeholder="Near Toll Plaza, KM 120" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-foreground/10 pb-2">Facilities</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "parking", label: "Heavy Truck Parking" },
                { id: "washroom", label: "Clean Washrooms" },
                { id: "rest", label: "Rest Area / Charpai" },
                { id: "food", label: "24x7 Food Available" },
                { id: "mechanic", label: "Mechanic Nearby" },
                { id: "wifi", label: "Free WiFi" }
              ].map((facility) => (
                <label key={facility.id} className="flex items-center gap-3 p-3 rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 cursor-pointer transition-colors">
                  <input type="checkbox" className="rounded border-foreground/20 bg-foreground/5 text-orange focus:ring-orange/50 w-5 h-5" />
                  <span className="text-sm text-foreground/80">{facility.label}</span>
                </label>
              ))}
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between pt-4 mt-6 border-t border-foreground/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div for flex spacing
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 bg-gradient-to-r from-orange to-amber-500 hover:opacity-90 px-8 py-3 rounded-xl font-semibold text-white shadow-lg shadow-orange/20 transition-all disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <>
                {step === 3 ? "Complete Registration" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
