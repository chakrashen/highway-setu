import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { UtensilsCrossed, Users, Star, TrendingUp, IndianRupee, MapPin } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { ReviewCard } from "@/components/ui/review-card";

export const Route = createFileRoute("/dashboard/dhaba")({
  component: DhabaDashboard,
});

function DhabaDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Dhaba Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your business and view customer analytics.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-foreground/10 hover:bg-foreground/20 px-4 py-2 rounded-xl font-medium transition-colors border border-foreground/10">
            Edit Menu
          </button>
          <button className="flex items-center gap-2 bg-orange hover:bg-orange/90 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-orange/20">
            <UtensilsCrossed className="w-4 h-4" />
            New Promotion
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Revenue", value: "₹12,450", icon: IndianRupee, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Total Customers", value: "145", icon: Users, color: "text-blue", bg: "bg-blue/10" },
          { label: "Average Rating", value: "4.6", icon: Star, color: "text-orange", bg: "bg-orange/10" },
          { label: "Growth", value: "+12.5%", icon: TrendingUp, color: "text-purple", bg: "bg-purple/10" },
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
        {/* Recent Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-foreground/5"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">Recent Reviews</h2>
            <button className="text-sm text-orange hover:text-orange/80 font-medium">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { name: "Rahul Singh", rating: 5, time: "2 hours ago", comment: "Excellent food and very clean washrooms. Safe parking for trucks.", votes: 12 },
              { name: "Vikram Reddy", rating: 4, time: "5 hours ago", comment: "Good place to rest. Charpai area is nice. Food is slightly spicy.", votes: 4 },
              { name: "Amit Patel", rating: 5, time: "1 day ago", comment: "Best dal makhani on NH-48. Always stop here during my trips.", votes: 24 },
            ].map((review, i) => (
              <ReviewCard 
                key={i}
                name={review.name}
                rating={review.rating}
                time={review.time}
                comment={review.comment}
                helpfulVotes={review.votes}
              />
            ))}
          </div>
        </motion.div>

        {/* Business Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 border border-foreground/5 space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-foreground">Business Status</h2>
          </div>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <UtensilsCrossed className="w-5 h-5 text-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-emerald-400">Open & Accepting Customers</h3>
            <p className="text-sm text-emerald-400/70 mt-1">Visible to drivers on the map</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-foreground/5">
              <span className="text-sm text-foreground/70">Parking Available</span>
              <span className="text-sm font-semibold text-emerald-400">~12 Slots</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-foreground/5">
              <span className="text-sm text-foreground/70">Current Wait Time</span>
              <span className="text-sm font-semibold text-orange">15 mins</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl border border-foreground/10 text-sm font-medium hover:bg-foreground/5 transition-colors text-foreground">
            Update Status
          </button>
        </motion.div>
      </div>
    </div>
  );
}
