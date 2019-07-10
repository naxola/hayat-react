import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import FAQPage from "./pages/faq/faq";
import NosotrosPage from "./pages/nosotros/nosotros";
import Cookies from "./pages/legal/cookies";
import Privacy from "./pages/legal/privacy";
import Terms from "./pages/legal/terms";
import Legal from "./pages/legal/legal";
import Contact from "./pages/contact/contact";
import Cart from "./pages/cart/cart";

import { Router, Switch, Route } from "react-router-dom";
import history from "./core/helpers/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pages/nosotros" exact component={NosotrosPage} />
          <Route path="/pages/faq" exact component={FAQPage} />
          <Route path="/cookies" exact component={Cookies} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/legal" exact component={Legal} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
