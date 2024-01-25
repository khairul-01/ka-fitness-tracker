import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div>
            <h1 className="text-5xl text-center py-7"> Payment Section.</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;