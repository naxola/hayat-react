import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contacto</title>
        </Helmet>
        <div className="wrapper">
          <div className="page">
            <section>
              <h1>Contacto</h1>
              <p>Página de contacto</p>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
