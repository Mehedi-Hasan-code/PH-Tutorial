import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/apiClient/useAxiosSecure';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { privateApi } = useAxiosSecure();
  const { id: parcelId } = useParams();
  console.log(parcelId);

  const { data: parcelInfo = {}, isLoading } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => privateApi.get(`parcels/${parcelId}`),
  });

  const { cost } = parcelInfo;
  const costInCent = cost * 100;
  console.log(costInCent);

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      console.log('paymentMethod:', paymentMethod);
    }

    // create payment intent
    const res = await privateApi.post('/create-payment-intent', {
      cost: costInCent,
      parcelId,
    });

    const clientSecret = res.clientSecret;
    console.log(clientSecret);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
      }
    }

    console.log('res from back: ', result);
  };

  if (isLoading) return <p>Loading...</p>;

  console.log(parcelInfo);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto my-20"
    >
      <CardElement className="border-1 border-black/40 p-2 rounded" />
      <button type="submit" disabled={!stripe} className="w-full btn">
        Pay ${cost}
      </button>
      {error && <p className="text-red-600">{error});</p>}
    </form>
  );
};

export default CheckoutForm;
