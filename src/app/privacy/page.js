import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center px-5 py-5 lg:py-16 lg:px-10 bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-zinc-100 dark:bg-zinc-800 w-full rounded-md">
        <h5 className='text-center font-code text-2xl p-5'>Privacy Policy</h5>
        <p className='text-sm font-Ubuntu px-5'>
          At The Foodie Cafe, we value your privacy. This policy outlines how we collect, use, and protect your information.
        </p>
        {/* Additional sections can be added here as per the structure above */}
      </div>
    </div>
  );
}

export default PrivacyPolicy;