import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import PaymentForm from './PaymentForm';


  export default function CheckoutForm() {

    const stripePromise = loadStripe(
  ' pk_test_51NoyonCDxlniS9dCBN6RYaHIX5nk6GSeZL1WWdG5ve8gDmXgivmABDRW1fyzpye5n4Bu7KOHJUWLo9dZUTwHS9nx00aaI9Z2WZ'
);
   

    return (
      <div>
        {/* {clientSecret && ( */}
          {/* <Elements options={options} stripe={stripePromise}> */}
            <section className='w-full flex justify-center'>
              <div className='w-[1440]'>
                <div className='w-[928px] flex justify-between mt-[80px]'>
                  <section className='w-[358px] h-[244px] bg-gray-100 rounded-3xl py-[32px] px-[24px]'>
                    <div className='flex flex-col justify-between'>
                      <div className='flex mb-[24px]'>
                      </div>
                      <div>
                      </div>
                    </div>
                  </section>
                  <section className='rounded-3xl w-[548px]'>
                    <PaymentForm />    
                  </section>
                </div>
              </div>
            </section>
          {/* </Elements> */}
        {/* )} */}
      </div>
    );
  }


  