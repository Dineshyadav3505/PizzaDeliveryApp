'use client'
import React, { useState } from 'react'
import Button1 from '../Button/Button1'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();

  
  return (
    <header>
        <div className="py-6 w-screen px-5 flex items-center overflow-x-hidden justify-between bg-[#000000]">
          {/* Logo and Name  */}
            <Link href="/" className='flex gap-2 items-end select-none'> 
              <h1 className='text-xl font-logo text-white'>The Foodies Cafe</h1>
            </Link>

            <div className="lg:flex gap-16 hidden">
              <Link href='/'          className={`font-first text-sm hover:text-white ${pathname === '/' ? 'text-white' : 'text-zinc-600'}`}>Home</Link>
              <Link href='/menu'      className={`font-first text-sm hover:text-white ${pathname === '/menu' ? 'text-white' : 'text-zinc-600'}`}>Menu</Link>
              <Link href='/cart'      className={`font-first text-sm hover:text-white ${pathname === '/cart' ? 'text-white' : 'text-zinc-600'}`}>Cart</Link>
              <Link href='/contactus' className={`font-first text-sm hover:text-white ${pathname === '/contactus' ? 'text-white' : 'text-zinc-600'}`}>Contact Us</Link>
            </div>

            <div className="lg:flex gap-4 hidden">
                <Button1 label="Sign In" href="/signin" img="img/signin.svg" />
                <Button1 label="Log In"  href="/login" img="img/login.svg" bg="#7c5c13" />
            </div>

            <div className="lg:hidden">
              <span className='block w-9 overflow-hidden rounded-full'>
                <img className='scale-150 object-top' src="/img/admin.JPG" alt="Menu Icon" />
              </span>
            </div>

        </div>
    </header>
  )
}

export default Navbar