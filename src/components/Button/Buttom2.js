import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Buttom2 = ({href, lable}) => {
  return (
    <>
    <Link 
    href={href}
    className='px-2 py-1 w-full hover:bg-zinc-700 text-xl font-main font-medium text-zinc-600 uppercase'
    > 
    {lable}
    </Link>
    </>    
  )
}

export default Buttom2