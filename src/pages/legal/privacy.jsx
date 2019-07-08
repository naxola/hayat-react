import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Privacy extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Privacy</title>
        </Helmet>
        <div className="wrapper">
          <section>
            <div className="page">
              <h1>Privacidad</h1>
              <p>Página de privacidad</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Privacy;
