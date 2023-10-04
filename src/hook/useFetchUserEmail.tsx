import supabase from "@/auth/supabaseauth";
import { useState, useEffect } from "react";

function useFetchUserEmail() {
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user?.email);
        setCurrentUserEmail(user?.email || null);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  return currentUserEmail;
}

export default useFetchUserEmail;
