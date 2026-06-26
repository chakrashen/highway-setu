import { createClient } from "@supabase/supabase-js";
import { UserRole } from "@/types/database";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder_key", {
  auth: {
    persistSession: true,
  },
});

export const getSupabaseConfigured = () => {
  return supabaseUrl !== "" && supabaseAnonKey !== "";
};
