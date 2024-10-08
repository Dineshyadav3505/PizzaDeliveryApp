'use client'
import React, { useContext, useState } from 'react'
import Button1 from '../Button/Button1'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ThemeSwitcher from '../Button/Them';
import { CartContext } from '../../utils/ContextReducer';

const Navbar = () => {

  const pathname = usePathname();
  const [hover, setHover] = useState(false);
  const {state} = useContext(CartContext)
  
  return (
    <header>
        <div className="py-6 px-3 w-screen sticky font-Ubuntu lg:px-5 bg-white text-black dark:bg-black dark:text-white flex items-center overflow-x-hidden justify-between">
          {/* Logo and Name  */}
            <Link href="/" className='flex gap-2 items-end select-none'> 
              <h1 className='text-xl font-logo'>The Foodies Cafe</h1>
            </Link>

            <div className="lg:flex gap-16 hidden">
              <Link href='/'          className={`font-first text-sm ${pathname === '/'     ? 'font-bold' : 'font-light'}`}>Home</Link>
              <Link href='/menu'      className={`font-first text-sm ${pathname === '/menu' ? 'font-bold' : 'font-light'}`}>Menu</Link>
              <Link href='/cart'      className={`font-first text-sm ${pathname === '/cart' ? 'font-bold' : 'font-light'} relative`}>Cart 
                <span className={`absolute -top-2 -right-4 py-1 px-1 rounded-full text-xs ${pathname === '/cart' ? 'font-bold' : 'font-light'} flex justify-center items-center`}>{state.length}</span>
              </Link>
              <Link href='/contact' className={`font-first text-sm ${pathname === '/contact' ? 'font-bold' : 'font-light'}`}>Contact Us</Link>
            </div>

            <div className="flex gap-4 items-center lg:px-0 ">
              <ThemeSwitcher />
            
              <div className="lg:flex gap-4 px-0 hidden">
                <Button1 label="Sign In" href="/signin" img="img/LightSignup.svg" img2="img/DarkSignup.svg" />
                <Button1 label="Log In"  href="/login"  img="img/LightLogin.svg" img2="img/DarkLogin.svg" />
              </div>

              <div className="lg:hidden">
                <span className='block w-9 overflow-hidden rounded-full'>
                  <Image 
                    src="/img/admin.JPG" // Local path or external URL
                    alt="Logo"
                    width={500} // Required for layout stability
                    height={300} // Required for layout stability
                    priority={true} // Add this line
                  />
                </span>
              </div>
            </div>
        </div>

        <div className=" fixed w-full z-50  lg:hidden bottom-0 left-0 bg-white text-black dark:bg-black dark:text-white border-t-[.1px]">
          <div className="flex px-2 justify-around items-center py-4">
            <Link href='/' className=' flex flex-col justify-center items-center font-first text-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
              Home
            </Link>
            <Link href='/menu' className='flex flex-col justify-center items-center font-first text-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
            Menu
            </Link>
            <Link href='/cart' className='flex flex-col justify-center items-center font-first text-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              Cart
            </Link>
            <Link href='/contact' className='flex flex-col justify-center items-center font-first text-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Order
            </Link>
          </div>
        </div>
    </header>
  )
}

export default Navbar