import React, { Component } from "react";

import HeroImg from "../../assets/peptos-hero.png";
import Shadow from "../../assets/shadow.png";

import "./hero.css";

class Hero extends Component {
  state = {};
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
              <form id="form-prod" action="#" method="post">
                <input type="hidden" name="id[]" value="" />
                <button type="submit" className="btn-buy">
                  compra ahora . 49<span>.99€</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
