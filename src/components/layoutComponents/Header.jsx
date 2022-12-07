import React from "react";

//IMPORT ICONS COMPONENT
import { FaShoppingBasket, FaUserCircle, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className=" flex w-full h-20 justify-between items-center bg-[#1a2834] py-0 px-[2%]">
      <div
        className="text-[#92adbd] hover:text-white active:text-white text-3xl font-semibold font-serif transform transition duration-300 hover:scale-110 cursor-pointer"
        onClick="#"
      >
        E-Commerce-Web-App
      </div>
      <div className="flex border border-purple-200 rounded transform transition duration-300 hover:scale-105">
        <input
          type="text"
          className="block w-full px-4 py-0.75 text-[#1a2834] bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm"
          placeholder="Search for Products, Brands and More..."
        />
        <button className="px-4 text-[#92adbd] hover:text-[#1a2834] active:text-[#1a2834] bg-slate-200 border-md rounded-md active:translate-y-[1px] ">
          <FaSearch />
        </button>
      </div>
      <nav className="cursor-pointer">
        <ul className="flex items-baseline p-0 m-0 list-none">
          {/* <li>
            <div className="ml-12 text-sm text-[#1a2834] transform transition duration-300 hover:scale-125 px-4 bg-white border-l rounded">
              <Link to="/login">Login</Link>Login
            </div>
          </li> */}
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            {/* <Link to="/products">Home</Link> */}Home
          </li>
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            {/* <Link to="/add-product">Add Product</Link> */}Products
          </li>
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            Contact
          </li>
          <li className="ml-12 text-sm text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-125 active:underline underline-offset-1">
            About
          </li>
          <li className="ml-12 scale-110 text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-[1.65] ">
            <FaShoppingBasket />
          </li>
          <li className="ml-4 scale-110 text-[#92adbd] hover:text-white active:text-white transform transition duration-300 hover:scale-[1.65] ">
            <FaUserCircle />
          </li>

          {/* <li
            className="ml-12 text-sm text-white hover:text-red-800 transform transition duration-300 hover:scale-125 active:underline underline-offset-0 active:text-red-800"
            onClick="#"
          >
            <Link to="/">Sign Out</Link>Sign Out
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
