import supabase from "@/auth/supabaseauth";
import { useState, useEffect } from "react";

function useFetchUserEmail() {
  const [currentUserEmail, setCurrentUserEmail] = useState<any>("");

  // console.log(currentUserEmail);

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user.email);
        setCurrentUserEmail(user?.email);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);
  return currentUserEmail;
}

export default useFetchUserEmail;
