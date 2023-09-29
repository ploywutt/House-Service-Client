import { useEffect, useState } from "react";
import {
  // PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function useCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //  const [clientSecret, setClientsecret] =useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    // setClientsecret(clientSecret);

    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log("payment intent", paymentIntent);
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          // เขียนจากหน้าบ้านเพื่อ post เข้า database
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5174/checkout",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };
  return {
    message,
    setMessage,
    isLoading,
    setIsLoading,
    handleSubmit,
    stripe,
    elements,
  };
}
