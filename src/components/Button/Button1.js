import Link from 'next/link';
import React from 'react';

const Button1 = ({ img, img2, label, bg, href}) => {
  return (
    <Link
        href={href}
      className={`flex  hover:scale-110 duration-500 gap-2 ${bg ? `bg-[${bg}]` : 'bg-transparent'} items-center py-2 px-4 border-[1px] border-zinc-900 dark:border-white rounded-3xl`}
    >
      <h4 className={`text-xs font-main`}>{label}</h4>
      <img src={img} alt="icon" className="w-4 select-none hidden dark:block" />
      <img src={img2} alt="icon" className="w-4 select-none dark:hidden" />
    </Link>
  );
};

export default Button1;