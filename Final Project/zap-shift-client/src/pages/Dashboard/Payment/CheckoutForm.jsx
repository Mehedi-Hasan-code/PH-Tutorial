import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/apiClient/useAxiosSecure';
import useAuthContext from '../../../hooks/useAuthContext';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate()
  const { privateApi } = useAxiosSecure();
  const { user } = useAuthContext();

  const [error, setError] = useState('');

  // get parcel info 👇
  const { id: parcelId } = useParams();
  const { data: parcelInfo = {}, isLoading } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => privateApi.get(`parcels/${parcelId}`),
  });

  const { cost } = parcelInfo || 0;
  const costInCent = cost * 100;

  // get parcel info 👆

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get card element 👇

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

    // get card element 👆

    // create payment intent 👇

    const res = await privateApi.post('/create-payment-intent', {
      cost: costInCent,
      parcelId,
    });

    const clientSecret = res.clientSecret;
    console.log(clientSecret);

    // create payment intent 👆

    // confirm payment 👇
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    console.log(result);

    if (result.error) {
      setError('result.error.message');
      console.log(result.error.message);
    } else {
      setError('');
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        // mark parcel paid also create payment history
        console.log(result);
        const paymentData = {
          parcelId,
          email: user.email,
          cost,
          transitionId: result.paymentIntent.id,
          paymentMethod: result.paymentIntent.payment_method,
        };

        const paymentRes = await privateApi.post('/payments', paymentData);

        if (paymentRes.insertedId) {
          alert('Payment successful');
          navigate('/dashboard/my-parcels')
        } else {
          alert('Something went wrong');
        }
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;

  // confirm payment 👆

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto my-20"
    >
      <CardElement className="border-1 border-black/40 p-2 rounded" />
      <button type="submit" disabled={!stripe} className="w-full btn">
        Pay ${cost}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
