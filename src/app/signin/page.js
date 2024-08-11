'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Button/Input'; // Adjust the path as necessary
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data) => {
    localStorage.setItem('phoneNumber', data.phone);
    localStorage.setItem('lastname', data.lastname);
    localStorage.setItem('firstname', data.firstname);
    router.push('login/otp');
  };

  return (
    <div className='flex w-full bg-white text-black dark:bg-black dark:text-white justify-center items-center px-2 py-10 lg:px-20 lg:py-16'>
      <div className="rounded-xl lg:flex bg-[#444141] w-full px-6 lg:px-10 py-8 gap-3 space-y-4">
        <div className="w-full py-16 pl-7">
          <h4 className='text-white font-first text-2xl lg:text-4xl font-light'>Create an account</h4>
          <h4 className='text-white font-first text-xs mt-4 font-light'>
            Already have an account? <Link href="/login" className='text-blue-600 underline'>Login</Link>
          </h4>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="w-full space-y-5">
              <div className="lg:flex w-full gap-1 mt-10">
                <Input
                  label="First Name"
                  name="firstname"
                  placeholder="Enter your first name"
                  required={true}
                  register={register}
                  validationRules={{
                    minLength: {
                      value: 2,
                      message: 'First name must be at least 2 characters',
                    },
                    maxLength: {
                      value: 20,
                      message: 'First name cannot exceed 20 characters',
                    },
                  }}
                  error={errors.firstname}
                  className="w-full lg:w-72"
                />

                <Input
                  label="Last Name"
                  name="lastname"
                  placeholder="Enter your last name"
                  required={true}
                  register={register}
                  validationRules={{
                    minLength: {
                      value: 2,
                      message: 'Last name must be at least 2 characters',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Last name cannot exceed 20 characters',
                    },
                  }}
                  error={errors.lastname}
                  className="w-full lg:w-72"
                />
              </div>

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required={true}
                register={register}
                validationRules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Phone number must be numeric',
                  },
                  minLength: {
                    value: 10,
                    message: 'Phone number must be at least 10 digits',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Phone number cannot exceed 10 digits',
                  },
                }}
                error={errors.phone}
                className="w-full"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
              />

              <button
                type="submit"
                className="bg-zinc-800 w-full block hover:text-white hover:bg-black text-[#a9a8a8] py-2 px-4 rounded mt-6"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="pt-6 text-center">
            <Link href="/terms" className="text-blue-600 underline text-xs ml-1">Terms of Service</Link>
            <span className="text-white text-xs ml-1">and</span>
            <Link href="/privacy" className="text-blue-600 underline text-xs ml-1">Privacy Policy</Link>
          </div>
        </div>

        <div className="rounded-xl hidden lg:block  h-full w-full overflow-hidden">
          <Image className='rounded-xl' src="/img/logoimg.JPG" width={500} height={500} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Page;