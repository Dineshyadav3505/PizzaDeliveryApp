'use client'; // Corrected typo

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Button/Input'; // Adjust the path as necessary
import Image from 'next/image';

const Page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ checked, setChecked ] = React.useState(false);
  const sumbit = () => {
    setChecked(!checked);
  }

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setChecked(false);
  };

  return (
    <div className='flex w-full justify-center items-center px-2 py-10 lg:px-20 lg:py-16'>
      <div className="rounded-xl lg:flex bg-zinc-900 w-full px-6 lg:px-10 py-8 gap-3 space-y-4">
        <div className="w-full py-16 pl-7">
          <h4 className='text-white font-first text-2xl lg:text-4xl font-light'>Create an account</h4>
          <h4 className='text-white font-first text-xs mt-4 font-light'>
            Already have an account? <Link href="/login" className='text-blue-600 underline'>Login</Link>
          </h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full  space-y-5 ">
              <div className="lg:flex w-[100%] gap-1 mt-10">
                <Input 
                  name="First name" 
                  required={true} 
                  register={register}
                  placeholder="First name" 
                  className="w-full lg:w-72"
                />
                <Input 
                  name="Last name" 
                  required={true} 
                  register={register}
                  placeholder="Last name" 
                  className=" w-full lg:w-72 "
                />
              </div>

              <Input 
                name="Phone number" 
                type="number"
                required={true} 
                register={register}
                placeholder="Phone number"
                className="w-full mb-6"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
              />

              <button type="submit" className="bg-zinc-800 w-full block hover:text-white  hover:bg-black text-[#a9a8a8] py-1 px-4 rounded">
                Submit
              </button>
              

            </div>
          </form>

          <div className="pt-6 text-center">
            <Link href="/terms" className="text-blue-600 underline text-xs ml-1">Terms of Service </Link>
            <span className="text-white text-xs ml-1">and</span>
            <Link href="/privacy" className="text-blue-600 underline text-xs ml-1">Privacy Policy</Link>
          </div>

        </div>

        <div className="rounded-xl hidden lg:block bg-zinc-900 h-full w-full overflow-hidden">
          <Image className='rounded-xl' src="/img/logoimg.JPG" width={500} height={500} alt="" />
        </div>
      </div>


    </div>
  );
};

export default Page;