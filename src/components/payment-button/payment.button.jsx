import React, { Component } from "react";
import history from "../../core/helpers/history";
import { connect } from "react-redux";
import { addToCart } from "../../core/actions/cart.actions";

class PaymentButton extends Component {
  handleClick = item => {
    this.props.addToCart(item);
    history.push("/cart");
  };
  divideNumero(number) {
    let a = (number + "").split(".");
    return { integer: a[0], decimal: a[1] };
  }

  render() {
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
