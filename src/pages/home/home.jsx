import React, { Component } from "react";

import Banner from "../../components/banner/banner";
import Hero from "../../components/hero/hero";
import ProductInfo from "../../components/productinfo/productinfo";
import PanelGrid from "../../components/pannelgrid/pannelgrid";
import Features from "../../components/features/features";
import PaymentButton from "../../components/payment-button/payment.button";

import "./home.css";
import { Helmet } from "react-helmet";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { theposition: "", isVisible: false, productId: 1 };
  }
  componentWillMount() {}
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    /*  var element = document.getElementById("form-prod");
    element.addEventListener("show", this.isInViewport);*/
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      theposition: scrolled
    });
  };
  isInViewport = element => {
    console.log("llamaa");
    var anchoViewport =
      window.innerWidth || document.documentElement.clientWidth; //Clientwidth da soporte si es ie (evitamos problemas)
    var altoViewport =
      window.innerHeight || document.documentElement.clientHeight;
    var caja = element.getBoundingClientRect();
    return (
      caja.top >= 0 &&
      caja.bottom <= altoViewport &&
      caja.left >= 0 &&
      caja.right <= anchoViewport
    );
  };
  render() {
    let overlyButton =
      this.state.theposition < 0.2
        ? "purchase-overly"
        : "purchase-overly purchase-overly--shown";

    return (
      //console.log(this.isInViewport(this.element));
      <React.Fragment>
        <Helmet>
          <title>HAYAT The Authentic - PEPTOS</title>
          <meta
            name="description"
            content="Serum peptos con 15 tecnologías de última generación para tu piel."
          />
          <meta name="keywords" content="Hayat, serum, peptos, formulacion" />
        </Helmet>
        <Banner />
        <div className="wrapper">
          <section>
            <Hero productId={this.state.productId} />
          </section>
          <section>
            <ProductInfo />
          </section>
          <section>
            <PanelGrid />
          </section>
          <section>
            <Features />
          </section>
          <div className={overlyButton}>
            <PaymentButton productID={this.state.productId} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
