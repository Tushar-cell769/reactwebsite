import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePayment = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IGmJqCNSOACHIBVIKFQhwvz8NiaYxLf2DmF6MUrAg7SFTVgPBEnFPQMk4m3veks2qAJ7OkdK1aSBMl7o3PIyF1r00DHP6XOcT";

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Co."
      billingAddress
      shippingAddress
      alipay
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripePayment;
