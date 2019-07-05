import React, { Component } from "react";
import TabsComponent from "../../components/tabscomponent/tabscomponent";
import Directions from "../../assets/directions.svg";
import Information from "../../assets/info.svg";
import Ingredients from "../../assets/lab-microscope.svg";
import Like from "../../assets/like.svg";
import "./productinfo.css";

class ProductInfo extends Component {
  state = {};
  render() {
    return (
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
            Con 15 tecnologías este serum se centra en la protección diaria de
            los agentes externos y de los múltiples signos de la edad en un
            mismo producto por la combinación única de principios activos de
            alta calidad.
          </p>
          <p>Estos principios son:</p>
          <ol>
            <li>Elastina vegetal</li>
            <li>Ácido Hialurónico</li>
            <li>
              Fermento antipolución SynAke complejo peptídico (la proteína
              Waglerin-1 relaja las arrugas y líneas de expresión, imitando el
              conocido efecto Botox)
            </li>
            <li>
              SynColl complejo peptídico (Palmitoyl tripeptide-5) que estimula
              la formación natural de colágeno
            </li>
            <li>Argirelina complejo peptídico (hexapeptide)</li>
            <li>
              Zirhafirm (rico en phytoecdyesteroides, principalmente
              20-hydroxiecdysona)
            </li>
            <li>extracto de raíz de maral (rhaponticum carthamoides)</li>
            <li>Healerine</li>
            <li>fermentos PH4</li>
            <li>
              Una base nutritiva de vitaminas B3, B5, B6, liposimas A-C-E y
              células madre de naranja
            </li>
          </ol>
          <p>
            <span>Nota:</span> En nuestras formulaciones y desarrollos tratamos
            de minimizar el impacto residual en nuestro medio ambiente. Este
            producto se ha desarrollado teniendo en cuenta nuestras políticas de
            cuidado con la naturaleza, medio ambiente y animales.
          </p>
        </div>
        <div label="Modo de uso" imgSource={Directions}>
          <p>
            Aplicar con el rostro limpio antes de cualquier crema, por la mañana
            y por la noche, extendiendo el producto con movimientos suaves por
            el rostro
          </p>
        </div>
        <div label="Ingredientes" imgSource={Ingredients}>
          <p>
            Aqua, Propanediol, Glycerin, Niacinamide, Hydrolized Wheat Protein,
            Panthenol, Pyridoxine HCL, Sodium Hyaluronate, Arginine, Retinyl
            Palmitate, Ascorbyl Glucoside, Ascorbyl Palmitate, Citrus aurantium
            Dulcis Callus Culture Extract, Zizyphus jujuba Seed Extract, Pichia
            Ferment Lysate Filtrate, Tocopheryl Acetate, Xanthan Gum, Pentylene
            Glycol, Lecithin, Dipeptide Diaminobutyroyl Benzylamide Diacetate,
            Palmitoyl Tripeptide-5, Gluconolactone, Caprylyl Glycol,
            Phytoecdysteroids, Acetyl Hexapeptide-8, Calcium Gluconate, Phytic
            Acid, Benzyl Alcohol, Potassium Sorbate, Sodium Benzoate.
          </p>
        </div>
        <div label="Reviews" imgSource={Like}>
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </TabsComponent>
    );
  }
}

export default ProductInfo;
