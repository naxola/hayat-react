import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/peptos-hero.png";
import "./cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Carrito</title>
        </Helmet>
        <div className="wrapper">
          <div className="container-90">
            <section>
              <div className="page">
                <h1>Carrito</h1>
                <div className="cart-list-items">
                  <div className="cart-list-header">
                    <ul>
                      <li>Producto</li>
                      <li>Cantidad</li>
                      <li>Precio</li>
                    </ul>
                  </div>
                  <div className="cart-list-content">
                    <div className="cart-item">
                      <div className="product-img">
                        <Link to="/">
                          <img src={HeroImg} />
                        </Link>
                      </div>
                      <div className="item-data">
                        <div className="cart-item-content">
                          <div className="item-title">Titulo de producto</div>
                          <div className="item-description">
                            Breve descripción del producto
                          </div>
                        </div>
                        <div className="cart-item-numbers">
                          <div className="cart-quantity">
                            <span>-</span>
                            <input type="text" value={1} />
                            <span>+</span>
                          </div>
                          <div className="item-description-line">1x40.25€</div>

                          <div className="item-subtotal">
                            <span>
                              40<div className="decimal">.99</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>Página de carrito</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
