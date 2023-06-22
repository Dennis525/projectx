import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';


const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        {/* IMAGE START */}
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
             <img src="macbook1.jpg" alt="" />
        </div>
         {/* IMAGE END */}
        <div className='w-full flex flex-col'>
            <div className="flex flex-col md:flex-row justify-between">
                {/* PRODUCT TITLE */}
                <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                 Apple MacBook Pro
                </div>
                {/* PRODUCT SUBTITLE */}
                <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
                    Laptop
                </div>
                {/* PRODUCT PRICE */}
                <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
                    Price : Ksh 28000
                </div>

            </div>

            {/* PRODUCT SUBTITLE */}
            <div className='text-md font-medium text-black/[o.5] hidden md:block'>
                Laptop
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2 md:gap-10 text-black/[0.5]
                text-sm md:text-md'>
                    <div className='flex items-center gap-1'>
                        
                    </div>
                </div>
                <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem