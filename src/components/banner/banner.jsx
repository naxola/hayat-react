import React, { Component } from "react";
import "./banner.css";

class Banner extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="banner" className="banner">
          <div className="container-70 centered">
            <p>
              <span>Envío gratis</span> a toda la península
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
