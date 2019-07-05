import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Cookies extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Cookies</title>
        </Helmet>
        <div className="wrapper">
          <h1>Cookies</h1>
          <p>Página de cookies</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Cookies;
