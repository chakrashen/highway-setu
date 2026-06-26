import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Truck, UtensilsCrossed, Wrench, Building2, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

const roles = [
  {
    id: "driver",
    title: "Truck Driver",
    description: "Find loads, navigate, and manage trips",
    icon: Truck,
    color: "from-blue-500 to-cyan-400",
    href: "/auth/register/driver",
  },
  {
    id: "dhaba",
    title: "Dhaba Owner",
    description: "Manage your menu and attract more drivers",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-amber-400",
    href: "/auth/register/dhaba",
  },
  {
    id: "mechanic",
    title: "Mechanic",
    description: "Provide roadside assistance and workshop services",
    icon: Wrench,
    color: "from-purple-500 to-pink-400",
    href: "/auth/register/mechanic",
  },
  {
    id: "fleet",
    title: "Fleet Owner",
    description: "Manage vehicles, drivers, and operations",
    icon: Building2,
    color: "from-emerald-500 to-teal-400",
    href: "/auth/register/fleet",
  },
];

interface GetStartedModalProps {
  children: ReactNode;
}

export function GetStartedModal({ children }: GetStartedModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background/80 backdrop-blur-2xl border-foreground/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 z-0 pointer-events-none" />
        <div className="relative z-10 p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Join Highway Setu
            </DialogTitle>
            <p className="text-center text-muted-foreground mt-2">
              Select your role to get started with the platform
            </p>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role, idx) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={role.href}
                  className="group relative flex flex-col p-5 h-full rounded-2xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${role.color}`} />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} bg-opacity-20`}>
                      <role.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <ChevronRight className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-1 relative z-10">
                    {role.title}
                  </h3>
                  <p className="text-sm text-foreground/60 relative z-10">
                    {role.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary hover:text-primary-foreground transition-colors font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
