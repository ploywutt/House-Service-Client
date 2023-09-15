import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import supabase from "@/auth/supabaseauth";

const useRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      console.log(response.data.message);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      console.log(`Create user ${data} success`)
      setIsValid(true);
      navigate("/");
    } catch (error: any) {
      setIsValid(false);
      console.error(error.response.data.message);
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
    handleChange,
    handleSubmit,
    formData,
    setFormData,
    signInWithGoogle,
    navigate,
    isValid,
    isLoading,
  };
};

export default useRegister;

