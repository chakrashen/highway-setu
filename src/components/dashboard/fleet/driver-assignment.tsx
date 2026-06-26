import { useState } from "react";
import { Users, Search, MapPin, Truck, CheckCircle2, Navigation } from "lucide-react";

export function DriverAssignment() {
  const [search, setSearch] = useState("");

  const assignments = [
    { id: 1, driver: "Rajesh Kumar", status: "On Trip", vehicle: "MH-12-AB-1234", route: "Mumbai -> Pune", eta: "2h 15m remaining" },
    { id: 2, driver: "Amit Singh", status: "Available", vehicle: "Unassigned", route: "-", eta: "-" },
    { id: 3, driver: "Vikram Reddy", status: "Resting", vehicle: "KA-01-EF-9012", route: "Bengaluru -> Hubli", eta: "Paused" },
    { id: 4, driver: "Suresh Patel", status: "On Trip", vehicle: "GJ-05-GH-3456", route: "Surat -> Ahmedabad", eta: "45m remaining" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input 
            type="text" 
            placeholder="Search drivers..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-xl bg-foreground/5 border border-foreground/10 text-sm text-foreground focus:ring-1 focus:ring-emerald-500 outline-none w-full sm:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((a) => (
          <div key={a.id} className="glass-strong p-5 rounded-2xl border border-foreground/5">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center font-bold text-emerald-400">
                  {a.driver.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">{a.driver}</h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    a.status === 'Available' ? 'bg-blue/10 text-blue border border-blue/20' :
                    a.status === 'On Trip' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    'bg-orange/10 text-orange border border-orange/20'
                  }`}>
                    {a.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-4 pt-4 border-t border-foreground/5">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-4 h-4 text-foreground/40 shrink-0" />
                <span className={a.vehicle === 'Unassigned' ? 'text-foreground/40 italic' : 'text-foreground/80 font-medium'}>
                  {a.vehicle}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-foreground/40 shrink-0" />
                <span className="text-foreground/70">{a.route}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Navigation className="w-4 h-4 text-foreground/40 shrink-0" />
                <span className="text-emerald-400/80">{a.eta}</span>
              </div>
            </div>

            <div className="mt-6">
              {a.status === 'Available' ? (
                <button className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-colors shadow-lg shadow-emerald-500/20 flex justify-center items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Assign Trip
                </button>
              ) : (
                <button className="w-full py-2.5 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 text-foreground font-medium text-sm transition-colors">
                  View Live Tracking
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
