'use client';
import PizzaCard from '../../components/Card/PizzaCard';
import React, { useEffect, useRef, useState } from 'react';
import BargerCard from '../../components/Card/BurgerCard';
import BeveragesCard from '../../components/Card/BeveragesCard';
import SandwichCard from '../../components/Card/SandwichCard';

const Page = () => {
  const pizzaRef = useRef(null);
  const burgerRef = useRef(null);
  const sandwichRef = useRef(null);
  const beveragesRef = useRef(null);
  const [error, setError] = useState(null);
  const [pizzaData, setPizzaData] = useState([]);
  const [burgerData, setBurgerData] = useState([]);
  const [sandwichData, setSandwichData] = useState([]);
  const [beveragesData, setBeveragesData] = useState([]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzaResponse = await fetch('/api/pizza');
        const burgerResponse = await fetch('/api/burger');
        const sandwichResponse = await fetch('/api/sandwich');
        const beveragesResponse = await fetch('/api/beverages');

        if (!pizzaResponse.ok || !burgerResponse.ok || !sandwichResponse.ok || !beveragesResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const pizzaData = await pizzaResponse.json();
        const burgerData = await burgerResponse.json();
        const sandwichData = await sandwichResponse.json();
        const beveragesData = await beveragesResponse.json();

        // console.log(pizzaData, burgerData, sandwichData, beveragesData);

        // Extract the data from the response using the correct keys
        setPizzaData(Array.isArray(pizzaData.allPizza) ? pizzaData.allPizza : []);
        setBurgerData(Array.isArray(burgerData.allburger) ? burgerData.allburger : []); // Corrected key
        setSandwichData(Array.isArray(sandwichData.allsandwich) ? sandwichData.allsandwich : []); // Corrected key
        setBeveragesData(Array.isArray(beveragesData.allbeverages) ? beveragesData.allbeverages : []); // Corrected key
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  
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

      <div className="flex flex-col flex-wrap px-5 w-full">
        <h1 className='text-xl py-1' ref={pizzaRef}>PIZZA</h1>
        <div className="PIZZA flex w-full mx-auto flex-wrap px-auto border-t-[1px] mb-10">
          {Array.isArray(pizzaData) && pizzaData.map((product, index) => (
            <PizzaCard key={index} product={product} />
          ))}
        </div>
        <h1 className='text-xl py-1' ref={burgerRef}>BURGER</h1>
        <div className="BURGER flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          {Array.isArray(burgerData) && burgerData.map((product, index) => (
            <BargerCard key={index} product={product} />
          ))}
        </div>
        <h1 className='text-xl py-1' ref={sandwichRef}>SANDWICH</h1>
        <div className="SANDWICH flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          {Array.isArray(sandwichData) && sandwichData.map((product, index) => (
            <SandwichCard key={index} product={product} />
          ))}
        </div>
        <h1 className='text-xl py-1' ref={beveragesRef}>BEVERAGES</h1>
        <div className="BEVERAGES flex w-full mx-auto gap-auto flex-wrap px-auto border-t-[1px] mb-10">
          {Array.isArray(beveragesData) && beveragesData.map((product, index) => (
            <BeveragesCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;