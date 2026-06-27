import { useState } from "react";
import { Wallet as WalletIcon, IndianRupee, ArrowUpRight, ArrowDownLeft, FileText, Download } from "lucide-react";
import { motion } from "motion/react";

export function Wallet() {
  const [balance] = useState(12450.50);
  const transactions = [
    { id: "TXN123", type: "credit", amount: 5000, description: "Wallet Top-up", date: "Today, 10:30 AM", status: "Success" },
    { id: "TXN124", type: "debit", amount: 320, description: "Toll Payment - Khalapur", date: "Yesterday, 4:15 PM", status: "Success" },
    { id: "TXN125", type: "debit", amount: 1500, description: "Sher-e-Punjab Dhaba", date: "23 Jun, 8:00 PM", status: "Success" },
    { id: "TXN126", type: "debit", amount: 450, description: "Sharma Auto Works", date: "21 Jun, 11:20 AM", status: "Success" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-3xl p-6 border dark:border-foreground/10 border-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue/20 rounded-full blur-[50px] -mr-16 -mt-16" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center">
              <WalletIcon className="w-5 h-5 text-blue" />
            </div>
            <h3 className="dark:text-foreground/80 text-foreground font-medium">Setu Wallet</h3>
          </div>
          
          <div className="relative z-10">
            <p className="dark:text-foreground/60 text-foreground text-sm mb-1">Available Balance</p>
            <div className="flex items-baseline gap-1">
              <IndianRupee className="w-6 h-6 text-foreground" />
              <h2 className="text-4xl font-bold text-foreground">{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
            </div>
          </div>
          
          <div className="mt-8 flex gap-3 relative z-10">
            <button className="flex-1 bg-blue hover:bg-blue/90 text-white py-3 rounded-xl font-medium transition-colors shadow-lg shadow-blue/20 flex items-center justify-center gap-2">
              <ArrowUpRight className="w-4 h-4" /> Add Money
            </button>
            <button className="flex-1 bg-foreground/5 border dark:border-foreground/10 border-foreground hover:bg-foreground/10 text-foreground py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              <ArrowDownLeft className="w-4 h-4" /> Withdraw
            </button>
          </div>
        </motion.div>

        <div className="glass-strong rounded-2xl p-6 border dark:border-foreground/5 border-foreground">
          <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border dark:border-foreground/5 border-foreground transition-colors flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange"><IndianRupee className="w-5 h-5" /></div>
              <span className="text-xs font-medium dark:text-foreground/80 text-foreground">Pay Service</span>
            </button>
            <button className="p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border dark:border-foreground/5 border-foreground transition-colors flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400"><FileText className="w-5 h-5" /></div>
              <span className="text-xs font-medium dark:text-foreground/80 text-foreground">Invoices</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 glass-strong rounded-3xl border dark:border-foreground/10 border-foreground p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-foreground">Recent Transactions</h3>
          <button className="text-sm font-medium text-blue hover:text-blue/80 transition-colors">View All</button>
        </div>

        <div className="flex-1 overflow-y-auto hidden-scrollbar">
          <div className="divide-y divide-white/5">
            {transactions.map((txn) => (
              <div key={txn.id} className="py-4 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    txn.type === 'credit' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-500'
                  }`}>
                    {txn.type === 'credit' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{txn.description}</h4>
                    <p className="text-xs dark:text-foreground/50 text-foreground mt-0.5">{txn.date} • {txn.id}</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className={`font-bold ${txn.type === 'credit' ? 'text-emerald-400' : 'text-foreground'}`}>
                      {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] dark:text-foreground/40 text-foreground mt-0.5 uppercase tracking-wider">{txn.status}</div>
                  </div>
                  <button className="p-2 opacity-0 group-hover:opacity-100 bg-foreground/5 hover:bg-foreground/10 rounded-lg dark:text-foreground/60 text-foreground transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
