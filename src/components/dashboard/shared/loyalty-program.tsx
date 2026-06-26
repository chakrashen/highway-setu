import { Trophy, Star, Gift, ChevronRight, Target, Share2 } from "lucide-react";

export function LoyaltyProgram() {
  const level = 4;
  const currentPoints = 1250;
  const nextLevelPoints = 2000;
  const progress = (currentPoints / nextLevelPoints) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass-strong rounded-3xl p-6 md:p-8 border border-foreground/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -mr-20 -mt-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl font-bold text-foreground">Highway Rewards</h2>
            </div>
            <p className="text-foreground/60">Earn points on every trip and unlock premium benefits.</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-foreground/50 mb-1">Current Balance</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-yellow-500">{currentPoints}</span>
              <span className="text-foreground/40">pts</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Level {level}</span>
              <div className="font-semibold text-foreground">Gold Member</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Level {level + 1}</span>
              <div className="font-semibold text-foreground/80">{nextLevelPoints - currentPoints} pts to go</div>
            </div>
          </div>
          <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-foreground/20 skew-x-12 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
          {[
            { label: "Profile Setup", pts: "+100", done: true },
            { label: "First Trip", pts: "+250", done: true },
            { label: "5 Reviews", pts: "+50", done: false },
            { label: "Invite Friend", pts: "+500", done: false },
          ].map((task, i) => (
            <div key={i} className={`p-4 rounded-2xl border ${task.done ? 'bg-foreground/5 border-foreground/10 opacity-60' : 'bg-foreground/10 border-foreground/20'}`}>
              <div className="text-[10px] font-bold text-yellow-500 mb-1">{task.pts} pts</div>
              <div className="text-sm font-medium text-foreground mb-2">{task.label}</div>
              {task.done ? (
                <div className="text-xs text-emerald-400 flex items-center gap-1"><Star className="w-3 h-3 fill-emerald-400" /> Completed</div>
              ) : (
                <div className="text-xs text-foreground/40 flex items-center gap-1"><Target className="w-3 h-3" /> In Progress</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="glass-strong rounded-3xl p-6 border border-foreground/10 bg-gradient-to-br from-blue/10 to-purple/5">
          <div className="w-12 h-12 rounded-full bg-blue/20 flex items-center justify-center text-blue mb-4">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Refer & Earn</h3>
          <p className="text-sm text-foreground/60 mb-6">Invite your friends to Highway Setu and earn 500 points when they complete their first trip.</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-background border border-foreground/10 rounded-xl px-4 py-2 flex items-center justify-center font-mono text-foreground tracking-widest text-sm">
              RAJESH500
            </div>
            <button className="bg-blue hover:bg-blue/90 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
              Copy
            </button>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-6 border border-foreground/10">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple" />
            Rewards Catalog
          </h3>
          <div className="space-y-3">
            {[
              { title: "Free Premium Month", cost: 1500 },
              { title: "₹500 Fuel Voucher", cost: 2000 },
              { title: "Priority Support Access", cost: 500 },
            ].map((reward, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 transition-colors cursor-pointer group">
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-blue transition-colors">{reward.title}</div>
                  <div className="text-xs text-yellow-500 font-bold">{reward.cost} pts</div>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
