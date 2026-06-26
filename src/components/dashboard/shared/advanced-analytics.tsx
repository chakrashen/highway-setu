import { BarChart3, TrendingUp, TrendingDown, Calendar } from "lucide-react";

export function AdvancedAnalytics() {
  const data = [
    { label: "Mon", value: 65, max: 100 },
    { label: "Tue", value: 45, max: 100 },
    { label: "Wed", value: 85, max: 100 },
    { label: "Thu", value: 55, max: 100 },
    { label: "Fri", value: 95, max: 100 },
    { label: "Sat", value: 75, max: 100 },
    { label: "Sun", value: 35, max: 100 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-strong rounded-3xl p-6 border border-foreground/10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Weekly Performance</h3>
            <p className="text-sm text-foreground/50">Activity trends over the last 7 days</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
            <TrendingUp className="w-4 h-4" />
            +12.5%
          </div>
        </div>

        <div className="h-48 flex items-end justify-between gap-2 mt-4 relative pt-6 border-b border-foreground/10 pb-2">
          {/* Y-axis grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
            <div className="border-t border-foreground/5 w-full border-dashed" />
            <div className="border-t border-foreground/5 w-full border-dashed" />
            <div className="border-t border-foreground/5 w-full border-dashed" />
          </div>
          
          {data.map((d, i) => (
            <div key={i} className="flex flex-col items-center flex-1 z-10 group">
              <div className="w-full max-w-[32px] sm:max-w-[48px] h-full flex items-end relative">
                <div 
                  className="w-full bg-gradient-to-t from-blue/40 to-blue hover:from-blue hover:to-blue-400 transition-all rounded-t-lg relative group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  style={{ height: `${(d.value / d.max) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {d.value}
                  </div>
                </div>
              </div>
              <span className="text-xs text-foreground/40 mt-3 font-medium uppercase tracking-wider">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-strong rounded-3xl p-6 border border-foreground/10">
        <h3 className="text-xl font-bold text-foreground mb-6">Key Metrics</h3>
        <div className="space-y-4">
          <div className="p-4 bg-foreground/5 rounded-2xl border border-foreground/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground/60">Total Revenue</span>
              <BarChart3 className="w-4 h-4 text-blue" />
            </div>
            <div className="text-2xl font-bold text-foreground">₹4,25,000</div>
            <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 8% vs last month</div>
          </div>
          <div className="p-4 bg-foreground/5 rounded-2xl border border-foreground/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground/60">Operational Costs</span>
              <BarChart3 className="w-4 h-4 text-orange" />
            </div>
            <div className="text-2xl font-bold text-foreground">₹1,12,450</div>
            <div className="text-xs text-red-400 mt-1 flex items-center gap-1"><TrendingDown className="w-3 h-3" /> 3% vs last month</div>
          </div>
          <div className="p-4 bg-foreground/5 rounded-2xl border border-foreground/5 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-foreground/60 mb-1">Custom Date Range</div>
              <div className="text-xs text-foreground/40 flex items-center gap-1"><Calendar className="w-3 h-3" /> 01 Jun - 26 Jun</div>
            </div>
            <button className="text-sm text-blue hover:text-blue/80 font-medium transition-colors">Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}
