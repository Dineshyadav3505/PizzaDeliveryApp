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
        <div className="py-6 w-screen sticky font-Ubuntu lg:px-5 bg-white text-black dark:bg-black dark:text-white flex items-center overflow-x-hidden justify-between">
          {/* Logo and Name  */}
            <Link href="/" className='flex gap-2 items-end select-none'> 
              <h1 className='text-xl font-logo'>The Foodies Cafe</h1>
            </Link>

            <div className="lg:flex gap-16 hidden">
              <Link href='/'          className={`font-first text-sm ${pathname === '/'     ? 'font-bold' : 'font-light'}`}>Home</Link>
              <Link href='/menu'      className={`font-first text-sm ${pathname === '/menu' ? 'font-bold' : 'font-light'}`}>Menu</Link>
              <Link href='/cart'      className={`font-first text-sm ${pathname === '/cart' ? 'font-bold' : 'font-light'} relative`}>Cart 
                <span className={`absolute -top-2 -right-4 py-1 px-1 rounded-full text-xs ${pathname === '/cart' ? 'font-bold' : 'font-light'} flex justify-center items-center`}>2</span>
              </Link>
              <Link href='/contact' className={`font-first text-sm ${pathname === '/contact' ? 'font-bold' : 'font-light'}`}>Contact Us</Link>
            </div>

            <div className="flex gap-4 items-center px-4 lg:px-0 ">
              <ThemeSwitcher />
            
              <div className="lg:flex gap-4 px-0 hidden">
                <Button1 label="Sign In" href="/signin" img="img/LightSignup.svg" img2="img/DarkSignup.svg" />
                <Button1 label="Log In"  href="/login"  img="img/LightLogin.svg" img2="img/DarkLogin.svg" />
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


        </div>
    </header>
  )
}

export default Navbar