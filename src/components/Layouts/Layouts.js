import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layouts = ({children}) => {
  return (
    <div className=''>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </div>
  )
}

export default Layouts