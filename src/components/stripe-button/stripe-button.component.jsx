import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabelKey =
    "pk_test_51HeB8pIuqHuGWmz9wBmbBCWhveu7OBsbORNEbHHwfGPi1ydgG3opFtbHUdzafa69fs2hyoZweyWGJoyeNUbHCpjD00SiBGGX28";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="PayNow"
      name="Expert Design"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount="priceForStripe"
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishabelKey}
    />
  );
};

export default StripeCheckoutButton;
