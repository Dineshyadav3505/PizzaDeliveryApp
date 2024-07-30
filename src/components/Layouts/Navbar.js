import React from 'react'
import Button1 from '../Button/Button1'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
        <div className="py-5 mx-auto px-7 flex items-center justify-between">
            <Link href="/" >the Foodie cafe</Link>

            <div className="flex bg-red-700 ">
                

            </div>

            <div className="flex gap-2">
                <Button1 label="Sign In" href="/signin" img="img/signin.svg" />
                <Button1 label="Log In"  href="/login" img="img/login.svg" bg="#7c5c13" />
            </div>
        </div>
    </header>
  )
}

export default Navbar