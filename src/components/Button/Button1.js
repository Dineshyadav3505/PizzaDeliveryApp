import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Button1 = ({ img, img2, label, bg, href}) => {
  return (
    <Link
        href={href}
      className={`flex  hover:scale-110 duration-500 gap-2 ${bg ? `bg-[${bg}]` : 'bg-transparent'} items-center py-2 px-4 border-[1px] border-zinc-900 dark:border-white rounded-3xl`}
    >
      <h4 className={`text-xs font-main`}>{label}</h4>
      <Image 
        src={img} // Local path or external URL
        alt="Logo"
        width={15} // Required for layout stability
        height={15} // Required for layout stability
        priority={true}
        className='hidden dark:block'
      />
      <Image 
        src={img2} // Local path or external URL
        alt="Logo"
        width={15} // Required for layout stability
        height={15} // Required for layout stability
        priority={true}
        className='dark:hidden'
      />

    </Link>
  );
};

export default Button1;