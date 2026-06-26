import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, UserRole } from "@/types/database";
import { supabase, getSupabaseConfigured } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (getSupabaseConfigured()) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // Fetch custom role from user metadata or profile table
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();

          setUser({
            id: session.user.id,
            email: session.user.email!,
            role: (profile?.role as UserRole) || "driver",
            created_at: session.user.created_at,
          });
        }
      } else {
        // Mock session for UI testing without Supabase keys
        const mockSession = localStorage.getItem("mock_session");
        if (mockSession) {
          setUser(JSON.parse(mockSession));
        }
      }
      setIsLoading(false);
    };

    initAuth();

    if (getSupabaseConfigured()) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
           const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();

          setUser({
            id: session.user.id,
            email: session.user.email!,
            role: (profile?.role as UserRole) || "driver",
            created_at: session.user.created_at,
          });
        } else {
          setUser(null);
        }
      });
      return () => subscription.unsubscribe();
    }
  }, []);

  const login = async (email: string, role: UserRole) => {
    if (getSupabaseConfigured()) {
      // Real Supabase implementation would handle magic link or password auth here
      // This is a placeholder for actual login flow which would happen via signup/login pages
    } else {
      // Mock login
      const mockUser: User = {
        id: "mock-" + Date.now(),
        email,
        role,
        created_at: new Date().toISOString(),
        full_name: "Mock User",
      };
      localStorage.setItem("mock_session", JSON.stringify(mockUser));
      setUser(mockUser);
    }
  };

  const logout = async () => {
    if (getSupabaseConfigured()) {
      await supabase.auth.signOut();
    } else {
      localStorage.removeItem("mock_session");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
