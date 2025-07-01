import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = () => {
 

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
