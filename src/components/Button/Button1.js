import Link from 'next/link';
import React from 'react';

const Button1 = ({ img, label, bg, href}) => {
  return (
    <Link
        href={href}
      className={`flex gap-2 ${bg ? `bg-[${bg}]` : 'bg-transparent'} items-center py-2 px-4 border-[1px] rounded-3xl`}
    >
      <h4 className={`text-xs font-main`}>{label}</h4>
      <img src={img} alt="icon" className="w-4" />
    </Link>
  );
};

export default Button1;