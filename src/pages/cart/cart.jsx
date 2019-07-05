import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Carrito</title>
        </Helmet>
        <div className="wrapper">
          <div className="container-70">
            <h1>Carrito</h1>
            <p>Página de carrito</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
