import { useState, useEffect } from "react";
import { Search, MapPin, Wrench, User, FileText, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "@tanstack/react-router";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = [
    { type: "Dhaba", name: "Sher-e-Punjab", icon: MapPin, route: "/map" },
    { type: "Mechanic", name: "Sharma Auto Works", icon: Wrench, route: "/map" },
    { type: "Driver", name: "Rajesh Kumar", icon: User, route: "/dashboard/fleet" },
    { type: "Document", name: "RC Book (MH-12-AB-1234)", icon: FileText, route: "/dashboard/driver" },
  ];

  const handleSelect = (route: string) => {
    setIsOpen(false);
    navigate({ to: route });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[10000] p-4"
          >
            <div className="glass-strong border border-foreground/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
              <div className="p-4 border-b border-foreground/10 flex items-center gap-3">
                <Search className="w-5 h-5 text-foreground/50" />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search across Highway Setu..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-lg text-foreground placeholder:text-foreground/40 focus:outline-none"
                />
                <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 hidden-scrollbar">
                {query ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-foreground/40 uppercase tracking-wider">
                      Search Results
                    </div>
                    {results.filter(r => r.name.toLowerCase().includes(query.toLowerCase())).map((result, i) => (
                      <button 
                        key={i}
                        onClick={() => handleSelect(result.route)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-foreground/10 transition-colors group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <result.icon className="w-4 h-4 text-blue" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{result.name}</div>
                            <div className="text-xs text-foreground/50">{result.type}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/60 transition-colors" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-foreground/40">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Start typing to search for dhabas, mechanics, drivers, or documents...</p>
                  </div>
                )}
              </div>
              <div className="p-3 border-t border-foreground/10 bg-black/20 text-xs text-foreground/40 flex items-center justify-between">
                <div>Press <kbd className="px-1.5 py-0.5 rounded bg-foreground/10 font-mono">ESC</kbd> to close</div>
                <div>Search by <span className="font-semibold text-foreground/60">Highway Setu AI</span></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
