import MenuCard from '@/components/Card/MenuCard'
import React from 'react'

const page = () => {
  const sampleProduct = {
    image: 'https://as2.ftcdn.net/v2/jpg/06/07/04/41/1000_F_607044129_mlPAREptH5szQjdJ8cku2tC718zawrxu.webp',
    name: 'Delicious Pizza',
    description: 'A tasty pizza with fresh ingredients.',
    sizes: [
        { name: 'Small',  price: 100 },
        { name: 'Medium', price: 357 },
        { name: 'Large',  price: 390 }
    ],
    crust: [
      { name: 'Thin', price: 5 },
      { name: 'Thick', price: 7 },
      { name: 'Stuffed', price: 10 }
    ],
    quantity: [1, 2, 3, 4, 5],
  };

  return (
    <div className='lg:p-10 font-Ubuntu w-screen bg-white text-black dark:bg-black dark:text-white'>
      <h1 className='text-center'>All product</h1>
      <div className="flex gap-4">
        <MenuCard product={sampleProduct}/>
      </div>

    </div>
  )
}

export default page