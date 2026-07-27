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
import { ReactNode, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

interface GetStartedModalProps {
  children: ReactNode;
}

export function GetStartedModal({ children }: GetStartedModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const modalRoles = [
    {
      id: "driver",
      title: t("role.drivers.name", "Truck Driver"),
      description: language === "hi" ? "स्मार्ट नेविगेशन और यात्रा प्रबंधन" : "Find loads, navigate, and manage trips",
      icon: Truck,
      color: "from-blue-500 to-cyan-400",
      href: "/auth/register/driver",
    },
    {
      id: "dhaba",
      title: t("role.dhaba.name", "Dhaba Owner"),
      description: language === "hi" ? "मेनू प्रबंधित करें और ऑर्डर प्राप्त करें" : "Manage your menu and attract more drivers",
      icon: UtensilsCrossed,
      color: "from-orange-500 to-amber-400",
      href: "/auth/register/dhaba",
    },
    {
      id: "mechanic",
      title: t("role.mechanics.name", "Mechanic"),
      description: language === "hi" ? "सड़क किनारे सहायता और मरम्मत सेवाएं प्रदान करें" : "Provide roadside assistance and workshop services",
      icon: Wrench,
      color: "from-purple-500 to-pink-400",
      href: "/auth/register/mechanic",
    },
    {
      id: "fleet",
      title: t("role.fleet.name", "Fleet Owner"),
      description: language === "hi" ? "वाहन, चालक और परिचालन प्रबंधित करें" : "Manage vehicles, drivers, and operations",
      icon: Building2,
      color: "from-emerald-500 to-teal-400",
      href: "/auth/register/fleet",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background/80 backdrop-blur-2xl dark:border-foreground/10 border-foreground shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 z-0 pointer-events-none" />
        <div className="relative z-10 p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              {t("auth.modalTitle", "Join Highways24")}
            </DialogTitle>
            <p className="text-center text-muted-foreground mt-2">
              {t("auth.modalSubtitle", "Select your role to get started with the platform")}
            </p>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modalRoles.map((role, idx) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={role.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex flex-col p-5 h-full rounded-2xl border dark:border-foreground/10 border-foreground bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${role.color}`} />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} bg-opacity-20`}>
                      <role.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <ChevronRight className="w-4 h-4 dark:text-foreground/50 text-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-1 relative z-10">
                    {role.title}
                  </h3>
                  <p className="text-sm dark:text-foreground/60 text-foreground relative z-10">
                    {role.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            {language === "hi" ? "पहले से पंजीकृत हैं? " : "Already have an account? "}
            <Link to="/auth/login" onClick={() => setIsOpen(false)} className="text-primary hover:text-primary-foreground transition-colors font-medium">
              {t("auth.loginButton", "Sign In")}
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
