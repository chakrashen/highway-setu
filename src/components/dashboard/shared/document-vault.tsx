import { useState } from "react";
import { FileText, UploadCloud, CheckCircle2, AlertTriangle, Eye, Download, Search } from "lucide-react";
import { motion } from "motion/react";

export function DocumentVault() {
  const [search, setSearch] = useState("");

  const documents = [
    { id: 1, name: "Driving License", type: "Personal", status: "Verified", expiry: "2028-10-15", verified: true },
    { id: 2, name: "Vehicle RC (MH-12-AB-1234)", type: "Vehicle", status: "Verified", expiry: "2030-05-20", verified: true },
    { id: 3, name: "Commercial Insurance", type: "Insurance", status: "Expiring Soon", expiry: "2024-11-05", verified: true },
    { id: 4, name: "Pollution Certificate (PUC)", type: "Compliance", status: "Expired", expiry: "2024-09-01", verified: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-foreground">Digital Document Vault</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-foreground/40 text-foreground" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-foreground/5 border dark:border-foreground/10 border-foreground text-sm text-foreground focus:ring-1 focus:ring-blue outline-none w-full sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue hover:bg-blue/90 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-blue/20 shrink-0">
            <UploadCloud className="w-4 h-4" />
            Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {documents.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-strong rounded-2xl p-5 border ${
              doc.status === 'Expired' ? 'border-red-500/30 bg-red-500/5' :
              doc.status === 'Expiring Soon' ? 'border-orange/30 bg-orange/5' :
              'dark:border-foreground/5 border-foreground'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl ${
                doc.status === 'Expired' ? 'bg-red-500/20 text-red-500' :
                doc.status === 'Expiring Soon' ? 'bg-orange/20 text-orange' :
                'bg-blue/20 text-blue'
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              {doc.verified ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-red-500" />
              )}
            </div>
            
            <h3 className="font-bold text-foreground text-sm mb-1 truncate">{doc.name}</h3>
            <p className="text-xs dark:text-foreground/50 text-foreground mb-4">{doc.type}</p>
            
            <div className={`text-xs font-semibold px-2.5 py-1 rounded-lg inline-block mb-4 border ${
              doc.status === 'Expired' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
              doc.status === 'Expiring Soon' ? 'bg-orange/10 text-orange border-orange/20' :
              'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            }`}>
              {doc.status}
            </div>

            <div className="flex justify-between items-center text-xs dark:text-foreground/60 text-foreground pt-3 border-t dark:border-foreground/5 border-foreground">
              <span>Exp: {doc.expiry}</span>
              <div className="flex gap-2">
                <button className="hover:text-foreground transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                <button className="hover:text-foreground transition-colors" title="Download"><Download className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
