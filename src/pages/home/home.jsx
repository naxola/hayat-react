import React, { Component } from "react";
import TabsComponent from "../../components/tabscomponent/tabscomponent";
import HeroImg from "../../assets/peptos-hero.png";
import Shadow from "../../assets/shadow.png";
import Directions from "../../assets/directions.svg";
import Information from "../../assets/info.svg";
import Ingredients from "../../assets/lab-microscope.svg";
import Like from "../../assets/like.svg";
import Environment from "../../assets/environment.svg";
import "./home.css";
import { Helmet } from "react-helmet";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { theposition: "", isVisible: false };
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
    console.log(this.state);
    let overlyButton =
      this.state.theposition < 0.25
        ? "purchase-overly"
        : "purchase-overly purchase-overly--shown";

    return (
      //console.log(this.isInViewport(this.element));
      <div>
        <Helmet>
          <title>HAYAT The Authentic - PEPTOS</title>
          <meta
            name="description"
            content="Serum peptos con 15 tecnologías de última generación para tu piel."
          />
          <meta name="keywords" content="Hayat, serum, peptos, formulacion" />
        </Helmet>
        <div className="wrapper">
          <section className="hero">
            <div className="image-hero">
              <div className="img-container">
                <img src={HeroImg} className="product-img" alt="Serum Peptos" />
                <img src={Shadow} alt="" className="shadow" />
              </div>
            </div>
            <div className="color-overlay" />
            <div className="inner">
              <div>
                <h1>Peptos booster serum</h1>
                <h2>
                  Con péptidos, ácido hialurónico, fermentos detox y vitaminas
                </h2>
                <div className="pay-widget">
                  <form id="form-prod" action="#" method="post">
                    <input type="hidden" name="id[]" value="" />
                    <button type="submit" className="btn-buy">
                      compra ahora . 49<span>.99€</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section>
            <TabsComponent>
              <div label="Información" imgSource={Information}>
                <div className="prop-chart">
                  <div className="prop">
                    <h5>Alcohol-free</h5>
                  </div>
                  <div className="prop">
                    <h5>Oil-free</h5>
                  </div>
                  <div className="prop">
                    <h5>Parabens-free</h5>
                  </div>
                  <div className="prop">
                    <h5>Vegan</h5>
                  </div>
                </div>
                <h2>Serum multi-molecular</h2>
                <p>
                  Con 15 tecnologías este serum se centra en la protección
                  diaria de los agentes externos y de los múltiples signos de la
                  edad en un mismo producto por la combinación única de
                  principios activos de alta calidad.
                </p>
                <p>
                  Estos principios son:
                  <ul>
                    <li>Elastina vegetal</li>
                  </ul>
                  Ácido Hialurónico Fermento antipolución SynAke complejo
                  peptídico (la proteína Waglerin-1 relaja las arrugas y líneas
                  de expresión, imitando el conocido efecto Botox), SynColl
                  complejo peptídico (Palmitoyl tripeptide-5) que estimula la
                  formación natural de colágeno, Argirelina complejo peptídico
                  (hexapeptide), Zirhafirm (rico en phytoecdyesteroides,
                  principalmente 20-hydroxiecdysona) extracto de raíz de maral
                  (rhaponticum carthamoides) Healerine y fermentos PH4 Una base
                  nutritiva de vitaminas B3, B5, B6, liposimas A-C-E y células
                  madre de naranja.
                </p>
                <p>
                  Nota: En nuestras formulaciones y desarrollos tratamos de
                  minimizar el impacto residual en nuestro medio ambiente. Este
                  producto se ha desarrollado teniendo en cuenta nuestras
                  políticas de cuidado con la naturaleza, medio ambiente y
                  animales.
                </p>
              </div>
              <div label="Modo de uso" imgSource={Directions}>
                <p>
                  Aplicar con el rostro limpio antes de cualquier crema, por la
                  mañana y por la noche, extendiendo el producto con movimientos
                  suaves por el rostro
                </p>
              </div>
              <div label="Ingredientes" imgSource={Ingredients}>
                <p>
                  Aqua, Propanediol, Glycerin, Niacinamide, Hydrolized Wheat
                  Protein, Panthenol, Pyridoxine HCL, Sodium Hyaluronate,
                  Arginine, Retinyl Palmitate, Ascorbyl Glucoside, Ascorbyl
                  Palmitate, Citrus aurantium Dulcis Callus Culture Extract,
                  Zizyphus jujuba Seed Extract, Pichia Ferment Lysate Filtrate,
                  Tocopheryl Acetate, Xanthan Gum, Pentylene Glycol, Lecithin,
                  Dipeptide Diaminobutyroyl Benzylamide Diacetate, Palmitoyl
                  Tripeptide-5, Gluconolactone, Caprylyl Glycol,
                  Phytoecdysteroids, Acetyl Hexapeptide-8, Calcium Gluconate,
                  Phytic Acid, Benzyl Alcohol, Potassium Sorbate, Sodium
                  Benzoate.
                </p>
              </div>
              <div label="Reviews" imgSource={Like}>
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
            </TabsComponent>
          </section>
          <section className="product-description">
            <h1>Cosmética efectiva y saludable</h1>
            <div className="container-grid">
              <div className="item">
                <div className="item-header">
                  <img src="#" />
                </div>
                <div className="item-content">
                  <h2>Efectiva</h2>
                  <p>
                    Únicamente utilizamos principios activos de altísima calidad
                    que de verdad tienen efecto sobre tu piel. Si es de Hayat,
                    funciona.
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
                    Nuestros productos son aptos para veganos. No están
                    formulados con ningún ingrediente de origen animal.
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
                    ¡Que no te engañen!
                    <br />
                    En la UE, no se permite el testeo en animales de productos
                    cosméticos. Sin emabrgo, esto no quita que queramos y
                    cuidemos tanto como tú a los animales.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-header">
                  <img src={Environment} />
                </div>
                <div className="item-content">
                  <h2>Medio ambiente</h2>
                  <p>
                    Es nuestra piedra angular.
                    <br />
                    Tenemos que cuidar la naturaleza y por eso no solo tratamos
                    de minimizar el impacto ambiental en el packaging (caja 100%
                    reciclable y bote de vidrio) sino que además, tratamos que
                    la producción sea lo más sostenible posible.
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
                    La mayoría de la población vive en entornos urbanos
                    contaminados por los gases producios por vehículos,
                    industrias... Todos estas moléculas llegan a nuestra piel,
                    el órgano mas grande que tenemos. Es por eso que añadimos
                    tecnologías que desintoxican tu piel para que quede
                    protegida desde dentro.
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
                    No solo conseguimos que nuestro packaging de vidrio sea 100%
                    reciclabe y reutilizable sino que hacemos que nuestros
                    proveedores se involucren de manera activa para minimizar el
                    impacto en nuestro medio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="features">
            <div className="container">
              <h1>Nuevo concepto de formulación cosmética</h1>
              <p>
                Mezclar cada principio de la manera correcta, lo cambia todo. No
                solo el uso de activos de alta gama garantiza un producto eficaz
                sino que además se necesitan años de investigación, ciencia y
                arte para concluir con la mejor combinación de ingredientes y
                conseguir los mejores resultados en tu piel. El resultado,
                PEPTOS.Descubre el nuevo concepto en cosmética en HAYAT
              </p>
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
      </div>
    );
  }
}

export default HomePage;
