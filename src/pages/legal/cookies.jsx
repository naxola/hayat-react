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
          <div className="page">
            <h1>Cookies</h1>
            <p>Página de cookies</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cookies;
