import React, { Component } from "react";
import logo from "../../assets/logo-hayat-white.png";

import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state.isToggleOn);
  }
  render() {
    let menuActive = this.state.isToggleOn ? "show" : "hidden";

    return (
      <header>
        <div className="container-70 centered">
          <div className="header-inner header-container">
            <div className="nav-toggle" onClick={this.handleClick}>
              <a href="#" className="icon">
                <i className="fa fa-lg fa-bars" />
              </a>
            </div>

            <a href="#" className="logo">
              <img src={logo} alt="Hayat logo" />
            </a>
            <nav className={menuActive}>
              <div className="nav-header" />
              <div className="nav-toggle" onClick={this.handleClick}>
                <a href="#" className="icon">
                  <i className="fa fa-lg fa-close" />
                </a>
              </div>
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
            <div className="cart">
              <a href="#" className="cart icon">
                <i className="fa fa-lg fa-shopping-cart" />
                <span>2</span>
              </a>
            </div>
          </div>
        </div>
        <div id="banner" className="banner">
          <div className="container-70 centered">
            <p>
              <span>Envíos gratuítos</span> a toda la península
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
