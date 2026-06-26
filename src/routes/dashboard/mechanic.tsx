import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Wrench, MapPin, Star, AlertCircle, PhoneCall, CheckCircle2, Navigation } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/dashboard/mechanic")({
  component: MechanicDashboard,
});

function MechanicDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Mechanic Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage service requests and your workshop status.</p>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-foreground/60 mr-2">Availability</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-foreground/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"></div>
          </label>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Requests", value: "2", icon: AlertCircle, color: "text-red-400", bg: "bg-red-400/10" },
          { label: "Completed Today", value: "5", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Service Radius", value: "30 km", icon: MapPin, color: "text-blue", bg: "bg-blue/10" },
          { label: "Customer Rating", value: "4.9", icon: Star, color: "text-orange", bg: "bg-orange/10" },
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
        {/* Incoming Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            Incoming Requests <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 text-xs">New</span>
          </h2>
          
          <div className="glass-strong rounded-2xl p-6 border border-foreground/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Engine Breakdown
                </h3>
                <p className="text-sm text-foreground/60 mt-1">Truck Model: Tata Signa 4225.T</p>
              </div>
              <span className="text-sm text-red-400 font-medium">Just now</span>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-foreground/5 border border-foreground/5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-foreground/40" />
                <span className="text-sm text-foreground/80">12 km away (NH-48)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-foreground/40" />
                <span className="text-sm text-foreground/80">+91 98765 43210</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-purple to-pink-500 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg shadow-purple/20 transition-all flex justify-center items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Accept Request
              </button>
              <button className="px-6 py-3 rounded-xl border border-foreground/10 hover:bg-foreground/5 text-foreground font-medium transition-colors">
                Decline
              </button>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-foreground/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-blue" />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue" />
                  Tyre Puncture (2 Tyres)
                </h3>
                <p className="text-sm text-foreground/60 mt-1">Truck Model: Ashok Leyland 3520</p>
              </div>
              <span className="text-sm text-foreground/40 font-medium">10 mins ago</span>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-foreground/10 hover:bg-foreground/20 text-foreground py-3 rounded-xl font-semibold transition-all flex justify-center items-center gap-2">
                <Navigation className="w-5 h-5" />
                Navigate to Location (5 km)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Workshop Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 border border-foreground/5 space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-foreground">My Profile</h2>
            <button className="text-sm text-purple hover:text-purple/80 font-medium">Edit</button>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Wrench className="w-7 h-7 text-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Sharma Auto Works</h3>
              <p className="text-sm text-foreground/60">Verified Mechanic</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground/80 border-b border-foreground/10 pb-2">Services Provided</h4>
            <div className="flex flex-wrap gap-2">
              {["Engine Repair", "Tyre Replacement", "Electrical", "Towing"].map((service) => (
                <span key={service} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-foreground/70">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple/10 border border-purple/20 flex items-start gap-3 mt-6">
            <Star className="w-5 h-5 text-purple shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-purple mb-1">Top Rated in Area</div>
              <div className="text-xs text-purple/70">You are among the top 10% mechanics in your service radius based on driver ratings.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
