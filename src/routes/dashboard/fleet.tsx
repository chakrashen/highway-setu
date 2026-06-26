import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Building2, Truck, Users, AlertTriangle, TrendingUp, IndianRupee, Map, Settings, MoreVertical } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { VehicleManagement } from "@/components/dashboard/fleet/vehicle-management";
import { DriverAssignment } from "@/components/dashboard/fleet/driver-assignment";
import { AdvancedAnalytics } from "@/components/dashboard/shared/advanced-analytics";
import { ReportGenerator } from "@/components/dashboard/shared/report-generator";

export const Route = createFileRoute("/dashboard/fleet")({
  component: FleetDashboard,
});

function FleetDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'vehicles' | 'drivers' | 'reports'>('overview');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Fleet Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your vehicles, drivers, and operations.</p>
        </div>
        <div className="flex gap-2 p-1 bg-foreground/5 rounded-xl border border-foreground/10">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'overview' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            Live Tracking
          </button>
          <button 
            onClick={() => setActiveTab('vehicles')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'vehicles' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            Vehicles
          </button>
          <button 
            onClick={() => setActiveTab('drivers')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'drivers' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            Drivers
          </button>
          <button 
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'reports' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            Reports
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Vehicles", value: "42/50", icon: Truck, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Total Drivers", value: "58", icon: Users, color: "text-blue", bg: "bg-blue/10" },
          { label: "Active Alerts", value: "3", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10" },
          { label: "Fleet Efficiency", value: "92%", icon: TrendingUp, color: "text-purple", bg: "bg-purple/10" },
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

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Fleet Status */}
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-foreground/5"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">Live Vehicle Status</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium">View All Vehicles</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="pb-3 text-sm font-medium text-foreground/60">Vehicle</th>
                  <th className="pb-3 text-sm font-medium text-foreground/60">Driver</th>
                  <th className="pb-3 text-sm font-medium text-foreground/60">Status</th>
                  <th className="pb-3 text-sm font-medium text-foreground/60">Location</th>
                  <th className="pb-3 text-sm font-medium text-foreground/60"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { id: "MH-12-AB-1234", driver: "Rajesh Kumar", status: "In Transit", location: "NH-48, near Pune", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
                  { id: "MH-14-CD-5678", driver: "Amit Singh", status: "Resting", location: "Sher-e-Punjab Dhaba", statusColor: "text-orange bg-orange/10 border-orange/20" },
                  { id: "KA-01-EF-9012", driver: "Vikram Reddy", status: "Delayed", location: "Traffic near Hubli", statusColor: "text-red-400 bg-red-400/10 border-red-400/20" },
                  { id: "GJ-05-GH-3456", driver: "Suresh Patel", status: "Unloading", location: "Surat Port", statusColor: "text-blue bg-blue/10 border-blue/20" },
                ].map((vehicle, i) => (
                  <tr key={i} className="hover:bg-foreground/5 transition-colors">
                    <td className="py-4 font-medium text-foreground">{vehicle.id}</td>
                    <td className="py-4 text-foreground/80">{vehicle.driver}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${vehicle.statusColor}`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="py-4 text-foreground/60 text-sm truncate max-w-[150px]">{vehicle.location}</td>
                    <td className="py-4 text-right">
                      <button className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/60 hover:text-foreground">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Operational Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 border border-foreground/5 space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-foreground">Alerts & Maintenance</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <div className="font-semibold text-red-100 text-sm mb-1">Over-speeding Alert</div>
                <div className="text-xs text-red-200/70">MH-14-CD-5678 exceeded 80 km/h on NH-4.</div>
                <button className="text-xs text-red-400 font-medium mt-2 hover:underline">Contact Driver</button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange/10 border border-orange/20 flex gap-3">
              <Settings className="w-5 h-5 text-orange shrink-0" />
              <div>
                <div className="font-semibold text-orange-100 text-sm mb-1">Maintenance Due</div>
                <div className="text-xs text-orange-200/70">KA-01-EF-9012 requires engine oil change in 500 km.</div>
                <button className="text-xs text-orange font-medium mt-2 hover:underline">Schedule Service</button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5 flex gap-3">
              <FileText className="w-5 h-5 text-foreground/40 shrink-0" />
              <div>
                <div className="font-semibold text-foreground/80 text-sm mb-1">Document Expiry</div>
                <div className="text-xs text-foreground/50">Pollution certificate for GJ-05-GH-3456 expires in 5 days.</div>
              </div>
            </div>
            </div>
          </motion.div>
          </div>
        </>
      )}

      {activeTab === 'vehicles' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <VehicleManagement />
        </motion.div>
      )}

      {activeTab === 'drivers' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <DriverAssignment />
        </motion.div>
      )}

      {activeTab === 'reports' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <AdvancedAnalytics />
          <ReportGenerator />
        </motion.div>
      )}
    </div>
  );
}
