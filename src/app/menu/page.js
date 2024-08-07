import MenuCard from '@/components/Card/PizzaCard'
import React from 'react'
import BargerCard from '@/components/Card/BurgerCard'

const page = () => {
  const sampleProduct = {
    image: 'https://as2.ftcdn.net/v2/jpg/06/07/04/41/1000_F_607044129_mlPAREptH5szQjdJ8cku2tC718zawrxu.webp',
    name: 'Delicious Pizza',
    description: 'A tasty pizza with fresh ingredients. its a very delicious pizza with a lot of cheese and toppings on it.',  
    sizes: [
        { name: 'Regular',  price: 100 },
        { name: 'Medium', price: 357 },
        { name: 'Large',  price: 390 }
    ],
    crust: [
      { name: 'New Hand Tossed', price: 5 },
      { name: '100% Wheat Thin Crust', price: 7 },
      { name: 'Cheese Burst', price: 10 },
      { name: 'Fresh Pan Pizza', price: 13 }
    ],
    quantity: [1, 2, 3, 4, 5],
  };
  
  const sampleProduct2 = {
    image: '/img/burger.avif',
    name: 'Delicious Burger',
    description: 'A tasty burger with fresh ingredients. It is a very delicious burger with a lot of cheese and toppings on it.',
    price: 100,  
    quantity: [1, 2, 3, 4, 5], // Quantity options
  };

  return (
    <div className='lg:p-10 font-Ubuntu w-screen bg-white text-black dark:bg-black dark:text-white'>
      <h1 className='text-center'>All product</h1>
      <div className="flex gap-4">
        <MenuCard product={sampleProduct}/>
        <BargerCard product={sampleProduct2}/>
      </div>

    </div>
  )
}

export default page