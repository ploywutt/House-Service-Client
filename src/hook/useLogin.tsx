import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import supabase from "@/auth/supabaseauth";

function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (data.session) {
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log("Bright-Bright", data, error);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    handleLogin,
    signInWithGoogle,
    navigate,
    setEmail,
    setPassword,
    email,
    password,
  };
}

export default UserLogin;
