import React from "react";
import { Link } from "react-router-dom";
import ProductServices from "../../services/pageServices/ProductServices";
import AdminAddProduct from "./AdminAddProduct";

function AdminProducts() {
  return (
    <div>
      {/* <Link to={<AdminAddProduct />}>Add New Product</Link> */}
      <ProductServices />
      <button>Update Product</button>
      <button>Delete Product</button>
    </div>
  );
}

export default AdminProducts;
