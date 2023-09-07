import { createClient } from "@supabase/supabase-js";
const supabase_url = import.meta.env.VITE_SAPUABASE_URL;
const anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabase_url, anon_key);

export default supabase;

// Testing
// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5eGl3YmZobm5qeG9rcXBvcHJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzk4MDYzOSwiZXhwIjoyMDA5NTU2NjM5fQ.jCpd2_MuwbOo_n-O1eyanyBWCwDCcdrL9DihrEyyyIw";

// const SUPABASE_URL = "https://syxiwbfhnnjxokqpoprm.supabase.co";

// const supabasePloy = createClient(SUPABASE_URL, SUPABASE_KEY);

// export { supabasePloy };
