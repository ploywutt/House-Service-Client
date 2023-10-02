import axios from "axios";
import { useState } from "react";

function useClientSecretStripe() {
  const [clientSecret, setClientSecret] = useState<string>("");

  const createPaymentIntent = async (totalPrice: number) => {
    const data = await axios.post(
      "http://localhost:4000/create-payment-intent",
      {
        price: totalPrice,
      }
    );
    console.log("stripe", data.data);
    setClientSecret(data.data.clientSecret);
  };

  return {
    createPaymentIntent,
    clientSecret,
  };
}

export default useClientSecretStripe;
