import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center px-5 py-5 lg:py-16 lg:px-10 text-center bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-zinc-100 dark:bg-zinc-800 w-full rounded-md p-5 lg:px-16">
        <h1 className='text-2xl font-bold text-center'>Privacy Policy for The Foodie Cafe</h1>
        
        <p className='text-sm font-Ubuntu py-2'>
          At The Foodie Cafe, accessible from yourwebsite.com, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by The Foodie Cafe and how we use it.
        </p>

        <p className='text-sm font-Ubuntu py-2'>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Log Files</h2>
        <p className='text-sm font-Ubuntu py-2'>
          The Foodie Cafe follows a standard procedure of using log files. These files log visitors when they visit websites. 
          The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
          date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. 
          The purpose of the information is for analyzing trends, administering the site, tracking user's movement on the website, and gathering demographic information.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Cookies</h2>
        <p className='text-sm font-Ubuntu py-2'>
          The Foodie Cafe uses cookies to enhance user experience. Users can choose to decline cookies through their browser settings.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Third Party Privacy Policies</h2>
        <p className='text-sm font-Ubuntu py-2'>
          The Foodie Cafe's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Children's Information</h2>
        <p className='text-sm font-Ubuntu py-2'>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p className='text-sm font-Ubuntu py-2'>
          The Foodie Cafe does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Consent</h2>
        <p className='text-sm font-Ubuntu py-2'>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;