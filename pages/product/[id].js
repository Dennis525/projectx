import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import data from "@/utils/data";
import { useRouter } from "next/router";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { query } = useRouter();
  const id = parseInt(query.id); // Convert the id to an integer

  const product = data.products.find((x) => x.id === id);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const handleButtonClick = () => {
    toast("We are directing you to whatsapp!", { type: "success" });
    setTimeout(() => {
      window.open("whatsapp://send?phone=254759440518", "_blank");
    }, 2000);
  };
  const toastOptions = {
    toastStyle: {
      background: "black",
      color: "white",
    },
    progressBarStyle: {
      background: "blue",
    },
    toastContainerStyle: {
      transition: "transform 0.3s ease",
    },
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel product={product} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2">{product.name}</div>
            {/* PRODUCT SUBTITLE */}
            {/* <div className="text-lg font-semibold mb-5">{product.name}</div> */}
            {/* PRODUCT PRICE */}
            <div className="text-lg font-semibold">
              Price : Ksh {product.price}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* ADD TO CART BUTTON START */}
            <button
              onClick={handleButtonClick}
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Click To Order
            </button>
            {/* ADD TO CART BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">{product.productdetails}</div>
              <div className="text-md mb-5">{product.productdetails}</div>
            </div>
          </div>

          {/* right column end */}
        </div>
      </Wrapper>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        limit={1}
        style={toastOptions.toastContainerStyle}
        toastStyle={toastOptions.toastStyle}
        progressStyle={toastOptions.progressBarStyle}
      />
    </div>
  );
};

export default ProductDetails;
