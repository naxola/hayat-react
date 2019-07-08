import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Terms extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Terminos y condiciones</title>
        </Helmet>
        <div className="wrapper">
          <section>
            <div className="page">
              <h1>Terminos y condiciones</h1>
              <p>Página de terminos</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Terms;
