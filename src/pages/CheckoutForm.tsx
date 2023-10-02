import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import useClientSecretStripe from "@/hook/useClientsecretStripe";

export default function CheckoutForm({ totalprice }) {
  const stripePromise = loadStripe(
    "pk_test_51NoyonCDxlniS9dCBN6RYaHIX5nk6GSeZL1WWdG5ve8gDmXgivmABDRW1fyzpye5n4Bu7KOHJUWLo9dZUTwHS9nx00aaI9Z2WZ"
  );
  const { clientSecret, createPaymentIntent } = useClientSecretStripe();

  useEffect(() => {
    createPaymentIntent(totalprice);
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#336DF2",
      colorBackground: "#fff",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}
