import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import components
import Header from "./components/layoutComponents/Header";
import Footer from "./components/layoutComponents/Footer";
import Login from "./components/pageComponents/Login";
import Product from "./components/pageComponents/Product";
import AdminAddProduct from "./components/adminComponents/AdminAddProduct";
import Register from "./components/pageComponents/Register";
import ProductServices from "./services/pageServices/ProductServices";
import AdminDashboard from "./components/adminComponents/AdminDashboard";
import AdminProducts from "./components/adminComponents/AdminProducts";
import AdminUsersServices from "./services/adminServices/AdminUsersServices";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user/new" element={<Register />} />
        <Route path="/admin/product/new" element={<AdminAddProduct />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsersServices />} />
        <Route exact path="/" element={<ProductServices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
