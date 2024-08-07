'use client';
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [data, setData] = useState([])

  return (
    <div className='lg:p-10 font-Ubuntu w-screen bg-white text-black dark:bg-black dark:text-white'>
      <div className="p-5 lg:flex w-full">
        <div className=" w-full lg:w-[70%]">
          <h6 className='text-4xl py-5'>Cart</h6>
          <div className=" border-y-[1px] border-zinc-500">
            {data.length > 0 ? 
            (
              <h2>g</h2>
            ):(
              <div className="py-10 flex flex-col justify-center items-center">
                <p className='text-xl text-center text-zinc-500'> No Itme</p>
                <p className='text-sm text-center text-zinc-500'>Add Somthing in Cart </p>
                <a className='text-sm text-center text-blue-500 block py-3' href="/menu"> Add Item</a>
              </div>

            )}
          </div>

        </div>
        <div className="w-full lg:w-[30%] lg:px-20">
          <h5 className='text-2xl py-2 font-Ubuntu font-light '>Payment Methods </h5>
          <p className='text-sm text-zinc-500 font-Ubuntu font-light'>We accept payment via Credit Card, UPI, Cash.</p>
          <p className='text-sm text-zinc-500 font-Ubuntu font-light'>Payment powered by Splitit, Google Pay, Phone Pay.</p>

          <div className=" flex flex-wrap gap-3 py-3 items-center">
            <img className='h-9 ' src="img/visa.png" alt="" />
            <img className='h-9 ' src="img/master.png" alt="" />
            <img className='h-6  ' src="img/googlepay.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page