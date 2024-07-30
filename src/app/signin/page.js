'use client'; // Corrected typo

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Button/Input'; // Adjust the path as necessary

const Page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex w-full justify-center items-center px-2 py-10 lg:px-20 lg:py-16'>
      <div className="rounded-xl bg-zinc-900 w-full px-6 lg:px-10 py-8 gap-3 space-y-4">
        <h4 className='text-white font-first text-2xl lg:text-4xl font-light'>Create an account</h4>
        <h4 className='text-white font-first text-xs font-light'>
          Already have an account? <Link href="/login" className='text-blue-600 underline'>Login</Link>
        </h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" lg:flex gap-4">
            <Input 
              name="First name" 
              required={true} 
              register={register}
              placeholder="First name" 
              className=""
            />
            <Input 
              name="Last name" 
              required={true} 
              register={register}
              placeholder="Last name" 
              className=""
            />
          </div>

          <Input 
            name="email" 
            type="email" 
            required={true} 
            register={register}
            placeholder="Email"
            className=""
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;