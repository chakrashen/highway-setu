import { useState } from "react";
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Mic, Image as ImageIcon, MapPin } from "lucide-react";

export function MessagingSystem() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [message, setMessage] = useState("");

  const contacts = [
    { id: 1, name: "Sher-e-Punjab Dhaba", role: "Dhaba", lastMessage: "Yes, we have parking space.", time: "10:42 AM", unread: 2, online: true },
    { id: 2, name: "Sharma Auto Works", role: "Mechanic", lastMessage: "I'll be there in 15 mins.", time: "Yesterday", unread: 0, online: false },
    { id: 3, name: "Fleet Manager (Raj)", role: "Fleet Owner", lastMessage: "Update when you cross Pune.", time: "Yesterday", unread: 0, online: true },
    { id: 4, name: "Support Team", role: "Admin", lastMessage: "Your document is verified.", time: "Mon", unread: 0, online: true },
  ];

  return (
    <div className="flex h-[600px] glass-strong border dark:border-foreground/10 border-foreground rounded-2xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 min-w-[280px] border-r dark:border-foreground/10 border-foreground flex flex-col bg-background/30">
        <div className="p-4 border-b dark:border-foreground/10 border-foreground">
          <h2 className="text-lg font-bold text-foreground mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-foreground/40 text-foreground" />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-xl py-2 pl-9 pr-4 text-sm text-foreground focus:outline-none focus:border-blue/50"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto hidden-scrollbar">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`p-4 flex items-center gap-3 cursor-pointer transition-colors border-l-2 ${
                activeChat === contact.id ? 'bg-foreground/10 border-blue' : 'hover:bg-foreground/5 border-transparent'
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center font-bold text-white border dark:border-foreground/10 border-foreground">
                  {contact.name.charAt(0)}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-foreground text-sm truncate pr-2">{contact.name}</h3>
                  <span className="text-[10px] dark:text-foreground/40 text-foreground whitespace-nowrap">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className={`text-xs truncate pr-2 ${contact.unread > 0 ? 'text-foreground font-medium' : 'dark:text-foreground/50 text-foreground'}`}>
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="w-4 h-4 rounded-full bg-blue text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-background/50">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b dark:border-foreground/10 border-foreground flex justify-between items-center bg-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center font-bold text-orange border border-orange/20">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Sher-e-Punjab Dhaba</h3>
                  <p className="text-[10px] text-emerald-400">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-foreground/10 rounded-full dark:text-foreground/60 text-foreground hover:text-foreground transition-colors"><Phone className="w-4 h-4" /></button>
                <button className="p-2 hover:bg-foreground/10 rounded-full dark:text-foreground/60 text-foreground hover:text-foreground transition-colors"><Video className="w-4 h-4" /></button>
                <button className="p-2 hover:bg-foreground/10 rounded-full dark:text-foreground/60 text-foreground hover:text-foreground transition-colors"><MoreVertical className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hidden-scrollbar">
              <div className="text-center text-[10px] dark:text-foreground/30 text-foreground my-4">Today</div>
              
              <div className="flex justify-end">
                <div className="max-w-[70%]">
                  <div className="bg-blue text-white p-3 rounded-2xl rounded-tr-sm text-sm">
                    Hi, I am 15km away. Do you have secure parking available for a heavy truck right now?
                  </div>
                  <div className="text-[10px] dark:text-foreground/40 text-foreground text-right mt-1">10:40 AM • Read</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[70%]">
                  <div className="bg-foreground/10 text-foreground p-3 rounded-2xl rounded-tl-sm text-sm border dark:border-foreground/5 border-foreground">
                    Yes, we have parking space. I have reserved a spot for you near the security cabin.
                  </div>
                  <div className="text-[10px] dark:text-foreground/40 text-foreground mt-1">10:42 AM</div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t dark:border-foreground/10 border-foreground bg-foreground/5">
              <div className="flex items-end gap-2">
                <div className="flex gap-1 pb-2">
                  <button className="p-2 dark:text-foreground/40 text-foreground hover:text-foreground transition-colors" title="Attach"><Paperclip className="w-4 h-4" /></button>
                  <button className="p-2 dark:text-foreground/40 text-foreground hover:text-foreground transition-colors" title="Location"><MapPin className="w-4 h-4" /></button>
                </div>
                <div className="flex-1 relative">
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-background border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-4 pr-12 text-sm text-foreground focus:outline-none focus:border-blue/50 resize-none max-h-32"
                    rows={1}
                  />
                  <button className="absolute right-2 bottom-3 p-1.5 dark:text-foreground/40 text-foreground hover:text-foreground transition-colors">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="pb-1">
                  {message.trim() ? (
                    <button className="p-3 bg-blue text-white rounded-xl hover:bg-blue/90 transition-colors shadow-lg shadow-blue/20">
                      <Send className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="p-3 bg-foreground/10 text-foreground rounded-xl hover:bg-foreground/20 transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center dark:text-foreground/40 text-foreground text-sm">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
