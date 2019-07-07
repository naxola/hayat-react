import React, { Component } from "react";
import Helmet from "react-helmet";
import "./faq.css";

class FAQPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>HAYAT | FAQ</title>
        </Helmet>
        <div className="wrapper">
          <section>
            <div className="container-50">
              <div className="page">
                <h1>Preguntas frecuentes</h1>
                <div className="question">
                  <h3>Do you offer a refund policy? </h3>
                  <p>
                    Yes, we offer a 30-day full refund policy across all HAYAT
                    products.
                  </p>
                  <h3>What is your policy on animal testing?</h3>
                  <p>
                    HAYAT labs do not test on animals and do not ask others to
                    do so.
                  </p>
                  <h3>What is HAYAT?</h3>
                  <p>
                    Please read about us in the About us section by clicking
                    here.
                  </p>
                  <h3> Who formulates your products?</h3>
                  <p>
                    {" "}
                    All of HAYAT formulations are made by our in-house team of
                    bio-chemists and materials-chemists in our own lab.
                  </p>
                  <h3> Who manufactures your products?</h3>
                  <p>
                    {" "}
                    All of HAYAT products are manufactured in house in our own
                    factory licensed by Health Spain.
                  </p>
                  <h3> How do I seek further help or offer comments?</h3>
                  <p>
                    {" "}
                    Please visit the contact page here to find a convenient way
                    to reach HAYAT, email or social channels.
                  </p>
                  <h3>
                    {" "}
                    Do you avoid controversial or harmful ingredients in your
                    formulations?
                  </h3>
                  <p>
                    All HAYAT products, are free of parabens, sulphates, mineral
                    oil, methylchloroisothiazolinone, methylisothiazolinone,
                    animal oils, coal tar dyes, formaldehyde, mercury,
                    oxybenzone. If you have questions about any ingredient that
                    we use, please reach out to us here and our lab will provide
                    a response.
                  </p>
                  <h3> Are Your Products Vegan?</h3>
                  <p>
                    {" "}
                    Majority of them are! We have a product description for each
                    product on our website that will indicate if it is vegan,
                    nut-free, oil-free and a whole host of other information!
                  </p>
                  <h3> I Want a Product, But It’s Out of Stock!</h3>
                  <p>
                    {" "}
                    We know there’s nothing worse than waiting! We recommend
                    signing up for our email notifications for products that are
                    out of stock. If you click the “Email Me When in Stock”
                    button underneath the product you’re interested in, we’ll
                    let you know as soon as it’s restocked!
                  </p>
                  <h3>
                    {" "}
                    Can You Tell Me What Products are Suitable for Pregnant or
                    Breastfeeding Women?
                  </h3>
                  <p>
                    {" "}
                    While each ingredient has been tested and is considered safe
                    for topical application, HAYAT products have not been tested
                    on pregnant or breastfeeding women.
                  </p>
                  <h3> How Do I Store Your Products? </h3>
                  <p>
                    We recommend storing all of our products in a cool dry place
                    away from direct sunlight. We suggest storing all of our
                    serums at room temperature, however, there is no harm in
                    refrigerating. Refrigerating our products will not enhance
                    their longevity. We suggest using all products from HAYAT
                    within 6-12 months.
                  </p>
                  <h3> What is the Expiry Date of Your Products?</h3>
                  <p>
                    {" "}
                    The shelf life of our products is indefinite, but we
                    generally suggest using any products from HAYAT within 6-12
                    months. Please consult the period-after-opening symbol to be
                    sure. This can be found on the side of the box, as well as
                    the product itself.
                  </p>
                  <h3> Can You Recommend Products for My Skin Concerns?</h3>
                  <p>
                    Of course, we would love to help! You can submit an inquiry
                    on our contact page and be sure to let us know what
                    products/brands you’re currently interested in, your primary
                    skin concerns, and your currently daily regimen (if you have
                    one).
                  </p>
                  <h3>
                    {" "}
                    How Do I know if My Products are Authentic or Genuine?
                  </h3>
                  <p>
                    {" "}
                    Unfortunately we are unable to verify the authenticity of
                    any products that are not purchased from HAYAT or one of our
                    authorized retailers. To protect yourself from counterfeit
                    products, you can find our products in this website.
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
export default FAQPage;
