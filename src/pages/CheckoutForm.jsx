import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import PaymentForm from './PaymentForm';


// const stripePromise = loadStripe(
//   'pk_test_51NoyonCDxlniS9dCBN6RYaHIX5nk6GSeZL1WWdG5ve8gDmXgivmABDRW1fyzpye5n4Bu7KOHJUWLo9dZUTwHS9nx00aaI9Z2WZ'
// );

// export default function StripePayment() {
//   const [clientSecret, setClientSecret] = useState('');
//   const createPaymentIntent = async () => {
//     const data = await axios.post(
//       'http://localhost:4000/create-payment-intent',
//       {
//       }
//     );
//     console.log(data.data);
//     setClientSecret(data.data.clientSecret);
//   };
  
// //   useEffect(() => {
// //     createPaymentIntent();
// //   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div>
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <section className='w-full flex justify-center'>
//             <div className=''>
//               <div className=''>
//                 <section className=''>
//                 </section>
//                 <section className=''> 
//                   <PaymentForm/>  
//                 </section>
//               </div>
//             </div>
//           </section>
//         </Elements>
//       )}
//     </div>
//   );
// }
const stripePromise = loadStripe(
    'pk_test_51NuxGCAr6dsWC1udch1DGbzxKP9PdyRsE6FwRecNnPEDWMGtS99sD2T1dMqxf79UnDz92VvX4LJl88dS3gf4hr2E00GVcHSPBY'
  );
  
  export default function CheckoutForm() {
    const [clientSecret, setClientSecret] = useState('');
    const createPaymentIntent = async () => {
      const data = await axios.post(
        'http://localhost:4000/payment/create-payment-intent',
        {
          code: 'rtx-4090',
        }
      );
      console.log(data.data);
      setClientSecret(data.data.clientSecret);
    };
    
    // useEffect(() => {
    //   createPaymentIntent();
    // }, []);
  
    const appearance = {
      theme: 'stripe',
      variables: {
        colorPrimary: '#C70039',
        colorBackground: '#fff',
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
            <section className='w-full flex justify-center'>
              <div className='w-[1440]'>
                <div className='w-[928px] flex justify-between mt-[80px]'>
                  <section className='w-[358px] h-[244px] bg-gray-100 rounded-3xl py-[32px] px-[24px]'>
                    <div className='flex flex-col justify-between'>
                      <div className='flex mb-[24px]'>
                        <img src={packIcon} alt="package icon" className='mr-[12px] w-[24px] h-[24px]'/>
                        <p className='text-gray-700 text-[20px]'>Merry Membership</p>
                      </div>
                      <div>
                        <section className='py-[12px] flex justify-between text-gray-700'>
                          <p>Package</p>
                          <p>Price (Monthly)</p>
                        </section>
                        <section className='py-[24px] border-t-[1px] border-gray-400 flex justify-between text-[20px] font-bold'>
                          <p className='text-gray-900'>Premium</p>
                          <p className='text-red-900'>THB 59.00</p>
                        </section>
                      </div>
                    </div>
                  </section>
                  <section className='rounded-3xl w-[548px]'> 
                    <PaymentForm />    
                  </section>
                </div>
              </div>
            </section>
          </Elements>
        )}
      </div>
    );
  }

  