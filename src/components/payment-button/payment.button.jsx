import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../core/actions/cart.actions";
import { Redirect } from "react-router-dom";

class PaymentButton extends Component {
  state = {
    toCart: false
  };
  handleClick = item => {
    this.props.addToCart(item);
    this.setState(() => ({
      toDashboard: true
    }));
  };
  divideNumero(number) {
    let a = (number + "").split(".");
    return { integer: a[0], decimal: a[1] };
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/cart" />;
    }

    let precio = this.divideNumero(this.props.Item.price);
    return (
      <button
        type="submit"
        onClick={() => {
          this.handleClick(this.props.Item);
        }}
        className="btn-buy"
      >
        compra ahora . {precio.integer}
        <span>{precio.decimal}€</span>
      </button>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(PaymentButton);
