import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Truck, MapPin, Clock, ShieldAlert, Star, IndianRupee, Navigation, PhoneCall, UtensilsCrossed, Wrench } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { TripManager } from "@/components/dashboard/driver/trip-manager";
import { DocumentVault } from "@/components/dashboard/shared/document-vault";

export const Route = createFileRoute("/dashboard/driver")({
  component: DriverDashboard,
});

function DriverDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Driver Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, track your trips and earnings.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 px-4 py-2 rounded-xl font-medium transition-colors border border-red-500/20">
            <ShieldAlert className="w-4 h-4" />
            SOS Emergency
          </button>
          <button className="flex items-center gap-2 bg-blue text-white hover:bg-blue/90 px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-blue/20">
            <Navigation className="w-4 h-4" />
            Start Trip
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Earnings", value: "₹4,250", icon: IndianRupee, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Active Trip Time", value: "4h 12m", icon: Clock, color: "text-blue", bg: "bg-blue/10" },
          { label: "Distance Covered", value: "245 km", icon: MapPin, color: "text-purple", bg: "bg-purple/10" },
          { label: "Driver Rating", value: "4.8", icon: Star, color: "text-orange", bg: "bg-orange/10" },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-strong rounded-2xl p-5 border border-foreground/5"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Trip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <TripManager />
        </motion.div>

        {/* Quick Actions / Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 border border-foreground/5 space-y-6"
        >
          <h2 className="text-xl font-bold text-foreground">Nearby Services</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange/20 text-orange rounded-lg">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sher-e-Punjab Dhaba</div>
                  <div className="text-xs text-foreground/50">12 km ahead • 4.5 Stars</div>
                </div>
              </div>
              <PhoneCall className="w-4 h-4 text-foreground/40" />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple/20 text-purple rounded-lg">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sharma Auto Works</div>
                  <div className="text-xs text-foreground/50">15 km ahead • 24/7 Open</div>
                </div>
              </div>
              <PhoneCall className="w-4 h-4 text-foreground/40" />
            </div>
          </div>

          <button className="w-full py-3 rounded-xl border border-foreground/10 text-sm font-medium hover:bg-foreground/5 transition-colors text-foreground">
            View All on Map
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pt-6"
      >
        <DocumentVault />
      </motion.div>
    </div>
  );
}
