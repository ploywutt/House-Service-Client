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

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      console.log(response.data.message);
      navigate("/");
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
    handleChange,
    handleSubmit,
    formData,
    setFormData,
    signInWithGoogle,
  };
};

export default useRegister;
