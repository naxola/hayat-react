import React, { Component } from "react";
class PaymentButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("Datos enviados" + this.props.productID);
    /*
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    */
  }
  render() {
    console.log(this.props.productID);
    return (
      <form id="form-prod" onSubmit={this.handleSubmit}>
        <button type="submit" className="btn-buy">
          compra ahora . 49<span>.99€</span>
        </button>
      </form>
    );
  }
}

export default PaymentButton;
