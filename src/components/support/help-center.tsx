import { LifeBuoy, MessageCircle, FileText, Phone } from "lucide-react";

export function HelpCenter() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-strong rounded-3xl p-6 border border-foreground/10 text-center hover:bg-foreground/5 transition-colors cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-blue" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Knowledge Base</h3>
          <p className="text-sm text-foreground/60">Browse guides, FAQs, and tutorials.</p>
        </div>
        
        <div className="glass-strong rounded-3xl p-6 border border-foreground/10 text-center hover:bg-foreground/5 transition-colors cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-purple" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Live Chat</h3>
          <p className="text-sm text-foreground/60">Chat with our support team instantly.</p>
        </div>
        
        <div className="glass-strong rounded-3xl p-6 border border-foreground/10 text-center hover:bg-foreground/5 transition-colors cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Phone className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Contact Support</h3>
          <p className="text-sm text-foreground/60">Raise a ticket or request a call back.</p>
        </div>
      </div>

      <div className="glass-strong rounded-3xl p-6 border border-foreground/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
            <LifeBuoy className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Recent Support Tickets</h3>
        </div>
        
        <div className="text-center p-8 border border-foreground/5 rounded-2xl border-dashed">
          <p className="text-foreground/40 text-sm">You have no active support tickets.</p>
          <button className="mt-4 bg-foreground/10 hover:bg-foreground/20 text-foreground px-6 py-2 rounded-xl text-sm font-medium transition-colors">
            Raise a Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
