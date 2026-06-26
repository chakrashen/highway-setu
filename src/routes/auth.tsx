import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/ui/animated-background";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="min-h-screen noise relative flex flex-col pt-24 pb-12 px-4">
      <AnimatedBackground />
      <div className="flex-1 flex items-center justify-center relative z-10 w-full max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
