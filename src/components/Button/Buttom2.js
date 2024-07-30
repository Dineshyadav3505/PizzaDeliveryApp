import React from 'react'
import Link from 'next/link'

const Buttom2 = ({href, lable}) => {
  return (
    <>
    <Link 
    href={href}
    className='px-2 py-1 w-full hover:text-zinc-100 text-xl font-first inline-block font-medium text-zinc-600 uppercase'
    > 
    {lable}
    </Link>
    </>    
  )
}

export default Buttom2