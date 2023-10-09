import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { usePayment } from "@/hook/PayContext";

export default function Paymentform() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { submit, setSubmit }: any = usePayment();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log("payment intent", paymentIntent);
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
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

  useEffect(() => {
    if (submit) {
      handleSubmit();
    } else {
      setSubmit(false);
    }
  }, [submit]);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/successfully",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error?.message ?? null);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setSubmit(false);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-[735px] bg-white border border-zinc-300  p-5 rounded-lg">
      <h3 className="text-gray-700">ชำระเงิน</h3>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col pt-6 pb-10"
      >
        <PaymentElement
          id="payment-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#323640",
                "::placeholder": {
                  color: "#ccc",
                },
              },
            },
          }}
        />
        <div className="border-t-[1px] border-gray-300 my-14 hidden"></div>
        <section>
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="w-[150px] text-white justify-between px-[24px] mt[24px] mb-[32px] bg-blue-600 rounded-md p-3 hidden"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "ชำระค่าบริการ"
              )}
            </span>
          </button>
        </section>

        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
