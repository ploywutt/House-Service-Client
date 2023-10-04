import { useState } from "react";
import axios from "axios";

async function useCode() {
  // const [isValid, setIsValid] = useState<boolean | null>(null);
  const [codeName, setCodeName] = useState<string>();

  try {
    const response = await axios.get(
      `localhost:4000/v1/user/promotions/${codeName}`
    );
    console.log(response);
  } catch (error) {
    console.error(error, "Error 400");
  }

  return {
    // isValid, setIsValid,
    codeName,
    setCodeName,
  };
}

export default useCode;
