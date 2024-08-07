import React from 'react'

const page = () => {
  return (
    <div className=" flex justify-center items-center px-5 py-5 lg:py-16 lg:px-10 bg-white text-black dark:bg-black dark:text-white">
      <div className=" bg-zinc-100 dark:bg-zinc-800 w-full rounded-md">
        <h5 className='text-center font-code text-2xl p-5'>Contact Us </h5>
        <div className="lg:flex">
          <div className="w-full px-5 lg:px-16 py-10">
            <h6 className='text-sm font-Ubuntu '>Have any feedback or queries? <br /> We''d love to hear from you. Write to us at</h6>
            <h2 className='text-base text-blue-400 lowercase py-2 font-semibold'>theFoodiescafecontact@gmail.com</h2>
            <p className='text-sm font-Ubuntu py-1'>Try our delicious treats and Rescue hunger with The Foodies Cafe. </p>
            <a className='text-sm font-Ubuntu' href='/cafe'>Locate Nearby The Foodies Cafe nearest to you.</a>
          </div>
          <div className="w-full">
            <div className="w-full px-5 lg:px-16 py-10">
              <h6 className='text-xl font-Ubuntu '>Customer Care Number</h6>
              <h2 className='text-base text-blue-400 lowercase mb-3'>+91 98961-89189, +91 70271-89189</h2>
              <p className='text-xl font-Ubuntu py-1'>Contact Address</p>
              <p className='text-sm font-Ubuntu leading-6'> The Foodies Cafe India, <br /> Bus-Stand Sihma, <br />Opposite Yadav Medical Store, <br />Sihma, MohanderGarh - 123028, Hry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page