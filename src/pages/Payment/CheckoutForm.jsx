import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const totalPrice = 200;

    useEffect(()=>{
        if(totalPrice>0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error',confirmError);
        }

        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>
                <>
                    <p className="text-red-500">{error}</p>
                    {
                        transactionId && <p className="text-green-600">Your Transaction Id:  {transactionId}</p>
                    }
                </>
            </form>
        </div>
    );
};

export default CheckoutForm;