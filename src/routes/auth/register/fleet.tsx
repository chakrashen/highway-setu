import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, Building2, Briefcase, CheckCircle2, User, Mail, Lock, Users } from "lucide-react";

export const Route = createFileRoute("/auth/register/fleet")({
  component: RegisterFleetPage,
});

function RegisterFleetPage() {
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
      await login("fleet@example.com", "fleet");
      navigate({ to: "/dashboard/fleet" });
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
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex items-center justify-between mb-10 relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald/20 text-emerald">
              <Building2 className="w-6 h-6" />
            </div>
            Fleet Registration
          </h1>
          <p className="text-muted-foreground">Manage your vehicles and drivers</p>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= s ? 'bg-emerald text-white' : 'bg-foreground/10 dark:text-foreground/40 text-foreground'}`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && <div className={`w-8 h-[2px] ${step > s ? 'bg-emerald' : 'dark:bg-foreground/10 bg-foreground'}`} />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleRegister} className="space-y-6 relative z-10">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Admin Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Admin Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="Rajesh Singh" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Company Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="email" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="admin@fleet.com" />
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="password" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="Create a strong password" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Company Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Company Name</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="Singh Logistics Pvt Ltd" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">GST Number</label>
                <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 px-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="22AAAAA0000A1Z5" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Headquarters City</label>
                <input type="text" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 px-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="Mumbai" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b dark:border-foreground/10 border-foreground pb-2">Fleet Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Fleet Size (Vehicles)</label>
                <div className="relative">
                  <Truck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="number" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="e.g. 50" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Number of Drivers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                  <input type="number" required className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="e.g. 60" />
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium dark:text-foreground/80 text-foreground">Primary Routes (Optional)</label>
                <input type="text" className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 px-4 text-foreground focus:ring-2 focus:ring-emerald/50 outline-none" placeholder="Mumbai - Delhi, Pune - Bangalore" />
              </div>
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
            className="flex items-center gap-2 bg-gradient-to-r from-emerald to-teal-500 hover:opacity-90 px-8 py-3 rounded-xl font-semibold text-white shadow-lg shadow-emerald/20 transition-all disabled:opacity-70"
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
