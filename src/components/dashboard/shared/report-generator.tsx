import { FileDown, FileText, Download, Calendar, Filter } from "lucide-react";
import { useState } from "react";

export function ReportGenerator() {
  const [reportType, setReportType] = useState("monthly");
  const [format, setFormat] = useState("pdf");

  return (
    <div className="glass-strong rounded-3xl p-6 border dark:border-foreground/10 border-foreground">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
          <FileDown className="w-5 h-5 text-blue" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Generate Reports</h3>
          <p className="text-xs dark:text-foreground/50 text-foreground">Download your data securely</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs font-medium dark:text-foreground/60 text-foreground mb-2 block">Report Period</label>
          <div className="grid grid-cols-2 gap-2">
            {['daily', 'weekly', 'monthly', 'yearly'].map((type) => (
              <button
                key={type}
                onClick={() => setReportType(type)}
                className={`py-2 rounded-xl text-sm font-medium transition-colors border ${
                  reportType === type 
                    ? 'bg-blue border-blue text-white shadow-lg shadow-blue/20' 
                    : 'bg-foreground/5 dark:border-foreground/10 border-foreground dark:text-foreground/70 text-foreground hover:bg-foreground/10'
                }`}
              >
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium dark:text-foreground/60 text-foreground mb-2 block">Format</label>
          <div className="flex gap-2">
            {['pdf', 'excel', 'csv'].map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-colors border uppercase tracking-wider ${
                  format === f 
                    ? 'bg-foreground/20 dark:border-foreground/30 border-foreground text-foreground' 
                    : 'bg-foreground/5 dark:border-foreground/10 border-foreground dark:text-foreground/50 text-foreground hover:bg-foreground/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border dark:border-foreground/10 border-foreground dark:text-foreground/70 text-foreground hover:text-foreground hover:bg-foreground/5 transition-colors text-sm font-medium">
          <Filter className="w-4 h-4" />
          Advanced Filters
        </button>
      </div>

      <button className="w-full bg-gradient-to-r from-blue to-purple text-white py-3 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Generate & Download
      </button>
    </div>
  );
}
