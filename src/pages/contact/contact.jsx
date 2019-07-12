import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./contact.css";

class Contact extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contacto</title>
        </Helmet>
        <div className="wrapper">
          <section>
            <div className="container-70">
              <div className="page">
                <h1>Contacto</h1>
                <div className="contacto">
                  <h3>Atención a cliente en España</h3>
                  <p>
                    <a href="mailto:info@hayat-co.com">info@hayat-co.com</a>
                  </p>
                  <br />
                  <h3>¿Quieres ser distribuidor?</h3>
                  <p>
                    <a href="mailto:distributor@hayat-co.com">
                      distributor@hayat-co.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
