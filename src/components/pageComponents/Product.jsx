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
    value: 4,
    isHalf: true,
  };

  return (
    // <Link to={products._id}>
    <div className="flex flex-col m-4 hover:shadow-md hover:shadow-[#1a2834] bg-[#92adbd] rounded-lg max-w-xs h-auto hover:scale-105 transform transition duration-500">
      <img
        className="flex max-w-[300px] h-72 ml-[10px] mt-[10px] text-[#1a2834]"
        src="https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0"
        alt="HEllo"
      />
      <p className="text-xl font-semibold mt-1 mb-0 text-[#1a2834]">Hello</p>
      <div className="flex mx-10 justify-start text-[#1a2834]">
        <ReactStars {...options} />
        <span className="m-2 font-normal">(256 Reviews)</span>
      </div>
      <span className="text-[#1a2834] font-medium">Rs. 999 /-</span>
      <button className="inline-block px-6 py-2.5 bg-[#0a2f4f] text-[#92adbd] font-medium text-xs leading-tight uppercase rounded hover:bg-[#1a2834] active:bg-[#0a2f4f] transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
        Add To Cart
      </button>
    </div>
    // </Link>
  );
}

export default Product;
