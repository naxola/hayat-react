import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import arrow from "../../assets/right-arrow.svg";
import logo from "../../assets/logo-corto.png";
import ContactForm from "./form/form";
import "./checkout.css";

class CheckOut extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Informacion - Hayat - Caja</title>
        </Helmet>
        <div className="wrap">
          <div className="main">
            <Link to="/" className="logo">
              <img
                src={logo}
                alt="Hayat logo"
                className="logo__image--large logo__image"
              />
            </Link>
            <div className="main-header">
              <ul className="breadcrum">
                <li className="breadcrum-item-completed">
                  <Link to="./cart" className="breadcrum-item">
                    Carrito
                  </Link>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-current">
                  <span className="breadcrum-item">Información</span>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-blank">
                  <span className="breadcrum-item">Envio</span>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-blank">
                  <span className="breadcrum-item">Pago</span>
                </li>
              </ul>
              <div className="alternative-payment" />
            </div>
            <div className="main-content">
              <div className="contact-information">
                <ContactForm />
              </div>
            </div>
            <div class="main__footer">
              <div role="contentinfo" aria-label="Pie de página">
                <ul class="policy-list">
                  <li class="policy-list__item">
                    <Link to="./privacy">Política de privacidad</Link>
                  </li>
                  <li class="policy-list__item">
                    <Link to="./privacy">Términos del servicio</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <p>Parte Sidebar</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckOut;
