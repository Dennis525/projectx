import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const ProductDetailsCarousel = ({product}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src={product.image} />
        <img src={product.image} />
        <img src={product.image} />
        {/* <img src="/macbook1.jpg" />
        <img src="/macbook1.jpg" />
        <img src="/macbook1.jpg" /> */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
