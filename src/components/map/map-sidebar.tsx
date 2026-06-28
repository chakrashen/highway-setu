import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Filter, Navigation, ShieldAlert, X, 
  MapPin, Clock, IndianRupee, ThermometerSun, CloudRain,
  UtensilsCrossed, Wrench, Fuel, Car, Truck, LocateFixed
} from "lucide-react";
import { POICategory } from "@/lib/mock-data/pois";

import { RouteInfo } from "@/lib/services/routing";

interface MapSidebarProps {
  onSearch: (query: string) => void;
  onSearchSubmit?: (query: string) => void;
  onFilterChange: (filters: POICategory[]) => void;
  routeInfo?: RouteInfo | null;
  isRouting?: boolean;
  userLocation?: [number, number] | null;
  onRequestLocation?: () => void;
}

export function MapSidebar({ onSearch, onSearchSubmit, onFilterChange, onRouteStart, onSOSClick, routeInfo, isRouting, userLocation, onRequestLocation }: MapSidebarProps) {
  const [activeTab, setActiveTab] = useState<'search' | 'route' | 'weather'>('search');
  const [activeFilters, setActiveFilters] = useState<POICategory[]>([]);
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    description: string;
    windSpeed: number;
    visibility: number;
  } | null>(null);

  useEffect(() => {
    // Default to Pune region if no userLocation provided yet
    const lat = userLocation ? userLocation[0] : 18.7311;
    const lon = userLocation ? userLocation[1] : 73.5023;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,visibility`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.current) {
          const code = data.current.weather_code;
          // Basic WMO weather code mapping
          let desc = "Clear";
          if (code >= 1 && code <= 3) desc = "Partly Cloudy";
          if (code >= 45 && code <= 48) desc = "Foggy";
          if (code >= 51 && code <= 67) desc = "Rainy";
          if (code >= 71 && code <= 77) desc = "Snow";
          if (code >= 80 && code <= 82) desc = "Rain Showers";
          if (code >= 95) desc = "Thunderstorm";

          setWeatherData({
            temperature: data.current.temperature_2m,
            description: desc,
            windSpeed: data.current.wind_speed_10m,
            visibility: data.current.visibility ? data.current.visibility / 1000 : 10, // Convert m to km
          });
        }
      })
      .catch(err => console.error("Weather fetch error:", err));
  }, []);

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
    <div className="w-full md:w-96 bg-background/90 backdrop-blur-xl border-r dark:border-foreground/10 border-foreground h-[calc(100vh-4rem)] flex flex-col z-[1000] shadow-2xl shrink-0 overflow-y-auto hidden-scrollbar absolute md:relative top-0 left-0">
      <div className="p-4 border-b dark:border-foreground/10 border-foreground flex gap-2">
        <button 
          onClick={() => setActiveTab('search')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'search' ? 'bg-foreground/10 text-foreground' : 'dark:text-foreground/60 text-foreground hover:text-foreground'}`}
        >
          Explore
        </button>
        <button 
          onClick={() => setActiveTab('route')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'route' ? 'bg-blue/20 text-blue' : 'dark:text-foreground/60 text-foreground hover:text-white'}`}
        >
          Route Planner
        </button>
        <button 
          onClick={() => setActiveTab('weather')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'weather' ? 'bg-orange/20 text-orange' : 'dark:text-foreground/60 text-foreground hover:text-white'}`}
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
                <input 
                  type="text" 
                  placeholder="Search dhabas, mechanics, places..." 
                  onChange={(e) => onSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onSearchSubmit?.(e.currentTarget.value);
                    }
                  }}
                  className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-blue/50 outline-none"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold dark:text-foreground/80 text-foreground mb-3 flex items-center gap-2">
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
                            : 'bg-foreground/5 dark:border-foreground/5 border-foreground dark:text-foreground/70 text-foreground hover:bg-foreground/10 hover:dark:border-foreground/20 border-foreground'
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
                <div className="relative z-10 pl-10 pr-10">
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue border-2 border-background" />
                  <input 
                    type="text" 
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    placeholder="Starting point (e.g., Pune)" 
                    className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-lg py-2.5 px-3 text-foreground focus:ring-1 focus:ring-blue outline-none text-sm"
                  />
                  <button 
                    onClick={() => {
                      setStartPoint("Current Location");
                      onRequestLocation?.();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-blue hover:text-blue-600 transition-colors"
                    title="Use Current Location"
                  >
                    <LocateFixed className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative z-10 pl-10">
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-background" />
                  <input 
                    type="text" 
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                    placeholder="Destination (e.g., Mumbai)" 
                    className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-lg py-2.5 px-3 text-foreground focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
              </div>
              <button 
                onClick={() => onRouteStart(startPoint, endPoint)}
                disabled={isRouting || !startPoint || !endPoint}
                className="w-full py-3 bg-blue hover:bg-blue/90 text-white rounded-xl font-medium shadow-lg shadow-blue/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isRouting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Navigation className="w-4 h-4" />
                )}
                {isRouting ? "Calculating..." : "Find Best Route"}
              </button>

              {/* Real Route Stats - Shows after calculate */}
              {routeInfo && !isRouting && (
                <div className="pt-4 border-t dark:border-foreground/10 border-foreground space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div>
                      <div className="text-emerald-500 font-semibold text-sm">Fastest Route</div>
                      <div className="text-xs text-emerald-500/70 mt-0.5">Live traffic applied</div>
                    </div>
                    <div className="text-right">
                      <div className="text-foreground font-bold">
                        {Math.floor(routeInfo.durationMinutes / 60)}h {Math.round(routeInfo.durationMinutes % 60)}m
                      </div>
                      <div className="text-xs dark:text-foreground/50 text-foreground">
                        {Math.round(routeInfo.distanceKm)} km
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 p-3 rounded-lg bg-foreground/5 border dark:border-foreground/5 border-foreground text-center">
                      <IndianRupee className="w-4 h-4 dark:text-foreground/40 text-foreground mx-auto mb-1" />
                      <div className="text-xs dark:text-foreground/60 text-foreground">Est. Toll</div>
                      <div className="text-sm font-semibold text-foreground">
                        ₹{Math.round(routeInfo.distanceKm * 1.5)}
                      </div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-foreground/5 border dark:border-foreground/5 border-foreground text-center">
                      <Fuel className="w-4 h-4 dark:text-foreground/40 text-foreground mx-auto mb-1" />
                      <div className="text-xs dark:text-foreground/60 text-foreground">Fuel Cost</div>
                      <div className="text-sm font-semibold text-foreground">
                        ~₹{Math.round((routeInfo.distanceKm / 15) * 100)}
                      </div>
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
                {weatherData ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <ThermometerSun className="w-8 h-8 text-orange" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">{weatherData.temperature}°C</div>
                        <div className="text-sm text-orange-700 dark:text-orange-200">
                          {weatherData.description}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-foreground/90">
                      <div className="p-2 rounded-lg bg-foreground/10">Vis: {weatherData.visibility.toFixed(1)} km</div>
                      <div className="p-2 rounded-lg bg-foreground/10">Wind: {weatherData.windSpeed} km/h</div>
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-foreground/70 p-4 text-center">
                    Fetching real-time weather...
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t dark:border-foreground/10 border-foreground">
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
        <p className="text-[10px] text-center dark:text-foreground/40 text-foreground mt-2 uppercase tracking-wide">Dispatches Highway Patrol & Ambulance</p>
      </div>
    </div>
  );
}
