import { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "@/auth/supabaseauth";

function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data.session) {
      console.log(data.session);
      setIsValid(true);
      navigate("/");
    } else {
      setIsValid(false);
      console.error(error, "not valid");
    }
    setIsLoading(false);
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
    isValid,
    isLoading,
  };
}

export default UserLogin;
