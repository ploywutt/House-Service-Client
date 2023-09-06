import { createClient } from "@supabase/supabase-js";
const supabase_url = import.meta.env.VITE_SAPUABASE_URL;
const anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabase_url, anon_key);

export default supabase;
