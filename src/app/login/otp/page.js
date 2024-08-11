'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OTPPage = () => {
    const { handleSubmit } = useForm();
    const [otp, setOtp] = useState(Array(6).fill('')); // Initialize an array with 6 empty strings
    const [error, setError] = useState(false); // State to manage error visibility
    const router = useRouter();

    useEffect(() => {
        // Retrieve the data from local storage
        const phoneNumber = localStorage.getItem('phoneNumber');
        const lastname = localStorage.getItem('lastname');
        const firstname = localStorage.getItem('firstname');
        if (!phoneNumber ||!lastname ||!firstname) {
            router.push('/signin'); // Redirect to the home page if data is not available
        }
        console.log(phoneNumber, lastname, firstname);
    }, []);

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input if the current one is filled
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const onSubmit = () => {
        const otpString = otp.join('');
        console.log("OTP submitted:", otpString);

        // Simulate OTP validation (replace this with your actual validation logic)
        if (otpString === "123456") { // Example of a valid OTP
            setError(false);
            router.push('/menu')
            // Handle successful OTP submission (e.g., redirect)
            // router.push('/next-page'); // Example redirection
        } else {
            setError(true); // Show error if OTP is incorrect
        }
    };

    return (
        <div className='flex w-full bg-white text-black dark:bg-black dark:text-white justify-center items-center px-2 py-10 lg:px-20 lg:py-16'>
            <div className="rounded-xl lg:flex bg-[#444141] w-full px-6 lg:px-10 py-8 gap-3 space-y-4">
                <div className="w-full py-16">
                    <h4 className='text-white font-first text-2xl lg:text-4xl font-light text-center'>Enter OTP</h4>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="flex justify-center space-x-2 mt-10">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    maxLength={1}
                                    className={` w-8 h-8 lg:w-12 lg:h-12 text-center text-2xl border rounded focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                                />
                            ))}
                        </div>
                        {error && <p className="text-red-500 text-center mt-2">Invalid OTP. Please try again.</p>}

                        <button
                            type="submit"
                            className="bg-zinc-800 w-full block hover:text-white hover:bg-black text-[#a9a8a8] py-2 px-4 rounded mt-16"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="rounded-xl hidden lg:block h-full w-full overflow-hidden">
                    <Image className='rounded-xl' src="/img/logoimg.JPG" width={500} height={500} alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default OTPPage;