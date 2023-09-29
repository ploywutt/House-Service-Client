// import React, { useEffect, useState } from 'react';
// import {
//   PaymentElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// function PaymentForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }
//     const clientSecret = new URLSearchParams(window.location.search).get(
//       'payment_intent_client_secret'
//     );
//     if (!clientSecret) {
//       return;
//     }
//     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//       console.log('payment intent', paymentIntent);
//       switch (paymentIntent.status) {
//         case 'succeeded':
//           setMessage('Payment succeeded!');
//           break;
//         case 'processing':
//           setMessage('Your payment is processing.');
//           break;
//         case 'requires_payment_method':
//           setMessage('Your payment was not successful, please try again.');
//           break;
//         default:
//           setMessage('Something went wrong.');
//           break;
//       }
//     });
//   }, [stripe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     setIsLoading(true);
//     const { error } = await stripe.confirmPayment({
//       elements,
//     });

//     if (error.type === 'card_error' || error.type === 'validation_error') {
//       setMessage(error.message);
//     } else {
//       setMessage('An unexpected error occurred.');
//     }

//     setIsLoading(false);
//   };

//   return (

//       <form id='payment-form' onSubmit={handleSubmit}>
//       <PaymentElement
//         id='payment-element'
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#333',
//               '::placeholder': {
//                 color: '#ccc',
//               },
//             },
//           },
//         }}
//       />
//       <div className='border-t-[1px] border-black'></div>
//       <section className='w-[548px] flex justify-between px-[24px] mt[24px] mb-[32px]'>
//         <button className='text-red-500 font-bold'>
//           Cancel
//         </button>
//         <button
//           disabled={isLoading || !stripe || !elements}
//           id='submit'
//           className='py-[12px] px-[24px] bg-red-500 rounded-full text-white font-bold) {
//           }'>
//           <span id='button-text'>
//             {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
//           </span>
//         </button>
//       </section>

//       {message && <div id='payment-message'>{message}</div>}
//     </form>

//   );
// }
// export default PaymentForm;
import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
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

  return (
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
  );
}
