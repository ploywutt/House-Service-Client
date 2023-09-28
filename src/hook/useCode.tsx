import { useState, useEffect } from "react";
import axios from "axios";

function useCode() {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [codeName, setcodeName] = useState<string>();

  const fetchCode = async () => {
    try {
      const response = await axios.get(
        "localhost:4000/v1/user/promotions/HOME1112"
      );
      console.log(response);
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  onclick(() => {
    fetchCode();
  }, []);

  return { isValid, setIsValid, codeName, setcodeName };
}

export default useCode;

