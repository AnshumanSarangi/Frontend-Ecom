import React from "react";

function AdminAddProduct() {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg bg-[#92adbd] max-w-sm text-center shadow-md shadow-[#1a2834]">
        <div className="py-3 px-6 border-b text-[#1a2834] font-medium border-gray-300 uppercase text-2xl">
          Add New Product To The Store
        </div>
        <div className="p-6">
          <form
            method="POST"
            className="flex flex-col mx-auto space-y-5 justify-center px-3 py-5"
            id="register-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Product Name</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Enter Product Name"
              id="name"
              name="name"
              value={user.username}
              onChange={handleInputs}
            />

            <label htmlFor="description">Describe Product</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              id="description"
              name="description"
              value={user.emailAddress}
              onChange={handleInputs}
            />

            <label htmlFor="price">Price Per Piece</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Price In Number"
              id="price"
              name="price"
              value={user.password}
              onChange={handleInputs}
            />

            <label htmlFor="category">Category</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Define Categories"
              id="category"
              name="category"
              value={user.password}
              onChange={handleInputs}
            />

            <label htmlFor="images">Add Images</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              id="images"
              name="images"
              value={user.password}
              onChange={handleInputs}
            />

            <button className="inline-block px-6 py-2.5 bg-[#1a2834] text-[#92adbd] font-medium text-xs leading-tight uppercase rounded hover:bg-[#0a2f4f] active:bg-[#1a2834] transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAddProduct;
