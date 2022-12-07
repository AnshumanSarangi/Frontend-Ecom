import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Product(props) {
  //destructure props
  const { products } = props;

  //react rating star options
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    size: window.innerWidth < 600 ? 20 : 25,
    activeColor: "tomato",
    value: products.ratings,
    isHalf: true,
  };

  return (
    // <Link to={products._id}>
    <div className="flex flex-col m-4 hover:shadow-md hover:shadow-[#1a2834] bg-[#92adbd] rounded-lg max-w-xs h-auto hover:scale-105 transform transition duration-500">
      {/* <img
        className="flex max-w-[300px] h-72 ml-[10px] mt-[10px] text-[#1a2834]"
        src={products.image[0].url}
        alt={products.name}
      /> */}
      <p className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">
        {products.name}
      </p>
      <div className="flex mx-10 justify-start text-[#1a2834]">
        <ReactStars {...options} />
        <span className="m-2 font-normal">
          ({products.numberOfReviews} Reviews)
        </span>
      </div>
      <span className="text-[#1a2834] font-medium">
        Rs. {products.price} /-
      </span>
    </div>
    // </Link>
  );
}

export default Product;
