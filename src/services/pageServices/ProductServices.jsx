import { useState, useEffect } from "react";
import React from "react";
import Product from "../../components/pageComponents/Product";

function ProductServices() {
  const [products, setProducts] = useState([]);

  const axios = require("axios").default;

  const url = `https://jsonplaceholder.typicode.com/todos/`;

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(url);
      console.log("Product Axios Response: ", response.data);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      {products.map((element) => {
        console.log(element);
        return <Product key={element.id} products={element} />;
      })}
    </div>
  );
}

export default ProductServices;
