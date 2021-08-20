import React from "react";
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Form } from 'react-bootstrap';




const stripePromise = loadStripe('pk_test_51JQXFLBDY7byDJWM3dtXFPp5JRmEDrlfH1spNLglfjcSSwHS7iXrFJZHIeKDWJp76eWH6m7Yfn9DfpFqj1NA9AjU00Ur5lESNY');

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements= useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if(!error) {
            console.log(paymentMethod)
            elements.getElement(CardElement).clear();
        }

    }

    return <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='amount' >Amount</Form.Label>
          <Form.Control
            type='number'
            placeholder='Amount'
            name='amount'
            required
          />
          <Form.Control.Feedback type='invalid'>Amount is required!</Form.Control.Feedback>
        </Form.Group>
    <CardElement/>
    <button className="mt-8 py-2 font-bold text-white transition duration-200 bg-red-900 rounded shadow-lg hover:bg-red-800 w-60 hover:shadow-xl">
        Donate
    </button>
    </form>
}


function PaymentCard(props) {
    return (
        <section className="flex flex-col m-8">
      <div className="flex items-center justify-center flex-1">
        <div className="w-full px-4 py-12 text-center rounded-lg sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>

        </div>
        </div>
        </section>
    
    );
}

export default PaymentCard;
