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
  MapPin,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GetStartedModal } from "@/components/auth/get-started-modal";

const roles = [
  { to: "/map", label: "Map", icon: MapPin, color: "text-blue" },
  { to: "/drivers", label: "Truck Drivers", icon: Truck, color: "text-blue" },
  { to: "/mechanics", label: "Mechanics", icon: Wrench, color: "text-purple" },
  {
    to: "/dhaba",
    label: "Dhaba Owners",
    icon: UtensilsCrossed,
    color: "text-orange",
  },
  {
    to: "/fleet",
    label: "Fleet Managers",
    icon: LayoutDashboard,
    color: "text-emerald",
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            <span>Highways<span className="text-gradient">24</span></span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {roles.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground light:hover:bg-black/5"
                activeProps={{ className: "!text-foreground !bg-foreground/10 light:!bg-black/10" }}
              >
                <r.icon className={cn("h-4 w-4", r.color)} />
                {r.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button className="flex items-center gap-1 text-sm font-medium dark:text-foreground/60 text-foreground hover:text-foreground px-2 py-1.5 rounded-lg hover:bg-foreground/5 transition-colors">
              <Globe className="w-4 h-4" /> EN
            </button>
            <GetStartedModal>
              <button className="rounded-full bg-gradient-to-r from-blue to-purple px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-transform hover:scale-105">
                Register
              </button>
            </GetStartedModal>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-foreground/5 light:bg-black/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
            >
              {roles.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground light:hover:bg-black/5"
                  activeProps={{ className: "!text-foreground !bg-foreground/10 light:!bg-black/10" }}
                >
                  <r.icon className={cn("h-4 w-4", r.color)} />
                  {r.label}
                </Link>
              ))}
              <GetStartedModal>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl w-full bg-gradient-to-r from-blue to-purple px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Register
                </button>
              </GetStartedModal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
