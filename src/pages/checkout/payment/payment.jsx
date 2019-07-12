import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import PaymentForm from "./paymentform/paymentform";
import LoadExternalScript from "../../../core/helpers/loadexternalscript";

class Payment extends Component {
  render() {
    return (
      <div className="container-50">
        <StripeProvider apiKey="pk_test_dNcXMy4Znv8qYePVtE5e85V800o5xefJGO">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <PaymentForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default Payment;
