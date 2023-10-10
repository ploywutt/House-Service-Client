import axios from "axios";
import { useState } from "react";

function useClientSecretStripe() {
  const [clientSecret, setClientSecret] = useState<string>("");

  const createPaymentIntent = async (
    totalprice: number,
    orderTotalPrice: number = totalprice
  ) => {
    const data = await axios.post(
      "https://home-service-server.onrender.com/create-payment-intent",
      {
        price: totalprice && orderTotalPrice ? orderTotalPrice : totalprice,
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
