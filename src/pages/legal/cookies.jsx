import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Cookies extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Cookies</title>
        </Helmet>
        <div className="wrapper">
          <section>
            <div className="page">
              <h1>Cookies</h1>
              <p>Página de cookies</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Cookies;
