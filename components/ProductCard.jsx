import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({product}) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="transform overflow-hidden bg-white duration-200
      hover:scale-105 cursor-pointer"
      >
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">Ksh {product.price}</p>
            <p className="ml-auto text-base font-medium text-green-500">
              15% off
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
