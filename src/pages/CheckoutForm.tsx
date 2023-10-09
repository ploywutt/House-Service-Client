import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import useClientSecretStripe from "@/hook/useClientsecretStripe";

interface CheckoutFormProps {
  totalprice: number;
  orderTotalPrice: number | undefined;
}

export default function CheckoutForm({
  totalprice,
  orderTotalPrice,
}: CheckoutFormProps) {
  const stripePromise = loadStripe(
    "pk_test_51NozskHa6CHfGgr1Mlek2lwtRJjpDwWxNA0gn2HOsVJpCHvdw8IU3SC49hc4w38V8tAW8i3AexxQD7PJ9JACmlt800wDbJcXNt"
  );
  const { clientSecret, createPaymentIntent } = useClientSecretStripe();

  useEffect(() => {
    createPaymentIntent(totalprice, orderTotalPrice);
  }, []);

  const appearance = {
    theme: "stripe" as "stripe",
    variables: {
      colorPrimary: "#336DF2",
      colorBackground: "#fff",
      spacingUnit: "5px",
      spacingGridRow: "24px",
      fontFamily: "Prompt, sans-serif",
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
