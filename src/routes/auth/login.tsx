import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@/types/database";
import { ArrowRight, Loader2, Mail, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("driver");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, role);
      // Wait for login to complete, then navigate to respective dashboard
      navigate({ to: `/dashboard/${role}` as any });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md glass-strong rounded-3xl p-8 relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5 relative z-10">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground/80 ml-1">Role</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: "driver", label: "Driver" },
              { id: "dhaba", label: "Dhaba" },
              { id: "mechanic", label: "Mechanic" },
              { id: "fleet", label: "Fleet" },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id as UserRole)}
                className={cn(
                  "py-2 px-3 text-sm rounded-xl border transition-all duration-200",
                  role === r.id 
                    ? "bg-primary/20 border-primary/50 text-foreground" 
                    : "bg-foreground/5 border-foreground/10 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground/80 ml-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground/80 ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="rounded border-foreground/20 bg-foreground/5 text-primary focus:ring-primary/50" />
            <span className="text-foreground/60 group-hover:text-foreground/80 transition-colors">Remember me</span>
          </label>
          <a href="#" className="text-primary hover:text-primary-foreground transition-colors">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue via-primary to-purple hover:scale-[1.02] transition-transform py-3.5 rounded-xl font-semibold text-white shadow-xl shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100 mt-2"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
            <>Sign In <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-foreground/60 relative z-10">
        Don't have an account?{" "}
        <Link to="/" className="text-primary hover:text-primary-foreground font-medium transition-colors">
          Join Now
        </Link>
      </div>
    </motion.div>
  );
}
