import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, Wrench, Store, MapPin, CheckCircle2, User, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/auth/register/mechanic")({
  component: RegisterMechanicPage,
});

function RegisterMechanicPage() {
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
      await login("mechanic@example.com", "mechanic");
      navigate({ to: "/dashboard/mechanic" });
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
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex items-center justify-between mb-10 relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple/20 text-purple">
              <Wrench className="w-6 h-6" />
            </div>
            Mechanic Registration
          </h1>
          <p className="text-muted-foreground">Offer your services on Highways24</p>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= s ? 'bg-purple text-white' : 'bg-foreground/10 dark:text-foreground/40 text-foreground'}`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && <div className={`w-8 h-[2px] ${step > s ? 'bg-purple' : 'dark:bg-foreground/10 bg-foreground'}`} />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleRegister} className="space-y-6 relative z-10">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="Amit Sharma" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="email" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="amit@mechanics.com" />
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="password" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="Create a strong password" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Workshop Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Workshop Name (if any)</label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="text" className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="Sharma Auto Works" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Highway Route</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="NH-48" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Experience (Years)</label>
                <input type="number" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 px-4 text-foreground focus:ring-2 focus:ring-purple/50 outline-none" placeholder="e.g. 10" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Services Offered</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "engine", label: "Engine Repair" },
                { id: "tyre", label: "Tyre Puncture / Replacement" },
                { id: "electrical", label: "Electrical Issues" },
                { id: "towing", label: "Towing Service" },
                { id: "ac", label: "AC Repair" },
                { id: "247", label: "24/7 Availability" }
              ].map((service) => (
                <label key={service.id} className="flex items-center gap-3 p-3 rounded-xl border dark:border-foreground/10 border-foreground bg-foreground/5 hover:bg-foreground/10 cursor-pointer transition-colors">
                  <input type="checkbox" className="rounded dark:border-foreground/20 border-foreground bg-foreground/5 text-purple focus:ring-purple/50 w-5 h-5" />
                  <span className="text-sm dark:text-foreground/80 text-foreground">{service.label}</span>
                </label>
              ))}
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between pt-4 mt-6 border-t dark:border-foreground/10 border-foreground">
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
            className="flex items-center gap-2 bg-gradient-to-r from-purple to-pink-500 hover:opacity-90 px-8 py-3 rounded-xl font-semibold text-white shadow-lg shadow-purple/20 transition-all disabled:opacity-70"
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
