import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="container">
          <div className="nav-toggle">
            <span>Primero</span>
            <span>Primero</span>
            <span>Tercerp</span>
          </div>
          <a href="#" className="logo">
            <img src="#" alt="Hayat logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Serums</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="cart">
            Carrito
            <span className="cart-icon" />
            <span className="cart-counter" />
          </a>
        </div>

        <div id="banner" className="banner">
          Envíos gratuítos a toda la península
        </div>
      </header>
    );
  }
}

export default Header;
