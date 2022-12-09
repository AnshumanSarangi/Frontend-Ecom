import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Product from "../../components/pageComponents/Product";

function ProductServices() {
  const [products, setProducts] = useState([]);
  

  const url = `http://localhost:5000/api/v1/products`;

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(url);
      // console.log("Product Axios Response: ", response.data);
      setProducts(response.data.products);
    }
    getProducts();
  }, []);

  return products ? <Loaded products={products} /> : <Loading />;
}

function Loading() {
  return <h2>loading...</h2>;
}
function Loaded(props) {
  const { products } = props;
  return (
    <div className="grid grid-cols-4">
      {products.map((element) => {
        // console.log(element);
        return <Product key={element.id} products={element} />;
      })}
    </div>
  );
}

export default ProductServices;
