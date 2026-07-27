import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, CheckCircle2, ShieldAlert, Settings, Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'success' | 'alert' | 'info';
}

export function NotificationCenter({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language } = useLanguage();
  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: "1", 
      title: language === "hi" ? "दस्तावेज़ सत्यापित" : "Document Verified", 
      message: language === "hi" ? "आपका व्यावसायिक बीमा सफलतापूर्वक सत्यापित हो गया है।" : "Your commercial insurance has been successfully verified.", 
      time: language === "hi" ? "10 मिनट पहले" : "10 mins ago", 
      read: false, 
      type: "success" 
    },
    { 
      id: "2", 
      title: language === "hi" ? "मार्ग चेतावनी" : "Route Alert", 
      message: language === "hi" ? "NH-48 पर भारी ट्रैफ़िक पाया गया। 15 मिनट की देरी होगी।" : "Heavy traffic detected on NH-48 near Lonavala. ETA delayed by 15m.", 
      time: language === "hi" ? "1 घंटे पहले" : "1 hour ago", 
      read: false, 
      type: "alert" 
    },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
            className="absolute top-16 right-4 sm:right-8 w-80 sm:w-96 glass-strong border dark:border-foreground/10 border-foreground rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-4 border-b dark:border-foreground/10 border-foreground flex justify-between items-center bg-background/50">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 dark:text-foreground/80 text-foreground" />
                <h3 className="font-bold text-foreground">{language === "hi" ? "सूचनाएं" : "Notifications"}</h3>
                <span className="bg-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {notifications.filter(n => !n.read).length} {language === "hi" ? "नया" : "New"}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={markAllRead} className="p-1.5 hover:bg-foreground/10 rounded-lg dark:text-foreground/60 text-foreground hover:text-foreground transition-colors" title="Mark all as read">
                  <Check className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-foreground/10 rounded-lg dark:text-foreground/60 text-foreground hover:text-foreground transition-colors" title="Settings">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto hidden-scrollbar">
              {notifications.length === 0 ? (
                <div className="p-8 text-center dark:text-foreground/50 text-foreground text-sm">
                  {language === "hi" ? "कोई सूचना नहीं है।" : "No notifications right now."}
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {notifications.map((n) => (
                    <div key={n.id} className={`p-4 hover:bg-foreground/5 transition-colors cursor-pointer flex gap-3 ${!n.read ? 'bg-blue/5' : ''}`}>
                      <div className="shrink-0 mt-0.5">
                        {n.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        {n.type === 'alert' && <ShieldAlert className="w-5 h-5 text-red-500" />}
                        {n.type === 'info' && <div className="w-5 h-5 rounded-full bg-blue/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue" /></div>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className={`text-sm font-semibold truncate pr-2 ${!n.read ? 'text-foreground' : 'dark:text-foreground/80 text-foreground'}`}>{n.title}</p>
                          <span className="text-[10px] dark:text-foreground/40 text-foreground whitespace-nowrap">{n.time}</span>
                        </div>
                        <p className="text-xs dark:text-foreground/60 text-foreground leading-relaxed line-clamp-2">{n.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-3 border-t dark:border-foreground/10 border-foreground bg-background/50">
              <button className="w-full text-center text-xs font-semibold text-blue hover:text-blue/80 transition-colors">
                {language === "hi" ? "सभी सूचनाएं देखें" : "View All Notifications"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
