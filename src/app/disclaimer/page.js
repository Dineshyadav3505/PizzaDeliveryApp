import React from 'react';

const Disclaimer = () => {
  return (
    <div className="flex justify-center items-center text-center px-5 py-5 lg:py-16 lg:px-10 bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-zinc-100 dark:bg-zinc-800 w-full lg:px-16 rounded-md p-5">
        <h1 className='text-2xl font-bold text-center'>Disclaimer for The Foodie Cafe</h1>
        
        <p className='text-sm font-Ubuntu py-2'>
          If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:theFoodiescafecontact@gmail.com" className='text-blue-400'>theFoodiescafecontact@gmail.com</a>.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Disclaimers for The Foodie Cafe</h2>
        <p className='text-sm font-Ubuntu py-2'>
          All the information on this website - TheFoodieCafe.com - is published in good faith and for general information purposes only. 
          The Foodie Cafe does not make any warranties about the completeness, reliability, and accuracy of this information. 
          Any action you take upon the information you find on this website (The Foodie Cafe), is strictly at your own risk. 
          The Foodie Cafe will not be liable for any losses and/or damages in connection with the use of our website.
        </p>

        <p className='text-sm font-Ubuntu py-2'>
          From our website, you can visit other websites by following hyperlinks to such external sites. 
          While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. 
          These links to other websites do not imply a recommendation for all the content found on these sites. 
          Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
        </p>

        <p className='text-sm font-Ubuntu py-2'>
          Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. 
          Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Consent</h2>
        <p className='text-sm font-Ubuntu py-2'>
          By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

        <h2 className='text-lg font-Ubuntu py-2'>Update</h2>
        <p className='text-sm font-Ubuntu py-2'>
          Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
