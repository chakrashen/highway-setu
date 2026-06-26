import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, FileCheck2, ShieldAlert, Activity, UserPlus, Search, MoreHorizontal, Check, X, Layout, Shield, LifeBuoy } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { ContentManager } from "@/components/dashboard/admin/content-manager";
import { SecurityLogs } from "@/components/dashboard/admin/security-logs";
import { HelpCenter } from "@/components/support/help-center";

export const Route = createFileRoute("/dashboard/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'security' | 'support'>('overview');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Admin Control Panel</h1>
          <p className="text-muted-foreground mt-1">Platform overview and user management.</p>
        </div>
        <div className="flex gap-2 p-1 bg-foreground/5 rounded-xl border border-foreground/10 overflow-x-auto hidden-scrollbar max-w-full">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${activeTab === 'overview' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'content' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            <Layout className="w-4 h-4" /> Content
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'security' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            <Shield className="w-4 h-4" /> Security
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'support' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-foreground/60 hover:text-white hover:bg-foreground/5'}`}
          >
            <LifeBuoy className="w-4 h-4" /> Support
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Users", value: "14,205", icon: Users, color: "text-blue", bg: "bg-blue/10" },
              { label: "Pending Approvals", value: "48", icon: FileCheck2, color: "text-orange", bg: "bg-orange/10" },
              { label: "New Registrations", value: "+124", icon: UserPlus, color: "text-emerald-400", bg: "bg-emerald-400/10" },
              { label: "Reported Issues", value: "12", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-500/10" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
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
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pending Approvals */}
            <div className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-foreground/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">Pending KYC Approvals</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-sm text-foreground focus:ring-1 focus:ring-white/20 outline-none w-48"
              />
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: "Rajesh Kumar", role: "Driver", date: "2 hours ago", status: "Pending License Verification" },
              { name: "Sher-e-Punjab Dhaba", role: "Dhaba", date: "5 hours ago", status: "Pending FSSAI Check" },
              { name: "Singh Logistics", role: "Fleet", date: "1 day ago", status: "Pending GST Verification" },
              { name: "Sharma Auto Works", role: "Mechanic", date: "1 day ago", status: "Pending Certification Check" },
            ].map((approval, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 border border-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground/80 shrink-0">
                    {approval.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{approval.name}</div>
                    <div className="flex gap-2 items-center mt-1 text-xs">
                      <span className="px-2 py-0.5 rounded text-foreground/80 bg-foreground/10">{approval.role}</span>
                      <span className="text-foreground/40">{approval.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block text-xs text-orange text-right">
                    {approval.status}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors" title="Approve">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors" title="Reject">
                      <X className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

        {/* System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 border border-foreground/5 space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-foreground">System Status</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/80">API Health</span>
                <span className="text-emerald-400 font-medium">99.9%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '99%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/80">Database Load</span>
                <span className="text-blue font-medium">42%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
                <div className="h-full bg-blue rounded-full" style={{ width: '42%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/80">Storage Usage</span>
                <span className="text-orange font-medium">78%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
                <div className="h-full bg-orange rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 mt-6">
            <h3 className="text-sm font-semibold text-red-500 mb-1 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Action Required
            </h3>
            <p className="text-xs text-red-500/70">
              High volume of unverified mechanic registrations detected in the last 24 hours. Consider manual review.
            </p>
          </div>
        </motion.div>
      </div>
        </motion.div>
      )}

      {activeTab === 'content' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ContentManager />
        </motion.div>
      )}

      {activeTab === 'security' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SecurityLogs />
        </motion.div>
      )}

      {activeTab === 'support' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <HelpCenter />
        </motion.div>
      )}
    </div>
  );
}
