import React from "react";

function ProductDetails() {
  return (
    <div className="flex flex-col m-4 hover:shadow-md hover:shadow-[#1a2834] bg-[#92adbd] rounded-lg max-w-xs h-auto hover:scale-105 transform transition duration-500">
      <img
        className="flex max-w-lg h-72 ml-[10px] mt-[10px] text-[#1a2834]"
        src={products.image} // map at image
        alt={products.name}
      />
      <h5 className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">
        {products.name}
      </h5>
      <span className="text-[#1a2834] font-medium">
        Rs. {products.price} /-
      </span>
      <div>
        <h6 className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">
          Deascription
        </h6>
        <p className="m-2 font-normal">{products.description}</p>
      </div>
      <div>
        <h6 className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">
          Reviews
        </h6>
        <p className="m-2 font-normal">{products.reviews}</p>
        {/* map at reviews */}
      </div>
      <div>
        <h6 className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">
          In Stock
        </h6>
        <p className="m-2 font-normal">{products.stock}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
