import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="flex">
      <div className="w-fit h-screen bg-[#1a2834] py-0 px-[2%]">
        <div className="text-[#92adbd] hover:text-white active:text-white text-xl font-semibold font-serif transform transition duration-300 hover:scale-110 active:scale-95 cursor-pointer">
          <Link to="/">Admin Dashboard</Link>
        </div>
        <nav className="flex cursor-pointer">
          <ul className="items-baseline p-2 m-2 list-none">
            <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
              <Link to="/admin/users">Users</Link>
            </li>
            <hr />
            <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
              <Link to="/admin/products">Products</Link>
            </li>
            <hr />
            <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
              {/* <Link to="/add-product">Orders</Link> */}Orders
            </li>
            <hr />
          </ul>
        </nav>
      </div>
      <div className="text-3xl">Content Goes Here</div>
    </div>
  );
}

export default AdminDashboard;
