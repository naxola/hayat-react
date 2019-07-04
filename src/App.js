import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import FAQPage from "./pages/FAQ/faq";
import NosotrosPage from "./pages/nosotros/nosotros";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pages/nosotros" exact component={NosotrosPage} />
          <Route path="/pages/faq" exact component={FAQPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
