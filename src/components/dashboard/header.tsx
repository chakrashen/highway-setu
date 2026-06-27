import { Bell, Search, Menu, Command } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { NotificationCenter } from "@/components/notifications/notification-center";

export function DashboardHeader() {
  const { user } = useAuth();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b dark:border-foreground/10 border-foreground bg-background/50 backdrop-blur-xl px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 dark:text-foreground/40 text-foreground ml-2"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-10 pr-0 text-foreground bg-transparent placeholder:dark:text-foreground/40 text-foreground focus:ring-0 sm:text-sm outline-none"
            placeholder="Search across your dashboard..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6 relative">
          <button 
            type="button" 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="-m-2.5 p-2.5 dark:text-foreground/60 text-foreground hover:text-foreground transition-colors relative"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue rounded-full border border-background"></span>
          </button>
          
          <NotificationCenter isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-foreground/10" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
