'use client';
import PizzaCard from '../../components/Card/PizzaCard';
import React, { useEffect, useRef, useState } from 'react'
import BargerCard from '../../components/Card/BurgerCard'
import BeveragesCard from '../../components/Card/BeveragesCard';
import SandwichCard from '../../components/Card/SandwichCard';

const page = () => {

  const pizzaRef = useRef(null);
  const burgerRef = useRef(null);
  const sandwichRef = useRef(null);
  const beveragesRef = useRef(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const scrollToSection = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/pizza'); // Ensure the correct path // Ensure the correct path
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const sampleProduct = {
    image: 'https://as2.ftcdn.net/v2/jpg/06/07/04/41/1000_F_607044129_mlPAREptH5szQjdJ8cku2tC718zawrxu.webp',
    name: 'Delicious Pizza',
    description: 'A tasty pizza with fresh ingredients. hfk ikljsdf h dsf  lb slb fajsh  its a very delicious pizza with a lot of cheese and toppings on it.',  
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


  const sampleProduct3 = {
    image: '/img/sandwich.avif',
    name: 'Delicious Sandwich',
    description: 'A tasty burger with fresh ingredients. It is a very delicious burger with a lot of cheese and toppings on it.',
    price: 100,  
    quantity: [1, 2, 3, 4, 5], // Quantity options
  };


  const sampleProduct4 = {
    image: '/img/tea.webp',
    name: 'Delicious Burger',
    description: 'A tasty burger with fresh ingredients. It is a very delicious burger with a lot of cheese and toppings on it.',
    price: 100,  
    sizes: [
      { name: 'Regular',  price: 100 },
      { name: 'Medium', price: 357 },
      { name: 'Large',  price: 390 }
    ],
    quantity: [1, 2, 3, 4, 5], // Quantity options
  };

  return (
    <div className='lg:p-10 font-Ubuntu w-screen bg-white text-black dark:bg-black dark:text-white'>
      <div className="flex underline mb-5">
        <button onClick={() => scrollToSection(pizzaRef)} className="mx-2 p-2 rounded">
            PIZZA
        </button>
        <button onClick={() => scrollToSection(burgerRef)} className="mx-2 p-2 rounded">
            BURGER
        </button>
        <button onClick={() => scrollToSection(sandwichRef)} className="mx-2 p-2 rounded">
            SANDWICH
        </button>
        <button onClick={() => scrollToSection(beveragesRef)} className="mx-2 p-2 rounded">
            BEVERAGES
        </button>
      </div>

      <div className="flex flex-col flex-wrap px-5">
        <h1 className='text-xl py-1' ref={pizzaRef} >PIZZA</h1>
        <div className="PIZZA flex w-full mx-auto flex-wrap px-auto border-t-[1px] mb-10">
          <PizzaCard product={sampleProduct}/>
          <PizzaCard product={sampleProduct}/>
          <PizzaCard product={sampleProduct}/>
          <PizzaCard product={sampleProduct}/>
        </div>
        <h1 className='text-xl py-1' ref={burgerRef} >BURGER</h1>
        <div className="BURGER flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          <BargerCard product={sampleProduct2}/>
          <BargerCard product={sampleProduct2}/>
          <BargerCard product={sampleProduct2}/>
          <BargerCard product={sampleProduct2}/>
        </div>
        <h1 className='text-xl py-1' ref={sandwichRef} >SANDWICH</h1>
        <div className="BURGER flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          <SandwichCard product={sampleProduct3}/>
          <SandwichCard product={sampleProduct3}/>
          <SandwichCard product={sampleProduct3}/>
          <SandwichCard product={sampleProduct3}/>
        </div>
        <h1 className='text-xl py-1' ref={beveragesRef} >BEVERAGES</h1>
        <div className="BEVERAGES flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          <BeveragesCard product={sampleProduct4}/>
          <BeveragesCard product={sampleProduct4}/>
          <BeveragesCard product={sampleProduct4}/>
          <BeveragesCard product={sampleProduct4}/>
        </div>
      </div>

    </div>
  )
}

export default page