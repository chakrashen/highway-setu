import { createFileRoute } from "@tanstack/react-router";
import { MessagingSystem } from "@/components/chat/messaging-system";
import { motion } from "motion/react";

export const Route = createFileRoute("/dashboard/messages")({
  component: MessagesPage,
});

function MessagesPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1">Communicate with drivers, dhabas, and fleet owners.</p>
      </div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <MessagingSystem />
      </motion.div>
    </div>
  );
}
