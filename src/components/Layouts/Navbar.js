'use client'
import React, { useState } from 'react'
import Button1 from '../Button/Button1'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ThemeSwitcher from '../Button/Them';

const Navbar = () => {

  const pathname = usePathname();
  const [hover, setHover] = useState(false);
  
  return (
    <header>
        <div className="py-6 w-screen sticky lg:px-5 dark:bg-slate-300 bg-[#000000] flex items-center overflow-x-hidden justify-between">
          {/* Logo and Name  */}
            <Link href="/" className='flex gap-2 items-end select-none'> 
              <h1 className='text-xl font-logo text-white'>The Foodies Cafe</h1>
            </Link>

            <div className="lg:flex gap-16 hidden">
              <Link href='/'          className={`font-first text-sm hover:text-white ${pathname === '/' ? 'text-white' : 'text-zinc-600'}`}>Home</Link>
              <Link href='/menu'      className={`font-first text-sm hover:text-white ${pathname === '/menu' ? 'text-white' : 'text-zinc-600'}`}>Menu</Link>
              <Link href='/cart'      className={`font-first text-sm hover:text-white ${pathname === '/cart' ? 'text-white' : 'text-zinc-600'} relative`}>Cart 
                <span className={`absolute -top-2 -right-4 py-1 px-1 rounded-full text-xs ${pathname === '/cart' ? 'text-white' : 'text-zinc-600'} flex justify-center items-center`}>2</span>
              </Link>
              <Link href='/contactus' className={`font-first text-sm hover:text-white ${pathname === '/contactus' ? 'text-white' : 'text-zinc-600'}`}>Contact Us</Link>
            </div>

            <div className="flex gap-4 ">
              <ThemeSwitcher />
            
              <div className="lg:flex gap-4 px-0 hidden">
                <Button1 label="Sign In" href="/signin" img="img/signin.svg" />
                <Button1 label="Log In"  href="/login" img="img/login.svg" bg="#7c5c13" />
              </div>
            </div>

            <div className="lg:hidden">
              <span className='block w-9 overflow-hidden rounded-full'>
                <Image 
                  src="/img/admin.JPG" // Local path or external URL
                  alt=""
                  width={500} // Required for layout stability
                  height={300} // Required for layout stability
                />
              </span>
            </div>

        </div>
    </header>
  )
}

export default Navbar