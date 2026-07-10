import { Link, useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { 
  Home, 
  Truck, 
  Settings, 
  LogOut, 
  UtensilsCrossed, 
  Wrench, 
  Building2, 
  ShieldAlert,
  MapPin,
  FileText,
  Users,
  Bell,
  Star,
  Car,
  MessageSquare,
  Wallet,
  Crown,
  X
} from "lucide-react";

export function DashboardSidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await logout();
    navigate({ to: "/" });
  };

  const getLinks = () => {
    if (!user) return [];
    
    const commonLinks = [
      { to: `/dashboard/${user.role}`, label: "Overview", icon: Home },
      { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
      { to: "/dashboard/wallet", label: "Wallet & Payments", icon: Wallet },
      { to: "/dashboard/subscriptions", label: "Premium Plans", icon: Crown },
      { to: `/dashboard/${user.role}/settings`, label: "Settings", icon: Settings },
    ];

    switch (user.role) {
      case "driver":
        return [
          ...commonLinks,
          { to: "/dashboard/driver/trips", label: "My Trips", icon: Truck },
          { to: "/dashboard/driver/documents", label: "Documents", icon: FileText },
          { to: "/dashboard/driver/emergency", label: "Emergency", icon: ShieldAlert },
        ];
      case "dhaba":
        return [
          ...commonLinks,
          { to: "/dashboard/dhaba/menu", label: "Menu Management", icon: UtensilsCrossed },
          { to: "/dashboard/dhaba/reviews", label: "Reviews", icon: Star },
        ];
      case "mechanic":
        return [
          ...commonLinks,
          { to: "/dashboard/mechanic/requests", label: "Service Requests", icon: Wrench },
          { to: "/dashboard/mechanic/availability", label: "Availability", icon: MapPin },
        ];
      case "fleet":
        return [
          ...commonLinks,
          { to: "/dashboard/fleet/vehicles", label: "Vehicles", icon: Car },
          { to: "/dashboard/fleet/drivers", label: "Drivers", icon: Users },
          { to: "/dashboard/fleet/reports", label: "Reports", icon: FileText },
        ];
      case "admin":
        return [
          ...commonLinks,
          { to: "/dashboard/admin/users", label: "All Users", icon: Users },
          { to: "/dashboard/admin/approvals", label: "Approvals", icon: FileText },
          { to: "/dashboard/admin/system", label: "System", icon: Settings },
        ];
      default:
        return commonLinks;
    }
  };

  const links = getLinks();
  const roleColor = {
    driver: "text-blue",
    dhaba: "text-orange",
    mechanic: "text-purple",
    fleet: "text-emerald",
    admin: "text-red-500",
  }[user?.role || "driver"];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 flex-col border-r dark:border-foreground/10 border-foreground bg-background/95 backdrop-blur-xl transition-transform lg:static lg:translate-x-0 lg:h-[calc(100vh-4rem)] lg:top-16 lg:bg-background/50 lg:flex",
          isOpen ? "translate-x-0 flex" : "-translate-x-full hidden lg:flex"
        )}
      >
        {/* Mobile close button */}
        <div className="lg:hidden absolute right-4 top-4">
          <button onClick={onClose} className="p-2 text-foreground/60 hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-4 flex-1 mt-12 lg:mt-0">
        <div className="mb-6 px-2">
          <div className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">
            Dashboard
          </div>
          <div className={cn("text-lg font-bold capitalize flex items-center gap-2", roleColor)}>
            {user?.role} Portal
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium dark:text-foreground/60 text-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
              activeProps={{ className: "!text-foreground !bg-foreground/10 shadow-inner" }}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t dark:border-foreground/10 border-foreground">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border dark:border-foreground/10 border-foreground flex items-center justify-center shrink-0">
            <span className="font-semibold text-foreground">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">{user?.email}</p>
            <p className="text-xs dark:text-foreground/40 text-foreground truncate capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log out
        </button>
      </div>
    </aside>
    </>
  );
}
