import axios from "axios";
import { useState } from "react";

function useClientSecretStripe() {
  const [clientSecret, setClientSecret] = useState<string>("");

  const createPaymentIntent = async (
    totalprice: number,
    orderTotalPrice: number
  ) => {
    const data = await axios.post(
      "http://localhost:4000/create-payment-intent",
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
