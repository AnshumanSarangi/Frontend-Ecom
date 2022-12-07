import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layoutComponents/Header";
import Footer from "./components/layoutComponents/Footer";
import RegisterServices from "./services/pageServices/RegisterServices";
import ProductServices from "./services/pageServices/ProductServices";
import Login from "./components/pageComponents/Login";
import Product from "./components/pageComponents/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <RegisterServices /> */}
      {/* <ProductServices /> */}
      <Login />
      <Product />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
