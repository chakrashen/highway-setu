import { useState } from "react";
import { Play, Pause, Square, MapPin, Navigation, Clock, Activity, Flag } from "lucide-react";
import { motion } from "motion/react";

export function TripManager() {
  const [tripState, setTripState] = useState<'idle' | 'active' | 'paused' | 'completed'>('active');

  return (
    <div className="space-y-6">
      <div className="glass-strong rounded-2xl p-6 border dark:border-foreground/5 border-foreground relative overflow-hidden">
        {tripState === 'active' && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-cyan-500 animate-pulse" />}
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
              Trip #TR-8942
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                tripState === 'active' ? 'bg-blue/20 text-blue border border-blue/30' :
                tripState === 'paused' ? 'bg-orange/20 text-orange border border-orange/30' :
                tripState === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                'bg-foreground/10 dark:text-foreground/60 text-foreground border dark:border-foreground/20 border-foreground'
              }`}>
                {tripState}
              </span>
            </h2>
            <p className="text-sm dark:text-foreground/60 text-foreground mt-1">Vehicle: MH-12-AB-1234 (Tata Signa)</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tripState === 'idle' && (
              <button 
                onClick={() => setTripState('active')}
                className="flex items-center gap-2 bg-blue hover:bg-blue/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-blue/20"
              >
                <Play className="w-4 h-4 fill-current" /> Start Trip
              </button>
            )}
            {tripState === 'active' && (
              <>
                <button 
                  onClick={() => setTripState('paused')}
                  className="flex items-center gap-2 bg-orange hover:bg-orange/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-orange/20"
                >
                  <Pause className="w-4 h-4 fill-current" /> Pause
                </button>
                <button 
                  onClick={() => setTripState('completed')}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Square className="w-4 h-4 fill-current" /> End Trip
                </button>
              </>
            )}
            {tripState === 'paused' && (
              <button 
                onClick={() => setTripState('active')}
                className="flex items-center gap-2 bg-blue hover:bg-blue/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-blue/20"
              >
                <Play className="w-4 h-4 fill-current" /> Resume
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-foreground/5 border dark:border-foreground/5 border-foreground">
            <div className="flex items-center gap-2 dark:text-foreground/40 text-foreground mb-1 text-sm">
              <Activity className="w-4 h-4" /> Distance
            </div>
            <div className="text-xl font-bold text-foreground">142 <span className="text-sm dark:text-foreground/60 text-foreground font-normal">/ 350 km</span></div>
          </div>
          <div className="p-4 rounded-xl bg-foreground/5 border dark:border-foreground/5 border-foreground">
            <div className="flex items-center gap-2 dark:text-foreground/40 text-foreground mb-1 text-sm">
              <Clock className="w-4 h-4" /> Duration
            </div>
            <div className="text-xl font-bold text-foreground">3h 45m</div>
          </div>
          <div className="p-4 rounded-xl bg-foreground/5 border dark:border-foreground/5 border-foreground">
            <div className="flex items-center gap-2 dark:text-foreground/40 text-foreground mb-1 text-sm">
              <MapPin className="w-4 h-4" /> Next Stop
            </div>
            <div className="text-lg font-bold text-foreground truncate">Pune Toll Plaza</div>
            <div className="text-xs text-blue">in 45 mins</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400/60 mb-1 text-sm">
              <Flag className="w-4 h-4" /> ETA
            </div>
            <div className="text-xl font-bold text-emerald-400">06:30 PM</div>
            <div className="text-xs text-emerald-400/80">On Schedule</div>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-foreground/10 rounded-full -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-blue rounded-full -translate-y-1/2" 
            initial={{ width: '0%' }}
            animate={{ width: '40%' }}
            transition={{ duration: 1 }}
          />
          
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue border-4 border-background z-10" />
              <span className="text-xs font-medium text-foreground mt-2">Mumbai</span>
              <span className="text-[10px] dark:text-foreground/40 text-foreground">08:00 AM</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue/20 border-2 border-blue z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue animate-ping" />
              </div>
              <span className="text-xs font-medium text-blue mt-1">Current</span>
              <span className="text-[10px] text-blue/60">Lonavala</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-foreground/20 border-4 border-background z-10" />
              <span className="text-xs font-medium dark:text-foreground/60 text-foreground mt-2">Bengaluru</span>
              <span className="text-[10px] dark:text-foreground/40 text-foreground">Drop-off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
