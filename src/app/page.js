import BookingCart from '@/components/Card/BookingCart'
import MainImg from '@/components/Layouts/MainImg'
import React from 'react'

const page = () => {

  const ans=[
    {lable:"Delivering Happiness to Your Doorstep",               title1:"What's better than enjoying a delicious, freshly prepared meal in the comfort of your own home with loved ones?", title2:"At Foodie Cafe, we believe that good food has the power to bring people together and create lasting memories.", title3:"", title4:""},
    {lable:"Celebrating Life's Moments with Flavorful Bites",     title1:"Whether you're celebrating a promotion, your child's academic achievement, or simply want to surprise your partner after a long day,", title2:"a mouthwatering dish from Foodie Cafe is all you need to make the occasion special", title3:"With just a few clicks or a quick call, you can have your favorite meal delivered straight to your doorstep.", title4:""},
    {lable:"Something for Every Palate",                          title1:"At Foodie Cafe, we cater to diverse tastes and preferences.", title2:"Our menu features a wide range of vegetarian and non-vegetarian options,", title3:"as well as sides and desserts to satisfy every craving.", title4:"From classic comfort foods to innovative fusion dishes, we have something to delight every foodie."},
    {lable:"Freshness and Quality Guaranteed",                    title1:"We believe that great food starts with the finest ingredients.", title2:"That's why we use only the freshest, high-quality produce and meats in our dishes.", title3:"Our chefs prepare each meal with care and attention to detail, ensuring that every bite is bursting with flavor and made with love.", title4:""},
    {lable:"Convenience at Your Fingertips",                      title1:"In today's fast-paced world, time is precious. That's why we've made ordering from Foodie Cafe as easy and convenient as possible.", title2:"Whether you're at home, at work, or on the go, you can place your order through our website, mobile app, or with a simple phone call.", title3:"We'll have your meal delivered to your location in no time.", title4:""},
  ]


  return (
    <>
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <div className="min-h-screen cursor-none">
        <MainImg/>
      </div>
      <div className=" px-5 lg:px-10 flex justify-center items-center flex-wrap my-16">
        <BookingCart/>
      </div>

      <div className=" px-5 lg:px-10 space-y-1 pb-10">
        {ans.map((item, index) => (
          <>
            {item.lable && <h4 className='text-xl font-Ubuntu lg:text-2xl pt-8 pb-3'>{item.lable}</h4>}
            {item.title1 && <p className='text-sm lg:text-base'>{item.title1}</p>}
            {item.title2 && <p className='text-sm lg:text-base'>{item.title2}</p>}
            {item.title3 && <p className='text-sm lg:text-base'>{item.title3}</p>}
            {item.title4 && <p className='text-sm lg:text-base'>{item.title4}</p>}
          </>
        ))}
      </div>



    </div>
    </>
  )
}

export default page