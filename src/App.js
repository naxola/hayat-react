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
import Information from "./pages/checkout/information/information";
import Payment from "./pages/checkout/payment/payment";

import { HashRouter, Switch, Route } from "react-router-dom";
import history from "./core/helpers/history";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
const MainLayout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);
const SideLayout = props => <div>{props.children}</div>;
function App() {
  return (
    <div className="App">
      <HashRouter history={history}>
        <Switch>
          <AppRoute layout={MainLayout} path="/" exact component={HomePage} />
          <AppRoute
            layout={MainLayout}
            path="/pages/nosotros"
            exact
            component={NosotrosPage}
          />
          <AppRoute
            layout={MainLayout}
            path="/pages/faq"
            exact
            component={FAQPage}
          />
          <AppRoute
            layout={MainLayout}
            path="/cookies"
            exact
            component={Cookies}
          />
          <AppRoute layout={MainLayout} path="/terms" exact component={Terms} />
          <AppRoute
            layout={MainLayout}
            path="/privacy"
            exact
            component={Privacy}
          />
          <AppRoute layout={MainLayout} path="/legal" exact component={Legal} />
          <AppRoute
            layout={MainLayout}
            path="/contact"
            exact
            component={Contact}
          />
          <AppRoute layout={MainLayout} path="/cart" exact component={Cart} />
          <AppRoute
            layout={SideLayout}
            path="/checkout/information"
            exact
            component={Information}
          />
          <AppRoute
            layout={SideLayout}
            path="/checkout/payment"
            exact
            component={Payment}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
