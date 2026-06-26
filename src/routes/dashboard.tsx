import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { useAuth } from "@/hooks/use-auth";
import { AIAssistantWidget } from "@/components/ai/ai-assistant-widget";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    // Ideally use router redirect in a beforeLoad hook, but for this demo this is fine
    window.location.href = "/auth/login";
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col noise">
      {/* Background gradients for premium feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="flex-1 flex z-10">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
      
      <AIAssistantWidget />
    </div>
  );
}
