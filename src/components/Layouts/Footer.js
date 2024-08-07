import React from 'react'

const Footer = () => {
  const explore=[
    {lable:'Home', href:'/'},
    {lable:'Menu', href:'/menu'},
    {lable:'Cart', href:'/cart'},
    {lable:'Contact Us', href:'/contact'},
  ]

  const PRODUCT = [
    {lable:'Pizza', href:'/'},
    {lable:'Burger', href:'/'},
    {lable:'Pasta', href:'/'},
    {lable:'Sandwich', href:'/'},
  ]

  const FOLLOW = [
    {lable:'Instagram', href:'/'},
    {lable:'Facebook', href:'/'},
    {lable:'twitter', href:'/'},
  ]
  return (
    <>
    <div className="pt-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 font-Ubuntu font-light w-full">
          {/* IMAGES */}
          <div className=" w-full px-8">
            <img className='' src="/img/png.png" alt="logo" width="100" height="100" />
          </div>
        {/* EXPLORE */}
        <div className="w-full ">
          <h6 className='text-[10px] px-5 mb-7'>EXPLORE</h6>
          <ul className='flex  flex-col gap-2'>
            {explore.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='text-lg hover:rounded px-5 py-1'>{item.lable}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* PRODUCT */}
        <div className=" w-full ">
          <h6 className='text-[10px] px-5 mb-7'>PRODUCT</h6>
          <ul className='flex  flex-col gap-2'>
            {PRODUCT.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='text-lg hover:bg-zinc-700 hover:rounded px-5 py-1'>{item.lable}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* FOLLOW */}
        <div className="w-full">
          <h6 className='text-[10px] px-5 mb-7'>FOLLOW US</h6>
          <ul className='flex flex-col gap-2'>
            {FOLLOW.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='text-lg hover:bg-zinc-700 hover:rounded capitalize px-5 py-1'>{item.lable}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* RESOURCES */}
        <div className="w-full">
          <h6 className='text-[10px] px-5 mb-7'>RESOURCES</h6>
          <a href="/" className=' text-xl font-logo capitalize px-5 py-1'>the foodie cafe</a>
        </div>
      </div>

      {/* Buttom */}
      <div className="font-Ubuntu font-light mt-14 flex justify-between px-10 py-2 ">
        <h6 className=' text-[10px]'> ©itz_3505 2024</h6>
        <h6 className=' text-[10px] uppercase'> PRIvacy POLICY</h6>
      </div>
    </div>
    </>
  )
}

export default Footer