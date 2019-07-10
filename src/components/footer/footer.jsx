import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

//Se hace así porque es un stateless component
class Footer extends Component {
  render() {
    const preload = {
      data: [
        {
          name: "Legal",
          url: "/legal"
        },
        {
          name: "Términos",
          url: "/terms"
        },
        {
          name: "Política de privacidad",
          url: "/privacy"
        },
        {
          name: "Contacto",
          url: "/contact"
        },
        {
          name: "Cookies",
          url: "/cookies"
        }
      ]
    };

    return (
      <footer className="footer">
        <div className="lower-footer">
          <div className="brand-trademark">
            <span>© Hayat Iberia S.L. 2019. All rights reserved</span>
          </div>
          <div className="line">
            {preload.data.map((item, i) => (
              <Link to={item.url} className="link" key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
