import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center px-5 py-5 lg:py-16 lg:px-10 bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-zinc-100 dark:bg-zinc-800 w-full rounded-md">
        <h5 className='text-center font-code text-2xl p-5'>About Us</h5>
        <p className='text-sm font-Ubuntu px-5'>
          Welcome to The Foodie Cafe, your go-to destination for delicious pizzas, burgers, sandwiches, and a variety of refreshing beverages. 
          Our café is dedicated to providing a warm and inviting atmosphere where food lovers can indulge in their favorite meals.
        </p>
        <p className='text-sm font-Ubuntu px-5 py-2'>
          At The Foodie Cafe, we believe in using only the freshest ingredients to prepare our dishes, ensuring that every bite is packed with flavor. 
          Our team is passionate about food and committed to delivering exceptional service to make your dining experience memorable.
        </p>
        <p className='text-sm font-Ubuntu px-5 py-2'>
          Join us for a meal, and let us take you on a culinary journey that satisfies your cravings and delights your taste buds!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;