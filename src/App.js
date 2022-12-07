import React from "react";
import Header from "./components/layoutComponents/Header";
import Footer from "./components/layoutComponents/Footer";
import RegisterServices from "./services/pageServices/RegisterServices";
import ProductServices from "./services/pageServices/ProductServices";
import TestContext from "./context/testContext/TestContext";
import Dummy from "./components/Dummy";

function App() {
  return (
    <TestContext.Consumer>
      <Header />
      {/* <RegisterServices /> */}
      {/* <ProductServices /> */}
      <Dummy />
      <Footer />
    </TestContext.Consumer>
  );
}

export default App;
