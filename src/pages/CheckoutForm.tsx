import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import useClientSecretStripe from "@/hook/useClientsecretStripe";

export default function CheckoutForm({ totalprice }) {
  const stripePromise = loadStripe(
    "pk_test_51NozskHa6CHfGgr1Mlek2lwtRJjpDwWxNA0gn2HOsVJpCHvdw8IU3SC49hc4w38V8tAW8i3AexxQD7PJ9JACmlt800wDbJcXNt"
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
