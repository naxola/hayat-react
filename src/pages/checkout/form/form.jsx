import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./form.css";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <form action="#" className="floating-labels animate-floating-labels">
        <div className="section section-contact-information">
          <div className="section-header">
            <h2>Información de contacto</h2>
          </div>
          <div className="section-content">
            <div className="fieldset">
              <div className="field">
                <div className="field__input-wrapper">
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
                    size="30"
                    type="email"
                    name="checkout[email]"
                    id="checkout_email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-shipping">
          <div className="section-header">
            <h2>Dirección de envío</h2>
          </div>
          <div className="section-content">
            <div className="fieldset">
              <div className="field field-half">
                <div className="field__input-wrapper">
                  <input
                    placeholder="Nombre (opcional)"
                    autocomplete="shipping given-name"
                    data-trekkie-id="shipping_firstname_field"
                    data-backup="first_name"
                    class="field-input"
                    size="30"
                    type="text"
                    name="checkout[shipping_address][first_name]"
                    id="checkout_shipping_address_first_name"
                  />
                </div>
              </div>
              <div className="field field-half">
                <div className="field__input-wrapper">
                  <input
                    placeholder="Apellidos"
                    autocomplete="shipping family-name"
                    data-backup="last_name"
                    data-trekkie-id="shipping_lastname_field"
                    class="field-input"
                    aria-required="true"
                    size="30"
                    type="text"
                    name="checkout[shipping_address][last_name]"
                    id="checkout_shipping_address_last_name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="field__input-wrapper">
                  <input
                    placeholder="Empresa"
                    autocomplete="shipping organization"
                    data-trekkie-id="shipping_company_field"
                    data-backup="company"
                    class="field-input"
                    size="30"
                    type="text"
                    name="checkout[shipping_address][company]"
                    id="checkout_shipping_address_company"
                  />
                </div>
              </div>
              <div className="field">
                <div className="field__input-wrapper">
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
                    class="field-input"
                    size="30"
                    type="text"
                    name="checkout[shipping_address][address1]"
                    id="checkout_shipping_address_address1"
                  />
                </div>
              </div>

              <div className="field">
                <div className="field__input-wrapper" />

                <input
                  placeholder="Ciudad"
                  autocomplete="shipping address-level2"
                  autocorrect="off"
                  data-trekkie-id="shipping_city_field"
                  data-backup="city"
                  class="field-input"
                  aria-required="true"
                  size="30"
                  type="text"
                  name="checkout[shipping_address][city]"
                  id="checkout_shipping_address_city"
                />
              </div>

              <div className="field field-third field--show-floating-label">
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
                    class="field-input field__input--select"
                    aria-required="true"
                    name="checkout[shipping_address][country]"
                    id="checkout_shipping_address_country"
                  >
                    <option data-code="ES" selected="selected" value="Spain">
                      España
                    </option>
                  </select>
                </div>
              </div>
              <div className="field field-third field--show-floating-label">
                <div className="field__input-wrapper field__input-wrapper--select">
                  <label
                    class="field__label field__label--visible"
                    for="checkout_shipping_address_province"
                  >
                    Provincia
                  </label>
                  <select
                    placeholder="Provincia"
                    autocomplete="shipping address-level1"
                    data-trekkie-id="shipping_province_field"
                    data-backup="province"
                    class="field-input field__input--select"
                    aria-required="true"
                    name="checkout[shipping_address][province]"
                    id="checkout_shipping_address_province"
                  >
                    <option disabled="">Provincia</option>
                  </select>
                </div>
              </div>
              <div className="field field-third">
                <div className="field__input-wrapper">
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
                    class="field-input field__input--zip"
                    aria-required="true"
                    size="30"
                    type="text"
                    name="checkout[shipping_address][zip]"
                    id="checkout_shipping_address_zip"
                  />
                </div>
              </div>
              <div className="field">
                <div className="field__input-wrapper">
                  <input
                    placeholder="Teléfono"
                    autocomplete="shipping tel"
                    data-backup="phone"
                    data-trekkie-id="shipping_phone_field"
                    data-phone-formatter="true"
                    data-phone-formatter-country-select="[name='checkout[shipping_address][country]']"
                    class="field-input field__input--numeric"
                    aria-required="true"
                    size="30"
                    type="tel"
                    name="checkout[shipping_address][phone]"
                    id="checkout_shipping_address_phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section--half-spacing-top section--optional">
          <div class="section-content">
            <div class="checkbox-wrapper">
              <div class="checkbox__input">
                <input size="30" type="hidden" name="checkout[remember_me]" />
                <input name="checkout[remember_me]" type="hidden" value="0" />
                <input
                  class="input-checkbox"
                  data-backup="remember_me"
                  data-trekkie-id="remember_me_field"
                  type="checkbox"
                  value="1"
                  name="checkout[remember_me]"
                  id="checkout_remember_me"
                />
              </div>
              <label class="checkbox__label" for="checkout_remember_me">
                Guardar mi información y consultar más rápidamente la próxima
                vez
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="step__footer">
          <button
            name="button"
            type="submit"
            className="step__footer__continue-btn btn"
          >
            Continuar con envíos
          </button>
          <Link to="/cart" className="">
            Volver al carrito
          </Link>
        </div>
      </form>
    );
  }
}

export default ContactForm;
