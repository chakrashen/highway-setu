import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert, Ambulance, Wrench, Flame, TriangleAlert, CheckCircle2 } from "lucide-react";

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SOSModal({ isOpen, onClose }: SOSModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
  const [isDispatching, setIsDispatching] = useState(false);

  const emergencies = [
    { id: 'medical', label: 'Medical Emergency', icon: Ambulance, color: 'text-blue', bg: 'bg-blue/10 hover:bg-blue/20', border: 'border-blue/30' },
    { id: 'accident', label: 'Major Accident', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10 hover:bg-red-500/20', border: 'border-red-500/30' },
    { id: 'breakdown', label: 'Vehicle Breakdown', icon: Wrench, color: 'text-orange', bg: 'bg-orange/10 hover:bg-orange/20', border: 'border-orange/30' },
    { id: 'fire', label: 'Fire', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10 hover:bg-orange-500/20', border: 'border-orange-500/30' },
    { id: 'tyre', label: 'Flat Tyre / Minor', icon: TriangleAlert, color: 'text-yellow-500', bg: 'bg-yellow-500/10 hover:bg-yellow-500/20', border: 'border-yellow-500/30' },
  ];

  const handleDispatch = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setIsDispatching(false);
      setStep(2);
    }, 2000);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedEmergency(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md glass-strong border border-red-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)]"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 dark:text-foreground/60 text-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-red-500/20 text-red-500 animate-pulse">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">SOS Emergency</h2>
                </div>
                <p className="text-sm dark:text-foreground/60 text-foreground mb-6">Select the type of emergency. Your live GPS location will be sent immediately.</p>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {emergencies.map((em) => (
                    <button
                      key={em.id}
                      onClick={() => setSelectedEmergency(em.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        selectedEmergency === em.id 
                          ? `bg-foreground/10 border-white shadow-lg ${em.color}`
                          : `${em.bg} ${em.border} opacity-80 hover:opacity-100`
                      }`}
                    >
                      <em.icon className={`w-6 h-6 ${selectedEmergency === em.id ? em.color : 'dark:text-foreground/70 text-foreground'}`} />
                      <span className={`font-semibold ${selectedEmergency === em.id ? 'text-foreground' : 'dark:text-foreground/80 text-foreground'}`}>
                        {em.label}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedEmergency || isDispatching}
                  onClick={handleDispatch}
                  className="w-full py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex justify-center items-center gap-2"
                >
                  {isDispatching ? (
                    <>
                      <div className="w-5 h-5 border-2 dark:border-foreground/30 border-foreground border-t-white rounded-full animate-spin" />
                      Dispatching Help...
                    </>
                  ) : (
                    <>DISPATCH HELP TO MY LOCATION</>
                  )}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500/30 animate-ping" />
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Help is on the way!</h3>
                <p className="dark:text-foreground/70 text-foreground mb-6">
                  Highway Patrol and Emergency Services have received your location coordinates (18.6811° N, 73.5323° E).
                </p>
                <div className="p-4 rounded-xl bg-foreground/5 border dark:border-foreground/10 border-foreground mb-6">
                  <p className="text-sm font-semibold text-emerald-400 mb-1">Estimated Arrival Time</p>
                  <p className="text-3xl font-bold text-foreground">08 mins</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-xl border dark:border-foreground/20 border-foreground text-foreground hover:bg-foreground/5 transition-colors font-medium"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
