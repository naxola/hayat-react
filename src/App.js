import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import { BrowserRouter, Route } from "react-router-dom";

const prueba = () => <div>ESto es una prueba</div>;
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
