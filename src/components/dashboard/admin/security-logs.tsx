import { Shield, ShieldAlert, MonitorSmartphone, Globe, AlertTriangle } from "lucide-react";

export function SecurityLogs() {
  const logs = [
    { id: 1, action: "Suspicious Login Attempt", user: "driver_92@gmail.com", ip: "192.168.1.45", location: "Mumbai, IN", time: "10 mins ago", status: "blocked" },
    { id: 2, action: "Password Changed", user: "dhaba_owner@gmail.com", ip: "112.196.25.12", location: "Pune, IN", time: "2 hours ago", status: "success" },
    { id: 3, action: "New Device Login", user: "fleet_mgr@company.com", ip: "203.115.10.1", location: "Delhi, IN", time: "Yesterday", status: "warning" },
  ];

  return (
    <div className="glass-strong rounded-3xl p-6 border dark:border-foreground/10 border-foreground">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Security & Audit Logs</h3>
            <p className="text-sm dark:text-foreground/50 text-foreground">Monitor platform security and authentication events.</p>
          </div>
        </div>
        <button className="text-sm font-medium text-blue hover:text-blue/80 transition-colors">Export Logs</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-foreground/5 rounded-2xl p-4 border dark:border-foreground/5 border-foreground">
          <div className="dark:text-foreground/50 text-foreground text-sm font-medium mb-1">Active Sessions</div>
          <div className="text-2xl font-bold text-foreground flex items-center gap-2">
            1,245 <MonitorSmartphone className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
        <div className="bg-foreground/5 rounded-2xl p-4 border dark:border-foreground/5 border-foreground">
          <div className="dark:text-foreground/50 text-foreground text-sm font-medium mb-1">Blocked IPs</div>
          <div className="text-2xl font-bold text-foreground flex items-center gap-2">
            18 <ShieldAlert className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <div className="bg-foreground/5 rounded-2xl p-4 border dark:border-foreground/5 border-foreground">
          <div className="dark:text-foreground/50 text-foreground text-sm font-medium mb-1">2FA Adoptions</div>
          <div className="text-2xl font-bold text-foreground">
            68%
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="p-4 bg-background/50 border dark:border-foreground/5 border-foreground rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                log.status === 'blocked' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                log.status === 'warning' ? 'bg-orange/10 border-orange/20 text-orange' :
                'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                {log.status === 'blocked' ? <ShieldAlert className="w-4 h-4" /> : 
                 log.status === 'warning' ? <AlertTriangle className="w-4 h-4" /> : 
                 <Shield className="w-4 h-4" />}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{log.action}</div>
                <div className="text-xs dark:text-foreground/50 text-foreground mt-0.5">{log.user}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs dark:text-foreground/40 text-foreground">
              <div className="flex items-center gap-1"><Globe className="w-3 h-3" /> {log.ip} ({log.location})</div>
              <div>{log.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
