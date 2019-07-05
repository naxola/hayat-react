import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Legal extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Legal</title>
        </Helmet>
        <div className="wrapper">
          <h1>Legal</h1>
          <p>Página de legal</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Legal;
