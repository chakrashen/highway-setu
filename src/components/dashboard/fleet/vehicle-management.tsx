import { useState } from "react";
import { Truck, Search, Plus, MoreHorizontal, Settings, FileText, AlertTriangle } from "lucide-react";

export function VehicleManagement() {
  const [search, setSearch] = useState("");

  const vehicles = [
    { id: "MH-12-AB-1234", type: "Heavy Commercial", make: "Tata Signa 4225.T", status: "Active", rcStatus: "Valid", insStatus: "Expires in 30 Days", nextService: "12,000 km" },
    { id: "MH-14-CD-5678", type: "Light Commercial", make: "Ashok Leyland Dost", status: "Maintenance", rcStatus: "Valid", insStatus: "Valid", nextService: "Due Now" },
    { id: "KA-01-EF-9012", type: "Tanker", make: "BharatBenz 2823C", status: "Active", rcStatus: "Expiring Soon", insStatus: "Valid", nextService: "5,000 km" },
    { id: "GJ-05-GH-3456", type: "Trailer", make: "Volvo FH16", status: "Active", rcStatus: "Valid", insStatus: "Valid", nextService: "22,000 km" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-foreground/40 text-foreground" />
          <input 
            type="text" 
            placeholder="Search vehicles..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-xl bg-foreground/5 border dark:border-foreground/10 border-foreground text-sm text-foreground focus:ring-1 focus:ring-emerald-500 outline-none w-full sm:w-64"
          />
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20">
          <Plus className="w-4 h-4" />
          Add Vehicle
        </button>
      </div>

      <div className="glass-strong rounded-2xl border dark:border-foreground/5 border-foreground overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b dark:border-foreground/10 border-foreground bg-foreground/5">
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground">Vehicle</th>
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground">Type & Make</th>
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground">Status</th>
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground">Documents</th>
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground">Next Service</th>
                <th className="p-4 text-sm font-medium dark:text-foreground/60 text-foreground"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {vehicles.map((v) => (
                <tr key={v.id} className="hover:bg-foreground/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
                        <Truck className="w-5 h-5 dark:text-foreground/80 text-foreground" />
                      </div>
                      <span className="font-bold text-foreground">{v.id}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-foreground text-sm font-medium">{v.make}</div>
                    <div className="dark:text-foreground/50 text-foreground text-xs">{v.type}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      v.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-orange/10 text-orange border-orange/20'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="p-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <FileText className="w-3 h-3 dark:text-foreground/40 text-foreground" />
                      <span className={v.rcStatus.includes('Expiring') ? 'text-orange' : 'dark:text-foreground/70 text-foreground'}>RC: {v.rcStatus}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <FileText className="w-3 h-3 dark:text-foreground/40 text-foreground" />
                      <span className={v.insStatus.includes('Expires') ? 'text-orange' : 'dark:text-foreground/70 text-foreground'}>Ins: {v.insStatus}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className={`flex items-center gap-2 text-sm ${v.nextService === 'Due Now' ? 'text-red-400 font-semibold' : 'dark:text-foreground/80 text-foreground'}`}>
                      {v.nextService === 'Due Now' && <AlertTriangle className="w-4 h-4" />}
                      {v.nextService}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 hover:bg-foreground/10 rounded-lg transition-colors dark:text-foreground/60 text-foreground hover:text-foreground">
                      <Settings className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
