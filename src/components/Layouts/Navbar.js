'use client'
import React, { useState } from 'react'
import Button1 from '../Button/Button1'
import Link from 'next/link'
import Buttom2 from '../Button/Buttom2'

const Navbar = () => {

  const [menu, setMenu] = useState(false) 

  return (
    <header>
        <div className="py-6 w-screen px-5 flex items-center justify-between bg-zinc-900">
          {/* Logo and Name  */}
            <Link href="/" className='flex gap-2 items-end'> 
              <h1 className='text-xl font-logo text-white'>The Foodies Cafe</h1>
            </Link>

            <div className="flex bg-red-700 ">

            </div>

            <div className="lg:flex gap-2 hidden">
                <Button1 label="Sign In" href="/signin" img="img/signin.svg" />
                <Button1 label="Log In"  href="/login" img="img/login.svg" bg="#7c5c13" />
            </div>

            <div 
              className="lg:hidden"
              onClick={() => setMenu(!menu)}
            >
              <span className='block w-9 overflow-hidden rounded-full'>
                <img className=' scale-150 object-top'  src="/img/admin.JPG" alt="" />
              </span>
            </div>

            {/* <div 
            className={`absolute z-10 top-20 py-2 lg:hidden ${menu == true ? "w-[100%]" : 'w-[0%]'} duration-1000 right-0 bg-[#000000] h-56 w-full`}

            >
              <Buttom2 href='/' lable='home' />

            </div>   */}

        </div>
    </header>
  )
}

export default Navbar