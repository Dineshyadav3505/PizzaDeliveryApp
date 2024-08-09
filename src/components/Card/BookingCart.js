import Link from 'next/link';
import React from 'react'

const BookingCart = () => {
    const data = [ 
        {img:"/img/menu.png", title:"Our Menu",       description:"Explose are rang of delicious item.", link:"/menu",    linktitle:"Our Menu"},
        {img:"/img/store.png", title:"NearBy Cafe",    description:"Find the Foodies cafe near you",      link:"/",        linktitle:"Find Cafe"},
        {img:"/img/party.png", title:"Birthday Party", description:"Celebrate the birthday in Foodies Cafe", link:"/booking", linktitle:"Book Now"},
        {img:"/img/food.png", title:"Catering",       description:"catering services for any functions", link:"/booking", linktitle:"Book Now"}
    ]
  return (
    <>
    {data.map((item, index) =>(
        <Link href={item.link} className="h-48 w-36 border mx-auto mt-5 lg:h-56 lg:w-56">
            <div className="h-[84%] lg:space-y-2">
                <div className=" h-[63%] w-[66%] mx-auto">
                    {item.img && <img className='p-4 w-full h-full object-contain' src={item.img} alt="" />}
                </div>
                <p className='text-xs text-center px-1 lg:px-5'>{item.title}</p>
                <p className='text-xs text-center px-1 lg:px-5'>{item.description}</p>
            </div>
            <div className="h-[16%] border-t flex justify-center items-center">
                <Link href={item.link} className='text-sm font-Ubuntu text-center'>{item.linktitle}</Link>
            </div>

        </Link>
    ))}
    </>
  )
}

export default BookingCart;