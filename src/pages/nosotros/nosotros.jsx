import React from "react";

import { Helmet } from "react-helmet";
import "./nosotros.css";

function NosotrosPage() {
  return (
    <div>
      <Helmet>
        <title>HAYAT | Nosotros</title>

        <meta name="keywords" content="Hayat, serum, peptos, formulacion" />
      </Helmet>
      <div className="wrapper">
        <section>
          <div className="container-50">
            <div className="page">
              <h1>Nuestra historia</h1>
              <div className="nosotros">
                <p>
                  Vivimos en un entorno donde la energía para transportarnos,
                  calentarnos, mover grandes industrias, proceden de la
                  combustión de fósiles y derivados del petróleo que dañan
                  nuestro medio ambiente. La piel es el órgano más grande de
                  nuestro cuerpo que funciona como barrera protectora del
                  exterior.
                </p>

                <p>
                  A pesar de ello, absorbemos el 60% de las sustancias químicas
                  de nuestro entorno que con el paso del tiempo, y unido a las
                  responsabilidades del día a día, aceleran el proceso natural
                  del envejecimiento provocando la aparición de enfermedades.
                  ¿Podemos cuidar del medio ambiente a la vez que nuestra piel?
                </p>

                <h2>Los inicios</h2>

                <p>
                  Mi nombre es Mª Carmen y desde hace varios años, uso
                  cosméticos para cuidar y mejorar el aspecto de mi piel. Pero
                  es difícil encontrar la mejor opción entre miles de marcas que
                  prometen ser eficaces pero que en realidad aportan poco valor.
                  Desde la adolescencia he tenido tendencia a tener granos en la
                  piel y siempre me ocurria lo mismo.
                </p>
                <p>
                  En las grandes superficies a pesar de tener precios muy bajos,
                  los principios activos son pobres y de poca calidad. Los que
                  prometen efectividad, son demasiado caros.
                </p>
                <p>
                  La gran mayoría de ellos contienen químicos tóxicos que
                  provocan reacciones en nuestra piel y que son devastadores con
                  el medio ambiente. La salud debe ser un bien común para todo
                  el mundo pero además tenemos que cuidar nuestra tierra y
                  aportar un valor real a todo ser vivo.
                </p>
                <p>
                  La alternativa que se me propuso fué un tratamiento
                  dermatológico, agresivo para la piel en el que se aplican
                  productos para levantarla y generar nuevo tejido dérmico. En
                  aquel momento pensé que esta no podría ser la última via, así
                  que me dediqué a investigar y trabajar con diferentes
                  laboratorios.
                </p>
                <p>
                  Finalmente después de varios cientos de combinaciones y más de
                  un año de investigación, pudimos encontrar la fórmula que no
                  solo regenera la piel sino que la cuida y la protege. A partir
                  de entonces nació HAYAT que significa VIDA. Y es esa la
                  esencia que queremos poner en cada proyecto: Ayudar a las
                  personas con productos eficaces y cuidar del medio ambiente.
                </p>
                <p>
                  <span>Mª Carmen F.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NosotrosPage;
