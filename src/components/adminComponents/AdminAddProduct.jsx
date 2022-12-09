import React from "react";
import axios from "axios";

function AdminAddProduct() {
  async function handleSubmit(event) {
    event.preventDefault();

    // const headers = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `bearer ${accessToken}`,
    //   },
    // };

    const enteredProductName = event.target.productName.value;
    const enteredProductDescription = event.target.description.value;
    const enteredProductPrice = event.target.price.value;
    const enteredProductCategory = event.target.category.value;
    const enteredProductImage = event.target.images.value;

    let response = await axios.post(
      `http://localhost:5000/api/v1/admin/product/new`,
      {
        name: enteredProductName,
        description: enteredProductDescription,
        price: enteredProductPrice,
        category: enteredProductCategory,
        images: enteredProductImage,
      }
      // headers
    );
    console.log("Product Added", response);
  }

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
            id="admin-product-register-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Product Name</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Enter Product Name"
              id="productName"
              name="productName"
            />

            <label htmlFor="description">Describe Product</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              id="description"
              name="description"
            />

            <label htmlFor="price">Price Per Piece</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Price In Number"
              id="price"
              name="price"
            />

            <label htmlFor="category">Category</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Define Categories"
              id="category"
              name="category"
            />

            <label htmlFor="images">Add Images</label>
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              id="images"
              name="images"
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
