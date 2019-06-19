import React, { Component } from "react";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="hero">
          <div className="inner">
            <div className="clipper">
              <h1>
                <span>Made with Style </span> & Commitment
              </h1>
            </div>
            <div className="anim-pannel">
              <p>
                Phosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinate proactive
                e-commerce via process-centric “outside the box“ thinking.
                Completely pursue scalable customer service through sustainable
                potentialities.
              </p>
              <a href="#" className="read-btn primary">
                comprar
              </a>
            </div>
          </div>
          <div className="image-hero">
            <img src="#" alt="Serum Peptos" />
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
