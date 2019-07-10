import React, { Component } from "react";

import HeroImg from "../../assets/peptos-hero.png";
import Shadow from "../../assets/shadow.png";
import PaymentButton from "../payment-button/payment.button";

import "./hero.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <div className="image-hero">
            <div className="img-container">
              <img src={HeroImg} className="product-img" alt="Serum Peptos" />
              <img src={Shadow} alt="" className="shadow" />
            </div>
          </div>
          <div className="color-overlay" />
          <div className="inner">
            <h1>Peptos booster serum</h1>
            <h2>
              Con péptidos, ácido hialurónico, fermentos detox y vitaminas
            </h2>
            <div className="pay-widget">
              <PaymentButton Item={this.props.item} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
