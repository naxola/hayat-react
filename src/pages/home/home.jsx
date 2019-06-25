import React, { Component } from "react";
import HeroImg from "../../assets/hero-img.png";
import "./home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { theposition: "" };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
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

  render() {
    console.log(this.state.theposition);

    let overlyButton =
      this.state.theposition < 0.4
        ? "purchase-overly"
        : "purchase-overly purchase-overly--shown";

    return (
      <div className="wrapper">
        <section className="hero">
          <div className="inner">
            <div className="clipper">
              <h1>
                <span>PEPTOS </span> YA HA LLEGADO!
              </h1>
            </div>
            <div className="anim-pannel">
              <p>Consigue una piel luminosa, hidratada y sin imperfecciones</p>
              <a href="#" className="read-btn primary">
                ¡Me lo llevo!
              </a>
            </div>
          </div>
          <div className="image-hero">
            <img src={HeroImg} alt="Serum Peptos" />
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h1>Nuevo concepto de formulación cosmética</h1>
            <p>
              Mezclar cada principio de la manera correcta, lo cambia todo. No
              solo el uso de activos de alta gama garantiza un producto eficaz
              sino que además se necesitan años de investigación, ciencia y arte
              para concluir con la mejor combinación de ingredientes y conseguir
              los mejores resultados en tu piel. El resultado, PEPTOS.Descubre
              el nuevo concepto en cosmética en HAYAT
            </p>
          </div>
        </section>
        <section className="product-description">
          <div className="container">
            <h1>Cosmética efectiva y saludable</h1>
            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Efectiva</h2>
                <p>
                  Todos los productos Freshly contienen más del 99,0% de
                  ingredientes naturales de alta calidad, con concentraciones
                  excepcionales de activos naturales y ecológicos innovadores.
                  Siempre siguiendo los más estrictos estándares de cosmética
                  natural. No sólo es natural, es Freshly.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Vegano</h2>
                <p>
                  Nuestros productos son aptos para veganos. No están formulados
                  con ningún ingrediente de origen animal.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Love Animals</h2>
                <p>
                  Vamos mucho más allá de la normativa que prohíbe el testeo en
                  animales y somos activos con la causa, siendo una marca que
                  pone a los animales, como las personas, en el centro.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Medio ambiente</h2>
                <p>
                  Estamos comprometidos con el medio ambiente. Por ello, el
                  packaging de los productos es de aluminio, reutilizable y 100%
                  reciclable.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Detox</h2>
                <p>
                  Vivimos expuestos a multitud de toxinas, desintoxica tu piel
                  con el efecto detox de ingredientes como el alga fucus y el té
                  rooibos.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <img src="#" />
              </div>
              <div className="item-content">
                <h2>Sostenible</h2>
                <p>
                  Estamos comprometidos con el medio ambiente. Por ello, el
                  packaging de los productos es de aluminio, reutilizable y 100%
                  reciclable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={overlyButton}>
          <form action="#" method="post">
            <input type="hidden" name="id[]" value="" />
            <button type="submit" className="btn-buy">
              compra ahora . 49<span>.99€</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
