import LaptopCard from "@/components/LaptopCard";
import Wrapper from "@/components/Wrapper";
import data from "@/utils/data";
import React from "react";
const laptops = () => {
  return (
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div
          className="text-[28px] md:text-[34px] mb-5 font-semibold
           leading-tight"
        >
          Laptops
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
px-5 md:px-0"
      >
        {data.products.map((product) => (
          <LaptopCard product={product} key={product.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default laptops;
