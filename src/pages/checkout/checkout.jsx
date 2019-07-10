import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import arrow from "../../assets/right-arrow.svg";
import "./checkout.css";

class CheckOut extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Informacion - Hayat - Caja</title>
        </Helmet>
        <div className="wrap">
          <div className="main">
            <p>Parte Main</p>
            <div className="main-header">
              <ul className="breadcrum">
                <li className="breadcrum-item-completed">
                  <Link to="./cart" className="breadcrum-item">
                    Carrito
                  </Link>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-current">
                  <span className="breadcrum-item">Información</span>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-blank">
                  <span className="breadcrum-item">Envio</span>
                  <img src={arrow} className="arrow" alt="" />
                </li>
                <li className="breadcrum-item-blank">
                  <span className="breadcrum-item">Pago</span>
                </li>
              </ul>
              <div className="alternative-payment">
                <p>Pago alternativo</p>
              </div>
            </div>
            <div className="main-content">
              <div className="contact-information">
                <form action="#">
                  <div className="section-contact-information">
                    <div className="section-header">
                      <h2>Información de contacto</h2>
                    </div>
                    <div className="section-content">
                      <input
                        className="field-input"
                        placeholder="Correo electrónico"
                        autocapitalize="off"
                        spellcheck="false"
                        autocomplete="shipping email"
                        data-trekkie-id="email_field"
                        data-autofocus="true"
                        data-backup="customer_email"
                        aria-describedby="checkout-context-step-one"
                        aria-required="true"
                        class="field__input"
                        size="30"
                        type="email"
                        name="checkout[email]"
                        id="checkout_email"
                      />
                    </div>
                  </div>
                  <div className="section-shipping">
                    <div className="section-header">
                      <h2>Dirección de envío</h2>
                    </div>
                    <div className="section-content">
                      <div className="row-dinamica">
                        <input
                          placeholder="Nombre (opcional)"
                          autocomplete="shipping given-name"
                          data-trekkie-id="shipping_firstname_field"
                          data-backup="first_name"
                          class="field__input"
                          size="30"
                          type="text"
                          name="checkout[shipping_address][first_name]"
                          id="checkout_shipping_address_first_name"
                        />
                        <input
                          placeholder="Apellidos"
                          autocomplete="shipping family-name"
                          data-backup="last_name"
                          data-trekkie-id="shipping_lastname_field"
                          class="field__input"
                          aria-required="true"
                          size="30"
                          type="text"
                          name="checkout[shipping_address][last_name]"
                          id="checkout_shipping_address_last_name"
                        />
                      </div>

                      <input
                        placeholder="Empresa"
                        autocomplete="shipping organization"
                        data-trekkie-id="shipping_company_field"
                        data-backup="company"
                        class="field__input"
                        size="30"
                        type="text"
                        name="checkout[shipping_address][company]"
                        id="checkout_shipping_address_company"
                      />
                      <input
                        placeholder="Dirección (Calle, Portal y Piso)"
                        autocomplete="shipping street-address"
                        autocorrect="off"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-owns="address-autocomplete"
                        aria-expanded="false"
                        aria-required="true"
                        data-backup="address1"
                        data-trekkie-id="shipping_address1_google_autocomplete_field"
                        data-autocomplete-trigger="true"
                        data-autocomplete-title="Sugerencias"
                        data-autocomplete-single-item="1 opción disponible"
                        data-autocomplete-multi-item="{{number}} opciones disponibles"
                        data-autocomplete-item-selection="{{number}} de {{total}}"
                        data-autocomplete-close="Cierra las sugerencias"
                        class="field__input"
                        size="30"
                        type="text"
                        name="checkout[shipping_address][address1]"
                        id="checkout_shipping_address_address1"
                      />
                      <div className="row-dinamica">
                        <input
                          placeholder="Ciudad"
                          autocomplete="shipping address-level2"
                          autocorrect="off"
                          data-trekkie-id="shipping_city_field"
                          data-backup="city"
                          class="field__input"
                          aria-required="true"
                          size="30"
                          type="text"
                          name="checkout[shipping_address][city]"
                          id="checkout_shipping_address_city"
                        />
                        <div class="field__input-wrapper field__input-wrapper--select">
                          <label
                            class="field__label field__label--visible"
                            for="checkout_shipping_address_country"
                          >
                            País / Región
                          </label>
                          <select
                            size="1"
                            autocomplete="shipping country"
                            data-trekkie-id="shipping_country_field"
                            data-backup="country"
                            class="field__input field__input--select"
                            aria-required="true"
                            name="checkout[shipping_address][country]"
                            id="checkout_shipping_address_country"
                          >
                            <option
                              data-code="ES"
                              selected="selected"
                              value="Spain"
                            >
                              España
                            </option>
                          </select>
                        </div>
                        <input
                          placeholder="Código Postal"
                          autocomplete="none"
                          data-backup="zip"
                          data-trekkie-id="shipping_zip_google_autocomplete_field"
                          data-autocomplete-trigger="true"
                          data-autocomplete-title="Sugerencias"
                          data-autocomplete-single-item="1 opción disponible"
                          data-autocomplete-multi-item="{{number}} opciones disponibles"
                          data-autocomplete-item-selection="{{number}} de {{total}}"
                          data-autocomplete-close="Cierra las sugerencias"
                          class="field__input field__input--zip"
                          aria-required="true"
                          size="30"
                          type="text"
                          name="checkout[shipping_address][zip]"
                          id="checkout_shipping_address_zip"
                        />
                      </div>

                      <input
                        placeholder="Teléfono"
                        autocomplete="shipping tel"
                        data-backup="phone"
                        data-trekkie-id="shipping_phone_field"
                        data-phone-formatter="true"
                        data-phone-formatter-country-select="[name='checkout[shipping_address][country]']"
                        class="field__input field__input--numeric"
                        aria-required="true"
                        size="30"
                        type="tel"
                        name="checkout[shipping_address][phone]"
                        id="checkout_shipping_address_phone"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="main-footer">footer</div>
          </div>
          <div className="sidebar">
            <p>Parte Sidebar</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckOut;
