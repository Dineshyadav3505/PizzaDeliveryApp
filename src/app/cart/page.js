'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { CartContext } from '@/utils/ContextReducer';

const Page = () => {
  const {state} = useContext(CartContext)
  console.log(state)
  const increment = () => {
    console.log("+1")
  }
  const decrement = () => {
    console.log("-1")
  }
  const removeItem = (index) => {
    console.log("Remove")
  }
  console.log(state)


  return (
    <div className='lg:p-10 font-Ubuntu w-screen bg-white text-black dark:bg-black dark:text-white'>
      <div className="p-5 lg:flex w-full">
        <div className="w-full lg:w-[70%]">
          <h6 className='text-4xl py-5'>Cart</h6>
          <div className="border-y-[1px] border-zinc-500">
            {state.length > 0 ? (
              state.map((item, index) => (
                item && item.name ? ( // Check if item exists and has a name
                <div className=" relative">
                  <div key={index} className="my-1  py-2 flex gap-5  w-full">
                    <div className="h-36 w-44 lg:h-44 flex justify-center items-center shadow-md rounded-md border-zinc-500 border-[0.6px]">
                      <img className='h-full w-full object-contain' src={item.image} alt="product image" />
                    </div>
                    {/* Name Size Crust */}
                    <div className="flex flex-col lg:flex-row justify-between w-[60%] ">
                      <div className="flex lg:h-44  lg:w-full flex-col lg:space-y-2">
                        <h6 className='py-2 w-72'>{item.name}</h6>
                        {item.sizes && <p className='text-sm'>Size: {item.sizes.name}</p>}
                        {item.crust && <p className='text-sm'>Crust: {item.crust.name}</p>}
                      </div>

                      <div className="flex lg:h-44 w-full lg:flex-col py-3 space-y-2">
                        <div className="flex w-full lg:flex-col items-center gap-5 justify-between">
                          {/* Price */}
                          <p className='text-base'>Price: {item.price} </p>

                          {/* Quantity */}
                          <div className=" border-[.5px] px-1 flex justify-center items-center gap-3">
                            <span onClick={decrement} className='h-4 w-4 flex justify-center items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                              </svg>
                            </span>
                            <p>{item.quantity}</p>
                            <span onClick={increment} className='h-4 w-4 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            </span>
                          </div>

                            {/* delete  */}
                          <span className=' absolute top-3 right-3'>
                            <svg onClick={removeItem} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ) : null // Render nothing if item is invalid
              ))
            ) : (
              <div className="py-10 flex flex-col justify-center items-center">
                <p className='text-xl text-center text-zinc-500'>No Item</p>
                <p className='text-sm text-center text-zinc-500'>Add Something to the Cart</p>
                <a className='text-sm text-center text-blue-500 block py-3' href="/menu">Add Item</a>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[30%] lg:px-20">
          <h5 className='text-2xl py-2 font-Ubuntu font-light'>Payment Methods</h5>
          <p className='text-sm text-zinc-500 font-Ubuntu font-light'>We accept payment via Credit Card, UPI, Cash.</p>
          <p className='text-sm text-zinc-500 font-Ubuntu font-light'>Payment powered by Splitit, Google Pay, Phone Pay.</p>

          <div className="flex flex-wrap gap-3 py-3 items-center">
            <Image src="/img/visa.png" alt="Visa" width={30} height={20} />
            <Image src="/img/master.png" alt="MasterCard" width={30} height={20} />
            <Image src="/img/googlepay.png" alt="Google Pay" width={30} height={20} />
          </div>

          <button className='bg-black text-white dark:text-black dark:bg-white w-full py-1 rounded shadow-sm mt-6 '>
            Check Out 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;