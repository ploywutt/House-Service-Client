import AlertPayment from "@/components/AlertPayment";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// import useCheckoutForm from "../hook/useTest";
import useClientSecretStripe from "@/hook/useClientSecretStripe";
import { useEffect, useState } from "react";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [clientSecret, setClientsecret] = useState(null);
  // const { clientSecret } = props;
  //
  const { createPaymentIntent } = useClientSecretStripe();

  useEffect(() => {
    createPaymentIntent(props.totalprice);
  }, []);

  // const [clientSecret, setClientSecret] = useState();

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const secret = await createPaymentIntent(props.totalprice);
  //     setClientSecret(secret);
  //   };
  //   getClientSecret();
  // }, [props.totalprice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col w-[735px] bg-white border border-zinc-300  p-5 rounded-lg">
        <h3 className="text-gray-700">ชำระเงิน</h3>
        <form
          id="payment-form"
          onSubmit={handleSubmit}
          className="flex flex-col py-8"
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
          <div className="border-t-[1px] border-gray-300 my-14"></div>
          <section>
            <button
              disabled={isLoading || !stripe || !elements}
              id="submit"
              className="w-[150px] text-white flex justify-between px-[24px] mt[24px] mb-[32px] bg-blue-600 rounded-md p-3"
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
      <AlertPayment
        totalprice={props.totalprice}
        counts={props.counts}
        date={props.date}
        thaiDate={props.thaiDate}
        selectedTime={props.selectedTime}
        address={props.address}
        detail={props.detail}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
