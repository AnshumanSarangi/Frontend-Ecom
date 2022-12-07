import React from "react";

function AdminDashboard() {
  return (
    <div className=" w-full h-20 items-center bg-[#1a2834] py-[2%] px-0">
      <div
        className="text-[#92adbd] hover:text-white active:text-white text-xl font-semibold font-serif transform transition duration-300 hover:scale-110 cursor-pointer"
      >
        Admin Dashboard
      </div>
      <nav className=" flex flex-col cursor-pointer">
        <ul className="flex items-baseline p-2 m-2 list-none">
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            {/* <Link to="/products">Users</Link> */}Users
          </li>
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            {/* <Link to="/add-product">Products</Link> */}Products
          </li>
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            {/* <Link to="/add-product">Orders</Link> */}Orders
          </li>
        </ul>
          <div>Display Contents Here</div>
      </nav>
    </div>
  );
}

export default AdminDashboard;
