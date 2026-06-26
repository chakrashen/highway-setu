import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Filter, Navigation, ShieldAlert, X, 
  MapPin, Clock, IndianRupee, ThermometerSun, CloudRain,
  UtensilsCrossed, Wrench, Fuel, Car, Truck
} from "lucide-react";
import { POICategory } from "@/lib/mock-data/pois";

interface MapSidebarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: POICategory[]) => void;
  onRouteStart: (start: string, end: string) => void;
  onSOSClick: () => void;
}

export function MapSidebar({ onSearch, onFilterChange, onRouteStart, onSOSClick }: MapSidebarProps) {
  const [activeTab, setActiveTab] = useState<'search' | 'route' | 'weather'>('search');
  const [activeFilters, setActiveFilters] = useState<POICategory[]>([]);
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");

  const toggleFilter = (category: POICategory) => {
    const newFilters = activeFilters.includes(category)
      ? activeFilters.filter(c => c !== category)
      : [...activeFilters, category];
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories: { id: POICategory; label: string; icon: React.ElementType }[] = [
    { id: 'dhaba', label: 'Dhabas', icon: UtensilsCrossed },
    { id: 'mechanic', label: 'Mechanics', icon: Wrench },
    { id: 'fuel', label: 'Fuel & EV', icon: Fuel },
    { id: 'toll', label: 'Tolls', icon: IndianRupee },
    { id: 'hospital', label: 'Hospitals', icon: MapPin }, // using generic map pin for now
    { id: 'police', label: 'Police', icon: ShieldAlert },
  ];

  return (
    <div className="w-full md:w-96 bg-background/90 backdrop-blur-xl border-r border-foreground/10 h-[calc(100vh-4rem)] flex flex-col z-[1000] shadow-2xl shrink-0 overflow-y-auto hidden-scrollbar absolute md:relative top-0 left-0">
      <div className="p-4 border-b border-foreground/10 flex gap-2">
        <button 
          onClick={() => setActiveTab('search')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'search' ? 'bg-foreground/10 text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
        >
          Explore
        </button>
        <button 
          onClick={() => setActiveTab('route')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'route' ? 'bg-blue/20 text-blue' : 'text-foreground/60 hover:text-white'}`}
        >
          Route Planner
        </button>
        <button 
          onClick={() => setActiveTab('weather')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'weather' ? 'bg-orange/20 text-orange' : 'text-foreground/60 hover:text-white'}`}
        >
          Weather
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <AnimatePresence mode="wait">
          {activeTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input 
                  type="text" 
                  placeholder="Search dhabas, mechanics, places..." 
                  onChange={(e) => onSearch(e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-blue/50 outline-none"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Quick Filters
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => {
                    const isActive = activeFilters.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        onClick={() => toggleFilter(cat.id)}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                          isActive 
                            ? 'bg-blue/20 border-blue/40 text-blue' 
                            : 'bg-foreground/5 border-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:border-foreground/20'
                        }`}
                      >
                        <cat.icon className="w-4 h-4" />
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'route' && (
            <motion.div
              key="route"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <div className="space-y-3 relative before:absolute before:inset-y-4 before:left-4 before:w-0.5 before:bg-foreground/10">
                <div className="relative z-10 pl-10">
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue border-2 border-background" />
                  <input 
                    type="text" 
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    placeholder="Starting point (e.g., Pune)" 
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg py-2.5 px-3 text-foreground focus:ring-1 focus:ring-blue outline-none text-sm"
                  />
                </div>
                <div className="relative z-10 pl-10">
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-background" />
                  <input 
                    type="text" 
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                    placeholder="Destination (e.g., Mumbai)" 
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg py-2.5 px-3 text-foreground focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
              </div>
              <button 
                onClick={() => onRouteStart(startPoint, endPoint)}
                className="w-full py-3 bg-blue hover:bg-blue/90 text-white rounded-xl font-medium shadow-lg shadow-blue/20 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Find Best Route
              </button>

              {/* Mock Route Stats - Shows after calculate */}
              {startPoint && endPoint && (
                <div className="pt-4 border-t border-foreground/10 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div>
                      <div className="text-emerald-400 font-semibold text-sm">Fastest Route (NH-48)</div>
                      <div className="text-xs text-emerald-400/70 mt-0.5">Light traffic ahead</div>
                    </div>
                    <div className="text-right">
                      <div className="text-foreground font-bold">2h 15m</div>
                      <div className="text-xs text-foreground/50">148 km</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 p-3 rounded-lg bg-foreground/5 border border-foreground/5 text-center">
                      <IndianRupee className="w-4 h-4 text-foreground/40 mx-auto mb-1" />
                      <div className="text-xs text-foreground/60">Est. Toll</div>
                      <div className="text-sm font-semibold text-foreground">₹320</div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-foreground/5 border border-foreground/5 text-center">
                      <Fuel className="w-4 h-4 text-foreground/40 mx-auto mb-1" />
                      <div className="text-xs text-foreground/60">Fuel Cost</div>
                      <div className="text-sm font-semibold text-foreground">~₹1200</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'weather' && (
            <motion.div
              key="weather"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20">
                <div className="flex items-center gap-3 mb-4">
                  <ThermometerSun className="w-8 h-8 text-orange" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">32°C</div>
                    <div className="text-sm text-orange-200">Sunny along NH-48</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 rounded-lg bg-black/20">Visibility: 10km+</div>
                  <div className="p-2 rounded-lg bg-black/20">Wind: 12 km/h</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue/20 to-blue/5 border border-blue/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-blue-200 text-sm">Forecast Ahead (Lonavala)</span>
                  <CloudRain className="w-5 h-5 text-blue-300" />
                </div>
                <p className="text-xs text-blue-200/70">Light rain expected in 2 hours. Drive carefully on ghat sections.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-foreground/10">
        <button 
          onClick={onSOSClick}
          className="w-full group relative overflow-hidden rounded-xl bg-red-600 px-4 py-4 font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center gap-2">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
            <span className="tracking-widest">EMERGENCY SOS</span>
          </div>
        </button>
        <p className="text-[10px] text-center text-foreground/40 mt-2 uppercase tracking-wide">Dispatches Highway Patrol & Ambulance</p>
      </div>
    </div>
  );
}
