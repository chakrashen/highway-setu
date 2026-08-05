import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Truck,
  Wrench,
  UtensilsCrossed,
  LayoutDashboard,
  Home,
  Globe,
  Soup
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const navRoles = [
  { to: "/drivers", key: "nav.truckDrivers", fallback: "Truck Drivers", icon: Truck, color: "text-blue" },
  { to: "/mechanics", key: "nav.mechanics", fallback: "Mechanics", icon: Wrench, color: "text-purple" },
  {
    to: "/dhaba",
    key: "nav.dhabaOwners",
    fallback: "Dhaba Owners",
    icon: UtensilsCrossed,
    color: "text-orange",
  },
  {
    to: "/food-order",
    key: "nav.foodOrder",
    fallback: "Food Order",
    icon: Soup,
    color: "text-amber-400",
  },
  {
    to: "/fleet",
    key: "nav.fleetManagers",
    fallback: "Fleet Managers",
    icon: LayoutDashboard,
    color: "text-emerald",
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 glass-strong",
          )}
        >
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <Home className="h-5 w-5" />
            <span>{t("nav.brand", "Highways24")}</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navRoles.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground light:hover:bg-black/5"
                activeProps={{ className: "!text-foreground !bg-foreground/10 light:!bg-black/10" }}
              >
                <r.icon className={cn("h-4 w-4", r.color)} />
                {t(r.key, r.fallback)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleLanguage}
              title="Switch Language / भाषा बदलें"
              className="flex items-center gap-1.5 text-sm font-semibold dark:text-foreground/80 text-foreground hover:bg-foreground/10 border border-foreground/15 px-3 py-1.5 rounded-full transition-all"
            >
              <Globe className="w-4 h-4 text-blue" />
              <span>{language === "en" ? "EN | English" : "HI | हिंदी"}</span>
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="rounded-full bg-gradient-to-r from-blue to-purple px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-transform hover:scale-105">
                  Get App
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] flex items-center justify-center min-h-[200px]">
                <DialogTitle className="sr-only">App Coming Soon</DialogTitle>
                <h2 className="text-4xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple">
                  App is coming soon
                </h2>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-foreground/20 glass"
            >
              <Globe className="w-3.5 h-3.5 text-blue" />
              {language === "en" ? "EN" : "HI"}
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-foreground/5 light:bg-black/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
            >
              {navRoles.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground light:hover:bg-black/5"
                  activeProps={{ className: "!text-foreground !bg-foreground/10 light:!bg-black/10" }}
                >
                  <r.icon className={cn("h-4 w-4", r.color)} />
                  {t(r.key, r.fallback)}
                </Link>
              ))}

              <div className="pt-2 border-t border-border/40 flex flex-col gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-foreground bg-foreground/5"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue" />
                    Language / भाषा
                  </span>
                  <span className="font-bold text-blue">{language === "en" ? "English (EN)" : "हिंदी (HI)"}</span>
                </button>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="rounded-xl w-full bg-gradient-to-r from-blue to-purple px-4 py-3 text-center text-sm font-semibold text-white">
                      Get App
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[90%] max-w-[425px] flex items-center justify-center min-h-[200px] rounded-2xl">
                    <DialogTitle className="sr-only">App Coming Soon</DialogTitle>
                    <h2 className="text-3xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple">
                      App is coming soon
                    </h2>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
