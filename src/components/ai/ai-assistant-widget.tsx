import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Send, Mic, MapPin, Wrench, Settings, Coffee, Wind, Truck } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi there! I'm your Highways24 AI Assistant. How can I help you on your journey today?" }
  ]);
  const [input, setInput] = useState("");
  const { user } = useAuth();

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsgs = [...messages, { role: "user", text: input }];
    setMessages(newMsgs);
    setInput("");
    
    // Mock AI response
    setTimeout(() => {
      let reply = "I'm processing your request...";
      if (user?.role === 'driver') {
        reply = "Based on your current route on NH-48, there is a recommended Dhaba (Sher-e-Punjab) 15km ahead with safe truck parking. Would you like me to add it to your route?";
      } else if (user?.role === 'dhaba') {
        reply = "Looking at historical data, expect a 40% surge in truck drivers arriving between 8 PM and 11 PM tonight. I recommend preparing extra vegetarian meals.";
      } else if (user?.role === 'fleet') {
        reply = "Vehicle MH-12-AB-1234 has been showing 12% higher fuel consumption over the last 3 trips. A mechanical check is highly recommended.";
      } else if (user?.role === 'mechanic') {
        reply = "You have 3 upcoming service requests in your 10km radius for heavy commercial vehicles. Should I auto-accept them for you?";
      }
      
      setMessages([...newMsgs, { role: "assistant", text: reply }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9000] w-14 h-14 rounded-full bg-gradient-to-r from-blue to-purple shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-foreground animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9000] w-full max-w-[360px] h-[500px] glass-strong border dark:border-foreground/10 border-foreground rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-blue/20 to-purple/20 border-b dark:border-foreground/10 border-foreground flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue to-purple flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Highway AI</h3>
                  <p className="text-[10px] dark:text-foreground/70 text-foreground">Always ready to assist</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="relative z-10 p-2 hover:bg-foreground/10 rounded-full transition-colors dark:text-foreground/60 text-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 hidden-scrollbar relative">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue text-white rounded-tr-sm' 
                      : 'bg-foreground/10 dark:text-foreground/90 text-foreground rounded-tl-sm border dark:border-foreground/5 border-foreground'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Suggestions Chips based on role */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {user?.role === 'driver' && (
                    <>
                      <button onClick={() => setInput("Find a dhaba nearby")} className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 border dark:border-foreground/10 border-foreground dark:text-foreground/80 text-foreground hover:bg-foreground/10 transition-colors flex items-center gap-1"><Coffee className="w-3 h-3" /> Find Dhaba</button>
                      <button onClick={() => setInput("How is the weather ahead?")} className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 border dark:border-foreground/10 border-foreground dark:text-foreground/80 text-foreground hover:bg-foreground/10 transition-colors flex items-center gap-1"><Wind className="w-3 h-3" /> Weather Check</button>
                    </>
                  )}
                  {user?.role === 'fleet' && (
                    <>
                      <button onClick={() => setInput("Optimize routes for my active trucks")} className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 border dark:border-foreground/10 border-foreground dark:text-foreground/80 text-foreground hover:bg-foreground/10 transition-colors flex items-center gap-1"><MapPin className="w-3 h-3" /> Optimize Routes</button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="p-3 bg-foreground/5 border-t dark:border-foreground/10 border-foreground">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..." 
                  className="w-full bg-background border dark:border-foreground/10 border-foreground rounded-full py-2.5 pl-4 pr-12 text-sm text-foreground focus:outline-none focus:border-blue/50"
                />
                <div className="absolute right-1 flex items-center">
                  <button className="p-2 dark:text-foreground/40 text-foreground hover:text-foreground transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleSend}
                    className="p-2 bg-blue text-white rounded-full hover:bg-blue/90 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
