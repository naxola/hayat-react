import React from "react";

//Se hace así porque es un stateless component
const Footer = () => {
  return (
    <footer>
      <div className="brand-trademark">
        <span>© Hayat Iberia S.L. 2019. All rights reserved</span>
      </div>
      <div className="line">
        <a href="/legal">Legal</a>
        <a href="/terminos">Terminos</a>
        <a href="/politica">Politica</a>
        <a href="/conctacto">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
