import React, { Component } from "react";
import logo from "../../assets/logo-hayat-white.png";
import { Link } from "react-router-dom";

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
        <div className="header-container">
          <div className="container-70 centered">
            <div className="header-container">
              <div className="nav-toggle" onClick={this.handleClick}>
                <a href="#" className="icon">
                  <i className="fa fa-lg fa-bars" />
                </a>
              </div>
              <Link to="/" className="logo">
                <img src={logo} alt="Hayat logo" />
              </Link>

              <nav className={menuActive}>
                <div className="nav-wrapper">
                  <div className="nav-toggle">
                    <a href="#" className="icon" onClick={this.handleClick}>
                      <i className="fa fa-lg fa-close" />
                    </a>
                  </div>
                  <div className="nav-header" />
                  <ul>
                    <li>
                      <Link to="/" className="link" onClick={this.handleClick}>
                        Peptos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pages/nosotros"
                        className="link"
                        onClick={this.handleClick}
                      >
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pages/faq"
                        className="link"
                        onClick={this.handleClick}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="cart">
                <Link to="/cart" className="link" onClick={this.handleClick}>
                  <i className="fa fa-lg fa-shopping-cart" />
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
