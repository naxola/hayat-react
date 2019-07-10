import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../core/helpers/history";

import { addQuantity, subtractQuantity } from "../../core/actions/cart.actions";

import HeroImg from "../../assets/peptos-hero.png";
import "./cart.css";

class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  handleBuyClick = () => {
    history.push("./checkout");
  };
  divideNumero(number) {
    let a = (number + "").split(".");
    return { integer: a[0], decimal: a[1] };
  }
  render() {
    let totalPrice = this.divideNumero(
      Math.round(this.props.cartState.totalPrice * 100) / 100
    );
    let addedItems = this.props.cartState.addedItems.map((item, i) => {
      let precio = this.divideNumero(
        Math.round(item.price * item.quantity * 100) / 100
      );
      return (
        <div className="cart-list-content" key={i}>
          <div className="cart-item">
            <div className="product-img">
              <Link to="/">
                <img src={HeroImg} alt="" />
              </Link>
            </div>
            <div className="item-data">
              <div className="cart-item-content">
                <div className="item-title">{item.title}</div>
                <div className="item-description">{item.desc}</div>
              </div>
              <div className="cart-item-numbers">
                <div className="cart-quantity">
                  <span onClick={() => this.handleSubtractQuantity(item.id)}>
                    -
                  </span>
                  <input type="text" value={item.quantity} readOnly />
                  <span onClick={() => this.handleAddQuantity(item.id)}>+</span>
                </div>
                <div className="item-description-line">
                  {item.quantity}x {item.price}€
                </div>

                <div className="item-subtotal">
                  <span className="price-format">
                    {precio.integer}
                    <div className="decimal">.{precio.decimal}</div>€
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    let cart = this.props.cartState.addedItems.length ? (
      <div className="cart-list-items">
        <div className="cart-list-header">
          <ul>
            <li>Producto</li>
            <li>Cantidad</li>
            <li>Precio</li>
          </ul>
        </div>
        {addedItems}
        <div className="cart-list-footer">
          <form className="cart-form" onSubmit={() => this.handleBuyClick()}>
            <div className="cart-resume-total">
              <div className="terms">
                <input
                  id="checkTerms"
                  type="checkbox"
                  value="true"
                  required="required"
                  className="terms-checkbox"
                />
                <label className="terms-text">
                  He leído y acepto la{" "}
                  <Link to="/privacy" className="link-terms">
                    Politica de privacidad
                  </Link>{" "}
                  y los{" "}
                  <Link to="/terms" className="link-terms">
                    Términos y condiciones
                  </Link>{" "}
                  de Hayat
                </label>
              </div>
              <div className="price">
                <span className="price-text">Precio total</span>
                <span className="cart-price-value">
                  <span className="price-format">
                    {totalPrice.integer}
                    <div className="decimal">.{totalPrice.decimal}</div>€
                  </span>
                </span>
              </div>
            </div>
            <div className="cart-resume-actions">
              <a className="cart-back">Volver</a>
              <button type="submit" className="button">
                comprar
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <p>Carrito Vacio</p>
    );

    return (
      <React.Fragment>
        <Helmet>
          <title>Carrito</title>
        </Helmet>
        <div className="wrapper">
          <div className="container-80">
            <section>
              <div className="page">
                <h1>Carrito</h1>

                {cart}
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { cartState: state.cart };
};
const mapDispatchToProps = dispatch => {
  return {
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
